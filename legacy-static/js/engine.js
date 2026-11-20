/* Core engine: storage, progress, quiz/test renderer, TTS player, timers */
(function () {
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ---------- Storage ---------- */
  const Store = {
    get(k, d) { try { const v = localStorage.getItem('ielts:' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('ielts:' + k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } },
    del(k) { try { localStorage.removeItem('ielts:' + k); } catch (e) { } }
  };

  const Progress = {
    all() { return Store.get('results', {}); },
    get(id) { return this.all()[id]; },
    record(id, info) {
      const all = this.all();
      const prev = all[id] || { attempts: 0, best: 0 };
      all[id] = Object.assign({}, prev, info, {
        attempts: prev.attempts + 1,
        best: Math.max(prev.best || 0, info.score),
        last: info.score,
        date: new Date().toISOString()
      });
      Store.set('results', all);
      return all[id];
    }
  };

  /* ---------- Band conversion ---------- */
  const BANDS = {
    listening: [[39, 9], [37, 8.5], [35, 8], [32, 7.5], [30, 7], [26, 6.5], [23, 6], [18, 5.5], [16, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [0, 2]],
    reading: [[39, 9], [37, 8.5], [35, 8], [33, 7.5], [30, 7], [27, 6.5], [23, 6], [19, 5.5], [15, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [0, 2]],
    readingGT: [[40, 9], [39, 8.5], [37, 8], [36, 7.5], [34, 7], [32, 6.5], [30, 6], [27, 5.5], [23, 5], [19, 4.5], [15, 4], [12, 3.5], [9, 3], [6, 2.5], [0, 2]]
  };
  function band(skill, raw40) {
    const t = BANDS[skill] || BANDS.reading;
    for (const [min, b] of t) if (raw40 >= min) return b;
    return 0;
  }
  function overallBand(scores) {
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    const f = Math.floor(avg), d = avg - f;
    return d < 0.25 ? f : d < 0.75 ? f + 0.5 : f + 1;
  }

  /* ---------- Timer ---------- */
  function createTimer(seconds, onTick, onEnd) {
    let left = seconds, id = null;
    const fmt = s => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
    const t = {
      left: () => left,
      fmt: () => fmt(left),
      start() { if (id) return; id = setInterval(() => { left--; onTick && onTick(left, fmt(left)); if (left <= 0) { t.stop(); onEnd && onEnd(); } }, 1000); onTick && onTick(left, fmt(left)); },
      stop() { clearInterval(id); id = null; },
      reset(s) { t.stop(); left = s == null ? seconds : s; onTick && onTick(left, fmt(left)); },
      running: () => !!id
    };
    return t;
  }
  // global registry so route changes can stop timers / speech
  const Active = { timers: [], cleanup: [] };
  function track(timer) { Active.timers.push(timer); return timer; }
  function onLeave(fn) { Active.cleanup.push(fn); }
  function teardown() {
    Active.timers.forEach(t => t.stop()); Active.timers = [];
    Active.cleanup.forEach(f => { try { f(); } catch (e) { } }); Active.cleanup = [];
    stopSpeech();
  }

  /* ---------- Answer checking ---------- */
  const norm = s => String(s || '').toLowerCase().replace(/[’']/g, "'").replace(/[.,;:!?"()]/g, ' ').replace(/\s+/g, ' ').trim();
  const alts = a => (Array.isArray(a) ? a : String(a).split('|')).map(norm);
  const wc = s => norm(s).split(' ').filter(Boolean).length;

  /* ---------- Quiz / test renderer ---------- */
  function questionsOf(group) { return group.questions || []; }

  function renderOptionsBox(group) {
    if (!group.options || group.hideBox) return '';
    return `<div class="option-box">${group.boxTitle ? `<div class="ob-title">${esc(group.boxTitle)}</div>` : ''}` +
      group.options.map(o => `<div><b>${esc(o.v)}</b>&nbsp; ${o.t}</div>`).join('') + '</div>';
  }

  function selectHTML(group, q) {
    return `<select data-q="${q.n}"><option value="">—</option>` +
      group.options.map(o => `<option value="${esc(o.v)}">${esc(o.v)}${group.showText ? ' — ' + esc(o.t.replace(/<[^>]+>/g, '')) : ''}</option>`).join('') + '</select>';
  }

  function gapHTML(group, q) {
    return group.options ? selectHTML(group, q) : `<input class="gap" type="text" data-q="${q.n}" autocomplete="off" spellcheck="false" aria-label="Answer ${q.n}">`;
  }

  function renderQuestion(group, q, uid) {
    const name = `${uid}-q${q.n}`;
    let body = '';
    const label = q.label || q.n;
    switch (group.kind) {
      case 'choice': {
        if (q.opts) {
          body = `<div><span class="qn">${label}</span><span class="qtext">${q.q}</span></div>` +
            q.opts.map((o, i) => { const L = String.fromCharCode(65 + i); return `<label class="opt"><input type="radio" name="${name}" value="${L}" data-q="${q.n}"><span><b>${L}</b>&nbsp; ${o}</span></label>`; }).join('');
        } else {
          body = `<div><span class="qn">${label}</span><span class="qtext">${q.q}</span></div><div class="inline-choices">` +
            group.choices.map(c => `<label><input type="radio" name="${name}" value="${esc(c)}" data-q="${q.n}">${esc(c)}</label>`).join('') + '</div>';
        }
        break;
      }
      case 'multi': {
        const k = (Array.isArray(q.a) ? q.a : q.a.split('|')).length;
        body = `<div><span class="qn">${label}</span><span class="qtext">${q.q} <span class="badge">choose ${k}</span></span></div>` +
          q.opts.map((o, i) => { const L = String.fromCharCode(65 + i); return `<label class="opt"><input type="checkbox" name="${name}" value="${L}" data-q="${q.n}" data-max="${k}"><span><b>${L}</b>&nbsp; ${o}</span></label>`; }).join('');
        break;
      }
      case 'select':
        body = `<div style="display:flex;gap:8px;align-items:flex-start;flex-wrap:wrap"><span class="qn">${label}</span><span class="qtext" style="flex:1;min-width:200px">${q.q}</span>${selectHTML(group, q)}</div>`;
        break;
      case 'gap': {
        const text = q.q.includes('{}') ? q.q.replace('{}', gapHTML(group, q)) : `${q.q} ${gapHTML(group, q)}`;
        body = `<div><span class="qn">${label}</span><span class="qtext">${text}</span></div>`;
        break;
      }
      case 'open':
        body = `<div><span class="qn">${label}</span><span class="qtext">${q.q}</span></div><textarea class="open" data-q="${q.n}" placeholder="Write your answer..."></textarea>`;
        break;
    }
    return `<div class="q ${group.kind === 'open' ? 'open-q' : ''}" data-qwrap="${q.n}">${body}<div class="feedback"></div></div>`;
  }

  function renderGroup(group, uid) {
    let h = `<div class="q-group">`;
    if (group.title) h += `<h4 class="mt0">${group.title}</h4>`;
    if (group.instructions) h += `<div class="instructions">${group.instructions}</div>`;
    if (group.figure) h += window.IELTSCharts.render(group.figure);
    h += renderOptionsBox(group);
    if (group.text) {
      // inline template: [[n]] placeholders inside summary/notes/table/form
      let t = group.text.replace(/\[\[(\d+)\]\]/g, (m, n) => {
        const q = group.questions.find(x => String(x.n) === n);
        return `<span class="qn">${n}</span>${gapHTML(group, q)}`;
      });
      h += `<div class="summary-text">${t}</div>`;
      h += `<div class="inline-feedback">` + group.questions.map(q => `<div class="q" data-qwrap="${q.n}" style="padding:0;border:0"><div class="feedback"></div></div>`).join('') + '</div>';
    } else {
      h += questionsOf(group).map(q => renderQuestion(group, q, uid)).join('');
    }
    return h + '</div>';
  }

  function collect(root, group, q) {
    if (group.kind === 'choice') { const el = root.querySelector(`input[data-q="${q.n}"]:checked`); return el ? el.value : ''; }
    if (group.kind === 'multi') return [...root.querySelectorAll(`input[data-q="${q.n}"]:checked`)].map(e => e.value);
    const el = root.querySelector(`[data-q="${q.n}"]`);
    return el ? el.value : '';
  }

  function grade(group, q, val) {
    if (group.kind === 'open') return { score: 0, total: 0 };
    if (group.kind === 'multi') {
      const ans = Array.isArray(q.a) ? q.a : q.a.split('|');
      const got = val.filter(v => ans.includes(v)).length;
      return { score: got, total: ans.length, ok: got === ans.length && val.length === ans.length };
    }
    const accepted = alts(q.a);
    let ok = accepted.includes(norm(val));
    let note = '';
    if (ok && group.maxWords && wc(val) > group.maxWords) { ok = false; note = `Too many words (limit: ${group.maxWords}).`; }
    return { score: ok ? 1 : 0, total: 1, ok, note };
  }

  /**
   * Render a test/quiz.
   * set: { id, title, groups:[...], passage?, passageTitle?, time?, script? }
   * opts: { skill: 'reading'|'listening'|'grammar'|'vocab', record: true }
   */
  function renderTest(set, mount, opts = {}) {
    const uid = 't' + Math.random().toString(36).slice(2, 8);
    const skill = opts.skill || 'reading';
    const total = set.groups.reduce((a, g) => a + (g.kind === 'open' ? 0 : g.questions.reduce((b, q) => b + (g.kind === 'multi' ? (Array.isArray(q.a) ? q.a : q.a.split('|')).length : 1), 0)), 0);
    const best = Progress.get(set.id);

    let header = '';
    if (!opts.embedded) {
      header = `<div class="btn-row" style="justify-content:space-between">
        <div class="btn-row" style="margin:0">
          ${set.time ? `<span class="timer" id="${uid}-timer">${String(set.time).padStart(2, '0')}:00</span><button class="btn small soft" id="${uid}-tstart">Start timer</button>` : ''}
          <span class="badge">${total} marks</span>
          ${best ? `<span class="badge ok">Best: ${best.best}/${best.total}</span>` : ''}
        </div>
        ${set.passage ? `<button class="btn small soft" id="${uid}-hl" title="Select text in the passage, then click">&#9998; Highlight selection</button>` : ''}
      </div>`;
    }

    let player = '';
    if (set.script) player = `<div id="${uid}-player"></div>`;

    const groupsHTML = set.groups.map(g => renderGroup(g, uid)).join('');
    let body;
    if (set.passage) {
      body = `<div class="split"><div class="sticky-col"><div class="passage" id="${uid}-passage">${set.passageTitle ? `<h3>${set.passageTitle}</h3>` : ''}${set.passage}</div></div><div>${groupsHTML}</div></div>`;
    } else body = groupsHTML;

    const transcript = set.script ? `<details class="acc" id="${uid}-tr"><summary>Transcript (open after answering)</summary><div class="acc-body transcript">${set.script.map((l, i) => `<p data-line="${i}">${l.s ? `<span class="spk">${esc(l.s)}:</span> ` : ''}${esc(l.t)}</p>`).join('')}</div></details>` : '';

    const bar = `<div class="score-bar">
      <button class="btn" id="${uid}-check">Check answers</button>
      <button class="btn soft" id="${uid}-reset">Reset</button>
      <span class="score" id="${uid}-score"></span>
      <span id="${uid}-band"></span>
    </div>`;

    mount.innerHTML = header + player + body + transcript + bar;
    const root = mount;

    // inline choice highlighting (fallback for browsers without :has)
    root.querySelectorAll('.inline-choices input').forEach(r => r.addEventListener('change', () => {
      root.querySelectorAll(`.inline-choices input[name="${r.name}"]`).forEach(x => x.parentElement.classList.toggle('sel', x.checked));
    }));
    // multi: enforce max selections
    root.querySelectorAll('input[type=checkbox][data-max]').forEach(cb => cb.addEventListener('change', () => {
      const boxes = root.querySelectorAll(`input[data-q="${cb.dataset.q}"]:checked`);
      if (boxes.length > +cb.dataset.max) cb.checked = false;
    }));

    // timer
    if (set.time && !opts.embedded) {
      const tEl = root.querySelector(`#${uid}-timer`);
      const timer = track(createTimer(set.time * 60, (s, f) => { tEl.textContent = f; tEl.classList.toggle('low', s < 120); }, () => { alert('Time is up! Your answers will now be checked.'); check(); }));
      root.querySelector(`#${uid}-tstart`).addEventListener('click', e => {
        if (timer.running()) { timer.stop(); e.target.textContent = 'Resume timer'; } else { timer.start(); e.target.textContent = 'Pause timer'; }
      });
    }
    // highlighter
    const hl = root.querySelector(`#${uid}-hl`);
    if (hl) hl.addEventListener('mousedown', e => {
      e.preventDefault();
      const sel = window.getSelection();
      if (!sel.rangeCount || sel.isCollapsed) return;
      const range = sel.getRangeAt(0);
      const pass = root.querySelector(`#${uid}-passage`);
      if (!pass.contains(range.commonAncestorContainer)) return;
      try { const m = document.createElement('mark'); range.surroundContents(m); sel.removeAllRanges(); } catch (err) { alert('Please select text within a single paragraph.'); }
    });

    // player
    if (set.script) createPlayer(set.script, root.querySelector(`#${uid}-player`), { transcriptEl: root.querySelector(`#${uid}-tr`) });

    function check() {
      let score = 0, tot = 0;
      set.groups.forEach(g => g.questions.forEach(q => {
        const val = collect(root, g, q);
        const wrap = root.querySelector(`[data-qwrap="${q.n}"]`);
        const fb = wrap.querySelector('.feedback');
        if (g.kind === 'open') {
          wrap.classList.add('checked');
          fb.innerHTML = `<b>Model answer:</b> ${q.a}${q.x ? `<div class="muted small" style="margin-top:4px">${q.x}</div>` : ''}`;
          return;
        }
        const r = grade(g, q, val);
        score += r.score; tot += r.total;
        wrap.classList.add('checked');
        wrap.classList.toggle('correct', !!r.ok);
        wrap.classList.toggle('wrong', !r.ok);
        const ansText = g.kind === 'multi' ? (Array.isArray(q.a) ? q.a : q.a.split('|')).join(', ') : String(q.a).split('|').join(' / ');
        const yours = Array.isArray(val) ? val.join(', ') : val;
        fb.innerHTML = `<b>${q.n}.</b> ${r.ok ? '&#10004; Correct' : '&#10008; ' + (yours ? `Your answer: <i>${esc(yours)}</i> &mdash; ` : 'Not answered &mdash; ') + 'Correct: <b>' + esc(ansText) + '</b>'}${r.note ? ' ' + r.note : ''}${q.x ? `<div style="margin-top:4px">${q.x}</div>` : ''}`;
      }));
      root.querySelector(`#${uid}-score`).textContent = tot ? `Score: ${score} / ${tot} (${Math.round(score / tot * 100)}%)` : 'Model answers shown below each question.';
      if (tot && (skill === 'reading' || skill === 'listening')) {
        const b = band(skill, Math.round(score / tot * 40));
        root.querySelector(`#${uid}-band`).innerHTML = `<span class="badge accent" title="Scaled to a 40-question test. Indicative only.">&asymp; Band ${b} (scaled estimate)</span>`;
      }
      if (tot && opts.record !== false) Progress.record(set.id, { score, total: tot, skill, title: set.title });
      const tr = root.querySelector(`#${uid}-tr`); if (tr) tr.open = true;
      opts.onCheck && opts.onCheck(score, tot);
    }
    root.querySelector(`#${uid}-check`).addEventListener('click', check);
    root.querySelector(`#${uid}-reset`).addEventListener('click', () => {
      root.querySelectorAll('input[type=radio],input[type=checkbox]').forEach(i => i.checked = false);
      root.querySelectorAll('.inline-choices label').forEach(l => l.classList.remove('sel'));
      root.querySelectorAll('input.gap,select[data-q],textarea').forEach(i => i.value = '');
      root.querySelectorAll('.q').forEach(w => w.classList.remove('checked', 'correct', 'wrong'));
      root.querySelector(`#${uid}-score`).textContent = '';
      root.querySelector(`#${uid}-band`).innerHTML = '';
    });
  }

  /* ---------- Text-to-speech ---------- */
  const FEMALE = /(female|zira|hazel|susan|libby|sonia|samantha|karen|moira|tessa|serena|kate|fiona|victoria|aria|jenny|natasha|clara|emma|ava|allison|maisie|mia|amy|olivia|heera|catherine|linda|joanna|salli|kimberly|ivy|nicky)/i;
  const MALE = /(male|david|george|mark|ryan|thomas|daniel|guy|william|james|alex|fred|oliver|arthur|rishi|brian|eric|christopher|roger|steffan|liam|matthew|joey|justin|ravi|prabhat|aaron|gordon)/i;
  function englishVoices() {
    if (!('speechSynthesis' in window)) return [];
    const order = l => l.startsWith('en-GB') ? 0 : l.startsWith('en-AU') ? 1 : l.startsWith('en-US') ? 2 : 3;
    return speechSynthesis.getVoices().filter(v => /^en/i.test(v.lang)).sort((a, b) => order(a.lang) - order(b.lang));
  }
  function pickVoice(voices, gender) {
    const re = gender === 'm' ? MALE : FEMALE;
    return voices.find(v => re.test(v.name) && !(gender === 'm' && /female/i.test(v.name))) || voices[0] || null;
  }
  function whenVoices(cb) {
    if (!('speechSynthesis' in window)) return cb([]);
    const v = englishVoices();
    if (v.length) return cb(v);
    let done = false;
    speechSynthesis.onvoiceschanged = () => { if (!done) { done = true; cb(englishVoices()); } };
    setTimeout(() => { if (!done) { done = true; cb(englishVoices()); } }, 1200);
  }

  let speakGen = 0;
  function stopSpeech() { speakGen++; try { window.speechSynthesis && speechSynthesis.cancel(); } catch (e) { } }
  function speak(text, opts = {}) {
    const my = ++speakGen;
    const done = () => { if (my === speakGen && opts.onend) opts.onend(); };
    if (!('speechSynthesis' in window)) { setTimeout(done, 0); return; }
    try { speechSynthesis.cancel(); } catch (e) { }
    whenVoices(voices => {
      if (my !== speakGen) return;
      const vName = Store.get(opts.gender === 'm' ? 'voice:m' : 'voice:f', null);
      const voice = voices.find(v => v.name === vName) || pickVoice(voices, opts.gender || 'f');
      const parts = splitSentences(String(text));
      parts.forEach((p, i) => {
        const u = new SpeechSynthesisUtterance(p);
        if (voice) u.voice = voice;
        u.rate = opts.rate || Store.get('voice:rate', 0.95);
        if (i === parts.length - 1) { u.onend = done; u.onerror = done; }
        speechSynthesis.speak(u);
      });
    });
  }

  function splitSentences(t) { return (t.match(/[^.!?]+[.!?]+["')]*|[^.!?]+$/g) || [t]).map(s => s.trim()).filter(Boolean); }

  function createPlayer(script, mount, opts = {}) {
    if (!('speechSynthesis' in window)) {
      mount.innerHTML = `<div class="callout warn"><strong>Audio not supported</strong>Your browser does not support speech synthesis. Open the transcript and read it aloud with a partner, or use Chrome/Edge.</div>`;
      return;
    }
    mount.innerHTML = `<div class="player">
      <div class="controls">
        <button class="btn small" data-a="play">&#9654; Play</button>
        <button class="btn small soft" data-a="pause" disabled>&#10074;&#10074; Pause</button>
        <button class="btn small soft" data-a="stop">&#9632; Restart</button>
        <label class="small">Speed <select data-a="rate"><option>0.8</option><option>0.9</option><option selected>0.95</option><option>1</option><option>1.1</option></select></label>
        <label class="small"><input type="checkbox" data-a="exam"> Exam mode (play once)</label>
      </div>
      <div class="controls small" style="margin-top:8px">
        <label>Female voice <select data-a="vf"></select></label>
        <label>Male voice <select data-a="vm"></select></label>
      </div>
      <div class="progress"><div></div></div>
      <div class="status">Press Play. Audio is generated by your browser's text-to-speech. Read the questions first, as you would in the real test.</div>
    </div>`;
    const $ = s => mount.querySelector(`[data-a="${s}"]`);
    const status = mount.querySelector('.status'), bar = mount.querySelector('.progress div');
    let voices = [], queue = [], idx = 0, gen = 0, state = 'idle', played = false, pauseTimer = null;
    $('rate').value = String(Store.get('voice:rate', 0.95));

    script.forEach((l, li) => {
      if (l.pause) queue.push({ li, pause: l.pause, text: l.t });
      else splitSentences(l.t).forEach(s => queue.push({ li, text: s, g: l.g || 'f', narrator: !l.s }));
    });

    whenVoices(v => {
      voices = v;
      const opt = v.map(x => `<option value="${esc(x.name)}">${esc(x.name)} (${x.lang})</option>`).join('');
      $('vf').innerHTML = opt; $('vm').innerHTML = opt;
      const f = Store.get('voice:f', null), m = Store.get('voice:m', null);
      $('vf').value = (v.find(x => x.name === f) || pickVoice(v, 'f') || {}).name || '';
      const mv = v.find(x => x.name === m) || pickVoice(v, 'm');
      $('vm').value = (mv && mv.name !== $('vf').value ? mv : (v.find(x => x.name !== $('vf').value) || mv || {})).name || '';
    });
    $('vf').onchange = () => Store.set('voice:f', $('vf').value);
    $('vm').onchange = () => Store.set('voice:m', $('vm').value);
    $('rate').onchange = () => Store.set('voice:rate', +$('rate').value);

    function highlight(li) {
      if (!opts.transcriptEl) return;
      opts.transcriptEl.querySelectorAll('p').forEach(p => p.classList.toggle('speaking', +p.dataset.line === li));
    }
    function next() {
      const my = gen;
      if (idx >= queue.length) { state = 'idle'; played = true; status.textContent = 'Finished. Check your answers, then open the transcript to review.'; bar.style.width = '100%'; $('pause').disabled = true; highlight(-1); if ($('exam').checked) $('play').disabled = true; return; }
      const item = queue[idx];
      bar.style.width = (idx / queue.length * 100) + '%';
      highlight(item.li);
      if (item.pause) {
        let s = item.pause;
        status.textContent = `${item.text} (${s}s)`;
        pauseTimer = setInterval(() => {
          if (my !== gen) return clearInterval(pauseTimer);
          s--; status.textContent = `${item.text} (${s}s)`;
          if (s <= 0) { clearInterval(pauseTimer); idx++; next(); }
        }, 1000);
        return;
      }
      status.textContent = `Playing... (${Math.round(idx / queue.length * 100)}%)`;
      const u = new SpeechSynthesisUtterance(item.text);
      const vName = item.g === 'm' ? $('vm').value : $('vf').value;
      u.voice = voices.find(v => v.name === vName) || null;
      u.rate = +$('rate').value;
      u.pitch = item.narrator ? 1 : item.g === 'm' ? 0.9 : 1.08;
      u.onend = () => { if (my !== gen || state !== 'playing') return; idx++; setTimeout(next, 250); };
      u.onerror = u.onend;
      speechSynthesis.speak(u);
    }
    $('play').onclick = () => {
      if (state === 'playing') return;
      if ($('exam').checked && played) return;
      if (state === 'idle' && idx >= queue.length) idx = 0;
      state = 'playing'; gen++;
      speechSynthesis.cancel();
      $('pause').disabled = false;
      next();
    };
    $('pause').onclick = () => {
      if (state !== 'playing') return;
      if ($('exam').checked) { status.textContent = 'Pausing is disabled in exam mode.'; return; }
      state = 'paused'; gen++; clearInterval(pauseTimer); speechSynthesis.cancel();
      status.textContent = 'Paused. Press Play to continue from the current sentence.';
    };
    $('stop').onclick = () => {
      if ($('exam').checked && played) { status.textContent = 'Exam mode: the recording can only be played once. Untick exam mode to replay.'; return; }
      gen++; clearInterval(pauseTimer); speechSynthesis.cancel(); idx = 0; state = 'idle'; bar.style.width = '0'; highlight(-1);
      $('play').disabled = false; status.textContent = 'Ready. Press Play to start from the beginning.';
    };
    $('exam').onchange = () => { if (!$('exam').checked) $('play').disabled = false; };
    onLeave(() => { gen++; clearInterval(pauseTimer); });
  }

  window.IELTSEngine = { esc, Store, Progress, band, overallBand, createTimer, track, onLeave, teardown, renderTest, speak, stopSpeech, whenVoices, norm };
})();

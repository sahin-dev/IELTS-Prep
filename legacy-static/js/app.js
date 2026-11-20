/* IELTS Prep Studio – application (router + pages) */
(function () {
  const D = window.IELTS, E = window.IELTSEngine, C = window.IELTSCharts;
  const { esc, Store, Progress } = E;
  const app = document.getElementById('app');
  const SKILL_COLOR = { reading: 'c-reading', listening: 'c-listening', writing: 'c-writing', speaking: 'c-speaking', vocab: 'c-vocab', grammar: 'c-grammar' };

  /* ======================= Navigation ======================= */
  const NAV = [
    { title: 'Start', items: [['#/', 'Dashboard', 'primary'], ['#/overview', 'Exam Format & Scoring', 'primary'], ['#/plan', 'Study Plan & Progress', 'primary']] },
    { title: 'Learn the Question Types', items: [['#/reading', 'Reading', 'reading'], ['#/listening', 'Listening', 'listening'], ['#/writing', 'Writing', 'writing'], ['#/speaking', 'Speaking', 'speaking']] },
    { title: 'Language Toolkit', items: [['#/grammar', 'Grammar & Sentences', 'grammar'], ['#/vocabulary', 'Vocabulary Bank', 'vocab']] },
    { title: 'Practice', items: [['#/practice', 'Practice Hub', 'primary'], ['#/practice/reading', 'Reading Tests', 'reading'], ['#/practice/listening', 'Listening Tests', 'listening'], ['#/practice/writing', 'Writing Practice', 'writing'], ['#/practice/speaking', 'Speaking Simulator', 'speaking'], ['#/practice/vocab', 'Vocabulary Quiz', 'vocab']] },
    { title: 'More', items: [['#/resources', 'Official Materials', 'primary'], ['#/calculator', 'Band Calculator', 'primary']] }
  ];
  function renderNav() {
    const cur = location.hash && location.hash !== '#' ? location.hash : '#/';
    const sb = document.getElementById('sidebar');
    const all = NAV.flatMap(g => g.items.map(i => i[0]));
    const best = cur === '#/' ? '#/' : all.filter(h => h !== '#/' && (cur === h || cur.startsWith(h + '/'))).sort((a, b) => b.length - a.length)[0];
    sb.innerHTML = NAV.map(g => `<div class="nav-group"><div class="nav-title">${g.title}</div>` +
      g.items.map(([href, label, color]) => {
        const active = href === best;
        return `<a href="${href}" class="${active ? 'active' : ''}"><span class="dot" style="background:var(--${color})"></span>${label}</a>`;
      }).join('') + '</div>').join('');
  }

  /* ======================= Helpers ======================= */
  const crumbs = list => `<div class="crumbs">${list.map(([t, h]) => h ? `<a href="${h}">${t}</a>` : t).join(' &rsaquo; ')}</div>`;
  const footer = `<footer class="site">IELTS Prep Studio – all practice passages, recordings and questions are original. IELTS is a registered trademark of the British Council, IDP IELTS and Cambridge University Press & Assessment. This site is an independent study tool and is not affiliated with or endorsed by them. Progress is stored only in this browser.</footer>`;
  const set = html => { app.innerHTML = html + footer; };
  const list = (arr, cls) => `<ul class="${cls || ''}">${arr.map(x => `<li>${x}</li>`).join('')}</ul>`;
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick = (a, n) => shuffle(a).slice(0, n);
  const statusBadge = id => { const r = Progress.get(id); return r ? `<span class="badge ${r.best / r.total >= 0.7 ? 'ok' : 'warn'}">Best ${r.best}/${r.total}</span>` : '<span class="badge">Not attempted</span>'; };

  function tabs(container, items, key) {
    let active = Math.min(Store.get('tab:' + key, 0), items.length - 1);
    container.innerHTML = `<div class="tabs" role="tablist">${items.map((t, i) => `<button data-i="${i}">${t.label}</button>`).join('')}</div><div class="tab-body"></div>`;
    const body = container.querySelector('.tab-body');
    const btns = container.querySelectorAll(':scope > .tabs button');
    const show = i => { btns.forEach((b, j) => b.classList.toggle('active', i === j)); Store.set('tab:' + key, i); body.innerHTML = ''; items[i].render(body); };
    btns.forEach(b => b.onclick = () => show(+b.dataset.i));
    show(active);
  }

  /* ======================= Writing task registry ======================= */
  let _wt = null;
  function writingTasks() {
    if (_wt) return _wt;
    const T2_SUFFIX = '<br><br>Give reasons for your answer and include any relevant examples from your own knowledge or experience.<br>Write at least 250 words.';
    const GT_SUFFIX = '<br><br>Write at least 150 words. You do NOT need to write any addresses.';
    _wt = [];
    D.writing.task1.forEach(t => {
      _wt.push({ id: `w1-${t.id}-s`, task: 'Task 1 Academic', type: t.name, href: '#/writing/task1/' + t.id, prompt: t.sample.prompt + '<br><br>Write at least 150 words.', chart: t.sample.chart, model: t.sample.answer, min: 150, minutes: 20, sample: true });
      t.practice.forEach(p => _wt.push({ id: p.id, task: 'Task 1 Academic', type: t.name, href: '#/writing/task1/' + t.id, prompt: p.prompt + '<br><br>Write at least 150 words.', chart: p.chart, min: 150, minutes: 20 }));
    });
    D.writing.gt.types.forEach(t => {
      _wt.push({ id: `gt-${t.id}-s`, task: 'Task 1 General Training', type: t.name, href: '#/writing/gt/' + t.id, prompt: t.sample.prompt + GT_SUFFIX, model: t.sample.answer, min: 150, minutes: 20, sample: true });
      t.practice.forEach((p, i) => _wt.push({ id: `gt-${t.id}-${i}`, task: 'Task 1 General Training', type: t.name, href: '#/writing/gt/' + t.id, prompt: p + GT_SUFFIX, min: 150, minutes: 20 }));
    });
    D.writingTask2.types.forEach(t => {
      _wt.push({ id: `w2-${t.id}-s`, task: 'Task 2', type: t.name, href: '#/writing/task2/' + t.id, prompt: t.sample.prompt + T2_SUFFIX, model: t.sample.answer, min: 250, minutes: 40, sample: true });
      t.prompts.forEach((p, i) => _wt.push({ id: `w2-${t.id}-${i}`, task: 'Task 2', type: t.name, href: '#/writing/task2/' + t.id, prompt: p + T2_SUFFIX, min: 250, minutes: 40 }));
    });
    return _wt;
  }

  /* ======================= HOME ======================= */
  const TIPS = [
    'In T/F/NG, FALSE means the passage says the opposite. If the passage is silent, it is NOT GIVEN.',
    'Your Task 1 overview should contain no numbers – just the main trends.',
    'Spelling errors make a Listening answer wrong. Practise the commonly misspelled words list.',
    'In Speaking Part 1, aim for 2–4 sentences: Answer, Reason, Example.',
    'Task 2 is worth twice as much as Task 1 – never spend more than 20 minutes on Task 1.',
    'Matching headings: summarise the paragraph in your own words before reading the list.',
    'Use "the number of + plural noun + singular verb": The number of students HAS risen.',
    'Listen for corrections in Listening Part 1: "Sorry, I mean the 15th, not the 5th."',
    'Paraphrase, don\'t copy, the question in your Writing introduction.',
    'Leave no blanks in Reading or Listening – there is no penalty for wrong answers.',
    'In Part 2 Speaking, keep talking until the examiner stops you at two minutes.',
    'Despite/In spite of + noun; Although + clause. Never "despite of".'
  ];
  function home() {
    const res = Object.values(Progress.all());
    const by = s => res.filter(r => r.skill === s);
    const pct = arr => arr.length ? Math.round(arr.reduce((a, r) => a + r.best / r.total, 0) / arr.length * 100) : null;
    const rd = by('reading'), ls = by('listening');
    const essays = Store.get('essays', []);
    const last = Store.get('last', null);
    const tip = TIPS[new Date().getDate() % TIPS.length];
    const stat = (v, l) => `<div class="stat"><div class="v">${v}</div><div class="l">${l}</div></div>`;
    set(`
<div class="hero">
  <h1>Prepare for IELTS, step by step</h1>
  <p>Learn every question type and how to approach it, then practise with original tests. Build the vocabulary, grammar and sentence skills needed for Band 7+ across Listening, Reading, Writing and Speaking.</p>
  <div class="btn-row"><a class="btn" href="#/overview">Start with the exam format</a><a class="btn ghost" href="#/practice">Go to practice</a>${last ? `<a class="btn ghost" href="${last}">Continue where you left off &rarr;</a>` : ''}</div>
</div>
<div class="callout tip"><strong>Tip of the day</strong>${esc(tip)}</div>
<h2>Your progress</h2>
<div class="stat-grid">
${stat(res.length, 'practice sets completed')}
${stat(rd.length ? pct(rd) + '%' : '–', 'average Reading score')}
${stat(ls.length ? pct(ls) + '%' : '–', 'average Listening score')}
${stat(essays.length, 'essays/letters written')}
${stat(Store.get('speakSessions', 0), 'speaking sessions')}
</div>
<h2>Your learning path</h2>
<div class="grid">
<a class="tile" href="#/overview"><h3>1. Understand the exam</h3><p>Format, timing, scoring, band descriptors, Academic vs General Training.</p></a>
<a class="tile c-reading" href="#/reading"><h3>2. Learn every question type</h3><p>What each type tests, how to approach it step by step, and the traps to avoid.</p></a>
<a class="tile c-grammar" href="#/grammar"><h3>3. Build your language</h3><p>Sentence types, clauses, connectors, collocations, phrasal verbs and topic vocabulary.</p></a>
<a class="tile c-writing" href="#/practice"><h3>4. Practise by question type</h3><p>Original Reading & Listening tests, Writing with timer and analysis, Speaking simulator.</p></a>
<a class="tile c-speaking" href="#/resources"><h3>5. Mock tests with official materials</h3><p>Use official practice tests under exam conditions in the final weeks.</p></a>
</div>
<h2>Skills</h2>
<div class="grid">
<a class="tile c-reading" href="#/reading"><h3>Reading</h3><p>${D.reading.types.length} question types · ${D.readingPractice.length} practice sets</p></a>
<a class="tile c-listening" href="#/listening"><h3>Listening</h3><p>${D.listening.types.length} question types · ${D.listeningPractice.length} audio practice sets</p></a>
<a class="tile c-writing" href="#/writing"><h3>Writing</h3><p>${D.writing.task1.length} Task 1 chart types · 3 letter types · ${D.writingTask2.types.length} essay types · ${writingTasks().length} prompts</p></a>
<a class="tile c-speaking" href="#/speaking"><h3>Speaking</h3><p>${D.speaking.part1Topics.length} Part 1 topics · ${D.speaking.cueCards.length} cue cards · exam simulator</p></a>
<a class="tile c-vocab" href="#/vocabulary"><h3>Vocabulary</h3><p>${D.vocab.length} word banks · ${D.vocab.reduce((a, c) => a + c.groups.reduce((b, g) => b + g.items.length, 0), 0)} entries · flashcards & quizzes</p></a>
<a class="tile c-grammar" href="#/grammar"><h3>Grammar & Sentences</h3><p>${D.grammar.length} topics with exercises – from simple sentences to inversion.</p></a>
</div>`);
  }

  /* ======================= OVERVIEW ======================= */
  function overview() {
    set(`${crumbs([['Home', '#/'], ['Exam Format & Scoring']])}
<h1>IELTS Exam Format & Scoring</h1>
<p class="lead">IELTS (International English Language Testing System) tests four skills. Listening, Reading and Writing are taken on the same day without breaks; Speaking may be on the same day or up to a week before or after.</p>
<div class="grid">${D.overview.sections.map(s => `<a class="tile ${SKILL_COLOR[s.skill]}" href="#/${s.skill}"><h3>${s.name}</h3><p><b>${s.time}</b><br>${s.questions}</p><p style="margin-top:8px">${s.desc}</p></a>`).join('')}</div>
${D.overview.html}`);
  }

  /* ======================= READING / LISTENING GUIDES ======================= */
  function skillGuide(skill) {
    const S = D[skill], practice = skill === 'reading' ? D.readingPractice : D.listeningPractice;
    const name = skill[0].toUpperCase() + skill.slice(1);
    set(`${crumbs([['Home', '#/'], [name]])}
<h1>${name}: Format, Strategies & Question Types</h1>
<div class="card">${S.intro}</div>
<h2>All ${name} question types</h2>
<p class="muted">Open each type to learn what it tests, what the instructions look like, how to approach it step by step, and the common traps. Each one links to a targeted practice set.</p>
<div class="grid">${S.types.map((t, i) => `<a class="tile ${SKILL_COLOR[skill]}" href="#/${skill}/${t.id}"><h3>${i + 1}. ${t.name}</h3><p>${t.what.replace(/<[^>]+>/g, '').slice(0, 120)}...</p><div class="meta"><span class="badge">${t.freq}</span>${t.practice ? statusBadge(t.practice) : ''}</div></a>`).join('')}</div>
<div class="btn-row"><a class="btn" href="#/practice/${skill}">All ${name} practice sets (${practice.length}) &rarr;</a><a class="btn soft" href="#/vocabulary">${skill === 'reading' ? 'Synonyms & academic words' : 'Listening vocabulary'}</a></div>`);
  }

  function typePage(skill, id) {
    const S = D[skill], idx = S.types.findIndex(t => t.id === id), t = S.types[idx];
    if (!t) return notFound();
    const name = skill[0].toUpperCase() + skill.slice(1);
    const prev = S.types[idx - 1], next = S.types[idx + 1];
    const practice = (skill === 'reading' ? D.readingPractice : D.listeningPractice).filter(p => p.type === t.id || p.id === t.practice);
    set(`${crumbs([['Home', '#/'], [name, '#/' + skill], [t.name]])}
<h1>${t.name}</h1>
<div class="btn-row" style="margin-top:0"><span class="badge accent">${name}</span><span class="badge">${t.freq}</span></div>
<div class="card"><h3>What is it?</h3><p>${t.what}</p>
<h4>What the instructions look like</h4><div class="instructions" style="background:var(--surface-2);padding:12px 16px;border-radius:8px">${t.looksLike}</div>
${t.definitions ? `<div style="margin-top:12px">${t.definitions}</div>` : ''}</div>
<div class="grid-2">
<div class="card"><h3>How to approach it – step by step</h3><ol class="steps">${t.strategy.map(s => `<li>${s}</li>`).join('')}</ol></div>
<div class="card"><h3>Common traps</h3>${list(t.traps, 'xlist')}</div>
</div>
<div class="card"><h3>Worked example</h3>${t.example}</div>
<div class="card c-${skill}" style="border-left:4px solid var(--${skill})"><h3>Practise this question type</h3>
${practice.length ? practice.map(p => `<div class="btn-row"><a class="btn" href="#/practice/${skill}/${p.id}">${p.title}</a>${statusBadge(p.id)}</div>`).join('') : '<p class="muted">This type is practised within the sets listed on the practice page.</p>'}
</div>
<div class="btn-row" style="justify-content:space-between">${prev ? `<a class="btn soft" href="#/${skill}/${prev.id}">&larr; ${prev.name}</a>` : '<span></span>'}${next ? `<a class="btn soft" href="#/${skill}/${next.id}">${next.name} &rarr;</a>` : ''}</div>`);
  }

  /* ======================= WRITING ======================= */
  function writingHome() {
    set(`${crumbs([['Home', '#/'], ['Writing']])}<h1>Writing: Task Types, Structures & Models</h1>
<p class="lead">Learn the structure of every Task 1 and Task 2 type, study annotated Band 8+ model answers, then write your own with a timer, word counter and automatic text analysis.</p><div id="wtabs"></div>`);
    tabs(document.getElementById('wtabs'), [
      { label: 'Overview & Task 1 basics', render: b => b.innerHTML = D.writing.overview },
      { label: 'Task 1 Academic (charts)', render: b => b.innerHTML = `<div class="grid">${D.writing.task1.map(t => `<a class="tile c-writing" href="#/writing/task1/${t.id}"><h3>${t.name}</h3><p>${t.summary}</p></a>`).join('')}</div><div class="btn-row"><a class="btn soft" href="#/vocabulary/t1-trends">Task 1 vocabulary &rarr;</a></div>` },
      { label: 'Task 1 General (letters)', render: b => b.innerHTML = D.writing.gt.intro + `<div class="grid">${D.writing.gt.types.map(t => `<a class="tile c-writing" href="#/writing/gt/${t.id}"><h3>${t.name}</h3><p>Phrases, model letter and practice prompts.</p></a>`).join('')}</div>` },
      { label: 'Task 2 Essays', render: b => b.innerHTML = `<div class="grid">${D.writingTask2.types.map(t => `<a class="tile c-writing" href="#/writing/task2/${t.id}"><h3>${t.name}</h3><p>${t.recognise[0]}</p></a>`).join('')}</div>${D.writingTask2.overview}` }
    ], 'writing');
  }

  const structureHTML = s => `<ul class="structure">${s.map(([h, d]) => `<li><b>${h}</b>${d}</li>`).join('')}</ul>`;
  const modelToggle = (html) => `<details class="acc" open><summary>Model answer (Band 8–9) – highlighted phrases are reusable language</summary><div class="acc-body"><div class="model-answer">${html}</div></div></details>`;

  function task1Page(id) {
    const t = D.writing.task1.find(x => x.id === id); if (!t) return notFound();
    set(`${crumbs([['Home', '#/'], ['Writing', '#/writing'], [t.name]])}
<h1>Task 1: ${t.name}</h1><p class="lead">${t.summary}</p>
<div class="grid-2"><div class="card"><h3>How to recognise it</h3><p>${t.recognise}</p><h3>Paragraph plan</h3>${structureHTML(t.structure)}</div>
<div class="card"><h3>Key tips</h3>${list(t.tips, 'checklist')}<h3>Essential language</h3>${t.language.map(g => `<p><b>${g.h}:</b> ${g.items.join('; ')}</p>`).join('')}<a href="#/vocabulary/t1-trends">Full Task 1 vocabulary bank &rarr;</a></div></div>
<h2>Sample question</h2><div class="prompt-box"><div class="ptitle">Writing Task 1 · about 20 minutes</div><p>${t.sample.prompt}</p>${C.render(t.sample.chart)}</div>
${modelToggle(t.sample.answer)}
<div class="btn-row"><a class="btn" href="#/practice/writing/w1-${t.id}-s">Write this task yourself (timed)</a></div>
<h2>More practice prompts</h2>${t.practice.map(p => `<div class="card"><p>${p.prompt}</p>${C.render(p.chart)}<a class="btn" href="#/practice/writing/${p.id}">Write this</a> ${Store.get('draft:' + p.id, '') ? '<span class="badge warn">Draft saved</span>' : ''}</div>`).join('')}`);
  }

  function task2Page(id) {
    const t = D.writingTask2.types.find(x => x.id === id); if (!t) return notFound();
    set(`${crumbs([['Home', '#/'], ['Writing', '#/writing'], [t.name]])}
<h1>Task 2: ${t.name}</h1>
<div class="grid-2"><div class="card"><h3>How to recognise it</h3>${list(t.recognise.map(r => `<i>"${r}"</i>`))}<h3>Paragraph plan</h3>${structureHTML(t.structure)}</div>
<div class="card"><h3>Template (adapt, don't copy)</h3>${t.template}<a href="#/vocabulary/t2-phrases">Essay phrases &rarr;</a> · <a href="#/vocabulary/linking">Linking words &rarr;</a> · <a href="#/vocabulary/t2-topics">Topic vocabulary &rarr;</a></div></div>
<h2>Sample question</h2><div class="prompt-box"><div class="ptitle">Writing Task 2 · about 40 minutes</div><p>${t.sample.prompt}</p></div>
${modelToggle(t.sample.answer)}
<div class="btn-row"><a class="btn" href="#/practice/writing/w2-${t.id}-s">Write this essay yourself (timed)</a></div>
<h2>Practice prompts</h2><div class="card">${t.prompts.map((p, i) => `<div class="q" style="display:flex;gap:10px;justify-content:space-between;align-items:center;flex-wrap:wrap"><span style="flex:1;min-width:240px">${p}</span><a class="btn small" href="#/practice/writing/w2-${t.id}-${i}">Write</a></div>`).join('')}</div>`);
  }

  function gtPage(id) {
    const t = D.writing.gt.types.find(x => x.id === id); if (!t) return notFound();
    set(`${crumbs([['Home', '#/'], ['Writing', '#/writing'], [t.name]])}
<h1>General Training Task 1: ${t.name}</h1>
<div class="card"><h3>Useful phrases</h3><div class="grid-2">${t.phrases.map(g => `<div><h4>${g.h}</h4>${list(g.items)}</div>`).join('')}</div></div>
<h2>Sample question</h2><div class="prompt-box"><div class="ptitle">GT Writing Task 1 · about 20 minutes</div><p>${t.sample.prompt}</p></div>
${modelToggle(t.sample.answer)}
<div class="btn-row"><a class="btn" href="#/practice/writing/gt-${t.id}-s">Write this letter yourself</a></div>
<h2>Practice prompts</h2><div class="card">${t.practice.map((p, i) => `<div class="q" style="display:flex;gap:10px;justify-content:space-between;align-items:center;flex-wrap:wrap"><span style="flex:1;min-width:240px">${p}</span><a class="btn small" href="#/practice/writing/gt-${t.id}-${i}">Write</a></div>`).join('')}</div>`);
  }

  /* ---------- Writing practice list & editor ---------- */
  function writingPracticeList() {
    const groups = {};
    writingTasks().forEach(w => (groups[w.task] = groups[w.task] || []).push(w));
    const essays = Store.get('essays', []);
    set(`${crumbs([['Home', '#/'], ['Practice', '#/practice'], ['Writing']])}
<h1>Writing Practice</h1><p class="lead">Choose a prompt. The editor has an exam timer, live word count and autosave. When you finish, the analyser checks length, paragraphing, sentence variety, linking words, passive forms, repetition and informal language. Then compare your answer with the model and assess yourself against the four criteria.</p>
${essays.length ? `<details class="acc"><summary>Your submitted answers (${essays.length})</summary><div class="acc-body">${essays.slice().reverse().map(e => `<div class="q"><b>${esc(e.title)}</b> – ${new Date(e.date).toLocaleDateString()} · ${e.words} words ${e.band ? `· self-assessed band ${e.band}` : ''} · <a href="#/practice/writing/${e.id}">open</a></div>`).join('')}</div></details>` : ''}
${Object.entries(groups).map(([task, items]) => `<h2>${task}</h2><div class="grid">${items.map(w => `<a class="tile c-writing" href="#/practice/writing/${w.id}"><h3>${w.type}${w.sample ? ' – sample' : ''}</h3><p>${w.prompt.replace(/<br>.*$/s, '').replace(/<[^>]+>/g, '').slice(0, 110)}...</p><div class="meta">${w.model ? '<span class="badge accent">model answer</span>' : ''}${Store.get('draft:' + w.id, '') ? '<span class="badge warn">draft</span>' : ''}</div></a>`).join('')}</div>`).join('')}`);
  }

  const LINKERS = ['however', 'moreover', 'furthermore', 'in addition', 'therefore', 'consequently', 'as a result', 'nevertheless', 'although', 'even though', 'whereas', 'while', 'despite', 'in spite of', 'on the other hand', 'for example', 'for instance', 'such as', 'in conclusion', 'to sum up', 'overall', 'firstly', 'secondly', 'finally', 'in contrast', 'by contrast', 'similarly', 'thus', 'hence', 'because', 'since', 'due to', 'owing to', 'admittedly', 'in particular', 'in other words', 'not only', 'what is more', 'meanwhile', 'subsequently', 'following this', 'once'];
  const STOP = new Set('the a an and or but of to in on at for with by from is are was were be been being it its this that these those as which who whom whose what when where why how there their they them he she his her we our you your i my me not no so if than then also can could would should will may might must do does did have has had more most very such into over about between during after before because while'.split(' '));
  function analyse(text, min) {
    const words = text.trim() ? text.trim().split(/\s+/) : [];
    const lower = ' ' + text.toLowerCase().replace(/[^a-z'\s-]/g, ' ') + ' ';
    const sentences = (text.match(/[^.!?]+[.!?]+/g) || []).concat((text.trim() && !/[.!?]\s*$/.test(text.trim())) ? [text.trim().split(/[.!?]/).pop()] : []).map(s => s.trim()).filter(s => s.split(/\s+/).length > 1);
    const paras = text.split(/\n+/).filter(p => p.trim().split(/\s+/).length > 3).length;
    const linkersUsed = LINKERS.filter(l => lower.includes(' ' + l + ' '));
    const complex = sentences.filter(s => /\b(although|because|which|who|whereas|while|if|unless|since|when|that|whose|where|despite|even though|once|so that)\b/i.test(s)).length;
    const passive = (text.match(/\b(is|are|was|were|be|been|being)\s+(\w+ly\s+)?(\w+ed|built|made|done|taken|given|seen|known|shown|grown|sold|told|found|held|kept|left|paid|put|set|cut|brought|bought|taught|thought|written|chosen|driven|eaten|spoken|ground|frozen|chosen|drawn)\b/gi) || []).length;
    const contractions = text.match(/\b(don't|can't|won't|isn't|aren't|doesn't|didn't|wasn't|weren't|i'm|it's|they're|we're|you're|i've|we've|they've|wouldn't|shouldn't|couldn't|haven't|hasn't|there's|that's)\b/gi) || [];
    const informal = ['kids', 'a lot of', 'lots of', 'gonna', 'wanna', 'stuff', 'things', 'ok', 'okay', 'guys', 'really', 'pretty much', 'nowadays everybody', 'etc'].filter(w => lower.includes(' ' + w + ' '));
    const freq = {};
    lower.split(/\s+/).filter(w => w.length > 3 && !STOP.has(w)).forEach(w => freq[w] = (freq[w] || 0) + 1);
    const repeated = Object.entries(freq).filter(([, c]) => c >= 4).sort((a, b) => b[1] - a[1]).slice(0, 6);
    const avg = sentences.length ? Math.round(words.length / sentences.length) : 0;
    const advice = [];
    if (words.length < min) advice.push(`<b>Too short:</b> ${words.length}/${min} words. Under-length answers lose marks in Task Achievement/Response.`);
    if (min === 250 && paras < 4) advice.push('<b>Paragraphing:</b> aim for 4–5 paragraphs (intro, 2–3 body, conclusion). Press Enter between paragraphs.');
    if (min === 150 && paras < 3) advice.push('<b>Paragraphing:</b> use at least 3–4 paragraphs (intro, overview, two body paragraphs).');
    if (sentences.length && complex / sentences.length < 0.35) advice.push('<b>Grammatical range:</b> fewer than a third of your sentences are complex. Add clauses with although, which, because, if, whereas.');
    if (avg > 32) advice.push('<b>Long sentences:</b> your average sentence is very long – long sentences increase errors. Mix in some shorter ones.');
    if (linkersUsed.length < 4) advice.push('<b>Cohesion:</b> use a wider range of linking words (see the Linking words page).');
    if (contractions.length) advice.push(`<b>Formality:</b> avoid contractions in formal writing: ${[...new Set(contractions.map(c => c.toLowerCase()))].join(', ')}.`);
    if (informal.length) advice.push(`<b>Informal words:</b> ${informal.join(', ')} – consider more academic alternatives (children, many/a great deal of, aspects/factors).`);
    if (repeated.length) advice.push(`<b>Repetition:</b> you repeat ${repeated.map(([w, c]) => `"${w}" (${c}×)`).join(', ')}. Use synonyms or pronouns.`);
    if (!advice.length) advice.push('Great – no major structural issues detected. Now check accuracy and compare with the model answer.');
    return { words: words.length, sentences: sentences.length, paras, avg, complex, passive, linkersUsed, advice };
  }

  function writingEditor(id) {
    const w = writingTasks().find(x => x.id === id); if (!w) return notFound();
    const draft = Store.get('draft:' + id, '');
    set(`${crumbs([['Home', '#/'], ['Practice', '#/practice'], ['Writing', '#/practice/writing'], [w.type]])}
<h1>${w.task}: ${w.type}</h1>
<div class="prompt-box"><div class="ptitle">${w.task} · ${w.minutes} minutes · at least ${w.min} words</div><p>${w.prompt}</p>${w.chart ? C.render(w.chart) : ''}</div>
<div class="editor-bar"><span class="timer" id="wtimer">${w.minutes}:00</span><button class="btn small soft" id="wstart">Start timer</button><span id="wcount"><b>0</b> words</span><span id="wsaved" class="muted small"></span><a class="small" href="${w.href}" style="margin-left:auto">Review strategy for this type &rarr;</a></div>
<textarea class="editor" id="wtext" placeholder="Start writing here. Leave a blank line between paragraphs.">${esc(draft)}</textarea>
<div class="btn-row"><button class="btn" id="wanalyse">Finish & analyse</button><button class="btn soft" id="wclear">Clear</button><button class="btn soft" id="wcopy">Copy text</button></div>
<div id="wresult"></div>`);
    const ta = document.getElementById('wtext'), cnt = document.getElementById('wcount'), saved = document.getElementById('wsaved');
    const update = () => { const n = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0; cnt.innerHTML = `<b style="color:${n >= w.min ? 'var(--ok)' : 'inherit'}">${n}</b> / ${w.min} words`; };
    let saveT; ta.addEventListener('input', () => { update(); clearTimeout(saveT); saveT = setTimeout(() => { Store.set('draft:' + id, ta.value); saved.textContent = 'Draft saved ' + new Date().toLocaleTimeString(); }, 600); });
    update();
    const tEl = document.getElementById('wtimer');
    const timer = E.track(E.createTimer(w.minutes * 60, (s, f) => { tEl.textContent = f; tEl.classList.toggle('low', s < 180); }, () => alert('Time is up! In the real exam you would have to stop writing now.')));
    document.getElementById('wstart').onclick = e => { if (timer.running()) { timer.stop(); e.target.textContent = 'Resume timer'; } else { timer.start(); e.target.textContent = 'Pause timer'; } };
    document.getElementById('wclear').onclick = () => { if (confirm('Clear your text?')) { ta.value = ''; Store.del('draft:' + id); update(); } };
    document.getElementById('wcopy').onclick = () => { try { navigator.clipboard.writeText(ta.value); } catch (e) { ta.select(); document.execCommand('copy'); } };
    document.getElementById('wanalyse').onclick = () => {
      timer.stop();
      const r = analyse(ta.value, w.min);
      const crit = w.min === 250 ? ['Task Response', 'Coherence & Cohesion', 'Lexical Resource', 'Grammatical Range & Accuracy'] : ['Task Achievement', 'Coherence & Cohesion', 'Lexical Resource', 'Grammatical Range & Accuracy'];
      const checks = {
        'Task Response': ['I answered ALL parts of the question', 'My position is clear in the intro and conclusion', 'Each body paragraph has one main idea, explained and supported with an example'],
        'Task Achievement': w.task.includes('General') ? ['I covered all three bullet points in detail', 'My tone matches the reader (formal/semi-formal/informal)', 'Clear purpose in the first line and appropriate sign-off'] : ['I paraphrased the question in the introduction', 'I wrote a clear overview of the main trends (no numbers)', 'I selected key features and supported them with accurate data'],
        'Coherence & Cohesion': ['Logical paragraphs with clear topic sentences', 'Linking words used naturally, not at the start of every sentence', 'I used referencing (this, these, such, which) to avoid repetition'],
        'Lexical Resource': ['I avoided repeating words from the question', 'I used topic collocations and less common words accurately', 'My spelling and word forms are correct'],
        'Grammatical Range & Accuracy': ['I mixed simple, compound and complex sentences', 'I used structures such as relative clauses, conditionals and passives', 'Most of my sentences are completely error-free']
      };
      document.getElementById('wresult').innerHTML = `
<div class="card"><h2 class="mt0">Text analysis</h2>
<div class="stat-grid">
<div class="stat"><div class="v" style="color:${r.words >= w.min ? 'var(--ok)' : 'var(--bad)'}">${r.words}</div><div class="l">words (min ${w.min})</div></div>
<div class="stat"><div class="v">${r.paras}</div><div class="l">paragraphs</div></div>
<div class="stat"><div class="v">${r.sentences}</div><div class="l">sentences</div></div>
<div class="stat"><div class="v">${r.avg}</div><div class="l">avg words / sentence</div></div>
<div class="stat"><div class="v">${r.complex}</div><div class="l">complex sentences</div></div>
<div class="stat"><div class="v">${r.passive}</div><div class="l">passive forms</div></div>
<div class="stat"><div class="v">${r.linkersUsed.length}</div><div class="l">different linkers</div></div>
</div>
<p class="small"><b>Linkers used:</b> ${r.linkersUsed.join(', ') || 'none detected'}</p>
<h3>Suggestions</h3>${list(r.advice)}
<p class="small muted">The analyser checks structure and style automatically. It cannot judge content or grammatical accuracy – use the checklist below and the model answer.</p></div>
<div class="card"><h2 class="mt0">Self-assessment</h2><p class="muted">Tick what you achieved, then estimate your band for each criterion.</p>
<div class="grid-2">${crit.map((c, ci) => `<div><h4>${c}</h4>${checks[c].map(x => `<label style="display:flex;gap:8px;padding:3px 0"><input type="checkbox">${x}</label>`).join('')}
<label class="small">My band: <select data-crit="${ci}">${[9, 8, 7, 6, 5, 4].map(b => `<option ${b === 6 ? 'selected' : ''}>${b}</option>`).join('')}</select></label></div>`).join('')}</div>
<div class="btn-row"><button class="btn" id="wsave">Save to my history</button><span id="wband" class="score"></span></div></div>
${w.model ? modelToggle(w.model) : `<div class="callout">No model answer for this prompt – compare your structure with the model answer on the <a href="${w.href}">${w.type} strategy page</a>.</div>`}`;
      const calc = () => { const v = [...document.querySelectorAll('[data-crit]')].map(s => +s.value); const b = E.overallBand(v); document.getElementById('wband').textContent = `Estimated band: ${b}`; return b; };
      document.querySelectorAll('[data-crit]').forEach(s => s.onchange = calc); calc();
      document.getElementById('wsave').onclick = () => {
        const essays = Store.get('essays', []);
        essays.push({ id, title: `${w.task}: ${w.type}`, date: new Date().toISOString(), words: r.words, band: calc(), text: ta.value });
        Store.set('essays', essays.slice(-50));
        document.getElementById('wsave').textContent = 'Saved ✓';
      };
      document.getElementById('wresult').scrollIntoView({ behavior: 'smooth' });
    };
  }

  /* ======================= SPEAKING ======================= */
  function speakingHome() {
    const S = D.speaking;
    set(`${crumbs([['Home', '#/'], ['Speaking']])}<h1>Speaking: Parts, Techniques & Topic Bank</h1>
<div class="btn-row"><a class="btn" href="#/practice/speaking">Open the Speaking Simulator &rarr;</a></div><div id="stabs"></div>`);
    const partTab = p => b => b.innerHTML = `<div class="card"><h2 class="mt0">${p.name}</h2><p>${p.desc}</p>${p.technique}<h4>Tips</h4>${list(p.tips, 'checklist')}</div>
<h3>Band 8+ sample answers</h3>${p.samples.map(s => `<div class="card"><p><b>Q: ${s.q}</b></p><div class="model-answer" style="font-size:.98rem">${s.a}</div><button class="btn small soft" data-say="${esc(s.a.replace(/<[^>]+>/g, ' '))}">&#128266; Listen to the answer</button></div>`).join('')}`;
    tabs(document.getElementById('stabs'), [
      { label: 'Overview', render: b => b.innerHTML = S.intro },
      { label: 'Part 1', render: partTab(S.parts[0]) },
      { label: 'Part 2', render: partTab(S.parts[1]) },
      { label: 'Part 3', render: partTab(S.parts[2]) },
      { label: 'Useful phrases', render: b => b.innerHTML = `<div class="grid-2">${S.phrases.map(g => `<div class="card"><h4 class="mt0">${g.h}</h4>${list(g.items)}</div>`).join('')}</div><h3>Natural idioms</h3><div class="table-wrap"><table class="data-table vocab-table"><tr><th>Idiom</th><th>Meaning</th><th>Example</th></tr>${S.idioms.map(i => `<tr><td>${i[0]}</td><td>${i[1]}</td><td class="example">${i[2]}</td></tr>`).join('')}</table></div>` },
      { label: `Part 1 topics (${S.part1Topics.length})`, render: b => b.innerHTML = `<p class="muted">Practise answering each question aloud with the A-R-E technique. Press &#128266; to hear the examiner.</p>` + S.part1Topics.map(t => `<details class="acc"><summary>${t.topic}</summary><div class="acc-body">${t.qs.map(q => `<div class="q"><button class="btn small soft" data-say="${esc(q)}">&#128266;</button> ${q}</div>`).join('')}</div></details>`).join('') },
      { label: `Cue cards (${S.cueCards.length})`, render: b => b.innerHTML = `<div class="grid-2">${S.cueCards.map((c, i) => `<div class="cue-card"><h3>${c.title}</h3>You should say:${list(c.points)}${c.last}<details style="margin-top:8px"><summary class="small">Part 3 follow-up questions</summary>${list(c.part3)}</details><div class="btn-row"><a class="btn small" href="#/practice/speaking/card/${i}">Practise this card</a></div></div>`).join('')}</div>` }
    ], 'speaking');
  }

  function speakingSim(cardIdx) {
    const S = D.speaking;
    const preCard = cardIdx != null ? S.cueCards[+cardIdx] : null;
    set(`${crumbs([['Home', '#/'], ['Practice', '#/practice'], ['Speaking Simulator']])}
<h1>Speaking Test Simulator</h1>
<p class="lead">The examiner's questions are read aloud by your browser. Answer out loud as if you were in the exam. You can record the whole session and listen back to check your fluency, pronunciation and grammar.</p>
<div class="card" id="simSetup">
<h3 class="mt0">Choose a mode</h3>
<div class="pill-nav" id="modes">
<button data-m="full" class="${preCard ? '' : 'active'}">Full test (Parts 1–3, ~14 min)</button><button data-m="p1">Part 1 only</button><button data-m="p2" class="${preCard ? 'active' : ''}">Part 2 + 3</button><button data-m="p3">Part 3 only</button>
</div>
${preCard ? `<p>Cue card: <b>${preCard.title}</b></p>` : ''}
<label style="display:flex;gap:8px;align-items:center"><input type="checkbox" id="simRec"> Record my answers (microphone permission needed)</label>
<label style="display:flex;gap:8px;align-items:center;margin-top:6px"><input type="checkbox" id="simHide"> Hide question text (listen only – harder, like the real test)</label>
<div class="btn-row"><button class="btn" id="simStart">Start</button></div></div>
<div id="sim"></div>`);
    let mode = preCard ? 'p2' : 'full';
    document.querySelectorAll('#modes button').forEach(b => b.onclick = () => { mode = b.dataset.m; document.querySelectorAll('#modes button').forEach(x => x.classList.toggle('active', x === b)); });
    document.getElementById('simStart').onclick = () => start(mode, document.getElementById('simRec').checked, document.getElementById('simHide').checked);

    function start(mode, rec, hide) {
      const card = preCard || pick(S.cueCards, 1)[0];
      const steps = [];
      if (mode === 'full' || mode === 'p1') {
        steps.push({ t: 'q', part: 1, text: 'Good morning. Can you tell me your full name, please? And what shall I call you?' });
        const work = S.part1Topics[0];
        const others = pick(S.part1Topics.slice(1), 2);
        steps.push({ t: 'q', part: 1, text: 'Let\'s talk about what you do. ' + work.qs[0] });
        pick(work.qs.slice(1), 2).forEach(q => steps.push({ t: 'q', part: 1, text: q }));
        others.forEach(tp => { const qs = pick(tp.qs, 3); steps.push({ t: 'q', part: 1, text: `Now let's talk about ${tp.topic.toLowerCase()}. ${qs[0]}` }); qs.slice(1).forEach(q => steps.push({ t: 'q', part: 1, text: q })); });
      }
      if (mode === 'full' || mode === 'p2') {
        steps.push({ t: 'say', part: 2, text: 'Now, I\'m going to give you a topic, and I\'d like you to talk about it for one to two minutes. Before you talk, you\'ll have one minute to think about what you are going to say. You can make some notes if you wish. Here is your topic.' });
        steps.push({ t: 'prep', part: 2, card }); steps.push({ t: 'talk', part: 2, card });
      }
      if (mode === 'full' || mode === 'p2' || mode === 'p3') {
        steps.push({ t: 'q', part: 3, text: `We've been talking about ${card.title.replace(/^Describe /, '').toLowerCase()}. I'd like to discuss some more general questions related to this. ${card.part3[0]}` });
        card.part3.slice(1).forEach(q => steps.push({ t: 'q', part: 3, text: q }));
      }
      steps.push({ t: 'end' });
      document.getElementById('simSetup').classList.add('hidden');
      let i = 0, recorder = null, chunks = [], stream = null, notes = '';
      const sim = document.getElementById('sim');
      let tick = null; const stopTick = () => clearInterval(tick);
      E.track({ stop: stopTick });
      E.onLeave(() => { try { recorder && recorder.state !== 'inactive' && recorder.stop(); } catch (e) { } stream && stream.getTracks().forEach(t => t.stop()); });

      if (rec && navigator.mediaDevices && window.MediaRecorder) {
        navigator.mediaDevices.getUserMedia({ audio: true }).then(s => {
          stream = s; recorder = new MediaRecorder(s); recorder.ondataavailable = e => chunks.push(e.data); recorder.start();
          const st = document.getElementById('recState'); if (st) st.innerHTML = '<span class="rec-dot"></span>Recording';
        }).catch(() => alert('Microphone access was blocked. The test will continue without recording.'));
      }

      function header(part) { return `<div class="btn-row" style="justify-content:space-between"><span class="badge accent">Part ${part}</span><span class="small muted">Step ${i + 1} of ${steps.length - 1}</span><span id="recState" class="small">${recorder ? '<span class="rec-dot"></span>Recording' : ''}</span></div>`; }
      function render() {
        stopTick(); try { speechSynthesis.cancel(); } catch (e) { }
        const s = steps[i];
        if (s.t === 'q' || s.t === 'say') {
          const target = s.part === 1 ? 'Aim for 15–25 seconds' : s.part === 3 ? 'Aim for 30–60 seconds' : '';
          sim.innerHTML = `${header(s.part)}<div class="examiner">${hide ? '<span class="muted">&#128266; Listen to the examiner...</span>' : esc(s.text)}</div>
<div class="center" style="margin:18px 0"><div class="big-timer" id="el">0:00</div><div class="muted small">${s.t === 'q' ? 'Your answer time · ' + target : ''}</div></div>
<div class="btn-row" style="justify-content:center"><button class="btn soft" id="rep">&#128257; Repeat question</button>${hide ? '<button class="btn soft" id="show">Show text</button>' : ''}<button class="btn" id="nx">Next &rarr;</button></div>`;
          const go = () => { let sec = 0; const el = document.getElementById('el'); stopTick(); tick = setInterval(() => { sec++; if (el) el.textContent = `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`; }, 1000); };
          E.speak(s.text, { gender: 'f', onend: s.t === 'say' ? () => { i++; render(); } : go });
          document.getElementById('rep').onclick = () => E.speak(s.text, { onend: go });
          const sh = document.getElementById('show'); if (sh) sh.onclick = () => { sim.querySelector('.examiner').textContent = s.text; };
          document.getElementById('nx').onclick = () => { i++; render(); };
        } else if (s.t === 'prep' || s.t === 'talk') {
          const secs = s.t === 'prep' ? 60 : 120;
          sim.innerHTML = `${header(2)}<div class="grid-2"><div class="cue-card"><h3>${s.card.title}</h3>You should say:${list(s.card.points)}${s.card.last}</div>
<div><div class="center"><div class="muted">${s.t === 'prep' ? 'Preparation time' : 'Speak now – keep going until the timer ends'}</div><div class="big-timer" id="cd">${secs / 60}:00</div></div>
<textarea class="open" id="notes" placeholder="Your notes (keywords only)..." style="min-height:140px">${esc(notes)}</textarea>
<div class="btn-row"><button class="btn" id="nx">${s.t === 'prep' ? 'Start speaking now' : 'Finish'}</button></div></div></div>`;
          document.getElementById('notes').oninput = e => notes = e.target.value;
          const cd = document.getElementById('cd');
          const timer = E.track(E.createTimer(secs, (l, f) => { cd.textContent = f; }, () => {
            if (s.t === 'prep') E.speak('All right? Remember, you have one to two minutes for this. Don\'t worry if I stop you. I\'ll tell you when the time is up. Can you start speaking now, please?', { onend: () => { i++; render(); } });
            else E.speak('Thank you.', { onend: () => { i++; render(); } });
          }));
          if (s.t === 'talk') timer.start(); else E.speak(`${s.card.title}. You have one minute to prepare.`, { onend: () => timer.start() });
          document.getElementById('nx').onclick = () => { timer.stop(); if (s.t === 'prep') { E.speak('Please start speaking now.', { onend: () => { i++; render(); } }); } else { i++; render(); } };
        } else {
          E.speak('Thank you. That is the end of the speaking test.');
          Store.set('speakSessions', Store.get('speakSessions', 0) + 1);
          sim.innerHTML = `<div class="card result-card"><h2 class="mt0">Test complete</h2><div id="playback">${recorder ? '<p class="muted">Preparing your recording...</p>' : '<p class="muted">No recording this time. Tick "Record my answers" next time to listen back.</p>'}</div></div>
<div class="card"><h3>Self-assessment – listen to your recording and be honest</h3><div class="grid-2">
<div><h4>Fluency & Coherence</h4><label><input type="checkbox"> I rarely paused for long</label><br><label><input type="checkbox"> I extended my answers with reasons and examples</label><br><label><input type="checkbox"> I used discourse markers (actually, having said that...)</label></div>
<div><h4>Lexical Resource</h4><label><input type="checkbox"> I used topic-specific vocabulary</label><br><label><input type="checkbox"> I paraphrased rather than repeating the question</label><br><label><input type="checkbox"> I used 1–2 idiomatic expressions naturally</label></div>
<div><h4>Grammar</h4><label><input type="checkbox"> I used past, present and future forms correctly</label><br><label><input type="checkbox"> I used complex sentences (if, because, which, although)</label></div>
<div><h4>Pronunciation</h4><label><input type="checkbox"> I spoke clearly at a natural speed</label><br><label><input type="checkbox"> My intonation was not flat</label></div></div>
<div class="btn-row"><button class="btn" onclick="location.reload()">Try again</button><a class="btn soft" href="#/speaking">Review techniques</a></div></div>`;
          if (recorder) {
            recorder.onstop = () => {
              const blob = new Blob(chunks, { type: recorder.mimeType || 'audio/webm' });
              const url = URL.createObjectURL(blob);
              document.getElementById('playback').innerHTML = `<p>Your recording:</p><audio controls src="${url}" style="width:100%"></audio><div class="btn-row" style="justify-content:center"><a class="btn soft" download="ielts-speaking-${new Date().toISOString().slice(0, 10)}.webm" href="${url}">Download recording</a></div>`;
              stream && stream.getTracks().forEach(t => t.stop());
            };
            if (recorder.state !== 'inactive') recorder.stop();
          }
        }
      }
      render();
    }
  }

  /* ======================= GRAMMAR ======================= */
  function grammarHome() {
    set(`${crumbs([['Home', '#/'], ['Grammar & Sentences']])}<h1>Grammar & Sentence Building</h1>
<p class="lead">Grammatical Range & Accuracy is 25% of your Writing and Speaking score. Master sentence types, clauses and advanced structures, with exercises and instant feedback.</p>
<div class="grid">${D.grammar.map((g, i) => `<a class="tile c-grammar" href="#/grammar/${g.id}"><h3>${i + 1}. ${g.name}</h3><p>${g.short}</p><div class="meta">${statusBadge('g-' + g.id)}</div></a>`).join('')}
<a class="tile c-vocab" href="#/vocabulary/linking"><h3>Linking words & connectors</h3><p>Addition, contrast, concession, cause, result, examples – with grammar patterns.</p></a>
<a class="tile c-vocab" href="#/vocabulary/collocations"><h3>Collocations</h3><p>make/do/take/have, adjective + noun, adverb + adjective.</p></a>
<a class="tile c-vocab" href="#/vocabulary/phrasal"><h3>Phrasal verbs</h3><p>Grouped by topic with meanings and examples.</p></a></div>`);
  }
  function grammarTopic(id) {
    const i = D.grammar.findIndex(g => g.id === id), g = D.grammar[i]; if (!g) return notFound();
    const next = D.grammar[i + 1], prev = D.grammar[i - 1];
    set(`${crumbs([['Home', '#/'], ['Grammar', '#/grammar'], [g.name]])}<h1>${g.name}</h1><p class="lead">${g.short}</p>
<div class="card">${g.html}</div><h2>Exercises</h2><div id="gex"></div>
<div class="btn-row" style="justify-content:space-between">${prev ? `<a class="btn soft" href="#/grammar/${prev.id}">&larr; ${prev.name}</a>` : '<span></span>'}${next ? `<a class="btn soft" href="#/grammar/${next.id}">${next.name} &rarr;</a>` : ''}</div>`);
    E.renderTest({ id: 'g-' + g.id, title: 'Grammar: ' + g.name, groups: g.exercises }, document.getElementById('gex'), { skill: 'grammar', embedded: true });
  }

  /* ======================= VOCABULARY ======================= */
  function vocabHome() {
    const sections = [...new Set(D.vocab.map(c => c.section))];
    set(`${crumbs([['Home', '#/'], ['Vocabulary Bank']])}<h1>Vocabulary Bank</h1>
<p class="lead">Word banks for every part of the exam: Task 1 trend language, Task 2 topic collocations, Listening vocabulary for directions and time, paraphrase synonyms, linking words, phrasal verbs and more. Each bank has a <b>list</b>, <b>flashcards</b> and a <b>quiz</b>.</p>
${sections.map(s => `<h2>${s}</h2><div class="grid">${D.vocab.filter(c => c.section === s).map(c => `<a class="tile c-${c.color}" href="#/vocabulary/${c.id}"><h3>${c.name}</h3><p>${c.groups.reduce((a, g) => a + g.items.length, 0)} entries · ${c.groups.length} groups</p><div class="meta">${statusBadge('vq-' + c.id)}</div></a>`).join('')}</div>`).join('')}`);
  }
  const itemsOf = c => c.groups.flatMap(g => g.items.map(it => ({ w: it[0], m: it[1], e: it[2], g: g.h })));

  function vocabCat(id) {
    const c = D.vocab.find(x => x.id === id); if (!c) return notFound();
    set(`${crumbs([['Home', '#/'], ['Vocabulary', '#/vocabulary'], [c.name]])}<h1>${c.name}</h1><p class="lead">${c.intro}</p><div id="vtabs"></div>`);
    tabs(document.getElementById('vtabs'), [
      { label: 'Word list', render: b => vocabList(b, c) },
      { label: 'Flashcards', render: b => flashcards(b, c) },
      { label: c.id === 'l-spelling' ? 'Dictation quiz' : 'Quiz', render: b => c.id === 'l-spelling' ? dictation(b, c) : vocabQuiz(b, c) }
    ], 'vocab');
  }
  function vocabList(b, c) {
    b.innerHTML = c.groups.map(g => `<h3>${g.h}</h3><div class="table-wrap"><table class="data-table vocab-table"><tr><th>Word / phrase</th><th>${c.id === 'l-spelling' ? 'Spelling hint' : 'Meaning / use'}</th>${g.items.some(i => i[2]) ? '<th>Example</th>' : ''}<th></th></tr>${g.items.map(i => `<tr><td>${i[0]}</td><td>${i[1]}</td>${g.items.some(x => x[2]) ? `<td class="example">${i[2] || ''}</td>` : ''}<td><button class="btn small soft" data-say="${esc(i[0].split('/')[0])}" title="Pronounce">&#128266;</button></td></tr>`).join('')}</table></div>`).join('');
  }
  function flashcards(b, c) {
    const key = 'known:' + c.id;
    let known = new Set(Store.get(key, [])), onlyUnknown = false, deck = itemsOf(c), i = 0;
    const filtered = () => onlyUnknown ? deck.filter(x => !known.has(x.w)) : deck;
    b.innerHTML = `<div class="btn-row" style="justify-content:center"><label class="small"><input type="checkbox" id="fu"> Show only words I don't know yet</label><span class="badge ok" id="fk"></span></div>
<div class="flashcard" id="fc"><div class="inner"><div class="face front"><div class="small muted" id="fg"></div><div class="w" id="fw"></div><div class="small muted" style="margin-top:14px">Click to flip</div></div><div class="face back"><div class="m" id="fm"></div><div class="e" id="fe"></div></div></div></div>
<div class="fc-controls"><button class="btn soft" id="fp">&larr; Prev</button><button class="btn soft" id="fs">Shuffle</button><button class="btn soft" id="fsay">&#128266;</button><button class="btn soft" id="fno">Still learning</button><button class="btn" id="fyes">I know this &#10003;</button><button class="btn soft" id="fn">Next &rarr;</button></div>
<p class="center small muted" id="fpos"></p>`;
    const $ = s => b.querySelector(s);
    const show = () => {
      const d = filtered(); $('#fk').textContent = `${known.size}/${deck.length} known`;
      if (!d.length) { $('#fw').textContent = 'All done!'; $('#fm').textContent = 'You know every word in this deck.'; $('#fe').textContent = ''; $('#fg').textContent = ''; $('#fpos').textContent = ''; return; }
      i = (i + d.length) % d.length; const x = d[i];
      $('#fc').classList.remove('flipped');
      $('#fw').innerHTML = x.w; $('#fg').textContent = x.g; $('#fm').innerHTML = x.m; $('#fe').innerHTML = x.e || '';
      $('#fpos').textContent = `Card ${i + 1} of ${d.length}`;
    };
    $('#fc').onclick = () => $('#fc').classList.toggle('flipped');
    $('#fn').onclick = () => { i++; show(); }; $('#fp').onclick = () => { i--; show(); };
    $('#fs').onclick = () => { deck = shuffle(deck); i = 0; show(); };
    $('#fsay').onclick = () => { const d = filtered(); d[i] && E.speak(d[i].w.split('/')[0]); };
    $('#fyes').onclick = () => { const d = filtered(); if (d[i]) { known.add(d[i].w); Store.set(key, [...known]); } if (!onlyUnknown) i++; show(); };
    $('#fno').onclick = () => { const d = filtered(); if (d[i]) { known.delete(d[i].w); Store.set(key, [...known]); } i++; show(); };
    $('#fu').onchange = e => { onlyUnknown = e.target.checked; i = 0; show(); };
    show();
  }
  function buildVocabQuiz(items, id, title, n) {
    const usable = items.filter(x => x.m && x.m.length > 3 && !/^\(/.test(x.m));
    const qs = pick(usable, Math.min(n, usable.length)).map((x, k) => {
      const same = shuffle(usable.filter(y => y.g === x.g && y.w !== x.w).map(y => y.w));
      const other = shuffle(usable.filter(y => y.g !== x.g).map(y => y.w));
      const uniq = [...new Set([...same.slice(0, 2), ...other, ...same.slice(2)])].filter(w => w !== x.w).slice(0, 3);
      const opts = shuffle([x.w, ...uniq]);
      return { n: k + 1, q: `Which word or phrase matches: <b>${x.m}</b>?`, opts, a: String.fromCharCode(65 + opts.indexOf(x.w)), x: x.e ? `Example: <i>${x.e}</i>` : '' };
    });
    return { id, title, groups: [{ kind: 'choice', instructions: 'Choose the correct word or phrase for each meaning.', questions: qs }] };
  }
  function vocabQuiz(b, c) {
    b.innerHTML = `<div class="btn-row"><button class="btn soft" id="newq">New quiz</button><span class="muted small">10 random questions from this bank</span></div><div id="vq"></div>`;
    const go = () => E.renderTest(buildVocabQuiz(itemsOf(c), 'vq-' + c.id, 'Vocab: ' + c.name, 10), b.querySelector('#vq'), { skill: 'vocab', embedded: true });
    b.querySelector('#newq').onclick = go; go();
  }
  function dictation(b, c) {
    b.innerHTML = `<div class="callout"><strong>Dictation</strong>Press &#128266; to hear each word, then type it. This trains the spelling accuracy you need for Listening.</div><div class="btn-row"><button class="btn soft" id="newq">New words</button></div><div id="vq"></div>`;
    const go = () => {
      const words = pick(itemsOf(c), 10);
      const setD = { id: 'vq-' + c.id, title: 'Spelling dictation', groups: [{ kind: 'gap', instructions: 'Listen and type the word.', questions: words.map((x, k) => ({ n: k + 1, q: `<button class="btn small soft" data-say64="${btoa(x.w)}">&#128266; Play</button> {}`, a: x.w, x: `Hint: ${x.m}` })) }] };
      E.renderTest(setD, b.querySelector('#vq'), { skill: 'vocab', embedded: true });
      b.querySelectorAll('[data-say64]').forEach(btn => btn.onclick = () => E.speak(atob(btn.dataset.say64), { rate: 0.8 }));
    };
    b.querySelector('#newq').onclick = go; go();
  }
  function vocabMixedQuiz() {
    set(`${crumbs([['Home', '#/'], ['Practice', '#/practice'], ['Vocabulary Quiz']])}<h1>Vocabulary Quiz</h1>
<p class="lead">Choose a word bank, or take a mixed quiz of 20 questions from all banks.</p>
<div class="pill-nav" id="vsel"><button data-id="all" class="active">Mixed (all banks)</button>${D.vocab.filter(c => c.id !== 'l-spelling').map(c => `<button data-id="${c.id}">${c.name}</button>`).join('')}<a href="#/vocabulary/l-spelling">Spelling dictation</a></div><div id="vq"></div>`);
    const go = id => {
      const items = id === 'all' ? D.vocab.filter(c => c.id !== 'l-spelling').flatMap(itemsOf) : itemsOf(D.vocab.find(c => c.id === id));
      E.renderTest(buildVocabQuiz(items, 'vq-' + id, 'Vocabulary quiz', id === 'all' ? 20 : 10), document.getElementById('vq'), { skill: 'vocab', embedded: true });
    };
    document.querySelectorAll('#vsel button').forEach(btn => btn.onclick = () => { document.querySelectorAll('#vsel button').forEach(x => x.classList.toggle('active', x === btn)); go(btn.dataset.id); });
    go('all');
  }

  /* ======================= PRACTICE ======================= */
  function practiceHub() {
    const card = (skill, p) => `<a class="tile c-${skill}" href="#/practice/${skill}/${p.id}"><h3>${p.title}</h3><p>${p.level || ''}${p.time ? ' · ' + p.time + ' min' : ''}${p.part ? ' · Part ' + p.part : ''}</p><div class="meta">${statusBadge(p.id)}</div></a>`;
    set(`${crumbs([['Home', '#/'], ['Practice Hub']])}<h1>Practice Hub</h1>
<p class="lead">Targeted practice for each question type, with instant marking, explanations and band estimates. Learn the strategy first, then practise, then review your mistakes.</p>
<div class="grid">
<a class="tile c-reading" href="#/practice/reading"><h3>Reading tests</h3><p>${D.readingPractice.length} sets: one for each question type, plus a full passage and a General Training set.</p></a>
<a class="tile c-listening" href="#/practice/listening"><h3>Listening tests</h3><p>${D.listeningPractice.length} audio sets covering Parts 1–4 and every question type.</p></a>
<a class="tile c-writing" href="#/practice/writing"><h3>Writing practice</h3><p>${writingTasks().length} prompts with timer, analyser and model answers.</p></a>
<a class="tile c-speaking" href="#/practice/speaking"><h3>Speaking simulator</h3><p>Full mock interview with examiner voice, timers and recording.</p></a>
<a class="tile c-grammar" href="#/grammar"><h3>Grammar exercises</h3><p>${D.grammar.length} topics with auto-marked exercises.</p></a>
<a class="tile c-vocab" href="#/practice/vocab"><h3>Vocabulary quizzes</h3><p>Flashcards, quizzes and spelling dictation.</p></a>
</div>
<h2>Reading</h2><div class="grid">${D.readingPractice.map(p => card('reading', p)).join('')}</div>
<h2>Listening</h2><div class="grid">${D.listeningPractice.map(p => card('listening', p)).join('')}</div>`);
  }
  function practiceList(skill) {
    const arr = skill === 'reading' ? D.readingPractice : D.listeningPractice;
    const types = D[skill].types;
    const name = skill[0].toUpperCase() + skill.slice(1);
    set(`${crumbs([['Home', '#/'], ['Practice', '#/practice'], [name]])}<h1>${name} Practice</h1>
${skill === 'listening' ? '<div class="callout"><strong>How the audio works</strong>Recordings are generated by your browser\'s text-to-speech using a female and a male voice. Chrome, Edge and Safari give the best voices. Tick "Exam mode" to hear the recording only once, as in the real test.</div>' : '<div class="callout"><strong>Exam conditions</strong>Start the timer, highlight key words in the passage, and avoid looking at explanations until you have checked your answers.</div>'}
<div class="grid">${arr.map(p => { const t = types.find(x => x.id === p.type); return `<a class="tile c-${skill}" href="#/practice/${skill}/${p.id}"><h3>${p.title}</h3><p>${t ? t.name : 'Mixed question types'}</p><div class="meta"><span class="badge">${p.level || ''}</span>${p.time ? `<span class="badge">${p.time} min</span>` : ''}${statusBadge(p.id)}</div></a>`; }).join('')}</div>`);
  }
  function testPage(skill, id) {
    const arr = skill === 'reading' ? D.readingPractice : D.listeningPractice;
    const p = arr.find(x => x.id === id); if (!p) return notFound();
    const t = D[skill].types.find(x => x.id === p.type);
    const idx = arr.indexOf(p), next = arr[idx + 1];
    set(`${crumbs([['Home', '#/'], ['Practice', '#/practice'], [skill[0].toUpperCase() + skill.slice(1), '#/practice/' + skill], [p.title]])}
<h1>${p.title}</h1>
<div class="btn-row" style="margin-top:0"><span class="badge accent">${t ? t.name : 'Mixed'}</span>${p.level ? `<span class="badge">${p.level}</span>` : ''}${t ? `<a class="btn small soft" href="#/${skill}/${t.id}">Review the strategy first</a>` : ''}</div>
<div id="test"></div>
${next ? `<div class="btn-row" style="justify-content:flex-end"><a class="btn soft" href="#/practice/${skill}/${next.id}">Next set: ${next.title} &rarr;</a></div>` : ''}`);
    E.renderTest(p, document.getElementById('test'), { skill });
  }

  /* ======================= PLAN & PROGRESS ======================= */
  function plan() {
    const done = Store.get('plan', {});
    const res = Progress.all();
    const total = D.studyPlan.reduce((a, w) => a + w.tasks.length, 0);
    const nDone = Object.values(done).filter(Boolean).length;
    const rows = Object.entries(res).sort((a, b) => (b[1].date || '').localeCompare(a[1].date || ''));
    set(`${crumbs([['Home', '#/'], ['Study Plan & Progress']])}<h1>Study Plan & Progress</h1>
<div class="card"><h3 class="mt0">8-week study plan</h3><p class="muted">Tick tasks as you complete them. Adjust the pace to your exam date – if you have 4 weeks, do two plan weeks per week.</p>
<div class="progress-line"><div style="width:${Math.round(nDone / total * 100)}%"></div></div><p class="small">${nDone} of ${total} tasks completed</p>
<div class="grid-2">${D.studyPlan.map(w => `<div class="plan-week card" style="margin:0"><h4 class="mt0">Week ${w.week}: ${w.focus}</h4>${w.tasks.map(([t, h], k) => { const key = w.week + '-' + k; return `<label class="${done[key] ? 'done' : ''}"><input type="checkbox" data-k="${key}" ${done[key] ? 'checked' : ''}><span>${t} – <a href="${h}">go</a></span></label>`; }).join('')}</div>`).join('')}</div></div>
<div class="card"><h3 class="mt0">Practice results</h3>
${rows.length ? `<div class="table-wrap"><table class="data-table plain"><tr><th>Set</th><th>Skill</th><th>Best</th><th>Last</th><th>Attempts</th><th>Date</th><th></th></tr>${rows.map(([id, r]) => {
      const href = id.startsWith('r-') ? '#/practice/reading/' + id : id.startsWith('l-') ? '#/practice/listening/' + id : id.startsWith('g-') ? '#/grammar/' + id.slice(2) : id.startsWith('vq-') ? (id === 'vq-all' ? '#/practice/vocab' : '#/vocabulary/' + id.slice(3)) : '#/';
      return `<tr><td>${esc(r.title || id)}</td><td>${r.skill}</td><td>${r.best}/${r.total} (${Math.round(r.best / r.total * 100)}%)</td><td>${r.last}/${r.total}</td><td>${r.attempts}</td><td>${new Date(r.date).toLocaleDateString()}</td><td><a href="${href}">retry</a></td></tr>`;
    }).join('')}</table></div>` : '<p class="muted">No results yet – complete a practice set and it will appear here.</p>'}
<h4>Weakest areas</h4>${rows.filter(([, r]) => r.best / r.total < 0.7).length ? list(rows.filter(([, r]) => r.best / r.total < 0.7).map(([, r]) => `${esc(r.title)} – ${Math.round(r.best / r.total * 100)}%`)) : '<p class="muted">Nothing below 70% yet.</p>'}
<div class="btn-row"><button class="btn danger small" id="reset">Reset all progress</button></div></div>
<div class="card"><h3 class="mt0">Error log</h3><p class="muted">Write down every mistake you make in practice: question type, what you answered, the correct answer, and <b>why</b> you got it wrong (vocabulary, paraphrase, trap, time, spelling). Reviewing this log is one of the fastest ways to improve.</p>
<textarea class="open" id="elog" style="min-height:160px" placeholder="e.g. Reading T/F/NG Q7 – chose FALSE, answer NOT GIVEN. The passage mentioned cost but never compared it.">${esc(Store.get('errorlog', ''))}</textarea><span class="small muted" id="elogs"></span></div>`);
    document.querySelectorAll('[data-k]').forEach(cb => cb.onchange = () => { const d = Store.get('plan', {}); d[cb.dataset.k] = cb.checked; Store.set('plan', d); cb.parentElement.classList.toggle('done', cb.checked); });
    document.getElementById('reset').onclick = () => { if (confirm('Delete all saved results, plan ticks, flashcard progress, drafts and essays?')) { try { Object.keys(localStorage).filter(k => k.startsWith('ielts:')).forEach(k => localStorage.removeItem(k)); } catch (e) { } plan(); } };
    let t; document.getElementById('elog').oninput = e => { clearTimeout(t); t = setTimeout(() => { Store.set('errorlog', e.target.value); document.getElementById('elogs').textContent = 'Saved'; }, 500); };
  }

  /* ======================= CALCULATOR ======================= */
  function calculator() {
    set(`${crumbs([['Home', '#/'], ['Band Calculator']])}<h1>Band Score Calculator</h1>
<p class="lead">Convert raw Listening/Reading scores to bands and calculate your overall band.</p>
<div class="card"><div class="grid-2">
<label>Listening raw score (0–40)<br><input type="number" min="0" max="40" id="cl" value="30" class="gap" style="width:100px"></label>
<label>Reading raw score (0–40)<br><input type="number" min="0" max="40" id="cr" value="30" class="gap" style="width:100px"> <select id="cmod"><option value="reading">Academic</option><option value="readingGT">General Training</option></select></label>
<label>Writing band<br><select id="cw">${[9, 8.5, 8, 7.5, 7, 6.5, 6, 5.5, 5, 4.5, 4].map(b => `<option ${b === 6.5 ? 'selected' : ''}>${b}</option>`).join('')}</select></label>
<label>Speaking band<br><select id="cs">${[9, 8.5, 8, 7.5, 7, 6.5, 6, 5.5, 5, 4.5, 4].map(b => `<option ${b === 6.5 ? 'selected' : ''}>${b}</option>`).join('')}</select></label>
</div><div class="stat-grid" style="margin-top:16px" id="cout"></div>
<p class="small muted">Raw-score conversions are approximate and vary slightly between test versions. Overall band = average of the four skills rounded to the nearest half band (.25 rounds up to .5, .75 rounds up to the next whole band).</p></div>`);
    const calc = () => {
      const l = E.band('listening', Math.max(0, Math.min(40, +document.getElementById('cl').value || 0)));
      const r = E.band(document.getElementById('cmod').value, Math.max(0, Math.min(40, +document.getElementById('cr').value || 0)));
      const w = +document.getElementById('cw').value, s = +document.getElementById('cs').value;
      const o = E.overallBand([l, r, w, s]);
      document.getElementById('cout').innerHTML = [['Listening', l], ['Reading', r], ['Writing', w], ['Speaking', s], ['OVERALL', o]].map(([k, v]) => `<div class="stat" ${k === 'OVERALL' ? 'style="background:var(--primary-soft)"' : ''}><div class="v">${v}</div><div class="l">${k}</div></div>`).join('');
    };
    app.querySelectorAll('input,select').forEach(x => x.oninput = calc); calc();
  }

  /* ======================= RESOURCES ======================= */
  function resources() {
    const R = D.resources;
    set(`${crumbs([['Home', '#/'], ['Official Materials']])}<h1>Official Practice Materials & Resources</h1>
<p class="lead">The practice on this site is original and organised by question type. For full mock tests, use official materials from the IELTS partners – they show the exact difficulty and format of the real exam.</p>
${R.groups.map(g => `<h2>${g.h}</h2><div class="grid-2">${g.items.map(i => `<div class="card"><h4 class="mt0"><a href="${i.url}" target="_blank" rel="noopener">${i.name} &#8599;</a></h4><p class="small">${i.desc}</p><p class="small muted">${i.url}</p></div>`).join('')}</div>`).join('')}
<div class="callout warn"><strong>Note</strong>${R.note}</div>
<div class="card">${R.howToUse}</div>`);
  }

  /* ======================= SEARCH ======================= */
  let _idx = null;
  function index() {
    if (_idx) return _idx;
    _idx = [];
    D.vocab.forEach(c => c.groups.forEach(g => g.items.forEach(i => _idx.push({ t: i[0], s: `${c.name} · ${i[1]}`, h: '#/vocabulary/' + c.id, k: 'Vocabulary' }))));
    ['reading', 'listening'].forEach(sk => D[sk].types.forEach(t => _idx.push({ t: t.name, s: `${sk} question type`, h: `#/${sk}/${t.id}`, k: 'Question type' })));
    D.writing.task1.forEach(t => _idx.push({ t: 'Task 1 ' + t.name, s: t.summary, h: '#/writing/task1/' + t.id, k: 'Writing' }));
    D.writing.gt.types.forEach(t => _idx.push({ t: 'GT ' + t.name, s: 'General Training letter', h: '#/writing/gt/' + t.id, k: 'Writing' }));
    D.writingTask2.types.forEach(t => _idx.push({ t: 'Task 2 ' + t.name, s: t.recognise.join(' / '), h: '#/writing/task2/' + t.id, k: 'Writing' }));
    writingTasks().forEach(w => _idx.push({ t: w.prompt.replace(/<[^>]+>/g, ' ').slice(0, 120), s: w.task + ' prompt', h: '#/practice/writing/' + w.id, k: 'Writing prompt' }));
    D.grammar.forEach(g => _idx.push({ t: g.name, s: g.short, h: '#/grammar/' + g.id, k: 'Grammar' }));
    D.speaking.part1Topics.forEach(t => _idx.push({ t: 'Part 1: ' + t.topic, s: t.qs.join(' '), h: '#/speaking', k: 'Speaking' }));
    D.speaking.cueCards.forEach((c, i) => _idx.push({ t: c.title, s: 'Cue card · ' + c.points.join(', '), h: '#/practice/speaking/card/' + i, k: 'Speaking' }));
    D.readingPractice.forEach(p => _idx.push({ t: p.title, s: 'Reading practice', h: '#/practice/reading/' + p.id, k: 'Practice' }));
    D.listeningPractice.forEach(p => _idx.push({ t: p.title, s: 'Listening practice', h: '#/practice/listening/' + p.id, k: 'Practice' }));
    return _idx;
  }
  function search(q) {
    q = decodeURIComponent(q || '').trim();
    const ql = q.toLowerCase();
    const res = ql.length < 2 ? [] : index().filter(x => (x.t + ' ' + x.s).toLowerCase().includes(ql)).slice(0, 120);
    set(`${crumbs([['Home', '#/'], ['Search']])}<h1>Search: "${esc(q)}"</h1><p class="muted">${res.length} result${res.length === 1 ? '' : 's'}</p>
<div class="card search-results">${res.map(r => `<div class="sr"><span class="badge">${r.k}</span> <a href="${r.h}"><b>${r.t}</b></a><div class="small muted">${r.s}</div></div>`).join('') || '<p>No matches. Try a shorter word, e.g. "decline", "opposite", "headings".</p>'}</div>`);
    document.getElementById('globalSearch').value = q;
  }

  function notFound() { set(`<h1>Page not found</h1><p><a href="#/">Back to the dashboard</a></p>`); }

  /* ======================= Router ======================= */
  const routes = [
    [/^$/, home],
    [/^overview$/, overview],
    [/^plan$/, plan],
    [/^calculator$/, calculator],
    [/^resources$/, resources],
    [/^(reading|listening)$/, m => skillGuide(m[1])],
    [/^(reading|listening)\/([\w-]+)$/, m => typePage(m[1], m[2])],
    [/^writing$/, writingHome],
    [/^writing\/task1\/([\w-]+)$/, m => task1Page(m[1])],
    [/^writing\/task2\/([\w-]+)$/, m => task2Page(m[1])],
    [/^writing\/gt\/([\w-]+)$/, m => gtPage(m[1])],
    [/^speaking$/, speakingHome],
    [/^grammar$/, grammarHome],
    [/^grammar\/([\w-]+)$/, m => grammarTopic(m[1])],
    [/^vocabulary$/, vocabHome],
    [/^vocabulary\/([\w-]+)$/, m => vocabCat(m[1])],
    [/^practice$/, practiceHub],
    [/^practice\/(reading|listening)$/, m => practiceList(m[1])],
    [/^practice\/(reading|listening)\/([\w-]+)$/, m => testPage(m[1], m[2])],
    [/^practice\/writing$/, writingPracticeList],
    [/^practice\/writing\/([\w-]+)$/, m => writingEditor(m[1])],
    [/^practice\/speaking$/, () => speakingSim(null)],
    [/^practice\/speaking\/card\/(\d+)$/, m => speakingSim(m[1])],
    [/^practice\/vocab$/, vocabMixedQuiz],
    [/^search\/(.*)$/, m => search(m[1])]
  ];
  function route() {
    E.teardown();
    const path = (location.hash || '#/').replace(/^#\/?/, '');
    const r = routes.find(([re]) => re.test(path));
    try { r ? r[1](path.match(r[0])) : notFound(); }
    catch (err) { console.error(err); set(`<h1>Something went wrong</h1><pre class="card">${esc(err.stack || err)}</pre>`); }
    if (path && !path.startsWith('search')) Store.set('last', '#/' + path);
    renderNav();
    document.getElementById('sidebar').classList.remove('open');
    window.scrollTo(0, 0);
  }

  /* ======================= Global wiring ======================= */
  document.addEventListener('click', e => {
    const say = e.target.closest('[data-say]');
    if (say) { e.preventDefault(); E.speak(say.dataset.say); }
  });
  document.getElementById('menuBtn').onclick = () => document.getElementById('sidebar').classList.toggle('open');
  const theme = Store.get('theme', window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.dataset.theme = theme;
  document.getElementById('themeBtn').onclick = () => { const t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.theme = t; Store.set('theme', t); };
  const gs = document.getElementById('globalSearch');
  gs.addEventListener('keydown', e => { if (e.key === 'Enter' && gs.value.trim()) location.hash = '#/search/' + encodeURIComponent(gs.value.trim()); });
  window.addEventListener('hashchange', route);
  route();
})();

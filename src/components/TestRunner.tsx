'use client';
import { useEffect, useId, useMemo, useRef, useState, type ReactNode } from 'react';
import parse, { Element, type DOMNode } from 'html-react-parser';
import type { Question, QuestionGroup, TestSet } from '@/lib/types';
import { answerList, band, grade, totalMarks, type AnswerValue } from '@/lib/scoring';
import { Progress } from '@/lib/storage';
import { useCountdown } from '@/lib/hooks';
import { renderChart } from '@/lib/charts';
import { speak } from '@/lib/tts';
import ListeningPlayer from './ListeningPlayer';

type Answers = Record<number, AnswerValue>;
interface MockLink { submitted: boolean; onResult: (score: number, total: number) => void }
interface Props {
  set: TestSet;
  skill: string;
  /** Save results to progress (default true; ignored in mock mode). */
  record?: boolean;
  /** Added to displayed question numbers (mock tests number 1–40 across sections). */
  offset?: number;
  mock?: MockLink;
  examAudio?: boolean;
  /** Hide the timer/highlight header (used for embedded quizzes). */
  embedded?: boolean;
}

const H = ({ html, as = 'span' }: { html?: string; as?: 'span' | 'div' }) => {
  const Tag = as;
  return html ? <Tag dangerouslySetInnerHTML={{ __html: html }} /> : null;
};

export default function TestRunner({ set, skill, record = true, offset = 0, mock, examAudio, embedded }: Props) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const [answers, setAnswers] = useState<Answers>({});
  const [checked, setChecked] = useState(false);
  const [result, setResult] = useState<{ score: number; total: number } | null>(null);
  const [line, setLine] = useState(-1);
  const [showTranscript, setShowTranscript] = useState(false);
  const [hlKey, setHlKey] = useState(0);
  const passageRef = useRef<HTMLDivElement>(null);
  const total = useMemo(() => totalMarks(set.groups), [set]);
  const timer = useCountdown((set.time || 0) * 60, () => { if (!checked) { alert('Time is up! Your answers will now be checked.'); check(); } });

  const setA = (n: number, v: AnswerValue) => { if (!checked) setAnswers(a => ({ ...a, [n]: v })); };

  function check() {
    let score = 0, tot = 0;
    set.groups.forEach(g => g.questions.forEach(q => { const r = grade(g, q, answers[q.n]); score += r.score; tot += r.total; }));
    setChecked(true); setResult({ score, total: tot }); timer.pause();
    if (tot && record && !mock) Progress.record(set.id, { score, total: tot, skill, title: set.title });
    if (set.script) setShowTranscript(true);
    return { score, total: tot };
  }
  function reset() { setAnswers({}); setChecked(false); setResult(null); }

  useEffect(() => {
    if (mock?.submitted && !checked) { const r = check(); mock.onResult(r.score, r.total); }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mock?.submitted]);

  function highlight() {
    const sel = window.getSelection();
    if (!sel || !sel.rangeCount || sel.isCollapsed || !passageRef.current) return;
    const range = sel.getRangeAt(0);
    if (!passageRef.current.contains(range.commonAncestorContainer)) return;
    try { range.surroundContents(document.createElement('mark')); sel.removeAllRanges(); } catch { alert('Please select text within a single paragraph.'); }
  }

  /* ---------- fields ---------- */
  const label = (n: number) => n + offset;

  function gapField(g: QuestionGroup, q: Question) {
    const v = (answers[q.n] as string) || '';
    if (g.options) {
      return (
        <select data-q={q.n} aria-label={`Answer ${label(q.n)}`} value={v} disabled={checked} onChange={e => setA(q.n, e.target.value)}>
          <option value="">—</option>
          {g.options.map(o => <option key={o.v} value={o.v}>{o.v}{g.showText ? ' — ' + o.t.replace(/<[^>]+>/g, '') : ''}</option>)}
        </select>
      );
    }
    return <input data-q={q.n} className="gap" type="text" autoComplete="off" spellCheck={false} aria-label={`Answer ${label(q.n)}`} value={v} readOnly={checked} onChange={e => setA(q.n, e.target.value)} />;
  }

  function feedback(g: QuestionGroup, q: Question) {
    if (!checked) return null;
    if (g.kind === 'open') return <div className="feedback"><b>Model answer:</b> <H html={String(q.a)} />{q.x && <div className="muted small"><H html={q.x} /></div>}</div>;
    const val = answers[q.n];
    const r = grade(g, q, val);
    const yours = Array.isArray(val) ? val.join(', ') : val;
    const ans = answerList(q.a).join(g.kind === 'multi' ? ', ' : ' / ');
    return (
      <div className="feedback">
        <b>{label(q.n)}.</b>{' '}
        {r.ok ? '✔ Correct' : <>✘ {yours ? <>Your answer: <i>{yours}</i> — </> : 'Not answered — '}Correct: <b>{ans}</b></>}
        {r.note && ' ' + r.note}
        {q.x && <div style={{ marginTop: 4 }}><H html={q.x} /></div>}
      </div>
    );
  }

  function qClass(g: QuestionGroup, q: Question) {
    if (!checked) return 'q';
    if (g.kind === 'open') return 'q open-q checked';
    return `q checked ${grade(g, q, answers[q.n]).ok ? 'correct' : 'wrong'}`;
  }
  const num = (n: number) => <span className="qn">{label(n)}</span>;

  function renderQuestion(g: QuestionGroup, q: Question): ReactNode {
    const name = `${uid}-${q.n}`;
    let body: ReactNode = null;
    if (g.kind === 'choice' && q.opts) {
      body = <>
        <div>{num(q.n)}<H html={q.q} /></div>
        {q.opts.map((o, i) => {
          const L = String.fromCharCode(65 + i);
          return <label key={L} className="opt"><input type="radio" data-q={q.n} value={L} name={name} checked={answers[q.n] === L} disabled={checked} onChange={() => setA(q.n, L)} /><span><b>{L}</b>&nbsp; <H html={o} /></span></label>;
        })}
      </>;
    } else if (g.kind === 'choice') {
      body = <>
        <div>{num(q.n)}<H html={q.q} /></div>
        <div className="inline-choices">
          {(g.choices || []).map(c => <label key={c} className={answers[q.n] === c ? 'sel' : ''}><input type="radio" data-q={q.n} value={c} name={name} checked={answers[q.n] === c} disabled={checked} onChange={() => setA(q.n, c)} />{c}</label>)}
        </div>
      </>;
    } else if (g.kind === 'multi') {
      const k = answerList(q.a).length;
      const cur = (answers[q.n] as string[]) || [];
      body = <>
        <div>{num(q.n)}<H html={q.q} /> <span className="badge">choose {k}</span></div>
        {(q.opts || []).map((o, i) => {
          const L = String.fromCharCode(65 + i), on = cur.includes(L);
          return <label key={L} className="opt"><input type="checkbox" data-q={q.n} value={L} checked={on} disabled={checked} onChange={() => setA(q.n, on ? cur.filter(x => x !== L) : cur.length < k ? [...cur, L] : cur)} /><span><b>{L}</b>&nbsp; <H html={o} /></span></label>;
        })}
      </>;
    } else if (g.kind === 'select') {
      body = <div className="q-row">{num(q.n)}<span className="q-row-text"><H html={q.q} /></span>{gapField(g, q)}</div>;
    } else if (g.kind === 'gap') {
      const parts = (q.q || '').split('{}');
      body = <div>{num(q.n)}<H html={parts[0]} />{' '}{gapField(g, q)}{' '}<H html={parts[1]} /></div>;
    } else if (g.kind === 'open') {
      body = <>
        <div>{num(q.n)}<H html={q.q} /></div>
        <textarea data-q={q.n} className="open" value={(answers[q.n] as string) || ''} onChange={e => setA(q.n, e.target.value)} placeholder="Write your answer..." />
      </>;
    }
    return <div key={q.n} className={qClass(g, q)}>{body}{feedback(g, q)}</div>;
  }

  function renderTemplate(g: QuestionGroup) {
    const html = (g.text || '').replace(/\[\[(\d+)\]\]/g, '<gapslot data-n="$1"></gapslot>');
    const tree = parse(html, {
      replace(node: DOMNode) {
        if (node instanceof Element && node.name === 'gapslot') {
          const q = g.questions.find(x => x.n === +node.attribs['data-n']);
          if (!q) return <span />;
          const cls = checked ? (grade(g, q, answers[q.n]).ok ? 'slot correct' : 'slot wrong') : 'slot';
          return <span className={cls}>{num(q.n)}{gapField(g, q)}</span>;
        }
      }
    });
    return <>
      <div className="summary-text">{tree}</div>
      {checked && <div className="template-feedback">{g.questions.map(q => <div key={q.n} className={qClass(g, q)} style={{ padding: 0, border: 0 }}>{feedback(g, q)}</div>)}</div>}
    </>;
  }

  const groups = set.groups.map((g, gi) => (
    <div className="q-group" key={gi}>
      {g.title && <h4 className="mt0">{g.title}</h4>}
      {g.instructions && <div className="instructions"><H html={g.instructions} /></div>}
      {g.figure && <div dangerouslySetInnerHTML={{ __html: renderChart(g.figure) }} />}
      {g.options && !g.hideBox && (
        <div className="option-box">
          {g.boxTitle && <div className="ob-title">{g.boxTitle}</div>}
          {g.options.map(o => <div key={o.v}><b>{o.v}</b>&nbsp; <H html={o.t} /></div>)}
        </div>
      )}
      {g.text ? renderTemplate(g) : g.questions.map(q => renderQuestion(g, q))}
    </div>
  ));

  const best = !embedded && !mock ? <BestBadge id={set.id} refresh={checked} /> : null;
  const pct = result && result.total ? Math.round((result.score / result.total) * 100) : 0;

  return (
    <div className="test-runner" onClick={e => {
      const b = (e.target as HTMLElement).closest('[data-say64]') as HTMLElement | null;
      if (b) speak(atob(b.dataset.say64 || ''), { rate: 0.8 });
    }}>
      {!embedded && !mock && (
        <div className="btn-row" style={{ justifyContent: 'space-between' }}>
          <div className="btn-row" style={{ margin: 0 }}>
            {set.time ? <>
              <span className={`timer ${timer.left < 120 && timer.running ? 'low' : ''}`}>{timer.label}</span>
              <button className="btn small soft" onClick={() => (timer.running ? timer.pause() : timer.start())}>{timer.running ? 'Pause timer' : timer.left < (set.time || 0) * 60 ? 'Resume timer' : 'Start timer'}</button>
            </> : null}
            <span className="badge">{total} marks</span>
            {best}
          </div>
          {set.passage && <div className="btn-row" style={{ margin: 0 }}>
            <button className="btn small soft" onMouseDown={e => { e.preventDefault(); highlight(); }} title="Select text in the passage, then click">✎ Highlight selection</button>
            <button className="btn small soft" onClick={() => setHlKey(k => k + 1)}>Clear highlights</button>
          </div>}
        </div>
      )}
      {mock && set.passage && <div className="btn-row" style={{ justifyContent: 'flex-end' }}><button className="btn small soft" onMouseDown={e => { e.preventDefault(); highlight(); }}>✎ Highlight selection</button></div>}

      {set.script && <ListeningPlayer script={set.script} onLine={setLine} examDefault={examAudio} />}

      {set.passage ? (
        <div className="split">
          <div className="sticky-col">
            <div className="passage" ref={passageRef} key={hlKey}>
              {set.passageTitle && <h3>{set.passageTitle}</h3>}
              <div dangerouslySetInnerHTML={{ __html: set.passage }} />
            </div>
          </div>
          <div>{groups}</div>
        </div>
      ) : groups}

      {set.script && (
        <details className="acc" open={showTranscript} onToggle={e => setShowTranscript((e.target as HTMLDetailsElement).open)}>
          <summary>Transcript (open after answering)</summary>
          <div className="acc-body transcript">
            {set.script.map((l, i) => <p key={i} className={line === i ? 'speaking' : ''}>{l.s && <span className="spk">{l.s}: </span>}{l.t}</p>)}
          </div>
        </details>
      )}

      {!mock && (
        <div className="score-bar">
          <button className="btn" onClick={check} disabled={checked}>Check answers</button>
          <button className="btn soft" onClick={reset}>Try again</button>
          {result && <span className="score">{result.total ? `Score: ${result.score} / ${result.total} (${pct}%)` : 'Model answers are shown below each question.'}</span>}
          {result && result.total > 0 && (skill === 'reading' || skill === 'listening') && (
            <span className="badge accent" title="Scaled to a 40-question test. Indicative only.">≈ Band {band(skill, Math.round((result.score / result.total) * 40))} (scaled estimate)</span>
          )}
        </div>
      )}
    </div>
  );
}

function BestBadge({ id, refresh }: { id: string; refresh: boolean }) {
  const [r, setR] = useState<{ best: number; total: number } | undefined>();
  useEffect(() => setR(Progress.get(id)), [id, refresh]);
  return r ? <span className="badge ok">Best: {r.best}/{r.total}</span> : null;
}

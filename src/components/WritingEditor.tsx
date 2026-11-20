'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { WritingTask } from '@/lib/writing-tasks';
import { analyse, type Analysis } from '@/lib/analyse';
import { overallBand } from '@/lib/scoring';
import { Activity, Store } from '@/lib/storage';
import { useCountdown } from '@/lib/hooks';
import { renderChart } from '@/lib/charts';

const CHECKS: Record<string, string[]> = {
  'Task Response': ['I answered ALL parts of the question', 'My position is clear in the introduction and conclusion', 'Each body paragraph has one main idea, explained and supported with an example'],
  'Task Achievement (Academic)': ['I paraphrased the question in the introduction', 'I wrote a clear overview of the main trends (no numbers)', 'I selected key features and supported them with accurate data'],
  'Task Achievement (Letter)': ['I covered all three bullet points in detail', 'My tone matches the reader (formal / semi-formal / informal)', 'Clear purpose in the first line and an appropriate sign-off'],
  'Coherence & Cohesion': ['Logical paragraphs with clear topic sentences', 'Linking words used naturally, not at the start of every sentence', 'I used referencing (this, these, such, which) to avoid repetition'],
  'Lexical Resource': ['I avoided repeating words from the question', 'I used topic collocations and less common words accurately', 'My spelling and word forms are correct'],
  'Grammatical Range & Accuracy': ['I mixed simple, compound and complex sentences', 'I used relative clauses, conditionals and passives where natural', 'Most of my sentences are completely error-free']
};

export interface EssayRecord { id: string; title: string; date: string; words: number; band: number; text: string }

export default function WritingEditor({ task }: { task: WritingTask }) {
  const letter = task.task === 'Task 1 General Training';
  const firstCrit = task.task === 'Task 2' ? 'Task Response' : letter ? 'Task Achievement (Letter)' : 'Task Achievement (Academic)';
  const criteria = [firstCrit, 'Coherence & Cohesion', 'Lexical Resource', 'Grammatical Range & Accuracy'];
  const [text, setText] = useState('');
  const [saved, setSaved] = useState('');
  const [result, setResult] = useState<Analysis | null>(null);
  const [bands, setBands] = useState([6, 6, 6, 6]);
  const [stored, setStored] = useState(false);
  const saveT = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const resultRef = useRef<HTMLDivElement>(null);
  const timer = useCountdown(task.minutes * 60, () => alert('Time is up! In the real exam you would have to stop writing now.'));

  useEffect(() => { setText(Store.get('draft:' + task.id, '')); }, [task.id]);
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  function onChange(v: string) {
    setText(v);
    clearTimeout(saveT.current);
    saveT.current = setTimeout(() => { Store.set('draft:' + task.id, v); setSaved('Draft saved ' + new Date().toLocaleTimeString()); }, 600);
  }
  function finish() {
    timer.pause();
    setResult(analyse(text, task.min, letter));
    setStored(false);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 50);
  }
  function save() {
    const essays = Store.get<EssayRecord[]>('essays', []);
    essays.push({ id: task.id, title: `${task.task}: ${task.type}`, date: new Date().toISOString(), words, band: overallBand(bands), text });
    Store.set('essays', essays.slice(-50));
    Activity.mark();
    setStored(true);
  }

  return (
    <div>
      <div className="prompt-box">
        <div className="ptitle">{task.task} · {task.minutes} minutes · at least {task.min} words</div>
        <div dangerouslySetInnerHTML={{ __html: task.prompt }} />
        {task.chart && <div dangerouslySetInnerHTML={{ __html: renderChart(task.chart) }} />}
      </div>
      <div className="editor-bar">
        <span className={`timer ${timer.left < 180 && timer.running ? 'low' : ''}`}>{timer.label}</span>
        <button className="btn small soft" onClick={() => (timer.running ? timer.pause() : timer.start())}>{timer.running ? 'Pause timer' : 'Start timer'}</button>
        <span><b style={{ color: words >= task.min ? 'var(--ok)' : 'inherit' }}>{words}</b> / {task.min} words</span>
        <span className="muted small">{saved}</span>
        <Link className="small" href={task.href} style={{ marginLeft: 'auto' }}>Review the strategy for this type →</Link>
      </div>
      <textarea className="editor" value={text} onChange={e => onChange(e.target.value)} placeholder="Start writing here. Leave a blank line between paragraphs." spellCheck={false} />
      <p className="small muted">Spell-check is switched off, as in the real computer-delivered test.</p>
      <div className="btn-row">
        <button className="btn" onClick={finish}>Finish & analyse</button>
        <button className="btn soft" onClick={() => { if (confirm('Clear your text?')) { onChange(''); Store.del('draft:' + task.id); } }}>Clear</button>
        <button className="btn soft" onClick={() => navigator.clipboard?.writeText(text)}>Copy text</button>
      </div>

      {result && (
        <div ref={resultRef}>
          <div className="card">
            <h2 className="mt0">Text analysis</h2>
            <div className="stat-grid">
              <Stat v={result.words} l={`words (min ${task.min})`} color={result.words >= task.min ? 'var(--ok)' : 'var(--bad)'} />
              <Stat v={result.paras} l="paragraphs" />
              <Stat v={result.sentences} l="sentences" />
              <Stat v={result.avg} l="avg words / sentence" />
              <Stat v={result.complex} l="complex sentences" />
              <Stat v={result.passive} l="passive forms" />
              <Stat v={result.linkersUsed.length} l="different linkers" />
            </div>
            <p className="small"><b>Linkers used:</b> {result.linkersUsed.join(', ') || 'none detected'}</p>
            <h3>Suggestions</h3>
            <ul>{result.advice.map((a, i) => <li key={i} dangerouslySetInnerHTML={{ __html: a }} />)}</ul>
            <p className="small muted">The analyser checks structure and style automatically. It cannot judge your ideas or grammatical accuracy – use the checklist below and compare with a model answer.</p>
          </div>
          <div className="card">
            <h2 className="mt0">Self-assessment</h2>
            <p className="muted">Tick what you achieved, then estimate your band for each criterion. See <Link href="/writing/band-descriptors">band descriptors</Link>.</p>
            <div className="grid-2">
              {criteria.map((c, ci) => (
                <div key={c}>
                  <h4>{c}</h4>
                  {CHECKS[c].map(x => <label key={x} className="check-row"><input type="checkbox" /> {x}</label>)}
                  <label className="small">My band: <select value={bands[ci]} onChange={e => setBands(b => b.map((v, j) => (j === ci ? +e.target.value : v)))}>
                    {[9, 8, 7, 6, 5, 4].map(b => <option key={b} value={b}>{b}</option>)}
                  </select></label>
                </div>
              ))}
            </div>
            <div className="btn-row">
              <button className="btn" onClick={save} disabled={stored}>{stored ? 'Saved ✓' : 'Save to my history'}</button>
              <span className="score">Estimated band: {overallBand(bands)}</span>
            </div>
          </div>
          {task.model
            ? <details className="acc" open><summary>Model answer (Band 8–9)</summary><div className="acc-body"><div className="model-answer" dangerouslySetInnerHTML={{ __html: task.model }} /></div></details>
            : <div className="callout">There is no model answer for this prompt. Compare your structure with the model on the <Link href={task.href}>{task.type} strategy page</Link>.</div>}
        </div>
      )}
    </div>
  );
}

function Stat({ v, l, color }: { v: number; l: string; color?: string }) {
  return <div className="stat"><div className="v" style={color ? { color } : undefined}>{v}</div><div className="l">{l}</div></div>;
}

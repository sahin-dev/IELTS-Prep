'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Progress, Store, type ResultRecord } from '@/lib/storage';
import { useStored } from '@/lib/hooks';
import type { PlanWeek } from '@/content/study-plan';
import type { EssayRecord } from './WritingEditor';

const hrefFor = (id: string) =>
  id.startsWith('mock-') ? '/mock-tests/' + id.slice(5) :
  id.startsWith('r-') ? '/practice/reading/' + id :
  id.startsWith('l-') ? '/practice/listening/' + id :
  id.startsWith('g-') ? '/grammar/' + id.slice(2) :
  id === 'pron' ? '/speaking/pronunciation' :
  id.startsWith('vq-') ? (id === 'vq-all' ? '/practice/vocabulary' : '/vocabulary/' + id.slice(3)) : '/';

export default function ProgressView({ plan }: { plan: PlanWeek[] }) {
  const [done, setDone] = useStored<Record<string, boolean>>('plan', {});
  const [log, setLog] = useStored<string>('errorlog', '');
  const [rows, setRows] = useState<[string, ResultRecord][]>([]);
  const [essays, setEssays] = useState<EssayRecord[]>([]);
  const [msg, setMsg] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const load = () => {
    setRows(Object.entries(Progress.all()).sort((a, b) => (b[1].date || '').localeCompare(a[1].date || '')));
    setEssays(Store.get<EssayRecord[]>('essays', []));
  };
  useEffect(load, []);

  const total = plan.reduce((a, w) => a + w.tasks.length, 0);
  const nDone = Object.values(done).filter(Boolean).length;
  const weak = rows.filter(([, r]) => r.best / r.total < 0.7);

  function exportData() {
    const blob = new Blob([JSON.stringify({ app: 'ielts-prep-studio', exported: new Date().toISOString(), data: Store.exportAll() }, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `ielts-progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
  }
  function importData(f: File) {
    f.text().then(t => {
      try { const j = JSON.parse(t); Store.importAll(j.data || j); load(); setMsg('Progress imported ✓'); }
      catch { setMsg('That file could not be read.'); }
    });
  }

  return (
    <>
      <div className="card">
        <h2 className="mt0">8-week study plan</h2>
        <p className="muted">Tick tasks as you complete them. With 4 weeks left, do two plan weeks per week; with 2 weeks, focus on weeks 5–8.</p>
        <div className="progress-line"><div style={{ width: `${Math.round((nDone / total) * 100)}%` }} /></div>
        <p className="small">{nDone} of {total} tasks completed</p>
        <div className="grid-2">
          {plan.map(w => (
            <div key={w.week} className="plan-week card" style={{ margin: 0 }}>
              <h4 className="mt0">Week {w.week}: {w.focus}</h4>
              {w.tasks.map(([t, h], k) => {
                const key = `${w.week}-${k}`;
                return (
                  <label key={key} className={done[key] ? 'done' : ''}>
                    <input type="checkbox" checked={!!done[key]} onChange={e => setDone({ ...done, [key]: e.target.checked })} />
                    <span>{t} – <Link href={h}>open</Link></span>
                  </label>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h2 className="mt0">Practice results</h2>
        {rows.length ? (
          <div className="table-wrap"><table className="data-table plain">
            <thead><tr><th>Set</th><th>Skill</th><th>Best</th><th>Last</th><th>Attempts</th><th>Date</th><th /></tr></thead>
            <tbody>{rows.map(([id, r]) => (
              <tr key={id}><td>{r.title || id}</td><td>{r.skill}</td><td>{r.best}/{r.total} ({Math.round((r.best / r.total) * 100)}%)</td><td>{r.last}/{r.total}</td><td>{r.attempts}</td><td>{new Date(r.date).toLocaleDateString()}</td><td><Link href={hrefFor(id)}>retry</Link></td></tr>
            ))}</tbody>
          </table></div>
        ) : <p className="muted">No results yet – complete a practice set and it will appear here.</p>}
        <h3>Weakest areas (below 70%)</h3>
        {weak.length ? <ul>{weak.map(([id, r]) => <li key={id}><Link href={hrefFor(id)}>{r.title}</Link> – {Math.round((r.best / r.total) * 100)}%</li>)}</ul> : <p className="muted">Nothing below 70% yet.</p>}
      </div>

      {essays.length > 0 && (
        <div className="card">
          <h2 className="mt0">Writing history</h2>
          {essays.slice().reverse().map((e, i) => (
            <details key={i} className="acc"><summary>{e.title} – {new Date(e.date).toLocaleDateString()} · {e.words} words · self-assessed band {e.band}</summary>
              <div className="acc-body"><div className="model-answer" style={{ whiteSpace: 'pre-wrap' }}>{e.text}</div><Link href={`/practice/writing/${e.id}`}>Rewrite this task</Link></div>
            </details>
          ))}
        </div>
      )}

      <div className="card">
        <h2 className="mt0">Error log</h2>
        <p className="muted">Record every mistake: question type, your answer, the correct answer and <b>why</b> you got it wrong (vocabulary, paraphrase, trap, time, spelling). Reviewing this log is one of the fastest ways to improve.</p>
        <textarea className="open" style={{ minHeight: 180 }} value={log} onChange={e => setLog(e.target.value)} placeholder="e.g. Reading T/F/NG Q7 – chose FALSE, answer NOT GIVEN. The passage mentioned cost but never compared it." />
      </div>

      <div className="card">
        <h2 className="mt0">Backup & reset</h2>
        <p className="muted">Progress is stored only in this browser. Export a backup file to keep it safe or move it to another device.</p>
        <div className="btn-row">
          <button className="btn" onClick={exportData}>Export progress</button>
          <button className="btn soft" onClick={() => fileRef.current?.click()}>Import progress</button>
          <input ref={fileRef} type="file" accept="application/json" hidden onChange={e => e.target.files?.[0] && importData(e.target.files[0])} />
          <button className="btn danger small" onClick={() => { if (confirm('Delete all saved results, plan ticks, flashcards, drafts and essays?')) { Store.clearAll(); load(); setMsg('All progress deleted.'); } }}>Reset all progress</button>
          <span className="small">{msg}</span>
        </div>
      </div>
    </>
  );
}

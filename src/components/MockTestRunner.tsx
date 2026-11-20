'use client';
import { useMemo, useState } from 'react';
import type { MockTest, TestSet } from '@/lib/types';
import { band, totalMarks } from '@/lib/scoring';
import { Progress } from '@/lib/storage';
import { useCountdown } from '@/lib/hooks';
import TestRunner from './TestRunner';

export default function MockTestRunner({ mock, sets }: { mock: MockTest; sets: TestSet[] }) {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState<Record<number, { score: number; total: number }>>({});
  const totals = useMemo(() => sets.map(s => totalMarks(s.groups)), [sets]);
  const offsets = totals.map((_, i) => totals.slice(0, i).reduce((a, b) => a + b, 0));
  const grand = totals.reduce((a, b) => a + b, 0);
  const isReading = mock.skill === 'reading';
  const timer = useCountdown(mock.minutes * 60, () => { if (isReading && !submitted) { alert('Time is up! Your test will now be marked.'); setSubmitted(true); } });
  const unit = isReading ? 'Passage' : 'Part';

  const done = Object.keys(results).length === sets.length;
  const score = Object.values(results).reduce((a, r) => a + r.score, 0);
  const b = band(mock.skill, Math.round((score / grand) * 40));

  function onResult(i: number, s: number, t: number) {
    setResults(prev => {
      const next = { ...prev, [i]: { score: s, total: t } };
      if (Object.keys(next).length === sets.length) {
        const sc = Object.values(next).reduce((a, r) => a + r.score, 0);
        Progress.record('mock-' + mock.id, { score: sc, total: grand, skill: mock.skill, title: mock.title });
      }
      return next;
    });
  }

  if (!started) {
    return (
      <div className="card">
        <h3 className="mt0">Before you start</h3>
        <ul className="checklist">
          <li>{grand} questions in {sets.length} {unit.toLowerCase()}s, numbered 1–{grand} as in the real test.</li>
          {isReading ? <li>You have <b>{mock.minutes} minutes</b>. The test is marked automatically when time runs out. Spend about 20 minutes per passage.</li>
            : <li>Each part&apos;s recording plays <b>once</b> (exam mode). Read the questions during the reading pauses. Allow about {mock.minutes} minutes.</li>}
          <li>You can move between {unit.toLowerCase()}s freely. Your answers are kept.</li>
          <li>Press <b>Submit test</b> at the end to see your score and band.</li>
        </ul>
        <button className="btn" onClick={() => { setStarted(true); timer.start(); }}>Start the test</button>
      </div>
    );
  }

  return (
    <div>
      <div className="mock-bar">
        <div className="pill-nav" style={{ margin: 0 }}>
          {sets.map((s, i) => (
            <button key={s.id} className={i === current ? 'active' : ''} onClick={() => { setCurrent(i); window.scrollTo({ top: 0 }); }}>
              {unit} {i + 1} <span className="small">(Q{offsets[i] + 1}–{offsets[i] + totals[i]})</span>
            </button>
          ))}
        </div>
        <div className="btn-row" style={{ margin: 0 }}>
          <span className={`timer ${timer.left < 300 ? 'low' : ''}`}>{timer.label}</span>
          {!submitted && <button className="btn" onClick={() => { if (confirm('Submit the whole test now?')) { setSubmitted(true); timer.pause(); } }}>Submit test</button>}
        </div>
      </div>

      {done && (
        <div className="card result-card">
          <h2 className="mt0">Your result</h2>
          <div className="big">{score} / {grand}</div>
          <p>Estimated <b>{isReading ? 'Academic Reading' : 'Listening'} band: {b}</b></p>
          <div className="stat-grid">
            {sets.map((s, i) => <div className="stat" key={s.id}><div className="v">{results[i]?.score}/{results[i]?.total}</div><div className="l">{unit} {i + 1}</div></div>)}
          </div>
          <p className="small muted">Review each {unit.toLowerCase()} below – every question shows the correct answer and an explanation.</p>
        </div>
      )}

      {sets.map((s, i) => (
        <section key={s.id} hidden={i !== current} aria-label={`${unit} ${i + 1}`}>
          <h2>{unit} {i + 1}: <span className="muted">Questions {offsets[i] + 1}–{offsets[i] + totals[i]}</span></h2>
          <TestRunner set={s} skill={mock.skill} offset={offsets[i]} examAudio mock={{ submitted, onResult: (sc, t) => onResult(i, sc, t) }} />
        </section>
      ))}

      <div className="btn-row" style={{ justifyContent: 'space-between' }}>
        <button className="btn soft" disabled={current === 0} onClick={() => { setCurrent(c => c - 1); window.scrollTo({ top: 0 }); }}>← Previous {unit.toLowerCase()}</button>
        {current < sets.length - 1
          ? <button className="btn" onClick={() => { setCurrent(c => c + 1); window.scrollTo({ top: 0 }); }}>Next {unit.toLowerCase()} →</button>
          : !submitted && <button className="btn" onClick={() => { if (confirm('Submit the whole test now?')) { setSubmitted(true); timer.pause(); } }}>Submit test</button>}
      </div>
    </div>
  );
}

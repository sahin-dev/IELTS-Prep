'use client';
/* Personalised recommendations (Part 12): finds the weakest areas from saved results and links to the chapter that teaches them */
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Progress, type ResultRecord } from '@/lib/storage';

type LearnMap = Record<string, { label: string; learn: string; skill: string; practice?: string }>;
interface Area { label: string; learn: string; practice?: string; pct: number; attempts: number }

export default function Recommendations({ map, limit = 4 }: { map: LearnMap; limit?: number }) {
  const [areas, setAreas] = useState<Area[] | null>(null);
  useEffect(() => {
    const compute = () => {
      const groups: Record<string, { learn: string; practice?: string; score: number; total: number; attempts: number }> = {};
      Object.entries(Progress.all()).forEach(([id, r]: [string, ResultRecord]) => {
        const m = map[id];
        if (!m || !r.total) return;
        const g = (groups[m.label] ||= { learn: m.learn, practice: m.practice, score: 0, total: 0, attempts: 0 });
        g.score += r.last; g.total += r.total; g.attempts += r.attempts;
      });
      setAreas(Object.entries(groups).map(([label, g]) => ({ label, learn: g.learn, practice: g.practice, pct: Math.round((g.score / g.total) * 100), attempts: g.attempts }))
        .sort((a, b) => a.pct - b.pct));
    };
    compute();
    window.addEventListener('ielts-store', compute);
    return () => window.removeEventListener('ielts-store', compute);
  }, [map]);

  if (areas === null) return null;
  if (!areas.length) return (
    <div className="card">
      <h3 className="mt0">Your personalised recommendations</h3>
      <p>Complete a few practice sets or chapter exercises and this panel will show your weakest areas, with the chapter to read and the practice to do next. Start with the <Link href="/diagnostic">diagnostic</Link>.</p>
    </div>
  );
  const weak = areas.filter(a => a.pct < 80).slice(0, limit);
  return (
    <div className="card">
      <h3 className="mt0">Your personalised recommendations</h3>
      {weak.length ? (
        <>
          <p className="muted">Based on your most recent scores. Areas below 80% are listed weakest first.</p>
          <ol>
            {weak.map(a => (
              <li key={a.label} style={{ marginBottom: 8 }}>
                <b>{a.label}</b> – {a.pct}% <span className="muted">({a.attempts} attempt{a.attempts > 1 ? 's' : ''})</span><br />
                <Link href={a.learn}>Review the chapter</Link>{a.practice && <> · <Link href={a.practice}>Practise again</Link></>} · log each mistake and its cause in your error log.
              </li>
            ))}
          </ol>
        </>
      ) : <p>All the areas you have practised are at 80% or above. Try a <Link href="/mock-tests">full mock test</Link> or a new question type from the <Link href="/practice/library">practice library</Link>.</p>}
    </div>
  );
}

'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Activity, Progress, Store } from '@/lib/storage';
import { SRS } from '@/lib/srs';
import { useStored } from '@/lib/hooks';
import type { PlanWeek } from '@/content/study-plan';

interface Props { plan: PlanWeek[]; banks: { id: string; name: string; words: string[] }[] }

export default function Dashboard({ plan, banks }: Props) {
  const [examDate, setExamDate] = useStored<string>('examDate', '');
  const [done] = useStored<Record<string, boolean>>('plan', {});
  const [stats, setStats] = useState<{ sets: number; rd: number | null; ls: number | null; essays: number; speak: number; streak: number; due: number; mocks: number } | null>(null);

  useEffect(() => {
    const res = Object.entries(Progress.all());
    const avg = (skill: string) => { const r = res.filter(([id, x]) => x.skill === skill && !id.startsWith('mock-')).map(([, x]) => x); return r.length ? Math.round((r.reduce((a, x) => a + x.best / x.total, 0) / r.length) * 100) : null; };
    setStats({
      sets: res.length, rd: avg('reading'), ls: avg('listening'),
      essays: Store.get<unknown[]>('essays', []).length, speak: Store.get('speakSessions', 0),
      streak: Activity.streak(), mocks: res.filter(([id]) => id.startsWith('mock-')).length,
      due: banks.reduce((a, b) => a + SRS.stats(b.id, b.words).due - SRS.stats(b.id, b.words).unseen, 0)
    });
  }, [banks]);

  const days = examDate ? Math.ceil((new Date(examDate).getTime() - Date.now()) / 86400000) : null;
  const nextTasks = plan.flatMap(w => w.tasks.map(([t, h], k) => ({ key: `${w.week}-${k}`, t, h, week: w.week }))).filter(x => !done[x.key]).slice(0, 4);
  const stat = (v: string | number, l: string) => <div className="stat"><div className="v">{v}</div><div className="l">{l}</div></div>;

  return (
    <>
      <div className="grid-2">
        <div className="card">
          <h3 className="mt0">Exam countdown</h3>
          <label className="small">My test date: <input type="date" value={examDate} onChange={e => setExamDate(e.target.value)} className="date-input" /></label>
          {days != null && (days >= 0
            ? <p><span className="big-number">{days}</span> days to go. {days > 56 ? 'Follow the 8-week plan at a comfortable pace.' : days > 28 ? 'Do about two plan weeks every week.' : 'Focus on your weakest question types and full mock tests.'}</p>
            : <p className="muted">That date has passed – set your next test date.</p>)}
          {days == null && <p className="muted small">Set your test date to get a countdown and pacing advice.</p>}
        </div>
        <div className="card">
          <h3 className="mt0">Next in your study plan</h3>
          {nextTasks.length ? <ul className="plain-list">{nextTasks.map(x => <li key={x.key}><span className="badge">Week {x.week}</span> <Link href={x.h}>{x.t}</Link></li>)}</ul> : <p>Plan complete – well done! Keep doing mock tests.</p>}
          <Link href="/progress" className="small">Open the full plan →</Link>
        </div>
      </div>
      <h2>Your progress</h2>
      <div className="stat-grid">
        {stat(stats ? `${stats.streak} 🔥` : '–', 'day study streak')}
        {stat(stats?.sets ?? '–', 'practice sets & quizzes done')}
        {stat(stats?.rd != null ? stats.rd + '%' : '–', 'average Reading score')}
        {stat(stats?.ls != null ? stats.ls + '%' : '–', 'average Listening score')}
        {stat(stats?.mocks ?? '–', 'mock tests taken')}
        {stat(stats?.essays ?? '–', 'essays & letters written')}
        {stat(stats?.speak ?? '–', 'speaking sessions')}
        {stat(stats ? Math.max(0, stats.due) : '–', 'flashcards due for review')}
      </div>
    </>
  );
}

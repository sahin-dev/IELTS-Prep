import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui';
import Recommendations from '@/components/Recommendations';
import { buildLearnMap } from '@/lib/library';
import { listening, reading } from '@/content';

export const metadata: Metadata = { title: 'Diagnostic: find your level' };

export default function Page() {
  return (
    <>
      <PageHeader crumbs={[['Study plan & progress', '/progress'], ['Diagnostic']]} title="Diagnostic: find your starting level"
        lead="A one-week assessment of all four skills. It gives you an approximate band in each skill, shows your weakest question types and criteria, and feeds the recommendations below." />
      <div className="callout warn"><strong>About these results</strong>All bands on this site are estimates for practice. Listening and Reading conversions are approximate, and Writing and Speaking estimates depend on honest self-assessment or a teacher. They are not official IELTS scores.</div>
      <h2>Day 1–2: your overall level</h2>
      <ol className="steps">
        <li><b>Listening:</b> take <Link href="/mock-tests/listening-1">Listening mock test 1</Link> in exam conditions (one listening, no pauses).</li>
        <li><b>Reading:</b> take <Link href="/mock-tests/reading-1">Academic Reading mock test 1</Link> in 60 minutes.</li>
        <li><b>Writing:</b> write <Link href="/practice/writing/w1-line-s">a Task 1 report</Link> (20 minutes) and <Link href="/practice/writing/w2-opinion-s">a Task 2 essay</Link> (40 minutes) in the timed editor. Assess each with the criterion checklist and the <Link href="/bands/writing">Writing at every band</Link> samples.</li>
        <li><b>Speaking:</b> run a full interview in the <Link href="/practice/speaking">speaking simulator</Link>, record it, and compare with <Link href="/bands/speaking">Speaking at every band</Link>.</li>
        <li>Convert your scores with the <Link href="/calculator">band calculator</Link> and write down your profile.</li>
      </ol>
      <h2>Day 3–6: your weakest question types</h2>
      <p>Do one short practice set for each question type. Each result is saved and analysed below.</p>
      <div className="grid-2">
        <div className="card"><h3 className="mt0">Reading</h3><ul>{reading.types.map(t => <li key={t.id}>{t.practice ? <Link href={`/practice/reading/${t.practice}`}>{t.name}</Link> : t.name}</li>)}</ul></div>
        <div className="card"><h3 className="mt0">Listening</h3><ul>{listening.types.map(t => <li key={t.id}>{t.practice ? <Link href={`/practice/listening/${t.practice}`}>{t.name}</Link> : t.name}</li>)}</ul></div>
      </div>
      <h2>Day 7: set your target and plan</h2>
      <p>Compare your profile with your requirement, set a realistic target with a safety margin (<Link href="/book/how-to-study">How to prepare</Link>), and start the <Link href="/progress">8-week plan</Link>, giving most time to the weakest areas listed here.</p>
      <Recommendations map={buildLearnMap()} limit={6} />
    </>
  );
}

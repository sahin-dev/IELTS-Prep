import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui';
import { ProgressBadge, SubNav } from '@/components/client-ui';
import { SECTION_NAV } from '@/lib/nav';
import { mockTests } from '@/content';

export const metadata: Metadata = { title: 'Mock tests' };

export default function MockTestsPage() {
  return (
    <>
      <PageHeader crumbs={[['Mock tests']]} title="Mock tests"
        lead="Full-length, timed tests with 40 questions numbered as in the real exam, marked automatically with a band score and explanations." />
      <SubNav items={SECTION_NAV.practice} />
      <div className="grid-2">
        {mockTests.map(m => (
          <Link key={m.id} href={`/mock-tests/${m.id}`} className={`tile c-${m.skill}`}>
            <h3>{m.title}</h3><p>{m.description}</p>
            <div className="meta"><span className="badge">40 questions</span><span className="badge">{m.minutes} min</span><ProgressBadge id={'mock-' + m.id} /></div>
          </Link>
        ))}
      </div>
      <div className="card">
        <h3 className="mt0">Writing and Speaking mocks</h3>
        <p>For a full Writing mock, set a 60-minute timer and complete one Task 1 and one Task 2 prompt from <Link href="/practice/writing">Writing practice</Link>. For Speaking, run the <Link href="/practice/speaking">full simulator</Link> with recording on.</p>
        <p className="muted small">After these mocks, use the official practice tests listed under <Link href="/resources">Official materials</Link> for final exam rehearsal.</p>
      </div>
    </>
  );
}

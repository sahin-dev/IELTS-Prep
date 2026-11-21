import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui';
import ProgressView from '@/components/ProgressView';
import Link from 'next/link';
import Recommendations from '@/components/Recommendations';
import { buildLearnMap } from '@/lib/library';
import { studyPlan } from '@/content';

export const metadata: Metadata = { title: 'Study plan & progress' };

export default function Page() {
  return (
    <>
      <PageHeader crumbs={[['Study plan & progress']]} title="Study plan & progress" lead="Your 8-week plan, every result, your writing history and an error log – plus backup so you never lose your progress." />
      <div className="btn-row"><Link className="btn" href="/diagnostic">Take the one-week diagnostic</Link><Link className="btn soft" href="/practice/library">Practice library</Link></div>
      <Recommendations map={buildLearnMap()} limit={6} />
      <ProgressView plan={studyPlan} />
    </>
  );
}

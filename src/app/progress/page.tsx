import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui';
import ProgressView from '@/components/ProgressView';
import { studyPlan } from '@/content';

export const metadata: Metadata = { title: 'Study plan & progress' };

export default function Page() {
  return (
    <>
      <PageHeader crumbs={[['Study plan & progress']]} title="Study plan & progress" lead="Your 8-week plan, every result, your writing history and an error log – plus backup so you never lose your progress." />
      <ProgressView plan={studyPlan} />
    </>
  );
}

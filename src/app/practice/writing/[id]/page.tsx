import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/ui';
import WritingEditor from '@/components/WritingEditor';
import { getWritingTask, writingTasks } from '@/lib/writing-tasks';

type Params = { params: Promise<{ id: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return writingTasks.map(w => ({ id: w.id })); }
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const w = getWritingTask(id);
  return { title: w ? `${w.task}: ${w.type}` : 'Writing practice' };
}

export default async function Page({ params }: Params) {
  const { id } = await params;
  const w = getWritingTask(id);
  if (!w) notFound();
  return (
    <>
      <PageHeader crumbs={[['Practice', '/practice'], ['Writing', '/practice/writing'], [w.type]]} title={`${w.task}: ${w.type}`} />
      <WritingEditor task={w} />
    </>
  );
}

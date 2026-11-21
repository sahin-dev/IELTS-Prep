import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/ui';
import { ChapterView } from '@/components/ChapterView';
import { advancedChapters } from '@/content/book/advanced';

type Params = { params: Promise<{ topic: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return Object.keys(advancedChapters).map(topic => ({ topic })); }
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { topic } = await params;
  return { title: advancedChapters[topic]?.title || 'Advanced English' };
}

export default async function Page({ params }: Params) {
  const { topic } = await params;
  const a = advancedChapters[topic];
  if (!a) notFound();
  return (
    <>
      <PageHeader crumbs={[['The IELTS Book', '/book'], ['Advanced English', '/advanced'], [a.title]]} title={a.title} lead={a.lead} />
      <ChapterView ch={a.chapter} accent="primary" />
    </>
  );
}

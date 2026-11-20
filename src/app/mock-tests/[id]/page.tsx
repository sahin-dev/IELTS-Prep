import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/ui';
import MockTestRunner from '@/components/MockTestRunner';
import { getSet, mockTests } from '@/content';
import type { TestSet } from '@/lib/types';

type Params = { params: Promise<{ id: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return mockTests.map(m => ({ id: m.id })); }
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  return { title: mockTests.find(m => m.id === id)?.title || 'Mock test' };
}

export default async function Page({ params }: Params) {
  const { id } = await params;
  const m = mockTests.find(x => x.id === id);
  if (!m) notFound();
  const sets = m.sections.map(getSet).filter((s): s is TestSet => !!s);
  return (
    <>
      <PageHeader crumbs={[['Mock tests', '/mock-tests'], [m.title]]} title={m.title} lead={m.description} />
      <MockTestRunner mock={m} sets={sets} />
    </>
  );
}

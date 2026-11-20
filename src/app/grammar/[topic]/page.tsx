import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Html, PageHeader } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import TestRunner from '@/components/TestRunner';
import { ChapterView } from '@/components/ChapterView';
import { SECTION_NAV } from '@/lib/nav';
import { grammar } from '@/content';
import { grammarChapters } from '@/content/book';

type Params = { params: Promise<{ topic: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return grammar.map(g => ({ topic: g.id })); }
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { topic } = await params;
  return { title: grammar.find(g => g.id === topic)?.name || 'Grammar' };
}

export default async function Page({ params }: Params) {
  const { topic } = await params;
  const g = grammar.find(x => x.id === topic);
  if (!g) notFound();
  const ch = grammarChapters[g.id];
  const reference = <div className="card"><Html html={g.html} /></div>;
  const exercises = <TestRunner set={{ id: 'g-' + g.id, type: 'grammar', title: 'Grammar: ' + g.name, groups: g.exercises }} skill="grammar" embedded />;
  return (
    <>
      <PageHeader crumbs={[['Grammar', '/grammar'], [g.name]]} title={g.name} lead={g.short} />
      <SubNav items={SECTION_NAV.language} />
      {ch ? (
        <ChapterView ch={ch} accent="grammar" extras={[
          { id: 'reference', title: 'Quick reference: rules and examples', node: reference, after: 'sections' },
          { id: 'exercises', title: 'Exercises (marked automatically)', node: exercises, after: 'end' }
        ]} />
      ) : (
        <>{reference}<h2>Exercises</h2>{exercises}</>
      )}
    </>
  );
}

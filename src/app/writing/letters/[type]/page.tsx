import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { List, ModelAnswer, PageHeader } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import { ChapterView } from '@/components/ChapterView';
import { SECTION_NAV } from '@/lib/nav';
import { writing } from '@/content';
import { letterChapters } from '@/content/book';

type Params = { params: Promise<{ type: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return writing.gt.types.map(t => ({ type: t.id })); }
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { type } = await params;
  return { title: `GT ${writing.gt.types.find(t => t.id === type)?.name}` };
}

export default async function Page({ params }: Params) {
  const { type } = await params;
  const t = writing.gt.types.find(x => x.id === type);
  const ch = letterChapters[type];
  if (!t || !ch) notFound();
  const phrases = <div className="card"><div className="grid-2">{t.phrases.map(g => <div key={g.h}><h4 className="mt0">{g.h}</h4><List items={g.items} /></div>)}</div></div>;
  const model = (
    <>
      <ModelAnswer html={t.sample.answer} title="Model letter (Band 8–9)" />
      <div className="btn-row"><Link className="btn" href={`/practice/writing/gt-${t.id}-s`}>Write this letter yourself</Link></div>
    </>
  );
  const practice = (
    <div className="card">
      {t.practice.map((p, i) => <div className="q q-row" key={i}><span className="q-row-text">{p}</span><Link className="btn small" href={`/practice/writing/gt-${t.id}-${i}`}>Write</Link></div>)}
    </div>
  );
  return (
    <>
      <PageHeader crumbs={[['Writing', '/writing'], ['GT letters', '/writing/letters'], [t.name]]} title={`General Training Task 1: ${t.name}`} />
      <SubNav items={SECTION_NAV.writing} />
      <ChapterView ch={ch} accent="writing" extras={[
        { id: 'phrases', title: 'Useful phrases', node: phrases, after: 'method' },
        { id: 'model', title: 'Model letter', node: model, after: 'worked' },
        { id: 'practice', title: 'Practice prompts', node: practice, after: 'end' }
      ]} />
    </>
  );
}

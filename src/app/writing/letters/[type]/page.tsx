import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { List, ModelAnswer, PageHeader } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import { SECTION_NAV } from '@/lib/nav';
import { writing } from '@/content';

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
  if (!t) notFound();
  return (
    <>
      <PageHeader crumbs={[['Writing', '/writing'], ['GT letters', '/writing/letters'], [t.name]]} title={`General Training Task 1: ${t.name}`} />
      <SubNav items={SECTION_NAV.writing} />
      <div className="card"><h3 className="mt0">Useful phrases</h3>
        <div className="grid-2">{t.phrases.map(g => <div key={g.h}><h4>{g.h}</h4><List items={g.items} /></div>)}</div></div>
      <h2>Sample question</h2>
      <div className="prompt-box"><div className="ptitle">GT Writing Task 1 · about 20 minutes</div><p dangerouslySetInnerHTML={{ __html: t.sample.prompt }} /></div>
      <ModelAnswer html={t.sample.answer} title="Model letter (Band 8–9)" />
      <div className="btn-row"><Link className="btn" href={`/practice/writing/gt-${t.id}-s`}>Write this letter yourself</Link></div>
      <h2>Practice prompts</h2>
      <div className="card">
        {t.practice.map((p, i) => <div className="q q-row" key={i}><span className="q-row-text">{p}</span><Link className="btn small" href={`/practice/writing/gt-${t.id}-${i}`}>Write</Link></div>)}
      </div>
    </>
  );
}

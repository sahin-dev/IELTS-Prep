import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Chart, List, ModelAnswer, PageHeader, Structure } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import { SECTION_NAV } from '@/lib/nav';
import { writing } from '@/content';

type Params = { params: Promise<{ type: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return writing.task1.map(t => ({ type: t.id })); }
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { type } = await params;
  return { title: `Task 1: ${writing.task1.find(t => t.id === type)?.name}` };
}

export default async function Page({ params }: Params) {
  const { type } = await params;
  const idx = writing.task1.findIndex(x => x.id === type), t = writing.task1[idx];
  if (!t) notFound();
  const next = writing.task1[idx + 1];
  return (
    <>
      <PageHeader crumbs={[['Writing', '/writing'], ['Task 1', '/writing/task-1'], [t.name]]} title={`Task 1: ${t.name}`} lead={t.summary} />
      <SubNav items={SECTION_NAV.writing} />
      <div className="grid-2">
        <div className="card"><h3 className="mt0">How to recognise it</h3><p>{t.recognise}</p><h3>Paragraph plan</h3><Structure items={t.structure} /></div>
        <div className="card"><h3 className="mt0">Key tips</h3><List className="checklist" items={t.tips} />
          <h3>Essential language</h3>{t.language.map(g => <p key={g.h}><b>{g.h}:</b> {g.items.join('; ')}</p>)}
          <Link href="/vocabulary/t1-trends">Full Task 1 vocabulary bank →</Link></div>
      </div>
      <h2>Sample question</h2>
      <div className="prompt-box"><div className="ptitle">Writing Task 1 · about 20 minutes</div><p dangerouslySetInnerHTML={{ __html: t.sample.prompt }} /><Chart spec={t.sample.chart} /></div>
      <ModelAnswer html={t.sample.answer} />
      <div className="btn-row"><Link className="btn" href={`/practice/writing/w1-${t.id}-s`}>Write this task yourself (timed)</Link></div>
      <h2>More practice prompts</h2>
      {t.practice.map(p => (
        <div className="card" key={p.id}><p>{p.prompt}</p><Chart spec={p.chart} /><Link className="btn" href={`/practice/writing/${p.id}`}>Write this</Link></div>
      ))}
      {next && <div className="btn-row" style={{ justifyContent: 'flex-end' }}><Link className="btn soft" href={`/writing/task-1/${next.id}`}>{next.name} →</Link></div>}
    </>
  );
}

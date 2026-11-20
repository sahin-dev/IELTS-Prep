import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Chart, List, ModelAnswer, PageHeader, Structure } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import { ChapterView } from '@/components/ChapterView';
import { SECTION_NAV } from '@/lib/nav';
import { writing } from '@/content';
import { task1Chapters } from '@/content/book';

type Params = { params: Promise<{ type: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return writing.task1.map(t => ({ type: t.id })); }
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { type } = await params;
  return { title: `Task 1: ${writing.task1.find(t => t.id === type)?.name}` };
}

export default async function Page({ params }: Params) {
  const { type } = await params;
  const t = writing.task1.find(x => x.id === type);
  const ch = task1Chapters[type];
  if (!t || !ch) notFound();
  const plan = (
    <div className="grid-2">
      <div className="card"><h3 className="mt0">How to recognise it</h3><p>{t.recognise}</p><h3>Paragraph plan</h3><Structure items={t.structure} /></div>
      <div className="card"><h3 className="mt0">Key tips</h3><List className="checklist" items={t.tips} />
        <h3>Essential language</h3>{t.language.map(g => <p key={g.h}><b>{g.h}:</b> {g.items.join('; ')}</p>)}
        <Link href="/vocabulary/t1-trends">Full Task 1 vocabulary bank →</Link></div>
    </div>
  );
  const model = (
    <>
      <p className="muted">The Band 8–9 answer to the task in the worked example. Highlighted phrases are reusable language.</p>
      <ModelAnswer html={t.sample.answer} />
      <div className="btn-row"><Link className="btn" href={`/practice/writing/w1-${t.id}-s`}>Write this task yourself (timed, with feedback)</Link></div>
    </>
  );
  const practice = <>{t.practice.map(p => (
    <div className="card" key={p.id}><p className="mt0">{p.prompt}</p><Chart spec={p.chart} /><Link className="btn" href={`/practice/writing/${p.id}`}>Write this</Link></div>
  ))}</>;
  return (
    <>
      <PageHeader crumbs={[['Writing', '/writing'], ['Task 1', '/writing/task-1'], [t.name]]} title={`Task 1: ${t.name}`} lead={t.summary} />
      <SubNav items={SECTION_NAV.writing} />
      <ChapterView ch={ch} accent="writing" extras={[
        { id: 'plan', title: 'Paragraph plan and essential language', node: plan, after: 'method' },
        { id: 'model', title: 'Model answer', node: model, after: 'worked' },
        { id: 'practice', title: 'Practice prompts', node: practice, after: 'end' }
      ]} />
    </>
  );
}

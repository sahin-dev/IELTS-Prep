import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Html, List, ModelAnswer, PageHeader, Structure } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import { SECTION_NAV } from '@/lib/nav';
import { writingTask2 } from '@/content';

type Params = { params: Promise<{ type: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return writingTask2.types.map(t => ({ type: t.id })); }
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { type } = await params;
  return { title: `Task 2: ${writingTask2.types.find(t => t.id === type)?.name}` };
}

export default async function Page({ params }: Params) {
  const { type } = await params;
  const idx = writingTask2.types.findIndex(x => x.id === type), t = writingTask2.types[idx];
  if (!t) notFound();
  const next = writingTask2.types[idx + 1];
  return (
    <>
      <PageHeader crumbs={[['Writing', '/writing'], ['Task 2', '/writing/task-2'], [t.name]]} title={`Task 2: ${t.name}`} />
      <SubNav items={SECTION_NAV.writing} />
      <div className="grid-2">
        <div className="card"><h3 className="mt0">How to recognise it</h3><List items={t.recognise.map(r => `<i>"${r}"</i>`)} /><h3>Paragraph plan</h3><Structure items={t.structure} /></div>
        <div className="card"><h3 className="mt0">Template (adapt, don&apos;t copy)</h3><Html html={t.template} />
          <p><Link href="/vocabulary/t2-phrases">Essay phrases</Link> · <Link href="/vocabulary/linking">Linking words</Link> · <Link href="/writing/ideas">Idea bank</Link></p></div>
      </div>
      <h2>Sample question</h2>
      <div className="prompt-box"><div className="ptitle">Writing Task 2 · about 40 minutes</div><p>{t.sample.prompt}</p></div>
      <ModelAnswer html={t.sample.answer} />
      <div className="btn-row"><Link className="btn" href={`/practice/writing/w2-${t.id}-s`}>Write this essay yourself (timed)</Link></div>
      <h2>Practice prompts</h2>
      <div className="card">
        {t.prompts.map((p, i) => (
          <div className="q q-row" key={i}><span className="q-row-text">{p}</span><Link className="btn small" href={`/practice/writing/w2-${t.id}-${i}`}>Write</Link></div>
        ))}
      </div>
      {next && <div className="btn-row" style={{ justifyContent: 'flex-end' }}><Link className="btn soft" href={`/writing/task-2/${next.id}`}>{next.name} →</Link></div>}
    </>
  );
}

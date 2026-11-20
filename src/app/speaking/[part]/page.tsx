import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Html, List, PageHeader } from '@/components/ui';
import { SpeakButton, SubNav } from '@/components/client-ui';
import { SECTION_NAV } from '@/lib/nav';
import { speaking } from '@/content';

type Params = { params: Promise<{ part: string }> };
const find = (slug: string) => speaking.parts.find(p => p.id === slug.replace('-', ''));
export const dynamicParams = false;
export function generateStaticParams() { return speaking.parts.map(p => ({ part: p.id.replace('part', 'part-') })); }
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { part } = await params;
  return { title: find(part)?.name || 'Speaking' };
}

export default async function Page({ params }: Params) {
  const { part } = await params;
  const p = find(part);
  if (!p) notFound();
  return (
    <>
      <PageHeader crumbs={[['Speaking', '/speaking'], [p.name]]} title={p.name} lead={p.desc} />
      <SubNav items={SECTION_NAV.speaking} />
      <div className="card"><Html html={p.technique} /><h4>Tips</h4><List className="checklist" items={p.tips} /></div>
      <h2>Band 8+ sample answers</h2>
      {p.samples.map(s => (
        <div className="card" key={s.q}>
          <p><b>Q: {s.q}</b></p>
          <div className="model-answer" style={{ fontSize: '.98rem' }} dangerouslySetInnerHTML={{ __html: s.a }} />
          <div className="btn-row"><SpeakButton text={s.a.replace(/<[^>]+>/g, ' ')} label="🔊 Listen to the answer" /></div>
        </div>
      ))}
      <div className="btn-row">
        <Link className="btn" href="/practice/speaking">Practise in the simulator →</Link>
        {p.id === 'part1' && <Link className="btn soft" href="/speaking/topics">Part 1 topic bank</Link>}
        {p.id !== 'part1' && <Link className="btn soft" href="/speaking/cue-cards">Cue cards</Link>}
      </div>
    </>
  );
}

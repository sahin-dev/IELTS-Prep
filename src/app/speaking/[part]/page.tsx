import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Html, List, PageHeader } from '@/components/ui';
import { SpeakButton, SubNav } from '@/components/client-ui';
import { ChapterView } from '@/components/ChapterView';
import { SECTION_NAV } from '@/lib/nav';
import { speaking } from '@/content';
import { speakingChapters } from '@/content/book';

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
  const ch = p && speakingChapters[p.id];
  if (!p || !ch) notFound();
  const technique = <div className="card"><Html html={p.technique} /><h4>Tips</h4><List className="checklist" items={p.tips} /></div>;
  const samples = (
    <>
      <p className="muted">Listen to each answer, then answer the same question yourself and record it in the simulator.</p>
      {p.samples.map(s => (
        <div className="card" key={s.q}>
          <p className="mt0"><b>Q: {s.q}</b></p>
          <div className="model-answer" style={{ fontSize: '.98rem' }} dangerouslySetInnerHTML={{ __html: s.a }} />
          <div className="btn-row"><SpeakButton text={s.a.replace(/<[^>]+>/g, ' ')} label="🔊 Listen to the answer" /></div>
        </div>
      ))}
    </>
  );
  const practise = (
    <div className="btn-row">
      <Link className="btn" href="/practice/speaking">Practise in the simulator →</Link>
      {p.id === 'part1' && <Link className="btn soft" href="/speaking/topics">Part 1 topic bank</Link>}
      {p.id !== 'part1' && <Link className="btn soft" href="/speaking/cue-cards">Cue cards</Link>}
      <Link className="btn soft" href="/speaking/phrases">Phrases & idioms</Link>
    </div>
  );
  return (
    <>
      <PageHeader crumbs={[['Speaking', '/speaking'], [p.name]]} title={p.name} lead={p.desc} />
      <SubNav items={SECTION_NAV.speaking} />
      <ChapterView ch={ch} accent="speaking" extras={[
        { id: 'technique', title: 'Technique summary', node: technique, after: 'method' },
        { id: 'samples', title: 'Band 8+ sample answers (with audio)', node: samples, after: 'worked' },
        { id: 'practise', title: 'Practise this part', node: practise, after: 'end' }
      ]} />
    </>
  );
}

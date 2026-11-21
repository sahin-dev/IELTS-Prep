import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/ui';
import { SpeakButton, SubNav } from '@/components/client-ui';
import { ChapterView } from '@/components/ChapterView';
import { SECTION_NAV } from '@/lib/nav';
import { pronunciationChapters } from '@/content/book';

type Params = { params: Promise<{ topic: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return Object.keys(pronunciationChapters).map(topic => ({ topic })); }
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { topic } = await params;
  return { title: pronunciationChapters[topic]?.title || 'Pronunciation' };
}

export default async function Page({ params }: Params) {
  const { topic } = await params;
  const p = pronunciationChapters[topic];
  if (!p) notFound();
  const practice = (
    <div className="card">
      <p className="mt0">Press the speaker to hear each item (your browser&apos;s text-to-speech voice), then repeat it aloud. Record yourself and compare. Synthetic voices are a guide only – also practise with real recordings, such as the audio in a learner&apos;s dictionary.</p>
      {p.practice.map(t => <div className="q q-row" key={t}><SpeakButton text={t.replace(/[_↗↘]/g, ' ')} /> <span>{t}</span></div>)}
    </div>
  );
  return (
    <>
      <PageHeader crumbs={[['Speaking', '/speaking'], ['Pronunciation', '/speaking/pronunciation'], [p.title]]} title={p.title} lead={p.lead} />
      <SubNav items={SECTION_NAV.speaking} />
      <ChapterView ch={p.chapter} accent="speaking" extras={[{ id: 'listen', title: 'Listen and repeat', node: practice, after: 'method' }]} />
    </>
  );
}

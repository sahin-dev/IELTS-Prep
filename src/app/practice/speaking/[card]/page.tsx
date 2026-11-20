import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/ui';
import SpeakingSimulator from '@/components/SpeakingSimulator';
import { speaking } from '@/content';

type Params = { params: Promise<{ card: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return speaking.cueCards.map((_, i) => ({ card: String(i) })); }
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { card } = await params;
  return { title: speaking.cueCards[+card]?.title || 'Speaking simulator' };
}

export default async function Page({ params }: Params) {
  const { card } = await params;
  const c = speaking.cueCards[+card];
  if (!c) notFound();
  return (
    <>
      <PageHeader crumbs={[['Speaking', '/speaking'], ['Cue cards', '/speaking/cue-cards'], [c.title]]} title={c.title}
        lead="Practise Part 2 with this card (1 minute preparation, 2 minutes speaking), followed by the related Part 3 discussion." />
      <SpeakingSimulator topics={speaking.part1Topics} cards={speaking.cueCards} presetCard={+card} />
    </>
  );
}

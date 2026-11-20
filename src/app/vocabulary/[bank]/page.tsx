import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import VocabBankView from '@/components/VocabBankView';
import { ChapterView } from '@/components/ChapterView';
import { SECTION_NAV } from '@/lib/nav';
import { vocabBanks } from '@/content';
import { vocabChapters } from '@/content/book';

type Params = { params: Promise<{ bank: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return vocabBanks.map(b => ({ bank: b.id })); }
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { bank } = await params;
  return { title: vocabBanks.find(b => b.id === bank)?.name || 'Vocabulary' };
}

export default async function Page({ params }: Params) {
  const { bank } = await params;
  const b = vocabBanks.find(x => x.id === bank);
  if (!b) notFound();
  const ch = vocabChapters[b.id];
  return (
    <>
      <PageHeader crumbs={[['Vocabulary', '/vocabulary'], [b.section], [b.name]]} title={b.name} lead={<span dangerouslySetInnerHTML={{ __html: b.intro }} />} />
      <SubNav items={SECTION_NAV.language} />
      {ch
        ? <ChapterView ch={ch} accent="vocab" extras={[{ id: 'bank', title: 'The word bank: list, flashcards and quiz', node: <VocabBankView bank={b} />, after: 'end' }]} />
        : <VocabBankView bank={b} />}
    </>
  );
}

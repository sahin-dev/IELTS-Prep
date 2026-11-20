import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import VocabBankView from '@/components/VocabBankView';
import { SECTION_NAV } from '@/lib/nav';
import { vocabBanks } from '@/content';

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
  return (
    <>
      <PageHeader crumbs={[['Vocabulary', '/vocabulary'], [b.section], [b.name]]} title={b.name} lead={<span dangerouslySetInnerHTML={{ __html: b.intro }} />} />
      <SubNav items={SECTION_NAV.language} />
      <VocabBankView bank={b} />
    </>
  );
}

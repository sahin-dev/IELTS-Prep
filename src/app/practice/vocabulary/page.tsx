import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import { MixedVocabQuiz } from '@/components/VocabBankView';
import { SECTION_NAV } from '@/lib/nav';
import { vocabBanks } from '@/content';

export const metadata: Metadata = { title: 'Vocabulary quiz' };

export default function Page() {
  return (
    <>
      <PageHeader crumbs={[['Practice', '/practice'], ['Vocabulary quiz']]} title="Vocabulary quiz" lead="Choose a word bank, or take a mixed quiz of 20 questions from all banks." />
      <SubNav items={SECTION_NAV.practice} />
      <MixedVocabQuiz banks={vocabBanks} />
    </>
  );
}

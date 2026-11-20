import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import { ChapterView } from '@/components/ChapterView';
import { SECTION_NAV } from '@/lib/nav';
import { listeningFundamentals } from '@/content/book';

export const metadata: Metadata = { title: 'Listening fundamentals' };

export default function Page() {
  return (
    <>
      <PageHeader crumbs={[['Listening', '/listening'], ['Fundamentals']]} title="Listening fundamentals"
        lead="How the Listening test works and the core skills that apply to every question type." />
      <SubNav items={SECTION_NAV.listening} />
      <ChapterView ch={listeningFundamentals} accent="listening" />
    </>
  );
}

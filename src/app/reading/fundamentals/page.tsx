import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import { ChapterView } from '@/components/ChapterView';
import { SECTION_NAV } from '@/lib/nav';
import { readingFundamentals } from '@/content/book';

export const metadata: Metadata = { title: 'Reading fundamentals' };

export default function Page() {
  return (
    <>
      <PageHeader crumbs={[['Reading', '/reading'], ['Fundamentals']]} title="Reading fundamentals"
        lead="How the Reading test works and the core skills that apply to every question type." />
      <SubNav items={SECTION_NAV.reading} />
      <ChapterView ch={readingFundamentals} accent="reading" />
    </>
  );
}

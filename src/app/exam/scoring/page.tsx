import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import { ChapterView } from '@/components/ChapterView';
import { SECTION_NAV } from '@/lib/nav';
import { examScoring } from '@/content/book';

export const metadata: Metadata = { title: 'How IELTS is scored' };

export default function Page() {
  return (
    <>
      <PageHeader crumbs={[['The IELTS Book', '/book'], ['The IELTS test explained', '/exam'], ['How IELTS is scored']]} title="How IELTS is scored"
        lead="The nine-band scale, how each skill is marked, how the overall band is calculated and rounded, what half bands mean – and the cheapest route to your target." />
      <SubNav items={SECTION_NAV.exam} />
      <ChapterView ch={examScoring} accent="primary" />
    </>
  );
}

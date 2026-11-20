import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import { ChapterView } from '@/components/ChapterView';
import { SECTION_NAV } from '@/lib/nav';
import { examFormat } from '@/content/book';

export const metadata: Metadata = { title: 'The IELTS test explained' };

export default function ExamPage() {
  return (
    <>
      <PageHeader crumbs={[['The IELTS Book', '/book'], ['The IELTS test explained']]} title="The IELTS test explained"
        lead="What IELTS is, Academic or General Training, the four skills in detail, every question type, and how the test is delivered in 2026." />
      <SubNav items={SECTION_NAV.exam} />
      <ChapterView ch={examFormat} accent="primary" />
    </>
  );
}

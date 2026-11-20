import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import { ChapterView } from '@/components/ChapterView';
import { SECTION_NAV } from '@/lib/nav';
import { examDay } from '@/content/book';

export const metadata: Metadata = { title: 'Booking, test day and results' };

export default function Page() {
  return (
    <>
      <PageHeader crumbs={[['The IELTS Book', '/book'], ['The IELTS test explained', '/exam'], ['Booking, test day and results']]} title="Booking, test day and results"
        lead="Choosing and booking the right test, what happens on the day, results, remarks, One Skill Retake – and the examination mistakes to avoid in every skill." />
      <SubNav items={SECTION_NAV.exam} />
      <ChapterView ch={examDay} accent="primary" />
    </>
  );
}

import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui';
import { ChapterView } from '@/components/ChapterView';
import { studyMethod } from '@/content/book';

export const metadata: Metadata = { title: 'How to prepare: the study method' };

export default function Page() {
  return (
    <>
      <PageHeader crumbs={[['The IELTS Book', '/book'], ['How to prepare']]} title="How to prepare: the study method"
        lead="How to find your level, plan your weeks and use the learn → practise → review loop that raises your band." />
      <ChapterView ch={studyMethod} accent="primary" />
    </>
  );
}

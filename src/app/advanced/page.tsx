import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui';
import { ChapterView } from '@/components/ChapterView';
import { advancedChapters, advancedOverview } from '@/content/book/advanced';

export const metadata: Metadata = { title: 'Advanced English beyond the exam' };

export default function Page() {
  const grid = (
    <div className="grid">
      {Object.entries(advancedChapters).map(([id, a], i) => (
        <Link key={id} className="tile" href={`/advanced/${id}`}><h3>{i + 1}. {a.title}</h3><p>{a.lead}</p></Link>
      ))}
    </div>
  );
  return (
    <>
      <PageHeader crumbs={[['The IELTS Book', '/book'], ['Advanced English']]} title="Advanced English beyond the exam"
        lead="Critical thinking, argument, summarising, note-taking, research and presentation skills – the English behind a high band, and the English you will need afterwards." />
      <ChapterView ch={advancedOverview} accent="primary" extras={[{ id: 'chapters', title: 'The chapters', node: grid, after: 'intro' }]} />
    </>
  );
}

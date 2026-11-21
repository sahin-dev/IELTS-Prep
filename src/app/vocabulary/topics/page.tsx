import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import { ChapterView } from '@/components/ChapterView';
import { SECTION_NAV } from '@/lib/nav';
import { vocabBanks } from '@/content';
import { topicVocabChapter } from '@/content/book';

export const metadata: Metadata = { title: 'Topic vocabulary' };

export default function Page() {
  const topics = vocabBanks.filter(b => b.section === 'Topic vocabulary');
  const grid = (
    <div className="grid">
      {topics.map(b => (
        <Link key={b.id} className="tile c-vocab" href={`/vocabulary/${b.id}`}>
          <h3>{b.name}</h3>
          <p>{b.groups.reduce((a, g) => a + g.items.length, 0)} entries · list, flashcards and quiz</p>
        </Link>
      ))}
    </div>
  );
  return (
    <>
      <PageHeader crumbs={[['Vocabulary', '/vocabulary'], ['Topic vocabulary']]} title="Topic vocabulary"
        lead={`${topics.length} topics that appear again and again in Writing Task 2 and Speaking – each with collocations, examples, flashcards and a quiz.`} />
      <SubNav items={SECTION_NAV.language} />
      <ChapterView ch={topicVocabChapter} accent="vocab" extras={[{ id: 'topic-banks', title: `The ${topics.length} topic banks`, node: grid, after: 'intro' }]} />
    </>
  );
}

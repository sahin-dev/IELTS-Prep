import type { Metadata } from 'next';
import { Html, PageHeader, Tile } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import { ChapterView } from '@/components/ChapterView';
import { SECTION_NAV } from '@/lib/nav';
import { writing } from '@/content';
import { lettersMethod } from '@/content/book';

export const metadata: Metadata = { title: 'General Training letters: the method' };

export default function LettersHome() {
  return (
    <>
      <PageHeader crumbs={[['Writing', '/writing'], ['GT letters']]} title="General Training Task 1: the letter method"
        lead="Cover all three bullet points with specific details, in a tone that matches your reader." />
      <SubNav items={SECTION_NAV.writing} />
      <ChapterView ch={lettersMethod} accent="writing" extras={[
        { id: 'overview', title: 'Letter types at a glance', node: <Html html={writing.gt.intro} />, after: 'method' },
        { id: 'types', title: 'Chapters for each letter type', node: <div className="grid">{writing.gt.types.map(t => <Tile key={t.id} href={`/writing/letters/${t.id}`} accent="writing" title={t.name}>Method, phrases, model letter and practice prompts.</Tile>)}</div>, after: 'end' }
      ]} />
    </>
  );
}

/* Shared page for the four "Band score development" chapters */
import { PageHeader } from './ui';
import { SubNav } from './client-ui';
import { ChapterView } from './ChapterView';
import { SECTION_NAV } from '@/lib/nav';
import { bandChapters } from '@/content/book/bands';

export const BAND_PAGES = {
  overview: { title: 'Band levels from 4 to 9', lead: 'What changes from one band to the next in each skill, what half bands mean, and how to measure the gap to your target.' },
  writing: { title: 'Writing at every band', lead: 'One Task 2 question answered at about Band 5, 6, 7 and 8+, with commentary on every criterion.' },
  speaking: { title: 'Speaking at every band', lead: 'One Part 3 question answered at about Band 5, 6, 7 and 8+, with commentary on every criterion.' },
  objective: { title: 'Listening and Reading by band', lead: 'Raw scores, typical error profiles at each band, and what to practise next.' }
} as const;

export default function BandChapterPage({ id }: { id: keyof typeof BAND_PAGES }) {
  const p = BAND_PAGES[id];
  return (
    <>
      <PageHeader crumbs={[['The IELTS Book', '/book'], ['Band score development', '/bands'], [p.title]]} title={p.title} lead={p.lead} />
      <SubNav items={SECTION_NAV.bands} />
      <ChapterView ch={bandChapters[id]} accent="primary" />
    </>
  );
}

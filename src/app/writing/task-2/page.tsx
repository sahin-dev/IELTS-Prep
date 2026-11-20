import type { Metadata } from 'next';
import { Html, PageHeader, Tile } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import { ChapterView } from '@/components/ChapterView';
import { SECTION_NAV } from '@/lib/nav';
import { writingTask2 } from '@/content';
import { task2Method } from '@/content/book';

export const metadata: Metadata = { title: 'Writing Task 2: the essay method' };

export default function Task2Home() {
  return (
    <>
      <PageHeader crumbs={[['Writing', '/writing'], ['Task 2']]} title="Writing Task 2: the essay method"
        lead="Analyse the question, plan for five minutes, then write well-developed PEEL paragraphs with a clear position." />
      <SubNav items={SECTION_NAV.writing} />
      <ChapterView ch={task2Method} accent="writing" extras={[
        { id: 'reference', title: 'Quick reference: the 5-step method and band 7 checklist', node: <div className="card"><Html html={writingTask2.overview} /></div>, after: 'sections' },
        { id: 'types', title: 'Chapters for each essay type', node: <div className="grid">{writingTask2.types.map(t => <Tile key={t.id} href={`/writing/task-2/${t.id}`} accent="writing" title={t.name}>{t.recognise[0]}</Tile>)}</div>, after: 'end' }
      ]} />
    </>
  );
}

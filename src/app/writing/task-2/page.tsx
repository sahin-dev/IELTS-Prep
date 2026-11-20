import type { Metadata } from 'next';
import { Html, PageHeader, Tile } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import { SECTION_NAV } from '@/lib/nav';
import { writingTask2 } from '@/content';

export const metadata: Metadata = { title: 'Writing Task 2 essays' };

export default function Task2Home() {
  return (
    <>
      <PageHeader crumbs={[['Writing', '/writing'], ['Task 2']]} title="Writing Task 2: essays"
        lead="Identify the essay type, analyse the question, plan for five minutes, then write well-developed PEEL paragraphs." />
      <SubNav items={SECTION_NAV.writing} />
      <h2 className="mt0">Essay types</h2>
      <div className="grid">{writingTask2.types.map(t => <Tile key={t.id} href={`/writing/task-2/${t.id}`} accent="writing" title={t.name}>{t.recognise[0]}</Tile>)}</div>
      <h2>The method</h2>
      <Html html={writingTask2.overview} />
    </>
  );
}

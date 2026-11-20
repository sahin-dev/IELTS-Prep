import type { Metadata } from 'next';
import { PageHeader, Tile } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import { ChapterView } from '@/components/ChapterView';
import { SECTION_NAV } from '@/lib/nav';
import { task1Mistakes, writing } from '@/content';
import { task1Method } from '@/content/book';

export const metadata: Metadata = { title: 'Writing Task 1 Academic: the method' };

export default function Task1Home() {
  const types = <div className="grid">{writing.task1.map(t => <Tile key={t.id} href={`/writing/task-1/${t.id}`} accent="writing" title={t.name}>{t.summary}</Tile>)}</div>;
  const mistakes = (
    <div className="table-wrap"><table className="data-table"><tbody>
      <tr><th>Mistake</th><th>Fix</th></tr>
      {task1Mistakes.map(([m, fix]) => <tr key={m}><td>{m}</td><td>{fix}</td></tr>)}
    </tbody></table></div>
  );
  return (
    <>
      <PageHeader crumbs={[['Writing', '/writing'], ['Task 1 Academic']]} title="Writing Task 1 (Academic): the method"
        lead="Summarise visual information in at least 150 words. The overview of main trends is the single most important part of your answer." />
      <SubNav items={SECTION_NAV.writing} />
      <ChapterView ch={task1Method} accent="writing" extras={[
        { id: 'mistakes', title: 'Ten common Task 1 mistakes and how to fix them', node: mistakes, after: 'careful' },
        { id: 'types', title: 'Chapters for each visual type', node: types, after: 'end' }
      ]} />
    </>
  );
}

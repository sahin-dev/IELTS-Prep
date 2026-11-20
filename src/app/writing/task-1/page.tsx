import type { Metadata } from 'next';
import { Html, PageHeader, Tile } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import { SECTION_NAV } from '@/lib/nav';
import { task1Mistakes, writing } from '@/content';

export const metadata: Metadata = { title: 'Writing Task 1 Academic' };

export default function Task1Home() {
  return (
    <>
      <PageHeader crumbs={[['Writing', '/writing'], ['Task 1 Academic']]} title="Writing Task 1 (Academic)"
        lead="Summarise visual information in at least 150 words. The overview of main trends is the single most important part of your answer." />
      <SubNav items={SECTION_NAV.writing} />
      <h2 className="mt0">Choose a visual type</h2>
      <div className="grid">{writing.task1.map(t => <Tile key={t.id} href={`/writing/task-1/${t.id}`} accent="writing" title={t.name}>{t.summary}</Tile>)}</div>
      <Html html={writing.overview} />
      <h3>Ten common Task 1 mistakes</h3>
      <div className="table-wrap"><table className="data-table"><tbody>
        {task1Mistakes.map(([m, fix]) => <tr key={m}><td>{m}</td><td>{fix}</td></tr>)}
      </tbody></table></div>
    </>
  );
}

import type { Metadata } from 'next';
import { Html, PageHeader, Tile } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import { SECTION_NAV } from '@/lib/nav';
import { writing } from '@/content';

export const metadata: Metadata = { title: 'General Training letters' };

export default function LettersHome() {
  return (
    <>
      <PageHeader crumbs={[['Writing', '/writing'], ['GT letters']]} title="General Training Task 1: letters" />
      <SubNav items={SECTION_NAV.writing} />
      <Html html={writing.gt.intro} />
      <div className="grid">{writing.gt.types.map(t => <Tile key={t.id} href={`/writing/letters/${t.id}`} accent="writing" title={t.name}>Phrases, a model letter and practice prompts.</Tile>)}</div>
    </>
  );
}

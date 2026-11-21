import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import PracticeLibrary from '@/components/PracticeLibrary';
import Recommendations from '@/components/Recommendations';
import { SECTION_NAV } from '@/lib/nav';
import { buildLearnMap, buildLibrary } from '@/lib/library';

export const metadata: Metadata = { title: 'Practice library' };

export default function Page() {
  const items = buildLibrary();
  return (
    <>
      <PageHeader crumbs={[['Practice', '/practice'], ['Library']]} title="Practice library"
        lead={`Every practice item on the site – ${items.length} in all – searchable by skill, question type, kind, level and the time you have.`} />
      <SubNav items={SECTION_NAV.practice} />
      <Recommendations map={buildLearnMap()} limit={3} />
      <PracticeLibrary items={items} />
    </>
  );
}

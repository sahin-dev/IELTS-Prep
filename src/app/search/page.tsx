import type { Metadata } from 'next';
import { Suspense } from 'react';
import { PageHeader } from '@/components/ui';
import SearchView from '@/components/SearchView';
import { buildSearchIndex } from '@/lib/search';

export const metadata: Metadata = { title: 'Search' };

export default function Page() {
  const index = buildSearchIndex();
  return (
    <>
      <PageHeader crumbs={[['Search']]} title="Search" lead={`Search ${index.length} entries: vocabulary, question types, writing prompts, grammar topics, speaking topics and practice sets.`} />
      <Suspense fallback={<p className="muted">Loading search…</p>}>
        <SearchView index={index} />
      </Suspense>
    </>
  );
}

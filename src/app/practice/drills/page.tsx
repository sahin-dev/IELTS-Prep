import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import DictationDrills from '@/components/DictationDrills';
import { SECTION_NAV } from '@/lib/nav';

export const metadata: Metadata = { title: 'Listening dictation drills' };

export default function Page() {
  return (
    <>
      <PageHeader crumbs={[['Practice', '/practice'], ['Dictation drills']]} title="Listening dictation drills"
        lead="Part 1 answers are often numbers, dates, prices, postcodes and names spelled letter by letter. One wrong digit or letter makes the answer wrong – these unlimited, randomly generated drills build that precision." />
      <SubNav items={SECTION_NAV.practice} />
      <DictationDrills />
      <p className="small muted">For commonly misspelled words, use the <Link href="/vocabulary/l-spelling">spelling dictation quiz</Link>.</p>
    </>
  );
}

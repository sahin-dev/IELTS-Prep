import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui';
import BandCalculator from '@/components/BandCalculator';

export const metadata: Metadata = { title: 'Band score calculator' };

export default function Page() {
  return (
    <>
      <PageHeader crumbs={[['Band calculator']]} title="Band score calculator" lead="Convert raw Listening and Reading scores to bands and calculate your overall band." />
      <BandCalculator />
    </>
  );
}

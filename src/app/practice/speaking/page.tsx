import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import SpeakingSimulator from '@/components/SpeakingSimulator';
import { SECTION_NAV } from '@/lib/nav';
import { speaking } from '@/content';

export const metadata: Metadata = { title: 'Speaking simulator' };

export default function Page() {
  return (
    <>
      <PageHeader crumbs={[['Practice', '/practice'], ['Speaking simulator']]} title="Speaking test simulator"
        lead="The examiner's questions are read aloud by your browser. Answer out loud as if you were in the exam. Record the session and listen back to check fluency, pronunciation and grammar." />
      <SubNav items={SECTION_NAV.practice} />
      <SpeakingSimulator topics={speaking.part1Topics} cards={speaking.cueCards} />
    </>
  );
}

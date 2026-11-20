import type { Metadata } from 'next';
import Link from 'next/link';
import { Html, PageHeader, Tile } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import { ChapterView } from '@/components/ChapterView';
import { SECTION_NAV } from '@/lib/nav';
import { speaking } from '@/content';
import { speakingFundamentals } from '@/content/book';

export const metadata: Metadata = { title: 'Speaking: how the test works' };

export default function SpeakingHome() {
  const parts = (
    <>
      <div className="grid">
        {speaking.parts.map(p => <Tile key={p.id} href={`/speaking/${p.id.replace('part', 'part-')}`} accent="speaking" title={p.name}>{p.desc}</Tile>)}
        <Tile href="/speaking/pronunciation" accent="speaking" title="Pronunciation">Word stress, sentence stress, intonation, chunking, connected speech, problem sounds.</Tile>
      </div>
      <h3>Practise</h3>
      <div className="grid">
        <Tile href="/speaking/topics" accent="speaking" title={`Part 1 topic bank (${speaking.part1Topics.length})`}>Familiar topics with the questions examiners ask.</Tile>
        <Tile href="/speaking/cue-cards" accent="speaking" title={`Cue cards (${speaking.cueCards.length})`}>Part 2 topics with Part 3 follow-up questions.</Tile>
        <Tile href="/speaking/phrases" accent="speaking" title="Phrases & idioms">Language for opinions, examples, speculating and buying time.</Tile>
        <Tile href="/practice/speaking" accent="speaking" title="Speaking simulator">Full mock interview with examiner voice, timers and recording.</Tile>
      </div>
      <div className="btn-row"><Link className="btn" href="/practice/speaking">Start a mock speaking test →</Link></div>
    </>
  );
  return (
    <>
      <PageHeader crumbs={[['Speaking']]} title="Speaking: how the test works"
        lead="The three parts, the four marking criteria, and the techniques that keep you fluent in every part." />
      <SubNav items={SECTION_NAV.speaking} />
      <ChapterView ch={speakingFundamentals} accent="speaking" extras={[
        { id: 'format', title: 'The three parts and how you are assessed', node: <div className="card"><Html html={speaking.intro} /></div>, after: 'intro' },
        { id: 'parts', title: 'Chapters for each part, and practice', node: parts, after: 'end' }
      ]} />
    </>
  );
}

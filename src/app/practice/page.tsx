import type { Metadata } from 'next';
import { PageHeader, Tile } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import { SetCard } from '@/components/practice-pages';
import { SECTION_NAV } from '@/lib/nav';
import { grammar, listeningSets, mockTests, readingSets, speaking } from '@/content';
import { writingTasks } from '@/lib/writing-tasks';

export const metadata: Metadata = { title: 'Practice hub' };

export default function PracticeHub() {
  return (
    <>
      <PageHeader crumbs={[['Practice']]} title="Practice hub"
        lead="Targeted practice for every question type with instant marking, explanations and band estimates. The cycle that works: learn the strategy → practise → review every mistake → log it." />
      <SubNav items={SECTION_NAV.practice} />
      <div className="grid">
        <Tile href="/practice/library" title="Practice library">Search and filter every practice item by skill, type, level and time – with personalised recommendations.</Tile>
        <Tile href="/practice/listening" accent="listening" title="Listening sets">{listeningSets.length} audio sets covering Parts 1–4 and every question type.</Tile>
        <Tile href="/practice/reading" accent="reading" title="Reading sets">{readingSets.length} sets: one or more per question type, full passages and General Training.</Tile>
        <Tile href="/practice/writing" accent="writing" title="Writing practice">{writingTasks.length} prompts with timer, analyser and model answers.</Tile>
        <Tile href="/practice/speaking" accent="speaking" title="Speaking simulator">Mock interview with examiner voice, {speaking.cueCards.length} cue cards and recording.</Tile>
        <Tile href="/practice/drills" accent="listening" title="Dictation drills">Numbers, phone numbers, prices, dates, times, postcodes and spelled names.</Tile>
        <Tile href="/practice/vocabulary" accent="vocab" title="Vocabulary quiz">Multiple-choice quizzes from every word bank.</Tile>
        <Tile href="/grammar" accent="grammar" title="Grammar exercises">{grammar.length} topics with auto-marked exercises.</Tile>
        <Tile href="/mock-tests" title="Mock tests">{mockTests.length} full 40-question tests with band scores.</Tile>
      </div>
      <h2>Listening</h2>
      <div className="grid">{listeningSets.map(s => <SetCard key={s.id} skill="listening" s={s} />)}</div>
      <h2>Reading</h2>
      <div className="grid">{readingSets.map(s => <SetCard key={s.id} skill="reading" s={s} />)}</div>
    </>
  );
}

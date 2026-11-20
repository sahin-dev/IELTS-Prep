import Link from 'next/link';
import Dashboard from '@/components/Dashboard';
import { Tile } from '@/components/ui';
import { grammar, listening, listeningSets, mockTests, reading, readingSets, speaking, studyPlan, vocabBanks, writing, writingTask2 } from '@/content';
import { writingTasks } from '@/lib/writing-tasks';

const TIPS = [
  'In T/F/NG, FALSE means the passage says the opposite. If the passage is silent, the answer is NOT GIVEN.',
  'Your Task 1 overview should contain no numbers – just the main trends.',
  'A correct Listening answer with a spelling mistake scores zero. Practise the dictation drills.',
  'In Speaking Part 1, aim for 2–4 sentences: Answer, Reason, Example.',
  'Task 2 is worth twice as much as Task 1 – never spend more than 20 minutes on Task 1.',
  'Matching headings: summarise each paragraph in your own words before reading the list.',
  'The number of + plural noun + singular verb: "The number of students HAS risen."',
  'Listen for corrections in Listening Part 1: "Sorry, I mean the 15th, not the 5th."',
  'Leave no blanks in Reading or Listening – there is no penalty for wrong answers.',
  'In Speaking Part 2, keep talking until the examiner stops you at two minutes.'
];

export default function Home() {
  const tip = TIPS[new Date().getDate() % TIPS.length];
  const vocabCount = vocabBanks.reduce((a, c) => a + c.groups.reduce((b, g) => b + g.items.length, 0), 0);
  const banks = vocabBanks.map(b => ({ id: b.id, name: b.name, words: b.groups.flatMap(g => g.items.map(i => i[0])) }));
  return (
    <>
      <div className="hero">
        <h1>Prepare for IELTS, step by step</h1>
        <p>Learn every question type and how to approach it, practise with original tests and full mock tests, and build the vocabulary, grammar and speaking skills you need for Band 7+.</p>
        <div className="btn-row">
          <Link className="btn" href="/exam">Start with the exam format</Link>
          <Link className="btn ghost" href="/practice">Go to practice</Link>
          <Link className="btn ghost" href="/mock-tests">Take a mock test</Link>
        </div>
      </div>
      <div className="callout tip"><strong>Tip of the day</strong>{tip}</div>
      <Dashboard plan={studyPlan} banks={banks} />

      <h2>How to use this platform</h2>
      <div className="grid">
        <Tile href="/exam" title="1. Understand the exam">Format, timing, scoring and band descriptors.</Tile>
        <Tile href="/listening" accent="listening" title="2. Learn each skill">Every question type: what it tests, how to approach it, common traps.</Tile>
        <Tile href="/vocabulary" accent="vocab" title="3. Build your language">Vocabulary with flashcards, grammar, sentence building, pronunciation.</Tile>
        <Tile href="/practice" accent="writing" title="4. Practise by question type">Targeted sets with explanations, writing feedback, speaking simulator.</Tile>
        <Tile href="/mock-tests" accent="speaking" title="5. Test yourself">Full 40-question mock tests, then official practice tests.</Tile>
      </div>

      <h2>Skills</h2>
      <div className="grid">
        <Tile href="/listening" accent="listening" title="Listening">{listening.types.length} question types · {listeningSets.length} audio practice sets · dictation drills</Tile>
        <Tile href="/reading" accent="reading" title="Reading">{reading.types.length} question types · {readingSets.length} practice sets · Academic & GT</Tile>
        <Tile href="/writing" accent="writing" title="Writing">{writing.task1.length} chart types · 3 letter types · {writingTask2.types.length} essay types · {writingTasks.length} prompts</Tile>
        <Tile href="/speaking" accent="speaking" title="Speaking">{speaking.part1Topics.length} Part 1 topics · {speaking.cueCards.length} cue cards · simulator · pronunciation</Tile>
        <Tile href="/vocabulary" accent="vocab" title="Vocabulary">{vocabBanks.length} word banks · {vocabCount} entries · spaced-repetition flashcards</Tile>
        <Tile href="/grammar" accent="grammar" title="Grammar & sentences">{grammar.length} topics with auto-marked exercises</Tile>
        <Tile href="/mock-tests" title="Mock tests">{mockTests.length} full 40-question tests with band scores</Tile>
      </div>
    </>
  );
}

import Link from 'next/link';
import Dashboard from '@/components/Dashboard';
import Recommendations from '@/components/Recommendations';
import { buildLearnMap, buildLibrary } from '@/lib/library';
import { Tile } from '@/components/ui';
import { bookChapters } from '@/content/book/toc';
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

const SKILL_EXPLAINERS = [
  {
    name: 'Listening', accent: 'listening', href: '/listening', format: '4 parts · 40 questions',
    summary: 'Follow a conversation or talk once, recognise paraphrase, and write an exact answer while the recording continues.',
    focus: 'Prediction · signposting · distractors · spelling'
  },
  {
    name: 'Reading', accent: 'reading', href: '/reading', format: '3 sections · 40 questions',
    summary: 'Locate evidence quickly, distinguish a writer’s claim from your own knowledge, and match paraphrased ideas under time pressure.',
    focus: 'Skimming · scanning · evidence · paraphrase'
  },
  {
    name: 'Writing', accent: 'writing', href: '/writing', format: '2 tasks · 60 minutes',
    summary: 'Answer every part of the task, organise a clear position, develop ideas with precise support, and control grammar and vocabulary.',
    focus: 'Task response · coherence · vocabulary · grammar'
  },
  {
    name: 'Speaking', accent: 'speaking', href: '/speaking', format: '3 parts · 11–14 minutes',
    summary: 'Respond naturally, extend ideas without memorising scripts, speak clearly, and handle more abstract discussion in Part 3.',
    focus: 'Fluency · vocabulary · grammar · pronunciation'
  }
] as const;

export default function Home() {
  const tip = TIPS[new Date().getDate() % TIPS.length];
  const vocabCount = vocabBanks.reduce((a, c) => a + c.groups.reduce((b, g) => b + g.items.length, 0), 0);
  const banks = vocabBanks.map(b => ({ id: b.id, name: b.name, words: b.groups.flatMap(g => g.items.map(i => i[0])) }));
  const libraryCount = buildLibrary().length;

  return (
    <>
      <section className="hero hero-home">
        <div className="hero-copy">
          <span className="eyebrow">A complete, independent IELTS course</span>
          <h1>Turn IELTS practice into a clear study plan</h1>
          <p>Learn the reason behind every answer, apply a repeatable method to each question type, and use your saved results to decide what to study next.</p>
          <div className="btn-row">
            <Link className="btn" href="/diagnostic">Find my starting level</Link>
            <Link className="btn ghost" href="/book">Browse the full course</Link>
          </div>
          <div className="hero-facts" aria-label="Course contents">
            <span><b>{bookChapters.length}</b> guided chapters</span>
            <span><b>{libraryCount}</b> practice activities</span>
            <span><b>{vocabCount.toLocaleString('en')}</b> vocabulary entries</span>
          </div>
        </div>
        <div className="hero-panel">
          <span className="eyebrow">The study loop</span>
          <ol>
            <li><b>Learn</b><span>Understand the rule and see it modelled.</span></li>
            <li><b>Practise</b><span>Apply one method to one question type.</span></li>
            <li><b>Review</b><span>Explain the error, not only the answer.</span></li>
            <li><b>Retest</b><span>Use timed sets to make the skill automatic.</span></li>
          </ol>
        </div>
      </section>

      <section aria-labelledby="start-heading">
        <div className="section-heading">
          <div><span className="eyebrow text-accent">Start with your situation</span><h2 id="start-heading">Choose the right first step</h2></div>
          <p>You do not need to read the course from beginning to end. Pick the route that matches what you know today.</p>
        </div>
        <div className="path-grid">
          <Link href="/exam" className="path-card"><span className="path-label">I am new to IELTS</span><h3>Understand the test first</h3><p>Compare Academic and General Training, learn the four test sections, question formats and scoring system.</p><span className="path-link">Learn the exam format</span></Link>
          <Link href="/diagnostic" className="path-card"><span className="path-label">I know the format</span><h3>Diagnose strengths and gaps</h3><p>Complete a structured one-week check across all four skills and turn the results into recommendations.</p><span className="path-link">Start the diagnostic</span></Link>
          <Link href="/progress" className="path-card"><span className="path-label">I am already studying</span><h3>Follow a focused weekly plan</h3><p>Set your exam date, work through the eight-week schedule and give extra time to the skills costing you marks.</p><span className="path-link">Open my study plan</span></Link>
        </div>
      </section>

      <div className="callout tip daily-tip"><strong>Tip of the day</strong>{tip}</div>
      <Dashboard plan={studyPlan} banks={banks} />
      <Recommendations map={buildLearnMap()} />

      <section aria-labelledby="skills-heading" className="home-section">
        <div className="section-heading">
          <div><span className="eyebrow text-accent">Know what each skill demands</span><h2 id="skills-heading">Four tests, four different jobs</h2></div>
          <p>A strong overall band comes from training the exact thinking process each section rewards—not from doing undirected practice tests.</p>
        </div>
        <div className="skill-explainer-grid">
          {SKILL_EXPLAINERS.map(skill => (
            <Link key={skill.name} href={skill.href} className={`skill-explainer c-${skill.accent}`}>
              <div className="skill-explainer-top"><h3>{skill.name}</h3><span>{skill.format}</span></div>
              <p>{skill.summary}</p>
              <div className="skill-focus">Train: {skill.focus}</div>
            </Link>
          ))}
        </div>
        <div className="callout advice"><strong>Important distinction</strong>Listening and Reading are scored from correct answers. Writing and Speaking are judged against four assessment criteria, so improvement requires both language development and task-specific technique. Start with <Link href="/bands">the band-level guide</Link> if you are unsure what separates your current level from your target.</div>
      </section>

      <section aria-labelledby="method-heading" className="home-section">
        <div className="section-heading">
          <div><span className="eyebrow text-accent">A method that produces evidence</span><h2 id="method-heading">How to study one topic properly</h2></div>
          <p>Use this sequence for a question type, grammar point, vocabulary topic or pronunciation feature.</p>
        </div>
        <ol className="learning-loop">
          <li><span>Understand</span><b>Read the chapter</b><p>Learn what the task tests, the instruction rules, the ordered method and the most common traps.</p></li>
          <li><span>Observe</span><b>Study a worked answer</b><p>Follow the reasoning from evidence to answer. For productive skills, notice how ideas are organised and supported.</p></li>
          <li><span>Apply</span><b>Practise without help</b><p>Use a targeted set before a full mock. Accuracy comes first; add strict timing after the method is stable.</p></li>
          <li><span>Reflect</span><b>Keep an error rule</b><p>Write what caused the mistake and what you will do next time. Revisit the same skill until that rule works under pressure.</p></li>
        </ol>
      </section>

      <section aria-labelledby="course-heading" className="home-section">
        <div className="section-heading">
          <div><span className="eyebrow text-accent">Explore the course</span><h2 id="course-heading">Lessons, language and exam practice</h2></div>
          <p>Every section links explanation to practice, so you can move from a weak result directly to the lesson that addresses it.</p>
        </div>
        <div className="grid">
          <Tile href="/listening" accent="listening" title="Listening">{listening.types.length} question types · {listeningSets.length} practice sets · dictation and prediction drills</Tile>
          <Tile href="/reading" accent="reading" title="Reading">{reading.types.length} question types · {readingSets.length} practice sets · Academic and General Training guidance</Tile>
          <Tile href="/writing" accent="writing" title="Writing">{writing.task1.length} chart types · {writing.gt.types.length} letter types · {writingTask2.types.length} essay types · {writingTasks.length} prompts</Tile>
          <Tile href="/speaking" accent="speaking" title="Speaking">{speaking.part1Topics.length} Part 1 topics · {speaking.cueCards.length} cue cards · simulator · pronunciation</Tile>
          <Tile href="/vocabulary" accent="vocab" title="Vocabulary">{vocabBanks.length} word banks · {vocabCount} entries · topic language and spaced-repetition review</Tile>
          <Tile href="/grammar" accent="grammar" title="Grammar & sentences">{grammar.length} progressive topics with explanations, examples and auto-marked exercises</Tile>
          <Tile href="/practice/library" title="Practice library">Search and filter {libraryCount} activities by skill, level, question type and study time.</Tile>
          <Tile href="/mock-tests" title="Mock tests">{mockTests.length} full 40-question tests with timing, saved results and estimated band conversion.</Tile>
        </div>
      </section>
    </>
  );
}

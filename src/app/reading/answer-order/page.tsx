import type { Metadata } from 'next';
import Link from 'next/link';
import { SubNav } from '@/components/client-ui';
import { PageHeader } from '@/components/ui';
import { SECTION_NAV } from '@/lib/nav';

export const metadata: Metadata = {
  title: 'Reading answer order: what to answer first',
  description: 'A practical IELTS Reading question order, passage-order guide and full-passage question map.'
};

const orderRows = [
  ['Matching headings', 'Usually first (with a time cap)', 'No', 'Every assigned paragraph', 'It creates a paragraph map. If it is taking too long, leave it and return after an ordered task.'],
  ['True / False / Not Given', 'Early', 'Yes', 'Local evidence', 'Answer consecutively. The evidence for the next statement normally appears after the previous answer.'],
  ['Yes / No / Not Given', 'Early', 'Yes', 'Local evidence + writer’s position', 'Skim for the writer’s overall position first, then answer consecutively.'],
  ['Detail multiple choice', 'Early / middle', 'Usually', 'Local evidence', 'Question stems normally move forward through the passage. Options can contain distractors from nearby sentences.'],
  ['Sentence completion', 'Early', 'Yes', 'Local evidence', 'Fast to locate because grammar predicts the missing word type.'],
  ['Short answers', 'Early', 'Yes', 'Local evidence', 'Names, dates, numbers and nouns are efficient scanning targets.'],
  ['Matching sentence endings', 'Early / middle', 'Yes (beginnings)', 'Local evidence', 'Follow the sentence beginnings in order; use grammar to eliminate endings.'],
  ['Summary / notes / table / flow chart', 'Middle', 'Usually', 'Usually one passage section', 'The gaps normally follow the passage, but first locate the section covered by the summary.'],
  ['Diagram labels', 'Middle', 'Not guaranteed', 'Usually one descriptive section', 'Find the paragraph describing the object or process, then follow spatial language.'],
  ['Matching features', 'Late', 'No', 'Several places across the passage', 'A person, place or category may appear more than once. Build notes while doing other tasks.'],
  ['Matching information to paragraphs', 'Late', 'No', 'Whole passage', 'The statements are not ordered and one paragraph may be used more than once.'],
  ['Main idea / purpose / title MCQ', 'Last', 'No', 'Whole passage or whole paragraph', 'Your understanding is strongest after the detail questions.'],
];

export default function ReadingAnswerOrderPage() {
  return (
    <>
      <PageHeader
        crumbs={[[ 'Reading', '/reading' ], [ 'Answer order' ]]}
        title="IELTS Reading: which questions should I answer first?"
        lead="Use a passage map first, bank marks from questions that move through the text, and leave whole-passage matching tasks until you know the passage."
      />
      <SubNav items={SECTION_NAV.reading} />

      <div className="callout warn">
        <strong>First, the important truth</strong>
        IELTS does not require you to answer question types in a fixed order. The question numbers show where answers go on the answer sheet, not the order in which you must solve them. The sequence below is a time-management strategy, not an official rule.
      </div>

      <div className="section-intro">
        <div className="kpi"><b>1–2 minutes</b><span>Survey the passage and all task groups</span></div>
        <div className="kpi"><b>17 / 20 / 23</b><span>Suggested minutes for Academic Passages 1 / 2 / 3</span></div>
        <div className="kpi"><b>60 minutes</b><span>Read, answer and transfer—there is no extra transfer time</span></div>
        <div className="kpi"><b>Never blank</b><span>Guess before leaving a passage; wrong answers have no penalty</span></div>
      </div>

      <section className="card">
        <h2 className="mt0">Recommended order inside each passage</h2>
        <ol className="steps">
          <li><b>Survey every task before reading deeply.</b> Circle word limits and notice which tasks are ordered, unordered or global. Read the title, introduction and paragraph labels.</li>
          <li><b>Build a quick paragraph map.</b> Read each paragraph’s first sentence and glance for names, dates and contrast words. Write a 2–4 word note such as “early failures” or “new solution”. Do not try to understand every word.</li>
          <li><b>Do matching headings first if you can do them efficiently.</b> Headings create the map needed for later tasks. Give them a firm time cap—about 60–75 seconds per paragraph. If two headings remain confusing, mark them and continue.</li>
          <li><b>Do passage-order tasks next.</b> Work through T/F/NG, Y/N/NG, detail MCQ, sentence completion, short answers and matching sentence endings in question-number order. Use the location of one answer as the starting point for the next.</li>
          <li><b>Do section-based completion tasks.</b> Summaries, notes, tables, flow charts and diagrams usually use one identifiable section. Find that section, then solve the gaps in order where possible.</li>
          <li><b>Finish with unordered and global tasks.</b> Do matching information, matching features, and main-purpose/title questions after the earlier tasks have taught you where ideas are located.</li>
          <li><b>Check instructions, spelling and blanks.</b> Confirm the word limit, singular/plural forms and answer-sheet position. Guess any unanswered item before moving to the next passage.</li>
        </ol>
      </section>

      <h2>Question-type order and passage scope</h2>
      <p className="muted">“Follows passage order” means the evidence for question 2 normally appears after the evidence for question 1 within that task group. It does not mean the answer is always in the next paragraph.</p>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Question type</th><th>When to do it</th><th>Answers follow passage order?</th><th>How much text?</th><th>Best use</th></tr></thead>
          <tbody>{orderRows.map(row => <tr key={row[0]}>{row.map((cell, i) => <td key={i}>{cell}</td>)}</tr>)}</tbody>
        </table>
      </div>

      <div className="grid-2">
        <section className="card">
          <h2 className="mt0">Answer these first</h2>
          <ol>
            <li><b>Headings</b>, when present and manageable, to map the passage.</li>
            <li><b>Completion and short-answer tasks</b>, because grammar and visible keywords make locations easier to find.</li>
            <li><b>T/F/NG or Y/N/NG</b>, moving forward one statement at a time.</li>
            <li><b>Detail MCQ</b>, using the map and the last known answer location.</li>
          </ol>
          <p className="muted">If headings are your weakest type, do one ordered task first and return to headings with a better map. Strategy should protect marks, not force a rigid ritual.</p>
        </section>
        <section className="card">
          <h2 className="mt0">Leave these until later</h2>
          <ol>
            <li><b>Matching information</b> to paragraph letters.</li>
            <li><b>Matching features</b> such as researchers, places or dates.</li>
            <li><b>Whole-passage purpose, title or main-idea MCQ.</b></li>
            <li>Any difficult item that has already used more than about 75–90 seconds.</li>
          </ol>
          <p className="muted">These become faster after other questions have made you revisit most of the passage.</p>
        </section>
      </div>

      <section className="card">
        <h2 className="mt0">Two worked examples</h2>
        <h3>Example A: headings + T/F/NG + summary</h3>
        <p><b>Best working order:</b> headings → T/F/NG in number order → summary gaps in number order → return to uncertain headings → final check.</p>
        <p>The headings create a map; T/F/NG then moves forward through the text; the summary usually covers one section and its gaps normally follow that section.</p>
        <h3>Example B: matching information + sentence completion + MCQ</h3>
        <p><b>Best working order:</b> sentence completion → detail MCQ → matching information → global MCQ (if present) → final check.</p>
        <p>Do not start with matching information merely because it has the lowest question numbers. It searches the whole passage in random order, while completion questions give you easy location anchors.</p>
      </section>

      <section className="card">
        <h2 className="mt0">How to work through an ordered question group</h2>
        <ol className="steps">
          <li>Read only the next question and underline its unique meaning—not every common word.</li>
          <li>Predict paraphrases and the likely answer type.</li>
          <li>Start scanning after the location of the previous answer.</li>
          <li>When you find the idea, read one sentence before and after it carefully.</li>
          <li>Answer, then continue forward. If you cannot find it quickly, mark it and use the next question to re-establish your location.</li>
        </ol>
        <div className="callout tip"><strong>The location bracket</strong>If you find the evidence for questions 6 and 8, the evidence for ordered question 7 is normally between those two locations. Use that bracket when you return.</div>
      </section>

      <section className="card">
        <h2 className="mt0">Academic and General Training timing</h2>
        <div className="grid-2">
          <div><h3>Academic Reading</h3><p>Passages usually become harder. A practical target is <b>17 minutes for Passage 1, 20 for Passage 2 and 23 for Passage 3</b>, including checking. Do not let an easy first passage consume time reserved for Passage 3.</p></div>
          <div><h3>General Training Reading</h3><p>Sections also become harder, but Sections 1 and 2 contain several shorter texts. Bank those factual marks quickly and protect roughly <b>25–27 minutes for Section 3</b>, the long passage.</p></div>
        </div>
      </section>

      <div className="btn-row">
        <Link className="btn" href="/practice/reading">Apply the strategy in Reading practice</Link>
        <Link className="btn soft" href="/reading">Review every Reading question type</Link>
        <Link className="btn soft" href="/mock-tests/reading-1">Take the full Reading mock test</Link>
      </div>
    </>
  );
}

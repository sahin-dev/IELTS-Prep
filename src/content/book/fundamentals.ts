import type { Chapter } from '@/lib/types';

/* Foundation chapters: how to study, Reading fundamentals, Listening fundamentals */

export const studyMethod: Chapter = {
  intro: `
<p>Most candidates prepare for IELTS by doing practice test after practice test and hoping the score goes up. It usually doesn't – or not by much. A practice test <b>measures</b> your level; it doesn't <b>raise</b> it. Your band goes up when you understand why you lose marks and fix those specific causes, one by one.</p>
<p>This book is organised to make that possible. Each skill begins with a <b>fundamentals</b> chapter (how the paper works and the core skills), followed by a chapter for <b>every question type</b> (or, in Writing and Speaking, every task type). Each chapter gives you a method in order – <i>do this first, then this</i> – a worked example with a full think-aloud solution, lists of what to do and not to do, and the traps to watch for.</p>
<p>This first chapter explains how to use the book: how to find your starting level, set a realistic target, plan your weeks, and use the <b>study loop</b> – learn, practise, review – that turns practice into progress.</p>`,
  facts: [
    ['Time to improve', 'Varies widely – plan in months, not weeks, per band'],
    ['Daily study', '60–90 minutes, 5–6 days a week'],
    ['First step', 'A timed diagnostic in all four skills'],
    ['Key habit', 'An error log reviewed every week'],
    ['Practice tests', 'Use them to measure, not to learn'],
    ['Final 2 weeks', 'Full timed tests under exam conditions']
  ],
  method: [
    { title: 'Know the test and your target', body: '<p>Read <a href="/exam">The IELTS test explained</a> and <a href="/exam/scoring">How IELTS is scored</a>. Find out exactly which band your university, employer or visa requires – overall <b>and</b> for each skill. Many institutions require, for example, 6.5 overall with no skill below 6.0. Then set your own target with a safety margin (see <i>Setting a realistic target</i> below) and write it down.</p>' },
    { title: 'Take a diagnostic test under real conditions', body: '<p>Do one Listening and one Reading <a href="/mock-tests">mock test</a> with the timer, write one Task 1 and one Task 2 response in the <a href="/practice/writing">writing practice</a> (60 minutes), and record yourself answering Speaking questions in the <a href="/practice/speaking">simulator</a>. Convert your scores with the <a href="/calculator">band calculator</a>. This shows your weakest skill and the size of the gap.</p>' },
    { title: 'Plan your weeks, weakest skill first', body: '<p>Use the <a href="/progress">8-week plan</a> as a base. Give your weakest skill about 40% of your time, but keep practising the other three every week – skills you don\'t practise get slower.</p>' },
    { title: 'For each question type: read the chapter, then practise', body: '<p>Read the chapter fully once, including the worked example (try it first, then open the solution). Then do the practice set for that type <b>untimed</b> the first time, focusing on following the method step by step.</p>' },
    { title: 'Review every mistake and find its cause', body: '<p>For each wrong answer, find the evidence in the text or transcript and decide <b>why</b> you got it wrong: vocabulary? didn\'t locate it? misread a qualifier? word limit? spelling? Write it in your error log with the correct reasoning.</p>', example: 'Error log entry: "Q5 TFNG – wrote FALSE, answer NOT GIVEN. Cause: the text didn\'t mention cost at all; I assumed. Rule: no evidence against = NOT GIVEN."' },
    { title: 'Repeat with time pressure', body: '<p>Once your accuracy is good, do the next practice set with the timer. Speed comes from a reliable method, not from reading faster.</p>' },
    { title: 'Build language every day', body: '<p>Spend 15–20 minutes daily on the language chapters: <a href="/vocabulary">vocabulary flashcards</a> (spaced repetition), <a href="/grammar">grammar topics</a>, paraphrasing and pronunciation. Language is the foundation of every band above 6.</p>' },
    { title: 'Write and speak regularly – and assess against the criteria', body: '<p>Write at least two Task 2 essays and one Task 1 per week. Use the analyser and the <a href="/writing/band-descriptors">band descriptors</a> to judge them honestly. Record speaking answers and listen back for fluency, range and pronunciation.</p>' },
    { title: 'Final two weeks: full tests and fine-tuning', body: '<p>Take full timed tests to build stamina and timing. Review your error log daily. Rest the day before the exam.</p>' }
  ],
  sections: [
    {
      id: 'loop', title: 'The study loop: learn → practise → review',
      html: `<div class="grid">
<div class="card"><h4>1. Learn</h4><p>Read the chapter. Understand the method and why each step matters. Do the worked example before reading the solution.</p></div>
<div class="card"><h4>2. Practise</h4><p>Apply the method to a practice set. First untimed and accurate, then timed.</p></div>
<div class="card"><h4>3. Review</h4><p>Analyse every mistake. Write the cause and the rule in your error log. Return to the chapter's "Be careful" section.</p></div>
</div>
<p>The review step is where most of your progress happens. A test with 10 mistakes that you review carefully is worth more than three tests done without review.</p>`
    },
    {
      id: 'realistic-target', title: 'Setting a realistic target',
      html: `<p>A good target is built from three numbers: the score you <b>need</b>, the score you have <b>now</b>, and the <b>time</b> you have. Most candidates know the first, guess the second and ignore the third. Work through all three.</p>
<h4>1. The requirement is your floor, not your target</h4>
<p>Copy the requirement exactly, including every per-skill minimum (see <a href="/exam/scoring">How IELTS is scored</a>). Then add a safety margin. Any single test is a sample of your ability: on a different day, with different topics and a different recording, the same person can score half a band higher or lower in a skill without any change in their English. If you aim for exactly the minimum, you have roughly even odds of falling just short.</p>
<div class="callout advice"><strong>Aim above the minimum</strong>Where you can, aim half a band above each per-skill minimum, especially in the skill you find least predictable (for many candidates, Writing). If your requirement is "7.0 in each skill", prepare to score 7.5 in practice.</div>
<h4>2. Your current level comes from a timed diagnostic, not from a feeling</h4>
<p>Take a full timed test in each skill (step 2 of the method above). Convert Listening and Reading with the <a href="/calculator">band calculator</a>; assess Writing and Speaking criterion by criterion, as strictly as you can. Write down five numbers: the four skills and the overall band. The gap between these and your target – skill by skill – is what your plan must close.</p>
<h4>3. Time: count hours, not weeks</h4>
<p>"Eight weeks" means very different things for someone studying one hour a week and someone studying two hours a day. Multiply weeks by realistic hours per week, and be honest about work, family and fatigue. Then compare the gap with the time:</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Gap to target (per skill)</th><th>Rough guide from teaching experience</th></tr>
<tr><td>Half a band, mostly technique errors (word limits, NOT GIVEN, timing, no overview)</td><td>Often realistic in a few weeks of focused practice</td></tr>
<tr><td>Half a band that depends on language (grammar accuracy, vocabulary range, fluency)</td><td>Usually needs two to three months or more of regular study</td></tr>
<tr><td>A full band or more</td><td>Plan for several months; consider moving your test date or taking a general English course first</td></tr>
</table></div>
<p class="muted small">These are not IELTS figures – IELTS publishes no "time per band". They describe what is typical, and individual progress varies widely.</p>
<h4>4. Check the cheapest route</h4>
<p>If only the overall band matters, look for the half bands that are cheapest for you – often in Listening or Reading, where a few more correct answers can be enough. If per-skill minimums apply, fix those first. The scoring chapter has a full worked example.</p>
<div class="callout"><strong>Example</strong>Requirement: 6.5 overall, no skill below 6.0. Diagnostic: L 6.5, R 6.0, W 5.5, S 6.0 (overall 6.0). Time: 10 weeks × 8 hours = 80 hours. Writing must rise half a band (compulsory), and one more half band is needed elsewhere for the overall 6.5. Target profile: L 6.5, R 6.5, W 6.0, S 6.0 – with practice aims of W 6.5 and R 7.0 for a safety margin. Realistic? Ambitious but possible, because the Reading gain is mostly technique. If the gap had been a full band in Writing, the honest answer would be to move the test date.</div>`
    },
    {
      id: 'targets', title: 'What a one-band improvement requires',
      html: `<div class="table-wrap"><table class="data-table">
<tr><th>From → To</th><th>Usual focus</th></tr>
<tr><td>5.0 → 6.0</td><td>Accuracy in basic grammar, core vocabulary, understanding every question type, finishing on time</td></tr>
<tr><td>6.0 → 7.0</td><td>Paraphrase recognition, distractors, NOT GIVEN logic, Task 2 development, overview in Task 1, extended speaking answers</td></tr>
<tr><td>7.0 → 8.0</td><td>Precision: qualifiers, less common vocabulary used accurately, error-free complex sentences, natural fluency, consistency across all tasks</td></tr>
</table></div>`
    }
  ],
  dos: [
    'Start with a timed diagnostic so you know where you are.',
    'Keep an error log and review it every week.',
    'Read the chapter before practising a question type.',
    'Do worked examples yourself before opening the solutions.',
    'Practise all four skills every week.',
    'Study vocabulary daily in short sessions.',
    'Take full timed tests in the last two weeks.'
  ],
  donts: [
    'Don\'t do test after test without reviewing mistakes.',
    'Don\'t memorise model essays or speaking answers to reproduce in the exam.',
    'Don\'t neglect your strongest skill – it is often the easiest place to gain half a band.',
    'Don\'t study for five hours once a week; little and often works better.',
    'Don\'t judge your writing by word count alone – use the band descriptors.'
  ],
  careful: [
    { title: 'The practice-test plateau', body: '<p>If your scores have not changed after several tests, you are measuring, not learning. Go back to the chapter for your weakest question type and review your error log for patterns.</p>' },
    { title: 'Practising at the wrong level', body: '<p>If you get fewer than half the answers right, slow down: do sets untimed, read every solution, and study the vocabulary. Speed will come later.</p>' }
  ],
  faq: [
    { q: 'How long does it take to improve by one band?', a: '<p>There is no official figure, and anyone who promises a band in a fixed number of weeks is guessing. Progress depends on your starting level, how many focused hours you study, how much English you use outside study, and which skill you are improving. As a rough guide from teaching experience: half a band in two to three months of steady study is a realistic aim for many learners in the 5–7 range, a full band usually takes longer, and progress above 7 is slower because it depends on precision. Listening and Reading often move faster than Writing and Speaking, because technique fixes some errors quickly. Measure regularly and let your own results tell you how fast you are moving.</p>' },
    { q: 'Should I take the Academic or General Training test?', a: '<p>It depends on your purpose: universities usually require Academic; migration and many work purposes require General Training. Listening and Speaking are the same in both; Reading and Writing Task 1 differ. Check with the organisation that will receive your results.</p>' }
  ],
  checklist: [
    'I know my requirement and have set a target with a safety margin, overall and for each skill.',
    'I have taken a diagnostic test in all four skills.',
    'I have a weekly plan with my weakest skill first.',
    'I have started an error log.'
  ],
  summary: [
    'Practice tests measure your level; reviewing mistakes raises it.',
    'Learn the method → practise → review: repeat for each question type.',
    'Study language every day; it underlies every band above 6.',
    'Finish with full timed tests to build stamina and timing.'
  ]
};

/* ======================================================================= */
export const readingFundamentals: Chapter = {
  intro: `
<p>The Reading test lasts <b>60 minutes</b> and has <b>40 questions</b>, each worth one mark. In <b>Academic</b> Reading there are three long passages (about 700–900 words each) taken from books, journals, magazines and newspapers, written for a non-specialist audience. They become progressively more difficult: Passage 3 is often more abstract and argumentative. In <b>General Training</b>, Section 1 contains short everyday texts (notices, advertisements, timetables), Section 2 contains work-related texts (job descriptions, staff handbooks, training materials), and Section 3 is one longer general-interest text.</p>
<p>Two facts shape your whole strategy. First, <b>there is no extra time to transfer answers</b> in Reading – on paper you must write your answers on the answer sheet within the 60 minutes. Second, <b>you cannot read everything carefully</b> in the time available. Successful candidates read <i>selectively</i>: they skim for structure, scan for locations, and read carefully only the sentences that contain answers.</p>
<p>This chapter teaches those three core skills – <b>skimming, scanning and detailed reading</b> – plus the most important language skill in the Reading test: recognising <b>paraphrase</b>. It also gives you a time plan and the rules for writing answers correctly.</p>`,
  facts: [
    ['Time', '60 minutes, no extra transfer time'],
    ['Questions', '40, one mark each'],
    ['Academic', '3 long passages, increasing difficulty'],
    ['General Training', '3 sections: everyday, workplace, one long text'],
    ['Band 7 needs about', '30/40 (Academic) · 34/40 (GT)'],
    ['Band 6 needs about', '23/40 (Academic) · 30/40 (GT)']
  ],
  tests: `
<div class="grid">
<div class="card"><h4>Skimming</h4><p>Reading quickly for the <b>general idea and structure</b>: title, first and last sentences of paragraphs, topic words. Purpose: to know what each paragraph is about. Speed: about 1–2 minutes per passage.</p></div>
<div class="card"><h4>Scanning</h4><p>Moving your eyes quickly over the text to <b>find a specific word or idea</b>: a name, number, date, technical term or synonym. You don't read – you search, and stop only when you see the target.</p></div>
<div class="card"><h4>Detailed reading</h4><p>Reading <b>slowly and precisely</b> once you have found the location: every word counts, especially qualifiers (<i>some, only, may</i>), negatives and linking words (<i>however, therefore</i>).</p></div>
</div>
<p>The rhythm of good IELTS reading is: <b>skim once → scan to a location → read that location in detail → answer → scan to the next location</b>.</p>`,
  method: [
    { title: 'Look at the questions before the passage (1 minute)', body: '<p>Check which question types you have for this passage and which question numbers. This decides your order of work. Note any task that needs the whole passage (headings, matching information, global multiple choice).</p>' },
    { title: 'Skim the passage for its structure (1½–2 minutes)', body: '<p>Read the title and any subtitle, then the first sentence or two of each paragraph. In the margin, write 2–4 words per paragraph: "history", "causes", "new solution", "criticism". This map makes all later scanning faster.</p>', example: 'Margin notes for a passage on trams: A "why removed" · B "why back" · C "modern design" · D "costs" · E "gains after opening".' },
    { title: 'Choose the order of tasks', body: '<p>A sensible default: <b>matching headings first</b> (it builds on your skim), then tasks that <b>follow passage order</b> (TFNG, YNNG, completion, short answers, most MCQ), and finally tasks that <b>need the whole passage</b> (matching information, matching features, global MCQ). See <a href="/reading/answer-order">What to answer first</a>.</p>' },
    { title: 'For each task: read instructions and the word limit', body: '<p>Circle the word limit, the answer format (TRUE/FALSE or YES/NO; letters or words) and the question range.</p>' },
    { title: 'Answer question by question: locate → read in detail → decide', body: '<p>Use the question\'s locators to scan. When you find the place, read the surrounding sentences carefully and decide. Then continue from that point for the next question (for ordered tasks).</p>' },
    { title: 'Enter answers as you go', body: '<p>On computer – the way almost every IELTS test is taken since mid-2026 – type or click each answer as soon as you decide it. There is no transfer time at the end: the 60 minutes include answering. (In the remaining paper-based tests, write each answer straight onto the answer sheet, or transfer after each passage.)</p>' },
    { title: 'Respect your time limit for each passage', body: '<p>When your time for a passage is up, guess any remaining answers and move on. A guessed answer has a chance; a blank has none.</p>' },
    { title: 'Final minute: fill every blank', body: '<p>Check that every answer box has something in it. There is no penalty for wrong answers.</p>' }
  ],
  sections: [
    {
      id: 'paraphrase', title: 'Paraphrase: the seven techniques examiners use',
      html: `<p>Questions almost never repeat the passage's words. They express the same idea differently. Learn to recognise these seven techniques:</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Technique</th><th>Passage</th><th>Question</th></tr>
<tr><td>1. Synonym</td><td>Visitor numbers <b>declined</b>.</td><td>Fewer tourists <b>came</b>.</td></tr>
<tr><td>2. Word form change</td><td>The scheme was <b>expensive</b>.</td><td>The scheme had a high <b>cost</b>.</td></tr>
<tr><td>3. Active ↔ passive</td><td>Engineers <b>designed</b> the bridge in 1930.</td><td>The bridge <b>was designed</b> in 1930.</td></tr>
<tr><td>4. Positive ↔ negative</td><td>The law <b>remained unchanged until</b> 1990.</td><td>The law <b>was not altered before</b> 1990.</td></tr>
<tr><td>5. General ↔ specific</td><td>Apples, pears and plums are grown.</td><td><b>Several fruits</b> are grown.</td></tr>
<tr><td>6. Explanation</td><td>The plant is <b>nocturnal</b>.</td><td>The plant is <b>active at night</b>.</td></tr>
<tr><td>7. Reordering / restructuring</td><td><b>Because</b> fuel was scarce, the trains stopped.</td><td>The trains stopped <b>as a result of</b> a fuel shortage.</td></tr>
</table></div>
<p>Build your paraphrase vocabulary with the <a href="/vocabulary/r-synonyms">synonyms bank</a> and the <a href="/grammar/paraphrasing">paraphrasing chapter</a>.</p>`
    },
    {
      id: 'skim-scan', title: 'How to skim and scan (with practice drills)',
      html: `<h4>Skimming technique</h4>
<ul class="steps"><li>Read the title and subtitle: what is the topic and angle?</li><li>Read the first sentence of each paragraph (sometimes the second if the first is an introduction).</li><li>Let your eyes run over the rest of the paragraph, picking up repeated nouns, names and numbers.</li><li>Write a 2–4 word margin note per paragraph.</li></ul>
<h4>Scanning technique</h4>
<ul class="steps"><li>Decide exactly what you are looking for: a capitalised name? a number? a technical term? its synonyms?</li><li>Move your eyes quickly down the text in a zig-zag or line by line without reading for meaning.</li><li>Stop only when you see the target, then switch to detailed reading.</li></ul>
<div class="callout tip"><strong>Daily drill (10 minutes)</strong>Take any article in English. Give yourself 90 seconds to write one note per paragraph (skimming). Then write five specific targets (a number, a name, a date...) and time how long it takes to find each one (scanning).</div>`
    },
    {
      id: 'timeplan', title: 'Time plans',
      html: `<div class="grid-2">
<div class="card"><h4>Academic</h4><ul><li><b>Passage 1:</b> 17 minutes</li><li><b>Passage 2:</b> 20 minutes</li><li><b>Passage 3:</b> 23 minutes</li></ul><p class="small muted">Passage 1 is usually easiest – bank marks quickly to leave more time for Passage 3.</p></div>
<div class="card"><h4>General Training</h4><ul><li><b>Section 1:</b> 15 minutes</li><li><b>Section 2:</b> 20 minutes</li><li><b>Section 3:</b> 25 minutes</li></ul><p class="small muted">Section 1 texts are short; answer quickly and save time for the long Section 3 text.</p></div>
</div>`
    },
    {
      id: 'answers', title: 'Writing answers correctly',
      html: `<ul class="checklist">
<li><b>Spelling</b> must be correct. British and American spellings are both accepted (colour/color).</li>
<li><b>Capital letters</b> are not required; writing all answers in CAPITALS is acceptable and avoids handwriting problems.</li>
<li><b>Word limits</b> are strict. Over the limit = wrong, even if the correct word is included.</li>
<li><b>Numbers</b> can be written as figures (40) or words (forty). Figures are safer and count as a number, not a word.</li>
<li><b>Singular/plural</b> must match the passage and the grammar of the gap.</li>
<li><b>Letters vs words</b>: when the task asks for a letter (A–F) or numeral (i–x), write the letter, not the word.</li>
<li><b>TRUE/FALSE vs YES/NO</b>: use the pair given in the instructions.</li>
</ul>`
    }
  ],
  worked: [
    {
      title: 'Spot the paraphrase',
      source: `<p>Although the region receives very little rain, farmers have cultivated it for centuries. They do this by channelling water from distant mountains through underground tunnels, which prevent it from evaporating in the intense heat. The system requires constant maintenance: tunnels collapse unless they are cleared regularly. Over the past fifty years, however, many tunnels have been abandoned as younger people have moved to the cities, and pumps powered by electricity have replaced them in some villages.</p>`,
      instructions: '<i>For each question idea, find the words in the passage that express the same meaning.</i>',
      questions: `<ol><li>The area is very dry.</li><li>Agriculture has a long history there.</li><li>Water loss is avoided by keeping it below ground.</li><li>The tunnels need repeated attention.</li><li>The population of rural areas has fallen.</li></ol>`,
      walk: [
        { q: '1. The area is very dry.', a: 'receives very little rain', steps: ['Technique: <b>explanation</b> – "very dry" is explained as "receives very little rain".'] },
        { q: '2. Agriculture has a long history there.', a: 'farmers have cultivated it for centuries', steps: ['Technique: <b>word form + synonym</b> – agriculture ↔ farmers cultivated; long history ↔ for centuries.'] },
        { q: '3. Water loss is avoided by keeping it below ground.', a: 'underground tunnels, which prevent it from evaporating', steps: ['Technique: <b>synonym + restructuring</b> – below ground ↔ underground; water loss avoided ↔ prevent it from evaporating.'] },
        { q: '4. The tunnels need repeated attention.', a: 'requires constant maintenance... cleared regularly', steps: ['Technique: <b>synonym</b> – need ↔ requires; repeated attention ↔ constant maintenance / cleared regularly.'] },
        { q: '5. The population of rural areas has fallen.', a: 'younger people have moved to the cities', steps: ['Technique: <b>general ↔ specific</b> – a specific fact (young people moved to cities) supports a general statement (rural population fell). Be careful: a statement like this would be TRUE only if the text clearly implies it; here "moved to the cities" from the villages does imply fewer people in the villages.'] }
      ],
      lesson: 'None of the five ideas used the passage\'s key words. Practise this "find the paraphrase" exercise with every practice passage you finish – it trains the most important skill in IELTS Reading.'
    }
  ],
  dos: [
    'Skim each passage for its structure before answering.',
    'Write a short note for each paragraph in the margin.',
    'Scan for locators, then read the located sentences in detail.',
    'Follow a time plan and move on when time is up.',
    'Write answers on the answer sheet as you go.',
    'Guess rather than leave blanks.',
    'Read in English every day to build speed and vocabulary.'
  ],
  donts: [
    'Don\'t read the whole passage slowly and carefully before looking at the questions.',
    'Don\'t look for the same words as the question – look for the same meaning.',
    'Don\'t spend 5 minutes on one question.',
    'Don\'t leave answer transfer to the end (paper test).',
    'Don\'t use your own knowledge of the topic.'
  ],
  careful: [
    { title: 'Running out of time in Passage 3', body: '<p>The most common time problem. Set and follow passage time limits; Passage 3 is usually the hardest and needs the most time.</p>' },
    { title: 'Unfamiliar topics', body: '<p>Passages often deal with topics you know nothing about – that is intentional. All the information you need is in the text. Don\'t panic over technical words; they are often explained or not needed.</p>' },
    { title: 'Unknown words', body: '<p>You will not know every word. Skip unknown words unless a question depends on them; then use context (the sentence around it, word parts, examples) to work out the meaning.</p>' }
  ],
  timing: '<p>See the time plans above. Check the clock at the end of each passage – not after every question.</p>',
  faq: [
    { q: 'Should I read the passage first or the questions first?', a: '<p>Look at the questions first (to know the tasks), skim the passage quickly for structure, then answer question by question. Reading the whole passage carefully first takes too long; reading only the questions and never skimming makes locating harder.</p>' },
    { q: 'Is the computer-delivered test different?', a: '<p>The content and timing are the same. You can highlight text, and you type your answers. You can see all questions and move between them freely.</p>' }
  ],
  checklist: ['I can skim a passage in under 2 minutes.', 'I scan for locators and switch to detailed reading at the right place.', 'I recognise the seven paraphrase techniques.', 'I follow a time plan for each passage.', 'I know the answer-writing rules.'],
  summary: ['60 minutes, 40 questions, no transfer time.', 'Skim for structure, scan to locate, read in detail to answer.', 'Paraphrase recognition is the key language skill.', 'Follow a time plan, never leave blanks.']
};

/* ======================================================================= */
export const listeningFundamentals: Chapter = {
  intro: `
<p>The Listening test has <b>four parts</b> with <b>ten questions each</b> – 40 questions in about 30 minutes. Each recording is played <b>once only</b>. The parts become progressively more difficult, and the questions in each part follow the order of the recording. You hear a range of English accents, including British, Australian, New Zealand and North American.</p>
<p>On <b>computer</b> – the way almost every IELTS test is taken since IELTS began withdrawing the paper test in mid-2026 – you type answers as you listen, and candidates report a short time at the end (about <b>2 minutes</b>) to check them. In the <b>paper-based</b> test you wrote on the question paper while listening and then had <b>10 minutes</b> to transfer your answers to an answer sheet.</p>
<p>The Listening test rewards preparation more than any other part of IELTS. Most marks are lost not because candidates cannot understand English, but because they are <b>reading the wrong question</b> when the answer comes, fall for a <b>distractor</b>, or make a <b>spelling or word-limit mistake</b>. All three can be fixed with technique. This chapter explains how each part works and the skills that apply to every question type: <b>prediction</b>, following <b>signposts</b>, handling <b>distractors</b>, and writing answers correctly.</p>`,
  facts: [
    ['Time', 'About 30 minutes, plus a short check at the end on computer'],
    ['Questions', '40, ten per part, one mark each'],
    ['Played', 'Once only'],
    ['Order', 'Questions follow the recording'],
    ['Band 7 needs about', '30/40'],
    ['Band 6 needs about', '23/40']
  ],
  method: [
    { title: 'Use every second of preparation time', body: '<p>Before each part (and before each half of a part) you get time to read the questions. Use it to read <b>only the questions you are about to hear</b>, underlining keywords and predicting answers. Never use this time to check previous answers.</p>' },
    { title: 'Predict the answer type for every gap', body: '<p>For completion tasks, decide the word class, number and type: a name? a number? a date? a plural noun? For multiple choice, note how the options differ.</p>', example: '"Cost per night: £ ______" → a number (price). "Bring a ______" → singular noun, an object.' },
    { title: 'Listen for the words around the gap, not the answer', body: '<p>The speakers paraphrase the question wording; the answer itself is usually said exactly. Listen for the <b>context</b> (synonyms of the words before and after the gap) to know the answer is coming.</p>' },
    { title: 'Follow the signposts', body: '<p>Speakers organise their talk with signposts: <i>"First of all...", "Moving on to...", "The next thing is...", "Finally..."</i>. They tell you which question you are on.</p>' },
    { title: 'Write the answer immediately – then keep listening', body: '<p>Write quickly (abbreviations are fine on the question paper), but keep listening: the speaker may correct themselves. If the answer changes, cross out and write the new one.</p>' },
    { title: 'If you miss an answer, move on at once', body: '<p>The recording doesn\'t stop. If you hear the answer to the next question, you have missed the previous one: leave it and focus on the next. Guess it at the end.</p>' },
    { title: 'Use the pauses wisely', body: '<p>In the pause between sections, look ahead to the next questions first. Check spelling only if there is time left over.</p>' },
    { title: 'Transfer or check carefully', body: '<p>In the transfer/check time: correct spelling, check plurals and word limits, write numbers clearly, and fill every blank with a guess.</p>' }
  ],
  sections: [
    {
      id: 'parts', title: 'The four parts in detail',
      html: `<div class="table-wrap"><table class="data-table">
<tr><th>Part</th><th>Situation</th><th>Speakers</th><th>Typical tasks</th><th>Main challenge</th></tr>
<tr><td><b>1</b></td><td>Everyday social: booking, enquiry, registration, complaint</td><td>2 (conversation)</td><td>Form, note, table completion</td><td>Spelling names, numbers, dates; corrections</td></tr>
<tr><td><b>2</b></td><td>Everyday monologue: tour, facility information, radio announcement</td><td>1 (sometimes with a short interruption)</td><td>Multiple choice, map/plan labelling, matching</td><td>Following directions; distractors; long stretches of information</td></tr>
<tr><td><b>3</b></td><td>Education/training: students discussing a project with a tutor</td><td>2–4</td><td>Multiple choice, matching, completion</td><td>Following opinions and agreement; speakers changing their minds</td></tr>
<tr><td><b>4</b></td><td>Academic lecture or talk</td><td>1</td><td>Note, summary, sentence completion (often ONE WORD ONLY)</td><td>Dense academic vocabulary; no pause in the middle</td></tr>
</table></div>`
    },
    {
      id: 'signposts', title: 'Signpost language',
      html: `<div class="table-wrap"><table class="data-table plain">
<tr><th>Function</th><th>Phrases</th></tr>
<tr><td>Starting</td><td>First of all, To begin with, I'd like to start by...</td></tr>
<tr><td>Moving on</td><td>Moving on to..., Now let's turn to..., The next point is..., As for...</td></tr>
<tr><td>Adding</td><td>Another thing is..., In addition..., On top of that...</td></tr>
<tr><td>Contrasting</td><td>However..., On the other hand..., Having said that...</td></tr>
<tr><td>Correcting</td><td>Actually..., Sorry, I mean..., No, wait..., That's changed to...</td></tr>
<tr><td>Emphasising (answer coming!)</td><td>The most important thing is..., What you really need is..., The key point...</td></tr>
<tr><td>Concluding</td><td>Finally..., To sum up..., So, in conclusion...</td></tr>
</table></div>`
    },
    {
      id: 'distractors', title: 'The five distractor patterns',
      html: `<div class="table-wrap"><table class="data-table">
<tr><th>Pattern</th><th>What you hear</th><th>Answer</th></tr>
<tr><td><b>Self-correction</b></td><td>"It's on the 14th... no, sorry, the 15th."</td><td>15th</td></tr>
<tr><td><b>Rejected option</b></td><td>"We thought about the bus, but it takes too long, so we'll drive."</td><td>car / drive</td></tr>
<tr><td><b>Changed plan</b></td><td>"Normally the class is on Monday, but this term it's moved to Wednesday."</td><td>Wednesday</td></tr>
<tr><td><b>Other person's view</b></td><td>"Tom thinks the library's best, but I'd rather work at home."</td><td>Depends on whose view the question asks</td></tr>
<tr><td><b>Number confusion</b></td><td>"It used to cost £30, but it's gone up by five pounds."</td><td>£35</td></tr>
</table></div>
<p>The rule: <b>the final, confirmed information</b> is the answer. Keep listening for a sentence or two after you write.</p>`
    },
    {
      id: 'numbers', title: 'Numbers, letters and spelling',
      html: `<ul class="checklist">
<li><b>-teen vs -ty:</b> thir<b>TEEN</b> (stress at the end) vs <b>THIR</b>ty (stress at the start). Practise in the <a href="/practice/drills">dictation drills</a>.</li>
<li><b>Phone numbers:</b> "double five" = 55; "oh" = 0; "triple two" = 222.</li>
<li><b>Prices:</b> "four ninety-nine" = 4.99; "one-fifty" can be 1.50 or 150 – listen to context.</li>
<li><b>Dates:</b> "the third of June", "June the third" → write 3 June / June 3. Both are accepted.</li>
<li><b>Letters:</b> confusing pairs: A/E/I, B/P/V, G/J, M/N, S/F, Q/U/W, Y. Names are usually spelled letter by letter in Part 1.</li>
<li><b>Common spelling words:</b> accommodation, necessary, Wednesday, February, environment, government, restaurant, library, schedule. Study the <a href="/vocabulary/l-spelling">spelling bank</a>.</li>
</ul>`
    },
    {
      id: 'answers', title: 'Answer-sheet rules',
      html: `<ul class="checklist">
<li>Spelling must be correct (British or American accepted).</li>
<li>Capitals are not required; writing everything in CAPITALS is acceptable.</li>
<li>Word limits are strict: "ONE WORD ONLY" means one word; numbers in figures don't count as words in "WORD(S) AND/OR A NUMBER".</li>
<li>Currency symbols and units are already printed on the paper if they are not needed; if "£" is outside the gap, write only the number.</li>
<li>Don't write the words that are already in the question.</li>
<li>On computer, check the spelling of every typed answer – a typing slip is marked as a spelling mistake. (On the remaining paper tests there were 10 minutes to transfer; an unclear letter was marked wrong.)</li>
</ul>`
    }
  ],
  worked: [
    {
      title: 'Booking a sports hall (Part 1 style)',
      script: [
        { pause: 5, t: 'You will hear a man phoning a sports centre. First, look at questions 1 to 5' },
        { s: 'Receptionist', g: 'f', t: 'Riverside Sports Centre, how can I help?' },
        { s: 'Caller', g: 'm', t: 'Hi, I\'d like to book the main hall for a badminton tournament, please.' },
        { s: 'Receptionist', g: 'f', t: 'Of course. Can I take your name?' },
        { s: 'Caller', g: 'm', t: 'Yes, it\'s Daniel Kerridge. That\'s K-E-R-R-I-D-G-E.' },
        { s: 'Receptionist', g: 'f', t: 'Thank you. And what date were you thinking of?' },
        { s: 'Caller', g: 'm', t: 'We were hoping for Saturday the fourteenth of March... actually, no, the fourteenth is the day of the marathon, isn\'t it? Let\'s say the twenty-first.' },
        { s: 'Receptionist', g: 'f', t: 'The twenty-first is fine. The hall is forty pounds an hour, or you can book the whole day for two hundred and fifty.' },
        { s: 'Caller', g: 'm', t: 'We\'ll need about seven hours, so the full day makes more sense.' },
        { s: 'Receptionist', g: 'f', t: 'Good idea. Will you need any equipment? We can provide nets and shuttlecocks.' },
        { s: 'Caller', g: 'm', t: 'We\'ve got our own nets, thanks, but we\'ll need shuttlecocks. Oh, and we\'d like to hire some extra chairs for spectators.' },
        { s: 'Receptionist', g: 'f', t: 'No problem. And a contact phone number?' },
        { s: 'Caller', g: 'm', t: 'It\'s oh-seven-nine-double-four, three-six-one, eight-oh-two.' }
      ],
      instructions: '<i>Complete the form. Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.</i>',
      questions: `<div class="summary-text"><b>Riverside Sports Centre – Hall booking</b><br>Name: Daniel (1) ______<br>Date: Saturday (2) ______ March<br>Cost: £ (3) ______<br>Equipment needed: (4) ______<br>Also hire: extra (5) ______<br>Phone: 07944 361 802</div>`,
      walk: [
        { q: '1. Name', a: 'Kerridge', steps: ['<b>Predict:</b> a surname – it will be spelled.', '<b>Listen:</b> "K-E-R-R-I-D-G-E". Note the double R: "double R" may also be said this way.', '<b>Check:</b> spelling must be exact.'] },
        { q: '2. Date', a: '21 / 21st', steps: ['<b>Predict:</b> a date number.', '<b>Distractor:</b> "the fourteenth of March... actually, no... Let\'s say the twenty-first." – a self-correction.', '<b>Answer:</b> 21 (21st). The first date mentioned was rejected.'] },
        { q: '3. Cost', a: '250', steps: ['<b>Predict:</b> a number; "£" is printed, so write only the number.', '<b>Distractor:</b> "forty pounds an hour" is mentioned first, but the caller chooses "the whole day for two hundred and fifty".', '<b>Answer:</b> 250.'] },
        { q: '4. Equipment needed', a: 'shuttlecocks', steps: ['<b>Distractor:</b> nets are offered but rejected ("We\'ve got our own nets").', '<b>Answer:</b> shuttlecocks (plural, spelled correctly).'] },
        { q: '5. Also hire: extra ______', a: 'chairs', steps: ['<b>Context:</b> "extra" in the form = "extra" in the recording; "hire" = "hire".', '<b>Answer:</b> chairs. ("chairs for spectators" would be over the limit.)'] }
      ],
      lesson: 'Four of the five answers had a distractor: a rejected date, a rejected price option, a rejected item. In Part 1, the first thing you hear is very often <b>not</b> the answer. Write it, keep listening, and correct it if the speaker changes it.'
    }
  ],
  dos: [
    'Read ahead in every pause – always look at the next questions.',
    'Predict the answer type for every gap.',
    'Listen for paraphrases of the words around the gap.',
    'Keep listening after you write – answers are often corrected.',
    'Move on immediately if you miss an answer.',
    'Practise spelling, numbers and letter names daily.',
    'Fill every answer with something at the end.'
  ],
  donts: [
    'Don\'t check previous answers during preparation time.',
    'Don\'t wait to hear the exact words of the question.',
    'Don\'t write the first number or name you hear without listening for a correction.',
    'Don\'t stop to think during the recording – it will not wait for you.',
    'Don\'t exceed the word limit or repeat words printed on the paper.'
  ],
  careful: [
    { title: 'Losing your place', body: '<p>If you realise you are lost, look for the next question whose keywords are easy to hear (a name, a number, a heading) and listen for it. Rejoin there.</p>' },
    { title: 'Part 4 has no break', body: '<p>In Part 4 you read all ten questions before the lecture starts, and there is no pause in the middle. Use the headings in the notes to follow the lecturer.</p>' },
    { title: 'Accents', body: '<p>Accents vary, but the speech is clear and at natural speed. Listen to podcasts and broadcasts from different English-speaking countries to get used to the variety.</p>' }
  ],
  timing: '<p>About 30 seconds of preparation time are given before each section. Read the questions in this order: instructions (word limit) → headings → each question. Spend roughly 3 seconds per question underlining and predicting.</p>',
  faq: [
    { q: 'Do I lose marks for wrong spelling?', a: '<p>Yes – a misspelt answer is marked wrong. This is why spelling practice is essential.</p>' },
    { q: 'Do I write or type my answers?', a: '<p>On computer you type or click them during the recording. Only the paper-based test, withdrawn in most countries since mid-2026, used an answer sheet and pencil.</p>' },
    { q: 'Are American spellings accepted?', a: '<p>Yes. Both British and American spellings are accepted.</p>' }
  ],
  checklist: ['I know the four parts and their typical tasks.', 'I use preparation time to read ahead and predict.', 'I recognise the five distractor patterns.', 'I can write numbers, dates and spelled names accurately.', 'I know the answer-sheet rules.'],
  summary: ['40 questions, 4 parts, played once, questions in order.', 'Predict every answer; listen for paraphrase around the gap.', 'The final, confirmed information is the answer.', 'Spelling and word limits are part of the mark.']
};

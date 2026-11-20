import type { Chapter } from '@/lib/types';

/* Listening chapters: completion, multiple choice, map/plan labelling */

const farmMap = `<svg viewBox="0 0 560 350" width="560" style="color:var(--text)" font-family="inherit">
<rect x="0" y="0" width="560" height="350" fill="#ecfccb" rx="8"/>
<ellipse cx="140" cy="100" rx="80" ry="45" fill="#93c5fd"/><text x="140" y="104" font-size="12" text-anchor="middle" fill="#1e3a8a" font-weight="700">Pond</text>
<rect x="268" y="40" width="24" height="300" fill="#d6d3d1"/>
<rect x="50" y="180" width="470" height="22" fill="#d6d3d1"/>
<rect x="305" y="262" width="100" height="48" fill="#fde68a" stroke="#a16207"/><text x="355" y="290" font-size="12" text-anchor="middle" fill="#1c2233" font-weight="700">Visitor Centre</text>
<g font-size="15" font-weight="800" fill="#1c2233">
<circle cx="225" cy="285" r="15" fill="#fff" stroke="#1c2233"/><text x="225" y="290" text-anchor="middle">A</text>
<circle cx="335" cy="228" r="15" fill="#fff" stroke="#1c2233"/><text x="335" y="233" text-anchor="middle">B</text>
<circle cx="120" cy="160" r="15" fill="#fff" stroke="#1c2233"/><text x="120" y="165" text-anchor="middle">C</text>
<circle cx="470" cy="150" r="15" fill="#fff" stroke="#1c2233"/><text x="470" y="155" text-anchor="middle">D</text>
<circle cx="235" cy="80" r="15" fill="#fff" stroke="#1c2233"/><text x="235" y="85" text-anchor="middle">E</text>
<circle cx="330" cy="70" r="15" fill="#fff" stroke="#1c2233"/><text x="330" y="75" text-anchor="middle">F</text>
<circle cx="75" cy="232" r="15" fill="#fff" stroke="#1c2233"/><text x="75" y="237" text-anchor="middle">G</text>
</g>
<text x="280" y="346" font-size="12" text-anchor="middle" fill="#1c2233" font-weight="700">▲ Main entrance (you are here)</text>
<g transform="translate(520 40)"><path d="M0,-18 L7,4 L0,0 L-7,4 Z" fill="#1c2233"/><text x="0" y="20" font-size="12" text-anchor="middle" fill="#1c2233" font-weight="700">N</text></g>
</svg>`;

export const listeningChaptersA: Record<string, Chapter> = {
  /* ======================================================================= */
  form: {
    intro: `
<p>Completion tasks are the backbone of the Listening test: almost every test has at least one, and many have three. You complete a <b>form</b> (Part 1: booking details, personal information), <b>notes</b> (Parts 1 and 4: organised under headings), a <b>table</b> (rows and columns), a <b>flow-chart</b> (stages of a process) or a <b>summary</b> (a paragraph). The skills are the same for all of them.</p>
<p>Unlike in Reading, you cannot go back. You must <b>know what you are listening for before it is said</b>. That is why the most important part of this task happens before the recording starts: reading the gaps and predicting what goes in them. During the recording, you listen for the <b>words around each gap</b> – usually paraphrased – so that you are ready when the answer comes.</p>
<p>The answer word itself is normally said clearly and can be written exactly as you hear it. The main ways marks are lost are distractors (a first answer that is then corrected), spelling, singular/plural errors and exceeding the word limit.</p>`,
    facts: [
      ['Appears in', 'Every test; Part 1 (forms) and Part 4 (notes) most often'],
      ['Number of questions', '3–10 per task'],
      ['Order', 'Follows the recording'],
      ['You write', 'Words and/or numbers you hear'],
      ['Main skill', 'Prediction; listening for paraphrase; spelling'],
      ['Typical word limit', 'Part 1: ONE WORD AND/OR A NUMBER · Part 4: ONE WORD ONLY']
    ],
    anatomy: `
<div class="instructions" style="background:var(--surface-2);padding:12px 16px;border-radius:8px"><i>Complete the notes below.<br>Write <b>ONE WORD ONLY</b> for each answer.</i></div>
<ul>
<li><b>The word limit</b> applies to every gap in the task. "ONE WORD AND/OR A NUMBER" allows <i>Kerridge</i>, <i>21</i>, or <i>21 March</i>? – No: "21 March" is a number + a word, which is allowed by "ONE WORD AND/OR A NUMBER". "ONE WORD ONLY" allows no numbers in addition to the word.</li>
<li><b>Headings</b> in notes and tables tell you the topic of each section and when the speaker moves on.</li>
<li><b>Given information</b> (completed lines in the form, examples) shows you the format of answers and where the recording starts.</li>
</ul>`,
    method: [
      { title: 'Check the word limit and the example', body: '<p>Circle the limit. If there is an example, note how it is answered – it shows the expected format.</p>' },
      { title: 'Read the title and headings', body: '<p>They tell you the situation (a booking? a lecture on bamboo?) and the order of topics. In notes, headings are your signposts during the recording.</p>' },
      { title: 'Predict every gap', body: '<p>Decide what kind of word fits: a name (spelled), a number (price, date, time, phone), a noun (singular/plural?), an adjective, a verb. Write a tiny symbol above each gap: <i>£</i>, <i>date</i>, <i>n pl</i>, <i>adj</i>.</p>', example: '"Main weakness: attack by ______ and fungi" → plural noun, living things that attack (insects? animals?).' },
      { title: 'Underline the words just before and after each gap', body: '<p>These will be paraphrased in the recording. They are your signal that the answer is about to come.</p>' },
      { title: 'Listen, follow the headings, and write as you hear', body: '<p>Track the recording with your pen. When you hear the context words, the answer follows within a sentence or two. Write it at once – in short form if necessary – and keep listening.</p>' },
      { title: 'Listen for corrections and rejections', body: '<p>Especially in Part 1, the first answer is often changed: "Tuesday – no, Thursday". Cross out and rewrite if it changes.</p>' },
      { title: 'Check grammar, spelling and limits', body: '<p>In the transfer/check time: does each answer fit the grammar of the note (plural?), is it spelled correctly, is it within the limit?</p>' }
    ],
    sections: [
      {
        id: 'predict', title: 'Prediction clues',
        html: `<div class="table-wrap"><table class="data-table plain">
<tr><th>Clue</th><th>Prediction</th><th>Example</th></tr>
<tr><td>a / an before the gap</td><td>singular countable noun (an → vowel sound)</td><td>a ______ in the outer wall</td></tr>
<tr><td>several, many, a range of, various</td><td>plural noun</td><td>a range of ______</td></tr>
<tr><td>£, $, cost, price, fee</td><td>number (price)</td><td>Fee: £______</td></tr>
<tr><td>on, date, day</td><td>day or date</td><td>Starts on ______</td></tr>
<tr><td>at, time, opens</td><td>time</td><td>Opens at ______</td></tr>
<tr><td>Name, Surname, Street, Road</td><td>a word that will be spelled</td><td>Address: 14 ______ Road</td></tr>
<tr><td>very, more, quite before the gap</td><td>adjective</td><td>The tour is very ______</td></tr>
<tr><td>to before the gap</td><td>base-form verb</td><td>Visitors need to ______ in advance</td></tr>
</table></div>`
      }
    ],
    worked: [
      {
        title: 'Building with bamboo (Part 4 style)',
        script: [
          { pause: 10, t: 'You will hear a lecture about bamboo as a building material. Look at questions 1 to 7' },
          { s: 'Lecturer', g: 'f', t: 'Good morning. Today I want to look at a material that is attracting a great deal of attention from architects: bamboo. Let\'s start with some biology.' },
          { s: 'Lecturer', g: 'f', t: 'Many people assume bamboo is a kind of tree, because it\'s tall and woody. In fact, it\'s a grass – a giant one, but a grass nonetheless.' },
          { s: 'Lecturer', g: 'f', t: 'And it grows astonishingly fast. Some species can add almost a metre in height, not in a week, as people sometimes say, but in a single day.' },
          { s: 'Lecturer', g: 'f', t: 'Now, what makes it useful for building? Mainly its strength. When bamboo is pulled, or under tension as engineers say, its strength is comparable to that of some types of steel, although of course it\'s far lighter.' },
          { s: 'Lecturer', g: 'f', t: 'It does have weaknesses. Untreated bamboo is very attractive to insects, and in damp conditions it can also be damaged by fungi.' },
          { s: 'Lecturer', g: 'f', t: 'For this reason, builders treat the poles by soaking them in a solution containing borax. That\'s B-O-R-A-X – a natural mineral salt.' },
          { s: 'Lecturer', g: 'f', t: 'Another challenge is connecting the poles. Traditionally, joints were tied with rope, and in many villages they still are, but modern projects tend to use steel connectors instead.' },
          { s: 'Lecturer', g: 'f', t: 'So why isn\'t bamboo used more widely? It\'s not really the cost – bamboo is cheap. The main obstacle is the lack of standards. Without official building codes, engineers and insurers are reluctant to approve bamboo structures.' }
        ],
        instructions: '<i>Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</i>',
        questions: `<div class="summary-text"><b>Bamboo in construction</b><br>
<u>Biology</u><br>• Bamboo is a type of (1) ______<br>• Some species grow almost a metre in a (2) ______<br>
<u>Properties</u><br>• Its (3) ______ under tension is similar to some steels<br>• Main weakness: attack by (4) ______ and fungi<br>• Poles are soaked in a solution of (5) ______<br>
<u>Construction</u><br>• Traditional joints tied with (6) ______<br>• Main obstacle to wider use: lack of (7) ______</div>`,
        walk: [
          { q: '1. a type of ______', a: 'grass', steps: ['<b>Predict:</b> a noun – a category of plant.', '<b>Distractor:</b> "Many people assume bamboo is a kind of tree" – a rejected idea.', '<b>Answer:</b> "In fact, it\'s a grass". <i>In fact</i> introduces the correction.'] },
          { q: '2. almost a metre in a ______', a: 'day', steps: ['<b>Predict:</b> a time period.', '<b>Distractor:</b> "not in a week, as people sometimes say" – rejected.', '<b>Answer:</b> day.'] },
          { q: '3. Its ______ under tension', a: 'strength', steps: ['<b>Predict:</b> a noun – a property.', '<b>Paraphrase:</b> "under tension" is said directly; "similar to" = "comparable to".', '<b>Answer:</b> strength. ("steel" is a nearby word but already in the note.)'] },
          { q: '4. attack by ______ and fungi', a: 'insects', steps: ['<b>Predict:</b> plural noun, living things.', '<b>Paraphrase:</b> "very attractive to insects... damaged by fungi".', '<b>Answer:</b> insects (plural – "insect" would be marked wrong).'] },
          { q: '5. a solution of ______', a: 'borax', steps: ['<b>Predict:</b> a substance – possibly an unfamiliar word that will be spelled.', '<b>Answer:</b> borax (spelled B-O-R-A-X). In Part 4, unusual words are often spelled for you.'] },
          { q: '6. tied with ______', a: 'rope', steps: ['<b>Distractor:</b> "modern projects tend to use steel connectors instead" – the note asks about traditional joints.', '<b>Answer:</b> rope.'] },
          { q: '7. lack of ______', a: 'standards', steps: ['<b>Distractor:</b> "It\'s not really the cost" – rejected.', '<b>Answer:</b> "The main obstacle is the lack of standards." The words "main obstacle" are repeated exactly from the notes – listen for them.'] }
        ],
        lesson: 'In a lecture, distractors look different from Part 1: the speaker mentions a popular belief and rejects it ("Many people assume... In fact..."; "not in a week, as people sometimes say"). Words like <i>in fact</i>, <i>actually</i> and <i>not really</i> point to the real answer.'
      }
    ],
    dos: [
      'Read headings first – they are your map of the recording.',
      'Predict word class, number and type for every gap.',
      'Underline the words before and after each gap.',
      'Write exactly what you hear for the answer word.',
      'Check plurals: if the speaker says "insects", write "insects".',
      'Use capital letters if your handwriting is unclear.'
    ],
    donts: [
      'Don\'t write words already printed in the notes.',
      'Don\'t exceed the word limit (e.g. "surrounding air" for ONE WORD).',
      'Don\'t write the first option you hear if it is rejected.',
      'Don\'t try to write full sentences – only the gap.',
      'Don\'t panic over an unfamiliar word – it will usually be spelled.'
    ],
    careful: [
      { title: 'Corrections in Part 1', body: '<p>Callers change their minds or correct each other: dates, times, numbers and names are frequently corrected. Keep listening for one or two sentences after you write.</p>' },
      { title: 'Rejected beliefs in Part 4', body: '<p>Lecturers often present a common misconception before correcting it. The misconception uses words that fit the gap grammatically.</p>' },
      { title: 'Two gaps close together', body: '<p>Sometimes two answers come in one sentence. Look at both gaps before the speaker reaches them so you can catch both.</p>' }
    ],
    timing: '<p>In the 30 seconds before each part, spend about 3 seconds on each gap: underline, predict, move on. In Part 4 you get about 45 seconds to read all ten questions – read the headings first, then the gaps.</p>',
    faq: [
      { q: 'Do I need to write the units (£, km)?', a: '<p>If the unit is printed next to the gap, don\'t write it. If not, writing the unit (e.g. "40 km") is acceptable if it is within the word limit.</p>' },
      { q: 'What if I hear a word I don\'t know how to spell?', a: '<p>Write your best attempt and keep listening; difficult words are often spelled. Learn the common IELTS spelling list.</p>' }
    ],
    checklist: ['I read the headings first and predict every gap.', 'I listen for paraphrases of the words around the gap.', 'I listen for corrections and rejected ideas.', 'I check plurals, spelling and the word limit.'],
    summary: ['Prediction before listening is the key step.', 'Context words are paraphrased; the answer word is usually said exactly.', 'The first answer you hear is often a distractor – keep listening.', 'Spelling, plurals and word limits decide the mark.']
  },

  /* ======================================================================= */
  mcq: {
    intro: `
<p>Listening multiple choice gives you a question (or an unfinished sentence) and three options, A, B and C – or asks you to choose TWO or THREE answers from a longer list. It appears in all parts, but it is most challenging in <b>Part 3</b>, where two or three speakers discuss, disagree and change their minds.</p>
<p>The defining feature of Listening MCQ is that <b>usually all the options are mentioned</b>. You will hear something about A, something about B and something about C. Only one of them actually answers the question; the others are rejected, belong to a different time, belong to a different speaker, or answer a slightly different question. Listening for words from the options is therefore useless. You must listen for the <b>reasoning</b>: what is accepted, what is rejected, and who says what.</p>`,
    facts: [
      ['Appears in', 'All parts; most often Parts 2 and 3'],
      ['Number of questions', '2–6 per task'],
      ['Order', 'Follows the recording'],
      ['You write', 'A letter, or two/three letters'],
      ['Main skill', 'Following reasoning, opinions and changes of mind'],
      ['Reading time', 'About 4–5 seconds per question']
    ],
    anatomy: `<div class="instructions" style="background:var(--surface-2);padding:12px 16px;border-radius:8px"><i>Choose the correct letter, <b>A, B or C</b>.</i></div>
<div class="instructions" style="background:var(--surface-2);padding:12px 16px;border-radius:8px;margin-top:8px"><i>Choose <b>TWO</b> letters, <b>A–E</b>.</i></div>
<p>The stem tells you exactly what to listen for: <i>Why did...? What problem...? What does the tutor say about...? What do they decide...?</i> The verb in the stem matters: "decide" means you need the <b>final decision</b>; "suggest" means a suggestion, which may or may not be accepted.</p>`,
    method: [
      { title: 'Underline the key words in each stem', body: '<p>Especially the question word and the verb: <i>why, what problem, decide, recommend, agree, surprised</i>. Note which speaker the question is about.</p>' },
      { title: 'Notice how the options differ', body: '<p>Read the options quickly and identify the key difference between them (cost / location / timing). Think of one paraphrase for each if you have time.</p>', example: 'A "too expensive" → costs a fortune, beyond our budget. B "too far" → a long journey, out of the way. C "wrong time" → clashes with, doesn\'t fit my timetable.' },
      { title: 'Listen for the stem, then for the reasoning', body: '<p>The speakers will paraphrase the stem; that is your signal. Then follow the discussion: which option is accepted, which rejected?</p>' },
      { title: 'Eliminate as you listen', body: '<p>Put a small cross by options that are rejected ("We thought about... but"), refer to the past ("we used to..."), or belong to another speaker. Tick the option that is confirmed.</p>' },
      { title: 'Wait for the final position', body: '<p>In Part 3, a speaker may suggest something, the other may object, and they may agree on something else. The answer is the final, agreed position – unless the question asks about one speaker\'s view.</p>' },
      { title: 'Move on when the next question\'s stem is heard', body: '<p>If you hear the next stem being discussed, choose your best letter for the current question and move your attention forward.</p>' }
    ],
    sections: [
      {
        id: 'agree', title: 'Language of agreement, disagreement and decision',
        html: `<div class="table-wrap"><table class="data-table plain">
<tr><th>Function</th><th>Phrases</th></tr>
<tr><td>Agreeing</td><td>Exactly. / That's true. / I couldn't agree more. / Good point. / That makes sense.</td></tr>
<tr><td>Partly agreeing</td><td>That's a fair point, but... / I see what you mean, however... / Maybe, but...</td></tr>
<tr><td>Disagreeing</td><td>I'm not sure about that. / I don't think that would work. / I see it differently.</td></tr>
<tr><td>Rejecting an option</td><td>We thought about..., but... / That's out of the question. / It's not really worth it.</td></tr>
<tr><td>Deciding</td><td>So let's go with... / Shall we settle on...? / OK, that's what we'll do.</td></tr>
<tr><td>Tutor evaluating</td><td>The main weakness is... / What I'd like to see more of is... / That works well.</td></tr>
</table></div>`
      }
    ],
    worked: [
      {
        title: 'A project on food waste (Part 3 style)',
        script: [
          { pause: 10, t: 'You will hear two students, Maya and Leo, talking to their tutor about their project. Look at questions 1 to 4' },
          { s: 'Tutor', g: 'm', t: 'So, Maya, Leo, tell me how the food waste project is going. Why did you pick that topic in the end? I remember I suggested plastics.' },
          { s: 'Maya', g: 'f', t: 'You did, and we considered it. And Leo works in a café, so he sees a lot of waste. But really what decided it was that the city council had just published a huge set of figures on household waste, so we knew we\'d have plenty of data to work with.' },
          { s: 'Tutor', g: 'm', t: 'Sensible. And the survey you ran – how did that go?' },
          { s: 'Leo', g: 'm', t: 'We got more responses than we expected, actually – over two hundred. The problem was that some of the questions were confusing. People interpreted "food waste" in different ways, so a few answers were hard to compare.' },
          { s: 'Maya', g: 'f', t: 'It did take a long time to analyse, but that wasn\'t really the issue.' },
          { s: 'Tutor', g: 'm', t: 'That happens. Now, for the presentation – what are you planning?' },
          { s: 'Leo', g: 'm', t: 'I wanted to show a short video, but we\'d only have ten minutes, so it would take up too much time.' },
          { s: 'Maya', g: 'f', t: 'And a live demonstration of composting would be a bit messy in a seminar room! So we\'ve agreed to give everyone a one-page handout with the key figures.' },
          { s: 'Tutor', g: 'm', t: 'Good. One comment on your draft conclusion, though. It\'s a reasonable length, and I don\'t mind that it\'s quite critical of supermarkets – but you make several claims there without any figures to back them up.' }
        ],
        instructions: '<i>Choose the correct letter, <b>A, B or C</b>.</i>',
        questions: `<ol>
<li>Why did the students choose food waste as their topic?<br>A Leo had personal experience of it.<br>B The tutor recommended it.<br>C There was a lot of data available.</li>
<li>What problem did they have with their survey?<br>A Too few people responded.<br>B Some questions were unclear.<br>C It took too long to complete.</li>
<li>What have they decided to use in their presentation?<br>A a video<br>B a demonstration<br>C a handout</li>
<li>What does the tutor say about their conclusion?<br>A It is too long.<br>B It lacks supporting evidence.<br>C It is too negative.</li>
</ol>`,
        walk: [
          { q: '1. Why did they choose food waste?', a: 'C', steps: ['All three options are mentioned.', '<b>B</b> ✗ – the tutor suggested <i>plastics</i>, not food waste ("I suggested plastics").', '<b>A</b> ✗ – Leo\'s café experience is mentioned, but Maya continues: "But really what decided it was..."', '<b>C</b> ✓ – "a huge set of figures... plenty of data". The phrase <i>what decided it</i> signals the real reason.'] },
          { q: '2. What problem with the survey?', a: 'B', steps: ['<b>A</b> ✗ – opposite: "more responses than we expected".', '<b>B</b> ✓ – "some of the questions were confusing" (confusing = unclear).', '<b>C</b> ✗ – "It did take a long time to analyse, but that wasn\'t really the issue" – mentioned and rejected.'] },
          { q: '3. What have they decided to use?', a: 'C', steps: ['Stem verb: <b>decided</b> – listen for the final decision.', '<b>A</b> ✗ – Leo "wanted" a video but it takes "too much time".', '<b>B</b> ✗ – "would be a bit messy".', '<b>C</b> ✓ – "we\'ve agreed to give everyone a one-page handout".'] },
          { q: '4. What does the tutor say about the conclusion?', a: 'B', steps: ['<b>A</b> ✗ – "It\'s a reasonable length".', '<b>C</b> ✗ – "I don\'t mind that it\'s quite critical".', '<b>B</b> ✓ – "several claims... without any figures to back them up". The answer comes after <i>though</i> and <i>but</i>.'] }
        ],
        lesson: 'In every question, all three options were mentioned. The correct answer was signalled by reasoning words: <i>what decided it</i>, <i>the problem was</i>, <i>we\'ve agreed</i>, <i>but</i>. Listening for option words alone would have led to a wrong answer three times out of four.'
      }
    ],
    dos: ['Underline the stem\'s question word and verb.', 'Note the key difference between options.', 'Expect all options to be mentioned.', 'Eliminate rejected and past options as you listen.', 'Wait for the final agreed position.', 'For "choose TWO", tick each option that is confirmed.'],
    donts: ['Don\'t choose an option because you heard its words.', 'Don\'t choose the first option mentioned by default.', 'Don\'t confuse one speaker\'s view with another\'s.', 'Don\'t get stuck – when the next stem is discussed, move on.'],
    careful: [
      { title: '"Wanted" vs "decided"', body: '<p>A speaker\'s wish or first suggestion is often a distractor. Listen for the decision verb: <i>agreed, decided, settled on, we\'ll go with</i>.</p>' },
      { title: 'Concession structures', body: '<p>"It did take a long time, but that wasn\'t really the issue" – the first clause mentions an option, the second rejects it.</p>' },
      { title: 'Options for "choose TWO"', body: '<p>The two correct options may come in any order and may be discussed at different points. Keep all five options in view throughout.</p>' }
    ],
    timing: '<p>You have about 30 seconds to read 4–6 MCQs: read the stems carefully and the options quickly. Don\'t try to memorise options – just note the difference between them.</p>',
    checklist: ['I read stems for the question word and verb.', 'I expect all options to be mentioned.', 'I listen for acceptance, rejection and decisions.', 'I track who says what in Part 3.'],
    summary: ['All options are usually mentioned; reasoning decides the answer.', 'Listen for signals: but, actually, what decided it, we\'ve agreed.', 'In Part 3, the final agreed position is the answer unless the question asks about one speaker.']
  },

  /* ======================================================================= */
  map: {
    intro: `
<p>In map and plan labelling you see a map (of a park, campus, town centre, farm) or a floor plan (of a museum, library, office) with some places marked by letters. As the speaker describes the location of places, you choose the correct letter for each one. A related version asks you to label parts of a <b>diagram</b> (a machine or device) by writing words.</p>
<p>This task usually appears in <b>Part 2</b>, often with a tour guide or someone giving information about a facility. It tests your ability to follow <b>directions</b> and <b>position language</b> in real time. Students who struggle with it usually lose their place on the map once and never recover. The method in this chapter keeps you oriented: find the starting point, know the reference points, and trace the route with your pen.</p>`,
    facts: [
      ['Appears in', 'Most tests; usually Part 2'],
      ['Number of questions', 'Usually 4–6'],
      ['Order', 'Questions follow the route described'],
      ['You write', 'A letter (A–H) for maps; words for diagrams'],
      ['Main skill', 'Following directions and position language'],
      ['Key vocabulary', '<a href="/vocabulary/l-directions">Direction language bank</a>']
    ],
    anatomy: `<div class="instructions" style="background:var(--surface-2);padding:12px 16px;border-radius:8px"><i>Label the map below.<br>Write the correct letter, <b>A–G</b>, next to Questions 1–5.</i></div>
<p>There are more letters than questions. Places already named on the map (the visitor centre, the pond, the entrance) are your reference points; the speaker will use them in directions.</p>`,
    method: [
      { title: 'Find the starting point and orient yourself', body: '<p>Find "You are here", the entrance or the point the speaker starts from. Check where north is. Imagine yourself standing at the start, facing into the map.</p>' },
      { title: 'Identify the reference points', body: '<p>Note every place already labelled (pond, visitor centre, main path, crossroads). Directions will be given relative to these.</p>' },
      { title: 'Look at the letters and the paths that connect them', body: '<p>Which letters are near the entrance? Which are on the left or right of each path? Which are near a reference point?</p>' },
      { title: 'Read the list of places to find', body: '<p>Places are described in question order. Think about what clues might be given for each (a café near water? toilets near the entrance?).</p>' },
      { title: 'Trace the route with your pen as you listen', body: '<p>Move your pen along the paths as the speaker walks. When you turn, turn the paper in your mind: left and right depend on the direction you are facing.</p>' },
      { title: 'Listen for relocations and closures', body: '<p>Speakers say where something "used to be" or "is going to be". The question asks where it is now (unless stated otherwise).</p>' }
    ],
    sections: [
      {
        id: 'language', title: 'Essential direction and position language',
        html: `<div class="grid-2">
<div><h4>Movement</h4><ul><li>go straight ahead / carry on / continue along</li><li>take the first turning on the left</li><li>turn right at the crossroads / junction</li><li>go past the fountain</li><li>follow the path round to the left</li><li>cross the bridge / go through the gate</li><li>head north / walk towards the lake</li></ul></div>
<div><h4>Position</h4><ul><li>opposite / facing / across from</li><li>next to / beside / adjacent to</li><li>between X and Y</li><li>just before / just after / beyond / past</li><li>at the end of / at the far end</li><li>on the corner of / in the north-east corner</li><li>overlooking the lake / behind / in front of</li></ul></div>
</div>`
      }
    ],
    worked: [
      {
        title: 'Hillside Community Farm (Part 2 style)',
        figure: { type: 'svg', svg: farmMap, caption: 'Hillside Community Farm' },
        script: [
          { pause: 10, t: 'You will hear a guide talking to visitors at a community farm. Look at the map and questions 1 to 5' },
          { s: 'Guide', g: 'f', t: 'Welcome to Hillside Community Farm. We\'re standing at the main entrance, at the bottom of your map. Let me tell you where everything is.' },
          { s: 'Guide', g: 'f', t: 'As you come in, the visitor centre is immediately on your right. The farm shop is on the other side of the path from it, so on your left as you come in, and it\'s worth a visit before you leave.' },
          { s: 'Guide', g: 'f', t: 'If you walk straight up the main path, you\'ll come to a crossroads. Just before you reach it, on your right, behind the visitor centre, are the toilets.' },
          { s: 'Guide', g: 'f', t: 'At the crossroads, if you turn left and follow that path towards the pond, you\'ll find the café on your right, overlooking the water. Please don\'t confuse it with the old barn at the far end of the path, on the left, which is closed this year.' },
          { s: 'Guide', g: 'f', t: 'Go back to the crossroads and carry straight on up the main path. Near the top, on your left, between the path and the pond, there\'s a picnic area with tables.' },
          { s: 'Guide', g: 'f', t: 'Finally, the goats. They used to be kept at the top of the main path, on the right, but this year we\'ve moved them to a quieter spot. If you turn right at the crossroads and walk to the far end of that path, the goat pens are on your left.' }
        ],
        instructions: '<i>Label the map. Write the correct letter, <b>A–G</b>.</i>',
        questions: '<ol><li>farm shop</li><li>toilets</li><li>café</li><li>picnic area</li><li>goat pens</li></ol>',
        walk: [
          { q: '1. farm shop', a: 'A', steps: ['<b>Start:</b> main entrance at the bottom, facing north (up the map).', '"the visitor centre is immediately on your right. The farm shop is on the other side of the path... on your left" → the letter left of the main path near the entrance = <b>A</b>.'] },
          { q: '2. toilets', a: 'B', steps: ['"walk straight up the main path... Just before you reach [the crossroads], on your right, behind the visitor centre" → right of the main path, between the visitor centre and the crossroads = <b>B</b>.'] },
          { q: '3. café', a: 'C', steps: ['"turn left [at the crossroads]... towards the pond" → you are now walking west.', '"on your right, overlooking the water" → walking west, right = north side of the path, next to the pond = <b>C</b>.', '<b>Distractor:</b> "the old barn at the far end of the path, on the left" = G (south side, far end) – not a question.'] },
          { q: '4. picnic area', a: 'E', steps: ['"carry straight on up the main path. Near the top, on your left, between the path and the pond" → facing north again, left = west; between path and pond = <b>E</b>.'] },
          { q: '5. goat pens', a: 'D', steps: ['<b>Distractor:</b> "They used to be kept at the top of the main path, on the right" = F (old location).', '"turn right at the crossroads... far end of that path, the goat pens are on your left" → walking east, left = north side, far end = <b>D</b>.'] }
        ],
        lesson: 'Two things decided this task: turning the map in your mind (walking west, your right is north) and ignoring old or closed locations (F, G). Tracing the route with your pen keeps you in the right place.'
      }
    ],
    dos: ['Find the start point and north before listening.', 'Use labelled places as reference points.', 'Trace the route with your pen.', 'Re-orient left/right after every turn.', 'Learn the direction vocabulary bank.'],
    donts: ['Don\'t assume left/right on the page = left/right for the walker.', 'Don\'t label old, closed or planned locations unless asked.', 'Don\'t stay on a missed question – find the next reference point.'],
    careful: [
      { title: 'Left and right after a turn', body: '<p>If you walk "down" the map (south), your left is east. Turn the paper in your mind, or physically, if it helps.</p>' },
      { title: '"Used to be" / "will be"', body: '<p>Relocations and future plans are common distractors in map tasks.</p>' }
    ],
    timing: '<p>Spend most of your preparation time studying the map, not the question list – the list is short. Look at the letters around each reference point.</p>',
    checklist: ['I orient myself before listening.', 'I know the direction and position vocabulary.', 'I trace the route and adjust left/right after turns.'],
    summary: ['Start point + north + reference points = orientation.', 'Trace the route with your pen; left and right depend on your direction.', 'Old, closed and future locations are the main distractors.']
  }
};

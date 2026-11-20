window.IELTS = window.IELTS || {};
IELTS.resources = {
  note: 'The IELTS partners occasionally reorganise their websites. If a link has moved, go to the site\'s home page and look for "Prepare" or "Practice tests".',
  groups: [
    {
      h: 'Official IELTS partners (free)', items: [
        { name: 'IELTS.org – official test information', url: 'https://ielts.org/', desc: 'The official IELTS site run by the three test partners. Test format, scoring, band descriptors, sample questions for every section.' },
        { name: 'British Council – Take IELTS: Prepare', url: 'https://takeielts.britishcouncil.org/take-ielts/prepare', desc: 'Free practice tests (Listening, Reading, Writing, Speaking) for Academic and General Training, plus computer-delivered familiarisation tests.' },
        { name: 'British Council – Road to IELTS', url: 'https://takeielts.britishcouncil.org/take-ielts/prepare/road-to-ielts', desc: 'Official preparation course with practice activities and mock tests (a free version is available, and full access for British Council candidates).' },
        { name: 'IDP IELTS – Prepare', url: 'https://ielts.idp.com/prepare', desc: 'Free practice tests, sample questions, webinars and preparation articles from IDP.' },
        { name: 'Cambridge English – IELTS', url: 'https://www.cambridgeenglish.org/exams-and-tests/ielts/', desc: 'Information and preparation materials from Cambridge University Press & Assessment.' }
      ]
    },
    {
      h: 'Official practice books (paid)', items: [
        { name: 'Cambridge IELTS series (Academic & General Training)', url: 'https://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts', desc: 'Authentic past papers with answer keys, audio and sample writing answers with examiner comments. Use the most recent volumes – they reflect current question styles.' },
        { name: 'The Official Cambridge Guide to IELTS', url: 'https://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts', desc: 'A complete strategy guide with 8 practice tests and skill-building units.' }
      ]
    },
    {
      h: 'Free English-building resources', items: [
        { name: 'BBC Learning English', url: 'https://www.bbc.co.uk/learningenglish', desc: 'Grammar, vocabulary and pronunciation lessons – "6 Minute English" is excellent Listening practice.' },
        { name: 'BBC Sounds / BBC Radio 4', url: 'https://www.bbc.co.uk/sounds', desc: 'Talks and documentaries similar to Listening Part 4 lectures.' },
        { name: 'TED Talks', url: 'https://www.ted.com/talks', desc: 'Academic-style monologues with transcripts – ideal Part 4 practice. Pause and take notes.' },
        { name: 'Cambridge Dictionary', url: 'https://dictionary.cambridge.org/', desc: 'Pronunciation (UK & US audio), collocations and example sentences.' },
        { name: 'Ozdic Collocation Dictionary', url: 'http://www.ozdic.com/', desc: 'Find natural word combinations for Writing.' }
      ]
    }
  ],
  howToUse: `
<h3>How to use official materials with this site</h3>
<ul class="steps">
<li><b>Learn the question type here first</b> – read the strategy page and do the targeted practice set.</li>
<li><b>Do one official test section under exam conditions</b> – strict timing, no dictionary, answers written on paper.</li>
<li><b>Mark it and analyse every mistake</b>: which question type? Was it vocabulary, paraphrase, a trap, or time? Write it in an error log.</li>
<li><b>Return to the weak question type here</b> and repeat the practice; review the related vocabulary list.</li>
<li><b>For Writing</b>, compare your answer with the official sample answers and examiner comments, then rewrite one paragraph.</li>
</ul>
<div class="callout warn"><strong>Save full tests for later</strong>There are a limited number of authentic tests. Use this site's targeted practice in the first weeks and save complete official tests for the final 2–3 weeks as mock exams.</div>`
};

IELTS.studyPlan = [
  { week: 1, focus: 'Understand the exam & diagnose your level', tasks: [['Read the exam format & scoring page', '#/overview'], ['Read the Reading introduction and the T/F/NG strategy', '#/reading/tfng'], ['Complete the Reading T/F/NG practice set', '#/practice/reading/r-tfng'], ['Do the Listening form-completion practice (Part 1)', '#/practice/listening/l-form'], ['Study Sentence Types (simple, compound, complex)', '#/grammar/sentence-types'], ['Do one official free practice test (British Council/IDP) to find your starting band', '#/resources']] },
  { week: 2, focus: 'Reading & Listening question types (1)', tasks: [['Learn Matching Headings + practise', '#/reading/headings'], ['Learn Multiple Choice + practise', '#/reading/mcq'], ['Listening multiple choice practice', '#/practice/listening/l-mcq'], ['Listening vocabulary: time, dates, numbers (flashcards)', '#/vocabulary/l-time'], ['Learn 30 synonyms (paraphrase pairs)', '#/vocabulary/r-synonyms']] },
  { week: 3, focus: 'Writing Task 1', tasks: [['Read Writing overview & Task 1 structure', '#/writing'], ['Study trend vocabulary + take the quiz', '#/vocabulary/t1-trends'], ['Study the line graph model answer', '#/writing/task1/line'], ['Write a line graph answer with the timer', '#/practice/writing/w1-line-p1'], ['Study bar & pie charts; write one of each', '#/writing/task1/bar'], ['Grammar: tenses for Task 1 + comparatives', '#/grammar/tenses']] },
  { week: 4, focus: 'Writing Task 2 + Speaking Part 1', tasks: [['Read Task 2 overview (analyse, plan, PEEL)', '#/writing'], ['Opinion essay model + write one', '#/writing/task2/opinion'], ['Discussion essay model + write one', '#/writing/task2/discussion'], ['Study linking words and connectors', '#/vocabulary/linking'], ['Speaking Part 1 technique + practise 5 topics in the simulator', '#/practice/speaking']] },
  { week: 5, focus: 'Remaining question types', tasks: [['Reading: matching information & features', '#/reading/matching-info'], ['Reading: summary & sentence completion', '#/reading/summary'], ['Listening map labelling + directions vocabulary', '#/practice/listening/l-map'], ['Listening Part 4 note completion', '#/practice/listening/l-notes'], ['Process & map vocabulary; write a process answer', '#/writing/task1/process']] },
  { week: 6, focus: 'Advanced language & Speaking Parts 2–3', tasks: [['Grammar: conditionals, passive, advanced structures', '#/grammar/advanced'], ['Task 2: problem/solution & advantages/disadvantages essays', '#/writing/task2/problem-solution'], ['Speaking Part 2: 5 cue cards with recording', '#/speaking'], ['Speaking Part 3 practice with ORE-C technique', '#/practice/speaking'], ['Topic vocabulary for Task 2 (education, environment, technology)', '#/vocabulary/t2-topics']] },
  { week: 7, focus: 'Timed practice & error correction', tasks: [['Full reading passage under time (20 min)', '#/practice/reading/r-mixed-1'], ['One official full Reading test (60 min)', '#/resources'], ['One official full Listening test', '#/resources'], ['Write Task 1 + Task 2 in 60 minutes', '#/practice/writing'], ['Review common grammar errors', '#/grammar/common-errors']] },
  { week: 8, focus: 'Mock exams & final review', tasks: [['Full official mock test (all four skills)', '#/resources'], ['Full Speaking simulation with recording – listen back', '#/practice/speaking'], ['Review your error log & weakest question types', '#/plan'], ['Revise flashcards marked "unknown"', '#/vocabulary'], ['Read exam-day tips', '#/overview']] }
];

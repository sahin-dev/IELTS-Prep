/* The table of contents of "The IELTS Book" – the whole site in reading order.
   Kept free of imports so the sidebar (a client component) can use it cheaply. */

export interface TocChapter { href: string; title: string; sub?: string }
export interface TocPart { id: string; title: string; intro: string; chapters: TocChapter[] }

export const bookParts: TocPart[] = [
  {
    id: 'start', title: 'Getting started', intro: 'Understand the test, how it is scored and how test day works; then set a realistic target and learn how to study.',
    chapters: [
      { href: '/exam', title: 'The IELTS test explained', sub: 'Academic vs General Training, the four skills, every question type, delivery in 2026' },
      { href: '/exam/scoring', title: 'How IELTS is scored', sub: 'The band scale, marking criteria, overall band rounding, half bands' },
      { href: '/exam/test-day', title: 'Booking, test day and results', sub: 'Registration, test-day rules, results, remarks, retakes, common mistakes' },
      { href: '/book/how-to-study', title: 'How to prepare: target and study method', sub: 'Set a realistic target, then diagnose, learn, practise, review' },
      { href: '/progress', title: 'Your 8-week study plan', sub: 'A day-by-day plan and your progress record' }
    ]
  },
  {
    id: 'listening', title: 'Listening', intro: 'How the recording works, then a full chapter for every question type.',
    chapters: [
      { href: '/listening/fundamentals', title: 'Listening fundamentals', sub: 'The four parts, prediction, signposting, distractors, answer rules' },
      { href: '/listening/form', title: 'Form, note, table, flow-chart & summary completion' },
      { href: '/listening/mcq', title: 'Multiple choice' },
      { href: '/listening/map', title: 'Plan, map & diagram labelling' },
      { href: '/listening/matching', title: 'Matching' },
      { href: '/listening/sentence', title: 'Sentence completion' },
      { href: '/listening/short-answer', title: 'Short-answer questions' },
      { href: '/vocabulary/l-directions', title: 'Toolkit: direction language', sub: 'Vocabulary for maps and plans' },
      { href: '/vocabulary/l-time', title: 'Toolkit: numbers, dates and time', sub: 'Vocabulary for Part 1 forms' }
    ]
  },
  {
    id: 'reading', title: 'Reading', intro: 'Core reading skills, the order to answer in, then a full chapter for every question type.',
    chapters: [
      { href: '/reading/fundamentals', title: 'Reading fundamentals', sub: 'Skimming, scanning, paraphrase, time management, the answer sheet' },
      { href: '/reading/answer-order', title: 'What to answer first', sub: 'Which tasks follow the passage and which need the whole text' },
      { href: '/reading/tfng', title: 'True / False / Not Given' },
      { href: '/reading/ynng', title: 'Yes / No / Not Given' },
      { href: '/reading/mcq', title: 'Multiple choice' },
      { href: '/reading/headings', title: 'Matching headings' },
      { href: '/reading/matching-info', title: 'Matching information' },
      { href: '/reading/matching-features', title: 'Matching features' },
      { href: '/reading/sentence-endings', title: 'Matching sentence endings' },
      { href: '/reading/sentence-completion', title: 'Sentence completion' },
      { href: '/reading/summary', title: 'Summary, note, table & flow-chart completion' },
      { href: '/reading/diagram', title: 'Diagram label completion' },
      { href: '/reading/short-answer', title: 'Short-answer questions' },
      { href: '/vocabulary/r-synonyms', title: 'Toolkit: similarity words & synonyms', sub: 'The vocabulary that unlocks paraphrase' }
    ]
  },
  {
    id: 'writing', title: 'Writing', intro: 'How Writing is marked, the method for each task, and a full chapter for every chart, letter and essay type.',
    chapters: [
      { href: '/writing', title: 'Writing overview', sub: 'The two tasks, word counts and the 60-minute plan' },
      { href: '/writing/band-descriptors', title: 'How Writing is marked', sub: 'The four criteria, Bands 5–9' },
      { href: '/writing/task-1', title: 'Task 1 Academic: the method', sub: 'Introduction, overview, body paragraphs' },
      { href: '/writing/task-1/line', title: 'Task 1: Line graphs' },
      { href: '/writing/task-1/bar', title: 'Task 1: Bar charts' },
      { href: '/writing/task-1/pie', title: 'Task 1: Pie charts' },
      { href: '/writing/task-1/table', title: 'Task 1: Tables' },
      { href: '/writing/task-1/mixed', title: 'Task 1: Mixed charts' },
      { href: '/writing/task-1/process', title: 'Task 1: Process diagrams' },
      { href: '/writing/task-1/map', title: 'Task 1: Maps' },
      { href: '/writing/letters', title: 'Task 1 General Training: the letter method', sub: 'Purpose, tone, the three bullet points' },
      { href: '/writing/letters/formal', title: 'Formal letters' },
      { href: '/writing/letters/semi', title: 'Semi-formal letters' },
      { href: '/writing/letters/informal', title: 'Informal letters' },
      { href: '/writing/task-2', title: 'Task 2: the essay method', sub: 'Analyse, plan, write, check' },
      { href: '/writing/task-2/opinion', title: 'Task 2: Opinion essays' },
      { href: '/writing/task-2/discussion', title: 'Task 2: Discussion essays' },
      { href: '/writing/task-2/adv-disadv', title: 'Task 2: Advantages & disadvantages' },
      { href: '/writing/task-2/problem-solution', title: 'Task 2: Problem & solution' },
      { href: '/writing/task-2/two-part', title: 'Task 2: Two-part questions' },
      { href: '/writing/task-2/positive-negative', title: 'Task 2: Positive or negative development' },
      { href: '/writing/ideas', title: 'Generating ideas: the idea bank', sub: '10 common topics with arguments and examples' }
    ]
  },
  {
    id: 'speaking', title: 'Speaking', intro: 'How the interview works and a full chapter for each part, with model answers at different bands.',
    chapters: [
      { href: '/speaking', title: 'Speaking overview', sub: 'The three parts and the four criteria' },
      { href: '/speaking/part-1', title: 'Part 1: Introduction & interview' },
      { href: '/speaking/part-2', title: 'Part 2: The long turn (cue card)' },
      { href: '/speaking/part-3', title: 'Part 3: Discussion' },
      { href: '/speaking/topics', title: 'Part 1 topic bank' },
      { href: '/speaking/cue-cards', title: 'Part 2 cue cards' },
      { href: '/speaking/phrases', title: 'Speaking phrases & idioms' },
      { href: '/speaking/pronunciation', title: 'Pronunciation' }
    ]
  },
  {
    id: 'language', title: 'Grammar, sentences & vocabulary', intro: 'The language behind Bands 7–9: sentence types, clauses, connectors, paraphrase and word banks.',
    chapters: [
      { href: '/grammar', title: 'Grammar overview' },
      { href: '/grammar/sentence-types', title: 'Sentence types: simple, compound, complex' },
      { href: '/grammar/clauses', title: 'Relative, noun & adverbial clauses' },
      { href: '/grammar/conditionals', title: 'Conditionals' },
      { href: '/grammar/passive', title: 'The passive voice' },
      { href: '/grammar/tenses', title: 'Tenses for Writing & Speaking' },
      { href: '/grammar/comparatives', title: 'Comparison structures' },
      { href: '/grammar/articles', title: 'Articles & countable nouns' },
      { href: '/grammar/agreement', title: 'Subject–verb agreement' },
      { href: '/grammar/advanced', title: 'Advanced structures for Band 7–9' },
      { href: '/grammar/punctuation', title: 'Punctuation & sentence boundaries' },
      { href: '/grammar/paraphrasing', title: 'Paraphrasing techniques' },
      { href: '/grammar/common-errors', title: 'Common grammar & word errors' },
      { href: '/vocabulary', title: 'The vocabulary bank', sub: '19 banks with flashcards and quizzes' },
      { href: '/vocabulary/linking', title: 'Connecting words: linking & cohesion' },
      { href: '/vocabulary/phrasal', title: 'Phrasal verbs' },
      { href: '/vocabulary/collocations', title: 'Collocations' }
    ]
  },
  {
    id: 'tests', title: 'Test yourself', intro: 'Full-length timed tests and score conversion.',
    chapters: [
      { href: '/mock-tests', title: 'Mock tests: how to use them' },
      { href: '/mock-tests/listening-1', title: 'Listening mock test 1' },
      { href: '/mock-tests/reading-1', title: 'Academic Reading mock test 1' },
      { href: '/calculator', title: 'Band score calculator' },
      { href: '/resources', title: 'Official materials and where to practise next' }
    ]
  }
];

export interface NumberedChapter extends TocChapter { no: number; part: string; partNo: number }
export const bookChapters: NumberedChapter[] = bookParts.flatMap((p, pi) => p.chapters.map(c => ({ ...c, part: p.title, partNo: pi + 1 })))
  .map((c, i) => ({ ...c, no: i + 1 }));

export const chapterFor = (path: string) => bookChapters.find(c => c.href === path);

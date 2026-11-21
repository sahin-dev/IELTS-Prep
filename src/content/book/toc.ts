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
      { href: '/diagnostic', title: 'Diagnostic: find your starting level', sub: 'A one-week assessment that feeds your recommendations' },
      { href: '/progress', title: 'Your 8-week study plan', sub: 'A day-by-day plan, recommendations and your progress record' }
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
      { href: '/writing/letters/complaint', title: 'Letters by purpose: Complaint' },
      { href: '/writing/letters/request', title: 'Letters by purpose: Request' },
      { href: '/writing/letters/apology', title: 'Letters by purpose: Apology' },
      { href: '/writing/letters/invitation', title: 'Letters by purpose: Invitation' },
      { href: '/writing/letters/application', title: 'Letters by purpose: Application' },
      { href: '/writing/letters/explanation', title: 'Letters by purpose: Explanation' },
      { href: '/writing/letters/recommendation', title: 'Letters by purpose: Recommendation' },
      { href: '/writing/task-2', title: 'Task 2: the essay method', sub: 'Analyse, plan, write, check' },
      { href: '/writing/task-2/opinion', title: 'Task 2: Opinion essays' },
      { href: '/writing/task-2/discussion', title: 'Task 2: Discussion essays' },
      { href: '/writing/task-2/adv-disadv', title: 'Task 2: Advantages & disadvantages' },
      { href: '/writing/task-2/problem-solution', title: 'Task 2: Problem & solution' },
      { href: '/writing/task-2/two-part', title: 'Task 2: Two-part questions' },
      { href: '/writing/task-2/positive-negative', title: 'Task 2: Positive or negative development' },
      { href: '/writing/task-2/cause-effect', title: 'Task 2: Cause and effect' },
      { href: '/writing/task-2/mixed', title: 'Task 2: Mixed and combined questions', sub: 'Questions with two or three parts' },
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
      { href: '/speaking/pronunciation', title: 'Pronunciation: quick guide' },
      { href: '/speaking/pronunciation/sounds', title: 'Pronunciation: the sounds of English (IPA)' },
      { href: '/speaking/pronunciation/word-stress', title: 'Pronunciation: word stress' },
      { href: '/speaking/pronunciation/sentence-stress', title: 'Pronunciation: sentence stress, rhythm and intonation' },
      { href: '/speaking/pronunciation/connected-speech', title: 'Pronunciation: connected speech' },
      { href: '/speaking/pronunciation/intelligibility', title: 'Pronunciation: intelligibility and common difficulties' }
    ]
  },
  {
    id: 'bands', title: 'Band score development', intro: 'What distinguishes each band from 4 to 9, with sample answers and commentary – and how to close the gap to your target.',
    chapters: [
      { href: '/bands', title: 'Band levels from 4 to 9', sub: 'How each skill develops; half bands; measuring your gap' },
      { href: '/bands/writing', title: 'Writing at every band', sub: 'One Task 2 question, four answers, full commentary' },
      { href: '/bands/speaking', title: 'Speaking at every band', sub: 'One Part 3 question, four answers, full commentary' },
      { href: '/bands/listening-reading', title: 'Listening and Reading by band', sub: 'Error profiles and what to practise next' }
    ]
  },
  {
    id: 'grammar', title: 'Grammar masterclass', intro: 'English grammar from the parts of speech to grammar for IELTS Writing – the language behind Grammatical Range and Accuracy.',
    chapters: [
      { href: '/grammar', title: 'Grammar masterclass: overview', sub: 'The five sections and how to work through them' },
      { href: '/grammar/nouns', title: 'Parts of speech: Nouns', sub: 'Countable and uncountable, plurals, possessives, nominalisation' },
      { href: '/grammar/pronouns', title: 'Parts of speech: Pronouns', sub: 'Forms, clear reference, dummy it and there' },
      { href: '/grammar/verbs', title: 'Parts of speech: Verbs', sub: 'Forms, transitivity, stative verbs, verb patterns' },
      { href: '/grammar/adjectives', title: 'Parts of speech: Adjectives', sub: 'Position, -ed/-ing, compounds, collocation' },
      { href: '/grammar/adverbs', title: 'Parts of speech: Adverbs', sub: 'Form, position, degree, hedging, linking adverbs' },
      { href: '/grammar/prepositions', title: 'Parts of speech: Prepositions', sub: 'Time, place, data description, dependent prepositions' },
      { href: '/grammar/conjunctions', title: 'Parts of speech: Conjunctions', sub: 'Coordinating, correlative, subordinating – vs adverbs and prepositions' },
      { href: '/grammar/interjections', title: 'Parts of speech: Interjections & discourse markers', sub: 'Natural thinking time in Speaking' },
      { href: '/grammar/articles', title: 'Parts of speech: Articles & countable nouns' },
      { href: '/grammar/determiners', title: 'Parts of speech: Determiners & quantifiers', sub: 'many/much, few/a few, each/every, other/another' },
      { href: '/grammar/tenses', title: 'Tenses: choosing the right tense for each task', sub: 'An overview before the twelve tense chapters' },
      { href: '/grammar/present-simple', title: 'Tenses: Present simple' },
      { href: '/grammar/present-continuous', title: 'Tenses: Present continuous' },
      { href: '/grammar/present-perfect', title: 'Tenses: Present perfect', sub: 'And how it differs from the past simple' },
      { href: '/grammar/present-perfect-continuous', title: 'Tenses: Present perfect continuous' },
      { href: '/grammar/past-simple', title: 'Tenses: Past simple' },
      { href: '/grammar/past-continuous', title: 'Tenses: Past continuous' },
      { href: '/grammar/past-perfect', title: 'Tenses: Past perfect', sub: '"By 2010 the figure had doubled"' },
      { href: '/grammar/past-perfect-continuous', title: 'Tenses: Past perfect continuous' },
      { href: '/grammar/future-simple', title: 'Tenses: Future simple and other future forms', sub: 'will, going to, present forms, Task 1 projections' },
      { href: '/grammar/future-continuous', title: 'Tenses: Future continuous' },
      { href: '/grammar/future-perfect', title: 'Tenses: Future perfect' },
      { href: '/grammar/future-perfect-continuous', title: 'Tenses: Future perfect continuous' },
      { href: '/grammar/subject-predicate', title: 'Sentences: Subject, predicate and clauses', sub: 'The seven clause patterns; fragments and run-ons' },
      { href: '/grammar/sentence-types', title: 'Sentences: Simple, compound, complex' },
      { href: '/grammar/clauses', title: 'Sentences: Relative, noun & adverbial clauses' },
      { href: '/grammar/agreement', title: 'Sentences: Subject–verb agreement' },
      { href: '/grammar/conditionals', title: 'Sentences: Conditionals' },
      { href: '/grammar/passive', title: 'Sentences: Active and passive voice' },
      { href: '/grammar/reported-speech', title: 'Sentences: Direct and reported speech' },
      { href: '/grammar/sentence-transformation', title: 'Sentences: Sentence transformation', sub: 'The grammar of paraphrase' },
      { href: '/grammar/modals', title: 'Advanced: Modal verbs', sub: 'Recommending and hedging' },
      { href: '/grammar/gerunds-infinitives', title: 'Advanced: Gerunds and infinitives' },
      { href: '/grammar/participles', title: 'Advanced: Participles and participle clauses' },
      { href: '/grammar/phrasal-verbs', title: 'Advanced: Phrasal verbs – the grammar' },
      { href: '/grammar/comparatives', title: 'Advanced: Comparison structures' },
      { href: '/grammar/parallelism', title: 'Advanced: Parallel structure' },
      { href: '/grammar/inversion', title: 'Advanced: Inversion' },
      { href: '/grammar/emphasis-cleft', title: 'Advanced: Emphasis and cleft sentences' },
      { href: '/grammar/advanced', title: 'Advanced: Structures for Band 7–9' },
      { href: '/grammar/punctuation', title: 'Advanced: Punctuation & sentence boundaries' },
      { href: '/grammar/common-errors', title: 'Advanced: Common grammar & word errors' },
      { href: '/grammar/grammar-for-writing', title: 'Grammar for IELTS Writing', sub: 'Controlled complexity, sentence improvement, proofreading' },
      { href: '/grammar/paraphrasing', title: 'Grammar for IELTS Writing: Paraphrasing techniques' }
    ]
  },
  {
    id: 'vocabulary', title: 'Vocabulary', intro: 'Word banks with spaced-repetition flashcards, linking words, phrasal verbs and collocations.',
    chapters: [
      { href: '/vocabulary', title: 'The vocabulary bank', sub: 'Every word bank, with flashcards and quizzes' },
      { href: '/vocabulary/topics', title: 'Topic vocabulary: 26 IELTS topics', sub: 'How to learn topic collocations, with a bank for every topic' },
      { href: '/vocabulary/linking', title: 'Connecting words: linking & cohesion' },
      { href: '/vocabulary/phrasal', title: 'Phrasal verbs' },
      { href: '/vocabulary/collocations', title: 'Collocations' }
    ]
  },
  {
    id: 'advanced', title: 'Advanced English beyond the exam', intro: 'Critical thinking, argument, summarising, note-taking, research and presentation skills.',
    chapters: [
      { href: '/advanced', title: 'Advanced English: overview' },
      { href: '/advanced/critical-thinking', title: 'Critical thinking and logical reasoning' },
      { href: '/advanced/argument', title: 'Building an argument' },
      { href: '/advanced/summarising', title: 'Paraphrasing and summarising' },
      { href: '/advanced/note-taking', title: 'Note-taking' },
      { href: '/advanced/research', title: 'Academic reading and research skills' },
      { href: '/advanced/presentations', title: 'Presentation and discussion skills' }
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

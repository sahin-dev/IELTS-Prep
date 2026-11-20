/* The Grammar Masterclass: every grammar topic in teaching order, grouped as in the curriculum (docs/CURRICULUM.md, Part 2).
   The older topics (quick reference + exercises) live in grammar.ts; their chapters are in book/grammar.ts.
   New topics are listed here; their chapters (with exercises) are in book/grammar-*.ts. */
import type { GrammarTopic } from '@/lib/types';
import { grammar as baseTopics } from './grammar';

export const GRAMMAR_GROUPS = [
  { id: 'A', title: 'A. Parts of speech', intro: 'What each kind of word does in a sentence, its forms, and the mistakes learners make with it.' },
  { id: 'B', title: 'B. Tenses', intro: 'How each tense is formed and used, and how to choose between them in Writing and Speaking.' },
  { id: 'C', title: 'C. Sentence structure', intro: 'Clauses, sentence types, agreement, conditionals and voice: how sentences are built.' },
  { id: 'D', title: 'D. Advanced grammar', intro: 'The structures that give range at Bands 7–9, and how to use them accurately.' },
  { id: 'E', title: 'E. Grammar for IELTS Writing', intro: 'Putting it together: accurate, varied sentences without needless complexity.' }
] as const;

const newTopics: GrammarTopic[] = [
  { id: 'nouns', group: 'A', name: 'Nouns', short: 'Countable and uncountable nouns, plurals, possessives, noun phrases and nominalisation.' },
  { id: 'pronouns', group: 'A', name: 'Pronouns', short: 'Personal, possessive, reflexive, relative and indefinite pronouns; clear reference.' },
  { id: 'verbs', group: 'A', name: 'Verbs', short: 'Verb types and forms, transitive and intransitive verbs, verb patterns and dependent prepositions.' },
  { id: 'adjectives', group: 'A', name: 'Adjectives', short: 'Position and order, -ed and -ing, compound adjectives, adjective + preposition, gradable adjectives.' },
  { id: 'adverbs', group: 'A', name: 'Adverbs', short: 'Formation, position, degree and frequency, sentence adverbs and linking adverbs.' },
  { id: 'prepositions', group: 'A', name: 'Prepositions', short: 'Time, place and movement; prepositions for describing data; dependent prepositions.' },
  { id: 'conjunctions', group: 'A', name: 'Conjunctions', short: 'Coordinating, correlative and subordinating conjunctions – and how they differ from linking adverbs and prepositions.' },
  { id: 'interjections', group: 'A', name: 'Interjections and spoken discourse markers', short: 'Oh, well, hmm: what they do in speech, and how to use them naturally in Speaking (never in Writing).' },
  { id: 'determiners', group: 'A', name: 'Determiners and quantifiers', short: 'Demonstratives, possessives, quantifiers, each/every, other/another, and the order of determiners.' },
  { id: 'present-simple', group: 'B', name: 'Present simple', short: 'Habits, facts, states, processes and timetables – the default tense of Task 2 and Part 1.' },
  { id: 'present-continuous', group: 'B', name: 'Present continuous', short: 'Actions now, temporary situations, changing trends and future arrangements.' },
  { id: 'present-perfect', group: 'B', name: 'Present perfect', short: 'Past actions with present relevance, experience, and situations up to now – versus the past simple.' },
  { id: 'present-perfect-continuous', group: 'B', name: 'Present perfect continuous', short: 'Activities continuing up to now, with the focus on duration.' },
  { id: 'past-simple', group: 'B', name: 'Past simple', short: 'Finished past events, past data in Task 1 and stories in Speaking Part 2.' },
  { id: 'past-continuous', group: 'B', name: 'Past continuous', short: 'Actions in progress in the past, background in stories, interrupted actions.' },
  { id: 'past-perfect', group: 'B', name: 'Past perfect', short: 'The earlier past: "by 2010 the figure had doubled", reported speech and regrets.' },
  { id: 'past-perfect-continuous', group: 'B', name: 'Past perfect continuous', short: 'Duration up to a moment in the past, and causes of past situations.' },
  { id: 'future-simple', group: 'B', name: 'Future simple and other future forms', short: 'Will, be going to, the present continuous and present simple for the future – and Task 1 projections.' },
  { id: 'future-continuous', group: 'B', name: 'Future continuous', short: 'Actions in progress at a future time, and expected future events.' },
  { id: 'future-perfect', group: 'B', name: 'Future perfect', short: 'Actions completed before a future time: "by 2050 the population will have doubled".' },
  { id: 'future-perfect-continuous', group: 'B', name: 'Future perfect continuous', short: 'Duration up to a point in the future.' }
];

/* Groups for the older topics */
const groupOf: Record<string, string> = {
  articles: 'A', tenses: 'B', 'sentence-types': 'C', clauses: 'C', agreement: 'C', conditionals: 'C', passive: 'C',
  comparatives: 'D', advanced: 'D', punctuation: 'D', 'common-errors': 'D', paraphrasing: 'E'
};

/* Teaching order within the masterclass */
const ORDER = [
  'nouns', 'pronouns', 'verbs', 'adjectives', 'adverbs', 'prepositions', 'conjunctions', 'interjections', 'articles', 'determiners',
  'tenses', 'present-simple', 'present-continuous', 'present-perfect', 'present-perfect-continuous',
  'past-simple', 'past-continuous', 'past-perfect', 'past-perfect-continuous',
  'future-simple', 'future-continuous', 'future-perfect', 'future-perfect-continuous',
  'sentence-types', 'clauses', 'agreement', 'conditionals', 'passive',
  'comparatives', 'advanced', 'punctuation', 'common-errors',
  'paraphrasing'
];

const all = [...baseTopics.map(t => ({ ...t, group: t.group || groupOf[t.id] || 'D' })), ...newTopics];
const rank = (id: string) => { const i = ORDER.indexOf(id); return i === -1 ? 999 : i; };

export const grammarTopics: GrammarTopic[] = [...all].sort((a, b) => rank(a.id) - rank(b.id));

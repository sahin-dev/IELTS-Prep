/* Standard sources and further reading, attached to chapters that do not list their own (see index.ts).
   Every URL here was checked on 2026-11-20. */
import type { Chapter, Reference } from '@/lib/types';
import { grammarBooks } from './grammar-pos-a';

const IELTS = 'https://ielts.org/take-a-test/test-types/';
const official: Reference = { title: 'IELTS: Preparation resources – official sample questions and familiarisation tests', url: 'https://ielts.org/take-a-test/preparation-resources', note: 'Use the official samples before any other practice material: they show the real format and difficulty.' };
const scoring: Reference = { title: 'IELTS: IELTS scoring in detail', url: 'https://ielts.org/take-a-test/your-results/ielts-scoring-in-detail', note: 'Band scale, raw-score averages for Listening and Reading, and the Writing and Speaking criteria.' };
const writingBd: Reference = { title: 'IELTS Writing band descriptors (public version)', url: 'https://ielts.org/cdn/ielts-downloadable-assets/ielts-guidance-and-support/ielts-guides/ielts-writing-band-descriptors.pdf', note: 'The criteria examiners use for both Writing tasks.' };
const speakingBd: Reference = { title: 'IELTS Speaking band descriptors (public version)', url: 'https://ielts.org/cdn/ielts-guides/ielts-speaking-band-descriptors.pdf' };
const inBook = (title: string, url: string): Reference => ({ title: 'In this book: ' + title, url });

export const defaultSources: Record<string, Reference[]> = {
  reading: [
    { title: 'IELTS Academic: Reading test format', url: IELTS + 'ielts-academic-test/ielts-academic-format-reading' },
    { title: 'IELTS General Training: Reading test format', url: IELTS + 'ielts-general-training-test/ielts-general-training-format-reading' },
    official, scoring,
    inBook('Reading fundamentals', '/reading/fundamentals'),
    inBook('Synonyms and paraphrase pairs', '/vocabulary/r-synonyms')
  ],
  listening: [
    { title: 'IELTS Academic: Listening test format', url: IELTS + 'ielts-academic-test/ielts-academic-format-listening' },
    official, scoring,
    inBook('Listening fundamentals', '/listening/fundamentals'),
    inBook('Dictation drills', '/practice/drills')
  ],
  writingAcademic: [
    { title: 'IELTS Academic: Writing test format', url: IELTS + 'ielts-academic-test/ielts-academic-format-writing' },
    writingBd, official,
    inBook('How Writing is marked', '/writing/band-descriptors'),
    inBook('Grammar for IELTS Writing', '/grammar/grammar-for-writing')
  ],
  writingGT: [
    { title: 'IELTS General Training: Writing test format', url: IELTS + 'ielts-general-training-test/ielts-general-training-format-writing' },
    writingBd, official,
    inBook('How Writing is marked', '/writing/band-descriptors')
  ],
  writingTask2: [
    { title: 'IELTS Academic: Writing test format', url: IELTS + 'ielts-academic-test/ielts-academic-format-writing' },
    { title: 'IELTS General Training: Writing test format', url: IELTS + 'ielts-general-training-test/ielts-general-training-format-writing' },
    writingBd, official,
    inBook('Generating ideas: the idea bank', '/writing/ideas'),
    inBook('Grammar for IELTS Writing', '/grammar/grammar-for-writing')
  ],
  speaking: [
    { title: 'IELTS Academic: Speaking test format', url: IELTS + 'ielts-academic-test/ielts-academic-format-speaking' },
    speakingBd, official,
    inBook('Interjections and spoken discourse markers', '/grammar/interjections'),
    inBook('Pronunciation', '/speaking/pronunciation')
  ],
  grammar: [
    { title: 'British Council LearnEnglish: English grammar reference', url: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference', note: 'Free explanations and exercises for every grammar topic.' },
    ...grammarBooks, writingBd
  ],
  vocabulary: [
    { title: 'Averil Coxhead, "A New Academic Word List", TESOL Quarterly 34(2), 2000', note: 'The research behind the Academic Word List: 570 word families common across academic subjects.' },
    { title: 'Michael McCarthy and Felicity O\'Dell, English Vocabulary in Use and English Collocations in Use (Cambridge University Press)', note: 'Topic-based vocabulary and collocation practice at intermediate and advanced levels.' },
    writingBd, speakingBd
  ],
  study: [official, scoring, inBook('The IELTS test explained', '/exam'), inBook('How IELTS is scored', '/exam/scoring')]
};

/** Adds the standard sources to every chapter that has none of its own. */
export function withSources<T extends Chapter>(ch: T, refs: Reference[]): T {
  return ch.references?.length ? ch : { ...ch, references: refs };
}
export function mapWithSources(chs: Record<string, Chapter>, refs: Reference[]): Record<string, Chapter> {
  return Object.fromEntries(Object.entries(chs).map(([k, v]) => [k, withSources(v, refs)]));
}

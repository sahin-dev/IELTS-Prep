/* Shared content types for the whole platform */

export type Skill = 'listening' | 'reading' | 'writing' | 'speaking';

/* ---------- Charts (Writing Task 1 visuals, diagrams, maps) ---------- */
export interface ChartSeries { name: string; data: (number | null)[]; color?: string; dashed?: boolean }
export interface ChartSpec {
  type: 'line' | 'bar' | 'pie' | 'table' | 'process' | 'svg' | 'multi';
  title?: string;
  caption?: string;
  x?: string[];
  xLabel?: string;
  yLabel?: string;
  yMax?: number;
  unit?: string;
  values?: boolean;
  width?: number;
  forceLegend?: boolean;
  series?: ChartSeries[];
  pies?: { title?: string; slices: [string, number][] }[];
  headers?: string[];
  rows?: string[][];
  steps?: (string | [string, string])[];
  cycle?: boolean;
  svg?: string;
  charts?: ChartSpec[];
}

/* ---------- Tests & quizzes ---------- */
export type QuestionKind = 'choice' | 'multi' | 'select' | 'gap' | 'open';
export interface Question {
  n: number;
  /** Question text (HTML). For gap questions `{}` marks the gap position. */
  q?: string;
  /** Answer. Use `|` for alternatives, letters for choice, array for multi. */
  a: string | string[];
  /** Explanation shown after checking (HTML). */
  x?: string;
  /** Options for per-question multiple choice (lettered A, B, C...). */
  opts?: string[];
}
export interface Option { v: string; t: string }
export interface QuestionGroup {
  kind: QuestionKind;
  title?: string;
  instructions?: string;
  /** Shared choices for every question (e.g. TRUE / FALSE / NOT GIVEN). */
  choices?: string[];
  /** Shared option list (headings, people, word box...). */
  options?: Option[];
  boxTitle?: string;
  hideBox?: boolean;
  showText?: boolean;
  /** Template (HTML) with [[n]] placeholders: summaries, forms, tables, notes. */
  text?: string;
  maxWords?: number;
  figure?: ChartSpec;
  questions: Question[];
}
export interface ScriptLine { s?: string; g?: 'f' | 'm'; t: string; pause?: number }
export interface TestSet {
  id: string;
  type: string;
  title: string;
  level?: string;
  time?: number;
  part?: number;
  passageTitle?: string;
  passage?: string;
  script?: ScriptLine[];
  groups: QuestionGroup[];
}

/* ---------- Guides ---------- */
export interface QuestionTypeGuide {
  id: string;
  name: string;
  freq: string;
  practice?: string;
  what: string;
  looksLike: string;
  definitions?: string;
  strategy: string[];
  traps: string[];
  example: string;
}
export interface SkillGuide { intro: string; types: QuestionTypeGuide[] }

export interface MockTest {
  id: string;
  skill: 'reading' | 'listening';
  title: string;
  description: string;
  minutes: number;
  sections: string[]; // TestSet ids, in order
}

/* ---------- Writing ---------- */
export interface Task1Type {
  id: string;
  name: string;
  summary: string;
  recognise: string;
  structure: [string, string][];
  tips: string[];
  language: { h: string; items: string[] }[];
  sample: { prompt: string; chart: ChartSpec; answer: string };
  practice: { id: string; prompt: string; chart: ChartSpec }[];
}
export interface LetterType {
  id: string;
  name: string;
  phrases: { h: string; items: string[] }[];
  sample: { prompt: string; answer: string };
  practice: string[];
}
export interface EssayType {
  id: string;
  name: string;
  recognise: string[];
  structure: [string, string][];
  template: string;
  sample: { prompt: string; answer: string };
  prompts: string[];
}
export interface IdeaTopic { id: string; topic: string; questions: string[]; for: string[]; against: string[]; examples: string[]; vocab: string[] }

/* ---------- Speaking ---------- */
export interface SpeakingPart { id: string; name: string; desc: string; technique: string; tips: string[]; samples: { q: string; a: string }[] }
export interface CueCard { title: string; points: string[]; last: string; part3: string[] }

/* ---------- Vocabulary & grammar ---------- */
export type VocabItem = string[]; // [word, meaning, example?]
export interface VocabGroup { h: string; items: VocabItem[] }
export interface VocabBank { id: string; section: string; name: string; color: string; intro: string; groups: VocabGroup[] }
export interface GrammarTopic { id: string; name: string; short: string; html: string; exercises: QuestionGroup[] }

import type { Question, QuestionGroup } from './types';

/* ---------- Band conversion ---------- */
const BANDS: Record<string, [number, number][]> = {
  listening: [[39, 9], [37, 8.5], [35, 8], [32, 7.5], [30, 7], [26, 6.5], [23, 6], [18, 5.5], [16, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [0, 2]],
  reading: [[39, 9], [37, 8.5], [35, 8], [33, 7.5], [30, 7], [27, 6.5], [23, 6], [19, 5.5], [15, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [0, 2]],
  readingGT: [[40, 9], [39, 8.5], [37, 8], [36, 7.5], [34, 7], [32, 6.5], [30, 6], [27, 5.5], [23, 5], [19, 4.5], [15, 4], [12, 3.5], [9, 3], [6, 2.5], [0, 2]]
};

/** Convert a raw score out of 40 to a band. */
export function band(skill: string, raw40: number): number {
  const t = BANDS[skill] || BANDS.reading;
  for (const [min, b] of t) if (raw40 >= min) return b;
  return 0;
}

/** Overall band: average rounded to the nearest half band (.25 → .5, .75 → next whole). */
export function overallBand(scores: number[]): number {
  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  const f = Math.floor(avg), d = avg - f;
  return d < 0.25 ? f : d < 0.75 ? f + 0.5 : f + 1;
}

/* ---------- Answer marking ---------- */
export const norm = (s: string) => String(s || '').toLowerCase().replace(/[’']/g, "'").replace(/[.,;:!?"()]/g, ' ').replace(/\s+/g, ' ').trim();
export const answerList = (a: string | string[]) => (Array.isArray(a) ? a : String(a).split('|'));
export const wordCount = (s: string) => norm(s).split(' ').filter(Boolean).length;

export type AnswerValue = string | string[];
export interface Grade { score: number; total: number; ok: boolean; note?: string }

export function marksFor(group: QuestionGroup, q: Question): number {
  if (group.kind === 'open') return 0;
  return group.kind === 'multi' ? answerList(q.a).length : 1;
}

export function grade(group: QuestionGroup, q: Question, val: AnswerValue | undefined): Grade {
  if (group.kind === 'open') return { score: 0, total: 0, ok: true };
  if (group.kind === 'multi') {
    const ans = answerList(q.a);
    const got = Array.isArray(val) ? val : [];
    const hit = got.filter(v => ans.includes(v)).length;
    return { score: hit, total: ans.length, ok: hit === ans.length && got.length === ans.length };
  }
  const v = typeof val === 'string' ? val : '';
  let ok = answerList(q.a).map(norm).includes(norm(v));
  let note: string | undefined;
  if (ok && group.maxWords && wordCount(v) > group.maxWords) { ok = false; note = `Too many words (limit: ${group.maxWords}).`; }
  return { score: ok ? 1 : 0, total: 1, ok, note };
}

export function totalMarks(groups: QuestionGroup[]) {
  return groups.reduce((a, g) => a + g.questions.reduce((b, q) => b + marksFor(g, q), 0), 0);
}

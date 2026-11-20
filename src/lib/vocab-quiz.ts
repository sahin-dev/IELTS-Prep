import type { TestSet, VocabBank } from './types';

export interface FlatItem { w: string; m: string; e: string; g: string }
export const flatten = (b: VocabBank): FlatItem[] => b.groups.flatMap(g => g.items.map(i => ({ w: i[0], m: i[1] || '', e: i[2] || '', g: g.h })));

export const shuffle = <T,>(a: T[]) => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };

/** Multiple-choice quiz: meaning → word. Must be called on the client (random). */
export function buildVocabQuiz(items: FlatItem[], id: string, title: string, n: number): TestSet {
  const usable = items.filter(x => x.m.length > 3 && !/^\(/.test(x.m));
  const questions = shuffle(usable).slice(0, Math.min(n, usable.length)).map((x, k) => {
    const same = shuffle(usable.filter(y => y.g === x.g && y.w !== x.w).map(y => y.w));
    const other = shuffle(usable.filter(y => y.g !== x.g).map(y => y.w));
    const wrong = [...new Set([...same.slice(0, 2), ...other, ...same.slice(2)])].filter(w => w !== x.w).slice(0, 3);
    const opts = shuffle([x.w, ...wrong]);
    return { n: k + 1, q: `Which word or phrase matches: <b>${x.m}</b>?`, opts, a: String.fromCharCode(65 + opts.indexOf(x.w)), x: x.e ? `Example: <i>${x.e}</i>` : '' };
  });
  return { id, type: 'vocab', title, groups: [{ kind: 'choice', instructions: 'Choose the correct word or phrase for each meaning.', questions }] };
}

/** Spelling dictation: the word is spoken, the learner types it. */
export function buildDictation(items: FlatItem[], id: string, n = 10): TestSet {
  const words = shuffle(items).slice(0, n);
  const b64 = (s: string) => (typeof btoa === 'function' ? btoa(s) : Buffer.from(s).toString('base64'));
  return {
    id, type: 'vocab', title: 'Spelling dictation',
    groups: [{ kind: 'gap', instructions: 'Press 🔊 to hear each word, then type it.', questions: words.map((x, k) => ({ n: k + 1, q: `<button type="button" class="btn small soft" data-say64="${b64(x.w)}">🔊 Play</button> {}`, a: x.w, x: `Hint: ${x.m}` })) }]
  };
}

/* Simple Leitner spaced-repetition scheduler for flashcards */
import { Store } from './storage';

export interface CardState { box: number; due: string }
const INTERVALS = [0, 1, 3, 7, 14, 30]; // days, by box 0..5
const today = () => new Date().toISOString().slice(0, 10);
const addDays = (n: number) => { const d = new Date(); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10); };

export const SRS = {
  load(bank: string): Record<string, CardState> { return Store.get(`srs:${bank}`, {}); },
  save(bank: string, s: Record<string, CardState>) { Store.set(`srs:${bank}`, s); },
  isDue(s?: CardState) { return !s || s.due <= today(); },
  isMastered(s?: CardState) { return !!s && s.box >= 4; },
  answer(bank: string, word: string, knew: boolean) {
    const all = this.load(bank);
    const box = knew ? Math.min((all[word]?.box || 0) + 1, 5) : 0;
    all[word] = { box, due: addDays(INTERVALS[box]) };
    this.save(bank, all);
    return all[word];
  },
  stats(bank: string, words: string[]) {
    const all = this.load(bank);
    return {
      due: words.filter(w => this.isDue(all[w])).length,
      learning: words.filter(w => all[w] && all[w].box < 4).length,
      mastered: words.filter(w => this.isMastered(all[w])).length,
      unseen: words.filter(w => !all[w]).length
    };
  }
};

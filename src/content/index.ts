/* Single entry point for all content */
import type { TestSet, VocabBank } from '@/lib/types';
import { readingPractice } from './reading-practice';
import { readingExtra } from './reading-extra';
import { listeningPractice } from './listening-practice';
import { listeningExtra } from './listening-extra';
import { vocabWritingBanks } from './vocabulary-writing';
import { vocabSkillBanks } from './vocabulary-skills';
import { vocabExtraBanks } from './vocabulary-extra';

export { reading } from './reading-guide';
export { listening } from './listening-guide';
export { writing } from './writing-task1';
export { writingTask2 } from './writing-task2';
export { bandDescriptors, ideaBank, task1Mistakes } from './writing-extra';
export { speaking } from './speaking';
export { pronunciation } from './pronunciation';
export { grammar } from './grammar';
export { resources } from './resources';
export { studyPlan } from './study-plan';
export { mockTests } from './mock-tests';

function orderByType(sets: TestSet[], typeOrder: string[]) {
  const rank = (t: string) => { const i = typeOrder.indexOf(t); return i === -1 ? 999 : i; };
  return [...sets].sort((a, b) => rank(a.type) - rank(b.type));
}

export const readingSets: TestSet[] = orderByType([...readingPractice, ...readingExtra],
  ['tfng', 'ynng', 'mcq', 'headings', 'matching-info', 'matching-features', 'sentence-endings', 'sentence-completion', 'summary', 'diagram', 'short-answer', 'gt', 'mixed']);

export const listeningSets: TestSet[] = [...listeningPractice, ...listeningExtra].sort((a, b) => (a.part || 0) - (b.part || 0));

export const allSets: TestSet[] = [...readingSets, ...listeningSets];
export const getSet = (id: string) => allSets.find(s => s.id === id);

const SECTION_ORDER = ['Writing Task 1', 'Writing Task 2', 'Grammar & Cohesion', 'Listening', 'Reading', 'Speaking'];
export const vocabBanks: VocabBank[] = [...vocabWritingBanks, ...vocabExtraBanks, ...vocabSkillBanks]
  .sort((a, b) => SECTION_ORDER.indexOf(a.section) - SECTION_ORDER.indexOf(b.section));
export const vocabSections = SECTION_ORDER.filter(s => vocabBanks.some(b => b.section === s));

/* Single entry point for all content */
import type { TestSet, VocabBank } from '@/lib/types';
import { readingPractice } from './reading-practice';
import { readingExtra } from './reading-extra';
import { listeningPractice } from './listening-practice';
import { listeningExtra } from './listening-extra';
import { vocabWritingBanks } from './vocabulary-writing';
import { vocabSkillBanks } from './vocabulary-skills';
import { vocabExtraBanks } from './vocabulary-extra';
import { topicBanks } from './vocabulary-topics';

export { reading } from './reading-guide';
export { listening } from './listening-guide';
import { writing as writingBase } from './writing-task1';
import { writingTask2 as writingTask2Base } from './writing-task2';
import { letterPurposes } from './writing-letters-purpose';
import { essayTypesExtra } from './writing-task2-extra';
/* Letters: three register chapters, then seven purpose chapters. Essays: the original six types plus cause-effect and mixed. */
export const writing = { ...writingBase, gt: { ...writingBase.gt, types: [...writingBase.gt.types, ...letterPurposes] } };
export const writingTask2 = { ...writingTask2Base, types: [...writingTask2Base.types, ...essayTypesExtra] };
export { bandDescriptors, ideaBank, task1Mistakes } from './writing-extra';
export { speaking } from './speaking';
export { pronunciation } from './pronunciation';
export { grammarTopics as grammar, GRAMMAR_GROUPS } from './grammar-masterclass';
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

const SECTION_ORDER = ['Topic vocabulary', 'Writing Task 1', 'Writing Task 2', 'Grammar & Cohesion', 'Listening', 'Reading', 'Speaking'];
export const vocabBanks: VocabBank[] = [...vocabWritingBanks, ...vocabExtraBanks, ...vocabSkillBanks, ...topicBanks]
  .sort((a, b) => SECTION_ORDER.indexOf(a.section) - SECTION_ORDER.indexOf(b.section));
export const vocabSections = SECTION_ORDER.filter(s => vocabBanks.some(b => b.section === s));

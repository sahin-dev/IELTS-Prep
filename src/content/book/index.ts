/* The IELTS Book: in-depth chapters keyed by the id of the page they belong to */
import type { Chapter } from '@/lib/types';
import { defaultSources as S, mapWithSources, withSources } from './sources';
import { readingChaptersA } from './reading-a';
import { readingChaptersB } from './reading-b';
import { readingChaptersC } from './reading-c';
import { listeningChaptersA } from './listening-a';
import { listeningChaptersB } from './listening-b';
import * as fundamentals from './fundamentals';
import * as t1 from './writing-t1';
import * as t2 from './writing-t2';
import * as sp from './speaking';
import { vocabChapters as vocabBase } from './language';
import { grammarChapters as grammarBase } from './grammar';
import { grammarChaptersPosA } from './grammar-pos-a';
import { grammarChaptersPosB } from './grammar-pos-b';
import { grammarChaptersPosC } from './grammar-pos-c';
import { tenseChaptersA } from './grammar-tense-a';
import { tenseChaptersB } from './grammar-tense-b';
import { tenseChaptersC } from './grammar-tense-c';
import { structChapters } from './grammar-struct';
import { advChaptersA } from './grammar-adv-a';
import { advChaptersB } from './grammar-adv-b';
import { letterPurposeChapters } from './writing-letters-purpose';
import { task2ChaptersExtra } from './writing-t2-extra';

/* Older chapters that list no sources of their own receive the standard sources for their area (sources.ts). */
export const readingChapters: Record<string, Chapter> = mapWithSources({ ...readingChaptersA, ...readingChaptersB, ...readingChaptersC }, S.reading);
export const listeningChapters: Record<string, Chapter> = mapWithSources({ ...listeningChaptersA, ...listeningChaptersB }, S.listening);

export const studyMethod = withSources(fundamentals.studyMethod, S.study);
export const readingFundamentals = withSources(fundamentals.readingFundamentals, S.reading);
export const listeningFundamentals = withSources(fundamentals.listeningFundamentals, S.listening);
export { examFormat } from './exam-a';
export { examScoring } from './exam-b';
export { examDay } from './exam-c';
export const task1Chapters = mapWithSources(t1.task1Chapters, S.writingAcademic);
export const task1Method = withSources(t1.task1Method, S.writingAcademic);
export const letterChapters = mapWithSources({ ...t2.letterChapters, ...letterPurposeChapters }, S.writingGT);
export const lettersMethod = withSources(t2.lettersMethod, S.writingGT);
export const task2Chapters = mapWithSources({ ...t2.task2Chapters, ...task2ChaptersExtra }, S.writingTask2);
export const task2Method = withSources(t2.task2Method, S.writingTask2);
export const speakingChapters = mapWithSources(sp.speakingChapters, S.speaking);
export const speakingFundamentals = withSources(sp.speakingFundamentals, S.speaking);

export const grammarChapters: Record<string, Chapter> = mapWithSources({
  ...grammarBase, ...grammarChaptersPosA, ...grammarChaptersPosB, ...grammarChaptersPosC,
  ...tenseChaptersA, ...tenseChaptersB, ...tenseChaptersC, ...structChapters, ...advChaptersA, ...advChaptersB
}, S.grammar);
export const vocabChapters: Record<string, Chapter> = mapWithSources(vocabBase, S.vocabulary);
import { topicVocabChapter as topicVocabBase } from './vocab-topics';
export const topicVocabChapter = withSources(topicVocabBase, S.vocabulary);
export { pronunciationChapters } from './pronunciation';
export { bookChapters, bookParts, chapterFor } from './toc';

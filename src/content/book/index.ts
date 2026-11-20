/* The IELTS Book: in-depth chapters keyed by the id of the page they belong to */
import type { Chapter } from '@/lib/types';
import { readingChaptersA } from './reading-a';
import { readingChaptersB } from './reading-b';
import { readingChaptersC } from './reading-c';
import { listeningChaptersA } from './listening-a';
import { listeningChaptersB } from './listening-b';

export const readingChapters: Record<string, Chapter> = { ...readingChaptersA, ...readingChaptersB, ...readingChaptersC };
export const listeningChapters: Record<string, Chapter> = { ...listeningChaptersA, ...listeningChaptersB };

export { listeningFundamentals, readingFundamentals, studyMethod } from './fundamentals';
export { examFormat } from './exam-a';
export { examScoring } from './exam-b';
export { examDay } from './exam-c';
export { task1Chapters, task1Method } from './writing-t1';
export { letterChapters, lettersMethod, task2Chapters, task2Method } from './writing-t2';
export { speakingChapters, speakingFundamentals } from './speaking';
export { grammarChapters } from './grammar';
export { vocabChapters } from './language';
export { bookChapters, bookParts, chapterFor } from './toc';

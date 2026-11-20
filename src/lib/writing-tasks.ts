/* Registry of every writing prompt (samples + practice) used by the writing editor */
import { writing, writingTask2 } from '@/content';
import type { ChartSpec } from './types';

export interface WritingTask {
  id: string;
  task: 'Task 1 Academic' | 'Task 1 General Training' | 'Task 2';
  type: string;
  href: string;
  prompt: string;
  chart?: ChartSpec;
  model?: string;
  min: number;
  minutes: number;
  sample?: boolean;
}

const T2_SUFFIX = '<br><br>Give reasons for your answer and include any relevant examples from your own knowledge or experience.<br>Write at least 250 words.';
const GT_SUFFIX = '<br><br>Write at least 150 words. You do NOT need to write any addresses.';

export const writingTasks: WritingTask[] = [
  ...writing.task1.flatMap(t => [
    { id: `w1-${t.id}-s`, task: 'Task 1 Academic' as const, type: t.name, href: `/writing/task-1/${t.id}`, prompt: t.sample.prompt + '<br><br>Write at least 150 words.', chart: t.sample.chart, model: t.sample.answer, min: 150, minutes: 20, sample: true },
    ...t.practice.map(p => ({ id: p.id, task: 'Task 1 Academic' as const, type: t.name, href: `/writing/task-1/${t.id}`, prompt: p.prompt + '<br><br>Write at least 150 words.', chart: p.chart, min: 150, minutes: 20 }))
  ]),
  ...writing.gt.types.flatMap(t => [
    { id: `gt-${t.id}-s`, task: 'Task 1 General Training' as const, type: t.name, href: `/writing/letters/${t.id}`, prompt: t.sample.prompt + GT_SUFFIX, model: t.sample.answer, min: 150, minutes: 20, sample: true },
    ...t.practice.map((p, i) => ({ id: `gt-${t.id}-${i}`, task: 'Task 1 General Training' as const, type: t.name, href: `/writing/letters/${t.id}`, prompt: p + GT_SUFFIX, min: 150, minutes: 20 }))
  ]),
  ...writingTask2.types.flatMap(t => [
    { id: `w2-${t.id}-s`, task: 'Task 2' as const, type: t.name, href: `/writing/task-2/${t.id}`, prompt: t.sample.prompt + T2_SUFFIX, model: t.sample.answer, min: 250, minutes: 40, sample: true },
    ...t.prompts.map((p, i) => ({ id: `w2-${t.id}-${i}`, task: 'Task 2' as const, type: t.name, href: `/writing/task-2/${t.id}`, prompt: p + T2_SUFFIX, min: 250, minutes: 40 }))
  ])
];

export const getWritingTask = (id: string) => writingTasks.find(w => w.id === id);

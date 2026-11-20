import type { MockTest } from '@/lib/types';

export const mockTests: MockTest[] = [
  {
    id: 'listening-1', skill: 'listening', title: 'Listening Mock Test 1', minutes: 30,
    description: 'A full 40-question Listening test: Part 1 form completion, Part 2 multiple choice & matching, Part 3 discussion, Part 4 lecture. Each recording plays once in exam mode.',
    sections: ['l-form', 'l-p2-garden', 'l-p3-research', 'l-notes']
  },
  {
    id: 'reading-1', skill: 'reading', title: 'Academic Reading Mock Test 1', minutes: 60,
    description: 'A full 40-question Academic Reading test with three passages of increasing difficulty and a 60-minute timer.',
    sections: ['r-mixed-1', 'r-mock-p2', 'r-mock-p3']
  }
];

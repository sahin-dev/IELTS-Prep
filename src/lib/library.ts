/* The practice library (Part 9 of the curriculum) and the learn-links used by recommendations (Part 12).
   Built on the server from all content; passed to client components as plain data. */
import { grammar, listening, listeningSets, reading, readingSets, speaking } from '@/content';
import * as book from '@/content/book';
import { bandChapters } from '@/content/book/bands';
import { advancedChapters, advancedOverview } from '@/content/book/advanced';
import type { Chapter } from './types';
import { writingTasks } from './writing-tasks';

export interface LibraryItem {
  /** Progress id (results are stored under it) */
  id: string;
  title: string;
  skill: 'Listening' | 'Reading' | 'Writing' | 'Speaking' | 'Grammar' | 'Vocabulary' | 'Exam & bands' | 'Advanced English';
  /** Question type or task type, used for filtering and recommendations */
  type: string;
  kind: 'Practice set' | 'Writing prompt' | 'Cue card' | 'Chapter exercises';
  level?: string;
  minutes?: number;
  href: string;
  /** The chapter that teaches this type */
  learn?: string;
}

const typeName = (guide: typeof reading, id: string) => guide.types.find(t => t.id === id)?.name || (id === 'gt' ? 'General Training sections' : id === 'mixed' ? 'Mixed question types' : id);

/** Every chapter that has exercises, with the page it lives on. */
function chapterPages(): [string, Chapter, LibraryItem['skill'], string][] {
  const out: [string, Chapter, LibraryItem['skill'], string][] = [];
  const add = (href: string, ch: Chapter | undefined, skill: LibraryItem['skill'], type: string) => { if (ch?.exercises) out.push([href, ch, skill, type]); };
  add('/exam', book.examFormat, 'Exam & bands', 'The IELTS test');
  add('/exam/scoring', book.examScoring, 'Exam & bands', 'Scoring');
  add('/exam/test-day', book.examDay, 'Exam & bands', 'Test day');
  Object.entries(bandChapters).forEach(([id, ch]) => add(id === 'overview' ? '/bands' : `/bands/${id === 'objective' ? 'listening-reading' : id}`, ch, 'Exam & bands', 'Band levels'));
  Object.entries(book.grammarChapters).forEach(([id, ch]) => add(`/grammar/${id}`, ch, 'Grammar', 'Grammar'));
  Object.entries(book.letterChapters).forEach(([id, ch]) => add(`/writing/letters/${id}`, ch, 'Writing', 'GT letters'));
  Object.entries(book.task2Chapters).forEach(([id, ch]) => add(`/writing/task-2/${id}`, ch, 'Writing', 'Task 2 essays'));
  Object.entries(book.pronunciationChapters).forEach(([id, p]) => add(`/speaking/pronunciation/${id}`, p.chapter, 'Speaking', 'Pronunciation'));
  add('/vocabulary/topics', book.topicVocabChapter, 'Vocabulary', 'Topic vocabulary');
  add('/advanced', advancedOverview, 'Advanced English', 'Advanced English');
  Object.entries(advancedChapters).forEach(([id, a]) => add(`/advanced/${id}`, a.chapter, 'Advanced English', 'Advanced English'));
  return out;
}

export function buildLibrary(): LibraryItem[] {
  const items: LibraryItem[] = [];
  readingSets.forEach(s => items.push({ id: s.id, title: s.title, skill: 'Reading', type: typeName(reading, s.type), kind: 'Practice set', level: s.level, minutes: s.time, href: `/practice/reading/${s.id}`, learn: reading.types.some(t => t.id === s.type) ? `/reading/${s.type}` : '/reading/fundamentals' }));
  listeningSets.forEach(s => items.push({ id: s.id, title: s.title, skill: 'Listening', type: typeName(listening as typeof reading, s.type), kind: 'Practice set', level: s.level || (s.part ? `Part ${s.part}` : undefined), minutes: s.time, href: `/practice/listening/${s.id}`, learn: listening.types.some(t => t.id === s.type) ? `/listening/${s.type}` : '/listening/fundamentals' }));
  writingTasks.forEach(w => items.push({ id: 'writing-' + w.id, title: w.prompt.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 110) + '…', skill: 'Writing', type: `${w.task}: ${w.type}`, kind: 'Writing prompt', minutes: w.minutes, href: `/practice/writing/${w.id}`, learn: w.href }));
  speaking.cueCards.forEach((c, i) => items.push({ id: 'cue-' + i, title: c.title, skill: 'Speaking', type: 'Part 2 cue card', kind: 'Cue card', minutes: 4, href: `/practice/speaking/${i}`, learn: '/speaking/part-2' }));
  grammar.filter(g => g.exercises?.length).forEach(g => items.push({ id: 'g-' + g.id, title: g.name, skill: 'Grammar', type: 'Grammar', kind: 'Chapter exercises', minutes: 10, href: `/grammar/${g.id}#topic-exercises`, learn: `/grammar/${g.id}` }));
  chapterPages().forEach(([href, ch, skill, type]) => items.push({ id: ch.exercises!.id, title: ch.exercises!.title.replace(/^Chapter exercises: /, ''), skill, type, kind: 'Chapter exercises', minutes: Math.max(5, Math.round(ch.exercises!.groups.reduce((a, g) => a + g.questions.length, 0) * 0.7)), href: href + '#exercises', learn: href }));
  return items;
}

/** For recommendations: result id → what it measures and where to learn it. */
export function buildLearnMap(): Record<string, { label: string; learn: string; skill: string; practice?: string }> {
  const map: Record<string, { label: string; learn: string; skill: string; practice?: string }> = {};
  buildLibrary().forEach(i => {
    if (i.kind === 'Writing prompt' || i.kind === 'Cue card') return; // not auto-marked
    const label = i.kind === 'Practice set' ? `${i.skill}: ${i.type}` : `${i.skill}: ${i.title}`;
    map[i.id] = { label, learn: i.learn || i.href, skill: i.skill, practice: i.kind === 'Practice set' ? i.href : undefined };
  });
  return map;
}

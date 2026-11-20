/* Builds the site-wide search index (run on the server, passed to the client search page) */
import { grammar, ideaBank, listening, listeningSets, mockTests, reading, readingSets, speaking, vocabBanks, writing, writingTask2 } from '@/content';
import { writingTasks } from './writing-tasks';
import { bookChapters } from '@/content/book/toc';

export interface SearchEntry { t: string; s: string; h: string; k: string }
const strip = (s: string) => s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

export function buildSearchIndex(): SearchEntry[] {
  const idx: SearchEntry[] = [];
  bookChapters.forEach(c => idx.push({ t: `Chapter ${c.no}: ${c.title}`, s: `${c.part}${c.sub ? ' · ' + c.sub : ''}`, h: c.href, k: 'Book chapter' }));
  idx.push({ t: 'Reading answer order: what to answer first', s: 'Which questions follow passage order, which to answer first, and which use the full passage', h: '/reading/answer-order', k: 'Reading strategy' });
  vocabBanks.forEach(c => c.groups.forEach(g => g.items.forEach(i => idx.push({ t: i[0], s: `${c.name} · ${i[1]}`, h: `/vocabulary/${c.id}`, k: 'Vocabulary' }))));
  reading.types.forEach(t => idx.push({ t: t.name, s: 'Reading question type – ' + strip(t.what).slice(0, 100), h: `/reading/${t.id}`, k: 'Question type' }));
  listening.types.forEach(t => idx.push({ t: t.name, s: 'Listening question type – ' + strip(t.what).slice(0, 100), h: `/listening/${t.id}`, k: 'Question type' }));
  writing.task1.forEach(t => idx.push({ t: 'Task 1: ' + t.name, s: t.summary, h: `/writing/task-1/${t.id}`, k: 'Writing' }));
  writing.gt.types.forEach(t => idx.push({ t: 'GT letter: ' + t.name, s: 'General Training Task 1', h: `/writing/letters/${t.id}`, k: 'Writing' }));
  writingTask2.types.forEach(t => idx.push({ t: 'Task 2: ' + t.name, s: t.recognise.join(' / '), h: `/writing/task-2/${t.id}`, k: 'Writing' }));
  ideaBank.forEach(t => idx.push({ t: 'Idea bank: ' + t.topic, s: t.questions.join(' '), h: `/writing/ideas#${t.id}`, k: 'Writing' }));
  writingTasks.forEach(w => idx.push({ t: strip(w.prompt).slice(0, 130), s: `${w.task} prompt · ${w.type}`, h: `/practice/writing/${w.id}`, k: 'Writing prompt' }));
  grammar.forEach(g => idx.push({ t: g.name, s: g.short, h: `/grammar/${g.id}`, k: 'Grammar' }));
  speaking.part1Topics.forEach(t => idx.push({ t: 'Part 1: ' + t.topic, s: t.qs.join(' '), h: '/speaking/topics', k: 'Speaking' }));
  speaking.cueCards.forEach((c, i) => idx.push({ t: c.title, s: 'Cue card · ' + c.points.join(', '), h: `/practice/speaking/${i}`, k: 'Speaking' }));
  readingSets.forEach(p => idx.push({ t: p.title, s: 'Reading practice', h: `/practice/reading/${p.id}`, k: 'Practice' }));
  listeningSets.forEach(p => idx.push({ t: p.title, s: 'Listening practice', h: `/practice/listening/${p.id}`, k: 'Practice' }));
  mockTests.forEach(m => idx.push({ t: m.title, s: m.description, h: `/mock-tests/${m.id}`, k: 'Mock test' }));
  return idx;
}

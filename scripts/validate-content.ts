/* Content consistency checks. Run with: npm run validate */
import { allSets, grammar, listening, mockTests, pronunciation, reading, studyPlan, vocabBanks, writing } from '../src/content';
import { renderChart } from '../src/lib/charts';
import { answerList, totalMarks } from '../src/lib/scoring';
import { writingTasks } from '../src/lib/writing-tasks';
import type { Chapter, QuestionGroup } from '../src/lib/types';
import { writingTask2, speaking } from '../src/content';
import * as book from '../src/content/book';

let errors = 0;
const err = (m: string) => { errors++; console.log('ERROR:', m); };

function checkGroups(groups: QuestionGroup[], where: string) {
  const nums = new Set<number>();
  groups.forEach((g, gi) => {
    if (!g.questions.length) err(`${where} group ${gi} has no questions`);
    g.questions.forEach(q => {
      if (nums.has(q.n)) err(`${where} duplicate question number ${q.n}`);
      nums.add(q.n);
      if (!q.a || (Array.isArray(q.a) && !q.a.length)) err(`${where} q${q.n} has no answer`);
      if (g.kind === 'choice') {
        if (q.opts) { if (!/^[A-Z]$/.test(String(q.a)) || String(q.a).charCodeAt(0) - 65 >= q.opts.length) err(`${where} q${q.n} answer ${q.a} out of range`); }
        else if (!g.choices?.includes(String(q.a))) err(`${where} q${q.n} answer ${q.a} not in choices`);
      }
      if (g.kind === 'multi') answerList(q.a).forEach(x => { if (x.charCodeAt(0) - 65 >= (q.opts?.length || 0)) err(`${where} q${q.n} multi answer out of range`); });
      if ((g.kind === 'select' || (g.kind === 'gap' && g.options)) && !g.options?.some(o => o.v === q.a)) err(`${where} q${q.n} answer ${q.a} not among options`);
      if (g.kind === 'gap' && !g.text && !g.options && !q.q) err(`${where} q${q.n} gap missing question text`);
      if (g.kind === 'gap' && g.maxWords && !g.options) answerList(q.a).forEach(x => { if (x.trim().split(/\s+/).length > g.maxWords!) err(`${where} q${q.n} accepted answer "${x}" exceeds ${g.maxWords} words`); });
    });
    if (g.text) {
      const ph = [...g.text.matchAll(/\[\[(\d+)\]\]/g)].map(m => +m[1]).sort((a, b) => a - b).join();
      const qn = g.questions.map(q => q.n).sort((a, b) => a - b).join();
      if (ph !== qn) err(`${where} placeholders [${ph}] do not match questions [${qn}]`);
    }
    if (g.figure) renderChart(g.figure);
  });
}

// Practice sets
const ids = new Set<string>();
allSets.forEach(s => {
  if (ids.has(s.id)) err('duplicate set id ' + s.id);
  ids.add(s.id);
  if (s.id.startsWith('l-') && !s.script?.length) err(s.id + ' has no script');
  checkGroups(s.groups, s.id);
});
[...reading.types, ...listening.types].forEach(t => { if (t.practice && !ids.has(t.practice)) err(`guide ${t.id} links to missing practice ${t.practice}`); });
grammar.forEach(g => checkGroups(g.exercises, 'grammar ' + g.id));
checkGroups(pronunciation.exercises, 'pronunciation');

// Mock tests must have exactly 40 marks
mockTests.forEach(m => {
  const sets = m.sections.map(id => allSets.find(s => s.id === id));
  if (sets.some(s => !s)) err(`mock ${m.id} references a missing section`);
  const total = sets.reduce((a, s) => a + (s ? totalMarks(s.groups) : 0), 0);
  if (total !== 40) err(`mock ${m.id} has ${total} marks (expected 40)`);
});

// Charts render and pies sum to 100
writing.task1.forEach(t => [t.sample.chart, ...t.practice.map(p => p.chart)].forEach(ch => {
  renderChart(ch);
  const pies = ch.type === 'pie' ? ch.pies || [] : ch.type === 'multi' ? (ch.charts || []).filter(c => c.type === 'pie').flatMap(c => c.pies || []) : [];
  pies.forEach(p => { const sum = p.slices.reduce((a, x) => a + x[1], 0); if (sum !== 100) err(`pie in ${t.id} sums to ${sum}`); });
}));

// Writing prompts unique
const wids = new Set<string>();
writingTasks.forEach(w => { if (wids.has(w.id)) err('duplicate writing id ' + w.id); wids.add(w.id); });

// Vocabulary
const vids = new Set<string>();
let entries = 0;
vocabBanks.forEach(b => {
  if (vids.has(b.id)) err('duplicate vocab bank ' + b.id);
  vids.add(b.id);
  b.groups.forEach(g => { if (!g.items.length) err(`vocab ${b.id}/${g.h} is empty`); g.items.forEach(i => { entries++; if (i.length < 2) err(`malformed vocab item in ${b.id}: ${i}`); }); });
});

// Study plan links point to real routes
const staticRoutes = ['/book', '/book/how-to-study', '/reading/fundamentals', '/listening/fundamentals', '/writing/task-1', '/writing/task-2', '/writing/letters', '/speaking/topics', '/speaking/phrases', '/', '/exam', '/listening', '/reading', '/reading/answer-order', '/speaking', '/grammar', '/mock-tests', '/calculator', '/search', '/progress', '/resources', '/practice', '/practice/writing', '/practice/speaking', '/practice/drills', '/writing', '/writing/ideas', '/writing/band-descriptors', '/speaking/pronunciation', '/speaking/cue-cards', '/vocabulary'];
function routeOk(h: string) {
  let ok = staticRoutes.includes(h);
  let m: RegExpMatchArray | null;
  if ((m = h.match(/^\/(reading|listening)\/([\w-]+)$/))) ok = ok || (m[1] === 'reading' ? reading : listening).types.some(t => t.id === m![2]);
  if ((m = h.match(/^\/practice\/(reading|listening)\/([\w-]+)$/))) ok = ids.has(m[2]);
  if ((m = h.match(/^\/practice\/writing\/([\w-]+)$/))) ok = wids.has(m[1]);
  if ((m = h.match(/^\/grammar\/([\w-]+)$/))) ok = grammar.some(g => g.id === m![1]);
  if ((m = h.match(/^\/vocabulary\/([\w-]+)$/))) ok = vids.has(m[1]);
  if ((m = h.match(/^\/writing\/task-1\/([\w-]+)$/))) ok = writing.task1.some(t => t.id === m![1]);
  if ((m = h.match(/^\/writing\/task-2\/([\w-]+)$/))) ok = ['opinion', 'discussion', 'adv-disadv', 'problem-solution', 'two-part', 'positive-negative'].includes(m[1]);
  if ((m = h.match(/^\/speaking\/part-[123]$/))) ok = true;
  if ((m = h.match(/^\/mock-tests\/([\w-]+)$/))) ok = mockTests.some(x => x.id === m![1]);
  if ((m = h.match(/^\/writing\/letters\/([\w-]+)$/))) ok = writing.gt.types.some(t => t.id === m![1]);
  return ok;
}
studyPlan.forEach(w => w.tasks.forEach(([, h]) => { if (!routeOk(h)) err('study plan link broken: ' + h); }));

// The book: every TOC entry is a real, unique route; every type has a complete chapter
const seen = new Set<string>();
book.bookChapters.forEach(c => {
  if (seen.has(c.href)) err('book TOC duplicate ' + c.href);
  seen.add(c.href);
  if (!routeOk(c.href)) err('book TOC link broken: ' + c.href);
});
function checkChapter(ch: Chapter | undefined, where: string) {
  if (!ch) return err('missing chapter: ' + where);
  if (ch.intro.length < 200) err(where + ': intro too short');
  if (ch.method.length < 3) err(where + ': method needs at least 3 steps');
  (['dos', 'donts', 'careful', 'checklist', 'summary'] as const).forEach(k => { if (!ch[k].length) err(`${where}: empty ${k}`); });
  ch.worked?.forEach((w, i) => { if (!w.walk.length) err(`${where}: worked example ${i + 1} has no walkthrough`); if (w.figure) renderChart(w.figure); });
  // Unbalanced tags are a common authoring slip
  const html = JSON.stringify(ch);
  ['b', 'i', 'p', 'ul', 'ol', 'li', 'table', 'tr', 'td', 'th', 'div', 'h4'].forEach(t => {
    const open = (html.match(new RegExp(`<${t}[ >]`, 'g')) || []).length, close = (html.match(new RegExp(`</${t}>`, 'g')) || []).length;
    if (open !== close) err(`${where}: <${t}> opened ${open} times, closed ${close}`);
  });
}
reading.types.forEach(t => checkChapter(book.readingChapters[t.id], 'reading/' + t.id));
listening.types.forEach(t => checkChapter(book.listeningChapters[t.id], 'listening/' + t.id));
writing.task1.forEach(t => checkChapter(book.task1Chapters[t.id], 'task-1/' + t.id));
writing.gt.types.forEach(t => checkChapter(book.letterChapters[t.id], 'letters/' + t.id));
writingTask2.types.forEach(t => checkChapter(book.task2Chapters[t.id], 'task-2/' + t.id));
speaking.parts.forEach(p => checkChapter(book.speakingChapters[p.id], 'speaking/' + p.id));
grammar.forEach(g => checkChapter(book.grammarChapters[g.id], 'grammar/' + g.id));
Object.entries(book.vocabChapters).forEach(([id, ch]) => { if (!vids.has(id)) err('vocab chapter for unknown bank ' + id); checkChapter(ch, 'vocabulary/' + id); });
([['study method', book.studyMethod], ['reading fundamentals', book.readingFundamentals], ['listening fundamentals', book.listeningFundamentals], ['task 1 method', book.task1Method], ['letters method', book.lettersMethod], ['task 2 method', book.task2Method], ['speaking fundamentals', book.speakingFundamentals]] as [string, Chapter][]).forEach(([n, ch]) => checkChapter(ch, n));

const questions = allSets.reduce((a, s) => a + totalMarks(s.groups), 0) + grammar.reduce((a, g) => a + totalMarks(g.exercises), 0) + totalMarks(pronunciation.exercises);
console.log(`Sets: ${allSets.length} (${allSets.filter(s => s.id.startsWith('r-')).length} reading, ${allSets.filter(s => s.id.startsWith('l-')).length} listening) · mock tests: ${mockTests.length} · writing prompts: ${writingTasks.length}`);
console.log(`Auto-marked questions: ${questions} · vocabulary entries: ${entries} in ${vocabBanks.length} banks · grammar topics: ${grammar.length}`);
console.log(`Book: ${book.bookChapters.length} chapters in ${book.bookParts.length} parts`);
console.log(errors ? `${errors} error(s)` : 'All content checks passed');
process.exit(errors ? 1 : 0);

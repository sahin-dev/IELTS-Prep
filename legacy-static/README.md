# IELTS Prep Studio

A complete, offline IELTS preparation website: exam format, every question type with strategies, original practice tests, vocabulary banks, grammar and sentence building, writing practice with analysis, and a speaking simulator.

## How to open it

Double-click **`index.html`** (or drag it into Chrome / Edge / Safari). No installation, server or internet connection is needed.

- Listening audio and the speaking examiner use your browser's built-in text-to-speech. Chrome and Edge have the best English voices; you can pick the voices in the Listening player.
- Speaking recording needs microphone permission. Some browsers block the microphone on `file://` pages. If that happens, run a local server (`python -m http.server` in this folder, then open http://localhost:8000).
- Progress, drafts, flashcard status and essays are saved in your browser's local storage.

## What's inside

| Section | Content |
|---|---|
| Exam Format & Scoring | Format of all four papers, Academic vs GT, band conversion tables, criteria, exam-day tips |
| Reading | 11 question types: what each tests, the instructions, a step-by-step approach, traps, a worked example |
| Listening | 6 question types plus Part 1–4 overview, number/spelling traps |
| Writing | Task 1 (line, bar, pie, table, mixed, process, map), GT letters (formal, semi-formal, informal), Task 2 (6 essay types) with structures, templates and Band 8–9 model answers |
| Speaking | Parts 1–3 techniques (A-R-E, cue-card method, O-R-E-C), sample answers, 22 Part 1 topics, 28 cue cards with Part 3 questions, phrases and idioms |
| Grammar & Sentences | 12 topics: sentence types, clauses, conditionals, passive, tenses, comparatives, articles, agreement, advanced structures, punctuation, paraphrasing, common errors, all with auto-marked exercises |
| Vocabulary Bank | 17 banks / 600+ entries: Task 1 trends, degree, comparison, process & maps; Task 2 topic collocations and essay phrases; linking words; Listening directions, time/numbers, topics, spelling; synonyms; academic words; phrasal verbs; collocations; speaking vocabulary. Each bank has a list, flashcards and a quiz (dictation for spelling) |
| Practice | 13 Reading sets, 7 Listening sets (audio), 72 writing prompts with timer and analyser, full speaking simulator, vocabulary quizzes |
| Study Plan & Progress | 8-week plan with checkboxes, results table, weakest areas, error log |
| Band Calculator | Raw score to band, and the overall band |
| Official Materials | Links to official IELTS, British Council, IDP and Cambridge resources |

## Project structure

```
index.html            page shell
css/style.css         styles (light/dark themes)
js/engine.js          storage, progress, test renderer & marking, text-to-speech player, timers
js/charts.js          SVG charts for Writing Task 1 (line, bar, pie, table, process)
js/app.js             router and all pages
data/*.js             all content (edit these to add material)
```

## Adding your own content

All content is plain JavaScript data in `data/`. Examples:

**A new reading practice set** (`data/reading-practice.js`, add to the `IELTS.readingPractice` array):

```js
{
  id: 'r-my-set', type: 'tfng', title: 'My Passage', level: 'Band 6–7', time: 10,
  passageTitle: 'Title', passage: '<p>Paragraph one...</p><p>Paragraph two...</p>',
  groups: [{
    kind: 'choice', choices: ['TRUE', 'FALSE', 'NOT GIVEN'], instructions: '...',
    questions: [{ n: 1, q: 'Statement...', a: 'TRUE', x: 'Explanation shown after checking' }]
  }]
}
```

Question group kinds:
- `choice`: radio buttons. Use `choices` shared by all questions, or `opts` per question with a letter answer.
- `multi`: choose several letters (`a: ['B','D']`).
- `select`: dropdown from shared `options: [{v:'i', t:'Heading text'}]`.
- `gap`: text input. Put `{}` in `q` for the gap position, or use `text` with `[[n]]` placeholders for summaries, forms and tables. Accept alternative answers with `|`, e.g. `'colour|color'`, and set `maxWords` to enforce the word limit.
- `open`: free writing with a model answer, not scored.

Listening sets use the same format plus a `script` array: `{ s: 'Speaker', g: 'f' | 'm', t: 'text' }`, narrator lines `{ t: '...' }` and pauses `{ pause: 20, t: 'Reading time' }`.

Vocabulary items are `['word', 'meaning', 'example']` inside a group in `data/vocabulary*.js`.

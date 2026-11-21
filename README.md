# IELTS Prep Studio (Next.js)

A complete IELTS preparation platform organised as a book: **The IELTS Book** has 139 chapters in 10 parts (Getting started, Listening, Reading, Writing, Speaking, Band score development, Grammar masterclass, Vocabulary, Advanced English, Test yourself).

Every question-type chapter contains:
- what the task is and how to read its instructions;
- what it really tests;
- the method step by step, in order;
- worked examples with a full think-aloud solution;
- do's and don'ts, traps explained with examples;
- timing, FAQs, a final checklist and key takeaways.

Around the book are original practice sets, full mock tests, spaced-repetition flashcards, writing practice with automatic analysis, a speaking simulator and a pronunciation guide.

Built with **Next.js 16 (App Router) + React 19 + TypeScript**. All 355 pages are statically generated.

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000 (development)
npm run build        # production build (type-checks and pre-renders all pages)
npm start            # serve the production build
npm run validate     # check all content (answers, word limits, mock tests = 40 marks, links)
```

Requires Node.js 20.9 or newer.

To host it as a plain static site (GitHub Pages, Netlify, any web host), uncomment `output: 'export'` in `next.config.ts` and run `npm run build`. The site is written to `out/`.

- **Audio:** Listening recordings and the speaking examiner use the browser's text-to-speech. Chrome, Edge and Safari have the best English voices.
- **Recording:** speaking recording needs microphone permission (works on `localhost` and HTTPS).
- **Progress:** stored in the browser's localStorage. Use *Study plan & progress → Export* to back it up or move it to another device.

## Site map

| Section | Routes |
|---|---|
| Book | `/book` contents & reading progress · `/book/how-to-study` · every chapter page shows its chapter number, a *Mark as completed* button and previous/next links |
| Start | `/` dashboard (streak, exam countdown, next tasks, recommendations) · `/diagnostic` one-week assessment · `/exam` the test explained · `/exam/scoring` how IELTS is scored · `/exam/test-day` booking, test day & results · `/progress` 8-week plan, results, writing history, error log, backup |
| Listening | `/listening` overview · `/listening/fundamentals` · `/listening/[type]` (6 chapters) |
| Reading | `/reading` overview · `/reading/fundamentals` · `/reading/answer-order` · `/reading/[type]` (11 chapters) |
| Writing | `/writing` · `/writing/task-1/[type]` (7 visual types) · `/writing/letters/[type]` (10: 3 registers + 7 purposes) · `/writing/task-2/[type]` (8) · `/writing/ideas` · `/writing/band-descriptors` |
| Speaking | `/speaking` · `/speaking/part-1…3` · `/speaking/topics` · `/speaking/cue-cards` · `/speaking/phrases` · `/speaking/pronunciation` + `/speaking/pronunciation/[topic]` (5-chapter masterclass) |
| Language | `/vocabulary` + `/vocabulary/[bank]` (45 banks: list, flashcards, quiz) · `/vocabulary/topics` (26 topic banks) · `/grammar` + `/grammar/[topic]` (44 topics in 5 groups) |
| Bands & advanced | `/bands` + `/bands/writing` · `/bands/speaking` · `/bands/listening-reading` · `/advanced` + `/advanced/[topic]` (6 chapters) |
| Practice | `/practice` · `/practice/reading/[id]` (17) · `/practice/listening/[id]` (9) · `/practice/writing/[id]` (108) · `/practice/library` (search and filter everything) · `/practice/speaking` (+ `/[card]`) · `/practice/drills` · `/practice/vocabulary` |
| Tests | `/mock-tests` · `/mock-tests/listening-1` · `/mock-tests/reading-1` (40 questions each, band score) |
| Tools | `/calculator` · `/resources` · `/search?q=` |

## Project structure

```
src/
  app/                 routes (one folder per URL; dynamic routes use generateStaticParams)
  components/          React components
    ChapterView.tsx      renders a book chapter (contents, method, worked examples, do/don't, traps...)
    BookNav.tsx          chapter label, mark-as-completed, previous/next, contents progress
    TestRunner.tsx       renders & marks every question type (choice, multi, select, gap, templates)
    MockTestRunner.tsx   multi-section timed tests numbered 1–40
    ListeningPlayer.tsx  text-to-speech audio with two voices and exam mode
    WritingEditor.tsx    timer, autosave, analyser, self-assessment
    SpeakingSimulator.tsx, VocabBankView.tsx, DictationDrills.tsx, Dashboard.tsx, ProgressView.tsx ...
  content/             ALL learning content as typed data (edit these to add material)
    index.ts             single entry point (aggregates and orders sets and banks)
    book/                the in-depth chapters (toc.ts = table of contents; one file per skill)
  lib/                 types, scoring & bands, storage, spaced repetition, TTS, charts, analyser, search
scripts/validate-content.ts   content checks (npm run validate)
legacy-static/        the original no-build HTML version (kept for reference; safe to delete)
```

## Adding content

Everything lives in `src/content/*.ts` and is type-checked against `src/lib/types.ts`.

**A reading or listening practice set** (`reading-extra.ts` / `listening-extra.ts`):

```ts
{
  id: 'r-my-set', type: 'tfng', title: 'My Passage', level: 'Band 6–7', time: 10,
  passageTitle: 'Title', passage: '<p>Paragraph one…</p>',
  groups: [{
    kind: 'choice', choices: ['TRUE', 'FALSE', 'NOT GIVEN'], instructions: '…',
    questions: [{ n: 1, q: 'Statement…', a: 'TRUE', x: 'Explanation shown after checking' }]
  }]
}
```

Question group kinds:

- **`choice`** – shared `choices`, or `opts` for each question with a letter answer.
- **`multi`** – choose several letters (`a: ['B', 'D']`).
- **`select`** – dropdown from shared `options: [{ v: 'i', t: 'Heading' }]`.
- **`gap`** – free text. Mark the gap position with `{}` in `q`, or use `text` with `[[n]]` placeholders for forms, tables and summaries.
  - Separate alternative answers with `|`.
  - `maxWords` enforces the word limit.
- **`open`** – free response with a model answer, not scored.

Listening sets add a `script`:

- speaker lines: `{ s: 'Name', g: 'f' | 'm', t: '…' }`
- narrator lines: `{ t: '…' }`
- pauses: `{ pause: 20, t: 'Reading time' }`

To build a mock test, list section ids in `mock-tests.ts`. `npm run validate` checks that the sections add up to exactly 40 marks.

**A book chapter** (`src/content/book/*.ts`, type `Chapter` in `src/lib/types.ts`) is keyed by the id of the page it belongs to (e.g. `readingChapters.tfng` → `/reading/tfng`):

```ts
{
  intro: '<p>What the task is...</p>',
  facts: [['Appears in', '...'], ['Order', '...']],
  anatomy: '<p>The instructions dissected...</p>',
  method: [{ title: 'Step title', body: '<p>...</p>', example: 'optional' }],
  worked: [{ title: '...', source: '<p>passage</p>', questions: '<ol>...</ol>',
             walk: [{ q: '1. ...', a: 'TRUE', steps: ['Locate...', 'Compare...', 'Decide...'] }] }],
  dos: ['...'], donts: ['...'], careful: [{ title: '...', body: '...', example: '...' }],
  checklist: ['...'], summary: ['...']
}
```

Optional fields:

- `exercises: { id: 'ch-…', title, intro?, groups }` – auto-marked practice using the same question groups as practice sets; every question needs an explanation `x`.
- `references: [{ title, url?, note? }]` – sources for factual claims and further reading.
- `verified: 'YYYY-MM-DD'` – the date the exam facts were checked against official sources.

In chapter HTML, use `<div class="callout official">` for official IELTS rules and `<div class="callout advice">` for preparation advice, so that learners can always tell them apart.

Listening worked examples use `script` (the same format as practice sets) and get an audio player automatically. To add a page to the book, add it to `src/content/book/toc.ts`. `npm run validate` checks that every question type has a complete chapter, that the HTML tags balance, that every table-of-contents and in-chapter link is a real page, and that chapter exercises are marked and explained. The full curriculum, its status and the build order are in [`docs/CURRICULUM.md`](docs/CURRICULUM.md).

Run `npm run validate` and `npm run build` after editing content.

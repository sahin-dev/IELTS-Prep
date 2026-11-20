# IELTS Prep Studio (Next.js)

A complete IELTS preparation platform. It covers every question type with strategies, original practice sets and full mock tests, vocabulary with spaced-repetition flashcards, grammar and sentence building, writing practice with automatic analysis, a speaking simulator and a pronunciation guide.

Built with **Next.js 16 (App Router) + React 19 + TypeScript**. All 227 pages are statically generated.

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
| Start | `/` dashboard (streak, exam countdown, next tasks) · `/exam` format & scoring · `/progress` 8-week plan, results, writing history, error log, backup |
| Listening | `/listening` overview + 6 question types · `/listening/[type]` |
| Reading | `/reading` overview + 11 question types · `/reading/answer-order` strategy map · `/reading/[type]` |
| Writing | `/writing` · `/writing/task-1/[type]` (7 visual types) · `/writing/letters/[type]` (3) · `/writing/task-2/[type]` (6) · `/writing/ideas` · `/writing/band-descriptors` |
| Speaking | `/speaking` · `/speaking/part-1…3` · `/speaking/topics` · `/speaking/cue-cards` · `/speaking/phrases` · `/speaking/pronunciation` |
| Language | `/vocabulary` + `/vocabulary/[bank]` (19 banks: list, flashcards, quiz) · `/grammar` + `/grammar/[topic]` (12 topics) |
| Practice | `/practice` · `/practice/reading/[id]` (17) · `/practice/listening/[id]` (9) · `/practice/writing/[id]` (72) · `/practice/speaking` (+ `/[card]`) · `/practice/drills` · `/practice/vocabulary` |
| Tests | `/mock-tests` · `/mock-tests/listening-1` · `/mock-tests/reading-1` (40 questions each, band score) |
| Tools | `/calculator` · `/resources` · `/search?q=` |

## Project structure

```
src/
  app/                 routes (one folder per URL; dynamic routes use generateStaticParams)
  components/          React components
    TestRunner.tsx       renders & marks every question type (choice, multi, select, gap, templates)
    MockTestRunner.tsx   multi-section timed tests numbered 1–40
    ListeningPlayer.tsx  text-to-speech audio with two voices and exam mode
    WritingEditor.tsx    timer, autosave, analyser, self-assessment
    SpeakingSimulator.tsx, VocabBankView.tsx, DictationDrills.tsx, Dashboard.tsx, ProgressView.tsx ...
  content/             ALL learning content as typed data (edit these to add material)
    index.ts             single entry point (aggregates and orders sets and banks)
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

Run `npm run validate` and `npm run build` after editing content.

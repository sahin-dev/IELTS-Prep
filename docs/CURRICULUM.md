# Curriculum map and build plan

This file tracks the full platform specification (16 parts) against what the site contains, and sets the order in which the rest will be built. Update the status columns whenever a part is finished.

Last updated: 2026-11-21.

## The chapter standard ("definition of done")

A chapter counts as **complete** only when it has everything the specification's 12-point methodology asks for. These map to fields of the `Chapter` type in `src/lib/types.ts`:

| Spec requirement | Where it goes |
|---|---|
| 1–3. Introduce the topic, the underlying concepts, why it matters in IELTS | `intro`, `tests` |
| 4. Rules and principles in detail | `method` (ordered steps) and `sections` |
| 5–6. Many examples; correct vs incorrect usage | `method[].example`, `sections`, `careful[].example` |
| 7. Common mistakes | `careful`, `donts` |
| 8. Application to real IELTS questions | `worked` (think-aloud walkthroughs) |
| 9. Advanced techniques | `sections` |
| 10. Exercises with detailed solutions | `exercises` (auto-marked; every question needs an explanation `x`) |
| 11. Effect on band performance | a `sections` entry, e.g. "How … affects your band" |
| 12. Further resources | `references` |
| Official rules kept apart from advice | `<div class="callout official">` and `<div class="callout advice">` |
| Exam facts verified, with a date | `verified: 'YYYY-MM-DD'` and official sources in `references` |

`npm run validate` enforces the parts that can be checked automatically: exercises are marked and explained, exercise ids are unique, reference URLs are https or real internal routes, every internal link resolves, and HTML tags balance.

## Status by part

Legend: ✅ complete to the standard above · 🟡 exists but below the standard (usually missing `exercises`, `references` or depth) · 🔴 not started · ⚙️ needs a server, an AI model or audio production (see "Decisions needed").

| Spec part | Status | What exists (as of 2026-11-21) | Still to do |
|---|---|---|---|
| 1. Examination fundamentals | ✅ | `/exam`, `/exam/scoring`, `/exam/test-day` (verified against ielts.org 2026-11-20); target setting in `/book/how-to-study` | Re-verify facts every 6 months |
| 2. Grammar masterclass | ✅ | 44 topics in groups A–E on `/grammar` (`content/grammar-masterclass.ts`): parts of speech, all 12 tenses, sentence structure, advanced grammar, grammar for Writing | Optional: deepen the 12 older topic chapters (articles, clauses, conditionals…) to the length of the new ones |
| 3. Vocabulary masterclass | 🟡 | 45 banks (1,123 entries) with spaced-repetition flashcards and quizzes, incl. 26 topic banks + method chapter `/vocabulary/topics`; AWL essentials; linking, phrasal verbs, collocations, word formation, register | Full AWL (570 families) with pronunciation; synonyms/antonyms, connotation and commonly confused words chapters; daily targets and personal word collections |
| 4. Listening masterclass | 🟡 | Fundamentals + 6 question-type chapters (worked examples, sources, linked practice), 9 practice sets, dictation drills; connected speech and weak forms taught in the pronunciation masterclass | Chapters on accents and on the problem-solving strategies (corrections, numbers/names, long talks); multiple-answer MCQ as its own chapter; more practice sets; real recordings ⚙️ |
| 5. Reading masterclass | 🟡 | Fundamentals, answer order, 11 question-type chapters (worked examples, sources, linked practice), 17 practice sets; academic reading and research skills in Part 8 | Separate skills lessons (skimming, scanning, reference words, argument development); a full time-management chapter; more full-length passages, esp. General Training |
| 6. Writing masterclass | 🟡 | Task 1 method + 7 visual types; 10 letter chapters (3 registers + 7 purposes); Task 2 method + 8 essay types; idea bank; band descriptors; 108 timed prompts; rule-based analyser; annotated essays at four bands (`/bands/writing`) | Annotated Task 1 and letter samples at several bands; AI feedback lab ⚙️ |
| 7. Speaking masterclass | 🟡 | Overview, Parts 1–3 chapters, topic bank, 28 cue cards, phrases, simulator; pronunciation masterclass (5 chapters, `/speaking/pronunciation/[topic]`); annotated answers at four bands (`/bands/speaking`); discourse markers chapter | Part 1 topic chapters (16 topics); Part 2 skills (storytelling, unfamiliar topics); Part 3 question types; AI speaking partner ⚙️ |
| 8. Advanced English development | ✅ | `/advanced`: critical thinking, argument, summarising, note-taking, research, presentations (other Part 8 skills mapped to existing chapters) | More progressive exercises |
| 9. Practice question library | 🟡 | `/practice/library`: 234 items (sets, prompts, cue cards, chapter exercises) filterable by skill, type, kind, level, time and search | Topic and target-band tags; learning objectives on every item; more General Training reading sets |
| 10. Full mock examinations | 🟡 | 2 mock tests (Listening 1, Academic Reading 1) with timers and band scores; speaking simulator runs a full interview | General Training Reading mock; a 60-minute two-task Writing mock component; more Listening/Reading mocks; four-skill simulation; AI evaluation ⚙️ |
| 11. Band score development | ✅ | `/bands`: band levels 4–9, Writing and Speaking at every band (annotated), Listening & Reading error profiles | More sample sets; an interactive gap-to-target tool |
| 12. Personalised learning system | 🟡 | Dashboard, streak, countdown, 8-week plan, results, error log, chapter completion, backup; `/diagnostic` (one-week assessment); recommendations from saved results on the dashboard, `/progress` and the library (weakest areas → chapter + practice) | Bookmarks and notes; target-band setting stored and used by the plan; cross-device sync ⚙️ |
| 13. AI tutor | 🔴 ⚙️ | – | Whole part (needs the decision below) |
| 14. Content quality standards | ✅ | Validator checks answers, word limits (incl. limits stated only in instructions), explanations, internal links, sources, tag balance; every chapter has sources | – |
| 15. Content pipeline | ✅ | Outline → research → write → validate → build, one part at a time | – |
| 16. Final quality standard | – | Applies to everything above | – |

The book now has 139 chapters in 10 parts, 735 auto-marked questions and 355 pre-rendered pages.

## Build order

Done (2026-11-20/21): Part 1 · Part 2 (all of A–E) · sources retrofit · letters by purpose, cause–effect and mixed essays · Part 11 · topic vocabulary · pronunciation masterclass · Part 8 · practice library, diagnostic and recommendations.

Next, in this order:

1. Speaking: Part 1 topic chapters, Part 2 skills, Part 3 question types.
2. Reading: skills lessons and the time-management chapter; Listening: accents and problem-solving strategies chapter.
3. Mock tests: General Training Reading mock (new original passages); a two-task Writing mock component; Listening/Reading mock 2.
4. Vocabulary: full AWL, synonyms/antonyms, confused words, connotation; personal word collections.
5. Annotated Task 1 and letter samples at several bands.
6. The ⚙️ features, once the decisions below are made.

## Decisions needed (owner: you)

These change the architecture, so they need your choice before the work starts:

1. **AI features** (Writing lab feedback, speaking partner, AI tutor, mock Writing/Speaking evaluation). The site is a static Next.js build with browser storage and no server, and all current feedback is rule-based. An AI model needs one of:
   - a server (Next.js API routes on a host such as Vercel) holding an API key, with a per-use cost;
   - "bring your own key" in the browser;
   - keeping the current rule-based analyser.

   Whichever is chosen, AI band estimates must always be labelled as unofficial estimates.
2. **Listening audio.** The site uses the browser's text-to-speech. The spec asks for realistic recordings, which means recorded voice actors or a high-quality speech-synthesis service, with several accents.
3. **Accounts and sync.** Progress currently lives in one browser (with export/import). Cross-device progress, bookmarks and notes would need a backend.
4. **Copyright.** All practice material must stay original. Official IELTS materials are linked to, never reproduced.

## Facts to re-verify

These change often. Check them against ielts.org and update `verified` in the affected chapters every six months:

- delivery modes (paper withdrawal by country, Writing on Paper availability, IELTS Online);
- results times;
- One Skill Retake rules and acceptance (e.g. IRCC);
- remark deadline and refund policy;
- test-day rules.

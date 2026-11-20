# Curriculum map and build plan

This file tracks the full platform specification (16 parts) against what the site contains, and sets the order in which the rest will be built. Update the status columns whenever a part is finished.

Last updated: 2026-11-20.

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

| Spec part | Status | What exists | Main gaps |
|---|---|---|---|
| 1. Examination fundamentals | ✅ | `/exam`, `/exam/scoring`, `/exam/test-day` (3 chapters with exercises and sources, verified 2026-11-20); target-setting section in `/book/how-to-study` | Re-verify facts every 6 months (delivery modes, results times, One Skill Retake acceptance) |
| 2. Grammar masterclass | 🟡 | 12 topics (`/grammar/[topic]`): sentence types, clauses, conditionals, passive, tenses (combined), comparatives, articles, agreement, advanced, punctuation, paraphrasing, common errors | A: parts of speech (10 chapters). B: one chapter per tense (12). C: direct/indirect speech, sentence transformation. D: modals, gerunds/infinitives, participles, quantifiers, parallelism, inversion, emphasis, cleft sentences. E: grammar for Writing with sentence-improvement exercises |
| 3. Vocabulary masterclass | 🟡 | 19 banks with flashcards (spaced repetition) and quizzes; chapters for linking, phrasal verbs, collocations; AWL essentials | Topic chapters for the 26 listed topics (only general Task 2 topic vocabulary exists); full AWL with pronunciation and word families; synonyms/antonyms, connotation, confused words; daily targets and personal collections |
| 4. Listening masterclass | 🟡 | Fundamentals + 6 question-type chapters; 9 practice sets; dictation drills | Exercises and sources in each chapter; separate chapters for accents, connected speech and weak forms, and the problem-solving strategies list (corrections, numbers and names, long academic talks); multiple-answer MCQ as its own chapter; realistic recordings ⚙️ |
| 5. Reading masterclass | 🟡 | Fundamentals, answer order, 11 question-type chapters; 17 practice sets | Exercises and sources in each chapter; skills lessons (skimming, scanning, intensive/extensive reading, reference words, argument development); a full time-management chapter; more full-length passages |
| 6. Writing masterclass | 🟡 | Task 1 method + 7 visual types; letter method + 3 registers; Task 2 method + 6 essay types; idea bank; band descriptors; 72 prompts; rule-based analyser | Before-and-after maps and multiple visuals as their own chapters; letters by purpose (complaint, request, apology, invitation, application, explanation, recommendation); cause-and-effect, direct-question and mixed essays; weak/average/strong annotated essays at several bands; AI feedback lab ⚙️ |
| 7. Speaking masterclass | 🟡 | Overview, Parts 1–3 chapters, topic bank, cue cards, phrases, pronunciation page, simulator (recording + text-to-speech examiner) | Part 1 topic chapters (16 topics); Part 2 skills (note-taking, storytelling, unfamiliar topics); Part 3 question types; pronunciation masterclass (IPA, vowels, consonants, stress, intonation, rhythm); AI speaking partner ⚙️ |
| 8. Advanced English development | 🔴 | – | Whole part: critical thinking, argument, paraphrasing and summarising, research skills, note-taking, presentations, with progressive exercises |
| 9. Practice question library | 🟡 | 26 reading/listening sets, 72 writing prompts, cue cards, grammar and vocabulary exercises | Filtering by module, type, difficulty, topic, target band, time and skill; learning objectives on every item; General Training reading sets |
| 10. Full mock examinations | 🟡 | 2 mock tests (Listening 1, Academic Reading 1) with timers and band scores | General Training Reading mocks; Writing and Speaking mocks; complete four-skill simulation; performance reports; AI evaluation for Writing/Speaking ⚙️ |
| 11. Band score development | 🟡 | Writing band descriptors page; band comparisons inside some chapters | One chapter per band level (4–9) per skill, with annotated Writing and Speaking samples at each band and a "gap to target" tool |
| 12. Personalised learning system | 🟡 | Dashboard, streak, exam countdown, 8-week plan, results history, error log, chapter completion, export/backup (all in browser storage) | Diagnostic test that sets a roadmap; adaptive recommendations (e.g. weak TFNG → TFNG lessons); bookmarks and notes; cross-device sync ⚙️ |
| 13. AI tutor | 🔴 ⚙️ | – | Whole part |
| 14. Content quality standards | 🟡 | Standard defined above; validator checks; Part 1 fully sourced | Retrofit `references` and `verified` to the older chapters |
| 15. Content pipeline | ✅ | One part or chapter per session, outline → research → write → validate → build | – |
| 16. Final quality standard | – | Applies to everything above | – |

## Build order

One part (or one coherent group of chapters) per session, each finished to the standard before moving on:

1. ~~Part 1: Examination fundamentals~~ – done 2026-11-20.
2. **Part 2A: Parts of speech** (nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions, interjections, articles, determiners). This is the foundation the rest of the grammar section builds on.
3. Part 2B: Tenses, one chapter each (12).
4. Part 2C–E: Sentence structure, advanced grammar, grammar for Writing.
5. Retrofit exercises and sources to the existing Reading chapters, then the Listening chapters (high value for the exam, quick to bring up to standard).
6. Part 6 gaps (letter purposes, essay types, annotated band samples) together with Part 11 (band development).
7. Part 3 topic vocabulary chapters.
8. Part 7 gaps and the pronunciation masterclass.
9. Parts 9, 10 and 12 (library filters, more mocks, diagnostic and adaptive plan).
10. Part 8 (advanced English).
11. The ⚙️ features, once the decisions below are made.

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

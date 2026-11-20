import type { Chapter } from '@/lib/types';

/* Part 1 of the curriculum, chapter B: the band scale, how each skill is marked, the overall band and half bands.
   Exam facts checked against ielts.org on 2026-11-20 (see `references`). */

export const examScoring: Chapter = {
  verified: '2026-11-20',
  intro: `
<p>An IELTS result is five numbers: a band for Listening, Reading, Writing and Speaking, and an overall band. Each is reported on the same <b>nine-band scale</b>, in whole bands (6.0, 7.0) or half bands (6.5, 7.5). The numbers look simple, but the way they are produced is not, and candidates who understand it prepare far more efficiently than those who do not.</p>
<p>Consider two candidates who both scored 6.0 overall and both need 6.5. The first has Listening 7.0, Reading 6.5, Writing 5.0 and Speaking 6.0. The second has 6.0 in every skill. They need completely different plans. The first must lift Writing by a full band if the requirement includes a per-skill minimum – but if only the overall band matters, a half band in <i>any</i> skill may be enough. The second can reach 6.5 overall by improving any two skills by half a band each. You can only see this if you know how the overall band is calculated and rounded.</p>
<p>This chapter explains the scale itself; how Listening and Reading are marked (correct answers converted to a band); how Writing and Speaking are marked (examiners applying four criteria); how the overall band is calculated; and what half bands really mean. It ends with what all of this means for the way you prepare – the "cheapest route" to your target.</p>`,
  facts: [
    ['Scale', '0 to 9, in whole and half bands'],
    ['Listening and Reading', '40 questions each; one mark per correct answer, converted to a band'],
    ['Writing and Speaking', 'Four equally weighted criteria, applied by certificated examiners'],
    ['Writing weighting', 'Task 2 counts twice as much as Task 1'],
    ['Overall band', 'The average of the four skills, rounded to the nearest half band'],
    ['Validity', 'IELTS recommends treating results as valid for two years']
  ],
  method: [
    {
      title: 'Convert each Listening and Reading score to a band',
      body: '<p>After a timed practice test, count your correct answers out of 40 and convert the total with the table in section 3 (or the <a href="/calculator">band calculator</a>). Remember that conversion tables for practice tests are approximate: the exact number of marks needed for a band varies slightly between test versions.</p>',
      example: '28 correct in Academic Reading ≈ Band 6.5. 28 correct in General Training Reading ≈ Band 5.5.'
    },
    {
      title: 'Estimate Writing and Speaking criterion by criterion',
      body: '<p>Do not give your essay a single impression mark. Judge it against each of the four criteria separately, using the <a href="/writing/band-descriptors">band descriptors</a>, and write down four numbers. Do the same for a recording of your Speaking. Be strict: most self-assessments are half a band to a band too generous, so ask a teacher or an honest study partner whenever you can.</p>',
      example: 'Task 2 practice essay – Task Response 6, Coherence and Cohesion 6, Lexical Resource 6, Grammatical Range and Accuracy 5 → this essay is held back by grammar.'
    },
    {
      title: 'Calculate the overall band with the official rounding rule',
      body: '<p>Add the four skill bands, divide by four and round to the nearest half band, with averages ending in .25 rounded up to the next half band and averages ending in .75 rounded up to the next whole band. Section 6 shows every possible case.</p>'
    },
    {
      title: 'Check every condition in your requirement',
      body: '<p>Compare the result with your one-line requirement from the previous chapter: the overall band, each per-skill minimum, and any "one sitting" condition. A result can meet the overall band and still fail.</p>'
    },
    {
      title: 'Find the cheapest route to the target',
      body: '<p>Work out how many half bands you still need and where they can most realistically come from. A per-skill minimum is not negotiable, so fix that first; after that, look for the skill where a half band costs the fewest correct answers or the smallest change in one criterion. Section 8 explains how.</p>'
    },
    {
      title: 'Re-measure every two to three weeks',
      body: '<p>Take a fresh timed test in each skill at regular intervals, recalculate, and adjust your plan. Your weakest skill can change as you improve.</p>'
    }
  ],
  sections: [
    {
      id: 'nine-bands', title: 'The nine-band scale',
      html: `
<p>Every band has an official name describing the level of English it represents. The descriptions below are summaries in plain English; the official wording is on the IELTS scoring page listed in the sources.</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Band</th><th>Skill level</th><th>What it means in practice</th></tr>
<tr><td>9</td><td>Expert</td><td>Full command of the language: appropriate, accurate and fluent, with complete understanding.</td></tr>
<tr><td>8</td><td>Very good</td><td>Full command with only occasional, unsystematic errors or inappropriate usage; may misunderstand some things in unfamiliar situations; handles complex, detailed argument well.</td></tr>
<tr><td>7</td><td>Good</td><td>Operational command, with occasional inaccuracies, inappropriate usage and misunderstandings in some situations; generally handles complex language well and understands detailed reasoning.</td></tr>
<tr><td>6</td><td>Competent</td><td>Effective command despite some inaccuracies, inappropriate usage and misunderstandings; can use and understand fairly complex language, especially in familiar situations.</td></tr>
<tr><td>5</td><td>Modest</td><td>Partial command; copes with the overall meaning in most situations but makes many mistakes; can handle basic communication in their own field.</td></tr>
<tr><td>4</td><td>Limited</td><td>Basic competence limited to familiar situations; frequent problems in understanding and expression; cannot use complex language.</td></tr>
<tr><td>3</td><td>Extremely limited</td><td>Conveys and understands only general meaning in very familiar situations; communication frequently breaks down.</td></tr>
<tr><td>2</td><td>Intermittent</td><td>Great difficulty understanding spoken and written English.</td></tr>
<tr><td>1</td><td>Non-user</td><td>No ability to use the language beyond a few isolated words.</td></tr>
<tr><td>0</td><td>Did not attempt the test</td><td>No assessable answers.</td></tr>
</table></div>
<h4>IELTS and the Common European Framework (CEFR)</h4>
<p>You may see IELTS bands compared with CEFR levels (A1 to C2). IELTS stresses that there is no one-to-one correspondence between the two scales, but states that the C1 threshold falls between Bands 6.5 and 7, that bands of 8.5 and above are recognised as C2, and that Band 8 is borderline between C1 and C2. In everyday terms: if a university asks for "C1", it is asking for roughly Band 7.</p>`
    },
    {
      id: 'objective', title: 'How Listening and Reading are marked',
      html: `
<p>Listening and Reading each have 40 questions, and each correct answer earns <b>one mark</b>. There is no negative marking: a wrong answer simply scores zero, exactly like a blank. Your total out of 40 – the <b>raw score</b> – is converted to a band.</p>
<div class="callout official"><strong>What makes an answer correct</strong>The answer must match the meaning required, respect the word limit in the instructions, be spelled correctly, and fit the question grammatically (for example, singular or plural). An answer that is right in meaning but breaks the word limit or is misspelt is marked wrong.</div>
<h4>From raw score to band</h4>
<p>IELTS publishes the approximate number of correct answers needed for several bands. These are averages: the precise numbers vary slightly from one test version to another, because no two versions are exactly equal in difficulty, and the conversion is adjusted so that each band represents the same level of ability on every version.</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Band</th><th>Listening</th><th>Academic Reading</th><th>General Training Reading</th></tr>
<tr><td>8</td><td>35 / 40</td><td>35 / 40</td><td>–</td></tr>
<tr><td>7</td><td>30 / 40</td><td>30 / 40</td><td>35 / 40</td></tr>
<tr><td>6</td><td>23 / 40</td><td>23 / 40</td><td>30 / 40</td></tr>
<tr><td>5</td><td>16 / 40</td><td>15 / 40</td><td>23 / 40</td></tr>
<tr><td>4</td><td>–</td><td>–</td><td>15 / 40</td></tr>
</table></div>
<p class="muted small">Source: IELTS, "IELTS scoring in detail" (approximate averages published by IELTS).</p>
<p>The fuller tables that circulate in books and online – and that this site's <a href="/calculator">band calculator</a> uses – fill in the half bands between these points. They are consistent with the official averages above but are <b>approximations</b>, not official tables for live tests. Treat a converted practice score as "about 6.5", not "exactly 6.5".</p>
<h4>Why General Training Reading needs more correct answers</h4>
<p>General Training texts are less demanding than Academic passages, so the same number of correct answers represents a lower level of reading ability. About 30 correct answers gives Band 7 in Academic Reading but Band 6 in General Training. To reach Band 7 in General Training you need about 35 – very few mistakes.</p>
<h4>How much is one mark worth?</h4>
<p>In the middle and upper range, a half band in Listening or Reading is typically worth only two to four correct answers. Between Band 7 (about 30) and Band 8 (about 35), for example, there are only five marks for a whole band. This has two consequences. First, small, avoidable errors – a spelling mistake, a plural "s", a word-limit slip – are expensive: three of them can cost half a band. Second, improvement in these skills is very achievable: fixing one recurring mistake pattern can lift your band quickly.</p>`
    },
    {
      id: 'writing-marking', title: 'How Writing is marked',
      html: `
<p>Each Writing task is marked by a certificated IELTS examiner using the official <b>band descriptors</b> – detailed descriptions of performance at each band for each criterion. There are four criteria, and they are <b>equally weighted</b>. Each task is assessed independently: the score for the task is the average of its four criterion bands, and Task 2 counts twice as much as Task 1 in the final Writing band.</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Criterion</th><th>The question the examiner is asking</th><th>What commonly lowers it</th></tr>
<tr><td>Task Achievement (Task 1)</td><td>Has the response covered the requirements of the task? Academic: is there a clear overview, and are the key features selected, compared and reported accurately? General Training: are all three bullet points covered, is the purpose clear and the tone appropriate?</td><td>No overview; describing every number instead of the main features; inaccurate data; a missing bullet point; the wrong tone in a letter</td></tr>
<tr><td>Task Response (Task 2)</td><td>Has the essay answered every part of the question, with a clear position throughout and ideas that are extended and supported?</td><td>Answering only part of the question; an unclear or changing position; ideas listed but not explained; drifting off the topic</td></tr>
<tr><td>Coherence and Cohesion</td><td>Is the writing logically organised and easy to follow, with clear paragraphs, progression and natural linking?</td><td>No clear paragraphing; ideas in a confusing order; linking words overused or used mechanically ("Firstly… Secondly… Moreover…"); unclear reference words</td></tr>
<tr><td>Lexical Resource</td><td>How wide, precise and appropriate is the vocabulary, including collocation, spelling and word formation?</td><td>Repetition of the same words; words used with the wrong meaning or in the wrong collocation; spelling and word-form errors; "impressive" words used inaccurately</td></tr>
<tr><td>Grammatical Range and Accuracy</td><td>How varied are the sentence structures, and how many sentences are free of error, including punctuation?</td><td>Only simple sentences; frequent errors in complex sentences; article, tense and agreement errors; run-on sentences and comma splices</td></tr>
</table></div>
<div class="callout official"><strong>Rules that affect your Writing score</strong>You will be penalised if what you write does not relate to the topic, or if it is not written as connected text (notes or bullet points). If an answer is too short, there may not be enough evidence to award the higher bands. According to the public band descriptors, responses of 20 words or fewer are rated at Band 1, words copied from the task are not credited, and Band 0 is used where a candidate did not attempt the task, wrote in a language other than English throughout, or where there is proof that the answer was totally memorised.</div>
<p>Two practical lessons follow. <b>Memorised material does not help.</b> Examiners are trained to recognise memorised phrases and paragraphs that do not fit the question, and such language does not count as evidence of your ability; a wholly memorised answer can score zero. <b>Copying the question does not add words.</b> If your introduction repeats the question word for word, those words are not credited – this is one reason to paraphrase the question rather than copy it.</p>
<p>Writing on Paper and Writing on computer are marked in exactly the same way. If you write by hand, legibility matters for a practical reason: an examiner cannot credit what cannot be read.</p>`
    },
    {
      id: 'speaking-marking', title: 'How Speaking is marked',
      html: `
<p>Speaking is assessed by the examiner who conducts your test, using four equally weighted criteria; the average gives your Speaking band. The whole test is recorded, which allows quality checks and remarking.</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Criterion</th><th>What it covers</th><th>What commonly lowers it</th></tr>
<tr><td>Fluency and Coherence</td><td>Speaking at length without unnatural pauses or repetition; connecting ideas logically; using discourse markers naturally</td><td>Very short answers; long pauses to search for words; self-correction in every sentence; ideas that jump without connection</td></tr>
<tr><td>Lexical Resource</td><td>Range and precision of vocabulary; less common and idiomatic language used naturally; paraphrasing when you lack a word</td><td>Repeating basic words; using idioms in the wrong context; stopping when a word is missing instead of explaining around it</td></tr>
<tr><td>Grammatical Range and Accuracy</td><td>A mix of simple and complex structures; how many sentences are error-free</td><td>Only short simple sentences; frequent errors in tense, agreement and articles; complex sentences that break down</td></tr>
<tr><td>Pronunciation</td><td>How easy you are to understand; the range of features you control – individual sounds, word and sentence stress, intonation, rhythm and connected speech</td><td>Misplaced word stress; flat intonation; unclear final consonants; speaking too fast to be followed</td></tr>
</table></div>
<p><b>Accent is not the same as pronunciation.</b> You are not expected to sound British, American or anything else. The Pronunciation criterion is about intelligibility and control: whether the listener understands you easily and whether you use stress, rhythm and intonation to support meaning. A clear speaker with a strong regional or first-language accent can score highly.</p>
<p>The Speaking test is not a test of your opinions or knowledge. A simple idea expressed fluently, accurately and with good range scores higher than a brilliant idea expressed with constant hesitation.</p>`
    },
    {
      id: 'overall', title: 'Calculating the overall band',
      html: `
<div class="callout official"><strong>The rule</strong>The overall band is the average of the four skill bands, rounded to the nearest half band. If the average ends in .25, it is rounded up to the next half band; if it ends in .75, it is rounded up to the next whole band.</div>
<p>Because every skill band is a whole or half band, the sum of the four is always a multiple of 0.5, and the average can end in only eight ways. Learn this table and you will never miscalculate an overall band:</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Average ends in</th><th>Overall band</th><th>Example (four skills → sum → average → overall)</th></tr>
<tr><td>.0</td><td>Stays the same</td><td>6.0, 6.0, 6.0, 6.0 → 24.0 → 6.0 → <b>6.0</b></td></tr>
<tr><td>.125</td><td>Rounded <i>down</i> to .0</td><td>6.5, 6.0, 6.0, 6.0 → 24.5 → 6.125 → <b>6.0</b></td></tr>
<tr><td>.25</td><td>Rounded <i>up</i> to .5</td><td>6.5, 6.5, 6.0, 6.0 → 25.0 → 6.25 → <b>6.5</b></td></tr>
<tr><td>.375</td><td>Rounded up to .5</td><td>7.0, 6.5, 6.0, 6.0 → 25.5 → 6.375 → <b>6.5</b></td></tr>
<tr><td>.5</td><td>Stays the same</td><td>7.0, 6.5, 6.5, 6.0 → 26.0 → 6.5 → <b>6.5</b></td></tr>
<tr><td>.625</td><td>Rounded <i>down</i> to .5</td><td>7.0, 7.0, 6.5, 6.0 → 26.5 → 6.625 → <b>6.5</b></td></tr>
<tr><td>.75</td><td>Rounded <i>up</i> to the next whole band</td><td>7.0, 7.0, 6.5, 6.5 → 27.0 → 6.75 → <b>7.0</b></td></tr>
<tr><td>.875</td><td>Rounded up to the next whole band</td><td>7.5, 7.0, 6.5, 6.5 → 27.5 → 6.875 → <b>7.0</b></td></tr>
</table></div>
<p>Notice that rounding goes <b>down</b> in two cases (.125 and .625). "IELTS always rounds up" is a myth.</p>
<h4>A short cut: the target sum</h4>
<p>Because of the rounding rule, the overall band reaches a target <i>T</i> exactly when the four skill bands add up to at least <b>4 × T − 1</b>. For an overall 6.5 you need a sum of at least 25.0; for 7.0, at least 27.0; for 7.5, at least 29.0. This is the quickest way to see how far you are from an overall target.</p>
<div class="table-wrap"><table class="data-table plain">
<tr><th>Overall target</th><th>6.0</th><th>6.5</th><th>7.0</th><th>7.5</th><th>8.0</th></tr>
<tr><td>Minimum sum of the four bands</td><td>23.0</td><td>25.0</td><td>27.0</td><td>29.0</td><td>31.0</td></tr>
</table></div>`
    },
    {
      id: 'half-bands', title: 'What a half band really means',
      html: `
<p>A half band is a real level, not a rounding accident, and it means slightly different things in different skills.</p>
<ul>
<li><b>In Listening and Reading</b>, a half band corresponds to a range of raw scores. Band 6.5 in Listening, for example, covers roughly 26–29 correct answers. Two candidates with "6.5" may therefore be three marks apart.</li>
<li><b>In Writing and Speaking</b>, a half band usually reflects an uneven profile across the four criteria. A Speaking performance rated 7, 7, 6, 6 averages 6.5: it is Band 7 in two respects and Band 6 in two others. IELTS does not publish every detail of how criterion averages are rounded, so the safest working assumption is that a skill band is only as strong as its weaker criteria.</li>
</ul>
<p>This explains a common frustration: "My essay was nearly a 7 – why did I get 6.5?" Usually it was a 7 in some criteria and a 6 in others. Moving to a full 7 means raising the weaker criteria, not polishing the stronger ones.</p>
<div class="callout advice"><strong>Read your Writing and Speaking bands as profiles</strong>When you assess your practice, always write down four criterion bands, never one. The lowest number tells you what to study next.</div>`
    },
    {
      id: 'requirements', title: 'Reading requirements against your result',
      html: `
<p>Your Test Report Form shows the four skill bands and the overall band. It does not show criterion scores or raw marks. When you check a requirement, test every condition separately:</p>
<ol>
<li><b>Overall:</b> is the overall band at least the required level?</li>
<li><b>Each skill:</b> is every skill at least its required minimum? (If the requirement gives different minimums for different skills, check each one against its own number.)</li>
<li><b>Sitting:</b> if the requirement says "one sitting", do all the scores come from this single test?</li>
<li><b>Date:</b> will the result still be accepted on the date it is needed? IELTS recommends treating results as valid for two years; organisations may accept older results or insist on more recent ones.</li>
</ol>
<p>A result fails if <i>any</i> condition fails. It is surprisingly common for candidates to celebrate an overall 7.0 and then discover that Writing at 6.0 does not meet a "no band below 6.5" rule.</p>`
    },
    {
      id: 'band-impact', title: 'What scoring means for your preparation',
      html: `
<p>Each skill contributes exactly a quarter of the overall band. That simple fact, combined with the marking rules above, gives a set of principles for using your study time well:</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Principle</th><th>Why</th></tr>
<tr><td>Fix any skill below a per-skill minimum first</td><td>A per-skill minimum cannot be compensated by other skills, however high they are.</td></tr>
<tr><td>Then look for the cheapest half band</td><td>For the overall band, a half band from your strongest skill is worth exactly as much as one from your weakest. Sometimes the strong skill is the easier one to move.</td></tr>
<tr><td>In Listening and Reading, eliminate "careless" losses</td><td>Spelling, plurals, word limits and blanks can cost several marks, and a half band is often only two to four marks.</td></tr>
<tr><td>Never leave a blank</td><td>A wrong answer and a blank both score zero, so a reasoned guess can only help.</td></tr>
<tr><td>Protect Task 2</td><td>It counts twice as much as Task 1. A finished, relevant Task 2 is worth more than a perfect Task 1.</td></tr>
<tr><td>Raise your weakest criterion in Writing and Speaking</td><td>Bands are averages of four criteria. Lifting a 5 to a 6 helps more than lifting a 7 to a 7.5 that the examiner may not see.</td></tr>
<tr><td>Build real language, not memorised answers</td><td>Memorised material is not credited and can be penalised. Range and accuracy only count when they are your own.</td></tr>
</table></div>`
    }
  ],
  worked: [
    {
      title: 'Calculating overall bands',
      questions: `<div class="table-wrap"><table class="data-table plain">
<tr><th>Candidate</th><th>Listening</th><th>Reading</th><th>Writing</th><th>Speaking</th></tr>
<tr><td>Amal</td><td>6.5</td><td>6.0</td><td>5.5</td><td>6.0</td></tr>
<tr><td>Ben</td><td>7.0</td><td>6.5</td><td>6.0</td><td>6.0</td></tr>
<tr><td>Chen</td><td>8.0</td><td>7.5</td><td>6.5</td><td>7.0</td></tr>
<tr><td>Dana</td><td>5.5</td><td>5.5</td><td>5.5</td><td>6.0</td></tr>
</table></div>
<p>Work out each candidate's overall band before you open the solution.</p>`,
      walk: [
        { q: 'Amal', a: '6.0', steps: ['Sum: 6.5 + 6.0 + 5.5 + 6.0 = 24.0.', 'Average: 24.0 ÷ 4 = 6.0.', 'The average ends in .0, so nothing is rounded: overall <b>6.0</b>.'] },
        { q: 'Ben', a: '6.5', steps: ['Sum: 7.0 + 6.5 + 6.0 + 6.0 = 25.5.', 'Average: 25.5 ÷ 4 = 6.375.', '.375 is nearer to .5 than to .0, so it rounds up: overall <b>6.5</b>.', 'Check with the target-sum short cut: 6.5 needs a sum of at least 25.0, and 25.5 ≥ 25.0.'] },
        { q: 'Chen', a: '7.5', steps: ['Sum: 8.0 + 7.5 + 6.5 + 7.0 = 29.0.', 'Average: 29.0 ÷ 4 = 7.25.', 'An average ending in .25 rounds up to the next half band: overall <b>7.5</b>.', 'Note that Chen\'s Writing (6.5) is a full band below the overall. If Chen\'s requirement were "7.5 overall, no band below 7.0", this result would fail.'] },
        { q: 'Dana', a: '5.5', steps: ['Sum: 5.5 + 5.5 + 5.5 + 6.0 = 22.5.', 'Average: 22.5 ÷ 4 = 5.625.', '.625 is nearer to .5 than to 1.0, so it rounds <i>down</i>: overall <b>5.5</b>.', 'One more half band in any skill would give a sum of 23.0, an average of 5.75, and an overall 6.0.'] }
      ],
      lesson: 'Always calculate in three steps – sum, average, round – and use the eight-ending table. Rounding goes down for .125 and .625 and up for .25, .375, .75 and .875.'
    },
    {
      title: 'Does the result meet the requirement?',
      questions: `<ol>
<li>Requirement: <i>6.5 overall, no band below 6.0.</i> Result: L 7.5, R 7.0, W 5.5, S 6.5.</li>
<li>Requirement: <i>7.0 overall.</i> Result: L 7.5, R 7.0, W 6.5, S 6.5.</li>
<li>Requirement: <i>7.0 in each skill.</i> Result: L 8.5, R 8.0, W 7.0, S 6.5.</li>
</ol>`,
      walk: [
        { q: '1.', a: 'Not met', steps: ['Overall: 7.5 + 7.0 + 5.5 + 6.5 = 26.5; 26.5 ÷ 4 = 6.625 → 6.5. The overall condition is met.', 'Per skill: Writing is 5.5, below the 6.0 minimum. The second condition fails.', 'The result does <b>not</b> meet the requirement, even though the overall band is exactly right. This candidate must raise Writing by half a band – and nothing else will help.'] },
        { q: '2.', a: 'Met', steps: ['Sum: 7.5 + 7.0 + 6.5 + 6.5 = 27.5; average 6.875 → 7.0.', 'There is no per-skill condition, so the two 6.5s do not matter.', 'The requirement is met. (With the short cut: 7.0 needs a sum of at least 27.0, and 27.5 ≥ 27.0.)'] },
        { q: '3.', a: 'Not met', steps: ['The overall band (30.0 ÷ 4 = 7.5) is irrelevant: the requirement sets a minimum for each skill.', 'Speaking is 6.5, below 7.0.', 'The result fails on Speaking alone, despite very high Listening and Reading.'] }
      ],
      lesson: 'Check every condition separately. The overall band can hide a weak skill – and per-skill minimums are where most "nearly" results fail.'
    },
    {
      title: 'Planning the cheapest route to a target',
      source: `<div class="prompt-box"><p>Ahmed's latest practice results (Academic): Listening 27/40 (≈ 6.5), Reading 24/40 (≈ 6.0), Writing 5.5 (criteria: TR 6, CC 6, LR 5, GRA 5), Speaking 6.0. His requirement: <i>6.5 overall, no band below 6.0.</i> His exam is in ten weeks.</p></div>`,
      questions: '<p>Where should Ahmed\'s half bands come from?</p>',
      walk: [
        {
          q: 'Step 1: where is he now?', a: 'Overall 6.0',
          steps: ['Sum: 6.5 + 6.0 + 5.5 + 6.0 = 24.0; average 6.0; overall 6.0.', 'He needs an overall 6.5, which requires a sum of at least 25.0 – one full band more, spread across the skills.']
        },
        {
          q: 'Step 2: fix the per-skill minimum', a: 'Writing 5.5 → 6.0 is compulsory',
          steps: ['Writing is below the 6.0 minimum, so it must rise by at least half a band whatever happens elsewhere.', 'His criterion profile shows where: Lexical Resource and Grammatical Range and Accuracy are both 5. Raising those two to 6 would bring the essay to about 6.0.', 'That gives a sum of 24.5 – an average of 6.125, still only 6.0 overall. He needs one more half band somewhere.']
        },
        {
          q: 'Step 3: find the cheapest extra half band', a: 'Probably Reading or Listening',
          steps: ['Reading: 24/40 ≈ 6.0. About 27 correct answers usually gives 6.5 – roughly <b>three more correct answers</b>.', 'Listening: 27/40 ≈ 6.5. About 30 gives 7.0 – again about three more answers.', 'Speaking 6.0 → 6.5 would need a visible improvement in at least two criteria.', 'Ahmed reviews his Reading errors and finds that five of his sixteen mistakes were NOT GIVEN answered as FALSE. That is a technique problem that can be fixed in a few weeks with the <a href="/reading/tfng">True / False / Not Given</a> chapter – the cheapest half band available.']
        },
        {
          q: 'Step 4: the plan', a: 'Writing first, Reading second, keep the others steady',
          steps: ['About 40% of study time on Writing – grammar accuracy and vocabulary precision, two essays a week, assessed by criterion.', 'About 25% on Reading technique, starting with True / False / Not Given.', 'Keep Listening and Speaking practice going every week, so that they do not fall.', 'Target profile in ten weeks: L 6.5, R 6.5, W 6.0, S 6.0 → sum 25.0 → average 6.25 → overall 6.5, with no band below 6.0. Re-measure every two to three weeks.']
        }
      ],
      lesson: 'Fix what the requirement forces you to fix, then take the cheapest remaining half band. A few correct answers in Reading or Listening can be worth as much to the overall band as a major improvement in Speaking.'
    }
  ],
  dos: [
    'Calculate every overall band in three steps: sum, average, round.',
    'Use the target sum (4 × target − 1) to see instantly how far you are from an overall target.',
    'Assess Writing and Speaking practice criterion by criterion, and work on the lowest criterion first.',
    'Treat converted practice scores as approximate ("about 6.5").',
    'Answer every Listening and Reading question – there is no penalty for wrong answers.',
    'Check spelling, plurals and word limits on every gap-fill answer.',
    'Paraphrase the question in your Writing introduction instead of copying it.'
  ],
  donts: [
    'Don\'t assume IELTS "always rounds up" – averages ending in .125 and .625 round down.',
    'Don\'t judge a result by the overall band alone if your requirement has per-skill minimums.',
    'Don\'t treat online raw-score tables as official; only the IELTS averages are published officially.',
    'Don\'t memorise essays or Speaking answers – memorised language is not credited and can be penalised.',
    'Don\'t try to change your accent; work on clarity, stress and intonation instead.',
    'Don\'t write Writing answers as notes or bullet points to save time.'
  ],
  careful: [
    {
      title: 'The overall band hides weak skills',
      body: '<p>An overall band is an average, so a strong skill can mask a weak one. If your requirement includes a minimum for each skill, the weakest skill decides whether you succeed.</p>',
      example: 'L 8.0, R 8.0, W 6.0, S 7.0 → 29.0 → 7.25 → overall 7.5. Excellent – unless the requirement is "7.0 in each skill", in which case it fails on Writing.'
    },
    {
      title: '"Nearly right" answers score zero',
      body: '<p>In Listening and Reading there are no part marks. A correct idea that breaks the word limit, is misspelt, or does not fit grammatically scores exactly the same as a blank.</p>',
      example: 'Gap (ONE WORD ONLY): "Applicants must bring two passport ______." The speaker says "two passport photographs". <i>photograph</i> is wrong because the sentence needs a plural; <i>passport photographs</i> is wrong because it is two words. Only <i>photographs</i> (or <i>photos</i>) scores.'
    },
    {
      title: 'Longer is not better',
      body: '<p>No rule rewards extra words beyond the minimum. Very long answers take time from Task 2 and usually contain more errors, which lowers Grammatical Range and Accuracy. Aim to be comfortably above the minimum, then spend the remaining time on quality and checking.</p>'
    },
    {
      title: 'Memorised "high-band" phrases',
      body: '<p>Phrases such as "In this day and age, it is a highly debatable issue whether…" are recognised by examiners as memorised. They add words but no evidence of your ability, and they often fit the question badly, which also weakens Task Response.</p>'
    },
    {
      title: 'Self-assessment is usually too generous',
      body: '<p>Most candidates rate their own Writing and Speaking half a band to a band too high, especially for Lexical Resource and Grammatical Range and Accuracy. Count your errors per paragraph, compare with the descriptors honestly, and ask for outside feedback when you can.</p>'
    }
  ],
  faq: [
    { q: 'Can I see my criterion scores or my raw marks?', a: '<p>No. The Test Report Form shows the four skill bands and the overall band only. This is why practising with criterion-by-criterion self-assessment matters: it gives you the detail the result will not.</p>' },
    { q: 'Is the computer test marked differently?', a: '<p>No. Listening and Reading answers are marked against the same answer keys, and Writing and Speaking are marked by certificated examiners using the same band descriptors, whatever the delivery mode.</p>' },
    { q: 'Exactly how much is Task 1 worth?', a: '<p>IELTS states that Task 2 contributes twice as much as Task 1 to the Writing score – in other words, Task 1 is roughly one third and Task 2 roughly two thirds of the Writing band.</p>' },
    { q: 'Do examiners take off marks for each mistake?', a: '<p>No. Writing and Speaking are not marked by counting deductions. The examiner decides which band description best fits your performance for each criterion. Errors matter because they affect that description – for example, how many sentences are error-free – not because each costs a fixed amount.</p>' },
    { q: 'How long is my result valid?', a: '<p>IELTS recommends that results be considered valid for two years after the test. Each organisation decides for itself and may accept older results or require more recent ones.</p>' },
    { q: 'I think my score is wrong. What can I do?', a: '<p>You can request a remark (an Enquiry on Results) within six weeks of the test date. The next chapter, <a href="/exam/test-day">Booking, test day and results</a>, explains how it works and when it is worth doing.</p>' }
  ],
  exercises: {
    id: 'ch-exam-scoring',
    title: 'Chapter exercises: calculating and reading IELTS scores',
    intro: '<p>Part A practises the overall-band calculation until it is automatic. Part B checks that you understand how each skill is marked. Write bands as numbers, for example <b>6.5</b> or <b>7.0</b>.</p>',
    groups: [
      {
        kind: 'gap', title: 'Part A: calculate the overall band', instructions: 'Each line shows Listening, Reading, Writing and Speaking. Write the <b>overall band</b>.',
        questions: [
          { n: 1, q: 'L 6.0 · R 6.5 · W 5.5 · S 6.0 → overall {}', a: '6.0|6', x: 'Sum 24.0; average 6.0; no rounding needed → 6.0.' },
          { n: 2, q: 'L 7.5 · R 7.0 · W 6.5 · S 7.0 → overall {}', a: '7.0|7', x: 'Sum 28.0; average 7.0 → 7.0.' },
          { n: 3, q: 'L 6.5 · R 6.5 · W 6.0 · S 6.0 → overall {}', a: '6.5', x: 'Sum 25.0; average 6.25. An average ending in .25 rounds up to the next half band → 6.5.' },
          { n: 4, q: 'L 8.0 · R 7.5 · W 7.0 · S 7.5 → overall {}', a: '7.5', x: 'Sum 30.0; average 7.5 → 7.5.' },
          { n: 5, q: 'L 5.5 · R 6.0 · W 5.5 · S 6.0 → overall {}', a: '6.0|6', x: 'Sum 23.0; average 5.75. An average ending in .75 rounds up to the next whole band → 6.0.' },
          { n: 6, q: 'L 7.0 · R 7.0 · W 6.5 · S 6.0 → overall {}', a: '6.5', x: 'Sum 26.5; average 6.625. .625 is nearer to .5 than to 1.0, so it rounds down → 6.5.' },
          { n: 7, q: 'L 6.0 · R 5.5 · W 5.5 · S 5.5 → overall {}', a: '5.5', x: 'Sum 22.5; average 5.625 → rounds down to 5.5.' },
          { n: 8, q: 'L 8.5 · R 8.0 · W 7.0 · S 7.5 → overall {}', a: '8.0|8', x: 'Sum 31.0; average 7.75 → rounds up to 8.0.' },
          { n: 9, q: 'L 6.0 · R 6.0 · W 6.0 · S 6.5 → overall {}', a: '6.0|6', x: 'Sum 24.5; average 6.125. .125 is nearer to .0, so it rounds down → 6.0. One extra half band does not change the overall here.' },
          { n: 10, q: 'L 9.0 · R 8.5 · W 7.5 · S 8.0 → overall {}', a: '8.5', x: 'Sum 33.0; average 8.25 → rounds up to 8.5.' }
        ]
      },
      {
        kind: 'choice', title: 'Part B: how the scores work', instructions: 'Choose the correct answer, <b>A, B, C or D</b>.',
        questions: [
          { n: 11, q: 'What happens if you write a wrong answer in Listening?', opts: ['You lose one mark', 'You lose half a mark', 'It scores zero, exactly like a blank', 'The whole section is marked down'], a: 'C', x: 'There is no negative marking. A wrong answer scores zero, the same as a blank – so you should always write a reasoned guess.' },
          { n: 12, q: 'About how many correct answers out of 40 give Band 7 in Academic Reading?', opts: ['23', '27', '30', '35'], a: 'C', x: 'IELTS publishes about 30 correct answers as the average for Band 7 in Academic Reading (and Listening).' },
          { n: 13, q: 'About what band do 30 correct answers give in General Training Reading?', opts: ['5', '6', '7', '8'], a: 'B', x: 'About 30 correct answers gives Band 6 in General Training Reading. About 35 are needed for Band 7.' },
          { n: 14, q: 'Requirement: "6.5 overall, no band below 6.0". Result: L 7.0, R 7.0, W 5.5, S 7.0.', opts: ['Met', 'Not met: the overall band is too low', 'Not met: Writing is below 6.0', 'Not met: both conditions fail'], a: 'C', x: 'Sum 26.5; average 6.625 → overall 6.5, so the overall condition is met. But Writing at 5.5 is below the 6.0 minimum.' },
          { n: 15, q: 'How are the four Writing criteria weighted?', opts: ['Task Response counts double', 'Equally', 'Grammar and vocabulary count most', 'It depends on the task'], a: 'B', x: 'The four criteria are equally weighted. (It is the two tasks that are weighted differently: Task 2 counts twice as much as Task 1.)' },
          { n: 16, q: 'Which statement about Pronunciation is correct?', opts: ['A British or American accent is required for Band 7+', 'A strong first-language accent automatically limits the band', 'It is judged on how easily you are understood and the range of features you control', 'It is not assessed in Part 2'], a: 'C', x: 'Pronunciation is about intelligibility and control of features such as stress, rhythm and intonation. No particular accent is required.' },
          { n: 17, q: 'To reach an overall 7.0, the four skill bands must add up to at least…', opts: ['26.0', '26.5', '27.0', '28.0'], a: 'C', x: 'Target sum = 4 × 7.0 − 1 = 27.0. A sum of 27.0 gives an average of 6.75, which rounds up to 7.0; 26.5 gives 6.625, which rounds down to 6.5.' },
          { n: 18, q: 'According to the public Writing band descriptors, what band is given to a response of 20 words or fewer?', opts: ['Band 0', 'Band 1', 'Band 2', 'Band 3'], a: 'B', x: 'Responses of 20 words or fewer are rated at Band 1. Band 0 is reserved for no attempt, a language other than English throughout, or a proven, totally memorised answer.' }
        ]
      }
    ]
  },
  checklist: [
    'I can name the nine bands and explain the difference between Bands 6, 7 and 8.',
    'I know that Listening and Reading are marked one mark per answer, with no penalty for wrong answers.',
    'I know the official approximate raw scores for Bands 5–8, and why General Training Reading needs more.',
    'I can name the four Writing criteria and the four Speaking criteria.',
    'I can calculate any overall band, including the cases that round down.',
    'I know my target sum (4 × target − 1).',
    'I have checked my practice result against every condition of my requirement.',
    'I know which half band is cheapest for me to gain next.'
  ],
  summary: [
    'Every skill and the overall result are reported on a 0–9 scale in whole and half bands.',
    'Listening and Reading: one mark per correct answer, no negative marking; about 30/40 ≈ Band 7 (Academic), but only Band 6 in General Training Reading.',
    'Writing and Speaking: four equally weighted criteria each; Task 2 counts twice as much as Task 1.',
    'Overall band = the average of the four, rounded to the nearest half band (.25 up to .5, .75 up to the next whole band; .125 and .625 round down).',
    'A target overall band T needs the four bands to add up to at least 4 × T − 1.',
    'Per-skill minimums cannot be compensated; fix them first, then take the cheapest remaining half band.'
  ],
  references: [
    { title: 'IELTS: IELTS scoring in detail', url: 'https://ielts.org/take-a-test/your-results/ielts-scoring-in-detail', note: 'The band scale and skill levels, rounding of the overall band, approximate raw scores, Writing and Speaking criteria, two-year validity.' },
    { title: 'IELTS Writing band descriptors (public version)', url: 'https://ielts.org/cdn/ielts-downloadable-assets/ielts-guidance-and-support/ielts-guides/ielts-writing-band-descriptors.pdf', note: 'The full descriptors for both tasks, including the notes on short, copied and memorised responses.' },
    { title: 'IELTS Speaking band descriptors (public version)', url: 'https://ielts.org/cdn/ielts-guides/ielts-speaking-band-descriptors.pdf' },
    { title: 'IELTS Academic: Writing test format', url: 'https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-writing', note: 'Task 2 contributes twice as much as Task 1; penalties for irrelevance and for notes or bullet points.' },
    { title: 'IELTS and the CEFR', url: 'https://ielts.org/organisations/ielts-for-organisations/compare-ielts/ielts-and-the-cefr', note: 'How IELTS bands relate to CEFR levels, and why the correspondence is not one-to-one.' },
    { title: 'In this book: How Writing is marked', url: '/writing/band-descriptors', note: 'The four Writing criteria explained band by band.' }
  ]
};

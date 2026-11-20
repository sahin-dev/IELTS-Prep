import type { Chapter } from '@/lib/types';
import { grammarBooks } from './grammar-pos-a';
import { tenseRefs } from './grammar-tense-a';

/* Grammar masterclass, Part B (tenses) – future forms */

export const tenseChaptersC: Record<string, Chapter> = {
  /* ===================================================================== FUTURE SIMPLE AND FUTURE FORMS */
  'future-simple': {
    intro: `
<p>English has no single "future tense". Instead, it uses several forms, each with its own meaning: <b>will</b> + base form (often called the future simple) for predictions, decisions made at the moment of speaking, promises and offers; <b>be going to</b> for plans and intentions, and for predictions based on present evidence; the <b>present continuous</b> for personal arrangements; and the <b>present simple</b> for timetables and in time and condition clauses. Choosing well between them is a sign of advanced control.</p>
<p>In IELTS the future appears in three places. In <b>Academic Task 1</b>, some charts include projections (<i>2030 (projected)</i>), and you must describe them with future forms – ideally hedged ones such as <i>is expected to</i> and <i>is projected to</i>, because projections are not facts. In <b>Task 2</b>, you predict consequences (<i>This <b>will</b> lead to…</i>), usually with some caution (<i>is likely to, may</i>). In <b>Speaking</b>, Part 1 asks about your plans (<i>I<b>'m going to</b>…</i>) and Part 3 asks you to speculate about society in the future.</p>`,
    facts: [
      ['will', 'Predictions, instant decisions, promises, offers, future facts'],
      ['be going to', 'Plans and intentions; predictions from present evidence'],
      ['Present continuous', 'Fixed personal arrangements'],
      ['Present simple', 'Timetables; after when / if / until for future meaning'],
      ['Task 1 projections', 'is expected / projected / predicted / forecast to'],
      ['Commonest errors', 'will after when/if; "will to go"; overconfident predictions']
    ],
    method: [
      { title: 'Form will + base form correctly', body: '<p><i>Will</i> is the same for all subjects and is followed by the base form – no <i>to</i>, no <i>-s</i>. Negative: <i>will not / won\'t</i>. Question: <i>Will</i> + subject + base. <i>Shall</i> is used with <i>I/we</i> for offers and suggestions (<i>Shall I open the window? Shall we start?</i>).</p>', example: '✗ <i>It will to rain. · It wills rain.</i> → ✓ <i>It <b>will rain</b>.</i>' },
      { title: 'Use will for predictions based on belief, and for instant decisions, promises and offers', body: '<p>Predictions with <i>will</i> are often introduced by <i>I think, I expect, probably, definitely</i>. Decisions made at the moment of speaking also use <i>will</i>.</p>', example: '<i>I think more people <b>will work</b> from home.</i> · <i>"The phone\'s ringing." "I<b>\'ll get</b> it."</i> · <i>I<b>\'ll send</b> you the report tomorrow.</i>' },
      { title: 'Use be going to for plans and for predictions from evidence', body: '<p>A plan already decided: <i>I<b>\'m going to</b> study medicine.</i> A prediction from what you can see now: <i>Look at those clouds – it<b>\'s going to</b> rain.</i></p>' },
      { title: 'Use the present continuous for arrangements and the present simple for timetables', body: '<p>Arrangements with other people (time and place fixed): <i>I<b>\'m meeting</b> my tutor on Monday.</i> Official schedules: <i>The conference <b>starts</b> on 4 June.</i></p>' },
      { title: 'After when, if, as soon as, before, until: present tense, not will', body: '<p>In time and condition clauses about the future, use the present simple (or present perfect for completion). Keep <i>will</i> for the main clause.</p>', example: '✗ <i>When the new line will open, …</i> → ✓ <i>When the new line <b>opens</b>, traffic <b>will</b> fall.</i> · ✓ <i>As soon as I <b>have finished</b>, I\'ll call you.</i>' },
      { title: 'For Task 1 projections, use hedged future forms', body: '<p>Projections are forecasts, so present them as such: <i>is expected / projected / predicted / forecast to</i> + base form; <i>is likely to</i>; <i>will</i> + adverb (<i>will probably</i>); <i>It is predicted that … will …</i>. With <i>by</i> + a future date, use the future perfect (see <a href="/grammar/future-perfect">Future perfect</a>).</p>', example: '<i>The number of electric cars <b>is projected to reach</b> 40 million by 2030.</i> · <i>Coal use <b>is expected to</b> continue <b>falling</b>.</i>' },
      { title: 'In Task 2 and Part 3, hedge your predictions', body: '<p>Confident predictions are easy to challenge. Use <i>is likely to, may, might, could, will probably</i> unless you are describing a certain consequence.</p>', example: '<i>Automation <b>is likely to</b> replace many routine jobs, although it <b>may</b> also create new ones.</i>' }
    ],
    sections: [
      {
        id: 'choose', title: 'Choosing a future form',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Meaning</th><th>Form</th><th>Example</th></tr>
<tr><td>Prediction (opinion, belief)</td><td>will</td><td><i>Prices <b>will</b> probably <b>rise</b>.</i></td></tr>
<tr><td>Prediction (present evidence)</td><td>be going to</td><td><i>The company <b>is going to</b> lose money – sales have collapsed.</i></td></tr>
<tr><td>Intention, plan</td><td>be going to</td><td><i>I<b>'m going to</b> take the test in May.</i></td></tr>
<tr><td>Decision now, offer, promise</td><td>will</td><td><i>I<b>'ll</b> help you. I <b>won't</b> forget.</i></td></tr>
<tr><td>Arrangement</td><td>present continuous</td><td><i>We<b>'re flying</b> to Accra on Friday.</i></td></tr>
<tr><td>Timetable</td><td>present simple</td><td><i>The exam <b>begins</b> at 9.00.</i></td></tr>
<tr><td>In progress at a future time</td><td>future continuous</td><td><i>This time next year I<b>'ll be studying</b> in Canada.</i></td></tr>
<tr><td>Completed before a future time</td><td>future perfect</td><td><i>By 2030, the figure <b>will have doubled</b>.</i></td></tr>
<tr><td>Formal planned events</td><td>be to / be due to</td><td><i>The minister <b>is due to</b> arrive at noon. The bridge <b>is to</b> open in 2027.</i></td></tr>
</table></div>`
      },
      {
        id: 'projections', title: 'Describing projections in Task 1',
        html: `
<div class="table-wrap"><table class="data-table plain">
<tr><th>Structure</th><th>Example</th></tr>
<tr><td>is expected / projected / predicted / forecast / estimated + to + base</td><td><i>The population <b>is projected to reach</b> 10 billion by 2050.</i></td></tr>
<tr><td>It is expected / predicted that … will …</td><td><i><b>It is predicted that</b> demand <b>will</b> double.</i></td></tr>
<tr><td>is likely / set to + base</td><td><i>Solar power <b>is set to</b> overtake gas.</i></td></tr>
<tr><td>will + adverb</td><td><i>Car use <b>will probably</b> decline slightly.</i></td></tr>
<tr><td>By + date + future perfect</td><td><i><b>By</b> 2040, the figure <b>will have risen</b> to 60%.</i></td></tr>
<tr><td>noun phrase</td><td><i>A further rise to 60% <b>is forecast</b> for 2040.</i></td></tr>
</table></div>
<p>Make the boundary between data and projection clear: <i>Between 2000 and 2020, sales <b>rose</b> steadily, and they <b>are expected to</b> continue rising until 2030.</i></p>`
      },
      {
        id: 'band-impact', title: 'How future forms affect your band',
        html: `<ul>
<li><b>Task 1:</b> describing projected data as fact (<i>In 2030, sales will be 50 million</i>) is acceptable but limited; using hedged passive forms (<i>is projected to</i>) is more precise and shows range.</li>
<li><b>Task 2:</b> appropriate hedging (<i>is likely to, may</i>) contributes to a well-supported, credible position – part of Task Response – and to grammatical range.</li>
<li><b>Accuracy:</b> <i>will</i> in time clauses, <i>will to</i>, and <i>going to</i> without <i>be</i> are noticeable errors.</li>
</ul>`
      }
    ],
    worked: [
      {
        title: 'Describing a chart with past data and projections',
        source: `<div class="prompt-box"><p>Line graph: percentage of energy from renewable sources in Country X – 2000: 5%, 2010: 12%, 2020: 25%, 2030 (projected): 40%, 2040 (projected): 55%.</p></div>`,
        walk: [
          { q: 'Past data', a: 'Between 2000 and 2020, the share of renewable energy rose from 5% to 25%.', steps: ['Data up to 2020 is fact: past simple.'] },
          { q: 'First projection', a: 'It is projected to reach 40% by 2030.', steps: ['Hedged passive: <i>is projected to</i> + base form.'] },
          { q: 'Second projection with "by"', a: 'By 2040, renewables are expected to account for more than half of all energy (55%). / …will have risen to 55%.', steps: ['<i>By</i> + future date: <i>are expected to</i> + base, or future perfect.'] }
        ],
        lesson: 'Past simple for the data, a hedged future form for the projections, and a clear boundary between them.'
      },
      {
        title: 'Choosing the future form in Speaking Part 1',
        source: `<div class="prompt-box"><p><b>Examiner:</b> What are you going to do after the test?</p></div>`,
        walk: [
          { q: 'Plan', a: 'I\'m going to apply for a master\'s programme in Australia.', steps: ['An intention already decided: <i>be going to</i>.'] },
          { q: 'Arrangement', a: 'I\'m actually meeting an adviser from the university next week.', steps: ['A fixed arrangement with a time: present continuous.'] },
          { q: 'Prediction', a: 'I think it\'ll be quite competitive, but hopefully I\'ll get a place.', steps: ['Predictions based on belief: <i>will</i>, softened with <i>I think, hopefully</i>.'] }
        ],
        lesson: 'Three future forms in one natural answer – each chosen for its meaning – is exactly the kind of range examiners notice.'
      }
    ],
    dos: ['Use will + base for predictions, decisions, offers and promises.', 'Use be going to for plans and evidence-based predictions.', 'Use the present simple after when/if/until.', 'Use is expected/projected to for Task 1 projections.', 'Hedge predictions in Task 2.'],
    donts: ['Don\'t use will after when, if, as soon as, until.', 'Don\'t write "will to" or "wills".', 'Don\'t drop be in "be going to": not "I going to".', 'Don\'t present projections as certain facts.'],
    careful: [
      { title: '"Will" for requests and refusals', body: '<p><i>Will you…?</i> is a request; <i>won\'t</i> can mean refusal: <i>The door won\'t open.</i></p>' },
      { title: '"Going to" vs "gonna"', body: '<p><i>Gonna</i> is a spelling of the informal pronunciation. Never write it; in Speaking, the relaxed pronunciation is natural, but the full form is always safe.</p>' }
    ],
    faq: [
      { q: 'Is "shall" still used?', a: '<p>Mainly in offers and suggestions with <i>I</i> and <i>we</i> (<i>Shall I…? Shall we…?</i>) and in formal rules. For simple predictions, <i>will</i> is normal for all persons.</p>' },
      { q: 'Can I use "will" for Task 1 projections?', a: '<p>Yes, but vary it with hedged forms. <i>Is projected to</i> reflects the fact that a projection is an estimate.</p>' }
    ],
    exercises: {
      id: 'ch-grammar-future-simple',
      title: 'Chapter exercises: future forms',
      groups: [
        {
          kind: 'choice', instructions: 'Choose the best option, <b>A, B or C</b>.',
          questions: [
            { n: 1, q: 'When the new hospital ___, waiting lists will become shorter.', opts: ['will open', 'opens', 'is going to open'], a: 'B', x: 'After <i>when</i> with future meaning, use the present simple.' },
            { n: 2, q: '"There\'s no milk." "OK, I ___ some."', opts: ['\'ll buy', '\'m buying', 'buy'], a: 'A', x: 'A decision made at the moment of speaking: <i>will</i>.' },
            { n: 3, q: 'I\'ve already decided: I ___ engineering next year.', opts: ['will study', 'am going to study', 'study'], a: 'B', x: 'A plan decided before speaking: <i>be going to</i>.' },
            { n: 4, q: 'The number of users ___ 5 million by 2030.', opts: ['is projected to reach', 'reaches', 'is reaching'], a: 'A', x: 'A projection in Task 1: hedged passive <i>is projected to</i> + base.' },
            { n: 5, q: 'The train to Edinburgh ___ at 7.45 tomorrow.', opts: ['is leaving', 'leaves', 'will be leave'], a: 'B', x: 'A timetable: present simple (the continuous is also possible as an arrangement, but <i>leaves</i> is the standard timetable form).' },
            { n: 6, q: 'Look at the traffic! We ___ late.', opts: ['are going to be', 'will to be', 'are being'], a: 'A', x: 'A prediction from present evidence: <i>be going to</i>.' }
          ]
        },
        {
          kind: 'gap', instructions: 'Complete with <b>ONE WORD ONLY</b>.',
          questions: [
            { n: 7, q: 'Automation is {} to replace many routine jobs.', a: 'likely|expected|set|predicted|projected', x: 'Hedged prediction: <i>is likely / expected / set to</i> + base.' },
            { n: 8, q: 'I promise I {} tell anyone.', a: 'won\'t', x: 'A promise with <i>will</i>; negative <i>won\'t</i>.' },
            { n: 9, q: '{} I carry that bag for you?', a: 'Shall', x: 'An offer with <i>I</i>: <i>Shall I…?</i>' },
            { n: 10, q: 'It is predicted {} the population will continue to age.', a: 'that', x: '<i>It is predicted that</i> + clause.' }
          ]
        }
      ]
    },
    checklist: ['I can choose between will, be going to, the present continuous and the present simple for the future.', 'I never use will after when/if.', 'I describe Task 1 projections with hedged forms.', 'I hedge predictions in Task 2.'],
    summary: ['English uses several future forms, each with its own meaning.', 'will: predictions, decisions, promises, offers; be going to: plans and evidence-based predictions.', 'Present continuous: arrangements; present simple: timetables and time clauses.', 'Task 1 projections: is expected / projected to; by + date: future perfect.'],
    references: [tenseRefs.future, ...grammarBooks, tenseRefs.overview]
  },

  /* ===================================================================== FUTURE CONTINUOUS */
  'future-continuous': {
    intro: `
<p>The <b>future continuous</b> (<i>will be + -ing</i>) describes an action that will be <b>in progress</b> at a particular time in the future: <i>This time next year, I<b>'ll be studying</b> in Melbourne. At 9 a.m. tomorrow, she<b>'ll be sitting</b> her exam.</i> It is the future equivalent of the past continuous.</p>
<p>It has two further uses. It can describe future events that will happen as part of the normal course of things (<i>The minister <b>will be visiting</b> the region next week</i>), and it gives a polite way of asking about someone's plans without sounding like a request (<i><b>Will</b> you <b>be using</b> the car this evening?</i>). In IELTS it is most useful in Speaking – especially when you are asked to imagine your life or society in the future.</p>`,
    facts: [
      ['Positive', 'will be + -ing'],
      ['Negative', 'won\'t be + -ing'],
      ['Question', 'Will + subject + be + -ing?'],
      ['Main uses', 'In progress at a future time; expected future events; polite questions'],
      ['Signal words', 'this time next year, at 8 p.m. tomorrow, in ten years\' time'],
      ['IELTS', 'Speaking Parts 1 and 3; Task 2 predictions']
    ],
    method: [
      { title: 'Form it with will be + -ing', body: '<p>The same form for every subject.</p>', example: '<i>In twenty years, most people <b>will be driving</b> electric cars.</i>' },
      { title: 'Use it for an action in progress at a future moment', body: '<p>The action will have started before that moment and will continue after it.</p>', example: '<i>Don\'t call at eight – I<b>\'ll be having</b> dinner.</i>' },
      { title: 'Use it for future situations that are part of a trend or normal course', body: '<p>Useful in Part 3 and Task 2 to describe how life will be.</p>', example: '<i>By the middle of the century, more people <b>will be living</b> in cities than ever before.</i>' },
      { title: 'Use it for polite questions about plans', body: '<p><i>Will you be…?</i> asks about plans; <i>Will you…?</i> can sound like a request.</p>', example: '<i><b>Will</b> you <b>be coming</b> to the meeting?</i> (neutral question)' },
      { title: 'Keep stative verbs in the future simple', body: '<p>✗ <i>I will be knowing</i> → ✓ <i>I <b>will know</b></i>.</p>' }
    ],
    sections: [
      {
        id: 'ielts-use', title: 'In IELTS',
        html: `
<ul>
<li><b>Speaking Part 1:</b> <i>Where do you see yourself in five years? – Hopefully I<b>'ll be working</b> as an architect.</i></li>
<li><b>Speaking Part 3:</b> <i>In the future, I think children <b>will be learning</b> mostly through apps.</i></li>
<li><b>Task 2:</b> <i>If current trends continue, fewer people <b>will be buying</b> physical books.</i></li>
</ul>`
      },
      {
        id: 'band-impact', title: 'How it affects your band',
        html: `<p>Answering a question about the future with the future continuous, rather than only <i>will</i>, shows control of aspect. As with every tense, accuracy and naturalness matter more than frequency.</p>`
      }
    ],
    worked: [
      {
        title: 'A Part 3 answer about the future',
        source: `<div class="prompt-box"><p><b>Examiner:</b> How do you think people will travel in the future?</p></div>`,
        walk: [
          { q: 'Answer', a: 'I think that in twenty years most of us will be using self-driving cars, so we\'ll be working or relaxing while we travel. Long-distance travel will probably still involve planes, but they\'ll be running on cleaner fuels.', steps: ['<i>will be using / working / running</i> describe situations in progress in the future.', '<i>will probably still involve</i> – future simple with hedging for a general prediction.', 'The mix of forms gives range without forcing any structure.'] }
        ],
        lesson: 'Use the future continuous to picture life in progress at a future time; use will for general predictions.'
      }
    ],
    dos: ['Use will be + -ing for actions in progress at a future time.', 'Use it to picture future life in Part 3.', 'Use Will you be…? for polite questions.'],
    donts: ['Don\'t use it with stative verbs.', 'Don\'t write "will being".', 'Don\'t use it after when/if – use the present continuous there.'],
    careful: [{ title: 'Time clauses', body: '<p>After <i>when, while, if</i>, use the present continuous instead.</p>', example: '✗ <i>While I will be studying, …</i> → ✓ <i>While I <b>am studying</b>, …</i>' }],
    faq: [{ q: 'Is "I will be working" different from "I will work"?', a: '<p><i>I\'ll be working</i> pictures the activity in progress at a time; <i>I\'ll work</i> states a future fact or decision. <i>This time tomorrow I\'ll be working</i> is natural; <i>This time tomorrow I\'ll work</i> is not.</p>' }],
    exercises: {
      id: 'ch-grammar-future-continuous',
      title: 'Chapter exercises: future continuous',
      groups: [
        {
          kind: 'choice', instructions: 'Choose the correct option, <b>A or B</b>.',
          questions: [
            { n: 1, q: 'This time next week, I ___ on a beach.', opts: ['will lie', 'will be lying'], a: 'B', x: 'In progress at a future moment.' },
            { n: 2, q: 'I ___ the answer tomorrow.', opts: ['will know', 'will be knowing'], a: 'A', x: '<i>Know</i> is stative.' },
            { n: 3, q: 'Don\'t phone between 2 and 4 – I ___ my exam.', opts: ['will be taking', 'will take'], a: 'A', x: 'An activity in progress during that future period.' },
            { n: 4, q: '___ you be using the meeting room this afternoon?', opts: ['Will', 'Are'], a: 'A', x: 'Polite question about plans: <i>Will you be using…?</i>' }
          ]
        },
        {
          kind: 'gap', instructions: 'Write the future continuous form. <b>NO MORE THAN THREE WORDS</b>.',
          questions: [
            { n: 5, q: 'In 2050, more people {} (live) in cities.', a: 'will be living', x: '<i>will be</i> + -ing.' },
            { n: 6, q: 'Please don\'t call at nine – I {} (drive) home then.', a: 'will be driving|\'ll be driving', x: 'An activity in progress at a future moment: <i>will be driving</i> (or <i>I\'ll be driving</i>).' }
          ]
        }
      ]
    },
    checklist: ['I use will be + -ing for actions in progress in the future.', 'I keep stative verbs in the simple form.', 'I use present forms after when/while/if.'],
    summary: ['The future continuous describes actions in progress at a future time.', 'It also describes expected future events and asks politely about plans.', 'Form: will be + -ing.', 'Useful in Speaking to picture future life.'],
    references: [tenseRefs.future, tenseRefs.continuous, ...grammarBooks, tenseRefs.overview]
  },

  /* ===================================================================== FUTURE PERFECT */
  'future-perfect': {
    intro: `
<p>The <b>future perfect</b> (<i>will have + past participle</i>) describes an action that will be <b>completed before a particular time in the future</b>: <i>By the end of the year, I <b>will have finished</b> my degree. By 2050, the world's population <b>will have reached</b> nearly ten billion.</i> It looks back from a point in the future, just as the past perfect looks back from a point in the past.</p>
<p>For IELTS Academic Task 1, this tense is the natural partner of <i>by</i> + a future date when a chart includes projections (<i>By 2040, coal <b>will have been</b> almost entirely <b>replaced</b></i>). In Speaking it is useful for talking about goals (<i>By the time I'm thirty, I hope I <b>will have started</b> my own business</i>).</p>`,
    facts: [
      ['Positive', 'will have + past participle'],
      ['Negative', 'won\'t have + past participle'],
      ['Question', 'Will + subject + have + past participle?'],
      ['Main use', 'Completed before a future time'],
      ['Signal words', 'by (2030), by the time, before, by the end of'],
      ['Task 1', 'By 2040, X will have doubled']
    ],
    method: [
      { title: 'Form it with will have + past participle', body: '<p><i>Have</i> never changes to <i>has</i> after <i>will</i>.</p>', example: '✗ <i>It will has finished.</i> → ✓ <i>It <b>will have finished</b>.</i>' },
      { title: 'Use it with by + a future time', body: '<p><i>By</i> = at or before. The action will be complete at that point.</p>', example: '<i><b>By</b> 2035, the city <b>will have built</b> three new metro lines.</i>' },
      { title: 'Use "by the time" + present simple', body: '<p>In the time clause, use the present simple; the future perfect goes in the main clause.</p>', example: '<i><b>By the time</b> you <b>arrive</b>, we <b>will have eaten</b>.</i>' },
      { title: 'Use the passive for projected changes in Task 1', body: '<p><i>will have been</i> + past participle, when the agent is unknown or unimportant.</p>', example: '<i>By 2030, most petrol stations <b>will have been converted</b> to charging points.</i>' },
      { title: 'Hedge projections', body: '<p>For forecasts, combine with <i>expected/likely/projected</i>: <i>Sales <b>are expected to have doubled</b> by 2030</i>, or add <i>probably</i>: <i>will <b>probably</b> have doubled</i>.</p>' }
    ],
    sections: [
      {
        id: 'ielts-use', title: 'In IELTS',
        html: `
<ul>
<li><b>Task 1 projections:</b> <i>By 2050, the proportion of people over 65 <b>will have risen</b> to 25%.</i></li>
<li><b>Speaking Part 1:</b> <i>By the end of next year, I<b>'ll have finished</b> my training.</i></li>
<li><b>Task 2:</b> <i>Unless action is taken, many species <b>will have disappeared</b> by the end of the century.</i></li>
</ul>`
      },
      {
        id: 'band-impact', title: 'How it affects your band',
        html: `<p>A correctly used future perfect is a strong range signal in Task 1 reports with projections, where most candidates use only <i>will</i>. Errors such as <i>will has</i> or a missing participle cancel the benefit, so practise the form until it is automatic.</p>`
      }
    ],
    worked: [
      {
        title: 'Projections with the future perfect',
        source: `<div class="prompt-box"><p>Bar chart: Internet users in Region Y (millions) – 2020: 150; 2025 (projected): 220; 2030 (projected): 300.</p></div>`,
        walk: [
          { q: 'Sentence 1', a: 'The number of users is projected to rise to 220 million by 2025.', steps: ['A hedged projection with <i>is projected to</i>.'] },
          { q: 'Sentence 2', a: 'By 2030, it will have doubled compared with 2020, reaching 300 million.', steps: ['<i>By</i> + future date: future perfect for the completed doubling.', 'A participle phrase (<i>reaching…</i>) adds the figure.'] }
        ],
        lesson: '"By + future date" signals the future perfect; vary it with hedged forms so your projections do not all sound certain.'
      }
    ],
    dos: ['Use will have + past participle.', 'Use it with by + future time.', 'Use the present simple after by the time.', 'Use the passive for projected changes.'],
    donts: ['Don\'t write "will has".', 'Don\'t use will after by the time.', 'Don\'t use the future perfect without a future reference point.'],
    careful: [{ title: 'Irregular participles', body: '<p>The participle must be correct: <i>will have risen / fallen / grown / become</i> – not <i>rose / fell / grew / became</i>.</p>' }],
    faq: [{ q: 'Is "by 2030 the figure will double" wrong?', a: '<p>It is possible, but <i>will have doubled</i> is more precise: the doubling will be complete by that date.</p>' }],
    exercises: {
      id: 'ch-grammar-future-perfect',
      title: 'Chapter exercises: future perfect',
      groups: [
        {
          kind: 'choice', instructions: 'Choose the correct option, <b>A or B</b>.',
          questions: [
            { n: 1, q: 'By 2030, the company ___ 500 new stores.', opts: ['will have opened', 'will opened'], a: 'A', x: '<i>will have</i> + past participle.' },
            { n: 2, q: 'By the time the guests ___, we will have cleaned the house.', opts: ['will arrive', 'arrive'], a: 'B', x: 'After <i>by the time</i>, present simple.' },
            { n: 3, q: 'By 2040, coal ___ by renewable energy.', opts: ['will have been replaced', 'will have replaced'], a: 'A', x: 'Passive: coal is replaced (by renewables).' },
            { n: 4, q: 'By next summer, the population ___ to 2 million.', opts: ['will have risen', 'will have rose'], a: 'A', x: 'Past participle of <i>rise</i>: <i>risen</i>.' }
          ]
        },
        {
          kind: 'gap', instructions: 'Write the future perfect form. <b>NO MORE THAN THREE WORDS</b>.',
          questions: [
            { n: 5, q: 'By 2050, the average temperature {} (increase) by 2°C.', a: 'will have increased', x: '<i>will have</i> + <i>increased</i>.' },
            { n: 6, q: 'I hope I {} (finish) my master\'s by the time I\'m 25.', a: 'will have finished', x: 'Completed before a future time.' }
          ]
        }
      ]
    },
    checklist: ['I use will have + past participle with by + future time.', 'I use the present simple after by the time.', 'I can describe Task 1 projections with the future perfect.'],
    summary: ['The future perfect describes actions completed before a future time.', 'Form: will have + past participle (never will has).', 'By + future date, by the time + present simple.', 'Very useful for Task 1 projections.'],
    references: [tenseRefs.future, tenseRefs.perfect, ...grammarBooks, tenseRefs.overview]
  },

  /* ===================================================================== FUTURE PERFECT CONTINUOUS */
  'future-perfect-continuous': {
    intro: `
<p>The <b>future perfect continuous</b> (<i>will have been + -ing</i>) describes how long an activity will have continued by a certain time in the future: <i>By June, I <b>will have been studying</b> English for ten years. Next month, she <b>will have been working</b> at the hospital for two decades.</i></p>
<p>It is the least frequent of the twelve tenses, and you will rarely need it in IELTS. It is worth knowing so that you recognise it in Reading and Listening, and so that you can use it naturally in Speaking when you talk about milestones in your life.</p>`,
    facts: [
      ['Positive', 'will have been + -ing'],
      ['Negative', 'won\'t have been + -ing'],
      ['Question', 'Will + subject + have been + -ing?'],
      ['Main use', 'Duration of an activity up to a future point'],
      ['Signal words', 'by (June), for (ten years), by the time'],
      ['Frequency', 'Rare – mainly in speech about milestones']
    ],
    method: [
      { title: 'Form it with will have been + -ing', body: '<p>The same for all subjects.</p>', example: '<i>By December, they <b>will have been living</b> here for five years.</i>' },
      { title: 'Use it with for + duration and by + future time', body: '<p>Both the length of time and the future reference point are usually stated.</p>' },
      { title: 'Choose the future perfect simple for results', body: '<p><i>By June I will have written 40 essays</i> (result) vs <i>By June I will have been writing essays for six months</i> (duration).</p>' },
      { title: 'Keep stative verbs simple', body: '<p>✗ <i>will have been knowing</i> → ✓ <i>will have known</i>.</p>' }
    ],
    sections: [
      {
        id: 'ielts-use', title: 'In IELTS',
        html: `<p>Speaking Part 1 or 2: <i>Next year I<b>'ll have been playing</b> the piano for fifteen years, so I'd like to take a diploma.</i> In Writing, this tense is almost never needed; the future perfect simple or a hedged future form is clearer.</p>`
      },
      {
        id: 'band-impact', title: 'How it affects your band',
        html: `<p>No band requires this tense. Its value is recognition (in Reading and Listening) and the occasional natural use in Speaking. Accuracy in the common tenses matters far more.</p>`
      }
    ],
    worked: [
      {
        title: 'Simple or continuous?',
        questions: '<ol><li>By 2030, she (will have been teaching / will have taught) for thirty years.</li><li>By the end of the course, we (will have been reading / will have read) twelve novels.</li></ol>',
        walk: [
          { q: '1.', a: 'will have been teaching', steps: ['Duration of an activity (<i>for thirty years</i>) up to a future point.'] },
          { q: '2.', a: 'will have read', steps: ['A number of completed results (<i>twelve novels</i>).'] }
        ],
        lesson: 'Duration → continuous; results → simple – the same rule as in the present and past perfect.'
      }
    ],
    dos: ['Use will have been + -ing for duration up to a future time.', 'Use it naturally for milestones in Speaking.'],
    donts: ['Don\'t use it for numbers of completed things.', 'Don\'t use it with stative verbs.', 'Don\'t force it into Writing.'],
    careful: [{ title: 'Long verb phrase, one auxiliary change', body: '<p>Only <i>will</i> can be negated or moved for questions: <i>Will you have been working there for ten years by then?</i></p>' }],
    faq: [{ q: 'Do I need this tense for Band 7?', a: '<p>No. Band 7 needs accurate control of a variety of structures; this tense is optional.</p>' }],
    exercises: {
      id: 'ch-grammar-future-perfect-continuous',
      title: 'Chapter exercises: future perfect continuous',
      groups: [
        {
          kind: 'choice', instructions: 'Choose the correct option, <b>A or B</b>.',
          questions: [
            { n: 1, q: 'In May, I ___ here for exactly a year.', opts: ['will have been working', 'will work'], a: 'A', x: 'Duration up to a future point.' },
            { n: 2, q: 'By Friday, the team ___ all 200 forms.', opts: ['will have been processing', 'will have processed'], a: 'B', x: 'A number of completed results: future perfect simple.' },
            { n: 3, q: 'By next year, we ___ each other for a decade.', opts: ['will have known', 'will have been knowing'], a: 'A', x: '<i>Know</i> is stative.' }
          ]
        }
      ]
    },
    checklist: ['I can form will have been + -ing.', 'I know when the simple form is better.', 'I recognise this tense in Reading and Listening.'],
    summary: ['The future perfect continuous shows duration up to a future point.', 'It is rare; use it naturally in Speaking about milestones.', 'Results → future perfect simple.'],
    references: [tenseRefs.future, tenseRefs.perfect, ...grammarBooks, tenseRefs.overview]
  }
};

import type { Chapter } from '@/lib/types';
import { grammarBooks } from './grammar-pos-a';
import { tenseRefs } from './grammar-tense-a';

/* Grammar masterclass, Part B (tenses) – the four past tenses */

export const tenseChaptersB: Record<string, Chapter> = {
  /* ===================================================================== PAST SIMPLE */
  'past-simple': {
    intro: `
<p>The <b>past simple</b> describes actions, events and situations that happened and <b>finished</b> at a definite time in the past: <i>The bridge <b>opened</b> in 1998. Unemployment <b>fell</b> sharply in 2004. When I was a child, we <b>lived</b> by the sea.</i> It is the main tense of storytelling and of history, and in IELTS it is the tense of most Academic Task 1 reports (which usually describe past data), of the stories you tell in Speaking Part 2, and of historical examples in Task 2.</p>
<p>Its form is straightforward for regular verbs (<i>-ed</i>) but irregular for many of the most common verbs (<i>rise – rose, fall – fell, grow – grew, become – became</i>), and its negatives and questions use <i>did</i> + the base form – which means the past form must <b>not</b> be repeated (<i>didn't went</i> ✗). The other important decision is when to use the past simple instead of the present perfect: whenever a finished time is stated or understood.</p>`,
    facts: [
      ['Positive', 'Regular: -ed · Irregular: learn (rose, fell, grew)'],
      ['Negative', 'did not (didn\'t) + base'],
      ['Question', 'Did + subject + base?'],
      ['Main uses', 'Finished actions at a past time; sequences; past habits and states'],
      ['Signal words', 'yesterday, ago, last year, in 2010, when I was…, then'],
      ['IELTS', 'Task 1 past data, Speaking Part 2 stories, Task 2 examples']
    ],
    method: [
      { title: 'Form the positive: -ed or the irregular past form', body: '<p>Spelling: add <i>-d</i> after <i>e</i> (<i>decline → declined</i>); consonant + <i>y</i> → <i>-ied</i> (<i>study → studied</i>, but <i>play → played</i>); double the final consonant after a single stressed vowel (<i>drop → dropped, plan → planned, prefer → preferred</i>). Irregular verbs: see the table in <a href="/grammar/verbs">Verbs</a>.</p>', example: '<i>Sales <b>dropped</b> in 2009 and then <b>rose</b> steadily.</i>' },
      { title: 'Form negatives and questions with did + the base form', body: '<p><i>Did</i> carries the past tense, so the main verb returns to the base form. With <i>be</i>, use <i>was/were</i> without <i>did</i>.</p>', example: '✗ <i>Prices didn\'t rose.</i> → ✓ <i>Prices <b>didn\'t rise</b>.</i> · ✗ <i>Did you went?</i> → ✓ <i><b>Did</b> you <b>go</b>?</i> · ✓ <i>It <b>wasn\'t</b> easy.</i>' },
      { title: 'Use it whenever the time is finished', body: '<p>A stated past time (<i>in 2010, last week, ago, when I was young</i>) or a clearly finished situation requires the past simple.</p>', example: '<i>I <b>moved</b> to Cairo three years ago.</i> (not <i>have moved … ago</i>)' },
      { title: 'Use it to tell events in sequence', body: '<p>A series of past simple verbs tells events in the order they happened. Use sequencing words: <i>first, then, after that, later, finally</i>.</p>', example: '<i>We <b>arrived</b> at noon, <b>checked</b> in and then <b>walked</b> down to the harbour.</i>' },
      { title: 'Use it for past habits and states – or used to / would', body: '<p>Past habits: past simple, <i>used to</i> + base, or <i>would</i> + base (actions only). Past states: past simple or <i>used to</i> (not <i>would</i>).</p>', example: '<i>As a child, I <b>walked</b> / <b>used to walk</b> / <b>would walk</b> to school. · I <b>used to live</b> in Kyiv.</i> (✗ <i>I would live</i> for a state)' },
      { title: 'In Task 1, use it for all past data', body: '<p>If the chart covers 1990–2010, every description of the data is in the past simple (or past perfect for "by" a past time). Only the introduction uses the present: <i>The graph <b>shows</b>…</i></p>', example: '<i>In 1990, coal <b>accounted</b> for 60% of electricity generation, but this figure <b>fell</b> to 35% by 2010.</i>' }
    ],
    sections: [
      {
        id: 'forms', title: 'Forms and pronunciation',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th></th><th>Regular</th><th>Irregular</th><th>be</th></tr>
<tr><td>Positive</td><td>They <b>travelled</b>.</td><td>They <b>went</b>.</td><td>It <b>was</b> / They <b>were</b> late.</td></tr>
<tr><td>Negative</td><td>They <b>didn't travel</b>.</td><td>They <b>didn't go</b>.</td><td>It <b>wasn't</b> / They <b>weren't</b> late.</td></tr>
<tr><td>Question</td><td><b>Did</b> they <b>travel</b>?</td><td><b>Did</b> they <b>go</b>?</td><td><b>Was</b> it / <b>Were</b> they late?</td></tr>
<tr><td>Passive</td><td colspan="3">The museum <b>was built</b> in 1890. · The roads <b>were widened</b>.</td></tr>
</table></div>
<p><b>Pronunciation of -ed</b> (Speaking): /t/ after voiceless sounds (<i>worked, stopped, increased</i>); /d/ after voiced sounds (<i>played, lived, rained</i>); /ɪd/ after /t/ and /d/ (<i>wanted, decided, started</i>). Adding an extra syllable (<i>work-ed</i>) or dropping the ending entirely are both common pronunciation errors.</p>`
      },
      {
        id: 'ielts-use', title: 'The past simple in IELTS',
        html: `
<ul>
<li><b>Task 1:</b> the main tense for data from the past and for "before" maps: <i>In 1995, the village <b>had</b> only one road, but by 2015 a bypass <b>had been built</b>.</i></li>
<li><b>Speaking Part 2:</b> most cue cards ask you to describe a past event, person or experience: <i>It <b>happened</b> about two years ago. I <b>was</b> on holiday with my family…</i></li>
<li><b>Task 2:</b> historical examples: <i>When smoking <b>was banned</b> in restaurants, many people <b>predicted</b> that businesses would suffer, but this <b>did not happen</b>.</i></li>
<li><b>General Training letters:</b> what happened (complaints, apologies): <i>I <b>bought</b> a laptop from your store on 3 May, but it <b>stopped</b> working after a week.</i></li>
</ul>`
      },
      {
        id: 'band-impact', title: 'How the past simple affects your band',
        html: `<p>In Task 1 and Part 2, the past simple can appear in most sentences, so irregular-form errors (<i>rised, growed, falled</i>) and <i>did + past</i> errors are repeated and noticeable. Accurate past forms, combined with the past perfect and past continuous where they fit, give the range of past tenses that examiners expect at Band 7.</p>`
      }
    ],
    worked: [
      {
        title: 'Correcting past forms in a Task 1 paragraph',
        source: `<div class="prompt-box"><p>"In 2000, the number of international students in the UK was 220,000. This figure rised steadily over the next five years and reach 300,000 in 2005. However, it didn't increased in 2006, and in 2007 it falled slightly. The government has introduced new visa rules in 2008."</p></div>`,
        walk: [
          { q: '"rised"', a: 'rose', steps: ['<i>Rise</i> is irregular: <i>rise – rose – risen</i>.'] },
          { q: '"reach"', a: 'reached', steps: ['The second verb in the sequence also needs the past form.'] },
          { q: '"didn\'t increased"', a: 'didn\'t increase', steps: ['After <i>did</i>, use the base form.'] },
          { q: '"falled"', a: 'fell', steps: ['<i>Fall</i> is irregular: <i>fall – fell – fallen</i>.'] },
          { q: '"has introduced … in 2008"', a: 'introduced', steps: ['A finished time (<i>in 2008</i>) requires the past simple, not the present perfect.'] }
        ],
        lesson: 'In past-data reports, check every verb for three things: the correct irregular form, the base form after did, and no present perfect with a finished year.'
      }
    ],
    dos: ['Learn the irregular past forms of the verbs of change.', 'Use did + base for negatives and questions.', 'Use the past simple for every past data point in Task 1.', 'Use the past simple for the story in Speaking Part 2.', 'Pronounce -ed correctly (/t/, /d/, /ɪd/).'],
    donts: ['Don\'t write didn\'t went, did you saw, didn\'t rose.', 'Don\'t use the present perfect with a finished time.', 'Don\'t write rised, growed, falled, choosed.', 'Don\'t use would for past states: not "I would live in Paris".'],
    careful: [
      { title: 'used to vs be used to', body: '<p><i>used to</i> + base = a past habit or state that no longer exists; <i>be/get used to</i> + noun or -ing = be/become accustomed to.</p>', example: '<i>I <b>used to live</b> in a village.</i> · <i>I\'m <b>used to living</b> in a big city now.</i>' },
      { title: 'Past form with present meaning', body: '<p>The past simple form is also used for unreal present situations after <i>if</i> and <i>wish</i>: <i>If I <b>had</b> more time, I would travel.</i> This is not past time – see <a href="/grammar/conditionals">Conditionals</a>.</p>' }
    ],
    faq: [{ q: 'Should the whole of Task 1 be in the past?', a: '<p>The introduction and overview usually describe what the chart <i>shows</i> (present), while the data itself is reported in the past if it refers to the past: <i>The chart <b>shows</b> how many people <b>used</b> public transport between 2000 and 2020.</i></p>' }],
    exercises: {
      id: 'ch-grammar-past-simple',
      title: 'Chapter exercises: past simple',
      groups: [
        {
          kind: 'gap', title: 'Part A: past forms', instructions: 'Write the past simple form. <b>NO MORE THAN THREE WORDS</b>.',
          questions: [
            { n: 1, q: 'House prices {} (rise) by 8% in 2021.', a: 'rose', x: '<i>rise – rose – risen</i>.' },
            { n: 2, q: 'The number of visitors {} (fall) after the airport closed.', a: 'fell', x: '<i>fall – fell – fallen</i>.' },
            { n: 3, q: 'The city {} (plan) a new metro line in 2015.', a: 'planned', x: 'Double the <i>n</i>: <i>planned</i>.' },
            { n: 4, q: 'Investment {} (not / grow) in 2010.', a: 'didn\'t grow|did not grow', x: '<i>did not / didn\'t</i> + base form – never <i>didn\'t grew</i>.' },
            { n: 5, q: 'The first university in the country {} (found) in 1850. (passive)', a: 'was founded', x: '<i>found – founded</i> (= establish); passive: <i>was founded</i>.' }
          ]
        },
        {
          kind: 'choice', title: 'Part B: past simple or present perfect?', instructions: 'Choose the correct option, <b>A or B</b>.',
          questions: [
            { n: 6, q: 'I ___ my first English lesson when I was seven.', opts: ['have had', 'had'], a: 'B', x: '<i>When I was seven</i> is a finished time.' },
            { n: 7, q: 'Unemployment ___ to 4% in 2019.', opts: ['fell', 'has fallen'], a: 'A', x: 'A finished year: past simple.' },
            { n: 8, q: 'When I was a teenager, I ___ play football every weekend.', opts: ['would', 'was used to'], a: 'A', x: 'A repeated past action: <i>would</i> or <i>used to</i>. <i>Was used to</i> means "was accustomed to".' }
          ]
        }
      ]
    },
    checklist: ['I know the past forms of rise, fall, grow, become, bring, lead, choose.', 'I use did + base in negatives and questions.', 'I use the past simple with every finished time.', 'I can tell a Part 2 story in the past simple.'],
    summary: ['The past simple describes finished actions at a past time.', 'Negatives and questions: did + base.', 'It is the main tense of past-data reports and Part 2 stories.', 'Finished time → past simple, never present perfect.'],
    references: [tenseRefs.past, tenseRefs.talkPast, ...grammarBooks, tenseRefs.overview]
  },

  /* ===================================================================== PAST CONTINUOUS */
  'past-continuous': {
    intro: `
<p>The <b>past continuous</b> (<i>was / were + -ing</i>) describes an action that was <b>in progress</b> at a particular moment or during a period in the past: <i>At eight o'clock I <b>was having</b> breakfast. In the 1990s, the economy <b>was growing</b> rapidly.</i> It rarely appears alone. Its most typical job is to set the <b>background</b> for a story, against which shorter events (in the past simple) happen: <i>I <b>was walking</b> home when it <b>started</b> to rain.</i></p>
<p>That makes it the storyteller's tense – exactly what you need in Speaking Part 2, where you must describe a past event in an organised, vivid way. Mixing the past continuous (background) with the past simple (events) is one of the easiest ways to show grammatical range in a natural story.</p>`,
    facts: [
      ['Positive', 'was / were + -ing'],
      ['Negative', 'wasn\'t / weren\'t + -ing'],
      ['Question', 'Was / Were + subject + -ing?'],
      ['Main uses', 'In progress at a past time; background; interrupted action; parallel actions'],
      ['Signal words', 'while, when, at that moment, all day, at 8 p.m. yesterday'],
      ['Partner tense', 'Past simple for the short events']
    ],
    method: [
      { title: 'Form it with was / were + -ing', body: '<p><i>Was</i> with <i>I, he, she, it</i> and singular nouns; <i>were</i> with <i>you, we, they</i> and plurals.</p>', example: '<i>The children <b>were playing</b> outside. · It <b>wasn\'t raining</b>.</i>' },
      { title: 'Use it for something in progress at a past moment', body: '<p>The action had started before that moment and continued after it.</p>', example: '<i>At midnight, I <b>was</b> still <b>studying</b>.</i>' },
      { title: 'Use it with the past simple for an interrupted action', body: '<p>The longer action (past continuous) is interrupted by a shorter one (past simple). <i>When</i> usually introduces the short action; <i>while</i> usually introduces the long one.</p>', example: '<i>I <b>was cooking</b> <b>when</b> the phone <b>rang</b>. · <b>While</b> I <b>was cooking</b>, the phone <b>rang</b>.</i>' },
      { title: 'Use it for two actions in progress at the same time', body: '<p>With <i>while</i>, both verbs can be continuous.</p>', example: '<i><b>While</b> my brother <b>was driving</b>, I <b>was reading</b> the map.</i>' },
      { title: 'Use it to set the scene at the start of a story', body: '<p>Describe the situation in the past continuous, then move the story forward with the past simple.</p>', example: '<i>The sun <b>was shining</b> and people <b>were sitting</b> outside the cafés. Suddenly, a man <b>ran</b> into the square…</i>' }
    ],
    sections: [
      {
        id: 'contrast', title: 'Past continuous or past simple?',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Past continuous</th><th>Past simple</th></tr>
<tr><td>In progress, unfinished at that moment: <i>I <b>was reading</b> a novel on the train.</i></td><td>Complete: <i>I <b>read</b> a novel on the train.</i> (I finished it)</td></tr>
<tr><td>Background: <i>It <b>was getting</b> dark.</i></td><td>Main events: <i>We <b>lit</b> a fire.</i></td></tr>
<tr><td>Interrupted: <i>When I <b>arrived</b>, they <b>were having</b> dinner.</i> (dinner had started)</td><td>Sequence: <i>When I <b>arrived</b>, they <b>had</b> dinner.</i> (dinner started after I arrived)</td></tr>
</table></div>
<p>Stative verbs stay in the past simple: <i>I <b>knew</b> the answer</i> (✗ <i>was knowing</i>).</p>`
      },
      {
        id: 'ielts-use', title: 'The past continuous in IELTS',
        html: `
<ul>
<li><b>Speaking Part 2:</b> scene-setting and interrupted events: <i>I <b>was waiting</b> for a bus when I <b>noticed</b> an old friend across the road.</i></li>
<li><b>General Training letters:</b> explaining circumstances: <i>I <b>was walking</b> past your shop when I <b>slipped</b> on the wet floor.</i></li>
<li><b>Writing Task 1:</b> rarely needed. A trend over a past period is normally described in the past simple (<i>The figure <b>rose</b> steadily throughout the 1990s</i>).</li>
</ul>`
      },
      {
        id: 'band-impact', title: 'How it affects your band',
        html: `<p>A Part 2 story told entirely in the past simple is accurate but flat. Adding background in the past continuous (and earlier events in the past perfect) shows control of several tenses in a natural context – one of the clearest ways to demonstrate grammatical range in Speaking.</p>`
      }
    ],
    worked: [
      {
        title: 'Building a Part 2 story with two past tenses',
        source: `<div class="prompt-box"><p>Cue card: <i>Describe a time when you got lost.</i> Notes: holiday in Lisbon · evening · looking for restaurant · phone battery died · asked a shop owner · he walked me there.</p></div>`,
        walk: [
          { q: 'Set the scene (past continuous)', a: 'It was getting dark and I was walking through the old town, looking for a restaurant.', steps: ['Background actions in progress: <i>was getting, was walking</i>.'] },
          { q: 'The interrupting event (past simple)', a: 'While I was checking the map on my phone, the battery suddenly died.', steps: ['<i>While</i> + long action, past simple for the short event.'] },
          { q: 'The sequence of events (past simple)', a: 'I went into a small shop and asked the owner for directions. He closed the shop and walked me there himself.', steps: ['Events in order: past simple.'] }
        ],
        lesson: 'Past continuous for the scene and the long actions; past simple for what happened. Two tenses, one natural story.'
      }
    ],
    dos: ['Use was/were + -ing.', 'Use it for background and interrupted actions.', 'Combine it with the past simple in stories.', 'Use while for long actions, when for short ones.'],
    donts: ['Don\'t use it with stative verbs: not "I was knowing".', 'Don\'t use it for a sequence of completed actions.', 'Don\'t confuse was and were.'],
    careful: [{ title: '"When" changes the order of events', body: '<p><i>When I arrived, she was leaving</i> (she was in the process of leaving) ≠ <i>When I arrived, she left</i> (she left after I arrived).</p>' }],
    faq: [{ q: 'Can I use the past continuous for a repeated past habit?', a: '<p>Usually no – use the past simple, <i>used to</i> or <i>would</i>. With <i>always</i>, the past continuous can express an irritating repeated habit: <i>He <b>was always forgetting</b> his keys.</i></p>' }],
    exercises: {
      id: 'ch-grammar-past-continuous',
      title: 'Chapter exercises: past continuous',
      groups: [
        {
          kind: 'choice', instructions: 'Choose the correct option, <b>A or B</b>.',
          questions: [
            { n: 1, q: 'I ___ dinner when the lights went out.', opts: ['was cooking', 'cooked'], a: 'A', x: 'A longer action interrupted by a shorter one.' },
            { n: 2, q: 'While we ___ in the park, it started to snow.', opts: ['walked', 'were walking'], a: 'B', x: '<i>While</i> + the long action in progress.' },
            { n: 3, q: 'She ___ the answer immediately.', opts: ['knew', 'was knowing'], a: 'A', x: '<i>Know</i> is stative.' },
            { n: 4, q: 'When the manager arrived, the staff ___ the meeting, so she joined them.', opts: ['were starting', 'started'], a: 'A', x: 'The meeting was already in progress when she arrived.' },
            { n: 5, q: 'At 10 p.m. last night, the children ___.', opts: ['slept', 'were sleeping'], a: 'B', x: 'In progress at a past moment.' }
          ]
        },
        {
          kind: 'gap', instructions: 'Write the past continuous form. <b>NO MORE THAN TWO WORDS</b>.',
          questions: [
            { n: 6, q: 'The sun {} (shine) when we arrived at the beach.', a: 'was shining', x: 'Singular subject: <i>was</i> + <i>shining</i>.' },
            { n: 7, q: 'Many people {} (wait) outside the station.', a: 'were waiting', x: 'Plural subject: <i>were</i>.' },
            { n: 8, q: 'I {} (not / listen) when the teacher explained it. (Use the contraction.)', a: 'wasn\'t listening', x: 'Negative: <i>wasn\'t</i> + -ing.' }
          ]
        }
      ]
    },
    checklist: ['I use was/were + -ing.', 'I use it for background and interrupted actions in stories.', 'I keep stative verbs in the past simple.'],
    summary: ['The past continuous describes actions in progress in the past.', 'With the past simple, it shows interrupted actions and sets the scene.', 'While + long action; when + short action.', 'Essential for natural storytelling in Speaking Part 2.'],
    references: [tenseRefs.continuous, tenseRefs.talkPast, ...grammarBooks, tenseRefs.overview]
  },

  /* ===================================================================== PAST PERFECT */
  'past-perfect': {
    intro: `
<p>The <b>past perfect</b> (<i>had + past participle</i>) describes the <b>earlier past</b>: something that happened before another past event or before a particular time in the past. <i>When I arrived at the station, the train <b>had</b> already <b>left</b></i> – first the train left, then I arrived. It acts like the present perfect moved back in time: it connects an earlier past to a later past.</p>
<p>In IELTS it has a specific and very valuable use in Academic Task 1: with <i>by</i> + a past date, it describes the level a figure had reached at that point (<i>By 2010, the number of users <b>had risen</b> to 2 billion</i>). It is also essential in reported speech (<i>He said he <b>had finished</b></i>), third conditionals (<i>If I <b>had known</b>…</i>), regrets (<i>I wish I <b>had studied</b> harder</i>) and Speaking Part 2 stories (<i>I <b>had</b> never <b>seen</b> snow before that trip</i>). The main danger is overuse: when the order of events is already clear, the past simple is enough.</p>`,
    facts: [
      ['Positive', 'had + past participle'],
      ['Negative', 'hadn\'t + past participle'],
      ['Question', 'Had + subject + past participle?'],
      ['Main uses', 'Earlier past; "by" + past time; reported speech; third conditional; regrets'],
      ['Signal words', 'by (2010), already, before, after, never … before, by the time'],
      ['Overuse warning', 'Not needed when the order is already clear']
    ],
    method: [
      { title: 'Form it with had + past participle', body: '<p><i>Had</i> is the same for every subject.</p>', example: '<i>The project <b>had</b> already <b>started</b>. · They <b>hadn\'t expected</b> such a response.</i>' },
      { title: 'Use it for the earlier of two past events', body: '<p>When you are already talking about the past and need to go further back, use the past perfect for the earlier event.</p>', example: '<i>When the firefighters <b>arrived</b>, the building <b>had</b> already <b>collapsed</b>.</i>' },
      { title: 'In Task 1, use it with "by" + a past date', body: '<p><i>By</i> + a time means "at or before that time". The past perfect describes the situation that had been reached.</p>', example: '<i>Car ownership <b>had doubled by</b> 2000. · <b>By</b> the end of the period, coal <b>had been overtaken</b> by gas.</i>' },
      { title: 'Use it after "It was the first time…" and with "never … before"', body: '<p>Experience up to a past moment.</p>', example: '<i>It was the first time I <b>had flown</b> alone. · I <b>had</b> never <b>seen</b> the sea before.</i>' },
      { title: 'Use it in reported speech, third conditionals and wishes about the past', body: '<p>These structures are taught in their own chapters, but all depend on the past perfect.</p>', example: '<i>She said she <b>had applied</b>. · If they <b>had invested</b> earlier, … · I wish I <b>had taken</b> the job.</i>' },
      { title: 'Do not overuse it', body: '<p>If the order is already clear – with <i>before, after</i> or simply by telling events in sequence – the past simple is correct and more natural. Using the past perfect for every past event is an error.</p>', example: '<i>After I <b>finished</b> my degree, I <b>moved</b> to Seoul.</i> (no past perfect needed)' }
    ],
    sections: [
      {
        id: 'contrast', title: 'Past perfect or past simple?',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Sentence</th><th>Meaning</th></tr>
<tr><td><i>When I got home, my sister <b>cooked</b> dinner.</i></td><td>I arrived, then she cooked.</td></tr>
<tr><td><i>When I got home, my sister <b>had cooked</b> dinner.</i></td><td>She cooked first; dinner was ready when I arrived.</td></tr>
<tr><td><i>When I got home, my sister <b>was cooking</b> dinner.</i></td><td>She was in the middle of cooking.</td></tr>
</table></div>
<h4>Task 1: in 2010 or by 2010?</h4>
<p><i>In 2010, the figure <b>was</b> 40%.</i> (the level in that year) · <i><b>By</b> 2010, the figure <b>had risen</b> to 40%.</i> (the result of a rise that happened before or up to 2010).</p>`
      },
      {
        id: 'ielts-use', title: 'The past perfect in IELTS',
        html: `
<ul>
<li><b>Task 1:</b> <i>By 2015, the proportion of households with broadband <b>had reached</b> 80%.</i> · <i>By the second map, the forest <b>had been cleared</b>.</i></li>
<li><b>Speaking Part 2:</b> background before the story: <i>I <b>had been</b> to many concerts before, but this one was different.</i></li>
<li><b>Speaking Part 3 and Task 2:</b> hypothetical past: <i>If governments <b>had acted</b> sooner, the damage would have been smaller.</i></li>
<li><b>General Training letters:</b> <i>I <b>had</b> already <b>paid</b> the deposit when I learned that the course was cancelled.</i></li>
</ul>`
      },
      {
        id: 'band-impact', title: 'How it affects your band',
        html: `<p>Correct use of <i>by + past perfect</i> in Task 1 is a clear sign of grammatical range in a task where most candidates use only the past simple. Overuse, however, produces errors that are just as noticeable. Use it where the meaning needs it.</p>`
      }
    ],
    worked: [
      {
        title: 'Past perfect in a Task 1 map description',
        source: `<div class="prompt-box"><p>Two maps of a town: 1990 – farmland north of the river, a small school, no bridge. 2020 – housing estate where the farmland was, school extended, a new bridge.</p></div>`,
        walk: [
          { q: 'Overview', a: 'Over the 30-year period, the town expanded considerably, with farmland giving way to housing.', steps: ['The overview summarises in the past simple / participle phrase.'] },
          { q: 'Change by 2020', a: 'By 2020, the farmland north of the river had been replaced by a housing estate.', steps: ['<i>By</i> + date + past perfect passive: a change completed before that time.'] },
          { q: 'Further changes', a: 'The school had been extended, and a bridge had been built across the river.', steps: ['Passive because the agent (the council, builders) is unknown and unimportant.', 'Vary with past simple too: <i>A new bridge connected the two halves of the town.</i>'] }
        ],
        lesson: '"By + past date + past perfect (passive)" is the natural structure for describing completed changes in past maps and charts.'
      }
    ],
    dos: ['Use had + past participle for the earlier past.', 'Use by + past date + past perfect in Task 1.', 'Use it after "It was the first time…".', 'Use it in reported speech, third conditionals and wishes about the past.'],
    donts: ['Don\'t use it when the order is already clear.', 'Don\'t use it for every past event in a story.', 'Don\'t write "had went" – the participle of go is gone.'],
    careful: [{ title: '"By" vs "until"', body: '<p><i>By 2010</i> = no later than 2010 (a result). <i>Until 2010</i> = continuing up to 2010.</p>', example: '<i>By 2010, sales had doubled.</i> · <i>Sales rose until 2010, and then fell.</i>' }],
    faq: [{ q: 'Must I use the past perfect with "before" and "after"?', a: '<p>No. The conjunction already shows the order, so the past simple is fine: <i>After she <b>left</b>, I <b>called</b> him.</i> The past perfect is possible to emphasise completion.</p>' }],
    exercises: {
      id: 'ch-grammar-past-perfect',
      title: 'Chapter exercises: past perfect',
      groups: [
        {
          kind: 'choice', instructions: 'Choose the correct option, <b>A or B</b>.',
          questions: [
            { n: 1, q: 'By 2005, the population ___ to 3 million.', opts: ['grew', 'had grown'], a: 'B', x: '<i>By</i> + past date: past perfect.' },
            { n: 2, q: 'When we reached the cinema, the film ___, so we missed the beginning.', opts: ['had started', 'started'], a: 'A', x: 'The film started before we arrived.' },
            { n: 3, q: 'It was the first time I ___ a presentation in English.', opts: ['gave', 'had given'], a: 'B', x: '<i>It was the first time</i> + past perfect.' },
            { n: 4, q: 'After she ___ university, she moved abroad.', opts: ['finished', 'was finishing'], a: 'A', x: 'With <i>after</i>, the order is clear: past simple is correct (past perfect would also be possible).' },
            { n: 5, q: 'If I ___ about the offer, I would have applied.', opts: ['knew', 'had known'], a: 'B', x: 'Third conditional: <i>if</i> + past perfect.' }
          ]
        },
        {
          kind: 'gap', instructions: 'Write the past perfect form. <b>NO MORE THAN THREE WORDS</b>.',
          questions: [
            { n: 6, q: 'By 1990, the factory {} (close). (passive: write "had been …")', a: 'had been closed', x: 'Past perfect passive: <i>had been</i> + participle.' },
            { n: 7, q: 'I {} (never / see) such a beautiful view before.', a: 'had never seen', x: '<i>had never</i> + participle.' },
            { n: 8, q: 'She told me she {} (lose) her ticket.', a: 'had lost', x: 'Reported speech: the earlier past.' }
          ]
        }
      ]
    },
    checklist: ['I use the past perfect for the earlier past.', 'I use by + past date + past perfect in Task 1.', 'I do not overuse it when the order is clear.'],
    summary: ['The past perfect describes the earlier past.', 'In Task 1: "By 2010, X had risen to…".', 'Also: It was the first time…, reported speech, third conditional, wish.', 'Do not use it when before/after already show the order.'],
    references: [tenseRefs.perfect, tenseRefs.talkPast, ...grammarBooks, tenseRefs.overview]
  },

  /* ===================================================================== PAST PERFECT CONTINUOUS */
  'past-perfect-continuous': {
    intro: `
<p>The <b>past perfect continuous</b> (<i>had been + -ing</i>) describes an activity that had been continuing <b>up to a moment in the past</b>, with the focus on its duration or on its effects at that moment. <i>When the bus finally came, we <b>had been waiting</b> for an hour. She was exhausted because she <b>had been working</b> all night.</i></p>
<p>It is the past version of the present perfect continuous. You will not need it often, but in Speaking Part 2 stories and in General Training letters of complaint it allows you to say precisely how long something had been going on – and using it accurately is a clear sign of grammatical range.</p>`,
    facts: [
      ['Positive', 'had been + -ing'],
      ['Negative', 'hadn\'t been + -ing'],
      ['Question', 'Had + subject + been + -ing?'],
      ['Main uses', 'Duration up to a past moment; cause of a past situation'],
      ['Signal words', 'for, since, how long, all day, before, when'],
      ['Contrast', 'Past perfect simple for results and numbers']
    ],
    method: [
      { title: 'Form it with had been + -ing', body: '<p>Same form for every subject.</p>', example: '<i>They <b>had been living</b> abroad for years. · I <b>hadn\'t been sleeping</b> well.</i>' },
      { title: 'Use it for how long an activity had continued up to a past moment', body: '<p>Usually with <i>for</i> or <i>since</i>, and a past simple clause that marks the moment.</p>', example: '<i>I <b>had been studying</b> for three hours when my friend called.</i>' },
      { title: 'Use it to explain a past situation by an earlier activity', body: '<p>The activity had visible effects at the later past moment.</p>', example: '<i>The streets were flooded because it <b>had been raining</b> all week.</i>' },
      { title: 'Choose the simple form for results and numbers', body: '<p><i>She had written three chapters</i> (result) vs <i>She had been writing all morning</i> (activity).</p>' },
      { title: 'Keep stative verbs in the past perfect simple', body: '<p>✗ <i>I had been knowing him for years</i> → ✓ <i>I <b>had known</b> him for years.</i></p>' }
    ],
    sections: [
      {
        id: 'ielts-use', title: 'In IELTS',
        html: `
<ul>
<li><b>Speaking Part 2:</b> <i>We <b>had been planning</b> the trip for months, so we were really disappointed when the flight was cancelled.</i></li>
<li><b>General Training complaint letters:</b> <i>By the time a member of staff arrived, I <b>had been waiting</b> for over 40 minutes.</i></li>
<li><b>Task 2:</b> occasionally: <i>Experts <b>had been warning</b> about the risks for years before the crisis.</i></li>
</ul>`
      },
      {
        id: 'band-impact', title: 'How it affects your band',
        html: `<p>This tense is not required for any band, but used correctly and naturally it adds to the "range" of structures in Speaking and in letters. Do not force it in where the past perfect simple or past simple is clearer.</p>`
      }
    ],
    worked: [
      {
        title: 'Choosing between the two past perfect forms',
        questions: '<ol><li>When I met her, she (had been learning / had learned) Spanish for two years.</li><li>By the end of the trip, we (had been visiting / had visited) six countries.</li><li>His eyes were red because he (had been crying / had cried).</li></ol>',
        walk: [
          { q: '1.', a: 'had been learning', steps: ['Duration of an activity up to a past moment (<i>for two years</i>).'] },
          { q: '2.', a: 'had visited', steps: ['A number of results (<i>six countries</i>): simple.'] },
          { q: '3.', a: 'had been crying', steps: ['A past situation (red eyes) explained by an earlier activity.'] }
        ],
        lesson: 'How long / ongoing activity → continuous; how many / completed → simple.'
      }
    ],
    dos: ['Use had been + -ing.', 'Use it with for/since up to a past moment.', 'Use it to explain past effects of an earlier activity.'],
    donts: ['Don\'t use it with stative verbs.', 'Don\'t use it for a number of completed actions.', 'Don\'t force it into Task 1 data descriptions.'],
    careful: [{ title: 'Keep the reference point clear', body: '<p>This tense needs a later past moment (a past simple clause or a time phrase). Without one, it sounds incomplete.</p>', example: '✗ <i>I had been working there for five years.</i> (when?) → ✓ <i>I had been working there for five years <b>when the company closed</b>.</i>' }],
    faq: [{ q: 'Is this tense common?', a: '<p>It is one of the less frequent tenses, mostly found in narratives. Learn it well enough to use it in stories and to recognise it in Reading and Listening.</p>' }],
    exercises: {
      id: 'ch-grammar-past-perfect-continuous',
      title: 'Chapter exercises: past perfect continuous',
      groups: [
        {
          kind: 'choice', instructions: 'Choose the correct option, <b>A or B</b>.',
          questions: [
            { n: 1, q: 'The ground was wet because it ___ all night.', opts: ['had been raining', 'has been raining'], a: 'A', x: 'A past situation explained by an earlier activity.' },
            { n: 2, q: 'We ___ for two hours when the train finally arrived.', opts: ['had been waiting', 'were waiting'], a: 'A', x: 'Duration up to a past moment.' },
            { n: 3, q: 'By 2020, she ___ three novels.', opts: ['had been writing', 'had written'], a: 'B', x: 'A number of completed results: simple.' },
            { n: 4, q: 'I ___ him for ten years before we started working together.', opts: ['had known', 'had been knowing'], a: 'A', x: '<i>Know</i> is stative.' }
          ]
        },
        {
          kind: 'gap', instructions: 'Write the past perfect continuous form. <b>NO MORE THAN THREE WORDS</b>.',
          questions: [
            { n: 5, q: 'She was tired because she {} (work) all day.', a: 'had been working', x: '<i>had been</i> + -ing.' },
            { n: 6, q: 'They {} (plan) the event for months before it was cancelled.', a: 'had been planning', x: 'Duration up to the past moment of cancellation.' }
          ]
        }
      ]
    },
    checklist: ['I use had been + -ing for duration up to a past moment.', 'I choose the simple form for results.', 'I always give the later past reference point.'],
    summary: ['The past perfect continuous shows duration up to a past moment.', 'It explains past situations by earlier activities.', 'Not with stative verbs; not for numbers of results.'],
    references: [tenseRefs.perfect, tenseRefs.continuous, ...grammarBooks, tenseRefs.overview]
  }
};

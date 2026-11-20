import type { Chapter, Reference } from '@/lib/types';
import { grammarBooks } from './grammar-pos-a';

/* Grammar masterclass, Part B (tenses) – the four present tenses */

const BC = 'https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/';
export const tenseRefs = {
  present: { title: 'British Council LearnEnglish: Present tense', url: BC + 'present-tense' } as Reference,
  talkPresent: { title: 'British Council LearnEnglish: Talking about the present', url: BC + 'talking-about-present' } as Reference,
  past: { title: 'British Council LearnEnglish: Past tense', url: BC + 'past-tense' } as Reference,
  talkPast: { title: 'British Council LearnEnglish: Talking about the past', url: BC + 'talking-about-past' } as Reference,
  perfect: { title: 'British Council LearnEnglish: Perfect aspect', url: BC + 'perfect-aspect' } as Reference,
  continuous: { title: 'British Council LearnEnglish: Continuous aspect', url: BC + 'continuous-aspect' } as Reference,
  future: { title: 'British Council LearnEnglish: Talking about the future', url: BC + 'talking-about-future' } as Reference,
  overview: { title: 'In this book: Tenses for Writing and Speaking', url: '/grammar/tenses', note: 'How to choose between tenses in each IELTS task.' } as Reference
};

export const tenseChaptersA: Record<string, Chapter> = {
  /* ===================================================================== PRESENT SIMPLE */
  'present-simple': {
    intro: `
<p>The <b>present simple</b> is the most frequently used tense in English, and it is the default tense of IELTS Writing Task 2, of process diagrams in Task 1, and of Speaking Part 1. Despite its name, it is not mainly about "now". It expresses things that are <b>generally</b> true: habits and routines (<i>I <b>cycle</b> to work</i>), permanent situations (<i>She <b>lives</b> in Lagos</i>), facts and general truths (<i>Water <b>boils</b> at 100°C</i>), states (<i>Most people <b>believe</b>…</i>), and fixed timetables (<i>The exam <b>starts</b> at nine</i>).</p>
<p>The form is simple – the base verb, with <i>-s</i> in the third person singular – but this tense produces one of the most common and most noticeable errors in IELTS: the missing <i>-s</i> (<i>he work, the government spend, technology make</i>). Because it appears in almost every sentence of a Task 2 essay, a candidate who drops the <i>-s</i> may make the same error twenty times in one script. The second common problem is the choice between the present simple and the present continuous, which this chapter explains in detail.</p>`,
    facts: [
      ['Positive', 'I/you/we/they work · he/she/it works'],
      ['Negative', 'do not (don\'t) / does not (doesn\'t) + base'],
      ['Question', 'Do / Does + subject + base?'],
      ['Main uses', 'Habits, facts, states, permanent situations, processes, timetables'],
      ['Signal words', 'usually, often, always, every day, generally, nowadays'],
      ['Commonest error', 'Missing third-person -s']
    ],
    method: [
      {
        title: 'Form the positive: base verb, or base + -s after he, she, it and singular nouns',
        body: '<p>Add <i>-s</i> whenever the subject is third person singular – including uncountable nouns (<i>pollution causes</i>), singular noun phrases (<i>the use of phones distracts</i>), and <i>everyone, nobody, each</i>. Spelling: <i>-es</i> after <i>s, sh, ch, x, o</i> (<i>teaches, goes</i>); consonant + <i>y</i> → <i>-ies</i> (<i>studies, carries</i>, but <i>plays</i>); <i>have → has</i>.</p>',
        example: '<i>Technology <b>changes</b> quickly. · Everyone <b>needs</b> sleep. · The government <b>spends</b> billions on health.</i>'
      },
      {
        title: 'Form negatives and questions with do / does + the base form',
        body: '<p>The <i>-s</i> moves to <i>does</i>, and the main verb returns to the base form. With <i>be</i>, do not use <i>do</i>: <i>She isn\'t…, Is he…?</i></p>',
        example: '✗ <i>He doesn\'t works.</i> → ✓ <i>He <b>doesn\'t work</b>.</i> · ✗ <i>Does she likes…?</i> → ✓ <i><b>Does</b> she <b>like</b>…?</i> · ✗ <i>Do you are a student?</i> → ✓ <i><b>Are</b> you a student?</i>'
      },
      {
        title: 'Use it for what is generally or permanently true',
        body: '<p>Ask: is this a habit, a permanent situation, a fact, a state or an opinion? If so, use the present simple. This covers most sentences in a Task 2 argument.</p>',
        example: '<i>Children who <b>read</b> regularly <b>develop</b> a wider vocabulary.</i> · <i>I <b>believe</b> this policy <b>is</b> unfair.</i>'
      },
      {
        title: 'Use it for stative verbs, even when you mean "now"',
        body: '<p>Verbs of thinking, feeling, possession and being (<i>know, believe, understand, want, need, prefer, like, own, belong, contain, consist, seem, mean</i>) normally stay in the present simple, even for a situation that is true at this moment.</p>',
        example: '✗ <i>I am knowing the answer.</i> → ✓ <i>I <b>know</b> the answer.</i> · ✓ <i>The report <b>contains</b> three sections.</i>'
      },
      {
        title: 'Use it to describe processes and current maps in Task 1',
        body: '<p>A process happens in the same way each time, so it is described in the present simple – usually the passive (<i>The leaves <b>are picked</b>, then they <b>are dried</b></i>). A map of the present is described with <i>there is / there are</i> and present simple verbs.</p>',
        example: '<i>First, the clay <b>is mixed</b> with water. The mixture <b>is</b> then <b>poured</b> into moulds.</i>'
      },
      {
        title: 'Use it for timetables and after time and condition words',
        body: '<p>For fixed, scheduled events, the present simple can refer to the future (<i>The course <b>begins</b> on 3 March</i>). After <i>when, if, as soon as, before, after, until, unless</i>, it replaces <i>will</i>: <i>When the bridge <b>opens</b>, journey times will fall.</i></p>'
      }
    ],
    sections: [
      {
        id: 'forms', title: 'Forms at a glance',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th></th><th>I / you / we / they</th><th>he / she / it</th></tr>
<tr><td>Positive</td><td>They <b>work</b> from home.</td><td>She <b>works</b> from home.</td></tr>
<tr><td>Negative</td><td>They <b>don't work</b> from home.</td><td>She <b>doesn't work</b> from home.</td></tr>
<tr><td>Question</td><td><b>Do</b> they <b>work</b> from home?</td><td><b>Does</b> she <b>work</b> from home?</td></tr>
<tr><td>Short answer</td><td>Yes, they <b>do</b>. / No, they <b>don't</b>.</td><td>Yes, she <b>does</b>. / No, she <b>doesn't</b>.</td></tr>
<tr><td>Passive</td><td colspan="2">The products <b>are tested</b>. · The product <b>is tested</b>.</td></tr>
</table></div>
<p><b>Pronunciation of -s</b> (important for Speaking): /s/ after voiceless sounds (<i>works, helps</i>), /z/ after voiced sounds (<i>lives, plays</i>), /ɪz/ after hissing sounds (<i>teaches, uses, changes</i>). Dropping the <i>-s</i> in speech is as noticeable as dropping it in writing.</p>`
      },
      {
        id: 'uses', title: 'The uses of the present simple',
        html: `
<ol>
<li><b>Habits and routines:</b> <i>I usually <b>get up</b> at seven. Most students <b>check</b> their phones before breakfast.</i></li>
<li><b>Permanent situations:</b> <i>My family <b>lives</b> near the coast. He <b>works</b> for an engineering company.</i></li>
<li><b>Facts and general truths:</b> <i>The Earth <b>orbits</b> the Sun. Regular exercise <b>reduces</b> the risk of heart disease.</i></li>
<li><b>States, opinions and feelings:</b> <i>I <b>think</b> that… Many people <b>prefer</b>… This <b>depends</b> on…</i></li>
<li><b>Processes and instructions:</b> <i>The water <b>is filtered</b> and then <b>stored</b>.</i></li>
<li><b>Timetables and schedules (future):</b> <i>The train <b>leaves</b> at 6.15.</i></li>
<li><b>Future in time and condition clauses:</b> <i>If the government <b>raises</b> taxes, people will spend less.</i></li>
<li><b>Describing a chart or text:</b> <i>The graph <b>shows</b>… The writer <b>argues</b> that…</i></li>
</ol>`
      },
      {
        id: 'contrast', title: 'Present simple or present continuous?',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Present simple</th><th>Present continuous</th></tr>
<tr><td>Permanent: <i>I <b>live</b> in Hanoi.</i></td><td>Temporary: <i>I<b>'m living</b> with my aunt until I find a flat.</i></td></tr>
<tr><td>Habit: <i>She <b>walks</b> to work.</i></td><td>Now / around now: <i>She<b>'s walking</b> to work today because her car is broken.</i></td></tr>
<tr><td>General fact: <i>More people <b>use</b> phones than computers.</i></td><td>Changing trend: <i>More and more people <b>are using</b> phones to shop.</i></td></tr>
<tr><td>State verb: <i>I <b>understand</b>.</i></td><td>(not normally used with state verbs)</td></tr>
</table></div>
<p>In Speaking Part 1, answers about your life naturally mix the two: <i>I <b>work</b> as an accountant, but at the moment I<b>'m doing</b> a part-time master's degree.</i></p>`
      },
      {
        id: 'ielts-use', title: 'The present simple in IELTS',
        html: `
<ul>
<li><b>Task 2:</b> most of your argument – opinions, reasons, general truths and their consequences: <i>Public transport <b>reduces</b> congestion because it <b>carries</b> more people per vehicle.</i></li>
<li><b>Task 1 (Academic):</b> the introduction (<i>The chart <b>shows</b>…</i>), process diagrams (present simple passive), and maps of the present.</li>
<li><b>General Training letters:</b> facts about your situation (<i>I <b>live</b> in flat 4B and I <b>work</b> night shifts…</i>).</li>
<li><b>Speaking Part 1:</b> routines, preferences and permanent facts (<i>I <b>usually</b> spend my weekends…; I <b>prefer</b>…</i>).</li>
<li><b>Speaking Part 3:</b> general statements about society (<i>Young people <b>tend</b> to…</i>).</li>
</ul>`
      },
      {
        id: 'band-impact', title: 'How the present simple affects your band',
        html: `<p>Because it is so frequent, accuracy in the present simple has a large effect on how many of your sentences are error-free – a key measure in Grammatical Range and Accuracy from Band 6 to Band 8. A script with a missing <i>-s</i> in every third sentence cannot be described as having "frequent error-free sentences" (Band 7). Conversely, a candidate who simply eliminates this one error often sees the clearest gain in grammar of any single change.</p>`
      }
    ],
    worked: [
      {
        title: 'Finding present simple errors in a Task 2 paragraph',
        source: `<div class="prompt-box"><p>"Nowadays, technology play an important role in education. A student who use online resources can learn faster, and the internet give access to information that libraries doesn't have. However, not every teacher are confident with technology, and many school doesn't provide training."</p></div>`,
        questions: '<p>Correct the verb errors.</p>',
        walk: [
          { q: '"technology play"', a: 'technology plays', steps: ['<i>Technology</i> is a singular (uncountable) subject → <i>plays</i>.'] },
          { q: '"A student who use"', a: 'who uses', steps: ['In a relative clause, the verb agrees with the noun that <i>who</i> refers to: <i>a student</i> (singular) → <i>uses</i>.'] },
          { q: '"the internet give"', a: 'the internet gives', steps: ['Singular subject → <i>-s</i>.'] },
          { q: '"libraries doesn\'t have"', a: 'libraries don\'t have', steps: ['Plural subject → <i>don\'t</i>.'] },
          { q: '"not every teacher are"', a: 'not every teacher is', steps: ['<i>Every</i> + singular noun + singular verb.'] },
          { q: '"many school doesn\'t provide"', a: 'many schools don\'t provide', steps: ['<i>Many</i> + plural noun, so <i>schools</i> and a plural verb: <i>don\'t</i>.'] }
        ],
        lesson: 'Every one of these errors is agreement: find the head of each subject and decide whether it is singular or plural before choosing -s, does/do, is/are.'
      }
    ],
    dos: [
      'Add -s after he, she, it, singular nouns, uncountable nouns and everyone/nobody.',
      'Use do/does + base form for negatives and questions.',
      'Use the present simple for opinions and general truths in Task 2.',
      'Use the present simple passive for process diagrams.',
      'Use the present simple after when/if/until for future meaning.',
      'Pronounce the -s clearly in Speaking.'
    ],
    donts: [
      'Don\'t write "he don\'t", "does she likes" or "doesn\'t works".',
      'Don\'t use do with be: not "Do you are…?"',
      'Don\'t use stative verbs in the continuous: not "I am knowing".',
      'Don\'t use will after when/if in time clauses.',
      'Don\'t forget agreement in relative clauses: a student who uses.'
    ],
    careful: [
      { title: 'Long subjects hide the head noun', body: '<p>The verb agrees with the head noun of the subject, not with the noun closest to it.</p>', example: '<i>The number of people who own cars <b>is</b> rising.</i> · <i>The benefits of exercise <b>are</b> well known.</i>' },
      { title: '"People" and "police" are plural', body: '<p>They take a plural verb with no <i>-s</i>.</p>', example: '✗ <i>People thinks…</i> → ✓ <i>People <b>think</b>…</i>' },
      { title: '"News", "economics" and "mathematics" are singular', body: '<p>They end in <i>-s</i> but take a singular verb.</p>', example: '<i>The news <b>is</b> worrying. Economics <b>is</b> a popular subject.</i>' }
    ],
    faq: [
      { q: 'Can I use the present simple in Speaking Part 2?', a: '<p>Yes, for the parts of your answer that describe what is generally true (<i>He <b>is</b> a very patient person; the place <b>has</b> a beautiful view</i>). The story itself is usually told in the past.</p>' },
      { q: 'Is "I am agree" correct?', a: '<p>No. <i>Agree</i> is a verb: <i>I agree</i>, <i>I don\'t agree</i>. (Compare <i>I am in agreement</i>, which is correct but formal.)</p>' }
    ],
    exercises: {
      id: 'ch-grammar-present-simple',
      title: 'Chapter exercises: present simple',
      groups: [
        {
          kind: 'gap', title: 'Part A: correct form', instructions: 'Write the correct present simple form of the verb in brackets. <b>NO MORE THAN THREE WORDS</b>.', maxWords: 3,
          questions: [
            { n: 1, q: 'Air pollution {} (cause) serious health problems.', a: 'causes', x: 'Uncountable subject → <i>-s</i>.' },
            { n: 2, q: 'My brother {} (study) engineering in Germany.', a: 'studies', x: 'Consonant + <i>y</i> → <i>-ies</i>.' },
            { n: 3, q: 'Most teenagers {} (not / read) newspapers.', a: 'don\'t read|do not read', x: 'Plural subject: <i>do not / don\'t</i> + base.' },
            { n: 4, q: '{} (your city / have) a good metro system? (Write the first word only.)', a: 'Does', x: 'Singular subject (<i>your city</i>): <i>Does</i> … <i>have</i>?' },
            { n: 5, q: 'Everyone {} (want) a well-paid job.', a: 'wants', x: '<i>Everyone</i> takes a singular verb.' },
            { n: 6, q: 'Once the beans are dry, they {} (be) roasted.', a: 'are', x: 'Process description: present simple passive, plural subject.' }
          ]
        },
        {
          kind: 'choice', title: 'Part B: present simple or present continuous?', instructions: 'Choose the correct option, <b>A or B</b>.',
          questions: [
            { n: 7, q: 'I ___ the importance of exercise.', opts: ['understand', 'am understanding'], a: 'A', x: '<i>Understand</i> is a stative verb.' },
            { n: 8, q: 'Water ___ at 0°C.', opts: ['is freezing', 'freezes'], a: 'B', x: 'A scientific fact: present simple.' },
            { n: 9, q: 'She usually ___ by bus, but this week she is cycling.', opts: ['travels', 'is travelling'], a: 'A', x: 'A habit (<i>usually</i>): present simple; the temporary change uses the continuous.' },
            { n: 10, q: 'When the new hospital ___, waiting times will fall.', opts: ['will open', 'opens'], a: 'B', x: 'After <i>when</i> with future meaning: present simple.' }
          ]
        }
      ]
    },
    checklist: ['I never drop the third-person -s.', 'I form negatives and questions with do/does + base.', 'I keep stative verbs in the simple form.', 'I use the present simple passive for processes.', 'I use the present simple after when/if for the future.'],
    summary: ['The present simple expresses habits, permanent situations, facts, states and timetables.', 'Third person singular adds -s; negatives and questions use do/does + base.', 'It is the main tense of Task 2, process diagrams and Speaking Part 1.', 'Stative verbs stay in the simple form even for "now".', 'It replaces will after when, if, until and similar words.'],
    references: [tenseRefs.present, tenseRefs.talkPresent, ...grammarBooks, tenseRefs.overview]
  },

  /* ===================================================================== PRESENT CONTINUOUS */
  'present-continuous': {
    intro: `
<p>The <b>present continuous</b> (also called the present progressive) describes something <b>in progress</b>: happening at this moment (<i>It<b>'s raining</b></i>), around the present period (<i>I<b>'m reading</b> a book about economics</i>), or temporary (<i>She<b>'s staying</b> with friends this month</i>). It is also the natural way to describe <b>changing situations</b> – <i>More people <b>are working</b> from home</i> – which makes it very useful in Writing Task 2 and Speaking Part 3, where many questions are about how society is changing. And it is one of the main ways English talks about <b>future arrangements</b>: <i>I<b>'m meeting</b> my tutor on Friday</i>.</p>
<p>The key to using it well is contrast with the present simple: the present continuous is temporary, in progress or changing; the present simple is permanent, habitual or generally true. The other key is knowing which verbs do <i>not</i> normally take continuous forms.</p>`,
    facts: [
      ['Positive', 'am / is / are + -ing'],
      ['Negative', 'am not / isn\'t / aren\'t + -ing'],
      ['Question', 'Am / Is / Are + subject + -ing?'],
      ['Main uses', 'Now, around now, temporary, changing trends, future arrangements'],
      ['Signal words', 'now, at the moment, currently, these days, increasingly'],
      ['Not used with', 'Most stative verbs (know, believe, own, contain…)']
    ],
    method: [
      {
        title: 'Form it with am / is / are + the -ing form',
        body: '<p>Spelling of <i>-ing</i>: drop a final silent <i>e</i> (<i>make → making</i>, but <i>see → seeing</i>); double a final consonant after a single stressed vowel (<i>run → running, begin → beginning</i>, but <i>visit → visiting</i>); <i>-ie → -ying</i> (<i>lie → lying, die → dying</i>).</p>',
        example: '<i>Prices <b>are rising</b>. · The city <b>is planning</b> a new tram line. · I<b>\'m not working</b> this week.</i>'
      },
      {
        title: 'Use it for actions in progress now or around now',
        body: '<p>The action has started and has not finished – at this moment, or during the present period, even if not at the exact moment of speaking.</p>',
        example: '<i>I<b>\'m preparing</b> for IELTS at the moment.</i> (not necessarily at this second)'
      },
      {
        title: 'Use it for temporary situations',
        body: '<p>Compare <i>I live in Rome</i> (permanent) with <i>I<b>\'m living</b> in Rome for six months</i> (temporary). In Speaking Part 1 this distinction lets you describe your current situation precisely.</p>'
      },
      {
        title: 'Use it for changing and developing situations',
        body: '<p>With verbs of change (<i>become, grow, increase, rise, fall, change, improve, get</i>) and adverbs such as <i>increasingly, more and more, steadily</i>, the present continuous describes a trend that is happening now.</p>',
        example: '<i>Cities <b>are becoming</b> more crowded. · Online learning <b>is</b> increasingly <b>replacing</b> traditional classes.</i>'
      },
      {
        title: 'Use it for personal future arrangements',
        body: '<p>When something has been arranged (a time and place agreed), the present continuous refers to the future: <i>I<b>\'m flying</b> to Toronto next week.</i> In General Training letters: <i>I<b>\'m arriving</b> on the 14th.</i></p>'
      },
      {
        title: 'Do not use it with stative verbs',
        body: '<p>Verbs of mental states, feelings, possession and senses usually stay simple: <i>know, believe, think</i> (= have an opinion), <i>understand, remember, want, need, prefer, like, love, hate, own, belong, contain, consist, depend, seem, mean, see, hear</i>. Some have a dynamic meaning that can be continuous: <i>I\'m thinking about it</i> (considering), <i>She\'s having lunch</i> (eating), <i>We\'re seeing the doctor at 3</i> (meeting).</p>',
        example: '✗ <i>Many people are believing that…</i> → ✓ <i>Many people <b>believe</b> that…</i>'
      }
    ],
    sections: [
      {
        id: 'forms', title: 'Forms at a glance',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th></th><th>Example</th></tr>
<tr><td>Positive</td><td>I<b>'m</b> / She<b>'s</b> / They<b>'re</b> <b>studying</b>.</td></tr>
<tr><td>Negative</td><td>I<b>'m not</b> / She <b>isn't</b> / They <b>aren't</b> <b>studying</b>.</td></tr>
<tr><td>Question</td><td><b>Are</b> you <b>studying</b>? <b>Is</b> she <b>studying</b>? What <b>are</b> they <b>studying</b>?</td></tr>
<tr><td>Passive</td><td>A new bridge <b>is being built</b>.</td></tr>
</table></div>`
      },
      {
        id: 'ielts-use', title: 'The present continuous in IELTS',
        html: `
<ul>
<li><b>Task 2 introductions and arguments about change:</b> <i>An increasing number of people <b>are choosing</b> to work remotely.</i></li>
<li><b>General Training letters:</b> the standard opening <i>I <b>am writing</b> to…</i>; future arrangements (<i>I am visiting your city next month</i>); current problems (<i>The heating <b>is not working</b></i>).</li>
<li><b>Speaking Part 1:</b> current, temporary activities: <i>At the moment I<b>'m working</b> part-time while I<b>'m studying</b>.</i></li>
<li><b>Speaking Part 3:</b> trends: <i>Young people <b>are spending</b> less time outdoors.</i></li>
<li><b>Task 1:</b> rarely used for charts of past data; but useful for a map or diagram showing work in progress (<i>a new road <b>is being built</b></i>) and for projections described as current plans.</li>
</ul>`
      },
      {
        id: 'band-impact', title: 'How the present continuous affects your band',
        html: `<p>Using the present continuous for trends and the present simple for general truths shows that you control the meaning of tense, not just its form – part of "range" in Grammatical Range and Accuracy. The most common errors are continuous forms with stative verbs (<i>I am knowing, it is containing</i>) and missing <i>be</i> (<i>prices rising</i>), both of which are noticeable.</p>`
      }
    ],
    worked: [
      {
        title: 'Choosing between simple and continuous in a Part 1 answer',
        source: `<div class="prompt-box"><p><b>Examiner:</b> Do you work or are you a student?</p><p><b>Candidate:</b> "I (1) work / am working as a nurse in a large hospital. This month I (2) work / am working nights, because a colleague is on holiday, so I (3) sleep / am sleeping during the day. I (4) like / am liking my job, but the hospital (5) gets / is getting busier every year."</p></div>`,
        walk: [
          { q: '1.', a: 'work', steps: ['A permanent situation – the speaker\'s job – takes the present simple.'] },
          { q: '2.', a: 'am working', steps: ['<i>This month</i> marks a temporary arrangement: present continuous.'] },
          { q: '3.', a: 'am sleeping', steps: ['Still part of the temporary situation.'] },
          { q: '4.', a: 'like', steps: ['<i>Like</i> is stative: present simple.'] },
          { q: '5.', a: 'is getting', steps: ['A changing situation (<i>busier every year</i>): present continuous.'] }
        ],
        lesson: 'Permanent and generally true → simple; temporary, in progress or changing → continuous; stative verbs → simple.'
      }
    ],
    dos: ['Use am/is/are + -ing.', 'Use it for temporary situations and trends.', 'Use it for future arrangements.', 'Use "I am writing to…" to open a GT letter.', 'Keep stative verbs simple.'],
    donts: ['Don\'t leave out be: not "Prices rising".', 'Don\'t use it for permanent facts: not "Water is boiling at 100°C".', 'Don\'t use it with know, believe, understand, own, contain.', 'Don\'t misspell -ing forms (makeing, runing).'],
    careful: [
      { title: '"Think": opinion or activity?', body: '<p><i>I think</i> (= my opinion) is stative; <i>I\'m thinking</i> (= considering) is dynamic.</p>', example: '<i>I <b>think</b> it\'s a good idea.</i> · <i>I<b>\'m thinking</b> of changing jobs.</i>' },
      { title: 'Overusing the continuous in Task 2', body: '<p>Some learners use the continuous for all present meaning. General arguments are in the simple: <i>Exercise <b>improves</b> health</i>, not <i>is improving</i> – unless you mean a change that is happening now.</p>' }
    ],
    faq: [
      { q: 'Can I say "I am living in…"?', a: '<p>Yes, if the situation is temporary (<i>I\'m living with my parents until I find a job</i>). For a permanent home, use <i>I live in…</i>.</p>' },
      { q: 'Is "I\'m loving it" correct?', a: '<p>It is used informally (and in advertising) for enthusiastic, temporary enjoyment, but in the exam <i>I really enjoy it</i> or <i>I love it</i> is safer.</p>' }
    ],
    exercises: {
      id: 'ch-grammar-present-continuous',
      title: 'Chapter exercises: present continuous',
      groups: [
        {
          kind: 'choice', instructions: 'Choose the correct option, <b>A or B</b>.',
          questions: [
            { n: 1, q: 'More and more companies ___ four-day working weeks.', opts: ['introduce', 'are introducing'], a: 'B', x: 'A developing trend (<i>more and more</i>): present continuous.' },
            { n: 2, q: 'I ___ the answer to that question.', opts: ['don\'t know', 'am not knowing'], a: 'A', x: '<i>Know</i> is stative.' },
            { n: 3, q: 'I ___ to complain about the service I received.', opts: ['write', 'am writing'], a: 'B', x: 'The standard letter opening: <i>I am writing to…</i>' },
            { n: 4, q: 'We ___ the director at 10 a.m. tomorrow – it\'s all arranged.', opts: ['are meeting', 'meet'], a: 'A', x: 'A personal future arrangement: present continuous.' },
            { n: 5, q: 'The book ___ twelve chapters.', opts: ['is containing', 'contains'], a: 'B', x: '<i>Contain</i> is stative.' },
            { n: 6, q: 'My cousin ___ with us until she finds a flat.', opts: ['stays', 'is staying'], a: 'B', x: 'A temporary situation.' }
          ]
        },
        {
          kind: 'gap', instructions: 'Write the present continuous form. <b>NO MORE THAN THREE WORDS</b>.',
          questions: [
            { n: 7, q: 'Global temperatures {} (rise) faster than expected.', a: 'are rising', x: 'Plural subject: <i>are</i> + <i>rising</i> (drop the <i>e</i>).' },
            { n: 8, q: 'A new stadium {} (build) near the river. (passive)', a: 'is being built', x: 'Present continuous passive: <i>is being</i> + past participle.' },
            { n: 9, q: 'She {} (not / work) at the moment.', a: 'isn\'t working|is not working', x: 'Negative: <i>is not / isn\'t</i> + -ing.' },
            { n: 10, q: 'Traffic in the capital {} (get) worse every year.', a: 'is getting', x: 'A changing situation; <i>get → getting</i> (double <i>t</i>).' }
          ]
        }
      ]
    },
    checklist: ['I use am/is/are + -ing with correct spelling.', 'I use it for temporary situations, trends and arrangements.', 'I keep stative verbs simple.', 'I open GT letters with I am writing to…'],
    summary: ['The present continuous describes actions in progress, temporary situations and changes.', 'It also expresses future arrangements.', 'Form: am/is/are + -ing.', 'Stative verbs are not normally continuous.', 'Simple = permanent/general; continuous = temporary/changing.'],
    references: [tenseRefs.continuous, tenseRefs.talkPresent, ...grammarBooks, tenseRefs.overview]
  },

  /* ===================================================================== PRESENT PERFECT */
  'present-perfect': {
    intro: `
<p>The <b>present perfect</b> (<i>have / has + past participle</i>) connects the past to the present. It is used for past actions whose result or relevance continues now (<i>The government <b>has introduced</b> a new law</i> – the law exists now), for experiences up to now (<i>I<b>'ve</b> never <b>been</b> to Japan</i>), and for situations that started in the past and continue now (<i>She<b>'s lived</b> here for ten years</i>).</p>
<p>This tense is one of the hardest for learners because many languages do not have it, or use it differently. The crucial rule for English is this: the present perfect is <b>not</b> used with a finished past time (<i>yesterday, in 2010, last year, three years ago</i>). If you name a finished time, use the past simple. In IELTS, the present perfect is the natural tense for describing how things have changed up to now in Task 2 (<i>Technology <b>has transformed</b> the way we work</i>), for talking about experiences in Speaking, and for describing data that runs up to the present.</p>`,
    facts: [
      ['Positive', 'have / has + past participle'],
      ['Negative', 'haven\'t / hasn\'t + past participle'],
      ['Question', 'Have / Has + subject + past participle?'],
      ['Main uses', 'Present result, experience, unfinished period, situation up to now'],
      ['Signal words', 'for, since, already, yet, just, ever, never, so far, recently'],
      ['Not with', 'Finished times: yesterday, in 2010, ago, last year']
    ],
    method: [
      {
        title: 'Form it with have / has + past participle',
        body: '<p>Use <i>has</i> with third person singular subjects. The past participle of regular verbs ends in <i>-ed</i>; irregular past participles must be learned (<i>been, done, gone, grown, risen, fallen, taken, written, seen, become</i>).</p>',
        example: '<i>Unemployment <b>has fallen</b>. · We <b>haven\'t decided</b> yet. · <b>Have</b> you ever <b>studied</b> abroad?</i>'
      },
      {
        title: 'Check the time: finished time → past simple',
        body: '<p>If the sentence names, or clearly refers to, a finished time in the past, use the past simple. If the time is unfinished (<i>today, this year, recently, so far</i>) or not mentioned at all, the present perfect is possible.</p>',
        example: '✗ <i>I have visited London last year.</i> → ✓ <i>I <b>visited</b> London last year.</i> · ✓ <i>I <b>have visited</b> London twice.</i> (no finished time)'
      },
      {
        title: 'Use it for past actions with a present result',
        body: '<p>The action is past, but what matters is the situation now.</p>',
        example: '<i>Many cities <b>have banned</b> plastic bags.</i> (the ban is in force now) · <i>I<b>\'ve lost</b> my passport.</i> (I don\'t have it now)'
      },
      {
        title: 'Use it for experience – "at any time up to now"',
        body: '<p>With <i>ever, never, before, once, twice, several times</i>.</p>',
        example: '<i>Have you <b>ever been</b> to a music festival? · I<b>\'ve</b> never <b>tried</b> skiing.</i>'
      },
      {
        title: 'Use it with for and since for situations up to now',
        body: '<p><i>For</i> + a length of time (<i>for ten years, for a long time</i>); <i>since</i> + a starting point (<i>since 2015, since I was a child</i>). Do not use the present simple here.</p>',
        example: '✗ <i>I live here since 2015.</i> → ✓ <i>I<b>\'ve lived</b> here since 2015.</i> · ✗ <i>I am working here for two years.</i> → ✓ <i>I<b>\'ve worked</b> / <b>\'ve been working</b> here for two years.</i>'
      },
      {
        title: 'Use just, already and yet in the right positions',
        body: '<p><i>Just</i> (very recently) and <i>already</i> (sooner than expected) go between <i>have</i> and the participle; <i>yet</i> goes at the end of negatives and questions.</p>',
        example: '<i>The results <b>have just</b> been published. · I<b>\'ve already</b> booked my test. · Have you booked it <b>yet</b>? I haven\'t booked it <b>yet</b>.</i>'
      }
    ],
    sections: [
      {
        id: 'contrast', title: 'Present perfect or past simple?',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Present perfect (connected to now)</th><th>Past simple (finished time)</th></tr>
<tr><td><i>I<b>'ve worked</b> in three countries.</i> (my experience up to now)</td><td><i>I <b>worked</b> in Spain from 2015 to 2018.</i> (a finished period)</td></tr>
<tr><td><i>Prices <b>have risen</b> this year.</i> (this year is not finished)</td><td><i>Prices <b>rose</b> last year.</i></td></tr>
<tr><td><i>She<b>'s lived</b> here since 2019.</i> (she still lives here)</td><td><i>She <b>lived</b> here for two years.</i> (she doesn't any more)</td></tr>
<tr><td><i>Have you <b>seen</b> the new museum?</i> (at any time)</td><td><i>Did you <b>see</b> it when you were in Paris?</i> (a finished occasion)</td></tr>
</table></div>
<p>A conversation often begins in the present perfect (general experience) and moves to the past simple for details: <i>"<b>Have</b> you ever <b>been</b> to Morocco?" "Yes, I <b>went</b> there in 2022. We <b>stayed</b> in Marrakech."</i></p>
<h4>Been or gone?</h4>
<p><i>She<b>'s been</b> to Paris</i> = she went and came back (experience). <i>She<b>'s gone</b> to Paris</i> = she went and is there now.</p>`
      },
      {
        id: 'ielts-use', title: 'The present perfect in IELTS',
        html: `
<ul>
<li><b>Task 2 introductions:</b> describing developments up to now: <i>In recent decades, the number of people living alone <b>has risen</b> sharply.</i></li>
<li><b>Task 1:</b> only when the data runs up to the present (<i>Since 2015, sales <b>have doubled</b></i>). For charts of past periods, use the past simple; for future projections, see the future chapters.</li>
<li><b>General Training letters:</b> <i>I <b>have lived</b> at this address for three years and <b>have</b> never <b>had</b> a problem until now.</i></li>
<li><b>Speaking Part 1:</b> <i>I<b>'ve lived</b> in my hometown all my life. · I<b>'ve been</b> learning English since primary school.</i></li>
<li><b>Speaking Part 2:</b> introducing an experience before telling it in the past simple: <i>I<b>'ve been</b> to many weddings, but the one I want to describe…</i></li>
</ul>`
      },
      {
        id: 'band-impact', title: 'How the present perfect affects your band',
        html: `<p>Accurate use of the present perfect – and of the contrast with the past simple – is one of the clearest signs of control over tense, which the descriptors treat as part of both range and accuracy. The errors <i>I have done it yesterday</i> and <i>I live here since…</i> are very noticeable to examiners and are typical of Band 5–6 grammar.</p>`
      }
    ],
    worked: [
      {
        title: 'Present perfect or past simple in a Task 2 introduction',
        source: `<div class="prompt-box"><p>"Over the last twenty years, the internet (1) changed / has changed the way people shop. In 2005, online sales (2) accounted / have accounted for less than 5% of retail spending. Since then, many high-street shops (3) closed / have closed, and the trend (4) did not slow / has not slowed."</p></div>`,
        walk: [
          { q: '1.', a: 'has changed', steps: ['<i>Over the last twenty years</i> is a period up to now: present perfect.'] },
          { q: '2.', a: 'accounted', steps: ['<i>In 2005</i> is a finished time: past simple.'] },
          { q: '3.', a: 'have closed', steps: ['<i>Since then</i> = from 2005 up to now: present perfect.'] },
          { q: '4.', a: 'has not slowed', steps: ['The trend continues to the present: present perfect.'] }
        ],
        lesson: 'Look at the time expression: a period up to now (since, for, over the last…, recently) → present perfect; a finished time (in 2005, ago, last year) → past simple.'
      }
    ],
    dos: ['Use have/has + past participle.', 'Use it for present results, experience and situations up to now.', 'Use for + length and since + starting point.', 'Switch to the past simple when you give a finished time.', 'Use it in Task 2 introductions for developments up to now.'],
    donts: ['Don\'t use it with yesterday, ago, last year, in 2010.', 'Don\'t use the present simple with for/since: not "I live here since 2015".', 'Don\'t write "has went" or "have saw".', 'Don\'t use it for Task 1 charts that show only past periods.'],
    careful: [
      { title: '"Since" + past simple clause', body: '<p>After <i>since</i>, a time clause uses the past simple; the main clause uses the present perfect.</p>', example: '<i>I<b>\'ve wanted</b> to be a doctor since I <b>was</b> a child.</i>' },
      { title: 'American usage', body: '<p>American English often uses the past simple with <i>just, already, yet</i> (<i>Did you eat yet?</i>). Both are accepted, but in British-style writing the present perfect is expected.</p>' }
    ],
    faq: [
      { q: 'Can I start a Task 1 report with the present perfect?', a: '<p>Only if the data continues to the present. A chart from 1990 to 2010 describes a finished period: use the past simple.</p>' },
      { q: 'Is "I have been to London last year" ever correct?', a: '<p>No. The finished time <i>last year</i> requires the past simple: <i>I went to London last year.</i></p>' }
    ],
    exercises: {
      id: 'ch-grammar-present-perfect',
      title: 'Chapter exercises: present perfect',
      groups: [
        {
          kind: 'choice', instructions: 'Choose the correct option, <b>A or B</b>.',
          questions: [
            { n: 1, q: 'I ___ in this city since 2018.', opts: ['live', 'have lived'], a: 'B', x: '<i>Since</i> + starting point, situation continuing now: present perfect.' },
            { n: 2, q: 'We ___ the museum last Saturday.', opts: ['visited', 'have visited'], a: 'A', x: '<i>Last Saturday</i> is a finished time: past simple.' },
            { n: 3, q: 'The government ___ several measures to reduce emissions so far.', opts: ['introduced', 'has introduced'], a: 'B', x: '<i>So far</i> = up to now.' },
            { n: 4, q: '"Where\'s Ana?" "She ___ to the library. She\'ll be back at five."', opts: ['has been', 'has gone'], a: 'B', x: '<i>Gone</i>: she is there now. <i>Been</i> would mean she went and came back.' },
            { n: 5, q: '___ you ever ___ a presentation in English?', opts: ['Did … give', 'Have … given'], a: 'B', x: 'Experience at any time up to now, with <i>ever</i>: present perfect.' },
            { n: 6, q: 'The number of cyclists ___ by 40% between 2010 and 2015.', opts: ['has increased', 'increased'], a: 'B', x: 'A finished period in the past: past simple.' }
          ]
        },
        {
          kind: 'gap', instructions: 'Complete with <b>ONE WORD ONLY</b>.',
          questions: [
            { n: 7, q: 'I have studied English {} ten years.', a: 'for', x: '<i>For</i> + a length of time.' },
            { n: 8, q: 'Prices have risen {} the start of the year.', a: 'since', x: '<i>Since</i> + a starting point.' },
            { n: 9, q: 'Have you finished your essay {}?', a: 'yet', x: '<i>Yet</i> at the end of a question.' },
            { n: 10, q: 'Unemployment has {} (fall) for three years in a row.', a: 'fallen', x: 'Past participle of <i>fall</i>: <i>fallen</i>.' }
          ]
        }
      ]
    },
    checklist: ['I never use the present perfect with a finished time.', 'I use for and since correctly.', 'I know been vs gone.', 'I use the present perfect for developments up to now in Task 2.'],
    summary: ['The present perfect links the past to the present.', 'Uses: present result, experience, unfinished period, situation up to now.', 'Finished time → past simple.', 'for + length; since + starting point.', 'In Task 1, use it only when the data runs to the present.'],
    references: [tenseRefs.perfect, tenseRefs.talkPast, ...grammarBooks, tenseRefs.overview]
  },

  /* ===================================================================== PRESENT PERFECT CONTINUOUS */
  'present-perfect-continuous': {
    intro: `
<p>The <b>present perfect continuous</b> (<i>have / has been + -ing</i>) describes an activity that started in the past and has continued up to now – or has only just stopped – with the emphasis on the <b>activity and its duration</b> rather than on the result. <i>I<b>'ve been studying</b> English for six years</i> stresses the long process; <i>I'm tired because I<b>'ve been working</b> all day</i> explains a present situation by a recent activity.</p>
<p>It is especially natural in Speaking, where you often talk about how long you have been doing something (<i>How long have you been learning English?</i>), and it is useful in General Training complaint letters (<i>I <b>have been waiting</b> for a refund for six weeks</i>). The main challenge is choosing between this tense and the present perfect simple.</p>`,
    facts: [
      ['Positive', 'have / has been + -ing'],
      ['Negative', 'haven\'t / hasn\'t been + -ing'],
      ['Question', 'Have / Has + subject + been + -ing?'],
      ['Main uses', 'Activity up to now (duration); recent activity with a present result'],
      ['Signal words', 'for, since, all day, how long, lately, recently'],
      ['Contrast', 'Simple = result / how many; continuous = activity / how long']
    ],
    method: [
      { title: 'Form it with have / has + been + -ing', body: '<p>Only <i>have/has</i> changes for the subject; <i>been</i> and the <i>-ing</i> form never change.</p>', example: '<i>She <b>has been teaching</b> for twenty years. · They <b>haven\'t been sleeping</b> well.</i>' },
      { title: 'Use it for an activity that continues up to now, with for, since or how long', body: '<p>The activity started in the past and is still going on.</p>', example: '<i>How long <b>have</b> you <b>been learning</b> English? – I<b>\'ve been learning</b> it since I was eight.</i>' },
      { title: 'Use it to explain a present situation by a recent activity', body: '<p>The activity may have just stopped, but its effects are visible now.</p>', example: '<i>The roads are wet – it<b>\'s been raining</b>. · Sorry I\'m out of breath; I<b>\'ve been running</b>.</i>' },
      { title: 'Choose the simple form for results, numbers and completion', body: '<p>When you say how much or how many, or that something is finished, use the present perfect simple.</p>', example: '<i>I<b>\'ve been writing</b> essays all morning</i> (activity) vs <i>I<b>\'ve written</b> three essays</i> (result, number).' },
      { title: 'Keep stative verbs in the simple form', body: '<p>With <i>know, believe, own, have</i> (possession), <i>be</i> and similar verbs, use the present perfect simple even for duration.</p>', example: '✗ <i>I\'ve been knowing her for years.</i> → ✓ <i>I<b>\'ve known</b> her for years.</i>' }
    ],
    sections: [
      {
        id: 'contrast', title: 'Present perfect simple or continuous?',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Present perfect simple</th><th>Present perfect continuous</th></tr>
<tr><td>Result / completion: <i>I<b>'ve painted</b> the room.</i> (it's finished)</td><td>Activity: <i>I<b>'ve been painting</b> the room.</i> (maybe not finished; I have paint on my clothes)</td></tr>
<tr><td>How many / how much: <i>She<b>'s read</b> four books this month.</i></td><td>How long: <i>She<b>'s been reading</b> for two hours.</i></td></tr>
<tr><td>Permanent: <i>He<b>'s lived</b> here all his life.</i></td><td>Temporary: <i>He<b>'s been living</b> with friends since March.</i></td></tr>
<tr><td>Stative verbs: <i>I<b>'ve known</b> him for years.</i></td><td>(not with stative verbs)</td></tr>
</table></div>
<p>With <i>live, work, study, teach</i> + <i>for/since</i>, both forms are often possible with little difference: <i>I've worked / I've been working here for five years.</i></p>`
      },
      {
        id: 'ielts-use', title: 'The present perfect continuous in IELTS',
        html: `
<ul>
<li><b>Speaking Part 1:</b> <i>I<b>'ve been studying</b> medicine for three years. · I<b>'ve been playing</b> the guitar since I was twelve.</i></li>
<li><b>Speaking Part 2:</b> <i>It's something I<b>'ve been thinking</b> about for a long time.</i></li>
<li><b>General Training letters:</b> <i>I <b>have been experiencing</b> problems with my internet connection for two weeks.</i></li>
<li><b>Task 2:</b> occasionally, for ongoing efforts: <i>Governments <b>have been trying</b> to reduce obesity for decades, with limited success.</i></li>
</ul>`
      },
      {
        id: 'band-impact', title: 'How it affects your band',
        html: `<p>Used naturally in Speaking, this tense is a clear marker of grammatical range. It is not necessary to force it into Writing; when it fits – ongoing efforts or problems – it shows precise control of aspect.</p>`
      }
    ],
    worked: [
      {
        title: 'Simple or continuous?',
        questions: '<ol><li>I (have / have been) waiting for the bus for forty minutes.</li><li>The council (has built / has been building) three new schools.</li><li>I (have known / have been knowing) my best friend since school.</li><li>You look tired. (Have you worked / Have you been working) late?</li></ol>',
        walk: [
          { q: '1.', a: 'have been waiting', steps: ['Duration of an activity up to now (<i>for forty minutes</i>): continuous.'] },
          { q: '2.', a: 'has built', steps: ['A number of completed results (<i>three</i>): simple.'] },
          { q: '3.', a: 'have known', steps: ['<i>Know</i> is stative: simple.'] },
          { q: '4.', a: 'Have you been working', steps: ['A recent activity explains a present situation (tiredness): continuous.'] }
        ],
        lesson: 'Ask "how long / activity?" → continuous; "how many / result?" → simple; stative verb → simple.'
      }
    ],
    dos: ['Use have/has been + -ing.', 'Use it with how long, for and since for activities.', 'Use it to explain present evidence of a recent activity.', 'Use it naturally in Speaking about your studies and hobbies.'],
    donts: ['Don\'t use it with stative verbs.', 'Don\'t use it for a number of completed things: not "I\'ve been writing three essays".', 'Don\'t use the present continuous for duration: not "I am learning English since five years".'],
    careful: [{ title: 'Translating from your language', body: '<p>Many languages use a present tense for "I have been doing it for X years". English needs the present perfect (continuous).</p>', example: '✗ <i>I am studying here since two years.</i> → ✓ <i>I<b>\'ve been studying</b> here for two years.</i>' }],
    faq: [{ q: 'Is "I have been living here for ten years" different from "I have lived here for ten years"?', a: '<p>Very little. The continuous can suggest the situation is temporary or emphasise the length of time; the simple is neutral.</p>' }],
    exercises: {
      id: 'ch-grammar-present-perfect-continuous',
      title: 'Chapter exercises: present perfect continuous',
      groups: [
        {
          kind: 'choice', instructions: 'Choose the correct option, <b>A or B</b>.',
          questions: [
            { n: 1, q: 'I ___ English since I was six.', opts: ['am learning', 'have been learning'], a: 'B', x: 'Duration up to now with <i>since</i>.' },
            { n: 2, q: 'She ___ five job applications this week.', opts: ['has sent', 'has been sending'], a: 'A', x: 'A number of completed actions: simple.' },
            { n: 3, q: 'We ___ each other for over a decade.', opts: ['have known', 'have been knowing'], a: 'A', x: '<i>Know</i> is stative.' },
            { n: 4, q: 'The ground is wet. It ___.', opts: ['has rained', 'has been raining'], a: 'B', x: 'Present evidence of a recent activity.' },
            { n: 5, q: 'I ___ for a reply to my email for three weeks.', opts: ['have been waiting', 'am waiting'], a: 'A', x: 'Duration up to now: present perfect continuous.' }
          ]
        },
        {
          kind: 'gap', instructions: 'Write the present perfect continuous form. <b>NO MORE THAN THREE WORDS</b>.',
          questions: [
            { n: 6, q: 'How long {} you been working here?', a: 'have', x: 'Question form: <i>How long <b>have</b> you been working…?</i> – the auxiliary <i>have</i> comes before the subject.' },
            { n: 7, q: 'Researchers {} (study) the problem for years.', a: 'have been studying', x: 'Plural subject: <i>have been studying</i>.' },
            { n: 8, q: 'My neighbour {} (play) loud music all evening.', a: 'has been playing', x: 'Singular subject: <i>has been playing</i>.' }
          ]
        }
      ]
    },
    checklist: ['I use have/has been + -ing.', 'I choose simple for results and continuous for duration.', 'I keep stative verbs simple.'],
    summary: ['The present perfect continuous stresses an activity continuing up to now.', 'It also explains present results of recent activity.', 'Simple = how many / result; continuous = how long / activity.', 'Not with stative verbs.'],
    references: [tenseRefs.perfect, tenseRefs.continuous, ...grammarBooks, tenseRefs.overview]
  }
};

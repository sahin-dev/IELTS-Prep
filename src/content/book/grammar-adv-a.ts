import type { Chapter, Reference } from '@/lib/types';
import { grammarBooks } from './grammar-pos-a';

/* Grammar masterclass, Part D (advanced grammar) – modals, gerunds and infinitives, participles, phrasal verbs */

const BC = 'https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/';
const gra: Reference = { title: 'IELTS Writing band descriptors (public version)', url: 'https://ielts.org/cdn/ielts-downloadable-assets/ielts-guidance-and-support/ielts-guides/ielts-writing-band-descriptors.pdf', note: 'Grammatical Range and Accuracy; Lexical Resource for phrasal verbs and register.' };

export const advChaptersA: Record<string, Chapter> = {
  /* ===================================================================== MODALS */
  modals: {
    intro: `
<p><b>Modal verbs</b> – <i>can, could, may, might, must, shall, should, will, would</i> and <i>ought to</i> – add the speaker's or writer's judgement to a statement: how possible, necessary, advisable or permitted something is. Compare <i>Prices <b>rise</b></i> with <i>Prices <b>may</b> rise</i>, <i>Prices <b>will</b> rise</i>, <i>Prices <b>must</b> have risen</i> and <i>Prices <b>should</b> rise</i>: one fact, five different stances.</p>
<p>Modals are essential in IELTS for three reasons. In <b>Task 2</b> they let you make recommendations (<i>Governments <b>should</b> invest…</i>) and, just as importantly, hedge claims so that they are defensible (<i>This <b>may</b> be one reason…</i>). In <b>Speaking Part 3</b> they let you speculate (<i>It <b>might</b> be because…</i>; <i>People <b>would</b> probably…</i>). And their grammar is strict – base form after the modal, no <i>-s</i>, no <i>to</i> – so errors are noticeable. This chapter also covers the "semi-modals" <i>have to, need to, be able to</i> and <i>be allowed to</i>, and perfect modals (<i>should have done, must have been</i>).</p>`,
    facts: [
      ['Form', 'Modal + base form (no to, no -s)'],
      ['Negative / question', 'cannot, should not… · Should we…?'],
      ['Perfect modal', 'modal + have + past participle (must have been)'],
      ['Passive modal', 'modal + be + past participle (should be banned)'],
      ['Task 2', 'Recommend (should) and hedge (may, might, could)'],
      ['Key contrast', 'mustn\'t (prohibited) ≠ don\'t have to (not necessary)']
    ],
    method: [
      { title: 'Use the base form after every modal', body: '<p>No <i>to</i> (except <i>ought to</i>), no <i>-s</i>, no <i>-ing</i>, no past form. Questions and negatives use the modal itself, not <i>do</i>.</p>', example: '✗ <i>should to invest · cans · must went · Do you can…?</i> → ✓ <i>should invest · can · must go · Can you…?</i>' },
      { title: 'Choose the modal by meaning', body: '<p>Ability: <i>can, could, be able to</i>. Permission: <i>can, may, be allowed to</i>. Obligation: <i>must, have to</i>. Advice: <i>should, ought to</i>. Possibility: <i>may, might, could</i>. Certainty/deduction: <i>must, can\'t, will</i>. Section 1 gives the full map.</p>' },
      { title: 'Use should / ought to / must for recommendations – with care', body: '<p>In Task 2, <i>should</i> is the normal recommendation verb; <i>must</i> is very strong; <i>could</i> suggests a possible option. Passive modals are useful when the agent is obvious: <i>Junk food advertising <b>should be restricted</b>.</i></p>' },
      { title: 'Hedge claims with may, might, could and would', body: '<p>Academic writing avoids claiming more than the evidence supports. Modals are the simplest hedging tool.</p>', example: '<i>Social media <b>may</b> contribute to loneliness.</i> (more defensible than <i>Social media causes loneliness.</i>)' },
      { title: 'Distinguish mustn\'t and don\'t have to', body: '<p><i>Mustn\'t</i> = it is prohibited. <i>Don\'t have to</i> / <i>don\'t need to</i> = it is not necessary (but you can).</p>', example: '<i>You <b>mustn\'t</b> use your phone in the exam. · You <b>don\'t have to</b> answer the questions in order.</i>' },
      { title: 'Use perfect modals for the past', body: '<p><i>must have</i> (deduction: certainly), <i>can\'t have</i> (impossible), <i>might/may/could have</i> (possibly), <i>should have</i> (it was right but did not happen – criticism or regret), <i>needn\'t have</i> (it happened but was unnecessary).</p>', example: '<i>The government <b>should have acted</b> sooner. · The ancient city <b>must have been</b> very wealthy.</i>' }
    ],
    sections: [
      {
        id: 'map', title: 'Modals by meaning',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Meaning</th><th>Present / future</th><th>Past</th><th>Example</th></tr>
<tr><td>Ability</td><td>can, be able to</td><td>could, was able to</td><td><i>Few people <b>can</b> afford it. · She <b>was able to</b> escape.</i> (one specific achievement: <i>was able to</i>, not <i>could</i>)</td></tr>
<tr><td>Permission</td><td>can, may (formal), be allowed to</td><td>could, was allowed to</td><td><i>Students <b>are allowed to</b> use dictionaries.</i></td></tr>
<tr><td>Obligation (strong)</td><td>must, have to</td><td>had to</td><td><i>All visitors <b>must</b> register.</i></td></tr>
<tr><td>No obligation</td><td>don't have to, needn't</td><td>didn't have to, needn't have</td><td><i>You <b>don't have to</b> pay.</i></td></tr>
<tr><td>Prohibition</td><td>mustn't, can't, aren't allowed to</td><td>couldn't, wasn't allowed to</td><td><i>Drivers <b>mustn't</b> use phones.</i></td></tr>
<tr><td>Advice / recommendation</td><td>should, ought to, had better</td><td>should have</td><td><i>Schools <b>should</b> teach cooking.</i></td></tr>
<tr><td>Possibility</td><td>may, might, could</td><td>may / might / could have</td><td><i>This <b>could</b> lead to job losses.</i></td></tr>
<tr><td>Deduction (certain)</td><td>must, can't</td><td>must have, can't have</td><td><i>It <b>must</b> be expensive. It <b>can't have</b> been easy.</i></td></tr>
<tr><td>Prediction / hypothesis</td><td>will, would</td><td>would have</td><td><i>Most people <b>would</b> agree.</i></td></tr>
</table></div>`
      },
      {
        id: 'hedging', title: 'Modals and hedging in Task 2',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Overstated</th><th>Hedged</th></tr>
<tr><td>Video games make children violent.</td><td>Some video games <b>may</b> make certain children more aggressive.</td></tr>
<tr><td>This policy will solve the problem.</td><td>This policy <b>could</b> go a long way towards solving the problem.</td></tr>
<tr><td>Everyone agrees that…</td><td>Most people <b>would</b> agree that…</td></tr>
</table></div>
<p>Hedging is not weakness. It shows that you understand the limits of an argument, which is part of presenting a well-supported position. But do not hedge your own main position into vagueness: your thesis should be clear (<i>I firmly believe that…</i>).</p>`
      },
      {
        id: 'band-impact', title: 'How modals affect your band',
        html: `<p>Modals carry stance, so they affect Task Response as well as grammar: recommendations need <i>should</i>, speculation needs <i>might</i>, hedged claims need <i>may</i>. Perfect and passive modals (<i>should have been introduced</i>) are complex verb phrases that show range when accurate. Form errors (<i>should to, can be able to</i>) are frequent at Band 5–6.</p>`
      }
    ],
    worked: [
      {
        title: 'Improving stance in a Task 2 paragraph',
        source: `<div class="prompt-box"><p>"Governments must to ban fast food near schools. This will stop childhood obesity. Parents can't control what children eat outside home, so the law have to do it."</p></div>`,
        walk: [
          { q: '"must to ban"', a: 'should ban / should be banned', steps: ['No <i>to</i> after <i>must</i>.', '<i>Must</i> is very strong; <i>should</i> is the normal recommendation. Passive alternative: <i>Fast-food outlets <b>should be banned</b> near schools.</i>'] },
          { q: '"This will stop childhood obesity."', a: 'This could help to reduce childhood obesity.', steps: ['Overstated: one measure cannot "stop" a complex problem. Hedge with <i>could</i> and a softer verb.'] },
          { q: '"Parents can\'t control"', a: 'Parents cannot always control', steps: ['Correct form; adding <i>always</i> makes the claim accurate.'] },
          { q: '"the law have to do it"', a: 'the law has to / must intervene', steps: ['<i>Have to</i> is not a pure modal: it agrees with the subject (<i>has to</i>).'] }
        ],
        lesson: 'Check modal form (base form, no to) and modal strength: should for recommendations, may/could for hedged claims.'
      }
    ],
    dos: ['Use the base form after modals.', 'Use should (often passive) for recommendations.', 'Hedge claims with may, might, could.', 'Use perfect modals for past speculation and criticism.', 'Use don\'t have to for "not necessary".'],
    donts: ['Don\'t write should to, can able to, must went.', 'Don\'t use do with modals in questions or negatives.', 'Don\'t use must for every recommendation.', 'Don\'t confuse mustn\'t and don\'t have to.'],
    careful: [
      { title: '"Could" for a single past achievement', body: '<p>For general past ability, <i>could</i> is fine (<i>I could swim at five</i>). For one specific successful action, use <i>was able to / managed to</i>.</p>', example: '✗ <i>After hours of searching, I could find the hotel.</i> → ✓ <i>…I <b>was able to</b> / <b>managed to</b> find the hotel.</i>' },
      { title: '"May be" vs "maybe"', body: '<p><i>may be</i> = modal + verb (<i>It may be true</i>); <i>maybe</i> = adverb (<i>Maybe it is true</i>). In Writing, <i>perhaps</i> is more formal than <i>maybe</i>.</p>' }
    ],
    faq: [{ q: 'Is "should" too weak for a strong opinion?', a: '<p>No. <i>Should</i> is the standard way to recommend action, and strength comes from your argument. Use <i>must</i> when something is truly essential: <i>Action must be taken immediately.</i></p>' }],
    exercises: {
      id: 'ch-grammar-modals',
      title: 'Chapter exercises: modal verbs',
      groups: [
        {
          kind: 'choice', instructions: 'Choose the correct option, <b>A, B or C</b>.',
          questions: [
            { n: 1, q: 'Governments ___ more in renewable energy.', opts: ['should to invest', 'should invest', 'should investing'], a: 'B', x: 'Modal + base form.' },
            { n: 2, q: 'You ___ bring your own laptop – computers are provided.', opts: ['mustn\'t', 'don\'t have to', 'can\'t'], a: 'B', x: 'Not necessary (but allowed): <i>don\'t have to</i>.' },
            { n: 3, q: 'Candidates ___ use mobile phones in the exam room.', opts: ['mustn\'t', 'don\'t have to', 'needn\'t'], a: 'A', x: 'Prohibited: <i>mustn\'t</i>.' },
            { n: 4, q: 'The pyramids ___ required thousands of workers.', opts: ['must have', 'must', 'should have'], a: 'A', x: 'Deduction about the past: <i>must have</i> + past participle.' },
            { n: 5, q: 'The council ___ the bridge years ago – now it is too late.', opts: ['should repair', 'should have repaired', 'must repaired'], a: 'B', x: 'Criticism of a past omission: <i>should have</i> + past participle.' },
            { n: 6, q: 'Which sentence is best hedged for Task 2?', opts: ['Social media causes depression.', 'Social media may contribute to depression in some users.', 'Social media must cause depression.'], a: 'B', x: '<i>may contribute to</i> + <i>some users</i> makes a defensible claim.' }
          ]
        },
        {
          kind: 'gap', instructions: 'Write <b>ONE WORD ONLY</b>.',
          questions: [
            { n: 7, q: 'Junk food advertising should {} banned during children\'s programmes.', a: 'be', x: 'Passive modal: modal + <i>be</i> + past participle.' },
            { n: 8, q: 'After a long search, we were {} to find a cheap flat.', a: 'able', x: 'One specific achievement in the past: <i>was/were able to</i>.' },
            { n: 9, q: 'He {} have seen me – he wasn\'t there.', a: 'can\'t|couldn\'t|cannot', x: 'Impossible in the past: <i>can\'t / couldn\'t have</i>.' }
          ]
        }
      ]
    },
    checklist: ['I use the base form after modals.', 'I choose modals by meaning.', 'I hedge claims and make recommendations with modals.', 'I use perfect modals correctly.'],
    summary: ['Modals add judgement: possibility, necessity, advice, ability, permission.', 'Modal + base form; no to, no -s, no do.', 'should = recommendation; may/might/could = hedging.', 'mustn\'t = prohibited; don\'t have to = not necessary.', 'Perfect modals: must/might/should have + participle.'],
    references: [{ title: 'British Council LearnEnglish: Modal verbs', url: BC + 'modal-verbs' }, ...grammarBooks, gra]
  },

  /* ===================================================================== GERUNDS AND INFINITIVES */
  'gerunds-infinitives': {
    intro: `
<p>When one verb follows another, or when a verb is used like a noun, English must choose between the <b>-ing form</b> (often called the gerund: <i>swimming</i>), the <b>to-infinitive</b> (<i>to swim</i>) and the <b>bare infinitive</b> (<i>swim</i>). <i>I enjoy <b>swimming</b></i>, <i>I want <b>to swim</b></i>, <i>I can <b>swim</b></i> – each pattern is fixed by the word that comes before.</p>
<p>These choices cause a steady stream of errors in IELTS Writing (<i>avoid to eat, look forward to see, suggest to do</i>), and a few verbs change their meaning depending on the form (<i>stop smoking</i> vs <i>stop to smoke</i>). This chapter sets out the rules that can be learned as rules, the lists that must be memorised, and the verbs whose meaning changes.</p>`,
    facts: [
      ['-ing as subject', 'Recycling saves energy.'],
      ['After prepositions', 'always -ing: by using, interested in learning'],
      ['To-infinitive', 'purpose; after adjectives, many verbs and nouns'],
      ['Bare infinitive', 'after modals, make, let, had better, would rather'],
      ['Meaning changes', 'stop, remember, forget, try, regret, go on'],
      ['Trap', '"to" as a preposition: look forward to doing']
    ],
    method: [
      { title: 'Use the -ing form as a subject or after a preposition', body: '<p>An activity used as a noun normally takes <i>-ing</i>. After every preposition, a verb must be in the <i>-ing</i> form.</p>', example: '<i><b>Learning</b> a language takes time.</i> · <i>She is good <b>at organising</b> events.</i> · <i>Instead <b>of driving</b>, …</i>' },
      { title: 'Use the to-infinitive for purpose', body: '<p>To say why someone does something: <i>to</i> (or <i>in order to / so as to</i>).</p>', example: '<i>Many people cycle <b>to save</b> money.</i> (✗ <i>for save</i>, ✗ <i>for saving</i> in this meaning)' },
      { title: 'Use the to-infinitive after adjectives and many nouns', body: '<p><i>easy / difficult / important / likely / able + to</i>; <i>a decision / plan / ability / need / attempt + to</i>.</p>', example: '<i>It is important <b>to protect</b> wildlife. · The decision <b>to close</b> the factory…</i>' },
      { title: 'Learn the verb lists', body: '<p>Verb + <i>-ing</i>: <i>avoid, consider, enjoy, finish, involve, mind, practise, risk, suggest, deny, admit, delay, keep</i>. Verb + <i>to</i>: <i>afford, agree, aim, decide, expect, fail, hope, manage, plan, refuse, seem, tend, want, learn</i>. Verb + object + <i>to</i>: <i>allow, enable, encourage, force, persuade, require, advise, want</i>.</p>' },
      { title: 'Use the bare infinitive after modals, make, let and a few expressions', body: '<p>Also after <i>had better, would rather, why not</i>, and optionally after <i>help</i>.</p>', example: '<i>Parents should let children <b>make</b> mistakes. · You had better <b>leave</b> early.</i>' },
      { title: 'Check the verbs that change meaning', body: '<p><i>stop doing</i> (quit) / <i>stop to do</i> (pause in order to); <i>remember doing</i> (memory) / <i>remember to do</i> (duty); <i>forget doing / to do</i> (same pattern); <i>try doing</i> (experiment) / <i>try to do</i> (attempt); <i>regret doing</i> (sorry about the past) / <i>regret to inform</i> (formal: sorry to announce); <i>go on doing</i> (continue) / <i>go on to do</i> (do next).</p>' }
    ],
    sections: [
      {
        id: 'to-prep', title: '"To" as a preposition: the expressions that take -ing',
        html: `<p>In these expressions <i>to</i> is a preposition, so it is followed by <i>-ing</i>: <i>look forward to, be used to, get used to, object to, be committed to, be dedicated to, contribute to, the key to, an alternative to, in addition to, when it comes to, with a view to</i>.</p>
<p>✗ <i>I look forward to hear from you.</i> → ✓ <i>I look forward to <b>hearing</b> from you.</i> (essential for General Training letters) · ✓ <i>Education is the key to <b>reducing</b> poverty.</i></p>`
      },
      {
        id: 'forms', title: 'Perfect and passive forms',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Form</th><th>Example</th></tr>
<tr><td>having + participle (earlier action)</td><td><i>He denied <b>having taken</b> the money.</i></td></tr>
<tr><td>being + participle (passive)</td><td><i>Nobody enjoys <b>being criticised</b>.</i></td></tr>
<tr><td>to have + participle</td><td><i>The building is said <b>to have been</b> a prison.</i></td></tr>
<tr><td>to be + participle (passive)</td><td><i>Children need <b>to be supervised</b>.</i></td></tr>
</table></div>`
      },
      {
        id: 'band-impact', title: 'How these forms affect your band',
        html: `<p>Gerund and infinitive errors are classic "systematic" errors: the same verb is used wrongly every time. A short personal list of the verbs you use most often, checked during proofreading, removes most of them. Correct use of <i>-ing</i> subjects and purpose infinitives also adds natural variety to sentence structure.</p>`
      }
    ],
    worked: [
      {
        title: 'Correcting verb forms',
        questions: '<ol><li>I look forward to receive your reply.</li><li>Many people avoid to use public transport at night.</li><li>Cities should encourage people cycling.</li><li>She went to the library for borrow some books.</li><li>The government made companies to reduce emissions.</li></ol>',
        walk: [
          { q: '1.', a: 'look forward to receiving', steps: ['<i>to</i> is a preposition in <i>look forward to</i> → <i>-ing</i>.'] },
          { q: '2.', a: 'avoid using', steps: ['<i>avoid</i> + <i>-ing</i>.'] },
          { q: '3.', a: 'encourage people to cycle', steps: ['<i>encourage</i> + object + <i>to</i>-infinitive.'] },
          { q: '4.', a: 'to borrow', steps: ['Purpose: <i>to</i> + base.'] },
          { q: '5.', a: 'made companies reduce', steps: ['<i>make</i> + object + bare infinitive (active).'] }
        ],
        lesson: 'Most errors come from five sources: prepositional to, verb lists, verb + object + to, purpose, and make/let.'
      }
    ],
    dos: ['Use -ing after prepositions.', 'Use to + base for purpose.', 'Use make/let + object + base.', 'Learn the verb + -ing and verb + to lists.', 'Write "I look forward to hearing from you".'],
    donts: ['Don\'t write for + base for purpose: not "for save money".', 'Don\'t write avoid to, enjoy to, suggest to.', 'Don\'t write let them to, make them to.', 'Don\'t write look forward to hear.'],
    careful: [{ title: '"Used to" vs "be used to"', body: '<p><i>I used to live</i> (past habit, + base) vs <i>I am used to living</i> (accustomed, + -ing).</p>' }],
    faq: [{ q: 'Is "like doing" or "like to do" correct?', a: '<p>Both. <i>Like / love / hate / prefer / begin / start / continue</i> take either form with little difference. <i>Would like</i> always takes <i>to</i>: <i>I would like to apply</i>.</p>' }],
    exercises: {
      id: 'ch-grammar-gerunds-infinitives',
      title: 'Chapter exercises: gerunds and infinitives',
      groups: [
        {
          kind: 'gap', instructions: 'Write the correct form of the verb in brackets. <b>NO MORE THAN TWO WORDS</b>.',
          questions: [
            { n: 1, q: 'I look forward to {} (meet) you.', a: 'meeting', x: '<i>look forward to</i> + -ing.' },
            { n: 2, q: 'Many families cannot afford {} (buy) a house.', a: 'to buy', x: '<i>afford</i> + to-infinitive.' },
            { n: 3, q: '{} (exercise) regularly reduces stress.', a: 'Exercising', x: 'An activity as subject: -ing.' },
            { n: 4, q: 'Parents should not let children {} (stay) up late.', a: 'stay', x: '<i>let</i> + object + bare infinitive.' },
            { n: 5, q: 'She saved money {} (buy) a car.', a: 'to buy', x: 'Purpose: to-infinitive.' },
            { n: 6, q: 'The new law requires drivers {} (wear) seat belts.', a: 'to wear', x: '<i>require</i> + object + to-infinitive.' }
          ]
        },
        {
          kind: 'choice', instructions: 'Choose the meaning, <b>A or B</b>.',
          questions: [
            { n: 7, q: '"He stopped smoking."', opts: ['He quit the habit.', 'He paused in order to smoke.'], a: 'A', x: '<i>stop</i> + -ing = no longer do.' },
            { n: 8, q: '"Remember to lock the door."', opts: ['Don\'t forget to do it.', 'Recall a past action.'], a: 'A', x: '<i>remember to do</i> = a duty still to do.' }
          ]
        }
      ]
    },
    checklist: ['I use -ing after prepositions, including prepositional to.', 'I know the common verb + -ing and verb + to lists.', 'I use to + base for purpose.', 'I know the verbs that change meaning.'],
    summary: ['-ing for subjects and after prepositions; to-infinitive for purpose and after many adjectives, nouns and verbs.', 'Bare infinitive after modals, make, let.', 'Learn the verb lists; check the meaning-change verbs.', 'In look forward to, be used to, the key to, "to" is a preposition.'],
    references: [{ title: 'British Council LearnEnglish: -ing forms', url: BC + 'ing-forms' }, { title: 'British Council LearnEnglish: To-infinitives', url: BC + 'infinitives' }, ...grammarBooks, gra]
  },

  /* ===================================================================== PARTICIPLES */
  participles: {
    intro: `
<p><b>Participles</b> are the <i>-ing</i> form (present participle: <i>rising, living</i>) and the <i>-ed</i>/irregular form (past participle: <i>raised, built, grown</i>). They build tenses and the passive, they act as adjectives (<i>a <b>growing</b> problem, <b>skilled</b> workers</i>), and – most importantly for Band 7–9 writing – they form <b>participle clauses</b>: compact, non-finite clauses that replace longer relative and adverbial clauses.</p>
<p>Compare: <i>People who live in cities are exposed to more pollution</i> → <i>People <b>living</b> in cities…</i>; <i>Because she felt tired, she went home</i> → <i><b>Feeling</b> tired, she went home</i>; <i>The figure rose to 40%, and it reached a peak in 2010</i> → <i>The figure rose to 40%, <b>reaching</b> a peak in 2010</i>. Participle clauses are one of the most natural ways to add density and variety to your writing – particularly in Task 1 – but they come with one strict rule about their subject, which this chapter explains.</p>`,
    facts: [
      ['Present participle', '-ing: active, ongoing (people living here)'],
      ['Past participle', '-ed / irregular: passive, completed (goods made in China)'],
      ['Perfect participle', 'having + past participle (having finished…)'],
      ['Uses', 'Reduced relative clauses; time, reason and result clauses'],
      ['Task 1', '…, reaching a peak of 40% in 2010'],
      ['Golden rule', 'The participle\'s subject = the main clause subject']
    ],
    method: [
      { title: 'Reduce a relative clause with a participle', body: '<p>Active relative clause → present participle; passive relative clause → past participle.</p>', example: '<i>Students <s>who study</s> <b>studying</b> abroad…</i> · <i>Products <s>which are made</s> <b>made</b> from recycled plastic…</i>' },
      { title: 'Express time or reason with a participle clause', body: '<p>Time: <i>After finishing / Having finished the report, she left.</i> Reason: <i><b>Being</b> a nurse, she knew what to do. <b>Built</b> on a hill, the castle was easy to defend.</i></p>' },
      { title: 'Express result or a following event at the end of a sentence', body: '<p>A participle clause after a comma can describe the consequence of the main clause – very useful in Task 1 and Task 2.</p>', example: '<i>Unemployment rose sharply, <b>reaching</b> 12% in 2012.</i> · <i>The factory closed, <b>leaving</b> 2,000 people without work.</i>' },
      { title: 'Check the subject: the "dangling participle" rule', body: '<p>The understood subject of the participle must be the subject of the main clause. If it is not, the sentence is wrong – and often unintentionally funny.</p>', example: '✗ <i>Walking along the beach, the sun was setting.</i> (the sun was walking?) → ✓ <i>Walking along the beach, <b>we</b> watched the sun set.</i>' },
      { title: 'Use the perfect participle for an earlier action', body: '<p><i>Having</i> + past participle makes it clear that one action was completed before the other.</p>', example: '<i><b>Having lived</b> abroad, she understood the challenges.</i>' }
    ],
    sections: [
      {
        id: 'task1', title: 'Participle clauses in Task 1',
        html: `
<ul>
<li><i>Sales rose steadily, <b>reaching</b> a peak of 500 units in 2015.</i></li>
<li><i>The figure fell by half, <b>dropping</b> from 40% to 20%.</i></li>
<li><i><b>Starting</b> at 10%, the proportion climbed to 35%.</i></li>
<li><i>Coal was the main source, <b>accounting for</b> 60% of the total.</i></li>
<li><i>The village, <b>surrounded</b> by farmland in 1990, had become a suburb by 2020.</i></li>
</ul>
<p>These let you give a trend and a figure in one sentence – the kind of efficient, controlled complex sentence that supports Band 7 in Grammatical Range.</p>`
      },
      {
        id: 'band-impact', title: 'How participles affect your band',
        html: `<p>Participle clauses are among the "complex structures" that distinguish Band 7–8 writing, especially when they replace wordy relative clauses. Dangling participles, however, are errors that obscure meaning. Use them where they make a sentence clearer and shorter, and always check the subject.</p>`
      }
    ],
    worked: [
      {
        title: 'Combining sentences with participles',
        questions: '<ol><li>The number of tourists rose by 30%. It reached 2 million in 2019.</li><li>Many people live in cities. They have limited access to green space.</li><li>The bridge was completed in 1890. It is now a tourist attraction.</li><li>Arriving late, the meeting had already started.</li></ol>',
        walk: [
          { q: '1.', a: 'The number of tourists rose by 30%, reaching 2 million in 2019.', steps: ['A result/following detail: present participle after a comma.'] },
          { q: '2.', a: 'Many people living in cities have limited access to green space.', steps: ['Active relative clause reduced: <i>who live</i> → <i>living</i>.'] },
          { q: '3.', a: 'Completed in 1890, the bridge is now a tourist attraction.', steps: ['Passive meaning: past participle at the start; subject of the main clause = the bridge.'] },
          { q: '4.', a: 'Arriving late, I found that the meeting had already started.', steps: ['Dangling participle: the meeting did not arrive. Make the subject of the main clause the person who arrived.'] }
        ],
        lesson: 'Present participle = active; past participle = passive; and the participle\'s subject must be the main subject.'
      }
    ],
    dos: ['Reduce relative clauses with participles where it is natural.', 'Use …, reaching / accounting for… in Task 1.', 'Use having + participle for an earlier action.', 'Check that the main clause subject matches the participle.'],
    donts: ['Don\'t write dangling participles.', 'Don\'t use a present participle for a passive meaning: not "products making in China".', 'Don\'t start every sentence with a participle.'],
    careful: [{ title: 'Active or passive participle?', body: '<p>Ask whether the noun does the action (present participle) or receives it (past participle).</p>', example: '<i>the <b>rising</b> cost</i> (the cost rises) · <i>the <b>raised</b> price</i> (someone raised it)' }],
    faq: [{ q: 'Are participle clauses too formal for Speaking?', a: '<p>Short ones are natural in speech (<i>I spent the day walking around the old town</i>). Long fronted ones (<i>Having considered…</i>) belong mainly in writing.</p>' }],
    exercises: {
      id: 'ch-grammar-participles',
      title: 'Chapter exercises: participles',
      groups: [
        {
          kind: 'gap', instructions: 'Write the correct participle of the verb in brackets. <b>ONE WORD ONLY</b>.',
          questions: [
            { n: 1, q: 'Coal was the largest source, {} (account) for 45% of the total.', a: 'accounting', x: 'Active meaning, additional detail: present participle.' },
            { n: 2, q: 'Most of the cars {} (sell) in Norway are electric.', a: 'sold', x: 'Passive meaning (cars are sold): past participle.' },
            { n: 3, q: 'People {} (work) night shifts often sleep badly.', a: 'working', x: 'Active reduced relative clause: <i>who work</i> → <i>working</i>.' },
            { n: 4, q: '{} (write) in 1949, the novel still feels modern.', a: 'Written', x: 'Passive meaning: the novel was written.' },
            { n: 5, q: 'Having {} (finish) the course, she applied for jobs.', a: 'finished', x: 'Perfect participle: <i>having</i> + past participle.' }
          ]
        },
        {
          kind: 'choice', instructions: 'Choose <b>A or B</b>.',
          questions: [
            { n: 6, q: 'Which sentence is correct?', opts: ['Driving to work, the traffic was terrible.', 'Driving to work, I was stuck in terrible traffic.'], a: 'B', x: 'In A, the traffic appears to be driving (dangling participle).' },
            { n: 7, q: 'Which sentence is correct?', opts: ['The population grew rapidly, doubling within 20 years.', 'The population grew rapidly, doubled within 20 years.'], a: 'A', x: 'A participle clause after a comma uses the -ing form for an active, following detail.' }
          ]
        }
      ]
    },
    checklist: ['I can reduce relative clauses with participles.', 'I use participle clauses for result and detail in Task 1.', 'I always check the subject of a participle clause.'],
    summary: ['Present participle = active; past participle = passive.', 'Participle clauses replace relative and adverbial clauses concisely.', '…, reaching / accounting for… are ideal in Task 1.', 'The participle\'s subject must be the main clause subject.'],
    references: [{ title: 'British Council LearnEnglish: -ing forms', url: BC + 'ing-forms' }, ...grammarBooks, gra]
  },

  /* ===================================================================== PHRASAL VERBS */
  'phrasal-verbs': {
    intro: `
<p>A <b>phrasal verb</b> is a verb combined with one or two particles (adverbs or prepositions) to form a unit with its own meaning: <i>give up</i> (stop), <i>carry out</i> (perform), <i>bring about</i> (cause), <i>look after</i> (take care of), <i>put up with</i> (tolerate). The meaning is often impossible to guess from the parts, which is why phrasal verbs are usually learned as vocabulary – see the <a href="/vocabulary/phrasal">phrasal verbs word bank</a>.</p>
<p>This chapter deals with their <b>grammar</b>, which is just as important: some phrasal verbs take no object, some can be separated by their object, some cannot, and some have three parts. The position of a pronoun object is a classic error (<i>turn off it</i> ✗). It also covers <b>register</b>: phrasal verbs are natural and expected in Speaking, while in formal writing some are best replaced by single-word equivalents – but many (<i>carry out, set up, bring about</i>) are perfectly formal.</p>`,
    facts: [
      ['Structure', 'verb + particle(s): give up, look after, put up with'],
      ['Intransitive', 'No object: grow up, break down, take off'],
      ['Separable', 'turn the light off / turn off the light / turn it off'],
      ['Inseparable', 'look after them, deal with it'],
      ['Pronouns', 'Go between verb and particle in separable verbs'],
      ['Register', 'Natural in Speaking; choose carefully in Task 2']
    ],
    method: [
      { title: 'Learn whether the phrasal verb takes an object', body: '<p>Intransitive: <i>The car <b>broke down</b>. Prices <b>went up</b>. Children <b>grow up</b> quickly.</i> Transitive: <i>The team <b>carried out</b> a survey.</i></p>' },
      { title: 'With separable verbs, a pronoun must go in the middle', body: '<p>A noun object can go before or after the particle; a pronoun object must go between the verb and the particle.</p>', example: '<i>turn off the TV / turn the TV off / turn <b>it</b> off</i> · ✗ <i>turn off it</i>' },
      { title: 'With inseparable verbs, the object always follows the particle', body: '<p><i>look after, deal with, come across, get over, look into, rely on, go through</i>.</p>', example: '<i>She looks after <b>her parents</b> / looks after <b>them</b>.</i> (✗ <i>looks them after</i>)' },
      { title: 'With three-part verbs, keep all three together', body: '<p><i>look forward to, put up with, come up with, cut down on, run out of, get on with, keep up with</i>.</p>', example: '<i>We need to <b>come up with</b> a solution. · People should <b>cut down on</b> sugar.</i>' },
      { title: 'Choose the register', body: '<p>In Task 2, use formal phrasal verbs freely (<i>carry out, set up, bring about, account for, point out, rule out</i>). For informal ones, a single verb is often better: <i>find out → discover, cut down on → reduce, put off → postpone, look into → investigate, go up → increase</i>. In Speaking, phrasal verbs make you sound natural.</p>' }
    ],
    sections: [
      {
        id: 'nouns', title: 'Nouns formed from phrasal verbs',
        html: `<p>Many phrasal verbs have related nouns, useful in academic writing: <i>a breakdown, an outbreak, a setback, a takeover, an outcome, input, output, a drawback, a shortfall, a cutback, a turnover, a breakthrough</i>. Example: <i>The <b>outbreak</b> of the disease led to sharp <b>cutbacks</b> in tourism.</i></p>`
      },
      {
        id: 'band-impact', title: 'How phrasal verbs affect your band',
        html: `<p>In Speaking, natural phrasal verbs and idiomatic language are features the descriptors associate with higher Lexical Resource bands. In Writing, appropriacy matters: informal phrasal verbs in a formal essay can lower the impression of style, while precise formal ones (<i>carry out, bring about</i>) are excellent. Word-order errors with pronouns are grammar errors.</p>`
      }
    ],
    worked: [
      {
        title: 'Grammar and register',
        questions: '<ol><li>The scientists carried a study out. (Task 2)</li><li>The lights were on, so I turned off them.</li><li>Governments must look the problem into.</li><li>We have to cut down sugar. (Speaking)</li></ol>',
        walk: [
          { q: '1.', a: 'carried out a study', steps: ['Grammatically possible (<i>carried a study out</i>), but with a long noun object the particle usually comes first: <i>carried out a large-scale study</i>.'] },
          { q: '2.', a: 'turned them off', steps: ['Pronoun object in a separable verb goes in the middle.'] },
          { q: '3.', a: 'look into the problem / investigate the problem', steps: ['<i>Look into</i> is inseparable.', 'In Task 2, <i>investigate</i> is more formal.'] },
          { q: '4.', a: 'cut down on sugar', steps: ['Three-part verb: <i>cut down on</i>.'] }
        ],
        lesson: 'Know each phrasal verb\'s type (intransitive, separable, inseparable, three-part) and register.'
      }
    ],
    dos: ['Put pronoun objects between the verb and particle in separable verbs.', 'Keep three-part verbs together.', 'Use formal phrasal verbs (carry out, set up, bring about) in Task 2.', 'Use natural phrasal verbs in Speaking.'],
    donts: ['Don\'t write turn off it, pick up them.', 'Don\'t separate inseparable verbs: not look them after.', 'Don\'t fill a formal essay with informal phrasal verbs.'],
    careful: [{ title: 'Particle changes meaning', body: '<p><i>put off</i> (postpone) · <i>put out</i> (extinguish) · <i>put up with</i> (tolerate) · <i>put forward</i> (propose).</p>' }],
    faq: [{ q: 'Are phrasal verbs informal?', a: '<p>Some are (<i>hang out, mess up</i>); many are neutral or formal (<i>carry out, set up, point out, account for</i>). Check the register in a learner\'s dictionary.</p>' }],
    exercises: {
      id: 'ch-grammar-phrasal-verbs',
      title: 'Chapter exercises: phrasal verbs',
      groups: [
        {
          kind: 'choice', instructions: 'Choose the correct option, <b>A or B</b>.',
          questions: [
            { n: 1, q: 'The music was too loud, so I ___.', opts: ['turned down it', 'turned it down'], a: 'B', x: 'Separable verb: pronoun in the middle.' },
            { n: 2, q: 'Who will ___ while you are away?', opts: ['look the children after', 'look after the children'], a: 'B', x: '<i>Look after</i> is inseparable.' },
            { n: 3, q: 'Researchers ___ a survey of 2,000 households. (Task 2)', opts: ['carried out', 'did out'], a: 'A', x: '<i>Carry out</i> a survey / study / experiment.' },
            { n: 4, q: 'Most formal equivalent of "find out":', opts: ['discover', 'get to know'], a: 'A', x: '<i>Discover / establish / determine</i> are formal alternatives.' }
          ]
        },
        {
          kind: 'gap', instructions: 'Write <b>ONE WORD ONLY</b>.',
          questions: [
            { n: 5, q: 'We must come up {} a better plan.', a: 'with', x: '<i>come up with</i> = think of.' },
            { n: 6, q: 'People should cut down {} processed food.', a: 'on', x: '<i>cut down on</i> = reduce.' },
            { n: 7, q: 'Women account {} 60% of the workforce.', a: 'for', x: '<i>account for</i> = make up (a proportion).' },
            { n: 8, q: 'The meeting was put {} until next week.', a: 'off', x: '<i>put off</i> = postpone.' }
          ]
        }
      ]
    },
    checklist: ['I know whether my phrasal verbs are separable.', 'I place pronoun objects correctly.', 'I choose formal or informal verbs to fit the task.'],
    summary: ['Phrasal verbs = verb + particle(s), with idiomatic meanings.', 'Types: intransitive, separable, inseparable, three-part.', 'Separable + pronoun: turn it off.', 'Register: natural in Speaking; choose formal ones in Writing.'],
    references: [{ title: 'In this book: Phrasal verbs word bank', url: '/vocabulary/phrasal' }, ...grammarBooks, { title: 'Michael McCarthy and Felicity O\'Dell, English Phrasal Verbs in Use (Cambridge University Press)', note: 'Intermediate and Advanced volumes.' }, gra]
  }
};

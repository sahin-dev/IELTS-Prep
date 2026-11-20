import type { Chapter, Reference } from '@/lib/types';
import { grammarBooks } from './grammar-pos-a';

/* Grammar masterclass, Part C (sentence structure) – clause elements, reported speech, sentence transformation */

const BC = 'https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/';
const gra: Reference = { title: 'IELTS Writing band descriptors (public version)', url: 'https://ielts.org/cdn/ielts-downloadable-assets/ielts-guidance-and-support/ielts-guides/ielts-writing-band-descriptors.pdf', note: 'Grammatical Range and Accuracy: range of structures, error-free sentences, punctuation.' };

export const structChapters: Record<string, Chapter> = {
  /* ===================================================================== SUBJECT AND PREDICATE */
  'subject-predicate': {
    intro: `
<p>Every English clause has two main parts. The <b>subject</b> is what the clause is about – usually the person or thing doing the action or being described. The <b>predicate</b> is everything else: the verb and whatever completes it. In <i><b>The rapid growth of cities</b> | <b>has put pressure on public services</b></i>, the first part is the subject and the second is the predicate.</p>
<p>Inside the predicate, grammarians identify a small set of <b>clause elements</b>: the verb (V), objects (O), complements (C) and adverbials (A). English clauses are built from just seven basic patterns of these elements, and every long, sophisticated academic sentence is a combination or expansion of them. Understanding the patterns is the most reliable way to avoid the two biggest sentence-level errors in IELTS Writing: <b>fragments</b> (an incomplete sentence, usually missing a subject or finite verb) and <b>run-on sentences</b> (two clauses joined without proper punctuation or a conjunction).</p>
<p>This chapter explains subjects and predicates, the clause elements and the seven patterns, independent and dependent clauses (also called main and subordinate clauses), finite and non-finite clauses, and English word order. It is the foundation for the chapters on sentence types, clauses and punctuation.</p>`,
    facts: [
      ['Subject', 'What the clause is about; comes before the verb in statements'],
      ['Predicate', 'The verb + objects, complements, adverbials'],
      ['Clause elements', 'S · V · O · C · A'],
      ['Basic patterns', 'SV, SVO, SVC, SVA, SVOO, SVOC, SVOA'],
      ['Independent clause', 'Can stand alone as a sentence'],
      ['Dependent clause', 'Needs a main clause (because…, which…, if…)']
    ],
    method: [
      { title: 'Find the finite verb first', body: '<p>The finite verb shows tense and agrees with the subject. Every independent clause needs one. If you cannot find a finite verb, you have a fragment.</p>', example: '<i>The government\'s decision to raise taxes.</i> (no finite verb – fragment) → <i>The government\'s decision to raise taxes <b>was</b> unpopular.</i>' },
      { title: 'Then find the subject: ask "who or what + verb?"', body: '<p>The subject can be a noun phrase, a pronoun, an <i>-ing</i> clause (<i>Cycling to work saves money</i>), a <i>to</i>-infinitive (rare and formal), or a <i>that</i>/<i>wh</i>-clause (<i>What surprised me was…</i>). Long subjects are common in academic English – the verb agrees with the head noun.</p>', example: '<i>[The number of people who work from home] <b>has</b> tripled.</i> (subject head: <i>number</i>)' },
      { title: 'Check what the verb needs to complete it', body: '<p>Some verbs need nothing (<i>Prices rose</i>), some need an object (<i>Governments raised taxes</i>), some a complement (<i>The plan seems sensible</i>), some an adverbial (<i>The museum is in the centre</i>), some two objects (<i>The school gave students laptops</i>). A missing obligatory element makes the clause incomplete.</p>', example: '✗ <i>The company provides to employees.</i> → ✓ <i>The company provides <b>training</b> to employees.</i> / <i>provides employees <b>with training</b></i>' },
      { title: 'Keep the basic word order: subject – verb – object', body: '<p>English relies on word order to show meaning. Do not separate the verb from its object with an adverbial, and keep the subject before the verb in statements.</p>', example: '✗ <i>Governments should provide immediately help.</i> → ✓ <i>Governments should <b>immediately</b> provide help</i> / <i>provide help <b>immediately</b>.</i>' },
      { title: 'Decide whether each clause is independent or dependent', body: '<p>An independent (main) clause can stand alone. A dependent (subordinate) clause begins with a subordinator (<i>because, although, when, if, that, which, who</i>) and must be attached to a main clause.</p>', example: '<i>[Although the policy was expensive]</i> (dependent) <i>[it reduced crime]</i> (independent).' },
      { title: 'Join independent clauses correctly – or separate them', body: '<p>Two independent clauses need a full stop, a semicolon, or a coordinating conjunction (with a comma). A comma alone is a <b>comma splice</b> (run-on).</p>', example: '✗ <i>Prices rose, people bought less.</i> → ✓ <i>Prices rose<b>, so</b> people bought less.</i> / ✓ <i>Prices rose<b>;</b> people bought less.</i>' }
    ],
    sections: [
      {
        id: 'patterns', title: 'The seven basic clause patterns',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Pattern</th><th>Example</th><th>Typical verbs</th></tr>
<tr><td>S V</td><td><i>Unemployment | fell.</i></td><td>Intransitive: rise, fall, happen, arrive, disappear</td></tr>
<tr><td>S V O</td><td><i>The council | built | a new library.</i></td><td>Transitive: build, reduce, cause, affect, discuss</td></tr>
<tr><td>S V C</td><td><i>The results | were | disappointing.</i></td><td>Linking: be, become, seem, remain, appear</td></tr>
<tr><td>S V A</td><td><i>The station | is | next to the river.</i></td><td>be, live, stay, go (+ place/time)</td></tr>
<tr><td>S V O O</td><td><i>The scheme | gives | young people | free travel.</i></td><td>give, offer, send, show, lend, teach</td></tr>
<tr><td>S V O C</td><td><i>Many people | consider | the tax | unfair.</i></td><td>consider, find, make, call, keep, elect</td></tr>
<tr><td>S V O A</td><td><i>Parents | should put | screens | out of the bedroom.</i></td><td>put, place, keep, take (+ place)</td></tr>
</table></div>
<p>Any of these can be expanded with optional adverbials (<i>In 2010, unemployment fell sharply in most regions</i>) and with longer phrases and clauses in each slot. However long a sentence becomes, its core is one of these patterns.</p>`
      },
      {
        id: 'clauses', title: 'Independent, dependent, finite and non-finite clauses',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Term</th><th>Meaning</th><th>Example</th></tr>
<tr><td>Independent / main clause</td><td>Complete; can stand alone</td><td><i>The city expanded.</i></td></tr>
<tr><td>Dependent / subordinate clause</td><td>Begins with a subordinator; cannot stand alone</td><td><i>…because the economy grew.</i></td></tr>
<tr><td>Finite clause</td><td>Has a verb showing tense</td><td><i>…which <b>was built</b> in 1990</i></td></tr>
<tr><td>Non-finite clause</td><td>Has an <i>-ing</i>, <i>-ed</i> or <i>to</i>-infinitive verb, no tense</td><td><i><b>Built</b> in 1990, the bridge…</i> · <i><b>To reduce</b> costs, …</i> · <i><b>Having finished</b>, …</i></td></tr>
</table></div>
<p>Non-finite clauses are a compact way of adding information and are a feature of Band 7–9 writing (see <a href="/grammar/participles">Participles</a>). They must always be attached to a main clause – and their implied subject must be the subject of that main clause.</p>`
      },
      {
        id: 'errors', title: 'Fragments and run-on sentences',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Error</th><th>Example</th><th>Correction</th></tr>
<tr><td>Fragment: no finite verb</td><td><i>The main reason for this increase.</i></td><td><i>The main reason for this increase <b>is</b> cost.</i></td></tr>
<tr><td>Fragment: dependent clause alone</td><td><i>Because public transport is cheaper.</i></td><td>Join it: <i>Many people use buses because public transport is cheaper.</i></td></tr>
<tr><td>Fragment: no subject</td><td><i>Is important to study.</i></td><td><i><b>It</b> is important to study.</i></td></tr>
<tr><td>Comma splice</td><td><i>Cars are convenient, they cause pollution.</i></td><td><i>…convenient<b>, but</b> they…</i> / <i>…convenient<b>;</b> however, they…</i></td></tr>
<tr><td>Fused sentence</td><td><i>Cars are convenient they cause pollution.</i></td><td>As above</td></tr>
</table></div>`
      },
      {
        id: 'band-impact', title: 'How sentence structure affects your band',
        html: `<p>Sentence-boundary errors are among the features that most clearly separate Band 6 from Band 7 in Grammatical Range and Accuracy: the descriptors mention punctuation and the control of complex structures. A candidate whose sentences are grammatically complete and correctly joined can then build range on a secure base; a candidate who produces fragments and run-ons loses accuracy precisely in the long sentences meant to show range.</p>`
      }
    ],
    worked: [
      {
        title: 'Analysing and repairing sentences',
        questions: '<ol><li>The introduction of congestion charges in many large cities around the world.</li><li>Online learning is flexible, students can study at any time.</li><li>Because of the government provided funding, the project succeeded.</li><li>Many experts consider that this policy is unfair.</li></ol>',
        walk: [
          { q: '1.', a: 'Add a finite verb', steps: ['A long noun phrase but no verb: a fragment.', '✓ <i>The introduction of congestion charges in many large cities around the world <b>has reduced</b> traffic.</i>'] },
          { q: '2.', a: 'Join the clauses correctly', steps: ['Two independent clauses with only a comma: comma splice.', '✓ <i>Online learning is flexible<b>, so</b> students can study at any time.</i> / ✓ <i>Online learning is flexible<b>:</b> students can study at any time.</i>'] },
          { q: '3.', a: 'Because the government provided funding, …', steps: ['<i>Because of</i> is followed by a noun phrase; here a clause follows. Use <i>because</i>, or keep <i>because of</i> with a noun: <i>Because of government funding, …</i>'] },
          { q: '4.', a: 'Many experts consider this policy unfair. / believe that…', steps: ['<i>Consider</i> works best in the SVOC pattern: <i>consider</i> + object + complement. With a <i>that</i>-clause, <i>believe</i> or <i>argue</i> is more natural.'] }
        ],
        lesson: 'For every sentence: find the finite verb, find the subject, check the verb\'s pattern, and check how clauses are joined.'
      }
    ],
    dos: ['Check every sentence for a subject and a finite verb.', 'Learn the pattern each important verb takes.', 'Keep subject – verb – object together.', 'Join independent clauses with a conjunction, semicolon or full stop.', 'Attach every dependent clause to a main clause.'],
    donts: ['Don\'t write sentences without a finite verb.', 'Don\'t join two sentences with only a comma.', 'Don\'t leave because-, although- or which-clauses on their own.', 'Don\'t put an adverbial between a verb and its object.'],
    careful: [
      { title: 'Very long subjects', body: '<p>When a subject contains a relative clause, writers sometimes forget the main verb.</p>', example: '✗ <i>People who live in cities and work in offices all day.</i> → ✓ <i>People who live in cities and work in offices all day <b>often get</b> too little exercise.</i>' },
      { title: '"Consider", "find", "make" + object + complement', body: '<p>No <i>as</i> or <i>to be</i> is normally needed: <i>They found the test difficult. This makes the city attractive.</i></p>' }
    ],
    faq: [{ q: 'Are "main clause" and "independent clause" the same?', a: '<p>Yes – different books use different terms. Likewise "dependent" and "subordinate" clause mean the same.</p>' }],
    exercises: {
      id: 'ch-grammar-subject-predicate',
      title: 'Chapter exercises: subject, predicate and clauses',
      groups: [
        {
          kind: 'choice', title: 'Part A: complete or not?', instructions: 'Is each sentence correct? Choose <b>A, B or C</b>.',
          questions: [
            { n: 1, q: '"The rising cost of housing in major cities."', opts: ['Correct', 'Fragment – no finite verb', 'Comma splice'], a: 'B', x: 'A noun phrase with no finite verb.' },
            { n: 2, q: '"Tourism creates jobs, it also damages the environment."', opts: ['Correct', 'Fragment', 'Comma splice'], a: 'C', x: 'Two independent clauses joined by a comma alone.' },
            { n: 3, q: '"Although many people disagree, the law was passed."', opts: ['Correct', 'Fragment', 'Comma splice'], a: 'A', x: 'A dependent clause correctly attached to a main clause.' },
            { n: 4, q: '"Because it is cheaper."', opts: ['Correct', 'Fragment', 'Comma splice'], a: 'B', x: 'A dependent clause on its own.' },
            { n: 5, q: '"Many students find the course challenging."', opts: ['Correct (SVOC)', 'Fragment', 'Comma splice'], a: 'A', x: 'Subject – verb – object – complement.' }
          ]
        },
        {
          kind: 'gap', title: 'Part B: complete the sentence', instructions: 'Write <b>ONE WORD ONLY</b>.',
          questions: [
            { n: 6, q: '{} is essential that children learn to swim.', a: 'It', x: 'A dummy subject is needed.' },
            { n: 7, q: 'Prices rose sharply, {} many families bought less.', a: 'so', x: 'A coordinating conjunction is needed to join two independent clauses after the comma.' },
            { n: 8, q: 'The scheme offers young people free bus travel. Pattern: S V O {}', a: 'O', x: '<i>offers</i> + indirect object (<i>young people</i>) + direct object (<i>free bus travel</i>): SVOO.' }
          ]
        }
      ]
    },
    checklist: ['I can find the subject and finite verb of any clause.', 'I know the seven clause patterns.', 'I can tell independent from dependent clauses.', 'I never write fragments or comma splices.'],
    summary: ['A clause = subject + predicate; every independent clause needs a finite verb.', 'Clause elements: S, V, O, C, A in seven basic patterns.', 'Dependent clauses must be attached to a main clause.', 'Join independent clauses with a conjunction, semicolon or full stop.'],
    references: [{ title: 'British Council LearnEnglish: Clause, phrase and sentence', url: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference', note: 'See the section on clauses and sentences in the grammar reference.' }, ...grammarBooks, { title: 'Randolph Quirk et al., A Comprehensive Grammar of the English Language (Longman, 1985)', note: 'The source of the seven clause patterns used in most modern grammars.' }, gra]
  },

  /* ===================================================================== REPORTED SPEECH */
  'reported-speech': {
    intro: `
<p><b>Direct speech</b> repeats someone's exact words, inside quotation marks: <i>She said, "I'm moving to Madrid."</i> <b>Indirect</b> or <b>reported speech</b> tells us what someone said without quoting them: <i>She said (that) she was moving to Madrid.</i> Reporting usually involves changes – to tenses, pronouns, and words for time and place – because the situation when we report is different from the situation when the words were spoken.</p>
<p>Reported speech matters in IELTS more than many candidates expect. In <b>Listening and Reading</b>, answers are often a reported paraphrase of what a speaker or writer said, so recognising reported structures helps you locate answers. In <b>Task 2</b>, you report other people's views with verbs such as <i>argue, claim, suggest</i> and <i>believe</i> – and the precise reporting verb shows your attitude to the view. In <b>Speaking Part 2</b> stories and <b>General Training letters</b>, you report what people told you (<i>The receptionist assured me that the room would be ready</i>).</p>`,
    facts: [
      ['Reporting verbs', 'say, tell, ask, explain, claim, argue, suggest, warn, admit…'],
      ['say vs tell', 'say (that)… · tell + person + (that)…'],
      ['Backshift', 'is → was, has done → had done, will → would'],
      ['Questions', 'Statement word order; if/whether for yes/no'],
      ['Commands', 'tell / ask + person + (not) to + base'],
      ['Task 2 use', 'Some argue that… Critics claim that…']
    ],
    method: [
      { title: 'Choose the right reporting verb and pattern', body: '<p><i>Say</i> + (that) clause; <i>tell</i> + person + (that) clause; <i>ask</i> + (person) + question clause. Many other verbs report more precisely – and each has its own pattern (section 2).</p>', example: '✗ <i>She said me that…</i> → ✓ <i>She <b>told me</b> that…</i> / ✓ <i>She <b>said</b> (to me) that…</i>' },
      { title: 'Move tenses back when the reporting verb is past', body: '<p>Present → past; present perfect and past → past perfect; <i>will → would, can → could, may → might, must → had to</i> (or <i>must</i>). <i>Would, could, should, might</i> and the past perfect do not change.</p>', example: '"I <b>have finished</b>." → <i>He said he <b>had finished</b>.</i> · "We <b>will</b> help." → <i>They promised they <b>would</b> help.</i>' },
      { title: 'Keep the original tense when the situation is still true – or when the reporting verb is present', body: '<p>Backshift is optional if the statement is still true at the time of reporting, and it does not happen when the reporting verb is present (<i>says, argues</i>).</p>', example: '<i>She told me she <b>lives</b> in Rome</i> (she still does). · <i>The author <b>argues</b> that technology <b>is</b> harmful.</i>' },
      { title: 'Change pronouns, and time and place words, to fit the new situation', body: '<p><i>I → he/she, my → his/her, today → that day, tomorrow → the next day, yesterday → the day before, here → there, now → then, ago → before, next week → the following week</i> – when the time or place has changed.</p>' },
      { title: 'Report questions with statement word order', body: '<p>Yes/no questions: <i>if</i> or <i>whether</i>. Wh-questions: keep the question word. No <i>do/does/did</i>, no question mark.</p>', example: '"<b>Do</b> you <b>live</b> here?" → <i>He asked <b>if I lived</b> there.</i> · "Where <b>is</b> the station?" → <i>She asked <b>where the station was</b>.</i> (✗ <i>where was the station</i>)' },
      { title: 'Report commands and requests with to-infinitive', body: '<p><i>tell / ask / advise / warn / remind</i> + person + (<i>not</i>) <i>to</i> + base.</p>', example: '"Don\'t be late." → <i>The teacher told us <b>not to be</b> late.</i>' }
    ],
    sections: [
      {
        id: 'verbs', title: 'Reporting verbs and their patterns',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Pattern</th><th>Verbs</th><th>Example</th></tr>
<tr><td>verb + that-clause</td><td>say, claim, argue, believe, explain, state, maintain, admit, deny, insist, suggest, recommend, point out</td><td><i>Critics <b>argue that</b> the policy is unfair.</i></td></tr>
<tr><td>verb + person + that-clause</td><td>tell, inform, assure, remind, warn, convince, persuade</td><td><i>The manager <b>assured me that</b> it would be fixed.</i></td></tr>
<tr><td>verb + person + to-infinitive</td><td>tell, ask, advise, warn, encourage, urge, remind, invite, persuade</td><td><i>Doctors <b>advise patients to</b> exercise.</i></td></tr>
<tr><td>verb + to-infinitive</td><td>agree, offer, promise, refuse, threaten, claim</td><td><i>The company <b>refused to</b> refund me.</i></td></tr>
<tr><td>verb + -ing</td><td>admit, deny, suggest, recommend, mention</td><td><i>He <b>denied taking</b> the money.</i></td></tr>
<tr><td>verb + (person) + preposition + -ing</td><td>apologise for, insist on, accuse someone of, blame someone for, congratulate someone on</td><td><i>They <b>apologised for causing</b> the delay.</i></td></tr>
</table></div>
<p><b>suggest</b> and <b>recommend</b>: + <i>-ing</i> or + <i>that</i> + subject + (should) + base. Never + person + <i>to</i>: ✗ <i>suggested me to apply</i> → ✓ <i>suggested <b>that I apply</b></i>.</p>`
      },
      {
        id: 'attitude', title: 'Reporting verbs show attitude in Task 2',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Verb</th><th>What it signals</th></tr>
<tr><td>state, explain, point out, note</td><td>Neutral, or the writer accepts the point (<i>point out</i> suggests it is true)</td></tr>
<tr><td>argue, maintain, contend</td><td>A position that may be disputed</td></tr>
<tr><td>claim, allege</td><td>The writer may doubt it</td></tr>
<tr><td>suggest, imply</td><td>Indirect or tentative</td></tr>
<tr><td>admit, concede, acknowledge</td><td>Accepting a point against one's own position</td></tr>
<tr><td>show, demonstrate, prove</td><td>Treated as established by evidence</td></tr>
</table></div>
<p>Compare: <i>Some people <b>claim</b> that video games cause violence</i> (the writer is sceptical) and <i>Research <b>shows</b> that sleep improves memory</i> (the writer accepts it). Choosing the verb precisely is part of Lexical Resource and helps make your position clear (Task Response).</p>`
      },
      {
        id: 'impersonal', title: 'Impersonal reporting: "It is said that…" / "X is said to…"',
        html: `
<p>Formal writing often reports general beliefs without naming the source:</p>
<ul>
<li><i><b>It is</b> widely <b>believed that</b> exercise improves mood.</i></li>
<li><i>Exercise <b>is</b> widely <b>believed to improve</b> mood.</i></li>
<li><i>The castle <b>is thought to have been built</b> in the 12th century.</i> (perfect infinitive for the past)</li>
</ul>
<p>Verbs used this way: <i>believe, think, say, report, expect, estimate, know, consider, claim</i>. These structures are also common in Reading passages, where they introduce views the writer may not share – important for Yes / No / Not Given questions.</p>`
      },
      {
        id: 'band-impact', title: 'How reported speech affects your band',
        html: `<ul><li><b>Task 2:</b> precise reporting verbs and impersonal structures present other views clearly and show range.</li><li><b>GRA:</b> errors in reported questions (<i>asked where was</i>), <i>said me</i>, <i>suggest me to</i> are frequent and noticeable.</li><li><b>Listening and Reading:</b> recognising reported paraphrase helps you match questions to the text.</li></ul>`
      }
    ],
    worked: [
      {
        title: 'Reporting a conversation in a GT complaint letter',
        source: `<div class="prompt-box"><p>What the shop assistant said on 2 May: "The laptop will be repaired by Friday. We'll call you when it's ready. Don't worry – there's no charge."</p></div>`,
        walk: [
          { q: 'First statement', a: 'The assistant told me that the laptop would be repaired by the Friday of that week.', steps: ['<i>tell</i> + person + <i>that</i>; <i>will → would</i>; time made clear.'] },
          { q: 'Promise', a: 'She promised that they would call me when it was ready. / She promised to call me…', steps: ['<i>promise</i> + <i>that</i>-clause or + to-infinitive.'] },
          { q: 'Assurance', a: 'She also assured me that there would be no charge.', steps: ['<i>assure</i> + person + <i>that</i> – a precise verb that strengthens the complaint.'] }
        ],
        lesson: 'Precise reporting verbs (assure, promise) make a complaint letter more persuasive than repeated "she said".'
      }
    ],
    dos: ['Use tell + person and say + (that).', 'Backshift tenses after a past reporting verb unless the fact is still true.', 'Use statement word order in reported questions.', 'Use precise verbs: argue, claim, point out, admit.', 'Use It is believed that… for general views.'],
    donts: ['Don\'t write "said me" or "told that".', 'Don\'t keep question word order: not "asked where was the station".', 'Don\'t use do/did in reported questions.', 'Don\'t write "suggested me to".'],
    careful: [{ title: 'Reporting in the present', body: '<p>When you report a writer or a chart, use the present: <i>The author <b>argues</b>… The chart <b>shows</b>…</i> – no backshift.</p>' }],
    faq: [{ q: 'Is "that" necessary after say/tell?', a: '<p>No – <i>She said (that) she was tired</i>. In formal writing it is usually kept, especially after verbs such as <i>argue, claim, state</i>.</p>' }],
    exercises: {
      id: 'ch-grammar-reported-speech',
      title: 'Chapter exercises: reported speech',
      groups: [
        {
          kind: 'choice', instructions: 'Choose the correct option, <b>A, B or C</b>.',
          questions: [
            { n: 1, q: '"I will call you tomorrow." → She said she ___ me the next day.', opts: ['will call', 'would call', 'calls'], a: 'B', x: '<i>will → would</i> after a past reporting verb.' },
            { n: 2, q: '"Where is the library?" → He asked me ___.', opts: ['where was the library', 'where the library was', 'where did the library be'], a: 'B', x: 'Statement word order in reported questions.' },
            { n: 3, q: 'The receptionist ___ me that the room was ready.', opts: ['said', 'told', 'spoke'], a: 'B', x: '<i>Tell</i> + person + <i>that</i>.' },
            { n: 4, q: 'My tutor suggested ___ more academic articles.', opts: ['me to read', 'that I read', 'me reading to'], a: 'B', x: '<i>suggest that</i> + subject + base (or <i>suggest reading</i>).' },
            { n: 5, q: '"Don\'t touch the exhibits." → The guide told us ___ the exhibits.', opts: ['not touch', 'not to touch', 'don\'t touch'], a: 'B', x: '<i>tell</i> + person + <i>not to</i> + base.' },
            { n: 6, q: 'Which verb shows the writer doubts the view?', opts: ['Research shows that…', 'Some people claim that…', 'Experts point out that…'], a: 'B', x: '<i>Claim</i> often signals that the writer is not convinced.' }
          ]
        },
        {
          kind: 'gap', instructions: 'Write <b>ONE WORD ONLY</b>.',
          questions: [
            { n: 7, q: '"Do you have a student card?" → She asked {} I had a student card.', a: 'if|whether', x: 'Reported yes/no question: <i>if</i> or <i>whether</i>.' },
            { n: 8, q: 'The minister is said {} have resigned last night.', a: 'to', x: '<i>is said to</i> + perfect infinitive (<i>have resigned</i>) for a past action.' },
            { n: 9, q: 'He apologised {} arriving late.', a: 'for', x: '<i>apologise for</i> + -ing.' }
          ]
        }
      ]
    },
    checklist: ['I use say/tell correctly.', 'I can backshift tenses and know when not to.', 'I report questions with statement word order.', 'I use precise reporting verbs in Task 2.'],
    summary: ['Reported speech reports words without quoting them.', 'After a past reporting verb, tenses usually move back.', 'Questions: statement order; if/whether; no do/did.', 'Commands: tell/ask + person + (not) to.', 'Reporting verbs (argue, claim, admit) show attitude.'],
    references: [{ title: 'British Council LearnEnglish: Reporting and reported speech (grammar reference)', url: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference' }, ...grammarBooks, gra]
  },

  /* ===================================================================== SENTENCE TRANSFORMATION */
  'sentence-transformation': {
    intro: `
<p><b>Sentence transformation</b> means expressing the same meaning with a different grammatical structure: <i>Although it rained, the match continued</i> → <i>Despite the rain, the match continued</i> → <i>It rained; nevertheless, the match continued</i>. It is the grammar behind <b>paraphrasing</b>, and paraphrasing runs through the whole IELTS test.</p>
<p>In <b>Reading and Listening</b>, the questions almost never repeat the words of the text: they transform them, and you must recognise the same meaning in a different structure. In <b>Writing</b>, you paraphrase the question in your introduction (Task 1 and Task 2), and you vary your sentences to show range. In <b>Speaking</b>, transforming a sentence when you cannot find a word keeps you fluent. This chapter collects the main transformation techniques in one place, with exercises in the style of the key-word transformations used in Cambridge exams.</p>`,
    facts: [
      ['What it is', 'Same meaning, different structure'],
      ['Used for', 'Paraphrase in Writing; recognising paraphrase in Reading and Listening'],
      ['Main techniques', 'Voice, word class, linkers, comparison, conditionals, reporting'],
      ['Golden rule', 'The meaning must not change'],
      ['Watch', 'Qualifiers (some/all, often/always) and tense'],
      ['Related chapter', 'Paraphrasing techniques']
    ],
    method: [
      { title: 'Identify the core meaning first', body: '<p>Who does what, when, and with what qualification? Write it down in note form before you transform.</p>', example: '<i>The chart shows how many people used the library between 2000 and 2020.</i> → core: <i>number of library users, 2000–2020</i>.' },
      { title: 'Change the voice (active ↔ passive)', body: '<p>Useful when the doer is unknown or unimportant, or to change the focus.</p>', example: '<i>The council built the bridge in 1990.</i> → <i>The bridge was built (by the council) in 1990.</i>' },
      { title: 'Change the word class', body: '<p>Verb ↔ noun, adjective ↔ noun, adverb ↔ adjective.</p>', example: '<i>Prices rose sharply.</i> → <i>There was a sharp rise in prices.</i>' },
      { title: 'Change the linking structure', body: '<p>Conjunction ↔ preposition ↔ linking adverb (see <a href="/grammar/conjunctions">Conjunctions</a>).</p>', example: '<i>Because it was expensive, few people bought it.</i> → <i>Because of its high price, …</i> → <i>It was expensive; as a result, few people bought it.</i>' },
      { title: 'Change the comparison', body: '<p>Comparative ↔ <i>not as … as</i> ↔ superlative.</p>', example: '<i>Trains are faster than buses.</i> → <i>Buses are not as fast as trains.</i>' },
      { title: 'Check that nothing has changed', body: '<p>Compare the two sentences for meaning, qualifiers and tense. A transformation that changes <i>some</i> to <i>all</i>, or <i>may</i> to <i>will</i>, is not a paraphrase.</p>', example: '<i>Some students find it difficult</i> ≠ <i>Students find it difficult.</i>' }
    ],
    sections: [
      {
        id: 'techniques', title: 'A catalogue of transformations',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Technique</th><th>Original</th><th>Transformed</th></tr>
<tr><td>Active → passive</td><td>Factories produce most of the waste.</td><td>Most of the waste <b>is produced by</b> factories.</td></tr>
<tr><td>Verb → noun</td><td>The population grew rapidly.</td><td>There was rapid <b>growth</b> in the population.</td></tr>
<tr><td>Clause → phrase</td><td>Although the cost was high, …</td><td><b>Despite the high cost</b>, …</td></tr>
<tr><td>Comparative → not as … as</td><td>Rural areas are cheaper than cities.</td><td>Cities are <b>not as cheap as</b> rural areas.</td></tr>
<tr><td>Superlative → comparative</td><td>It is the tallest building in the city.</td><td><b>No other building</b> in the city <b>is as tall as</b> it.</td></tr>
<tr><td>if → unless / provided that</td><td>If we do not act, it will get worse.</td><td><b>Unless</b> we act, it will get worse.</td></tr>
<tr><td>Conditional → without / otherwise</td><td>If it were not for tourism, the town would decline.</td><td><b>Without</b> tourism, the town would decline.</td></tr>
<tr><td>too / enough ↔ so … that</td><td>He was too tired to continue.</td><td>He was <b>so</b> tired <b>that</b> he could not continue.</td></tr>
<tr><td>Direct → reported</td><td>"We will lower taxes," the minister said.</td><td>The minister <b>promised to lower</b> taxes.</td></tr>
<tr><td>Impersonal passive</td><td>People believe that the painting is genuine.</td><td>The painting <b>is believed to be</b> genuine.</td></tr>
<tr><td>Cleft</td><td>Cost worries most people.</td><td><b>What</b> worries most people <b>is</b> cost.</td></tr>
<tr><td>Time expression</td><td>I started learning English ten years ago.</td><td>I <b>have been learning</b> English <b>for</b> ten years.</td></tr>
<tr><td>Modal ↔ adjective/verb</td><td>It is possible that prices will fall.</td><td>Prices <b>may</b> fall. / Prices <b>are likely to</b> fall.</td></tr>
</table></div>`
      },
      {
        id: 'ielts-intro', title: 'Transforming the question in a Task 2 introduction',
        html: `
<p>Question: <i>"Some people believe that university education should be free for all students."</i></p>
<ul>
<li>Word class + synonyms: <i>It is often argued that higher education should be provided at no cost to students.</i></li>
<li>Passive / impersonal: <i>Free university tuition is seen by many as a right.</i></li>
<li>Clause → noun phrase: <i>The idea of abolishing university fees has wide support.</i></li>
</ul>
<p>Avoid copying more than a few words in sequence. Copied language from the question is not credited by the examiner, and an introduction that only copies the question shows no range.</p>`
      },
      {
        id: 'band-impact', title: 'How transformation affects your band',
        html: `<p>The ability to express one idea in several structures supports Grammatical Range (variety of structures) and Lexical Resource (paraphrase is named in the Speaking descriptors and is central to Writing). In Reading and Listening it is the core skill behind correct answers.</p>`
      }
    ],
    worked: [
      {
        title: 'Key-word transformations',
        questions: '<p>Complete the second sentence so that it means the same as the first, using the word in capitals.</p><ol><li>The government built the hospital in 2015. WAS</li><li>Although the weather was bad, the event was a success. DESPITE</li><li>If you do not book early, you will not get a seat. UNLESS</li></ol>',
        walk: [
          { q: '1.', a: 'The hospital was built (by the government) in 2015.', steps: ['<i>WAS</i> points to the passive.', 'Object → subject; <i>was</i> + past participle.'] },
          { q: '2.', a: 'Despite the bad weather, the event was a success.', steps: ['<i>Despite</i> + noun phrase: <i>the bad weather</i>.', 'Alternative: <i>Despite the weather being bad</i>.'] },
          { q: '3.', a: 'Unless you book early, you will not get a seat.', steps: ['<i>Unless</i> = if … not, so remove the negative from the condition.'] }
        ],
        lesson: 'Each key word signals a structure: WAS → passive, DESPITE → preposition + noun, UNLESS → positive condition.'
      }
    ],
    dos: ['Identify the core meaning before transforming.', 'Use several techniques, not only synonyms.', 'Check qualifiers and tense after transforming.', 'Paraphrase the question in your introductions.'],
    donts: ['Don\'t change the meaning or the strength of a claim.', 'Don\'t copy long phrases from the question.', 'Don\'t write unnatural transformations just to be different.'],
    careful: [{ title: 'Qualifiers change meaning', body: '<p><i>many, some, most, often, usually, may</i> must survive the transformation.</p>', example: '<i>Many people prefer…</i> → ✓ <i>A large number of people prefer…</i> · ✗ <i>People prefer…</i>' }],
    faq: [{ q: 'How many changes should a paraphrase make?', a: '<p>Enough that it is clearly your own sentence – usually a change of structure plus some synonyms – but not so many that it becomes unnatural or changes the meaning.</p>' }],
    exercises: {
      id: 'ch-grammar-sentence-transformation',
      title: 'Chapter exercises: sentence transformation',
      groups: [
        {
          kind: 'gap', instructions: 'Complete the second sentence so that it means the same as the first. Write <b>ONE WORD ONLY</b>.',
          questions: [
            { n: 1, q: 'Trains are more comfortable than buses. → Buses are not {} comfortable as trains.', a: 'as', x: '<i>not as … as</i>.' },
            { n: 2, q: 'Because of the strike, the airport closed. → The airport closed {} there was a strike.', a: 'because|as|since', x: 'Preposition + noun → conjunction + clause.' },
            { n: 3, q: 'People say that the city is very safe. → The city is said {} be very safe.', a: 'to', x: 'Impersonal passive: <i>is said to</i> + base.' },
            { n: 4, q: 'If we don\'t reduce emissions, temperatures will rise. → {} we reduce emissions, temperatures will rise.', a: 'Unless', x: '<i>Unless</i> = if … not.' },
            { n: 5, q: 'The bag was too heavy to carry. → The bag was so heavy {} I couldn\'t carry it.', a: 'that', x: '<i>so</i> + adjective + <i>that</i>.' },
            { n: 6, q: 'Sales increased dramatically. → There was a dramatic {} in sales.', a: 'increase|rise', x: 'Verb → noun: <i>a dramatic increase in</i>.' }
          ]
        },
        {
          kind: 'choice', instructions: 'Which sentence has the <b>same meaning</b> as the original? Choose <b>A, B or C</b>.',
          questions: [
            { n: 7, q: 'Original: "Some young people find it hard to save money."', opts: ['Young people cannot save money.', 'Saving money is difficult for a number of young people.', 'Most young people find saving easy.'], a: 'B', x: '<i>Some</i> → <i>a number of</i>; the qualifier is kept. A over-generalises; C changes the meaning.' },
            { n: 8, q: 'Original: "Without investment, the scheme would fail."', opts: ['If there were no investment, the scheme would fail.', 'The scheme failed because there was no investment.', 'The scheme will fail even with investment.'], a: 'A', x: '<i>Without</i> = <i>if there were no</i> (hypothetical). B describes a real past event.' }
          ]
        }
      ]
    },
    checklist: ['I can transform sentences using voice, word class, linkers, comparison and conditionals.', 'I check meaning, qualifiers and tense after transforming.', 'I can paraphrase a Task 2 question in two different ways.'],
    summary: ['Sentence transformation = same meaning, different structure.', 'It is the grammar of paraphrase, tested in every skill.', 'Techniques: voice, word class, linkers, comparison, conditionals, reporting, cleft.', 'Never change the meaning or the qualifiers.'],
    references: [{ title: 'In this book: Paraphrasing techniques', url: '/grammar/paraphrasing' }, ...grammarBooks, gra]
  }
};

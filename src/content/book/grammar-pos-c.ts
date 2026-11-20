import type { Chapter, Reference } from '@/lib/types';
import { grammarBooks } from './grammar-pos-a';

/* Grammar masterclass, Part A (parts of speech) – conjunctions, interjections, determiners */

const BC = 'https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/';
const gra: Reference = { title: 'IELTS Writing band descriptors (public version)', url: 'https://ielts.org/cdn/ielts-downloadable-assets/ielts-guidance-and-support/ielts-guides/ielts-writing-band-descriptors.pdf', note: 'See Coherence and Cohesion (cohesive devices) and Grammatical Range and Accuracy.' };
const speakingBd: Reference = { title: 'IELTS Speaking band descriptors (public version)', url: 'https://ielts.org/cdn/ielts-guides/ielts-speaking-band-descriptors.pdf', note: 'See Fluency and Coherence: hesitation, discourse markers and connectives.' };

export const grammarChaptersPosC: Record<string, Chapter> = {
  /* ===================================================================== CONJUNCTIONS */
  conjunctions: {
    intro: `
<p>A <b>conjunction</b> joins words, phrases or clauses and shows the relationship between them: addition (<i>and</i>), contrast (<i>but, although</i>), cause (<i>because</i>), result (<i>so</i>), condition (<i>if, unless</i>), time (<i>when, until</i>), purpose (<i>so that</i>). Conjunctions are what turn a list of separate statements into an argument: <i>Cars are convenient. They pollute.</i> is two facts; <i><b>Although</b> cars are convenient, they pollute</i> is a point of view.</p>
<p>There are three kinds. <b>Coordinating</b> conjunctions (<i>and, but, or, so, yet, for, nor</i>) join equal elements. <b>Correlative</b> conjunctions come in pairs (<i>both … and, not only … but also, either … or</i>). <b>Subordinating</b> conjunctions (<i>because, although, when, if, while, unless</i>…) make one clause depend on another, creating complex sentences – the structures that the Grammatical Range and Accuracy descriptors look for from Band 6 upwards.</p>
<p>The biggest source of error is not the conjunctions themselves but confusing them with words that have similar meanings and different grammar: <b>linking adverbs</b> (<i>however, therefore, moreover</i>), which cannot join clauses with a comma, and <b>prepositions</b> (<i>despite, because of, during</i>), which are followed by a noun, not a clause. This chapter sets out all three side by side, so that you choose the right structure every time.</p>`,
    facts: [
      ['Job', 'Joins words, phrases or clauses and shows their relationship'],
      ['Coordinating', 'for, and, nor, but, or, yet, so (FANBOYS)'],
      ['Correlative', 'both … and, either … or, neither … nor, not only … but also'],
      ['Subordinating', 'because, although, when, if, unless, while, whereas, so that…'],
      ['Not conjunctions', 'however, therefore (adverbs) · despite, because of (prepositions)'],
      ['Band link', 'Complex sentences (GRA) and cohesive devices (CC)']
    ],
    method: [
      {
        title: 'Decide the relationship you want to express',
        body: '<p>Before you join two ideas, name the relationship: addition, contrast, concession, cause, result, condition, time, purpose or comparison. Then choose a word for that relationship. Many weak essays use <i>and</i> for everything, or use <i>moreover</i> where the relationship is actually contrast.</p>',
        example: '<i>Online courses are cheap. Many students prefer classrooms.</i> → relationship: concession → <i><b>Although</b> online courses are cheap, many students prefer classrooms.</i>'
      },
      {
        title: 'Join equal clauses with a coordinating conjunction and a comma',
        body: '<p>Use <i>and, but, or, so, yet</i> to join two independent clauses. Put a comma before the conjunction when the clauses are long or have different subjects. <i>For</i> (= because) is formal and rare; <i>nor</i> is followed by inversion: <i>The plan is not cheap, <b>nor is it</b> popular.</i></p>',
        example: '<i>Public transport is cheap<b>, but</b> it is often crowded.</i> · <i>Rents rose sharply<b>, so</b> many families moved out of the city.</i>'
      },
      {
        title: 'Use a subordinating conjunction to make one idea depend on the other',
        body: '<p>Put the conjunction at the start of the dependent clause. The dependent clause can come first (followed by a comma) or second (usually no comma). Both orders are correct; starting with the dependent clause puts the emphasis on the main clause.</p>',
        example: '<i><b>Because</b> house prices are high, many young people rent.</i> · <i>Many young people rent <b>because</b> house prices are high.</i>'
      },
      {
        title: 'Use only one conjunction per link',
        body: '<p>A subordinating conjunction and a coordinating conjunction must not be used together for the same link. The commonest version of this error comes from languages that pair "although" with "but".</p>',
        example: '✗ <i><b>Although</b> it is expensive, <b>but</b> it is popular.</i> → ✓ <i><b>Although</b> it is expensive, it is popular.</i> / ✓ <i>It is expensive, <b>but</b> it is popular.</i>'
      },
      {
        title: 'Check that you have a clause, a noun phrase or a new sentence – and choose accordingly',
        body: '<p>Conjunctions are followed by a clause (subject + verb). Prepositions (<i>despite, because of, due to, during, in spite of</i>) are followed by a noun phrase or an <i>-ing</i> form. Linking adverbs (<i>however, therefore, moreover</i>) begin a new sentence or follow a semicolon. Section 3 has the full table.</p>',
        example: '<i><b>Although</b> it rained</i> (clause) · <i><b>Despite</b> the rain</i> (noun) · <i>It rained. <b>However,</b> …</i> (new sentence)'
      },
      {
        title: 'Keep correlative pairs parallel',
        body: '<p>The two parts of a correlative conjunction must be followed by the same kind of element: two adjectives, two noun phrases or two clauses.</p>',
        example: '✗ <i>The scheme is <b>both</b> cheap <b>and</b> it is effective.</i> → ✓ <i>The scheme is <b>both</b> cheap <b>and</b> effective.</i>'
      },
      {
        title: 'Never let a dependent clause stand alone',
        body: '<p>A clause beginning with <i>because, although, when, if, which</i> is not a sentence on its own. Attach it to a main clause. This "fragment" error is especially common when a writer adds a reason as an afterthought.</p>',
        example: '✗ <i>Many people prefer cars. Because they are convenient.</i> → ✓ <i>Many people prefer cars because they are convenient.</i>'
      }
    ],
    sections: [
      {
        id: 'subordinators', title: 'Subordinating conjunctions by meaning',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Meaning</th><th>Conjunctions</th><th>Example</th></tr>
<tr><td>Time</td><td>when, while, as, before, after, until, since, once, as soon as, whenever</td><td><i><b>Once</b> the tunnel opens, journey times will fall.</i></td></tr>
<tr><td>Reason</td><td>because, since, as</td><td><i><b>As</b> the population is ageing, health spending is rising.</i></td></tr>
<tr><td>Concession (surprising contrast)</td><td>although, though, even though, even if</td><td><i><b>Even though</b> the law exists, it is rarely enforced.</i></td></tr>
<tr><td>Contrast (two facts compared)</td><td>while, whereas</td><td><i>Sales rose in Asia, <b>whereas</b> they fell in Europe.</i></td></tr>
<tr><td>Condition</td><td>if, unless, provided (that), as long as, in case</td><td><i><b>Unless</b> emissions fall, temperatures will continue to rise.</i></td></tr>
<tr><td>Purpose</td><td>so that, in order that</td><td><i>Cities build cycle lanes <b>so that</b> people can travel safely.</i></td></tr>
<tr><td>Result</td><td>so … that, such … that</td><td><i>Housing is <b>so</b> expensive <b>that</b> many people cannot buy.</i> · <i>It was <b>such</b> a success <b>that</b>…</i></td></tr>
<tr><td>Comparison / manner</td><td>as, than, as if, as though</td><td><i>The city looks <b>as if</b> it has been rebuilt.</i></td></tr>
</table></div>
<div class="callout"><strong>Future meaning after time and condition conjunctions</strong>After <i>when, before, after, until, as soon as, once, if, unless</i>, use a <b>present</b> tense for future meaning: <i>When the new line <b>opens</b>, traffic will fall.</i> (✗ <i>When the new line will open</i>)</div>`
      },
      {
        id: 'correlatives', title: 'Correlative conjunctions',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Pair</th><th>Example</th><th>Grammar point</th></tr>
<tr><td>both … and</td><td><i><b>Both</b> the cost <b>and</b> the time <b>are</b> important.</i></td><td>Plural verb</td></tr>
<tr><td>either … or</td><td><i><b>Either</b> the students <b>or</b> the teacher <b>is</b> responsible.</i></td><td>Verb agrees with the nearer subject</td></tr>
<tr><td>neither … nor</td><td><i><b>Neither</b> the government <b>nor</b> the companies <b>have</b> acted.</i></td><td>Verb agrees with the nearer subject; no other negative</td></tr>
<tr><td>not only … but also</td><td><i>Cycling is <b>not only</b> cheap <b>but also</b> healthy.</i> · <i><b>Not only does</b> cycling save money, <b>but</b> it <b>also</b> improves health.</i></td><td>At the start of a sentence, <i>not only</i> is followed by inversion (auxiliary before subject)</td></tr>
<tr><td>whether … or</td><td><i><b>Whether</b> we like it <b>or</b> not, automation is coming.</i></td><td></td></tr>
</table></div>`
      },
      {
        id: 'three-ways', title: 'Conjunction, linking adverb or preposition?',
        html: `
<p>The same relationship can usually be expressed in three grammatically different ways. Learn them as sets:</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Meaning</th><th>Conjunction + clause</th><th>Linking adverb (new sentence / semicolon)</th><th>Preposition + noun / -ing</th></tr>
<tr><td>Contrast / concession</td><td>but, although, even though, while, whereas</td><td>However, Nevertheless, On the other hand, In contrast</td><td>despite, in spite of, unlike</td></tr>
<tr><td>Cause</td><td>because, since, as</td><td>–</td><td>because of, due to, owing to, as a result of</td></tr>
<tr><td>Result</td><td>so, so … that</td><td>Therefore, Consequently, As a result, Thus, Hence</td><td>–</td></tr>
<tr><td>Addition</td><td>and</td><td>Moreover, Furthermore, In addition, Also</td><td>as well as, besides, in addition to</td></tr>
<tr><td>Condition</td><td>if, unless, provided that</td><td>Otherwise</td><td>in the event of, without</td></tr>
</table></div>
<div class="table-wrap"><table class="data-table">
<tr><th>✗ Incorrect</th><th>Why</th><th>✓ Correct</th></tr>
<tr><td>Despite it is expensive, it is popular.</td><td><i>Despite</i> is a preposition</td><td><b>Although</b> it is expensive, … / <b>Despite</b> its cost, … / <b>Despite the fact that</b> it is expensive, …</td></tr>
<tr><td>Because of the price is high, …</td><td><i>Because of</i> is a preposition</td><td><b>Because</b> the price is high, … / <b>Because of</b> the high price, …</td></tr>
<tr><td>It is cheap, however it is slow.</td><td><i>However</i> is an adverb (comma splice)</td><td>It is cheap. <b>However,</b> it is slow. / It is cheap; <b>however,</b> it is slow. / It is cheap <b>but</b> slow.</td></tr>
<tr><td>Even it is cheap, few people use it.</td><td><i>Even</i> alone is an adverb</td><td><b>Even though</b> it is cheap, … / <b>Even if</b> it were free, …</td></tr>
<tr><td>In spite the fact that …</td><td>Missing <i>of</i></td><td><b>In spite of</b> the fact that …</td></tr>
<tr><td>Unless you don't book, …</td><td><i>Unless</i> already means "if not"</td><td><b>Unless</b> you book, … / <b>If</b> you don't book, …</td></tr>
</table></div>`
      },
      {
        id: 'style', title: 'Conjunctions and style in Writing and Speaking',
        html: `
<ul>
<li><b>Starting a sentence with "And" or "But"</b> is common in speech and journalism and is not a grammar error, but in Task 2 a linking adverb (<i>However, Moreover</i>) or a subordinate clause usually sounds more formal.</li>
<li><b>"So" at the start of a sentence</b> is very common in Speaking (<i>So, my hometown is…</i>). In Writing, prefer <i>Therefore</i> or <i>As a result</i>.</li>
<li><b>While and whereas</b> are ideal for Task 1 comparisons: <i>Coal use fell, <b>whereas</b> gas use doubled.</i></li>
<li><b>Variety matters.</b> An essay in which every complex sentence uses <i>because</i> shows less range than one that also uses <i>since, although, unless, whereas, so that</i>. But each must be the right word for the relationship.</li>
</ul>`
      },
      {
        id: 'band-impact', title: 'How conjunctions affect your band',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Feature</th><th>Criterion</th><th>Effect</th></tr>
<tr><td>Only <i>and, but, because</i>; mostly simple sentences</td><td>GRA</td><td>Limited range – difficult to go beyond Band 5–6</td></tr>
<tr><td>A variety of subordinating conjunctions used accurately</td><td>GRA</td><td>The "variety of complex structures" associated with Band 7</td></tr>
<tr><td><i>Although … but</i>, <i>despite + clause</i>, comma splices with <i>however</i>, fragments</td><td>GRA</td><td>Frequent, noticeable errors – typical of Band 5–6</td></tr>
<tr><td>Linking words that express the wrong relationship, or are overused</td><td>CC</td><td>"Faulty" or "mechanical" use of cohesive devices – a Band 5–6 feature</td></tr>
<tr><td>Natural, accurate and varied linking</td><td>CC</td><td>Cohesive devices used appropriately, supporting Band 7+</td></tr>
</table></div>`
      }
    ],
    worked: [
      {
        title: 'Joining ideas correctly',
        questions: `<ol>
<li>Although many people own cars, but public transport is still important.</li>
<li>Despite the government has invested heavily, unemployment remains high.</li>
<li>Online shopping is convenient, however it harms local shops.</li>
<li>Some people prefer to live in the countryside. Because it is quieter.</li>
<li>Electric cars are not only quieter but also they are cleaner.</li>
<li>When the new airport will open, tourism will increase.</li>
</ol>`,
        walk: [
          { q: '1.', a: 'Although many people own cars, public transport is still important.', steps: ['Two conjunctions for one link. Keep <i>although</i> and remove <i>but</i> – or keep <i>but</i>: <i>Many people own cars, but…</i>'] },
          { q: '2.', a: 'Although the government has invested heavily, … / Despite heavy government investment, …', steps: ['<i>Despite</i> is a preposition: it needs a noun phrase, not a clause.', 'Either change the word (<i>although</i>) or change the structure (<i>despite heavy investment</i>, or <i>despite the fact that</i>).'] },
          { q: '3.', a: 'Online shopping is convenient; however, it harms local shops.', steps: ['Comma splice. <i>However</i> needs a semicolon or a full stop before it.', 'Alternative with a conjunction: <i>Although online shopping is convenient, it harms local shops.</i>'] },
          { q: '4.', a: 'Some people prefer to live in the countryside because it is quieter.', steps: ['<i>Because it is quieter</i> is a fragment – a dependent clause alone. Join it to the main clause.'] },
          { q: '5.', a: 'Electric cars are not only quieter but also cleaner.', steps: ['Parallel structure: <i>not only</i> + adjective, <i>but also</i> + adjective.'] },
          { q: '6.', a: 'When the new airport opens, tourism will increase.', steps: ['Future meaning after <i>when</i>: present tense in the time clause, <i>will</i> in the main clause.'] }
        ],
        lesson: 'For every link, ask: what is the relationship, and what follows – a clause, a noun or a new sentence? That one question prevents almost all conjunction errors.'
      }
    ],
    dos: [
      'Name the relationship before choosing the linking word.',
      'Use a comma after a dependent clause that comes first.',
      'Use despite / because of + noun, and although / because + clause.',
      'Use a semicolon or full stop before however and therefore.',
      'Keep correlative pairs parallel.',
      'Use a present tense after when, until, once, if for future meaning.'
    ],
    donts: [
      'Don\'t combine although with but, or because with so, for one link.',
      'Don\'t follow despite or because of with a full clause.',
      'Don\'t leave a because- or although-clause as a separate sentence.',
      'Don\'t write unless … not.',
      'Don\'t use moreover or furthermore for a contrast.',
      'Don\'t use the same conjunction in every complex sentence.'
    ],
    careful: [
      { title: '"While" has two meanings', body: '<p><i>While</i> can mean "during the time that" or "whereas". Make sure the context makes the meaning clear.</p>', example: '<i><b>While</b> I was studying, …</i> (time) · <i><b>While</b> some people agree, others do not.</i> (contrast)' },
      { title: '"Since" has two meanings', body: '<p><i>Since</i> = from a time in the past (<i>since 2010</i>), or = because (<i>since prices are high</i>). Both are correct; avoid sentences where both readings are possible.</p>' },
      { title: '"As well as" is not "and"', body: '<p><i>As well as</i> is followed by a noun or -ing form, and the verb agrees with the first subject.</p>', example: '<i>The teacher, <b>as well as</b> the students, <b>was</b> surprised.</i> · <i><b>As well as</b> saving money, cycling improves health.</i>' },
      { title: '"So that" (purpose) vs "so" (result)', body: '<p><i>So that</i> explains why something is done; <i>so</i> gives its consequence.</p>', example: '<i>She left early <b>so that</b> she could catch the train.</i> (purpose) · <i>She left early, <b>so</b> she caught the train.</i> (result)' }
    ],
    faq: [
      { q: 'Is "Because…" at the start of a sentence wrong?', a: '<p>No – <i>Because it was raining, the match was cancelled</i> is perfectly correct. It is only wrong when the <i>because</i>-clause has no main clause.</p>' },
      { q: 'Should I use "whilst"?', a: '<p><i>Whilst</i> is a British variant of <i>while</i>. It is correct but can sound old-fashioned; <i>while</i> is always safe.</p>' },
      { q: 'How many linking words should a paragraph have?', a: '<p>There is no number. Link where the relationship between ideas needs to be made clear, and let pronouns, <i>this + noun</i> and logical order do the rest. Mechanical linking at the start of every sentence is penalised in Coherence and Cohesion.</p>' }
    ],
    exercises: {
      id: 'ch-grammar-conjunctions',
      title: 'Chapter exercises: conjunctions',
      groups: [
        {
          kind: 'choice', title: 'Part A: choose the correct word', instructions: 'Choose the correct option, <b>A, B or C</b>.',
          questions: [
            { n: 1, q: '___ the high cost, the project went ahead.', opts: ['Although', 'Despite', 'However'], a: 'B', x: '<i>The high cost</i> is a noun phrase, so a preposition: <i>Despite</i>.' },
            { n: 2, q: '___ the project was expensive, it went ahead.', opts: ['Although', 'Despite', 'In spite of'], a: 'A', x: 'A clause follows (subject + verb), so a conjunction: <i>Although</i>.' },
            { n: 3, q: 'Rents in the capital rose by 20%, ___ they fell in the north.', opts: ['whereas', 'moreover', 'therefore'], a: 'A', x: 'Two facts contrasted in one sentence: <i>whereas</i>.' },
            { n: 4, q: '___ more people use public transport, congestion will not improve.', opts: ['If', 'Unless', 'Because'], a: 'B', x: '<i>Unless</i> = if … not: congestion will not improve if more people do not use public transport.' },
            { n: 5, q: 'Cities are building cycle lanes ___ people can travel safely.', opts: ['so', 'so that', 'such that'], a: 'B', x: 'Purpose: <i>so that</i> + clause.' },
            { n: 6, q: 'Neither the teachers nor the headteacher ___ aware of the problem.', opts: ['were', 'was', 'are'], a: 'B', x: 'With <i>neither … nor</i>, the verb agrees with the nearer subject (<i>the headteacher</i>, singular): <i>was</i>.' },
            { n: 7, q: 'When the new law ___ into force, fines will rise.', opts: ['will come', 'comes', 'is coming'], a: 'B', x: 'After <i>when</i> with future meaning, use the present simple.' }
          ]
        },
        {
          kind: 'gap', title: 'Part B: complete the sentence', instructions: 'Write <b>ONE WORD ONLY</b>.',
          questions: [
            { n: 8, q: 'The scheme is {} only cheap but also effective.', a: 'not', x: '<i>not only … but also</i>.' },
            { n: 9, q: 'The flight was cancelled because {} the storm.', a: 'of', x: '<i>Because of</i> + noun phrase.' },
            { n: 10, q: 'Prices were {} high that many families could not afford food.', a: 'so', x: '<i>so</i> + adjective + <i>that</i> (result).' },
            { n: 11, q: 'Many young people rent. {}, they cannot save for a deposit.', a: 'Consequently|Therefore|Thus|Hence', x: 'A result introduced at the start of a new sentence needs a linking adverb such as <i>Consequently</i> or <i>Therefore</i>.' },
            { n: 12, q: 'You can borrow books {} long as you return them on time.', a: 'as', x: '<i>as long as</i> = provided that.' }
          ]
        }
      ]
    },
    checklist: [
      'I can name the relationship between two ideas before I link them.',
      'I know which linking words take a clause, a noun or a new sentence.',
      'I never write although … but, or despite + clause.',
      'I punctuate however and therefore correctly.',
      'I keep correlative structures parallel.',
      'I use a present tense after time and condition conjunctions for the future.'
    ],
    summary: [
      'Conjunctions join elements and express relationships; they turn facts into arguments.',
      'Coordinating conjunctions join equals; subordinating conjunctions create complex sentences.',
      'Conjunction + clause; preposition + noun; linking adverb + new sentence.',
      'One conjunction per link; no fragments; parallel correlatives.',
      'Varied, accurate linking supports both GRA and Coherence and Cohesion.'
    ],
    references: [
      ...grammarBooks,
      { title: 'In this book: Linking words and connectors', url: '/vocabulary/linking', note: 'A full bank of connectors by meaning, with flashcards.' },
      { title: 'In this book: Punctuation and sentence boundaries', url: '/grammar/punctuation' },
      gra
    ]
  },

  /* ===================================================================== INTERJECTIONS */
  interjections: {
    intro: `
<p>An <b>interjection</b> is a word or short phrase that expresses a feeling or a reaction and stands outside the grammar of the sentence: <i><b>Oh</b>, I didn't know that. <b>Wow!</b> <b>Oops.</b> <b>Hmm</b>, let me think.</i> Interjections are the most "spoken" of all the parts of speech. They are rare in formal writing and very common in conversation, where they show surprise, sympathy, hesitation, agreement or a change of topic.</p>
<p>Closely related to interjections are <b>discourse markers</b> – words and phrases such as <i>well, right, OK, actually, I mean, you know, anyway</i> – which organise speech: they signal that you are starting, thinking, correcting yourself, giving an example or moving on. Grammar books classify these words in different ways; what matters for you is what they <i>do</i>.</p>
<p>For IELTS, this chapter has two clear messages. In <b>Writing</b>, interjections do not belong in Academic Task 1 or Task 2, and only rarely in a General Training informal letter. In <b>Speaking</b>, a small set of natural interjections and discourse markers helps you sound fluent, buy thinking time without falling silent, and react naturally to questions – while overusing fillers such as <i>um</i>, <i>like</i> and <i>you know</i> makes your speech sound hesitant.</p>`,
    facts: [
      ['Job', 'Expresses a feeling or reaction; outside sentence grammar'],
      ['Examples', 'oh, ah, wow, oops, hmm, well, um/er'],
      ['Discourse markers', 'well, right, actually, I mean, anyway, you know'],
      ['Punctuation', 'Comma after a mild one; exclamation mark for a strong one'],
      ['Writing', 'Not in Task 2 or Academic Task 1; sparingly in informal letters'],
      ['Speaking', 'Natural thinking-time phrases support Fluency and Coherence']
    ],
    method: [
      {
        title: 'Know what each common interjection means',
        body: '<p>Interjections carry meaning mainly through intonation, but each has a typical use. Learn the core set in section 1 so that you understand them in Listening and use them correctly in Speaking.</p>',
        example: '<i><b>Oh</b>, really?</i> (surprise, interest) · <i><b>Ah</b>, I see.</i> (understanding) · <i><b>Oops</b>, sorry.</i> (small mistake) · <i><b>Hmm</b>…</i> (thinking, doubt)'
      },
      {
        title: 'Punctuate them correctly when you write them',
        body: '<p>A mild interjection at the start of a sentence is followed by a comma: <i>Oh, I forgot.</i> A strong one can stand alone with an exclamation mark: <i>Wow! That\'s amazing.</i> Use exclamation marks sparingly even in informal writing.</p>'
      },
      {
        title: 'Keep them out of formal writing',
        body: '<p>Academic Task 1 and Task 2 are formal. Interjections (<i>Well, Oh, Wow</i>) and conversational discourse markers (<i>Actually, Anyway, I mean</i>) make an essay sound like speech and reduce the appropriacy of your style. In a General Training <b>informal</b> letter to a friend, one natural interjection can be fine: <i>Oh, and before I forget – …</i></p>',
        example: '✗ Task 2: <i>Well, I think governments should…</i> → ✓ <i>In my view, governments should…</i>'
      },
      {
        title: 'In Speaking, replace silence and "um" chains with thinking phrases',
        body: '<p>When you need a moment to think, a short natural phrase is better than a long silence or a string of <i>um… er… um</i>. Use phrases such as <i>Well, …</i>, <i>Hmm, that\'s an interesting question.</i>, <i>Let me think…</i>, <i>I\'ve never really thought about that, but…</i>. Then answer.</p>',
        example: 'Examiner: <i>Do you think people read less than in the past?</i> → <i><b>Hmm, that\'s a good question. Well,</b> I suppose they read just as much, but differently – mostly on their phones…</i>'
      },
      {
        title: 'Use discourse markers to organise longer answers',
        body: '<p>In Part 2 and Part 3, markers show the listener where your answer is going: starting (<i>Well, …</i>), giving an example (<i>For instance…</i>), correcting or clarifying (<i>Actually, … / I mean, …</i>), returning to the point (<i>Anyway, …</i>), concluding (<i>So, overall…</i>).</p>',
        example: '<i>…we went to the coast. <b>Actually</b>, it was my first time by the sea. <b>Anyway</b>, the best part was…</i>'
      },
      {
        title: 'Vary them and do not overuse them',
        body: '<p>Any marker repeated in every answer becomes noticeable – <i>actually, basically, like, you know</i> are the commonest. Record yourself and count. Two or three different markers used naturally are better than one marker used twenty times.</p>'
      }
    ],
    sections: [
      {
        id: 'core', title: 'Core interjections and what they show',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Interjection</th><th>Typical meaning</th><th>Example</th></tr>
<tr><td>oh</td><td>surprise, realisation, interest, disappointment (depends on intonation)</td><td><i>Oh, I didn't know that.</i> · <i>Oh no, I've missed the bus.</i></td></tr>
<tr><td>ah</td><td>understanding, satisfaction</td><td><i>Ah, now I understand.</i></td></tr>
<tr><td>wow</td><td>strong surprise or admiration</td><td><i>Wow, the view is incredible.</i></td></tr>
<tr><td>oops / whoops</td><td>a small mistake or accident</td><td><i>Oops – I meant Tuesday, not Thursday.</i></td></tr>
<tr><td>ouch / ow</td><td>pain</td><td><i>Ouch! That hurt.</i></td></tr>
<tr><td>hmm</td><td>thinking, doubt</td><td><i>Hmm, I'm not sure about that.</i></td></tr>
<tr><td>um / er / uh</td><td>hesitation while searching for words (<i>er</i> is the usual British spelling, <i>uh</i> American)</td><td><i>It was, um, about ten years ago.</i></td></tr>
<tr><td>oh dear</td><td>mild sympathy or dismay</td><td><i>Oh dear, that sounds stressful.</i></td></tr>
<tr><td>well</td><td>starting an answer, hesitating, mild contrast</td><td><i>Well, it depends.</i></td></tr>
<tr><td>yeah / yes / mm</td><td>agreement, listening</td><td><i>Yeah, I'd agree with that.</i> (informal)</td></tr>
</table></div>
<p>Intonation changes the meaning. A rising <i>Oh?</i> invites more information (<i>tell me more</i>); a falling <i>Oh.</i> can sound disappointed. This matters in Listening, where a speaker's reaction can tell you whether an option is being accepted or rejected – a classic distractor pattern.</p>`
      },
      {
        id: 'markers', title: 'Discourse markers for Speaking',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Function</th><th>Markers</th><th>Example in an IELTS answer</th></tr>
<tr><td>Starting / buying time</td><td>Well, … · Hmm, … · Let me think… · That's an interesting question.</td><td><i>Well, I'd say my hometown has changed a lot.</i></td></tr>
<tr><td>Admitting you have not thought about it</td><td>I've never really thought about that, but… · That's not something I know much about, but…</td><td><i>I've never really thought about that, but I suppose…</i></td></tr>
<tr><td>Clarifying</td><td>I mean, … · What I mean is… · In other words, …</td><td><i>It's quite expensive – I mean, compared with other cities.</i></td></tr>
<tr><td>Correcting yourself</td><td>Actually, … · Or rather, … · Sorry, I meant…</td><td><i>It was in 2019 – actually, no, 2018.</i></td></tr>
<tr><td>Giving an example</td><td>For instance, … · Take … for example.</td><td><i>Take my brother, for example.</i></td></tr>
<tr><td>Returning to the point</td><td>Anyway, … · As I was saying, …</td><td><i>Anyway, the main reason I chose it was…</i></td></tr>
<tr><td>Concluding</td><td>So, overall, … · All in all, …</td><td><i>So, overall, I think it was a good decision.</i></td></tr>
</table></div>
<div class="callout advice"><strong>Do not memorise long "thinking" formulas</strong>Phrases such as <i>"That is a very thought-provoking question which I have never considered before"</i> sound rehearsed and use time without showing language. Keep thinking phrases short, then give real content.</div>`
      },
      {
        id: 'hesitation', title: 'Hesitation, fillers and the Fluency criterion',
        html: `
<p>The public Speaking band descriptors distinguish between two kinds of hesitation. <b>Content-related</b> hesitation – pausing to think about <i>what</i> to say – is natural even at the highest band. <b>Language-related</b> hesitation – pausing to search for words or grammar – is what lowers Fluency and Coherence: the descriptors allow some of it at Band 7 and describe it as frequent at lower bands.</p>
<p>This has a practical consequence. A short, natural thinking phrase (<i>Hmm, let me think…</i>) followed by a fluent answer sounds like content-related thinking. A sequence of <i>um… er… um</i> in the middle of every sentence sounds like searching for language. The difference is not the number of seconds but where the pauses occur and how you fill them.</p>
<ul>
<li>Pause at natural boundaries – between ideas or clauses – rather than in the middle of a phrase.</li>
<li>If you lose a word, paraphrase instead of stopping: <i>the thing you use to… the device that…</i></li>
<li>Do not worry about one or two <i>ums</i>: native speakers use them too. Worry about long silences and constant fillers.</li>
</ul>`
      },
      {
        id: 'band-impact', title: 'How interjections and markers affect your band',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Use</th><th>Effect</th></tr>
<tr><td>Interjections or conversational markers in Task 2 (<i>Well, Actually, Anyway</i>)</td><td>Inappropriate register – affects Lexical Resource (appropriacy) and the formal tone expected</td></tr>
<tr><td>Natural, varied discourse markers in Speaking</td><td>Supports Fluency and Coherence: the descriptors refer to the flexible use of discourse markers and connectives</td></tr>
<tr><td>Long silences, or <i>um/er</i> in almost every sentence</td><td>Language-related hesitation – lowers Fluency and Coherence</td></tr>
<tr><td>One marker repeated constantly (<i>actually, like, you know</i>)</td><td>Sounds mechanical and limits range</td></tr>
</table></div>`
      }
    ],
    worked: [
      {
        title: 'Improving a Part 3 answer',
        source: `<div class="prompt-box"><p><b>Examiner:</b> Why do you think some people prefer to live in small towns?</p><p><b>Candidate (version 1):</b> "Um… er… because, um, it is… er… quiet. Um. And, er, cheap."</p></div>`,
        questions: '<p>How can the candidate use thinking time and markers better?</p>',
        walk: [
          { q: 'The problem', a: 'Language-related hesitation throughout', steps: ['The fillers come in the middle of short phrases, which sounds like searching for words.', 'The answer is also too short: two adjectives and no development.'] },
          { q: 'Version 2', a: '"Hmm, I think there are a couple of reasons. Well, the obvious one is that small towns are much quieter – there\'s less traffic and less noise. And I mean, they\'re usually cheaper too, so people can afford a bigger house. Actually, my uncle moved to a small town for exactly that reason."', steps: ['One short thinking phrase at the start (<i>Hmm, I think there are a couple of reasons</i>) – content-related, and it also previews the structure.', '<i>Well</i> introduces the first reason; <i>I mean</i> adds a clarification; <i>Actually</i> introduces a personal example.', 'Each marker is used once, naturally, and every marker is followed by content.'] }
        ],
        lesson: 'Markers are useful only when they organise real content. Use a short thinking phrase at the start, then let markers signal the structure of your answer.'
      }
    ],
    dos: [
      'Use a short thinking phrase instead of a long silence.',
      'Use well, actually, I mean and anyway naturally in Speaking.',
      'Pause between ideas, not in the middle of phrases.',
      'Paraphrase when you lose a word.',
      'Listen for interjections and intonation in Listening – they show a speaker\'s reaction.',
      'Use a comma after a mild interjection in informal writing.'
    ],
    donts: [
      'Don\'t use interjections or conversational markers in Task 2 or Academic Task 1.',
      'Don\'t fill every pause with um or er.',
      'Don\'t repeat the same marker in every answer.',
      'Don\'t memorise long "thinking" formulas.',
      'Don\'t use exclamation marks in formal writing.'
    ],
    careful: [
      { title: '"Like" as a filler', body: '<p><i>Like</i> used as a filler (<i>It was, like, really big</i>) is very common in informal speech but sounds immature if overused in an exam.</p>' },
      { title: '"Actually" does not mean "currently"', body: '<p>In English, <i>actually</i> means "in fact" or introduces a correction. In several European languages a similar word means "now".</p>', example: '✗ <i>Actually I live in Madrid</i> (meaning "currently") → ✓ <i><b>At the moment</b> / <b>Currently</b>, I live in Madrid.</i>' },
      { title: 'Informal letters: one is enough', body: '<p>Even in a letter to a friend, one natural interjection is plenty. The letter is still being assessed for range and accuracy.</p>' }
    ],
    faq: [
      { q: 'Will the examiner mark me down for saying "um"?', a: '<p>Not for occasional fillers – they are part of natural speech. What lowers Fluency and Coherence is frequent hesitation while searching for language, long pauses and repetition.</p>' },
      { q: 'Can I say "That\'s a good question" every time?', a: '<p>Once is natural; three times in a test sounds rehearsed. Vary the way you start, and often just start with <i>Well, …</i> or with the answer itself.</p>' }
    ],
    exercises: {
      id: 'ch-grammar-interjections',
      title: 'Chapter exercises: interjections and discourse markers',
      groups: [
        {
          kind: 'choice', title: 'Part A: meaning and use', instructions: 'Choose the correct option, <b>A, B or C</b>.',
          questions: [
            { n: 1, q: 'Which interjection shows a small mistake?', opts: ['Ouch', 'Oops', 'Wow'], a: 'B', x: '<i>Oops</i> = a small mistake or accident. <i>Ouch</i> = pain; <i>wow</i> = admiration or surprise.' },
            { n: 2, q: 'In which piece of writing is "Oh, and by the way, …" acceptable?', opts: ['A Task 2 essay', 'A formal letter of complaint', 'An informal letter to a friend'], a: 'C', x: 'Interjections belong only in informal writing, and even there sparingly.' },
            { n: 3, q: 'Which is the best way to start a Part 3 answer you need to think about?', opts: ['Silence for ten seconds', '"Um… er… um…"', '"Hmm, let me think. Well, I suppose…"'], a: 'C', x: 'A short thinking phrase followed by an answer sounds like natural, content-related thinking.' },
            { n: 4, q: 'Which marker introduces a correction?', opts: ['Actually, …', 'For instance, …', 'All in all, …'], a: 'A', x: '<i>Actually</i> often introduces a correction or a surprising fact. <i>For instance</i> = example; <i>All in all</i> = conclusion.' },
            { n: 5, q: 'Which marker brings the speaker back to the main point?', opts: ['I mean, …', 'Anyway, …', 'Oh, …'], a: 'B', x: '<i>Anyway</i> signals a return to the main topic after a digression.' },
            { n: 6, q: 'Which sentence is appropriate for Task 2?', opts: ['Well, I think the government should act.', 'In my view, the government should act.', 'Actually, the government should, like, act.'], a: 'B', x: 'Task 2 is formal: <i>In my view</i> gives an opinion without conversational markers.' }
          ]
        },
        {
          kind: 'choice', title: 'Part B: Listening – reading the reaction', instructions: 'What does the second speaker most probably mean? Choose <b>A, B or C</b>.',
          questions: [
            { n: 7, q: 'A: "We could meet on Friday at the library." B: "Hmm… Friday\'s a bit difficult, actually."', opts: ['B accepts Friday', 'B is not happy with Friday', 'B prefers the library'], a: 'B', x: '<i>Hmm</i> (doubt) and <i>actually</i> (a correction to A\'s plan) signal that Friday is being rejected – a typical Listening distractor.' },
            { n: 8, q: 'A: "The course costs £200." B: "Oh! I thought it was free."', opts: ['B is surprised', 'B already knew', 'B is in pain'], a: 'A', x: '<i>Oh!</i> with <i>I thought…</i> shows surprise at new information.' }
          ]
        }
      ]
    },
    checklist: [
      'I know the meaning of the core interjections.',
      'I never use interjections or conversational markers in Task 2.',
      'I have three or four short thinking phrases for Speaking.',
      'I use well, actually, I mean and anyway naturally, and not too often.',
      'I pause between ideas rather than in the middle of phrases.'
    ],
    summary: [
      'Interjections express feelings and stand outside sentence grammar.',
      'Discourse markers organise speech: starting, clarifying, correcting, returning, concluding.',
      'They belong in Speaking and informal letters, not in formal writing.',
      'Content-related hesitation is natural; language-related hesitation lowers Fluency.',
      'Short, varied markers followed by real content support Fluency and Coherence.'
    ],
    references: [
      speakingBd,
      { title: 'Ronald Carter and Michael McCarthy, Cambridge Grammar of English (Cambridge University Press, 2006)', note: 'The section on spoken grammar describes discourse markers and interjections in real conversation.' },
      { title: 'In this book: Speaking phrases and idioms', url: '/speaking/phrases' },
      { title: 'In this book: Speaking Part 3', url: '/speaking/part-3' }
    ]
  },

  /* ===================================================================== DETERMINERS */
  determiners: {
    intro: `
<p>A <b>determiner</b> is a word that comes at the start of a noun phrase and tells us which thing, whose thing, or how much or how many of it we mean. In <i><b>the</b> government</i>, <i><b>this</b> policy</i>, <i><b>their</b> children</i>, <i><b>most</b> people</i>, <i><b>several</b> reasons</i> and <i><b>no</b> evidence</i>, the first word is a determiner. Determiners include the articles (<i>a, an, the</i>), demonstratives (<i>this, that, these, those</i>), possessives (<i>my, your, their</i>), quantifiers (<i>some, any, many, much, few, little, all, both, each, every, either, neither, enough, several</i>), numbers, and question words such as <i>which</i> and <i>whose</i>.</p>
<p>Determiners are essential because English singular countable nouns cannot normally stand alone: you must say <i>a student</i>, <i>the student</i>, <i>this student</i> or <i>every student</i> – never just <i>student</i>. And many determiners are restricted to certain kinds of noun: <i>many</i> and <i>few</i> with countable nouns, <i>much</i> and <i>little</i> with uncountable ones, <i>each</i> and <i>every</i> with singular nouns, <i>both</i> and <i>several</i> with plurals. Choosing the wrong determiner is one of the most frequent errors in IELTS Writing.</p>
<p>Quantifiers are also the language of <b>Task 1</b> (<i>the majority of, a small number of, nearly half, most</i>) and of careful generalisation in <b>Task 2</b> (<i>many</i> people, not <i>all</i> people; <i>some</i> governments, not <i>governments</i>). This chapter covers all the determiners except the articles, which have their own chapter: <a href="/grammar/articles">Articles and countable nouns</a>.</p>`,
    facts: [
      ['Job', 'Starts a noun phrase: which, whose, how much or how many'],
      ['Types', 'Articles, demonstratives, possessives, quantifiers, numbers'],
      ['Rule 1', 'A singular countable noun needs a determiner'],
      ['Rule 2', 'Only one central determiner: not "the my book"'],
      ['Countable only', 'many, few, a few, several, a number of, each, every, both'],
      ['Uncountable only', 'much, little, a little, an amount of, a great deal of']
    ],
    method: [
      {
        title: 'Give every singular countable noun a determiner',
        body: '<p>Look at each singular countable noun in your writing and check it has a determiner – an article, a demonstrative, a possessive or a quantifier. If you mean things in general, use the plural instead.</p>',
        example: '✗ <i>Government should help family with low income.</i> → ✓ <i><b>The</b> government should help <b>families</b> with <b>low incomes</b>.</i>'
      },
      {
        title: 'Match the quantifier to the type of noun',
        body: '<p>Check whether the noun is countable or uncountable (see <a href="/grammar/nouns">Nouns</a>), then choose a quantifier that fits it. The table in section 2 sets them out.</p>',
        example: '✗ <i>much problems, less cars, a few information</i> → ✓ <i><b>many</b> problems, <b>fewer</b> cars, <b>a little</b> information</i>'
      },
      {
        title: 'Distinguish "a few / a little" from "few / little"',
        body: '<p>With <i>a</i>, the meaning is positive – "some, a small number or amount, enough". Without <i>a</i>, the meaning is negative – "not many / not much, less than expected".</p>',
        example: '<i><b>A few</b> students passed.</i> (some did – good) · <i><b>Few</b> students passed.</i> (almost none – bad) · <i>There is <b>little</b> evidence for this claim.</i> (hardly any)'
      },
      {
        title: 'Add "of" when the quantifier is followed by another determiner or a pronoun',
        body: '<p>Quantifiers go directly before a noun when you mean things in general (<i>most people</i>). When you mean part of a specific group – marked by <i>the, these, my</i> or a pronoun – use <i>quantifier + of</i>.</p>',
        example: '<i><b>Most</b> people</i> (people in general) · <i><b>Most of the</b> people in my town</i> (a specific group) · <i><b>some of them</b></i> · ✗ <i>most of people</i> · ✗ <i>the most of people</i>'
      },
      {
        title: 'Use each / every with singular nouns and verbs',
        body: '<p><i>Each</i> and <i>every</i> are followed by a singular noun and a singular verb. <i>Each</i> considers the members one by one (and can be used for two); <i>every</i> considers them all together (three or more). <i>Each of</i> is followed by a plural noun phrase but still a singular verb.</p>',
        example: '<i><b>Every</b> student <b>has</b> a laptop.</i> · <i><b>Each of the</b> candidates <b>was</b> interviewed.</i> · ✗ <i>every students</i>'
      },
      {
        title: 'Use other, another and others correctly',
        body: '<p><i>Another</i> = one more / a different one, + singular noun. <i>Other</i> + plural or uncountable noun. <i>The other</i> = the remaining one(s). <i>Others</i> is a pronoun, used without a noun.</p>',
        example: '<i><b>another</b> reason</i> · <i><b>other</b> reasons</i> · <i><b>the other</b> option</i> · <i>Some people agree; <b>others</b> do not.</i> · ✗ <i>others reasons</i>, ✗ <i>another reasons</i>'
      },
      {
        title: 'Put determiners in the right order',
        body: '<p>A noun phrase has at most one <b>central</b> determiner (<i>the, a, this, my, some, no…</i>). Some words can come before it (<b>pre-determiners</b>: <i>all, both, half, double, such, what</i>) and some after it (<b>post-determiners</b>: numbers, <i>other, last, next, few, many</i>).</p>',
        example: '<i><b>all the</b> students · <b>both my</b> parents · <b>half the</b> population · <b>the first two</b> chapters · <b>my other</b> friends · <b>the many</b> benefits</i> · ✗ <i>the my house</i> → ✓ <i>my house</i> / <i>the house of mine</i>'
      }
    ],
    sections: [
      {
        id: 'types', title: 'Kinds of determiner',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Kind</th><th>Words</th><th>Example</th></tr>
<tr><td>Articles</td><td>a, an, the</td><td><i><b>a</b> rise, <b>the</b> chart</i> – see <a href="/grammar/articles">Articles</a></td></tr>
<tr><td>Demonstratives</td><td>this, that, these, those</td><td><i><b>this</b> trend, <b>those</b> countries</i></td></tr>
<tr><td>Possessives</td><td>my, your, his, her, its, our, their, (noun)'s</td><td><i><b>their</b> income, <b>the country's</b> exports</i></td></tr>
<tr><td>Quantifiers</td><td>some, any, no, much, many, few, little, more, most, all, both, each, every, either, neither, several, enough</td><td><i><b>several</b> studies, <b>no</b> evidence</i></td></tr>
<tr><td>Numbers</td><td>one, two… first, second… last, next</td><td><i><b>the first three</b> years</i></td></tr>
<tr><td>Question words</td><td>which, what, whose</td><td><i><b>Which</b> option is better?</i></td></tr>
<tr><td>Exclamatory / intensifying</td><td>such, what, quite</td><td><i><b>such</b> a problem, <b>what</b> a day</i></td></tr>
</table></div>`
      },
      {
        id: 'quantifiers', title: 'Quantifiers with countable and uncountable nouns',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>With plural countable nouns</th><th>With uncountable nouns</th><th>With both</th></tr>
<tr><td>many · (a) few · fewer · fewest · several · a number of · a large / small number of · both · a couple of</td><td>much · (a) little · less · least · a great deal of · a large / small amount of</td><td>some · any · no · all · most · more · enough · a lot of · lots of · plenty of</td></tr>
</table></div>
<ul>
<li><b>Much</b> is used mainly in negatives and questions (<i>not much time</i>) and in formal writing (<i>much research</i>); in positive informal sentences, <i>a lot of</i> is more natural.</li>
<li><b>Fewer / less:</b> <i>fewer</i> with countable nouns, <i>less</i> with uncountable ones: <i><b>fewer</b> cars, <b>less</b> traffic</i>. <i>Less people</i> is common in speech but is best avoided in Writing.</li>
<li><b>The number of / the amount of:</b> <i>the number of</i> + plural countable noun + singular verb (<i>The number of cars <b>has</b> risen</i>); <i>a number of</i> (= several) + plural verb (<i>A number of studies <b>have</b> shown</i>).</li>
<li><b>Some / any:</b> <i>some</i> in positive sentences, offers and requests; <i>any</i> in negatives and questions, and in positive sentences meaning "it does not matter which" (<i>Any student can apply</i>).</li>
<li><b>No / none:</b> <i>no</i> + noun (<i>no evidence</i>); <i>none</i> stands alone or with <i>of</i> (<i>none of the students</i>). Do not add another negative: ✗ <i>There isn't no time.</i></li>
<li><b>Either / neither</b> + singular noun: <i><b>Neither</b> option is ideal.</i></li>
<li><b>All / whole:</b> <i>all the day</i> is unusual; say <i>all day</i> or <i>the whole day</i>. <i>The whole</i> + singular countable noun: <i>the whole country</i>.</li>
</ul>`
      },
      {
        id: 'task1-quantity', title: 'Quantity language for Task 1',
        html: `
<p>Task 1 often asks you to describe proportions in words as well as numbers. Quantifiers and fraction expressions give variety and allow you to summarise:</p>
<div class="table-wrap"><table class="data-table plain">
<tr><th>Figure</th><th>Expressions</th></tr>
<tr><td>80–90%</td><td>the vast majority of, the overwhelming majority of, nearly all</td></tr>
<tr><td>over 50%</td><td>the majority of, more than half of, most</td></tr>
<tr><td>about 50%</td><td>(about) half of, roughly one in two</td></tr>
<tr><td>about 33% / 25%</td><td>(about) a third of / a quarter of, one in three / one in four</td></tr>
<tr><td>10–20%</td><td>a minority of, a small proportion of, one in ten / one in five</td></tr>
<tr><td>under 5%</td><td>a tiny proportion of, very few, hardly any</td></tr>
</table></div>
<p>Agreement: <i>the majority of</i> + plural noun takes a plural verb (<i>The majority of students <b>were</b>…</i>); with an uncountable noun, a singular verb (<i>The majority of the land <b>was</b>…</i>). After a fraction or percentage, the verb agrees with the noun: <i>Half of the budget <b>was</b> spent; half of the students <b>were</b>…</i></p>`
      },
      {
        id: 'generalising', title: 'Determiners and careful generalisation in Task 2',
        html: `
<p>Absolute statements (<i>People are lazy. Young people don't read.</i>) are easy to challenge and weaken Task Response. Quantifiers let you make claims that are defensible:</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Overgeneralised</th><th>Careful</th></tr>
<tr><td>Young people don't read books.</td><td><b>Many</b> young people read <b>fewer</b> books than previous generations.</td></tr>
<tr><td>Governments ignore the environment.</td><td><b>Some</b> governments have been slow to act on environmental problems.</td></tr>
<tr><td>Everyone wants to live in a city.</td><td><b>A growing number of</b> people choose to live in cities.</td></tr>
<tr><td>All parents agree.</td><td><b>Most</b> parents would probably agree.</td></tr>
</table></div>`
      },
      {
        id: 'band-impact', title: 'How determiners affect your band',
        html: `
<ul>
<li><b>Grammatical Range and Accuracy:</b> missing determiners before singular nouns, and quantifiers that do not match the noun (<i>much problems, less cars, every students</i>), are among the most frequent systematic errors in Band 5–6 scripts.</li>
<li><b>Task Achievement (Task 1):</b> quantity expressions (<i>the vast majority, roughly a third</i>) let you summarise data in the overview without listing numbers – an important Band 7 feature.</li>
<li><b>Task Response (Task 2):</b> careful quantifiers make arguments more precise and less easy to dismiss.</li>
<li><b>Coherence and Cohesion:</b> demonstratives (<i>this, these, such</i>) are referencing devices that link sentences.</li>
</ul>`
      }
    ],
    worked: [
      {
        title: 'Correcting determiners in a paragraph',
        source: `<div class="prompt-box"><p>"Nowadays, much people spend less money on books and more on electronic devices. Every students in my class has smartphone, and the most of them read news online. A few people buy newspapers, which is bad for publishers. Others reasons for this change include the cost of paper."</p></div>`,
        questions: '<p>Find and correct the determiner errors.</p>',
        walk: [
          { q: '"much people"', a: 'many people', steps: ['<i>People</i> is plural countable: <i>many</i>.'] },
          { q: '"Every students"', a: 'Every student', steps: ['<i>Every</i> + singular noun. The verb <i>has</i> is already singular, so only the noun changes.'] },
          { q: '"has smartphone"', a: 'has a smartphone', steps: ['Singular countable noun: it needs a determiner.'] },
          { q: '"the most of them"', a: 'most of them', steps: ['<i>Most of</i> + pronoun; never <i>the most of</i> in this meaning. (<i>The most</i> is the superlative: <i>the most popular</i>.)'] },
          { q: '"A few people buy newspapers, which is bad…"', a: 'Few people buy newspapers…', steps: ['The writer means "almost nobody" – a negative idea, as shown by <i>which is bad</i>. That is <i>few</i>, not <i>a few</i>.'] },
          { q: '"Others reasons"', a: 'Other reasons', steps: ['<i>Other</i> before a noun never takes <i>-s</i>. <i>Others</i> is a pronoun used alone.'] }
        ],
        lesson: 'Determiner errors cluster around a few words: much/many, few/a few, every + singular, most of, other/others, and missing a/the. Learn those contrasts and check them when you proofread.'
      },
      {
        title: 'Writing a Task 1 overview with quantity language',
        source: `<div class="prompt-box"><p>Survey of 1,000 commuters: car 62%, bus 21%, bicycle 9%, walking 6%, other 2%.</p></div>`,
        questions: '<p>Write one overview sentence using quantity expressions rather than exact figures.</p>',
        walk: [
          { q: 'Overview', a: 'The majority of commuters travelled by car, while only a small minority cycled or walked.', steps: ['62% → <i>the majority of</i> (over half).', '9% + 6% → <i>a small minority</i>.', 'The overview summarises; exact figures belong in the body paragraphs.', 'Alternative: <i>Cars were by far the most popular mode of transport, used by almost two thirds of commuters, whereas very few people walked.</i>'] }
        ],
        lesson: 'Quantifiers and fractions let you state the main features of a chart without numbers – exactly what an overview needs.'
      }
    ],
    dos: [
      'Check that every singular countable noun has a determiner.',
      'Use many/few/fewer with countable nouns and much/little/less with uncountable ones.',
      'Use few and little for negative meanings, a few and a little for positive ones.',
      'Use most (general) and most of the (specific group).',
      'Use each/every + singular noun + singular verb.',
      'Use quantifiers to summarise Task 1 data and to generalise carefully in Task 2.'
    ],
    donts: [
      'Don\'t write "the most of people" or "most of people".',
      'Don\'t write "much problems", "less cars" or "every students".',
      'Don\'t use two central determiners together: not "the my", "this my".',
      'Don\'t write "others reasons" or "another reasons".',
      'Don\'t use a second negative with no or none.',
      'Don\'t make absolute claims with all, every, never when "many" or "most" is true.'
    ],
    careful: [
      { title: '"The number of" is singular; "a number of" is plural', body: '<p>This matters in every Task 1 report.</p>', example: '<i><b>The number of</b> visitors <b>has</b> doubled.</i> · <i><b>A number of</b> visitors <b>have</b> complained.</i>' },
      { title: '"Each" and "both" with two things', body: '<p><i>Both</i> treats two things together (plural verb); <i>each</i> treats them separately (singular verb).</p>', example: '<i><b>Both</b> countries <b>have</b> large populations.</i> · <i><b>Each</b> country <b>has</b> its own system.</i>' },
      { title: '"Some" in questions', body: '<p><i>Some</i> is normal in offers and requests, where you expect "yes".</p>', example: '<i>Would you like <b>some</b> tea?</i> · <i>Could I ask <b>some</b> questions?</i>' },
      { title: '"Every day" vs "everyday"', body: '<p><i>Every day</i> (two words) = each day, a time expression. <i>Everyday</i> (one word) is an adjective = ordinary.</p>', example: '<i>I cycle to work <b>every day</b>.</i> · <i><b>everyday</b> problems</i>' }
    ],
    faq: [
      { q: 'Is "less people" wrong?', a: '<p>It is very common in speech and some style guides now accept it informally, but <i>fewer people</i> is the standard form in careful writing and is what examiners expect.</p>' },
      { q: 'What is the difference between "all" and "every"?', a: '<p>Both refer to the whole group, but <i>every</i> + singular noun focuses on each individual (<i>every student</i>), while <i>all</i> + plural noun treats the group as a whole (<i>all students</i>).</p>' },
      { q: 'Where are the articles (a, an, the)?', a: '<p>They are determiners too, but their rules are extensive enough for a separate chapter: <a href="/grammar/articles">Articles and countable nouns</a>.</p>' }
    ],
    exercises: {
      id: 'ch-grammar-determiners',
      title: 'Chapter exercises: determiners and quantifiers',
      groups: [
        {
          kind: 'choice', title: 'Part A: choose the correct determiner', instructions: 'Choose the correct option, <b>A, B or C</b>.',
          questions: [
            { n: 1, q: 'There isn\'t ___ evidence that the treatment works.', opts: ['many', 'much', 'few'], a: 'B', x: '<i>Evidence</i> is uncountable: <i>much</i> (in a negative).' },
            { n: 2, q: 'If more people cycled, there would be ___ cars on the road.', opts: ['less', 'fewer', 'little'], a: 'B', x: '<i>Cars</i> are countable: <i>fewer</i>.' },
            { n: 3, q: 'Unfortunately, ___ people attended the meeting, so it was cancelled.', opts: ['a few', 'few', 'a little'], a: 'B', x: 'A negative meaning (the meeting was cancelled): <i>few</i> = hardly any.' },
            { n: 4, q: '___ people in my town work in tourism.', opts: ['Most of', 'The most of', 'Most of the'], a: 'C', x: 'A specific group (people in my town) → <i>most of the</i>. (<i>Most people</i> would be people in general.)' },
            { n: 5, q: 'Each of the applicants ___ interviewed.', opts: ['were', 'was', 'have been'], a: 'B', x: '<i>Each of</i> + plural noun phrase still takes a singular verb.' },
            { n: 6, q: 'There is ___ reason why this policy failed.', opts: ['another', 'other', 'others'], a: 'A', x: '<i>Another</i> + singular noun.' },
            { n: 7, q: 'The number of students studying abroad ___ risen sharply.', opts: ['have', 'has', 'are'], a: 'B', x: '<i>The number of</i> takes a singular verb.' }
          ]
        },
        {
          kind: 'gap', title: 'Part B: complete the sentence', instructions: 'Write <b>ONE WORD ONLY</b>.',
          questions: [
            { n: 8, q: '{} of my parents work in education – my mother is a teacher and my father is a lecturer.', a: 'Both', x: 'Two people together, plural verb: <i>Both</i>.' },
            { n: 9, q: 'Some people support the plan, but {} are strongly against it.', a: 'others', x: 'A pronoun without a noun: <i>others</i>.' },
            { n: 10, q: '{} option is perfect: each has serious disadvantages.', a: 'Neither|No', x: '<i>Neither</i> + singular noun (of two options); <i>No</i> is also possible.' },
            { n: 11, q: 'There is {} little public transport in rural areas that most people need a car.', a: 'so', x: '<i>so little</i> + uncountable noun + <i>that</i> (result). With countable nouns: <i>so few buses that…</i>' },
            { n: 12, q: 'The {} majority of respondents (92%) supported the change.', a: 'vast|overwhelming', x: '<i>The vast / overwhelming majority</i> for a very high proportion.' }
          ]
        }
      ]
    },
    checklist: [
      'I check every singular countable noun for a determiner.',
      'I match quantifiers to countable and uncountable nouns.',
      'I know the difference between few and a few, little and a little.',
      'I use most / most of the correctly.',
      'I use each/every with singular nouns and other/another/others correctly.',
      'I can describe proportions in Task 1 with quantity expressions.'
    ],
    summary: [
      'Determiners start a noun phrase and show which, whose, how many or how much.',
      'Singular countable nouns need a determiner; only one central determiner is allowed.',
      'Quantifiers depend on countability: many/few/fewer vs much/little/less.',
      'Few/little are negative; a few/a little are positive.',
      'Quantity language summarises Task 1 data and makes Task 2 claims defensible.'
    ],
    references: [
      { title: 'British Council LearnEnglish: Determiners and quantifiers', url: BC + 'determiners-quantifiers', note: 'Explanations and exercises for every kind of determiner.' },
      { title: 'British Council LearnEnglish: Possessives', url: BC + 'possessives' },
      ...grammarBooks,
      gra
    ]
  }
};

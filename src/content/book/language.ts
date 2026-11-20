import type { Chapter } from '@/lib/types';

/* Chapters attached to vocabulary banks: connecting words, synonyms, phrasal verbs, collocations */
export const vocabChapters: Record<string, Chapter> = {
  linking: {
    intro: `<p>Linking words (also called connectors, cohesive devices or transition words) show the <b>relationship between ideas</b>: addition, contrast, cause, result, example, sequence. They are part of the <b>Coherence and Cohesion</b> criterion in Writing and of <b>Fluency and Coherence</b> in Speaking.</p>
<p>The examiners' descriptors give a clear warning: at Band 5, cohesive devices are used in a way that is "inadequate, inaccurate or over-used"; at Band 7, a "range of cohesive devices" is used "appropriately, although there may be some under-/over-use". In other words, more linkers is not better. The aim is the <b>right</b> linker, with the <b>right grammar</b> and punctuation, used <b>naturally</b> – and combined with other cohesive tools such as referencing (<i>this, these, such</i>) and substitution.</p>`,
    facts: [['Criterion', 'Coherence & Cohesion (Writing) · Fluency & Coherence (Speaking)'], ['Band 5 problem', 'Over-used, mechanical or inaccurate linkers'], ['Band 7', 'A range, used appropriately'], ['Three grammar types', 'Conjunction · sentence adverb · preposition'], ['Beyond linkers', 'Referencing: this, these, such, the former/latter'], ['Typical essay', '6–10 linkers in 280 words is plenty']],
    method: [
      { title: 'Identify the relationship between the two ideas', body: '<p>Addition? Contrast? Concession? Cause? Result? Example? Sequence? Emphasis? Conclusion?</p>' },
      { title: 'Choose a linker from the right category', body: '<p>See the table below.</p>' },
      { title: 'Check its grammar type', body: '<p><b>Conjunctions</b> join clauses in one sentence (<i>although, because, whereas, but</i>). <b>Sentence adverbs</b> begin a new sentence or follow a semicolon (<i>However, Moreover, Therefore</i>). <b>Prepositions</b> are followed by a noun or -ing (<i>despite, because of, due to, in addition to</i>).</p>', example: '<i><b>Although</b> it rained, we went out.</i> / <i>It rained. <b>However,</b> we went out.</i> / <i><b>Despite</b> the rain, we went out.</i>' },
      { title: 'Punctuate correctly', body: '<p>Comma after sentence adverbs: <i>However, ...</i>. A semicolon or full stop before <i>however</i> when it joins two clauses.</p>' },
      { title: 'Vary – and sometimes use no linker at all', body: '<p>Don\'t start every sentence with a linker. Use referencing to connect ideas instead: <i>This policy..., Such measures..., These students...</i></p>' }
    ],
    sections: [
      {
        id: 'table', title: 'Linkers by function and grammar',
        html: `<div class="table-wrap"><table class="data-table">
<tr><th>Function</th><th>Conjunction (joins clauses)</th><th>Sentence adverb (new sentence)</th><th>Preposition (+ noun / -ing)</th></tr>
<tr><td>Addition</td><td>and, not only... but also</td><td>Moreover, Furthermore, In addition, What is more</td><td>in addition to, as well as, besides</td></tr>
<tr><td>Contrast</td><td>but, whereas, while</td><td>However, In contrast, On the other hand</td><td>unlike, in contrast to</td></tr>
<tr><td>Concession</td><td>although, even though, though</td><td>Nevertheless, Nonetheless, Even so</td><td>despite, in spite of</td></tr>
<tr><td>Cause</td><td>because, since, as</td><td>—</td><td>because of, due to, owing to, as a result of</td></tr>
<tr><td>Result</td><td>so, so... that</td><td>Therefore, As a result, Consequently, Thus</td><td>—</td></tr>
<tr><td>Purpose</td><td>so that, in order that</td><td>—</td><td>in order to, so as to (+ verb)</td></tr>
<tr><td>Example</td><td>—</td><td>For example, For instance</td><td>such as, like, including</td></tr>
<tr><td>Condition</td><td>if, unless, provided that</td><td>Otherwise</td><td>in case of, without</td></tr>
<tr><td>Conclusion</td><td>—</td><td>In conclusion, To sum up, Overall</td><td>—</td></tr>
</table></div>`
      },
      {
        id: 'similarity', title: 'Similarity and comparison words',
        html: `<p>To show that two ideas or data points are alike: <i>Similarly, ... / Likewise, ... / In the same way, ... / ...as well / ...also / Both X and Y... / X, like Y, ... / X is similar to Y / X and Y are comparable / the same proportion as / equally</i>.</p>
<div class="callout"><i>Men's participation in cycling rose sharply. <b>Similarly,</b> the figure for women almost doubled.</i></div>`
      },
      {
        id: 'bands', title: 'Mechanical vs natural cohesion',
        html: `<div class="band-compare">
<div><h4>Band 5 – mechanical</h4><p><i>Firstly, cars cause pollution. Secondly, cars cause traffic. Moreover, cars are expensive. Furthermore, cars are dangerous. In conclusion, cars are bad.</i></p></div>
<div><h4>Band 7+ – natural</h4><p><i>Cars are a major source of urban pollution, and the congestion they create costs commuters hours every week. <b>These problems</b> could be reduced if <b>such</b> journeys were made by public transport, <b>which</b> is cheaper and safer for most people.</i></p><p class="small muted">Fewer linkers; referencing (these problems, such journeys) and a relative clause do the connecting.</p></div>
</div>`
      }
    ],
    worked: [{
      title: 'Linking with the right grammar',
      instructions: '<i>Join each pair three ways: a conjunction, a sentence adverb and a preposition.</i>',
      questions: '<ol><li>The scheme was expensive. It was popular.</li><li>Fuel prices rose. Fewer people drove.</li></ol>',
      walk: [
        { q: '1. Contrast/concession', a: '', steps: ['Conjunction: <i><b>Although</b> the scheme was expensive, it was popular.</i>', 'Adverb: <i>The scheme was expensive. <b>Nevertheless,</b> it was popular.</i>', 'Preposition: <i><b>Despite</b> its high cost, the scheme was popular.</i> / <i><b>Despite being</b> expensive, ...</i>'] },
        { q: '2. Cause/result', a: '', steps: ['Conjunction: <i><b>Because</b> fuel prices rose, fewer people drove.</i>', 'Adverb: <i>Fuel prices rose. <b>As a result,</b> fewer people drove.</i>', 'Preposition: <i><b>Due to</b> rising fuel prices, fewer people drove.</i>'] }
      ]
    }],
    dos: ['Choose linkers by function and grammar type.', 'Use referencing (this, these, such) as well as linkers.', 'Put a comma after sentence adverbs.'],
    donts: ['Don\'t start every sentence with a linker.', 'Don\'t use "despite" + clause: ✗ "despite it was expensive".', 'Don\'t use "On the other hand" without a first hand.', 'Don\'t use "Besides" and "Moreover" in every paragraph.'],
    careful: [
      { title: 'Despite / although', body: '<p>"Despite" is a preposition: it needs a noun or -ing. "Although" is a conjunction: it needs a clause.</p>', example: '✗ <i>Despite it was cheap...</i> ✓ <i>Despite being cheap...</i> / <i>Although it was cheap...</i>' },
      { title: 'On the contrary ≠ in contrast', body: '<p>"On the contrary" rejects the previous statement (<i>It wasn\'t cheap. On the contrary, it was very expensive.</i>). For comparing two things, use "In contrast" or "By contrast".</p>' }
    ],
    checklist: ['I choose linkers by function.', 'I know conjunction vs adverb vs preposition.', 'I use referencing to avoid over-linking.'],
    summary: ['Right linker, right grammar, right punctuation.', 'Range used naturally beats quantity.', 'Referencing is cohesion too.']
  },

  'r-synonyms': {
    intro: `<p>Synonyms – words with similar meanings – are the engine of paraphrase. In Reading and Listening the questions use synonyms of the words in the text or recording; recognising them is the main skill those papers test. In Writing and Speaking, using accurate synonyms avoids repetition and demonstrates lexical range.</p>
<p>But true synonyms are rare. Most "similar" words differ in <b>meaning</b> (big vs significant), <b>register</b> (get vs obtain), <b>collocation</b> (heavy rain, not strong rain) or <b>grammar</b> (rise vs raise). Learning synonyms well means learning these differences.</p>`,
    method: [
      { title: 'Learn synonyms in sets, with their differences', body: '<p>Write the shared meaning and what makes each word different.</p>', example: '<b>increase / rise / grow / raise</b>: all = go up; <i>raise</i> needs an object (raise prices); <i>grow</i> suggests gradual development.' },
      { title: 'Learn collocations with each synonym', body: '<p><i>a significant increase, a sharp rise, steady growth, raise awareness</i>.</p>' },
      { title: 'Learn the word family', body: '<p>increase (v/n), increasing (adj), increasingly (adv) – so you can paraphrase by changing form.</p>' },
      { title: 'Use synonyms for prediction in Reading/Listening', body: '<p>Before scanning or listening, think of 2–3 synonyms for each key word in the question.</p>' },
      { title: 'In Writing, only use synonyms you are sure of', body: '<p>Repeating a word is better than using a wrong synonym.</p>' }
    ],
    worked: [{
      title: 'Choosing the right synonym in context',
      questions: '<ol><li>The government decided to (rise / raise) the minimum wage.</li><li>There was a (big / significant) difference between the two groups. (formal)</li><li>The results (show / prove) that the drug may be effective.</li><li>Unemployment (grew / increased) by 3% in 2020.</li></ol>',
      walk: [
        { q: '1', a: 'raise', steps: ['Transitive: the government raises something. "rise" has no object.'] },
        { q: '2', a: 'significant', steps: ['Formal academic register; "big" is informal in writing.'] },
        { q: '3', a: 'show', steps: ['"may be effective" is uncertain – "prove" is too strong.'] },
        { q: '4', a: 'increased', steps: ['Both are possible, but "increased by 3%" is the standard collocation for statistics; "grew by 3%" is also acceptable. The point: check collocation, not just meaning.'] }
      ]
    }],
    dos: ['Learn synonyms with collocations and grammar.', 'Note register: formal vs informal.', 'Use synonym prediction in Reading and Listening.'],
    donts: ['Don\'t replace words with thesaurus synonyms you haven\'t seen used.', 'Don\'t assume synonyms are interchangeable.'],
    careful: [{ title: 'Strength of meaning', body: '<p><i>suggest &lt; indicate &lt; show &lt; prove</i>; <i>some &lt; many &lt; most &lt; all</i>. In Reading, a stronger synonym often turns TRUE into FALSE.</p>' }],
    checklist: ['I learn synonyms in sets with differences.', 'I check collocation and register.', 'I predict synonyms before reading/listening.'],
    summary: ['Synonyms power paraphrase.', 'Differences in meaning, register, collocation and grammar matter.', 'Accuracy beats variety.']
  },

  phrasal: {
    intro: `<p>Phrasal verbs combine a verb with one or two particles (<i>look into, give up, put up with</i>) and often have meanings that can't be guessed from the parts. They are extremely common in spoken English, so they matter for <b>Listening</b> (speakers use them constantly) and <b>Speaking</b> (they make you sound natural and fluent). In <b>informal letters</b> they are ideal. In formal essays, a single-word equivalent is often more appropriate (<i>investigate</i> rather than <i>look into</i>), though many phrasal verbs are perfectly acceptable in academic writing (<i>carry out, set up, point out</i>).</p>`,
    method: [
      { title: 'Learn phrasal verbs by topic, not by particle', body: '<p>Work: <i>take on, lay off, set up, carry out</i>. Health: <i>cut down on, work out, give up</i>. Learning "all phrasal verbs with up" is much harder to remember.</p>' },
      { title: 'Learn each with an example and its object', body: '<p><i>cut down <b>on</b> sugar</i>, <i>set <b>up</b> a business</i>.</p>' },
      { title: 'Know whether it is separable', body: '<p>Separable: <i>turn the music down / turn it down</i> (pronoun must go in the middle). Inseparable: <i>look after the children / look after them</i>.</p>' },
      { title: 'Learn the formal equivalent', body: '<p>For essays: <i>find out → discover, put off → postpone, bring up → raise, go up → increase</i>.</p>' },
      { title: 'Use them naturally in Speaking', body: '<p>"I\'ve been trying to <b>cut down on</b> screen time" sounds natural and fluent.</p>' }
    ],
    worked: [{
      title: 'Register: phrasal verb or single word?',
      questions: '<ol><li>Speaking: "I want to (stop) eating junk food."</li><li>Essay: "Governments should (look into) the causes of youth unemployment."</li><li>Informal letter: "I\'m (anticipating with pleasure) seeing you."</li></ol>',
      walk: [
        { q: '1', a: 'give up / cut out', steps: ['"I want to give up eating junk food" – natural spoken style.'] },
        { q: '2', a: 'investigate', steps: ['Formal essay → "investigate" is more precise; "look into" is acceptable but less academic.'] },
        { q: '3', a: 'looking forward to', steps: ['"I\'m really looking forward to seeing you!" – note "to + -ing".'] }
      ]
    }],
    dos: ['Learn phrasal verbs by topic, with examples.', 'Use them in Speaking and informal letters.', 'Know formal equivalents for essays.'],
    donts: ['Don\'t separate inseparable verbs: ✗ "look the children after".', 'Don\'t put a pronoun after a separable verb: ✗ "turn down it".', 'Don\'t overload formal essays with idiomatic phrasal verbs.'],
    careful: [{ title: 'Look forward to + -ing', body: '<p>"to" is a preposition here: <i>I look forward to <b>hearing</b> from you</i>, not "to hear".</p>' }],
    checklist: ['I learn phrasal verbs by topic.', 'I know separable vs inseparable.', 'I choose phrasal verbs or single words according to register.'],
    summary: ['Essential for Listening and Speaking.', 'Learn by topic with examples.', 'Match to register in Writing.']
  },

  collocations: {
    intro: `<p>Collocations are words that naturally go together: <i>make a decision</i> (not do a decision), <i>heavy traffic</i> (not strong traffic), <i>raise awareness</i>, <i>a sharp rise</i>. Native speakers choose them automatically; learners often translate word by word and produce combinations that are understandable but unnatural.</p>
<p>The Lexical Resource descriptors mention collocation directly: Band 7 candidates show "awareness of style and collocation", while Band 8 candidates use less common items "skilfully". Learning vocabulary as <b>chunks</b> rather than single words is the fastest way to improve both accuracy and naturalness.</p>`,
    method: [
      { title: 'Notice chunks when you read and listen', body: '<p>Underline word partnerships, not single words: <i>pose a threat</i>, <i>widen the gap</i>, <i>a growing concern</i>.</p>' },
      { title: 'Learn the main collocation patterns', body: '<p>adjective + noun (<i>severe consequences</i>), verb + noun (<i>tackle a problem</i>), adverb + adjective (<i>highly effective</i>), verb + adverb (<i>rise sharply</i>), noun + noun (<i>traffic congestion</i>), verb + preposition (<i>depend on</i>).</p>' },
      { title: 'Record them by topic', body: '<p>Environment: <i>carbon emissions, renewable energy, tackle climate change</i>.</p>' },
      { title: 'Check unknown combinations', body: '<p>Use a collocation dictionary or search the exact phrase in quotation marks in a corpus or reliable source.</p>' },
      { title: 'Use them in your writing and speaking practice', body: '<p>Aim to use three new collocations in each essay.</p>' }
    ],
    worked: [{
      title: 'Fix the miscollocations',
      questions: '<ol><li>Students often do mistakes in exams.</li><li>There was strong rain yesterday.</li><li>The government should rise awareness about recycling.</li><li>Scientists made a research on sleep.</li><li>This policy has a big effect on the poor.</li></ol>',
      walk: [
        { q: '1', a: 'make mistakes', steps: ['make + mistake/decision/effort/progress; do + homework/research/business.'] },
        { q: '2', a: 'heavy rain', steps: ['heavy rain / traffic / smoker.'] },
        { q: '3', a: 'raise awareness', steps: ['raise (transitive) + awareness/concerns/funds.'] },
        { q: '4', a: 'carried out / did research', steps: ['"research" is uncountable and collocates with do/carry out/conduct.'] },
        { q: '5', a: 'a significant / profound / considerable effect', steps: ['"big effect" is understandable but informal; academic collocations are stronger.'] }
      ]
    }],
    dos: ['Learn words in chunks.', 'Organise collocations by topic.', 'Check new combinations before using them.'],
    donts: ['Don\'t translate combinations word for word from your language.', 'Don\'t use rare words in combinations you haven\'t seen.'],
    careful: [{ title: 'make vs do', body: '<p>make: a decision, a mistake, an effort, progress, money, a complaint. do: research, homework, business, damage, harm, a job.</p>' }],
    checklist: ['I record collocations, not single words.', 'I know the main patterns.', 'I use new collocations in practice writing.'],
    summary: ['Collocations make language natural.', 'Learn chunks by topic.', 'Band 7 requires awareness of collocation.']
  }
};

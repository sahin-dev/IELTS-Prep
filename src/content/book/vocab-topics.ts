import type { Chapter } from '@/lib/types';

/* Method chapter for the 26 topic vocabulary banks (page /vocabulary/topics) */

export const topicVocabChapter: Chapter = {
  intro: `
<p>IELTS Writing Task 2 and Speaking Parts 1 and 3 draw on a predictable set of topics: education, technology, the environment, health, work, cities, crime, the family, the media and more. For each of them, there is a body of vocabulary that a competent speaker uses naturally – not rare or "impressive" words, but the <b>precise, expected collocations</b> of the topic: <i>tuition fees</i>, <i>rote learning</i>, <i>ease congestion</i>, <i>affordable housing</i>, <i>reduce reoffending</i>.</p>
<p>The Lexical Resource criterion rewards range, precision and awareness of collocation. A candidate who writes <i>the money students pay to the university</i> is understood; one who writes <i>tuition fees</i> shows the topic vocabulary that the higher bands describe. This chapter explains how to learn the 26 topic banks that follow – in collocations, with spaced repetition, and with active use – and how to use the vocabulary naturally rather than forcing it into every sentence.</p>`,
  facts: [['Banks', '26 topics, each with key concepts, verb and adjective collocations, and discussion phrases'], ['Unit of learning', 'The collocation or phrase, not the single word'], ['Practice tools', 'Word list, spaced-repetition flashcards and a quiz for every bank'], ['Daily target', '10–15 new items + review'], ['Criterion', 'Lexical Resource (Writing and Speaking)'], ['Golden rule', 'Precise and natural beats rare and impressive']],
  method: [
    { title: 'Choose two or three topics a week', body: '<p>Start with the topics you find hardest or that appear most in your practice questions. Work through one bank in depth rather than skimming many.</p>' },
    { title: 'Learn chunks, not single words', body: '<p>Learn <i>reduce emissions</i>, not <i>emissions</i>; <i>a heavy workload</i>, not <i>workload</i>. The verb or adjective that goes with a noun is the part learners usually get wrong.</p>', example: '✗ <i>make research</i> → ✓ <i>conduct / carry out research</i> · ✗ <i>strong traffic</i> → ✓ <i>heavy traffic</i>' },
    { title: 'Learn the word family and its grammar', body: '<p>Note the noun, verb and adjective forms, countability and prepositions: <i>urbanisation (U), urban, urbanise</i>; <i>access to</i>; <i>an increase in</i>.</p>' },
    { title: 'Review with spaced repetition', body: '<p>Use the flashcards in each bank. Reviewing just before you would forget is the most efficient way to move words into long-term memory.</p>' },
    { title: 'Use new items actively within 24 hours', body: '<p>Write three sentences about your own life or opinions with new collocations, or answer a Part 3 question aloud using them. Words you only recognise do not appear in your exam answers.</p>' },
    { title: 'Check naturalness before you use a word in the exam', body: '<p>If you are not sure a word fits the context, use a simpler precise word. An accurate common collocation scores better than an inaccurate rare one.</p>' }
  ],
  sections: [
    {
      id: 'patterns', title: 'Collocation patterns to notice',
      html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Pattern</th><th>Examples</th></tr>
<tr><td>verb + noun</td><td>tackle crime, reduce emissions, pursue a degree, boost the economy</td></tr>
<tr><td>adjective + noun</td><td>heavy traffic, affordable housing, a sedentary lifestyle, cutting-edge technology</td></tr>
<tr><td>noun + noun</td><td>tuition fees, crime rate, life expectancy, screen time</td></tr>
<tr><td>noun + preposition</td><td>access to, an impact on, a solution to, demand for</td></tr>
<tr><td>adverb + adjective</td><td>densely populated, highly qualified, environmentally friendly</td></tr>
<tr><td>fixed expressions</td><td>prevention is better than cure, a double-edged sword, in the long run</td></tr>
</table></div>`
    },
    {
      id: 'natural', title: 'Natural, not forced',
      html: `
<p>The descriptors reward vocabulary that is used <b>accurately and appropriately</b>. Inserting a rare word or idiom where a plain word would be more natural is a risk, not a strategy.</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Forced</th><th>Natural and precise</th></tr>
<tr><td>The plethora of automobiles engenders gridlock.</td><td>The large number of cars causes heavy congestion.</td></tr>
<tr><td>Education is a double-edged sword and a piece of cake.</td><td>Online education has clear benefits but also some drawbacks.</td></tr>
<tr><td>People are utilising technology for the purpose of communication.</td><td>People use technology to keep in touch.</td></tr>
</table></div>
<p>Idioms in particular belong mainly in Speaking, and only when they fit. In Writing Task 2, precise topic collocations are far more valuable than idioms.</p>`
    },
    {
      id: 'routine', title: 'A 20-minute daily routine',
      html: `<ol><li><b>5 minutes:</b> review due flashcards in one or two banks.</li><li><b>5 minutes:</b> learn 10–15 new items from one topic, saying each aloud.</li><li><b>5 minutes:</b> write three sentences using new collocations about your own views.</li><li><b>5 minutes:</b> answer one Part 3 question on the topic aloud, recording yourself.</li></ol>`
    },
    {
      id: 'band-impact', title: 'How topic vocabulary affects your band',
      html: `<div class="table-wrap"><table class="data-table"><tr><th>Feature</th><th>Effect on Lexical Resource</th></tr>
<tr><td>Basic, repeated words (<i>good, bad, many people, problem</i>)</td><td>Limited range – difficult to go beyond Band 5–6</td></tr>
<tr><td>Topic collocations used accurately</td><td>The "less common lexical items" and "awareness of style and collocation" associated with Band 7</td></tr>
<tr><td>Rare words used inaccurately</td><td>Errors in word choice and collocation – can lower the band</td></tr>
<tr><td>Wide, precise, natural vocabulary</td><td>Band 8–9 range and precision</td></tr></table></div>`
    }
  ],
  worked: [
    {
      title: 'Upgrading a paragraph with topic collocations',
      source: '<div class="prompt-box"><p>"Many people in cities have problems with transport. There are too many cars, so roads are full and people are late for work. The government should make the buses better so that people use them more."</p></div>',
      walk: [
        { q: 'Identify vague phrases', a: 'have problems with transport · roads are full · make the buses better', steps: ['Each can be replaced by a precise topic collocation from the Transportation bank.'] },
        { q: 'Rewrite', a: '"Many city residents face serious transport problems. Heavy traffic causes congestion at rush hour, and commuters regularly arrive late for work. To ease congestion, the government should invest in frequent, reliable bus services so that more people choose public transport over their cars."', steps: ['<i>heavy traffic, congestion, rush hour, commuters, ease congestion, frequent, reliable services, public transport</i> – all common, precise collocations.', 'Nothing is rare or forced; the paragraph is simply more precise.'] }
      ],
      lesson: 'Upgrading vocabulary means replacing vague phrases with the precise collocations of the topic – not adding rare words.'
    }
  ],
  dos: ['Learn collocations and phrases, not isolated words.', 'Note word families, countability and prepositions.', 'Review with the flashcards every day.', 'Use new items actively within 24 hours.', 'Prefer precise common collocations to rare words.'],
  donts: ['Don\'t memorise long lists of single words without context.', 'Don\'t force idioms into Writing Task 2.', 'Don\'t use a word you are unsure of in the exam.', 'Don\'t learn more new words than you can review.'],
  careful: [
    { title: 'Uncountable topic nouns', body: '<p>Many topic nouns are uncountable: <i>legislation, infrastructure, advertising, research, evidence, unemployment, public transport</i>.</p>', example: '✗ <i>new legislations</i> → ✓ <i>new legislation</i> / <i>new laws</i>' },
    { title: 'False collocations from translation', body: '<p>Check verb + noun combinations: <i>make a crime</i> ✗ → <i>commit a crime</i>; <i>do a mistake</i> ✗ → <i>make a mistake</i>; <i>open the TV</i> ✗ → <i>turn on the TV</i>.</p>' }
  ],
  faq: [
    { q: 'How many words do I need for Band 7?', a: '<p>There is no number in the descriptors. What matters is that you have precise vocabulary for the topics you write and speak about, and use it accurately. Depth across common topics beats a huge passive list.</p>' },
    { q: 'Should I learn the Academic Word List as well?', a: '<p>Yes – it complements topic vocabulary with general academic words (analyse, significant, factor). See the <a href="/vocabulary/academic">Academic Word List bank</a>.</p>' }
  ],
  exercises: {
    id: 'ch-vocab-topics', title: 'Chapter exercises: topic collocations',
    groups: [
      { kind: 'choice', title: 'Part A: the natural collocation', instructions: 'Choose the natural collocation, <b>A, B or C</b>.', questions: [
        { n: 1, q: '___ crime', opts: ['make', 'commit', 'do'], a: 'B', x: '<i>commit a crime</i>.' },
        { n: 2, q: '___ research', opts: ['conduct', 'make', 'perform a'], a: 'A', x: '<i>conduct / carry out research</i> (uncountable, no article).' },
        { n: 3, q: '___ traffic', opts: ['strong', 'heavy', 'big'], a: 'B', x: '<i>heavy traffic</i>.' },
        { n: 4, q: 'a ___ lifestyle (with little exercise)', opts: ['sedentary', 'sitting', 'lazy-making'], a: 'A', x: '<i>a sedentary lifestyle</i>.' },
        { n: 5, q: '___ emissions', opts: ['reduce', 'lower down', 'make less'], a: 'A', x: '<i>reduce / cut emissions</i>.' },
        { n: 6, q: '___ fees (paid to a university)', opts: ['study', 'tuition', 'school-money'], a: 'B', x: '<i>tuition fees</i>.' }
      ] },
      { kind: 'gap', title: 'Part B: complete the collocation', instructions: 'Write <b>ONE WORD ONLY</b>.', questions: [
        { n: 7, q: 'Prisons should focus on {} rather than punishment.', a: 'rehabilitation', x: 'Crime bank: <i>rehabilitation</i>.' },
        { n: 8, q: 'Many families struggle to make ends {}.', a: 'meet', x: 'Economics bank: <i>make ends meet</i>.' },
        { n: 9, q: 'There is a shortage of {} housing in big cities.', a: 'affordable', x: 'Urbanisation bank: <i>affordable housing</i>.' },
        { n: 10, q: 'The video went {} and was watched by millions.', a: 'viral', x: 'Social media bank: <i>go viral</i>.' }
      ] }
    ]
  },
  checklist: ['I learn topic vocabulary as collocations.', 'I review with flashcards daily.', 'I use new items actively within a day.', 'I choose precise, natural words over rare ones.'],
  summary: ['Topic vocabulary = the precise collocations of common IELTS topics.', 'Learn chunks, word families and grammar; review with spaced repetition.', 'Use new words actively; prefer natural precision to rarity.']
};

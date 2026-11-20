import type { Chapter, Reference } from '@/lib/types';
import { grammarBooks } from './grammar-pos-a';

/* Grammar masterclass, Part A (parts of speech) – adjectives, adverbs, prepositions */

const BC = 'https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/';
const gra: Reference = { title: 'IELTS Writing band descriptors (public version)', url: 'https://ielts.org/cdn/ielts-downloadable-assets/ielts-guidance-and-support/ielts-guides/ielts-writing-band-descriptors.pdf', note: 'See Lexical Resource (collocation, word formation, precision) and Grammatical Range and Accuracy.' };

export const grammarChaptersPosB: Record<string, Chapter> = {
  /* ===================================================================== ADJECTIVES */
  adjectives: {
    intro: `
<p>An <b>adjective</b> describes a noun or a pronoun: it tells us what something is like (<i>a <b>serious</b> problem</i>), how much or how big it is (<i>a <b>significant</b> increase</i>), what kind it is (<i>an <b>economic</b> crisis</i>) or how someone feels (<i>students were <b>confused</b></i>). Adjectives are where much of the precision of English lives. <i>A big problem</i>, <i>a serious problem</i>, <i>a growing problem</i>, <i>a persistent problem</i> and <i>an unprecedented problem</i> say five different things.</p>
<p>English adjectives are grammatically simple in one way – they never change for number or gender (<i>a <b>different</b> view, two <b>different</b> views</i>, never <i>differents</i>) – but they have their own rules of position, order, form and combination. Some can only come before a noun, others only after a verb. Pairs like <i>bored</i> and <i>boring</i> mean opposite things. Compound adjectives such as <i>a five-year plan</i> keep the noun singular. And each adjective has its own natural partners: we say <i>heavy</i> traffic and a <i>high</i> rate, not <i>strong</i> traffic or a <i>big</i> rate.</p>
<p>This chapter covers the position and order of adjectives, -ed and -ing adjectives, compound adjectives, gradable and non-gradable adjectives, adjectives followed by prepositions and clauses, commonly confused adjectives, and the role adjectives play in both Lexical Resource and Grammatical Range and Accuracy.</p>`,
    facts: [
      ['Job', 'Describes a noun or pronoun'],
      ['Positions', 'Before a noun (a serious problem) or after a linking verb (the problem is serious)'],
      ['Never changes for', 'Number: different views, not differents'],
      ['Pairs to master', '-ed (feeling) vs -ing (cause): bored / boring'],
      ['Task 1 rule', 'Adjective + noun (a sharp rise) · verb + adverb (rose sharply)'],
      ['Lexical Resource', 'Precise adjectives and natural collocations']
    ],
    method: [
      {
        title: 'Put the adjective in the right position',
        body: '<p>Most adjectives can go before a noun (<b>attributive</b>: <i>a <b>modern</b> city</i>) or after a linking verb such as <i>be, seem, become, remain, look</i> (<b>predicative</b>: <i>the city is <b>modern</b></i>). A few can only go after the verb – <i>afraid, alone, alive, asleep, awake, aware, ashamed, glad</i> – and a few only before the noun – <i>main, chief, only, former, mere, sheer, upper, elder</i>.</p>',
        example: '✗ <i>an alone child</i> → ✓ <i>a child who is <b>alone</b></i> / ✓ <i>a <b>lonely</b> child</i> · ✗ <i>The reason is main.</i> → ✓ <i>This is the <b>main</b> reason.</i>'
      },
      {
        title: 'After linking verbs, use an adjective, not an adverb',
        body: '<p>Linking verbs describe the subject, so they are followed by adjectives: <i>remain stable, seem reasonable, become popular, look healthy, feel safe, stay calm, sound strange</i>. This matters in Task 1, where learners often write <i>remained stably</i>.</p>',
        example: '✗ <i>The figure remained stably at 40%.</i> → ✓ <i>The figure remained <b>stable</b> at 40%.</i> (compare: <i>The figure rose <b>steadily</b></i> – an action verb takes an adverb)'
      },
      {
        title: 'Choose between the -ed and -ing form',
        body: '<p>The <b>-ed</b> adjective describes how a person feels; the <b>-ing</b> adjective describes the thing or person that causes the feeling. <i>The lecture was <b>boring</b>, so the students were <b>bored</b>.</i> The same pattern: <i>interested/interesting, confused/confusing, surprised/surprising, worried/worrying, satisfied/satisfying, tired/tiring, embarrassed/embarrassing, depressed/depressing</i>.</p>',
        example: '✗ <i>I am very interesting in science.</i> (= I make others interested!) → ✓ <i>I am very <b>interested</b> in science.</i>'
      },
      {
        title: 'Order several adjectives naturally',
        body: '<p>When two or more adjectives come before a noun, opinion comes before fact, and facts follow a fixed general order: <b>opinion – size – age – shape – colour – origin – material – purpose – noun</b>. In practice, more than two or three adjectives before one noun sounds unnatural; use a prepositional phrase or a relative clause instead.</p>',
        example: '<i>a <b>beautiful old</b> stone bridge</i> · <i>a <b>large new</b> Japanese car factory</i> · better than four adjectives: <i>a large modern factory <b>that produces electric cars</b></i>'
      },
      {
        title: 'Build compound adjectives with a hyphen and a singular noun',
        body: '<p>Number + noun compounds before a noun are hyphenated, and the noun stays singular: <i>a <b>ten-minute</b> walk, a <b>three-year</b> course, a <b>20-storey</b> building, a <b>two-year-old</b> child</i>. Other common compounds: <i>long-term, short-term, well-known, high-quality, low-income, full-time, part-time, time-consuming, environmentally friendly</i>. After the verb, the hyphen is often dropped and the noun is plural where needed: <i>The course lasts three <b>years</b>.</i></p>',
        example: '✗ <i>a five-years plan</i> → ✓ <i>a <b>five-year</b> plan</i> · ✓ <i>The plan covers <b>five years</b>.</i>'
      },
      {
        title: 'Match the adjective to the right intensifier',
        body: '<p><b>Gradable</b> adjectives (<i>big, important, difficult, expensive</i>) can be made stronger or weaker with <i>very, extremely, fairly, rather, slightly</i>. <b>Non-gradable</b> adjectives are already extreme or absolute (<i>essential, unique, impossible, enormous, perfect, vital, unprecedented</i>) and take <i>absolutely, completely, totally, entirely</i> – not <i>very</i>.</p>',
        example: '✗ <i>Education is very essential.</i> → ✓ <i>Education is <b>essential</b>.</i> / ✓ <i>Education is <b>absolutely essential</b>.</i> / ✓ <i>Education is <b>extremely important</b>.</i>'
      },
      {
        title: 'Learn the preposition or clause that follows the adjective',
        body: '<p>Many adjectives are followed by a fixed preposition (<i>aware <b>of</b>, responsible <b>for</b>, similar <b>to</b>, dependent <b>on</b></i>) or by a to-infinitive or <i>that</i>-clause (<i>It is essential <b>that</b>…, It is difficult <b>to</b>…, likely <b>to</b>…</i>). Section 4 lists the ones you will use most.</p>'
      }
    ],
    sections: [
      {
        id: 'adj-types', title: 'Kinds of adjective and how they behave',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Kind</th><th>Examples</th><th>Notes</th></tr>
<tr><td>Descriptive (qualitative)</td><td>serious, modern, expensive, rapid</td><td>Usually gradable: <i>very serious, more expensive</i></td></tr>
<tr><td>Classifying</td><td>economic, environmental, urban, medical, annual, public</td><td>Say what type something is; usually not gradable (✗ <i>very economic</i>) and usually before the noun: <i>an <b>economic</b> crisis</i></td></tr>
<tr><td>Participle adjectives</td><td>growing, developing, increasing, reduced, educated, skilled</td><td><i>a <b>growing</b> problem, <b>skilled</b> workers, <b>developing</b> countries</i></td></tr>
<tr><td>Nouns used as adjectives</td><td>city centre, government policy, energy prices</td><td>The first noun works as an adjective and stays singular</td></tr>
<tr><td><i>the</i> + adjective (groups of people)</td><td>the elderly, the young, the poor, the rich, the unemployed, the disabled</td><td>Plural meaning and plural verb: <i>The elderly <b>are</b>…</i>; never <i>the elderlies</i></td></tr>
</table></div>
<p>Adjectives never take a plural <i>-s</i>: ✗ <i>importants factors</i>, ✗ <i>others reasons</i> (✓ <i>other reasons</i>). The pronoun <i>others</i> is different: <i>Some agree; <b>others</b> disagree.</i></p>`
      },
      {
        id: 'confused', title: 'Adjectives that are easily confused',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Pair</th><th>Meaning</th><th>Example</th></tr>
<tr><td>economic / economical</td><td>relating to the economy / saving money</td><td><i>an <b>economic</b> recession</i> · <i>an <b>economical</b> car</i></td></tr>
<tr><td>historic / historical</td><td>important in history / relating to the past</td><td><i>a <b>historic</b> agreement</i> · <i><b>historical</b> records</i></td></tr>
<tr><td>effective / efficient</td><td>producing the intended result / using little time or energy</td><td><i>an <b>effective</b> treatment</i> · an <b>efficient</b> engine</td></tr>
<tr><td>sensible / sensitive</td><td>reasonable, practical / easily affected or upset</td><td><i>a <b>sensible</b> decision</i> · <i><b>sensitive</b> skin, a <b>sensitive</b> issue</i></td></tr>
<tr><td>childish / childlike</td><td>immature (negative) / innocent like a child (positive)</td><td><i><b>childish</b> behaviour</i> · <i><b>childlike</b> curiosity</i></td></tr>
<tr><td>considerable / considerate</td><td>large / thoughtful towards others</td><td><i>a <b>considerable</b> sum</i> · <i>a <b>considerate</b> neighbour</i></td></tr>
<tr><td>alternate / alternative</td><td>every other / another possible choice</td><td><i>on <b>alternate</b> days</i> · <i>an <b>alternative</b> energy source</i></td></tr>
<tr><td>classic / classical</td><td>typical, of lasting quality / of ancient Greece and Rome, or serious music</td><td><i>a <b>classic</b> example</i> · <i><b>classical</b> music</i></td></tr>
</table></div>`
      },
      {
        id: 'collocation', title: 'Adjective collocations: the key to Lexical Resource',
        html: `
<p>Lexical Resource rewards natural <b>collocation</b> – words that habitually go together. Adjective + noun collocations are among the most important. These are especially useful for IELTS:</p>
<div class="table-wrap"><table class="data-table plain">
<tr><th>Noun</th><th>Natural adjectives</th><th>Avoid</th></tr>
<tr><td>traffic</td><td>heavy, light</td><td>strong, big</td></tr>
<tr><td>rate / level / price / cost</td><td>high, low, rising, soaring</td><td>big, small, expensive (a price cannot be "expensive")</td></tr>
<tr><td>problem / issue</td><td>serious, major, growing, pressing, persistent</td><td>strong, hard</td></tr>
<tr><td>increase / rise / fall</td><td>sharp, significant, dramatic, slight, gradual, steady</td><td>strong, big (acceptable but imprecise)</td></tr>
<tr><td>impact / effect</td><td>significant, profound, lasting, harmful, beneficial, positive, negative</td><td>big, strong (informal)</td></tr>
<tr><td>argument / reason</td><td>strong, compelling, convincing, valid</td><td>hard, big</td></tr>
<tr><td>majority / minority</td><td>vast, overwhelming / small, tiny</td><td>big</td></tr>
</table></div>
<div class="callout advice"><strong>Precision over rarity</strong>The descriptors reward vocabulary that is precise and natural. <i>A sharp rise</i> is better than <i>a gargantuan rise</i>, which is rare but unnatural. Learn adjectives with their nouns, not alone.</div>`
      },
      {
        id: 'adj-patterns', title: 'Adjective + preposition, infinitive and that-clause',
        html: `
<div class="table-wrap"><table class="data-table plain">
<tr><th>Preposition</th><th>Adjectives</th></tr>
<tr><td>of</td><td>aware of, capable of, afraid of, typical of, full of, critical of, proud of, tired of</td></tr>
<tr><td>for</td><td>responsible for, famous for, suitable for, necessary for, essential for, eligible for, grateful for</td></tr>
<tr><td>to</td><td>similar to, related to, harmful to, beneficial to, equal to, opposed to, open to, accessible to</td></tr>
<tr><td>on</td><td>dependent on, reliant on, keen on</td></tr>
<tr><td>in</td><td>interested in, involved in, rich in, successful in</td></tr>
<tr><td>with</td><td>satisfied with, familiar with, concerned with, compatible with</td></tr>
<tr><td>about</td><td>concerned about, worried about, optimistic about, enthusiastic about</td></tr>
<tr><td>from</td><td>different from (also <i>different to</i> in British English), free from, absent from</td></tr>
</table></div>
<h4>It + be + adjective + to-infinitive / that-clause</h4>
<p>A very common academic pattern: <i>It is <b>essential to invest</b> in education.</i> · <i>It is <b>likely that</b> prices will rise.</i> · <i>It is <b>vital that</b> every child <b>has</b> / <b>should have</b> / <b>have</b> access to schooling.</i> (After <i>essential, vital, important</i> + <i>that</i>, a plain base form – <i>have</i> – is a formal subjunctive; <i>should have</i> and <i>has</i> are also correct.)</p>
<h4>Too and enough</h4>
<p><i>Too</i> comes before the adjective, <i>enough</i> after it: <i>The flat is <b>too small</b>. The flat is not <b>big enough</b>.</i> (✗ <i>enough big</i>)</p>`
      },
      {
        id: 'task1-adj', title: 'Adjectives versus adverbs in Task 1',
        html: `
<p>Task 1 descriptions use two parallel patterns, and mixing them up is a very common error:</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Noun pattern: adjective + noun</th><th>Verb pattern: verb + adverb</th></tr>
<tr><td>There was a <b>sharp rise</b> in sales.</td><td>Sales <b>rose sharply</b>.</td></tr>
<tr><td>The period saw a <b>gradual decline</b> in coal use.</td><td>Coal use <b>declined gradually</b>.</td></tr>
<tr><td>There was a <b>slight fall</b> in 2015.</td><td>The figure <b>fell slightly</b> in 2015.</td></tr>
<tr><td>It showed a <b>steady increase</b>.</td><td>It <b>increased steadily</b>.</td></tr>
</table></div>
<p>✗ <i>There was a sharply rise.</i> ✗ <i>Sales rose sharp.</i> – an adverb cannot describe a noun, and an adjective cannot describe a verb. And remember that linking verbs take adjectives: <i>remained <b>stable</b></i>, <i>stayed <b>constant</b></i>.</p>`
      },
      {
        id: 'band-impact', title: 'How adjectives affect your band',
        html: `
<ul>
<li><b>Lexical Resource:</b> precise, natural adjective–noun collocations (<i>heavy traffic, a sharp decline, a pressing issue</i>) are evidence of the "less common lexical items" and "awareness of collocation" that the descriptors associate with Band 7. Vague adjectives (<i>good, bad, big</i>) repeated throughout a script suggest a limited range.</li>
<li><b>Word formation:</b> using an adjective where an adverb or noun is needed (<i>rose sharp, the important of</i>) is a word-formation error.</li>
<li><b>Grammatical Range and Accuracy:</b> errors such as <i>interesting</i> for <i>interested</i>, plural adjectives, or <i>a five-years plan</i> are noticeable, repeated errors.</li>
<li><b>Speaking:</b> a varied range of descriptive adjectives (<i>bustling, cosy, picturesque, nerve-racking</i>) helps Lexical Resource in Part 2, provided they are used accurately and pronounced with correct stress.</li>
</ul>`
      }
    ],
    worked: [
      {
        title: 'Upgrading and correcting adjectives',
        questions: `<ol>
<li>I was very boring in the lecture, so I left early.</li>
<li>Many youngs cannot afford a house.</li>
<li>The government has a five-years plan to reduce the big traffic in the capital.</li>
<li>The unemployment rate remained stably at 5%.</li>
<li>Clean water is very essential for health.</li>
</ol>`,
        walk: [
          { q: '1.', a: 'I was very bored', steps: ['The speaker describes their feeling, so <i>-ed</i>: <i>bored</i>. <i>The lecture was boring</i> (the cause).'] },
          { q: '2.', a: 'Many young people cannot afford a house.', steps: ['Adjectives have no plural, and <i>the young</i> is only used with <i>the</i>. Use <i>young people</i>.'] },
          { q: '3.', a: 'a five-year plan to reduce heavy traffic', steps: ['Compound adjective: number + singular noun with a hyphen: <i>five-year</i>.', 'Collocation: <i>heavy traffic</i>, not <i>big traffic</i>. This is a Lexical Resource improvement as well as a correction.'] },
          { q: '4.', a: 'remained stable at 5%', steps: ['<i>Remain</i> is a linking verb, so it takes an adjective.'] },
          { q: '5.', a: 'Clean water is essential for health. / absolutely essential', steps: ['<i>Essential</i> is non-gradable; it cannot be "very". Use it alone, or with <i>absolutely</i>, or choose a gradable adjective: <i>extremely important</i>.'] }
        ],
        lesson: 'Adjective errors fall into a few patterns: feeling vs cause (-ed/-ing), no plural, compound adjectives with a singular noun, adjectives after linking verbs, and gradable vs non-gradable. Check for each pattern when you proofread.'
      }
    ],
    dos: [
      'Use -ed for feelings and -ing for the cause: interested in an interesting topic.',
      'Use adjectives after linking verbs: remain stable, become popular.',
      'Hyphenate number compounds and keep the noun singular: a ten-year plan.',
      'Learn adjectives with their nouns (heavy traffic, high rate, sharp rise).',
      'Use absolutely/completely with extreme adjectives and very with gradable ones.',
      'Learn the preposition that follows each adjective (aware of, responsible for).'
    ],
    donts: [
      'Don\'t add -s to adjectives: not differents, importants, others reasons.',
      'Don\'t use very with essential, unique, vital, impossible or perfect.',
      'Don\'t put alone, afraid, asleep or aware before a noun.',
      'Don\'t write a sharply rise or rose sharp.',
      'Don\'t stack more than two or three adjectives before one noun.',
      'Don\'t confuse economic/economical or historic/historical.'
    ],
    careful: [
      { title: 'Interested or interesting?', body: '<p>The most frequent adjective error in IELTS Speaking. <i>I am interesting</i> means you are fascinating to others.</p>', example: '✓ <i>I\'m really <b>interested</b> in photography – it\'s an <b>interesting</b> way to see the world.</i>' },
      { title: '"Others" vs "other"', body: '<p><i>Other</i> is a determiner or adjective and never takes -s before a noun. <i>Others</i> is a pronoun and stands alone.</p>', example: '✗ <i>others countries</i> → ✓ <i>other countries</i> · ✓ <i>Some countries agreed; <b>others</b> refused.</i>' },
      { title: 'Price is high, not expensive', body: '<p>A thing is expensive; a price, cost or fee is high.</p>', example: '✗ <i>The price of housing is expensive.</i> → ✓ <i>The price of housing is <b>high</b>.</i> / ✓ <i>Housing is <b>expensive</b>.</i>' },
      { title: 'Classifying adjectives are not gradable', body: '<p>Adjectives that say what type something is – <i>economic, environmental, medical, annual</i> – cannot normally be "very" or "more".</p>', example: '✗ <i>a very environmental problem</i> → ✓ <i>a <b>serious environmental</b> problem</i>' }
    ],
    faq: [
      { q: 'Should I use rare adjectives to impress the examiner?', a: '<p>Only if you know exactly how they are used. A less common adjective in a natural collocation (<i>a pressing issue</i>) helps; a rare word used slightly wrongly (<i>a pressing traffic</i>) counts as an error. Precision first.</p>' },
      { q: 'Is it "different from" or "different to"?', a: '<p>Both are used in British English; <i>different from</i> is the most widely accepted in formal writing. American English also uses <i>different than</i>. Any of them is acceptable in IELTS.</p>' },
      { q: 'How do I compare with adjectives?', a: '<p>Comparatives (<i>higher, more expensive</i>) and superlatives (<i>the highest, the most expensive</i>) have their own chapter: <a href="/grammar/comparatives">Comparison structures</a>.</p>' }
    ],
    exercises: {
      id: 'ch-grammar-adjectives',
      title: 'Chapter exercises: adjectives',
      groups: [
        {
          kind: 'choice', title: 'Part A: choose the correct option', instructions: 'Choose the correct option, <b>A, B or C</b>.',
          questions: [
            { n: 1, q: 'Many students find statistics ___.', opts: ['confused', 'confusing', 'confuse'], a: 'B', x: 'The subject causes the feeling, so <i>-ing</i>: <i>confusing</i>. The students feel <i>confused</i>.' },
            { n: 2, q: 'The number of members remained ___ throughout the year.', opts: ['stable', 'stably', 'stability'], a: 'A', x: '<i>Remain</i> is a linking verb, followed by an adjective.' },
            { n: 3, q: 'The council approved a ___ project.', opts: ['three-years', 'three-year', 'three years'], a: 'B', x: 'Compound adjective before a noun: hyphen and singular noun.' },
            { n: 4, q: 'Access to clean water is ___.', opts: ['very essential', 'absolutely essential', 'more essential'], a: 'B', x: '<i>Essential</i> is non-gradable: use <i>absolutely</i>, not <i>very</i>.' },
            { n: 5, q: 'There is ___ traffic in the city centre every morning.', opts: ['strong', 'big', 'heavy'], a: 'C', x: 'Collocation: <i>heavy traffic</i>.' },
            { n: 6, q: 'Smaller cars are usually more ___ to run.', opts: ['economic', 'economical', 'economics'], a: 'B', x: '<i>Economical</i> = saving money. <i>Economic</i> = relating to the economy.' },
            { n: 7, q: 'Which sentence is correct?', opts: ['The elderlies need better care.', 'The elderly needs better care.', 'The elderly need better care.'], a: 'C', x: '<i>The elderly</i> means elderly people: plural meaning, plural verb, no <i>-s</i>.' }
          ]
        },
        {
          kind: 'gap', title: 'Part B: prepositions after adjectives', instructions: 'Write <b>ONE WORD ONLY</b>.',
          questions: [
            { n: 8, q: 'Parents are responsible {} their children\'s safety.', a: 'for', x: '<i>responsible for</i>.' },
            { n: 9, q: 'Many people are not aware {} the risks of sitting all day.', a: 'of', x: '<i>aware of</i>.' },
            { n: 10, q: 'The economy is heavily dependent {} tourism.', a: 'on|upon', x: '<i>dependent on</i> (formal: <i>upon</i>).' },
            { n: 11, q: 'Air pollution is harmful {} children\'s lungs.', a: 'to', x: '<i>harmful to</i>.' },
            { n: 12, q: 'This model is similar {} the one used in Sweden.', a: 'to', x: '<i>similar to</i>.' }
          ]
        }
      ]
    },
    checklist: [
      'I use -ed and -ing adjectives correctly.',
      'I use adjectives, not adverbs, after linking verbs.',
      'I write compound adjectives with a hyphen and a singular noun.',
      'I know which adjectives are non-gradable.',
      'I know the natural adjectives for traffic, rate, problem, increase and impact.',
      'I know the preposition after the adjectives I use most.'
    ],
    summary: [
      'Adjectives describe nouns, never change for number, and go before a noun or after a linking verb.',
      '-ed adjectives describe feelings; -ing adjectives describe the cause.',
      'Compound adjectives: a five-year plan, a ten-minute walk.',
      'Gradable adjectives take very; extreme and absolute ones take absolutely.',
      'Adjective + noun collocations are central to Lexical Resource.'
    ],
    references: [
      { title: 'British Council LearnEnglish: Adjectives', url: BC + 'adjectives', note: 'Position, order, -ed/-ing adjectives, intensifiers and adjectives with prepositions.' },
      ...grammarBooks,
      { title: 'Michael McCarthy and Felicity O\'Dell, English Collocations in Use: Intermediate and Advanced (Cambridge University Press)', note: 'Practice with natural adjective–noun and verb–noun collocations.' },
      gra
    ]
  },

  /* ===================================================================== ADVERBS */
  adverbs: {
    intro: `
<p>An <b>adverb</b> adds information to a verb, an adjective, another adverb or a whole sentence. It can tell us <b>how</b> something happens (<i>rose <b>sharply</b></i>), <b>how much</b> (<i><b>slightly</b> higher, <b>extremely</b> difficult</i>), <b>how often</b> (<i><b>rarely</b> used</i>), <b>when</b> (<i><b>recently</b>, <b>already</b></i>), <b>where</b> (<i><b>abroad</b>, <b>nearby</b></i>), or what the writer thinks about the whole statement (<i><b>Unfortunately</b>, <b>Arguably</b></i>). Some adverbs also link ideas across sentences (<i><b>However</b>, <b>Therefore</b></i>).</p>
<p>Adverbs are where writers show <b>degree and attitude</b> – exactly what separates a bare description from a precise, nuanced one. <i>Prices rose</i> is a fact; <i>prices rose <b>dramatically</b></i>, <i>prices rose <b>only slightly</b></i> and <i>prices <b>arguably</b> rose too fast</i> are three different claims. In Task 1 the right adverb of degree is part of describing the data accurately, and in Task 2 sentence adverbs such as <i>arguably</i> and <i>generally</i> let you hedge your claims – a key feature of academic writing.</p>
<p>Adverbs also cause characteristic errors: the wrong form (<i>hard</i> vs <i>hardly</i>), the wrong position (<i>I like very much football</i>), adverbs used after linking verbs, and linking adverbs punctuated as if they were conjunctions. This chapter deals with each.</p>`,
    facts: [
      ['Job', 'Modifies a verb, adjective, adverb or a whole sentence'],
      ['Usual form', 'Adjective + -ly (rapid → rapidly)'],
      ['Same form as adjective', 'fast, hard, late, early, high, low, daily'],
      ['Positions', 'Front, mid (before the main verb), end'],
      ['Never', 'Between a verb and its object'],
      ['Writing uses', 'Degree in Task 1, hedging and linking in Task 2']
    ],
    method: [
      {
        title: 'Form the adverb correctly',
        body: '<p>Most adverbs are adjective + <i>-ly</i>. Spelling changes: <i>-y → -ily</i> (<i>easy → easily, steady → steadily</i>); <i>-le → -ly</i> (<i>gentle → gently, possible → possibly</i>); <i>-ic → -ically</i> (<i>dramatic → dramatically, basic → basically</i>; exception: <i>public → publicly</i>); <i>-ue → -uly</i> (<i>true → truly</i>); <i>-ll → -lly</i> (<i>full → fully</i>). Most other words simply add <i>-ly</i>, keeping a final <i>e</i>: <i>complete → completely, extreme → extremely</i>.</p>',
        example: '✗ <i>dramaticly, truely, steadyly</i> → ✓ <i>dramatically, truly, steadily</i>'
      },
      {
        title: 'Watch the adverbs that look like adjectives – and the pairs with different meanings',
        body: '<p>Some adverbs have the same form as the adjective: <i>fast, hard, late, early, high, low, straight, daily, monthly</i>. Adding <i>-ly</i> to some of these creates a <b>different word</b>: <i>hardly</i> (= almost not), <i>lately</i> (= recently), <i>highly</i> (= very, much), <i>nearly</i> (= almost), <i>mostly</i> (= mainly). And some words ending in <i>-ly</i> are adjectives with no adverb form: <i>friendly, lovely, lonely, likely, costly, elderly, lively</i> – use <i>in a friendly way</i>.</p>',
        example: '<i>She works <b>hard</b>.</i> (with effort) ≠ <i>She <b>hardly</b> works.</i> (almost not at all) · <i>The plan is <b>highly</b> effective.</i> (very) · ✗ <i>He spoke friendly.</i> → ✓ <i>He spoke <b>in a friendly way</b>.</i>'
      },
      {
        title: 'Use an adverb with an action verb, an adjective with a linking verb',
        body: '<p>Action verbs are modified by adverbs: <i>increased <b>steadily</b>, spoke <b>clearly</b></i>. Linking verbs (<i>be, remain, become, seem, look, feel</i>) are followed by adjectives: <i>remained <b>steady</b>, looks <b>healthy</b>, feel <b>bad</b></i>. <i>Good</i> is an adjective; its adverb is <i>well</i>: <i>She speaks English <b>well</b></i>; <i>Her English is <b>good</b></i>.</p>',
        example: '✗ <i>He speaks English very good.</i> → ✓ <i>He speaks English very <b>well</b>.</i>'
      },
      {
        title: 'Put the adverb in the right position',
        body: '<p>English has three main positions. <b>Front</b> (before the subject) is for sentence and linking adverbs: <i><b>Unfortunately</b>, …; <b>However</b>, …</i>. <b>Mid</b> position is for frequency, degree and focusing adverbs (<i>always, often, rarely, also, just, only, already, almost</i>): before the main verb, but after <i>be</i> and after the first auxiliary. <b>End</b> position is for manner, place and time, in that order. Never put an adverb between a verb and its object.</p>',
        example: '<i>People <b>often</b> use buses.</i> · <i>Buses are <b>often</b> late.</i> · <i>Buses have <b>often</b> been late.</i> · ✗ <i>I like very much football.</i> → ✓ <i>I like football <b>very much</b>.</i>'
      },
      {
        title: 'Choose the degree adverb that matches the data',
        body: '<p>In Task 1, the adverb is part of your accuracy. Match the strength of the adverb to the size of the change: <i>slightly / marginally</i> (small), <i>steadily / gradually</i> (moderate, regular), <i>considerably / significantly / substantially</i> (large), <i>sharply / dramatically / rapidly</i> (large and quick). With comparatives, use <i>much, far, considerably, significantly, slightly, a little</i> – never <i>very</i>.</p>',
        example: '✗ <i>very higher</i> → ✓ <i><b>much</b> higher</i> / ✓ <i><b>significantly</b> higher</i> / ✓ <i><b>slightly</b> lower</i>'
      },
      {
        title: 'Hedge claims with sentence adverbs in Task 2',
        body: '<p>Academic writers avoid overstating. Adverbs such as <i>generally, largely, typically, often, arguably, possibly, probably, relatively</i> soften a claim so that it is defensible. Attitude adverbs (<i>clearly, undoubtedly, admittedly, unfortunately, surprisingly</i>) show your stance.</p>',
        example: '<i>Online learning is cheaper.</i> (too strong) → <i>Online learning is <b>generally</b> cheaper.</i> · <i>This is, <b>arguably</b>, the most important factor.</i>'
      },
      {
        title: 'Punctuate linking adverbs as adverbs, not as conjunctions',
        body: '<p><i>However, therefore, moreover, consequently, nevertheless</i> are adverbs. They cannot join two clauses with a comma. Start a new sentence, or use a semicolon; put a comma after the adverb at the start of a clause.</p>',
        example: '✗ <i>Costs rose, however demand remained high.</i> → ✓ <i>Costs rose. <b>However,</b> demand remained high.</i> / ✓ <i>Costs rose; <b>however,</b> demand remained high.</i>'
      }
    ],
    sections: [
      {
        id: 'adv-types', title: 'Kinds of adverb',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Kind</th><th>Examples</th><th>Usual position</th></tr>
<tr><td>Manner</td><td>quickly, carefully, steadily, sharply, well</td><td>End (or before the main verb): <i>Sales rose <b>steadily</b>.</i></td></tr>
<tr><td>Degree</td><td>very, extremely, highly, fairly, rather, quite, slightly, considerably, almost, nearly</td><td>Before the word they modify: <i><b>extremely</b> expensive, <b>almost</b> doubled</i></td></tr>
<tr><td>Frequency</td><td>always, usually, often, sometimes, rarely, seldom, never</td><td>Mid: <i>Children <b>rarely</b> walk to school.</i></td></tr>
<tr><td>Time</td><td>now, recently, already, still, yet, soon, then, currently</td><td>Usually end or mid: <i>has <b>already</b> begun; I haven't finished <b>yet</b>.</i></td></tr>
<tr><td>Place</td><td>here, abroad, nearby, everywhere, overseas</td><td>End: <i>study <b>abroad</b></i> (✗ <i>study in abroad</i>)</td></tr>
<tr><td>Focusing</td><td>only, even, also, just, especially, particularly, mainly</td><td>Next to the word they focus on</td></tr>
<tr><td>Sentence / attitude</td><td>clearly, arguably, undoubtedly, admittedly, fortunately, unfortunately, surprisingly, ideally</td><td>Front (with a comma) or mid</td></tr>
<tr><td>Hedging</td><td>generally, largely, typically, relatively, partly, potentially, probably</td><td>Mid or before the word they soften</td></tr>
<tr><td>Linking (conjunctive)</td><td>however, therefore, moreover, furthermore, consequently, nevertheless, thus, meanwhile</td><td>Front of the clause, followed by a comma</td></tr>
</table></div>`
      },
      {
        id: 'position', title: 'Adverb position in detail',
        html: `
<h4>Mid position</h4>
<ul>
<li>Before a single main verb: <i>Governments <b>often</b> ignore this.</i></li>
<li>After <i>be</i> as a main verb: <i>This is <b>often</b> ignored.</i> · <i>They are <b>always</b> busy.</i></li>
<li>After the first auxiliary: <i>This has <b>often</b> been ignored.</i> · <i>Prices will <b>probably</b> rise.</i></li>
<li>In negatives, <i>probably</i> and <i>certainly</i> go before the negative auxiliary: <i>Prices <b>probably won't</b> fall.</i></li>
</ul>
<h4>The meaning of "only" depends on its position</h4>
<p><i><b>Only</b> students can use the library on Sundays.</i> (no one else) · <i>Students can use the library <b>only</b> on Sundays.</i> (no other day). Put <i>only</i> next to the word it limits.</p>
<h4>"Also", "too" and "as well"</h4>
<p><i>Also</i> normally goes in mid position: <i>Cycling is cheap. It is <b>also</b> healthy.</i> <i>Too</i> and <i>as well</i> go at the end, mainly in speech and informal writing: <i>It's healthy <b>too</b>.</i> At the start of a sentence in formal writing, <i>In addition</i> or <i>Moreover</i> is more natural than <i>Also,</i>.</p>
<h4>End position: manner – place – time</h4>
<p><i>She studied <b>hard</b> (manner) <b>at the library</b> (place) <b>every evening</b> (time).</i></p>`
      },
      {
        id: 'degree', title: 'Degree adverbs with adjectives, verbs and comparatives',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>With…</th><th>Use</th><th>Do not use</th></tr>
<tr><td>gradable adjectives</td><td>very, extremely, highly (+ <i>effective, successful, likely, skilled</i>), fairly, rather, quite, relatively</td><td></td></tr>
<tr><td>extreme / absolute adjectives</td><td>absolutely, completely, totally, entirely, utterly</td><td>very</td></tr>
<tr><td>verbs</td><td><i>greatly</i> appreciate, <i>strongly</i> believe/agree, <i>completely</i> disagree, <i>very much</i> enjoy (or enjoy… <i>very much</i>)</td><td><i>very</i> alone: ✗ <i>I very agree</i></td></tr>
<tr><td>comparatives</td><td>much, far, a lot (informal), considerably, significantly, slightly, a little, marginally</td><td>very: ✗ <i>very cheaper</i></td></tr>
<tr><td>superlatives</td><td>by far, easily, much (formal): <i>by far the largest</i></td><td></td></tr>
</table></div>
<p><i>Quite</i> has two meanings in British English: with a gradable adjective it means "fairly" (<i>quite good</i> = reasonably good), with an absolute adjective it means "completely" (<i>quite impossible</i>). <i>Too</i> means "more than is acceptable": <i>The rent is <b>too</b> high</i> is a complaint, not a compliment.</p>`
      },
      {
        id: 'band-impact', title: 'How adverbs affect your band',
        html: `
<ul>
<li><b>Task 1 (Task Achievement and Lexical Resource):</b> accurate degree adverbs describe the data correctly. Writing <i>rose dramatically</i> for a 2% change is a misrepresentation of the data, not just a vocabulary slip.</li>
<li><b>Task 2 (Task Response and Lexical Resource):</b> hedging adverbs make claims defensible and show academic style. Overgeneralisations (<i>Everyone always…</i>) weaken an argument.</li>
<li><b>Coherence and Cohesion:</b> linking adverbs are cohesive devices; the descriptors reward using them naturally and penalise using them mechanically or inaccurately. Avoid beginning every sentence with one.</li>
<li><b>Grammatical Range and Accuracy:</b> comma splices with <i>however</i>, wrong adverb forms and wrong positions are frequent, visible errors.</li>
</ul>`
      }
    ],
    worked: [
      {
        title: 'Correcting adverb form, position and punctuation',
        questions: `<ol>
<li>The number of cyclists increased dramaticly, however, the number of drivers stayed the same.</li>
<li>I like very much reading novels.</li>
<li>Young people use social media constant and they hardly work at school.</li>
<li>The price of electricity was very higher in 2020.</li>
<li>Online courses are cheaper than traditional ones.</li>
</ol>`,
        walk: [
          { q: '1.', a: 'increased dramatically. However, the number…', steps: ['Spelling: <i>-ic → -ically</i>: <i>dramatically</i>.', '<i>However</i> is a linking adverb: it cannot join two clauses with commas. Start a new sentence (or use a semicolon) and keep the comma after <i>However</i>.'] },
          { q: '2.', a: 'I like reading novels very much. / I really like reading novels.', steps: ['Never put an adverb between a verb and its object. <i>Very much</i> goes at the end; <i>really</i> can go before the verb.'] },
          { q: '3.', a: 'use social media constantly… they hardly work → they do not work hard', steps: ['<i>Use</i> is an action verb: adverb <i>constantly</i>.', '<i>They hardly work</i> means "they almost do not work" – probably the writer meant <i>they do not work hard</i>. Check that the adverb says what you mean.'] },
          { q: '4.', a: 'much higher / considerably higher', steps: ['Comparatives take <i>much, far, considerably, significantly</i> – never <i>very</i>.'] },
          { q: '5.', a: 'Online courses are generally cheaper…', steps: ['Not a grammar error, but an overgeneralisation in Task 2. A hedging adverb (<i>generally, usually, often</i>) makes the claim accurate and academic.'] }
        ],
        lesson: 'With adverbs, check four things: the spelling of the -ly form, whether you really mean the -ly word (hard/hardly), its position, and – with linking adverbs – the punctuation.'
      }
    ],
    dos: [
      'Spell adverbs carefully: dramatically, steadily, truly, fully, publicly.',
      'Use adverbs with action verbs and adjectives with linking verbs.',
      'Put frequency adverbs before the main verb and after be.',
      'Match degree adverbs to the size of the change in Task 1.',
      'Hedge claims in Task 2 with generally, largely, arguably.',
      'Start a new sentence or use a semicolon before however and therefore.'
    ],
    donts: [
      'Don\'t put an adverb between a verb and its object.',
      'Don\'t use very with comparatives: not "very higher".',
      'Don\'t confuse hard/hardly, late/lately, high/highly, near/nearly.',
      'Don\'t write "speaks English very good" – use well.',
      'Don\'t begin every sentence with a linking adverb.',
      'Don\'t write "study in abroad" or "go to home" – abroad and home are adverbs here.'
    ],
    careful: [
      { title: 'The comma splice with "however"', body: '<p>Probably the most common punctuation error in IELTS essays. A comma before <i>however</i> cannot join two complete sentences.</p>', example: '✗ <i>Cars are convenient, however they pollute.</i> → ✓ <i>Cars are convenient; however, they pollute.</i> / ✓ <i>Although cars are convenient, they pollute.</i>' },
      { title: '"Hardly" is negative', body: '<p><i>Hardly</i> means "almost not", so do not add another negative.</p>', example: '✗ <i>I can\'t hardly hear.</i> → ✓ <i>I can <b>hardly</b> hear.</i>' },
      { title: 'Overusing "very" in Speaking', body: '<p>Repeating <i>very</i> limits Lexical Resource. Use stronger adjectives or other intensifiers.</p>', example: '<i>very tired → exhausted · very good → excellent · very big → huge · very interesting → fascinating · very important → crucial</i>' },
      { title: '"Basically", "actually", "literally" as fillers', body: '<p>In Speaking, these adverbs are natural in moderation but become noticeable if repeated in every answer. Vary them, or simply leave them out.</p>' }
    ],
    faq: [
      { q: 'Can I start a sentence with "Also"?', a: '<p>It is common in speech and informal writing. In Task 2, <i>In addition,</i> <i>Moreover,</i> or a mid-position <i>also</i> (<i>It also…</i>) sounds more formal.</p>' },
      { q: 'Is "firstly" correct?', a: '<p>Yes, <i>firstly, secondly, finally</i> are correct in British English; <i>first, second</i> are also correct. Use them sparingly – a paragraph structure that is clear without them is better.</p>' },
      { q: 'Is "more cheaply" or "cheaper" correct as an adverb?', a: '<p>In formal writing, use <i>more cheaply</i>: <i>Goods can be produced <b>more cheaply</b> abroad.</i> <i>Cheaper</i> as an adverb (<i>buy it cheaper</i>) is informal.</p>' }
    ],
    exercises: {
      id: 'ch-grammar-adverbs',
      title: 'Chapter exercises: adverbs',
      groups: [
        {
          kind: 'choice', title: 'Part A: choose the correct option', instructions: 'Choose the correct option, <b>A, B or C</b>.',
          questions: [
            { n: 1, q: 'The population grew ___ between 1990 and 2000.', opts: ['steady', 'steadily', 'steadyly'], a: 'B', x: '<i>Grow</i> is an action verb: adverb. <i>-y → -ily</i>.' },
            { n: 2, q: 'She has ___ been late for work.', opts: ['rarely', 'rare', 'rarely has'], a: 'A', x: 'Mid position, after the first auxiliary: <i>has rarely been</i>.' },
            { n: 3, q: 'Fees in 2020 were ___ than in 2010.', opts: ['very higher', 'much higher', 'more higher'], a: 'B', x: 'Comparatives take <i>much / far / considerably</i>, not <i>very</i>; <i>more higher</i> doubles the comparative.' },
            { n: 4, q: 'He was so tired that he could ___ keep his eyes open.', opts: ['hard', 'hardly', 'harder'], a: 'B', x: '<i>Hardly</i> = almost not.' },
            { n: 5, q: 'The new treatment is ___ effective.', opts: ['high', 'highly', 'height'], a: 'B', x: '<i>Highly</i> = very, before adjectives such as <i>effective, successful, likely, skilled</i>.' },
            { n: 6, q: 'Which sentence is punctuated correctly?', opts: ['The plan was cheap, however it failed.', 'The plan was cheap; however, it failed.', 'The plan was cheap however, it failed.'], a: 'B', x: '<i>However</i> is a linking adverb: use a semicolon (or a full stop) before it and a comma after it.' },
            { n: 7, q: 'Which sentence is correct?', opts: ['I enjoy very much cooking.', 'I very enjoy cooking.', 'I really enjoy cooking.'], a: 'C', x: 'No adverb between verb and object; <i>very</i> cannot modify a verb alone. <i>Really</i> before the verb is natural.' }
          ]
        },
        {
          kind: 'gap', title: 'Part B: form the adverb', instructions: 'Write the adverb form of the word in brackets. <b>ONE WORD ONLY</b>.',
          questions: [
            { n: 8, q: 'Car ownership rose {} (dramatic) in the 1990s.', a: 'dramatically', x: '<i>-ic → -ically</i>.' },
            { n: 9, q: 'I {} (true) believe that education is the answer.', a: 'truly', x: '<i>true → truly</i> (the <i>e</i> is dropped).' },
            { n: 10, q: 'The results were {} (public) announced.', a: 'publicly', x: 'The exception to <i>-ic → -ically</i>: <i>publicly</i>.' },
            { n: 11, q: 'The building is {} (full) accessible to wheelchair users.', a: 'fully', x: '<i>-ll → -lly</i>.' },
            { n: 12, q: 'The figure fell {} (slight) in 2019.', a: 'slightly', x: 'Adverb of degree with an action verb.' }
          ]
        }
      ]
    },
    checklist: [
      'I spell -ly adverbs correctly, including -ically and the exceptions.',
      'I know the difference between hard/hardly, late/lately, high/highly.',
      'I put adverbs in mid position correctly and never between verb and object.',
      'I use much/far/considerably, not very, with comparatives.',
      'I punctuate however and therefore correctly.',
      'I hedge Task 2 claims with adverbs.'
    ],
    summary: [
      'Adverbs modify verbs, adjectives, other adverbs and whole sentences.',
      'Most are adjective + -ly; learn the spelling changes and the words with the same form.',
      'Action verbs take adverbs; linking verbs take adjectives.',
      'Position: front for linking and attitude, mid for frequency and degree, end for manner, place, time.',
      'Linking adverbs need a full stop or semicolon before them, not a comma.'
    ],
    references: [
      { title: 'British Council LearnEnglish: Adverbials', url: BC + 'adverbials', note: 'Kinds of adverbial, their positions and meanings.' },
      ...grammarBooks,
      gra
    ]
  },

  /* ===================================================================== PREPOSITIONS */
  prepositions: {
    intro: `
<p>A <b>preposition</b> is a short word that shows the relationship between a noun (or pronoun, or <i>-ing</i> form) and the rest of the sentence – a relationship of place (<i><b>in</b> the city</i>), time (<i><b>on</b> Monday</i>), movement (<i><b>into</b> the room</i>), or a more abstract link (<i>an increase <b>in</b> prices, responsible <b>for</b> safety, depend <b>on</b> tourism</i>). The preposition and the words after it form a <b>prepositional phrase</b>.</p>
<p>Prepositions are small, but they are one of the hardest areas of English for learners at every level, for a simple reason: much of their use is <b>not logical but conventional</b>. We say <i>on</i> the bus but <i>in</i> the car, <i>at</i> night but <i>in</i> the morning, <i>interested in</i> but <i>keen on</i>. Your first language will often suggest a different preposition, and translation leads directly to errors. The only reliable solution is to learn prepositions together with the words they belong to.</p>
<p>For IELTS, prepositions matter most in two places. In <b>Writing Task 1</b>, the prepositions of data description – <i>rose <b>by</b> 10%</i> versus <i>rose <b>to</b> 10%</i>, <i>stood <b>at</b></i>, <i>an increase <b>in</b></i>, <i>the figure <b>for</b> 2010</i> – change the meaning of your numbers, so an error is also an inaccuracy. In <b>Task 2 and Speaking</b>, dependent prepositions after verbs, adjectives and nouns (<i>contribute to, the reason for, the solution to</i>) are tested in almost every sentence.</p>`,
    facts: [
      ['Job', 'Links a noun, pronoun or -ing form to the rest of the sentence'],
      ['Followed by', 'A noun phrase, pronoun (object form) or -ing form – never a base verb'],
      ['Main areas', 'Time, place, movement, and dependent prepositions'],
      ['Task 1 essentials', 'by (change) · to (end point) · at (level) · in (thing that changes)'],
      ['Learn them', 'With the word they depend on: depend on, increase in, aware of'],
      ['Commonest errors', 'discuss about, rose with 10%, arrive to, despite of']
    ],
    method: [
      {
        title: 'Learn prepositions in combinations, not alone',
        body: '<p>When you meet a new noun, verb or adjective, note its preposition at the same time: <i>an impact <b>on</b></i>, <i>contribute <b>to</b></i>, <i>capable <b>of</b></i>. Most preposition errors come from choosing a preposition by translation or by logic. Lists in sections 3 and 4 give the combinations that appear most often in IELTS.</p>',
        example: '✗ <i>the solution of this problem</i> → ✓ <i>the solution <b>to</b> this problem</i> · ✗ <i>the reason of</i> → ✓ <i>the reason <b>for</b></i>'
      },
      {
        title: 'After a preposition, use a noun, pronoun or -ing form',
        body: '<p>A preposition is followed by a noun phrase, an object pronoun or an <i>-ing</i> form – never a base verb or a full clause. Be careful with <i>to</i>: in combinations such as <i>the key to, contribute to, look forward to, be used to, object to, commitment to</i>, it is a preposition, so the verb after it takes <i>-ing</i>.</p>',
        example: '✗ <i>Instead of take the bus…</i> → ✓ <i>Instead of <b>taking</b> the bus…</i> · ✗ <i>the key to reduce crime</i> → ✓ <i>the key to <b>reducing</b> crime</i>'
      },
      {
        title: 'Use at / on / in for time by size of the period',
        body: '<p><b>at</b> for points (<i>at 6 pm, at night, at the weekend</i> (British), <i>at the end of</i>), <b>on</b> for days and dates (<i>on Monday, on 5 May, on my birthday</i>), <b>in</b> for longer periods (<i>in May, in 2020, in the 1990s, in the morning, in summer</i>). Use <b>no</b> preposition before <i>this, next, last, every</i>: <i>last year, every summer</i> (✗ <i>in last year</i>).</p>',
        example: '<i>The bridge opened <b>in</b> 2015, <b>on</b> 3 June, <b>at</b> midday.</i>'
      },
      {
        title: 'Use at / on / in for place by type of location',
        body: '<p><b>at</b> for a point or a place of activity (<i>at the station, at university, at work, at home</i>), <b>on</b> for surfaces and lines (<i>on the wall, on the coast, on the river, on the left, on the second floor</i>), <b>in</b> for enclosed spaces and areas (<i>in the kitchen, in the city centre, in Brazil</i>). <i>Arrive</i> takes <i>at</i> (a building, station) or <i>in</i> (a city or country) – never <i>to</i>.</p>',
        example: '<i>She lives <b>in</b> a flat <b>on</b> the fifth floor of a building <b>on</b> the river, and works <b>at</b> the hospital.</i>'
      },
      {
        title: 'In Task 1, choose the preposition that gives the right number',
        body: '<p><b>by</b> = the size of the change; <b>to</b> = the end point; <b>from … to</b> = start and end; <b>at</b> = a level (<i>stood at, peaked at</i>); <b>of</b> = the size, after a noun (<i>a rise of 5%</i>); <b>in</b> = the thing that changes, after a noun (<i>a rise in sales</i>); <b>with</b> = attaching a figure (<i>Germany came first, with 40%</i>). Section 2 shows them all.</p>',
        example: '<i>Sales rose <b>by</b> 10% (from 20% to 30%).</i> ≠ <i>Sales rose <b>to</b> 10%.</i>'
      },
      {
        title: 'Do not add a preposition where there is none',
        body: '<p>Some verbs take a direct object, although the matching verb in your language – or the related English noun – takes a preposition: <i>discuss</i> (but <i>a discussion about</i>), <i>emphasise</i> (but <i>an emphasis on</i>), <i>enter, reach, approach, attend, lack</i> (but <i>a lack of</i>), <i>contact, mention, answer, marry, resemble</i>.</p>',
        example: '✗ <i>They lack of experience.</i> → ✓ <i>They <b>lack</b> experience.</i> / ✓ <i>They have a <b>lack of</b> experience.</i>'
      },
      {
        title: 'Keep the preposition at the end in informal style – move it in formal style',
        body: '<p>In questions and relative clauses, a preposition can stay at the end (<i>the city I grew up <b>in</b></i>) – natural and correct, especially in Speaking. In formal writing you can move it before <i>which/whom</i>: <i>the city <b>in which</b> I grew up</i>. Never use both: ✗ <i>the city in which I grew up in</i>.</p>'
      }
    ],
    sections: [
      {
        id: 'time-place', title: 'Time, place and movement',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Meaning</th><th>Prepositions</th><th>Examples and contrasts</th></tr>
<tr><td>Duration and starting point</td><td>for / since</td><td><i><b>for</b> ten years</i> (a length of time) · <i><b>since</b> 2015</i> (a starting point) – both usually with the present perfect</td></tr>
<tr><td>Within a period</td><td>during / in / over / throughout</td><td><i><b>during</b> the war</i> (+ noun; ✗ <i>during I was</i> → <i>while I was</i>) · <i><b>over</b> the period</i> · <i><b>throughout</b> the year</i> (all of it)</td></tr>
<tr><td>Deadline vs continuation</td><td>by / until</td><td><i>Finish <b>by</b> Friday</i> (no later than) · <i>Wait <b>until</b> Friday</i> (continuing up to) · <i><b>By</b> 2030, the figure is expected to…</i></td></tr>
<tr><td>Before / after</td><td>before / after / prior to / following</td><td><i><b>prior to</b> the reform</i> (formal) · <i><b>following</b> the reform</i></td></tr>
<tr><td>Position</td><td>above / over, below / under, next to / beside, between / among, opposite, behind, in front of</td><td><i><b>between</b> two buildings</i> (two) · <i><b>among</b> the students</i> (a group) · <i><b>opposite</b> the bank</i> (facing)</td></tr>
<tr><td>Movement</td><td>to, into, onto, out of, towards, through, across, along, past, up, down</td><td><i>walk <b>across</b> the bridge, <b>along</b> the river, <b>through</b> the park, <b>past</b> the station</i> · <i>go <b>home</b></i> (no <i>to</i>)</td></tr>
<tr><td>Transport</td><td>by / on / in</td><td><i><b>by</b> bus, car, train</i> (means) · <i><b>on</b> the bus / train / plane</i> · <i><b>in</b> the car / a taxi</i> · <i><b>on</b> foot</i></td></tr>
</table></div>
<p>These are especially important for Listening map questions and Writing Task 1 maps: <i>The car park was replaced by a shopping centre <b>to the north of</b> the river, <b>next to</b> the station.</i></p>`
      },
      {
        id: 'data', title: 'Prepositions for describing data (Task 1)',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Preposition</th><th>Meaning</th><th>Example</th></tr>
<tr><td>by</td><td>the amount of change</td><td><i>Prices rose <b>by</b> 5%.</i> (e.g. from 20% to 25%)</td></tr>
<tr><td>to</td><td>the new level</td><td><i>Prices rose <b>to</b> 25%.</i></td></tr>
<tr><td>from … to</td><td>start and end</td><td><i>Prices rose <b>from</b> 20% <b>to</b> 25%.</i></td></tr>
<tr><td>at</td><td>a level at a point in time</td><td><i>Sales <b>stood at</b> 300 units.</i> · <i>Sales <b>peaked at</b> 500.</i></td></tr>
<tr><td>of (after a noun)</td><td>the size of the change or level</td><td><i>a rise <b>of</b> 5%</i> · <i>a peak <b>of</b> 500 units</i></td></tr>
<tr><td>in (after a noun)</td><td>what changed</td><td><i>a rise <b>in</b> prices</i> · <i>a fall <b>in</b> unemployment</i></td></tr>
<tr><td>for</td><td>which category or year a figure belongs to</td><td><i>The figure <b>for</b> France was higher.</i> · <i>the data <b>for</b> 2010</i></td></tr>
<tr><td>with</td><td>attaching a figure to a category</td><td><i>Japan ranked first, <b>with</b> 40%.</i></td></tr>
<tr><td>in / between / over / during</td><td>time</td><td><i><b>in</b> 2010 · <b>between</b> 2010 <b>and</b> 2020 · <b>over</b> the next decade · <b>during</b> the period</i></td></tr>
<tr><td>compared with / to · in comparison with · as opposed to</td><td>comparison</td><td><i>30%, <b>compared with</b> 20% in Spain</i></td></tr>
</table></div>
<div class="callout"><strong>One preposition, a different number</strong><i>The share rose <b>by</b> 20%</i> and <i>The share rose <b>to</b> 20%</i> describe different data. Choosing the wrong one is not only a grammar error – it misreports the chart, which also affects Task Achievement.</div>`
      },
      {
        id: 'dependent', title: 'Dependent prepositions: nouns, verbs and adjectives',
        html: `
<h4>Noun + preposition</h4>
<div class="table-wrap"><table class="data-table plain">
<tr><td><b>in</b></td><td>increase / decrease / rise / fall / change in · interest in · investment in · participation in · confidence in</td></tr>
<tr><td><b>for</b></td><td>demand for · need for · reason for · responsibility for · respect for · support for · preference for</td></tr>
<tr><td><b>to</b></td><td>solution to · answer to · key to · access to · approach to · attitude to/towards · damage to · threat to · contribution to · alternative to</td></tr>
<tr><td><b>on</b></td><td>effect on · impact on · influence on · emphasis on · focus on · ban on · tax on · pressure on · dependence on</td></tr>
<tr><td><b>of</b></td><td>cause of · lack of · advantage / disadvantage of · example of · knowledge of · awareness of · consequence of</td></tr>
<tr><td><b>between</b></td><td>difference between · relationship / link between · balance between</td></tr>
<tr><td><b>with</b></td><td>problem with · contact with · relationship with</td></tr>
</table></div>
<h4>Verb + preposition</h4>
<p><i>depend on, rely on, focus on, concentrate on, insist on · contribute to, lead to, adapt to, respond to, object to · result in, invest in, specialise in, succeed in, participate in · result from, benefit from, suffer from, recover from · consist of, approve of, dispose of · deal with, cope with, comply with, interfere with · account for, apply for, pay for, compensate for · protect from/against, prevent from, distinguish between/from</i></p>
<p>Note the difference: <i>result <b>in</b></i> introduces the effect (<i>Pollution results in illness</i>); <i>result <b>from</b></i> introduces the cause (<i>Illness results from pollution</i>).</p>
<p>Adjective + preposition combinations are listed in the <a href="/grammar/adjectives">Adjectives</a> chapter.</p>`
      },
      {
        id: 'prep-vs', title: 'Prepositions, conjunctions and adverbs that are often confused',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Preposition (+ noun / -ing)</th><th>Conjunction (+ clause)</th><th>Example</th></tr>
<tr><td>despite / in spite of</td><td>although / even though</td><td><i><b>Despite</b> the cost, …</i> · <i><b>Although</b> it is expensive, …</i> (✗ <i>despite of</i>; ✗ <i>despite it is</i>)</td></tr>
<tr><td>because of / due to / owing to</td><td>because / since / as</td><td><i><b>Because of</b> the rain, …</i> · <i><b>Because</b> it rained, …</i></td></tr>
<tr><td>during</td><td>while</td><td><i><b>during</b> the lecture</i> · <i><b>while</b> I was listening</i></td></tr>
<tr><td>like (= similar to)</td><td>as / as if</td><td><i>cities <b>like</b> Tokyo</i> · <i><b>as</b> I said</i> (formal: not <i>like I said</i>)</td></tr>
</table></div>
<p>If you want to follow <i>despite</i> or <i>because of</i> with a clause, add <i>the fact that</i>: <i>Despite <b>the fact that</b> it is expensive…</i>. More on this in <a href="/grammar/conjunctions">Conjunctions</a>.</p>`
      },
      {
        id: 'band-impact', title: 'How prepositions affect your band',
        html: `
<p>Prepositions are "small" errors individually, but they are frequent: a Task 2 essay may contain 30–40 prepositions, and a candidate who chooses by translation may get five or six wrong. That density of error is enough to keep Grammatical Range and Accuracy below Band 7. In Task 1, wrong data prepositions (<i>by/to</i>) also misreport the figures. In Lexical Resource, dependent prepositions are part of collocation: <i>have an impact on, make a contribution to</i>.</p>
<div class="callout advice"><strong>Build your own error list</strong>Most learners make the same preposition errors again and again. Keep a list of the ones you get wrong in practice essays, and check for them specifically every time you proofread.</div>`
      }
    ],
    worked: [
      {
        title: 'Correcting prepositions in a Task 1 paragraph',
        source: `<div class="prompt-box"><p>"In 2000, the percentage of households with internet access was 20% in Spain. It rose by 75% in 2020, which was an increase of 55 percentage points. The figure of Italy was lower: it went up in 15% to 60% at the same period. On 2010, both countries stood on about 40%."</p></div>`,
        questions: '<p>Correct the prepositions. Assume the data: Spain 20% (2000) → 75% (2020); Italy 15% (2000) → 60% (2020); both about 40% in 2010.</p>',
        walk: [
          { q: '"It rose by 75% in 2020"', a: 'It rose to 75% by 2020', steps: ['75% is the end point, not the size of the change, so <i>to</i>, not <i>by</i>.', 'For a level reached at the end of a period, <i>by 2020</i> is more precise than <i>in 2020</i>.'] },
          { q: '"an increase of 55 percentage points"', a: 'correct', steps: ['After the noun <i>increase</i>, <i>of</i> gives the size. Correct – and note <i>percentage points</i>, the accurate unit for a change between two percentages.'] },
          { q: '"The figure of Italy"', a: 'The figure for Italy', steps: ['A figure belongs to a category <i>for</i> it: <i>the figure for Italy</i>.'] },
          { q: '"went up in 15% to 60%"', a: 'went up from 15% to 60%', steps: ['Start and end points: <i>from … to</i>.'] },
          { q: '"at the same period"', a: 'over the same period', steps: ['A span of time: <i>over / during the same period</i>.'] },
          { q: '"On 2010… stood on about 40%"', a: 'In 2010… stood at about 40%', steps: ['Years take <i>in</i>.', 'A level takes <i>at</i>: <i>stood at</i>.'] }
        ],
        lesson: 'In Task 1, every preposition attached to a number carries meaning. By = how much it changed; to = where it ended; from … to = both; at = the level; for = which category.'
      }
    ],
    dos: [
      'Learn every new noun, verb and adjective with its preposition.',
      'Use -ing after prepositions, including to in "the key to reducing".',
      'Use by for the size of a change and to for the end point in Task 1.',
      'Use no preposition before this/next/last/every + time word.',
      'Use the figure for, an increase in, a rise of, stood at.',
      'Keep a personal list of your preposition errors.'
    ],
    donts: [
      'Don\'t write discuss about, emphasise on, lack of (as a verb), reach to, enter into a room.',
      'Don\'t write despite of, or despite + a full clause.',
      'Don\'t write arrive to – use arrive at or arrive in.',
      'Don\'t write in last year or on 2010.',
      'Don\'t use a base verb after a preposition: not "instead of take".',
      'Don\'t repeat a preposition in a relative clause: not "in which … in".'
    ],
    careful: [
      { title: '"Increase in" vs "increase of"', body: '<p><i>In</i> introduces what increased; <i>of</i> introduces how much.</p>', example: '<i>an increase <b>in</b> unemployment <b>of</b> 2%</i>' },
      { title: '"Study abroad", "go home", "go downtown"', body: '<p><i>Abroad, home, downtown, overseas, upstairs</i> are adverbs here and take no preposition.</p>', example: '✗ <i>go to abroad, go to home</i> → ✓ <i>go abroad, go home</i> (but <i>at home</i> for location)' },
      { title: '"On the other hand" vs "in the other hand"', body: '<p>Fixed expressions have fixed prepositions: <i><b>on</b> the other hand, <b>in</b> my opinion, <b>at</b> the same time, <b>in</b> addition <b>to</b>, <b>on</b> average, <b>in</b> general, <b>for</b> example, <b>by</b> contrast</i>.</p>', example: '✗ <i>According to my opinion</i> → ✓ <i>In my opinion</i> (or <i>According to experts…</i> – <i>according to</i> introduces other people\'s views)' },
      { title: '"During" vs "for"', body: '<p><i>During</i> says when; <i>for</i> says how long.</p>', example: '✗ <i>I studied there during three years.</i> → ✓ <i>I studied there <b>for</b> three years.</i> · ✓ <i>I worked <b>during</b> the summer.</i>' }
    ],
    faq: [
      { q: 'Is there any rule for dependent prepositions, or must I memorise them?', a: '<p>There are tendencies (<i>on</i> for focus and pressure – <i>focus on, impact on, pressure on</i>; <i>in</i> for change in quantity – <i>increase in</i>), but no reliable rules. Memorise the combinations you use often, and check new ones in a learner\'s dictionary, which shows the preposition in its examples.</p>' },
      { q: 'Can I end a sentence with a preposition?', a: '<p>Yes. <i>Which city do you come from?</i> and <i>That is something we must deal with</i> are natural and correct. The "rule" against it is a myth; in formal writing you may choose <i>with which</i> for style.</p>' },
      { q: 'Is it "different from", "different to" or "different than"?', a: '<p>All three are used; <i>different from</i> is safest in formal writing.</p>' }
    ],
    exercises: {
      id: 'ch-grammar-prepositions',
      title: 'Chapter exercises: prepositions',
      groups: [
        {
          kind: 'gap', title: 'Part A: prepositions for data', instructions: 'Write <b>ONE WORD ONLY</b>.',
          questions: [
            { n: 1, q: 'The rate rose from 4% to 9%: it increased {} 5 percentage points.', a: 'by', x: 'The size of the change: <i>by</i>.' },
            { n: 2, q: 'The rate rose from 4% {} 9%.', a: 'to', x: 'The end point: <i>from … to</i>.' },
            { n: 3, q: 'In 2015, sales stood {} 2 million units.', a: 'at', x: 'A level: <i>stood at</i>.' },
            { n: 4, q: 'There was a sharp rise {} the number of students.', a: 'in', x: 'Noun + <i>in</i> for the thing that changed.' },
            { n: 5, q: 'The figure {} Germany was the highest.', a: 'for', x: 'A figure belongs to a category: <i>the figure for</i>.' },
            { n: 6, q: 'China ranked first, {} 35% of the total.', a: 'with', x: '<i>with</i> attaches a figure to a category.' }
          ]
        },
        {
          kind: 'choice', title: 'Part B: choose the correct sentence', instructions: 'Choose the correct option, <b>A, B or C</b>.',
          questions: [
            { n: 7, q: 'Which is correct?', opts: ['This essay will discuss about the issue.', 'This essay will discuss the issue.', 'This essay will discuss on the issue.'], a: 'B', x: '<i>Discuss</i> takes a direct object.' },
            { n: 8, q: 'Which is correct?', opts: ['Despite of the rain, the match continued.', 'Despite it rained, the match continued.', 'Despite the rain, the match continued.'], a: 'C', x: '<i>Despite</i> + noun, with no <i>of</i>. With a clause: <i>Although it rained</i>.' },
            { n: 9, q: 'Which is correct?', opts: ['Education is the key to reduce poverty.', 'Education is the key to reducing poverty.', 'Education is the key for reduce poverty.'], a: 'B', x: '<i>The key to</i> – here <i>to</i> is a preposition, so the verb takes <i>-ing</i>.' },
            { n: 10, q: 'Which is correct?', opts: ['We arrived to the airport at noon.', 'We arrived at the airport at noon.', 'We arrived in the airport on noon.'], a: 'B', x: '<i>Arrive at</i> a building or station; <i>at</i> + clock time.' },
            { n: 11, q: 'Which is correct?', opts: ['I lived there during five years.', 'I lived there for five years.', 'I lived there since five years.'], a: 'B', x: '<i>For</i> + a length of time. <i>Since</i> + a starting point; <i>during</i> + a named period.' },
            { n: 12, q: 'Which is correct?', opts: ['Smoking can result in serious illness.', 'Smoking can result from serious illness.', 'Smoking can result to serious illness.'], a: 'A', x: '<i>Result in</i> + the effect. <i>Result from</i> + the cause.' }
          ]
        }
      ]
    },
    checklist: [
      'I use by, to, from … to, at, of, in, for and with correctly with data.',
      'I know at/on/in for time and place.',
      'I know for/since/during and by/until.',
      'I use -ing after prepositions.',
      'I know the common noun + preposition combinations (increase in, solution to, impact on).',
      'I never add prepositions after discuss, emphasise, enter, reach or lack (verb).'
    ],
    summary: [
      'Prepositions link nouns, pronouns and -ing forms to the rest of the sentence.',
      'Much of their use is conventional: learn them with the word they depend on.',
      'Task 1: by = change, to = end point, at = level, in = what changed, for = category.',
      'After a preposition, use a noun or an -ing form – including after to in "the key to".',
      'Some verbs take no preposition: discuss, emphasise, enter, reach, lack.'
    ],
    references: [
      ...grammarBooks,
      { title: 'A good learner\'s dictionary (Cambridge, Oxford, Longman or Collins)', note: 'Learner\'s dictionaries show the preposition used with each noun, verb and adjective in their example sentences – the quickest way to check a combination.' },
      { title: 'In this book: Task 1 vocabulary for comparisons, proportions and prepositions', url: '/vocabulary/t1-compare' },
      gra
    ]
  }
};

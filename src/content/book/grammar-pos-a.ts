import type { Chapter, Reference } from '@/lib/types';

/* Grammar masterclass, Part A (parts of speech) – nouns, pronouns, verbs */

const BC = 'https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/';
export const grammarBooks: Reference[] = [
  { title: 'Michael Swan, Practical English Usage, 4th edition (Oxford University Press, 2016)', note: 'The standard reference for learners\' questions about usage; organised by topic and very clear on common mistakes.' },
  { title: 'Raymond Murphy, English Grammar in Use, 5th edition (Cambridge University Press, 2019)', note: 'Intermediate grammar with explanations on the left page and practice on the right. Hewings\' Advanced Grammar in Use (3rd edition, 2013) is the next step.' },
  { title: 'Ronald Carter and Michael McCarthy, Cambridge Grammar of English (Cambridge University Press, 2006)', note: 'A complete reference grammar that compares spoken and written English – useful for Speaking as well as Writing.' }
];
const gra: Reference = { title: 'IELTS Writing band descriptors (public version)', url: 'https://ielts.org/cdn/ielts-downloadable-assets/ielts-guidance-and-support/ielts-guides/ielts-writing-band-descriptors.pdf', note: 'See Grammatical Range and Accuracy and Lexical Resource.' };

export const grammarChaptersPosA: Record<string, Chapter> = {
  /* ===================================================================== NOUNS */
  nouns: {
    intro: `
<p>A <b>noun</b> is a word that names something: a person (<i>teacher, Maria</i>), a place (<i>city, Cairo</i>), a thing (<i>bridge, computer</i>), or – very often in academic English – an idea, a quality, an activity or a process (<i>freedom, honesty, research, urbanisation</i>). Nouns are the centre of the <b>noun phrase</b>, the group of words that acts as the subject or object of a sentence: in <i>the rapid growth of online shopping</i>, the head noun is <i>growth</i>, and everything else describes it.</p>
<p>Nouns look simple, yet they cause more grammar errors in IELTS Writing than almost any other word class. English nouns must be classified as <b>countable</b> or <b>uncountable</b>, and that classification controls everything around them: whether the noun can be plural, which article it needs, which quantifier (<i>many</i> or <i>much</i>, <i>few</i> or <i>little</i>) goes with it, and whether the verb is singular or plural. Many nouns that are countable in other languages – <i>information, advice, research, equipment, evidence</i> – are uncountable in English, and an examiner sees the error every time one of them appears with <i>-s</i> or <i>an</i>.</p>
<p>Nouns also carry the formal style of academic writing. Academic texts use many more nouns than conversation, because they turn actions and qualities into things that can be discussed (<i>prices rose</i> → <i>the rise in prices</i>). This chapter takes you from the basic types of noun, through countability, plurals and possessives, to building the long noun phrases of Band 7–9 writing – and the common mistakes at each step.</p>`,
    facts: [
      ['Job in the sentence', 'Head of a noun phrase: subject, object, complement, or after a preposition'],
      ['Key distinction', 'Countable or uncountable – in this meaning'],
      ['Forms', 'Singular, plural and possessive (’s / s’)'],
      ['Typical endings', '-tion, -ment, -ness, -ity, -ance/-ence, -ism, -ship, -er/-or'],
      ['Most frequent IELTS errors', 'Plurals of uncountables, missing articles, wrong word form'],
      ['Band 7+ feature', 'Precise, well-built noun phrases and controlled nominalisation']
    ],
    tests: `
<p>Nouns affect two of the four Writing and Speaking criteria. In <b>Grammatical Range and Accuracy</b>, errors with plurals, articles and agreement are among the most frequent "systematic" errors – the kind that keep a script at Band 6, where the descriptors still allow some errors, rather than Band 7, where most sentences must be error-free. In <b>Lexical Resource</b>, choosing the correct noun form of a word (<i>development</i>, not <i>develop</i>; <i>poverty</i>, not <i>poor</i>) is part of "word formation", and precise abstract nouns (<i>affordability</i>, <i>congestion</i>, <i>inequality</i>) are what make vocabulary sound academic.</p>`,
    method: [
      {
        title: 'Recognise the noun by its position and its ending',
        body: '<p>A noun usually comes after a determiner (<i>a, the, this, my, some</i>) or an adjective, and before the main verb when it is the subject. Many nouns have typical endings: <i>-tion</i> (<i>pollution</i>), <i>-ment</i> (<i>employment</i>), <i>-ness</i> (<i>awareness</i>), <i>-ity</i> (<i>security</i>), <i>-ance/-ence</i> (<i>importance, dependence</i>), <i>-ism</i> (<i>tourism</i>), <i>-ship</i> (<i>relationship</i>), <i>-er/-or</i> for people (<i>employer, investor</i>). If you can put <i>the</i> in front of a word and make it the subject of a verb, it is being used as a noun.</p>',
        example: '<i>The <b>government</b> announced a <b>reduction</b> in <b>taxes</b>.</i> – three nouns: <i>government</i> (subject), <i>reduction</i> (object), <i>taxes</i> (after a preposition).'
      },
      {
        title: 'Decide whether it is countable or uncountable in this meaning',
        body: '<p>Ask: can I say <i>one ___, two ___s</i>? Countable nouns name separate units (<i>a student, two students</i>). Uncountable nouns name a mass, a substance or an abstract idea that English treats as one whole (<i>water, money, advice</i>). An uncountable noun has <b>no plural</b>, cannot take <i>a/an</i>, and takes a singular verb. Learn the uncountable nouns that are common in IELTS by heart (section 2), and remember that some nouns are countable in one meaning and uncountable in another.</p>',
        example: '✗ <i>They gave me many useful advices.</i> → ✓ <i>They gave me a lot of useful <b>advice</b>.</i> / ✓ <i>They gave me <b>several useful pieces of advice</b>.</i>'
      },
      {
        title: 'Choose singular or plural – and spell the plural correctly',
        body: '<p>A countable noun in the singular must have a determiner (<i>a, the, this, my…</i>); in the plural it can stand alone to talk about things in general. Learn the spelling rules and the irregular plurals in section 3, especially the Latin and Greek plurals that appear in academic texts (<i>criteria, phenomena, analyses</i>).</p>',
        example: '✗ <i>Student should have part-time job.</i> → ✓ <i><b>Students</b> should have <b>part-time jobs</b>.</i> / ✓ <i><b>A student</b> should have <b>a part-time job</b>.</i>'
      },
      {
        title: 'Put the right determiner in front',
        body: '<p>Countability decides the determiner: <i>many</i> books but <i>much</i> information; <i>few</i> cars but <i>little</i> traffic; <i>the number of</i> people but <i>the amount of</i> money; <i>a/an</i> only with singular countable nouns. The chapters on <a href="/grammar/articles">articles</a> and <a href="/grammar/determiners">determiners and quantifiers</a> cover this in detail.</p>',
        example: '✗ <i>the amount of tourists</i> → ✓ <i>the <b>number</b> of tourists</i> · ✗ <i>the number of water</i> → ✓ <i>the <b>amount</b> of water</i>'
      },
      {
        title: 'Make the verb agree with the head noun',
        body: '<p>The verb agrees with the <b>head</b> of the subject noun phrase, not with the nearest noun. Uncountable nouns take singular verbs (<i>the evidence <b>suggests</b></i>); some nouns ending in <i>-s</i> are singular (<i>news, economics, mathematics, physics</i>); some nouns without <i>-s</i> are plural (<i>people, police, cattle</i>). See <a href="/grammar/agreement">Subject–verb agreement</a>.</p>',
        example: '<i>The <b>quality</b> of the roads in rural areas <b>has</b> improved.</i> (head noun: <i>quality</i>, not <i>roads</i> or <i>areas</i>)'
      },
      {
        title: 'Show possession with ’s or with of',
        body: '<p>Use <b>’s</b> mainly with people, animals, organisations, countries and time expressions: <i>the government’s plan, the company’s profits, Japan’s population, a week’s holiday, today’s news</i>. Add only an apostrophe after a regular plural: <i>the students’ results</i>. With things, and with long noun phrases, <b>of</b> is usually more natural: <i>the cost of living, the end of the century, the opinions of people who live in rural areas</i>.</p>',
        example: '<i>children → children’s</i> (irregular plural: add ’s) · <i>parents → parents’</i> (regular plural: add ’ only) · <i>its</i> (possessive, no apostrophe) vs <i>it’s</i> (= it is)'
      },
      {
        title: 'Build longer noun phrases deliberately',
        body: '<p>Band 7–9 writing packs information into noun phrases: determiner + adjectives + head noun + what follows (a prepositional phrase, a relative clause, a participle phrase). In <b>compound nouns</b> (noun + noun) the first noun normally acts like an adjective and stays singular: <i>a car park, the unemployment rate, a three-day course, energy consumption</i>.</p>',
        example: '<i>growth</i> → <i>the growth in online shopping</i> → <i>the rapid growth in online shopping over the past decade</i> → <i>the rapid growth in online shopping that followed the pandemic</i>'
      }
    ],
    sections: [
      {
        id: 'noun-types', title: 'Types of noun',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Type</th><th>What it names</th><th>Examples</th><th>Grammar to remember</th></tr>
<tr><td>Common</td><td>A general class of thing</td><td>city, scientist, policy</td><td>Needs a determiner when singular and countable</td></tr>
<tr><td>Proper</td><td>A particular person, place or organisation</td><td>London, the United Nations, Dr Patel</td><td>Capital letter; usually no article (but <i>the UK, the Nile, the United Nations</i>)</td></tr>
<tr><td>Concrete</td><td>Something you can see or touch</td><td>bridge, tree, smartphone</td><td>Usually countable</td></tr>
<tr><td>Abstract</td><td>An idea, quality, feeling or process</td><td>freedom, honesty, poverty, development</td><td>Often uncountable in a general sense: <i>Education is important.</i></td></tr>
<tr><td>Collective</td><td>A group</td><td>government, team, family, staff, public, audience</td><td>In British English the verb can be singular (the group as one unit) or plural (its members): <i>The government <b>has</b> / <b>have</b> decided.</i> American English prefers singular. Be consistent.</td></tr>
<tr><td>Compound</td><td>Two or more words acting as one noun</td><td>bus stop, healthcare, mother-in-law, decision-making</td><td>Written as one word, two words or hyphenated – check a dictionary; plural on the head: <i>bus stops, mothers-in-law</i></td></tr>
</table></div>`
      },
      {
        id: 'countability', title: 'Countable and uncountable nouns in depth',
        html: `
<p>Countability is a property of the <i>meaning</i>, not of the thing in the world. Coins are separate objects, but <i>money</i> is uncountable; chairs and tables are separate objects, but <i>furniture</i> is uncountable. You cannot reason your way to the answer – you must learn the common uncountable nouns.</p>
<h4>Uncountable nouns that IELTS candidates often get wrong</h4>
<div class="table-wrap"><table class="data-table plain">
<tr><th>Area</th><th>Uncountable nouns</th></tr>
<tr><td>Knowledge and study</td><td>information, advice, knowledge, research, evidence, homework, progress, feedback, vocabulary, grammar</td></tr>
<tr><td>Things and possessions</td><td>equipment, furniture, luggage, baggage, machinery, software, clothing, jewellery</td></tr>
<tr><td>Society and the environment</td><td>pollution, traffic, transport (British English, in general), accommodation (British English), employment, unemployment, crime (in general), litter, waste</td></tr>
<tr><td>Money and work</td><td>money, cash, income, work (= employment), wealth, poverty</td></tr>
<tr><td>Other</td><td>news, weather, scenery, fun, health, safety, behaviour, damage, permission</td></tr>
</table></div>
<h4>How to count an uncountable noun</h4>
<p>Use a "unit" noun that is countable: <i>a piece of advice / information / equipment / furniture / research / evidence</i>, <i>an item of clothing / news</i>, <i>a means of transport</i>, <i>a source of income</i>, <i>a job</i> or <i>a position</i> (for <i>work</i>), <i>a room</i> or <i>a place to stay</i> (for <i>accommodation</i>), <i>a study</i> (for <i>research</i>: <i>a recent study shows…</i>).</p>
<div class="table-wrap"><table class="data-table">
<tr><th>✗ Incorrect</th><th>✓ Correct</th></tr>
<tr><td>A research shows that…</td><td><b>Research</b> shows that… / <b>A study</b> shows that…</td></tr>
<tr><td>Students need more informations.</td><td>Students need more <b>information</b>.</td></tr>
<tr><td>Hospitals lack modern equipments.</td><td>Hospitals lack modern <b>equipment</b>.</td></tr>
<tr><td>The traffics are heavy.</td><td>The <b>traffic is</b> heavy.</td></tr>
<tr><td>She has made a good progress.</td><td>She has made <b>good progress</b>.</td></tr>
<tr><td>I am looking for a work.</td><td>I am looking for <b>work</b>. / I am looking for <b>a job</b>.</td></tr>
</table></div>
<h4>Nouns that are both – with a change of meaning</h4>
<div class="table-wrap"><table class="data-table">
<tr><th>Noun</th><th>Uncountable meaning</th><th>Countable meaning</th></tr>
<tr><td>experience</td><td>knowledge gained over time: <i>She has ten years' <b>experience</b>.</i></td><td>an event: <i>Studying abroad was <b>an unforgettable experience</b>.</i></td></tr>
<tr><td>time</td><td>time in general: <i>We don't have <b>much time</b>.</i></td><td>occasions: <i>I have visited Rome <b>three times</b>.</i></td></tr>
<tr><td>paper</td><td>material: <i>made of <b>paper</b></i></td><td>a newspaper or an academic article: <i>She published <b>a paper</b> on climate.</i></td></tr>
<tr><td>work</td><td>employment, effort: <i>She is looking for <b>work</b>.</i></td><td>works of art or literature: <i>the <b>works</b> of Shakespeare</i></td></tr>
<tr><td>crime</td><td>crime in general: <i><b>Crime</b> has fallen.</i></td><td>individual acts: <i>He committed <b>two crimes</b>.</i></td></tr>
<tr><td>business</td><td>commercial activity: <i><b>Business</b> is good.</i></td><td>a company: <i>She runs <b>a small business</b>.</i></td></tr>
<tr><td>light</td><td>energy: <i>natural <b>light</b></i></td><td>a lamp: <i>Turn off <b>the lights</b>.</i></td></tr>
</table></div>`
      },
      {
        id: 'plurals', title: 'Forming plurals',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Rule</th><th>Examples</th><th>Watch out for</th></tr>
<tr><td>Most nouns: add <b>-s</b></td><td>car → cars, idea → ideas, student → students</td><td>The <i>-s</i> is never added with an apostrophe: ✗ <i>student's</i> for the plural</td></tr>
<tr><td>Consonant + <b>y</b> → <b>-ies</b></td><td>city → cities, policy → policies, country → countries</td><td>Vowel + y: just add -s – <i>days, journeys, holidays</i></td></tr>
<tr><td>After <b>s, ss, x, ch, sh, z</b>: add <b>-es</b></td><td>bus → buses, tax → taxes, church → churches, wish → wishes</td><td></td></tr>
<tr><td><b>-f / -fe</b> → <b>-ves</b> (many common words)</td><td>life → lives, half → halves, shelf → shelves, wife → wives</td><td>But: <i>roofs, beliefs, chiefs, proofs</i></td></tr>
<tr><td>Consonant + <b>o</b>: usually <b>-es</b></td><td>potato → potatoes, hero → heroes</td><td>But: <i>photos, pianos, radios, videos, zoos</i></td></tr>
<tr><td>Irregular</td><td>man → men, woman → women, child → children, person → people, foot → feet, tooth → teeth, mouse → mice</td><td><i>childrens</i> and <i>peoples</i> (for "persons") are errors</td></tr>
<tr><td>Latin and Greek plurals</td><td>criterion → criteria, phenomenon → phenomena, analysis → analyses, hypothesis → hypotheses, crisis → crises, thesis → theses, medium → media</td><td><i>a criteria</i> ✗ → <i>a criterion</i>; <i>data</i> is used with both singular and plural verbs in modern English</td></tr>
<tr><td>Same in singular and plural</td><td>sheep, fish, species, series, means, aircraft</td><td><i>a species / two species</i></td></tr>
<tr><td>Plural only</td><td>clothes, goods, police, cattle, outskirts, surroundings, trousers, scissors, belongings</td><td><i>The police <b>are</b> investigating.</i></td></tr>
</table></div>
<p class="muted small">Note: <i>peoples</i> exists, but means "nations or ethnic groups" (<i>the peoples of Africa</i>) – it is not the plural of <i>person</i>.</p>`
      },
      {
        id: 'word-form', title: 'Word families: choosing the noun form',
        html: `
<p>One of the commonest Lexical Resource errors is using the right word in the wrong form – usually a verb or adjective where a noun is needed. Learn words in families:</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Verb</th><th>Noun(s)</th><th>Adjective</th><th>Typical error</th></tr>
<tr><td>develop</td><td>development, developer</td><td>developed, developing</td><td>✗ <i>the develop of cities</i></td></tr>
<tr><td>employ</td><td>employment, unemployment, employer, employee</td><td>employed, unemployed</td><td>✗ <i>the unemployed rate</i> → <i>the unemployment rate</i></td></tr>
<tr><td>grow</td><td>growth</td><td>growing</td><td>✗ <i>the grow of tourism</i></td></tr>
<tr><td>succeed</td><td>success</td><td>successful</td><td>✗ <i>the key to succeed</i> → <i>the key to success</i></td></tr>
<tr><td>–</td><td>poverty</td><td>poor</td><td>✗ <i>Poor is a big problem.</i> → <i>Poverty is…</i></td></tr>
<tr><td>–</td><td>importance</td><td>important</td><td>✗ <i>the important of education</i></td></tr>
<tr><td>advise</td><td>advice</td><td>advisable</td><td>verb ends in <b>-ise</b>, noun in <b>-ice</b></td></tr>
<tr><td>practise (BrE)</td><td>practice</td><td>practical</td><td>British English: verb <i>practise</i>, noun <i>practice</i></td></tr>
<tr><td>prove</td><td>proof</td><td>–</td><td>✗ <i>there is no prove</i></td></tr>
<tr><td>believe</td><td>belief</td><td>believable</td><td>✗ <i>my believe is…</i></td></tr>
<tr><td>die</td><td>death</td><td>dead</td><td>✗ <i>the main cause of die</i></td></tr>
<tr><td>lose</td><td>loss</td><td>lost</td><td>✗ <i>the lose of jobs</i> → <i>the loss of jobs</i></td></tr>
<tr><td>choose</td><td>choice</td><td>–</td><td>✗ <i>a good choose</i></td></tr>
</table></div>`
      },
      {
        id: 'nominalisation', title: 'Nouns in academic writing: nominalisation',
        html: `
<p><b>Nominalisation</b> means expressing an action or quality as a noun instead of a verb or adjective. It is one of the features that most clearly separates academic writing from conversation.</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Verb / adjective style (spoken, simpler)</th><th>Noun style (academic)</th></tr>
<tr><td>Prices <b>increased</b> sharply in 2020.</td><td>There was a sharp <b>increase</b> in prices in 2020. / 2020 saw a sharp <b>increase</b> in prices.</td></tr>
<tr><td>People are not <b>aware</b> of the risks.</td><td>There is a lack of public <b>awareness</b> of the risks.</td></tr>
<tr><td>If cities <b>grow</b> quickly, roads become <b>congested</b>.</td><td>Rapid urban <b>growth</b> leads to <b>congestion</b>.</td></tr>
<tr><td>Because the factory <b>closed</b>, many people <b>lost</b> their jobs.</td><td>The <b>closure</b> of the factory resulted in widespread job <b>losses</b>.</td></tr>
</table></div>
<p>Nominalisation makes writing more formal, more concise and more objective, and it lets you make an action the subject of a sentence – which is very useful for linking ideas: <i>…this <b>decision</b> was criticised.</i></p>
<div class="callout advice"><strong>Use it, do not overuse it</strong>A paragraph built entirely of nominalisations becomes heavy and hard to read: <i>"The implementation of the reduction of the consumption of energy…"</i>. Mix noun-style sentences with clear verb-style ones. Examiners reward clarity; the descriptors at Band 9 describe language that is used "naturally".</div>`
      },
      {
        id: 'ielts-nouns', title: 'Nouns in IELTS Writing and Speaking',
        html: `
<h4>Writing Task 1</h4>
<p>Data descriptions depend on a small set of noun phrases. Get their countability right: <i>the <b>number</b> of visitors</i> (countable), <i>the <b>amount</b> of energy</i> (uncountable), <i>the <b>proportion</b> / <b>percentage</b> of households</i>, <i>the <b>figure</b> for 2010</i>, <i>a <b>rise</b> / <b>fall</b> / <b>increase</b> / <b>decrease</b> <b>in</b> sales</i>, <i>a <b>peak</b> of 40%</i>. Noun-based sentences also let you vary your verb-based ones: <i>Sales rose sharply</i> / <i>There was a sharp rise in sales</i>.</p>
<h4>Writing Task 2</h4>
<p>Arguments are about abstract nouns – <i>inequality, congestion, obesity, affordability, unemployment</i> – most of them uncountable when used in a general sense. Use them without an article when you mean the idea in general (<i>Unemployment is rising</i>), and with <i>the</i> when you mean a specific case (<i>the unemployment caused by automation</i>). For general statements about people or things, a plural noun without an article is the safest choice: <i><b>Children</b> learn best through play.</i></p>
<h4>Speaking</h4>
<p>Speaking rewards precise everyday nouns over vague ones. Instead of <i>things</i> and <i>stuff</i>, name them: <i>household chores</i>, <i>gadgets</i>, <i>street food</i>, <i>public holidays</i>. Uncountable nouns matter here too – <i>a lot of homework</i>, not <i>a lot of homeworks</i>.</p>`
      },
      {
        id: 'band-impact', title: 'How nouns affect your band',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>What the examiner sees</th><th>Effect</th></tr>
<tr><td>Repeated errors with plurals and countability (<i>informations, a research, many advices</i>)</td><td>Systematic errors in Grammatical Range and Accuracy – typical of Band 5–6, where errors are frequent or noticeable</td></tr>
<tr><td>Wrong word forms (<i>the develop of, poor is a problem</i>)</td><td>Lowers Lexical Resource: word-formation errors are named in the descriptors</td></tr>
<tr><td>Correct but simple noun phrases (<i>many people, a big problem</i>)</td><td>Accurate but limited range</td></tr>
<tr><td>Precise, well-built noun phrases and controlled nominalisation (<i>the rapid expansion of private car ownership</i>)</td><td>Range and precision expected at Band 7+, especially when error-free</td></tr>
</table></div>
<p>The good news is that noun errors are among the easiest to eliminate, because a small number of nouns cause most of them. A list of 30 uncountable nouns, checked in every practice essay, removes a large share of a typical Band 6 candidate's grammar errors.</p>`
      }
    ],
    worked: [
      {
        title: 'Correcting noun errors in a Task 2 paragraph',
        source: `<div class="prompt-box"><p>"Nowadays, many young people do not have enough knowledges about money. They spend all their incomes on clothes and electronic equipments, and they rarely ask their parents for an advice. A research shows that the amount of student with debts has increased. Government should provide more informations about the danger of borrowing."</p></div>`,
        questions: '<p>Find and correct the noun errors. Then decide what kind of error each one is.</p>',
        walk: [
          { q: '"enough knowledges"', a: 'enough knowledge', steps: ['<i>Knowledge</i> is uncountable: no plural.', 'Rule: uncountable nouns never take <i>-s</i>.'] },
          { q: '"all their incomes"', a: 'all their income', steps: ['<i>Income</i> here means money in general, so it is uncountable. (<i>Incomes</i> is possible when comparing several people\'s incomes as separate amounts – <i>incomes have risen</i> – but here the idea is each person\'s money in general.)', 'This is a judgement about meaning: ask whether you mean separate units.'] },
          { q: '"electronic equipments"', a: 'electronic equipment', steps: ['<i>Equipment</i> is uncountable. To count it: <i>items of equipment</i>, or name the things: <i>gadgets, devices</i>.'] },
          { q: '"an advice"', a: 'advice', steps: ['<i>Advice</i> is uncountable, so no <i>an</i>. Alternatives: <i>for advice</i> or <i>for a piece of advice</i>.'] },
          { q: '"A research shows"', a: 'Research shows / A study shows', steps: ['<i>Research</i> is uncountable. If you mean one investigation, use the countable noun <i>study</i>.'] },
          { q: '"the amount of student with debts"', a: 'the number of students in debt', steps: ['<i>Students</i> are countable, so <i>number</i>, not <i>amount</i>.', 'After <i>the number of</i>, a countable noun must be plural: <i>students</i>.', 'Natural collocation: <i>in debt</i> (being a debtor) – a vocabulary improvement, not a grammar error.'] },
          { q: '"Government should provide"', a: 'The government / Governments', steps: ['A singular countable noun needs a determiner. <i>The government</i> (of a country) or <i>Governments</i> (in general).'] },
          { q: '"more informations"', a: 'more information', steps: ['<i>Information</i> is uncountable.'] },
          { q: '"the danger of borrowing"', a: 'the dangers of borrowing (optional)', steps: ['<i>The danger</i> is grammatical. <i>The dangers</i> is more natural if you mean several risks. Not every change is a correction – this one is a choice.'] }
        ],
        lesson: 'Eight of the nine problems come from just two rules – uncountable nouns have no plural and no a/an; singular countable nouns need a determiner. Check every noun against those two rules when you proofread.'
      },
      {
        title: 'Rewriting Task 1 sentences with nouns',
        questions: `<ol><li>The number of tourists increased dramatically between 2010 and 2015.</li><li>Coal consumption fell steadily over the period.</li><li>Unemployment reached its highest point in 2009.</li></ol><p>Rewrite each sentence using a noun phrase as the main idea.</p>`,
        walk: [
          { q: '1.', a: 'There was a dramatic increase in the number of tourists between 2010 and 2015.', steps: ['Verb <i>increased</i> → noun <i>increase</i>; adverb <i>dramatically</i> → adjective <i>dramatic</i>.', 'Noun + <b>in</b>: <i>an increase in</i> something.', 'Alternative: <i>The period 2010–2015 saw a dramatic increase in tourist numbers.</i> (Compound noun <i>tourist numbers</i>: the first noun stays singular.)'] },
          { q: '2.', a: 'There was a steady fall in coal consumption over the period.', steps: ['<i>fell steadily</i> → <i>a steady fall</i>.', '<i>coal consumption</i> is a compound noun; <i>consumption</i> is uncountable here, so no article inside the phrase.'] },
          { q: '3.', a: 'Unemployment peaked in 2009. / The peak in unemployment came in 2009.', steps: ['<i>reached its highest point</i> → the noun <i>peak</i> (or the verb <i>peaked</i>).', 'Both versions are good: the aim is variety across a report, not turning every sentence into a noun phrase.'] }
        ],
        lesson: 'Alternating verb-based and noun-based sentences is one of the simplest ways to show range in Task 1 – as long as the noun phrase is accurate (rise in, number of, amount of).'
      }
    ],
    dos: [
      'Learn the 30 most common uncountable nouns and check each one in your writing.',
      'Use a plural noun without an article for general statements: Children learn quickly.',
      'Use number with countable nouns and amount with uncountable nouns.',
      'Learn words in families (develop, development, developer, developed).',
      'Use noun phrases and nominalisation for variety in Task 1 and Task 2.',
      'Use ’s with people and organisations, and of with things and long phrases.'
    ],
    donts: [
      'Don\'t add -s to information, advice, research, equipment, evidence, knowledge, traffic or homework.',
      'Don\'t use a singular countable noun on its own: not "Student needs…" but "A student needs…" or "Students need…".',
      'Don\'t write peoples, childrens or a criteria.',
      'Don\'t make the verb agree with the nearest noun instead of the head noun.',
      'Don\'t stack nouns into unreadable chains of nominalisation.',
      'Don\'t confuse its (possessive) with it\'s (it is).'
    ],
    careful: [
      { title: '"Research", "evidence" and "information" in Task 2', body: '<p>These three words appear in almost every argument essay, and they are all uncountable. They are the single most frequent noun error in Task 2.</p>', example: '✗ <i>Many researches have proved…</i> → ✓ <i>Much research has shown…</i> / ✓ <i>Many studies have shown…</i>' },
      { title: 'Compound nouns keep the first noun singular', body: '<p>When a noun describes another noun, it usually stays singular, even if the meaning is plural – including numbers with hyphens.</p>', example: '✗ <i>a five-years plan, a shoes shop</i> → ✓ <i>a five-year plan, a shoe shop</i> (exceptions exist: <i>sports centre, sales figures</i>)' },
      { title: 'Collective nouns: choose and stay consistent', body: '<p>In British English, <i>government, family, team, staff</i> can take a singular or plural verb. Choose one and keep pronouns consistent with it.</p>', example: '✗ <i>The government <b>has</b> announced that <b>they</b> will…</i> (mixed) → ✓ <i>The government <b>has</b> announced that <b>it</b> will…</i>' },
      { title: '"People" is already plural', body: '<p><i>People</i> is the normal plural of <i>person</i>. It takes a plural verb, and it is never <i>a people</i> or <i>peoples</i> (except in the meaning "nations").</p>', example: '✗ <i>People is…</i> → ✓ <i>People are…</i>' },
      { title: 'Generic "the" with singular nouns', body: '<p><i>The computer has changed our lives</i> (= computers in general) is correct but formal. In Task 2, the plural without an article is usually clearer and less likely to cause errors.</p>' }
    ],
    faq: [
      { q: 'Is "data" singular or plural?', a: '<p>Both are accepted. Traditionally <i>data</i> is the plural of <i>datum</i> (<i>the data <b>are</b></i>), and this is still common in scientific writing; in general use it is often treated as uncountable (<i>the data <b>is</b></i>). Either is fine in IELTS – just be consistent within a piece of writing.</p>' },
      { q: 'Is "staff" countable?', a: '<p><i>Staff</i> is a collective noun: <i>the staff <b>are</b></i> (British) or <i>the staff <b>is</b></i>. To talk about individuals, say <i>staff members</i>, <i>members of staff</i> or <i>employees</i>: <i>three members of staff</i>, not <i>three staffs</i>.</p>' },
      { q: 'How do I check whether a noun is countable?', a: '<p>A good learner\'s dictionary marks each meaning as [C] countable or [U] uncountable. When you add a new noun to your vocabulary notebook, note this marker every time.</p>' },
      { q: 'Should I always use nominalisation in Task 2?', a: '<p>No. Use it where it makes a sentence more concise or helps you link ideas. Clear, accurate verb-based sentences are always better than heavy noun chains with errors.</p>' }
    ],
    exercises: {
      id: 'ch-grammar-nouns',
      title: 'Chapter exercises: nouns',
      groups: [
        {
          kind: 'choice', title: 'Part A: countable or uncountable?', instructions: 'Choose the correct sentence, <b>A, B or C</b>.',
          questions: [
            { n: 1, q: 'Which sentence is correct?', opts: ['The library offers many informations about courses.', 'The library offers a lot of information about courses.', 'The library offers an information about courses.'], a: 'B', x: '<i>Information</i> is uncountable: no plural, no <i>an</i>, and <i>a lot of</i> or <i>much</i> rather than <i>many</i>.' },
            { n: 2, q: 'Which sentence is correct?', opts: ['A recent research shows that sleep improves memory.', 'Recent researches show that sleep improves memory.', 'A recent study shows that sleep improves memory.'], a: 'C', x: '<i>Research</i> is uncountable. For a single investigation, use the countable noun <i>study</i>.' },
            { n: 3, q: 'Which sentence is correct?', opts: ['She has ten years\' experience in marketing.', 'She has ten years\' experiences in marketing.', 'She has a ten years\' experience in marketing.'], a: 'A', x: 'In the sense of knowledge gained over time, <i>experience</i> is uncountable.' },
            { n: 4, q: 'Which sentence is correct?', opts: ['The amount of cars in the city has doubled.', 'The number of cars in the city has doubled.', 'The number of car in the city has doubled.'], a: 'B', x: '<i>Cars</i> are countable: <i>the number of</i> + plural noun. <i>Amount</i> is for uncountable nouns (<i>the amount of traffic</i>).' },
            { n: 5, q: 'Which sentence is correct?', opts: ['The traffic in my hometown is terrible.', 'The traffics in my hometown are terrible.', 'A traffic in my hometown is terrible.'], a: 'A', x: '<i>Traffic</i> is uncountable and takes a singular verb.' },
            { n: 6, q: 'Which sentence is correct?', opts: ['Government should invest in public transport.', 'Governments should invest in public transport.', 'Governments should invest in public transports.'], a: 'B', x: 'A singular countable noun (<i>government</i>) needs a determiner, so either <i>The government</i> or <i>Governments</i>. <i>Transport</i>, in its general sense in British English, is uncountable.' }
          ]
        },
        {
          kind: 'gap', title: 'Part B: plurals', instructions: 'Write the plural form. <b>ONE WORD ONLY</b>.',
          questions: [
            { n: 7, q: 'one criterion → three {}', a: 'criteria', x: 'Greek plural: <i>criterion → criteria</i>. <i>A criteria</i> is a common error.' },
            { n: 8, q: 'one analysis → several {}', a: 'analyses', x: '<i>-is</i> → <i>-es</i>: <i>analysis → analyses, crisis → crises, hypothesis → hypotheses</i>.' },
            { n: 9, q: 'one phenomenon → many {}', a: 'phenomena', x: 'Greek plural: <i>phenomenon → phenomena</i>.' },
            { n: 10, q: 'one city → two {}', a: 'cities', x: 'Consonant + <i>y</i> → <i>-ies</i>.' },
            { n: 11, q: 'one life → many {}', a: 'lives', x: '<i>-fe</i> → <i>-ves</i>: <i>life → lives, wife → wives</i>.' },
            { n: 12, q: 'one species → two {}', a: 'species', x: '<i>Species</i> has the same form in the singular and the plural.' }
          ]
        },
        {
          kind: 'gap', title: 'Part C: the noun form', instructions: 'Complete each sentence with the <b>noun</b> form of the word in brackets. <b>ONE WORD ONLY</b>.',
          questions: [
            { n: 13, q: 'The rapid {} (develop) of public transport has reduced congestion.', a: 'development', x: 'After <i>the rapid</i>, a noun is needed: <i>development</i>.' },
            { n: 14, q: 'Public {} (aware) of climate change has grown.', a: 'awareness', x: '<i>aware</i> (adjective) → <i>awareness</i> (noun).' },
            { n: 15, q: '{} (poor) remains a serious problem in many rural areas.', a: 'poverty', x: 'The noun related to <i>poor</i> is <i>poverty</i>. <i>The poor</i> means poor people.' },
            { n: 16, q: 'The {} (close) of the factory led to job losses.', a: 'closure', x: '<i>close</i> → <i>closure</i>, a typical nominalisation for cause–effect sentences.' },
            { n: 17, q: 'There was a sharp {} (reduce) in the crime rate.', a: 'reduction', x: '<i>reduce</i> → <i>reduction</i>; noun + <i>in</i>: <i>a reduction in</i>.' },
            { n: 18, q: 'Hard work is the key to {} (succeed).', a: 'success', x: '<i>the key to</i> + noun: <i>success</i>. (<i>to</i> here is a preposition, not part of an infinitive.)' }
          ]
        }
      ]
    },
    checklist: [
      'I can name at least 20 uncountable nouns common in IELTS.',
      'I know how to count an uncountable noun (a piece of advice, a study).',
      'I can form regular, irregular and Latin/Greek plurals.',
      'I use number/amount correctly in Task 1.',
      'I check that every singular countable noun has a determiner.',
      'I can turn a verb-based sentence into a noun-based one, and back again.'
    ],
    summary: [
      'Nouns name people, places, things and ideas, and head the noun phrase.',
      'Countable or uncountable decides plural, article, quantifier and verb agreement.',
      'Information, advice, research, equipment, evidence, knowledge, traffic and homework are uncountable.',
      'Singular countable nouns need a determiner; plurals without an article express general ideas.',
      'Nominalisation makes writing academic – use it for variety, not in every sentence.'
    ],
    references: [
      { title: 'British Council LearnEnglish: Nouns', url: BC + 'nouns', note: 'Clear explanations of countable, uncountable and group nouns, with exercises.' },
      ...grammarBooks,
      { title: 'Douglas Biber et al., Longman Grammar of Spoken and Written English (Longman, 1999)', note: 'Corpus evidence that nouns and complex noun phrases are far more frequent in academic prose and news than in conversation.' },
      gra
    ]
  },

  /* ===================================================================== PRONOUNS */
  pronouns: {
    intro: `
<p>A <b>pronoun</b> is a word that stands in place of a noun or a noun phrase, so that we do not have to repeat it. In <i>The government introduced a sugar tax because <b>it</b> wanted to reduce obesity</i>, the pronoun <i>it</i> replaces <i>the government</i>. Pronouns also let us refer to people and things without naming them (<i>someone, everything</i>), point to things (<i>this, those</i>), ask questions (<i>who, what</i>) and join clauses (<i>which, who, that</i>).</p>
<p>In IELTS, pronouns matter for two reasons. First, they are a tool of <b>cohesion</b>: the Coherence and Cohesion criterion explicitly rewards the use of <b>referencing</b> – pronouns and words like <i>this</i> and <i>such</i> that link a sentence back to an earlier idea. A script that repeats the same noun phrase again and again, or that uses <i>it</i> so loosely that the reader cannot tell what it refers to, loses marks for cohesion. Second, pronouns have forms that must agree with what they replace – subject or object, singular or plural, person or thing – and errors in these forms are visible grammar errors.</p>
<p>This chapter explains every type of pronoun, the forms of each, how to make reference clear, and the dummy subjects <i>it</i> and <i>there</i>, which learners frequently leave out.</p>`,
    facts: [
      ['Job', 'Replaces or refers to a noun phrase'],
      ['Main types', 'Personal, possessive, reflexive, demonstrative, relative, indefinite, reciprocal'],
      ['Must agree in', 'Person, number, gender, and subject/object form'],
      ['Cohesion tool', 'Referencing: it, they, this, these, such, which'],
      ['Dummy subjects', 'It is important to… · There are many reasons…'],
      ['Commonest IELTS errors', 'Unclear "it/this", missing "it/there", who/which, its/it\'s']
    ],
    method: [
      {
        title: 'Know the forms: subject, object, possessive and reflexive',
        body: '<p>Personal pronouns change form according to their job in the sentence. Use the table in section 1 until the forms are automatic. Subject forms go before the verb; object forms go after a verb or a preposition.</p>',
        example: '<i><b>They</b> told <b>us</b> about <b>their</b> plans.</i> · ✗ <i>between you and I</i> → ✓ <i>between you and <b>me</b></i> (after a preposition, use the object form)'
      },
      {
        title: 'Make every pronoun point to one clear noun',
        body: '<p>Before you write <i>it, they, this</i> or <i>which</i>, ask: "What exactly does this refer to?" If two nouns could be meant, or if the pronoun refers to a whole idea, repeat the noun or use <b>this + noun</b> (<i>this trend, this policy, this problem</i>).</p>',
        example: '✗ <i>Many students work part-time while studying. <b>It</b> can affect their grades.</i> (what does <i>it</i> refer to?) → ✓ <i><b>This combination</b> can affect their grades.</i>'
      },
      {
        title: 'Match number and person',
        body: '<p>A plural noun takes <i>they/them/their</i>; a singular thing takes <i>it/its</i>. With a singular person whose gender is unknown or irrelevant (<i>a student, someone, each applicant</i>), modern English uses singular <i>they</i>: <i>Every student should have access to a laptop if <b>they</b> need one.</i> This is accepted in formal writing. Avoid switching between <i>a person… they… he</i> in the same paragraph.</p>',
        example: '✗ <i>A good teacher knows <b>their</b> students and <b>he</b> adapts the lesson.</i> → ✓ <i>A good teacher knows <b>their</b> students and adapts the lesson.</i>'
      },
      {
        title: 'Use "who" for people and "which" for things',
        body: '<p>Relative pronouns join a clause to a noun: <i>who</i> (people), <i>which</i> (things, animals, ideas), <i>that</i> (people or things, in defining clauses only), <i>whose</i> (possession), <i>whom</i> (formal object form, especially after prepositions). Do not repeat the pronoun inside the relative clause. The <a href="/grammar/clauses">clauses</a> chapter covers relative clauses fully.</p>',
        example: '✗ <i>The people which live in cities…</i> → ✓ <i>The people <b>who</b> live in cities…</i> · ✗ <i>The book that I read <b>it</b>…</i> → ✓ <i>The book that I read…</i>'
      },
      {
        title: 'Do not leave out "it" or "there" as a subject',
        body: '<p>English sentences need a subject, even when it carries no meaning. Use <b>it</b> before adjectives + infinitive or <i>that</i>-clauses, and for time, weather and distance. Use <b>there + be</b> to say that something exists.</p>',
        example: '✗ <i>Is important to save money.</i> → ✓ <i><b>It</b> is important to save money.</i> · ✗ <i>In my city have many parks.</i> → ✓ <i><b>There are</b> many parks in my city.</i>'
      },
      {
        title: 'Choose an appropriate generic pronoun for the task',
        body: '<p>To talk about people in general, you can use <i>people</i>, <i>we</i>, <i>you</i> or <i>one</i>. In Writing Task 2, <i>people</i> and <i>we</i> are the safest; <i>you</i> sounds conversational if overused; <i>one</i> is very formal. <i>I</i> is perfectly acceptable for giving your opinion (<i>I believe…</i>). In Speaking, <i>you</i> is completely natural.</p>',
        example: 'Task 2: <i>If <b>we</b> want cleaner cities, <b>we</b> must reduce car use.</i> · Speaking: <i>In my city, <b>you</b> can get anywhere by metro.</i>'
      }
    ],
    sections: [
      {
        id: 'forms', title: 'Personal, possessive and reflexive pronouns',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Subject</th><th>Object</th><th>Possessive determiner (+ noun)</th><th>Possessive pronoun (alone)</th><th>Reflexive</th></tr>
<tr><td>I</td><td>me</td><td>my book</td><td>mine</td><td>myself</td></tr>
<tr><td>you</td><td>you</td><td>your book</td><td>yours</td><td>yourself / yourselves</td></tr>
<tr><td>he</td><td>him</td><td>his book</td><td>his</td><td>himself</td></tr>
<tr><td>she</td><td>her</td><td>her book</td><td>hers</td><td>herself</td></tr>
<tr><td>it</td><td>it</td><td>its value</td><td>–</td><td>itself</td></tr>
<tr><td>we</td><td>us</td><td>our book</td><td>ours</td><td>ourselves</td></tr>
<tr><td>they</td><td>them</td><td>their book</td><td>theirs</td><td>themselves</td></tr>
</table></div>
<p><b>Possessive determiners</b> come before a noun (<i>their house</i>); <b>possessive pronouns</b> replace the whole noun phrase (<i>the house is <b>theirs</b></i>). Neither has an apostrophe: <i>its, yours, hers, ours, theirs</i>.</p>
<h4>Reflexive pronouns</h4>
<p>Use a reflexive pronoun when the object is the same person or thing as the subject (<i>Children must learn to protect <b>themselves</b> online</i>), or for emphasis (<i>The president <b>himself</b> attended</i>). Do not use it as an ordinary subject or object: ✗ <i>My brother and myself went…</i> → ✓ <i>My brother and I went…</i>. Some verbs that are reflexive in other languages are not reflexive in English: <i>relax, concentrate, feel, meet, worry</i> (✗ <i>I relax myself</i>).</p>
<h4>Each other and one another</h4>
<p><i>Each other</i> and <i>one another</i> show a two-way relationship: <i>Neighbours used to help <b>each other</b></i> (each helped the others). Compare <i>themselves</i>: <i>They helped themselves</i> (each helped himself or herself).</p>`
      },
      {
        id: 'demonstratives', title: 'Demonstratives and "this + noun" for cohesion',
        html: `
<p><i>This</i> and <i>these</i> point to something near or just mentioned; <i>that</i> and <i>those</i> to something further away in space, time or the text. In writing, <i>this</i> often refers back to the idea in the previous sentence.</p>
<p>A <i>this</i> on its own can be vague; <b>this + summary noun</b> is precise and is one of the best cohesion devices in Task 2:</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Previous sentence</th><th>Vague link</th><th>Precise link</th></tr>
<tr><td>Many young people now spend over six hours a day online.</td><td><i>This is bad.</i></td><td><i><b>This habit</b> can harm their sleep and concentration.</i></td></tr>
<tr><td>Several cities have introduced a charge for driving in the centre.</td><td><i>It has reduced traffic.</i></td><td><i><b>This measure</b> has reduced traffic by up to 20%.</i></td></tr>
<tr><td>House prices have doubled while wages have barely risen.</td><td><i>This means…</i></td><td><i><b>This gap</b> means that…</i></td></tr>
</table></div>
<p>Useful summary nouns: <i>this trend, this development, this problem, this issue, this approach, this policy, this view, this argument, this change, this situation, these factors, these measures</i>. <i>Such</i> works similarly: <i>Such policies are expensive.</i></p>`
      },
      {
        id: 'indefinite', title: 'Indefinite pronouns',
        html: `
<div class="table-wrap"><table class="data-table plain">
<tr><th></th><th>People</th><th>Things</th><th>Places</th></tr>
<tr><td>some-</td><td>someone / somebody</td><td>something</td><td>somewhere</td></tr>
<tr><td>any-</td><td>anyone / anybody</td><td>anything</td><td>anywhere</td></tr>
<tr><td>every-</td><td>everyone / everybody</td><td>everything</td><td>everywhere</td></tr>
<tr><td>no-</td><td>no one / nobody</td><td>nothing</td><td>nowhere</td></tr>
</table></div>
<ul>
<li>They take a <b>singular verb</b>: <i>Everyone <b>has</b> the right to education.</i> (✗ <i>Everyone have</i>)</li>
<li>They are referred to with singular <i>they</i>: <i>Everyone should do what <b>they</b> can.</i></li>
<li><i>Some-</i> is used in positive sentences and in offers and requests; <i>any-</i> in negatives and questions, and in positive sentences meaning "it does not matter which": <i><b>Anyone</b> can learn to cook.</i></li>
<li>Do not use a second negative with <i>no one, nobody, nothing</i>: ✗ <i>I didn't see nobody</i> → ✓ <i>I didn't see anybody</i> / <i>I saw nobody</i>.</li>
<li><i>No one</i> is two words; <i>nobody, nothing, everyone</i> are one word. (<i>Every one</i>, as two words, means "each single one": <i>every one of the students</i>.)</li>
</ul>`
      },
      {
        id: 'dummy', title: 'Dummy subjects: "it" and "there"',
        html: `
<p>Some English sentences need a subject that has no meaning of its own. Learners whose first languages allow subjectless sentences often leave these out, and the result is an error in almost every paragraph.</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Pattern</th><th>Example</th><th>Common error</th></tr>
<tr><td><b>It</b> + be + adjective + to-infinitive</td><td><i>It is difficult to find affordable housing.</i></td><td>✗ <i>Is difficult to find…</i></td></tr>
<tr><td><b>It</b> + be + adjective + that-clause</td><td><i>It is clear that the policy has failed.</i></td><td>✗ <i>Is clear that…</i></td></tr>
<tr><td><b>It</b> + verb (seem, appear, take)</td><td><i>It takes years to master a language.</i></td><td>✗ <i>Takes years to…</i></td></tr>
<tr><td><b>It</b> for time, weather, distance</td><td><i>It is ten kilometres from my home to the university.</i></td><td>✗ <i>Is ten kilometres…</i></td></tr>
<tr><td><b>There</b> + be (existence)</td><td><i>There are several reasons for this.</i></td><td>✗ <i>Have several reasons…</i> / ✗ <i>It has several reasons…</i></td></tr>
<tr><td><b>There</b> + be: verb agrees with the noun after it</td><td><i>There <b>is</b> a park and two museums.</i> / <i>There <b>are</b> two museums and a park.</i></td><td>✗ <i>There is many problems.</i></td></tr>
</table></div>
<p>Do not confuse <i>there</i> (existence or place), <i>their</i> (possessive) and <i>they're</i> (they are) – a spelling error that examiners notice immediately.</p>`
      },
      {
        id: 'band-impact', title: 'How pronouns affect your band',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Feature</th><th>Criterion</th><th>Effect</th></tr>
<tr><td>Clear referencing with pronouns and <i>this + noun</i></td><td>Coherence and Cohesion</td><td>Referencing is named in the descriptors; using it accurately and flexibly supports Band 7+</td></tr>
<tr><td>The same noun phrase repeated sentence after sentence</td><td>Coherence and Cohesion, Lexical Resource</td><td>Suggests limited cohesive range and vocabulary</td></tr>
<tr><td>Unclear or wrong reference (<i>it</i> with no clear antecedent)</td><td>Coherence and Cohesion</td><td>Causes "inaccurate" or "faulty" referencing, typical of Band 5–6</td></tr>
<tr><td>Missing <i>it/there</i>, wrong forms (<i>who/which, its/it's, everyone have</i>)</td><td>Grammatical Range and Accuracy</td><td>Frequent, noticeable errors limit the band</td></tr>
</table></div>`
      }
    ],
    worked: [
      {
        title: 'Repairing reference in a Task 2 paragraph',
        source: `<div class="prompt-box"><p>"Many cities have introduced bike-sharing schemes. Bike-sharing schemes allow residents to rent a bicycle for a short journey. Bike-sharing schemes are cheap, and it reduces pollution. However, some people which live in the suburbs say it is not useful for them, because is too far to cycle to the centre. Also it has a problem with theft."</p></div>`,
        questions: '<p>Improve the referencing and correct the pronoun errors.</p>',
        walk: [
          { q: 'Sentences 2–3: "Bike-sharing schemes… Bike-sharing schemes…"', a: 'These schemes… They…', steps: ['The same noun phrase opens three sentences. Replace the repetition with reference: <i><b>These schemes</b> allow residents… <b>They</b> are cheap…</i>'] },
          { q: '"and it reduces pollution"', a: 'and they reduce pollution', steps: ['The subject is plural (<i>schemes</i>), so the pronoun must be <i>they</i>, and the verb <i>reduce</i>.'] },
          { q: '"some people which live"', a: 'some people who live', steps: ['<i>People</i> are human: <i>who</i> (or <i>that</i>), not <i>which</i>.'] },
          { q: '"it is not useful for them"', a: 'the scheme is not useful for them', steps: ['After a sentence about schemes in general, <i>it</i> is ambiguous. Naming the noun again – or using <i>such schemes</i> – is clearer.'] },
          { q: '"because is too far"', a: 'because it is too far', steps: ['Missing dummy subject: distance needs <i>it</i>.'] },
          { q: '"Also it has a problem with theft."', a: 'Theft is also a problem. / There is also a problem with theft.', steps: ['<i>It has a problem</i> translates an existence structure; English uses <i>there is</i> – or a simpler subject: <i>Theft is also a problem.</i>'] }
        ],
        lesson: 'Good referencing means two things at once: replacing repetition with pronouns and this + noun, and making sure every pronoun points to one clear noun. Check both when you proofread.'
      }
    ],
    dos: [
      'Use the object form after prepositions: between you and me, for him and me.',
      'Use this + noun (this trend, this measure) to link back to a whole idea.',
      'Use singular they for a person of unknown gender (a student… they).',
      'Use who for people and which for things.',
      'Always give a sentence a subject: It is important… There are many…',
      'Use I freely to give your opinion in Task 2.'
    ],
    donts: [
      'Don\'t write it\'s when you mean its, or who\'s when you mean whose.',
      'Don\'t use myself as a subject: not "My friend and myself".',
      'Don\'t repeat the pronoun inside a relative clause: not "the book that I read it".',
      'Don\'t start sentences with a bare "This is…" when it is unclear what "this" means.',
      'Don\'t use "you" constantly in Task 2 – it sounds conversational.',
      'Don\'t write "Everyone have" – indefinite pronouns take a singular verb.'
    ],
    careful: [
      { title: 'its / it\'s, whose / who\'s, their / there / they\'re', body: '<p>These are spelling errors, but examiners treat them as signs of weak control. The apostrophe always means a letter is missing (<i>it\'s = it is</i>; <i>who\'s = who is</i>; <i>they\'re = they are</i>).</p>', example: '✓ <i>The company changed <b>its</b> name. <b>It\'s</b> now called…</i>' },
      { title: 'Translated subjects', body: '<p>Some languages say "it has" for existence or drop the subject altogether. In English: <i>there is/are</i> for existence; <i>it</i> as an empty subject for time, weather, distance and evaluations.</p>', example: '✗ <i>In my country has many festivals.</i> → ✓ <i>There are many festivals in my country.</i>' },
      { title: 'Double subjects', body: '<p>Do not put a pronoun after a noun subject.</p>', example: '✗ <i>My father <b>he</b> works in a bank.</i> → ✓ <i>My father works in a bank.</i>' },
      { title: '"It" referring to a whole paragraph', body: '<p>When a pronoun is meant to refer to a whole argument, readers often cannot follow. Use a summary noun instead: <i>this argument, this situation, these changes</i>.</p>' }
    ],
    faq: [
      { q: 'Is singular "they" acceptable in IELTS Writing?', a: '<p>Yes. It is standard in modern English, including formal and academic writing: <i>Each candidate must bring their passport.</i> The older <i>he or she</i> is also correct but becomes heavy if repeated.</p>' },
      { q: 'Can I use "I" in Task 2?', a: '<p>Yes – an opinion essay asks for your view, and <i>I believe</i> or <i>In my view</i> is the clearest way to give it. What matters is that your position is clear and supported.</p>' },
      { q: 'Is "whom" necessary?', a: '<p>In formal writing, <i>whom</i> is used after prepositions (<i>the people <b>to whom</b> the letter was sent</i>). Elsewhere, <i>who</i> or <i>that</i> is normal, and in Speaking <i>whom</i> can sound over-formal.</p>' }
    ],
    exercises: {
      id: 'ch-grammar-pronouns',
      title: 'Chapter exercises: pronouns',
      groups: [
        {
          kind: 'choice', title: 'Part A: choose the correct form', instructions: 'Choose the correct option, <b>A, B or C</b>.',
          questions: [
            { n: 1, q: 'The decision was difficult for my sister and ___.', opts: ['I', 'me', 'myself'], a: 'B', x: 'After a preposition (<i>for</i>) use the object form: <i>for my sister and me</i>. Test it by removing <i>my sister and</i>: <i>for me</i>.' },
            { n: 2, q: 'The company has increased ___ profits.', opts: ['its', 'it\'s', 'their\'s'], a: 'A', x: '<i>Its</i> is the possessive; <i>it\'s</i> means <i>it is</i>. <i>Their\'s</i> does not exist.' },
            { n: 3, q: 'Teenagers ___ spend too much time online may sleep badly.', opts: ['which', 'who', 'whose'], a: 'B', x: '<i>Who</i> for people. (<i>That</i> would also be correct here.)' },
            { n: 4, q: 'Everyone ___ the right to clean water.', opts: ['have', 'has', 'are having'], a: 'B', x: 'Indefinite pronouns such as <i>everyone</i> take a singular verb.' },
            { n: 5, q: '___ are several reasons why people move to cities.', opts: ['It', 'They', 'There'], a: 'C', x: 'Existence: <i>There are</i> + plural noun.' },
            { n: 6, q: 'Many cities now charge drivers to enter the centre. ___ has reduced congestion considerably.', opts: ['It', 'This measure', 'They'], a: 'B', x: '<i>This measure</i> clearly refers back to the whole idea of charging drivers. <i>It</i> and <i>They</i> could refer to <i>cities</i> or <i>drivers</i>.' }
          ]
        },
        {
          kind: 'gap', title: 'Part B: complete the sentence', instructions: 'Write <b>ONE WORD ONLY</b>.',
          questions: [
            { n: 7, q: '{} is essential to protect endangered species.', a: 'It', x: 'An adjective + to-infinitive structure needs the dummy subject <i>it</i>.' },
            { n: 8, q: 'Children should learn to look after {} from an early age.', a: 'themselves', x: 'The object is the same as the subject (<i>children</i>): reflexive <i>themselves</i>.' },
            { n: 9, q: 'A good manager listens to {} staff.', a: 'their|his|her', x: 'Singular <i>they</i> (<i>their</i>) is the modern standard when gender is unknown; <i>his or her</i> is also possible.' },
            { n: 10, q: 'This is the scientist {} research changed the industry.', a: 'whose', x: '<i>Whose</i> shows possession: the scientist\'s research.' },
            { n: 11, q: 'The two countries agreed to support each {} in a crisis.', a: 'other', x: '<i>Each other</i> expresses a two-way relationship.' },
            { n: 12, q: 'Nobody in my class could answer, not even the teacher {}.', a: 'himself|herself', x: 'Emphatic reflexive: <i>the teacher himself / herself</i>.' }
          ]
        }
      ]
    },
    checklist: [
      'I know the subject, object, possessive and reflexive forms without hesitating.',
      'I use this + summary noun to refer back to ideas.',
      'I never leave a sentence without a subject (it / there).',
      'I use who for people and which for things.',
      'I check its/it\'s, whose/who\'s and their/there/they\'re when proofreading.'
    ],
    summary: [
      'Pronouns replace or refer to noun phrases and are a key tool of cohesion.',
      'Forms must match the job (subject/object), number and person of what they replace.',
      'Every pronoun must point to one clear noun; use this + noun for whole ideas.',
      'English sentences need a subject: use dummy it and there.',
      'Singular they is standard for a person of unknown gender.'
    ],
    references: [
      { title: 'British Council LearnEnglish: Pronouns', url: BC + 'pronouns', note: 'Personal, possessive, reflexive, indefinite and relative pronouns, with exercises.' },
      ...grammarBooks,
      gra
    ]
  },

  /* ===================================================================== VERBS */
  verbs: {
    intro: `
<p>The <b>verb</b> is the engine of a sentence. It tells us what happens (<i>rise, build, argue</i>), what someone does, or what state something is in (<i>be, seem, belong</i>). Every complete English sentence contains at least one <b>finite verb</b> – a verb that shows tense and agrees with its subject. Without it, there is no sentence: <i>The rapid growth of cities</i> is only a noun phrase; <i>The rapid growth of cities <b>has caused</b> congestion</i> is a sentence.</p>
<p>Verbs carry more grammar than any other word class. A single verb phrase can show <b>tense</b> (past or present), <b>aspect</b> (simple, continuous, perfect), <b>voice</b> (active or passive), <b>modality</b> (<i>can, should, might</i>) and <b>agreement</b> with the subject. Each verb also has its own <b>pattern</b>: what can follow it – an object, a <i>to</i>-infinitive, an <i>-ing</i> form, a <i>that</i>-clause or a particular preposition. Most of the grammar errors examiners see in IELTS Writing are verb errors: the wrong tense, a missing <i>-s</i>, the wrong pattern (<i>suggest him to go</i>), the wrong preposition (<i>discuss about</i>) or a confusion between similar verbs (<i>rise</i> and <i>raise</i>).</p>
<p>This chapter is the map for the verb system. It explains the kinds of verb, their forms, transitivity, stative and dynamic meanings, and verb patterns. The twelve tenses each have their own chapter in Part B of the masterclass, and modal verbs, the passive, gerunds and infinitives are developed further in later chapters.</p>`,
    facts: [
      ['Job', 'Expresses an action, event or state; carries tense'],
      ['Kinds', 'Main verbs, auxiliaries (be, have, do), modals (can, should…)'],
      ['Forms', 'Base, -s form, past, -ing form, past participle'],
      ['Key distinctions', 'Transitive/intransitive · stative/dynamic · regular/irregular'],
      ['Patterns', 'Verb + object, to-infinitive, -ing, that-clause, preposition'],
      ['Commonest IELTS errors', 'Missing -s, wrong pattern, wrong preposition, rise/raise']
    ],
    method: [
      {
        title: 'Find the finite verb and its subject in every sentence',
        body: '<p>When you proofread, find the finite verb of each clause and its subject. Check three things: that the verb is there at all, that it agrees with the subject (<i>he <b>works</b></i>, <i>the number <b>is</b></i>), and that its tense fits the time you mean.</p>',
        example: '✗ <i>The number of students who study abroad increasing.</i> (no finite verb) → ✓ <i>The number of students who study abroad <b>is increasing</b>.</i>'
      },
      {
        title: 'Know the five forms of the verb – especially the irregular ones',
        body: '<p>Every verb has a base form (<i>grow</i>), an <i>-s</i> form (<i>grows</i>), a past form (<i>grew</i>), an <i>-ing</i> form (<i>growing</i>) and a past participle (<i>grown</i>). Regular verbs add <i>-ed</i> for the past and past participle; irregular verbs must be learned. Section 2 lists the irregular verbs you are most likely to need.</p>',
        example: '✗ <i>Sales have rised.</i> → ✓ <i>Sales have <b>risen</b>.</i> · ✗ <i>The population growed.</i> → ✓ <i>The population <b>grew</b>.</i>'
      },
      {
        title: 'Check whether the verb needs an object',
        body: '<p><b>Transitive</b> verbs need an object (<i>The government <b>raised</b> taxes</i>). <b>Intransitive</b> verbs cannot take one (<i>Taxes <b>rose</b></i>). Some verbs can be both (<i>Sales <b>increased</b></i> / <i>The company <b>increased</b> its sales</i>). Pairs such as <i>rise/raise</i>, <i>lie/lay</i> and <i>fall/fell (a tree)</i> are a frequent source of errors in Task 1.</p>',
        example: '✗ <i>The price of oil raised in 2008.</i> → ✓ <i>The price of oil <b>rose</b> in 2008.</i> · ✓ <i>Producers <b>raised</b> the price of oil.</i>'
      },
      {
        title: 'Decide whether the meaning is a state or an action',
        body: '<p><b>Stative</b> verbs describe states – thinking, feeling, possessing, being – and are not normally used in continuous forms: <i>know, believe, understand, prefer, own, belong, contain, consist, depend, seem, need, mean</i>. <b>Dynamic</b> verbs describe actions and can be continuous. Some verbs have both meanings: <i>I <b>think</b> it is wrong</i> (opinion, stative) / <i>I <b>am thinking</b> about it</i> (mental activity, dynamic).</p>',
        example: '✗ <i>Most people are knowing the risks.</i> → ✓ <i>Most people <b>know</b> the risks.</i> · ✗ <i>The report is consisting of three parts.</i> → ✓ <i>The report <b>consists</b> of three parts.</i>'
      },
      {
        title: 'Learn each important verb with its pattern',
        body: '<p>What follows a verb is fixed by the verb, not by logic. Learn verbs in patterns, not alone: <i>decide <b>to</b> do</i>, <i>avoid do<b>ing</b></i>, <i>allow someone <b>to</b> do</i>, <i>make someone do</i>, <i>suggest do<b>ing</b></i> or <i>suggest <b>that</b> someone (should) do</i>. Section 4 gives the patterns that matter most for IELTS.</p>',
        example: '✗ <i>The teacher suggested us to read more.</i> → ✓ <i>The teacher suggested <b>that we read</b> more.</i> / ✓ <i>The teacher suggested <b>reading</b> more.</i>'
      },
      {
        title: 'Use the right preposition – or none',
        body: '<p>Many verbs are followed by a fixed preposition (<i>depend <b>on</b>, contribute <b>to</b>, result <b>in</b>, consist <b>of</b></i>). Others take a direct object with <b>no</b> preposition, although the equivalent verb in your language may have one: <i>discuss</i> (✗ <i>discuss about</i>), <i>emphasise</i> (✗ <i>emphasise on</i>), <i>enter, reach, lack, attend, mention, approach</i>.</p>',
        example: '✗ <i>This essay will discuss about the causes.</i> → ✓ <i>This essay will <b>discuss</b> the causes.</i>'
      },
      {
        title: 'Then choose tense, aspect, voice and modality',
        body: '<p>Once the verb and its pattern are right, choose the time and the attitude: present or past, simple, continuous or perfect, active or passive, and whether a modal is needed (<i>can, should, may, might</i>). These choices are taught in the tense chapters (Part B) and in the chapters on the <a href="/grammar/passive">passive</a> and <a href="/grammar/conditionals">conditionals</a>.</p>'
      }
    ],
    sections: [
      {
        id: 'verb-kinds', title: 'Main verbs, auxiliaries and modals',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Kind</th><th>Members</th><th>What they do</th><th>Example</th></tr>
<tr><td>Main (lexical) verbs</td><td>Thousands: rise, build, argue, believe…</td><td>Carry the meaning</td><td><i>Prices <b>rose</b>.</i></td></tr>
<tr><td>Primary auxiliaries</td><td><b>be</b>, <b>have</b>, <b>do</b></td><td>Build tenses, the passive, questions and negatives. They can also be main verbs.</td><td><i>Prices <b>have</b> risen. <b>Do</b> you agree? It <b>was</b> built in 1990.</i></td></tr>
<tr><td>Modal auxiliaries</td><td>can, could, may, might, must, shall, should, will, would (+ ought to)</td><td>Express ability, possibility, obligation, advice, prediction. Followed by the base form; no <i>-s</i>, no <i>to</i>.</td><td><i>Governments <b>should invest</b>…</i> (✗ <i>should to invest</i>, ✗ <i>shoulds</i>)</td></tr>
<tr><td>Linking (copular) verbs</td><td>be, become, seem, appear, remain, look, sound, feel, get, grow</td><td>Link the subject to a description (an adjective or noun), not to an object</td><td><i>The situation <b>remains</b> serious.</i> (adjective, not adverb: ✗ <i>remains seriously</i>)</td></tr>
</table></div>
<p>Only the <b>first</b> auxiliary in a verb phrase shows tense and agreement: <i>The bridge <b>has been</b> repaired</i>; <i>The bridges <b>have been</b> repaired</i>. Negatives and questions are made with the first auxiliary, or with <i>do</i> if there is none: <i>Prices <b>did not</b> rise.</i> (✗ <i>Prices not rose.</i>)</p>`
      },
      {
        id: 'forms', title: 'Verb forms and irregular verbs for IELTS',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Base</th><th>Past</th><th>Past participle</th><th>Base</th><th>Past</th><th>Past participle</th></tr>
<tr><td>rise</td><td>rose</td><td>risen</td><td>fall</td><td>fell</td><td>fallen</td></tr>
<tr><td>grow</td><td>grew</td><td>grown</td><td>drop</td><td>dropped</td><td>dropped</td></tr>
<tr><td>become</td><td>became</td><td>become</td><td>remain</td><td>remained</td><td>remained</td></tr>
<tr><td>lead</td><td>led</td><td>led</td><td>bring</td><td>brought</td><td>brought</td></tr>
<tr><td>seek</td><td>sought</td><td>sought</td><td>spend</td><td>spent</td><td>spent</td></tr>
<tr><td>choose</td><td>chose</td><td>chosen</td><td>begin</td><td>began</td><td>begun</td></tr>
<tr><td>build</td><td>built</td><td>built</td><td>cost</td><td>cost</td><td>cost</td></tr>
<tr><td>teach</td><td>taught</td><td>taught</td><td>think</td><td>thought</td><td>thought</td></tr>
<tr><td>write</td><td>wrote</td><td>written</td><td>take</td><td>took</td><td>taken</td></tr>
<tr><td>lie (be flat)</td><td>lay</td><td>lain</td><td>lay (put down)</td><td>laid</td><td>laid</td></tr>
<tr><td>arise</td><td>arose</td><td>arisen</td><td>overcome</td><td>overcame</td><td>overcome</td></tr>
</table></div>
<h4>Spelling the -s, -ing and -ed forms</h4>
<ul>
<li><b>-s form:</b> add <i>-es</i> after <i>s, sh, ch, x, o</i> (<i>teaches, goes</i>); consonant + <i>y</i> → <i>-ies</i> (<i>studies</i>); <i>have → has</i>.</li>
<li><b>-ing form:</b> drop a final silent <i>e</i> (<i>make → making</i>); double the final consonant after a single stressed vowel (<i>stop → stopping, begin → beginning</i>, but <i>open → opening</i>); <i>lie → lying</i>.</li>
<li><b>-ed form:</b> consonant + <i>y</i> → <i>-ied</i> (<i>study → studied</i>, but <i>play → played</i>); double the consonant as for <i>-ing</i> (<i>drop → dropped</i>, <i>prefer → preferred</i>). British English also doubles final <i>l</i> after one vowel (<i>travelled, cancelled</i>); American English does not (<i>traveled</i>). Both are accepted – be consistent.</li>
</ul>`
      },
      {
        id: 'transitivity', title: 'Transitive and intransitive verbs in Task 1',
        html: `
<p>Task 1 descriptions depend on verbs of change, and these divide into intransitive verbs (the figure changes by itself) and transitive verbs (someone changes something). In a description of a chart, the subject is usually the figure, so the verb is usually intransitive.</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Intransitive (no object)</th><th>Transitive (needs an object)</th><th>Both</th></tr>
<tr><td>rise, fall, grow, decline, drop (also transitive), fluctuate, peak, plateau, recover, soar, plummet</td><td>raise, reduce, lower, cut, double (also intransitive), boost</td><td>increase, decrease, double, triple, halve (mostly transitive), drop, level off (intransitive)</td></tr>
</table></div>
<div class="table-wrap"><table class="data-table">
<tr><th>✗ Incorrect</th><th>✓ Correct</th><th>Why</th></tr>
<tr><td>Unemployment raised to 8%.</td><td>Unemployment <b>rose</b> to 8%.</td><td><i>Raise</i> needs an object.</td></tr>
<tr><td>The number of visitors was increased.</td><td>The number of visitors <b>increased</b>.</td><td>The figure changed by itself; the passive suggests someone increased it.</td></tr>
<tr><td>The government rose the minimum wage.</td><td>The government <b>raised</b> the minimum wage.</td><td>With an object, use <i>raise</i>.</td></tr>
<tr><td>Prices were risen.</td><td>Prices <b>rose</b>. / Prices <b>were raised</b> (by the company).</td><td>Intransitive verbs have no passive.</td></tr>
</table></div>`
      },
      {
        id: 'patterns', title: 'Verb patterns that matter in IELTS',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Pattern</th><th>Common verbs</th><th>Example</th></tr>
<tr><td>verb + <b>to</b>-infinitive</td><td>afford, agree, aim, attempt, decide, fail, hope, manage, plan, refuse, seem, tend, want</td><td><i>Many families cannot <b>afford to buy</b> a home.</i></td></tr>
<tr><td>verb + <b>-ing</b></td><td>avoid, consider, delay, deny, enjoy, finish, involve, mind, miss, practise, recommend, risk, suggest</td><td><i>Doctors <b>recommend reducing</b> sugar intake.</i></td></tr>
<tr><td>verb + object + <b>to</b>-infinitive</td><td>advise, allow, enable, encourage, expect, force, persuade, require, teach, tell, warn</td><td><i>Subsidies <b>encourage farmers to grow</b> more.</i></td></tr>
<tr><td>verb + object + <b>base form</b></td><td>make, let, help (also + to)</td><td><i>Parents should <b>let children make</b> mistakes.</i> (✗ <i>let children to make</i>)</td></tr>
<tr><td>verb + <b>that</b>-clause</td><td>argue, believe, claim, suggest, recommend, insist, propose, show, indicate</td><td><i>The data <b>show that</b> obesity is rising.</i></td></tr>
<tr><td>suggest / recommend / propose</td><td>+ <i>-ing</i>, or + <i>that</i> + subject + (should) + base form – never + object + to</td><td><i>Experts <b>suggest that governments (should) invest</b>…</i> (✗ <i>suggest governments to invest</i>)</td></tr>
</table></div>
<p>Some verbs change meaning with <i>-ing</i> or <i>to</i>: <i>stop smoking</i> (quit) / <i>stop to smoke</i> (pause in order to); <i>remember locking the door</i> (memory of the past) / <i>remember to lock</i> (not forget a future duty); <i>try adding salt</i> (experiment) / <i>try to finish</i> (make an effort). These are covered in the chapter on gerunds and infinitives.</p>
<h4>Verbs and prepositions</h4>
<div class="table-wrap"><table class="data-table plain">
<tr><th>With a fixed preposition</th><th>With <b>no</b> preposition (direct object)</th></tr>
<tr><td>depend on, rely on, focus on, insist on · contribute to, lead to, adapt to · result in, invest in, specialise in, succeed in · result from, benefit from, suffer from · consist of, approve of · deal with, cope with, comply with · account for, pay for, apply for</td><td>discuss, emphasise, mention, describe, explain (+ to someone), enter, reach, approach, attend, lack, marry, contact, answer, request, affect</td></tr>
</table></div>`
      },
      {
        id: 'band-impact', title: 'How verbs affect your band',
        html: `
<p>Verb errors are the most visible grammar errors in a script because almost every sentence has at least one verb. A missing third-person <i>-s</i> or a wrong past form in a basic sentence suggests the kind of frequent, basic error that the descriptors place at Band 5–6. At Band 7, the descriptors expect frequent error-free sentences and good control of grammar; at Band 8, the majority of sentences error-free.</p>
<div class="table-wrap"><table class="data-table">
<tr><th>If your verbs show…</th><th>Typical effect</th></tr>
<tr><td>Missing finite verbs, missing -s, wrong past forms</td><td>Basic errors that hold Grammatical Range and Accuracy around Band 5</td></tr>
<tr><td>Correct forms but frequent pattern and preposition errors (<i>suggest him to, discuss about</i>)</td><td>Common at Band 6: the grammar is mostly controlled, but errors are noticeable</td></tr>
<tr><td>Accurate forms and patterns, with a range of tenses, passives and modals</td><td>The control and range expected at Band 7+</td></tr>
</table></div>
<p>Verb precision also counts in <b>Lexical Resource</b>: <i>plummeted</i>, <i>fluctuated</i>, <i>levelled off</i> in Task 1, or <i>exacerbate</i>, <i>alleviate</i>, <i>undermine</i> in Task 2, show range – as long as they are used accurately and with the right pattern.</p>`
      }
    ],
    worked: [
      {
        title: 'Correcting verb errors in Task 1 and Task 2 sentences',
        questions: `<ol>
<li>The number of international students raised sharply after 2010.</li>
<li>Online shopping is becoming more popular, and it effect high-street shops.</li>
<li>Many experts suggest governments to tax sugary drinks.</li>
<li>This essay will discuss about both views.</li>
<li>Most people are understanding the importance of exercise.</li>
<li>The percentage of households with a car has grew steadily.</li>
</ol>`,
        walk: [
          { q: '1.', a: 'rose sharply', steps: ['The subject (<i>the number</i>) changed by itself, with no object, so the verb must be intransitive: <i>rise – rose – risen</i>.', '<i>Raise</i> is transitive: <i>Universities raised fees.</i>'] },
          { q: '2.', a: 'and it affects high-street shops', steps: ['<i>Effect</i> is usually a noun; the verb is <i>affect</i>.', 'Third person singular present: <i>it affects</i>.', 'Two errors in one verb – check both form and spelling.'] },
          { q: '3.', a: 'suggest that governments (should) tax / suggest taxing', steps: ['<i>Suggest</i> never takes object + to-infinitive.', 'Use <i>suggest that</i> + subject + base form (or <i>should</i> + base form), or <i>suggest</i> + -ing.'] },
          { q: '4.', a: 'discuss both views', steps: ['<i>Discuss</i> takes a direct object, no preposition. (The noun takes <i>about</i>: <i>a discussion about</i>.)'] },
          { q: '5.', a: 'Most people understand', steps: ['<i>Understand</i> is a stative verb (a mental state), not normally used in the continuous.'] },
          { q: '6.', a: 'has grown steadily', steps: ['Present perfect = <i>has</i> + past participle. The past participle of <i>grow</i> is <i>grown</i>; <i>grew</i> is the past simple.'] }
        ],
        lesson: 'Six sentences, six different verb problems: transitivity, agreement and spelling, pattern, preposition, stative meaning, irregular form. Proofreading verbs means asking all of these questions, not just "is the tense right?".'
      }
    ],
    dos: [
      'Check every clause for a finite verb that agrees with its subject.',
      'Learn irregular verbs, especially rise/rose/risen, fall/fell/fallen, grow/grew/grown.',
      'Use intransitive verbs (rise, fall, grow) when the figure changes by itself.',
      'Learn each new verb with its pattern (to / -ing / object + to / that).',
      'Use stative verbs (know, believe, consist, depend) in simple forms.',
      'Use precise verbs of change and cause in Task 1 and Task 2.'
    ],
    donts: [
      'Don\'t write "raised" when the figure rose by itself.',
      'Don\'t write "suggest someone to do".',
      'Don\'t add prepositions after discuss, emphasise, mention, enter, reach or lack.',
      'Don\'t put "to" after a modal: not "should to", "can to", "must to".',
      'Don\'t use the passive with intransitive verbs: not "was risen", "was happened".',
      'Don\'t confuse affect (verb) and effect (noun).'
    ],
    careful: [
      { title: '"Happen", "occur" and "take place" have no passive', body: '<p>Things happen; nobody "happens" them.</p>', example: '✗ <i>The accident was happened at night.</i> → ✓ <i>The accident <b>happened</b> at night.</i>' },
      { title: 'Third-person -s in long subjects', body: '<p>When the subject is long, learners lose track of agreement. Find the head noun.</p>', example: '✗ <i>The use of mobile phones in classrooms distract students.</i> → ✓ <i>The use … <b>distracts</b> students.</i> (head: <i>use</i>)' },
      { title: '"Let" and "make" take the base form', body: '<p>After <i>let</i> and <i>make</i> + object, use the infinitive without <i>to</i> in the active voice.</p>', example: '✗ <i>Parents make children to study.</i> → ✓ <i>Parents make children study.</i> (Passive: <i>Children are made <b>to</b> study.</i>)' },
      { title: 'False friends: verbs that look like your language', body: '<p>Verbs such as <i>assist</i> (= help, not attend), <i>pretend</i> (= act as if, not intend), <i>realise</i> (= become aware, not carry out) often mean something different from similar-looking verbs in other languages. Check meanings in a learner\'s dictionary.</p>' }
    ],
    faq: [
      { q: 'How many irregular verbs do I need to know?', a: '<p>English has about 200 irregular verbs in common use, but around 50 cover most needs. For IELTS, prioritise the verbs of change for Task 1 and the high-frequency verbs in section 2.</p>' },
      { q: 'Is "increase" transitive or intransitive?', a: '<p>Both: <i>Sales increased</i> (intransitive) and <i>The company increased its sales</i> (transitive). That is why it is a safe verb for Task 1 – but make sure you do not use the passive (<i>was increased</i>) when you mean the figure simply rose.</p>' },
      { q: 'Where can I study each tense in detail?', a: '<p>Part B of the grammar masterclass has a chapter for each of the twelve tenses, and an overview chapter on <a href="/grammar/tenses">choosing tenses for IELTS</a>.</p>' }
    ],
    exercises: {
      id: 'ch-grammar-verbs',
      title: 'Chapter exercises: verbs',
      groups: [
        {
          kind: 'choice', title: 'Part A: choose the correct verb', instructions: 'Choose the correct option, <b>A, B or C</b>.',
          questions: [
            { n: 1, q: 'The price of petrol ___ by 15% last year.', opts: ['raised', 'rose', 'was risen'], a: 'B', x: 'The price changed by itself (no object): intransitive <i>rise – rose – risen</i>. Intransitive verbs have no passive.' },
            { n: 2, q: 'The government plans to ___ the retirement age.', opts: ['rise', 'raise', 'arise'], a: 'B', x: 'The verb has an object (<i>the retirement age</i>), so it must be transitive: <i>raise</i>.' },
            { n: 3, q: 'Doctors recommend ___ at least seven hours a night.', opts: ['to sleep', 'sleeping', 'sleep'], a: 'B', x: '<i>Recommend</i> + -ing (or <i>recommend that</i> + clause). It does not take a to-infinitive directly.' },
            { n: 4, q: 'Technology has enabled people ___ from home.', opts: ['work', 'working', 'to work'], a: 'C', x: '<i>Enable</i> + object + to-infinitive.' },
            { n: 5, q: 'The success of the policy ___ on public support.', opts: ['depends', 'is depending', 'depend'], a: 'A', x: '<i>Depend</i> is stative and the subject (<i>the success</i>) is singular: <i>depends</i>.' },
            { n: 6, q: 'Many parents do not let their children ___ alone.', opts: ['to travel', 'travelling', 'travel'], a: 'C', x: '<i>Let</i> + object + base form (no <i>to</i>).' },
            { n: 7, q: 'This report will ___ the main findings.', opts: ['discuss about', 'discuss', 'discuss on'], a: 'B', x: '<i>Discuss</i> takes a direct object with no preposition.' }
          ]
        },
        {
          kind: 'gap', title: 'Part B: verb forms', instructions: 'Write the correct form of the verb in brackets. <b>ONE WORD ONLY</b>.',
          questions: [
            { n: 8, q: 'Since 2015, the number of electric cars has {} (grow) rapidly.', a: 'grown', x: 'Present perfect: <i>has</i> + past participle. <i>grow – grew – grown</i>.' },
            { n: 9, q: 'In 2008, unemployment {} (fall) to its lowest level.', a: 'fell', x: 'Past simple of <i>fall</i>: <i>fell</i>. (Past participle: <i>fallen</i>.)' },
            { n: 10, q: 'The use of smartphones in schools {} (distract) many students.', a: 'distracts', x: 'The head of the subject is <i>use</i> (singular), so the verb needs <i>-s</i>.' },
            { n: 11, q: 'The museum was {} (build) in the nineteenth century.', a: 'built', x: 'Passive: <i>was</i> + past participle. <i>build – built – built</i>.' },
            { n: 12, q: 'Online learning can {} (affect) students\' motivation.', a: 'affect', x: 'After a modal, use the base form – and the verb is <i>affect</i>, not the noun <i>effect</i>.' }
          ]
        }
      ]
    },
    checklist: [
      'Every clause I write has a finite verb that agrees with its subject.',
      'I know the irregular verbs of change (rise, fall, grow) in all forms.',
      'I can choose between transitive and intransitive verbs in Task 1.',
      'I know which verbs are stative.',
      'I can use the patterns of suggest, recommend, allow, enable, let and make correctly.',
      'I know which common verbs take no preposition.'
    ],
    summary: [
      'Every sentence needs a finite verb that shows tense and agrees with its subject.',
      'Verbs are main verbs, auxiliaries (be, have, do) or modals; only the first auxiliary shows tense.',
      'Transitive verbs need an object (raise), intransitive verbs cannot take one (rise).',
      'Stative verbs (know, believe, consist) are not normally continuous.',
      'Learn verbs with their patterns and prepositions – these cause most verb errors.'
    ],
    references: [
      { title: 'British Council LearnEnglish: Verbs', url: BC + 'verbs', note: 'Verb types, patterns, tense and aspect, with links to every tense and to modal verbs.' },
      { title: 'British Council LearnEnglish: Verbs followed by -ing forms', url: BC + 'ing-forms' },
      { title: 'British Council LearnEnglish: To-infinitives', url: BC + 'infinitives' },
      ...grammarBooks,
      gra
    ]
  }
};

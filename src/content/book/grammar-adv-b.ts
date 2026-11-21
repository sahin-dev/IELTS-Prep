import type { Chapter, Reference } from '@/lib/types';
import { grammarBooks } from './grammar-pos-a';

/* Grammar masterclass, Part D (advanced) – parallelism, inversion, emphasis; Part E – grammar for IELTS Writing */

const gra: Reference = { title: 'IELTS Writing band descriptors (public version)', url: 'https://ielts.org/cdn/ielts-downloadable-assets/ielts-guidance-and-support/ielts-guides/ielts-writing-band-descriptors.pdf', note: 'Grammatical Range and Accuracy, Bands 5–9.' };

export const advChaptersB: Record<string, Chapter> = {
  /* ===================================================================== PARALLELISM */
  parallelism: {
    intro: `
<p><b>Parallel structure</b> (parallelism) means using the same grammatical form for items that have the same function in a sentence – in a list, in a comparison, or on both sides of a pair such as <i>both … and</i>. <i>Cycling is cheap, healthy and good for the environment</i> is parallel (three adjectives). <i>Cycling is cheap, healthy and it is good for the environment</i> is not (two adjectives and a clause).</p>
<p>Faulty parallelism is a sign that a sentence was built in pieces rather than planned. It is particularly common in Task 2, where candidates list reasons or solutions, and in Task 1 comparisons (<i>the cost in London was higher than Paris</i>). Correcting it makes sentences clearer, more elegant and more accurate – all of which the examiner notices.</p>`,
    facts: [
      ['Rule', 'Items with the same function take the same form'],
      ['Lists', 'noun, noun and noun · to do, to do and to do'],
      ['Pairs', 'both … and, either … or, not only … but also'],
      ['Comparisons', 'Compare like with like: the cost in London vs that in Paris'],
      ['Benefit', 'Clearer, more controlled complex sentences'],
      ['Common in', 'Task 2 lists; Task 1 comparisons']
    ],
    method: [
      { title: 'Identify the items being listed or compared', body: '<p>Underline each item in a list, and each side of a comparison or correlative pair.</p>' },
      { title: 'Make every item the same form', body: '<p>All nouns, all adjectives, all <i>-ing</i> forms, all <i>to</i>-infinitives, or all clauses.</p>', example: '✗ <i>Solutions include building more homes, rent controls and to tax empty properties.</i> → ✓ <i>Solutions include <b>building</b> more homes, <b>controlling</b> rents and <b>taxing</b> empty properties.</i>' },
      { title: 'Repeat or drop shared words consistently', body: '<p>Either use <i>to</i> once (<i>to reduce, protect and improve</i>) or repeat it before every item (<i>to reduce, to protect and to improve</i>) – not a mixture.</p>' },
      { title: 'Compare like with like', body: '<p>Compare two similar things – the cost with a cost, a figure with a figure. Use <i>that / those</i> to avoid repeating the noun.</p>', example: '✗ <i>The cost of living in London is higher than Paris.</i> → ✓ <i>…higher than <b>that in</b> Paris.</i> / <i>…higher than <b>in</b> Paris.</i>' },
      { title: 'Balance correlative pairs', body: '<p>The same structure must follow each half.</p>', example: '✗ <i>The plan is not only expensive but also it is slow.</i> → ✓ <i>The plan is not only <b>expensive</b> but also <b>slow</b>.</i>' }
    ],
    sections: [
      {
        id: 'examples', title: 'Correct and incorrect parallel structures',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>✗ Not parallel</th><th>✓ Parallel</th></tr>
<tr><td>Students need time, money and to be supported.</td><td>Students need time, money and support.</td></tr>
<tr><td>The aim is to reduce costs and improving safety.</td><td>The aim is to reduce costs and (to) improve safety.</td></tr>
<tr><td>In 2010, sales in Japan were higher than Korea.</td><td>In 2010, sales in Japan were higher than those in Korea.</td></tr>
<tr><td>Either we act now or face the consequences.</td><td>Either we act now or we face the consequences. / We must either act now or face the consequences.</td></tr>
<tr><td>He likes reading, to swim and cycling.</td><td>He likes reading, swimming and cycling.</td></tr>
</table></div>`
      },
      {
        id: 'band-impact', title: 'How parallelism affects your band',
        html: `<p>Parallel lists and balanced comparisons are a hallmark of controlled complex sentences. Faulty parallelism counts as an error in a complex structure – precisely the kind that holds candidates at Band 6. In Task 1, comparing unlike things (a cost with a city) can also make the data description inaccurate.</p>`
      }
    ],
    worked: [
      {
        title: 'Repairing a Task 2 sentence',
        source: '<div class="prompt-box"><p>"To reduce traffic, cities should invest in public transport, introducing congestion charges and people should be encouraged to cycle."</p></div>',
        walk: [
          { q: 'Find the items', a: 'invest… / introducing… / people should be encouraged…', steps: ['Three solutions in three different forms: verb, -ing form, passive clause.'] },
          { q: 'Rewrite', a: 'To reduce traffic, cities should invest in public transport, introduce congestion charges and encourage people to cycle.', steps: ['All three now follow <i>should</i>: base forms <i>invest, introduce, encourage</i>.'] }
        ],
        lesson: 'Plan your list before you write it, and make every item fit the same grammatical slot.'
      }
    ],
    dos: ['Use the same form for every item in a list.', 'Compare like with like (that / those).', 'Balance both … and, either … or, not only … but also.'],
    donts: ['Don\'t mix nouns, -ing forms and clauses in one list.', 'Don\'t compare a figure with a place.', 'Don\'t repeat "to" for some items and not others.'],
    careful: [{ title: 'Long lists in Task 2', body: '<p>Three items is usually the natural maximum in one sentence. Longer lists are better split into two sentences.</p>' }],
    faq: [{ q: 'Is parallelism only about style?', a: '<p>No – a list such as <i>time, money and to be supported</i> is grammatically incorrect, not just inelegant.</p>' }],
    exercises: {
      id: 'ch-grammar-parallelism',
      title: 'Chapter exercises: parallel structure',
      groups: [
        {
          kind: 'choice', instructions: 'Choose the correct sentence, <b>A or B</b>.',
          questions: [
            { n: 1, q: 'Which is parallel?', opts: ['Exercise improves mood, reduces stress and it helps sleep.', 'Exercise improves mood, reduces stress and helps sleep.'], a: 'B', x: 'Three verbs with the same subject.' },
            { n: 2, q: 'Which is correct?', opts: ['Salaries in Zurich are higher than those in Madrid.', 'Salaries in Zurich are higher than Madrid.'], a: 'A', x: 'Compare salaries with salaries: <i>those in Madrid</i>.' },
            { n: 3, q: 'Which is parallel?', opts: ['The course is both challenging and rewarding.', 'The course is both challenging and it rewards you.'], a: 'A', x: '<i>both</i> + adjective + <i>and</i> + adjective.' },
            { n: 4, q: 'Which is parallel?', opts: ['The aim is to inform, to educate and entertaining.', 'The aim is to inform, educate and entertain.'], a: 'B', x: 'Three base forms after one <i>to</i>.' }
          ]
        },
        {
          kind: 'gap', instructions: 'Write <b>ONE WORD ONLY</b>.',
          questions: [
            { n: 5, q: 'The population of Lagos is larger than {} of Accra.', a: 'that', x: '<i>that</i> replaces <i>the population</i>.' },
            { n: 6, q: 'Governments should not only fund research {} also support businesses.', a: 'but', x: '<i>not only … but also</i>.' }
          ]
        }
      ]
    },
    checklist: ['My lists use one grammatical form.', 'My comparisons compare like with like.', 'My correlative pairs are balanced.'],
    summary: ['Parallel items share a grammatical form.', 'Lists, comparisons and correlative pairs must be balanced.', 'Use that/those to compare like with like.'],
    references: [...grammarBooks, gra]
  },

  /* ===================================================================== INVERSION */
  inversion: {
    intro: `
<p><b>Inversion</b> means putting an auxiliary verb before the subject, as in a question, but in a statement. It happens after certain negative or restrictive words placed at the start of a sentence for emphasis: <i><b>Never have</b> so many people <b>lived</b> in cities. <b>Not only does</b> recycling save energy, but it also reduces landfill. <b>Rarely do</b> such opportunities arise.</i> It also replaces <i>if</i> in formal conditionals: <i><b>Had</b> the government <b>acted</b> sooner, …</i> (= If the government had acted sooner).</p>
<p>Inversion is formal and emphatic. Used once or twice in an essay, accurately and where emphasis is genuinely needed, it is a clear demonstration of advanced grammatical range. Used carelessly – without the auxiliary (<i>Not only it saves…</i>) – it is an error; used in every paragraph, it sounds forced. This chapter shows the patterns and how to use them sparingly.</p>`,
    facts: [
      ['Form', 'Negative/restrictive adverbial + auxiliary + subject + verb'],
      ['Triggers', 'Never, Rarely, Seldom, Not only, Only then, No sooner, Hardly, Under no circumstances'],
      ['Conditional', 'Had I known… · Should you need… · Were it not for…'],
      ['No auxiliary?', 'Use do / does / did'],
      ['Register', 'Formal – Writing more than Speaking'],
      ['Advice', 'Once or twice per essay, at most']
    ],
    method: [
      { title: 'Put the trigger first, then the auxiliary, then the subject', body: '<p>If the verb phrase has an auxiliary (<i>have, be, will, can</i>), move it before the subject. If not, add <i>do/does/did</i>.</p>', example: '<i>Prices have rarely been so high.</i> → <i><b>Rarely have</b> prices <b>been</b> so high.</i> · <i>It not only saves money…</i> → <i><b>Not only does</b> it <b>save</b> money…</i>' },
      { title: 'Learn the common triggers', body: '<p><i>Never (before), Rarely, Seldom, Little, Not only … but also, Not until, Only then / Only when / Only by, No sooner … than, Hardly / Scarcely … when, Under no circumstances, In no way, At no time, So + adjective + that</i>.</p>' },
      { title: 'With "only when / not until / only after", invert the main clause', body: '<p>The inversion comes after the time clause.</p>', example: '<i><b>Only when</b> the bridge collapsed <b>did</b> the authorities <b>act</b>.</i>' },
      { title: 'Use conditional inversion in formal writing', body: '<p>Drop <i>if</i> and invert: <i>Had</i> (third conditional), <i>Should</i> (first, tentative), <i>Were</i> (second).</p>', example: '<i><b>Had</b> the warnings <b>been</b> heeded, the disaster could have been avoided.</i> · <i><b>Should</b> you require assistance, please contact me.</i> (GT formal letter)' },
      { title: 'Use it sparingly and only for real emphasis', body: '<p>One well-placed inversion in a Task 2 essay is effective; three or four sound mechanical.</p>' }
    ],
    sections: [
      {
        id: 'patterns', title: 'Inversion patterns',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Trigger</th><th>Example</th></tr>
<tr><td>Never / Rarely / Seldom</td><td><i><b>Seldom has</b> a policy <b>caused</b> such controversy.</i></td></tr>
<tr><td>Not only … but (also)</td><td><i><b>Not only does</b> tourism create jobs, but it also funds conservation.</i></td></tr>
<tr><td>Only + time/way</td><td><i><b>Only by</b> working together <b>can</b> countries <b>tackle</b> climate change.</i></td></tr>
<tr><td>No sooner … than / Hardly … when</td><td><i><b>No sooner had</b> the law <b>been passed than</b> it was challenged.</i></td></tr>
<tr><td>Under no circumstances / In no way</td><td><i><b>Under no circumstances should</b> children <b>be left</b> unsupervised near water.</i></td></tr>
<tr><td>So + adjective</td><td><i><b>So severe was</b> the damage that the bridge had to be rebuilt.</i></td></tr>
<tr><td>Conditional</td><td><i><b>Were</b> the government <b>to raise</b> taxes, …</i> · <i><b>Had</b> I <b>known</b>, …</i></td></tr>
</table></div>`
      },
      {
        id: 'band-impact', title: 'How inversion affects your band',
        html: `<p>An accurate inversion is a strong signal of advanced range (Bands 8–9 describe a wide range of structures used flexibly). But range only counts when it is controlled: an inversion without the auxiliary is an error in a complex structure, and forced inversions can make writing sound unnatural. Prioritise accuracy and natural variety; add inversion as a finishing touch.</p>`
      }
    ],
    worked: [
      {
        title: 'Adding emphasis to a Task 2 argument',
        questions: '<ol><li>Recycling not only saves energy but also reduces landfill.</li><li>The public realised the danger only after the floods.</li><li>If the city had invested earlier, the crisis would have been avoided.</li></ol>',
        walk: [
          { q: '1.', a: 'Not only does recycling save energy, but it also reduces landfill.', steps: ['<i>Not only</i> first → auxiliary <i>does</i> + subject + base form.'] },
          { q: '2.', a: 'Only after the floods did the public realise the danger.', steps: ['<i>Only after</i> + time phrase first → <i>did</i> + subject + base form.'] },
          { q: '3.', a: 'Had the city invested earlier, the crisis would have been avoided.', steps: ['Drop <i>if</i>; <i>had</i> before the subject.'] }
        ],
        lesson: 'Trigger first, auxiliary next (add do/does/did if needed), then the subject and the main verb in base or participle form.'
      }
    ],
    dos: ['Add do/does/did when there is no auxiliary.', 'Use conditional inversion in formal letters (Should you need…).', 'Use inversion once or twice per essay for real emphasis.'],
    donts: ['Don\'t write "Not only it saves…".', 'Don\'t invert after triggers that are not at the start of the sentence.', 'Don\'t use inversion in every paragraph.'],
    careful: [{ title: 'Main verb form after inversion', body: '<p>After <i>does/did</i>, use the base form.</p>', example: '✗ <i>Not only did it reduced costs…</i> → ✓ <i>Not only did it <b>reduce</b> costs…</i>' }],
    faq: [{ q: 'Should I use inversion in Speaking?', a: '<p>Rarely. <i>Not only… but also</i> without inversion, and conditional <i>If…</i>, are more natural in speech.</p>' }],
    exercises: {
      id: 'ch-grammar-inversion',
      title: 'Chapter exercises: inversion',
      groups: [
        {
          kind: 'choice', instructions: 'Choose the correct sentence, <b>A or B</b>.',
          questions: [
            { n: 1, q: 'Which is correct?', opts: ['Not only it reduces costs, but it also saves time.', 'Not only does it reduce costs, but it also saves time.'], a: 'B', x: 'Inversion needs the auxiliary <i>does</i> + base form.' },
            { n: 2, q: 'Which is correct?', opts: ['Rarely we see such generosity.', 'Rarely do we see such generosity.'], a: 'B', x: '<i>Rarely</i> first → <i>do</i> + subject.' },
            { n: 3, q: 'Which means "If you need help"?', opts: ['Should you need help, …', 'Would you need help, …'], a: 'A', x: 'Formal conditional inversion with <i>should</i>.' }
          ]
        },
        {
          kind: 'gap', instructions: 'Write <b>ONE WORD ONLY</b>.',
          questions: [
            { n: 4, q: '{} I known about the delay, I would have taken a later train.', a: 'Had', x: 'Third conditional inversion: <i>Had I known</i>.' },
            { n: 5, q: 'Never before {} so many people moved to cities.', a: 'have|had', x: 'Present perfect inversion: <i>have</i> + subject + participle.' },
            { n: 6, q: 'Only by investing in education {} poverty be reduced.', a: 'can|will', x: '<i>Only by…</i> → modal before the subject.' }
          ]
        }
      ]
    },
    checklist: ['I can form inversion after Never, Rarely, Not only, Only when.', 'I add do/does/did when needed.', 'I can use Had / Should / Were for formal conditionals.', 'I use inversion sparingly.'],
    summary: ['Inversion = auxiliary before subject after a fronted negative or restrictive word.', 'Add do/does/did if there is no auxiliary.', 'Conditional inversion: Had I…, Should you…, Were it…', 'Formal and emphatic – use once or twice per essay.'],
    references: [...grammarBooks, { title: 'Martin Hewings, Advanced Grammar in Use, 3rd edition (Cambridge University Press, 2013)', note: 'Units on inversion and fronting.' }, gra]
  },

  /* ===================================================================== EMPHASIS AND CLEFT */
  'emphasis-cleft': {
    intro: `
<p>English normally shows emphasis through stress in speech, but in writing – and often in speech too – it uses grammatical structures to put the focus where it belongs. The most important are <b>cleft sentences</b>, which split a single sentence into two clauses so that one part is highlighted: <i>Cost worries most people</i> → <i><b>It is</b> cost <b>that</b> worries most people</i> (it-cleft) → <i><b>What</b> worries most people <b>is</b> cost</i> (wh-cleft).</p>
<p>Other tools include <b>emphatic do</b> (<i>I <b>do</b> believe this</i>), <b>fronting</b> (<i>This argument I find unconvincing</i>), and intensifying words (<i>the <b>very</b> people who…</i>). In Task 2, cleft sentences are ideal for highlighting your key point or correcting a misconception; in Speaking Part 3, wh-clefts (<i>What I really like about it is…</i>) are a natural way to organise an answer.</p>`,
    facts: [
      ['It-cleft', 'It is / was + focus + that / who…'],
      ['Wh-cleft', 'What + clause + is / was + focus'],
      ['All-cleft', 'All we need is…'],
      ['Emphatic do', 'I do believe… · They did try.'],
      ['Writing use', 'Highlight the key point; correct a misconception'],
      ['Speaking use', 'What I like most is… · The thing is…']
    ],
    method: [
      { title: 'Form an it-cleft to focus on one element', body: '<p><i>It is / was</i> + the focused element + <i>that</i> (or <i>who</i> for people) + the rest of the sentence.</p>', example: '<i>Governments, not individuals, must act.</i> → <i><b>It is</b> governments, not individuals, <b>that</b> must act.</i>' },
      { title: 'Form a wh-cleft to build up to the focus', body: '<p><i>What</i> + clause + <i>is / was</i> + the focus (a noun phrase, a clause or a <i>to</i>-infinitive). The verb is singular after <i>What…</i>.</p>', example: '<i>We need better public transport.</i> → <i><b>What</b> we need <b>is</b> better public transport.</i> · <i>What happened <b>was</b> that the bank collapsed.</i>' },
      { title: 'Use other wh-words and "The reason why…"', body: '<p><i>The reason (why) … is that…; The place where… is…; The thing that… is…; All (that) … is…</i></p>', example: '<i><b>The reason why</b> many people rent <b>is that</b> deposits are too high.</i> (✗ <i>is because</i> – avoid in formal writing)' },
      { title: 'Use emphatic do to stress truth or contrast', body: '<p><i>do / does / did</i> + base form in a positive statement.</p>', example: '<i>Although the plan has critics, it <b>does</b> offer some benefits.</i>' },
      { title: 'Use clefts for a purpose, not as decoration', body: '<p>A cleft should highlight the point you most want the reader to notice – typically your main argument or a correction.</p>' }
    ],
    sections: [
      {
        id: 'examples', title: 'Clefts in IELTS',
        html: `
<ul>
<li><b>Task 2 thesis:</b> <i><b>What</b> is needed <b>is</b> not more roads but better public transport.</i></li>
<li><b>Correcting a misconception:</b> <i><b>It is not</b> the cost of food <b>that</b> causes obesity but the type of food that is cheapest.</i></li>
<li><b>Task 1:</b> <i><b>It was</b> in 2010 <b>that</b> sales reached their peak.</i> (use sparingly)</li>
<li><b>Speaking Part 2/3:</b> <i><b>What</b> I loved most about the trip <b>was</b> the food. · <b>The thing is</b>, most people can't afford it.</i></li>
</ul>`
      },
      {
        id: 'band-impact', title: 'How emphasis structures affect your band',
        html: `<p>Cleft sentences are complex structures that also improve coherence by signalling what matters. Accurate, purposeful use supports Band 7+ range. Typical errors are <i>The reason is because</i> (redundant) and wrong agreement (<i>What we need are…</i> is acceptable informally, but <i>is</i> is safer).</p>`
      }
    ],
    worked: [
      {
        title: 'Highlighting a key point',
        questions: '<ol><li>Parents, not teachers, have the greatest influence on children\'s reading habits.</li><li>Many people dislike the long commute most.</li><li>Young people leave rural areas because there are few jobs.</li></ol>',
        walk: [
          { q: '1.', a: 'It is parents, not teachers, who have the greatest influence on children\'s reading habits.', steps: ['It-cleft focusing on <i>parents</i>; <i>who</i> because the focus is people.'] },
          { q: '2.', a: 'What many people dislike most is the long commute.', steps: ['Wh-cleft builds up to <i>the long commute</i>.'] },
          { q: '3.', a: 'The main reason why young people leave rural areas is that there are few jobs.', steps: ['<i>The reason why… is that…</i> – not <i>is because</i>.'] }
        ],
        lesson: 'Choose the element you want to highlight, then choose the cleft that puts it in focus.'
      }
    ],
    dos: ['Use it-clefts to highlight one element.', 'Use What … is … to build up to your point.', 'Use The reason why … is that….', 'Use emphatic do for contrast.'],
    donts: ['Don\'t write "The reason is because".', 'Don\'t use clefts in every paragraph.', 'Don\'t forget "that/who" in it-clefts.'],
    careful: [{ title: 'Who or that?', body: '<p>After a person focus, both <i>who</i> and <i>that</i> are possible: <i>It was my grandmother who/that taught me.</i></p>' }],
    faq: [{ q: 'Are clefts informal?', a: '<p>No. Both it-clefts and wh-clefts are common in academic writing and in speech.</p>' }],
    exercises: {
      id: 'ch-grammar-emphasis-cleft',
      title: 'Chapter exercises: emphasis and cleft sentences',
      groups: [
        {
          kind: 'gap', instructions: 'Write <b>ONE WORD ONLY</b>.',
          questions: [
            { n: 1, q: '{} we need is a long-term plan.', a: 'What|All', x: 'Wh-cleft: <i>What we need is…</i> (or <i>All we need is…</i>).' },
            { n: 2, q: 'It was in 1969 {} humans first landed on the Moon.', a: 'that', x: 'It-cleft: <i>It was … that…</i>' },
            { n: 3, q: 'The reason why prices rose is {} demand doubled.', a: 'that', x: '<i>The reason why… is that…</i>' },
            { n: 4, q: 'I know the plan has faults, but it {} have some advantages.', a: 'does', x: 'Emphatic <i>do</i> for contrast.' }
          ]
        },
        {
          kind: 'choice', instructions: 'Choose the better sentence for formal writing, <b>A or B</b>.',
          questions: [
            { n: 5, q: 'Which is better for formal writing?', opts: ['The reason is because people work longer hours.', 'The reason is that people work longer hours.'], a: 'B', x: '<i>The reason is because</i> is redundant; use <i>that</i>.' },
            { n: 6, q: 'Which is better for formal writing?', opts: ['It is education that offers the best route out of poverty.', 'It is education offers the best route out of poverty.'], a: 'A', x: 'It-clefts need <i>that</i> (or <i>which/who</i>).' }
          ]
        }
      ]
    },
    checklist: ['I can form it-clefts and wh-clefts.', 'I use The reason why … is that….', 'I use emphatic do for contrast.'],
    summary: ['Cleft sentences highlight one part of a message.', 'It is X that…; What … is X.', 'The reason why … is that… (not because).', 'Use emphasis purposefully.'],
    references: [...grammarBooks, { title: 'Martin Hewings, Advanced Grammar in Use, 3rd edition (Cambridge University Press, 2013)', note: 'Units on cleft sentences and emphasis.' }, gra]
  },

  /* ===================================================================== GRAMMAR FOR WRITING */
  'grammar-for-writing': {
    intro: `
<p>This chapter brings the grammar masterclass together. It answers the question every IELTS candidate asks: <i>what grammar does the examiner actually want?</i> The answer is not "as many complex structures as possible". The Grammatical Range and Accuracy criterion asks about two things at once – <b>range</b> (how varied your structures are) and <b>accuracy</b> (how many of your sentences are error-free) – and, at the higher bands, about how <b>flexibly and naturally</b> you use them. A script full of ambitious structures that break down does not score well; neither does a script of perfectly accurate short sentences.</p>
<p>The target, then, is <b>controlled complexity</b>: a natural mix of simple and complex sentences, each one accurate, where every complex structure is there because it expresses the idea better. This chapter explains what that looks like at Bands 5 to 9, gives a step-by-step method for improving sentences, shows a weak paragraph turned into a strong one, and finishes with a proofreading checklist of the errors that cost candidates most.</p>`,
    facts: [
      ['Criterion', 'Grammatical Range and Accuracy – 25% of each Writing task'],
      ['Range', 'Variety of simple and complex structures'],
      ['Accuracy', 'Proportion of error-free sentences; punctuation'],
      ['Band 7 profile', 'A variety of complex structures; frequent error-free sentences'],
      ['Band 8–9 profile', 'Wide range used flexibly; most or nearly all sentences error-free'],
      ['Strategy', 'Controlled complexity, then proofread for your known errors']
    ],
    tests: `
<p>In plain terms, this is how grammar changes across the bands in the public descriptors (paraphrased – read the official wording in the sources):</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Band</th><th>Range</th><th>Accuracy</th></tr>
<tr><td>5</td><td>Limited; attempts at complex sentences are often inaccurate</td><td>Frequent errors, which may cause some difficulty for the reader; punctuation may be faulty</td></tr>
<tr><td>6</td><td>A mix of simple and complex forms</td><td>Some errors, but they rarely reduce communication</td></tr>
<tr><td>7</td><td>A variety of complex structures</td><td>Frequent error-free sentences; good control, with a few errors</td></tr>
<tr><td>8</td><td>A wide range of structures</td><td>The majority of sentences error-free; only occasional errors</td></tr>
<tr><td>9</td><td>A wide range used with full flexibility</td><td>Rare minor errors only</td></tr>
</table></div>
<p>Notice what moves a script from 6 to 7: not exotic grammar, but <b>more error-free sentences</b> and a <b>variety</b> of complex structures. Most Band 6 candidates already use complex sentences; they make too many mistakes in them.</p>`,
    method: [
      { title: 'Build on a secure base: accurate simple sentences', body: '<p>Before adding complexity, make sure the basics – agreement, articles, tense, plurals, word order – are reliable. These errors appear in every sentence type, so they affect your accuracy everywhere.</p>' },
      { title: 'Add complexity that serves the meaning', body: '<p>Use a complex structure when the relationship between ideas needs it: a reason (<i>because, since</i>), a concession (<i>although</i>), a condition (<i>if, unless</i>), extra information about a noun (relative clause), a result (participle clause). Each structure should make the idea clearer.</p>', example: '<i>Cars pollute. Many people still use them.</i> → <i>Although cars pollute, many people still use them because public transport is unreliable.</i>' },
      { title: 'Vary the type and the start of your sentences', body: '<p>Mix sentence types and openings: a subject, an adverbial, a dependent clause, a participle phrase. Variety over a paragraph is what the examiner notices, not one long sentence.</p>' },
      { title: 'Keep sentences readable', body: '<p>A sentence of 50 words with four clauses is a risk to accuracy and to clarity. If a sentence needs two re-readings, split it.</p>' },
      { title: 'Proofread for your own error pattern', body: '<p>Keep a list of your five most frequent errors (from teacher feedback or self-assessment) and check every sentence against it in the last 3–5 minutes of each task.</p>' }
    ],
    sections: [
      {
        id: 'toolkit', title: 'A toolkit of structures for Task 1 and Task 2',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Structure</th><th>Task 1 example</th><th>Task 2 example</th></tr>
<tr><td>Concession clause</td><td><i>Although sales fell in 2015, they recovered the following year.</i></td><td><i>Although technology saves time, it can isolate people.</i></td></tr>
<tr><td>Relative clause</td><td><i>Japan, which had the highest figure, …</i></td><td><i>Students who work part-time…</i></td></tr>
<tr><td>Participle clause</td><td><i>…, reaching a peak of 40%.</i></td><td><i>…, leaving many families without support.</i></td></tr>
<tr><td>Passive</td><td><i>The clay is then heated.</i></td><td><i>Stricter laws should be introduced.</i></td></tr>
<tr><td>Conditional</td><td>–</td><td><i>If public transport were cheaper, fewer people would drive.</i></td></tr>
<tr><td>Comparison</td><td><i>…almost twice as high as in 2000.</i></td><td><i>The more cities grow, the harder it becomes…</i></td></tr>
<tr><td>Nominalisation</td><td><i>There was a sharp rise in…</i></td><td><i>The closure of local shops…</i></td></tr>
<tr><td>Modal hedging</td><td><i>…is expected to rise.</i></td><td><i>This may partly explain…</i></td></tr>
<tr><td>Cleft</td><td>–</td><td><i>What is needed is…</i></td></tr>
</table></div>`
      },
      {
        id: 'improve', title: 'The sentence-improvement method',
        html: `
<ol>
<li><b>Combine choppy sentences</b> where the ideas are related: <i>Rents are high. Wages are low. Young people cannot save.</i> → <i>Because rents are high and wages are low, young people cannot save.</i></li>
<li><b>Untangle overloaded sentences</b> into two: a 60-word sentence with five clauses becomes two clear sentences.</li>
<li><b>Replace vague verbs and nouns</b> with precise ones: <i>make a lot of problems</i> → <i>cause serious problems</i>.</li>
<li><b>Swap repetition for reference</b>: <i>this trend, such policies, these measures</i>.</li>
<li><b>Fix the errors</b>, starting with the ones that recur.</li>
</ol>`
      },
      {
        id: 'proofread', title: 'Proofreading checklist: the costliest errors',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Check</th><th>Typical error</th><th>Chapter</th></tr>
<tr><td>Third-person -s and agreement</td><td><i>technology make, the number of cars are</i></td><td><a href="/grammar/agreement">Agreement</a></td></tr>
<tr><td>Articles and singular nouns</td><td><i>Government should…, the society</i></td><td><a href="/grammar/articles">Articles</a></td></tr>
<tr><td>Uncountable nouns</td><td><i>informations, researches</i></td><td><a href="/grammar/nouns">Nouns</a></td></tr>
<tr><td>Tense</td><td><i>has increased in 2010</i></td><td><a href="/grammar/present-perfect">Present perfect</a></td></tr>
<tr><td>Sentence boundaries</td><td><i>…, however it…</i>; fragments</td><td><a href="/grammar/punctuation">Punctuation</a></td></tr>
<tr><td>Linkers</td><td><i>Although …, but…; despite it is</i></td><td><a href="/grammar/conjunctions">Conjunctions</a></td></tr>
<tr><td>Verb patterns</td><td><i>suggest them to, avoid to</i></td><td><a href="/grammar/gerunds-infinitives">Gerunds and infinitives</a></td></tr>
<tr><td>Prepositions</td><td><i>discuss about, rose by (for "to")</i></td><td><a href="/grammar/prepositions">Prepositions</a></td></tr>
</table></div>`
      },
      {
        id: 'band-impact', title: 'Putting it together: what to aim for',
        html: `<div class="callout advice"><strong>A practical target</strong>In a Task 2 essay of about 280 words (roughly 14–18 sentences), aim for a natural mix: some short, clear sentences for topic sentences and emphasis, and a majority of complex sentences using several different structures. Above all, aim for most sentences to be error-free. There is no official quota of complex sentences; the examiner judges the overall impression of range and the proportion of accurate sentences.</div>`
      }
    ],
    worked: [
      {
        title: 'From Band 5–6 to Band 7+: rewriting a body paragraph',
        source: `<div class="prompt-box"><p><b>Question:</b> Some people think that the government should pay for university education. To what extent do you agree?</p><p><b>Original paragraph:</b> "Firstly, free university is good for society. Because more people can study. If university is free, poor students can go to university, they don't need to worry about money. For example in my country university is free and many student from poor family become doctor and engineer. So the society become more equal."</p></div>`,
        walk: [
          { q: 'Diagnosis', a: 'Simple range; frequent errors', steps: ['Fragment: <i>Because more people can study.</i>', 'Comma splice: <i>…go to university, they don\'t need…</i>', 'Agreement and plurals: <i>many student, poor family, become doctor, the society become</i>.', 'Article error: <i>the society</i> (general meaning).', 'Range: only short simple sentences and one basic conditional.'] },
          { q: 'Rewrite', a: '"The main benefit of free university education is that it widens access. If tuition is free, talented students from low-income families can study without the fear of debt that discourages many of them today. In my country, for example, where university has been free for decades, many doctors and engineers come from working-class backgrounds. As a result, society becomes more equal, because opportunity depends less on family wealth."', steps: ['Topic sentence with a noun-clause structure (<i>The main benefit… is that…</i>).', 'First conditional plus a relative clause (<i>debt that discourages…</i>).', 'A non-defining relative clause with present perfect (<i>where university has been free for decades</i>).', 'A result linker plus a reason clause.', 'Every sentence is error-free – that matters most.'] }
        ],
        lesson: 'The rewrite is not much longer and uses no exotic grammar. It gains through accurate complex sentences of several types, each serving the argument.'
      }
    ],
    dos: ['Aim for controlled complexity: accurate, varied, purposeful.', 'Combine related short sentences.', 'Split overloaded sentences.', 'Proofread for your own five most frequent errors.', 'Use the toolkit structures where they fit the meaning.'],
    donts: ['Don\'t chase complexity at the expense of accuracy.', 'Don\'t memorise "high-band" template sentences.', 'Don\'t write only simple sentences.', 'Don\'t leave proofreading out of your time plan.'],
    careful: [
      { title: 'The "complex but wrong" trap', body: '<p>A long sentence with an error is not better than a short correct one. Examiners count accuracy as well as range.</p>' },
      { title: 'Templates', body: '<p>Pre-learned sentences (<i>"It is an undeniable fact that…"</i>) do not show your own range and are often recognised as memorised.</p>' }
    ],
    faq: [
      { q: 'How many complex sentences do I need for Band 7?', a: '<p>There is no number in the descriptors. They describe "a variety of complex structures" and "frequent error-free sentences". In practice, most Band 7 essays use complex sentences in the majority of their sentences, with several different structures.</p>' },
      { q: 'Does punctuation count?', a: '<p>Yes – punctuation is part of Grammatical Range and Accuracy. Comma splices and missing full stops are errors.</p>' }
    ],
    exercises: {
      id: 'ch-grammar-for-writing',
      title: 'Chapter exercises: grammar for IELTS Writing',
      groups: [
        {
          kind: 'choice', title: 'Part A: which version is better for Band 7?', instructions: 'Choose <b>A, B or C</b>.',
          questions: [
            { n: 1, q: 'Which is the best combination of the ideas: "Cities are growing. Housing is expensive. Many young people live with their parents."?', opts: ['Cities are growing, housing is expensive, many young people live with their parents.', 'As cities grow and housing becomes more expensive, many young people are forced to live with their parents.', 'Cities are growing, which housing is expensive, so that young people live with parents.'], a: 'B', x: 'B uses an accurate time/cause clause and a precise verb. A is a run-on; C is ungrammatical.' },
            { n: 2, q: 'Which sentence is error-free?', opts: ['Although online learning is flexible, but it requires discipline.', 'Online learning is flexible, however it requires discipline.', 'Although online learning is flexible, it requires considerable discipline.'], a: 'C', x: 'A doubles the linker; B is a comma splice.' },
            { n: 3, q: 'Which shows the best range without loss of accuracy?', opts: ['The government should invest in public transport. It is good. People will use it.', 'The government should invest in public transport, which would encourage people to leave their cars at home.', 'The government should investing on public transport which encourage people leaving cars.'], a: 'B', x: 'B uses a modal and an accurate non-defining relative clause. C attempts the same but contains several errors.' }
          ]
        },
        {
          kind: 'gap', title: 'Part B: correct the error', instructions: 'Write the missing or corrected word. <b>ONE WORD ONLY</b>.',
          questions: [
            { n: 4, q: 'Technology {} (change) the way we communicate every day. (present simple)', a: 'changes', x: 'Singular subject: <i>changes</i>.' },
            { n: 5, q: 'The number of students studying abroad {} doubled since 2000.', a: 'has', x: '<i>The number of</i> + singular verb; <i>since</i> → present perfect.' },
            { n: 6, q: 'Many experts suggest {} governments should tax sugar.', a: 'that', x: '<i>suggest that</i> + clause.' },
            { n: 7, q: 'Cars are convenient. {}, they cause pollution.', a: 'However|Nevertheless', x: 'A linking adverb starts a new sentence, followed by a comma.' }
          ]
        }
      ]
    },
    checklist: ['I understand what range and accuracy mean in the descriptors.', 'I use several types of complex sentence accurately.', 'I combine choppy sentences and split overloaded ones.', 'I have a personal list of my five most frequent errors.', 'I proofread every essay against that list.'],
    summary: ['Grammatical Range and Accuracy rewards variety and the proportion of error-free sentences.', 'Band 6 → 7 is mainly about fewer errors in complex sentences.', 'Aim for controlled complexity: purposeful, varied, accurate.', 'Proofread for your known errors in the last minutes of each task.'],
    references: [gra, ...grammarBooks, { title: 'In this book: How Writing is marked', url: '/writing/band-descriptors' }, { title: 'In this book: Common grammar and word errors', url: '/grammar/common-errors' }]
  }
};

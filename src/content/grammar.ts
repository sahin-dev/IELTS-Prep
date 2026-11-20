import type { GrammarTopic } from '@/lib/types';

export const grammar: GrammarTopic[] = [
  {
    id: 'sentence-types', name: 'Sentence Types: Simple, Compound, Complex, Compound-Complex', short: 'The foundation of Grammatical Range – how to build every kind of sentence.',
    html: `
<p>To score Band 7+ in Grammatical Range & Accuracy, you need "a variety of complex structures" with "frequent error-free sentences". That starts with controlling the four sentence types.</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Type</th><th>Formula</th><th>Example</th></tr>
<tr><td>Simple</td><td>One independent clause (S + V)</td><td>Air pollution damages public health.</td></tr>
<tr><td>Compound</td><td>Independent clause + <b>FANBOYS</b> (for, and, nor, but, or, yet, so) + independent clause</td><td>Cars are convenient, <b>but</b> they pollute the air.</td></tr>
<tr><td>Complex</td><td>Independent clause + dependent clause (because, although, when, if, which, that...)</td><td><b>Although</b> cars are convenient, they pollute the air.</td></tr>
<tr><td>Compound-complex</td><td>2+ independent clauses + 1+ dependent clause</td><td><b>Although</b> cars are convenient, they pollute the air, <b>so</b> many cities are restricting their use.</td></tr>
</table></div>
<h3>1. Simple sentences – short, powerful, clear</h3>
<p>A simple sentence can still be sophisticated: <i>"The rapid expansion of private car ownership over the past two decades has led to severe congestion in most major cities."</i> (one clause, but a rich noun phrase).</p>
<div class="callout tip"><strong>Use simple sentences for:</strong>topic sentences, emphasis, and Task 1 overviews. Mix them with longer sentences for rhythm.</div>
<h3>2. Compound sentences – FANBOYS</h3>
<ul>
<li><b>and</b> (addition): <i>Tuition is free, <b>and</b> students receive a living allowance.</i></li>
<li><b>but / yet</b> (contrast): <i>The policy was popular, <b>yet</b> it failed.</i></li>
<li><b>so</b> (result): <i>Rents rose, <b>so</b> many families moved away.</i></li>
<li><b>or</b> (alternative): <i>Governments must act now, <b>or</b> the problem will worsen.</i></li>
<li><b>for</b> (reason – formal): <i>He was exhausted, <b>for</b> he had worked all night.</i></li>
<li><b>nor</b> (negative addition): <i>The plan is not cheap, <b>nor</b> is it popular.</i> (note inversion)</li>
</ul>
<p>Use a <b>comma before the conjunction</b> when it joins two full clauses. You can also join with a <b>semicolon</b>: <i>Coal use fell; gas use rose.</i> or semicolon + linker: <i>Coal use fell; <b>however,</b> gas use rose.</i></p>
<h3>3. Complex sentences – the key to Band 7</h3>
<p>A dependent (subordinate) clause cannot stand alone. Main types:</p>
<div class="table-wrap"><table class="data-table plain">
<tr><th>Function</th><th>Subordinators</th><th>Example</th></tr>
<tr><td>Contrast / concession</td><td>although, even though, while, whereas</td><td><b>While</b> some argue that zoos are cruel, others believe they protect species.</td></tr>
<tr><td>Reason</td><td>because, since, as</td><td>Many people move to cities <b>because</b> they want better jobs.</td></tr>
<tr><td>Condition</td><td>if, unless, provided that, as long as</td><td><b>Unless</b> emissions are reduced, temperatures will continue to rise.</td></tr>
<tr><td>Time</td><td>when, while, after, before, once, until, as soon as</td><td><b>Once</b> the olives have been washed, they are crushed.</td></tr>
<tr><td>Purpose</td><td>so that, in order that</td><td>Cities should build cycle lanes <b>so that</b> people can travel safely.</td></tr>
<tr><td>Relative (describing a noun)</td><td>who, which, that, where, whose</td><td>Students <b>who</b> work part-time often gain valuable skills.</td></tr>
<tr><td>Noun clause</td><td>that, what, whether, how</td><td><b>What</b> concerns many experts is the cost.</td></tr>
</table></div>
<p><b>Punctuation rule:</b> If the dependent clause comes <b>first</b>, use a comma. If it comes second, usually no comma (except with <i>whereas/while</i> for contrast).</p>
<p><i>"<b>Because</b> prices rose<b>,</b> demand fell."</i> &nbsp; vs &nbsp; <i>"Demand fell <b>because</b> prices rose."</i></p>
<h3>4. Compound-complex – advanced control</h3>
<p><i>"Although online learning offers flexibility, many students struggle with motivation, <b>and</b> those <b>who</b> lack a quiet place to study are particularly disadvantaged."</i></p>
<div class="callout warn"><strong>Don't overdo it</strong>Long sentences full of clauses become confusing and error-prone. Aim for a natural mix: roughly a third simple, a third compound and a third complex in Task 2.</div>`,
    exercises: [
      {
        kind: 'choice', instructions: 'Identify the type of each sentence.', questions: [
          { n: 1, q: 'Many young people move to cities in search of better job opportunities.', opts: ['Simple', 'Compound', 'Complex', 'Compound-complex'], a: 'A', x: 'One clause (subject "Many young people" + verb "move").' },
          { n: 2, q: 'Public transport is cheap, but it is often overcrowded.', opts: ['Simple', 'Compound', 'Complex', 'Compound-complex'], a: 'B', x: 'Two independent clauses joined by "but".' },
          { n: 3, q: 'Although public transport is cheap, many people prefer to drive.', opts: ['Simple', 'Compound', 'Complex', 'Compound-complex'], a: 'C', x: '"Although..." is a dependent clause + one independent clause.' },
          { n: 4, q: 'When the factory closed, hundreds of workers lost their jobs, and the town never fully recovered.', opts: ['Simple', 'Compound', 'Complex', 'Compound-complex'], a: 'D', x: 'Dependent clause (When...) + two independent clauses joined by "and".' },
          { n: 5, q: 'Students who study abroad often become more independent.', opts: ['Simple', 'Compound', 'Complex', 'Compound-complex'], a: 'C', x: 'Contains a relative clause "who study abroad" – a dependent clause.' }
        ]
      },
      {
        kind: 'choice', instructions: 'Choose the correct connector.', questions: [
          { n: 6, q: '______ the scheme was expensive, it was very successful.', opts: ['Despite', 'Although', 'However', 'But'], a: 'B', x: '"Although" + clause. "Despite" needs a noun/-ing; "However" starts a new sentence.' },
          { n: 7, q: 'Prices rose sharply; ______, demand remained strong.', opts: ['although', 'despite', 'nevertheless', 'because'], a: 'C', x: 'After a semicolon, use a sentence linker + comma: "; nevertheless,".' },
          { n: 8, q: 'The government should invest in public transport ______ fewer people need to drive.', opts: ['so that', 'because of', 'in spite of', 'whereas'], a: 'A', x: 'Purpose + clause → "so that".' }
        ]
      },
      {
        kind: 'open', instructions: 'Combine the sentences into ONE sentence of the type shown. Then compare with the model answer.', questions: [
          { n: 9, q: '<b>Complex:</b> Fast food is cheap. It is often unhealthy.', a: '<i>Although fast food is cheap, it is often unhealthy.</i> / <i>Fast food, which is cheap, is often unhealthy.</i>' },
          { n: 10, q: '<b>Compound:</b> Many people work from home. Office rents have fallen.', a: '<i>Many people work from home, so office rents have fallen.</i>' },
          { n: 11, q: '<b>Complex (relative clause):</b> Teachers have a huge influence on children. They should be paid more.', a: '<i>Teachers, who have a huge influence on children, should be paid more.</i>' },
          { n: 12, q: '<b>Compound-complex:</b> The city built a new metro. Traffic decreased. Air quality improved.', a: '<i>After the city built a new metro, traffic decreased, and air quality improved.</i>' }
        ]
      }
    ]
  },
  {
    id: 'clauses', name: 'Relative, Noun & Adverbial Clauses', short: 'Add detail and sophistication to your sentences.',
    html: `
<h3>Relative clauses</h3>
<div class="table-wrap"><table class="data-table">
<tr><th>Type</th><th>Use</th><th>Commas?</th><th>Example</th></tr>
<tr><td>Defining</td><td>Identifies which person/thing – essential information</td><td>No commas. "that" allowed.</td><td>The students <b>who/that</b> passed the exam were given certificates.</td></tr>
<tr><td>Non-defining</td><td>Adds extra information – can be removed</td><td>Commas. <b>No "that".</b></td><td>My brother, <b>who</b> lives in Paris, is a chef.</td></tr>
<tr><td>Sentential "which"</td><td>Comments on the whole previous clause</td><td>Comma</td><td>Rents have doubled, <b>which</b> means many people cannot afford homes.</td></tr>
</table></div>
<p><b>Relative pronouns:</b> <i>who</i> (people), <i>which</i> (things), <i>that</i> (defining only), <i>whose</i> (possession), <i>where</i> (place), <i>when</i> (time), <i>whom</i> (formal object), <i>in which / by which</i> (formal).</p>
<p class="example">A country <b>whose</b> economy depends on tourism... / The year <b>in which</b> the law was passed... / The process <b>by which</b> paper is recycled...</p>
<h3>Reduced relative clauses</h3>
<p>Shorten clauses with participles: <i>People <s>who are</s> living in cities</i> → <i>People <b>living</b> in cities</i>; <i>The data <s>which was</s> collected in 2020</i> → <i>The data <b>collected</b> in 2020</i>.</p>
<h3>Noun clauses</h3>
<p>A noun clause acts as the subject or object of a sentence.</p>
<ul>
<li><b>That</b>-clause: <i><b>That</b> education is important</i> is undeniable. / It is undeniable <b>that</b> education is important.</li>
<li><b>Wh</b>-clause: <i><b>What</b> worries parents most</i> is online safety. / Nobody knows <b>how</b> the problem started.</li>
<li><b>Whether</b>-clause: The question is <b>whether</b> the benefits outweigh the costs.</li>
</ul>
<h3>Adverbial clauses</h3>
<p>Time (<i>when, as soon as, by the time</i>), reason (<i>because, since</i>), concession (<i>although, even if</i>), purpose (<i>so that</i>), result (<i>so... that, such... that</i>), manner (<i>as if</i>).</p>
<p class="example">The traffic was <b>so</b> heavy <b>that</b> we missed the flight. / It was <b>such</b> a heavy storm <b>that</b> schools closed.</p>`,
    exercises: [
      {
        kind: 'choice', instructions: 'Choose the correct option.', questions: [
          { n: 1, q: 'The city ______ I grew up has changed dramatically.', opts: ['which', 'where', 'who', 'whose'], a: 'B', x: 'Place → where (or "in which").' },
          { n: 2, q: 'My manager, ______ is from Canada, speaks four languages.', opts: ['that', 'which', 'who', 'whom'], a: 'C', x: 'Non-defining clause about a person: "who". "That" is never used with commas.' },
          { n: 3, q: 'Farmers ______ crops were destroyed received compensation.', opts: ['who', 'whose', 'which', 'whom'], a: 'B', x: 'Possession → whose.' },
          { n: 4, q: 'Many people now shop online, ______ has led to the closure of high-street stores.', opts: ['that', 'what', 'which', 'it'], a: 'C', x: 'Sentential relative clause: ", which" refers to the whole idea.' },
          { n: 5, q: '______ the government should do is invest in renewable energy.', opts: ['That', 'What', 'Which', 'It'], a: 'B', x: 'Noun clause as subject: "What the government should do..."' },
          { n: 6, q: 'It was ______ an interesting lecture that nobody left early.', opts: ['so', 'such', 'too', 'very'], a: 'B', x: '"such + (a) + adjective + noun + that". "so" is used with an adjective alone: "so interesting that".' }
        ]
      },
      {
        kind: 'gap', instructions: 'Reduce the relative clause using a participle. Type only the missing word.', questions: [
          { n: 7, q: 'Children <s>who spend</s> {} too much time online may sleep badly.', a: 'spending', x: 'Active → present participle (-ing).' },
          { n: 8, q: 'The houses <s>that were built</s> {} in the 1960s are being demolished.', a: 'built', x: 'Passive → past participle.' }
        ]
      }
    ]
  },
  {
    id: 'conditionals', name: 'Conditionals (0, 1, 2, 3, Mixed & Alternatives)', short: 'Essential for Task 2 arguments and Speaking Part 3 speculation.',
    html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Type</th><th>Use</th><th>Form</th><th>Example</th></tr>
<tr><td>Zero</td><td>General truths</td><td>If + present, present</td><td>If water reaches 100°C, it boils.</td></tr>
<tr><td>First</td><td>Real/likely future</td><td>If + present, will + verb</td><td>If the government raises taxes, people will spend less.</td></tr>
<tr><td>Second</td><td>Hypothetical / unlikely present-future</td><td>If + past simple, would + verb</td><td>If university were free, more students would apply.</td></tr>
<tr><td>Third</td><td>Imaginary past (regret)</td><td>If + past perfect, would have + V3</td><td>If the city had invested earlier, the crisis would have been avoided.</td></tr>
<tr><td>Mixed</td><td>Past condition → present result</td><td>If + past perfect, would + verb</td><td>If I had studied medicine, I would be a doctor now.</td></tr>
</table></div>
<h3>Advanced alternatives to "if" (Band 7+)</h3>
<ul>
<li><b>Unless</b> = if not: <i>Unless action is taken, the problem will worsen.</i></li>
<li><b>Provided (that) / As long as</b>: <i>The scheme will succeed provided that it is well funded.</i></li>
<li><b>Were to</b> (very hypothetical): <i>If the government were to ban cars, ...</i></li>
<li><b>Inversion</b> (formal): <i><b>Were</b> the government to ban cars, ...</i> / <i><b>Had</b> they acted sooner, ...</i> / <i><b>Should</b> you need help, ...</i></li>
<li><b>Otherwise</b>: <i>Governments must act now; otherwise, it will be too late.</i></li>
<li><b>Without / But for</b> + noun: <i>Without public funding, many museums would close.</i></li>
</ul>
<div class="callout warn"><strong>Common error</strong>Never use "will" or "would" in the if-clause: ✘ <i>If people will recycle more...</i> → ✔ <i>If people recycle more...</i></div>`,
    exercises: [
      {
        kind: 'gap', instructions: 'Complete with the correct form of the verb in brackets. Type the missing words only.', questions: [
          { n: 1, q: 'If governments {} (invest) more in public transport, congestion will decrease.', a: 'invest', x: 'First conditional: if + present simple.' },
          { n: 2, q: 'If I {} (be) the mayor, I would ban cars from the city centre.', a: 'were|was', x: 'Second conditional: "were" is preferred in formal English.' },
          { n: 3, q: 'If the company had listened to its customers, it {} (not lose) so much money.', a: 'would not have lost|wouldn\'t have lost', x: 'Third conditional: would have + past participle.' },
          { n: 4, q: '{} (Have) they known about the risks, they would have acted differently.', a: 'Had', x: 'Inverted third conditional: Had + subject + V3.' },
          { n: 5, q: 'If she had accepted the job in London, she {} (live) there now.', a: 'would live|would be living', x: 'Mixed conditional: past condition → present result.' }
        ]
      },
      {
        kind: 'choice', instructions: 'Choose the best option.', questions: [
          { n: 6, q: '______ there is a significant change in policy, emissions will continue to rise.', opts: ['If', 'Unless', 'Provided', 'Otherwise'], a: 'B', x: 'Unless = if there is not.' },
          { n: 7, q: 'The project will go ahead ______ enough funding is secured.', opts: ['unless', 'provided that', 'otherwise', 'even'], a: 'B', x: 'Positive condition: provided that.' },
          { n: 8, q: '______ you require further information, please contact our office.', opts: ['Should', 'Would', 'Had', 'Were'], a: 'A', x: 'Formal inversion (first conditional): Should you require...' }
        ]
      }
    ]
  },
  {
    id: 'passive', name: 'The Passive Voice', short: 'Essential for process diagrams, maps and formal, objective writing.',
    html: `
<p>Form: <b>be (in the correct tense) + past participle (V3)</b>. Use it when the action matters more than who does it, or the doer is unknown/obvious.</p>
<div class="table-wrap"><table class="data-table plain">
<tr><th>Tense</th><th>Active</th><th>Passive</th></tr>
<tr><td>Present simple</td><td>Workers collect the leaves.</td><td>The leaves <b>are collected</b>.</td></tr>
<tr><td>Present continuous</td><td>They are building a bridge.</td><td>A bridge <b>is being built</b>.</td></tr>
<tr><td>Past simple</td><td>The council built a school.</td><td>A school <b>was built</b>.</td></tr>
<tr><td>Present perfect</td><td>They have closed the factory.</td><td>The factory <b>has been closed</b>.</td></tr>
<tr><td>Past perfect</td><td>They had cleared the forest by 2010.</td><td>The forest <b>had been cleared</b> by 2010.</td></tr>
<tr><td>Future</td><td>They will open a park.</td><td>A park <b>will be opened</b>.</td></tr>
<tr><td>Modal</td><td>We should reduce taxes.</td><td>Taxes <b>should be reduced</b>.</td></tr>
</table></div>
<h3>Where to use it in IELTS</h3>
<ul><li><b>Task 1 processes:</b> <i>The clay <b>is shaped</b> into bricks, which <b>are</b> then <b>dried</b>.</i></li>
<li><b>Task 1 maps:</b> <i>The trees <b>were cut down</b> and a car park <b>was built</b>.</i></li>
<li><b>Task 2 (impersonal passive):</b> <i><b>It is widely believed that</b>...; <b>It has been argued that</b>...; Smoking <b>is known to</b> cause cancer.</i></li></ul>
<div class="callout warn"><strong>Intransitive verbs have no passive</strong>✘ <i>The accident was happened</i> → ✔ <i>The accident happened.</i> Same for: occur, rise, fall, arrive, appear, die, remain.</div>`,
    exercises: [
      {
        kind: 'gap', instructions: 'Rewrite in the passive. Type the missing passive verb.', questions: [
          { n: 1, q: 'Workers pick the grapes by hand. → The grapes {} by hand.', a: 'are picked', x: 'Present simple passive.' },
          { n: 2, q: 'The council demolished the old library in 2015. → The old library {} in 2015.', a: 'was demolished', x: 'Past simple passive.' },
          { n: 3, q: 'They have converted the factory into apartments. → The factory {} into apartments.', a: 'has been converted', x: 'Present perfect passive.' },
          { n: 4, q: 'The government will introduce a new tax next year. → A new tax {} next year.', a: 'will be introduced', x: 'Future passive.' },
          { n: 5, q: 'People believe that exercise improves memory. → It {} that exercise improves memory.', a: 'is believed', x: 'Impersonal passive – very useful in Task 2.' }
        ]
      },
      {
        kind: 'choice', instructions: 'Which sentence is correct?', questions: [
          { n: 6, q: 'Choose the correct sentence.', opts: ['Unemployment was risen in 2010.', 'Unemployment rose in 2010.', 'Unemployment was rose in 2010.', 'Unemployment has risen in 2010.'], a: 'B', x: '"Rise" is intransitive – no passive. Present perfect cannot be used with a finished time (2010).' },
          { n: 7, q: 'Choose the correct sentence for a process description.', opts: ['Then the bottles crushed.', 'Then the bottles are crushed.', 'Then the bottles are crush.', 'Then the bottles is crushed.'], a: 'B', x: 'be + past participle with a plural subject.' }
        ]
      }
    ]
  },
  {
    id: 'tenses', name: 'Tenses for IELTS Writing & Speaking', short: 'Choose the correct tense for charts, trends, projections and personal stories.',
    html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Situation</th><th>Tense</th><th>Example</th></tr>
<tr><td>Task 1: past data</td><td>Past simple</td><td>Sales rose from 10% to 20% between 2000 and 2010.</td></tr>
<tr><td>Task 1: "by" a past year</td><td>Past perfect</td><td>By 2010, sales <b>had doubled</b>.</td></tr>
<tr><td>Task 1: future projections</td><td>will / is expected to / is predicted to</td><td>The figure <b>is projected to reach</b> 60% by 2040.</td></tr>
<tr><td>Task 1: "by" a future year</td><td>Future perfect</td><td>By 2050, the population <b>will have doubled</b>.</td></tr>
<tr><td>Task 1: no time (e.g. a single year now / process)</td><td>Present simple</td><td>Women spend more time on housework than men.</td></tr>
<tr><td>Task 2: trends up to now</td><td>Present perfect</td><td>Technology <b>has transformed</b> the way we work.</td></tr>
<tr><td>Task 2: general truths</td><td>Present simple</td><td>Exercise <b>reduces</b> stress.</td></tr>
<tr><td>Speaking: past habits</td><td>used to / would</td><td>I <b>used to</b> play football every weekend.</td></tr>
<tr><td>Speaking: experience</td><td>Present perfect</td><td>I<b>'ve</b> never <b>been</b> to Japan.</td></tr>
<tr><td>Speaking Part 2 story</td><td>Past simple + past continuous + past perfect</td><td>I <b>was walking</b> home when I <b>saw</b> a man who I <b>had met</b> years before.</td></tr>
</table></div>
<div class="callout"><strong>Present perfect vs past simple</strong>Use past simple with finished time (in 2010, last year, ago). Use present perfect with unfinished time or no specific time (since 2010, recently, over the last decade).</div>`,
    exercises: [
      {
        kind: 'choice', instructions: 'Choose the correct tense.', questions: [
          { n: 1, q: 'Between 1990 and 2000, the number of cars ______ significantly.', opts: ['has increased', 'increased', 'increases', 'had been increasing'], a: 'B', x: 'Finished past period → past simple.' },
          { n: 2, q: 'By 2015, the population of the city ______ to 5 million.', opts: ['grew', 'has grown', 'had grown', 'grows'], a: 'C', x: '"By + past year" → past perfect.' },
          { n: 3, q: 'Over the last two decades, the internet ______ communication.', opts: ['transformed', 'has transformed', 'transforms', 'had transformed'], a: 'B', x: '"Over the last two decades" (up to now) → present perfect.' },
          { n: 4, q: 'The number of electric cars ______ to exceed petrol cars by 2035.', opts: ['is predicted', 'predicted', 'has predicted', 'was predicting'], a: 'A', x: 'Future projection: "is predicted to".' },
          { n: 5, q: 'When I was a child, I ______ spend every summer at my grandparents\' farm.', opts: ['use to', 'used to', 'was used to', 'am used to'], a: 'B', x: 'Past habit: used to + verb.' },
          { n: 6, q: 'By 2050, global temperatures ______ by at least 1.5°C.', opts: ['will rise', 'will have risen', 'have risen', 'rose'], a: 'B', x: '"By + future year" → future perfect.' }
        ]
      }
    ]
  },
  {
    id: 'comparatives', name: 'Comparatives, Superlatives & Comparison Structures', short: 'Accurate comparison language for Task 1 and Task 2.',
    html: `
<ul>
<li><b>Short adjectives:</b> cheap → cheap<b>er</b> → the cheap<b>est</b>; big → bigger; easy → easier</li>
<li><b>Long adjectives:</b> expensive → <b>more</b> expensive → <b>the most</b> expensive</li>
<li><b>Irregular:</b> good → better → best; bad → worse → worst; far → further → furthest; many/much → more → most; little → less → least</li>
<li><b>Fewer</b> (countable) vs <b>less</b> (uncountable): <i>fewer cars, less traffic</i></li>
</ul>
<h3>Advanced comparison structures</h3>
<ul>
<li><b>Modifiers:</b> <i>slightly / a little / considerably / significantly / far / much</i> + comparative: <i>far higher than</i></li>
<li><b>as... as:</b> <i>Cycling is <b>as</b> popular <b>as</b> swimming.</i> / <i>not <b>nearly as</b> popular as</i></li>
<li><b>Multiples:</b> <i>twice <b>as</b> many <b>as</b>, three times <b>as</b> much <b>as</b>, three times higher than</i></li>
<li><b>The + comparative, the + comparative:</b> <i><b>The more</b> people drive, <b>the worse</b> air quality becomes.</i></li>
<li><b>Superlative + of / in:</b> <i>the highest <b>of</b> the five countries; the largest city <b>in</b> the world</i></li>
<li><b>Second/third + superlative:</b> <i>the second most popular activity</i></li>
</ul>`,
    exercises: [
      {
        kind: 'gap', instructions: 'Type the correct word(s).', questions: [
          { n: 1, q: 'Women spent {} (little) time on sport than men.', a: 'less', x: 'little → less.' },
          { n: 2, q: 'There were {} (few) visitors in 2020 than in 2019.', a: 'fewer', x: 'Countable (visitors) → fewer.' },
          { n: 3, q: 'The more you practise, the {} (good) your English becomes.', a: 'better', x: 'The + comparative, the + comparative.' },
          { n: 4, q: 'Housing was the {} (expensive) category of all.', a: 'most expensive', x: 'Long adjective superlative.' },
          { n: 5, q: 'Men were twice {} likely as women to play football.', a: 'as', x: 'twice as + adjective + as.' }
        ]
      }
    ]
  },
  {
    id: 'articles', name: 'Articles & Countable/Uncountable Nouns', short: 'Small words, big accuracy gains – one of the most frequent error areas.',
    html: `
<div class="table-wrap"><table class="data-table plain">
<tr><th>Article</th><th>Use</th><th>Example</th></tr>
<tr><td><b>a / an</b></td><td>First mention, singular countable, one of many</td><td>The city built <b>a</b> new hospital.</td></tr>
<tr><td><b>the</b></td><td>Already mentioned / unique / specific / superlatives / some countries & geography</td><td><b>The</b> hospital opened in 2020. <b>the</b> highest, <b>the</b> UK, <b>the</b> USA, <b>the</b> Amazon</td></tr>
<tr><td><b>Ø (no article)</b></td><td>General plural or uncountable nouns</td><td><b>Ø</b> Children need <b>Ø</b> education. <b>Ø</b> Pollution is a problem.</td></tr>
</table></div>
<h3>Uncountable nouns often misused in IELTS</h3>
<p><span class="word-chip">information</span><span class="word-chip">advice</span><span class="word-chip">research</span><span class="word-chip">equipment</span><span class="word-chip">knowledge</span><span class="word-chip">evidence</span><span class="word-chip">furniture</span><span class="word-chip">traffic</span><span class="word-chip">pollution</span><span class="word-chip">accommodation</span><span class="word-chip">luggage</span><span class="word-chip">progress</span><span class="word-chip">homework</span><span class="word-chip">employment</span><span class="word-chip">transport</span><span class="word-chip">leisure</span></p>
<p>✘ <i>informations, advices, researches, an advice</i> → ✔ <i>information, a piece of advice, some research, a study</i></p>
<div class="callout"><strong>General statements in Task 2</strong>Use plural without "the": <i><b>Ø</b> Teenagers spend too much time on <b>Ø</b> social media.</i> Using "the teenagers" would mean a specific group.</div>`,
    exercises: [
      {
        kind: 'choice', instructions: 'Choose the correct option (– means no article).', questions: [
          { n: 1, q: '______ education is the key to reducing poverty.', opts: ['The', 'An', '–', 'A'], a: 'C', x: 'General uncountable noun → no article.' },
          { n: 2, q: 'Japan has one of ______ highest life expectancies in the world.', opts: ['a', 'the', '–', 'an'], a: 'B', x: 'Superlative → the.' },
          { n: 3, q: 'The teacher gave me some useful ______.', opts: ['advices', 'advice', 'an advice', 'advise'], a: 'B', x: 'Advice is uncountable; "advise" is the verb.' },
          { n: 4, q: 'Scientists have carried out ______ into the effects of sleep.', opts: ['a research', 'researches', 'research', 'the researches'], a: 'C', x: 'Research is uncountable. You can say "a study" or "studies".' },
          { n: 5, q: 'She moved to ______ United States in 2019.', opts: ['–', 'the', 'a', 'an'], a: 'B', x: 'Countries with "States/Kingdom/Republic" take "the".' },
          { n: 6, q: 'There is too much ______ in the city centre.', opts: ['traffics', 'traffic', 'a traffic', 'the traffics'], a: 'B', x: 'Traffic is uncountable.' }
        ]
      }
    ]
  },
  {
    id: 'agreement', name: 'Subject–Verb Agreement', short: 'A frequent Task 1 error: "The number of... is / are?"',
    html: `
<ul>
<li><b>The number of</b> + plural noun + <b>singular verb</b>: <i>The number of students <b>has</b> increased.</i></li>
<li><b>A number of</b> (= several) + plural noun + <b>plural verb</b>: <i>A number of students <b>have</b> complained.</i></li>
<li><b>The percentage/proportion of</b> + noun → <b>singular</b>: <i>The proportion of women <b>was</b> 40%.</i></li>
<li><b>Percentage + of + noun</b> → verb agrees with the noun: <i>40% of the population <b>lives</b>... / 40% of people <b>live</b>...</i></li>
<li><b>Each / every / everyone / nobody</b> → singular: <i>Every student <b>has</b> a laptop.</i></li>
<li><b>Gerund subjects</b> → singular: <i>Watching films <b>helps</b> me relax.</i></li>
<li><b>Long subjects</b>: find the head noun: <i>The impact of new technologies on young people <b>is</b> significant.</i></li>
<li><b>Neither... nor / either... or</b> → verb agrees with the nearer subject.</li>
</ul>`,
    exercises: [
      {
        kind: 'choice', instructions: 'Choose the correct verb.', questions: [
          { n: 1, q: 'The number of tourists ______ doubled since 2010.', opts: ['have', 'has'], a: 'B', x: '"The number" is the subject → singular.' },
          { n: 2, q: 'A number of problems ______ been identified.', opts: ['has', 'have'], a: 'B', x: '"A number of" = several → plural.' },
          { n: 3, q: 'The proportion of adults who smoke ______ fallen.', opts: ['has', 'have'], a: 'A', x: 'Head noun "proportion" → singular.' },
          { n: 4, q: 'Using public transport ______ cheaper than driving.', opts: ['is', 'are'], a: 'A', x: 'Gerund subject → singular.' },
          { n: 5, q: 'The effects of climate change on agriculture ______ already visible.', opts: ['is', 'are'], a: 'B', x: 'Head noun "effects" → plural.' },
          { n: 6, q: 'Every one of the participants ______ a certificate.', opts: ['receive', 'receives'], a: 'B', x: '"Every one" → singular.' }
        ]
      }
    ]
  },
  {
    id: 'advanced', name: 'Advanced Structures for Band 7–9', short: 'Participle clauses, inversion, cleft sentences, nominalisation, modals of speculation.',
    html: `
<h3>1. Participle clauses</h3>
<p>Combine ideas concisely. <i><b>Having finished</b> the course, she applied for jobs.</i> / <i><b>Faced with</b> rising costs, many families moved away.</i> / <i><b>Located</b> in the city centre, the hotel is popular.</i></p>
<h3>2. Inversion for emphasis (formal)</h3>
<ul><li><i><b>Not only does</b> exercise improve health, <b>but it also</b> reduces stress.</i></li>
<li><i><b>Rarely have</b> we seen such rapid change.</i> / <i><b>Never before has</b> technology advanced so quickly.</i></li>
<li><i><b>Only by</b> investing in education <b>can</b> we reduce inequality.</i></li>
<li><i><b>Seldom do</b> politicians admit their mistakes.</i></li></ul>
<h3>3. Cleft sentences (focus)</h3>
<ul><li><i><b>It is</b> the cost of housing <b>that</b> worries young people most.</i></li>
<li><i><b>What</b> young people need <b>is</b> affordable housing.</i></li>
<li><i><b>The reason why</b> many people move to cities <b>is that</b>...</i></li></ul>
<h3>4. Nominalisation (academic style)</h3>
<p>Turn verbs/adjectives into nouns for a more formal, dense style:</p>
<div class="table-wrap"><table class="data-table plain"><tr><th>Less formal</th><th>Nominalised</th></tr>
<tr><td>If the government invests more in schools...</td><td><b>Greater government investment</b> in schools...</td></tr>
<tr><td>Because prices rose rapidly...</td><td><b>Due to the rapid rise</b> in prices...</td></tr>
<tr><td>People are becoming more aware that...</td><td>There is <b>growing awareness</b> that...</td></tr></table></div>
<h3>5. Modals for speculation & deduction</h3>
<ul><li>Present: <i>This <b>may/might/could</b> lead to...; It <b>must</b> be difficult...; That <b>can't</b> be true.</i></li>
<li>Past: <i>The ancient people <b>might have used</b> the site for ceremonies. They <b>must have</b> worked very hard.</i></li>
<li>Advice/obligation: <i>Governments <b>ought to</b>...; Schools <b>should have</b> acted earlier.</i></li></ul>
<h3>6. Concessive & emphatic structures</h3>
<p><i><b>However</b> hard they try, ...; <b>Much as</b> I admire his work, ...; <b>Whatever</b> the reason, ...; <b>Even if</b> taxes were raised, ...</i></p>`,
    exercises: [
      {
        kind: 'gap', instructions: 'Complete each sentence with ONE word.', questions: [
          { n: 1, q: 'Not only {} recycling reduce waste, but it also saves energy.', a: 'does', x: 'Inversion after "Not only": does + subject + verb.' },
          { n: 2, q: '{} been warned about the risks, the company went ahead anyway.', a: 'Having', x: 'Perfect participle clause.' },
          { n: 3, q: 'It is the high cost of living {} drives people out of cities.', a: 'that', x: 'Cleft sentence: It is X that...' },
          { n: 4, q: 'Never before {} so many people lived in cities.', a: 'have', x: 'Inversion: Never before + have + subject + V3.' },
          { n: 5, q: 'The ancient Egyptians must {} used ramps to build the pyramids.', a: 'have', x: 'Past deduction: must have + V3.' }
        ]
      },
      {
        kind: 'open', instructions: 'Rewrite using the structure given, then compare with the model.', questions: [
          { n: 6, q: '<b>Nominalisation:</b> "Because the population grew rapidly, there was a housing shortage."', a: '<i>Rapid population growth led to a housing shortage.</i> / <i>Due to rapid population growth, there was a housing shortage.</i>' },
          { n: 7, q: '<b>Cleft (What...):</b> "Young people need more practical skills."', a: '<i>What young people need is more practical skills.</i>' },
          { n: 8, q: '<b>Inversion (Only by...):</b> "We can solve this problem only by working together."', a: '<i>Only by working together can we solve this problem.</i>' }
        ]
      }
    ]
  },
  {
    id: 'punctuation', name: 'Punctuation & Sentence Boundaries', short: 'Avoid run-on sentences and comma splices – they cost Band 6+ candidates marks.',
    html: `
<h3>The comma splice (very common error)</h3>
<p>✘ <i>Many people own cars, this causes pollution.</i> (two independent clauses joined by only a comma)</p>
<p>Fix it in four ways:</p>
<ol><li>Full stop: <i>Many people own cars. This causes pollution.</i></li>
<li>Conjunction: <i>Many people own cars, <b>and</b> this causes pollution.</i></li>
<li>Semicolon: <i>Many people own cars; this causes pollution.</i></li>
<li>Relative clause: <i>Many people own cars, <b>which</b> causes pollution.</i></li></ol>
<h3>Linkers and commas</h3>
<p><b>However, Therefore, Moreover, In addition</b> are NOT conjunctions – they cannot join two clauses with a comma.</p>
<p>✘ <i>It is expensive, however it is popular.</i> → ✔ <i>It is expensive. However, it is popular.</i> / <i>It is expensive; however, it is popular.</i></p>
<h3>Other key rules</h3>
<ul><li>Comma after an introductory clause/phrase: <i>In conclusion, ... / Although..., ...</i></li>
<li>Commas around non-defining relative clauses: <i>London, which is the capital, ...</i></li>
<li>No comma between subject and verb: ✘ <i>The main problem with cities, is pollution.</i></li>
<li>Apostrophes: <i>the company's profits</i> (one company), <i>the companies' profits</i> (several), <i>its</i> (possessive) vs <i>it's</i> (it is).</li></ul>`,
    exercises: [
      {
        kind: 'choice', instructions: 'Choose the correctly punctuated sentence.', questions: [
          { n: 1, q: '', opts: ['Prices rose, however demand stayed high.', 'Prices rose; however, demand stayed high.', 'Prices rose however, demand stayed high.', 'Prices rose, however, demand stayed high.'], a: 'B', x: '"However" between two clauses needs a semicolon before and a comma after (or a full stop).' },
          { n: 2, q: '', opts: ['Although it was raining we went out.', 'Although it was raining, we went out.', 'Although, it was raining we went out.', 'Although it was raining; we went out.'], a: 'B', x: 'Dependent clause first → comma before the main clause.' },
          { n: 3, q: '', opts: ['The city has grown rapidly, this has caused traffic problems.', 'The city has grown rapidly, which has caused traffic problems.', 'The city has grown rapidly which, has caused traffic problems.', 'The city, has grown rapidly which has caused traffic problems.'], a: 'B', x: 'Option A is a comma splice; B uses a sentential relative clause correctly.' },
          { n: 4, q: '', opts: ['The company increased it\'s profits.', 'The company increased its profits.', 'The company increased its\' profits.', 'The company increased their\'s profits.'], a: 'B', x: 'Possessive "its" has no apostrophe.' }
        ]
      }
    ]
  },
  {
    id: 'paraphrasing', name: 'Paraphrasing Techniques', short: 'The single most important skill across all four IELTS papers.',
    html: `
<p>Paraphrasing means expressing the same meaning in different words. You need it to write introductions (Writing), to recognise answers (Reading & Listening) and to avoid repetition (Speaking).</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Technique</th><th>Original</th><th>Paraphrase</th></tr>
<tr><td>1. Synonyms</td><td>Many people believe that <b>children</b> should <b>learn</b> a <b>foreign language</b>.</td><td>Many people believe that <b>youngsters</b> should <b>study</b> a <b>second language</b>.</td></tr>
<tr><td>2. Word form</td><td>Technology has <b>developed</b> rapidly.</td><td>There has been rapid technological <b>development</b>.</td></tr>
<tr><td>3. Active ↔ passive</td><td>The government should <b>ban</b> smoking.</td><td>Smoking should <b>be banned</b> by the government.</td></tr>
<tr><td>4. Change word order / clause</td><td>Because of pollution, cities are unhealthy.</td><td>Cities are unhealthy <b>because</b> they are polluted.</td></tr>
<tr><td>5. Positive ↔ negative</td><td>Few people can afford a house.</td><td><b>Most</b> people <b>cannot</b> afford a house.</td></tr>
<tr><td>6. General ↔ specific</td><td>Some people think <b>sport</b> is important.</td><td>Some people think <b>activities such as football and swimming</b> are important.</td></tr>
</table></div>
<div class="callout tip"><strong>Combine 2–3 techniques</strong>"Some people think that governments should spend money on public services rather than the arts." → "<i>It is sometimes argued that public funds would be better spent on services such as healthcare and transport than on cultural activities.</i>"</div>
<div class="callout warn"><strong>Don't change keywords that have no true synonym</strong>e.g. <i>university, internet, government</i> – changing them can alter the meaning. Keep these and paraphrase the structure around them.</div>`,
    exercises: [
      {
        kind: 'open', instructions: 'Paraphrase each sentence using at least two techniques. Then compare with the model.', questions: [
          { n: 1, q: 'The number of people living in cities has increased dramatically.', a: '<i>There has been a dramatic rise in the urban population.</i>' },
          { n: 2, q: 'Some people think that the government should pay for university education.', a: '<i>It is believed by some that higher education should be funded by the state.</i>' },
          { n: 3, q: 'Children spend too much time playing computer games.', a: '<i>Youngsters devote excessive amounts of time to video games.</i>' },
          { n: 4, q: 'The graph shows how much water was used in three countries between 2000 and 2020.', a: '<i>The line graph illustrates water consumption in three nations over a twenty-year period beginning in 2000.</i>' }
        ]
      },
      {
        kind: 'choice', instructions: 'Which is the best paraphrase?', questions: [
          { n: 5, q: '"Few students can afford to live in the city centre."', opts: ['Many students live in the city centre.', 'Most students cannot afford city-centre accommodation.', 'Students like living in the city centre.', 'Few students want to live in the city centre.'], a: 'B', x: 'Positive ↔ negative switch preserving meaning. D changes meaning (want vs afford).' },
          { n: 6, q: '"Air pollution is causing serious health problems."', opts: ['Serious health problems are caused by air.', 'Poor air quality is leading to significant health issues.', 'Health is a serious problem caused by pollution.', 'Pollution is a serious health.'], a: 'B', x: 'Synonyms (poor air quality, leading to, significant issues) with the same meaning.' }
        ]
      }
    ]
  },
  {
    id: 'common-errors', name: 'Common IELTS Grammar & Word Errors', short: 'The mistakes examiners see most – fix them once and for all.',
    html: `
<div class="table-wrap"><table class="data-table plain">
<tr><th>✘ Incorrect</th><th>✔ Correct</th><th>Rule</th></tr>
<tr><td>People is...</td><td>People <b>are</b>...</td><td>"People" is plural.</td></tr>
<tr><td>In nowadays...</td><td><b>Nowadays</b>, / These days,</td><td>No preposition before nowadays.</td></tr>
<tr><td>discuss about the problem</td><td><b>discuss</b> the problem</td><td>discuss takes a direct object.</td></tr>
<tr><td>It depends of...</td><td>It depends <b>on</b>...</td><td>Preposition collocation.</td></tr>
<tr><td>I am agree</td><td>I agree</td><td>agree is a verb.</td></tr>
<tr><td>The most of people</td><td><b>Most</b> people / Most <b>of the</b> people</td><td>Most + noun (general).</td></tr>
<tr><td>Despite of the cost</td><td>Despite the cost / In spite of the cost</td><td>Never "despite of".</td></tr>
<tr><td>Although..., but...</td><td>Although..., ...</td><td>Use one connector, not two.</td></tr>
<tr><td>Because of people are busy</td><td>Because people are busy</td><td>Because of + noun; because + clause.</td></tr>
<tr><td>Economic cars</td><td><b>Economical</b> cars</td><td>economic = of the economy; economical = cheap to run.</td></tr>
<tr><td>Effect vs affect</td><td>It <b>affects</b> health (verb); It has an <b>effect</b> (noun)</td><td>Word form.</td></tr>
<tr><td>Lose vs loose</td><td><b>lose</b> money; <b>loose</b> clothes</td><td>Spelling.</td></tr>
<tr><td>Childrens</td><td>children / children's</td><td>Irregular plural.</td></tr>
<tr><td>Raise vs rise</td><td>Prices <b>rose</b>; The government <b>raised</b> taxes.</td><td>rise (intransitive), raise (transitive).</td></tr>
</table></div>`,
    exercises: [
      {
        kind: 'choice', instructions: 'Choose the correct sentence.', questions: [
          { n: 1, q: '', opts: ['In nowadays, many people work from home.', 'Nowadays, many people work from home.'], a: 'B', x: 'No "in" before nowadays.' },
          { n: 2, q: '', opts: ['This essay will discuss about the causes.', 'This essay will discuss the causes.'], a: 'B', x: '"discuss" has no preposition.' },
          { n: 3, q: '', opts: ['Although it is cheap, but it is slow.', 'Although it is cheap, it is slow.'], a: 'B', x: 'Don\'t use "although" and "but" together.' },
          { n: 4, q: '', opts: ['The government raised taxes last year.', 'The government rose taxes last year.'], a: 'A', x: 'raise + object; rise has no object.' },
          { n: 5, q: '', opts: ['Pollution effects our health.', 'Pollution affects our health.'], a: 'B', x: 'affect = verb.' },
          { n: 6, q: '', opts: ['Despite of the rain, the match continued.', 'Despite the rain, the match continued.'], a: 'B', x: 'Never "despite of".' },
          { n: 7, q: '', opts: ['Hybrid cars are more economical than petrol cars.', 'Hybrid cars are more economic than petrol cars.'], a: 'A', x: 'economical = efficient/cheap to run.' }
        ]
      }
    ]
  }
];

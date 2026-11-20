import type { Chapter } from '@/lib/types';

/* Grammar chapters: the language behind Writing and Speaking Bands 7–9 */
export const grammarChapters: Record<string, Chapter> = {
  'sentence-types': {
    intro: `<p>Every sentence in English is built from <b>clauses</b>. A clause has a subject and a verb. How you combine clauses gives four sentence types: <b>simple</b> (one independent clause), <b>compound</b> (two independent clauses joined by <i>and, but, so, or, yet</i>), <b>complex</b> (an independent clause plus a dependent clause beginning with <i>because, although, when, which, if</i>...), and <b>compound-complex</b> (a mixture).</p>
<p>Why does this matter for IELTS? The Grammatical Range and Accuracy criterion rewards "a <b>variety of complex structures</b>" at Band 7 and "a <b>wide range</b> of structures" at Band 8, with most sentences error-free. An essay of only simple sentences cannot reach Band 6 for grammar; an essay of long, tangled sentences full of errors cannot either. The goal is <b>controlled variety</b>: a natural mix of sentence types, each one accurate.</p>`,
    facts: [['Simple', 'One independent clause'], ['Compound', 'Two independent clauses + FANBOYS'], ['Complex', 'Independent + dependent clause'], ['Compound-complex', 'Two independent + at least one dependent'], ['Band 7 needs', 'A variety of complex structures, frequent error-free sentences'], ['Typical essay mix', 'About ⅓ simple/compound, ⅔ complex']],
    method: [
      { title: 'Find the core: subject + verb + (object)', body: '<p>Every sentence needs at least one independent clause with a finite verb.</p>', example: '<i>Governments [subject] should invest [verb] in public transport [object].</i>' },
      { title: 'Join equal ideas with a coordinator (compound)', body: '<p>Use <b>for, and, nor, but, or, yet, so</b> (FANBOYS) with a comma before it when both clauses are complete.</p>', example: '<i>Public transport reduces congestion, <b>and</b> it lowers emissions.</i>' },
      { title: 'Show the relationship with a subordinator (complex)', body: '<p>Reason (<i>because, since, as</i>), contrast (<i>although, while, whereas</i>), time (<i>when, after, once</i>), condition (<i>if, unless, provided that</i>), purpose (<i>so that</i>). The dependent clause can come first (then use a comma) or second (usually no comma).</p>', example: '<i><b>Although</b> public transport is expensive to build, it saves money in the long term.</i>' },
      { title: 'Add information with a relative clause', body: '<p><i>who, which, that, where, whose</i> add detail to a noun and create complex sentences naturally.</p>', example: '<i>Cities <b>that invest in metro systems</b> tend to have cleaner air.</i>' },
      { title: 'Vary the start of your sentences', body: '<p>Begin some sentences with a dependent clause, a participle phrase or an adverbial – not always with the subject.</p>', example: '<i>Having seen the results, the council expanded the scheme.</i>' },
      { title: 'Check every sentence for completeness', body: '<p>No fragments (a dependent clause alone) and no run-ons (two independent clauses joined with only a comma).</p>' }
    ],
    sections: [{
      id: 'bands', title: 'The same ideas at Band 5, 7 and 9',
      html: `<div class="band-compare">
<div><h4>Band 5 – all simple</h4><p><i>Cars cause pollution. Many people drive to work. The government should improve buses. Then people will use buses.</i></p></div>
<div><h4>Band 7 – controlled variety</h4><p><i>Because so many people drive to work, cars are a major source of pollution. If the government improved bus services, more commuters would leave their cars at home.</i></p></div>
<div><h4>Band 9 – wide range, natural</h4><p><i>Commuting by car, which remains the norm in many cities, is a major source of urban pollution; were bus services faster and more reliable, a significant proportion of drivers would almost certainly switch.</i></p></div>
</div>`
    }],
    worked: [{
      title: 'Combining simple sentences',
      instructions: '<i>Combine each pair into one sentence of the type shown. Try first, then open the walkthrough.</i>',
      questions: '<ol><li>The city built a new tram line. Traffic fell by 15%. (complex – result)</li><li>Online learning is flexible. Many students miss face-to-face contact. (complex – contrast)</li><li>The museum opened in 2010. It attracts a million visitors a year. (relative clause)</li><li>Young people are moving to cities. Rural schools are closing. (compound)</li></ol>',
      walk: [
        { q: '1. Result', a: '', steps: ['<i>After the city built a new tram line, traffic fell by 15%.</i> (time) or <i>The city built a new tram line, <b>as a result of which</b> traffic fell by 15%.</i>', 'Note: "so" would make it compound: <i>The city built a new tram line, so traffic fell by 15%.</i>'] },
        { q: '2. Contrast', a: '', steps: ['<i><b>Although</b> online learning is flexible, many students miss face-to-face contact.</i>', 'Comma after the dependent clause when it comes first.'] },
        { q: '3. Relative clause', a: '', steps: ['<i>The museum, <b>which</b> opened in 2010, attracts a million visitors a year.</i>', 'Commas because the clause adds extra (non-defining) information.'] },
        { q: '4. Compound', a: '', steps: ['<i>Young people are moving to cities, <b>and</b> as a result rural schools are closing.</i>'] }
      ]
    }],
    dos: ['Mix sentence types naturally.', 'Use subordinators to show logical relationships.', 'Put a comma after an introductory dependent clause.', 'Check each sentence has a finite verb.'],
    donts: ['Don\'t write only simple sentences.', 'Don\'t join two complete sentences with just a comma (comma splice).', 'Don\'t write fragments like "Because it is cheap."', 'Don\'t make sentences so long that you lose control.'],
    careful: [
      { title: 'Comma splice', body: '<p>Two independent clauses joined by a comma alone are an error.</p>', example: '✗ <i>Prices rose, people bought less.</i> ✓ <i>Prices rose, so people bought less.</i> / <i>Prices rose; people bought less.</i>' },
      { title: 'Fragments', body: '<p>A dependent clause cannot stand alone.</p>', example: '✗ <i>Because public transport is cheaper.</i> ✓ <i>Many people use public transport because it is cheaper.</i>' },
      { title: 'Although + but', body: '<p>Use one or the other, not both.</p>', example: '✗ <i>Although it is expensive, but it is useful.</i> ✓ <i>Although it is expensive, it is useful.</i>' }
    ],
    checklist: ['I can identify simple, compound and complex sentences.', 'I use subordinators for reason, contrast, condition and time.', 'I avoid comma splices and fragments.'],
    summary: ['Clauses are the building blocks.', 'Controlled variety, not maximum length.', 'Subordinators show logic; relative clauses add detail.']
  },

  clauses: {
    intro: `<p>Dependent clauses let you pack ideas into a single sentence and show how they relate. Three kinds matter most for IELTS: <b>relative clauses</b> (adding information about a noun: <i>the students <b>who</b> study abroad</i>), <b>noun clauses</b> (acting as a subject or object: <i><b>What</b> concerns me is...</i>, <i>It is clear <b>that</b>...</i>) and <b>adverbial clauses</b> (showing time, reason, contrast, condition, purpose: <i><b>Once</b> the data is collected...</i>).</p>
<p>Used accurately, they are the clearest signal of grammatical range at Band 7+.</p>`,
    method: [
      { title: 'Relative clauses: choose the pronoun', body: '<p><b>who</b> (people), <b>which</b> (things), <b>that</b> (people/things in defining clauses), <b>whose</b> (possession), <b>where</b> (places), <b>when</b> (times).</p>' },
      { title: 'Decide: defining or non-defining?', body: '<p>Defining (essential information, no commas, "that" allowed): <i>Students who work part-time...</i>. Non-defining (extra information, commas, no "that"): <i>My brother, who works part-time, ...</i></p>' },
      { title: 'Use noun clauses as subjects or objects', body: '<p><i>What</i>-clauses and <i>that</i>-clauses: <i>What many people forget is that...</i>; <i>It is undeniable that...</i>; <i>The question is whether...</i></p>' },
      { title: 'Use adverbial clauses to show logic', body: '<p>Time: <i>once, as soon as, after</i>. Reason: <i>because, since, as</i>. Contrast: <i>although, even though, whereas, while</i>. Condition: <i>if, unless, provided that, as long as</i>. Purpose: <i>so that, in order that</i>.</p>' },
      { title: 'Reduce clauses for elegance (Band 8+)', body: '<p>Participle phrases replace full relative or adverbial clauses: <i>Students <b>living</b> abroad...</i> (= who live), <i><b>Having finished</b> the course, ...</i> (= after they had finished).</p>' }
    ],
    worked: [{
      title: 'Upgrading sentences with clauses',
      instructions: '<i>Rewrite using the clause type shown.</i>',
      questions: '<ol><li>Some people work from home. They save time. (defining relative)</li><li>Many people forget something. Exercise improves mood. (what-clause)</li><li>The scheme was introduced. Crime fell. (time clause with "once")</li><li>Students who study abroad gain independence. (reduced clause)</li></ol>',
      walk: [
        { q: '1', a: '', steps: ['<i>People <b>who work from home</b> save time.</i> – no commas: it defines which people.'] },
        { q: '2', a: '', steps: ['<i><b>What many people forget is that</b> exercise improves mood.</i> – a noun clause as subject; it adds emphasis.'] },
        { q: '3', a: '', steps: ['<i><b>Once</b> the scheme had been introduced, crime fell.</i> – past perfect passive shows the order.'] },
        { q: '4', a: '', steps: ['<i>Students <b>studying abroad</b> gain independence.</i>'] }
      ]
    }],
    dos: ['Use commas for non-defining clauses.', 'Use "which" (not "that") after a comma.', 'Use what-clauses for emphasis occasionally.'],
    donts: ['Don\'t use "which" for people.', 'Don\'t repeat the pronoun: ✗ "the book which I read it".', 'Don\'t overuse "It is ... that" structures.'],
    careful: [
      { title: 'Repeated object', body: '<p>The relative pronoun replaces the object.</p>', example: '✗ <i>The policy which the government introduced it...</i> ✓ <i>The policy which the government introduced...</i>' },
      { title: 'Which referring to a whole clause', body: '<p>"<i>Many shops closed, which led to job losses.</i>" – correct: "which" refers to the whole idea, and needs a comma.</p>' }
    ],
    checklist: ['I use who/which/that/whose/where correctly.', 'I punctuate non-defining clauses.', 'I can use noun clauses and participle phrases.'],
    summary: ['Relative, noun and adverbial clauses = grammatical range.', 'Commas decide defining vs non-defining.', 'Reduced clauses add sophistication.']
  },

  conditionals: {
    intro: `<p>Conditionals express how one situation depends on another. They are essential in Task 2 (proposing solutions: <i>If governments invested..., ...would...</i>) and in Speaking Part 3 (speculating: <i>If I had the chance, I would...</i>). Using them accurately – especially the <b>second</b> and <b>third</b> conditionals and <b>mixed</b> forms – is one of the clearest markers of Band 7+ grammar.</p>`,
    method: [
      { title: 'Zero: general truths', body: '<p>If + present, present.</p>', example: '<i>If you heat ice, it melts.</i>' },
      { title: 'First: real future possibilities', body: '<p>If + present, will + verb.</p>', example: '<i>If the city builds more cycle lanes, more people will cycle.</i>' },
      { title: 'Second: hypothetical present/future', body: '<p>If + past, would + verb. Use it for proposals in essays – it sounds measured.</p>', example: '<i>If governments taxed sugary drinks, consumption would fall.</i>' },
      { title: 'Third: hypothetical past', body: '<p>If + past perfect, would have + past participle.</p>', example: '<i>If the factory had been inspected, the accident would have been prevented.</i>' },
      { title: 'Mixed: past condition, present result', body: '<p>If + past perfect, would + verb.</p>', example: '<i>If I had studied medicine, I would be a doctor now.</i>' },
      { title: 'Alternatives to "if" (Band 8+)', body: '<p><i>unless, provided that, as long as, otherwise, should + subject</i> (formal), inversion: <i>Were governments to invest..., Had the plan succeeded...</i></p>' }
    ],
    worked: [{
      title: 'Choosing the right conditional',
      instructions: '<i>Complete each sentence with the correct form.</i>',
      questions: '<ol><li>If schools (teach) financial skills, young people (manage) money better. – a proposal</li><li>If the council (not close) the library last year, students (have) somewhere to study now.</li><li>(Should / the government) raise taxes, many businesses would relocate. – formal</li></ol>',
      walk: [
        { q: '1', a: '', steps: ['Hypothetical proposal → second conditional: <i>If schools <b>taught</b> financial skills, young people <b>would manage</b> money better.</i>'] },
        { q: '2', a: '', steps: ['Past condition, present result → mixed: <i>If the council <b>had not closed</b> the library, students <b>would have</b> somewhere to study now.</i>'] },
        { q: '3', a: '', steps: ['Formal inversion with should: <i><b>Should the government raise</b> taxes, many businesses would relocate.</i>'] }
      ]
    }],
    dos: ['Use second conditionals for proposals in Task 2.', 'Use "were" for all persons in formal writing (If I were...).', 'Try one alternative (unless, provided that) per essay.'],
    donts: ['Don\'t use "will" in the if-clause: ✗ "If they will build..."', 'Don\'t use "would" in the if-clause: ✗ "If they would invest..."', 'Don\'t mix up second and third conditional forms.'],
    careful: [{ title: 'Unless = if not', body: '<p>Don\'t add another negative.</p>', example: '✗ <i>Unless the government doesn\'t act...</i> ✓ <i>Unless the government acts...</i>' }],
    checklist: ['I can form all five conditionals.', 'I use second conditionals for proposals.', 'I can use unless / provided that / inversion.'],
    summary: ['Zero, first, second, third, mixed.', 'Second conditional = measured proposals.', 'Alternatives and inversion show range.']
  },

  passive: {
    intro: `<p>The passive voice focuses on the <b>action</b> or the <b>thing affected</b> rather than the person who acts: <i>The olives <b>are washed</b>.</i> It is essential for Task 1 process diagrams and maps, and useful in Task 2 for an objective, academic tone (<i>It <b>is often argued</b> that...</i>). Accuracy matters: the passive needs the correct form of <b>be</b> + <b>past participle</b> in every tense.</p>`,
    method: [
      { title: 'Choose the tense of "be"', body: '<p>is/are (present), was/were (past), has/have been (present perfect), will be, is being (continuous), had been (past perfect), can/should be (modals).</p>' },
      { title: 'Add the past participle', body: '<p>washed, built, taken, chosen, written – learn irregular forms.</p>' },
      { title: 'Add "by + agent" only if it is important', body: '<p><i>The bridge was designed by a famous engineer.</i> Usually the agent is omitted.</p>' },
      { title: 'Use impersonal passives for objectivity', body: '<p><i>It is believed that..., It has been suggested that..., X is thought to be...</i></p>' }
    ],
    worked: [{
      title: 'Active to passive',
      instructions: '<i>Rewrite in the passive.</i>',
      questions: '<ol><li>Workers pick the tea leaves by hand. (process)</li><li>The council demolished the old factory in 2015. (map)</li><li>People often say that money cannot buy happiness. (impersonal)</li><li>Governments should regulate social media companies. (modal)</li></ol>',
      walk: [
        { q: '1', a: '', steps: ['<i>The tea leaves <b>are picked</b> by hand.</i>'] },
        { q: '2', a: '', steps: ['<i>The old factory <b>was demolished</b> in 2015.</i>'] },
        { q: '3', a: '', steps: ['<i><b>It is often said</b> that money cannot buy happiness.</i> / <i>Money <b>is often said to be</b> unable to buy happiness.</i>'] },
        { q: '4', a: '', steps: ['<i>Social media companies <b>should be regulated</b>.</i>'] }
      ]
    }],
    dos: ['Use the passive for processes and maps.', 'Use impersonal passives in essays.', 'Check the form of "be" agrees with the subject.'],
    donts: ['Don\'t make intransitive verbs passive: ✗ "Sales were increased" (when you mean sales rose).', 'Don\'t forget "be": ✗ "The olives washed."', 'Don\'t overuse the passive in Task 2 – mix it with the active.'],
    careful: [{ title: 'Happen, occur, rise, fall, arrive', body: '<p>These verbs have no passive.</p>', example: '✗ <i>The accident was happened.</i> ✓ <i>The accident happened.</i>' }],
    checklist: ['I can form the passive in all common tenses.', 'I use it accurately in process and map reports.', 'I know which verbs cannot be passive.'],
    summary: ['be + past participle.', 'Essential for Task 1 processes and maps.', 'Impersonal passives create an academic tone.']
  },

  tenses: {
    intro: `<p>Tense errors are among the most frequent errors in IELTS Writing and Speaking. You don't need every tense in every answer, but you need the <b>right tense for each time frame</b>: past data in Task 1, present facts and future predictions in Task 2, and a natural mix of past, present and future in Speaking.</p>`,
    method: [
      { title: 'Identify the time frame', body: '<p>Past (finished time: in 2010, last year), present (now, generally), present-to-past link (since, for, recently), future (will, by 2030).</p>' },
      { title: 'Past simple for finished time', body: '<p><i>Sales rose in 2010.</i></p>' },
      { title: 'Present perfect for past → present', body: '<p><i>Online shopping has grown rapidly in recent years.</i> (no finished time word)</p>' },
      { title: 'Past perfect for "before a past point"', body: '<p><i>By 2020, A had overtaken B.</i></p>' },
      { title: 'Future forms for predictions and projections', body: '<p><i>will, is expected to, is likely to, is projected to</i>.</p>' },
      { title: 'Present simple for general truths and opinions', body: '<p><i>Many people believe that...</i></p>' }
    ],
    worked: [{
      title: 'Choosing tenses in context',
      questions: '<ol><li>In recent years, the number of remote workers (increase) dramatically.</li><li>In 2005, only 5% of employees (work) from home.</li><li>By 2015, this figure (double).</li><li>The figure (expect) to reach 30% by 2030.</li></ol>',
      walk: [
        { q: '1', a: 'has increased', steps: ['"In recent years" links past and present → present perfect.'] },
        { q: '2', a: 'worked', steps: ['Finished time (2005) → past simple.'] },
        { q: '3', a: 'had doubled', steps: ['"By + past time" → past perfect.'] },
        { q: '4', a: 'is expected', steps: ['Projection → present passive "is expected to".'] }
      ]
    }],
    dos: ['Match tense to time frame.', 'Use past perfect with "by + past date".', 'Use varied future forms for projections.'],
    donts: ['Don\'t use the present perfect with finished times: ✗ "has risen in 2010".', 'Don\'t switch tenses randomly within a paragraph.'],
    careful: [{ title: 'Since vs for', body: '<p>since + point in time (since 2010); for + period (for ten years). Both usually with the present perfect.</p>' }],
    checklist: ['Past simple for finished time.', 'Present perfect for past-to-present.', 'Past perfect for before a past point.'],
    summary: ['Time frame decides tense.', 'Present perfect never with a finished time word.', 'Task 1 projections need future forms.']
  },

  comparatives: {
    intro: `<p>Comparison is at the heart of Task 1 ("make comparisons where relevant") and common in Task 2 and Speaking Part 3. Band 7+ requires more than "bigger than": you need <b>degree</b> (<i>slightly, considerably, far</i>), <b>multiples</b> (<i>twice as many as</i>), <b>equality</b> (<i>as... as</i>), and <b>contrast linkers</b> (<i>whereas, while, by contrast</i>).</p>`,
    method: [
      { title: 'Short adjectives: -er / the -est', body: '<p>higher, the highest; bigger, the biggest. Irregular: good/better/best, bad/worse/worst, far/further/furthest.</p>' },
      { title: 'Long adjectives: more / the most', body: '<p>more popular, the most expensive.</p>' },
      { title: 'Add degree', body: '<p>slightly / marginally / a little higher; considerably / significantly / much / far higher.</p>' },
      { title: 'Use multiples and equality', body: '<p>twice as many as, three times as much as, half as many as; (not) as popular as; the same as; similar to.</p>' },
      { title: 'Contrast two data points in one sentence', body: '<p><i>Men preferred football (30%), whereas women preferred yoga (27%).</i></p>' }
    ],
    worked: [{
      title: 'Comparing data precisely',
      questions: '<ol><li>Men 30%, women 6% (football)</li><li>Men 40%, women 36% (gym)</li><li>2010: 20, 2020: 60</li></ol>',
      walk: [
        { q: '1', a: '', steps: ['<i>Men were <b>five times as likely</b> to play football <b>as</b> women.</i>'] },
        { q: '2', a: '', steps: ['<i>Gym attendance was <b>slightly higher</b> among men (40%) <b>than</b> women (36%).</i>'] },
        { q: '3', a: '', steps: ['<i>The figure <b>tripled</b> between 2010 and 2020.</i> / <i>The figure in 2020 was <b>three times as high as</b> in 2010.</i>'] }
      ]
    }],
    dos: ['Add degree words to comparatives.', 'Use multiples where the data allow.', 'Combine two data points in one sentence with whereas/while.'],
    donts: ['Don\'t write "more higher" or "the most highest".', 'Don\'t write "twice more than" – prefer "twice as many as".', 'Don\'t use "then" for "than".'],
    careful: [{ title: 'Many vs much', body: '<p>as many (countable: people, cars) / as much (uncountable: money, energy).</p>' }],
    checklist: ['Correct -er/more forms.', 'Degree words used precisely.', 'Multiples and as...as used correctly.'],
    summary: ['Comparison is central to Task 1.', 'Degree + multiples + contrast linkers = precision.', 'Check than/then and many/much.']
  },

  articles: {
    intro: `<p>Article errors (<i>a/an/the/no article</i>) are the most common errors in IELTS writing for many nationalities. A few errors won't stop you reaching Band 7, but frequent errors reduce your accuracy score. Most article decisions follow a small number of rules, linked to whether a noun is <b>countable</b>, <b>singular or plural</b>, and <b>specific or general</b>.</p>`,
    method: [
      { title: 'Is the noun countable or uncountable?', body: '<p>Uncountable nouns (information, advice, research, equipment, furniture, traffic, money, pollution) never take "a/an" and have no plural.</p>' },
      { title: 'Singular countable nouns always need a determiner', body: '<p>a/an, the, my, this, every... ✗ "Government should..." ✓ "The government should..." / "Governments should..."</p>' },
      { title: 'General plural or uncountable → no article', body: '<p><i>Children need exercise.</i> <i>Pollution harms health.</i></p>' },
      { title: 'Specific or already mentioned → the', body: '<p><i>The pollution in our city is severe.</i> <i>The graph shows...</i> (we both know which graph)</p>' },
      { title: 'Unique and superlatives → the', body: '<p>the internet, the environment, the government (of a country), the highest, the most popular.</p>' }
    ],
    worked: [{
      title: 'Correcting article errors',
      questions: '<ol><li>Government should invest in public transport.</li><li>Internet has changed way we communicate.</li><li>Students need an advice about careers.</li><li>The children in general learn quickly.</li></ol>',
      walk: [
        { q: '1', a: '', steps: ['✓ <i><b>The</b> government should invest...</i> or <i>Governments should invest...</i> (singular countable needs a determiner).'] },
        { q: '2', a: '', steps: ['✓ <i><b>The</b> internet has changed <b>the</b> way we communicate.</i>'] },
        { q: '3', a: '', steps: ['✓ <i>Students need advice about careers.</i> (advice is uncountable) or <i>a piece of advice</i>.'] },
        { q: '4', a: '', steps: ['✓ <i>Children in general learn quickly.</i> (general plural – no article).'] }
      ]
    }],
    dos: ['Learn the common uncountable nouns.', 'Give every singular countable noun a determiner.', 'Use no article for general plurals.'],
    donts: ['Don\'t write "a research", "an information", "advices", "equipments".', 'Don\'t use "the" for general statements about plural nouns.'],
    careful: [{ title: 'Countable in one meaning, uncountable in another', body: '<p><i>experience</i> (skill, uncountable) vs <i>an experience</i> (an event); <i>work</i> (uncountable) vs <i>a work of art</i>.</p>' }],
    checklist: ['I know the common uncountable nouns.', 'No bare singular countable nouns.', 'No "the" with general plurals.'],
    summary: ['Countable? Singular? Specific?', 'Singular countable nouns need a determiner.', 'General plurals and uncountables: no article.']
  },

  agreement: {
    intro: `<p>Subject–verb agreement means the verb matches its subject in number: <i>The number of students <b>has</b> risen</i>, <i>Many people <b>believe</b>...</i>. Errors are easy to make in long sentences, where the verb is far from its subject, or with tricky subjects like <i>the number of</i>, <i>each</i>, <i>everyone</i> and uncountable nouns.</p>`,
    method: [
      { title: 'Find the real subject', body: '<p>Ignore prepositional phrases: <i>The <u>quality</u> of the schools <b>is</b>...</i></p>' },
      { title: 'The number of + plural noun → singular verb', body: '<p><i>The number of cars <b>has</b> increased.</i> But <i>A number of people <b>have</b> complained.</i> (= several)</p>' },
      { title: 'Each, every, everyone, nobody → singular', body: '<p><i>Every student <b>has</b> a laptop.</i></p>' },
      { title: 'Uncountable subjects → singular', body: '<p><i>Information <b>is</b>..., Research <b>shows</b>...</i></p>' },
      { title: 'Gerund subjects → singular', body: '<p><i>Using phones in class <b>distracts</b> students.</i></p>' }
    ],
    worked: [{
      title: 'Spot and fix the agreement errors',
      questions: '<ol><li>The percentage of women in work have increased.</li><li>One of the main reasons are cost.</li><li>Living in big cities cause stress.</li></ol>',
      walk: [
        { q: '1', a: 'has', steps: ['Subject = <i>the percentage</i> (singular) → <i>has increased</i>.'] },
        { q: '2', a: 'is', steps: ['Subject = <i>one</i> → <i>One of the main reasons <b>is</b> cost.</i>'] },
        { q: '3', a: 'causes', steps: ['Gerund subject → singular: <i>Living in big cities <b>causes</b> stress.</i>'] }
      ]
    }],
    dos: ['Find the head noun of the subject.', 'Check agreement in every long sentence.'],
    donts: ['Don\'t let the noun nearest the verb decide the verb.', 'Don\'t pluralise verbs after "each/every".'],
    careful: [{ title: 'People / police / data', body: '<p><i>People are</i> (plural). <i>The police are</i> (plural). <i>Data</i> is accepted with singular or plural verbs in modern English.</p>' }],
    checklist: ['I find the real subject.', 'I know "the number of" + singular.', 'Gerunds and uncountables take singular verbs.'],
    summary: ['The head noun decides the verb.', 'Watch long subjects and tricky determiners.', 'One of + plural noun + singular verb.']
  },

  advanced: {
    intro: `<p>Band 8–9 grammar is characterised by a <b>wide range of structures used naturally and accurately</b>. This chapter collects structures that add sophistication when they fit the meaning: <b>inversion</b>, <b>cleft sentences</b>, <b>participle clauses</b>, <b>nominalisation</b>, <b>modal perfects</b> and <b>concessive structures</b>. Use them occasionally and accurately – one or two per essay – rather than forcing them into every sentence.</p>`,
    method: [
      { title: 'Cleft sentences for emphasis', body: '<p><i>It is education <b>that</b> holds the key...</i> / <i><b>What</b> worries many parents <b>is</b>...</i></p>' },
      { title: 'Negative inversion (formal)', body: '<p><i><b>Not only does</b> tourism create jobs, <b>but</b> it also...</i> / <i><b>Rarely have</b> we seen...</i> / <i><b>Only by</b> investing in education <b>can</b> we...</i></p>' },
      { title: 'Participle clauses', body: '<p><i><b>Faced with</b> rising costs, many families...</i> / <i><b>Having lost</b> their jobs, ...</i></p>' },
      { title: 'Nominalisation (academic style)', body: '<p>Turn verbs into nouns: <i>Prices rose sharply → <b>The sharp rise in</b> prices...</i>; <i>People consume more → <b>Increased consumption</b>...</i></p>' },
      { title: 'Modal perfects for speculation about the past', body: '<p><i>The decline <b>may have been caused</b> by...</i>, <i>The government <b>should have acted</b> sooner.</i></p>' },
      { title: 'Concession', body: '<p><i>Admittedly, ...; however, ...</i> / <i>Much as I sympathise with..., ...</i> / <i>Despite / In spite of + noun/-ing</i></p>' }
    ],
    worked: [{
      title: 'Upgrading sentences',
      questions: '<ol><li>Tourism creates jobs. It also protects heritage. (not only)</li><li>Education is the key to reducing poverty. (cleft)</li><li>Prices rose sharply, so people bought less. (nominalisation)</li></ol>',
      walk: [
        { q: '1', a: '', steps: ['<i><b>Not only does tourism create</b> jobs, <b>but it also</b> helps to protect heritage.</i> – note the auxiliary "does" after "Not only".'] },
        { q: '2', a: '', steps: ['<i><b>It is education that</b> holds the key to reducing poverty.</i>'] },
        { q: '3', a: '', steps: ['<i><b>The sharp rise in prices</b> led to a fall in consumption.</i>'] }
      ]
    }],
    dos: ['Use advanced structures where they fit the meaning.', 'Check auxiliaries after negative adverbials.', 'Use nominalisation for an academic tone in Task 2.'],
    donts: ['Don\'t force advanced structures into every sentence.', 'Don\'t sacrifice accuracy for complexity.'],
    careful: [{ title: 'Dangling participles', body: '<p>The subject of the main clause must be the one doing the participle action.</p>', example: '✗ <i>Walking to school, the rain started.</i> ✓ <i>Walking to school, I was caught in the rain.</i>' }],
    checklist: ['I can use clefts, inversion and participle clauses accurately.', 'I use nominalisation in formal writing.', 'I use advanced forms sparingly and correctly.'],
    summary: ['Range + accuracy = Band 8+.', 'A few well-chosen advanced structures beat many forced ones.', 'Check auxiliaries and participle subjects.']
  },

  punctuation: {
    intro: `<p>Punctuation affects your grammar score because it shows where sentences and clauses begin and end. The most important punctuation points for IELTS are <b>sentence boundaries</b> (full stops, avoiding run-on sentences), <b>commas with clauses and linkers</b>, and the <b>semicolon</b> as an advanced option.</p>`,
    method: [
      { title: 'One complete sentence = one full stop', body: '<p>Two independent clauses need a full stop, a semicolon, or a conjunction – never just a comma.</p>' },
      { title: 'Comma after introductory elements', body: '<p><i>However, ... / In conclusion, ... / Although it is expensive, ...</i></p>' },
      { title: 'Commas around non-defining clauses', body: '<p><i>London, which is the capital, ...</i></p>' },
      { title: 'Semicolon between related independent clauses', body: '<p><i>Some people prefer cities; others prefer the countryside.</i> Also before "however" joining two clauses: <i>...; however, ...</i></p>' },
      { title: 'Colon to introduce a list or explanation', body: '<p><i>There are two main causes: rising costs and falling wages.</i></p>' }
    ],
    worked: [{
      title: 'Fix the punctuation',
      questions: '<ol><li>Many people drive to work, this causes congestion.</li><li>However the government has not acted.</li><li>The city which has a population of two million has no metro.</li></ol>',
      walk: [
        { q: '1', a: '', steps: ['Comma splice → <i>Many people drive to work<b>.</b> This causes congestion.</i> / <i>...work<b>, which</b> causes congestion.</i>'] },
        { q: '2', a: '', steps: ['<i>However<b>,</b> the government has not acted.</i>'] },
        { q: '3', a: '', steps: ['Non-defining → <i>The city<b>,</b> which has a population of two million<b>,</b> has no metro.</i>'] }
      ]
    }],
    dos: ['Put a comma after introductory linkers.', 'Use full stops between complete sentences.', 'Try a semicolon once or twice per essay.'],
    donts: ['Don\'t join sentences with commas alone.', 'Don\'t put a comma between subject and verb.', 'Don\'t use "however" like "but" without punctuation.'],
    careful: [{ title: 'However vs but', body: '<p>"but" joins clauses with a comma; "however" needs a full stop or semicolon before it.</p>', example: '✗ <i>It is cheap, however it is slow.</i> ✓ <i>It is cheap; however, it is slow.</i>' }],
    checklist: ['No comma splices.', 'Commas after introductory elements.', 'Correct use of however.'],
    summary: ['Sentence boundaries matter most.', 'Commas mark clauses and introductory linkers.', 'Semicolons and colons show control.']
  },

  paraphrasing: {
    intro: `<p>Paraphrasing – saying the same thing in different words – is a skill that runs through the whole test. In Reading and Listening you must <b>recognise</b> paraphrase; in Writing you must <b>produce</b> it (the Task 1 introduction, the Task 2 introduction, and avoiding repetition throughout); in Speaking it keeps you fluent when you don't know a word. Good paraphrase changes words <b>and</b> structure while keeping the meaning exactly.</p>`,
    method: [
      { title: 'Use synonyms – carefully', body: '<p>Change key words: <i>shows → illustrates; the number of → how many; important → significant</i>. Only use synonyms you are sure of – a wrong synonym changes the meaning.</p>' },
      { title: 'Change the word form', body: '<p><i>The population grew → There was growth in the population; expensive → the cost</i>.</p>' },
      { title: 'Change the structure', body: '<p>Active ↔ passive; clause ↔ phrase; reorder ideas.</p>', example: '<i>Many people believe that... → It is widely believed that...</i>' },
      { title: 'Use positive ↔ negative', body: '<p><i>The law remained the same until 1990 → The law was not changed before 1990.</i></p>' },
      { title: 'Combine techniques', body: '<p>The best paraphrases use two or three techniques at once.</p>' },
      { title: 'Check the meaning is identical', body: '<p>Don\'t add, remove or strengthen information.</p>' }
    ],
    worked: [{
      title: 'Paraphrasing Task 2 prompts',
      questions: '<ol><li>Some people believe that university education should be free for all students.</li><li>The graph shows the number of tourists visiting three countries between 1995 and 2020.</li><li>Many people today prefer to shop online.</li></ol>',
      walk: [
        { q: '1', a: '', steps: ['<i>It is sometimes argued that higher education should be funded entirely by the state.</i>', 'Techniques: impersonal passive; synonym (university → higher education); restructuring (free → funded by the state).'] },
        { q: '2', a: '', steps: ['<i>The line graph illustrates how many tourists travelled to three nations over a 25-year period from 1995.</i>'] },
        { q: '3', a: '', steps: ['<i>A growing number of consumers now choose to buy goods via the internet rather than in physical stores.</i>'] }
      ]
    }],
    dos: ['Combine synonyms, word forms and structure changes.', 'Keep the exact meaning.', 'Keep key technical terms if there is no true synonym.'],
    donts: ['Don\'t change only one word.', 'Don\'t use a thesaurus word you don\'t know how to use.', 'Don\'t change the meaning (e.g. "some people" → "everyone").'],
    careful: [{ title: 'False synonyms', body: '<p><i>affect ≠ effect</i>; <i>economic ≠ economical</i>; <i>raise (transitive) ≠ rise (intransitive)</i>. Check part of speech and collocation.</p>' }],
    checklist: ['I use at least two techniques per paraphrase.', 'My paraphrase keeps the exact meaning.', 'I avoid risky synonyms.'],
    summary: ['Words + structure, same meaning.', 'Recognise it in Reading/Listening; produce it in Writing/Speaking.', 'Accuracy beats variety.']
  },

  'common-errors': {
    intro: `<p>Every examiner sees the same errors again and again. Most of them are small – an article, a preposition, a word form – but frequent small errors lower your accuracy score in both Writing and Speaking. This chapter collects the most common ones so you can check your own writing systematically.</p>`,
    method: [
      { title: 'Check word forms', body: '<p><i>economic/economical, effect/affect, advice/advise, rise/raise, lose/loose, live (verb)/life (noun)</i>.</p>' },
      { title: 'Check prepositions', body: '<p><i>rose <b>by</b> 5% <b>to</b> 30%, <b>in</b> 2010, <b>between</b> 2010 <b>and</b> 2020, an increase <b>in</b> sales, the reason <b>for</b>, interested <b>in</b>, depend <b>on</b></i>.</p>' },
      { title: 'Check countable/uncountable nouns', body: '<p><i>informations, advices, researches, equipments</i> ✗.</p>' },
      { title: 'Check verb patterns', body: '<p><i>suggest + -ing / that; enable sb to do; prevent sb from doing; avoid doing; let sb do</i>.</p>' },
      { title: 'Check spelling of high-frequency words', body: '<p><i>government, environment, accommodation, necessary, development, beginning, which</i>.</p>' }
    ],
    worked: [{
      title: 'Correct the errors',
      questions: '<ol><li>The government should prevent people to smoke in public.</li><li>Technology has a big affect on our lifes.</li><li>I suggest to invest in renewable energy.</li><li>The sales raised by 10% in 2010.</li></ol>',
      walk: [
        { q: '1', a: '', steps: ['prevent sb <b>from</b> doing → <i>prevent people <b>from smoking</b></i>.'] },
        { q: '2', a: '', steps: ['noun = <b>effect</b>; plural of life = <b>lives</b> → <i>a big <b>effect</b> on our <b>lives</b></i>.'] },
        { q: '3', a: '', steps: ['suggest + -ing / that → <i>I suggest <b>investing</b>...</i> / <i>I suggest <b>that</b> we invest...</i>'] },
        { q: '4', a: '', steps: ['intransitive = <b>rose</b>; and "The" not needed for general reference → <i>Sales <b>rose</b> by 10% in 2010.</i>'] }
      ]
    }],
    dos: ['Keep a personal list of your repeated errors.', 'Check your writing for those errors in the final minutes.'],
    donts: ['Don\'t try to check everything at once – check your top five error types.'],
    careful: [{ title: 'Fossilised errors', body: '<p>Errors you have made for years feel correct. Ask a teacher or use the analyser to identify them, then drill the correct forms.</p>' }],
    checklist: ['I know my five most common errors.', 'I check for them at the end of every writing task.'],
    summary: ['Small errors add up.', 'Word forms, prepositions, uncountables, verb patterns, spelling.', 'Check systematically with a personal error list.']
  }
};

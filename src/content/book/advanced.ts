import type { Chapter, Reference } from '@/lib/types';

/* Part 8 of the curriculum: advanced English language development (page /advanced/[topic]) */

const books: Reference[] = [
  { title: 'Stella Cottrell, Critical Thinking Skills, 3rd edition (Red Globe Press / Macmillan, 2017)', note: 'A practical guide to evaluating arguments and evidence.' },
  { title: 'Stephen Bailey, Academic Writing: A Handbook for International Students (Routledge)', note: 'Summarising, paraphrasing, referencing and argument for university study.' },
  { title: 'In this book: Task 2 essay method', url: '/writing/task-2' }
];

export interface AdvancedChapter { title: string; lead: string; chapter: Chapter }

export const advancedChapters: Record<string, AdvancedChapter> = {
  'critical-thinking': {
    title: 'Critical thinking and logical reasoning',
    lead: 'Evaluating claims, evidence and reasoning – and spotting the flaws in weak arguments.',
    chapter: {
      intro: `
<p><b>Critical thinking</b> is the habit of asking whether a claim is justified: What exactly is being claimed? What evidence supports it? Does the conclusion follow from the reasons? Are there other explanations? It is the skill behind good university work, good decisions – and good IELTS answers. Yes / No / Not Given questions test whether you can separate what a writer claims from what you assume; Task 2 rewards arguments that are reasoned rather than asserted; Speaking Part 3 asks you to evaluate ideas.</p>
<p>This chapter introduces the core tools: distinguishing facts, opinions and assumptions; evaluating evidence; recognising common reasoning errors (fallacies); and applying all of this to your own writing and speaking.</p>`,
      facts: [['Core question', 'Is this claim justified by the reasons and evidence?'], ['Fact', 'Can be checked'], ['Opinion', 'A judgement that can be argued'], ['Assumption', 'An unstated belief the argument depends on'], ['Fallacy', 'A flaw in reasoning'], ['IELTS use', 'YNNG, Task 2 development, Part 3 evaluation']],
      method: [
        { title: 'Identify the claim', body: '<p>State the conclusion in one sentence. Many weak arguments are vague about what they actually claim.</p>' },
        { title: 'Separate facts, opinions and assumptions', body: '<p><i>"Cities with metros have less traffic, so every city should build one."</i> Fact (checkable): cities with metros have less traffic. Opinion: every city should build one. Assumption: the metro caused the lower traffic, and every city can afford one.</p>' },
        { title: 'Evaluate the evidence', body: '<p>Is it relevant, sufficient, recent and from a reliable source? One example is not proof of a general rule.</p>' },
        { title: 'Check the reasoning for fallacies', body: '<p>See section 1 for the common ones.</p>' },
        { title: 'Consider alternative explanations', body: '<p>Correlation is not causation: two things happening together does not prove one causes the other.</p>', example: '<i>Ice-cream sales and drowning both rise in summer – heat causes both.</i>' },
        { title: 'Apply the same standards to your own arguments', body: '<p>In Task 2, explain why your reason leads to your conclusion, support it, and avoid overgeneralisation.</p>' }
      ],
      sections: [
        {
          id: 'fallacies', title: 'Common reasoning errors',
          html: `<div class="table-wrap"><table class="data-table"><tr><th>Error</th><th>Example</th><th>Problem</th></tr>
<tr><td>Hasty generalisation</td><td><i>My cousin found online learning boring, so it doesn't work.</i></td><td>One case cannot support a general rule.</td></tr>
<tr><td>False cause</td><td><i>Crime rose after the new mayor arrived, so the mayor caused it.</i></td><td>Sequence is not causation.</td></tr>
<tr><td>False dilemma</td><td><i>Either we ban cars or the city will choke.</i></td><td>Ignores other options.</td></tr>
<tr><td>Slippery slope</td><td><i>If we allow phones in class, students will never study again.</i></td><td>Assumes an extreme chain of consequences.</td></tr>
<tr><td>Appeal to popularity</td><td><i>Everyone uses it, so it must be good.</i></td><td>Popularity is not evidence of quality.</td></tr>
<tr><td>Attacking the person</td><td><i>He's not a scientist, so his argument is wrong.</i></td><td>Ignores the argument itself.</td></tr>
<tr><td>Circular reasoning</td><td><i>This is the best policy because it is better than the others.</i></td><td>The conclusion is used as a reason.</td></tr></table></div>`
        },
        { id: 'band-impact', title: 'How critical thinking affects your IELTS performance', html: '<p>In Reading, it underlies NOT GIVEN judgements and questions about the writer\'s views. In Task 2, the Task Response descriptors reward ideas that are relevant, extended and supported – which means reasoned, not asserted. Avoiding overgeneralisation and false causation makes your arguments harder to dismiss.</p>' }
      ],
      dos: ['Identify the claim before evaluating it.', 'Separate facts, opinions and assumptions.', 'Question whether evidence is sufficient.', 'Look for alternative explanations.'],
      donts: ['Don\'t accept a conclusion because it sounds confident.', 'Don\'t generalise from one example.', 'Don\'t confuse correlation with causation.'],
      careful: [{ title: 'Your own Task 2 essays', body: '<p>Examiners do not judge whether your opinion is right, but weak reasoning (overgeneralisation, unsupported causes) limits Task Response.</p>' }],
      exercises: {
        id: 'ch-adv-critical-thinking', title: 'Chapter exercises: critical thinking',
        groups: [{ kind: 'choice', instructions: 'Identify the reasoning error, <b>A, B or C</b>.', questions: [
          { n: 1, q: '"My neighbour\'s electric car broke down, so electric cars are unreliable."', opts: ['Hasty generalisation', 'False dilemma', 'Circular reasoning'], a: 'A', x: 'One case → general rule.' },
          { n: 2, q: '"Either we raise taxes or schools will close."', opts: ['False cause', 'False dilemma', 'Appeal to popularity'], a: 'B', x: 'Ignores other options (spending cuts, efficiency…).' },
          { n: 3, q: '"Sales of umbrellas rose after the advert, so the advert worked."', opts: ['False cause (it may have rained)', 'Slippery slope', 'Attacking the person'], a: 'A', x: 'An alternative explanation exists.' },
          { n: 4, q: '"Millions of people use this app, so it must be safe."', opts: ['Appeal to popularity', 'Circular reasoning', 'Hasty generalisation'], a: 'A', x: 'Popularity is not evidence of safety.' }
        ] }]
      },
      checklist: ['I can separate facts, opinions and assumptions.', 'I can name common fallacies.', 'I check my own arguments for them.'],
      summary: ['Critical thinking asks whether a claim is justified.', 'Separate facts, opinions and assumptions; evaluate evidence; check reasoning.', 'Apply the same standards to your own arguments.'],
      references: books
    }
  },

  argument: {
    title: 'Building an argument',
    lead: 'Claim, reason, evidence and counter-argument – the structure of persuasive writing and speaking.',
    chapter: {
      intro: `
<p>An <b>argument</b>, in the academic sense, is not a disagreement but a reasoned case: a <b>claim</b> supported by <b>reasons</b> and <b>evidence</b>, which anticipates and answers <b>objections</b>. The same structure works in a Task 2 paragraph, a Part 3 answer, a university essay and a professional report.</p>
<p>The most common weakness in IELTS essays is not a lack of ideas but a lack of <b>development</b>: a claim followed by another claim, with nothing in between. This chapter gives you a simple model – PEEL (Point, Explanation, Evidence/Example, Link) – and shows how to handle counter-arguments and qualify claims.</p>`,
      facts: [['Claim', 'What you want the reader to accept'], ['Reason', 'Why it is true'], ['Evidence', 'Examples, data, experience'], ['Counter-argument', 'The strongest objection'], ['Rebuttal', 'Why the objection does not defeat your claim'], ['Paragraph model', 'PEEL: Point – Explanation – Example – Link']],
      method: [
        { title: 'State one clear point per paragraph', body: '<p>A topic sentence that makes a single claim.</p>' },
        { title: 'Explain the reasoning', body: '<p>Show <i>how</i> or <i>why</i> the point is true – the step most often missing.</p>' },
        { title: 'Support with an example or evidence', body: '<p>A specific, relevant example; in IELTS, general or personal examples are acceptable.</p>' },
        { title: 'Link back to the question', body: '<p>A final sentence that connects the point to your thesis.</p>' },
        { title: 'Address the strongest counter-argument', body: '<p>Concede what is valid, then explain why your position still holds.</p>', example: '<i>Admittedly, … However, …</i> · <i>While it is true that…, this does not mean that…</i>' },
        { title: 'Qualify where necessary', body: '<p>Hedging (<i>in many cases, tends to</i>) makes a claim more defensible.</p>' }
      ],
      sections: [
        {
          id: 'peel', title: 'A PEEL paragraph',
          html: `<div class="model-answer"><p><b>[Point]</b> One major benefit of remote work is that it widens access to employment. <b>[Explanation]</b> When a job no longer requires daily attendance at an office, people who cannot commute – parents with young children, people with disabilities, or residents of rural areas – can compete for positions they were previously excluded from. <b>[Example]</b> A software company based in a capital city, for instance, can now hire a developer living three hundred kilometres away. <b>[Link]</b> In this way, remote work makes the labour market fairer as well as more flexible.</p></div>`
        },
        { id: 'band-impact', title: 'How argument structure affects your band', html: '<p>Task Response at Band 7 describes main ideas that are extended and supported; at Band 5–6, ideas are often insufficiently developed. The explanation step of PEEL is the single most effective way to move from one to the other.</p>' }
      ],
      dos: ['One point per paragraph.', 'Always explain how or why.', 'Use specific examples.', 'Concede and rebut the strongest objection.'],
      donts: ['Don\'t list several undeveloped points.', 'Don\'t use examples that do not support the point.', 'Don\'t ignore obvious objections.'],
      careful: [{ title: 'Examples are not explanations', body: '<p>An example illustrates a reason; it does not replace it. Give the reason first.</p>' }],
      exercises: {
        id: 'ch-adv-argument', title: 'Chapter exercises: building an argument',
        groups: [{ kind: 'choice', instructions: 'Choose the best answer, <b>A, B or C</b>.', questions: [
          { n: 1, q: 'Which sentence is an explanation (not just a claim)?', opts: ['Public transport is good.', 'Because one bus carries as many people as forty cars, public transport reduces congestion.', 'Many people like buses.'], a: 'B', x: 'It shows how the claim is true.' },
          { n: 2, q: 'Best way to introduce a concession:', opts: ['Admittedly, online courses can feel isolating.', 'Online courses are perfect.', 'Nobody disagrees.'], a: 'A', x: 'Concedes a valid objection.' },
          { n: 3, q: 'The "Link" sentence in PEEL…', opts: ['adds a new idea', 'connects the point back to the question or thesis', 'repeats the example'], a: 'B', x: 'It closes the paragraph\'s argument.' }
        ] }]
      },
      checklist: ['My paragraphs follow PEEL.', 'I explain every point.', 'I address counter-arguments.'],
      summary: ['Argument = claim + reasons + evidence + response to objections.', 'PEEL structures a developed paragraph.', 'Explanation is the step most often missing.'],
      references: books
    }
  },

  summarising: {
    title: 'Paraphrasing and summarising',
    lead: 'Reducing a text to its essential ideas in your own words – a core university skill and the key to many IELTS tasks.',
    chapter: {
      intro: `
<p>A <b>paraphrase</b> restates one idea in different words at about the same length. A <b>summary</b> reduces a whole text – or a section of it – to its main ideas, in your own words, at a fraction of the length. Both require you to understand the source fully and to express it without copying.</p>
<p>In IELTS, summarising is at the heart of Task 1 (the overview is a summary of the main features), Reading summary completion (the summary paraphrases the passage), and Listening note completion. At university it is essential for using sources honestly. This chapter builds on <a href="/grammar/sentence-transformation">Sentence transformation</a> and <a href="/grammar/paraphrasing">Paraphrasing techniques</a>.</p>`,
      facts: [['Paraphrase', 'One idea, new words, similar length'], ['Summary', 'Main ideas only, new words, much shorter'], ['Keep', 'The meaning and the qualifiers'], ['Remove', 'Examples, repetition, minor details'], ['Task 1 link', 'The overview is a summary'], ['Integrity', 'Cite the source of summarised ideas']],
      method: [
        { title: 'Read the whole text for the main idea', body: '<p>What is the text mainly about? Write it in one sentence before looking at details.</p>' },
        { title: 'Identify the key points of each section', body: '<p>Topic sentences often state them. Ignore examples and repetition.</p>' },
        { title: 'Note them in keywords – then close the text', body: '<p>Writing from notes, not from the text, forces you to use your own words.</p>' },
        { title: 'Write the summary in your own structure', body: '<p>Combine related points; use linkers to show relationships.</p>' },
        { title: 'Check accuracy and length', body: '<p>Compare with the original: no distortion, no added opinions, qualifiers kept.</p>' }
      ],
      sections: [
        {
          id: 'example', title: 'From text to summary',
          html: `<p><b>Original (82 words):</b> <i>Although many people assume that bees are threatened mainly by pesticides, recent research suggests that the picture is more complex. Habitat loss, particularly the disappearance of wildflower meadows, has reduced the food available to bees, while diseases spread by parasites have weakened colonies. Climate change also plays a role, altering the times at which flowers bloom so that they no longer coincide with the periods when bees are active. Pesticides are therefore only one of several interacting causes of decline.</i></p>
<p><b>Summary (31 words):</b> <i>Research indicates that bee decline has several interacting causes rather than pesticides alone: loss of wildflower habitats, parasite-borne diseases, and climate change, which disrupts the timing of flowering.</i></p>`
        },
        { id: 'band-impact', title: 'How summarising affects your IELTS performance', html: '<p>A strong Task 1 overview – the main trends without numbers – is a summary, and it is central to Task Achievement. In Reading, recognising a summary of a paragraph is the key to summary completion and matching headings.</p>' }
      ],
      dos: ['Understand the whole text first.', 'Write from notes, not from the text.', 'Keep qualifiers and meaning.', 'Leave out examples and minor details.'],
      donts: ['Don\'t copy phrases from the source.', 'Don\'t add your own opinions to a summary.', 'Don\'t change the strength of claims.'],
      careful: [{ title: 'Patchwriting', body: '<p>Replacing a few words with synonyms while keeping the original structure is not a real paraphrase. Change the structure as well.</p>' }],
      exercises: {
        id: 'ch-adv-summarising', title: 'Chapter exercises: summarising',
        groups: [{ kind: 'choice', instructions: 'Choose the best answer, <b>A, B or C</b>.', questions: [
          { n: 1, q: 'Which is the best summary of the bee text?', opts: ['Pesticides kill bees.', 'Bee decline has several interacting causes, including habitat loss, disease and climate change, not only pesticides.', 'Wildflower meadows are disappearing.'], a: 'B', x: 'It captures the main idea and key points.' },
          { n: 2, q: 'A summary should…', opts: ['include every example', 'contain the main ideas in your own words', 'add your opinion'], a: 'B', x: 'Main ideas, own words, no added opinion.' },
          { n: 3, q: 'The Task 1 overview is…', opts: ['a summary of the main features', 'a list of every number', 'your opinion of the chart'], a: 'A', x: 'It summarises without detailed data.' }
        ] }]
      },
      checklist: ['I can write a one-sentence main idea.', 'I summarise from notes.', 'My summaries keep meaning and qualifiers.'],
      summary: ['Paraphrase = same idea, new words; summary = main ideas, much shorter.', 'Understand, note, close the text, write, check.', 'Summarising underlies the Task 1 overview and summary completion.'],
      references: books
    }
  },

  'note-taking': {
    title: 'Note-taking',
    lead: 'Capturing the structure and key information of lectures and texts – for IELTS Listening and for study.',
    chapter: {
      intro: `
<p>Good notes record the <b>structure</b> of what you hear or read – the main points, how they relate, and the key supporting details – in as few words as possible. They are not a transcript. In IELTS Listening, Part 4 is a lecture, often with note completion questions that mirror exactly this kind of note; in Speaking Part 2, you have one minute to make notes for a two-minute talk. At university, note-taking is a daily skill.</p>`,
      facts: [['Purpose', 'Record structure and key information'], ['Not', 'A transcript'], ['Tools', 'Abbreviations, symbols, headings, indentation'], ['Listen for', 'Signposts: firstly, the main reason, in contrast, to sum up'], ['Methods', 'Outline, Cornell, mind map'], ['IELTS', 'Listening Part 4; Speaking Part 2 notes']],
      method: [
        { title: 'Prepare: predict the structure', body: '<p>From the title or questions, predict the main sections (causes, effects, examples, stages).</p>' },
        { title: 'Listen for signposts', body: '<p><i>There are three main factors… The second… In contrast… To sum up…</i> signal structure; let them shape your headings.</p>' },
        { title: 'Write keywords, not sentences', body: '<p>Nouns, numbers, names, key verbs. Use abbreviations and symbols (section 1).</p>' },
        { title: 'Show relationships visually', body: '<p>Indent supporting points; use arrows for cause and effect; group related ideas.</p>' },
        { title: 'Review and complete immediately', body: '<p>Fill gaps and expand abbreviations while the content is fresh.</p>' }
      ],
      sections: [
        {
          id: 'symbols', title: 'Useful abbreviations and symbols',
          html: `<div class="table-wrap"><table class="data-table plain"><tr><th>Symbol</th><th>Meaning</th><th>Symbol</th><th>Meaning</th></tr>
<tr><td>→</td><td>leads to, causes</td><td>←</td><td>is caused by</td></tr>
<tr><td>↑ / ↓</td><td>increase / decrease</td><td>= / ≠</td><td>equals / is different from</td></tr>
<tr><td>+ / –</td><td>advantage / disadvantage</td><td>e.g. / i.e.</td><td>for example / that is</td></tr>
<tr><td>c. / approx.</td><td>about</td><td>govt, info, edu</td><td>government, information, education</td></tr>
<tr><td>b/c</td><td>because</td><td>w/ · w/o</td><td>with · without</td></tr></table></div>
<p><b>Cornell method:</b> divide the page into a wide notes column, a narrow "cue" column for keywords and questions, and a summary strip at the bottom to fill in after the lecture.</p>`
        },
        { id: 'band-impact', title: 'How note-taking affects your IELTS performance', html: '<p>In Listening Part 4, recognising the structure of a lecture lets you follow the questions even when you miss a word. In Speaking Part 2, a quick, structured set of notes gives your talk a beginning, middle and end – supporting Fluency and Coherence.</p>' }
      ],
      dos: ['Predict the structure before listening.', 'Use signposts to organise notes.', 'Write keywords and symbols.', 'Review notes immediately.'],
      donts: ['Don\'t try to write everything.', 'Don\'t write full sentences.', 'Don\'t lose the structure in a list of details.'],
      careful: [{ title: 'Speaking Part 2 notes', body: '<p>In one minute, write 5–8 keywords grouped by the cue-card points – not sentences to read aloud.</p>' }],
      exercises: {
        id: 'ch-adv-note-taking', title: 'Chapter exercises: note-taking',
        groups: [{ kind: 'choice', instructions: 'Choose the best answer, <b>A, B or C</b>.', questions: [
          { n: 1, q: 'Best note for "Rising temperatures have caused a sharp decline in coral reefs":', opts: ['Rising temperatures have caused a sharp decline in coral reefs.', 'temp ↑ → coral reefs ↓↓', 'coral'], a: 'B', x: 'Keywords and symbols keep the meaning.' },
          { n: 2, q: '"To sum up…" in a lecture signals…', opts: ['a new topic', 'a conclusion', 'an example'], a: 'B', x: 'A concluding signpost.' },
          { n: 3, q: 'In the Cornell method, the bottom section is for…', opts: ['a summary', 'drawings only', 'the date'], a: 'A', x: 'A summary written after the lecture.' }
        ] }]
      },
      checklist: ['I predict lecture structure.', 'I use signposts and symbols.', 'I make structured Part 2 notes in one minute.'],
      summary: ['Notes record structure and key information, not every word.', 'Signposts shape headings; symbols save time.', 'Useful for Listening Part 4, Speaking Part 2 and study.'],
      references: [...books, { title: 'In this book: Listening fundamentals', url: '/listening/fundamentals' }, { title: 'In this book: Speaking Part 2', url: '/speaking/part-2' }]
    }
  },

  research: {
    title: 'Academic reading and research skills',
    lead: 'Reading long academic texts efficiently, evaluating sources and using them honestly.',
    chapter: {
      intro: `
<p>University study requires reading long, dense texts efficiently, judging which sources are trustworthy, and using other people's ideas honestly in your own work. IELTS Academic Reading tests a compressed version of the first skill – it uses texts written for a non-specialist but educated reader – and the habits you build here transfer directly to it.</p>`,
      facts: [['Survey first', 'Title, abstract, headings, conclusion'], ['Read with a question', 'Know what you are looking for'], ['Evaluate sources', 'Author, evidence, date, purpose'], ['Use sources honestly', 'Quote, paraphrase or summarise – and cite'], ['Plagiarism', 'Using others\' words or ideas without credit'], ['IELTS link', 'Academic Reading strategies']],
      method: [
        { title: 'Survey before you read', body: '<p>Read the title, abstract or introduction, headings and conclusion first. You now know the argument and where to look.</p>' },
        { title: 'Set a purpose', body: '<p>Write the question you want the text to answer. Read actively for that.</p>' },
        { title: 'Read selectively in detail', body: '<p>Read closely only the sections that address your question.</p>' },
        { title: 'Evaluate the source (CRAAP)', body: '<p><b>C</b>urrency (how recent?), <b>R</b>elevance, <b>A</b>uthority (who wrote it?), <b>A</b>ccuracy (evidence?), <b>P</b>urpose (inform, sell, persuade?).</p>' },
        { title: 'Record and cite', body: '<p>Note the author, title, date and page for every idea you might use. Paraphrase in your own words and always credit the source.</p>' }
      ],
      sections: [
        { id: 'honesty', title: 'Using sources honestly', html: '<p><b>Quote</b> (exact words, in quotation marks, with a citation) when wording matters; <b>paraphrase</b> (own words, cited) for one idea; <b>summarise</b> (own words, cited) for main ideas. Presenting another person\'s words or ideas as your own is plagiarism, even if accidental.</p>' },
        { id: 'band-impact', title: 'How these skills support IELTS', html: '<p>Surveying a text before the questions mirrors the skimming stage in Reading fundamentals. Evaluating sources and purpose helps with questions about the writer\'s views and claims.</p>' }
      ],
      dos: ['Survey before reading.', 'Read with a purpose.', 'Evaluate sources with CRAAP.', 'Cite every idea you use.'],
      donts: ['Don\'t read every word of every source.', 'Don\'t trust a source without checking its author and evidence.', 'Don\'t copy without citation.'],
      careful: [{ title: 'Sponsored content', body: '<p>Websites that sell a product may present information selectively. Check the purpose.</p>' }],
      exercises: {
        id: 'ch-adv-research', title: 'Chapter exercises: academic reading and research',
        groups: [{ kind: 'choice', instructions: 'Choose the best answer, <b>A, B or C</b>.', questions: [
          { n: 1, q: 'The most efficient first step with a long article is to…', opts: ['read every word', 'survey the title, abstract, headings and conclusion', 'look up every unknown word'], a: 'B', x: 'Surveying gives you the map.' },
          { n: 2, q: 'In CRAAP, "Purpose" asks…', opts: ['how long the text is', 'whether the source aims to inform, sell or persuade', 'whether you like it'], a: 'B', x: 'Purpose affects reliability.' },
          { n: 3, q: 'Paraphrasing a source without citing it is…', opts: ['acceptable', 'plagiarism', 'a summary'], a: 'B', x: 'Ideas need credit as well as words.' }
        ] }]
      },
      checklist: ['I survey texts before reading.', 'I evaluate sources.', 'I cite what I use.'],
      summary: ['Survey, set a purpose, read selectively.', 'Evaluate currency, relevance, authority, accuracy, purpose.', 'Quote, paraphrase or summarise – always cite.'],
      references: [...books, { title: 'In this book: Reading fundamentals', url: '/reading/fundamentals' }]
    }
  },

  presentations: {
    title: 'Presentation and discussion skills',
    lead: 'Structuring a talk, signposting, and taking part in discussions – the spoken English of study and work.',
    chapter: {
      intro: `
<p>Presentations and discussions are the spoken genres of university and professional life. A good presentation has a clear structure that the audience can hear – signposted, chunked and paced. A good discussion contribution responds to others, builds on or challenges their points politely, and moves the conversation forward. Speaking Part 2 is a short presentation; Part 3 is a discussion. The skills in this chapter raise your performance in both, and will serve you long after the test.</p>`,
      facts: [['Structure', 'Introduction – main points – conclusion'], ['Signposting', 'First… Moving on to… To sum up…'], ['Delivery', 'Pace, pausing, stress, eye contact'], ['Discussion moves', 'agree, build, challenge, clarify, summarise'], ['IELTS', 'Part 2 = mini-presentation; Part 3 = discussion'], ['Golden rule', 'Make the structure audible']],
      method: [
        { title: 'Plan three main points', body: '<p>Three points are easy to follow and remember.</p>' },
        { title: 'Signpost the structure', body: '<p><i>I\'m going to talk about three things… First… Moving on to… Finally… To sum up…</i></p>' },
        { title: 'Chunk and pause', body: '<p>Short thought groups with pauses at boundaries; a slower pace than conversation.</p>' },
        { title: 'Use discussion moves', body: '<p>Agree and build (<i>That\'s a good point, and…</i>), challenge politely (<i>I see what you mean, but…</i>), clarify (<i>Do you mean that…?</i>), summarise (<i>So, what we\'re saying is…</i>).</p>' },
        { title: 'Practise and record', body: '<p>Record a two-minute talk weekly and check structure, signposting and pace.</p>' }
      ],
      sections: [
        { id: 'language', title: 'Signposting and discussion language', html: '<div class="table-wrap"><table class="data-table plain"><tr><th>Function</th><th>Language</th></tr><tr><td>Opening</td><td>Today I\'d like to talk about… · I\'ve divided my talk into three parts.</td></tr><tr><td>Moving on</td><td>Turning now to… · That brings me to my second point.</td></tr><tr><td>Example</td><td>To give you an example… · Take…, for instance.</td></tr><tr><td>Concluding</td><td>To sum up… · The key point is…</td></tr><tr><td>Agreeing / building</td><td>Exactly – and on top of that… · I\'d go further and say…</td></tr><tr><td>Challenging politely</td><td>I take your point, but… · I\'m not sure I agree, because…</td></tr></table></div>' },
        { id: 'band-impact', title: 'How these skills affect your Speaking band', html: '<p>Fluency and Coherence rewards speech that is easy to follow and logically organised, with a range of connectives and discourse markers. Signposting your Part 2 talk and engaging with the examiner\'s questions in Part 3 demonstrate exactly that.</p>' }
      ],
      dos: ['Plan three clear points.', 'Signpost every transition.', 'Pause between thought groups.', 'Respond to and build on others\' points.'],
      donts: ['Don\'t read a script.', 'Don\'t rush.', 'Don\'t simply repeat what others said.'],
      careful: [{ title: 'Over-signposting', body: '<p>In a two-minute Part 2 talk, light signposting (<i>So… Another thing… What I liked most…</i>) is enough; heavy formal signposting can sound mechanical.</p>' }],
      exercises: {
        id: 'ch-adv-presentations', title: 'Chapter exercises: presentations and discussion',
        groups: [{ kind: 'choice', instructions: 'Choose the best answer, <b>A, B or C</b>.', questions: [
          { n: 1, q: 'Which phrase moves to a new point?', opts: ['That brings me to my second point.', 'To sum up…', 'For instance…'], a: 'A', x: 'A transition signpost.' },
          { n: 2, q: 'Which challenges a point politely?', opts: ['You\'re wrong.', 'I take your point, but I think the cost matters more.', 'Whatever.'], a: 'B', x: 'Acknowledges, then disagrees with a reason.' },
          { n: 3, q: 'Speaking Part 2 is best treated as…', opts: ['a mini-presentation with a clear structure', 'a list of unrelated facts', 'a written essay read aloud'], a: 'A', x: 'Plan and signpost a short talk.' }
        ] }]
      },
      checklist: ['I plan talks with three points.', 'I signpost transitions.', 'I use polite discussion moves.'],
      summary: ['Make the structure of your talk audible.', 'Signpost, chunk and pace.', 'In discussion, agree, build, challenge and clarify politely.'],
      references: [...books, { title: 'In this book: Speaking Part 2', url: '/speaking/part-2' }, { title: 'In this book: Speaking Part 3', url: '/speaking/part-3' }]
    }
  }
};

export const advancedOverview: Chapter = {
  intro: `
<p>IELTS measures your English at one moment; university, work and life in an English-speaking environment demand much more. This part of the book develops the skills that sit behind a high band and beyond it: thinking critically, building arguments, summarising, taking notes, reading and researching academically, and presenting and discussing.</p>
<p>Several skills listed in the curriculum for this stage are developed elsewhere in the book, and are linked below rather than repeated: reading and listening comprehension (the Reading and Listening parts), formal and academic English (the Writing part and the Grammar masterclass), sentence construction (Grammar masterclass, Part C), essay writing (Task 2 chapters), and spoken English and conversation (Speaking part and the pronunciation masterclass).</p>`,
  facts: [['Chapters', 'Six, from critical thinking to presentations'], ['Level', 'Upper-intermediate to advanced'], ['Links to IELTS', 'Reading YNNG, Task 2, Part 3, Listening Part 4'], ['Beyond IELTS', 'University and professional English'], ['Practice', 'Exercises in every chapter'], ['Prerequisite', 'Comfortable with the grammar masterclass Parts A–C']],
  method: [
    { title: 'Start with critical thinking and argument', body: '<p>They improve Task 2 and Part 3 immediately.</p>' },
    { title: 'Add summarising and note-taking', body: '<p>They support Task 1 overviews, Reading summaries and Listening Part 4.</p>' },
    { title: 'Finish with research and presentation skills', body: '<p>Especially if you are preparing for university.</p>' }
  ],
  sections: [{ id: 'map', title: 'Where the other advanced skills are taught', html: '<ul><li>Reading comprehension: <a href="/reading/fundamentals">Reading fundamentals</a> and the question-type chapters.</li><li>Listening comprehension: <a href="/listening/fundamentals">Listening fundamentals</a>, <a href="/speaking/pronunciation/connected-speech">Connected speech</a>.</li><li>Academic and formal English: <a href="/grammar/grammar-for-writing">Grammar for IELTS Writing</a>, <a href="/vocabulary/register">Formal vs informal vocabulary</a>.</li><li>Sentence construction: <a href="/grammar/subject-predicate">Subject, predicate and clauses</a>.</li><li>Essay writing: <a href="/writing/task-2">Task 2 method</a>.</li><li>Spoken English and conversation: <a href="/speaking">Speaking</a>, <a href="/grammar/interjections">Discourse markers</a>.</li></ul>' }],
  dos: ['Work through the chapters in order.', 'Apply each skill to an IELTS task the same week.'],
  donts: ['Don\'t treat these skills as separate from the exam – each one raises a criterion.'],
  careful: [{ title: 'Level', body: '<p>These chapters assume a solid grammatical base. If basic accuracy is still a problem, prioritise the grammar masterclass first.</p>' }],
  checklist: ['I know which advanced skill each chapter develops.', 'I know where the other skills are taught.'],
  summary: ['Part 8 develops critical thinking, argument, summarising, note-taking, research and presentation skills.', 'Other advanced skills are taught in the relevant skill parts.'],
  references: books
};

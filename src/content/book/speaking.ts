import type { Chapter } from '@/lib/types';

/* Speaking: fundamentals + one chapter per part */

export const speakingFundamentals: Chapter = {
  intro: `
<p>The Speaking test is a recorded, face-to-face conversation with a trained examiner. It lasts <b>11–14 minutes</b> and has three parts: a short interview about familiar topics (Part 1), a two-minute talk on a topic from a card (Part 2), and a discussion of more abstract questions linked to the Part 2 topic (Part 3). It is identical for Academic and General Training.</p>
<p>You are assessed on four equally weighted criteria: <b>Fluency and Coherence</b>, <b>Lexical Resource</b>, <b>Grammatical Range and Accuracy</b>, and <b>Pronunciation</b>. Notice what is <i>not</i> assessed: your opinions, your general knowledge, whether your stories are true, or your accent. The examiner is listening to <b>how</b> you speak, not <b>what</b> you believe.</p>
<p>This chapter explains what each criterion means in practice and gives you the techniques that apply to all three parts: extending answers, buying thinking time naturally, paraphrasing when you don't know a word, and correcting yourself without losing fluency.</p>`,
  facts: [
    ['Length', '11–14 minutes'],
    ['Parts', '3 (interview · long turn · discussion)'],
    ['Format', 'Face-to-face (or video call), recorded'],
    ['Criteria', 'Fluency · Vocabulary · Grammar · Pronunciation (25% each)'],
    ['Not assessed', 'Your opinions, knowledge, honesty or accent'],
    ['Same for', 'Academic and General Training']
  ],
  tests: `
<div class="table-wrap"><table class="data-table">
<tr><th>Criterion</th><th>Band 5</th><th>Band 7</th><th>What to practise</th></tr>
<tr><td>Fluency & Coherence</td><td>Usually maintains flow but with repetition, self-correction and slow speech; overuses simple connectives</td><td>Speaks at length without noticeable effort; some hesitation; uses a range of connectives and discourse markers</td><td>Extending answers; discourse markers (actually, the thing is, on top of that)</td></tr>
<tr><td>Lexical Resource</td><td>Manages familiar topics; limited flexibility; attempts paraphrase with mixed success</td><td>Flexible vocabulary; some less common and idiomatic items; effective paraphrase</td><td>Topic vocabulary, collocations, natural idioms, paraphrasing</td></tr>
<tr><td>Grammar</td><td>Basic forms reasonably accurate; limited complex structures with errors</td><td>Range of complex structures used with some flexibility; frequent error-free sentences</td><td>Tenses, conditionals, relative clauses, comparisons</td></tr>
<tr><td>Pronunciation</td><td>Some features used; mispronunciation sometimes causes difficulty</td><td>Wide range of features; easy to understand; L1 accent has minimal effect</td><td>Word and sentence stress, chunking, intonation</td></tr>
</table></div>`,
  method: [
    { title: 'Answer the question directly', body: '<p>Begin with a clear response to the exact question. It shows you understood and gives your answer a starting point.</p>' },
    { title: 'Extend: reason, example, detail', body: '<p>Never stop at one sentence. Add why, an example, a contrast or a feeling. Part 1: 2–4 sentences. Part 3: 4–7 sentences.</p>' },
    { title: 'Connect your ideas', body: '<p>Use spoken discourse markers: <i>actually, to be honest, the thing is, I mean, on top of that, that\'s why, having said that</i>. They make speech sound natural and coherent.</p>' },
    { title: 'Buy time naturally when you need it', body: '<p>A short thinking phrase is better than silence: <i>"That\'s an interesting question – I\'ve never really thought about it, but..." / "Let me think... I suppose..."</i>. Use them sparingly.</p>' },
    { title: 'Paraphrase when you don\'t know a word', body: '<p>Describe it instead of stopping: <i>"It\'s a kind of... / the thing you use to... / I\'m not sure of the exact word, but it\'s..."</i>. Successful paraphrase is part of the Lexical Resource criterion.</p>' },
    { title: 'Correct yourself quickly, if at all', body: '<p>If you make an obvious mistake, correct it briefly ("I go – I went there last year") and carry on. Don\'t stop to restart sentences repeatedly.</p>' },
    { title: 'Ask for repetition if you need it', body: '<p>"Sorry, could you repeat the question, please?" is perfectly acceptable. In Part 3 you can also ask for clarification: "Do you mean...?"</p>' }
  ],
  sections: [
    {
      id: 'markers', title: 'Spoken discourse markers',
      html: `<div class="table-wrap"><table class="data-table plain">
<tr><th>Function</th><th>Markers</th></tr>
<tr><td>Starting / buying time</td><td>Well, ... / To be honest, ... / Actually, ... / Let me think...</td></tr>
<tr><td>Adding</td><td>On top of that, ... / What's more, ... / Not only that, but...</td></tr>
<tr><td>Giving a reason</td><td>The thing is, ... / That's mainly because... / The main reason is...</td></tr>
<tr><td>Contrasting</td><td>Having said that, ... / Then again, ... / On the other hand, ...</td></tr>
<tr><td>Giving an example</td><td>For instance, ... / Take..., for example. / A good example would be...</td></tr>
<tr><td>Clarifying</td><td>I mean, ... / What I'm trying to say is... / In other words, ...</td></tr>
<tr><td>Concluding a turn</td><td>So, all in all, ... / That's why... / So yes, ...</td></tr>
</table></div>`
    }
  ],
  dos: ['Answer directly, then extend.', 'Speak to communicate, at a natural pace.', 'Use discourse markers to connect ideas.', 'Paraphrase when you lack a word.', 'Ask for repetition when needed.', 'Show a range of tenses and structures naturally.'],
  donts: ['Don\'t give one-word or one-sentence answers.', 'Don\'t memorise answers – examiners notice and may change the topic.', 'Don\'t use rare words you are unsure of just to impress.', 'Don\'t stay silent while thinking – use a thinking phrase.', 'Don\'t worry about your accent; focus on clarity.'],
  careful: [
    { title: 'Memorised answers', body: '<p>Rehearsed answers sound unnatural (flat intonation, unusual vocabulary for the level, no hesitation) and often don\'t fit the exact question. Prepare <b>ideas and vocabulary</b> for topics, not scripts.</p>' },
    { title: 'Over-long answers in Part 1', body: '<p>Part 1 answers of a minute or more stop the examiner from covering the questions. Keep them to 15–25 seconds.</p>' },
    { title: 'Fillers', body: '<p>Too many <i>umm, you know, like</i> reduce fluency. Replace them with purposeful markers: <i>well, actually, I mean</i>.</p>' }
  ],
  faq: [
    { q: 'Does my accent matter?', a: '<p>No. Pronunciation is about how easy you are to understand: individual sounds, word stress, sentence stress, rhythm and intonation. A clear speaker with a strong accent can score highly.</p>' },
    { q: 'Do I have to tell the truth?', a: '<p>No. You are assessed on language, not honesty. If you have no experience of a topic, invent one that you can describe easily.</p>' }
  ],
  checklist: ['I know the four criteria and what Band 7 means for each.', 'I extend every answer with reasons and examples.', 'I have a set of discourse markers I use naturally.', 'I can paraphrase when I lack a word.'],
  summary: ['Four equal criteria: fluency, vocabulary, grammar, pronunciation.', 'Answer directly, then extend.', 'Natural connectors, paraphrase and thinking phrases keep you fluent.', 'Prepare ideas and vocabulary, never scripts.']
};

export const speakingChapters: Record<string, Chapter> = {
  /* ======================================================================= */
  part1: {
    intro: `
<p>Part 1 lasts <b>4–5 minutes</b>. After checking your identity, the examiner asks questions on <b>two or three familiar topics</b>: usually one about you (your work or studies, or where you live) and then topics such as weather, music, food, transport, weekends, or using the internet. The questions come from a script, and the examiner moves on after each answer, so this part is about short, natural, well-extended answers.</p>
<p>Part 1 is your chance to settle in and make a good first impression. Many candidates either answer too briefly ("Yes, I do.") or give a long prepared speech. The ideal is <b>2–4 sentences</b> (15–25 seconds) that answer the question and add a reason, an example or a contrast.</p>`,
    facts: [['Time', '4–5 minutes'], ['Topics', '2–3 familiar topics'], ['Questions', 'About 9–12 short questions'], ['Ideal answer', '2–4 sentences, 15–25 seconds'], ['Technique', 'A-R-E: Answer, Reason, Example'], ['Tenses', 'Present, past and future naturally mixed']],
    anatomy: `<p>What you will hear:</p>
<div class="callout"><i>"Good morning. My name is... Can you tell me your full name, please? ... Thank you. Now, in this first part, I'd like to ask you some questions about yourself. Let's talk about what you do. Do you work or are you a student?"</i></div>
<p>Then: <i>"Now let's talk about music. How often do you listen to music? ... What kind of music did you like when you were a child?..."</i></p>`,
    method: [
      { title: 'Listen for the question type', body: '<p>Is it about frequency (How often...?), preference (Do you prefer...?), the past (Did you... as a child?), or the future (Would you like to...?)? The question tells you the tense to use.</p>' },
      { title: 'A – Answer directly', body: '<p>Start with a clear answer, ideally paraphrasing the question rather than repeating it.</p>', example: 'Q: Do you like cooking? → "Yes, I\'m quite a keen cook, actually."' },
      { title: 'R – Give a reason', body: '<p>Explain why: "...because it helps me unwind after work."</p>' },
      { title: 'E – Add an example or extra detail', body: '<p>A specific example, a contrast with the past, or a feeling: "...Last weekend I made a Thai curry from scratch, and it turned out surprisingly well."</p>' },
      { title: 'Stop naturally', body: '<p>Finish the thought and let the examiner continue. Don\'t add a second and third example.</p>' }
    ],
    sections: [
      {
        id: 'bands', title: 'The same question at Band 5, 7 and 9',
        html: `<p><b>Q: Do you enjoy cooking?</b></p>
<div class="band-compare">
<div><h4>Band 5</h4><p><i>"Yes, I like cooking. I cook every day. It is good."</i></p><p class="small muted">Answers, but short, repetitive and basic.</p></div>
<div><h4>Band 7</h4><p><i>"Yes, I really enjoy it, actually. It helps me relax after a long day at work, and I like trying new recipes – last weekend, for example, I made a Thai curry from scratch."</i></p></div>
<div><h4>Band 9</h4><p><i>"I'd say I\'m a fairly keen cook. There\'s something quite therapeutic about chopping vegetables after a hectic day, and I love experimenting – I recently had a go at making Thai green curry from scratch, which turned out far better than I\'d expected."</i></p></div>
</div>`
      },
      {
        id: 'types', title: 'Part 1 question types and useful patterns',
        html: `<div class="table-wrap"><table class="data-table">
<tr><th>Question type</th><th>Example</th><th>Useful pattern</th></tr>
<tr><td>Like / dislike</td><td>Do you like rainy days?</td><td>I'm (not) a big fan of... / I'm really into... / ...isn't really my thing</td></tr>
<tr><td>Frequency</td><td>How often do you go to the cinema?</td><td>Once in a blue moon / every now and then / pretty much every weekend</td></tr>
<tr><td>Past</td><td>Did you like music as a child?</td><td>When I was younger, I used to... / Back then...</td></tr>
<tr><td>Change</td><td>Has your taste changed?</td><td>I used to..., but these days I... / Nowadays I tend to...</td></tr>
<tr><td>Preference</td><td>Do you prefer A or B?</td><td>I'd much rather... / It depends, but generally...</td></tr>
<tr><td>Future / wish</td><td>Would you like to learn an instrument?</td><td>I'd love to... / If I had more time, I'd...</td></tr>
</table></div>`
      }
    ],
    worked: [{
      title: 'Building Part 1 answers step by step',
      instructions: '<i>Topic: Where you live. Try answering each question aloud in 15–25 seconds before opening the walkthrough.</i>',
      questions: '<ol><li>Do you live in a house or a flat?</li><li>What do you like most about the area where you live?</li><li>Would you like to live somewhere else in the future?</li></ol>',
      walk: [
        { q: '1. Do you live in a house or a flat?', a: '', steps: ['<b>A:</b> "I live in a flat, on the fourth floor of a fairly new building."', '<b>R/E:</b> "It\'s not huge, but it\'s got a small balcony, which is lovely in the summer because I can have breakfast outside."'] },
        { q: '2. What do you like most about the area?', a: '', steps: ['<b>A:</b> "Probably how convenient it is."', '<b>R:</b> "Everything I need is within walking distance – there\'s a supermarket, a gym and a couple of nice cafés."', '<b>E:</b> "And the metro station is only five minutes away, so getting to work is really easy."'] },
        { q: '3. Would you like to live somewhere else in the future?', a: '', steps: ['<b>Tense:</b> future / hypothetical → "I\'d like to...", "If I could...".', '<b>A:</b> "Eventually, yes."', '<b>R/E:</b> "I\'d love to live somewhere closer to the sea. If I could work remotely, I\'d probably move to a small coastal town where life is a bit slower."'] }
      ],
      lesson: 'Each answer is 2–3 sentences, uses the tense the question asks for, and adds one reason or example. That is the Part 1 formula.'
    }],
    dos: ['Answer in 2–4 sentences.', 'Use the tense the question invites.', 'Paraphrase the question in your answer.', 'Show interest and natural intonation.'],
    donts: ['Don\'t answer "Yes." or "No." alone.', 'Don\'t give a one-minute speech.', 'Don\'t repeat the question word for word.', 'Don\'t use memorised introductions ("Well, this is a very interesting question...") for every answer.'],
    careful: [
      { title: 'Work or study?', body: '<p>This is almost always the first question. Prepare to talk naturally about what you do, what you like about it and what is challenging – in your own words.</p>' },
      { title: 'Questions about the past', body: '<p>"Did you... when you were a child?" needs past tenses: <i>used to, would, was/were</i>. Many candidates answer in the present.</p>' }
    ],
    timing: '<p>15–25 seconds per answer. The examiner has to cover several topics, so short, well-extended answers are best.</p>',
    checklist: ['My answers are 2–4 sentences.', 'I use A-R-E naturally.', 'I match tenses to the question.', 'I can talk about my work/studies and home confidently.'],
    summary: ['Short, natural, extended answers.', 'Answer – Reason – Example.', 'Match the tense to the question.']
  },

  /* ======================================================================= */
  part2: {
    intro: `
<p>In Part 2 – the "long turn" – the examiner gives you a <b>task card</b> with a topic ("Describe a book you enjoyed reading") and three or four prompts ("You should say: what the book was, who wrote it, what it was about, and explain why you enjoyed it"). You have <b>one minute</b> to prepare, with paper and a pencil, and then you speak for <b>up to two minutes</b>. The examiner will stop you at two minutes and may ask one or two short follow-up questions.</p>
<p>Part 2 tests whether you can <b>speak at length</b> on a topic, organise your ideas, and keep going. The two most common problems are stopping too early (after 50–60 seconds) and losing structure. Both are solved by using the one-minute preparation well.</p>`,
    facts: [['Preparation', '1 minute with paper and pencil'], ['Speaking', 'Up to 2 minutes – aim to fill it'], ['Card', 'Topic + 3–4 prompts'], ['Follow-up', '1–2 short questions'], ['Main tenses', 'Narrative past tenses (often)'], ['Key skill', 'Speaking at length with structure']],
    anatomy: `<div class="cue-card"><h3>Describe a book you enjoyed reading.</h3><p>You should say:</p><ul><li>what the book was</li><li>who wrote it</li><li>what it was about</li></ul><p>and explain why you enjoyed it.</p></div>
<ul><li>The first prompts are <b>descriptive</b> (what, who, when, where) – about 20–25 seconds each.</li><li>The last prompt ("explain why...") is the <b>deepest</b> – plan to make it the longest part (30–40 seconds).</li><li>You don\'t have to follow the prompts in order, but it is the simplest way to stay organised.</li></ul>`,
    method: [
      { title: 'Choose your subject in 5–10 seconds', body: '<p>Pick something you can talk about easily – it does not have to be your favourite, or even true. If nothing comes to mind, invent a realistic example that fits the card: the examiner assesses your language, not your honesty. Don\'t waste the minute searching for the "best" answer.</p>' },
      { title: 'Write keywords, not sentences (40 seconds)', body: '<p>One line per prompt, 3–5 keywords each. Add vocabulary you want to use.</p>', example: 'Sapiens · Harari, Israeli historian · history of humans: agriculture, money, shared stories · changed how I see money; debates with friends; recommended it' },
      { title: 'Plan a strong final prompt', body: '<p>Note 2–3 reasons or feelings for the "explain why" prompt, and one short story or example.</p>' },
      { title: 'Open with a clear first sentence', body: '<p>"I\'d like to talk about..." / "The book I\'m going to describe is..."</p>' },
      { title: 'Follow your notes, extending each point', body: '<p>For each prompt: say it, then add detail – when, where, who, how it felt, an example.</p>' },
      { title: 'Keep going until the examiner stops you', body: '<p>If you finish early, extend: compare past and present ("Back then... now..."), add a related story, or say whether you would recommend it and to whom.</p>' }
    ],
    sections: [
      {
        id: 'extend', title: 'Seven ways to keep talking for two minutes',
        html: `<ol class="steps">
<li><b>Add the five senses</b> (places, events): what you saw, heard, smelled, tasted, felt.</li>
<li><b>Tell a mini-story</b>: "I remember one time when..."</li>
<li><b>Compare past and present</b>: "Back then I... whereas now I..."</li>
<li><b>Explain your feelings</b> in detail: "At first I was nervous, but..."</li>
<li><b>Mention other people</b>: what friends or family thought.</li>
<li><b>Say what you learned</b> or how it changed you.</li>
<li><b>Look ahead</b>: "If I had the chance, I\'d love to..."</li>
</ol>`
      },
      {
        id: 'bands', title: 'Band 5 vs Band 7+ openings',
        html: `<div class="band-compare">
<div><h4>Band 5</h4><p><i>"OK. The book is Sapiens. The writer is Harari. It is about history. I like it because it is interesting."</i></p><p class="small muted">Covers the prompts in 15 seconds; nothing left to say.</p></div>
<div><h4>Band 7+</h4><p><i>"I\'d like to talk about a book called Sapiens by Yuval Noah Harari, which I read a couple of years ago when a friend lent it to me during the summer holidays. Harari is an Israeli historian, and what makes his writing special is that he manages to explain extremely complex ideas in a really accessible way..."</i></p></div>
</div>`
      }
    ],
    worked: [{
      title: 'One minute of notes → two minutes of speech',
      instructions: '<div class="cue-card"><h3>Describe a place you visited that you would like to go back to.</h3><p>You should say:</p><ul><li>where it was</li><li>when you went there</li><li>what you did there</li></ul><p>and explain why you would like to go back.</p></div>',
      walk: [
        { q: 'Notes (written in 1 minute)', a: '', steps: ['WHERE: Lake Bled, Slovenia – mountains, island church', 'WHEN: 3 yrs ago, Sept, with sister, after exams', 'DID: walked round lake (6 km), rowing boat → island, cream cake, sunrise hike Ojstrica viewpoint', 'WHY: peaceful (vs. city), sister moving abroad → memory, missed castle (rain) → next time, autumn colours'] },
        { q: 'Opening (≈ 15 s)', a: '', steps: ['"I\'d like to talk about Lake Bled, a small lake in the mountains of north-west Slovenia, which I visited with my sister about three years ago."'] },
        { q: 'When / where (≈ 30 s)', a: '', steps: ['"We went in September, just after I\'d finished my university exams, so I was desperate for a break. The lake is surrounded by forested hills, and right in the middle there\'s a tiny island with a church on it, which looks almost unreal, like something from a postcard."'] },
        { q: 'What we did (≈ 35 s)', a: '', steps: ['"We spent most of our time outdoors. On the first day we walked all the way round the lake – it\'s about six kilometres – and then we hired a wooden rowing boat to get to the island. I have to admit my sister did most of the rowing! The highlight, though, was getting up before dawn to hike up to a viewpoint above the lake. Watching the sun rise over the mountains, with mist on the water, was absolutely breathtaking."'] },
        { q: 'Why go back (≈ 40 s)', a: '', steps: ['"There are a few reasons I\'d love to return. First of all, it was incredibly peaceful – a complete contrast with the noise of the city where I live. Secondly, it\'s a special memory because my sister moved abroad shortly afterwards, so it was our last trip together for a long time. And finally, it rained on our last day, so we never managed to visit the castle on the cliff. Next time, I\'d like to go in October, when the trees change colour, and take my sister with me again."'] }
      ],
      lesson: 'The notes are just keywords, but each one became a sentence or two with detail. The final prompt had three reasons and a look to the future – which easily fills the remaining time.'
    }],
    dos: ['Use the full minute to write keywords.', 'Make the last prompt the longest.', 'Use narrative tenses: past simple, past continuous, past perfect.', 'Keep talking until stopped.'],
    donts: ['Don\'t write full sentences in your notes.', 'Don\'t stop at 1 minute and wait.', 'Don\'t read your notes aloud word for word.', 'Don\'t change topic halfway.'],
    careful: [
      { title: 'Running out of ideas', body: '<p>Use the seven extension techniques. A short story or a past/present comparison can add 20–30 seconds naturally.</p>' },
      { title: 'Ignoring a prompt', body: '<p>Prompts guide you; covering all of them keeps your talk relevant. The final "explain" prompt is the most important.</p>' }
    ],
    timing: '<p>Preparation: 10 seconds to choose, 40 seconds for keywords, 10 seconds to plan the last prompt. Speaking: ~15 s introduction, ~25 s per descriptive prompt, ~35–40 s for the final prompt, then extend if time remains.</p>',
    checklist: ['I can choose a subject in under 10 seconds.', 'My notes are keywords only.', 'I can speak for the full two minutes.', 'I have extension techniques ready.'],
    summary: ['One minute of keyword notes → two minutes of structured speech.', 'The final prompt deserves the most time.', 'Extend with stories, senses, comparisons and feelings.']
  },

  /* ======================================================================= */
  part3: {
    intro: `
<p>Part 3 is a <b>4–5 minute discussion</b> of more abstract questions related to the Part 2 topic. If Part 2 was about a book you enjoyed, Part 3 might ask: <i>Why do some young people not read books? Will printed books disappear? Should governments fund public libraries?</i> The questions move from you to <b>society, people in general, comparisons, causes and the future</b>.</p>
<p>This part distinguishes Band 6 from Band 7+. The examiner is checking whether you can express and justify opinions, speculate, compare and evaluate – using more complex language. They may challenge your view or ask follow-up questions; this is normal and not a sign that your answer was wrong.</p>`,
    facts: [['Time', '4–5 minutes'], ['Questions', 'About 4–6, linked to Part 2'], ['Focus', 'Society, comparisons, causes, future'], ['Ideal answer', '4–7 sentences, 30–60 seconds'], ['Technique', 'O-R-E-C: Opinion, Reason, Example, Contrast/Consequence'], ['Key grammar', 'Conditionals, modals of speculation, comparatives']],
    method: [
      { title: 'Identify the question type', body: '<p>Opinion? Compare? Cause/effect? Future? Evaluate a solution? Each type has its own language (see the table below).</p>' },
      { title: 'O – Give your opinion clearly', body: '<p>"I\'d say that..." / "It depends, but on the whole..." / "I strongly believe..."</p>' },
      { title: 'R – Explain the reason', body: '<p>"The main reason is that..." Develop it with a chain of consequences.</p>' },
      { title: 'E – Give a general example', body: '<p>Not just a personal one: "In my country, for example, ..." / "Take public libraries, for instance."</p>' },
      { title: 'C – Add a contrast or consequence', body: '<p>Show you see complexity: "Having said that, ..." / "As a result, ..." / "Of course, this isn\'t true for everyone."</p>' },
      { title: 'Handle difficult questions honestly', body: '<p>"That\'s a difficult question – I\'ve never really thought about it, but I suppose..." Then answer using O-R-E-C.</p>' }
    ],
    sections: [
      {
        id: 'types', title: 'Part 3 question types and language',
        html: `<div class="table-wrap"><table class="data-table">
<tr><th>Type</th><th>Example</th><th>Language</th></tr>
<tr><td>Opinion</td><td>Do you think reading is less popular today?</td><td>I'd argue that... / From my perspective... / I'm inclined to think...</td></tr>
<tr><td>Compare</td><td>How is reading different now from 50 years ago?</td><td>Whereas in the past..., nowadays... / far more / much less / not nearly as</td></tr>
<tr><td>Cause / effect</td><td>Why do young people read less?</td><td>This is largely due to... / One consequence is... / This has led to...</td></tr>
<tr><td>Future / speculate</td><td>Will printed books disappear?</td><td>I doubt that... / It's quite likely that... / ...might well... / In the foreseeable future...</td></tr>
<tr><td>Evaluate / solution</td><td>What can schools do to encourage reading?</td><td>One effective measure would be... / If schools..., children would...</td></tr>
<tr><td>Agree / disagree</td><td>Some say libraries are no longer needed. Do you agree?</td><td>I see their point, but... / I couldn't disagree more...</td></tr>
</table></div>`
      },
      {
        id: 'bands', title: 'The same question at Band 5, 7 and 9',
        html: `<p><b>Q: Why do some young people not read books any more?</b></p>
<div class="band-compare">
<div><h4>Band 5</h4><p><i>"Because they use phones. Phones are more interesting. They play games and use social media."</i></p><p class="small muted">Relevant but short, simple and listed.</p></div>
<div><h4>Band 7</h4><p><i>"I think the main reason is that there are so many other forms of entertainment. Young people have social media, streaming and games on their phones, and these are more instantly rewarding than a book. Having said that, they probably still read a lot online, just shorter texts."</i></p></div>
<div><h4>Band 9</h4><p><i>"I'd say it's largely down to the sheer competition for their attention. Twenty years ago, a book was one of the few ways to pass a long train journey, whereas now you've got endless content on one device, all designed to be instantly gratifying. A novel, which takes a while to get into, can't really compete on those terms. That said, I don't think young people have stopped reading altogether – they probably read a huge amount online; it's just more fragmented."</i></p></div>
</div>`
      }
    ],
    worked: [{
      title: 'Building Part 3 answers with O-R-E-C',
      instructions: '<i>Topic link: Part 2 was "a book you enjoyed". Try each question aloud (30–60 seconds) before opening the walkthrough.</i>',
      questions: '<ol><li>Do you think printed books will disappear in the future?</li><li>Should governments spend money on public libraries?</li></ol>',
      walk: [
        { q: '1. Will printed books disappear?', a: '', steps: ['<b>O:</b> "I doubt it, at least not in the foreseeable future."', '<b>R:</b> "People predicted the end of printed books when e-readers came out, but paper books have remained fairly popular. I think many people value the physical experience – the feel of the paper, seeing your progress."', '<b>E:</b> "In my country, for instance, second-hand bookshops have actually become quite fashionable among young people."', '<b>C:</b> "What might happen, though, is that printed books become more of a premium product, a bit like vinyl records, while everyday reading moves onto screens."'] },
        { q: '2. Should governments fund public libraries?', a: '', steps: ['<b>O:</b> "Yes, I strongly believe they should."', '<b>R:</b> "Libraries aren\'t just about books any more – they give free access to computers, the internet and study space, which is essential for people who can\'t afford them at home."', '<b>E:</b> "Where I live, the local library runs free coding classes for teenagers and job-search workshops for adults."', '<b>C:</b> "If governments cut library funding, the people who would suffer most are those with the fewest alternatives, which would widen inequality."'] }
      ],
      lesson: 'Each answer moved from opinion to reason to a general example and finally to a contrast or consequence – about 45 seconds, with conditionals, modals and comparisons used naturally.'
    }],
    dos: ['Give a clear opinion, then justify it.', 'Talk about people and society, not only yourself.', 'Use hedging and speculation language.', 'Use conditionals and comparisons.', 'Accept that the examiner may challenge you – respond calmly.'],
    donts: ['Don\'t give short Part 1-style answers.', 'Don\'t only talk about personal experience.', 'Don\'t say "I don\'t know" and stop – think aloud and give a view.'],
    careful: [
      { title: 'Abstract questions with no personal angle', body: '<p>If you have no opinion, consider different groups: "For older people..., whereas for younger people..." This gives you a structure and shows range.</p>' },
      { title: 'Over-generalising', body: '<p>"Everyone uses phones all the time" – hedge: "most young people", "many", "tend to".</p>' }
    ],
    timing: '<p>30–60 seconds per answer. The examiner will interrupt if an answer goes on too long – that is normal.</p>',
    checklist: ['I answer with O-R-E-C.', 'I can compare past and present.', 'I can speculate about the future.', 'I use conditionals and hedging naturally.'],
    summary: ['Abstract questions about society and the future.', 'Opinion → Reason → Example → Contrast/Consequence.', 'This part separates Band 6 from Band 7+.']
  }
};

import type { Chapter } from '@/lib/types';
import { writing } from '../writing-task1';
import { writingTask2 } from '../writing-task2';

const letterPrompt = (id: string) => `<div class="prompt-box"><div class="ptitle">GT Writing Task 1 · about 20 minutes · at least 150 words</div><p>${writing.gt.types.find(t => t.id === id)!.sample.prompt}</p></div>`;
const essayPrompt = (id: string) => `<div class="prompt-box"><div class="ptitle">Writing Task 2 · about 40 minutes · at least 250 words</div><p>${writingTask2.types.find(t => t.id === id)!.sample.prompt}</p></div>`;

/* ========================== GT LETTERS ========================== */
export const lettersMethod: Chapter = {
  intro: `
<p>In General Training Writing Task 1 you write a <b>letter</b> of at least 150 words in about 20 minutes. The task describes a situation, tells you who to write to, and gives <b>three bullet points</b> that your letter must cover. Typical situations include complaining about a product or service, asking for information, applying for a job, asking a neighbour for a favour, apologising, thanking or inviting a friend.</p>
<p>Two things decide your Task Achievement score: whether you <b>cover all three bullet points fully</b> (with relevant, specific detail), and whether your <b>tone</b> is appropriate for the reader and purpose. A letter to a company manager written in a chatty style, or a letter to a close friend written like a legal document, loses marks even if the grammar is perfect.</p>
<p>This chapter gives you the universal letter method. The next three chapters cover formal, semi-formal and informal letters in detail, with their phrases, model letters and common mistakes.</p>`,
  facts: [
    ['Time', 'About 20 minutes'],
    ['Length', '150 words minimum; aim for 160–190'],
    ['Must cover', 'All three bullet points, in detail'],
    ['Decides tone', 'Your relationship with the reader'],
    ['Structure', 'Greeting · purpose · 3 paragraphs · closing · sign-off'],
    ['Weight', 'One third of the Writing band']
  ],
  anatomy: `
<div class="prompt-box"><div class="ptitle">GT Writing Task 1</div><p>You recently bought a piece of equipment for your kitchen but it did not work. You phoned the shop but no action was taken.<br>Write a letter to <u>the shop manager</u>. In your letter<br>• <u>describe</u> the problem with the equipment<br>• <u>explain</u> what happened when you phoned the shop<br>• <u>say what you would like</u> the manager to do<br>Begin your letter as follows: <i>Dear Sir or Madam,</i></p></div>
<ul>
<li><b>The reader</b> (the shop manager – a stranger) decides the tone: <b>formal</b>.</li>
<li><b>The three verbs</b> (describe, explain, say what you would like) tell you the function of each paragraph.</li>
<li><b>The given greeting</b> (Dear Sir or Madam) also tells you the closing: Yours faithfully.</li>
<li>You may invent any details – names, dates, prices – to make the letter specific and realistic.</li>
</ul>`,
  method: [
    { title: 'Identify the reader and choose the tone (30 seconds)', body: '<p>Stranger or official → formal. Someone you know but not closely (landlord, colleague, neighbour, teacher) → semi-formal. Friend or family → informal.</p>' },
    { title: 'Underline the verb in each bullet point', body: '<p>describe, explain, apologise, suggest, ask, invite, thank... Each bullet becomes one paragraph with that function.</p>' },
    { title: 'Invent specific details for each bullet (2 minutes)', body: '<p>Specific details make a letter convincing and help you reach the word count naturally: dates, names, places, amounts, what happened, how you felt.</p>', example: 'Bullet 1 (describe the problem) → coffee machine, bought 3 March, Market Street branch; heated water but didn\'t pump it; leaked onto the counter.' },
    { title: 'Write the opening: greeting + purpose sentence', body: '<p>State why you are writing in the first sentence. Formal: "I am writing to complain about..." Informal: "Thanks so much for your message!"</p>' },
    { title: 'Write one paragraph per bullet point', body: '<p>Three paragraphs of 2–4 sentences each, in the order of the bullets. Develop each with detail, not just one sentence.</p>' },
    { title: 'Close appropriately', body: '<p>A closing line ("I look forward to hearing from you." / "Can\'t wait to see you!") and the right sign-off with your name.</p>' },
    { title: 'Check tone, bullets and accuracy (2 minutes)', body: '<p>Are all three bullets covered? Is the tone consistent from start to finish? Check grammar, spelling and word count.</p>' }
  ],
  sections: [
    {
      id: 'tone', title: 'Tone: the same message in three registers',
      html: `<div class="table-wrap"><table class="data-table">
<tr><th></th><th>Formal</th><th>Semi-formal</th><th>Informal</th></tr>
<tr><td>Greeting</td><td>Dear Sir or Madam, / Dear Mr Ahmed,</td><td>Dear Mrs Lewis,</td><td>Dear Alex, / Hi Alex,</td></tr>
<tr><td>Purpose</td><td>I am writing to request information about...</td><td>I'm writing to ask whether you could...</td><td>Just a quick note to ask...</td></tr>
<tr><td>Request</td><td>I would be grateful if you could...</td><td>I was wondering if you could...</td><td>Could you do me a favour and...?</td></tr>
<tr><td>Apology</td><td>Please accept my sincere apologies for...</td><td>I'm very sorry about...</td><td>I'm so sorry about...!</td></tr>
<tr><td>Closing line</td><td>I look forward to your reply.</td><td>I hope to hear from you soon.</td><td>Write back soon!</td></tr>
<tr><td>Sign-off</td><td>Yours faithfully (Sir/Madam) / Yours sincerely (named)</td><td>Kind regards, / Best regards,</td><td>Best wishes, / Love, / Take care,</td></tr>
<tr><td>Contractions</td><td>No</td><td>Some are acceptable</td><td>Yes</td></tr>
</table></div>`
    }
  ],
  dos: ['Decide the tone from the reader before writing.', 'Cover all three bullets with specific details.', 'State the purpose in the first sentence.', 'Keep the tone consistent throughout.', 'Use the greeting given and the matching sign-off.'],
  donts: ['Don\'t skip or barely mention a bullet point.', 'Don\'t mix formal and informal language.', 'Don\'t write an address or a date – they are not required.', 'Don\'t use memorised phrases that don\'t fit the situation.', 'Don\'t write fewer than 150 words.'],
  careful: [
    { title: 'Under-developed bullets', body: '<p>One sentence per bullet is not enough. Each bullet needs explanation and detail.</p>', example: 'Weak: "The machine didn\'t work." Better: "When I used the machine for the first time, it heated the water but failed to pump it through the filter, and water leaked from the base onto my counter."' },
    { title: 'Faithfully vs sincerely', body: '<p>Dear Sir or Madam → Yours faithfully. Dear Mr Smith (named) → Yours sincerely. Mixing them is a common, avoidable error.</p>' }
  ],
  timing: '<p>2–3 minutes planning (tone + details for each bullet), 14–15 minutes writing, 2 minutes checking.</p>',
  checklist: ['Tone matches the reader.', 'Purpose stated in the first line.', 'All three bullets covered with detail.', 'Correct greeting and sign-off.', 'At least 150 words.'],
  summary: ['The reader decides the tone.', 'One developed paragraph per bullet point.', 'Specific invented details make the letter convincing.', 'Consistent tone from greeting to sign-off.']
};

export const letterChapters: Record<string, Chapter> = {
  formal: {
    intro: `<p>A formal letter is written to someone you don't know personally, usually in an official or business role: a company manager, a customer service department, a local council, a newspaper editor, a hiring manager. Typical purposes are <b>complaining</b>, <b>requesting information</b>, <b>applying</b> for a job or course, and <b>suggesting improvements</b> to a service.</p>
<p>Formal letters use full forms (no contractions), polite and indirect requests, precise vocabulary and a clear, logical structure. They are the most predictable letter type – and the easiest to prepare for, because the same formal phrases appear again and again.</p>`,
    method: [
      { title: 'Greeting', body: '<p>Use the greeting given. "Dear Sir or Madam," if you don\'t know the name; "Dear Mr/Ms + surname," if you do.</p>' },
      { title: 'Purpose sentence', body: '<p>"I am writing to complain about / enquire about / apply for / bring to your attention..."</p>' },
      { title: 'Paragraph per bullet with facts', body: '<p>Dates, places, reference numbers, prices, names of staff. Formal letters are persuasive when they are precise.</p>' },
      { title: 'A clear request or action', body: '<p>"I would be grateful if you could arrange a full refund..." State exactly what you want.</p>' },
      { title: 'Closing + sign-off with full name', body: '<p>"I look forward to your prompt reply." · Yours faithfully / Yours sincerely · Full name.</p>' }
    ],
    worked: [{
      title: 'Planning the complaint letter',
      source: letterPrompt('formal'),
      walk: [
        { q: 'Tone', a: '', steps: ['Shop manager, unknown → formal; "Dear Sir or Madam" → "Yours faithfully".'] },
        { q: 'Bullet 1 – describe the problem', a: '', steps: ['Coffee machine, bought 3 March, Market Street branch. Heated water but didn\'t pump it; leaked from the base. Followed instructions → fault in the machine.'] },
        { q: 'Bullet 2 – the phone call', a: '', steps: ['5 March: staff member promised a manager would call back within 24 hours; no call; phoned again two days later – no record.'] },
        { q: 'Bullet 3 – what you want', a: '', steps: ['Full refund of £129 or replacement delivered free; receipt and packaging kept.'] }
      ],
      lesson: 'Invented details (dates, branch, price) turn general complaints into a precise, persuasive letter – and add words naturally.'
    }],
    dos: ['Use full forms (I am, do not).', 'Make requests indirect: I would be grateful if...', 'Include specific facts.', 'Sign with your full name.'],
    donts: ['Don\'t use contractions or slang.', 'Don\'t be rude, even in a complaint – firm and polite is more effective.', 'Don\'t use "Dear Sir or Madam" with "Yours sincerely".'],
    careful: [{ title: 'Over-formal, unnatural English', body: '<p>"I hereby wish to humbly request your esteemed attention" is not better than "I am writing to request..." Clear and polite beats old-fashioned.</p>' }],
    checklist: ['No contractions or informal words.', 'A clear request.', 'Correct sign-off and full name.'],
    summary: ['Formal = stranger in an official role.', 'Precise facts + polite, indirect requests.', 'Dear Sir or Madam → Yours faithfully.']
  },
  semi: {
    intro: `<p>Semi-formal letters are written to someone you know, but not closely: a landlord, a neighbour, a colleague, a manager, a teacher. The tone is <b>polite and respectful</b> but warmer than a formal letter. You address the person by title and surname ("Dear Mrs Lewis"), you can use some contractions, and you can include a friendly opening line.</p>
<p>This is the hardest register to judge, because it sits between the other two. The test: would you say this sentence politely to this person face to face?</p>`,
    method: [
      { title: 'Greeting with title + surname', body: '<p>"Dear Mrs Lewis," / "Dear Mr Patel,"</p>' },
      { title: 'A friendly but brief opening', body: '<p>"I hope you and your family are keeping well." Then the purpose.</p>' },
      { title: 'Polite requests and explanations', body: '<p>"I was wondering if you could...", "Would it be possible to...?" Explain your situation honestly.</p>' },
      { title: 'Show appreciation', body: '<p>Thank in advance, offer something in return, acknowledge any inconvenience.</p>' },
      { title: 'Close warmly', body: '<p>"Many thanks in advance." · "Kind regards," + first name (or full name).</p>' }
    ],
    worked: [{
      title: 'Planning the letter to a neighbour',
      source: letterPrompt('semi'),
      walk: [
        { q: 'Tone', a: '', steps: ['Neighbour (known, not close) → semi-formal; "Dear Mrs Lewis" → "Kind regards".'] },
        { q: 'Bullet 1 – why you will be away', a: '', steps: ['Training course at head office in Edinburgh, 12–26 June; living alone, house empty.'] },
        { q: 'Bullet 2 – what you would like them to do', a: '', steps: ['Water plants every 2–3 days; collect post; switch lights on in the evening; spare key + mobile number.'] },
        { q: 'Bullet 3 – how you will thank them', a: '', steps: ['Dinner at the new Italian restaurant – my treat.'] }
      ]
    }],
    dos: ['Be polite and warm.', 'Use "I was wondering if..." style requests.', 'Thank the reader and acknowledge inconvenience.'],
    donts: ['Don\'t use slang or very casual expressions (Hey!, gonna).', 'Don\'t be as stiff as a formal complaint letter.'],
    careful: [{ title: 'Inconsistent tone', body: '<p>Starting "Dear Mrs Lewis" and ending "Love, Priya xx" – or starting "Hi!" to a manager – shows poor control of register.</p>' }],
    checklist: ['Title + surname greeting.', 'Polite, warm requests.', 'Consistent semi-formal tone.'],
    summary: ['Semi-formal = known but not close.', 'Polite and warm; some contractions are fine.', 'Thank and acknowledge the reader.']
  },
  informal: {
    intro: `<p>Informal letters go to friends and family. The tone is natural and personal, like talking to a friend: contractions, phrasal verbs, idiomatic expressions, questions, exclamations and references to shared experiences. But informal does <b>not</b> mean careless: you still need accurate grammar, clear paragraphs and full coverage of the three bullet points.</p>`,
    method: [
      { title: 'Greeting with first name', body: '<p>"Dear Alex," or "Hi Alex,"</p>' },
      { title: 'A natural, warm opening', body: '<p>"Thanks so much for your message – it was great to hear from you!"</p>' },
      { title: 'Cover each bullet in a conversational way', body: '<p>Use natural language: "As you know...", "Guess what?", "To be honest...". Add personal detail and feelings.</p>' },
      { title: 'Close with a friendly line', body: '<p>"Let me know what you think!", "Can\'t wait to see you!"</p>' },
      { title: 'Sign-off with your first name', body: '<p>"Lots of love," / "Best wishes," / "Take care," + first name.</p>' }
    ],
    worked: [{
      title: 'Planning the letter to a friend',
      source: letterPrompt('informal'),
      walk: [
        { q: 'Tone', a: '', steps: ['Friend → informal; "Dear Alex" → "Lots of love / Best wishes".'] },
        { q: 'Bullet 1 – thank', a: '', steps: ['Thanks; really kind; don\'t know anyone else in Bristol.'] },
        { q: 'Bullet 2 – the job', a: '', steps: ['Graphic designer for four years; small agency or studio; full-time; marketing as a backup.'] },
        { q: 'Bullet 3 – why move', a: '', steps: ['Fed up with two-hour commute in London; love how relaxed Bristol feels; near the countryside and near Alex.'] }
      ]
    }],
    dos: ['Use contractions, phrasal verbs and natural expressions.', 'Show feelings and personality.', 'Still organise into clear paragraphs.'],
    donts: ['Don\'t use text-message language (u, gr8, lol).', 'Don\'t use formal phrases ("I am writing to inform you...").', 'Don\'t neglect grammar because the style is informal.'],
    careful: [{ title: 'Informal ≠ inaccurate', body: '<p>Examiners still assess grammar and vocabulary. Natural idioms used correctly ("I\'m fed up with...") show range.</p>' }],
    checklist: ['First-name greeting and friendly sign-off.', 'Natural, personal tone.', 'All bullets developed.'],
    summary: ['Informal = friends and family.', 'Natural language, feelings and personal details.', 'Still accurate and well organised.']
  }
};

/* ========================== TASK 2 ========================== */
export const task2Method: Chapter = {
  intro: `
<p>Writing Task 2 is an essay of <b>at least 250 words</b> written in about <b>40 minutes</b>. It is the same task for Academic and General Training, and it counts for <b>two thirds</b> of your Writing band – twice as much as Task 1. You are given a statement or situation about a general topic (education, technology, environment, work, health, society...) and asked to respond: give your opinion, discuss two views, evaluate advantages and disadvantages, explain causes and solutions, or answer two direct questions.</p>
<p>The essay is assessed on four criteria. <b>Task Response</b>: did you answer every part of the question, with a clear position and well-developed, relevant ideas? <b>Coherence and Cohesion</b>: is the essay logically organised, with clear paragraphs and natural linking? <b>Lexical Resource</b> and <b>Grammatical Range and Accuracy</b>: is your language varied, precise and accurate?</p>
<p>The single most important skill in Task 2 is <b>answering the exact question</b>. Many essays are well written but address the general topic instead of the specific question, and their Task Response score is limited. This chapter teaches a method that starts with analysing the question precisely, then planning, writing and checking. The following chapters apply it to each essay type.</p>`,
  facts: [
    ['Time', 'About 40 minutes'],
    ['Length', '250 words minimum; aim for 270–320'],
    ['Weight', 'Two thirds of the Writing band'],
    ['Structure', 'Introduction · 2 (or 3) body paragraphs · Conclusion'],
    ['Must have', 'A clear position (where asked) throughout'],
    ['Biggest risk', 'Answering the topic, not the question']
  ],
  anatomy: `
<p>Every Task 2 prompt has three parts. Underline each one before you plan:</p>
<div class="table-wrap"><table class="data-table plain">
<tr><th>Part</th><th>Example: "Some people believe that unpaid community service should be compulsory for high school students. To what extent do you agree or disagree?"</th></tr>
<tr><td><b>Topic</b> – the general area</td><td>community service, high school students</td></tr>
<tr><td><b>Focus</b> – the specific claim or issue</td><td>it should be <u>unpaid</u> and <u>compulsory</u></td></tr>
<tr><td><b>Instruction</b> – what you must do</td><td>To what extent do you agree or disagree? → give and support a clear opinion</td></tr>
</table></div>
<div class="callout warn"><strong>The most common Task 2 error</strong>Writing about the topic (community service is good for teenagers) instead of the focus (should it be <i>compulsory</i> and <i>unpaid</i>?).</div>`,
  tests: `
<div class="table-wrap"><table class="data-table">
<tr><th>Criterion</th><th>Band 5</th><th>Band 7</th></tr>
<tr><td>Task Response</td><td>Addresses the task only partly; position unclear; ideas limited or not developed</td><td>Addresses all parts; clear position throughout; main ideas extended and supported</td></tr>
<tr><td>Coherence & Cohesion</td><td>Some organisation but not always logical; linkers overused or faulty</td><td>Logical progression; clear central topic in each paragraph; range of cohesive devices</td></tr>
<tr><td>Lexical Resource</td><td>Limited range; repetition; errors may cause difficulty</td><td>Sufficient range; less common items; awareness of style and collocation</td></tr>
<tr><td>Grammar</td><td>Limited range; frequent errors</td><td>Variety of complex structures; frequent error-free sentences</td></tr>
</table></div>`,
  method: [
    { title: 'Analyse the question (2 minutes)', body: '<p>Underline topic, focus and instruction. Identify the essay type. Count the questions you must answer (some prompts have two).</p>' },
    { title: 'Decide your position (for opinion-based questions)', body: '<p>Choose the position you can support best with ideas – not necessarily what you truly believe. Partial agreement is fine, but it must be clear.</p>' },
    { title: 'Brainstorm and select two main ideas (3 minutes)', body: '<p>Write 3–4 ideas quickly, then choose the <b>two strongest</b> – the ones you can explain and illustrate. Two well-developed ideas beat four undeveloped ones.</p>' },
    { title: 'Plan each body paragraph with PEEL', body: '<p><b>P</b>oint (topic sentence) – <b>E</b>xplain (why/how) – <b>E</b>xample (specific, realistic) – <b>L</b>ink (back to the question). Write a few words for each.</p>' },
    { title: 'Write the introduction (2 sentences, ~45 words)', body: '<p>Sentence 1: paraphrase the question. Sentence 2: your thesis – your answer and/or what the essay will do.</p>' },
    { title: 'Write the body paragraphs (about 100 words each)', body: '<p>One central idea per paragraph, developed fully. Use a range of sentence structures and cohesive devices.</p>' },
    { title: 'Write the conclusion (1–2 sentences)', body: '<p>"In conclusion, ..." Restate your position and summarise the main reasons. No new ideas.</p>' },
    { title: 'Check (3–5 minutes)', body: '<p>Does every paragraph answer the question? Then check grammar (articles, plurals, subject–verb agreement, tenses), spelling and word count.</p>' }
  ],
  sections: [
    {
      id: 'types', title: 'Identify the essay type from the instruction',
      html: `<div class="table-wrap"><table class="data-table">
<tr><th>Instruction</th><th>Type</th><th>Chapter</th></tr>
<tr><td>To what extent do you agree or disagree?</td><td>Opinion</td><td><a href="/writing/task-2/opinion">Opinion essays</a></td></tr>
<tr><td>Discuss both views and give your own opinion.</td><td>Discussion</td><td><a href="/writing/task-2/discussion">Discussion essays</a></td></tr>
<tr><td>Do the advantages outweigh the disadvantages?</td><td>Advantages/disadvantages</td><td><a href="/writing/task-2/adv-disadv">Advantages & disadvantages</a></td></tr>
<tr><td>What are the causes? What can be done?</td><td>Problem/solution</td><td><a href="/writing/task-2/problem-solution">Problem & solution</a></td></tr>
<tr><td>Two direct questions (Why...? What effects...?)</td><td>Two-part</td><td><a href="/writing/task-2/two-part">Two-part questions</a></td></tr>
<tr><td>Is this a positive or negative development?</td><td>Positive/negative</td><td><a href="/writing/task-2/positive-negative">Positive or negative</a></td></tr>
</table></div>`
    },
    {
      id: 'peel', title: 'An annotated body paragraph (PEEL)',
      html: `<div class="annot"><b>P</b> – "The most compelling argument for free university education is that it allows talented young people to study regardless of their family background."<span class="note">Topic sentence: one clear idea that answers the question.</span></div>
<div class="annot"><b>E</b> – "When students are required to pay high fees, those from low-income households are often discouraged from applying, even if they have outstanding academic ability. By removing this financial barrier, governments ensure that university places are allocated on the basis of merit rather than wealth."<span class="note">Explanation: why and how – a chain of cause and effect.</span></div>
<div class="annot"><b>E</b> – "Germany, for example, abolished tuition fees partly in order to widen access to higher education..."<span class="note">Example: specific and realistic. You don't need statistics.</span></div>
<div class="annot"><b>L</b> – "...and this has made university a realistic option for many students who would otherwise have entered the workforce immediately."<span class="note">Link: the result connects back to the paragraph's point and the question.</span></div>`
    },
    {
      id: 'develop', title: 'Developing an idea: from Band 5 to Band 8',
      html: `<div class="band-compare">
<div><h4>Band 5 – listed</h4><p><i>Free university is good because poor students can study. Also it is good for the economy. Also people will be more educated.</i></p><p class="small muted">Three ideas, none explained.</p></div>
<div><h4>Band 6 – partly developed</h4><p><i>Free university is good because poor students can study. If fees are high, poor students cannot go to university, so this is unfair.</i></p><p class="small muted">One idea with a brief explanation.</p></div>
<div><h4>Band 8 – fully developed</h4><p><i>Abolishing fees would allow talented students from low-income families to enter university on merit rather than wealth. At present, many able teenagers are deterred by the prospect of debt and enter low-paid work instead, which wastes their potential and deprives the economy of skilled graduates.</i></p></div>
</div>`
    },
    {
      id: 'intros', title: 'Introductions: Band 5 vs Band 7+',
      html: `<div class="band-compare">
<div><h4 style="color:var(--bad)">Memorised and vague</h4><p><i>"In this modern era, education is a very debatable topic. Some people agree and some disagree. In this essay I will discuss both sides."</i></p><p class="small">Doesn't paraphrase the question; no position.</p></div>
<div><h4 style="color:var(--ok)">Precise and clear</h4><p><i>"It is sometimes argued that secondary school students should be required to do voluntary work in their local community. While such a policy has certain drawbacks, I strongly believe that its benefits for both young people and society are far greater."</i></p></div>
</div>`
    }
  ],
  worked: [{
    title: 'Analysing prompts: topic, focus, instruction',
    instructions: '<i>For each prompt, identify the focus and the essay type before opening the solution.</i>',
    questions: `<ol>
<li>Some people think that the best way to reduce crime is to give longer prison sentences. To what extent do you agree or disagree?</li>
<li>In many countries, people are living longer. What are the advantages and disadvantages of this?</li>
<li>Many people today prefer to shop online. Why is this? What effects does it have on local businesses?</li>
<li>Governments should spend money on railways rather than roads. To what extent do you agree or disagree?</li>
</ol>`,
    walk: [
      { q: '1. Longer prison sentences', a: 'Opinion', steps: ['<b>Focus:</b> longer sentences as <i>the best way</i> to reduce crime.', '<b>Trap:</b> writing about whether prison is good in general. You must judge whether longer sentences are the <i>best</i> way – which invites comparison with other methods (education, policing, rehabilitation).'] },
      { q: '2. Living longer', a: 'Advantages & disadvantages', steps: ['<b>Focus:</b> the advantages and disadvantages of longer lives (for individuals and society).', '<b>Note:</b> no "outweigh", so you don\'t have to say which side is greater – but you may.'] },
      { q: '3. Shopping online', a: 'Two-part', steps: ['<b>Two questions:</b> (1) why people prefer online shopping; (2) the effects on <i>local businesses</i> – not on shoppers or the environment.', '<b>Trap:</b> answering only the first question, or discussing effects on consumers.'] },
      { q: '4. Railways vs roads', a: 'Opinion', steps: ['<b>Focus:</b> spending on railways <i>rather than</i> roads – a comparison.', '<b>Trap:</b> only praising railways. You must address the "rather than": why railways deserve the money more than roads (or not).'] }
    ],
    lesson: 'The focus is usually one or two words: "the best way", "rather than", "local businesses". Underline them and check every paragraph against them.'
  }],
  dos: ['Underline topic, focus and instruction.', 'Answer every part of the question.', 'Keep a clear position from introduction to conclusion.', 'Develop two main ideas fully with PEEL.', 'Use a range of sentence structures accurately.', 'Leave time to check.'],
  donts: ['Don\'t write a memorised introduction.', 'Don\'t list many ideas without developing them.', 'Don\'t change your position in the conclusion.', 'Don\'t use informal language or contractions.', 'Don\'t copy whole sentences from the prompt.', 'Don\'t write under 250 words.'],
  careful: [
    { title: 'Off-topic or partly on-topic', body: '<p>Check each paragraph\'s topic sentence against the focus words. If it could appear in an essay about the general topic, it may be off-focus.</p>' },
    { title: 'Mechanical linking', body: '<p>Starting every sentence with Firstly / Moreover / Furthermore / In addition sounds mechanical. Use referencing too: <i>this policy, such measures, these students</i>.</p>' },
    { title: 'Over-generalisation', body: '<p>"Everyone knows that..." / "All young people are addicted to phones" – use hedging: <i>many, often, tend to, in many cases</i>.</p>' }
  ],
  timing: `<div class="section-intro">
<div class="kpi"><b>0–5 min</b><span>Analyse + plan (position, two ideas, PEEL notes)</span></div>
<div class="kpi"><b>5–10 min</b><span>Introduction</span></div>
<div class="kpi"><b>10–32 min</b><span>Two body paragraphs</span></div>
<div class="kpi"><b>32–36 min</b><span>Conclusion</span></div>
<div class="kpi"><b>36–40 min</b><span>Check</span></div></div>`,
  faq: [
    { q: 'Should I write two or three body paragraphs?', a: '<p>Two well-developed body paragraphs are enough for Band 7+. A third paragraph (e.g. a concession) is fine if you have time and it adds something.</p>' },
    { q: 'Do examples have to be true?', a: '<p>They must be realistic and relevant. Invented statistics are risky; general but specific examples ("In many European cities, ...") work well.</p>' },
    { q: 'Can I use "I"?', a: '<p>Yes, when giving your opinion: "I believe...", "In my view...". Don\'t overuse it.</p>' }
  ],
  checklist: ['I identified topic, focus and instruction.', 'Every part of the question is answered.', 'My position is clear and consistent.', 'Each body paragraph has one developed idea (PEEL).', '270–320 words, checked for errors.'],
  summary: ['Task 2 is worth two thirds of Writing.', 'Answer the focus, not the topic.', 'Two fully developed ideas beat four listed ones.', 'Clear position, logical paragraphs, varied accurate language.']
};

const t2 = (id: string, intro: string, method: { title: string; body: string; example?: string }[], walk: { q: string; steps: string[] }[], extra: Partial<Chapter> = {}): Chapter => ({
  intro,
  method,
  worked: [{ title: 'From question to plan', source: essayPrompt(id), walk: walk.map(w => ({ ...w, a: '' })), lesson: 'Compare this plan with the model essay below: every paragraph in the essay comes directly from the plan.' }],
  dos: extra.dos || [],
  donts: extra.donts || [],
  careful: extra.careful || [],
  checklist: extra.checklist || [],
  summary: extra.summary || [],
  ...extra
});

export const task2Chapters: Record<string, Chapter> = {
  opinion: t2('opinion',
    `<p>An opinion essay asks how far you agree or disagree with a statement. It is the most common Task 2 type. The examiner wants a <b>clear position</b> – total agreement, total disagreement or partial agreement – that is consistent from the introduction to the conclusion and supported by well-developed reasons.</p>
<p>"To what extent" invites nuance: you may agree strongly, or agree with part of the statement and not another part. Either is fine, as long as the reader always knows where you stand.</p>`,
    [
      { title: 'Decide your position on the exact statement', body: '<p>Agree, disagree, or partly agree (e.g. agree with the aim but not the method). Check every word of the statement: "<i>should be free for all students</i>" is not the same as "should be cheaper".</p>' },
      { title: 'Find two reasons for your position', body: '<p>For partial agreement: one paragraph for the part you agree with, one for the part you don\'t.</p>' },
      { title: 'State your position in the introduction', body: '<p>"I largely agree that..." / "I completely disagree with this view because..."</p>' },
      { title: 'Optional: a concession paragraph', body: '<p>Acknowledge the opposing view briefly and explain why your view still stands. This shows depth.</p>' },
      { title: 'Conclude by restating the same position', body: '<p>Same position, same reasons, new words.</p>' }
    ],
    [
      { q: 'Analyse', steps: ['Topic: university education. Focus: free for <b>all</b>, paid by the <b>government</b>. Instruction: to what extent agree/disagree.'] },
      { q: 'Position', steps: ['Largely agree (with a condition on cost).'] },
      { q: 'Body 1 – equality of opportunity', steps: ['Fees discourage low-income students → places by merit not wealth → example: Germany abolished fees.'] },
      { q: 'Body 2 – benefits to the economy', steps: ['Graduates pay more tax → investment recovered; economy needs skilled professionals.'] },
      { q: 'Concession', steps: ['Cost to the state → limit free places to needed subjects/numbers rather than abandon the principle.'] }
    ],
    {
      sections: [{ id: 'positions', title: 'Ways to state your position', html: `<div class="table-wrap"><table class="data-table plain">
<tr><th>Position</th><th>Thesis sentence</th></tr>
<tr><td>Strong agreement</td><td>I strongly agree that..., because... and...</td></tr>
<tr><td>Strong disagreement</td><td>I firmly disagree with this view, as...</td></tr>
<tr><td>Partial agreement</td><td>While I accept that..., I do not believe that...</td></tr>
<tr><td>Mostly agree</td><td>Although this policy has certain drawbacks, I largely agree that...</td></tr>
</table></div>` }],
      dos: ['State a clear position in the introduction.', 'Keep the same position throughout.', 'Address every word of the statement (all, should, best, only).'],
      donts: ['Don\'t sit on the fence ("there are good arguments on both sides").', 'Don\'t write a discussion essay without an opinion.', 'Don\'t change position in the conclusion.'],
      careful: [{ title: 'Extreme words in the prompt', body: '<p>"the <b>only</b> way", "<b>all</b> students", "<b>never</b>" – these words often make partial agreement the most sensible position.</p>' }],
      checklist: ['Clear position in introduction and conclusion.', 'Two developed reasons.', 'The exact statement is addressed.'],
      summary: ['Clear, consistent position.', 'Partial agreement is fine if it is clear.', 'Respond to the exact wording of the statement.']
    }),

  discussion: t2('discussion',
    `<p>A discussion essay presents two opposing views and asks you to discuss both and give your own opinion. The examiner wants a <b>balanced, fair explanation of each view</b> – including the one you disagree with – and a <b>clear opinion</b> of your own. Missing the opinion is the most common reason for a low Task Response score in this essay type.</p>`,
    [
      { title: 'Identify the two views precisely', body: '<p>Underline both. They are often not exact opposites.</p>' },
      { title: 'Decide which view you support (or a middle position)', body: '<p>You may support one view, or argue that both have merit in different situations.</p>' },
      { title: 'Body 1: the view you agree with less', body: '<p>Explain why people hold it, fairly and with an example.</p>' },
      { title: 'Body 2: the view you support', body: '<p>Explain it and state clearly that this is your view.</p>' },
      { title: 'Give your opinion in the introduction and conclusion', body: '<p>"In my view, ..." – make it impossible to miss.</p>' }
    ],
    [
      { q: 'Analyse', steps: ['View A: formal education at a very early age. View B: not until at least seven. Instruction: discuss both + own opinion.'] },
      { q: 'Opinion', steps: ['Later start + quality play-based learning.'] },
      { q: 'Body 1 (View A)', steps: ['Children learn quickly → early literacy → confidence/head start; practical for working parents.'] },
      { q: 'Body 2 (View B, my view)', steps: ['Play develops language, creativity, social skills → foundation; Finland example; early start may cause stress.'] },
      { q: 'Conclusion', steps: ['Early start has short-term benefits, but play-based learning is better → invest in pre-school care.'] }
    ],
    {
      dos: ['Explain both views fairly.', 'Give your opinion clearly – in the introduction and conclusion at least.', 'Use language for reporting views: Supporters argue..., Critics point out...'],
      donts: ['Don\'t forget your opinion.', 'Don\'t only describe one view.', 'Don\'t simply list arguments without developing them.'],
      careful: [{ title: 'Whose view is it?', body: '<p>Distinguish clearly between reported views ("Some people argue...") and your own ("I believe..."). Mixing them makes your position unclear.</p>' }],
      checklist: ['Both views explained with reasons and examples.', 'My opinion stated clearly.', 'Balanced paragraphs.'],
      summary: ['Discuss both views fairly.', 'Your own opinion is required.', 'Use reporting language to separate views.']
    }),

  'adv-disadv': t2('adv-disadv',
    `<p>Advantages and disadvantages essays ask you to evaluate a development or situation. There are two versions: <b>"What are the advantages and disadvantages?"</b> (describe both; an opinion is optional) and <b>"Do the advantages outweigh the disadvantages?"</b> (you must <b>judge which side is greater</b>). Reading the instruction carefully is essential, because the second version requires a clear judgement.</p>`,
    [
      { title: 'Check the version', body: '<p>"Outweigh" = you must say which side is stronger and why.</p>' },
      { title: 'Choose 1–2 advantages and 1–2 disadvantages', body: '<p>Pick those you can develop well.</p>' },
      { title: 'For "outweigh": state your judgement in the introduction', body: '<p>"Although..., I believe the advantages are more significant."</p>' },
      { title: 'Explain why one side is stronger', body: '<p>A short paragraph that weighs the sides (e.g. the disadvantages can be overcome) strengthens your judgement.</p>' },
      { title: 'Conclude with the same judgement', body: '<p>Restate which side outweighs and why.</p>' }
    ],
    [
      { q: 'Analyse', steps: ['Topic: working from home. Instruction: do advantages <b>outweigh</b> disadvantages? → judgement required.'] },
      { q: 'Judgement', steps: ['Advantages outweigh.'] },
      { q: 'Advantages', steps: ['No commute → time and money → wellbeing/productivity; employers save on offices and recruit widely.'] },
      { q: 'Disadvantages', steps: ['Blurred work/life boundaries → longer hours; isolation, especially for young employees.'] },
      { q: 'Weighing', steps: ['Disadvantages can be reduced (clear rules, hybrid working); benefits hard to get otherwise.'] }
    ],
    {
      dos: ['Read whether the question asks for a judgement.', 'Develop both sides.', 'Explain why one side is greater.'],
      donts: ['Don\'t describe only one side.', 'Don\'t forget the judgement in an "outweigh" question.'],
      careful: [{ title: 'Unbalanced weighing', body: '<p>Saying "advantages outweigh" but writing a longer, stronger disadvantages paragraph confuses the reader. Your paragraphs should support your judgement.</p>' }],
      checklist: ['Version identified.', 'Both sides developed.', 'Judgement clear (if required).'],
      summary: ['Two versions: describe vs judge.', '"Outweigh" requires a clear, supported judgement.', 'Weighing the sides shows depth.']
    }),

  'problem-solution': t2('problem-solution',
    `<p>Problem–solution essays ask you to explain the <b>causes</b> (or effects/problems) of an issue and suggest <b>solutions</b>. The strongest essays link each solution to a specific cause, so the essay reads as a logical whole rather than two separate lists.</p>`,
    [
      { title: 'Identify the two tasks', body: '<p>Causes + solutions? Problems + solutions? Effects + measures?</p>' },
      { title: 'Choose two main causes', body: '<p>Develop each with explanation and an example.</p>' },
      { title: 'Match a solution to each cause', body: '<p>Cause: poor public transport → Solution: invest in public transport.</p>' },
      { title: 'Make solutions specific', body: '<p>Who should act (governments, schools, employers, individuals) and how? "Governments should do something" is too vague.</p>' },
      { title: 'Conclude by summarising causes and solutions', body: '<p>One or two sentences.</p>' }
    ],
    [
      { q: 'Analyse', steps: ['Topic: traffic congestion in cities. Tasks: causes + measures to reduce it.'] },
      { q: 'Causes', steps: ['Rising car ownership (affordability, status) → roads overloaded.', 'Inadequate public transport → no alternative to driving.'] },
      { q: 'Solutions (linked)', steps: ['Invest in fast, affordable public transport (→ cause 2).', 'Congestion charges (→ cause 1) – London example.', 'Flexible working to spread journeys.'] }
    ],
    {
      dos: ['Link solutions to causes.', 'Say who should act and how.', 'Give realistic examples.'],
      donts: ['Don\'t list many causes without explaining them.', 'Don\'t give vague solutions ("people should be more responsible").'],
      careful: [{ title: 'Answering only half', body: '<p>Spending 200 words on causes and 50 on solutions unbalances the essay. Give both tasks similar weight.</p>' }],
      checklist: ['Both tasks answered.', 'Solutions are specific and linked to causes.', 'Balanced paragraphs.'],
      summary: ['Causes (or problems) + solutions.', 'Link each solution to a cause.', 'Specific actors and actions.']
    }),

  'two-part': t2('two-part',
    `<p>Two-part (direct question) essays ask two separate questions, often <i>Why...?</i> plus <i>What effects...? / Is this positive or negative? / What can be done?</i>. You must answer <b>both</b> questions fully. The safest structure is one body paragraph per question.</p>`,
    [
      { title: 'Number the two questions', body: '<p>Write Q1 and Q2 above the prompt. Underline the focus of each.</p>' },
      { title: 'Answer both briefly in the introduction', body: '<p>Your thesis gives a short answer to each question.</p>' },
      { title: 'Body 1 = Q1, Body 2 = Q2', body: '<p>Each fully developed with reasons and examples.</p>' },
      { title: 'Check the focus of Q2', body: '<p>"effects on society", "effects on local businesses", "is this positive?" – answer exactly that.</p>' },
      { title: 'Conclude with both answers', body: '<p>Restate them briefly.</p>' }
    ],
    [
      { q: 'Analyse', steps: ['Q1: why are more people living alone? Q2: what effects on <b>society</b>?'] },
      { q: 'Body 1 (Q1)', steps: ['Changing attitudes to marriage; rising incomes (especially women); ageing population.'] },
      { q: 'Body 2 (Q2)', steps: ['Positive: freedom, stimulates local economy. Negative: more land, energy, resources per person; loneliness → health and care services.'] }
    ],
    {
      dos: ['Answer both questions with similar depth.', 'Give a direct answer to each in the introduction.'],
      donts: ['Don\'t answer only one question.', 'Don\'t mix the answers to both questions in one paragraph.'],
      careful: [{ title: 'The second question\'s focus', body: '<p>"What effects on <b>local businesses</b>?" is not "What effects in general?" Narrow focus = narrow answer.</p>' }],
      checklist: ['Both questions answered fully.', 'One body paragraph per question.', 'Focus of each question respected.'],
      summary: ['Two questions = two answers, two paragraphs.', 'Answer both in the introduction and conclusion.', 'Respect the focus of each question.']
    }),

  'positive-negative': t2('positive-negative',
    `<p>"Is this a positive or negative development?" asks for a <b>judgement</b>. Unlike a simple advantages/disadvantages essay, you must decide which it mainly is and argue for that view. Acknowledging the other side shows balance, but your answer must be clear.</p>`,
    [
      { title: 'Decide: mainly positive or mainly negative', body: '<p>Choose the side you can support with two strong reasons.</p>' },
      { title: 'State the judgement in the introduction', body: '<p>"On balance, I believe this is a negative development for communities."</p>' },
      { title: 'Concede the other side briefly', body: '<p>One short paragraph or a few sentences: "It is true that..."</p>' },
      { title: 'Develop your side fully', body: '<p>Two developed reasons, with examples.</p>' },
      { title: 'Conclude with the same judgement', body: '<p>"Overall, I consider it a largely negative trend because..."</p>' }
    ],
    [
      { q: 'Analyse', steps: ['Topic: buying online rather than in shops. Instruction: positive or negative development?'] },
      { q: 'Judgement', steps: ['On balance negative (for communities).'] },
      { q: 'Concession', steps: ['Convenience, price comparison, choice; valuable for people with limited mobility.'] },
      { q: 'Main reasons', steps: ['Job losses and empty high streets → loss of community life.', 'Environmental cost: deliveries, packaging, returns (example: three sizes of shoes).', 'Reduced competition → higher prices in future.'] }
    ],
    {
      dos: ['Make a clear judgement.', 'Acknowledge the other side briefly.', 'Explain who it is positive/negative for.'],
      donts: ['Don\'t write "it has both positive and negative sides" without a judgement.'],
      careful: [{ title: 'Positive for whom?', body: '<p>A development can be positive for individuals but negative for society. Specify the perspective in your thesis.</p>' }],
      checklist: ['Clear judgement in introduction and conclusion.', 'Concession included.', 'Two developed reasons.'],
      summary: ['A judgement is required.', 'Concede briefly, argue fully.', 'Specify who is affected.']
    })
};

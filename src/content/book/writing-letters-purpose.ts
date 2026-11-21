import type { Chapter } from '@/lib/types';

/* General Training Task 1: chapters for letters by purpose. Data (phrases, model letter, practice): content/writing-letters-purpose.ts */

const registerTable = `
<div class="table-wrap"><table class="data-table">
<tr><th>Reader</th><th>Register</th><th>Opening</th><th>Closing</th></tr>
<tr><td>Unknown person or organisation</td><td>Formal</td><td><i>Dear Sir or Madam,</i></td><td><i>Yours faithfully,</i> + full name</td></tr>
<tr><td>Named person you do not know well (manager, landlord, tutor)</td><td>Formal / semi-formal</td><td><i>Dear Mr Patel, Dear Ms Grant, Dear Dr Evans,</i></td><td><i>Yours sincerely,</i> (or <i>Kind regards,</i> for semi-formal) + full name</td></tr>
<tr><td>Friend or family member</td><td>Informal</td><td><i>Dear Sam, Hi Sam,</i></td><td><i>Best wishes, All the best, Lots of love,</i> + first name</td></tr>
</table></div>
<p>The task tells you who the reader is, and often how to begin (<i>Begin your letter as follows: Dear…</i>). Your register must match that reader throughout – a formal opening followed by <i>Hope you're doing great!</i> is a mismatch that weakens Task Achievement.</p>`;

const bandImpact = (purpose: string) => `
<div class="table-wrap"><table class="data-table">
<tr><th>Criterion</th><th>What raises the band in a ${purpose}</th></tr>
<tr><td>Task Achievement</td><td>All three bullet points covered and developed; the purpose clear from the first sentence; a consistent, appropriate tone</td></tr>
<tr><td>Coherence and Cohesion</td><td>One paragraph per main point, in a logical order; clear linking and reference</td></tr>
<tr><td>Lexical Resource</td><td>Precise vocabulary for the situation and natural set phrases for the purpose – not a memorised template</td></tr>
<tr><td>Grammatical Range and Accuracy</td><td>A mix of structures (indirect requests, conditionals, relative clauses) with most sentences error-free</td></tr>
</table></div>
<p>The commonest cause of a low Task Achievement score in letters is a bullet point that is missing or mentioned in only half a sentence. Give each one real detail.</p>`;

const commonDos = ['Cover all three bullet points with real detail.', 'State your purpose in the first sentence.', 'Match the register to the reader from opening to closing.', 'Write at least 150 words (about 170–200 is comfortable).', 'Use one paragraph for each main point.'];
const commonDonts = ['Don\'t write addresses – the task says you do not need to.', 'Don\'t copy a memorised template that ignores the situation.', 'Don\'t mix formal and informal language.', 'Don\'t write in bullet points or notes.'];

export const letterPurposeChapters: Record<string, Chapter> = {
  /* ===================================================================== COMPLAINT */
  complaint: {
    intro: `
<p>A <b>complaint letter</b> tells an organisation or a person about a problem, explains its effect on you and asks for something to be done. It is one of the most frequent General Training Task 1 situations: faulty products, poor service, noisy neighbours, late deliveries, a course that did not match its description.</p>
<p>A good complaint is <b>firm, clear and polite</b>. The reader must understand exactly what went wrong, when, and what you want – and the tone must be strong enough to be taken seriously without becoming rude. Examiners reward letters in which every bullet point is developed with specific details (dates, names, what was said) and in which the action requested is concrete and reasonable.</p>`,
    facts: [['Usual register', 'Formal (to a company) or semi-formal (to a named manager)'], ['Tone', 'Firm and polite; never aggressive'], ['Must include', 'What happened · its effect · what you want done'], ['Key language', 'Unfortunately… · As a result… · I would be grateful if you could…'], ['Typical bullets', 'Give details · explain the problem · say what you want'], ['Length', 'At least 150 words; about 170–200 is comfortable']],
    method: [
      { title: 'Read the bullets and decide the register', body: '<p>Who is the reader? A company you do not know → formal, <i>Dear Sir or Madam / Yours faithfully</i>. A named manager → <i>Dear Mr X / Yours sincerely</i>. Note the three bullet points: they are your three body paragraphs.</p>' },
      { title: 'Open with your purpose and the essential facts', body: '<p>One or two sentences: you are complaining, about what, and the key details (date, place, order number).</p>', example: '<i>I am writing to complain about a washing machine that I bought from your Hill Street branch on 3 May.</i>' },
      { title: 'Describe the problem in specific detail', body: '<p>What exactly is wrong? Facts, not emotions: <i>it leaked</i>, <i>it arrived two weeks late</i>, <i>the room was not cleaned</i>. If you contacted them before, say when and what happened.</p>' },
      { title: 'Explain the effect on you', body: '<p>The effect justifies your request: lost time, extra cost, inconvenience. <i>As a result, I had to take a day off work to wait for the engineer.</i></p>' },
      { title: 'Request a specific, reasonable action', body: '<p>A refund, a replacement, a repair, compensation, an apology or an explanation – and a deadline if appropriate. Use polite but firm structures: <i>I would be grateful if you could… / I would like you to…</i></p>' },
      { title: 'Close appropriately', body: '<p><i>I look forward to hearing from you.</i> + the correct sign-off.</p>' }
    ],
    sections: [
      { id: 'register', title: 'Register: who is the reader?', html: registerTable },
      {
        id: 'tone', title: 'Getting the tone right',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Too weak</th><th>Firm and polite</th><th>Too aggressive</th></tr>
<tr><td>It would be nice if maybe you could look at it.</td><td>I would be grateful if you could arrange a replacement as soon as possible.</td><td>You must send me a new one immediately or I will take you to court.</td></tr>
<tr><td>The service was a bit disappointing.</td><td>I was extremely disappointed with the service I received.</td><td>Your staff are rude and useless.</td></tr>
</table></div>`
      },
      { id: 'band-impact', title: 'How a complaint letter is assessed', html: bandImpact('complaint letter') }
    ],
    worked: [
      {
        title: 'Planning a complaint letter from the prompt',
        source: '<div class="prompt-box"><p>You ordered some furniture online, but it arrived late and was damaged. Write a letter to the company. In your letter: give details of your order; describe what was wrong; say what you want the company to do.</p></div>',
        walk: [
          { q: 'Register', a: 'Formal: Dear Sir or Madam … Yours faithfully', steps: ['An online company you do not know.'] },
          { q: 'Paragraph 1 (purpose + bullet 1)', a: 'Order details', steps: ['<i>I am writing to complain about order no. 48213, a dining table and four chairs, which I ordered from your website on 2 April with guaranteed delivery by 10 April.</i>'] },
          { q: 'Paragraph 2 (bullet 2)', a: 'Late + damaged', steps: ['Two problems, each with a detail: delivered on 24 April, two weeks late; one table leg split, two chairs scratched.', 'Effect: <i>I had arranged a family dinner for my mother\'s birthday and had to borrow chairs from a neighbour.</i>'] },
          { q: 'Paragraph 3 (bullet 3)', a: 'Specific request', steps: ['<i>I would therefore like you to collect the damaged items and deliver replacements within seven days, and to refund the delivery charge of £35.</i>'] },
          { q: 'Closing', a: 'I look forward to hearing from you. Yours faithfully, + full name', steps: ['Check the count: four short paragraphs of this kind give about 180 words.'] }
        ],
        lesson: 'Each bullet becomes a paragraph, and each paragraph has specific details. That is what turns a general complaint into a Band 7+ letter.'
      }
    ],
    dos: [...commonDos, 'Give dates, names and order numbers.', 'Ask for a specific, reasonable action.'],
    donts: [...commonDonts, 'Don\'t insult the reader or threaten.', 'Don\'t write only about your feelings without facts.'],
    careful: [
      { title: 'Two problems in one bullet', body: '<p>If the bullet mentions two things (late <i>and</i> damaged), cover both.</p>' },
      { title: 'Yours faithfully vs Yours sincerely', body: '<p><i>Dear Sir or Madam</i> → <i>Yours faithfully</i>; <i>Dear Mr Lee</i> → <i>Yours sincerely</i> (British convention).</p>' }
    ],
    faq: [{ q: 'Can I invent details such as dates and names?', a: '<p>Yes. The situation is imaginary; inventing realistic details is expected and makes the letter stronger.</p>' }],
    exercises: {
      id: 'ch-letter-complaint', title: 'Chapter exercises: complaint letters',
      groups: [{
        kind: 'choice', instructions: 'Choose the best option, <b>A, B or C</b>.',
        questions: [
          { n: 1, q: 'Best opening sentence for a complaint to a hotel:', opts: ['Hello, how are you?', 'I am writing to complain about my stay at your hotel from 3 to 5 June.', 'Your hotel is the worst I have ever seen.'], a: 'B', x: 'It states the purpose and key details politely.' },
          { n: 2, q: 'Firm and polite request:', opts: ['Give me my money back now.', 'Maybe you could think about a refund?', 'I would be grateful if you could refund the full amount.'], a: 'C', x: 'Indirect, polite and specific.' },
          { n: 3, q: 'You began "Dear Sir or Madam". You end with:', opts: ['Yours faithfully,', 'Yours sincerely,', 'Lots of love,'], a: 'A', x: 'British convention: unknown reader → Yours faithfully.' },
          { n: 4, q: 'Which sentence explains the effect of the problem?', opts: ['The machine leaked.', 'As a result, I had to take a day off work to wait for the engineer.', 'I bought the machine in May.'], a: 'B', x: 'The effect justifies the request.' },
          { n: 5, q: 'Which is the best development of the bullet "describe what was wrong"?', opts: ['It was bad.', 'One table leg was split and two of the chairs were deeply scratched.', 'There were some problems with it.'], a: 'B', x: 'Specific detail develops the bullet point.' }
        ]
      }]
    },
    checklist: ['My purpose is clear in the first sentence.', 'I gave specific details of the problem.', 'I explained the effect on me.', 'I asked for a specific action.', 'My tone is firm and polite throughout.'],
    summary: ['Complaint = problem + effect + requested action.', 'Usually formal; firm and polite.', 'Specific details develop each bullet point.', 'End with a concrete request and the correct sign-off.']
  },

  /* ===================================================================== REQUEST */
  request: {
    intro: `
<p>A <b>request letter</b> asks someone for information, permission, help or action: time off work, details of a course, a reference, a change to a booking. Because you are asking a favour, the language must be <b>polite and indirect</b> – and the reader must understand exactly what you are asking and why.</p>
<p>The key grammatical tool is the <b>indirect request</b>: <i>I would be grateful if you could…</i>, <i>I was wondering whether…</i>, <i>Could you please let me know…?</i> The key content tools are a <b>clear reason</b> for the request and, where relevant, a suggestion that makes it easy for the reader to say yes.</p>`,
    facts: [['Register', 'Formal or semi-formal (sometimes informal to a friend)'], ['Tone', 'Polite, indirect, considerate'], ['Must include', 'What you want · why · details that make it easy to agree'], ['Key grammar', 'Indirect questions and requests'], ['Typical bullets', 'Explain why · say when/what · suggest how'], ['Length', 'At least 150 words']],
    method: [
      { title: 'Identify exactly what you are requesting', body: '<p>Information, permission, help or action? Make it the subject of your first sentence.</p>', example: '<i>I am writing to ask whether it would be possible to change the date of my course.</i>' },
      { title: 'Give a clear, convincing reason', body: '<p>Readers agree to requests they understand. One or two sentences of genuine detail.</p>' },
      { title: 'Use indirect question word order', body: '<p>After <i>Could you tell me / I would like to know / I was wondering</i>, use statement word order.</p>', example: '✗ <i>Could you tell me when does the course start?</i> → ✓ <i>Could you tell me when the course <b>starts</b>?</i>' },
      { title: 'Make it easy for the reader', body: '<p>Suggest a solution, offer flexibility, or explain how the reader\'s concerns will be handled (e.g. who will cover your work).</p>' },
      { title: 'Close with thanks', body: '<p><i>Thank you in advance for your help. I look forward to hearing from you.</i></p>' }
    ],
    sections: [
      { id: 'register', title: 'Register: who is the reader?', html: registerTable },
      {
        id: 'indirect', title: 'Direct and indirect requests',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Direct (too abrupt for most letters)</th><th>Indirect (polite)</th></tr>
<tr><td>Send me the timetable.</td><td>I would be grateful if you could send me the timetable.</td></tr>
<tr><td>How much does it cost?</td><td>Could you let me know how much it costs?</td></tr>
<tr><td>Can I bring my dog?</td><td>I was wondering whether it would be possible to bring my dog.</td></tr>
<tr><td>Is there parking?</td><td>I would also like to know whether there is parking nearby.</td></tr>
</table></div>`
      },
      { id: 'band-impact', title: 'How a request letter is assessed', html: bandImpact('request letter') }
    ],
    worked: [
      {
        title: 'Turning questions into a letter',
        source: '<div class="prompt-box"><p>You want to join a sports club. Write to the club secretary: say what sport you are interested in; ask about fees and training times; ask whether you can try a session before joining.</p></div>',
        walk: [
          { q: 'Bullet 1', a: 'Interest + background', steps: ['<i>I am writing to enquire about joining your badminton section. I played regularly at university and would like to start again now that I have moved to the area.</i>'] },
          { q: 'Bullet 2', a: 'Two indirect questions', steps: ['<i>Could you let me know how much the annual membership costs, and whether there is a reduced rate for beginners? I would also like to know when the adult training sessions take place, as I work until six on weekdays.</i>'] },
          { q: 'Bullet 3', a: 'Polite request', steps: ['<i>Finally, I was wondering whether it would be possible to attend a trial session before deciding to join.</i>'] }
        ],
        lesson: 'Every question becomes an indirect question, and a short reason makes each request natural.'
      }
    ],
    dos: [...commonDos, 'Use indirect questions with statement word order.', 'Give a reason for each request.'],
    donts: [...commonDonts, 'Don\'t use bare imperatives (Send me…).', 'Don\'t use question word order after "Could you tell me…".'],
    careful: [{ title: 'Question marks in indirect questions', body: '<p><i>Could you tell me…?</i> keeps its question mark; <i>I would like to know whether…</i> ends with a full stop.</p>' }],
    faq: [{ q: 'How formal should a request to my manager be?', a: '<p>Semi-formal: polite and respectful but not stiff. <i>Dear Ms Grant</i> … <i>Yours sincerely</i> or <i>Kind regards</i>.</p>' }],
    exercises: {
      id: 'ch-letter-request', title: 'Chapter exercises: request letters',
      groups: [
        { kind: 'choice', instructions: 'Choose the best option, <b>A, B or C</b>.', questions: [
          { n: 1, q: 'Most polite request:', opts: ['Tell me the price.', 'I would be grateful if you could tell me the price.', 'What is the price?'], a: 'B', x: 'Indirect and polite.' },
          { n: 2, q: 'Correct indirect question:', opts: ['Could you tell me when does the office open?', 'Could you tell me when the office opens?', 'Could you tell me when opens the office?'], a: 'B', x: 'Statement word order after <i>Could you tell me</i>.' },
          { n: 3, q: 'Which sentence makes it easiest for a manager to agree to your leave request?', opts: ['I need the week off.', 'My colleague has agreed to handle my clients while I am away.', 'I have not had a holiday for ages.'], a: 'B', x: 'It solves the manager\'s problem.' }
        ] },
        { kind: 'gap', instructions: 'Write <b>ONE WORD ONLY</b>.', questions: [
          { n: 4, q: 'I was wondering {} it would be possible to change my booking.', a: 'whether|if', x: '<i>wondering whether / if</i> + clause.' },
          { n: 5, q: 'I would appreciate it if you {} send me a copy.', a: 'could|would', x: '<i>I would appreciate it if you could…</i>' },
          { n: 6, q: 'Thank you in {} for your help.', a: 'advance', x: 'Fixed phrase: <i>thank you in advance</i>.' }
        ] }
      ]
    },
    checklist: ['My request is stated clearly at the start.', 'I gave a reason.', 'All my questions are indirect.', 'I made it easy for the reader to agree.'],
    summary: ['Request = what + why + how to make it easy.', 'Use indirect requests and questions.', 'Statement word order after Could you tell me…', 'Close with thanks.']
  },

  /* ===================================================================== APOLOGY */
  apology: {
    intro: `
<p>An <b>apology letter</b> says sorry for something you did or failed to do – missing a meeting, damaging something borrowed, forgetting an event – explains what happened, and offers to put things right. It can be informal (to a friend), semi-formal (to a neighbour or colleague) or formal (to a company or teacher).</p>
<p>A convincing apology has four parts: a <b>clear apology</b>, an <b>honest explanation</b> (not an excuse), an <b>offer to make amends</b>, and a <b>reassurance</b> about the future or the relationship. The language of regret – <i>I should have…</i>, <i>I'm afraid…</i> – and of offering – <i>I'll…</i>, <i>Would you let me…?</i> – is what examiners look for.</p>`,
    facts: [['Register', 'Any – depends on the reader'], ['Tone', 'Sincere, responsible, warm (informal) or respectful (formal)'], ['Must include', 'Apology · explanation · amends · reassurance'], ['Key grammar', 'should have + participle; will for offers'], ['Typical bullets', 'Explain what happened · apologise · say what you will do'], ['Length', 'At least 150 words']],
    method: [
      { title: 'Apologise clearly and early', body: '<p>Name what you are apologising for in the first paragraph.</p>', example: '<i>I\'m writing to say how sorry I am about missing your party on Saturday.</i>' },
      { title: 'Explain honestly – take responsibility', body: '<p>Explain what happened, but avoid blaming others. <i>I should have checked…</i> shows responsibility.</p>' },
      { title: 'Offer to make amends', body: '<p>A concrete offer: pay for repairs, replace an item, arrange another meeting.</p>' },
      { title: 'Reassure and close warmly', body: '<p><i>It won\'t happen again. I hope you can forgive me.</i></p>' }
    ],
    sections: [
      { id: 'register', title: 'Register: who is the reader?', html: registerTable },
      {
        id: 'language', title: 'Apology language by register',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Informal</th><th>Formal</th></tr>
<tr><td>I'm really sorry about…</td><td>Please accept my sincere apologies for…</td></tr>
<tr><td>I feel terrible about it.</td><td>I very much regret any inconvenience this has caused.</td></tr>
<tr><td>Let me make it up to you.</td><td>I would like to offer…</td></tr>
<tr><td>It won't happen again, I promise.</td><td>I can assure you that this will not happen again.</td></tr>
</table></div>`
      },
      { id: 'band-impact', title: 'How an apology letter is assessed', html: bandImpact('apology letter') }
    ],
    worked: [
      {
        title: 'Explanation vs excuse',
        questions: '<ol><li>"It wasn\'t my fault – the train was late."</li><li>"My train was cancelled, and I should have phoned you straight away instead of waiting."</li></ol><p>Which sounds more sincere, and why?</p>',
        walk: [
          { q: 'Sentence 2', a: 'More sincere', steps: ['It explains (cancelled train) and accepts responsibility for what the writer could control (<i>I should have phoned</i>).', 'Sentence 1 blames something else and sounds defensive.'] }
        ],
        lesson: 'Explain the cause, then take responsibility for your part. That is the difference between an explanation and an excuse.'
      }
    ],
    dos: [...commonDos, 'Use should have + participle to show responsibility.', 'Make a concrete offer.'],
    donts: [...commonDonts, 'Don\'t blame other people.', 'Don\'t apologise only in the last line.'],
    careful: [{ title: 'Over-apologising', body: '<p>One clear apology and a later reference (<i>Once again, I\'m sorry</i>) is enough. Repeating <i>sorry</i> in every sentence wastes words and limits vocabulary.</p>' }],
    faq: [{ q: 'Should an informal apology still be organised in paragraphs?', a: '<p>Yes. Paragraphing is part of Coherence and Cohesion in every letter.</p>' }],
    exercises: {
      id: 'ch-letter-apology', title: 'Chapter exercises: apology letters',
      groups: [
        { kind: 'choice', instructions: 'Choose the best option, <b>A, B or C</b>.', questions: [
          { n: 1, q: 'Best formal apology:', opts: ['Sorry!', 'Please accept my sincere apologies for the delay.', 'My bad.'], a: 'B', x: 'Formal and complete.' },
          { n: 2, q: 'Which shows responsibility?', opts: ['The traffic was terrible.', 'I should have left earlier.', 'Everyone was late that day.'], a: 'B', x: '<i>should have</i> + participle accepts responsibility.' },
          { n: 3, q: 'A concrete offer to make amends:', opts: ['I hope it\'s OK.', 'I\'ll pay for the repair in full.', 'Things like this happen.'], a: 'B', x: 'Specific and helpful.' }
        ] },
        { kind: 'gap', instructions: 'Write <b>ONE WORD ONLY</b>.', questions: [
          { n: 4, q: 'I should {} told you earlier.', a: 'have', x: '<i>should have</i> + past participle.' },
          { n: 5, q: 'I can {} you that this will not happen again.', a: 'assure', x: '<i>assure</i> + person + that.' },
          { n: 6, q: 'Let me make it {} to you – dinner is on me.', a: 'up', x: '<i>make it up to someone</i> = compensate.' }
        ] }
      ]
    },
    checklist: ['I apologised clearly in the first paragraph.', 'I explained without blaming others.', 'I made a concrete offer.', 'I reassured the reader.'],
    summary: ['Apology = sorry + explanation + amends + reassurance.', 'Take responsibility (should have…).', 'Match apology language to the register.']
  },

  /* ===================================================================== INVITATION */
  invitation: {
    intro: `
<p>An <b>invitation letter</b> invites the reader to an event – a party, a reunion, a wedding, a company event, a visit – gives the details they need, and persuades them to come. It is usually informal or semi-formal, but company events call for a formal style.</p>
<p>The challenge is to be <b>warm and enthusiastic</b> while giving <b>complete practical information</b>: what, when, where, who, why, and how to reply. Bullet points often ask for something extra – how the reader could help, what to bring – which must be developed, not mentioned in passing.</p>`,
    facts: [['Register', 'Usually informal or semi-formal; formal for business events'], ['Tone', 'Warm, enthusiastic, welcoming'], ['Must include', 'The invitation · event details · reason to come · how to reply'], ['Key grammar', 'will/going to for plans; would + like/love'], ['Typical bullets', 'Invite · give details · explain how the reader could help'], ['Length', 'At least 150 words']],
    method: [
      { title: 'Open warmly and make the invitation', body: '<p>A friendly opening line, then the invitation in the first paragraph.</p>' },
      { title: 'Give the essential details', body: '<p>Date, time, place, what will happen – with a vivid detail or two.</p>' },
      { title: 'Develop the extra bullet', body: '<p>How the reader could help, what to bring, where to stay – with specific suggestions.</p>' },
      { title: 'Persuade and ask for a reply', body: '<p><i>It wouldn\'t be the same without you. Could you let me know by…?</i></p>' }
    ],
    sections: [
      { id: 'register', title: 'Register: who is the reader?', html: registerTable },
      {
        id: 'formal-informal', title: 'Formal and informal invitations',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Informal</th><th>Formal</th></tr>
<tr><td>I'm writing to invite you to…</td><td>I would like to invite you to…</td></tr>
<tr><td>It'd be lovely if you could come.</td><td>We would be delighted if you could attend.</td></tr>
<tr><td>Let me know if you can make it.</td><td>Please confirm your attendance by 5 May.</td></tr>
</table></div>`
      },
      { id: 'band-impact', title: 'How an invitation letter is assessed', html: bandImpact('invitation letter') }
    ],
    worked: [
      {
        title: 'Developing the "how you could help" bullet',
        questions: '<p>Weak: "You can help with the party if you want."<br>How can this be developed?</p>',
        walk: [
          { q: 'Developed version', a: 'Specific, linked to the reader', steps: ['<i>Since you\'re such a good photographer, I was wondering whether you could take some photos during the evening. We\'d also really appreciate help setting up the room on Saturday afternoon, if you arrive early enough.</i>', 'It names specific tasks, links them to the reader\'s skills and gives practical timing.'] }
        ],
        lesson: 'A bullet point is developed when it contains specific, relevant detail – not when it is merely mentioned.'
      }
    ],
    dos: [...commonDos, 'Give date, time, place and what will happen.', 'Ask the reader to reply by a date.'],
    donts: [...commonDonts, 'Don\'t forget practical details (how to get there, where to stay).', 'Don\'t use over-formal language to a close friend.'],
    careful: [{ title: 'Future forms', body: '<p>Use <i>will</i> for future facts (<i>There\'ll be music</i>), the present continuous for arrangements (<i>We\'re holding it at…</i>) and the present simple for timetables (<i>The party starts at seven</i>).</p>' }],
    faq: [{ q: 'Can I use exclamation marks?', a: '<p>In an informal invitation, one or two are natural. Do not use them in formal letters.</p>' }],
    exercises: {
      id: 'ch-letter-invitation', title: 'Chapter exercises: invitation letters',
      groups: [
        { kind: 'choice', instructions: 'Choose the best option, <b>A, B or C</b>.', questions: [
          { n: 1, q: 'Formal invitation to clients:', opts: ['Come to our party!', 'We would be delighted if you could attend our annual reception.', 'Wanna come?'], a: 'B', x: 'Formal and polite.' },
          { n: 2, q: 'Asking for a reply (informal):', opts: ['Please confirm your attendance forthwith.', 'Could you let me know by Friday if you can make it?', 'Reply.'], a: 'B', x: 'Friendly and clear.' },
          { n: 3, q: 'Best detail about the event:', opts: ['It will be nice.', 'There\'ll be a buffet dinner, a photo slideshow and dancing until midnight.', 'Things will happen.'], a: 'B', x: 'Specific detail develops the bullet.' }
        ] },
        { kind: 'gap', instructions: 'Write <b>ONE WORD ONLY</b>.', questions: [
          { n: 4, q: 'The party will take {} at my parents\' house.', a: 'place', x: '<i>take place</i> = happen.' },
          { n: 5, q: 'It wouldn\'t be the same {} you.', a: 'without', x: 'Persuasive fixed phrase.' },
          { n: 6, q: 'Please confirm your {} by 5 May.', a: 'attendance', x: 'Formal: <i>confirm your attendance</i>.' }
        ] }
      ]
    },
    checklist: ['I made the invitation in the first paragraph.', 'I gave all the practical details.', 'I developed every bullet point.', 'I asked for a reply.'],
    summary: ['Invitation = invite + details + persuasion + reply request.', 'Warm tone; register depends on the reader.', 'Develop the extra bullet with specifics.']
  },

  /* ===================================================================== APPLICATION */
  application: {
    intro: `
<p>An <b>application letter</b> applies for a job, a volunteer role, a course, a membership or a place on a programme. It is formal, and its purpose is to persuade: the reader must finish the letter believing that you are a suitable candidate.</p>
<p>The strongest application letters do not list every qualification. They <b>select</b> the experience and skills that match the role and give <b>evidence</b> for each claim (<i>I organised a charity run for 500 participants</i> is stronger than <i>I am well organised</i>). Motivation and availability complete the picture.</p>`,
    facts: [['Register', 'Formal'], ['Tone', 'Confident, professional, modest'], ['Must include', 'The role · where you saw it · relevant experience/skills · motivation · availability'], ['Key grammar', 'Present perfect for experience; present simple for current role'], ['Typical bullets', 'Why you are interested · relevant experience · when available'], ['Length', 'At least 150 words']],
    method: [
      { title: 'Name the role and where you saw it', body: '<p><i>I am writing to apply for the position of… advertised on…</i></p>' },
      { title: 'Select relevant experience and give evidence', body: '<p>Two or three points matched to the role, each with a concrete example.</p>' },
      { title: 'Explain your motivation', body: '<p>Why this role, this organisation? Genuine and specific.</p>' },
      { title: 'Give availability and close formally', body: '<p><i>I am available for interview at any time. Thank you for considering my application.</i></p>' }
    ],
    sections: [
      { id: 'register', title: 'Register: who is the reader?', html: registerTable },
      {
        id: 'evidence', title: 'Claims and evidence',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Claim only (weak)</th><th>Claim + evidence (strong)</th></tr>
<tr><td>I am good with people.</td><td>As a hotel receptionist, I deal with guests from around the world every day, often under pressure.</td></tr>
<tr><td>I am organised.</td><td>Last year I helped to organise a charity fun run for 500 participants.</td></tr>
<tr><td>I like books.</td><td>I run a monthly book club at my local library and have read widely in children's fiction.</td></tr>
</table></div>`
      },
      { id: 'band-impact', title: 'How an application letter is assessed', html: bandImpact('application letter') }
    ],
    worked: [
      {
        title: 'Matching experience to the role',
        source: '<div class="prompt-box"><p>Role: part-time assistant in a bookshop (customer service, organising events, recommending books).</p></div>',
        walk: [
          { q: 'Select', a: 'Three matched points', steps: ['Customer service: two years in a café.', 'Events: helped organise a school book fair.', 'Recommending books: a reading blog with 2,000 followers.'] },
          { q: 'Write one with evidence', a: '"For the past two years I have worked part-time in a busy café, where I have learned to serve customers quickly and courteously."', steps: ['Present perfect for experience up to now; specific setting; a skill that transfers.'] }
        ],
        lesson: 'Select the experience that fits, then prove each point with a specific example.'
      }
    ],
    dos: [...commonDos, 'Match your experience to the role.', 'Support every claim with evidence.'],
    donts: [...commonDonts, 'Don\'t list unrelated qualifications.', 'Don\'t be over-modest or boastful.'],
    careful: [{ title: '"Experience" countable or not', body: '<p><i>I have three years\' <b>experience</b></i> (uncountable); <i>It was a valuable <b>experience</b></i> (countable, an event).</p>' }],
    faq: [{ q: 'Should I mention salary?', a: '<p>Only if a bullet asks. Otherwise focus on suitability and availability.</p>' }],
    exercises: {
      id: 'ch-letter-application', title: 'Chapter exercises: application letters',
      groups: [
        { kind: 'choice', instructions: 'Choose the best option, <b>A, B or C</b>.', questions: [
          { n: 1, q: 'Best opening:', opts: ['I want the job.', 'I am writing to apply for the position of receptionist advertised on your website.', 'Hi, I saw your ad.'], a: 'B', x: 'Formal, with role and source.' },
          { n: 2, q: 'Strongest evidence of teamwork:', opts: ['I am a team player.', 'I worked with a team of six to deliver a project two weeks ahead of schedule.', 'Everyone likes me.'], a: 'B', x: 'Specific evidence.' },
          { n: 3, q: 'Formal closing:', opts: ['Thank you for considering my application.', 'Cheers!', 'Hope to hear back!'], a: 'A', x: 'Formal and polite.' }
        ] },
        { kind: 'gap', instructions: 'Write <b>ONE WORD ONLY</b>.', questions: [
          { n: 4, q: 'I have five years\' {} in sales.', a: 'experience', x: 'Uncountable: no <i>-s</i>.' },
          { n: 5, q: 'I am available {} interview at any time.', a: 'for', x: '<i>available for interview</i>.' },
          { n: 6, q: 'I believe I would be well {} to this role.', a: 'suited', x: '<i>well suited to</i>.' }
        ] }
      ]
    },
    checklist: ['I named the role and the source.', 'I selected relevant experience with evidence.', 'I explained my motivation.', 'I gave my availability.'],
    summary: ['Application = role + evidence-based suitability + motivation + availability.', 'Formal, confident and specific.', 'Every claim needs evidence.']
  },

  /* ===================================================================== EXPLANATION */
  explanation: {
    intro: `
<p>An <b>explanation letter</b> explains a situation – why you missed a deadline, why a payment is late, why plans have changed, what happened during an incident. It may include an apology or a request, but its core is a <b>clear account of causes and events</b>.</p>
<p>Clarity is everything. The reader should be able to follow the sequence of events and understand why things happened. Cause–effect language (<i>because, as a result, due to</i>) and sequencing language (<i>first, then, after that</i>) carry the letter, and the final paragraph should look forward: what happens next.</p>`,
    facts: [['Register', 'Any – depends on the reader'], ['Tone', 'Clear, honest, constructive'], ['Must include', 'The situation · the causes · what has been done · next steps'], ['Key grammar', 'Past tenses in sequence; cause–effect linkers'], ['Typical bullets', 'Explain why · say what you have done · suggest a solution'], ['Length', 'At least 150 words']],
    method: [
      { title: 'State the situation in the first sentence', body: '<p><i>I am writing to explain why I was unable to…</i></p>' },
      { title: 'Explain the causes in sequence', body: '<p>Past simple for events, past perfect for earlier background, clear linkers.</p>' },
      { title: 'Say what you have already done', body: '<p>Show responsibility and progress.</p>' },
      { title: 'Propose next steps', body: '<p>A new date, a solution, a change for the future.</p>' }
    ],
    sections: [
      { id: 'register', title: 'Register: who is the reader?', html: registerTable },
      {
        id: 'sequence', title: 'Language for causes and sequence',
        html: `<ul><li><b>Cause:</b> <i>because, as, since, due to, owing to, the reason was that</i></li><li><b>Result:</b> <i>as a result, consequently, so, which meant that</i></li><li><b>Sequence:</b> <i>first, then, after that, by the time…, eventually</i></li><li><b>Background:</b> past perfect – <i>I had already booked the tickets when…</i></li></ul>`
      },
      { id: 'band-impact', title: 'How an explanation letter is assessed', html: bandImpact('explanation letter') }
    ],
    worked: [
      {
        title: 'Ordering an explanation',
        questions: '<p>Events: colleague fell ill · you were moved to another department · long hours · project unfinished · colleague returns Monday.</p>',
        walk: [
          { q: 'Sequence with linkers', a: '"Two weeks ago, a colleague became seriously ill, so I was moved to his department at short notice. As a result, I have been working very long hours, which meant that I could not finish the project. However, he returns on Monday, so…"', steps: ['Events in time order; each link marked with a cause/result linker.'] }
        ],
        lesson: 'A clear sequence plus cause–effect linkers makes an explanation easy to follow.'
      }
    ],
    dos: [...commonDos, 'Explain events in a clear order.', 'Finish with a constructive next step.'],
    donts: [...commonDonts, 'Don\'t jump backwards and forwards in time.', 'Don\'t leave the reader without a next step.'],
    careful: [{ title: 'Excuse or explanation?', body: '<p>Explanations are factual and take responsibility where appropriate; excuses blame others.</p>' }],
    faq: [{ q: 'Should I apologise in an explanation letter?', a: '<p>If the situation inconvenienced the reader, a brief apology is natural – but keep the focus on the explanation and the solution.</p>' }],
    exercises: {
      id: 'ch-letter-explanation', title: 'Chapter exercises: explanation letters',
      groups: [
        { kind: 'choice', instructions: 'Choose the best option, <b>A, B or C</b>.', questions: [
          { n: 1, q: 'Best first sentence:', opts: ['I am writing to explain why my rent payment was late this month.', 'There were problems.', 'Sorry sorry sorry.'], a: 'A', x: 'States the situation clearly.' },
          { n: 2, q: 'Correct cause linker:', opts: ['Due to my bank changed its system, …', 'Because of a change in my bank\'s system, …', 'Because of my bank changed its system, …'], a: 'B', x: '<i>Because of</i> + noun phrase.' },
          { n: 3, q: 'Best next step:', opts: ['Anyway.', 'I will pay the full amount by Friday 12 June and have set up a standing order to avoid this in future.', 'It won\'t matter.'], a: 'B', x: 'Concrete and forward-looking.' }
        ] },
        { kind: 'gap', instructions: 'Write <b>ONE WORD ONLY</b>.', questions: [
          { n: 4, q: 'As a {}, I was unable to attend.', a: 'result', x: '<i>as a result</i>.' },
          { n: 5, q: 'I had {} paid when I received the second bill.', a: 'already', x: 'Past perfect with <i>already</i>.' }
        ] }
      ]
    },
    checklist: ['I stated the situation at the start.', 'I explained causes in order.', 'I said what I had done.', 'I proposed a next step.'],
    summary: ['Explanation = situation + causes in sequence + action taken + next steps.', 'Use cause–effect and sequencing language.', 'End constructively.']
  },

  /* ===================================================================== RECOMMENDATION */
  recommendation: {
    intro: `
<p>A <b>recommendation letter</b> recommends something or someone – a restaurant, a holiday destination, a course, a product, or (formally) a colleague for a job. Informal recommendations to friends are common in General Training; formal references for a person are less common but possible.</p>
<p>A good recommendation is <b>specific and balanced</b>. It names one clear choice, gives several concrete reasons, and offers practical advice – including any drawbacks, which make the recommendation more believable.</p>`,
    facts: [['Register', 'Usually informal (friend); formal for a reference'], ['Tone', 'Enthusiastic but credible'], ['Must include', 'The recommendation · reasons with detail · practical advice'], ['Key grammar', 'should, I\'d recommend + -ing, If I were you…'], ['Typical bullets', 'Recommend · explain why · give advice'], ['Length', 'At least 150 words']],
    method: [
      { title: 'Make one clear recommendation', body: '<p>Name it early – not a list of options.</p>' },
      { title: 'Give two or three specific reasons', body: '<p>Concrete details (what you can see, eat, learn) are more persuasive than adjectives.</p>' },
      { title: 'Give practical advice, including a drawback', body: '<p>Getting there, booking, timing, what to avoid.</p>' },
      { title: 'Close enthusiastically', body: '<p><i>I\'m sure you\'ll love it. Let me know how it goes!</i></p>' }
    ],
    sections: [
      { id: 'register', title: 'Register: who is the reader?', html: registerTable },
      {
        id: 'grammar', title: 'Grammar for recommending',
        html: `<ul><li><i>I'd (highly) recommend</i> + noun / -ing: <i>I'd recommend staying in the old town.</i> (✗ <i>recommend you to stay</i>)</li><li><i>You should / ought to / have to try…</i></li><li><i>If I were you, I'd…</i></li><li><i>It's worth</i> + -ing: <i>It's worth booking in advance.</i></li><li>Formal reference: <i>I have no hesitation in recommending her for…</i></li></ul>`
      },
      { id: 'band-impact', title: 'How a recommendation letter is assessed', html: bandImpact('recommendation letter') }
    ],
    worked: [
      {
        title: 'From vague to specific reasons',
        questions: '<p>Weak: "The restaurant is really good and nice."</p>',
        walk: [
          { q: 'Specific', a: '"It has a private room for up to twenty people, which would be perfect for the team, and the set menu is very reasonable at £25 a head. The staff are also used to large groups, so the service is quick."', steps: ['Three concrete reasons linked to the reader\'s need (a team dinner).'] }
        ],
        lesson: 'Reasons persuade when they are specific and relevant to the reader\'s situation.'
      }
    ],
    dos: [...commonDos, 'Make one clear recommendation.', 'Give specific reasons and practical tips.'],
    donts: [...commonDonts, 'Don\'t list many options without choosing.', 'Don\'t write "recommend you to".'],
    careful: [{ title: '"Recommend" patterns', body: '<p><i>recommend</i> + noun / -ing / that-clause. Not + person + to.</p>' }],
    faq: [{ q: 'Should I mention disadvantages?', a: '<p>Yes, briefly – a balanced recommendation is more credible and often answers the "advice" bullet.</p>' }],
    exercises: {
      id: 'ch-letter-recommendation', title: 'Chapter exercises: recommendation letters',
      groups: [
        { kind: 'choice', instructions: 'Choose the best option, <b>A, B or C</b>.', questions: [
          { n: 1, q: 'Correct sentence:', opts: ['I recommend you to visit the museum.', 'I\'d recommend visiting the museum.', 'I recommend to visit the museum.'], a: 'B', x: '<i>recommend</i> + -ing.' },
          { n: 2, q: 'Most persuasive reason:', opts: ['It\'s nice.', 'You can walk along the old city walls at sunset and see the whole bay.', 'Many people go there.'], a: 'B', x: 'Specific and vivid.' },
          { n: 3, q: 'Formal reference phrase:', opts: ['She\'s great, hire her!', 'I have no hesitation in recommending her for the position.', 'She\'s OK.'], a: 'B', x: 'Formal reference language.' }
        ] },
        { kind: 'gap', instructions: 'Write <b>ONE WORD ONLY</b>.', questions: [
          { n: 4, q: 'It\'s {} booking a table in advance.', a: 'worth', x: '<i>It\'s worth</i> + -ing.' },
          { n: 5, q: 'If I {} you, I\'d go in spring.', a: 'were', x: '<i>If I were you</i> (second conditional).' }
        ] }
      ]
    },
    checklist: ['I made one clear recommendation.', 'I gave specific reasons.', 'I gave practical advice.', 'I used recommend + -ing correctly.'],
    summary: ['Recommendation = choice + specific reasons + practical advice.', 'Credible because balanced.', 'recommend + -ing / that-clause.']
  }
};

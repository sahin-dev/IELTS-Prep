import type { CueCard, SpeakingPart } from '@/lib/types';

export const speaking: { intro: string; parts: SpeakingPart[]; part1Topics: { topic: string; qs: string[] }[]; cueCards: CueCard[]; phrases: { h: string; items: string[] }[]; idioms: string[][] } = {
  intro: `
<p>The Speaking test is a <b>face-to-face conversation</b> with a certified examiner, lasting 11–14 minutes and recorded. It is the same for Academic and General Training.</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Part</th><th>Time</th><th>What happens</th><th>Ideal answer length</th></tr>
<tr><td>1 – Introduction & interview</td><td>4–5 min</td><td>ID check, then questions on 2–3 familiar topics (home, work/study, hobbies, daily life).</td><td>2–4 sentences (15–25 seconds)</td></tr>
<tr><td>2 – Long turn</td><td>3–4 min</td><td>You receive a cue card, get <b>1 minute</b> to prepare (paper & pencil given) and speak for <b>up to 2 minutes</b>. The examiner may ask 1–2 short follow-up questions.</td><td>Speak for the full 2 minutes</td></tr>
<tr><td>3 – Discussion</td><td>4–5 min</td><td>Abstract questions linked to the Part 2 topic: society, causes, comparisons, the future.</td><td>4–7 sentences (30–60 seconds)</td></tr>
</table></div>
<h3>How you are assessed</h3>
<div class="grid-2">
<div class="card"><h4>Fluency & Coherence</h4><p>Speaking at length without long pauses, self-correction kept to a minimum, ideas logically connected with discourse markers (<i>actually, the thing is, on top of that, that's why</i>).</p></div>
<div class="card"><h4>Lexical Resource</h4><p>Topic vocabulary, collocations, idiomatic expressions used naturally, and the ability to paraphrase when you lack a word.</p></div>
<div class="card"><h4>Grammatical Range & Accuracy</h4><p>Mix of tenses, conditionals, relative clauses, passives, modals for speculation (<i>might, could have</i>) – with mostly error-free sentences.</p></div>
<div class="card"><h4>Pronunciation</h4><p>Clear sounds, correct word stress (pho<b>TOG</b>raphy), sentence stress, natural intonation and chunking. Accent itself is NOT penalised – clarity is what matters.</p></div>
</div>
<div class="callout tip"><strong>Five rules for a high score</strong>
1) Never give one-word answers. 2) Don't memorise answers – examiners are trained to detect them and will change the topic. 3) It's fine to ask "Could you repeat the question, please?" 4) Keep talking – a "thinking phrase" is better than silence. 5) Speak to communicate, not to show off rare words.</div>`,
  parts: [
    {
      id: 'part1', name: 'Part 1 – Introduction & Interview',
      desc: 'Short questions about you and familiar topics. The examiner reads questions from a script and will move on after 15–30 seconds.',
      technique: `<h4>The A-R-E technique</h4><ul class="structure"><li><b>A – Answer</b>Give a direct answer. <i>"Yes, I really enjoy cooking."</i></li><li><b>R – Reason</b>Explain why. <i>"It helps me unwind after a long day at work..."</i></li><li><b>E – Example / Extra detail</b><i>"...for instance, last weekend I tried making Thai green curry from scratch, and it turned out surprisingly well."</i></li></ul>`,
      tips: ['Expand but don\'t lecture – 2–4 sentences is ideal.', 'Use a variety of tenses naturally: "I used to..., but these days I...".', 'Avoid repeating the question word for word – paraphrase it: "Do you like reading?" → "I\'m a big reader, actually..."', 'Questions on "Work or study?" are almost always first – prepare to talk about it naturally.'],
      samples: [
        { q: 'Do you work or are you a student?', a: 'I\'m currently in my final year at university, studying civil engineering. It\'s quite demanding, to be honest, because we have a lot of project work, but I find it really rewarding, especially when we get to visit construction sites and see the theory in action.' },
        { q: 'Do you like the area where you live?', a: 'Yes, I\'m really fond of it. It\'s a quiet residential neighbourhood on the outskirts of the city, so it\'s much more peaceful than the centre. The only drawback is that public transport isn\'t great, so I usually have to cycle or drive everywhere.' },
        { q: 'How often do you use your phone?', a: 'Far more than I\'d like to admit! I probably check it every few minutes, mainly for messages and news. I\'ve actually started turning on "focus mode" when I\'m studying, because otherwise I get distracted far too easily.' }
      ]
    },
    {
      id: 'part2', name: 'Part 2 – The Long Turn (Cue Card)',
      desc: 'You get a card with a topic and 3–4 prompts. 1 minute to make notes, then speak for up to 2 minutes. The examiner will stop you at 2 minutes.',
      technique: `<h4>Using your 1 minute of preparation</h4><ul class="steps"><li>Decide your topic in the first 5 seconds – choose something you can talk about easily (it doesn't have to be true!).</li><li>Write <b>keywords only</b>, not sentences – one line per bullet point.</li><li>Add 2–3 "extra" notes: feelings, a short story, a comparison, vocabulary you want to use.</li><li>Plan your last point to be the longest – the "explain why/how you felt" part.</li></ul>
<h4>Structure for 2 minutes</h4><ul class="structure"><li><b>Intro (10 s)</b>"I'd like to talk about... which I [visited / bought / met] about two years ago."</li><li><b>Bullets 1–3 (70 s)</b>Each bullet ~20–25 seconds with detail: who, what, where, when, how.</li><li><b>Final bullet / feelings (30–40 s)</b>Explain why, how you felt, what you learned, whether you'd do it again.</li><li><b>Extend if time remains</b>Use the past/present/future trick: "Back then... Now... In the future I hope to..."</li></ul>`,
      tips: ['Keep talking until the examiner says "Thank you" – stopping early lowers Fluency.', 'Use narrative tenses: past simple, past continuous, past perfect ("I had never seen...").', 'Describe with the five senses for places and events.', 'If you finish the bullets, add a comparison or a related story.'],
      samples: [
        {
          q: 'Describe a book you enjoyed reading. You should say: what the book was, who wrote it, what it was about, and explain why you enjoyed it.',
          a: 'I\'d like to talk about a book called <i>Sapiens</i> by Yuval Noah Harari, which I read a couple of years ago when a friend lent it to me during the summer holidays. Harari is an Israeli historian, and what makes his writing special is that he manages to explain extremely complex ideas in a really accessible way.<br><br>The book is basically a brief history of humankind, starting from when we were just one of several human species, and moving through the agricultural revolution, the rise of money and empires, right up to modern science. One idea that really stuck with me is that humans dominate the planet because we can believe in shared stories – things like nations, money and laws, which only exist because we all agree they do.<br><br>As for why I enjoyed it so much, I think it completely changed the way I look at everyday things. For instance, before reading it, I\'d never thought of money as a kind of story, but now I find it fascinating. It also sparked lots of discussions with my friends – we spent hours arguing about whether the agricultural revolution was actually a mistake! I\'d say it\'s one of those rare books that makes you feel slightly cleverer after reading it, and I\'ve recommended it to quite a few people since. If I had more time, I\'d definitely like to read his other books as well.'
        }
      ]
    },
    {
      id: 'part3', name: 'Part 3 – Two-way Discussion',
      desc: 'Abstract, society-level questions linked to the Part 2 topic. The examiner may challenge your views or ask follow-ups. This part distinguishes Band 6 from Band 7+.',
      technique: `<h4>The O-R-E-C technique</h4><ul class="structure"><li><b>O – Opinion</b>"I\'d say that..." / "It depends, but generally..."</li><li><b>R – Reason</b>"The main reason is that..."</li><li><b>E – Example</b>"For example, in my country..." (general, not personal)</li><li><b>C – Contrast / Consequence</b>"Having said that, ..." / "As a result, ..." – show you see both sides.</li></ul>
<h4>Question types & how to handle them</h4><div class="table-wrap"><table class="data-table plain"><tr><th>Type</th><th>Example</th><th>Useful language</th></tr>
<tr><td>Opinion</td><td>Do you think reading is less popular today?</td><td>I'd argue that... / From my perspective...</td></tr>
<tr><td>Compare</td><td>How is reading different now from 50 years ago?</td><td>Whereas in the past..., nowadays... / far more / much less</td></tr>
<tr><td>Cause / Effect</td><td>Why do young people read less?</td><td>This is largely due to... / One consequence is...</td></tr>
<tr><td>Future / Speculate</td><td>Will printed books disappear?</td><td>I doubt that... / It's quite likely that... / might well</td></tr>
<tr><td>Evaluate / Solution</td><td>What can schools do to encourage reading?</td><td>One effective measure would be... / If schools..., children would...</td></tr></table></div>`,
      tips: ['Talk about society/people in general, not just yourself.', 'Use hedging language: "It\'s hard to say, but...", "To some extent...".', 'Use conditionals: "If governments invested more..., we would...".', 'It\'s OK to take a moment: "That\'s an interesting question – I\'ve never really thought about it, but..."'],
      samples: [
        { q: 'Why do you think some young people don\'t read books any more?', a: 'I think the main reason is the sheer amount of competition for their attention. Twenty years ago, if you were bored on a train, a book was one of the few forms of entertainment available, whereas now you\'ve got social media, streaming and games all on one device. These are designed to be instantly rewarding, so a novel, which takes a while to get into, can seem quite slow by comparison. Having said that, I don\'t think young people have stopped reading altogether – they probably read a huge amount of text online; it\'s just shorter and more fragmented.' },
        { q: 'Do you think printed books will disappear in the future?', a: 'I doubt it, at least not in the foreseeable future. People predicted the death of the printed book when e-readers first came out, but sales of paper books have actually remained fairly stable. I think there\'s something about the physical experience – the feel of the paper, being able to see your progress – that many people value. What might happen, though, is that printed books become more of a premium product, a bit like vinyl records, while everyday reading moves increasingly onto screens.' }
      ]
    }
  ],
  part1Topics: [
    { topic: 'Work or Studies', qs: ['Do you work or are you a student?', 'Why did you choose that job/subject?', 'What do you like most about it?', 'Is there anything you dislike about it?', 'What would you like to do in the future?'] },
    { topic: 'Hometown', qs: ['Where is your hometown?', 'What do you like about it?', 'Has it changed much since you were a child?', 'Is it a good place for young people?', 'Would you like to live there in the future?'] },
    { topic: 'Home / Accommodation', qs: ['Do you live in a house or an apartment?', 'Which room do you spend the most time in?', 'What would you like to change about your home?', 'Do you plan to live there for a long time?'] },
    { topic: 'Daily Routine', qs: ['What is your daily routine like?', 'Are you a morning person or an evening person?', 'Has your routine changed in recent years?', 'Do you prefer to have a fixed routine?'] },
    { topic: 'Reading', qs: ['Do you like reading?', 'What kinds of books do you enjoy?', 'Do you prefer e-books or printed books?', 'Did you read much as a child?'] },
    { topic: 'Music', qs: ['What kind of music do you like?', 'Do you play any musical instruments?', 'Do you listen to music while you work or study?', 'Has your taste in music changed over time?'] },
    { topic: 'Weather', qs: ['What\'s the weather like in your country?', 'What is your favourite kind of weather?', 'Does the weather affect your mood?', 'Do you check the weather forecast?'] },
    { topic: 'Food & Cooking', qs: ['What\'s your favourite food?', 'Do you enjoy cooking?', 'Do you prefer eating at home or eating out?', 'Is there any food you didn\'t like as a child but like now?'] },
    { topic: 'Technology & Phones', qs: ['How often do you use your phone?', 'What do you mainly use it for?', 'Could you live without your phone for a week?', 'What was the last app you downloaded?'] },
    { topic: 'Friends', qs: ['Do you have many friends?', 'How often do you meet your friends?', 'What do you usually do together?', 'Is it easy to make new friends as an adult?'] },
    { topic: 'Sport & Exercise', qs: ['Do you do any sport?', 'What sports are popular in your country?', 'Did you play sport at school?', 'How do you keep fit?'] },
    { topic: 'Travel & Holidays', qs: ['Do you like travelling?', 'Where did you go on your last holiday?', 'Do you prefer travelling alone or with others?', 'Is there a place you would love to visit?'] },
    { topic: 'Shopping', qs: ['Do you enjoy shopping?', 'Do you prefer shopping online or in stores?', 'What was the last thing you bought?', 'Do you ever buy things you don\'t need?'] },
    { topic: 'Films & TV', qs: ['How often do you watch films?', 'Do you prefer watching films at home or at the cinema?', 'What kind of TV programmes do you like?', 'Is there a film you have watched more than once?'] },
    { topic: 'Transport', qs: ['How do you usually travel to work or school?', 'Is public transport good where you live?', 'Do you like cycling?', 'How will transport change in the future?'] },
    { topic: 'Nature & Parks', qs: ['Do you like spending time in nature?', 'Are there any parks near where you live?', 'What do people do in parks in your city?', 'Did you spend much time outdoors as a child?'] },
    { topic: 'Art & Photography', qs: ['Do you like art?', 'Have you ever visited an art gallery?', 'Do you take many photos?', 'Do you prefer taking photos of people or places?'] },
    { topic: 'Sleep', qs: ['How many hours do you usually sleep?', 'Do you ever take naps during the day?', 'What do you do if you can\'t sleep?', 'Do you think people get enough sleep these days?'] },
    { topic: 'Celebrations & Birthdays', qs: ['How do you usually celebrate your birthday?', 'What is the most important festival in your country?', 'Do you like giving gifts?', 'Have celebrations changed since you were young?'] },
    { topic: 'Time Management', qs: ['Are you good at managing your time?', 'Do you make plans or to-do lists?', 'Are you usually on time?', 'What do you do when you have free time?'] },
    { topic: 'Clothes & Fashion', qs: ['What kind of clothes do you like to wear?', 'Do you follow fashion trends?', 'Do you wear different clothes at weekends?', 'Have you ever worn traditional clothing?'] },
    { topic: 'Languages', qs: ['How many languages can you speak?', 'Why are you learning English?', 'What is the most difficult part of learning a language?', 'Would you like to learn another language?'] }
  ],
  cueCards: [
    { title: 'Describe a person who has influenced you', points: ['who this person is', 'how you know them', 'what they are like'], last: 'and explain how they have influenced you.', part3: ['What qualities make someone a good role model?', 'Do celebrities have a positive influence on young people?', 'How do parents influence children compared with teachers?', 'Who has more influence today: family or friends?'] },
    { title: 'Describe a place you visited that you particularly liked', points: ['where it was', 'when you went there', 'what you did there'], last: 'and explain why you liked it.', part3: ['Why do people like to travel to other countries?', 'What are the negative effects of tourism?', 'How has travel changed in the last 30 years?', 'Should famous sites limit the number of visitors?'] },
    { title: 'Describe a skill you would like to learn', points: ['what the skill is', 'how you would learn it', 'how long it would take'], last: 'and explain why you want to learn it.', part3: ['What skills are most important for young people today?', 'Is it better to learn from a teacher or online?', 'Do older people find it harder to learn new skills?', 'Will robots replace skilled workers?'] },
    { title: 'Describe a memorable event in your life', points: ['what the event was', 'when and where it happened', 'who was with you'], last: 'and explain why it was memorable.', part3: ['Why do people remember some events better than others?', 'How do people in your country celebrate important life events?', 'Is it important to keep photos of special events?', 'Do people spend too much money on celebrations?'] },
    { title: 'Describe a piece of technology you find useful', points: ['what it is', 'when you got it', 'how you use it'], last: 'and explain why it is useful to you.', part3: ['How has technology changed communication?', 'Are people too dependent on technology?', 'What technology will be important in the future?', 'Should children be allowed to use smartphones?'] },
    { title: 'Describe a book you read recently', points: ['what it was', 'who wrote it', 'what it was about'], last: 'and explain whether you would recommend it.', part3: ['Why do some people prefer films to books?', 'Will printed books disappear?', 'How can parents encourage children to read?', 'What kinds of books are popular in your country?'] },
    { title: 'Describe a time when you helped someone', points: ['who you helped', 'what the situation was', 'how you helped'], last: 'and explain how you felt about it.', part3: ['Why do some people volunteer?', 'Should schools make students do community service?', 'Are people less helpful to strangers than in the past?', 'What can governments do to help people in need?'] },
    { title: 'Describe a goal you hope to achieve in the future', points: ['what the goal is', 'when you set it', 'what you need to do to achieve it'], last: 'and explain why it is important to you.', part3: ['Is it important to set goals?', 'Do young people today have different goals from their parents?', 'Why do some people fail to achieve their goals?', 'Should schools teach goal-setting?'] },
    { title: 'Describe a restaurant you enjoyed', points: ['where it is', 'what type of food it serves', 'who you went with'], last: 'and explain why you enjoyed it.', part3: ['Why do people eat out?', 'Is fast food a problem in your country?', 'How have eating habits changed?', 'Should governments tax unhealthy food?'] },
    { title: 'Describe a time you were late for something', points: ['what you were late for', 'why you were late', 'what happened as a result'], last: 'and explain how you felt.', part3: ['Is punctuality important in your culture?', 'Why are some people always late?', 'How can people manage their time better?', 'Do people have more free time than in the past?'] },
    { title: 'Describe an interesting conversation you had', points: ['who you spoke with', 'when and where it happened', 'what you talked about'], last: 'and explain why it was interesting.', part3: ['Do people talk less face to face nowadays?', 'What makes someone a good listener?', 'How do children learn communication skills?', 'Is online communication as valuable as face-to-face?'] },
    { title: 'Describe a gift you gave to someone', points: ['what the gift was', 'who you gave it to', 'why you chose it'], last: 'and explain how the person reacted.', part3: ['Why do people give gifts?', 'Is it better to give money or a present?', 'Has gift-giving become too commercial?', 'What gifts are popular in your country?'] },
    { title: 'Describe a city you would like to live in', points: ['which city it is', 'how you know about it', 'what it is like'], last: 'and explain why you would like to live there.', part3: ['What makes a city a good place to live?', 'Why do people move from rural areas to cities?', 'What problems do big cities face?', 'How will cities change in the next 50 years?'] },
    { title: 'Describe an advertisement you remember', points: ['what it advertised', 'where you saw it', 'what it showed'], last: 'and explain why you remember it.', part3: ['Do advertisements influence what people buy?', 'Should advertising to children be restricted?', 'How has advertising changed with social media?', 'Are celebrities effective in advertisements?'] },
    { title: 'Describe a teacher who helped you', points: ['who the teacher was', 'what subject they taught', 'how they taught'], last: 'and explain how they helped you.', part3: ['What makes a good teacher?', 'Will online learning replace teachers?', 'Should teachers be paid more?', 'Is it better to study alone or in groups?'] },
    { title: 'Describe a time you made a difficult decision', points: ['what the decision was', 'when you made it', 'what options you had'], last: 'and explain how you felt about the decision afterwards.', part3: ['Do young people make decisions differently from older people?', 'Should parents make important decisions for children?', 'Why do some people find decision-making hard?', 'Are people given too many choices today?'] },
    { title: 'Describe a sport or activity you enjoy', points: ['what it is', 'when you started it', 'how often you do it'], last: 'and explain why you enjoy it.', part3: ['Why are some sports more popular than others?', 'Should professional athletes earn so much money?', 'How can governments encourage people to exercise?', 'Is competition good for children?'] },
    { title: 'Describe a historical place you have visited', points: ['where it is', 'when you visited', 'what you learned there'], last: 'and explain how you felt about it.', part3: ['Why should we protect historical buildings?', 'Is history an important school subject?', 'Should old buildings be replaced with modern ones?', 'How do people learn about history today?'] },
    { title: 'Describe a time you were very busy', points: ['when it was', 'what you had to do', 'how you managed'], last: 'and explain how you felt.', part3: ['Why are people so busy nowadays?', 'Is work-life balance important?', 'Do people work harder now than in the past?', 'What are the effects of stress on health?'] },
    { title: 'Describe a website or app you use often', points: ['what it is', 'how you found it', 'what you use it for'], last: 'and explain why you use it so often.', part3: ['How has the internet changed the way people shop?', 'Is the information online reliable?', 'Should the internet be regulated?', 'What are the risks of using social media?'] },
    { title: 'Describe a family member you are close to', points: ['who they are', 'what they are like', 'what you do together'], last: 'and explain why you are close to them.', part3: ['How has family life changed in your country?', 'Should elderly people live with their children?', 'Are families smaller than in the past? Why?', 'What role do grandparents play?'] },
    { title: 'Describe a time you learned something new', points: ['what you learned', 'when and where you learned it', 'who helped you'], last: 'and explain how it has been useful.', part3: ['Is it better to learn by doing or by reading?', 'What should be taught at school but isn\'t?', 'Why is lifelong learning important?', 'How do adults learn differently from children?'] },
    { title: 'Describe an environmental problem in your area', points: ['what the problem is', 'what causes it', 'how it affects people'], last: 'and explain what could be done to solve it.', part3: ['Who is responsible for protecting the environment?', 'Are individuals or governments more important?', 'Why do some people not care about the environment?', 'Will technology solve climate change?'] },
    { title: 'Describe a journey you remember well', points: ['where you went', 'how you travelled', 'who you were with'], last: 'and explain why you remember it.', part3: ['What are the advantages of different types of transport?', 'Will people travel less in the future?', 'Should air travel be more expensive?', 'How does travel broaden the mind?'] },
    { title: 'Describe something you own that is important to you', points: ['what it is', 'how you got it', 'how long you have had it'], last: 'and explain why it is important to you.', part3: ['Why do people keep old possessions?', 'Do people buy too many things?', 'Is it important for children to own toys?', 'What possessions show social status in your country?'] },
    { title: 'Describe a festival that is important in your country', points: ['what it is', 'when it happens', 'what people do'], last: 'and explain why it is important.', part3: ['Are traditional festivals losing importance?', 'Why do people enjoy festivals?', 'Should festivals be public holidays?', 'How do festivals help tourism?'] },
    { title: 'Describe a time when you had to wait for something', points: ['what you waited for', 'how long you waited', 'what you did while waiting'], last: 'and explain how you felt.', part3: ['Are people less patient than in the past?', 'Is patience an important quality?', 'In which situations do people have to wait in your country?', 'How has technology changed waiting?'] },
    { title: 'Describe a hobby you had as a child', points: ['what it was', 'when you started', 'who you did it with'], last: 'and explain whether you still do it today.', part3: ['How are children\'s hobbies different from in the past?', 'Should parents choose hobbies for children?', 'Can hobbies become careers?', 'Why do adults stop having hobbies?'] }
  ],
  phrases: [
    { h: 'Buying time (instead of silence)', items: ['That\'s an interesting question...', 'Let me think about that for a moment...', 'I\'ve never really thought about that, but...', 'Well, it\'s hard to say exactly, but...', 'How can I put this...'] },
    { h: 'Giving opinions', items: ['Personally, I think / I\'d say...', 'From my point of view...', 'As far as I\'m concerned...', 'I\'m convinced that...', 'I tend to think that...', 'If you ask me...'] },
    { h: 'Agreeing & disagreeing (Part 3)', items: ['I completely agree – ...', 'That\'s true to some extent, but...', 'I see what you mean, however...', 'I\'m not sure I agree. I\'d argue that...', 'It depends on...'] },
    { h: 'Giving examples', items: ['For instance, / For example,', 'Take ... for example.', 'A good example of this is...', 'Such as...', 'In my case, ...'] },
    { h: 'Adding & contrasting', items: ['On top of that, ...', 'What\'s more, ...', 'Not only that, but...', 'Having said that, ...', 'On the other hand, ...', 'Mind you, ...'] },
    { h: 'Speculating / the future', items: ['I imagine that...', 'It\'s quite likely that...', 'I doubt that...', 'There\'s a good chance that...', 'In the long run, ...', 'Chances are...'] },
    { h: 'Comparing past and present', items: ['Back in the day, ... whereas these days...', 'When I was younger, I used to...', 'Compared to 20 years ago, ...', 'Things have changed a lot since...'] },
    { h: 'Part 2 signposting', items: ['I\'d like to talk about...', 'Let me start by saying...', 'As for [bullet point], ...', 'Moving on to why...', 'The main reason why... is that...', 'All in all, ...'] },
    { h: 'Paraphrasing (when you forget a word)', items: ['It\'s a kind of... / It\'s a sort of...', 'I can\'t remember the exact word, but it\'s the thing you use to...', 'It\'s similar to... but...', 'What I mean is...'] },
    { h: 'Clarification', items: ['Sorry, could you repeat the question, please?', 'Do you mean... ?', 'Sorry, I\'m not sure I understand. Could you rephrase that?'] }
  ],
  idioms: [
    ['a piece of cake', 'very easy', 'The exam was a piece of cake compared with last year\'s.'],
    ['once in a blue moon', 'very rarely', 'I only go to the cinema once in a blue moon.'],
    ['hit the books', 'study hard', 'I need to hit the books before my finals.'],
    ['under the weather', 'slightly ill', 'I was feeling a bit under the weather that day.'],
    ['over the moon', 'extremely happy', 'I was over the moon when I got the job offer.'],
    ['break the bank', 'cost too much', 'A weekend trip doesn\'t have to break the bank.'],
    ['a breath of fresh air', 'something new and refreshing', 'Her teaching style was a breath of fresh air.'],
    ['get the hang of', 'learn how to do something', 'It took me a while to get the hang of driving.'],
    ['on the same page', 'in agreement', 'My parents and I are usually on the same page.'],
    ['burn the midnight oil', 'work late at night', 'I burned the midnight oil to finish my project.'],
    ['a couch potato', 'a lazy person who watches a lot of TV', 'At weekends I turn into a bit of a couch potato.'],
    ['in the long run', 'eventually, over time', 'Learning a language pays off in the long run.'],
    ['keep an eye on', 'watch carefully', 'I try to keep an eye on how much I spend.'],
    ['out of the blue', 'unexpectedly', 'An old friend called me out of the blue.'],
    ['my cup of tea', 'something I like', 'Horror films aren\'t really my cup of tea.'],
    ['the best of both worlds', 'the benefits of two different things', 'Living in a small town near a city gives you the best of both worlds.'],
    ['learn the ropes', 'learn how to do a job', 'It took a month to learn the ropes at my new job.'],
    ['pay off', 'be successful after effort', 'All that practice finally paid off.'],
    ['a no-brainer', 'an obvious decision', 'Choosing the train over the car was a no-brainer.'],
    ['catch up with', 'meet and talk after a long time', 'I love catching up with old school friends.']
  ]
};

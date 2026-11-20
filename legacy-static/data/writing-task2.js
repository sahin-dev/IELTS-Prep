window.IELTS = window.IELTS || {};
IELTS.writingTask2 = {
  overview: `
<h3>Step 1: Analyse the question (2 minutes)</h3>
<p>Every Task 2 question has three parts. Underline each one:</p>
<div class="table-wrap"><table class="data-table plain">
<tr><th>Part</th><th>Example: "Some people believe that unpaid community service should be compulsory for high school students. To what extent do you agree or disagree?"</th></tr>
<tr><td><b>Topic</b></td><td>community service / high school students</td></tr>
<tr><td><b>Focus (the specific claim)</b></td><td>it should be <u>unpaid</u> and <u>compulsory</u></td></tr>
<tr><td><b>Instruction</b></td><td>To what extent do you agree or disagree? → opinion essay, give a clear position</td></tr>
</table></div>
<div class="callout warn"><strong>The #1 reason for low Task Response scores</strong>Writing about the general topic (community service is good) instead of the specific focus (should it be <i>compulsory</i>?).</div>
<h3>Step 2: Plan (5 minutes)</h3>
<ul class="steps">
<li>Decide your position (for opinion questions) – a clear, consistent view.</li>
<li>Brainstorm 2–3 main ideas, then choose the <b>two strongest</b> that you can explain and support.</li>
<li>For each idea, note an explanation and a specific example.</li>
<li>Map your paragraphs before you write a single sentence.</li>
</ul>
<h3>Step 3: Write using the PEEL paragraph</h3>
<ul class="structure">
<li><b>P – Point (topic sentence)</b>State the main idea of the paragraph clearly. <i>"The main argument for compulsory service is that it develops a sense of civic responsibility."</i></li>
<li><b>E – Explain</b>Develop the idea: why? how? what is the consequence? <i>"When teenagers work in hospitals or shelters, they see the challenges faced by others..."</i></li>
<li><b>E – Example</b>A specific, realistic example (no need for real statistics). <i>"For instance, a student volunteering at a food bank may..."</i></li>
<li><b>L – Link</b>Connect back to the question. <i>"Therefore, making such service mandatory would benefit society as a whole."</i></li>
</ul>
<h3>Introduction formula (2 sentences, ~45 words)</h3>
<p><b>Sentence 1:</b> Paraphrase the question statement. <b>Sentence 2:</b> Thesis – your answer/what the essay will do.</p>
<div class="callout"><i>"It is sometimes argued that secondary school students should be required to do voluntary work in their local community. While I accept that such a policy has certain drawbacks, I strongly believe that its benefits for both young people and society are far greater."</i></div>
<h3>Conclusion formula (1–2 sentences)</h3>
<p>Begin with <i>In conclusion,</i> / <i>To conclude,</i> then restate your position and summarise the main reasons. <b>Never introduce a new idea</b> in the conclusion.</p>
<h3>Band 7+ checklist</h3>
<div class="grid-2">
<div class="card"><h4>Task Response</h4><ul class="checklist"><li>All parts of the question answered</li><li>Clear position throughout</li><li>Ideas extended and supported</li><li>Relevant examples</li></ul></div>
<div class="card"><h4>Coherence & Cohesion</h4><ul class="checklist"><li>One central idea per paragraph</li><li>Clear topic sentences</li><li>Range of linkers – not mechanical</li><li>Referencing: this, such, these measures</li></ul></div>
<div class="card"><h4>Lexical Resource</h4><ul class="checklist"><li>Topic-specific vocabulary & collocations</li><li>Less common words used precisely</li><li>Paraphrase – avoid repeating question words</li><li>Accurate spelling & word forms</li></ul></div>
<div class="card"><h4>Grammar</h4><ul class="checklist"><li>Mix of simple, compound and complex sentences</li><li>Relative clauses, conditionals, passives</li><li>Majority of sentences error-free</li><li>Correct punctuation (commas with clauses)</li></ul></div>
</div>
<h3>Common mistakes</h3>
<ul class="xlist">
<li>Memorised introductions that don't fit the question ("In this modern era, it is a debatable topic...").</li>
<li>Listing many ideas without developing any of them.</li>
<li>Informal language: <i>kids, lots of, a bit, gonna, nowadays everybody</i>.</li>
<li>Contractions (<i>don't, can't</i>) – write in full.</li>
<li>Overusing the same linkers (<i>Firstly, Secondly, Moreover, Furthermore</i>) at the start of every sentence.</li>
<li>Writing under 250 words – you lose marks in Task Response.</li>
</ul>`,
  types: [
    {
      id: 'opinion', name: 'Opinion (Agree / Disagree)',
      recognise: ['To what extent do you agree or disagree?', 'Do you agree or disagree?', 'What is your opinion?', 'Is this a good idea?'],
      structure: [['Introduction', 'Paraphrase + clear position (agree / disagree / partly agree).'], ['Body 1', 'First reason supporting your position (PEEL).'], ['Body 2', 'Second reason supporting your position — OR, for partial agreement, the side you agree with less.'], ['Conclusion', 'Restate your position and the two reasons.']],
      template: `<p><b>Intro:</b> It is often argued that [paraphrase]. I [completely agree / disagree / partly agree] with this view because [reason 1] and [reason 2].</p>
<p><b>Body 1:</b> The main reason why I believe [position] is that... This is because... For example,... Consequently,...</p>
<p><b>Body 2:</b> Another important consideration is that... In other words,... A clear illustration of this is... Therefore,...</p>
<p><b>Conclusion:</b> In conclusion, I firmly believe that... since... and...</p>`,
      sample: {
        prompt: 'Some people believe that university education should be free for all students, paid for by the government. To what extent do you agree or disagree?',
        answer: `<p>In many countries, there is an ongoing debate about whether higher education should be funded entirely by the state. Although this policy would place a considerable burden on public finances, I largely agree that university tuition should be free, as it promotes equality of opportunity and benefits the economy as a whole.</p>
<p>The most compelling argument for free university education is that it allows talented young people to study regardless of their family background. When students are required to pay high fees, those from low-income households are often discouraged from applying, even if they have outstanding academic ability. By removing this financial barrier, governments ensure that university places are allocated on the basis of merit rather than wealth. Germany, for example, abolished tuition fees partly in order to widen access to higher education, and this has made university a realistic option for many students who would otherwise have entered the workforce immediately.</p>
<p>Furthermore, society as a whole gains from having a highly educated population. Graduates tend to earn higher salaries and therefore pay more in taxes over their lifetimes, which means that the initial public investment is, to a large extent, recovered. Moreover, an economy that wishes to compete in fields such as medicine, engineering and technology depends on a steady supply of skilled professionals. If financial obstacles reduce the number of people entering these professions, the whole country suffers.</p>
<p>Admittedly, funding free tuition requires significant government spending, and some argue that this money could be used for schools or healthcare. However, this concern could be addressed by limiting free places to subjects or numbers that match the country's needs, rather than abandoning the principle altogether.</p>
<p>In conclusion, I believe that the advantages of state-funded university education, namely greater fairness and long-term economic growth, clearly justify its cost.</p>
<p class="small muted">(≈ 310 words)</p>`
      },
      prompts: [
        'Some people think that the best way to reduce crime is to give longer prison sentences. To what extent do you agree or disagree?',
        'Children should be taught how to manage money at school. To what extent do you agree or disagree?',
        'Governments should spend money on railways rather than roads. To what extent do you agree or disagree?',
        'Advertising aimed at children should be banned. To what extent do you agree or disagree?',
        'It is more important for a country to invest in public transport than in space exploration. Do you agree or disagree?',
        'Social media platforms should be held responsible for the content their users post. To what extent do you agree or disagree?',
        'Older people should be encouraged to continue working after retirement age. To what extent do you agree or disagree?'
      ]
    },
    {
      id: 'discussion', name: 'Discussion (Discuss Both Views)',
      recognise: ['Discuss both these views and give your own opinion.', 'Discuss both sides of this argument.'],
      structure: [['Introduction', 'Paraphrase both views + state your opinion (or say you will give it).'], ['Body 1', 'View A – explain why some people hold it (even if you disagree).'], ['Body 2', 'View B – explain why others hold it; if this is your view, say so clearly.'], ['Conclusion', 'Summarise both sides briefly and restate your opinion.']],
      template: `<p><b>Intro:</b> While some people believe that [view A], others argue that [view B]. Although both views have merit, I believe that...</p>
<p><b>Body 1:</b> On the one hand, those who support [view A] argue that... This is because... For instance,...</p>
<p><b>Body 2:</b> On the other hand, there are strong reasons to believe that [view B]. Firstly,... In my view, this argument is more convincing because...</p>
<p><b>Conclusion:</b> In conclusion, although [view A] has some validity, I am convinced that [view B] because...</p>`,
      sample: {
        prompt: 'Some people think that children should begin formal education at a very early age, while others believe they should not start school until they are at least seven years old. Discuss both views and give your own opinion.',
        answer: `<p>The age at which children should start school is a matter of considerable debate. While some people argue that early formal education gives young children an academic advantage, others maintain that it is better to delay schooling until around the age of seven. In my view, a later start, combined with high-quality play-based learning, is the more beneficial approach.</p>
<p>On the one hand, supporters of early schooling believe that young children learn extremely quickly and should therefore be taught basic literacy and numeracy as soon as possible. They point out that children who can read by the age of five may develop confidence and enjoy a head start over their classmates. In addition, early schooling is often a practical necessity for working parents, who rely on schools to provide a safe and structured environment for their children during the day.</p>
<p>On the other hand, those who favour a later start argue that young children learn most effectively through play, rather than through formal lessons. Activities such as building, drawing and role-playing develop language, creativity and social skills, which provide a solid foundation for later academic study. Finland, for instance, does not begin formal schooling until the age of seven, yet its students regularly perform well in international assessments. This suggests that an early start is not necessary for later success, and may even cause unnecessary stress for children who are not yet ready to sit still and concentrate for long periods.</p>
<p>In conclusion, although starting school early may offer some short-term benefits and support working families, I believe that children gain more from a longer period of learning through play. Governments should therefore invest in quality pre-school care rather than pushing formal education onto very young children.</p>
<p class="small muted">(≈ 300 words)</p>`
      },
      prompts: [
        'Some people believe that it is better to live in a big city, while others prefer the countryside. Discuss both views and give your own opinion.',
        'Some people think that sports stars deserve their high salaries, while others think they are paid too much. Discuss both views and give your own opinion.',
        'Some people say that history is one of the most important school subjects. Others think that subjects like science and technology are more important. Discuss both views and give your opinion.',
        'Some believe that tourism brings mainly benefits to local communities, while others think it causes more harm than good. Discuss both views and give your own opinion.',
        'Some people think that zoos are cruel and should be closed, while others believe they play an important role in protecting wildlife. Discuss both views and give your opinion.',
        'Some people think that governments should focus on reducing environmental pollution, while others think they should focus on the economy. Discuss both views and give your own opinion.'
      ]
    },
    {
      id: 'adv-disadv', name: 'Advantages & Disadvantages',
      recognise: ['What are the advantages and disadvantages?', 'Do the advantages outweigh the disadvantages?', 'Is this a positive or negative development? (see separate type)'],
      structure: [['Introduction', 'Paraphrase + (if "outweigh") state which side is stronger.'], ['Body 1', 'Advantages (1–2, developed).'], ['Body 2', 'Disadvantages (1–2, developed).'], ['Conclusion', 'Summarise; for "outweigh", restate which side is greater and why.']],
      template: `<p><b>Intro:</b> [Paraphrase trend]. Although this development brings certain benefits, I believe that these are outweighed by the drawbacks / the advantages are more significant.</p>
<p><b>Body 1:</b> The main advantage of... is that... Another benefit is... For example,...</p>
<p><b>Body 2:</b> However, there are also a number of drawbacks. The most serious is... This can lead to... </p>
<p><b>Conclusion:</b> In conclusion, while... has some disadvantages, such as..., I believe that its advantages, in particular..., are greater.</p>`,
      sample: {
        prompt: 'Many people now work from home using modern technology. Do the advantages of this development outweigh the disadvantages?',
        answer: `<p>Thanks to fast internet connections and video-conferencing software, a growing number of employees now carry out their jobs from home. Although remote working has certain drawbacks, I believe that its advantages for both workers and employers are more significant.</p>
<p>The most obvious benefit of working from home is the elimination of the daily commute. In large cities, employees may spend two hours or more each day travelling to and from the office, which is both tiring and expensive. Without this journey, workers gain valuable time that they can devote to their families, exercise or rest, which in turn tends to improve their wellbeing and productivity. Employers also benefit, since they can reduce the cost of renting large office spaces and recruit talented staff who live far away.</p>
<p>Nevertheless, remote working is not without its problems. Many people find it difficult to separate their professional and personal lives when their home is also their workplace, and they may end up working longer hours as a result. Furthermore, working alone can lead to feelings of isolation, particularly for young employees who would normally learn a great deal from interacting with more experienced colleagues in an office environment.</p>
<p>However, these disadvantages can largely be overcome. Companies can set clear rules about working hours and offer hybrid arrangements, allowing staff to spend one or two days a week in the office for meetings and training. By contrast, the benefits of reduced commuting and greater flexibility are difficult to achieve in any other way.</p>
<p>In conclusion, although working from home can blur the boundaries between work and private life and cause loneliness, I believe that the advantages, particularly the time and money saved, clearly outweigh these drawbacks.</p>
<p class="small muted">(≈ 300 words)</p>`
      },
      prompts: [
        'More and more students are choosing to study abroad. Do the advantages of this outweigh the disadvantages?',
        'In many countries, people are living longer. What are the advantages and disadvantages of this?',
        'Some companies now use artificial intelligence to select job applicants. Do the advantages outweigh the disadvantages?',
        'An increasing number of people are using cashless payment methods. Do the advantages of this development outweigh the disadvantages?',
        'Many cities are building skyscrapers to house their growing populations. What are the advantages and disadvantages?',
        'Online learning is replacing traditional classroom teaching in some places. Do the advantages outweigh the disadvantages?'
      ]
    },
    {
      id: 'problem-solution', name: 'Problem / Cause & Solution',
      recognise: ['What are the causes of this problem? What solutions can you suggest?', 'What problems does this cause? How can they be solved?', 'What measures could be taken to tackle this?'],
      structure: [['Introduction', 'Paraphrase the issue + outline: this essay will examine the causes and suggest solutions.'], ['Body 1', 'Causes (or problems) – 2 developed.'], ['Body 2', 'Solutions – ideally linked to each cause.'], ['Conclusion', 'Summarise the main causes and solutions.']],
      template: `<p><b>Intro:</b> [Paraphrase problem]. This essay will examine the main causes of this issue and suggest some effective measures to address it.</p>
<p><b>Body 1:</b> There are several reasons for this problem. The primary cause is... This means that... A further factor is...</p>
<p><b>Body 2:</b> Fortunately, a number of steps could be taken to tackle this issue. Firstly, governments should... This would... In addition,...</p>
<p><b>Conclusion:</b> In conclusion, [problem] is mainly caused by... and... However, if... and..., the situation could be significantly improved.</p>`,
      sample: {
        prompt: 'In many cities around the world, traffic congestion is becoming a serious problem. What are the causes of this, and what measures could be taken to reduce it?',
        answer: `<p>Traffic jams have become a daily reality in cities across the world, wasting time, damaging the environment and harming public health. This essay will discuss the main reasons for this problem and propose some practical solutions.</p>
<p>The primary cause of congestion is the rapid increase in the number of private cars. As incomes have risen in many countries, car ownership has become affordable for millions of families, and for many people a car is also a symbol of status. Since road networks cannot expand at the same rate, streets quickly become overloaded, especially during rush hour. A second factor is inadequate public transport. Where buses are infrequent, crowded or unreliable, commuters have little choice but to drive, even for short journeys.</p>
<p>There are several measures that could help to tackle this problem. Firstly, governments should invest heavily in fast, affordable and reliable public transport, such as metro systems and dedicated bus lanes. If travelling by train is quicker than driving, many commuters will willingly leave their cars at home. Secondly, authorities could discourage car use in city centres by introducing congestion charges. When London introduced such a scheme, traffic in the central zone fell noticeably, and the revenue raised was used to improve bus services. Finally, employers can play a role by allowing flexible working hours or remote working, which would spread journeys more evenly throughout the day.</p>
<p>In conclusion, urban congestion is largely the result of rising car ownership and poor public transport. However, a combination of better public transport, financial disincentives for drivers and more flexible working patterns could significantly reduce traffic and make cities more pleasant places to live.</p>
<p class="small muted">(≈ 290 words)</p>`
      },
      prompts: [
        'Obesity rates among children are increasing in many countries. What are the causes, and what can be done to solve this problem?',
        'Many young people today are unable to buy their own homes. Why is this, and what can be done to help them?',
        'In some countries, fewer people are reading books. What are the reasons for this, and how can reading be encouraged?',
        'The amount of plastic waste in the oceans is increasing. What problems does this cause, and what solutions can you suggest?',
        'Many employees experience high levels of stress at work. What are the causes, and what measures can employers take?',
        'In many rural areas, young people are moving to cities, leaving older populations behind. What problems does this cause, and how can they be solved?'
      ]
    },
    {
      id: 'two-part', name: 'Two-part / Direct Questions',
      recognise: ['Why is this the case? What can be done about it?', 'Why do people...? Is this a good thing?', 'Two separate questions in one prompt.'],
      structure: [['Introduction', 'Paraphrase + briefly answer BOTH questions.'], ['Body 1', 'Answer question 1 fully.'], ['Body 2', 'Answer question 2 fully.'], ['Conclusion', 'Restate both answers.']],
      template: `<p><b>Intro:</b> [Paraphrase]. This is mainly due to [answer 1], and I believe that [answer 2].</p>
<p><b>Body 1:</b> There are several reasons why... The most significant is... In addition,...</p>
<p><b>Body 2:</b> [Answer question 2]. On the positive side,... However,...</p>
<p><b>Conclusion:</b> In conclusion,... because... ; as a result, I believe...</p>`,
      sample: {
        prompt: 'Nowadays, more and more people choose to live alone. Why is this happening? What effects might it have on society?',
        answer: `<p>In many parts of the world, the number of single-person households has risen dramatically in recent decades. This trend is mainly driven by changing social attitudes and greater financial independence, and it is likely to have both positive and negative consequences for society.</p>
<p>There are several reasons why people increasingly live on their own. Firstly, attitudes towards marriage have changed. Many young adults now choose to focus on their education and careers and marry later in life, if at all, and living alone is no longer seen as unusual. Secondly, rising incomes, particularly among women, mean that more people can afford to rent or buy a home by themselves. A third factor is the ageing population: as life expectancy increases, many elderly people, especially those who have lost a partner, spend their later years living alone.</p>
<p>This development could affect society in a number of ways. On the positive side, people who live alone often have more freedom to pursue their interests, and they tend to be active consumers of services such as restaurants, gyms and cultural events, which can stimulate the local economy. However, there are also serious concerns. Single-person households use more land, energy and resources per person, which increases pressure on housing supply and the environment. Furthermore, loneliness has become a major public health issue, particularly among elderly people with limited family support, and this may place additional demands on health and social care services.</p>
<p>In conclusion, the growth in solo living is largely the result of later marriage, economic independence and an ageing population. While it offers individuals greater freedom, governments will need to address its impact on housing and on the wellbeing of isolated people.</p>
<p class="small muted">(≈ 300 words)</p>`
      },
      prompts: [
        'Many people today prefer to shop online. Why is this? What effects does it have on local businesses?',
        'Some people choose to have their children educated at home. Why might they do this? Is it a positive or negative trend?',
        'People in many countries are spending more time on their phones than ever before. Why is this? Is this a positive or negative development?',
        'In many workplaces, employees change jobs more frequently than in the past. Why is this happening? What are the effects on employers?',
        'Many people want to become famous. Why do people want to be famous? What are the problems associated with fame?',
        'Fewer people are choosing to study science subjects at university. Why is this? What can be done to change this situation?'
      ]
    },
    {
      id: 'positive-negative', name: 'Positive or Negative Development',
      recognise: ['Is this a positive or negative development?', 'Is this a positive or negative trend?'],
      structure: [['Introduction', 'Paraphrase + state whether it is mainly positive or negative.'], ['Body 1', 'Main reason(s) for your view.'], ['Body 2', 'Acknowledge the other side briefly and explain why your view is stronger – or a second reason.'], ['Conclusion', 'Restate your judgment.']],
      template: `<p><b>Intro:</b> [Paraphrase trend]. In my opinion, this is a largely positive/negative development because...</p>
<p><b>Body 1:</b> The main reason why I consider this trend positive/negative is that...</p>
<p><b>Body 2:</b> It is true that... Nevertheless,...</p>
<p><b>Conclusion:</b> Overall, I believe that this development is... since...</p>`,
      sample: {
        prompt: 'In many countries, people are increasingly buying products online rather than in shops. Is this a positive or negative development?',
        answer: `<p>Over the past two decades, online shopping has grown from a novelty into an everyday habit for millions of consumers, while many traditional shops have closed. Although this shift brings undeniable convenience, I believe that it is, on balance, a negative development for communities.</p>
<p>It is true that online shopping offers clear benefits to individuals. Consumers can compare prices instantly, choose from a far wider range of products than any local shop could stock, and have goods delivered to their door. For people with limited mobility or those living in remote areas, this can be particularly valuable.</p>
<p>However, the wider consequences of this trend are more worrying. Firstly, the decline of physical shops has led to the loss of many jobs and has left high streets in many towns full of empty buildings. Town centres have traditionally been places where people meet and socialise, and when local shops disappear, communities lose an important part of their social life. Secondly, the environmental cost of online shopping is often overlooked. Individual deliveries, excessive packaging and the high rate of returned items all add to traffic, carbon emissions and waste. A shopper who buys three sizes of the same pair of shoes and returns two of them, for example, generates several unnecessary journeys.</p>
<p>Furthermore, the dominance of a small number of very large online retailers reduces competition, which may eventually lead to higher prices and fewer choices for consumers, undermining the very advantages that made online shopping attractive in the first place.</p>
<p>In conclusion, while buying goods online is convenient for individuals, I consider it a largely negative trend because of its impact on local employment, community life and the environment.</p>
<p class="small muted">(≈ 300 words)</p>`
      },
      prompts: [
        'More people are choosing to work as freelancers rather than for a single company. Is this a positive or negative development?',
        'In many countries, the age at which people have their first child is rising. Is this a positive or negative trend?',
        'Many museums and historical sites are now visited mainly by tourists rather than local people. Is this a positive or negative development?',
        'An increasing number of people are getting their news from social media. Is this a positive or negative development?',
        'English is becoming the dominant language of international business. Is this a positive or negative development?'
      ]
    }
  ]
};

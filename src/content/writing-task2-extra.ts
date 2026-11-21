/* Writing Task 2: additional essay types (cause and effect; mixed/combined questions). Chapters: book/writing-t2-extra.ts */
import type { EssayType } from '@/lib/types';

export const essayTypesExtra: EssayType[] = [
  {
    id: 'cause-effect', name: 'Cause & Effect',
    recognise: ['What are the causes of this? What effects does it have?', 'Why is this happening? What are the effects on individuals and society?', 'What are the reasons for this trend, and what are its consequences?'],
    structure: [
      ['Introduction', 'Paraphrase the situation; state that the essay will explain the main causes and effects (with a brief preview).'],
      ['Body 1: causes', 'Two causes, each explained (why it leads to the situation) and supported with an example.'],
      ['Body 2: effects', 'Two effects, each explained (how and on whom) and supported with an example or consequence.'],
      ['Conclusion', 'Summarise the main causes and effects; optionally a brief final comment.']
    ],
    template: `<p><b>Introduction:</b> In recent years, [situation in your own words]. This essay will argue that this is mainly the result of [cause 1] and [cause 2], and that it has [significant / both positive and negative] effects on [who].</p>
<p><b>Body 1:</b> The main reason for this is [cause 1]. [Explain the mechanism]. For example, … A further cause is [cause 2], [explanation + example].</p>
<p><b>Body 2:</b> This trend has [important] consequences. Firstly, [effect 1], [explanation + example]. In addition, [effect 2], which means that…</p>
<p><b>Conclusion:</b> In conclusion, [situation] is caused largely by [cause 1] and [cause 2], and it [effect summary].</p>`,
    sample: {
      prompt: 'In many countries, an increasing number of young adults are living with their parents rather than in their own homes. Why is this happening? What effects does this have on young people and their families?',
      answer: `<p>In many parts of the world, a growing proportion of people in their twenties and even thirties now live in their parents' homes. In my view, this trend is driven mainly by housing costs and by changes in the job market, and while it brings some financial and emotional benefits, it can also delay independence and place strain on family relationships.</p>
<p>The most important cause is the rising cost of housing. In many cities, rents and property prices have increased far faster than wages, so a young graduate on an entry-level salary may need to spend more than half of their income on a small flat. Living at home allows them to save for a deposit instead. A second cause is the insecurity of modern employment. Short-term contracts and unpaid internships are now common, and without a stable income, signing a twelve-month tenancy is a risk that many young people prefer not to take.</p>
<p>These arrangements have mixed effects. On the positive side, young adults can save money and avoid debt, and families often become closer; parents may receive practical help in return, particularly as they grow older. On the other hand, living at home can delay important steps towards independence, such as learning to manage a household budget or forming long-term relationships. Furthermore, sharing a home as adults can create tension over privacy, household rules and contributions to bills, especially when the arrangement lasts longer than anyone expected.</p>
<p>In conclusion, young adults are staying in the family home largely because housing is unaffordable and employment is insecure. Although this can help them financially and strengthen family ties, it may also slow their development as independent adults and lead to friction at home.</p>`
    },
    prompts: [
      'Obesity rates among children are rising in many countries. What are the causes of this problem? What effects does it have on individuals and society?',
      'More and more people are choosing to work from home rather than in an office. Why is this happening? What effects does it have on workers and companies?',
      'In some countries, the average age at which people have their first child is increasing. What are the reasons for this, and what are the effects on society?'
    ]
  },
  {
    id: 'mixed', name: 'Mixed & Combined Questions',
    recognise: ['Why is this the case? What can be done to solve it?', 'Some people think X. To what extent do you agree? What could be done to…?', 'What are the advantages of X? Do you think they outweigh the disadvantages?'],
    structure: [
      ['Introduction', 'Paraphrase the topic; give a brief answer to every part of the question (your thesis must cover each instruction).'],
      ['Body 1', 'The first part of the question, fully developed (e.g. causes, or your opinion and reasons).'],
      ['Body 2', 'The second part, fully developed (e.g. solutions, or the comparison of advantages and disadvantages).'],
      ['Conclusion', 'Restate the answer to every part, in the same order.']
    ],
    template: `<p><b>Step 1 – split the question:</b> Underline every question word and instruction. Write each one as a separate line: (1) Why…? (2) What can be done…?</p>
<p><b>Introduction:</b> [Paraphrase the topic]. This is largely due to [cause], and I believe that [solution / answer to part 2].</p>
<p><b>Body 1 (part 1):</b> [Topic sentence answering part 1] + explanation + example.</p>
<p><b>Body 2 (part 2):</b> [Topic sentence answering part 2] + explanation + example.</p>
<p><b>Conclusion:</b> [Answer part 1 in one sentence]. [Answer part 2 in one sentence].</p>`,
    sample: {
      prompt: 'In many cities, fewer people are buying goods from small local shops and more are shopping in large supermarkets or online. Why is this happening? Is this a positive or negative development?',
      answer: `<p>In cities around the world, independent local shops are losing customers to supermarket chains and online retailers. I would argue that this shift is driven mainly by price and convenience, and that, although it benefits consumers in the short term, it is on balance a negative development for local communities.</p>
<p>The first reason for the change is cost. Large retailers buy in enormous quantities and can therefore sell most products more cheaply than a small shop, which matters to households struggling with rising living costs. The second reason is convenience. A supermarket offers almost everything under one roof, often with long opening hours, while online stores allow people to order from their phones and have goods delivered to the door. For busy working families, saving an hour a week can be more important than where they shop.</p>
<p>Nevertheless, I believe the overall effect is negative. Small shops do more than sell products: they give a neighbourhood its character and provide places where people meet and talk, which helps to reduce isolation, particularly among elderly residents. When they close, high streets can become empty, and the money spent in a community increasingly flows to large companies based elsewhere rather than to local owners and employees. There is also an environmental cost, as online shopping generates a large number of individual deliveries and a great deal of packaging. While consumers gain lower prices, these social and environmental losses are harder to reverse.</p>
<p>In conclusion, people are turning away from local shops mainly because large retailers are cheaper and more convenient. However, in my view this is a negative trend, because the decline of local businesses weakens communities and has hidden environmental costs.</p>`
    },
    prompts: [
      'Many young people today do not know how to cook healthy meals. Why is this the case? What can be done to improve the situation?',
      'Some people think that all university students should study whatever they like. Others believe they should only study subjects that will be useful in the future. Discuss both views. What do you think governments should do to influence students\' choices?',
      'Tourism is increasing in many remote areas of the world. What are the advantages of this? Do they outweigh the disadvantages?'
    ]
  }
];

import type { VocabBank } from '@/lib/types';

export const vocabExtraBanks: VocabBank[] = [
  {
    id: 'word-formation', section: 'Grammar & Cohesion', name: 'Word formation & word families', color: 'grammar',
    intro: 'Changing the form of a word (verb → noun → adjective → adverb) is one of the fastest ways to paraphrase. It is tested in Reading/Listening completion tasks, where the answer must fit the grammar of the sentence.',
    groups: [
      {
        h: 'Verb → noun → adjective → adverb', items: [
          ['develop → development → developed/developing', 'grow or change', 'Rapid development / a developing country'],
          ['grow → growth → growing', 'increase in size', 'economic growth / a growing number of'],
          ['decide → decision → decisive → decisively', 'choose', 'make a decision / act decisively'],
          ['succeed → success → successful → successfully', 'achieve an aim', 'The project was successful.'],
          ['compete → competition → competitive → competitively', 'try to win', 'a highly competitive job market'],
          ['produce → production / product → productive → productively', 'make', 'Remote work can increase productivity.'],
          ['economise → economy → economic / economical → economically', 'economy (country) vs economical (cheap to run)', 'economic growth / an economical car'],
          ['benefit → benefit → beneficial', 'help', 'Exercise is beneficial to health.'],
          ['pollute → pollution / pollutant → polluted', 'make dirty', 'heavily polluted rivers'],
          ['respond → response → responsive → responsible / responsibility', 'reply / be accountable', 'Parents have a responsibility to...'],
          ['analyse → analysis → analytical → analytically', 'examine in detail', 'analytical skills'],
          ['vary → variety / variation → various / variable', 'differ', 'a wide variety of / various reasons'],
          ['signify → significance → significant → significantly', 'importance / large amount', 'rose significantly'],
          ['afford → affordability → affordable', 'be able to pay', 'affordable housing'],
          ['rely → reliance / reliability → reliable / reliant', 'depend on', 'reliable public transport']
        ]
      },
      {
        h: 'Negative prefixes', items: [
          ['un-', 'unemployment, unhealthy, unlikely, unacceptable', 'Unemployment fell to 4%.'],
          ['in- / im- / il- / ir-', 'inefficient, impossible, illegal, irresponsible', 'It is irresponsible to...'],
          ['dis-', 'disadvantage, disagree, dishonest', 'The main disadvantage is cost.'],
          ['mis-', 'misunderstand, misuse, misinformation', 'the spread of misinformation'],
          ['under- / over-', 'underestimate, overcrowded, overpopulation', 'overcrowded cities']
        ]
      },
      {
        h: 'Useful suffixes', items: [
          ['-ment / -tion / -ness / -ity (nouns)', 'make nouns', 'improvement, pollution, awareness, equality'],
          ['-ise / -ify / -en (verbs)', 'make verbs', 'modernise, simplify, widen'],
          ['-ful / -less / -ous / -ive / -al (adjectives)', 'make adjectives', 'harmful, homeless, dangerous, effective, environmental'],
          ['-ly (adverbs)', 'make adverbs', 'gradually, dramatically, slightly']
        ]
      }
    ]
  },
  {
    id: 'register', section: 'Writing Task 2', name: 'Formal vs informal (academic register)', color: 'writing',
    intro: 'Task 2 essays and formal letters need an academic register. Swap these informal words for their formal equivalents. In Speaking and informal letters, the informal versions sound natural.',
    groups: [
      {
        h: 'Informal → formal', items: [
          ['a lot of / lots of', 'a great deal of (uncountable), a large number of / numerous (countable)', 'A large number of students work part-time.'],
          ['kids', 'children / young people', 'Children are influenced by advertising.'],
          ['get', 'obtain, receive, become, acquire', 'Students acquire valuable skills.'],
          ['big / huge', 'significant, substantial, considerable', 'a significant impact'],
          ['good / bad', 'beneficial / detrimental, positive / negative', 'detrimental to health'],
          ['things / stuff', 'factors, aspects, issues, items', 'several factors contribute to...'],
          ['really / very', 'extremely, highly, particularly', 'highly effective'],
          ['think', 'believe, consider, argue, maintain', 'Many experts argue that...'],
          ['show', 'demonstrate, indicate, illustrate', 'This demonstrates that...'],
          ['cut down on', 'reduce, decrease', 'reduce energy consumption'],
          ['look into', 'investigate, examine', 'Governments should investigate...'],
          ['go up / go down', 'increase / decrease, rise / fall', 'Crime rates decreased.'],
          ['so', 'therefore, consequently, as a result', 'Consequently, demand fell.'],
          ['but', 'however, nevertheless, although', 'However, there are drawbacks.'],
          ['nowadays everybody', 'many people today, an increasing number of people', 'An increasing number of people work from home.'],
          ['I think that', 'In my view, / I would argue that', 'I would argue that the benefits are greater.'],
          ['etc.', 'such as..., and other...', 'subjects such as maths, science and history'],
          ['don\'t / can\'t / it\'s', 'do not / cannot / it is', 'This cannot be ignored.']
        ]
      }
    ]
  }
];

import type { Chapter } from '@/lib/types';

/* Writing Task 2: chapters for cause–effect essays and mixed/combined questions. Data: content/writing-task2-extra.ts */

export const task2ChaptersExtra: Record<string, Chapter> = {
  /* ===================================================================== CAUSE AND EFFECT */
  'cause-effect': {
    intro: `
<p>A <b>cause and effect essay</b> asks you to explain why something is happening and what results it has: <i>Why are more young adults living with their parents? What effects does this have?</i> It is related to the problem–solution essay, but instead of solutions you must analyse <b>consequences</b> – on individuals, families, businesses, society or the environment.</p>
<p>The difference between Band 6 and Band 7+ here is <b>explanation</b>. A Band 6 essay lists causes (<i>housing is expensive, jobs are insecure</i>); a Band 7 essay explains the mechanism – <i>how</i> the cause produces the situation – and supports it with a concrete example. The same applies to effects. And because both parts of the question must be answered, Task Response is limited if either causes or effects are thin.</p>`,
    facts: [['Question words', 'Why…? What are the causes/reasons…? What are the effects/consequences…?'], ['Parts to answer', 'Two: causes and effects'], ['Typical structure', 'Intro · causes · effects · conclusion'], ['Ideal depth', 'Two causes and two effects, each explained'], ['Key language', 'lead to, result in, stem from, due to, as a consequence'], ['Opinion needed?', 'Only if asked – but a clear analytical position helps']],
    method: [
      { title: 'Split the question and note who is affected', body: '<p>Identify the two questions and any group named (<i>effects on young people and their families</i>). Your effects paragraph must address that group.</p>' },
      { title: 'Brainstorm causes and choose the two strongest', body: '<p>Economic, social, technological, cultural, political causes. Choose two you can explain well, not four you can only mention.</p>' },
      { title: 'Explain each cause as a chain', body: '<p>Cause → mechanism → situation. <i>Rents have risen faster than wages, so a graduate may need half their salary for a flat; living at home lets them save.</i></p>' },
      { title: 'Analyse effects – and consider positive and negative', body: '<p>Effects need not all be negative. A balanced analysis (benefits and drawbacks) shows depth when the question allows it.</p>' },
      { title: 'Write a thesis that previews both parts', body: '<p><i>This trend is driven mainly by X and Y, and while it brings some benefits, it also…</i></p>' },
      { title: 'Conclude by summarising both parts', body: '<p>No new ideas in the conclusion.</p>' }
    ],
    sections: [
      {
        id: 'language', title: 'Cause–effect language',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Cause → effect</th><th>Effect ← cause</th></tr>
<tr><td>X <b>leads to / results in / causes / contributes to</b> Y</td><td>Y <b>results from / stems from / is caused by / is due to</b> X</td></tr>
<tr><td><b>As a result / Consequently / Therefore,</b> …</td><td><b>The main reason for</b> Y <b>is that</b>…</td></tr>
<tr><td>X, <b>which means that</b> …</td><td><b>This is largely because</b> …</td></tr>
</table></div>
<p>Hedge where certainty is not possible: <i>may contribute to, is likely to lead to, is partly due to</i>.</p>`
      },
      {
        id: 'band-impact', title: 'How this essay type is assessed',
        html: `<ul><li><b>Task Response:</b> both causes and effects addressed and developed; ideas explained, not listed; relevant examples.</li><li><b>Coherence and Cohesion:</b> one paragraph per part, clear topic sentences, cause–effect linkers used accurately and naturally.</li><li><b>Lexical Resource:</b> precise cause–effect verbs and topic vocabulary.</li><li><b>GRA:</b> complex sentences that express causal relationships (because-, which-, so…that clauses).</li></ul>`
      }
    ],
    worked: [
      {
        title: 'From a listed cause to an explained cause',
        source: '<div class="prompt-box"><p>Question: <i>Childhood obesity is rising. What are the causes? What are the effects?</i><br>Weak: "One cause is fast food. Fast food is unhealthy."</p></div>',
        walk: [
          { q: 'Explain the mechanism', a: '"One major cause is the availability of cheap, energy-dense fast food. Because it is inexpensive and heavily advertised to children, many families eat it several times a week, and the high levels of sugar and fat it contains make weight gain likely."', steps: ['Cause → why it is chosen (cheap, advertised) → what it does (sugar, fat) → result (weight gain).'] },
          { q: 'Add an example', a: '"In the UK, for instance, …"', steps: ['A concrete, plausible example or statistic you present generally (avoid inventing precise figures as facts; use general examples).'] }
        ],
        lesson: 'Explaining the chain from cause to result is what turns a list into an argument.'
      }
    ],
    dos: ['Answer both causes and effects.', 'Explain each cause and effect as a chain.', 'Address the groups named in the question.', 'Use cause–effect verbs accurately.'],
    donts: ['Don\'t list four causes in one sentence.', 'Don\'t write solutions when they are not asked for.', 'Don\'t use "lead to" with a clause: not "leads to people are unhealthy".', 'Don\'t invent exact statistics as facts.'],
    careful: [{ title: '"Lead to" + noun / -ing', body: '<p><i>lead to</i> is followed by a noun or -ing form.</p>', example: '✗ <i>leads to people become ill</i> → ✓ <i>leads to people <b>becoming</b> ill</i> / <i>leads to <b>illness</b></i>' }],
    faq: [{ q: 'Do I need to give my opinion?', a: '<p>Not unless the question asks. A clear analytical thesis (which causes are most important) is still valuable.</p>' }],
    exercises: {
      id: 'ch-task2-cause-effect', title: 'Chapter exercises: cause and effect essays',
      groups: [
        { kind: 'choice', instructions: 'Choose the best option, <b>A, B or C</b>.', questions: [
          { n: 1, q: 'Which is correct?', opts: ['Stress can lead to people sleep badly.', 'Stress can lead to poor sleep.', 'Stress can lead people sleep badly.'], a: 'B', x: '<i>lead to</i> + noun phrase.' },
          { n: 2, q: 'Which sentence explains rather than lists?', opts: ['Technology is a cause.', 'Because smartphones allow work emails to arrive at any hour, many employees find it hard to switch off, which increases stress.', 'Technology and work and stress.'], a: 'B', x: 'It explains the mechanism.' },
          { n: 3, q: 'The question asks about effects "on families". Your effects paragraph should…', opts: ['ignore families', 'discuss effects on families specifically', 'discuss only the economy'], a: 'B', x: 'Address the group named in the question.' }
        ] },
        { kind: 'gap', instructions: 'Write <b>ONE WORD ONLY</b>.', questions: [
          { n: 4, q: 'Many health problems stem {} poor diet.', a: 'from', x: '<i>stem from</i> + cause.' },
          { n: 5, q: 'Rising rents have resulted {} more young people living at home.', a: 'in', x: '<i>result in</i> + effect.' },
          { n: 6, q: 'This is largely {} to the cost of housing.', a: 'due', x: '<i>due to</i> + noun.' }
        ] }
      ]
    },
    checklist: ['I answered both causes and effects.', 'I explained each point.', 'I used cause–effect language accurately.', 'My conclusion summarises both parts.'],
    summary: ['Cause–effect essays need both parts fully developed.', 'Explain the chain from cause to result.', 'Two well-explained points per part beat four listed ones.']
  },

  /* ===================================================================== MIXED */
  mixed: {
    intro: `
<p>Many Task 2 questions combine two different instructions: <i>Why is this happening? Is it a positive or negative development?</i> · <i>To what extent do you agree? What could be done…?</i> · <i>Discuss both views… What should governments do?</i> These <b>mixed</b> or <b>combined</b> questions are not a separate type in the official test description; they are simply questions with more than one part. But they cause more Task Response problems than any other kind, because candidates recognise the first instruction and answer only that.</p>
<p>The rule is simple: <b>every part of the question must be answered</b>, and your introduction, body paragraphs and conclusion should map onto those parts. The method in this chapter is a routine for splitting any question into its parts and building the essay around them.</p>`,
    facts: [['What it is', 'A question with two (sometimes three) different instructions'], ['Biggest risk', 'Answering only one part'], ['Thesis', 'Must answer every part briefly'], ['Structure', 'One body paragraph (or more) per part'], ['Conclusion', 'Restates the answer to each part'], ['Related chapters', 'Opinion, Discussion, Problem–solution, Two-part questions']],
    method: [
      { title: 'Underline every question and instruction', body: '<p>Count the question marks and instruction verbs (<i>discuss, give your opinion, suggest</i>). Write each as a separate numbered line.</p>' },
      { title: 'Identify the type of each part', body: '<p>Cause? Opinion? Evaluation (positive/negative)? Solution? Each has its own language and logic (see the type chapters).</p>' },
      { title: 'Write a thesis that answers every part', body: '<p>One sentence or two: <i>This shift is driven mainly by price and convenience, and although it benefits consumers, I believe it is a negative development for communities.</i></p>' },
      { title: 'Give each part its own paragraph', body: '<p>Body 1 = part 1; body 2 = part 2. If part 2 is your opinion, make it clear and consistent.</p>' },
      { title: 'Balance the paragraphs', body: '<p>Both parts carry weight. A long first paragraph and a two-line second one leaves part 2 underdeveloped.</p>' },
      { title: 'Check the conclusion against your numbered list', body: '<p>One sentence per part, in the same order.</p>' }
    ],
    sections: [
      {
        id: 'combos', title: 'Common combinations and how to structure them',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Combination</th><th>Body 1</th><th>Body 2</th></tr>
<tr><td>Why? + positive or negative?</td><td>Causes</td><td>Evaluation with a clear position</td></tr>
<tr><td>Why? + what can be done?</td><td>Causes</td><td>Solutions linked to the causes</td></tr>
<tr><td>Agree? + what could be done?</td><td>Your position and reasons</td><td>Recommendations</td></tr>
<tr><td>Advantages? + outweigh disadvantages?</td><td>Advantages (and disadvantages)</td><td>Your judgement: which outweighs, and why</td></tr>
<tr><td>Discuss both views + what should governments do?</td><td>View A / View B (two paragraphs)</td><td>Recommendation paragraph</td></tr>
</table></div>`
      },
      {
        id: 'band-impact', title: 'How mixed questions are assessed',
        html: `<p>The Task Response descriptors distinguish between responses that address all parts of the task and those that address only some. Missing a part, or answering it in a single sentence, is one of the clearest reasons an otherwise well-written essay stays at Band 5–6 for Task Response. Mapping each part to a paragraph makes full coverage visible to the examiner.</p>`
      }
    ],
    worked: [
      {
        title: 'Splitting a three-part question',
        source: '<div class="prompt-box"><p>"Some people think that all university students should study whatever they like. Others believe they should only study subjects that will be useful in the future. Discuss both views. What do you think governments should do to influence students\' choices?"</p></div>',
        walk: [
          { q: 'Parts', a: '(1) view A (2) view B (3) your recommendation for governments', steps: ['"Discuss both views" = two parts; "What do you think governments should do" = a third, opinion-based part.'] },
          { q: 'Plan', a: 'Intro + B1 (view A) + B2 (view B) + B3 (government action) + conclusion', steps: ['Four or five paragraphs in about 280–320 words: keep each body paragraph focused.'] },
          { q: 'Thesis', a: '"…while there are strong arguments on both sides, I believe governments should encourage, rather than force, students towards subjects with skill shortages, for example through targeted scholarships."', steps: ['Answers part 3 and signals the balance of parts 1–2.'] }
        ],
        lesson: 'Number the parts, give each a paragraph, and check your conclusion against the list.'
      }
    ],
    dos: ['Number every part of the question before planning.', 'Answer every part in the thesis.', 'Give each part a developed paragraph.', 'Check the conclusion covers every part.'],
    donts: ['Don\'t answer only the first instruction.', 'Don\'t leave the second part to the conclusion.', 'Don\'t change your position between paragraphs.'],
    careful: [{ title: 'Hidden opinion questions', body: '<p><i>Is this a positive or negative development?</i> and <i>Do the advantages outweigh…?</i> require your judgement – a description of both sides without a verdict does not answer them.</p>' }],
    faq: [{ q: 'Can I write five paragraphs?', a: '<p>Yes, when a question has three parts. Keep each body paragraph focused and watch your time.</p>' }],
    exercises: {
      id: 'ch-task2-mixed', title: 'Chapter exercises: mixed questions',
      groups: [
        { kind: 'choice', instructions: 'Choose the best option, <b>A, B or C</b>.', questions: [
          { n: 1, q: '"Why do people move to cities? Is this a positive or negative development?" How many parts?', opts: ['One', 'Two', 'Three'], a: 'B', x: 'Causes + evaluation.' },
          { n: 2, q: 'The best thesis for question 1:', opts: ['Many people move to cities.', 'People move to cities mainly for work and education, and I believe this is largely positive, provided cities can house them.', 'There are many reasons and effects.'], a: 'B', x: 'It answers both parts.' },
          { n: 3, q: '"Do the advantages outweigh the disadvantages?" requires…', opts: ['only a list of advantages', 'a clear judgement', 'only disadvantages'], a: 'B', x: 'It asks for your verdict.' },
          { n: 4, q: 'Where should the answer to part 2 appear?', opts: ['Only in the conclusion', 'In the thesis, a body paragraph and the conclusion', 'Nowhere – part 1 is enough'], a: 'B', x: 'Every part must be visible throughout.' }
        ] }
      ]
    },
    checklist: ['I numbered every part of the question.', 'My thesis answers every part.', 'Each part has its own developed paragraph.', 'My conclusion covers every part.'],
    summary: ['Mixed questions combine two or three instructions.', 'Every part must be answered and developed.', 'Map parts → thesis → paragraphs → conclusion.']
  }
};

import type { Chapter } from '@/lib/types';

/* Listening chapters: matching, sentence completion, short answers */
export const listeningChaptersB: Record<string, Chapter> = {
  /* ======================================================================= */
  matching: {
    intro: `
<p>In a listening matching task you have a numbered list of items – people, places, activities, sources, stages – and a box of lettered options – descriptions, opinions, features. As the speakers discuss each item in turn, you choose the option that matches it. There are more options than items, so some options are not used.</p>
<p>The task appears most often in <b>Part 2</b> (a speaker describing several attractions, activities or services) and <b>Part 3</b> (students and a tutor evaluating sources, methods or topics). Its difficulty comes from the amount of information you must hold in mind: for every item you are comparing what you hear against <b>all</b> the options in the box, and several options are usually mentioned for each item – but only one is confirmed.</p>
<p>The key insight: the <b>numbered items</b> are heard in order and act as signposts; the <b>options</b> are not in order and are paraphrased. So you listen for the item name, then for the meaning of one option.</p>`,
    facts: [
      ['Appears in', 'Parts 2 and 3'],
      ['Number of questions', 'Usually 4–6 items, 5–8 options'],
      ['Order', 'Items follow the recording; options are not in order'],
      ['You write', 'A letter for each item'],
      ['Main skill', 'Holding several options in mind; paraphrase'],
      ['Reading time', 'Study the box carefully']
    ],
    anatomy: `<div class="instructions" style="background:var(--surface-2);padding:12px 16px;border-radius:8px"><i>What does the speaker say about each of the following activities?<br>Choose <b>FIVE</b> answers from the box and write the correct letter, <b>A–F</b>, next to Questions 1–5.</i></div>
<p>The question tells you the <b>relationship</b> to listen for: "what does the speaker say about...", "what is the opinion of...", "which feature does each have...". Each option is normally used only once unless told otherwise.</p>`,
    method: [
      { title: 'Read the options box first and paraphrase each option', body: '<p>The options are where the difficulty is. For each, think of how it might be said.</p>', example: '"booking essential" → you must reserve, places are limited, sign up in advance. "suitable for young children" → aimed at under-sevens, families with toddlers.' },
      { title: 'Read the list of items', body: '<p>These are names you will hear clearly, in order. They tell you which question you are on.</p>' },
      { title: 'Listen for the item, then for the option', body: '<p>When the speaker names item 1, focus on what is said about it until item 2 is named. Several options may be mentioned; listen for which one is confirmed.</p>' },
      { title: 'Eliminate options that are mentioned but denied', body: '<p>"Last year it was free, but this year there\'s a charge" – <i>free</i> is denied for this item.</p>' },
      { title: 'Write the letter and cross it off lightly', body: '<p>Once an option is used, it is less likely to be used again (unless the instructions allow it). Crossing it off lightly reduces your choices for later items.</p>' },
      { title: 'When the next item is named, move on', body: '<p>If you missed the answer, make a quick guess from the remaining options later.</p>' }
    ],
    worked: [
      {
        title: 'The Summer Festival (Part 2 style)',
        script: [
          { pause: 10, t: 'You will hear a radio presenter talking about a summer festival. Look at questions 1 to 5' },
          { s: 'Presenter', g: 'm', t: 'This year\'s summer festival has a packed programme, so let me run through some of the highlights.' },
          { s: 'Presenter', g: 'm', t: 'First, the pottery workshop. Last year it was free, but this year there\'s a small charge of four pounds. More importantly, there are only twelve wheels, so you must reserve a place in advance at the information desk – you can\'t just turn up.' },
          { s: 'Presenter', g: 'm', t: 'Then there\'s the storytelling tent. It runs every day, not just at weekends, and it\'s aimed at children under seven, so bring the little ones along. It\'s two pounds per child.' },
          { s: 'Presenter', g: 'm', t: 'Something we\'re trying for the first time this year is a guided walk along the river with a local historian. It costs four pounds including a drink at the end, and it goes ahead whatever the weather, so dress accordingly.' },
          { s: 'Presenter', g: 'm', t: 'The cookery demonstrations are always popular. The food samples are free, but the demonstration itself costs three pounds, and it only takes place on Saturdays and Sundays.' },
          { s: 'Presenter', g: 'm', t: 'And finally, the open-air cinema. Tickets are five pounds. Please be aware that we don\'t have an indoor venue this year, so if it rains, the screening will be cancelled.' }
        ],
        instructions: '<i>What does the presenter say about each activity? Choose <b>FIVE</b> answers from the box.</i>',
        questions: `<div class="option-box"><div>A free of charge</div><div>B booking essential</div><div>C suitable for young children</div><div>D weekends only</div><div>E cancelled if it rains</div><div>F new this year</div></div>
<ol><li>pottery workshop</li><li>storytelling tent</li><li>guided river walk</li><li>cookery demonstration</li><li>open-air cinema</li></ol>`,
        walk: [
          { q: '1. pottery workshop', a: 'B', steps: ['<b>A</b> mentioned and denied: "Last year it was free, but this year there\'s a small charge".', '<b>B</b> ✓: "you must reserve a place in advance... you can\'t just turn up" = booking essential.'] },
          { q: '2. storytelling tent', a: 'C', steps: ['<b>D</b> mentioned and denied: "every day, not just at weekends".', '<b>C</b> ✓: "aimed at children under seven".'] },
          { q: '3. guided river walk', a: 'F', steps: ['<b>F</b> ✓: "Something we\'re trying for the first time this year".', '<b>E</b> denied: "it goes ahead whatever the weather".'] },
          { q: '4. cookery demonstration', a: 'D', steps: ['<b>A</b> half-true distractor: "The food samples are free, but the demonstration itself costs three pounds".', '<b>D</b> ✓: "only takes place on Saturdays and Sundays".'] },
          { q: '5. open-air cinema', a: 'E', steps: ['<b>E</b> ✓: "if it rains, the screening will be cancelled".'] }
        ],
        lesson: 'Option A ("free of charge") was mentioned for two items and denied both times – it was never the answer. In matching tasks, an option heard repeatedly is often the distractor.'
      }
    ],
    dos: ['Study and paraphrase the options before listening.', 'Use item names as signposts.', 'Listen for confirmation, not just mention.', 'Cross off used options lightly.'],
    donts: ['Don\'t choose an option just because its words are mentioned.', 'Don\'t stay on an item after the next one is named.', 'Don\'t forget that some options are never used.'],
    careful: [
      { title: 'Half-true options', body: '<p>"The food samples are free, but the demonstration costs £3" – part of the activity is free, but the option describes the activity as a whole.</p>' },
      { title: 'Part 3 opinions', body: '<p>When students and a tutor evaluate items, the answer is usually the view they agree on, or the tutor\'s judgement if the question asks for it.</p>' }
    ],
    timing: '<p>Spend most of the reading time on the options box. The items are short names that need little preparation.</p>',
    checklist: ['I paraphrase options before listening.', 'I follow item names as signposts.', 'I distinguish mentioned options from confirmed ones.'],
    summary: ['Items are in order; options are not.', 'Several options are mentioned per item; only one is confirmed.', 'Repeatedly mentioned options are often distractors.']
  },

  /* ======================================================================= */
  sentence: {
    intro: `
<p>Listening sentence completion gives you sentences that summarise key points from the recording, each with a gap. You complete each gap with words you hear, within a word limit. The sentences are paraphrases of what the speakers say; the missing words are usually heard exactly.</p>
<p>The task is similar to note completion, but because the sentences are full sentences, <b>grammar</b> is a powerful prediction tool: the completed sentence must be grammatically correct. Most mistakes come from the wrong <b>word form</b> (economy vs economical), a missing plural, or going over the word limit.</p>`,
    facts: [
      ['Appears in', 'All parts, especially Parts 2 and 4'],
      ['Number of questions', 'Usually 3–6'],
      ['Order', 'Follows the recording'],
      ['You write', 'Words and/or numbers you hear'],
      ['Main skill', 'Grammar prediction; paraphrase'],
      ['Typical word limit', 'NO MORE THAN TWO WORDS']
    ],
    anatomy: `<div class="instructions" style="background:var(--surface-2);padding:12px 16px;border-radius:8px"><i>Complete the sentences below.<br>Write <b>NO MORE THAN TWO WORDS AND/OR A NUMBER</b> for each answer.</i></div>`,
    method: [
      { title: 'Read each sentence and predict the grammar', body: '<p>Noun or adjective? Singular or plural? Does the gap need a number? Is there an article before the gap?</p>' },
      { title: 'Paraphrase the sentence in your head', body: '<p>The speaker will not say the sentence as printed. Think how the idea might be expressed.</p>', example: '"Visitors must leave large bags in the ______" → "you\'ll need to put big bags in...", "bags aren\'t allowed in the galleries, so..."' },
      { title: 'Listen for the idea, write the exact word', body: '<p>When the idea comes, the answer word usually follows. Write it exactly.</p>' },
      { title: 'Check the sentence', body: '<p>Read the completed sentence: grammar, spelling, word limit.</p>' }
    ],
    worked: [
      {
        title: 'The Clockmaker\'s House museum (Part 2 style)',
        script: [
          { pause: 8, t: 'You will hear a guide at a museum. Look at questions 1 to 5' },
          { s: 'Guide', g: 'm', t: 'Welcome to the Clockmaker\'s House. Before we start, a few practical points. Normally we\'d ask you to leave coats and large bags in the cloakroom, but it\'s closed for repairs this week, so please use the lockers just to the left of the entrance instead.' },
          { s: 'Guide', g: 'm', t: 'Our collection covers four centuries. People often assume the grandfather clock in the hall is our oldest piece, but in fact it dates from 1760. Our oldest clock is a small brass table clock made in 1658.' },
          { s: 'Guide', g: 'm', t: 'On the first floor you can see the original workshop, where one of our volunteers, a retired craftsman, repairs clocks every Tuesday and Thursday, and he\'s always happy to answer questions.' },
          { s: 'Guide', g: 'm', t: 'The tour finishes on the top floor in the roof garden, from which you get a wonderful view over the old town.' },
          { s: 'Guide', g: 'm', t: 'And for families: children can pick up an activity sheet from the shop. If they complete it, they get a small prize.' }
        ],
        instructions: '<i>Complete the sentences. Write <b>NO MORE THAN TWO WORDS AND/OR A NUMBER</b>.</i>',
        questions: `<ol><li>This week, large bags must be left in the ______.</li><li>The oldest clock in the museum was made in ______.</li><li>Visitors can watch clocks being repaired in the ______.</li><li>The tour ends in the ______.</li><li>Children can collect an ______ from the shop.</li></ol>`,
        walk: [
          { q: '1. ...left in the ______', a: 'lockers', steps: ['<b>Distractor:</b> "cloakroom" is mentioned first, but it is "closed for repairs this week".', '<b>Answer:</b> lockers (plural – "the lockers").'] },
          { q: '2. made in ______', a: '1658', steps: ['<b>Distractor:</b> "People often assume the grandfather clock... dates from 1760".', '<b>Answer:</b> 1658 – after "in fact" and "Our oldest clock".'] },
          { q: '3. repaired in the ______', a: 'workshop', steps: ['<b>Paraphrase:</b> "watch clocks being repaired" ↔ "a retired craftsman repairs clocks".', '<b>Answer:</b> workshop (or "original workshop" – two words, within the limit).'] },
          { q: '4. The tour ends in the ______', a: 'roof garden', steps: ['<b>Paraphrase:</b> "ends" ↔ "finishes".', '<b>Answer:</b> roof garden. "top floor" is also mentioned, but the specific place is the roof garden.'] },
          { q: '5. collect an ______', a: 'activity sheet', steps: ['<b>Grammar clue:</b> "an" → the answer begins with a vowel sound: <i>activity</i> ✓.', '<b>Answer:</b> activity sheet. ("prize" would need "a", and it isn\'t collected from the shop.)'] }
        ],
        lesson: 'Two answers were preceded by a distractor that was corrected ("normally... but", "people often assume... in fact"). The article "an" in question 5 confirmed the answer before the speaker even reached it.'
      }
    ],
    dos: ['Predict grammar from the sentence.', 'Paraphrase the sentence in your head.', 'Use articles (a/an) as clues.', 'Check spelling and plurals.'],
    donts: ['Don\'t change the word form you hear unless the grammar clearly requires it (it rarely does).', 'Don\'t exceed the word limit.', 'Don\'t write the first possible answer before the speaker finishes the point.'],
    careful: [
      { title: '"Normally... but this week"', body: '<p>Temporary changes are classic distractors: the usual arrangement is mentioned first, then the current one.</p>' }
    ],
    timing: '<p>Read every sentence in the preparation time and predict. About 4 seconds per sentence.</p>',
    checklist: ['I predict grammar for every gap.', 'I listen for paraphrase of the whole sentence.', 'I check that the completed sentence is grammatical.'],
    summary: ['Grammar is the main prediction tool.', 'Sentences are paraphrased; answer words are heard exactly.', 'Watch for "normally... but" and "people assume... in fact" distractors.']
  },

  /* ======================================================================= */
  'short-answer': {
    intro: `
<p>Short-answer questions in Listening ask direct questions – <i>What...? When...? How much...? Where...?</i> – which you answer with a few words you hear. Some ask you to <b>list</b> items: "Name TWO things that visitors should bring." The task appears in Parts 1, 2 and occasionally 4.</p>
<p>The question word tells you exactly what to listen for. The difficulty is that the speaker rarely repeats the question: you must recognise the paraphrased topic and then catch the specific detail.</p>`,
    facts: [
      ['Appears in', 'Parts 1, 2 (occasionally 4)'],
      ['Number of questions', 'Usually 3–5'],
      ['Order', 'Follows the recording'],
      ['You write', 'Words and/or numbers you hear'],
      ['Main skill', 'Listening for specific information'],
      ['Typical word limit', 'NO MORE THAN THREE WORDS AND/OR A NUMBER']
    ],
    anatomy: `<div class="instructions" style="background:var(--surface-2);padding:12px 16px;border-radius:8px"><i>Answer the questions below.<br>Write <b>NO MORE THAN THREE WORDS AND/OR A NUMBER</b> for each answer.</i></div>`,
    method: [
      { title: 'Underline the question word and predict the answer type', body: '<p>When → time/day/date; How long → duration; How far → distance; What → thing; Where → place.</p>' },
      { title: 'Underline the topic words and think of paraphrases', body: '<p>"in case of bad weather" → if it rains, if the weather turns, waterproof...</p>' },
      { title: 'Listen for the topic, catch the detail', body: '<p>Write the key words only – no full sentences.</p>' },
      { title: 'For list questions, write each item separately', body: '<p>If two numbered answers are needed, each item goes in a separate box, in any order.</p>' }
    ],
    worked: [
      {
        title: 'The Coastal Path Walking Festival (Part 2 style)',
        script: [
          { pause: 8, t: 'You will hear a radio announcement about a walking festival. Look at questions 1 to 5' },
          { s: 'Announcer', g: 'f', t: 'The Coastal Path Walking Festival returns next month. The path itself is sixty-four kilometres long, though most of the festival walks cover sections of around ten kilometres.' },
          { s: 'Announcer', g: 'f', t: 'The weather on the coast can change very quickly, so whatever the forecast, please carry a waterproof jacket. Walking boots are recommended, but trainers are fine on most sections.' },
          { s: 'Announcer', g: 'f', t: 'There\'s no parking at the start points, so a free shuttle bus will run every half hour. It used to leave from the town hall, but this year it departs from the railway station.' },
          { s: 'Announcer', g: 'f', t: 'A highlight of the programme is the guided night walk. It was originally planned for Saturday, but it\'s been moved to Friday to avoid a clash with the fireworks.' },
          { s: 'Announcer', g: 'f', t: 'Finally, all walkers must download the festival app before setting out. It contains the route maps and the emergency contact numbers.' }
        ],
        instructions: '<i>Answer the questions. Write <b>NO MORE THAN THREE WORDS AND/OR A NUMBER</b>.</i>',
        questions: `<ol><li>How long is the whole coastal path?</li><li>What should walkers carry because of changeable weather?</li><li>Where does the shuttle bus leave from?</li><li>On which day is the night walk?</li><li>What must all walkers download?</li></ol>`,
        walk: [
          { q: '1. How long is the whole path?', a: '64 km', steps: ['<b>Answer type:</b> a distance.', '<b>Distractor:</b> "around ten kilometres" is the length of festival walks, not the whole path.', '<b>Answer:</b> 64 km / 64 kilometres.'] },
          { q: '2. What should walkers carry...?', a: '(a) waterproof jacket', steps: ['<b>Paraphrase:</b> "changeable weather" ↔ "can change very quickly".', '<b>Answer:</b> waterproof jacket. Boots are "recommended", not something to carry for the weather.'] },
          { q: '3. Where does the bus leave from?', a: '(the) railway station', steps: ['<b>Distractor:</b> "It used to leave from the town hall".', '<b>Answer:</b> railway station.'] },
          { q: '4. On which day...?', a: 'Friday', steps: ['<b>Distractor:</b> "originally planned for Saturday".', '<b>Answer:</b> Friday.'] },
          { q: '5. What must walkers download?', a: '(the) festival app', steps: ['<b>Answer:</b> festival app / the app. ("route maps" are inside the app – a related but different answer.)'] }
        ],
        lesson: 'Three of five answers had a distractor based on time: <i>used to</i>, <i>originally planned</i>, and a different measurement. Short answers are easy to write but easy to get wrong if you write the first matching detail you hear.'
      }
    ],
    dos: ['Predict the answer type from the question word.', 'Listen for paraphrases of the topic.', 'Write minimal answers within the limit.', 'Listen for changes: used to, originally, now.'],
    donts: ['Don\'t write a full sentence.', 'Don\'t write a detail that answers a different question word.', 'Don\'t exceed the limit with articles and adjectives.'],
    careful: [
      { title: 'Similar numbers for different things', body: '<p>A talk may give several numbers (whole length, section length, number of walks). Match the number to the exact question.</p>' }
    ],
    timing: '<p>About 4 seconds per question in the preparation time.</p>',
    checklist: ['I predict the answer type.', 'I match numbers and details to the exact question.', 'I listen for changed arrangements.'],
    summary: ['The question word decides the answer type.', 'Watch for old or changed information.', 'Short, exact answers within the limit.']
  }
};

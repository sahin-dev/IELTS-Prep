import type { ScriptLine, TestSet } from '@/lib/types';

const letters = (arr: string[]) => arr.map((t, i) => ({ v: String.fromCharCode(65 + i), t }));
const N = (t: string): ScriptLine => ({ t });
const PAUSE = (s: number, t?: string): ScriptLine => ({ pause: s, t: t || 'Reading time' });

export const listeningExtra: TestSet[] = [
  /* ---------- Part 2: MCQ + matching (10 questions) ---------- */
  {
    id: 'l-p2-garden', type: 'matching', part: 2, title: 'Part 2 – Hillside Community Garden Open Day (Multiple choice & matching)', level: 'Band 5.5–7',
    script: [
      N('Part 2. You will hear a volunteer talking to visitors at a community garden open day. First, you have some time to look at questions 1 to 4.'),
      PAUSE(25, 'Read questions 1 to 4'),
      { s: 'Volunteer', g: 'm', t: 'Good morning, everyone, and welcome to the Hillside Community Garden open day. My name is Tom, and I\'ve been volunteering here for about six years.' },
      { s: 'Volunteer', g: 'm', t: 'People often assume that this land was always a field, or that it belonged to the school next door. In fact, until the nineteen seventies this whole area was a railway yard, where trains were repaired. After the railway closed, the council planned to turn it into a car park, but local residents campaigned against that idea, and the garden opened instead in nineteen eighty-two.' },
      { s: 'Volunteer', g: 'm', t: 'Running a garden like this costs money, of course. In the early years the council gave us a grant to get started, but that support ended some time ago. We do sell some of our vegetables at the local market, but that only brings in a small amount. Most of our funding now comes from a national charity that supports green spaces in cities.' },
      { s: 'Volunteer', g: 'm', t: 'Before you go exploring, a practical point. You don\'t need to have booked anything today, and we\'ve got plenty of gloves for anyone who wants to try some gardening. But it rained heavily last night, and some of the paths are very muddy, so I hope you\'re wearing old shoes or boots!' },
      { s: 'Volunteer', g: 'm', t: 'And if you\'re thinking of joining us as a volunteer, you\'ll be very welcome. You certainly don\'t need any gardening experience – I didn\'t know a weed from a carrot when I started! And there\'s no fixed timetable: you simply come along whenever it suits you, whether that\'s once a week or once a month.' },
      N('Now look at questions 5 to 10.'),
      PAUSE(25, 'Read questions 5 to 10'),
      { s: 'Volunteer', g: 'm', t: 'Now, let me tell you what\'s happening in different parts of the garden today. Starting near the entrance, in the herb garden, you can join a tasting session, where you can try teas made from the mint, lemon balm and camomile we grow here.' },
      { s: 'Volunteer', g: 'm', t: 'Further along is the orchard. The apple harvest has been excellent this year, so we\'ve set up an old-fashioned apple press, and you\'re welcome to help make fresh juice.' },
      { s: 'Volunteer', g: 'm', t: 'Children always love the pond area. Our wildlife officer will be running pond dipping sessions there every hour, using nets to look at the insects and other creatures that live in the water. We had planned a bird-watching walk from there too, but that\'s been moved to next month.' },
      { s: 'Volunteer', g: 'm', t: 'In the greenhouse, you can try seed planting. You\'ll fill a small pot with compost, plant some salad seeds, and take it home with you.' },
      { s: 'Volunteer', g: 'm', t: 'Behind the greenhouse is the wildflower meadow, which is where we keep our three beehives. At eleven o\'clock and two o\'clock our beekeeper will be giving a demonstration, and there are protective suits for anyone who wants to get close.' },
      { s: 'Volunteer', g: 'm', t: 'And finally, on the main lawn, there\'ll be storytelling for young children all afternoon. Some of you may have seen a yoga class advertised on the lawn as well, but unfortunately the instructor is unwell, so that\'s been cancelled. Enjoy your day!' },
      N('That is the end of Part 2.')
    ],
    groups: [
      {
        kind: 'choice', instructions: 'Questions 1–4. Choose the correct letter, <b>A, B or C</b>.', questions: [
          { n: 1, q: 'Before the garden opened, the site was used as', opts: ['a school playing field.', 'a railway yard.', 'a car park.'], a: 'B', x: '"until the 1970s this whole area was a railway yard". The car park was only planned; the school is next door.' },
          { n: 2, q: 'Most of the garden\'s money now comes from', opts: ['the local council.', 'selling vegetables.', 'a national charity.'], a: 'C', x: 'Council support "ended some time ago"; vegetables bring "only a small amount".' },
          { n: 3, q: 'Visitors today are advised to', opts: ['bring their own gloves.', 'book activities in advance.', 'wear suitable footwear.'], a: 'C', x: '"some of the paths are very muddy, so I hope you\'re wearing old shoes or boots".' },
          { n: 4, q: 'What does the speaker say about volunteers?', opts: ['They must come every weekend.', 'They can choose when they come.', 'They need some gardening experience.'], a: 'B', x: '"there\'s no fixed timetable: you simply come along whenever it suits you".' }
        ]
      },
      {
        kind: 'select', instructions: 'Questions 5–10. Which activity is available in each area of the garden today? Choose <b>SIX</b> answers from the box, <b>A–H</b>.',
        boxTitle: 'Activities', showText: true,
        options: letters(['bird watching', 'tasting session', 'seed planting', 'storytelling', 'pond dipping', 'juice making', 'beekeeping demonstration', 'yoga class']),
        questions: [
          { n: 5, q: 'herb garden', a: 'B', x: '"you can join a tasting session".' },
          { n: 6, q: 'orchard', a: 'F', x: '"an old-fashioned apple press... help make fresh juice".' },
          { n: 7, q: 'pond area', a: 'E', x: '"pond dipping sessions". Bird watching (A) has been moved to next month.' },
          { n: 8, q: 'greenhouse', a: 'C', x: '"In the greenhouse, you can try seed planting."' },
          { n: 9, q: 'wildflower meadow', a: 'G', x: '"our beekeeper will be giving a demonstration".' },
          { n: 10, q: 'main lawn', a: 'D', x: '"storytelling for young children". The yoga class (H) has been cancelled.' }
        ]
      }
    ]
  },

  /* ---------- Part 3: MCQ + notes (10 questions) ---------- */
  {
    id: 'l-p3-research', type: 'mcq', part: 3, title: 'Part 3 – Planning a Research Project on Food Waste (Multiple choice & notes)', level: 'Band 6–7.5',
    script: [
      N('Part 3. You will hear two students, Mia and Jack, discussing a research project. First, you have some time to look at questions 1 to 5.'),
      PAUSE(30, 'Read questions 1 to 5'),
      { s: 'Jack', g: 'm', t: 'So, Mia, we need to decide on a topic for our social science project. Have you had any more thoughts about food waste?' },
      { s: 'Mia', g: 'f', t: 'I have, actually. I know Dr Evans suggested looking at recycling, and I did read an article about supermarket waste, but what really got me thinking was our own kitchen in the hall of residence. The bins are always full of food that\'s hardly been touched.' },
      { s: 'Jack', g: 'm', t: 'True. I noticed that too. Half a loaf of bread went in the bin yesterday. OK, so we\'ll look at food waste among students living in halls. How should we collect the data? An online questionnaire would be quickest.' },
      { s: 'Mia', g: 'f', t: 'It would, and I\'m not worried about getting enough responses – if we offer a prize draw, people will fill it in. My concern is that people won\'t tell the truth. Nobody likes admitting they throw food away, so they\'ll probably say they waste much less than they really do.' },
      { s: 'Jack', g: 'm', t: 'So we need a more objective measure as well. What about asking students to keep a food diary?' },
      { s: 'Mia', g: 'f', t: 'People forget to fill them in after a couple of days. I think the most reliable method would be to weigh the contents of the kitchen bins every week. We could take photos too, but those would really just be for the presentation.' },
      { s: 'Jack', g: 'm', t: 'Weighing it is, then. Should we do all five halls?' },
      { s: 'Mia', g: 'f', t: 'That would be far too much work. But if we only do one, we can\'t make any comparisons.' },
      { s: 'Jack', g: 'm', t: 'So two halls – maybe one where students cook for themselves and one with a canteen.' },
      { s: 'Mia', g: 'f', t: 'Perfect. And I was reading some previous studies last night. I wasn\'t surprised that waste goes up at the end of term, when people clear out their cupboards. But I\'d assumed vegetables would be the item thrown away most, and in fact it was bread in almost every study.' },
      { s: 'Jack', g: 'm', t: 'Interesting. That fits with what I saw yesterday!' },
      N('Now look at questions 6 to 10.'),
      PAUSE(25, 'Read questions 6 to 10'),
      { s: 'Mia', g: 'f', t: 'Right, let\'s plan the timetable. In week one, the first thing we need is permission from the accommodation office to go into the kitchens and weigh the bins.' },
      { s: 'Jack', g: 'm', t: 'Yes, nothing can happen without that. Then in week two we design the questionnaire, and test it on a few friends.' },
      { s: 'Mia', g: 'f', t: 'And how long should we collect data for? I was thinking two weeks.' },
      { s: 'Jack', g: 'm', t: 'Two weeks seems short. If one of those is a week when lots of people go home, the results will be odd. Let\'s say three weeks.' },
      { s: 'Mia', g: 'f', t: 'Fair enough, three weeks. For the analysis, we don\'t really need special statistics software; a spreadsheet will be fine for the kind of figures we\'ll have.' },
      { s: 'Jack', g: 'm', t: 'Agreed. And for the department conference, everyone else is doing slides. Shall we make a poster instead? People can look at it during the break.' },
      { s: 'Mia', g: 'f', t: 'Good idea. A poster it is.' },
      N('That is the end of Part 3.')
    ],
    groups: [
      {
        kind: 'choice', instructions: 'Questions 1–5. Choose the correct letter, <b>A, B or C</b>.', questions: [
          { n: 1, q: 'Why did the students choose food waste as their topic?', opts: ['Their tutor recommended it.', 'They noticed it in their own accommodation.', 'They read an article about it.'], a: 'B', x: '"what really got me thinking was our own kitchen in the hall of residence". The tutor suggested recycling; the article was about supermarkets.' },
          { n: 2, q: 'What problem does Mia see with an online questionnaire?', opts: ['Too few students will respond.', 'Students may not answer honestly.', 'It will take too long to design.'], a: 'B', x: '"My concern is that people won\'t tell the truth." She is not worried about the response rate.' },
          { n: 3, q: 'How will the students measure food waste?', opts: ['by weighing bins', 'by taking photographs', 'by asking students to keep diaries'], a: 'A', x: 'Diaries are rejected; photos are "just for the presentation".' },
          { n: 4, q: 'How many halls of residence will they study?', opts: ['one', 'two', 'five'], a: 'B', x: '"So two halls..." – "Perfect."' },
          { n: 5, q: 'What surprised Mia about previous studies?', opts: ['Bread was the most wasted food.', 'Students waste more than families.', 'Waste increases at the end of term.'], a: 'A', x: '"I\'d assumed vegetables... in fact it was bread". She "wasn\'t surprised" about the end of term (C).' }
        ]
      },
      {
        kind: 'gap', maxWords: 1, instructions: 'Questions 6–10. Complete the notes below. Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.',
        text: `<div class="card" style="margin:0"><h4 class="mt0">Project plan</h4>
<p>Week 1: obtain permission from the accommodation [[6]]</p>
<p>Week 2: design and test the [[7]]</p>
<p>Data collection: weigh kitchen bins for [[8]] weeks</p>
<p>Analysis: use a [[9]]</p>
<p>Presentation: make a [[10]] for the department conference</p></div>`,
        questions: [
          { n: 6, a: 'office', x: '"permission from the accommodation office".' },
          { n: 7, a: 'questionnaire', x: '"in week two we design the questionnaire, and test it".' },
          { n: 8, a: '3|three', x: 'Mia suggests two weeks; they agree on three.' },
          { n: 9, a: 'spreadsheet', x: '"a spreadsheet will be fine".' },
          { n: 10, a: 'poster', x: '"Shall we make a poster instead?" – "A poster it is." Slides are a distractor.' }
        ]
      }
    ]
  }
];

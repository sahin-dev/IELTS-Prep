window.IELTS = window.IELTS || {};
(function () {
  const letters = arr => arr.map((t, i) => ({ v: String.fromCharCode(65 + i), t }));
  const N = (t) => ({ t });
  const PAUSE = (s, t) => ({ pause: s, t: t || 'Reading time' });

  const parkMap = `<svg viewBox="0 0 560 420" width="560" style="color:var(--text)" font-family="inherit">
<rect x="20" y="20" width="520" height="370" rx="10" fill="#dcfce7" fill-opacity=".35" stroke="currentColor" stroke-width="2"/>
<ellipse cx="280" cy="140" rx="90" ry="50" fill="#93c5fd" stroke="#2563eb"/><text x="280" y="145" font-size="13" text-anchor="middle" fill="#1e3a8a" font-weight="700">LAKE</text>
<ellipse cx="280" cy="140" rx="110" ry="70" fill="none" stroke="#a8a29e" stroke-width="10" stroke-opacity=".5"/>
<line x1="280" y1="390" x2="280" y2="210" stroke="#a8a29e" stroke-width="12" stroke-opacity=".6"/>
<line x1="40" y1="280" x2="530" y2="280" stroke="#a8a29e" stroke-width="12" stroke-opacity=".6"/>
<rect x="245" y="384" width="70" height="22" rx="4" fill="currentColor"/><text x="280" y="400" font-size="11" text-anchor="middle" fill="var(--surface,#fff)" font-weight="700">MAIN GATE</text>
<rect x="40" y="330" width="100" height="45" rx="4" fill="none" stroke="currentColor" stroke-dasharray="4 3"/><text x="90" y="357" font-size="12" text-anchor="middle" fill="currentColor">Car park</text>
<text x="298" y="300" font-size="10" fill="currentColor" fill-opacity=".7">crossroads</text>
<g font-size="15" font-weight="800" text-anchor="middle">
${[['A', 235, 340], ['B', 325, 340], ['C', 170, 240], ['D', 405, 240], ['E', 60, 250], ['F', 510, 250], ['G', 280, 48], ['H', 140, 140]].map(([l, x, y]) => `<circle cx="${x}" cy="${y}" r="15" fill="#fff" stroke="#7c3aed" stroke-width="2.5"/><text x="${x}" y="${y + 5}" fill="#7c3aed">${l}</text>`).join('')}
</g>
<g transform="translate(505 60)"><line x1="0" y1="18" x2="0" y2="-14" stroke="currentColor" stroke-width="2"/><path d="M-6,-8 L0,-20 L6,-8 z" fill="currentColor"/><text x="0" y="32" font-size="12" text-anchor="middle" fill="currentColor" font-weight="700">N</text></g>
</svg>`;

  IELTS.listeningPractice = [
    /* ---------- Part 1: Form completion ---------- */
    {
      id: 'l-form', type: 'form', part: 1, title: 'Part 1 – Joining a Fitness Centre (Form completion)', level: 'Band 5–7',
      script: [
        N('Part 1. You will hear a woman phoning a fitness centre to become a member. First, you have some time to look at questions 1 to 10.'),
        PAUSE(30, 'Read questions 1 to 10'),
        N('Now listen carefully and answer questions 1 to 10.'),
        { s: 'Receptionist', g: 'm', t: 'Good morning, Riverside Fitness Centre, Daniel speaking. How can I help?' },
        { s: 'Sarah', g: 'f', t: 'Hi, I\'d like to become a member, please. Is it possible to sign up over the phone?' },
        { s: 'Receptionist', g: 'm', t: 'Of course. I\'ll just need to take a few details. Could I have your full name?' },
        { s: 'Sarah', g: 'f', t: 'Yes, it\'s Sarah Kowalski.' },
        { s: 'Receptionist', g: 'm', t: 'Could you spell your surname for me?' },
        { s: 'Sarah', g: 'f', t: 'Sure. K. O. W. A. L. S. K. I.' },
        { s: 'Receptionist', g: 'm', t: 'Thank you. And what\'s your address?' },
        { s: 'Sarah', g: 'f', t: 'It\'s twenty-seven Harbour Street. That\'s H. A. R. B. O. U. R.' },
        { s: 'Receptionist', g: 'm', t: 'Lovely. And that\'s here in Westbridge?' },
        { s: 'Sarah', g: 'f', t: 'Yes, that\'s right.' },
        { s: 'Receptionist', g: 'm', t: 'And a contact phone number?' },
        { s: 'Sarah', g: 'f', t: 'My mobile is oh seven nine four five, eight six three, one two oh.' },
        { s: 'Receptionist', g: 'm', t: 'Let me read that back. Oh seven nine four five, eight six three, one two oh.' },
        { s: 'Sarah', g: 'f', t: 'Perfect.' },
        { s: 'Receptionist', g: 'm', t: 'Now, we have two main types of membership. Full membership lets you use the gym at any time, and that\'s forty-five pounds a month. Or there\'s off-peak membership, which covers weekdays before four p.m. and all day at weekends.' },
        { s: 'Sarah', g: 'f', t: 'Hmm. I work from home, so I\'m usually free during the day. I\'ll go for off-peak.' },
        { s: 'Receptionist', g: 'm', t: 'Great. Off-peak is normally thirty-five pounds a month, but we\'ve got a special offer at the moment, so it would be thirty-two.' },
        { s: 'Sarah', g: 'f', t: 'Even better.' },
        { s: 'Receptionist', g: 'm', t: 'When would you like your membership to start?' },
        { s: 'Sarah', g: 'f', t: 'Could I start on the first of May?' },
        { s: 'Receptionist', g: 'm', t: 'Ah, I\'m afraid new memberships can only start in the middle of the month, on the fifteenth. So would the fifteenth of May be OK?' },
        { s: 'Sarah', g: 'f', t: 'Yes, that\'s fine.' },
        { s: 'Receptionist', g: 'm', t: 'And are you interested in any of our classes? They\'re included in the price.' },
        { s: 'Sarah', g: 'f', t: 'I was hoping to do Pilates.' },
        { s: 'Receptionist', g: 'm', t: 'Unfortunately our Pilates classes are fully booked until the summer. But there\'s space in the yoga class on Tuesday mornings.' },
        { s: 'Sarah', g: 'f', t: 'Oh, OK. I\'ll do yoga then.' },
        { s: 'Receptionist', g: 'm', t: 'Can I ask how you heard about us?' },
        { s: 'Sarah', g: 'f', t: 'Well, a friend of mine goes there and she\'s mentioned it a few times, but what actually made me call was your advert in the local newspaper.' },
        { s: 'Receptionist', g: 'm', t: 'Good to know. Do you have any medical conditions or injuries we should be aware of?' },
        { s: 'Sarah', g: 'f', t: 'I hurt my knee running last year. It\'s mostly better, but I have to be careful.' },
        { s: 'Receptionist', g: 'm', t: 'I\'ll make a note so the trainers know. And lastly, will you be driving to the centre?' },
        { s: 'Sarah', g: 'f', t: 'Yes, usually.' },
        { s: 'Receptionist', g: 'm', t: 'Then you\'ll need a parking permit. We\'ll post it to you with your membership card.' },
        { s: 'Sarah', g: 'f', t: 'Great. Thank you so much.' },
        N('That is the end of Part 1. You now have some time to check your answers.')
      ],
      groups: [{
        kind: 'gap', maxWords: 2, instructions: 'Complete the form below. Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.',
        text: `<table class="data-table" style="max-width:560px"><tr><th colspan="2">Riverside Fitness Centre – Membership Form</th></tr>
<tr><td>Name</td><td>Sarah [[1]]</td></tr><tr><td>Address</td><td>27 [[2]] Street, Westbridge</td></tr>
<tr><td>Phone</td><td>[[3]]</td></tr><tr><td>Membership type</td><td>[[4]]</td></tr><tr><td>Monthly cost</td><td>£ [[5]]</td></tr>
<tr><td>Start date</td><td>[[6]]</td></tr><tr><td>Class</td><td>[[7]] (Tuesday mornings)</td></tr>
<tr><td>Heard about centre</td><td>advert in the [[8]]</td></tr><tr><td>Injury</td><td>[[9]]</td></tr><tr><td>Extra item</td><td>parking [[10]]</td></tr></table>`,
        questions: [
          { n: 1, a: 'Kowalski', x: 'Spelled letter by letter: K-O-W-A-L-S-K-I.' },
          { n: 2, a: 'Harbour|Harbor', x: 'Spelled H-A-R-B-O-U-R (American spelling is also accepted).' },
          { n: 3, a: '07945863120|07945 863120|07945-863120', x: '"oh" = 0 in phone numbers.' },
          { n: 4, a: 'off-peak|off peak|offpeak', x: 'She rejects full membership: "I\'ll go for off-peak."' },
          { n: 5, a: '32|thirty-two|thirty two', x: 'Distractors: 45 (full) and 35 (normal off-peak price). The special offer makes it 32.' },
          { n: 6, a: '15 May|15th May|May 15|May 15th|15/5', x: 'Correction trap: she asks for 1 May, but memberships start on the 15th.' },
          { n: 7, a: 'yoga', x: 'Pilates is fully booked.' },
          { n: 8, a: 'newspaper|local newspaper', x: 'Her friend is a distractor – "what actually made me call was your advert in the local newspaper".' },
          { n: 9, a: 'knee|knee injury', x: '"I hurt my knee running".' },
          { n: 10, a: 'permit', x: '"you\'ll need a parking permit".' }
        ]
      }]
    },

    /* ---------- Part 1: Table completion ---------- */
    {
      id: 'l-table', type: 'form', part: 1, title: 'Part 1 – Booking a Day Tour (Table completion)', level: 'Band 5–7',
      script: [
        N('Part 1. You will hear a man asking a travel agent about day tours. First, look at questions 1 to 6.'),
        PAUSE(25, 'Read questions 1 to 6'),
        { s: 'Agent', g: 'f', t: 'Good afternoon, Highland Tours. How can I help you?' },
        { s: 'Customer', g: 'm', t: 'Hello. I\'m visiting the area next week with my wife, and we\'d like some information about your day tours.' },
        { s: 'Agent', g: 'f', t: 'Certainly. We have three popular options. The first is our Coastal Tour. It takes you along the cliffs to the old lighthouse, and then to a traditional fishing village. Many people think we visit the harbour museum as well, but that\'s closed for repairs this year.' },
        { s: 'Customer', g: 'm', t: 'How long does that one take?' },
        { s: 'Agent', g: 'f', t: 'About six hours. It\'s fifty-five pounds per person, and that includes lunch in the village.' },
        { s: 'Customer', g: 'm', t: 'Fifty-five, OK. What about the second one?' },
        { s: 'Agent', g: 'f', t: 'That\'s the Mountain Tour, which goes to Lake Ardmore. It\'s a longer day. We used to advertise it as seven hours, but with the new route it\'s now eight hours in total.' },
        { s: 'Customer', g: 'm', t: 'And the price?' },
        { s: 'Agent', g: 'f', t: 'Seventy pounds. Lunch isn\'t included on that one, but you do get a boat trip on the lake, which is lovely.' },
        { s: 'Customer', g: 'm', t: 'Sounds good. And the third?' },
        { s: 'Agent', g: 'f', t: 'The City Heritage Tour. It\'s a walking tour of the castle and the cathedral. It lasts four hours, and it\'s our cheapest option at thirty pounds. It would normally be thirty-five, but we\'ve reduced it for the winter season.' },
        { s: 'Customer', g: 'm', t: 'Is anything included with that?' },
        { s: 'Agent', g: 'f', t: 'Entry to both buildings is included, of course, and every guest receives a guidebook to keep. Some people ask about an audio guide, but we stopped offering those last year.' },
        { s: 'Customer', g: 'm', t: 'Thank you, that\'s really helpful.' },
        N('That is the end of the section.')
      ],
      groups: [{
        kind: 'gap', maxWords: 2, instructions: 'Complete the table below. Write <b>NO MORE THAN TWO WORDS AND/OR A NUMBER</b> for each answer.',
        text: `<div class="table-wrap"><table class="data-table plain"><tr><th>Tour</th><th>Destination</th><th>Duration</th><th>Price (£)</th><th>Included</th></tr>
<tr><td><b>Coastal</b></td><td>the old [[1]] and a fishing village</td><td>6 hours</td><td>[[2]]</td><td>lunch</td></tr>
<tr><td><b>Mountain</b></td><td>Lake Ardmore</td><td>[[3]] hours</td><td>70</td><td>a [[4]]</td></tr>
<tr><td><b>City Heritage</b></td><td>castle and cathedral</td><td>4 hours</td><td>[[5]]</td><td>entry and a [[6]]</td></tr></table></div>`,
        questions: [
          { n: 1, a: 'lighthouse', x: 'The harbour museum is a distractor (closed).' },
          { n: 2, a: '55|fifty-five', x: '"fifty-five pounds per person".' },
          { n: 3, a: '8|eight', x: 'Correction: "used to advertise it as seven hours... now eight hours".' },
          { n: 4, a: 'boat trip', x: '"you do get a boat trip on the lake".' },
          { n: 5, a: '30|thirty', x: 'Normally 35, reduced to 30.' },
          { n: 6, a: 'guidebook|guide book', x: 'Audio guide is a distractor – "we stopped offering those".' }
        ]
      }]
    },

    /* ---------- Part 2: Multiple choice ---------- */
    {
      id: 'l-mcq', type: 'mcq', part: 2, title: 'Part 2 – Volunteering at the City Museum (Multiple choice)', level: 'Band 5.5–7',
      script: [
        N('Part 2. You will hear a talk by the volunteer coordinator at a city museum. First, look at questions 1 to 6.'),
        PAUSE(30, 'Read questions 1 to 6'),
        { s: 'Coordinator', g: 'f', t: 'Good evening, everyone, and thank you for coming to find out about volunteering at the City Museum. I\'m Helen, and I coordinate our volunteer programme.' },
        { s: 'Coordinator', g: 'f', t: 'Let me start with a little history. When the museum opened in nineteen seventy-five, all of the staff were paid employees. Even when we built the new wing in the nineteen nineties, we didn\'t use volunteers. It was only when our government funding was reduced in twenty ten that we began to recruit volunteers, and honestly, we don\'t know how we managed without them.' },
        { s: 'Coordinator', g: 'f', t: 'So what do volunteers actually do? Many people assume that our volunteers mainly guide tours. In fact, only a small number do that, because it requires specialist training. And the shop, by the way, is staffed by paid employees. The great majority of our volunteers work with our education team, helping the school groups who visit almost every day.' },
        { s: 'Coordinator', g: 'f', t: 'Now, how much time do you need to give? We used to ask for one day a week, but we found that put a lot of people off, so now we ask for just two days a month. Weekends are popular, but they\'re certainly not required.' },
        { s: 'Coordinator', g: 'f', t: 'All new volunteers receive training. We did try an online course a couple of years ago, but people much preferred meeting in person. So training now takes place here at the museum over two afternoons. It\'s not a whole week, as some people seem to think. And it\'s run by volunteers who have been with us for several years, so they know exactly what the job involves.' },
        { s: 'Coordinator', g: 'f', t: 'Finally, what do you get in return, apart from the satisfaction? Volunteers get a twenty per cent discount in the café, and free entry to all of our special exhibitions, which normally cost up to fifteen pounds. Unfortunately, we can\'t offer free parking, as the car park is run by the council, and we don\'t pay travel expenses, although we are looking into that. We also used to hold an annual dinner for volunteers, but sadly that stopped a few years ago.' },
        N('That is the end of Part 2.')
      ],
      groups: [
        {
          kind: 'choice', instructions: 'Choose the correct letter, <b>A, B or C</b>.', questions: [
            { n: 1, q: 'The museum started using volunteers', opts: ['when it first opened.', 'after a new wing was built.', 'when its funding was cut.'], a: 'C', x: '"It was only when our government funding was reduced in 2010..." A and B are both mentioned and rejected.' },
            { n: 2, q: 'Most volunteers', opts: ['guide tours.', 'work in the shop.', 'help with school visits.'], a: 'C', x: '"The great majority... work with our education team, helping the school groups".' },
            { n: 3, q: 'Volunteers are asked to work at least', opts: ['one day a week.', 'two days a month.', 'one weekend a month.'], a: 'B', x: '"We used to ask for one day a week... now we ask for just two days a month."' },
            { n: 4, q: 'Training for volunteers', opts: ['is completed online.', 'lasts for one week.', 'is led by experienced volunteers.'], a: 'C', x: '"run by volunteers who have been with us for several years".' }
          ]
        },
        {
          kind: 'multi', instructions: 'Choose <b>TWO</b> letters, <b>A–E</b>.', questions: [
            { n: 5, q: 'Which TWO benefits do volunteers currently receive?', opts: ['free parking', 'a discount in the café', 'free entry to special exhibitions', 'an invitation to an annual dinner', 'travel expenses'], a: ['B', 'C'], x: 'Parking, travel expenses and the annual dinner are all explicitly ruled out.' }
          ]
        }
      ]
    },

    /* ---------- Part 2: Map labelling ---------- */
    {
      id: 'l-map', type: 'map', part: 2, title: 'Part 2 – Greenfield Park (Map labelling)', level: 'Band 5.5–7',
      script: [
        N('Part 2. You will hear a park guide talking to a group of visitors. Look at the map and questions 1 to 6.'),
        PAUSE(30, 'Study the map'),
        { s: 'Guide', g: 'm', t: 'Good morning, everyone, and welcome to Greenfield Park. Before you go off and explore, let me tell you where everything is. We\'re standing at the main gate, at the southern end of the park.' },
        { s: 'Guide', g: 'm', t: 'As you come through the gate, the first building on your right is the café, which serves hot food all day. Directly opposite the café, on the left of the main path, you\'ll find the toilets.' },
        { s: 'Guide', g: 'm', t: 'If you carry on up the main path, you\'ll come to a crossroads. Turn left there and follow that path right to the end, and you\'ll reach the children\'s playground, which is next to the western fence.' },
        { s: 'Guide', g: 'm', t: 'If you turn right at the crossroads instead, the bike hire shop is the first building on your left, so it\'s between the path and the lake. Some people walk all the way to the end of that eastern path looking for it, but the building at the far end is our maintenance depot, which isn\'t open to the public.' },
        { s: 'Guide', g: 'm', t: 'Going back to the crossroads and continuing straight ahead, you\'ll reach the lake. There\'s a lovely picnic area on the west side of the lake, with tables and barbecues.' },
        { s: 'Guide', g: 'm', t: 'And finally, if you follow the path around the lake to the very top of the park, at the northern end, you\'ll find the rose garden, which is at its best in June. Enjoy your visit!' },
        N('That is the end of the section.')
      ],
      groups: [{
        kind: 'select', instructions: 'Label the map below. Choose the correct letter, <b>A–H</b>.',
        figure: { type: 'svg', svg: parkMap, caption: 'Greenfield Park' },
        options: 'ABCDEFGH'.split('').map(v => ({ v, t: v })), hideBox: true,
        questions: [
          { n: 1, q: 'Café', a: 'B', x: '"first building on your right" after the gate.' },
          { n: 2, q: 'Toilets', a: 'A', x: '"Directly opposite the café, on the left of the main path".' },
          { n: 3, q: 'Children\'s playground', a: 'E', x: '"Turn left... follow that path right to the end... next to the western fence".' },
          { n: 4, q: 'Bike hire', a: 'D', x: 'Turn right; "first building on your left... between the path and the lake". F is the maintenance depot (distractor).' },
          { n: 5, q: 'Picnic area', a: 'H', x: '"on the west side of the lake".' },
          { n: 6, q: 'Rose garden', a: 'G', x: '"at the very top of the park, at the northern end".' }
        ]
      }]
    },

    /* ---------- Part 3: Matching ---------- */
    {
      id: 'l-matching', type: 'matching', part: 3, title: 'Part 3 – Choosing Sources for a Presentation (Matching)', level: 'Band 6–7.5',
      script: [
        N('Part 3. You will hear a student called Aisha discussing sources for a presentation on renewable energy with her tutor. First, look at questions 1 to 5.'),
        PAUSE(30, 'Read questions 1 to 5'),
        { s: 'Tutor', g: 'm', t: 'So, Aisha, you\'ve collected quite a few sources for your presentation. Shall we go through them?' },
        { s: 'Aisha', g: 'f', t: 'Yes, please. The first is the textbook by Morgan. It explains the basic principles of wind and solar power really clearly.' },
        { s: 'Tutor', g: 'm', t: 'It does. But remember it was published in two thousand and nine. The technology has changed enormously since then – solar panels are far cheaper and more efficient now.' },
        { s: 'Aisha', g: 'f', t: 'That\'s true. I suppose I can\'t really rely on it, then.' },
        { s: 'Tutor', g: 'm', t: 'Not for anything current, no. What else?' },
        { s: 'Aisha', g: 'f', t: 'The government energy website. I wasn\'t sure whether it would be too general.' },
        { s: 'Tutor', g: 'm', t: 'Actually, it\'s updated every quarter, and it has the most recent figures on how much electricity comes from each source. I\'d definitely use it for your data.' },
        { s: 'Aisha', g: 'f', t: 'Great. Then there\'s the television documentary. I thought I could use a clip for the introduction to get people\'s attention.' },
        { s: 'Tutor', g: 'm', t: 'Hmm. It\'s very enjoyable to watch, I agree, but it skates over the important issues – there\'s almost no discussion of storage or cost. I wouldn\'t depend on it, even for the introduction.' },
        { s: 'Aisha', g: 'f', t: 'Fair enough. What about the journal article on battery storage? I was worried it would be hard to get hold of, but the library has it online.' },
        { s: 'Tutor', g: 'm', t: 'Good. The problem is that it\'s very mathematical. Your audience are first-year students, and most of it will go over their heads. You might pick one simple point from it.' },
        { s: 'Aisha', g: 'f', t: 'OK. And finally, I interviewed an engineer at a wind farm.' },
        { s: 'Tutor', g: 'm', t: 'That\'s a nice idea. Just be aware that she works for the company that owns the wind farm, so naturally she\'s going to present it in a positive light. Balance her comments with other views.' },
        { s: 'Aisha', g: 'f', t: 'Right. That makes sense.' },
        N('That is the end of Part 3.')
      ],
      groups: [{
        kind: 'select', instructions: 'What does the tutor say about each source? Choose <b>FIVE</b> answers from the box, <b>A–G</b>.',
        boxTitle: 'Comments', showText: true,
        options: letters(['It is out of date.', 'It is too technical for the audience.', 'It contains reliable recent statistics.', 'It may not be objective.', 'It is entertaining but superficial.', 'It is difficult to obtain.', 'It is ideal for the introduction.']),
        questions: [
          { n: 1, q: 'the textbook', a: 'A', x: 'Published in 2009; "technology has changed enormously".' },
          { n: 2, q: 'the government website', a: 'C', x: '"updated every quarter... the most recent figures".' },
          { n: 3, q: 'the documentary', a: 'E', x: '"very enjoyable to watch... skates over the important issues". G is rejected: "I wouldn\'t depend on it, even for the introduction."' },
          { n: 4, q: 'the journal article', a: 'B', x: '"very mathematical... will go over their heads". F is a distractor – the library has it online.' },
          { n: 5, q: 'the interview', a: 'D', x: '"she works for the company... present it in a positive light" = may not be objective.' }
        ]
      }]
    },

    /* ---------- Part 4: Note completion lecture ---------- */
    {
      id: 'l-notes', type: 'form', part: 4, title: 'Part 4 – Lecture: Urban Heat Islands (Note completion)', level: 'Band 6–8',
      script: [
        N('Part 4. You will hear a lecture about urban heat islands. First, you have some time to look at questions 1 to 10.'),
        PAUSE(35, 'Read questions 1 to 10'),
        { s: 'Lecturer', g: 'f', t: 'Good morning. Today I\'m going to talk about a phenomenon known as the urban heat island. Put simply, this describes the way in which cities are significantly warmer than the rural areas that surround them. On a summer evening, the difference can be as much as seven degrees.' },
        { s: 'Lecturer', g: 'f', t: 'So what causes it? The first factor is the materials cities are built from. Dark surfaces, such as roads and roofs, absorb a great deal of the sun\'s energy during the day and release it slowly at night, which keeps the city warm long after sunset.' },
        { s: 'Lecturer', g: 'f', t: 'Second, cities generally lack vegetation. Plants cool the air around them by releasing water through their leaves, a process similar to sweating. When we replace fields and forests with concrete, we lose this natural cooling.' },
        { s: 'Lecturer', g: 'f', t: 'A third cause is the heat produced directly by human activity. Vehicles, air-conditioning units and factories all release heat into the urban environment. And finally, the shape of the city matters. Tall buildings close together trap heat and block the wind, which would otherwise carry warm air away.' },
        { s: 'Lecturer', g: 'f', t: 'Moving on to the effects. The most obvious is that people use far more electricity for cooling, which of course increases emissions if that electricity comes from fossil fuels. There are also serious health consequences. During heatwaves, the risk of heat-related illness rises sharply, especially among elderly people. Higher temperatures also speed up the chemical reactions that produce smog, so air quality becomes poorer.' },
        { s: 'Lecturer', g: 'f', t: 'Finally, what can be done? One of the simplest solutions is the so-called cool roof, which is painted white so that it reflects sunlight rather than absorbing it. Green roofs, covered with plants, are another option. Planting trees along streets is also highly effective. And some cities are now installing permeable pavements, which let rainwater soak through. As that water evaporates, it cools the surface.' },
        { s: 'Lecturer', g: 'f', t: 'In the next lecture, we\'ll look at some case studies of cities that have put these measures into practice.' },
        N('That is the end of Part 4.')
      ],
      groups: [{
        kind: 'gap', maxWords: 1, instructions: 'Complete the notes below. Write <b>ONE WORD ONLY</b> for each answer.',
        text: `<div class="card" style="margin:0"><h4 class="mt0">Urban Heat Islands</h4>
<p><b>Definition:</b> cities are warmer than surrounding [[1]] areas (up to 7°C on summer evenings)</p>
<p><b>Causes</b><br>• dark surfaces, e.g. roads and [[2]], absorb heat<br>• lack of [[3]] means less natural cooling<br>• heat from vehicles, air-conditioning and [[4]]<br>• tall buildings trap heat and block the [[5]]</p>
<p><b>Effects</b><br>• greater use of [[6]] for cooling<br>• higher risk of heat-related [[7]], especially for the elderly<br>• poorer air [[8]]</p>
<p><b>Solutions</b><br>• "cool roofs" painted [[9]]<br>• green roofs and street trees<br>• permeable pavements allow [[10]] to soak through</p></div>`,
        questions: [
          { n: 1, a: 'rural', x: '"warmer than the rural areas that surround them".' },
          { n: 2, a: 'roofs', x: '"Dark surfaces, such as roads and roofs".' },
          { n: 3, a: 'vegetation|plants', x: '"cities generally lack vegetation".' },
          { n: 4, a: 'factories', x: '"Vehicles, air-conditioning units and factories".' },
          { n: 5, a: 'wind', x: '"trap heat and block the wind".' },
          { n: 6, a: 'electricity', x: '"people use far more electricity for cooling".' },
          { n: 7, a: 'illness', x: '"heat-related illness".' },
          { n: 8, a: 'quality', x: '"air quality becomes poorer".' },
          { n: 9, a: 'white', x: '"painted white so that it reflects sunlight".' },
          { n: 10, a: 'rainwater', x: '"let rainwater soak through".' }
        ]
      }]
    },

    /* ---------- Part 2: Sentence completion + short answer ---------- */
    {
      id: 'l-sentence', type: 'sentence', part: 2, title: 'Part 2 – Radio: Changes to the Farmers\' Market (Sentence completion & short answer)', level: 'Band 5.5–7',
      script: [
        N('Part 2. You will hear a local radio presenter talking about changes to a farmers\' market. First, look at questions 1 to 7.'),
        PAUSE(30, 'Read questions 1 to 7'),
        { s: 'Presenter', g: 'm', t: 'And now some news for food lovers. The Saturday farmers\' market, which has been held in the Bridge Street car park for the last twelve years, is moving. From March, you\'ll find it in Victoria Square, right in the centre of town. The organisers say the square is more attractive and has much better access for wheelchair users.' },
        { s: 'Presenter', g: 'm', t: 'Opening times are changing slightly, too. The market will still open at eight in the morning, but instead of closing at two, as it does now, it will close at one p.m. Apparently very few customers arrived after one o\'clock, so stallholders asked to finish earlier.' },
        { s: 'Presenter', g: 'm', t: 'The rules for sellers remain strict. Every stallholder must grow, raise or make what they sell themselves, and they must come from within fifty kilometres of the town. The organisers are proud that nothing travels further than that.' },
        { s: 'Presenter', g: 'm', t: 'There\'s also something new. On the first Saturday of every month, there will be a cookery demonstration by a chef from one of our local restaurants, using ingredients from the market.' },
        { s: 'Presenter', g: 'm', t: 'Visitors are reminded that, as of this year, plastic bags have been banned at the market, so do remember to bring your own reusable bags or baskets.' },
        { s: 'Presenter', g: 'm', t: 'As for parking, there\'s no parking in Victoria Square itself, but you can park free of charge in the Station Road car park, which is just a five-minute walk away. Parking there is free for two hours on Saturdays; after that, normal charges apply.' },
        N('That is the end of the section.')
      ],
      groups: [
        {
          kind: 'gap', maxWords: 2, instructions: 'Complete the sentences below. Write <b>NO MORE THAN TWO WORDS AND/OR A NUMBER</b> for each answer.', questions: [
            { n: 1, q: 'From March, the market will be held in {} .', a: 'Victoria Square', x: 'Bridge Street car park is the old location.' },
            { n: 2, q: 'The market will now close at {} .', a: '1 pm|1pm|one pm|1 o\'clock|one o\'clock|1.00 pm|1:00 pm|1', x: 'It currently closes at two – the new time is one p.m.' },
            { n: 3, q: 'All sellers must come from within {} of the town.', a: '50 kilometres|fifty kilometres|50 km|50 kilometers|50km', x: '"within fifty kilometres of the town".' },
            { n: 4, q: 'Once a month there will be a {} by a local chef.', a: 'cookery demonstration|cooking demonstration', x: '"there will be a cookery demonstration".' }
          ]
        },
        {
          kind: 'gap', maxWords: 3, instructions: 'Answer the questions below. Write <b>NO MORE THAN THREE WORDS AND/OR A NUMBER</b> for each answer.', questions: [
            { n: 5, q: 'What has been banned at the market? {}', a: 'plastic bags', x: '"plastic bags have been banned".' },
            { n: 6, q: 'In which car park can visitors park free of charge? the {} car park', a: 'Station Road', x: '"you can park free of charge in the Station Road car park". There is no parking in Victoria Square itself.' },
            { n: 7, q: 'For how long is parking free on Saturdays? {}', a: 'two hours|2 hours', x: '"free for two hours on Saturdays".' }
          ]
        }
      ]
    }
  ];
})();

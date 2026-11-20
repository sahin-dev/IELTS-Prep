window.IELTS = window.IELTS || {};
(function () {
  const P = (paras, lab) => paras.map((t, i) => `<p>${lab ? `<span class="para-label">${String.fromCharCode(65 + i)}</span>` : ''}${t}</p>`).join('');
  const TFNG = ['TRUE', 'FALSE', 'NOT GIVEN'];
  const YNNG = ['YES', 'NO', 'NOT GIVEN'];
  const TFNG_INS = 'Do the following statements agree with the information given in the passage? Choose <b>TRUE</b> if the statement agrees with the information, <b>FALSE</b> if the statement contradicts the information, <b>NOT GIVEN</b> if there is no information on this.';
  const YNNG_INS = 'Do the following statements agree with the claims of the writer? Choose <b>YES</b> if the statement agrees with the claims of the writer, <b>NO</b> if the statement contradicts the claims of the writer, <b>NOT GIVEN</b> if it is impossible to say what the writer thinks about this.';
  const letters = (arr) => arr.map((t, i) => ({ v: String.fromCharCode(65 + i), t }));
  const roman = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x', 'xi'];

  IELTS.readingPractice = [
    /* ---------- 1. TRUE / FALSE / NOT GIVEN ---------- */
    {
      id: 'r-tfng', type: 'tfng', title: 'The Story of Paper Money', level: 'Band 5.5–7', time: 10,
      passageTitle: 'The Story of Paper Money',
      passage: P([
        'The earliest known paper money appeared in China during the Tang dynasty in the seventh century. It did not begin as an official currency. Instead, merchants who were tired of carrying heavy strings of copper coins on long trading journeys began leaving their coins with trusted agents in exchange for written receipts. These receipts, nicknamed "flying money" because they could blow away so easily, could be exchanged for coins in another city.',
        'The first true government-issued notes followed in the eleventh century under the Song dynasty. They were introduced in Sichuan province, where the local currency consisted of iron coins, which were even heavier and less valuable than copper ones. A single purchase of silk could require a pile of iron coins weighing more than the buyer. Unsurprisingly, the printed notes, known as <i>jiaozi</i>, were quickly accepted.',
        'When the Venetian traveller Marco Polo visited China in the thirteenth century, he was astonished to find the Mongol rulers paying for goods with paper made from the bark of mulberry trees. His descriptions were met with disbelief in Europe. Yet the Chinese experiment did not last. Excessive printing caused severe inflation, and by the mid-fifteenth century the Ming government had abandoned paper money altogether.',
        'Europe was slow to follow. The first European banknotes were issued in 1661 by Stockholms Banco in Sweden. The bank, however, printed far more notes than it could support with coins, and within a few years it had collapsed. In England, the Bank of England was founded in 1694 and soon began issuing notes. At first these were handwritten by the bank\'s cashiers and signed individually; fully printed notes did not appear until 1855.',
        'Today, many countries have replaced paper with plastic. Australia introduced the first polymer notes in 1988, and they are now used in dozens of countries because they last longer and are more difficult to counterfeit. Some economists predict that digital payments will make cash disappear entirely. However, the evidence is mixed: in several countries, the total value of cash in circulation has actually risen in recent years, even as card payments have grown.'
      ]),
      groups: [{
        kind: 'choice', choices: TFNG, instructions: TFNG_INS, questions: [
          { n: 1, q: 'Paper money was first created by traders rather than by a government.', a: 'TRUE', x: 'Paragraph 1: "It did not begin as an official currency. Instead, merchants..." – traders = merchants.' },
          { n: 2, q: 'Iron coins were lighter than copper coins.', a: 'FALSE', x: 'Paragraph 2: iron coins "were even heavier and less valuable than copper ones".' },
          { n: 3, q: 'Marco Polo was the first European to visit China.', a: 'NOT GIVEN', x: 'The passage says he visited and was astonished, but never says he was the first European there.' },
          { n: 4, q: 'The Ming government stopped using paper money because of rising prices.', a: 'TRUE', x: '"Excessive printing caused severe inflation (= rising prices), and... the Ming government had abandoned paper money".' },
          { n: 5, q: 'Stockholms Banco successfully issued notes for several decades.', a: 'FALSE', x: '"within a few years it had collapsed" contradicts "several decades".' },
          { n: 6, q: 'The earliest Bank of England notes were written by hand.', a: 'TRUE', x: '"At first these were handwritten by the bank\'s cashiers".' },
          { n: 7, q: 'Polymer notes are cheaper to produce than paper notes.', a: 'NOT GIVEN', x: 'The passage mentions durability and security, but not production cost. Classic NOT GIVEN – a plausible idea that the text never addresses.' },
          { n: 8, q: 'The amount of cash in use has fallen in every country.', a: 'FALSE', x: '"in several countries, the total value of cash in circulation has actually risen" – contradicts "every country". Watch extreme words like every/all.' }
        ]
      }]
    },

    /* ---------- 2. YES / NO / NOT GIVEN ---------- */
    {
      id: 'r-ynng', type: 'ynng', title: 'In Defence of Boredom', level: 'Band 6–7.5', time: 10,
      passageTitle: 'In Defence of Boredom',
      passage: P([
        'Modern life appears to have been designed to eliminate boredom. The smartphone fills every idle moment – the queue at the bank, the wait for a train, even the few seconds at a traffic light. Many parents, meanwhile, feel obliged to schedule every hour of their children\'s week with lessons, clubs and organised activities. I believe this is a serious mistake, and that we have lost something valuable in our rush to keep ourselves occupied.',
        'Psychologists have long regarded boredom as an unpleasant state, and some studies have linked chronic boredom to risky behaviour, from overeating to gambling. These findings are real and should not be dismissed. But they concern long-term, inescapable boredom – the kind experienced by prisoners or by workers trapped in repetitive jobs – not the brief periods of idleness that most of us now work so hard to avoid.',
        'Short spells of boredom, by contrast, appear to stimulate creative thought. In one well-known experiment, participants who first completed a deliberately dull task – copying numbers from a telephone directory – later produced more ideas in a creativity test than those who went straight to the test. It would be unwise to build grand theories on a single study, yet the result fits comfortably with what many writers and artists have long reported: that their best ideas arrive when they are doing nothing in particular.',
        'We should not expect technology companies to help. Their business models depend on capturing our attention for as long as possible, and it would be naive to imagine they will encourage us to switch off. Some campaigners have called for legislation limiting addictive design features such as endless scrolling. Whether such laws would work is open to question, but individuals need not wait for governments to act.',
        'Schools, too, have a role. Rather than filling every lesson with constant stimulation, teachers might allow pupils a few minutes simply to think. This is not an argument for dull teaching – a badly prepared lesson remains a bad lesson – but for recognising that a quiet mind is not an empty one.'
      ]),
      groups: [{
        kind: 'choice', choices: YNNG, instructions: YNNG_INS, questions: [
          { n: 1, q: 'Parents should not plan all of their children\'s free time.', a: 'YES', x: 'The writer calls scheduling "every hour" of children\'s week "a serious mistake".' },
          { n: 2, q: 'Research linking boredom with risky behaviour is unreliable.', a: 'NO', x: '"These findings are real and should not be dismissed." The writer only says they concern a different kind of boredom.' },
          { n: 3, q: 'The telephone-directory experiment proves that boredom causes creativity.', a: 'NO', x: '"It would be unwise to build grand theories on a single study" – the writer does not accept it as proof.' },
          { n: 4, q: 'Artists experience boredom more often than other people.', a: 'NOT GIVEN', x: 'Artists\' reports are mentioned, but the writer makes no comparison of how often artists are bored.' },
          { n: 5, q: 'Technology companies benefit from keeping users occupied.', a: 'YES', x: '"Their business models depend on capturing our attention".' },
          { n: 6, q: 'It is uncertain whether laws on addictive design would be effective.', a: 'YES', x: '"Whether such laws would work is open to question" = uncertain.' },
          { n: 7, q: 'Teachers should make lessons less interesting.', a: 'NO', x: '"This is not an argument for dull teaching".' },
          { n: 8, q: 'Most schools already give pupils enough time to reflect.', a: 'NOT GIVEN', x: 'The writer suggests schools could do more but gives no view on what most schools currently do.' }
        ]
      }]
    },

    /* ---------- 3. MULTIPLE CHOICE ---------- */
    {
      id: 'r-mcq', type: 'mcq', title: 'Harvesting Water from Fog', level: 'Band 6–7', time: 12,
      passageTitle: 'Harvesting Water from Fog',
      passage: P([
        'In some of the driest places on Earth, rain may not fall for years, yet the air is regularly filled with thick coastal fog. For centuries, communities in such regions have relied on wells, distant rivers or expensive deliveries of water by truck. Fog harvesting offers an alternative that is remarkably simple: large vertical nets are stretched between poles on hillsides facing the wind. As fog drifts through, tiny droplets collect on the mesh, merge into larger drops and run down into a gutter, from which pipes carry the water to storage tanks.',
        'Engineers did not invent the principle. The Namib Desert beetle survives in one of the world\'s harshest environments by standing on sand dunes at dawn, tilting its body into the wind. Water from the fog gathers on the bumps of its hard back and rolls down towards its mouth. Researchers studying the insect\'s shell have used its surface pattern to design materials that capture water more efficiently than ordinary plastic mesh.',
        'Early fog-harvesting projects produced mixed results. In several villages, the nets worked well at first but fell into disrepair within a few years. Investigations found that the technology itself was rarely the problem. Instead, projects had often been designed and installed by outside organisations with little input from local people, who were then unsure who was responsible for repairs or how the water should be shared. Later schemes that trained residents to maintain the nets, and that involved them in planning from the start, have proved far more durable.',
        'The quantity of water a net collects varies greatly. The most important factor is the frequency and density of the fog, but the speed of the wind matters too: if it is too gentle, little fog passes through the mesh; if it is too strong, the nets may be damaged. The height of the site is also crucial, since fog often forms in a band at a particular altitude. On a good site, a single large net can provide several hundred litres per day.',
        'Fog harvesting will never supply a large city, and it depends on climatic conditions that may themselves change. Nevertheless, for small, isolated communities it can provide clean water at a fraction of the cost of other methods. Used alongside rainwater collection and careful water management, it is a modest but genuinely valuable tool.'
      ]),
      groups: [
        {
          kind: 'choice', instructions: 'Choose the correct letter, <b>A, B, C or D</b>.', questions: [
            { n: 1, q: 'According to the first paragraph, fog harvesting is attractive because', opts: ['it can be used in areas where rain is frequent.', 'it uses straightforward equipment.', 'it removes the need for storage tanks.', 'it has been used for centuries.'], a: 'B', x: '"Fog harvesting offers an alternative that is remarkably simple" = straightforward equipment. D refers to wells/rivers, not fog harvesting (trap).' },
            { n: 2, q: 'The writer mentions the Namib Desert beetle in order to', opts: ['show that some insects can survive without water.', 'compare insects with human engineers.', 'explain where the idea behind the technique occurs naturally.', 'describe a threat to fog-harvesting nets.'], a: 'C', x: '"Engineers did not invent the principle" – the beetle illustrates that nature already uses it. This is a "writer\'s purpose" question.' },
            { n: 3, q: 'What was the main reason why some early projects failed?', opts: ['The nets were made from poor materials.', 'The fog was not dense enough.', 'Local people had not been properly involved.', 'Repairs were too expensive.'], a: 'C', x: '"the technology itself was rarely the problem... designed and installed by outside organisations with little input from local people".' },
            { n: 4, q: 'What is the writer\'s overall view of fog harvesting?', opts: ['It could solve water shortages in major cities.', 'It is useful in certain circumstances.', 'It is too unreliable to be worthwhile.', 'It should replace rainwater collection.'], a: 'B', x: '"never supply a large city" (A wrong) but "for small, isolated communities... a modest but genuinely valuable tool" = useful in certain circumstances.' }
          ]
        },
        {
          kind: 'multi', instructions: 'Choose <b>TWO</b> letters, <b>A–E</b>.', questions: [
            { n: 5, q: 'Which TWO factors, apart from the amount of fog, affect how much water a net collects?', opts: ['the colour of the mesh', 'the strength of the wind', 'the number of people using the water', 'the altitude of the location', 'the temperature of the air'], a: ['B', 'D'], x: 'Paragraph 4: "the speed of the wind matters too" and "The height of the site is also crucial". Colour and temperature are never mentioned.' }
          ]
        }
      ]
    },

    /* ---------- 4. MATCHING HEADINGS ---------- */
    {
      id: 'r-headings', type: 'headings', title: 'Farming Upwards', level: 'Band 6–7.5', time: 12,
      passageTitle: 'Farming Upwards: The Promise and Problems of Vertical Farms',
      passage: P([
        'Vertical farming – growing crops in stacked layers inside buildings – is often presented as a futuristic invention. In fact, the idea has a long history. Architects in the early twentieth century sketched multi-storey "farm towers", and the term itself was used in a book published in 1915. What is new is not the concept but the technology that finally makes it practical: cheap sensors, efficient lighting and computer-controlled climates.',
        'Supporters point to a range of environmental gains. Because water in a sealed building can be captured and reused, a vertical farm may use up to 95 per cent less water than a field producing the same crop. The controlled environment keeps out insects, so pesticides are unnecessary, and crops can be grown all year round regardless of drought, frost or flood.',
        'The difficulty is light. In a field, sunlight is free; indoors, every photon must be produced by an electric lamp. Lighting and air-conditioning can account for more than half of a vertical farm\'s operating costs, and if that electricity comes from fossil fuels, the environmental case becomes far weaker. Critics calculate that growing wheat indoors would require so much energy that a single loaf of bread could cost many times its current price.',
        'These economics have proved fatal for several companies. During a period of enthusiastic investment, dozens of start-ups built enormous facilities, promising to transform agriculture. When energy prices rose sharply, a number of the best-known firms ran out of money and closed, leaving investors with heavy losses and buildings full of idle equipment.',
        'Yet the picture is not entirely bleak. LED lamps have become dramatically more efficient over the past decade, and researchers are learning to adjust the colour of the light so that plants grow faster using less energy. Robots now handle seeding and harvesting, reducing labour costs, while farms located beside solar or wind installations can use cheap renewable power when it is plentiful.',
        'Few experts now believe that vertical farms will replace conventional agriculture. Staple crops such as rice and wheat will continue to be grown in fields. But for fast-growing, high-value produce such as salad leaves and herbs, which spoil quickly and are expensive to transport, indoor farms close to cities may become an important complement to the traditional system.'
      ], true),
      groups: [{
        kind: 'select', instructions: 'The passage has six paragraphs, <b>A–F</b>. Choose the correct heading for each paragraph from the list of headings below.',
        boxTitle: 'List of Headings', options: [
          'A costly source of energy', 'Why some businesses have failed', 'An idea that is older than many think', 'Saving water and avoiding chemicals',
          'Government support for urban farms', 'Technical progress offering hope', 'A partner rather than a replacement', 'The taste of indoor crops', 'Consumers reject indoor-grown food'
        ].map((t, i) => ({ v: roman[i], t })),
        questions: [
          { n: 1, q: 'Paragraph A', a: 'iii', x: '"the idea has a long history... used in a book published in 1915".' },
          { n: 2, q: 'Paragraph B', a: 'iv', x: '"95 per cent less water... pesticides are unnecessary".' },
          { n: 3, q: 'Paragraph C', a: 'i', x: '"Lighting and air-conditioning can account for more than half of... operating costs".' },
          { n: 4, q: 'Paragraph D', a: 'ii', x: '"a number of the best-known firms ran out of money and closed".' },
          { n: 5, q: 'Paragraph E', a: 'vi', x: '"Yet the picture is not entirely bleak" + LEDs, robots, renewable power = technical progress.' },
          { n: 6, q: 'Paragraph F', a: 'vii', x: '"will not replace... an important complement" = partner, not replacement. Headings v, viii and ix are distractors.' }
        ]
      }]
    },

    /* ---------- 5. MATCHING INFORMATION ---------- */
    {
      id: 'r-matching-info', type: 'matching-info', title: 'A Clear History of Glass', level: 'Band 6–7.5', time: 12,
      passageTitle: 'A Clear History of Glass',
      passage: P([
        'According to a story told by the Roman writer Pliny, glass was discovered by accident when merchants landing on a beach rested their cooking pots on blocks of soda (a mineral used in trade). The heat of the fire melted the soda together with the sand beneath it, and streams of a strange transparent liquid flowed out. Historians doubt the tale – an open fire is unlikely to reach a high enough temperature – but it reflects a basic truth: glass is made largely from sand, heated with other substances until it melts.',
        'The oldest known glass objects are beads made in Mesopotamia more than four thousand years ago. For many centuries glass was a luxury, shaped slowly around a core of clay or poured into moulds. The great breakthrough came around the first century BCE, when craftsmen in the eastern Mediterranean discovered that molten glass could be inflated by blowing through a hollow tube. Glassblowing was far quicker than earlier methods, and within a few generations glass cups and bottles were common in ordinary Roman households.',
        'In medieval Europe, the city of Venice became the centre of fine glassmaking. In 1291 the authorities ordered all glass furnaces to be moved to the nearby island of Murano. The official reason was the danger of fire in a crowded city of wooden buildings, but the move also made it easier to protect the secrets of the trade. Glassmakers enjoyed high social status, yet they were forbidden to leave the republic, and those who fled abroad risked severe punishment.',
        'Why is glass transparent when the sand it is made from is not? The answer lies in its structure. In most solids, atoms are arranged in a regular pattern of crystals, and the boundaries between countless tiny crystals scatter light. Glass, however, cools so quickly that its atoms are frozen in a disordered arrangement, with no crystal boundaries. In addition, the electrons in glass cannot absorb the energy of visible light, which therefore passes straight through.',
        'Ordinary window glass and the toughened glass used in phone screens look similar but behave very differently. Window glass breaks into dangerous sharp pieces. Toughened glass, by contrast, is treated with heat or chemicals so that its surface is under compression; when it does break, it shatters into small, relatively harmless fragments. Today, glass is also drawn into hair-thin optical fibres which carry most of the world\'s internet traffic as pulses of light.',
        'Engineers expect the material\'s role to expand further. Within the next two decades, many specialists predict, the windows of office buildings will routinely generate electricity, using transparent coatings that convert part of the sunlight into power while still letting most of it through.'
      ], true),
      groups: [{
        kind: 'select', instructions: 'The passage has six paragraphs, <b>A–F</b>. Which paragraph contains the following information? <b>NB</b> You may use any letter more than once.',
        options: letters(['', '', '', '', '', '']).map(o => ({ v: o.v, t: 'Paragraph ' + o.v })), hideBox: true,
        questions: [
          { n: 1, q: 'a reason to doubt a traditional account', a: 'A', x: '"Historians doubt the tale – an open fire is unlikely to reach a high enough temperature".' },
          { n: 2, q: 'a description of restrictions placed on workers', a: 'C', x: '"they were forbidden to leave the republic".' },
          { n: 3, q: 'a comparison between two types of glass', a: 'E', x: 'Window glass vs toughened glass.' },
          { n: 4, q: 'a forecast about a future use of glass', a: 'F', x: '"Within the next two decades, many specialists predict..."' },
          { n: 5, q: 'an explanation of why light can pass through glass', a: 'D', x: '"Why is glass transparent...? The answer lies in its structure."' },
          { n: 6, q: 'a technique that made glass products more widely available', a: 'B', x: 'Glassblowing was quicker, so glass cups became "common in ordinary Roman households".' },
          { n: 7, q: 'a mention of glass being used in communication technology', a: 'E', x: '"optical fibres which carry most of the world\'s internet traffic" – E is used twice.' }
        ]
      }]
    },

    /* ---------- 6. MATCHING FEATURES ---------- */
    {
      id: 'r-matching-features', type: 'matching-features', title: 'How Do Migrating Birds Find Their Way?', level: 'Band 6.5–7.5', time: 12,
      passageTitle: 'How Do Migrating Birds Find Their Way?',
      passage: P([
        'Every autumn, billions of birds fly thousands of kilometres to their wintering grounds, often returning to the very same tree the following spring. How they navigate with such precision has puzzled scientists for generations, and today\'s researchers believe the answer involves not one sense but several. (The researchers named below are fictional, created for this practice text.)',
        'Dr Lena Hartmann spent ten years studying robins in specially built cages surrounded by electric coils. When she altered the magnetic field around the cages, the birds changed the direction in which they tried to fly. Her conclusion was that birds possess an internal compass sensitive to the Earth\'s magnetic field. She was careful to add, however, that a compass alone tells a bird which way is north, not where it is.',
        'This limitation was addressed by Professor Kwame Mensah, who argued that birds must also have a kind of "map". In experiments in which young and adult starlings were transported hundreds of kilometres off their usual route, the adults corrected their course towards their normal destination, whereas the young birds simply continued flying in their original direction. Mensah concluded that the ability to correct course is learned through experience rather than present from birth.',
        'Dr Sofia Ruiz approached the question from an unexpected angle: smell. She found that seabirds whose sense of smell had been temporarily blocked became disoriented over open ocean, while those with a normal sense of smell found their way home without difficulty. Ruiz suggested that the ocean contains a "smell landscape" that birds can read. Many colleagues were initially sceptical, but her results have since been repeated by other teams.',
        'Professor Ian Douglas has focused on the night sky. By releasing songbirds in a planetarium, he showed that they orient themselves by the pattern of stars rotating around the Pole Star. Interestingly, birds raised under an artificial sky that rotated around a different star used that star instead, which Douglas took as evidence that the star compass is acquired when young.',
        'Dr Mei Tanaka has warned that modern life may be interfering with all these systems. Her surveys show that artificial lighting in cities attracts and confuses birds flying at night, causing millions of fatal collisions with buildings every year. She has campaigned for skyscrapers to switch off unnecessary lights during the main migration seasons.'
      ]),
      groups: [{
        kind: 'select', instructions: 'Look at the following statements and the list of researchers below. Match each statement with the correct researcher, <b>A–E</b>. <b>NB</b> You may use any letter more than once.',
        boxTitle: 'List of Researchers', showText: true,
        options: letters(['Lena Hartmann', 'Kwame Mensah', 'Sofia Ruiz', 'Ian Douglas', 'Mei Tanaka']),
        questions: [
          { n: 1, q: 'Birds\' navigational skill may be harmed by human activity.', a: 'E', x: 'Tanaka: artificial lighting "attracts and confuses birds".' },
          { n: 2, q: 'Inexperienced birds are unable to adjust when moved away from their route.', a: 'B', x: 'Mensah: "the young birds simply continued flying in their original direction".' },
          { n: 3, q: 'Knowing direction is not enough to establish position.', a: 'A', x: 'Hartmann: "a compass alone tells a bird which way is north, not where it is".' },
          { n: 4, q: 'Findings that were first doubted have since been confirmed.', a: 'C', x: 'Ruiz: "colleagues were initially sceptical, but her results have since been repeated".' },
          { n: 5, q: 'A navigational reference point is learned early in life.', a: 'D', x: 'Douglas: "the star compass is acquired when young".' },
          { n: 6, q: 'Birds respond to changes in magnetism.', a: 'A', x: 'Hartmann altered the magnetic field and "the birds changed the direction" – A used twice.' },
          { n: 7, q: 'Practical measures could reduce bird deaths.', a: 'E', x: 'Tanaka campaigned to switch off lights.' }
        ]
      }]
    },

    /* ---------- 7. MATCHING SENTENCE ENDINGS ---------- */
    {
      id: 'r-sentence-endings', type: 'sentence-endings', title: 'Is Handwriting Disappearing?', level: 'Band 6–7', time: 10,
      passageTitle: 'Is Handwriting Disappearing?',
      passage: P([
        'In many classrooms, the pencil is losing ground to the keyboard. Several education systems have reduced the time devoted to teaching joined-up handwriting, arguing that typing is a more useful skill in the modern workplace. Surveys of adults suggest that many now go weeks without writing anything longer than a shopping list by hand.',
        'Yet a growing body of research suggests that something is lost when handwriting disappears. In one study, university students who took lecture notes by hand remembered the content better a week later than those who typed. The researchers concluded that because writing by hand is slower, students were forced to summarise ideas in their own words, whereas typists tended to copy the lecturer\'s words without processing them.',
        'Handwriting also appears to support early reading. Children who practised forming letters by hand were better at recognising those letters than children who learned them by pressing keys. Brain scans showed that writing letters activated regions associated with reading, an effect not seen in the typing group.',
        'None of this means that schools should abandon technology. Typing is fast, easy to edit and essential for most jobs, and for children with certain physical difficulties a keyboard can be liberating. Most researchers therefore recommend a balance: teach handwriting thoroughly in the early years and introduce typing as children grow older.'
      ]),
      groups: [{
        kind: 'select', instructions: 'Complete each sentence with the correct ending, <b>A–G</b>, below.',
        boxTitle: 'Endings', options: letters([
          'because it improves employment prospects.', 'because it requires them to rephrase information.', 'are linked to areas involved in reading.',
          'should be replaced completely by computers.', 'may find typing particularly helpful.', 'remember more of what they hear.', 'has become more popular among adults.'
        ]),
        questions: [
          { n: 1, q: 'Some education systems prefer typing to handwriting', a: 'A', x: '"typing is a more useful skill in the modern workplace".' },
          { n: 2, q: 'Handwritten notes help students learn', a: 'B', x: '"forced to summarise ideas in their own words" = rephrase.' },
          { n: 3, q: 'The brain regions activated by writing letters', a: 'C', x: '"activated regions associated with reading".' },
          { n: 4, q: 'Children with some physical difficulties', a: 'E', x: '"for children with certain physical difficulties a keyboard can be liberating".' },
          { n: 5, q: 'Students who write notes by hand tend to', a: 'F', x: 'They "remembered the content better" – D is the opposite of the passage; G is not stated.' }
        ]
      }]
    },

    /* ---------- 8. SENTENCE COMPLETION ---------- */
    {
      id: 'r-sentence-completion', type: 'sentence-completion', title: 'The Frozen Water Trade', level: 'Band 5.5–7', time: 10,
      passageTitle: 'The Frozen Water Trade',
      passage: P([
        'Before the invention of mechanical refrigeration, ice was a valuable commodity, harvested in winter and stored for use in summer. In the early nineteenth century, a young Boston businessman named Frederic Tudor had what most people considered an absurd idea: to ship ice from the frozen lakes of New England to the hot islands of the Caribbean.',
        'His first voyage, in 1806, was a financial disaster. Much of the cargo melted on the journey, and the people of the island of Martinique had no idea what to do with the ice that survived. Tudor was undeterred. Over the following years he experimented with different ways of insulating his cargo, eventually discovering that <b>sawdust</b>, a cheap by-product of the timber industry, was the most effective material. He also built specially designed storehouses at his destinations and taught local bartenders how to make chilled drinks, creating demand where none had existed.',
        'Harvesting technology improved too. Workers originally cut ice with axes, a slow and dangerous process. In the 1820s a horse-drawn <b>ice plough</b> was introduced, which cut the frozen surface of a lake into a grid of identical blocks. Uniform blocks could be packed tightly together, which reduced melting.',
        'By the 1850s, ice from New England was being shipped as far as India, and the trade employed thousands of workers. Ice also changed eating habits: meat and dairy products could be kept fresh for longer, and city dwellers began to keep wooden "iceboxes" in their kitchens. The trade finally declined in the early twentieth century, when factories that produced <b>artificial ice</b> became cheaper and more reliable, and pollution made natural ice from rivers increasingly unsafe.'
      ]),
      groups: [{
        kind: 'gap', maxWords: 2, instructions: 'Complete the sentences below. Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.',
        questions: [
          { n: 1, q: 'Tudor planned to send ice to the {} .', a: 'Caribbean', x: '"to ship ice... to the hot islands of the Caribbean".' },
          { n: 2, q: 'On Tudor\'s first voyage, a large part of the ice {} before arrival.', a: 'melted', x: '"Much of the cargo melted on the journey".' },
          { n: 3, q: 'Tudor found that {} was the best material for keeping ice cold.', a: 'sawdust', x: '"sawdust... was the most effective material".' },
          { n: 4, q: 'To increase sales, Tudor showed {} how to make cold drinks.', a: 'local bartenders|bartenders', x: '"taught local bartenders how to make chilled drinks".' },
          { n: 5, q: 'The {} made it possible to cut blocks of the same size.', a: 'ice plough|ice plow', x: '"a horse-drawn ice plough... cut... a grid of identical blocks".' },
          { n: 6, q: 'People in cities started using {} to store food at home.', a: 'iceboxes|wooden iceboxes', x: '"city dwellers began to keep wooden \'iceboxes\'".' },
          { n: 7, q: 'Natural ice became dangerous to use because of {} .', a: 'pollution', x: '"pollution made natural ice... increasingly unsafe".' }
        ]
      }]
    },

    /* ---------- 9. SUMMARY / FLOW-CHART COMPLETION ---------- */
    {
      id: 'r-summary', type: 'summary', title: 'Why Coral Turns White', level: 'Band 6–7.5', time: 12,
      passageTitle: 'Why Coral Turns White',
      passage: P([
        'Coral reefs cover less than one per cent of the ocean floor, yet they support roughly a quarter of all marine species. The reef itself is built by tiny animals called polyps, which produce hard skeletons of limestone. Over thousands of years, these skeletons accumulate to form vast structures.',
        'The polyps depend on a close partnership with microscopic algae that live inside their tissues. The algae use sunlight to produce sugars through photosynthesis, and they pass most of this food to the coral. In return, they receive shelter and the nutrients contained in the coral\'s waste. The algae also give coral its brilliant colours.',
        'This partnership is extremely sensitive to temperature. When the water becomes just one or two degrees warmer than the normal summer maximum for several weeks, the algae begin to produce toxic substances. The coral responds by expelling them. Without its algae, the coral\'s transparent tissue reveals the white skeleton underneath – a process known as bleaching.',
        'Bleached coral is not dead, but it is starving. If temperatures return to normal quickly, new algae can colonise the coral and it may recover within months. If the heat continues, however, the coral will die and the reef will gradually be covered by seaweed. Reefs that have been weakened in this way are also more vulnerable to disease and storm damage.',
        'Scientists are exploring ways of helping reefs survive. Some are breeding corals that tolerate higher temperatures, while others are growing young corals in underwater nurseries before transplanting them onto damaged reefs. All agree, however, that these methods can only buy time: in the long run, the survival of reefs depends on limiting the rise in ocean temperatures.'
      ]),
      groups: [
        {
          kind: 'gap', instructions: 'Complete the summary using the list of words, <b>A–I</b>, below.',
          boxTitle: 'Word list', options: letters(['shelter', 'food', 'colour', 'waste', 'light', 'skeletons', 'minerals', 'protection', 'heat']), showText: true,
          text: 'Coral reefs are formed from the [[1]] of small creatures called polyps. These polyps live in partnership with algae, which convert [[2]] into sugars and provide the coral with most of its [[3]]. The coral, in turn, offers the algae a safe home and nutrients found in its [[4]]. The algae are also responsible for the coral\'s [[5]].',
          questions: [
            { n: 1, a: 'F', x: '"polyps, which produce hard skeletons".' },
            { n: 2, a: 'E', x: '"The algae use sunlight to produce sugars" – light = sunlight.' },
            { n: 3, a: 'B', x: '"they pass most of this food to the coral".' },
            { n: 4, a: 'D', x: '"the nutrients contained in the coral\'s waste".' },
            { n: 5, a: 'C', x: '"The algae also give coral its brilliant colours".' }
          ]
        },
        {
          kind: 'gap', maxWords: 2, instructions: 'Complete the flow-chart below. Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.',
          text: `<div style="display:flex;flex-direction:column;gap:6px;max-width:520px">
<div class="card" style="margin:0">Water stays 1–2 degrees above normal for several weeks</div><div class="center">&darr;</div>
<div class="card" style="margin:0">Algae start producing [[6]]</div><div class="center">&darr;</div>
<div class="card" style="margin:0">Coral expels the algae; its white [[7]] becomes visible</div><div class="center">&darr;</div>
<div class="card" style="margin:0"><b>If temperatures fall quickly:</b> new algae arrive and coral recovers within [[8]]<br><b>If heat continues:</b> coral dies and the reef is covered by [[9]]</div></div>`,
          questions: [
            { n: 6, a: 'toxic substances', x: '"the algae begin to produce toxic substances".' },
            { n: 7, a: 'skeleton', x: '"reveals the white skeleton underneath".' },
            { n: 8, a: 'months', x: '"it may recover within months".' },
            { n: 9, a: 'seaweed', x: '"the reef will gradually be covered by seaweed".' }
          ]
        }
      ]
    },

    /* ---------- 10. DIAGRAM LABELLING ---------- */
    {
      id: 'r-diagram', type: 'diagram', title: 'The Windcatcher', level: 'Band 6–7', time: 10,
      passageTitle: 'The Windcatcher: Ancient Air-conditioning',
      passage: P([
        'Long before electric air-conditioning, builders in the hot, dry regions of the Middle East developed an ingenious way of cooling houses. The windcatcher is a tall tower rising above the roof of a building. At the top of the tower are several tall, narrow openings, known as <b>vents</b>, which face in different directions so that wind from any side can be captured.',
        'Inside, the tower is divided by thin walls called <b>partitions</b> into several vertical shafts. When wind blows against the tower, it enters the shaft facing the wind and is forced downwards into the building, while the shafts on the sheltered side allow warm air to be drawn out.',
        'The cooling effect can be greatly increased with water. In many houses, the cool air flowing down the tower passes over a shallow <b>pool</b> set into the floor of the main hall. As the water evaporates, it absorbs heat, lowering the temperature of the room. In the most sophisticated designs, air is first drawn through an underground water channel called a <b>qanat</b>, where it is cooled by the surrounding earth and water before rising into the house.',
        'Meanwhile, hot air, which is lighter, rises towards the ceiling. Many traditional houses have a dome above the main hall with a small opening at its highest point, known as the <b>lantern</b>, through which this warm air escapes. Builders often coated the outside walls with a thick layer of <b>mud plaster</b>, which kept heat from entering during the day.'
      ]),
      groups: [{
        kind: 'gap', maxWords: 1, instructions: 'Label the diagram below. Choose <b>ONE WORD ONLY</b> from the passage for each answer.',
        figure: {
          type: 'svg', caption: 'A house with a windcatcher (simplified)', svg: `<svg viewBox="0 0 560 330" width="560" style="color:var(--text)" font-family="inherit">
<defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#2563eb"/></marker></defs>
<rect x="40" y="170" width="380" height="110" fill="none" stroke="currentColor" stroke-width="2"/>
<path d="M150,170 Q210,105 270,170" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="203" y="118" width="14" height="10" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="330" y="40" width="70" height="130" fill="none" stroke="currentColor" stroke-width="2"/>
<line x1="365" y1="55" x2="365" y2="170" stroke="currentColor" stroke-width="1.5"/>
<rect x="335" y="48" width="12" height="30" fill="#93c5fd"/><rect x="383" y="48" width="12" height="30" fill="#93c5fd"/>
<rect x="150" y="268" width="120" height="10" fill="#60a5fa"/>
<path d="M30,300 L520,300 L520,318 L30,318" fill="none" stroke="#60a5fa" stroke-width="2" stroke-dasharray="6 4"/>
<line x1="20" y1="60" x2="330" y2="60" stroke="#2563eb" stroke-width="2" marker-end="url(#ar)"/>
<line x1="350" y1="90" x2="350" y2="250" stroke="#2563eb" stroke-width="2" marker-end="url(#ar)"/>
<line x1="345" y1="255" x2="280" y2="262" stroke="#2563eb" stroke-width="2" marker-end="url(#ar)"/>
<line x1="210" y1="160" x2="210" y2="105" stroke="#ea580c" stroke-width="2" marker-end="url(#ar)"/>
<rect x="40" y="170" width="6" height="110" fill="#a16207"/>
<g font-size="13" font-weight="700" fill="currentColor">
<line x1="395" y1="60" x2="460" y2="40" stroke="currentColor"/><text x="465" y="40">1 ________</text>
<line x1="365" y1="120" x2="460" y2="120" stroke="currentColor"/><text x="465" y="124">2 ________</text>
<line x1="210" y1="272" x2="210" y2="296" stroke="currentColor"/><text x="120" y="296" font-size="12">3 ________ (in floor)</text>
<line x1="470" y1="309" x2="470" y2="290" stroke="currentColor"/><text x="420" y="285">4 ________</text>
<line x1="210" y1="118" x2="150" y2="80" stroke="currentColor"/><text x="60" y="78">5 ________</text>
<line x1="43" y1="230" x2="15" y2="200" stroke="currentColor"/><text x="5" y="194" font-size="12">6 ___</text>
</g><text x="20" y="52" font-size="11" fill="#2563eb">wind</text><text x="222" y="100" font-size="11" fill="#ea580c">warm air out</text></svg>` },
        questions: [
          { n: 1, q: 'openings at the top of the tower:', a: 'vents', x: 'Paragraph 1: "openings, known as vents".' },
          { n: 2, q: 'thin walls dividing the tower:', a: 'partitions', x: 'Paragraph 2.' },
          { n: 3, q: 'water in the floor of the main hall:', a: 'pool', x: 'Paragraph 3: "a shallow pool set into the floor".' },
          { n: 4, q: 'underground water channel:', a: 'qanat', x: 'Paragraph 3.' },
          { n: 5, q: 'opening at the top of the dome:', a: 'lantern', x: 'Paragraph 4.' },
          { n: 6, q: 'coating on outside walls (__ plaster):', a: 'mud', x: '"a thick layer of mud plaster" – only ONE WORD is needed because "plaster" is given.' }
        ]
      }]
    },

    /* ---------- 11. SHORT ANSWER ---------- */
    {
      id: 'r-short-answer', type: 'short-answer', title: 'Wiring the Ocean', level: 'Band 5.5–7', time: 10,
      passageTitle: 'Wiring the Ocean: The First Transatlantic Cable',
      passage: P([
        'In the mid-nineteenth century, a message between London and New York took around ten days, travelling by steamship. The American businessman Cyrus Field became convinced that a telegraph cable laid across the floor of the Atlantic Ocean could reduce this to minutes. Many scientists thought the idea impossible; others doubted that an electrical signal could travel so far without fading.',
        'After two failed attempts, in which the cable snapped and was lost in deep water, the first complete line was finished in August 1858. Celebrations broke out on both sides of the ocean, and Queen Victoria sent a message of congratulation to the American president. The signal, however, was extremely weak, and her message of fewer than a hundred words took around sixteen hours to transmit.',
        'In an attempt to improve the signal, the project\'s chief electrician applied much higher voltages to the cable. The insulation was damaged, and after only about three weeks of operation the line fell silent. Public enthusiasm turned to anger, and some newspapers even suggested that the whole project had been a fraud.',
        'Field refused to give up. The solution came in the form of the <i>Great Eastern</i>, the largest ship in the world at the time, which was big enough to carry the entire length of a new, thicker cable. In 1866 it successfully laid a line that worked reliably, and the crew even recovered and repaired a cable lost the previous year. Within a few decades, a network of undersea cables connected every continent – the ancestor of the fibre-optic cables that carry today\'s internet.'
      ]),
      groups: [{
        kind: 'gap', maxWords: 3, instructions: 'Answer the questions below. Choose <b>NO MORE THAN THREE WORDS AND/OR A NUMBER</b> from the passage for each answer.',
        questions: [
          { n: 1, q: 'How long did a message between London and New York take by ship? {}', a: 'around ten days|ten days|10 days|about ten days', x: '"a message... took around ten days, travelling by steamship".' },
          { n: 2, q: 'What happened to the cable in the first two attempts? It {}', a: 'snapped', x: '"the cable snapped and was lost in deep water".' },
          { n: 3, q: 'Who did Queen Victoria send a message to? {}', a: 'the American president|American president', x: 'Paragraph 2.' },
          { n: 4, q: 'What part of the cable was damaged by high voltage? {}', a: 'insulation|the insulation', x: '"The insulation was damaged".' },
          { n: 5, q: 'For how long did the 1858 cable operate? {}', a: 'about three weeks|three weeks|3 weeks', x: '"after only about three weeks of operation".' },
          { n: 6, q: 'Which ship laid the successful 1866 cable? {}', a: 'Great Eastern|the Great Eastern', x: 'Paragraph 4.' }
        ]
      }]
    },

    /* ---------- 12. MIXED: full passage ---------- */
    {
      id: 'r-mixed-1', type: 'mixed', title: 'Full Passage: The Psychology of Waiting in Line', level: 'Band 6–8', time: 20,
      passageTitle: 'The Psychology of Waiting in Line',
      passage: P([
        'Most people spend a surprising amount of their lives waiting – for buses, at supermarket checkouts, on the telephone for customer service. Estimates vary, but one frequently quoted figure suggests that the average person in a developed country spends between one and two years of their life in queues. Unsurprisingly, waiting is rarely enjoyable. What is more surprising is that our experience of a wait often has little to do with how long it actually lasts.',
        'This insight was put to practical use at an airport in the United States. Passengers had complained repeatedly about the time they spent waiting for their luggage at the baggage carousel. The airport responded by hiring more baggage handlers, which reduced the average wait to eight minutes – well within industry standards. Yet complaints continued. Managers then noticed that passengers spent only one minute walking from the plane to the baggage hall, and the remaining seven minutes standing still. Their solution was to move the arrival gates further away and route luggage to the most distant carousel. Passengers now walked for six minutes and waited for two. Complaints fell almost to zero.',
        'Psychologists explain this with the idea that "occupied time feels shorter than unoccupied time". It is for this reason that lifts often have mirrors beside them, and that restaurants hand customers a menu while they wait for a table. Even the act of giving people something to look at or read can significantly reduce frustration. The principle also helps explain why uncertainty is so damaging: a wait of unknown length feels longer than a known wait, which is why many transport systems now display the minutes until the next train.',
        'A sense of fairness is just as important. Researchers studying queues in banks found that customers were far more upset when someone who arrived after them was served first than they were by the length of the wait itself. This explains the popularity of the single "serpentine" line, in which one long queue feeds several counters. Although such lines do not usually reduce the average waiting time, they guarantee that people are served in the order in which they arrived, and customers consistently rate them as more satisfactory.',
        'Not all waiting is unpleasant, however. When people believe that what they are waiting for is valuable, a queue can even add to its appeal. Long lines outside a new restaurant act as a signal of quality, and some businesses have been accused of deliberately limiting entry to create a crowd on the pavement. The experience at the end of the wait matters too: studies suggest that people remember the final moments of a wait more clearly than the beginning, so a pleasant ending can colour the memory of the whole experience.',
        'Technology is changing the nature of waiting. Virtual queuing systems allow theme-park visitors to reserve a time slot on their phones rather than standing in line, and many restaurants send a text message when a table becomes available. These systems turn unoccupied time into free time. Yet they also raise new questions of fairness, as some systems allow customers to pay to move ahead of others – a practice which, the research suggests, may cause considerable resentment among those who cannot or will not pay.'
      ], true),
      groups: [
        {
          kind: 'choice', choices: TFNG, instructions: 'Questions 1–5. ' + TFNG_INS, questions: [
            { n: 1, q: 'Most people find waiting in queues enjoyable.', a: 'FALSE', x: 'A: "Unsurprisingly, waiting is rarely enjoyable."' },
            { n: 2, q: 'Hiring more baggage handlers stopped passengers complaining.', a: 'FALSE', x: 'B: "Yet complaints continued."' },
            { n: 3, q: 'After the gates were moved, passengers spent most of their time walking rather than standing.', a: 'TRUE', x: 'B: "Passengers now walked for six minutes and waited for two."' },
            { n: 4, q: 'Mirrors are placed beside lifts to make waiting feel shorter.', a: 'TRUE', x: 'C: occupied time feels shorter; "It is for this reason that lifts often have mirrors".' },
            { n: 5, q: 'Waiting without knowing how long it will last is more stressful than a longer known wait.', a: 'NOT GIVEN', x: 'C says a wait of unknown length feels longer than a known wait – but does not compare it with a <i>longer</i> known wait.' }
          ]
        },
        {
          kind: 'choice', instructions: 'Questions 6–8. Choose the correct letter, <b>A, B, C or D</b>.', questions: [
            { n: 6, q: 'According to paragraph D, customers prefer a single serpentine line because', opts: ['it shortens their wait.', 'it ensures they are served in turn.', 'it gives them more counters to choose from.', 'it is easier for staff to manage.'], a: 'B', x: '"they guarantee that people are served in the order in which they arrived". A is wrong: "do not usually reduce the average waiting time".' },
            { n: 7, q: 'The writer refers to queues outside restaurants to show that', opts: ['restaurants should take reservations.', 'people are willing to wait for food.', 'a wait can make something seem more desirable.', 'businesses often mislead customers.'], a: 'C', x: '"a queue can even add to its appeal... act as a signal of quality". D is too strong – they "have been accused".' },
            { n: 8, q: 'What is the writer\'s concern about virtual queues?', opts: ['They are too complicated to use.', 'Paying to skip the line may be seen as unfair.', 'They increase unoccupied time.', 'Theme parks have stopped using them.'], a: 'B', x: 'F: "some systems allow customers to pay to move ahead... may cause considerable resentment".' }
          ]
        },
        {
          kind: 'gap', maxWords: 2, instructions: 'Questions 9–11. Complete the sentences. Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.', questions: [
            { n: 9, q: 'Restaurants give waiting customers a {} to keep them occupied.', a: 'menu', x: 'Paragraph C.' },
            { n: 10, q: 'Bank customers were most annoyed by a lack of {} in the queue.', a: 'fairness', x: 'D: "A sense of fairness is just as important..."' },
            { n: 11, q: 'People recall the {} of a wait better than its start.', a: 'final moments', x: 'E: "people remember the final moments of a wait more clearly than the beginning".' }
          ]
        },
        {
          kind: 'select', instructions: 'Questions 12–13. Which paragraph, <b>A–F</b>, contains the following information?', hideBox: true,
          options: ['A', 'B', 'C', 'D', 'E', 'F'].map(v => ({ v, t: v })),
          questions: [
            { n: 12, q: 'an example of a problem solved without reducing waiting time', a: 'B', x: 'The airport: total time the same, but complaints fell.' },
            { n: 13, q: 'a reference to phones being used to avoid standing in line', a: 'F', x: '"reserve a time slot on their phones".' }
          ]
        }
      ]
    },

    /* ---------- 13. GENERAL TRAINING Section 1/2 ---------- */
    {
      id: 'r-gt-1', type: 'gt', title: 'General Training: Evening Courses (Section 1 style)', level: 'GT Band 5.5–7', time: 10,
      passageTitle: 'Riverside Community College – Evening Courses',
      passage: P([
        '<b>Digital Photography for Beginners</b> – Learn to use the manual settings on your camera and edit your photos on a computer. Bring your own camera (smartphones are not suitable). Tuesdays, 7–9 pm, 8 weeks. Fee: £120. Equipment for editing is provided in the computer lab.',
        '<b>Conversational Spanish</b> – A relaxed course for people who have studied some Spanish before and want to build confidence in speaking. Not suitable for complete beginners. Mondays and Thursdays, 6.30–8 pm, 10 weeks. Fee: £150, including course book.',
        '<b>Furniture Restoration</b> – Bring an old chair or small table and learn how to repair and refinish it. All tools are supplied, but participants must pay for their own materials (approx. £30). Wednesdays, 6–9 pm, 6 weeks. Fee: £140. Maximum 8 students.',
        '<b>Start Your Own Business</b> – Practical advice on writing a business plan, finding funding and managing tax. Includes a free one-to-one session with a business adviser. Saturdays, 10 am–1 pm, 5 weeks. Fee: £95. Discount of 50% for anyone currently unemployed.',
        '<b>Healthy Cooking on a Budget</b> – Prepare nutritious meals for under £3 per person. Ingredients are included in the price, and you take home what you cook. Thursdays, 6–8.30 pm, 6 weeks. Fee: £110. Please tell us about any food allergies when booking.'
      ], true),
      groups: [
        {
          kind: 'select', instructions: 'Look at the five course descriptions, <b>A–E</b>. For which course are the following statements true? <b>NB</b> You may use any letter more than once.', hideBox: true,
          options: ['A', 'B', 'C', 'D', 'E'].map(v => ({ v, t: v })),
          questions: [
            { n: 1, q: 'Students have lessons twice a week.', a: 'B', x: 'Spanish: Mondays and Thursdays.' },
            { n: 2, q: 'Some people can pay a reduced fee.', a: 'D', x: '"Discount of 50% for anyone currently unemployed".' },
            { n: 3, q: 'Students must buy some items in addition to the course fee.', a: 'C', x: '"participants must pay for their own materials".' },
            { n: 4, q: 'Previous knowledge is required.', a: 'B', x: '"Not suitable for complete beginners".' },
            { n: 5, q: 'Students should provide personal health information.', a: 'E', x: '"tell us about any food allergies".' },
            { n: 6, q: 'The number of places is limited.', a: 'C', x: '"Maximum 8 students".' }
          ]
        },
        {
          kind: 'gap', maxWords: 3, instructions: 'Answer the questions. Choose <b>NO MORE THAN THREE WORDS AND/OR A NUMBER</b> from the text.', questions: [
            { n: 7, q: 'What type of device cannot be used on the photography course? {}', a: 'smartphones|smartphone', x: 'A: "smartphones are not suitable".' },
            { n: 8, q: 'What extra service does the business course offer? a free {}', a: 'one-to-one session', x: 'D.' },
            { n: 9, q: 'What is the maximum cost per person of the meals cooked? {}', a: '£3|3 pounds|under £3', x: 'E: "under £3 per person".' }
          ]
        }
      ]
    }
  ];
})();

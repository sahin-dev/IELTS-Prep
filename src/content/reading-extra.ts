import type { TestSet } from '@/lib/types';

const P = (paras: string[], lab?: boolean) => paras.map((t, i) => `<p>${lab ? `<span class="para-label">${String.fromCharCode(65 + i)}</span>` : ''}${t}</p>`).join('');
const letters = (arr: string[]) => arr.map((t, i) => ({ v: String.fromCharCode(65 + i), t }));
const roman = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x'];
const TFNG = ['TRUE', 'FALSE', 'NOT GIVEN'];
const YNNG = ['YES', 'NO', 'NOT GIVEN'];
const TFNG_INS = 'Do the following statements agree with the information given in the passage? Choose <b>TRUE</b> if the statement agrees with the information, <b>FALSE</b> if the statement contradicts the information, <b>NOT GIVEN</b> if there is no information on this.';
const YNNG_INS = 'Do the following statements agree with the claims of the writer? Choose <b>YES</b> if the statement agrees with the claims of the writer, <b>NO</b> if the statement contradicts the claims of the writer, <b>NOT GIVEN</b> if it is impossible to say what the writer thinks about this.';

export const readingExtra: TestSet[] = [
  /* ---------- Mock passage 2 (13 questions) ---------- */
  {
    id: 'r-mock-p2', type: 'mixed', title: 'Full Passage: Sleep Across the Animal Kingdom', level: 'Band 6–8', time: 20,
    passageTitle: 'Sleep Across the Animal Kingdom',
    passage: P([
      'Every animal that scientists have studied carefully appears to sleep in some form. This is surprising, because sleep looks like a dangerous habit: an animal that is unconscious cannot search for food, care for its young or escape from predators. If sleep served no essential purpose, evolution would surely have eliminated it long ago. Why it has survived in creatures as different as whales and worms remains one of biology\'s most persistent puzzles.',
      'Studying sleep in animals first requires agreement on what sleep is. In humans and other mammals, researchers can record the distinctive electrical patterns of the sleeping brain, but this is impossible for many small creatures. Biologists therefore rely on a set of behavioural signs: the animal is largely motionless, adopts a typical posture, is harder to wake than when merely resting, and – crucially – sleeps more than usual after being kept awake. This last feature, known as "rebound", distinguishes true sleep from simple inactivity.',
      'Using these criteria, scientists have found enormous variation in how much animals sleep. Some species of bat sleep for up to twenty hours a day, waking only around dusk to feed. At the other extreme, wild African elephants fitted with activity monitors slept for an average of just two hours a day, mostly standing up, making them the shortest sleepers among mammals yet recorded. On one occasion, an elephant herd went without sleep for forty-six hours while travelling away from a perceived threat.',
      'Some animals have found an ingenious compromise between rest and vigilance. Dolphins and many other marine mammals can sleep with one half of the brain while the other half stays awake. During this state, the eye connected to the waking half usually remains open, allowing the animal to watch for predators and to keep rising to the surface to breathe. Interestingly, fur seals use this "half-brain" sleep mainly when they are in the water; on land, where breathing is not a problem, they sleep with both halves at once.',
      'For years, scientists suspected that birds which cross oceans must also be able to sleep on the wing, but proof was lacking. The question was finally answered when researchers attached tiny devices recording brain activity to frigatebirds, seabirds that can remain in the air for weeks. The birds did indeed sleep while flying, often with one half of the brain at a time, but only in bursts lasting a few seconds and for less than three-quarters of an hour per day in total – compared with more than twelve hours a day when they were back on land.',
      'Even insects sleep. Fruit flies that are prevented from resting sleep longer the following day and perform poorly in learning tasks, just as sleep-deprived humans do. Because the fruit fly\'s genes are well understood and the insects breed quickly, they have become a valuable tool for laboratories investigating the genetic basis of sleep. Several genes that regulate sleep in flies have since been found to play a similar role in mammals.',
      'What, then, is sleep for? One influential theory holds that the sleeping brain clears away toxins which accumulate during waking hours, much as a city collects its rubbish at night. A second suggests that sleep strengthens memories by replaying and reorganising the experiences of the day. A third proposes that sleep evolved simply as a way of conserving energy at times when activity would be unproductive. None of these explanations accounts for every observation, and many researchers now believe that sleep may serve different purposes in different species.'
    ], true),
    groups: [
      {
        kind: 'select', instructions: 'Questions 1–6. The passage has seven paragraphs, <b>A–G</b>. Choose the correct heading for paragraphs <b>B–G</b> from the list of headings below.',
        boxTitle: 'List of Headings',
        options: ['How scientists decide whether an animal is asleep', 'The dangers of sleeping in the wild', 'Enormous differences in sleep duration', 'Resting one side of the brain at a time', 'Why humans need more sleep than animals', 'Evidence of sleep during long journeys', 'A small creature that helps genetic research', 'Competing explanations for a biological mystery', 'The effect of artificial light on animals'].map((t, i) => ({ v: roman[i], t })),
        questions: [
          { n: 1, q: 'Paragraph B', a: 'i', x: '"Biologists therefore rely on a set of behavioural signs..." – the paragraph is about defining/identifying sleep.' },
          { n: 2, q: 'Paragraph C', a: 'iii', x: '"enormous variation in how much animals sleep" – bats 20 hours vs elephants 2 hours.' },
          { n: 3, q: 'Paragraph D', a: 'iv', x: '"sleep with one half of the brain while the other half stays awake".' },
          { n: 4, q: 'Paragraph E', a: 'vi', x: 'Frigatebirds sleep while flying over oceans for weeks.' },
          { n: 5, q: 'Paragraph F', a: 'vii', x: 'Fruit flies "have become a valuable tool for laboratories investigating the genetic basis of sleep".' },
          { n: 6, q: 'Paragraph G', a: 'viii', x: 'Three theories, none of which "accounts for every observation". Heading ii describes paragraph A, which is not asked.' }
        ]
      },
      {
        kind: 'select', instructions: 'Questions 7–10. Match each statement with the correct animal, <b>A–E</b>.',
        boxTitle: 'Animals', showText: true,
        options: letters(['dolphins', 'frigatebirds', 'fruit flies', 'wild elephants', 'bats']),
        questions: [
          { n: 7, q: 'They sleep for most of the day.', a: 'E', x: '"Some species of bat sleep for up to twenty hours a day".' },
          { n: 8, q: 'They make up for lost sleep and show reduced learning ability.', a: 'C', x: '"Fruit flies that are prevented from resting sleep longer the following day and perform poorly in learning tasks".' },
          { n: 9, q: 'They were observed staying awake for almost two days.', a: 'D', x: '"went without sleep for forty-six hours".' },
          { n: 10, q: 'They sleep for very short periods while travelling.', a: 'B', x: '"in bursts lasting a few seconds" while flying. Dolphins also use half-brain sleep, but the passage does not say they sleep in short bursts while travelling.' }
        ]
      },
      {
        kind: 'gap', maxWords: 1, instructions: 'Questions 11–13. Complete the summary below. Choose <b>ONE WORD ONLY</b> from the passage for each answer.',
        text: '<p><b>Theories about the purpose of sleep</b><br>According to one theory, sleep allows the brain to remove [[11]] that build up while an animal is awake. Another theory is that sleep makes [[12]] stronger by reorganising the day\'s experiences. A third idea is that sleep developed as a means of saving [[13]] when being active would bring no benefit.</p>',
        questions: [
          { n: 11, a: 'toxins', x: '"the sleeping brain clears away toxins which accumulate during waking hours".' },
          { n: 12, a: 'memories', x: '"sleep strengthens memories".' },
          { n: 13, a: 'energy', x: '"a way of conserving energy" – conserving = saving.' }
        ]
      }
    ]
  },

  /* ---------- Mock passage 3 (14 questions) ---------- */
  {
    id: 'r-mock-p3', type: 'mixed', title: 'Full Passage: The Growth Debate', level: 'Band 6.5–8.5', time: 20,
    passageTitle: 'The Growth Debate',
    passage: P([
      'For most of the past century, governments have judged their success largely by the growth of gross domestic product (GDP). In recent decades, however, a growing number of economists and environmentalists have argued that endless economic expansion is incompatible with a planet of finite resources. Advocates of "degrowth" call on wealthy nations to deliberately reduce production and consumption. Their concern is understandable, but I believe their proposed solution is both politically unrealistic and, in important respects, mistaken.',
      'The central question is whether growth can be "decoupled" from environmental damage. Relative decoupling – where emissions rise more slowly than the economy – has long been common. Absolute decoupling, in which an economy grows while its emissions fall, was once thought to be rare. Yet since around 2005 more than thirty countries, including the United Kingdom and Sweden, have achieved it, largely by replacing coal with renewable energy and natural gas. Critics rightly point out that some of these reductions reflect the transfer of manufacturing to other countries. Even when the emissions embedded in imported goods are counted, however, several nations still show genuine declines.',
      'This is not a reason for complacency. The rate of decoupling achieved so far is far too slow. To meet international climate targets, global emissions would need to fall by roughly seven per cent every year, whereas in most of the countries that have decoupled the reduction has been closer to two per cent. Simply hoping that new technology will close this gap is not a strategy.',
      'Degrowth, though, would require people to accept lower incomes. In rich countries a planned contraction might be tolerable for some households, but history suggests that economic downturns fall hardest on the poor: unemployment rises, public budgets shrink and, tellingly, public support for environmental policies tends to weaken whenever economies contract. For developing countries, where hundreds of millions of people still lack reliable electricity, growth is not a luxury but a necessity – a point that most degrowth advocates themselves accept.',
      'Where the degrowth movement is surely right is in questioning GDP as a measure of progress. GDP counts the clean-up after an oil spill as economic activity, yet ignores unpaid work such as caring for children or elderly relatives, and takes no account of the depletion of forests, fisheries or soil. Some governments, notably New Zealand, have experimented with "wellbeing budgets" that track health, education and environmental quality alongside economic output. Whether such initiatives will alter major policy decisions in practice remains to be seen.',
      'The real choice, then, is not between growth and no growth, but concerns what kind of growth societies pursue. Carbon pricing, investment in clean infrastructure and strict regulation of pollution can steer economies towards activities that improve lives without destroying the ecosystems on which they depend. This path is demanding, but it is far more likely to win lasting public support than a deliberate reduction in living standards.'
    ]),
    groups: [
      {
        kind: 'choice', choices: YNNG, instructions: 'Questions 1–5. ' + YNNG_INS, questions: [
          { n: 1, q: 'People who support degrowth have legitimate reasons for concern.', a: 'YES', x: '"Their concern is understandable".' },
          { n: 2, q: 'Absolute decoupling has proved impossible to achieve.', a: 'NO', x: '"more than thirty countries... have achieved it".' },
          { n: 3, q: 'Some countries\' emission reductions are partly explained by moving production abroad.', a: 'YES', x: '"Critics rightly point out that some of these reductions reflect the transfer of manufacturing to other countries" – "rightly" shows the writer agrees.' },
          { n: 4, q: 'Sweden has reduced its emissions faster than any other country.', a: 'NOT GIVEN', x: 'Sweden is mentioned only as one of thirty countries; no comparison of speed is made.' },
          { n: 5, q: 'Technological progress alone will be sufficient to meet climate targets.', a: 'NO', x: '"Simply hoping that new technology will close this gap is not a strategy."' }
        ]
      },
      {
        kind: 'choice', instructions: 'Questions 6–9. Choose the correct letter, <b>A, B, C or D</b>.', questions: [
          { n: 6, q: 'What does the writer say about the current pace of decoupling?', opts: ['It has accelerated in recent years.', 'It is inadequate to meet climate goals.', 'It is fastest in developing countries.', 'It has been exaggerated by critics.'], a: 'B', x: '"The rate of decoupling achieved so far is far too slow" – 2% per year vs the 7% needed.' },
          { n: 7, q: 'According to the fourth paragraph, when economies shrink', opts: ['environmental policies become more popular.', 'public support for environmental action usually declines.', 'poorer people are generally protected.', 'carbon emissions tend to rise.'], a: 'B', x: '"public support for environmental policies tends to weaken whenever economies contract".' },
          { n: 8, q: 'The writer mentions the clean-up after an oil spill in order to', opts: ['show how expensive pollution can be.', 'illustrate a weakness of GDP as a measure.', 'praise the effectiveness of regulation.', 'emphasise the value of unpaid work.'], a: 'B', x: 'GDP "counts the clean-up after an oil spill as economic activity" – an example of what GDP gets wrong.' },
          { n: 9, q: 'What is the writer\'s view of "wellbeing budgets"?', opts: ['They have transformed government policy.', 'They are an unnecessary expense.', 'Their practical effect is still uncertain.', 'They should replace GDP completely.'], a: 'C', x: '"Whether such initiatives will alter major policy decisions in practice remains to be seen."' }
        ]
      },
      {
        kind: 'select', instructions: 'Questions 10–14. Complete each sentence with the correct ending, <b>A–H</b>, below.',
        boxTitle: 'Endings',
        options: letters(['direct economic activity towards less harmful forms.', 'is supported by most economists.', 'still reveals real reductions in some countries.', 'is regarded as essential.', 'the cost of renewable energy.', 'is unlikely to gain lasting public support.', 'unpaid work such as caring for family members.', 'has caused the economy to shrink.']),
        questions: [
          { n: 10, q: 'In developing countries, economic growth', a: 'D', x: '"growth is not a luxury but a necessity".' },
          { n: 11, q: 'GDP fails to take into account', a: 'G', x: '"ignores unpaid work such as caring for children or elderly relatives".' },
          { n: 12, q: 'The writer believes that a planned reduction in living standards', a: 'F', x: '"far more likely to win lasting public support than a deliberate reduction in living standards".' },
          { n: 13, q: 'Carbon pricing and strict regulation can', a: 'A', x: '"can steer economies towards activities that improve lives without destroying the ecosystems".' },
          { n: 14, q: 'Counting the emissions contained in imported goods', a: 'C', x: '"Even when the emissions embedded in imported goods are counted... several nations still show genuine declines."' }
        ]
      }
    ]
  },

  /* ---------- Extra TFNG practice ---------- */
  {
    id: 'r-tfng-2', type: 'tfng', title: 'Bees in the City', level: 'Band 6–7', time: 10,
    passageTitle: 'Bees in the City',
    passage: P([
      'Over the past two decades, beekeeping has become a fashionable hobby in many large cities. Hives have appeared on the roofs of hotels, office blocks and even museums, and in one major European capital the number of registered hives more than doubled in a single decade. Courses for beginners are frequently fully booked months in advance.',
      'Many new urban beekeepers say they were motivated by reports that bees are in decline, and believe that by keeping hives they are helping to protect them. Ecologists, however, warn that this reasoning is largely mistaken. The honeybee is a domesticated species, managed by humans for thousands of years, and its numbers are maintained by beekeepers. It is the many species of wild bee – more than two hundred in some countries – that have suffered the most serious losses.',
      'In fact, large numbers of honeybees may make life harder for their wild relatives, since both depend on the nectar and pollen produced by flowers. A study in one city found that in the districts with the highest density of hives, wild bees were noticeably less common. The researchers were careful to stress, however, that their data showed only a connection, not proof that the hives were responsible.',
      'Cities can certainly support bees. Parks, private gardens and roadside verges often contain a wider variety of flowering plants than intensively farmed countryside, and honey produced in cities has won prizes at national competitions. But the supply of flowers is limited, and when too many hives compete for it, bees may struggle to find enough food. Several city authorities now recommend a maximum number of hives per square kilometre.',
      'For those who want to help pollinators, experts suggest other approaches: planting a range of flowering species, leaving areas of grass uncut, and avoiding pesticides. Some former beekeepers have turned instead to building "bee hotels" – small wooden structures filled with hollow tubes, which provide nesting sites for solitary wild bees.'
    ]),
    groups: [{
      kind: 'choice', choices: TFNG, instructions: TFNG_INS, questions: [
        { n: 1, q: 'Urban beekeeping has become more popular in recent years.', a: 'TRUE', x: '"beekeeping has become a fashionable hobby"; hive numbers "more than doubled".' },
        { n: 2, q: 'Most new urban beekeepers are retired people.', a: 'NOT GIVEN', x: 'The age of beekeepers is never mentioned.' },
        { n: 3, q: 'Honeybees are the type of bee most at risk of decline.', a: 'FALSE', x: '"It is the many species of wild bee... that have suffered the most serious losses."' },
        { n: 4, q: 'Honeybees and wild bees may compete for the same food sources.', a: 'TRUE', x: '"both depend on the nectar and pollen produced by flowers".' },
        { n: 5, q: 'The city study proved that hives reduced the number of wild bees.', a: 'FALSE', x: '"their data showed only a connection, not proof".' },
        { n: 6, q: 'Honey produced in cities can be of high quality.', a: 'TRUE', x: '"honey produced in cities has won prizes at national competitions".' },
        { n: 7, q: 'Some cities have banned beekeeping completely.', a: 'NOT GIVEN', x: 'Authorities "recommend a maximum number of hives" – a ban is not mentioned either way.' },
        { n: 8, q: 'Bee hotels are designed to provide homes for honeybees.', a: 'FALSE', x: '"nesting sites for solitary wild bees".' }
      ]
    }]
  },

  /* ---------- General Training Section 2 (workplace) ---------- */
  {
    id: 'r-gt-2', type: 'gt', title: 'General Training: Staff Handbook (Section 2 style)', level: 'GT Band 5.5–7', time: 10,
    passageTitle: 'Staff Handbook – Leave, Absence and Flexible Working',
    passage: `<h4>Annual leave</h4><p>Full-time employees are entitled to 25 days\' paid leave per year in addition to public holidays. Part-time employees receive leave in proportion to the hours they work. The leave year runs from 1 April to 31 March. You may carry over up to five unused days into the following leave year, but these must be taken by the end of June; any days not used by then will be lost.</p>
<p>Requests should be made through the HR portal at least two weeks in advance for absences of up to three days, and at least four weeks in advance for longer periods. To ensure that departments remain adequately staffed during December, no more than two members of any team may be on leave at the same time. Priority will be given to staff who did not take leave during the previous December.</p>
<h4>Sickness absence</h4><p>If you are unable to work because of illness, you must telephone your line manager before 10 a.m. on the first day of absence. Text messages and emails are not acceptable. For absences of more than seven calendar days, you will need to provide a fit note from a doctor.</p>
<h4>Flexible working</h4><p>Once you have completed six months\' continuous employment, you may apply for flexible working. Options include compressed hours (working full-time hours over four days), working from home for up to two days per week, or adjusting your start and finish times. All staff must be available during core hours, from 10 a.m. to 3 p.m. Your manager will respond to your application within four weeks, and any new arrangement will initially be tried for three months before it is confirmed.</p>`,
    groups: [
      {
        kind: 'choice', choices: TFNG, instructions: 'Questions 1–6. ' + TFNG_INS, questions: [
          { n: 1, q: 'Part-time staff receive the same number of days\' leave as full-time staff.', a: 'FALSE', x: '"Part-time employees receive leave in proportion to the hours they work."' },
          { n: 2, q: 'There is no limit on the amount of leave that can be carried over.', a: 'FALSE', x: '"up to five unused days".' },
          { n: 3, q: 'A request for a week\'s holiday must be made at least four weeks beforehand.', a: 'TRUE', x: 'A week is longer than three days, so four weeks\' notice is required.' },
          { n: 4, q: 'Staff who were on leave last December may have lower priority this December.', a: 'TRUE', x: '"Priority will be given to staff who did not take leave during the previous December."' },
          { n: 5, q: 'Employees may email their manager to report that they are sick.', a: 'FALSE', x: '"Text messages and emails are not acceptable."' },
          { n: 6, q: 'Staff who work from home receive money for equipment.', a: 'NOT GIVEN', x: 'Equipment or allowances are not mentioned.' }
        ]
      },
      {
        kind: 'gap', maxWords: 2, instructions: 'Questions 7–10. Complete the sentences. Choose <b>NO MORE THAN TWO WORDS AND/OR A NUMBER</b> from the text.', questions: [
          { n: 7, q: 'Leave carried over from the previous year must be used before the end of {} .', a: 'June', x: '"these must be taken by the end of June".' },
          { n: 8, q: 'An absence of more than seven days requires a {} from a doctor.', a: 'fit note', x: '"you will need to provide a fit note from a doctor".' },
          { n: 9, q: 'The period between 10 a.m. and 3 p.m. is known as {} .', a: 'core hours', x: '"core hours, from 10 a.m. to 3 p.m.".' },
          { n: 10, q: 'A new flexible working arrangement is first tried for {} .', a: 'three months|3 months', x: '"initially be tried for three months".' }
        ]
      }
    ]
  }
];

import type { IdeaTopic } from '@/lib/types';

/** Simplified, paraphrased summaries of the public band descriptors (not the official wording). */
export const bandDescriptors: { title: string; note: string; criteria: { name: string; bands: [string, string][] }[] }[] = [
  {
    title: 'Writing Task 2',
    note: 'Each criterion is 25% of the Task 2 score. Task 2 counts twice as much as Task 1 in your Writing band.',
    criteria: [
      { name: 'Task Response', bands: [['9', 'Fully answers every part of the question; a clear, fully developed position with relevant, extended and well-supported ideas.'], ['8', 'Answers all parts well; ideas are relevant, well extended and supported, with only occasional minor lapses.'], ['7', 'Addresses all parts; a clear position throughout; main ideas extended and supported, though some may be over-generalised.'], ['6', 'Addresses all parts, but some more fully than others; a relevant position, though conclusions may be unclear or repetitive; some ideas insufficiently developed.'], ['5', 'Addresses the task only partly; position unclear at times; limited development; may include irrelevant detail.']] },
      { name: 'Coherence & Cohesion', bands: [['9', 'Cohesion is so natural it attracts no attention; paragraphing is skilful.'], ['8', 'Information sequenced logically; cohesion managed well; paragraphing sufficient and appropriate.'], ['7', 'Logical organisation with clear progression; a range of cohesive devices with some under- or over-use; a clear central topic in each paragraph.'], ['6', 'Coherent overall; cohesive devices used effectively but sometimes mechanically or inaccurately; referencing not always clear; paragraphing not always logical.'], ['5', 'Some organisation but lacks overall progression; inadequate, inaccurate or overused linkers; paragraphing may be inadequate.']] },
      { name: 'Lexical Resource', bands: [['9', 'Wide range of vocabulary used naturally and precisely; very rare minor slips.'], ['8', 'Wide range used fluently and flexibly; skilful use of uncommon items; occasional errors in word choice or collocation.'], ['7', 'Sufficient range for flexibility and precision; some less common items with awareness of style and collocation; occasional errors in word choice, spelling or word formation.'], ['6', 'Adequate range; attempts less common vocabulary with some inaccuracy; errors in spelling/word formation that do not impede communication.'], ['5', 'Limited range, minimally adequate; noticeable errors in spelling/word formation that may cause difficulty for the reader.']] },
      { name: 'Grammatical Range & Accuracy', bands: [['9', 'Wide range of structures with full flexibility and accuracy; rare minor slips.'], ['8', 'Wide range; the majority of sentences are error-free; only very occasional errors.'], ['7', 'A variety of complex structures; frequent error-free sentences; good control of grammar and punctuation with a few errors.'], ['6', 'A mix of simple and complex forms; some errors in grammar and punctuation that rarely reduce communication.'], ['5', 'Limited range; attempts complex sentences but these are less accurate than simple ones; frequent errors that may cause some difficulty.']] }
    ]
  },
  {
    title: 'Writing Task 1 (Academic)',
    note: 'Coherence & Cohesion, Lexical Resource and Grammar are assessed as in Task 2. The first criterion is different:',
    criteria: [
      { name: 'Task Achievement', bands: [['9', 'Fully satisfies all requirements; a clear, fully developed response.'], ['8', 'Covers all requirements sufficiently; key features clearly presented, highlighted and illustrated.'], ['7', 'A clear overview of main trends, differences or stages; key features clearly presented and highlighted, though could be more fully extended.'], ['6', 'An overview with information appropriately selected; key features adequately highlighted, but some details may be irrelevant, inaccurate or missing.'], ['5', 'Recounts detail mechanically with no clear overview; key features not adequately covered; may focus too much on detail; data may be inaccurate.']] }
    ]
  },
  {
    title: 'Speaking',
    note: 'The four criteria are weighted equally. Your accent is not assessed – only how clearly and naturally you speak.',
    criteria: [
      { name: 'Fluency & Coherence', bands: [['9', 'Speaks fluently with only rare repetition or self-correction; fully coherent and appropriately extended.'], ['8', 'Speaks fluently with only occasional hesitation, mostly content-related; develops topics coherently.'], ['7', 'Speaks at length without noticeable effort; some hesitation or self-correction; uses a range of connectives and discourse markers flexibly.'], ['6', 'Willing to speak at length, though may lose coherence at times; uses connectives, not always appropriately.'], ['5', 'Usually maintains flow but relies on repetition, self-correction or slow speech; overuses certain connectives.']] },
      { name: 'Lexical Resource', bands: [['9', 'Full flexibility and precision; idiomatic language used naturally and accurately.'], ['8', 'Wide, flexibly used resource; uses less common and idiomatic vocabulary skilfully; paraphrases effectively.'], ['7', 'Flexible vocabulary to discuss a variety of topics; some less common and idiomatic items with awareness of style and collocation; paraphrases effectively.'], ['6', 'Wide enough vocabulary to discuss topics at length; meaning clear despite inappropriacies; generally paraphrases successfully.'], ['5', 'Manages familiar and unfamiliar topics with limited flexibility; attempts paraphrase with mixed success.']] },
      { name: 'Grammatical Range & Accuracy', bands: [['9', 'Full range of structures used naturally and accurately.'], ['8', 'Wide range used flexibly; majority of sentences error-free; occasional inappropriacies.'], ['7', 'A range of complex structures with some flexibility; frequently error-free sentences, though some errors persist.'], ['6', 'Mix of simple and complex structures, with limited flexibility; frequent mistakes in complex structures that rarely cause comprehension problems.'], ['5', 'Basic sentence forms with reasonable accuracy; limited complex structures, usually with errors.']] },
      { name: 'Pronunciation', bands: [['9', 'Full range of pronunciation features used precisely; effortless to understand.'], ['8', 'Wide range of features; sustains flexible use; easy to understand throughout; accent has minimal effect.'], ['7', 'Shows all positive features of Band 6 and some of Band 8.'], ['6', 'Range of features with mixed control; some effective use of features; generally understood though mispronunciation occasionally reduces clarity.'], ['5', 'Shows all positive features of Band 4 and some of Band 6.']] }
    ]
  }
];

export const task1Mistakes: [string, string][] = [
  ['No overview', 'Without a paragraph summarising the main trends, Task Achievement is limited to Band 5. Write it as paragraph 2 and start with "Overall,".'],
  ['Describing every number', 'Select key features: highest/lowest, biggest changes, start and end points, crossovers. Group similar data.'],
  ['Giving opinions or reasons', 'Do not explain why something happened unless the chart shows it. No "I think", no conclusions about what governments should do.'],
  ['Copying the question', 'Copied words are not counted towards your word total. Paraphrase the first sentence.'],
  ['Wrong tense', 'Past data → past simple; "by 2010" → past perfect; projections → "is expected to", "will".'],
  ['Missing units', 'Always state the unit: %, millions, tonnes, dollars. "Sales rose to 40" means nothing.'],
  ['Trend words for non-time data', 'If the chart compares categories in one year, use comparison language (higher than, twice as many), not "increased".'],
  ['Preposition errors', 'rose FROM 10% TO 20%; rose BY 10 percentage points; peaked AT 50; an increase OF 5%; an increase IN sales.'],
  ['Mixing up percentage and percentage points', 'From 10% to 15% is a rise of 5 percentage points, or a 50% increase.'],
  ['Writing far too much', 'Aim for 170–190 words. Long answers take time from Task 2, which is worth twice as much.']
];

/** Task 2 idea bank: common topics with balanced arguments, examples and vocabulary. */
export const ideaBank: IdeaTopic[] = [
  {
    id: 'education', topic: 'Education',
    questions: ['Should university education be free?', 'Is it better for children to start school early?', 'Should schools teach practical life skills (money, cooking)?', 'Is online learning as effective as classroom learning?'],
    for: ['Free education widens access and promotes social mobility regardless of family income.', 'An educated workforce increases productivity, innovation and tax revenue.', 'Practical skills (financial literacy, first aid) prepare young people for independent adult life.', 'Online learning offers flexibility for working adults and students in remote areas.'],
    against: ['Free tuition is expensive for taxpayers, including those who never attend university.', 'Graduates often earn more, so it is arguably fair that they contribute to the cost.', 'Crowded curricula leave little time; parents may be better placed to teach some life skills.', 'Online courses suffer from low completion rates and limited social interaction.'],
    examples: ['Several Nordic countries offer tuition-free university education.', 'Online courses often report completion rates far lower than traditional courses.'],
    vocab: ['social mobility', 'tuition fees', 'financial literacy', 'rote learning', 'critical thinking', 'vocational training', 'drop out', 'academic achievement']
  },
  {
    id: 'technology', topic: 'Technology & Social Media',
    questions: ['Has technology made people more isolated?', 'Should children have limited screen time?', 'Will artificial intelligence create or destroy jobs?', 'Should social media companies be responsible for content?'],
    for: ['Technology connects families across distances and gives access to information and education.', 'Automation removes dangerous and repetitive work and lowers costs for consumers.', 'AI can improve medical diagnosis and scientific research.', 'Online communities support people with rare conditions or minority interests.'],
    against: ['Excessive screen time is linked to poor sleep, shorter attention spans and less physical activity.', 'Social media can spread misinformation and harm young people\'s self-esteem.', 'Automation may cause unemployment for workers without the skills to retrain.', 'Personal data collection raises serious privacy concerns.'],
    examples: ['Many schools now ban mobile phones during lessons.', 'Self-checkout machines have reduced the number of cashier jobs in supermarkets.'],
    vocab: ['digital divide', 'screen time', 'automation', 'misinformation', 'data privacy', 'cyberbullying', 'technological advances', 'be addicted to']
  },
  {
    id: 'environment', topic: 'Environment & Climate',
    questions: ['Who should be responsible for protecting the environment: individuals or governments?', 'Should air travel be taxed more heavily?', 'Is it too late to stop climate change?', 'Should plastic packaging be banned?'],
    for: ['Governments can act at scale through laws, taxes and investment in renewable energy.', 'Carbon taxes make polluters pay for the damage they cause.', 'Individual choices (diet, transport, consumption) add up and shape markets.', 'Bans on single-use plastics have quickly reduced waste in many countries.'],
    against: ['Higher taxes on flights or fuel hit lower-income families hardest.', 'Individual action has little effect if large industries continue to pollute.', 'Strict regulation may push companies to relocate to countries with weaker laws.', 'Alternatives to plastic can have their own environmental costs.'],
    examples: ['Plastic bag charges have sharply reduced bag use in many countries.', 'Some cities have introduced low-emission zones that charge older vehicles.'],
    vocab: ['carbon footprint', 'renewable energy', 'greenhouse gas emissions', 'sustainable development', 'deforestation', 'biodiversity', 'carbon tax', 'single-use plastics']
  },
  {
    id: 'health', topic: 'Health & Lifestyle',
    questions: ['Should governments tax unhealthy food?', 'Is individual health a personal or government responsibility?', 'Why are obesity rates rising?', 'Should healthcare be free for everyone?'],
    for: ['Sugar taxes reduce consumption and fund health campaigns.', 'Preventive healthcare (vaccination, screening) saves money in the long run.', 'Free healthcare ensures that treatment depends on need, not income.', 'Public health campaigns have successfully reduced smoking.'],
    against: ['Adults should be free to make their own choices; taxes can be paternalistic.', 'Food taxes are regressive – they cost the poor proportionally more.', 'Free healthcare systems face long waiting times and high costs.', 'Obesity has many causes (stress, working hours, urban design) that taxes do not address.'],
    examples: ['Several countries have introduced taxes on sugary drinks, leading manufacturers to reduce sugar content.', 'Smoking bans in public places have been followed by falls in smoking rates.'],
    vocab: ['sedentary lifestyle', 'balanced diet', 'preventive healthcare', 'life expectancy', 'obesity', 'mental wellbeing', 'public health campaign', 'paternalistic']
  },
  {
    id: 'crime', topic: 'Crime & Punishment',
    questions: ['Are longer prison sentences the best way to reduce crime?', 'Should young offenders be treated differently?', 'What causes crime among young people?', 'Should prisoners receive education in prison?'],
    for: ['Prison protects the public and acts as a deterrent.', 'Education and training in prison reduce reoffending and save money.', 'Young offenders respond better to rehabilitation and community service.', 'Tackling poverty and school exclusion addresses the root causes of crime.'],
    against: ['Long sentences are expensive and prisons can become "schools of crime".', 'Victims may feel justice is not done if punishments are too lenient.', 'Some serious crimes require long sentences regardless of age.', 'Rehabilitation programmes do not work for every offender.'],
    examples: ['Countries that focus on rehabilitation, such as Norway, report relatively low reoffending rates.', 'Community service allows minor offenders to repay society while keeping their jobs.'],
    vocab: ['deterrent', 'rehabilitation', 'reoffend', 'juvenile delinquency', 'community service', 'law enforcement', 'root causes', 'lenient']
  },
  {
    id: 'work', topic: 'Work & Employment',
    questions: ['Is working from home positive or negative?', 'Should people retire later?', 'Is job satisfaction more important than salary?', 'Why do people change jobs more often today?'],
    for: ['Remote work saves commuting time and improves work-life balance.', 'Flexible working helps parents and carers stay in employment.', 'Job satisfaction improves productivity and mental health.', 'Changing jobs helps workers develop new skills and higher salaries.'],
    against: ['Remote workers may feel isolated and young employees miss learning from colleagues.', 'Boundaries between work and home life become blurred.', 'Later retirement is hard for those in physically demanding jobs.', 'Frequent job changes reduce loyalty and increase recruitment costs for employers.'],
    examples: ['Many companies now offer hybrid working, with two or three office days per week.', 'The gig economy offers flexibility but little job security.'],
    vocab: ['work-life balance', 'job security', 'remote working', 'productivity', 'the gig economy', 'job satisfaction', 'career prospects', 'burnout']
  },
  {
    id: 'globalisation', topic: 'Globalisation, Culture & Tourism',
    questions: ['Is globalisation destroying local cultures?', 'Does tourism do more harm than good?', 'Should everyone learn English?', 'Should governments protect traditional buildings?'],
    for: ['Global trade lowers prices and creates jobs in developing economies.', 'Tourism brings income and encourages the preservation of heritage.', 'A shared international language makes business, science and travel easier.', 'Cultural exchange increases understanding and tolerance.'],
    against: ['Global brands can replace local businesses and traditions.', 'Mass tourism damages historic sites and drives up local housing costs.', 'Minority languages risk disappearing.', 'Profits from tourism often go to international companies rather than local people.'],
    examples: ['Some popular cities now limit cruise ships or short-term rentals to protect residents.', 'Many traditional festivals have been revived because of tourist interest.'],
    vocab: ['cultural identity', 'cultural diversity', 'mass tourism', 'multinational corporations', 'heritage', 'homogenisation', 'preserve traditions', 'international trade']
  },
  {
    id: 'cities', topic: 'Cities, Housing & Transport',
    questions: ['Should governments invest in public transport rather than roads?', 'Why do people move to cities?', 'How can traffic congestion be reduced?', 'Is it better to live in the city or the countryside?'],
    for: ['Public transport reduces congestion, pollution and accidents.', 'Cities offer better jobs, education and healthcare.', 'Congestion charges and cycle lanes change travel behaviour.', 'Dense cities use land and energy more efficiently.'],
    against: ['Public transport is expensive to build and may not suit rural areas.', 'Rapid urbanisation causes housing shortages and high rents.', 'Driving restrictions may harm city-centre businesses.', 'City life can be stressful, noisy and isolating.'],
    examples: ['London\'s congestion charge reduced traffic in the central zone.', 'Many cities have converted car lanes into protected cycle lanes.'],
    vocab: ['urbanisation', 'traffic congestion', 'affordable housing', 'infrastructure', 'urban sprawl', 'commute', 'public transport network', 'rural depopulation']
  },
  {
    id: 'media', topic: 'Media & Advertising',
    questions: ['Should advertising aimed at children be banned?', 'Does advertising encourage people to buy things they don\'t need?', 'Is news on social media reliable?', 'Do celebrities have too much influence?'],
    for: ['Advertising informs consumers and funds free media.', 'Children cannot easily distinguish adverts from content, so protection is justified.', 'Social media gives a voice to people ignored by traditional media.', 'Celebrities can raise awareness of important causes.'],
    against: ['Advertising fuels consumerism and debt.', 'Bans are difficult to enforce online.', 'Misinformation spreads faster than corrections.', 'Celebrities may promote unhealthy lifestyles or products they do not use.'],
    examples: ['Some countries restrict advertising of unhealthy food during children\'s programmes.', 'Influencers are often required to label paid promotions.'],
    vocab: ['consumerism', 'target audience', 'misinformation', 'mass media', 'influencer', 'brand loyalty', 'impulse buying', 'invasion of privacy']
  },
  {
    id: 'government', topic: 'Government Spending & Society',
    questions: ['Should governments fund the arts?', 'Is space exploration a waste of money?', 'Should older people be supported by the state or their families?', 'Should sport be compulsory at school?'],
    for: ['The arts preserve culture, attract tourism and improve wellbeing.', 'Space research produces technology with everyday uses (satellites, weather forecasting).', 'State pensions and care protect vulnerable people.', 'Compulsory sport improves health and teamwork.'],
    against: ['Public money should prioritise healthcare, education and housing.', 'Space programmes are extremely costly while basic needs remain unmet.', 'An ageing population puts pressure on public finances.', 'Forcing children into sport can discourage those who dislike competition.'],
    examples: ['Satellite technology developed through space programmes is now used in navigation and weather forecasting.', 'Free museum entry has increased visitor numbers in several countries.'],
    vocab: ['public expenditure', 'allocate funds', 'an ageing population', 'state pension', 'cultural heritage', 'taxpayers\' money', 'priorities', 'social welfare']
  }
];

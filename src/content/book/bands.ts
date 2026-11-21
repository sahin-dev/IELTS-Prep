import type { Chapter, Reference } from '@/lib/types';

/* Part 11 of the curriculum: band score development. Sample answers are original; their bands are the authors' illustrative
   estimates for teaching, not official examiner scores. */

const writingBd: Reference = { title: 'IELTS Writing band descriptors (public version)', url: 'https://ielts.org/cdn/ielts-downloadable-assets/ielts-guidance-and-support/ielts-guides/ielts-writing-band-descriptors.pdf', note: 'Read the official wording for each band after this chapter.' };
const speakingBd: Reference = { title: 'IELTS Speaking band descriptors (public version)', url: 'https://ielts.org/cdn/ielts-guides/ielts-speaking-band-descriptors.pdf' };
const scoring: Reference = { title: 'IELTS: IELTS scoring in detail', url: 'https://ielts.org/take-a-test/your-results/ielts-scoring-in-detail', note: 'The band scale, the skill-level names and the raw-score averages.' };
const official: Reference = { title: 'IELTS: Preparation resources', url: 'https://ielts.org/take-a-test/preparation-resources', note: 'Official sample answers with examiner comments are the best calibration material available.' };

const estimate = '<div class="callout warn"><strong>About the band labels in this chapter</strong>The sample answers were written for teaching. Their bands are our illustrative estimates, made by applying the public band descriptors – they are not official IELTS scores, and real examiners assess complete performances. For calibration against real examiner judgements, also study the official sample answers on ielts.org.</div>';

export const bandChapters: Record<string, Chapter> = {
  /* ===================================================================== OVERVIEW */
  overview: {
    intro: `
<p>Every IELTS result is a band from 0 to 9, and every candidate has a target band. But what actually <i>changes</i> between one band and the next? What does a Band 7 writer do that a Band 6 writer does not? Without a clear answer, candidates practise blindly – writing essay after essay, taking test after test – and hope the score will rise.</p>
<p>This part of the book makes the bands concrete. This first chapter describes how performance develops from Band 4 to Band 9 in each skill, explains what half bands mean, and gives you a method for measuring the gap between your current level and your target. The next three chapters show it in action: the same Writing task answered at four different levels, the same Speaking question answered at four levels, and the error profiles that separate bands in Listening and Reading.</p>
${estimate}`,
    facts: [['Scale', '0–9 in whole and half bands'], ['Writing & Speaking', 'Four criteria; the band reflects the profile across them'], ['Listening & Reading', 'Raw score out of 40 converted to a band'], ['Biggest jump for many', '6 → 7: more error-free complex language, fuller development'], ['Half band', 'Usually an uneven profile (e.g. two criteria at 7, two at 6)'], ['First step', 'Diagnose your weakest criterion, not just your weakest skill']],
    method: [
      { title: 'Find your current band in each skill – honestly', body: '<p>Use a timed test for Listening and Reading. For Writing and Speaking, assess each criterion separately using the descriptions in section 1, or ask a teacher.</p>' },
      { title: 'Locate the weakest criterion inside each skill', body: '<p>A Writing 6.0 might be TR 6, CC 7, LR 6, GRA 5. The plan is completely different from a Writing 6.0 that is TR 5, CC 6, LR 7, GRA 6.</p>' },
      { title: 'Compare the descriptions of your band and your target band', body: '<p>Write down, in your own words, two or three things the target band does that your band does not. These are your learning objectives.</p>' },
      { title: 'Turn each difference into a practice activity', body: '<p>"Fewer errors in complex sentences" → daily sentence-combining practice + proofreading list. "Ideas extended and supported" → a paragraph-development routine for every essay.</p>' },
      { title: 'Re-assess every two to three weeks', body: '<p>Repeat the criterion-by-criterion assessment and adjust.</p>' }
    ],
    sections: [
      {
        id: 'ladder', title: 'How performance develops from Band 4 to Band 9',
        html: `
<p>The descriptions below summarise, in plain language, how each skill develops. They are paraphrases for learning, not the official descriptors (see the sources).</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Band</th><th>Writing</th><th>Speaking</th><th>Listening / Reading</th></tr>
<tr><td>4</td><td>The task is only partly addressed; ideas are few and unclear; basic vocabulary and frequent errors make the text hard to follow.</td><td>Long pauses; short answers; basic vocabulary; frequent errors; often hard to understand.</td><td>Understands simple, familiar information; misses most detail and paraphrase.</td></tr>
<tr><td>5</td><td>The task is addressed, but ideas are limited or not fully relevant; organisation is present but mechanical; limited range; frequent errors.</td><td>Keeps going but with repetition and hesitation; limited flexibility; simple sentences mostly; some errors cause strain.</td><td>Finds explicit information; struggles with paraphrase, distractors and fast speech or dense text.</td></tr>
<tr><td>6</td><td>All parts addressed, but some more fully than others; a clear overall progression; adequate vocabulary with some errors; a mix of simple and complex sentences with some errors.</td><td>Willing to speak at length; some hesitation and self-correction; enough vocabulary for most topics; a mix of structures with errors.</td><td>Handles most question types; loses marks to distractors, NOT GIVEN logic, word limits and time.</td></tr>
<tr><td>7</td><td>A clear position throughout; main ideas extended and supported; logical organisation with a range of cohesive devices; less common vocabulary with awareness of collocation; a variety of complex structures with frequent error-free sentences.</td><td>Speaks at length without noticeable effort; flexible use of connectives; less common and idiomatic vocabulary; a range of complex structures with good control; easy to understand.</td><td>Recognises paraphrase reliably; avoids most distractors; occasional errors under time pressure.</td></tr>
<tr><td>8</td><td>A well-developed response with relevant, extended and supported ideas; skilful cohesion; a wide, precise vocabulary with rare errors; a wide range of structures, the majority error-free.</td><td>Fluent, with only occasional content-related hesitation; wide vocabulary used precisely; wide range of structures, mostly error-free; easy to understand throughout.</td><td>Very few errors; handles complex argument and fine distinctions of meaning.</td></tr>
<tr><td>9</td><td>A fully developed, precise response; cohesion that attracts no attention; full flexibility and precision in vocabulary and grammar, with only rare slips.</td><td>Effortless fluency and coherence; full flexibility and precision in language; pronunciation features used fully and naturally.</td><td>Near-perfect accuracy (about 39–40 correct, depending on the module and version).</td></tr>
</table></div>`
      },
      {
        id: 'half', title: 'What half bands mean',
        html: `<p>In Listening and Reading, a half band is a range of raw scores (Band 6.5 in Listening is roughly 26–29 correct answers). In Writing and Speaking, a half band usually reflects an uneven profile across the criteria: performance that fits Band 7 in some respects and Band 6 in others. So "Band 6.5" is not "nearly 7" in general – it is 7 in some criteria and 6 in others. To move up, raise the lower criteria.</p>`
      },
      {
        id: 'gap', title: 'Measuring the gap: a worked diagnosis',
        html: `
<p>Candidate profile (Writing, last three essays, assessed by a teacher): TR 6, CC 6, LR 6, GRA 5 → about 5.5–6.0. Target: 7.0.</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Criterion</th><th>Now</th><th>Target</th><th>What changes</th><th>Practice</th></tr>
<tr><td>Task Response</td><td>6</td><td>7</td><td>Ideas extended and supported, not listed</td><td>One-idea-per-paragraph routine: point → explain → example</td></tr>
<tr><td>Coherence and Cohesion</td><td>6</td><td>7</td><td>Natural, varied linking; clear referencing</td><td>Replace "Firstly/Moreover" chains with <i>this + noun</i> and logical order</td></tr>
<tr><td>Lexical Resource</td><td>6</td><td>7</td><td>Less common words in accurate collocations</td><td>Topic collocation lists; rewrite 5 vague phrases per essay</td></tr>
<tr><td>Grammatical Range and Accuracy</td><td>5</td><td>7</td><td>Far fewer errors; variety of complex structures</td><td>Personal error list; sentence-combining practice; proofreading routine</td></tr>
</table></div>
<p>The largest gap is grammar (two bands). That is where most practice time should go – while keeping the other three criteria moving.</p>`
      },
      { id: 'band-impact', title: 'Using this part of the book', html: '<p>Read the Writing and Speaking band chapters next to your own work. For each sample, ask: which features do my answers share? That comparison is more useful than any number.</p>' }
    ],
    dos: ['Diagnose criteria, not just skills.', 'Write your learning objectives as differences between bands.', 'Turn each objective into a regular practice activity.', 'Calibrate with official sample answers.'],
    donts: ['Don\'t aim at "a higher band" in general – aim at specific features.', 'Don\'t trust a single practice score.', 'Don\'t treat our estimated sample bands as official scores.'],
    careful: [{ title: 'Self-assessment bias', body: '<p>Most learners overestimate Lexical Resource and Grammatical Range and Accuracy. Count your errors per paragraph to stay honest.</p>' }],
    exercises: {
      id: 'ch-bands-overview', title: 'Chapter exercises: understanding band levels',
      groups: [{ kind: 'choice', instructions: 'Choose the band that best matches each description, <b>A, B or C</b>.', questions: [
        { n: 1, q: 'Writing: all parts addressed, some more fully than others; a mix of simple and complex sentences with some errors.', opts: ['Band 5', 'Band 6', 'Band 8'], a: 'B', x: 'Uneven development and some errors in complex sentences are typical of Band 6.' },
        { n: 2, q: 'Speaking: speaks at length without noticeable effort; flexible connectives; less common vocabulary; good grammatical control.', opts: ['Band 5', 'Band 7', 'Band 9'], a: 'B', x: 'This is the Band 7 profile.' },
        { n: 3, q: 'Writing: a clear position throughout; main ideas extended and supported; frequent error-free sentences.', opts: ['Band 6', 'Band 7', 'Band 4'], a: 'B', x: 'Band 7 Task Response and accuracy.' },
        { n: 4, q: 'A Writing profile of TR 7, CC 7, LR 6, GRA 6 most likely gives…', opts: ['6.0', '6.5', '7.5'], a: 'B', x: 'An even split between 7 and 6 typically gives 6.5.' }
      ] }]
    },
    checklist: ['I know what changes between my band and my target band.', 'I know my weakest criterion in Writing and Speaking.', 'I have written learning objectives and matching practice activities.'],
    summary: ['Each band has recognisable features in each skill.', 'Half bands usually reflect uneven criterion profiles.', 'Diagnose criteria, set objectives as band differences, practise them.'],
    references: [scoring, writingBd, speakingBd, official]
  },

  /* ===================================================================== WRITING AT EVERY BAND */
  writing: {
    intro: `
<p>This chapter shows one Task 2 question answered at four different levels, from about Band 5 to Band 8+. Each answer is followed by a commentary on the four criteria. Read each one before the commentary and try to identify its strengths and weaknesses yourself – that skill, judging writing against the criteria, is exactly what you need to improve your own.</p>
<p><b>The question:</b> <i>Some people believe that unpaid community service, such as helping in hospitals or cleaning public spaces, should be a compulsory part of secondary school programmes. To what extent do you agree or disagree?</i></p>
${estimate}`,
    facts: [['Question type', 'Opinion (to what extent do you agree)'], ['Samples', 'About Band 5, 6, 7 and 8+'], ['Read for', 'Position, development, organisation, vocabulary, grammar'], ['Key lesson', 'The jump to Band 7 is development + accuracy'], ['Use with', 'Your own essays on the same question'], ['Official calibration', 'IELTS sample answers with examiner comments']],
    method: [
      { title: 'Read the question and plan your own answer first', body: '<p>Spend five minutes planning. You will learn more from the comparison if you have committed to your own ideas.</p>' },
      { title: 'Read each sample and predict its band', body: '<p>Note one strength and one weakness for each criterion before reading the commentary.</p>' },
      { title: 'Compare your prediction with the commentary', body: '<p>Where you disagreed, re-read the relevant part of the descriptors.</p>' },
      { title: 'Rewrite one paragraph of the lower-band essays', body: '<p>Raising someone else\'s paragraph by a band is excellent practice for raising your own.</p>' }
    ],
    sections: [
      {
        id: 'band5', title: 'Sample A (about Band 5)',
        html: `<div class="model-answer"><p>Nowadays, many people think students should do community service in school. I am agree with this idea because it have many advantage.</p>
<p>First, community service is good for students. They can learn many thing. For example, if they help in hospital they can know about the job of doctor and nurse. Also they can help old people and this is very good. Students today only use the phone and they don't help other people.</p>
<p>Second, it is good for the society. The city will be more clean if students clean the park. The government don't need to pay money for this. So it is save money.</p>
<p>But some people say students are busy with study and exam. This is true, but I think one or two hour in a week is not a problem.</p>
<p>In conclusion, I agree that community service should be compulsory because it is good for students and for society.</p></div>
<p class="muted small">About 190 words.</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Criterion</th><th>Commentary</th></tr>
<tr><td>Task Response</td><td>A position is stated and kept, but the essay is under length and ideas are mentioned rather than developed ("they can learn many thing"). The opposing view is noted but answered only briefly. The "compulsory" aspect – the heart of the question – is barely discussed.</td></tr>
<tr><td>Coherence and Cohesion</td><td>Clear paragraphing and basic linkers (<i>First, Second, But, In conclusion</i>), used mechanically. Some sentences are loosely connected ("Students today only use the phone…").</td></tr>
<tr><td>Lexical Resource</td><td>Basic, repetitive vocabulary (<i>good</i> ×4, <i>help</i>); errors in word form (<i>more clean</i>, <i>it is save</i>).</td></tr>
<tr><td>Grammatical Range and Accuracy</td><td>Mostly simple sentences; frequent errors: <i>I am agree, it have, many thing, one or two hour, The government don't</i>.</td></tr>
</table></div>`
      },
      {
        id: 'band6', title: 'Sample B (about Band 6)',
        html: `<div class="model-answer"><p>It is often argued that secondary school students should be required to do unpaid community work, for example in hospitals or in parks. I mostly agree with this idea, although I think the work should be flexible.</p>
<p>Firstly, community service can teach young people important skills which they cannot learn in the classroom. For example, a student who helps in a hospital learns how to communicate with patients and how to work in a team. Moreover, this kind of experience can help students to choose their future career, because they can see what a job is really like.</p>
<p>Secondly, community service is beneficial for society. Many public services do not have enough staff, so the help of students can make a difference. In addition, when young people clean public spaces, they will respect them more and they will not drop litter. This is a big advantage for cities.</p>
<p>On the other hand, some people believe that making the service compulsory is not fair, because students already have a lot of homework and exams. I think this is a valid point. However, if schools give students a choice of activities and only ask for a few hours per month, the pressure will not be too high.</p>
<p>In conclusion, I believe that community service should be part of school programmes, because it develops students' skills and helps society, but schools should organise it in a flexible way.</p></div>
<p class="muted small">About 260 words.</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Criterion</th><th>Commentary</th></tr>
<tr><td>Task Response</td><td>A clear, qualified position, maintained throughout. Main ideas are relevant and partly developed, with an example in paragraph 2. Paragraph 3's second idea (respecting public spaces) is asserted rather than explained. The counter-argument is addressed reasonably.</td></tr>
<tr><td>Coherence and Cohesion</td><td>Logical organisation and clear progression. Linking is accurate but somewhat mechanical (<i>Firstly, Moreover, Secondly, In addition, On the other hand</i>).</td></tr>
<tr><td>Lexical Resource</td><td>Adequate range for the task (<i>unpaid community work, communicate with patients, a valid point</i>), with some simple choices (<i>a big advantage</i>). Few errors.</td></tr>
<tr><td>Grammatical Range and Accuracy</td><td>A mix of simple and complex sentences (relative clauses, <i>because</i>, a conditional), generally accurate, with minor slips. Range is adequate rather than wide.</td></tr>
</table></div>`
      },
      {
        id: 'band7', title: 'Sample C (about Band 7)',
        html: `<div class="model-answer"><p>Some argue that secondary schools should require students to carry out unpaid community service, such as volunteering in hospitals or helping to maintain public spaces. I largely agree, as such work develops qualities that academic study alone rarely does, although its compulsory nature needs careful design.</p>
<p>The strongest argument in favour is that community service builds skills and attitudes that are difficult to teach in a classroom. A teenager who spends an afternoon a week helping in a care home, for instance, must learn to listen patiently, deal with unfamiliar situations and take responsibility for other people's comfort. These are exactly the qualities employers complain are lacking in school leavers, and they are acquired through experience rather than instruction.</p>
<p>There is also a wider social benefit. Hospitals, libraries and environmental projects often depend on volunteers, and a steady supply of students could ease pressure on overstretched services. Perhaps more importantly, young people who have cleaned a park or repainted a community centre tend to feel a sense of ownership over these places, which may encourage them to treat them with greater respect.</p>
<p>Critics rightly point out that students already face heavy academic workloads, and that forced volunteering can feel like a punishment rather than a contribution. However, this is an argument for designing schemes well, not for abandoning them. If students can choose from a range of placements and the time commitment is modest, the experience is far more likely to be valued.</p>
<p>In conclusion, I believe compulsory community service is a worthwhile part of secondary education because it develops practical and social skills and benefits local communities, provided that schools offer genuine choice and keep demands reasonable.</p></div>
<p class="muted small">About 290 words.</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Criterion</th><th>Commentary</th></tr>
<tr><td>Task Response</td><td>A clear position throughout, including on the "compulsory" element. Each main idea is extended and supported (the care-home example explains <i>how</i> skills are built). The counter-argument is acknowledged and answered.</td></tr>
<tr><td>Coherence and Cohesion</td><td>Logical progression with varied, natural cohesion (<i>The strongest argument…, There is also…, Perhaps more importantly, However, this is an argument for…</i>) and good referencing (<i>such work, these places, this</i>).</td></tr>
<tr><td>Lexical Resource</td><td>Less common items used accurately and with good collocation (<i>overstretched services, a sense of ownership, time commitment</i>).</td></tr>
<tr><td>Grammatical Range and Accuracy</td><td>A variety of complex structures (relative and conditional clauses, participle phrases, comparisons) with frequent error-free sentences.</td></tr>
</table></div>`
      },
      {
        id: 'band8', title: 'Sample D (about Band 8 or above)',
        html: `<div class="model-answer"><p>Proposals to make unpaid community service a compulsory element of secondary education rest on an appealing idea: that schools should prepare young people not only for examinations but for citizenship. I strongly support the principle, although I would argue that the benefits depend almost entirely on how such programmes are implemented.</p>
<p>The educational case is compelling. Classroom learning, however rigorous, rarely asks teenagers to take responsibility for the wellbeing of others or to cope with situations that cannot be prepared for. Regular work in a hospital ward, a food bank or a conservation project does precisely this. A student who must explain to an elderly patient why lunch is late is practising patience, tact and initiative in a way no textbook exercise can replicate. Moreover, these placements expose young people to occupations and social realities they might otherwise never encounter, which can inform career choices and challenge assumptions.</p>
<p>The benefits extend beyond the individual. Many community organisations operate with too few staff and too little funding, and even modest, regular help can allow them to extend their services. Equally significant is the long-term effect on civic attitudes: research on volunteering has often linked early experience of community work with higher levels of participation in adult life, suggesting that compulsion in school may cultivate habits that later become voluntary.</p>
<p>The strongest objection is that obligation undermines the spirit of service, turning generosity into another box to tick. This concern is legitimate, but it points to the importance of design rather than to the failure of the idea. Programmes that offer meaningful choice, connect placements to students' interests and include structured reflection are far more likely to be experienced as purposeful than as an imposition.</p>
<p>In short, compulsory community service can make a valuable contribution to education and to society, but only if schools treat it as a carefully planned part of learning rather than as unpaid labour.</p></div>
<p class="muted small">About 320 words.</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Criterion</th><th>Commentary</th></tr>
<tr><td>Task Response</td><td>A fully developed, nuanced position (support for the principle, conditional on implementation) sustained throughout. Ideas are extended with precise examples and the objection is integrated into the argument.</td></tr>
<tr><td>Coherence and Cohesion</td><td>Paragraphs progress logically from individual to social benefits to objection; cohesion is skilful and unobtrusive (<i>does precisely this, The benefits extend beyond…, Equally significant…</i>).</td></tr>
<tr><td>Lexical Resource</td><td>Wide, precise and natural vocabulary (<i>citizenship, replicate, civic attitudes, cultivate habits, an imposition</i>), with sophisticated collocation and no noticeable errors.</td></tr>
<tr><td>Grammatical Range and Accuracy</td><td>A wide range of structures used flexibly – concessive clauses (<i>however rigorous</i>), participle and relative clauses, a cleft-like contrast (<i>points to … rather than to…</i>) – with virtually all sentences error-free.</td></tr>
</table></div>`
      },
      {
        id: 'band-impact', title: 'What moved each essay up a band',
        html: `
<div class="table-wrap"><table class="data-table">
<tr><th>From → to</th><th>The decisive changes</th></tr>
<tr><td>A (5) → B (6)</td><td>Full length; a clear, qualified position; one developed example; far fewer basic errors; some complex sentences.</td></tr>
<tr><td>B (6) → C (7)</td><td>Every idea explained, not asserted; the "compulsory" element addressed directly; natural rather than mechanical linking; precise collocations; more error-free complex sentences.</td></tr>
<tr><td>C (7) → D (8+)</td><td>A more nuanced thesis; ideas extended further with precise examples; wider, more sophisticated vocabulary and structures used with complete control.</td></tr>
</table></div>
<p>Notice what did <i>not</i> change much: the basic structure (introduction, two arguments, counter-argument, conclusion) is the same in all four. Bands rise through <b>development, precision and accuracy</b>, not through a different template.</p>`
      }
    ],
    dos: ['Plan your own answer before reading the samples.', 'Predict a band for each criterion before reading the commentary.', 'Rewrite a paragraph from a lower-band sample.', 'Compare your essays with the features, not the length.'],
    donts: ['Don\'t memorise the high-band essay.', 'Don\'t assume a longer essay is a better one.', 'Don\'t read our estimates as official scores.'],
    careful: [{ title: 'Length is not development', body: '<p>Sample D is longer than C, but its band comes from the precision of its ideas and language. A long essay of repeated, undeveloped points does not score higher.</p>' }],
    exercises: {
      id: 'ch-bands-writing', title: 'Chapter exercises: judging Writing bands',
      groups: [{ kind: 'choice', instructions: 'Choose the best answer, <b>A, B or C</b>.', questions: [
        { n: 1, q: 'The main Task Response weakness of Sample A is that…', opts: ['it has no position', 'its ideas are mentioned rather than developed, and it is under length', 'it uses too many complex sentences'], a: 'B', x: 'A position exists, but development and length are limited.' },
        { n: 2, q: 'What most clearly separates Sample C from Sample B?', opts: ['C uses more linking words', 'C explains and supports each idea and uses more precise vocabulary', 'C is in a different structure'], a: 'B', x: 'Development and precision, not structure, separate the two.' },
        { n: 3, q: '"I am agree" and "it have" are errors in…', opts: ['Lexical Resource', 'Grammatical Range and Accuracy', 'Coherence and Cohesion'], a: 'B', x: 'Verb form and agreement errors.' },
        { n: 4, q: 'Linking in Sample B is best described as…', opts: ['absent', 'accurate but somewhat mechanical', 'skilful and unobtrusive'], a: 'B', x: 'Firstly / Moreover / Secondly / In addition – correct but formulaic.' }
      ] }]
    },
    checklist: ['I can name the decisive differences between Bands 5, 6, 7 and 8.', 'I have predicted bands for each sample before reading the commentary.', 'I have rewritten a lower-band paragraph.'],
    summary: ['The same structure appears at every band; development, precision and accuracy change.', 'Band 6 → 7: explain every idea, link naturally, collocate precisely, fewer errors.', 'Use the samples to calibrate your own self-assessment.'],
    references: [writingBd, official, { title: 'In this book: How Writing is marked', url: '/writing/band-descriptors' }, { title: 'In this book: Task 2 opinion essays', url: '/writing/task-2/opinion' }]
  },

  /* ===================================================================== SPEAKING AT EVERY BAND */
  speaking: {
    intro: `
<p>This chapter shows one Speaking Part 3 question answered at four levels, from about Band 5 to Band 8+, with a commentary on Fluency and Coherence, Lexical Resource and Grammatical Range and Accuracy. Pronunciation cannot be judged from a transcript, so for that criterion we describe what you would need to hear.</p>
<p><b>The question:</b> <i>Do you think people today have less free time than people did in the past?</i></p>
${estimate}`,
    facts: [['Part', 'Speaking Part 3 (discussion)'], ['Samples', 'About Band 5, 6, 7 and 8+'], ['Criteria shown', 'FC, LR, GRA (pronunciation described)'], ['Key lesson', 'Higher bands extend, explain and organise answers naturally'], ['Use with', 'A recording of your own answer'], ['Typical length', 'Part 3 answers: 30–60 seconds']],
    method: [
      { title: 'Record your own answer first', body: '<p>Answer the question aloud for about 45 seconds and record it. Do not prepare notes – Part 3 has no preparation time.</p>' },
      { title: 'Transcribe one minute of your answer', body: '<p>Writing down what you actually said reveals repetition, hesitation and errors you do not notice while speaking.</p>' },
      { title: 'Compare with the samples', body: '<p>Which sample is closest to yours? What is the next sample doing differently?</p>' },
      { title: 'Re-record using one improvement', body: '<p>For example: give a reason and an example for every claim; or replace three basic words with precise ones.</p>' }
    ],
    sections: [
      {
        id: 'band5', title: 'Answer A (about Band 5)',
        html: `<div class="model-answer"><p>"Um… yes, I think… er… people have less free time. Because now, er, people work a lot. Work… work is more. And, um, they use the phone a lot, so… they don't have time. In the past, er, people have more time, I think. Yes."</p></div>
<div class="table-wrap"><table class="data-table"><tr><th>Criterion</th><th>Commentary</th></tr>
<tr><td>Fluency and Coherence</td><td>Frequent language-related hesitation; repetition (<i>work… work is more</i>); short answer with minimal development.</td></tr>
<tr><td>Lexical Resource</td><td>Basic vocabulary, just enough to convey the idea; no paraphrase.</td></tr>
<tr><td>Grammatical Range and Accuracy</td><td>Simple structures; tense error (<i>In the past, people have</i>).</td></tr>
<tr><td>Pronunciation (what to listen for)</td><td>At this level, mispronounced words and flat intonation would typically cause some strain for the listener.</td></tr></table></div>`
      },
      {
        id: 'band6', title: 'Answer B (about Band 6)',
        html: `<div class="model-answer"><p>"Yes, I think so. Nowadays people work longer hours than before, and also many people have to travel a long time to their job. For example, my father spends almost two hours every day in the car. And when people come home, they still check emails on their phone, so they are working even at home. In the past, I think, life was slower and people had more time for their family and hobbies."</p></div>
<div class="table-wrap"><table class="data-table"><tr><th>Criterion</th><th>Commentary</th></tr>
<tr><td>Fluency and Coherence</td><td>Speaks at length with a relevant example; linking is simple (<i>and, so, also</i>) but effective.</td></tr>
<tr><td>Lexical Resource</td><td>Adequate vocabulary (<i>longer hours, check emails</i>); some imprecision (<i>travel a long time to their job</i>).</td></tr>
<tr><td>Grammatical Range and Accuracy</td><td>Mix of simple and complex sentences, comparatives and past tense mostly accurate.</td></tr>
<tr><td>Pronunciation (what to listen for)</td><td>Generally clear, though some features (word stress, chunking) may be inconsistent.</td></tr></table></div>`
      },
      {
        id: 'band7', title: 'Answer C (about Band 7)',
        html: `<div class="model-answer"><p>"I'd say it depends on what we mean by free time. In terms of hours, many people probably have about the same as previous generations – working weeks are actually shorter in a lot of countries. But I think free time has become much more fragmented. Because of smartphones, work tends to spill over into the evening, so even when we're officially off, we're half-thinking about emails. My parents, for example, used to switch off completely when they left the office, whereas I find that really hard to do."</p></div>
<div class="table-wrap"><table class="data-table"><tr><th>Criterion</th><th>Commentary</th></tr>
<tr><td>Fluency and Coherence</td><td>Speaks at length without noticeable effort; flexible discourse markers (<i>I'd say, In terms of, But, whereas</i>); the answer has a clear line of argument.</td></tr>
<tr><td>Lexical Resource</td><td>Less common and idiomatic items used naturally (<i>fragmented, spill over into, switch off</i>).</td></tr>
<tr><td>Grammatical Range and Accuracy</td><td>Range of structures (cleft-like opening, comparatives, <i>used to</i>, contrast clause) with good control.</td></tr>
<tr><td>Pronunciation (what to listen for)</td><td>Easy to understand; sentence stress on key words (<i>FRAGmented, comPLETEly</i>) supports meaning.</td></tr></table></div>`
      },
      {
        id: 'band8', title: 'Answer D (about Band 8 or above)',
        html: `<div class="model-answer"><p>"That's an interesting one, because the answer seems to depend on who you ask. If you look at the statistics, average working hours in many developed countries have actually fallen over the last century, so on paper we ought to have more leisure than ever. But the way people experience time has changed. For a lot of professionals, the boundary between work and home has more or less dissolved – you're never entirely off duty when your phone is buzzing. And then there's the pressure to make every free moment 'productive', whether that's going to the gym or learning a language. So I'd argue that we may well have more free time in theory, but much less of it feels genuinely free."</p></div>
<div class="table-wrap"><table class="data-table"><tr><th>Criterion</th><th>Commentary</th></tr>
<tr><td>Fluency and Coherence</td><td>Fluent and fully coherent; the answer develops a nuanced argument (statistics vs experience) and concludes clearly. Any hesitation would be about ideas, not language.</td></tr>
<tr><td>Lexical Resource</td><td>Wide, precise and idiomatic vocabulary (<i>on paper, dissolved, off duty, genuinely free</i>) used naturally.</td></tr>
<tr><td>Grammatical Range and Accuracy</td><td>Wide range – conditionals, perfect tenses, modal hedging (<i>may well</i>), cleft-like structures – used accurately.</td></tr>
<tr><td>Pronunciation (what to listen for)</td><td>Easy to understand throughout, with natural rhythm, connected speech and intonation that signals contrast and conclusion.</td></tr></table></div>`
      },
      {
        id: 'band-impact', title: 'What moved each answer up a band',
        html: `<div class="table-wrap"><table class="data-table"><tr><th>From → to</th><th>The decisive changes</th></tr>
<tr><td>A → B</td><td>Fluent extended answer with a personal example; fewer hesitations; accurate past tense.</td></tr>
<tr><td>B → C</td><td>A clear line of argument (it depends…), precise and idiomatic vocabulary, contrast structures.</td></tr>
<tr><td>C → D</td><td>A more nuanced position, wider and more natural idiom, hedging, and a clear concluding judgement.</td></tr></table></div>
<p>None of the higher answers sounds memorised. They respond to the actual question, think aloud naturally, and organise ideas as they go.</p>`
      }
    ],
    dos: ['Record and transcribe your own answers.', 'Give a reason and an example for each claim in Part 3.', 'Use contrast and hedging naturally (whereas, may well).', 'Organise answers with a clear line of argument.'],
    donts: ['Don\'t memorise sample answers.', 'Don\'t give one-sentence answers in Part 3.', 'Don\'t fill pauses with chains of um/er.'],
    careful: [{ title: 'Pronunciation cannot be read', body: '<p>A transcript shows words, not delivery. Always judge your Pronunciation from the recording, focusing on clarity, stress and intonation.</p>' }],
    exercises: {
      id: 'ch-bands-speaking', title: 'Chapter exercises: judging Speaking bands',
      groups: [{ kind: 'choice', instructions: 'Choose the best answer, <b>A, B or C</b>.', questions: [
        { n: 1, q: 'Answer A\'s main Fluency problem is…', opts: ['content-related hesitation', 'frequent language-related hesitation and repetition', 'too many idioms'], a: 'B', x: 'Hesitation while searching for words and repetition of "work".' },
        { n: 2, q: 'Which feature of Answer C shows Band 7 Lexical Resource?', opts: ['"people work a lot"', '"work tends to spill over into the evening"', '"yes, I think"'], a: 'B', x: 'A less common, idiomatic collocation used naturally.' },
        { n: 3, q: 'What makes Answer D more than Band 7?', opts: ['It is longer', 'It develops a nuanced argument with wide, precise language and a clear conclusion', 'It uses more fillers'], a: 'B', x: 'Nuance, precision and coherence.' }
      ] }]
    },
    checklist: ['I have recorded and transcribed my own answer.', 'I can identify the features of each band in the samples.', 'I have re-recorded my answer with one specific improvement.'],
    summary: ['Higher Speaking bands extend, explain and organise answers naturally.', 'Precise, idiomatic vocabulary and flexible grammar distinguish Bands 7–8.', 'Judge pronunciation from recordings, not transcripts.'],
    references: [speakingBd, official, { title: 'In this book: Speaking Part 3', url: '/speaking/part-3' }]
  },

  /* ===================================================================== LISTENING AND READING */
  objective: {
    intro: `
<p>In Listening and Reading, your band comes from a raw score out of 40, so the difference between bands is a number of correct answers. But those numbers hide very different <b>error profiles</b>. A Band 5 candidate typically loses marks because they cannot find or understand the information; a Band 7 candidate usually understands it but falls into distractors or makes small slips; a Band 8.5 candidate loses one or two marks to fine distinctions of meaning. Knowing your error profile tells you what to practise next.</p>`,
    facts: [['Band 5', 'About 15–16 correct (Academic Reading / Listening)'], ['Band 6', 'About 23'], ['Band 7', 'About 30'], ['Band 8', 'About 35'], ['GT Reading', 'About 30 = Band 6; 35 = Band 7'], ['Key tool', 'An error log with a cause for every mistake']],
    method: [
      { title: 'Score a timed test and convert it', body: '<p>Use the <a href="/calculator">band calculator</a>; treat the result as approximate.</p>' },
      { title: 'Classify every wrong answer by cause', body: '<p>Did not find it · found it but misunderstood · distractor · NOT GIVEN logic · word limit · spelling · ran out of time · left blank.</p>' },
      { title: 'Find your dominant cause', body: '<p>The cause with the most errors is your next study topic (section 1 suggests what usually dominates at each band).</p>' },
      { title: 'Practise that cause specifically', body: '<p>For example, ten minutes a day of distractor training in Listening Part 3, or a TFNG set reviewed answer by answer.</p>' }
    ],
    sections: [
      {
        id: 'profiles', title: 'Typical error profiles by band',
        html: `<div class="table-wrap"><table class="data-table"><tr><th>Band</th><th>Typical causes of lost marks</th><th>Most useful next step</th></tr>
<tr><td>4–5</td><td>Cannot locate information; vocabulary gaps; does not finish; blanks</td><td>Core vocabulary, scanning, timing; never leave blanks</td></tr>
<tr><td>5.5–6</td><td>Misses paraphrase; word-limit and spelling errors; weak NOT GIVEN logic; slow on long passages</td><td>Paraphrase recognition, answer rules, a time plan per passage</td></tr>
<tr><td>6.5–7</td><td>Distractors (Listening Parts 3–4); qualifiers in TFNG/YNNG; matching headings; time on Passage 3</td><td>Distractor patterns, qualifier awareness, headings method</td></tr>
<tr><td>7.5–8</td><td>Occasional fine distinctions; lapses of concentration; one hard task type</td><td>Targeted practice on the remaining type; full timed tests for stamina</td></tr>
<tr><td>8.5–9</td><td>One or two errors from very subtle wording or spelling under pressure</td><td>Checking routine; consistency across many tests</td></tr></table></div>`
      },
      { id: 'band-impact', title: 'Why small fixes matter', html: '<p>In the 6–8 range, a half band is often only two to four correct answers. Eliminating one recurring cause – spelling, word limits, a distractor pattern – can be worth half a band on its own.</p>' }
    ],
    dos: ['Classify every error by cause.', 'Practise your dominant cause specifically.', 'Never leave blanks.'],
    donts: ['Don\'t only count your score.', 'Don\'t do test after test without reviewing.'],
    careful: [{ title: 'Different conversions', body: '<p>General Training Reading needs more correct answers for the same band than Academic Reading.</p>' }],
    exercises: {
      id: 'ch-bands-objective', title: 'Chapter exercises: Listening and Reading bands',
      groups: [{ kind: 'choice', instructions: 'Choose the best answer, <b>A, B or C</b>.', questions: [
        { n: 1, q: 'A candidate at about Band 6 loses most marks to word limits and spelling. The best next step is…', opts: ['harder vocabulary lists', 'answer rules and a checking routine', 'stop practising'], a: 'B', x: 'Mechanical losses are cheapest to fix.' },
        { n: 2, q: 'About how many correct answers give Band 7 in Academic Reading?', opts: ['23', '30', '35'], a: 'B', x: 'IELTS publishes about 30 as the average for Band 7.' },
        { n: 3, q: 'At Bands 6.5–7, Listening errors most often come from…', opts: ['not hearing anything', 'distractors in Parts 3–4', 'the instructions'], a: 'B', x: 'Speakers changing or rejecting options.' }
      ] }]
    },
    checklist: ['I know my approximate band in Listening and Reading.', 'I have classified my last test errors by cause.', 'I know my dominant cause and how to practise it.'],
    summary: ['Bands in Listening and Reading are raw scores, but error profiles differ by band.', 'Classify errors by cause and fix the dominant one.', 'Small mechanical fixes can be worth half a band.'],
    references: [scoring, official, { title: 'In this book: Band score calculator', url: '/calculator' }]
  }
};

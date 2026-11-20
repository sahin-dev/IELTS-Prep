import type { Chapter } from '@/lib/types';

/* Part 1 of the curriculum, chapter A: what IELTS is, the two modules, the four skills and how the test is delivered.
   Exam facts checked against ielts.org on 2026-11-20 (see `references`). */

export const examFormat: Chapter = {
  verified: '2026-11-20',
  intro: `
<p>IELTS – the <b>International English Language Testing System</b> – measures how well you can use English to study, work and live in places where English is the main language. It is owned jointly by three organisations: the <b>British Council</b>, <b>IDP: IELTS Australia</b> and <b>Cambridge University Press &amp; Assessment</b>. Universities, employers, professional registration bodies and immigration authorities use IELTS results to decide whether a person's English is strong enough for what that person wants to do.</p>
<p>IELTS is not a test that you pass or fail. Every candidate receives a score on a <b>nine-band scale</b> for each of the four skills – Listening, Reading, Writing and Speaking – and an <b>overall band</b>. The organisation that receives your result decides what score it needs. One university may ask for 6.5 overall; a nursing regulator may ask for 7.0 in every skill. Your goal is therefore not "to pass IELTS" but to reach a <b>specific band profile</b>, and knowing exactly how the test is built is the first step towards reaching it.</p>
<p>This chapter describes the test as it is delivered in late 2026. It explains the two modules (Academic and General Training), the four skills in the order in which you take them, every question and task type, and the ways the test is delivered – including the move from paper to computer that IELTS began in mid-2026. The next chapter explains how each part is <a href="/exam/scoring">scored</a>, and the one after that covers <a href="/exam/test-day">booking, test day and results</a>.</p>
<h4>Two kinds of box you will see in this book</h4>
<p>Some statements in an IELTS book are <b>rules</b>: IELTS itself states them, they apply to every candidate, and you can check them on ielts.org. Others are <b>advice</b>: recommendations based on teaching experience, which are useful but not compulsory. Candidates who confuse the two lose marks. Some treat popular advice ("never write more than 300 words", "always use an idiom in Speaking") as if it were an official requirement. Others ignore a real rule because a website called it "just a tip". This book keeps them apart with two kinds of box:</p>
<div class="callout official"><strong>What it looks like</strong>Writing Task 1 needs at least 150 words and Task 2 at least 250 words. Answers must be written in full sentences, not as notes or bullet points.</div>
<div class="callout advice"><strong>What it looks like</strong>Aim for roughly 170–200 words in Task 1, so that you pass the minimum comfortably without taking time away from Task 2.</div>`,
  facts: [
    ['Owned by', 'British Council, IDP: IELTS Australia and Cambridge University Press &amp; Assessment'],
    ['Modules', 'Academic and General Training'],
    ['Skills', 'Listening, Reading, Writing and Speaking'],
    ['Total time', 'About 2 hours 45 minutes'],
    ['Delivery in 2026', 'On computer at a test centre; Speaking face to face with an examiner'],
    ['Result', 'A band from 0 to 9 (whole or half) for each skill, plus an overall band']
  ],
  tests: `
<p>IELTS measures <b>language proficiency</b>: your practical ability to understand and produce English. It does not test knowledge of any subject. A reading passage may be about honeybees, suspension bridges or Bronze Age trade, but every answer is in the text and no specialist knowledge is needed. Writing and Speaking topics are general (education, work, technology, the environment, daily life), and you are marked on how well you communicate your ideas, not on whether the examiner agrees with them.</p>
<p>Each skill is tested and reported separately, and each one asks for something different:</p>
<ul>
<li><b>Listening</b> tests whether you can follow the main ideas and specific details of spoken English, recognise the opinions and attitudes of speakers, understand the purpose of what is said, and follow how ideas develop.</li>
<li><b>Reading</b> tests reading for gist, main ideas and detail, skimming, following a logical argument, and recognising a writer's opinions, attitudes and purpose.</li>
<li><b>Writing</b> tests whether you can produce an organised, relevant response to a task, in accurate English with a good range of vocabulary and grammar.</li>
<li><b>Speaking</b> tests whether you can communicate opinions and information on everyday and more abstract topics, speak at length on a subject, and discuss and justify your views.</li>
</ul>
<p>Because the test measures proficiency, the most reliable way to raise your score is to improve your English itself. Technique matters – especially in Listening and Reading, where knowing how a question type works can save several marks – but technique cannot replace language. A candidate whose English is at Band 6 and who has excellent technique will usually score 6 or 6.5, not 8. This is why this book teaches both: a chapter for every question type, and a large section on grammar and vocabulary.</p>`,
  method: [
    {
      title: 'Find out exactly which test you need',
      body: `<p>Before you study anything, read the English-language requirement of the organisation that will receive your result, and write it down in one line. Check six things: the <b>module</b> (Academic or General Training); whether it must be <b>IELTS for UKVI</b>; whether it accepts <b>IELTS Online</b>; whether it accepts a <b>One Skill Retake</b>; the <b>minimum overall band</b>; and the <b>minimum for each skill</b>. Look also for phrases such as "in one sitting" (all scores must come from the same test) and "taken within the last two years".</p>
<p>If the requirement is unclear, email the admissions or registration office and keep the reply. Taking the wrong module is one of the most expensive mistakes in IELTS, because a result in the wrong module cannot be converted.</p>`,
      example: '<b>Your one-line requirement:</b> "Hartwell University, MSc Data Science: IELTS Academic, 6.5 overall, no skill below 6.0; IELTS Online accepted; One Skill Retake accepted; result must be less than two years old on 1 September." (Hartwell University is an invented example; always read the real organisation\'s page.)'
    },
    {
      title: 'Learn the structure until you can recite it',
      body: `<p>Memorise the order, the timing and the number of questions or tasks in each skill (the table in section 4 below). On test day you should spend no attention at all on "what comes next" or "how long is left in this part". That attention belongs to the questions.</p>
<p>A good test: close the book and say aloud, "Listening, about 30 minutes, four parts, forty questions, heard once. Reading, sixty minutes, three passages, forty questions. Writing, sixty minutes, two tasks, Task 2 worth twice as much. Speaking, eleven to fourteen minutes, three parts." When you can do that without hesitating, move on.</p>`
    },
    {
      title: 'Understand what each skill asks you to do',
      body: '<p>Read the four detailed sections below (Listening, Reading, Writing, Speaking). For each one, note what kind of text or task you meet, who it is written for, and what you must produce. The differences between Academic and General Training are in Reading and Writing Task 1 only – learn exactly what they are.</p>'
    },
    {
      title: 'Meet every question type once',
      body: '<p>Use the question-type table in section 9 to open each question-type chapter and read only its introduction and the "Understanding the instructions" section. You are not learning the methods yet – you are building a map, so that nothing in a practice test surprises you. Then, in your study plan, learn the types properly one at a time.</p>'
    },
    {
      title: 'Try the official sample materials in the format you will take',
      body: `<p>IELTS publishes free sample questions and a computer familiarisation test on ielts.org (see the sources at the end of this chapter). Do at least one sample of each skill <b>on a computer</b>, because almost every IELTS test is now taken that way. Notice how it feels to read a long passage on screen, to highlight text, to type answers while listening and to watch the word counter while writing.</p>`,
      example: '<b>Check yourself:</b> can you type 250 words of English in 30 minutes with few typing errors? If not, add 10 minutes of typing practice in English to your daily routine – slow typing costs time in Task 2.'
    },
    {
      title: 'Then learn how the test is scored and set your target',
      body: '<p>Once you know the format, read the next chapter, <a href="/exam/scoring">How IELTS is scored</a>, and then <a href="/book/how-to-study">How to prepare</a>, where you set a realistic target and plan your weeks.</p>'
    }
  ],
  sections: [
    {
      id: 'purpose', title: 'What IELTS is used for – and who decides the score you need',
      html: `
<p>People take IELTS for three broad purposes: <b>study</b> (entry to universities and colleges, mostly with the Academic module), <b>professional registration</b> (doctors, nurses, engineers, lawyers and other professionals who must show their English to a regulator, usually with the Academic module), and <b>migration and work</b> (visa and residence applications, usually with the General Training module, and sometimes with the Academic module).</p>
<p>In every case it is the <b>receiving organisation</b> – not IELTS – that decides which module it accepts and which bands it needs. IELTS publishes no "pass mark". Requirements are written in several common ways, and you must be able to read each one precisely:</p>
<div class="table-wrap"><table class="data-table">
<tr><th>How the requirement is written</th><th>What it means</th><th>Example of a result that does <i>not</i> meet it</th></tr>
<tr><td>"6.5 overall"</td><td>Only the overall band matters.</td><td>Overall 6.0, even with 7.5 in Listening</td></tr>
<tr><td>"6.5 overall, with no band below 6.0"</td><td>Overall at least 6.5 <b>and</b> each of the four skills at least 6.0.</td><td>L 7.5, R 7.0, W 5.5, S 6.5 – overall 6.5 but Writing below 6.0</td></tr>
<tr><td>"7.0 in each skill" or "minimum 7 in all components"</td><td>All four skills at least 7.0; the overall band is not enough on its own.</td><td>L 8.0, R 8.0, W 6.5, S 7.5 – overall 7.5 but Writing below 7.0</td></tr>
<tr><td>"7.0 in L, R and S; 6.5 in W"</td><td>A different minimum for each skill.</td><td>W 7.0 but S 6.5</td></tr>
<tr><td>"in one sitting" / "from a single test"</td><td>All required scores must appear on the same Test Report Form. You cannot combine your best Listening from March with your best Writing from May.</td><td>Two tests that each meet half the requirement</td></tr>
</table></div>
<p>Requirements also change. A university can raise its requirement from one year to the next, and immigration rules change more often than that. Always read the current requirement on the organisation's own website, not on a forum or an agent's summary.</p>
<div class="callout official"><strong>No pass or fail</strong>IELTS reports a band score for each skill and an overall band. The organisation receiving your result sets its own requirements and decides which tests and delivery modes it accepts.</div>`
    },
    {
      id: 'modules', title: 'Academic or General Training?',
      html: `
<p>There are two modules. They share the same Listening and Speaking tests and the same Writing Task 2 format. They differ in <b>Reading</b> and in <b>Writing Task 1</b>.</p>
<div class="table-wrap"><table class="data-table">
<tr><th></th><th>IELTS Academic</th><th>IELTS General Training</th></tr>
<tr><td>Usually taken for</td><td>Study at university (undergraduate and postgraduate); professional registration</td><td>Migration; work; training or study below degree level</td></tr>
<tr><td>Listening</td><td colspan="2">The same test for both modules</td></tr>
<tr><td>Reading</td><td>Three long passages from books, journals, magazines and newspapers, written for a non-specialist reader but suitable for someone entering university</td><td>Section 1: short everyday texts; Section 2: short work-related texts; Section 3: one longer text on a topic of general interest</td></tr>
<tr><td>Writing Task 1</td><td>Describe visual information: a graph, chart, table, diagram, process or map</td><td>Write a letter (personal, semi-formal or formal) asking for information or explaining a situation</td></tr>
<tr><td>Writing Task 2</td><td colspan="2">An essay responding to a point of view, argument or problem (General Training topics tend to be more everyday, and the style may be slightly more personal)</td></tr>
<tr><td>Speaking</td><td colspan="2">The same test for both modules</td></tr>
</table></div>
<h4>"General Training is easier" – a misunderstanding</h4>
<p>Many candidates believe General Training is the easier test. The <i>texts</i> in General Training Reading are less academic, but that does not make the <i>band</i> easier to reach, because the raw-score conversion is stricter. According to IELTS's published averages, about 30 correct answers out of 40 gives Band 7 in Academic Reading but only Band 6 in General Training Reading. The bands mean the same level of English in both modules; the conversion is adjusted precisely so that they do. You do not choose a module because one looks easier – you take the one the receiving organisation asks for.</p>
<h4>Other versions of IELTS</h4>
<ul>
<li><b>IELTS for UKVI</b> (Academic or General Training) has the same content, format and scoring as the standard test, but it is taken at centres approved for UK Visas and Immigration, with additional identity checks. You need it only if your UK visa route asks for it – your university or the UK government's guidance will say so. IELTS announced in March 2026 that the UKVI test is available only in the fully digital (computer) format.</li>
<li><b>IELTS Life Skills</b> is a separate test of speaking and listening only, at three levels of the Common European Framework (A1, A2 and B1), used for certain UK visa and citizenship applications. It is not covered in this book.</li>
<li><b>IELTS Online</b> is the Academic module taken at home or in another private place, with the Speaking test by video call. It is described below under "How the test is delivered in 2026".</li>
</ul>`
    },
    {
      id: 'structure', title: 'The structure of the test',
      html: `
<p>Listening, Reading and Writing are taken in one session, in that order, with no breaks between them. Speaking is taken separately – sometimes later the same day, sometimes on a different day. Your booking confirmation tells you when your Speaking test is.</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Order</th><th>Skill</th><th>Time</th><th>Parts</th><th>Questions / tasks</th><th>What you do</th></tr>
<tr><td>1</td><td>Listening</td><td>About 30 minutes</td><td>4</td><td>40 (10 per part)</td><td>Listen to four recordings, each played once, and answer questions as you listen</td></tr>
<tr><td>2</td><td>Reading</td><td>60 minutes</td><td>3</td><td>40</td><td>Read three passages (or groups of texts) and answer questions; the time includes entering your answers</td></tr>
<tr><td>3</td><td>Writing</td><td>60 minutes</td><td>2</td><td>2 tasks</td><td>Task 1: at least 150 words (about 20 minutes). Task 2: at least 250 words (about 40 minutes)</td></tr>
<tr><td>4</td><td>Speaking</td><td>11–14 minutes</td><td>3</td><td>An interview</td><td>A recorded conversation with an examiner: familiar topics, a two-minute talk, then a discussion</td></tr>
</table></div>
<div class="callout official"><strong>One session, no breaks</strong>Listening, Reading and Writing are done in one session of 2 hours 40 minutes, with no breaks between the sections. IELTS advises you to go to the toilet before you enter the test room.</div>
<p>Two practical consequences follow. First, <b>stamina</b> is part of the test: by the time you start Writing you have been concentrating for an hour and a half, and Task 2 – the most valuable task in the Writing paper – comes at the very end. Practise full 2-hour-40-minute sessions before test day. Second, <b>time cannot be moved between skills</b>: minutes you save in Reading do not carry over to Writing. Within a paper, however, you manage your own time – in Reading and Writing nobody tells you when to move from one passage or task to the next.</p>`
    },
    {
      id: 'listening-format', title: 'Listening: the format in detail',
      html: `
<p>The Listening test lasts about 30 minutes and contains <b>four parts with ten questions each</b>. You hear each recording <b>once only</b>. The parts become progressively more difficult, and within each part the questions follow the order of the recording. You hear a range of native-speaker accents, including British, Australian, New Zealand and North American.</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Part</th><th>Speakers</th><th>Context</th><th>Typical example</th></tr>
<tr><td>1</td><td>A conversation between two people</td><td>Everyday social situation</td><td>A caller booking a holiday cottage or joining a sports club</td></tr>
<tr><td>2</td><td>One speaker (a monologue)</td><td>Everyday social situation</td><td>A guide describing a museum, or a talk about local facilities</td></tr>
<tr><td>3</td><td>A conversation between up to four people</td><td>Education or training</td><td>Two students and a tutor discussing a research project</td></tr>
<tr><td>4</td><td>One speaker (a monologue)</td><td>An academic subject</td><td>A university lecture on the history of a technology</td></tr>
</table></div>
<p><b>How answering works on computer.</b> You read the questions on screen and type or click your answers while you listen. Before each part, and sometimes in the middle of a part, there is a short pause to read the next questions – use it to read ahead and predict (the <a href="/listening/fundamentals">Listening fundamentals</a> chapter teaches this). There is no separate period for transferring answers, because they are already entered; candidates report a short time at the end (around two minutes) to check them. On the paper test, which IELTS has been withdrawing since mid-2026, candidates wrote on the question paper and then had 10 minutes to transfer their answers to an answer sheet.</p>
<p><b>Question types.</b> Multiple choice; matching; plan, map and diagram labelling; form, note, table, flow-chart and summary completion; sentence completion; and short-answer questions. Each has its own chapter (see section 9).</p>
<p><b>What makes Listening hard</b> is rarely the vocabulary. It is the combination of hearing the recording once, reading and listening at the same time, and the deliberate <b>distractors</b>: speakers who mention one option and then reject it, correct themselves, or change a detail. Knowing the format means you expect these from the start.</p>`
    },
    {
      id: 'reading-format', title: 'Reading: the format in detail',
      html: `
<p>The Reading test lasts <b>60 minutes</b> and has <b>40 questions</b> in three sections. The 60 minutes include the time for entering your answers: there is no extra transfer time.</p>
<h4>Academic Reading</h4>
<p>Three long passages, taken from books, journals, magazines and newspapers. They are written for a non-specialist audience but are suitable for people entering university or seeking professional registration. They range from descriptive and factual to discursive and analytical, and at least one contains a detailed logical argument. A passage may include a diagram, graph or illustration, and a short glossary is given if the text uses technical terms. Together the three passages total roughly 2,150–2,750 words, and they usually become more difficult from Passage 1 to Passage 3.</p>
<h4>General Training Reading</h4>
<div class="table-wrap"><table class="data-table">
<tr><th>Section</th><th>Texts</th><th>Typical examples</th></tr>
<tr><td>1</td><td>Two or three short factual texts about everyday life in an English-speaking country</td><td>Notices, advertisements, timetables, a leaflet about a local service</td></tr>
<tr><td>2</td><td>Two short factual texts about work</td><td>A job description, workplace rules, staff training material, a guide to employment rights</td></tr>
<tr><td>3</td><td>One longer, more complex text on a topic of general interest</td><td>An article from a magazine, newspaper, book or website</td></tr>
</table></div>
<p><b>Question types</b> (both modules): True / False / Not Given; Yes / No / Not Given; multiple choice; matching headings; matching information; matching features; matching sentence endings; sentence completion; summary, note, table and flow-chart completion; diagram label completion; and short-answer questions.</p>
<p><b>What makes Reading hard</b> is time. Sixty minutes for three long texts and forty questions leaves about 20 minutes per passage, including answering. Candidates who read every word carefully before looking at the questions rarely finish. The <a href="/reading/fundamentals">Reading fundamentals</a> chapter teaches skimming, scanning and a time plan, and <a href="/reading/answer-order">What to answer first</a> explains which question types follow the order of the passage.</p>`
    },
    {
      id: 'writing-format', title: 'Writing: the format in detail',
      html: `
<p>The Writing test lasts <b>60 minutes</b> and has <b>two tasks</b>. You decide how to divide the time, but IELTS recommends about 20 minutes for Task 1 and about 40 minutes for Task 2.</p>
<div class="table-wrap"><table class="data-table">
<tr><th></th><th>Task 1</th><th>Task 2</th></tr>
<tr><td>Minimum length</td><td>150 words</td><td>250 words</td></tr>
<tr><td>Suggested time</td><td>About 20 minutes</td><td>About 40 minutes</td></tr>
<tr><td>Weight</td><td>One third of the Writing score</td><td>Two thirds – Task 2 counts twice as much as Task 1</td></tr>
<tr><td>Academic</td><td>Describe, summarise or explain visual information: data in a graph, table or chart; the stages of a process; how something works; an object; changes shown on a map</td><td rowspan="2">An essay in response to a point of view, argument or problem: give and justify an opinion, discuss two views, weigh advantages and disadvantages, or analyse problems and solutions</td></tr>
<tr><td>General Training</td><td>A letter asking for information or explaining a situation, written in a personal, semi-formal or formal style, with three bullet points to cover</td></tr>
</table></div>
<div class="callout official"><strong>How you must write</strong>Answers must be written in full sentences, not as notes or bullet points. You will be penalised if what you write does not relate to the topic, or if your answer is not written as a whole piece of connected text. If an answer is too short, there may not be enough evidence of the language needed for the higher bands.</div>
<p>Notice the exact wording of the last sentence. Writing 140 words in Task 1 does not trigger an automatic deduction of a fixed number of marks; the problem is that a short answer gives the examiner less evidence of your range, your organisation and your ability to cover the task – and the band descriptors reward exactly those things. In practice, an answer that is well under the minimum rarely reaches the band its language deserves.</p>
<p>On computer, the screen shows a word count as you type. In selected countries you can instead choose <b>Writing on Paper</b>: the tasks appear on screen and you write your answers by hand on an answer sheet. The tasks, timing and marking are identical.</p>
<div class="callout advice"><strong>Divide your 60 minutes deliberately</strong>Because Task 2 carries twice the weight, never let Task 1 run past about 20–22 minutes. If you consistently run out of time, try doing Task 2 first in practice; you are free to answer the tasks in either order.</div>`
    },
    {
      id: 'speaking-format', title: 'Speaking: the format in detail',
      html: `
<p>The Speaking test is a face-to-face interview with a certificated examiner, lasting <b>11–14 minutes</b>. It is the same for Academic and General Training, and it is <b>recorded</b>. At a test centre the examiner is in the room with you; in IELTS Online the interview takes place by video call.</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Part</th><th>Length</th><th>What happens</th><th>What it is designed to show</th></tr>
<tr><td>1. Introduction and interview</td><td>4–5 minutes</td><td>The examiner introduces themselves and checks your identity, then asks questions on familiar topics such as your home, work or studies, and interests, usually in two or three short sets.</td><td>That you can talk about everyday topics naturally and extend your answers beyond a single sentence.</td></tr>
<tr><td>2. Long turn</td><td>3–4 minutes, including preparation</td><td>You receive a task card with a topic and points to cover. You have one minute to prepare (with paper and a pencil for notes) and then speak for up to two minutes without interruption. The examiner may ask one or two brief questions at the end.</td><td>That you can speak at length on a topic, organise what you say and keep going.</td></tr>
<tr><td>3. Discussion</td><td>4–5 minutes</td><td>The examiner asks further questions linked to the Part 2 topic, but more abstract: causes, effects, comparisons, the future, society in general.</td><td>That you can express and justify opinions, speculate and analyse.</td></tr>
</table></div>
<p>The Speaking test is not a test of knowledge or of opinions. There are no correct answers, and an examiner will not mark you down for an unusual view. What is assessed is <b>how</b> you speak: your fluency and coherence, your vocabulary, your grammar and your pronunciation. Those criteria are explained in the <a href="/exam/scoring">next chapter</a> and in the <a href="/speaking">Speaking</a> part of this book.</p>`
    },
    {
      id: 'delivery', title: 'How the test is delivered in 2026',
      html: `
<p>In March 2026 IELTS announced that, from mid-2026, it would no longer offer IELTS as a paper-based test and that all IELTS tests would be delivered on computer, with exact timelines varying from country to country. Results from paper-based tests already taken are not affected. If you prepared with older books or websites, expect them to describe "paper-based IELTS" as a normal choice; for almost all candidates it no longer is.</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Way of taking IELTS</th><th>Where</th><th>Listening, Reading, Writing</th><th>Speaking</th><th>Modules</th><th>Results</th></tr>
<tr><td>IELTS on computer</td><td>Test centre</td><td>On screen; answers typed or clicked</td><td>Face to face with an examiner</td><td>Academic and General Training (also for UKVI)</td><td>1–5 days after the test</td></tr>
<tr><td>IELTS on computer with Writing on Paper</td><td>Test centre, in selected countries</td><td>Listening and Reading on screen; Writing tasks on screen, answers handwritten in pen</td><td>Face to face with an examiner</td><td>Academic and General Training (not UKVI)</td><td>Within 5 days</td></tr>
<tr><td>IELTS Online</td><td>At home or another private place</td><td>On screen, supervised remotely</td><td>By video call</td><td>Academic only</td><td>6–8 days</td></tr>
</table></div>
<div class="callout official"><strong>Facts to know about the delivery modes</strong>The Test Report Form does not say whether you chose Writing on Paper. Writing on Paper is not available for IELTS for UKVI. Organisations decide for themselves whether they accept IELTS Online. Access arrangements for test takers with particular needs continue, including large print, braille and lip-reading versions.</div>
<h4>What changes for you on a computer</h4>
<ul>
<li><b>Reading:</b> the passage and questions appear side by side. You can highlight words and add notes on screen. Practise reading long texts on a screen before test day – many people read more slowly on screen until they are used to it.</li>
<li><b>Listening:</b> you type answers while listening, so typing speed and accurate spelling while under pressure matter. You wear headphones and can adjust the volume.</li>
<li><b>Writing:</b> a live word count saves you from counting words, and editing is easy, but slow typists lose time. Typing practice is now part of IELTS preparation.</li>
<li><b>The clock</b> is shown on screen. Watches are not allowed in the test room.</li>
</ul>`
    },
    {
      id: 'types', title: 'Every question and task type at a glance',
      html: `
<p>This table is your map of the whole test. Each entry links to its own chapter in this book.</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Skill</th><th>Question or task types</th></tr>
<tr><td>Listening</td><td><a href="/listening/form">Form, note, table, flow-chart and summary completion</a> · <a href="/listening/mcq">Multiple choice</a> · <a href="/listening/map">Plan, map and diagram labelling</a> · <a href="/listening/matching">Matching</a> · <a href="/listening/sentence">Sentence completion</a> · <a href="/listening/short-answer">Short-answer questions</a></td></tr>
<tr><td>Reading</td><td><a href="/reading/tfng">True / False / Not Given</a> · <a href="/reading/ynng">Yes / No / Not Given</a> · <a href="/reading/mcq">Multiple choice</a> · <a href="/reading/headings">Matching headings</a> · <a href="/reading/matching-info">Matching information</a> · <a href="/reading/matching-features">Matching features</a> · <a href="/reading/sentence-endings">Matching sentence endings</a> · <a href="/reading/sentence-completion">Sentence completion</a> · <a href="/reading/summary">Summary, note, table and flow-chart completion</a> · <a href="/reading/diagram">Diagram label completion</a> · <a href="/reading/short-answer">Short-answer questions</a></td></tr>
<tr><td>Writing Task 1 (Academic)</td><td><a href="/writing/task-1/line">Line graphs</a> · <a href="/writing/task-1/bar">Bar charts</a> · <a href="/writing/task-1/pie">Pie charts</a> · <a href="/writing/task-1/table">Tables</a> · <a href="/writing/task-1/mixed">Mixed charts</a> · <a href="/writing/task-1/process">Process diagrams</a> · <a href="/writing/task-1/map">Maps</a></td></tr>
<tr><td>Writing Task 1 (General Training)</td><td><a href="/writing/letters/formal">Formal letters</a> · <a href="/writing/letters/semi">Semi-formal letters</a> · <a href="/writing/letters/informal">Informal letters</a></td></tr>
<tr><td>Writing Task 2</td><td><a href="/writing/task-2/opinion">Opinion (agree or disagree)</a> · <a href="/writing/task-2/discussion">Discussion</a> · <a href="/writing/task-2/adv-disadv">Advantages and disadvantages</a> · <a href="/writing/task-2/problem-solution">Problem and solution</a> · <a href="/writing/task-2/two-part">Two-part (direct) questions</a> · <a href="/writing/task-2/positive-negative">Positive or negative development</a></td></tr>
<tr><td>Speaking</td><td><a href="/speaking/part-1">Part 1: Introduction and interview</a> · <a href="/speaking/part-2">Part 2: Long turn</a> · <a href="/speaking/part-3">Part 3: Discussion</a></td></tr>
</table></div>
<p>IELTS describes the Reading tasks in slightly different terms – for example, "identifying information" for True / False / Not Given and "identifying the writer's views or claims" for Yes / No / Not Given – but they are the same tasks.</p>`
    },
    {
      id: 'format-bands', title: 'How knowing the format affects your band',
      html: `
<p>It is tempting to think that the format is "just information" and that only language skills affect your score. In fact, misunderstanding the format is one of the commonest reasons for a band lower than a candidate's English deserves. Each of the following has cost real candidates a half band or more:</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Format misunderstanding</th><th>What happens</th><th>Typical cost</th></tr>
<tr><td>Not knowing that a Listening recording plays only once</td><td>Waiting to "catch it next time"; missing a run of three or four answers</td><td>Around 3–4 marks, often half a band</td></tr>
<tr><td>Ignoring the word limit ("NO MORE THAN TWO WORDS")</td><td>A correct idea written in three words is marked wrong</td><td>1 mark each time; it adds up quickly</td></tr>
<tr><td>Spending 30 minutes on Reading Passage 1</td><td>No time for Passage 3; ten questions guessed</td><td>Often a full band</td></tr>
<tr><td>Treating Writing Task 1 and Task 2 as equal</td><td>Task 2 rushed or unfinished, although it carries twice the weight</td><td>Half a band or more in Writing</td></tr>
<tr><td>Writing Task 2 in bullet points to save time</td><td>Penalised for not writing connected text</td><td>Large – it limits several criteria</td></tr>
<tr><td>Giving one-sentence answers in Speaking Part 1</td><td>Too little evidence of fluency and range</td><td>Often half a band in Speaking</td></tr>
</table></div>
<p>None of these is a language problem, and all of them disappear once you know the test well. That is why this chapter comes first.</p>`
    }
  ],
  worked: [
    {
      title: 'Choosing the right test: three candidates',
      source: `<div class="prompt-box">
<p><b>Lina</b> wants to study for a master's degree at Hartwell University. The university's website says: <i>"IELTS Academic (including IELTS Online): 6.5 overall with no component below 6.0. Results must be no more than two years old at the start of the course."</i></p>
<p><b>Tomas</b> is applying for permanent residence in a country whose immigration department says: <i>"IELTS General Training, minimum 7.0 in each of Listening, Reading, Writing and Speaking. The test must be taken at a test centre. One Skill Retake results are not accepted."</i></p>
<p><b>Priya</b> is a nurse registering with a nursing council that says: <i>"IELTS Academic: 7.0 in Listening, Reading and Speaking and 6.5 in Writing, achieved in one sitting."</i></p>
<p class="muted small">(The organisations are invented, but the wording is typical of real requirements.)</p>
</div>`,
      questions: '<ol><li>Which module and delivery should Lina choose, and what must her result show?</li><li>What does Tomas\'s requirement rule out?</li><li>What does "in one sitting" mean for Priya?</li></ol>',
      walk: [
        {
          q: '1. Lina', a: 'Academic; test centre or IELTS Online; overall 6.5+, every skill 6.0+',
          steps: [
            'The module is stated directly: IELTS Academic. General Training would not be accepted.',
            '"Including IELTS Online" tells Lina she may take the test at home if she prefers. A test centre is equally acceptable.',
            '"6.5 overall with no component below 6.0" is a double condition. She needs both: the overall band at 6.5 or higher <b>and</b> each of the four skills at 6.0 or higher. A profile of 7.5, 7.0, 5.5, 6.5 gives 6.5 overall but fails because Writing is 5.5.',
            '"No more than two years old at the start of the course" means she must check her test date against the course start date, not the application date. A test taken too early may expire before she enrols.'
          ]
        },
        {
          q: '2. Tomas', a: 'General Training at a test centre; no IELTS Online; no One Skill Retake; 7.0 in all four',
          steps: [
            'The module is General Training. An Academic result would be refused even if the scores were higher.',
            '"Taken at a test centre" rules out IELTS Online (which is in any case Academic only).',
            '"One Skill Retake results are not accepted" is crucial for planning: if one skill comes out at 6.5, Tomas cannot simply retake that skill – he would need a full new test (or a successful remark). This is a reason to aim a little above 7.0 in every skill rather than "just 7".',
            'There is no overall requirement at all – only four separate minimums. An overall band of 8.0 with Writing at 6.5 would still fail.'
          ]
        },
        {
          q: '3. Priya', a: 'All required scores on the same Test Report Form',
          steps: [
            '"In one sitting" means the four scores must come from a single test. If she gets Writing 6.5 in one test and Speaking 7.0 in another, she cannot combine them.',
            'Her requirement is different for each skill: Writing needs 6.5, the other three need 7.0. She should plan her study around the skill furthest from its own target, not around the overall band.',
            'Before booking, she should also ask the council whether it accepts a One Skill Retake. Some "one sitting" rules accept it and some do not – it must be checked, not assumed.'
          ]
        }
      ],
      lesson: 'Every word of a requirement matters: the module, the delivery modes accepted, the minimum overall, the minimum per skill, "one sitting", One Skill Retake and the date the result must still be valid. Write the requirement in one line before you study anything else.'
    },
    {
      title: 'Recognising the part of the test from its instructions',
      source: `<div class="prompt-box">
<p><b>A.</b> "You will hear a woman phoning a sports centre to ask about swimming lessons. First, you have some time to look at Questions 1 to 6."</p>
<p><b>B.</b> "Describe a time when you helped someone. You should say: who you helped, how you helped them, why you helped them, and explain how you felt about helping this person."</p>
<p><b>C.</b> "The chart below shows the percentage of households with internet access in three countries between 2005 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words."</p>
<p><b>D.</b> "You recently stayed at a hotel and left a valuable item in your room. Write a letter to the hotel manager. In your letter, describe the item, explain where you think you left it, and say what you would like the manager to do."</p>
<p><b>E.</b> "You will hear part of a lecture on the history of glass-making."</p>
<p><b>F.</b> "Read the text below and answer Questions 15–20." The text is a notice to employees explaining the company's new rules on working from home.</p>
</div>`,
      questions: '<p>For each extract, decide which skill and part (or task) it belongs to, and what that tells you about how to prepare.</p>',
      walk: [
        { q: 'A', a: 'Listening Part 1', steps: ['A phone call between two people about an everyday service is the classic Part 1 situation: a conversation in an everyday social context.', 'Expect form or note completion with names, numbers, dates and prices – and expect spelling to be tested.', 'The phrase "First, you have some time to look at…" signals the preparation pause: use it to read ahead and predict the type of word in each gap.'] },
        { q: 'B', a: 'Speaking Part 2 (task card)', steps: ['"Describe… You should say…" followed by bullet points is the format of the Part 2 task card.', 'You have one minute to prepare and should speak for up to two minutes. The last point ("explain how you felt") asks for reflection, not only description – it is where many good answers gain their depth.'] },
        { q: 'C', a: 'Academic Writing Task 1', steps: ['A chart, the instruction "summarise… main features… make comparisons" and a 150-word minimum identify Academic Task 1.', 'The key skill is selecting the main trends for an overview, not describing every number. About 20 minutes.'] },
        { q: 'D', a: 'General Training Writing Task 1 (formal letter)', steps: ['A situation, a named recipient and three things to include identify a General Training letter.', 'Writing to a hotel manager you do not know calls for a formal or semi-formal style. All three points must be covered, or Task Achievement is limited.'] },
        { q: 'E', a: 'Listening Part 4', steps: ['A lecture on an academic subject is a monologue in an academic context: Part 4.', 'Expect note or summary completion that follows the structure of the lecture; listen for signposts such as "Turning now to…" and "The second factor was…".'] },
        { q: 'F', a: 'General Training Reading Section 2', steps: ['A workplace notice is a short work-related text, which places it in General Training Section 2.', 'Question numbers 15–20 also fit: Section 2 usually covers the middle questions of the 40.'] }
      ],
      lesson: 'Recognising the part of the test instantly tells you the context, the likely question types and the language you will need. Build this recognition until it is automatic, so that on test day your attention goes straight to the questions.'
    }
  ],
  dos: [
    'Read the receiving organisation\'s requirement word by word and write it down in one line before you start preparing.',
    'Learn the order, timing and number of questions in every skill until you can recite them.',
    'Practise on a computer, because almost every IELTS test is now taken that way.',
    'Practise at least two complete 2-hour-40-minute sessions of Listening, Reading and Writing without breaks before test day.',
    'Use the official sample questions and familiarisation test on ielts.org as your first experience of each skill.',
    'Check your booking confirmation for the date and time of your Speaking test.',
    'Confirm whether your organisation accepts IELTS Online and One Skill Retake before you book.'
  ],
  donts: [
    'Don\'t choose General Training because you think it is easier – take the module your organisation requires.',
    'Don\'t rely on old books or websites for delivery details: paper-based IELTS has been withdrawn since mid-2026 in most countries.',
    'Don\'t assume the overall band is all that matters – many requirements set a minimum for each skill.',
    'Don\'t treat Writing Task 1 and Task 2 as equal; Task 2 counts twice as much.',
    'Don\'t write any Writing answer as notes or bullet points.',
    'Don\'t believe that a skill can be "saved" by another skill if your requirement includes per-skill minimums.'
  ],
  careful: [
    {
      title: 'The "General Training is easier" trap',
      body: '<p>General Training Reading texts look more familiar, so candidates expect higher scores. But the raw-score conversion is stricter: roughly 30 correct answers out of 40 gives Band 7 in Academic Reading and Band 6 in General Training Reading. The band represents the same level of English in both modules.</p>',
      example: 'A candidate who needs Band 7 in General Training Reading should expect to need about 35 correct answers out of 40 – very few mistakes.'
    },
    {
      title: 'Old information about paper-based tests',
      body: '<p>Many books, videos and forums still describe "the paper test" with its 10-minute Listening transfer time. Since mid-2026 IELTS has been delivered on computer, with a Writing on Paper option only in selected countries. Prepare for the format you will actually take.</p>'
    },
    {
      title: 'Assuming Speaking is in the same session',
      body: '<p>Speaking is separate from the other three skills and may be on a different day. Candidates who assume it follows Writing immediately sometimes miss their Speaking slot or arrive exhausted. Read your confirmation.</p>'
    },
    {
      title: 'Assuming IELTS Online is accepted everywhere',
      body: '<p>IELTS Online is the Academic test only, and each organisation decides whether to accept it. A visa authority or a regulator may not. Check before you book – a rejected result means paying for a second test.</p>'
    },
    {
      title: 'Mistaking advice for a rule',
      body: '<p>"Write exactly 250 words", "always give two examples", "you must use idioms in Speaking" – none of these is an IELTS rule. The real rules are few and are stated by IELTS (minimum word counts, full sentences, relevance to the task, the time limits). Everything else is advice to be judged on its merits.</p>',
      example: 'Writing 400 words in Task 2 is not penalised by any rule, but it takes time and usually adds errors – so the advice is to write well-developed paragraphs of about 270–320 words.'
    }
  ],
  timing: `
<p>On test day the timing is fixed for you in Listening (the recording controls it) and in Speaking (the examiner controls it). In Reading and Writing you control it yourself, within the 60 minutes of each paper:</p>
<ul>
<li><b>Reading:</b> about 20 minutes per passage, including entering answers. Check the clock at the end of each passage, not after every question.</li>
<li><b>Writing:</b> about 20 minutes for Task 1 and 40 for Task 2, with the last 3–5 minutes of each task for checking.</li>
</ul>
<div class="callout advice"><strong>Build stamina before you build speed</strong>Most candidates first do practice tests one skill at a time. In your final three or four weeks, combine them: Listening, Reading and Writing back to back, 2 hours 40 minutes, no breaks, no phone. The first time you do this, your Writing score will probably drop – that tells you exactly why the practice is necessary.</div>`,
  faq: [
    { q: 'Is the test the same everywhere in the world?', a: '<p>The format, the question types, the timing and the marking criteria are the same everywhere. The individual test versions differ, which is why the raw-score conversion for Listening and Reading varies slightly from test to test (see the next chapter).</p>' },
    { q: 'Is the computer test harder than the paper test was?', a: '<p>No. The content, difficulty, timing and marking are the same. Some candidates find on-screen reading or typing slower at first, which is a reason to practise on a computer – not a difference in the test itself.</p>' },
    { q: 'Do I need to know about the topics in Reading and Listening?', a: '<p>No. Everything you need is in the text or recording. In fact, using your own knowledge is dangerous in True / False / Not Given questions, where you must judge only by what the text says.</p>' },
    { q: 'Which English accents will I hear?', a: '<p>A range of accents, including British, Australian, New Zealand and North American. You do not need to speak with any particular accent yourself; in Speaking, what matters is that you are easy to understand.</p>' },
    { q: 'Can I choose the order of the Writing tasks?', a: '<p>Yes. You have 60 minutes for both tasks and may answer them in either order. Many candidates who run out of time do Task 2 first, because it carries more weight.</p>' },
    { q: 'Should I take Academic or General Training if I am not sure?', a: '<p>Do not guess. Ask the organisation that will receive your result and keep its written answer. A result in the wrong module cannot be changed into the other module.</p>' }
  ],
  exercises: {
    id: 'ch-exam-format',
    title: 'Chapter exercises: the IELTS test format',
    groups: [
      {
        kind: 'choice', title: 'Part A: the format', instructions: 'Choose the correct answer, <b>A, B, C or D</b>.',
        questions: [
          { n: 1, q: 'Which skills are exactly the same in Academic and General Training?', opts: ['Reading and Writing', 'Listening and Speaking', 'Listening and Reading', 'Writing and Speaking'], a: 'B', x: 'Listening and Speaking are identical. The modules differ in Reading and in Writing Task 1 (Writing Task 2 has the same format, though General Training topics are more everyday).' },
          { n: 2, q: 'How many times do you hear each Listening recording?', opts: ['Once', 'Twice', 'Once, but you can replay one part', 'It depends on the part'], a: 'A', x: 'Every recording is played once only. This is why reading ahead and predicting, during the short pauses, is so important.' },
          { n: 3, q: 'Which Listening part is a monologue on an academic subject?', opts: ['Part 1', 'Part 2', 'Part 3', 'Part 4'], a: 'D', x: 'Part 4 is a single speaker on an academic subject, such as a lecture. Part 2 is also a monologue, but in an everyday social context.' },
          { n: 4, q: 'What is true of the 60 minutes of the Reading test?', opts: ['They do not include time for entering answers', 'They include the time for entering answers', 'An extra 10 minutes are added for transfer', 'They are divided by the invigilator into three 20-minute periods'], a: 'B', x: 'The 60 minutes include answering; there is no extra transfer time. Dividing the time between passages is your job – about 20 minutes each is a sensible plan.' },
          { n: 5, q: 'General Training Reading Section 2 contains…', opts: ['three academic passages', 'one long text of general interest', 'short texts about work', 'a chart to describe'], a: 'C', x: 'Section 2 has two short work-related texts (job descriptions, workplace rules, training material). Section 1 is everyday texts and Section 3 is one longer general-interest text.' },
          { n: 6, q: 'How does Task 2 compare with Task 1 in the Writing score?', opts: ['They count equally', 'Task 2 counts twice as much', 'Task 1 counts twice as much', 'Only Task 2 is marked'], a: 'B', x: 'IELTS states that Task 2 contributes twice as much as Task 1 to the Writing score – one reason to protect your 40 minutes for it.' },
          { n: 7, q: 'In Speaking Part 2, how long do you have to prepare?', opts: ['No preparation time', '30 seconds', 'One minute', 'Two minutes'], a: 'C', x: 'You have one minute to prepare, with paper and a pencil for notes, and then speak for up to two minutes.' },
          { n: 8, q: 'Which way of taking IELTS is available for the Academic module only?', opts: ['IELTS on computer', 'IELTS Online', 'IELTS for UKVI', 'Writing on Paper'], a: 'B', x: 'IELTS Online, taken at home with Speaking by video call, is available for IELTS Academic only. Organisations decide whether to accept it.' },
          { n: 9, q: 'In "IELTS on computer with Writing on Paper", what is done by hand?', opts: ['Listening and Reading answers', 'Only the Writing answers', 'All answers except Speaking', 'Notes in Speaking Part 2 only'], a: 'B', x: 'Only the Writing answers are handwritten in pen; the Writing tasks themselves appear on screen, and Listening and Reading are on computer.' },
          { n: 10, q: 'Which of these is an official IELTS rule rather than preparation advice?', opts: ['Write about 270–320 words in Task 2', 'Use at least one idiom in every Speaking part', 'Write Task 2 in full sentences, not bullet points', 'Do Task 2 before Task 1'], a: 'C', x: 'IELTS states that answers must be in full sentences, not notes or bullet points. The other three are recommendations some teachers make – useful or not, they are not rules.' }
        ]
      },
      {
        kind: 'gap', title: 'Part B: key numbers', instructions: 'Complete each sentence. Write <b>A NUMBER</b> only.',
        questions: [
          { n: 11, q: 'Listening, Reading and Writing are taken in one session lasting 2 hours and {} minutes, with no breaks.', a: '40|forty', x: 'IELTS gives the session as 2 hours 40 minutes: about 30 minutes of Listening (plus checking), 60 of Reading and 60 of Writing.' },
          { n: 12, q: 'The Listening test has {} questions in each part.', a: '10|ten', x: 'Four parts × ten questions = 40.' },
          { n: 13, q: 'Writing Task 2 requires at least {} words.', a: '250', x: 'Task 1 needs at least 150 words and Task 2 at least 250.' },
          { n: 14, q: 'The Speaking test lasts between 11 and {} minutes.', a: '14|fourteen', x: 'Part 1: 4–5 minutes; Part 2: 3–4 minutes including preparation; Part 3: 4–5 minutes.' },
          { n: 15, q: 'Results of IELTS on computer are usually available between 1 and {} days after the test.', a: '5|five', x: 'IELTS gives 1–5 days for the computer test, within 5 days for Writing on Paper and 6–8 days for IELTS Online.' }
        ]
      }
    ]
  },
  checklist: [
    'I have written my organisation\'s requirement in one line: module, delivery, overall band, minimum per skill, one sitting, One Skill Retake, validity date.',
    'I can recite the order, timing and number of questions in all four skills.',
    'I know exactly how Academic and General Training differ.',
    'I know what each of the four Listening parts and three Speaking parts contains.',
    'I know that Task 2 counts twice as much as Task 1, and how I will divide my 60 minutes.',
    'I know which delivery mode I will take, and I have tried the computer familiarisation test.',
    'I can tell an official rule from preparation advice.'
  ],
  summary: [
    'IELTS measures English proficiency on a 0–9 band scale; there is no pass mark – the receiving organisation sets the requirement.',
    'Academic and General Training share Listening, Speaking and the Writing Task 2 format; they differ in Reading and Writing Task 1.',
    'Listening (about 30 min, 40 questions, heard once), Reading (60 min, 40 questions) and Writing (60 min, 2 tasks) are one 2-hour-40-minute session with no breaks; Speaking (11–14 min) is separate.',
    'Task 2 counts twice as much as Task 1; answers must be in full sentences and relevant to the task.',
    'Since mid-2026 IELTS is delivered on computer, with Writing on Paper in selected countries and IELTS Online (Academic only) at home.',
    'Knowing the format is worth marks: many lost half-bands come from format mistakes, not weak English.'
  ],
  references: [
    { title: 'IELTS: Ways to take IELTS', url: 'https://ielts.org/take-a-test/why-choose-ielts/ways-to-take-ielts', note: 'Test centre on computer, Writing on Paper, IELTS Online (Academic only), UKVI; results times.' },
    { title: 'IELTS: Updates to IELTS test delivery (5 March 2026)', url: 'https://ielts.org/news-and-insights/updates-to-ielts-test-delivery', note: 'The end of paper-based testing from mid-2026, access arrangements, UKVI fully digital.' },
    { title: 'IELTS: IELTS on computer – Writing on Paper', url: 'https://ielts.org/take-a-test/test-types/ielts-on-computer-writing-on-paper', note: 'What is on screen and what is handwritten; not available for UKVI.' },
    { title: 'IELTS Academic: Listening test format', url: 'https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-listening' },
    { title: 'IELTS Academic: Reading test format', url: 'https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-reading' },
    { title: 'IELTS Academic: Writing test format', url: 'https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-writing', note: 'Word minimums, full sentences, penalties for irrelevance and for notes or bullet points, Task 2 weighting.' },
    { title: 'IELTS Academic: Speaking test format', url: 'https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-speaking' },
    { title: 'IELTS General Training test format', url: 'https://ielts.org/take-a-test/test-types/ielts-general-training-test' },
    { title: 'IELTS General Training: Reading test format', url: 'https://ielts.org/take-a-test/test-types/ielts-general-training-test/ielts-general-training-format-reading' },
    { title: 'IELTS General Training: Writing test format', url: 'https://ielts.org/take-a-test/test-types/ielts-general-training-test/ielts-general-training-format-writing' },
    { title: 'IELTS: What to expect on test day', url: 'https://ielts.org/take-a-test/preparation-resources/on-test-day', note: 'The 2-hour-40-minute session without breaks; items allowed in the room.' },
    { title: 'IELTS: Preparation resources', url: 'https://ielts.org/take-a-test/preparation-resources', note: 'Free official sample questions and familiarisation tests – use these before any other practice material.' }
  ]
};

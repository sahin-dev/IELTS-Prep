import type { Chapter } from '@/lib/types';

/* Part 1 of the curriculum, chapter C: booking, test-day procedures, results, remarks, retakes and common exam mistakes.
   Exam facts checked against ielts.org (and British Council / IDP pages for remarks) on 2026-11-20 (see `references`). */

export const examDay: Chapter = {
  verified: '2026-11-20',
  intro: `
<p>Every year, well-prepared candidates lose a test – or the score they deserved – for reasons that have nothing to do with English. They bring a different ID from the one they booked with and are turned away. They book a test date so close to their application deadline that there is no time to try again. They take General Training when the university wanted Academic. They spend so long on Reading Passage 1 that Passage 3 is a guess. None of these is a language problem, and all of them are avoidable.</p>
<p>This chapter covers the practical side of IELTS from start to finish: the decisions to make before you book, how booking works, what happens on test day and in the test room, when and how results arrive, what to do if you disagree with a score, and how to choose between a full retake and a One Skill Retake. It ends with the most common examination mistakes in each skill and how to avoid them.</p>
<p>Policies in this area – fees, results times, which organisations accept what – change more often than the test itself, and some differ from country to country. Everything below was checked against official IELTS sources on the date shown at the top of the chapter, but always confirm the details for your test centre before you book.</p>`,
  facts: [
    ['Book through', 'ielts.org → a test centre run by the British Council or IDP'],
    ['Bring', 'The same identity document you used to book'],
    ['Listening, Reading, Writing', 'One session, 2 hours 40 minutes, no breaks'],
    ['Results (on computer)', '1–5 days after the test'],
    ['Remark request', 'Within six weeks of the test date'],
    ['One Skill Retake', 'Within 60 days of a full test on computer; one per test']
  ],
  method: [
    {
      title: 'Ten to twelve weeks before your deadline: confirm the requirement and plan backwards',
      body: '<p>Confirm the module, delivery mode and bands you need (see <a href="/exam">The IELTS test explained</a>). Then work backwards from the date your result must reach the organisation. Leave room for results to arrive, for sending them, and for <b>at least one more attempt</b> if the first falls short. Worked example 1 below shows how.</p>'
    },
    {
      title: 'Book the test – with your name exactly as it appears on your ID',
      body: '<p>Book on ielts.org or the British Council or IDP site for your country. Enter your name exactly as it appears on the passport or ID document you will bring, and note the document number you used. Read the cancellation and transfer terms before you pay; they are set by the test provider and differ between countries.</p>'
    },
    {
      title: 'When the confirmation arrives: check every detail',
      body: '<p>Check the date, the venue address, the start time and the date and time of your Speaking test, which may be on a different day. Check that your name and ID details are correct. If anything is wrong, contact the test centre immediately – it is much easier to correct before test day.</p>'
    },
    {
      title: 'Two to three weeks before: rehearse the real conditions',
      body: '<p>Take the official computer familiarisation test on ielts.org. Do at least one full session of Listening, Reading and Writing back to back – 2 hours 40 minutes, no breaks, no phone – and one timed Speaking practice with someone acting as examiner.</p>'
    },
    {
      title: 'The day before: prepare, then stop',
      body: '<p>Put your ID document where you cannot forget it. Check the route and how long it takes at that time of day. Choose comfortable clothes in layers (test rooms can be warm or cold). Review your error log briefly, then stop studying in the evening. A good night\'s sleep is worth more than one more practice test.</p>'
    },
    {
      title: 'On the day: arrive early and complete registration calmly',
      body: '<p>Leave enough time to arrive without rushing. At registration your ID is checked and you leave your personal belongings in a safe place outside the test room. Most centres also photograph you, and some take a finger scan; staff will guide you. Go to the toilet before you enter the room – there are no breaks between Listening, Reading and Writing.</p>'
    },
    {
      title: 'In the test room: follow the instructions and manage your own time',
      body: '<p>Listen to the invigilator and read every on-screen instruction. Check that your headphones work and the volume is right before Listening begins – raise your hand at once if they do not. In Reading and Writing, watch the clock on the screen (watches are not allowed) and follow your time plan.</p>'
    },
    {
      title: 'At the Speaking test: be early, then talk',
      body: '<p>Arrive in good time for your Speaking slot. The examiner checks your identity and starts recording. From then on, your task is simply to communicate: answer fully, keep going, and ask the examiner to repeat a question if you did not catch it.</p>'
    },
    {
      title: 'After the test: check results against the requirement and decide',
      body: '<p>When your results arrive, check them against every condition of your requirement (see <a href="/exam/scoring">How IELTS is scored</a>). If they meet it, send them. If not, decide calmly between a remark, a One Skill Retake and a full retake, using the guidance in sections 6 and 7 and worked example 2.</p>'
    }
  ],
  sections: [
    {
      id: 'decisions', title: 'Five decisions to make before you book',
      html: `
<ol>
<li><b>Module.</b> Academic or General Training – whichever your organisation names. Never guess.</li>
<li><b>Version.</b> Standard IELTS or IELTS for UKVI. You need UKVI only if your UK visa route requires it; if it does, the test is taken on computer only.</li>
<li><b>Delivery.</b> IELTS on computer at a test centre (the standard choice); Writing on Paper, where available, if you write much better by hand; or IELTS Online (Academic only) if your organisation accepts it.</li>
<li><b>Date and place.</b> Choose a date that leaves time for a second attempt before your deadline (see worked example 1), and a centre you can reach easily on the day.</li>
<li><b>Access arrangements.</b> If you have a disability, a medical condition or another need that affects how you take tests, ask the centre about access arrangements (for example large print, braille or a lip-reading version of Listening) <b>when you book</b>, not shortly before the test. Evidence may be required, and arrangements take time.</li>
</ol>`
    },
    {
      id: 'booking', title: 'Booking your test',
      html: `
<p>IELTS is delivered by the British Council and IDP through test centres around the world. You can start from ielts.org, which directs you to the centres near you, or go directly to the British Council or IDP website for your country. Fees are set locally and vary from country to country; the booking page shows the price before you pay.</p>
<div class="callout official"><strong>Your identity document</strong>You must bring the same identification document that you used when you booked your test. IELTS states that you will not be able to take your test if you bring the wrong ID or forget it.</div>
<p>In practice this means three things. Use a document that will still be valid on the test date. Type your name exactly as it is printed on that document. And do not change documents between booking and test day – if you renew your passport in between, contact the test centre before the test to update your details.</p>
<div class="callout advice"><strong>Book earlier than you think</strong>Popular dates fill up, especially before university application deadlines. Booking six to eight weeks ahead gives you a fixed goal for your study plan and the best choice of dates.</div>`
    },
    {
      id: 'test-day', title: 'What happens on test day',
      html: `
<div class="callout official"><strong>The rules IELTS states for test day</strong>Bring the same ID you booked with. You will be asked to leave your personal belongings in a safe place outside the test room. Switch off your mobile phone and any other electronic devices. Food is not allowed in the test room; water is allowed in a clear (transparent) bottle. Watches are not allowed, but every test room has a clock. Listening, Reading and Writing are taken in one session of 2 hours 40 minutes with no breaks.</div>
<h4>Registration</h4>
<p>On arrival you register: staff check your ID against your booking and, at most centres, take a photograph (it appears on your Test Report Form); some centres also take a finger scan. You store your belongings, keeping only your ID and, if you wish, water in a clear bottle. Exactly what is provided for making notes, and any other local procedures, will be explained by the staff – follow their instructions rather than what a friend did at a different centre.</p>
<h4>Listening, Reading and Writing</h4>
<p>You are shown to a computer and given instructions. Before Listening starts you put on headphones and can check the sound. The three skills then follow one another, each with its own on-screen timer. When a section ends, it closes and you cannot return to it.</p>
<h4>Speaking</h4>
<p>At your Speaking time you wait to be called, then go into a room with the examiner (or, for IELTS Online, join a video call). The examiner checks your ID, starts the recording and begins Part 1. The test lasts 11–14 minutes, and the examiner manages the timing – if you are stopped in the middle of an answer, that is normal and does not mean anything has gone wrong.</p>`
    },
    {
      id: 'in-the-room', title: 'Inside the test room: skill by skill',
      html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Skill</th><th>Before it starts</th><th>While you work</th><th>At the end</th></tr>
<tr><td>Listening</td><td>Check the headphones and volume. Raise your hand <b>immediately</b> if there is any problem – it cannot be fixed once the recording is playing.</td><td>Use every pause to read the next questions and predict. Type answers as you hear them; if you miss one, leave it and move on.</td><td>Use the checking time to fill blanks with your best guess and check spelling and word limits.</td></tr>
<tr><td>Reading</td><td>Look at how the passages and questions are arranged on screen.</td><td>About 20 minutes per passage. Highlight key words. Never spend more than about 90 seconds on one question – flag it and return.</td><td>Make sure no answer is blank before time runs out; the section closes automatically.</td></tr>
<tr><td>Writing</td><td>Decide your order (Task 1 first or Task 2 first) before the test, not in the room.</td><td>Plan for 3–5 minutes before each task. Watch the word count and the clock.</td><td>Keep 3–5 minutes per task to check for errors – especially articles, agreement and punctuation.</td></tr>
<tr><td>Speaking</td><td>Breathe; speak at a natural pace from the first answer.</td><td>Extend each Part 1 answer with a reason or example; use your one minute in Part 2 for brief notes; in Part 3 give an opinion, explain it and support it.</td><td>Nothing to do – the examiner ends the test.</td></tr>
</table></div>
<div class="callout advice"><strong>If something goes wrong</strong>If the computer freezes, the headphones fail or you feel unwell, raise your hand and tell the invigilator immediately. Problems reported during the test can be dealt with; problems mentioned only after you have left are much harder to resolve.</div>`
    },
    {
      id: 'results', title: 'Results: when they arrive and how to use them',
      html: `
<div class="table-wrap"><table class="data-table">
<tr><th>How you took the test</th><th>Results usually available</th></tr>
<tr><td>IELTS on computer (including IELTS for UKVI)</td><td>1–5 days after the test</td></tr>
<tr><td>IELTS on computer with Writing on Paper</td><td>Within 5 days of the test date</td></tr>
<tr><td>IELTS Online</td><td>6–8 days</td></tr>
<tr><td>One Skill Retake</td><td>3–5 days</td></tr>
</table></div>
<p>You can view your results online with your booking details and the same ID number you registered with. Your official result is the <b>Test Report Form (TRF)</b>, issued on paper or, in some countries, as a digital eTRF. It shows your four skill bands and your overall band, together with your photograph and details.</p>
<h4>Sending your results to organisations</h4>
<p>You request this through the booking portal. Paper TRFs can be posted to up to five organisations free of charge, with a fee for more. Electronic delivery through the IELTS Results Service can go to as many organisations as you like, and many universities and authorities verify results directly through it. IELTS Online results can be shared only by electronic delivery.</p>
<div class="callout official"><strong>How long results are valid</strong>IELTS recommends that results be considered valid for two years after the test. Organisations decide for themselves and may accept results for a longer period – or insist on a more recent test.</div>`
    },
    {
      id: 'remark', title: 'If you disagree with a score: the remark',
      html: `
<p>If you believe a score does not reflect your performance, you can apply for a <b>remark</b> (also called an Enquiry on Results) through your test centre. You choose which skills to have re-marked – one or several.</p>
<ul>
<li><b>Deadline:</b> within six weeks of the test date shown on your Test Report Form.</li>
<li><b>Fee:</b> set locally and varying by country; the British Council and IDP state that it is refunded if your score increases.</li>
<li><b>Time:</b> results can take up to about three weeks, depending on how many skills are re-marked.</li>
<li><b>Outcome:</b> the score may be confirmed or changed. If it changes, a new Test Report Form is issued.</li>
</ul>
<h4>When is a remark worth it?</h4>
<p>A remark is a request for a second judgement, not a second chance at the test. It makes most sense when <b>one skill is clearly out of line</b> with your other results and your recent practice, especially in Writing or Speaking, and when that skill is only half a band from what you need. It makes little sense when all your scores are consistent with your practice, or when you know you left Listening or Reading questions unanswered.</p>
<div class="callout advice"><strong>A useful test before you apply</strong>Ask yourself: "If a fair examiner read my Task 2 again, is there good evidence it reached the band I need?" If your practice essays have consistently been assessed at that band and you completed both tasks on topic, a remark may be reasonable. If you are hoping rather than expecting, put the money towards preparation instead.</div>`
    },
    {
      id: 'retakes', title: 'Retaking: a full test or One Skill Retake?',
      html: `
<p>You can take a new full IELTS test whenever a suitable date is available. If only one skill let you down, you may instead be able to take a <b>One Skill Retake</b>.</p>
<div class="callout official"><strong>One Skill Retake: the conditions</strong>Your full test must have been an IELTS on computer test at a centre that offers One Skill Retake, and you must take the retake within 60 days of that full test. You can retake any one skill – Listening, Reading, Writing or Speaking – in the same format and timing as in a full test, and you can do only one retake for each full test. If you chose Writing on Paper, a Writing retake must also be on paper. Results arrive in 3–5 days on a new Test Report Form showing the new score for the retaken skill and your original scores for the other three. You can choose whether to use the original or the new Test Report Form.</div>
<p>Two cautions. First, <b>not every organisation accepts One Skill Retake.</b> For example, at the time of writing Canada's immigration department (IRCC) does not accept it for Express Entry, while other bodies, including many universities, do. Check before you rely on it. Second, a retake is a new performance: the score for that skill can go down as well as up. Because you can choose which Test Report Form to use, a lower retake score does not take away your original result, but it does use up your one retake.</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Situation</th><th>Usually the best option</th></tr>
<tr><td>One skill is half a band or a band short; the rest comfortably meet the requirement; your organisation accepts One Skill Retake</td><td>Focused preparation for that skill, then a One Skill Retake within the 60 days</td></tr>
<tr><td>One skill is unexpectedly low compared with your practice and other skills</td><td>Consider a remark (within six weeks) – and keep preparing in case it is unchanged</td></tr>
<tr><td>Two or more skills are short, or the overall band is a band or more below the target</td><td>Several more weeks or months of preparation, then a full retake</td></tr>
<tr><td>Your organisation does not accept One Skill Retake</td><td>A full retake (or a remark, if one skill is out of line)</td></tr>
</table></div>`
    },
    {
      id: 'mistakes', title: 'Common examination mistakes – and how to avoid them',
      html: `
<p>These are the mistakes examiners, teachers and candidates themselves report most often. Read the list now, and read it again the week before your test.</p>
<h4>Before and on the day</h4>
<div class="table-wrap"><table class="data-table">
<tr><th>Mistake</th><th>How to avoid it</th></tr>
<tr><td>Booking the wrong module or version</td><td>Copy the module and version from the organisation's written requirement into your booking.</td></tr>
<tr><td>Bringing a different or expired ID</td><td>Use one document from booking to test day; check its expiry date when you book.</td></tr>
<tr><td>Missing the Speaking test because it was on another day</td><td>Read the confirmation and put both appointments in your calendar.</td></tr>
<tr><td>Booking only days before a deadline</td><td>Plan backwards and leave time for a second attempt.</td></tr>
<tr><td>Arriving exhausted after studying all night</td><td>Stop studying the evening before. Sleep.</td></tr>
</table></div>
<h4>Listening</h4>
<div class="table-wrap"><table class="data-table">
<tr><th>Mistake</th><th>How to avoid it</th></tr>
<tr><td>Not reading ahead during the pauses</td><td>Use every pause to read the next questions, underline key words and predict the type of answer (<a href="/listening/fundamentals">Listening fundamentals</a>).</td></tr>
<tr><td>Getting stuck on a missed answer and missing the next three</td><td>Let it go immediately; guess at the end.</td></tr>
<tr><td>Writing the first option mentioned</td><td>Expect distractors: speakers often reject or correct the first thing they say.</td></tr>
<tr><td>Spelling errors and missing plurals</td><td>Practise spelling common IELTS words; check every answer against the grammar of the sentence.</td></tr>
<tr><td>Breaking the word limit</td><td>Read the limit before each set of questions; never repeat words already printed in the question.</td></tr>
</table></div>
<h4>Reading</h4>
<div class="table-wrap"><table class="data-table">
<tr><th>Mistake</th><th>How to avoid it</th></tr>
<tr><td>Reading the whole passage slowly before looking at the questions</td><td>Skim for structure in about two minutes, then use the questions to guide detailed reading (<a href="/reading/fundamentals">Reading fundamentals</a>).</td></tr>
<tr><td>Spending too long on Passage 1 or on one question</td><td>About 20 minutes per passage; flag a hard question and move on.</td></tr>
<tr><td>Confusing FALSE and NOT GIVEN</td><td>FALSE needs evidence that contradicts the statement; no evidence either way is NOT GIVEN (<a href="/reading/tfng">True / False / Not Given</a>).</td></tr>
<tr><td>Writing YES instead of TRUE (or the reverse)</td><td>Use exactly the words in the instructions.</td></tr>
<tr><td>Leaving blanks</td><td>A blank always scores zero; a guess sometimes scores one.</td></tr>
</table></div>
<h4>Writing</h4>
<div class="table-wrap"><table class="data-table">
<tr><th>Mistake</th><th>How to avoid it</th></tr>
<tr><td>No overview in Academic Task 1</td><td>Write a clear overview of the main trends or features, usually as the second paragraph (<a href="/writing/task-1">Task 1 method</a>).</td></tr>
<tr><td>Missing one of the three bullet points in a letter</td><td>Plan one paragraph per bullet point and tick each off.</td></tr>
<tr><td>Spending 30 minutes on Task 1</td><td>Stop at about 20 minutes; Task 2 is worth twice as much.</td></tr>
<tr><td>Answering only part of the Task 2 question</td><td>Underline every part of the question and check each is answered (<a href="/writing/task-2">Task 2 method</a>).</td></tr>
<tr><td>Memorised introductions and "template" sentences</td><td>Paraphrase the actual question; write your own sentences.</td></tr>
<tr><td>Writing well under the minimum, or in bullet points</td><td>Aim comfortably above 150 and 250 words, in full connected sentences.</td></tr>
</table></div>
<h4>Speaking</h4>
<div class="table-wrap"><table class="data-table">
<tr><th>Mistake</th><th>How to avoid it</th></tr>
<tr><td>One-sentence answers in Part 1</td><td>Answer, then add a reason, an example or a detail (<a href="/speaking/part-1">Part 1</a>).</td></tr>
<tr><td>Stopping after one minute in Part 2</td><td>Use your notes to cover every point and the final "explain" point (<a href="/speaking/part-2">Part 2</a>).</td></tr>
<tr><td>Reciting memorised answers</td><td>Practise flexible ideas and language, not scripts; examiners recognise memorised speech.</td></tr>
<tr><td>Forcing in rare words and idioms</td><td>Use vocabulary you can use accurately; precision beats rarity.</td></tr>
<tr><td>Staying silent when a question is not understood</td><td>Ask: "Sorry, could you repeat the question?" – in Part 3 you can also ask what a word means.</td></tr>
</table></div>`
    },
    {
      id: 'conduct', title: 'Rules of conduct',
      html: `
<p>IELTS results are trusted because the test is secure. When you book, you agree to the test rules, and breaking them is treated as <b>malpractice</b>. Malpractice includes attempting to cheat or copy, communicating with other candidates during the test, having a phone or other device with you, having someone else take the test for you, taking test material out of the room, and sharing or publishing the content of the test afterwards.</p>
<p>The consequences are serious: results can be withheld or cancelled, a candidate can be prevented from taking IELTS in future, and organisations that received the result can be informed. "Recall" websites that ask candidates to post the questions they saw are a particular risk – posting test content breaks the rules you agreed to.</p>
<div class="callout advice"><strong>Protect yourself</strong>Hand your phone in or store it switched off before entering the room, even if you have no intention of using it. A phone that rings or vibrates in the test room is a problem even if it is never touched.</div>`
    }
  ],
  worked: [
    {
      title: 'Planning backwards from a deadline',
      source: `<div class="prompt-box"><p>Today is <b>1 December 2026</b>. Farah's university application must include IELTS results by <b>31 March 2027</b>. The requirement is <i>IELTS Academic, 7.0 overall, no band below 6.5; One Skill Retake accepted.</i> Her practice tests put her at about 6.5 overall, with Writing her weakest skill.</p></div>`,
      questions: '<p>When should Farah take her first test, and what is her back-up plan?</p>',
      walk: [
        {
          q: 'Step 1: fix the real deadline', a: 'About 20 March',
          steps: ['The result must reach the university by 31 March. Electronic delivery is fast, but leave a margin for problems: treat about 20 March as the date by which she must have her final scores.']
        },
        {
          q: 'Step 2: allow for a second attempt', a: 'First test no later than mid-January',
          steps: ['Results for a computer test take 1–5 days. A One Skill Retake must be taken within 60 days of the full test, with results in 3–5 days. A full retake needs a date with free places and another 1–5 days.', 'If she tests on 16 January 2027, she should have results by about 21 January. Sixty days from 16 January runs to 17 March, so a One Skill Retake in late February would give results in early March – well before 20 March.', 'If more than one skill is short, a full retake in late February or early March would also still produce results before 20 March.']
        },
        {
          q: 'Step 3: use the time before the first test well', a: 'Six weeks, Writing first',
          steps: ['From 1 December to 16 January is about six and a half weeks. Writing needs the most attention – that is where the "no band below 6.5" condition is at risk.', 'She books immediately, because January dates before application deadlines are popular.']
        }
      ],
      lesson: 'Never make your first attempt your only attempt. Plan the first test early enough that a One Skill Retake or a full retake still fits before the deadline.'
    },
    {
      title: 'Remark, One Skill Retake or full retake?',
      source: `<div class="prompt-box">
<p><b>Sofia</b> needs 6.5 in every skill; her organisation accepts One Skill Retake. Result: L 7.5, R 7.0, W 6.0, S 7.0. She finished both Writing tasks on topic, and her last four practice essays were assessed by her teacher at 6.5.</p>
<p><b>Karim</b> needs 7.0 overall in General Training. Result: L 6.0, R 6.5, W 6.0, S 6.0. His practice results were similar.</p>
<p><b>Mei</b> needs 7.0 in every skill for an immigration route that does not accept One Skill Retake. Result: L 8.0, R 7.5, W 7.0, S 6.5. She was very nervous in Speaking and gave several short answers.</p>
</div>`,
      questions: '<p>What should each candidate do next?</p>',
      walk: [
        {
          q: 'Sofia', a: 'Probably a remark of Writing, while preparing for a One Skill Retake',
          steps: ['Only one condition fails: Writing is half a band short.', 'Her Writing result is out of line with consistent outside assessment of her practice at 6.5, and she completed both tasks on topic. A remark of Writing is a reasonable request, and the fee is refunded if the score rises.', 'She should not simply wait. The remark can take up to about three weeks, and a One Skill Retake must be within 60 days of the test. She keeps practising Writing and, if the remark confirms 6.0, books a Writing retake inside the 60-day window (asking her centre how a pending remark affects booking).']
        },
        {
          q: 'Karim', a: 'More preparation, then a full retake',
          steps: ['Sum: 6.0 + 6.5 + 6.0 + 6.0 = 24.5; average 6.125; overall 6.0.', 'For 7.0 overall he needs a sum of at least 27.0 – two and a half bands more across the four skills. No single skill can realistically supply that, so a One Skill Retake cannot solve it.', 'His scores match his practice, so a remark is unlikely to change anything. The honest plan is several more months of preparation across all skills, then a full test.']
        },
        {
          q: 'Mei', a: 'Focused Speaking preparation, then a full retake',
          steps: ['Only Speaking (6.5) is short, but her route does not accept One Skill Retake, so that option is closed.', 'She knows why the score was low – short, nervous answers – so a remark is unlikely to help: the examiner marked what she actually said.', 'She should work specifically on extending answers and on test-like Speaking practice, then take a full test again. Her Listening and Reading are strong, but she must keep them in practice, because a full retake re-tests everything.']
        }
      ],
      lesson: 'Match the option to the problem: a remark when one score is out of line with good evidence; a One Skill Retake when one skill is short and it is accepted; a full retake, after real preparation, when the gap is wider or the retake is not accepted.'
    }
  ],
  dos: [
    'Book with your name exactly as it appears on the ID you will bring, and bring that same document.',
    'Plan your first test early enough to allow a second attempt before your deadline.',
    'Check the confirmation for the Speaking date and time.',
    'Take the official computer familiarisation test before test day.',
    'Raise your hand immediately if headphones, the computer or anything else is not working.',
    'Check results against every condition of your requirement before sending them.',
    'Confirm that your organisation accepts One Skill Retake before you rely on it.'
  ],
  donts: [
    'Don\'t bring a different or expired ID – you will not be allowed to take the test.',
    'Don\'t take your phone, a watch or food into the test room.',
    'Don\'t book your only test date days before a deadline.',
    'Don\'t request a remark just because a score is disappointing – only when there is good reason to expect a different judgement.',
    'Don\'t post or share test questions after the test; it breaks the test rules.',
    'Don\'t study late into the night before the test.'
  ],
  careful: [
    {
      title: 'The ID trap',
      body: '<p>The commonest administrative disaster is bringing a different document from the one used at booking – for example, a new passport, or a national ID card when the booking used a passport.</p>',
      example: 'Booked with passport A1234567, renewed it in between and brought the new passport → contact the centre before test day, not on the morning.'
    },
    {
      title: 'The 60-day window for One Skill Retake',
      body: '<p>A One Skill Retake must be taken within 60 days of the full test, and test dates fill up. If you intend to use it, look at available dates as soon as your results arrive.</p>'
    },
    {
      title: 'Assuming every organisation accepts everything',
      body: '<p>IELTS Online, One Skill Retake and older results are each accepted by some organisations and refused by others. A result that is perfectly valid for one university may be useless for a visa application.</p>'
    },
    {
      title: 'Treating a remark as a second chance',
      body: '<p>A remark re-examines the performance you gave; it does not let you improve it. If you know you ran out of time or gave short answers, the remark will very probably confirm the score.</p>'
    },
    {
      title: 'Advice from someone who tested elsewhere',
      body: '<p>Procedures for registration, notes and breaks are explained by your centre on the day and can differ in detail between centres and countries. Follow your centre\'s instructions, not a forum post.</p>'
    }
  ],
  timing: `
<div class="table-wrap"><table class="data-table plain">
<tr><th>When</th><th>What to do</th></tr>
<tr><td>10–12 weeks before your deadline</td><td>Confirm the requirement; plan backwards; book</td></tr>
<tr><td>2–3 weeks before the test</td><td>Computer familiarisation test; full 2 h 40 min rehearsal</td></tr>
<tr><td>The day before</td><td>ID, route, clothes; light review; early night</td></tr>
<tr><td>Test day</td><td>Arrive early; register; Listening → Reading → Writing; Speaking at its scheduled time</td></tr>
<tr><td>1–5 days after (computer)</td><td>Results; check against the requirement; send or decide on next steps</td></tr>
<tr><td>Within 6 weeks</td><td>Last date to request a remark</td></tr>
<tr><td>Within 60 days</td><td>Last date to take a One Skill Retake</td></tr>
</table></div>`,
  faq: [
    { q: 'Can I take IELTS as many times as I like?', a: '<p>You can book a new full test whenever a suitable date is available. The only retake limit IELTS states concerns One Skill Retake: one retake for each full test.</p>' },
    { q: 'What if I am ill on test day?', a: '<p>Contact your test centre as soon as possible, before the test if you can. Policies on medical cases, transfers and refunds are set by the test provider and usually require evidence such as a medical certificate.</p>' },
    { q: 'Can I go to the toilet during the test?', a: '<p>There are no breaks between Listening, Reading and Writing, and IELTS advises you to go before you enter the test room. If you must leave during the test, raise your hand and follow the invigilator\'s instructions; the clock does not stop.</p>' },
    { q: 'Can I choose the time of my Speaking test?', a: '<p>Some centres let you choose a Speaking slot when you book; others assign one. Either way, the time is in your confirmation – check it carefully.</p>' },
    { q: 'Will the organisation see that I took a One Skill Retake?', a: '<p>Your new Test Report Form shows the retaken score together with your original scores for the other three skills. You can choose to use your original Test Report Form instead. Organisations decide for themselves whether to accept retake results, so ask yours how it treats them before you book.</p>' },
    { q: 'Does it matter which centre or provider I choose?', a: '<p>No – the test, the marking and the result are the same whichever centre or provider delivers it. Choose on convenience, available dates and the delivery options you need. (If you plan a One Skill Retake, check with the centre where it can be taken.)</p>' }
  ],
  exercises: {
    id: 'ch-exam-test-day',
    title: 'Chapter exercises: booking, test day and results',
    groups: [
      {
        kind: 'choice', instructions: 'Choose the correct answer, <b>A, B, C or D</b>.',
        questions: [
          { n: 1, q: 'Which identity document must you bring on test day?', opts: ['Any official photo ID', 'The same document you used to book', 'A photocopy of your passport', 'Your booking confirmation'], a: 'B', x: 'IELTS states you must bring the same ID you used when booking; with the wrong ID, or none, you cannot take the test.' },
          { n: 2, q: 'Which of these may you take into the test room?', opts: ['A watch', 'Water in a clear bottle', 'A snack', 'Your phone, switched off'], a: 'B', x: 'Water is allowed in a clear bottle. Watches and food are not, and phones stay outside with your other belongings – switched off.' },
          { n: 3, q: 'By when must you request a remark?', opts: ['Within two weeks of receiving results', 'Within six weeks of the test date', 'Within 60 days of the test', 'At any time while the result is valid'], a: 'B', x: 'A remark must be requested within six weeks of the test date on your Test Report Form.' },
          { n: 4, q: 'Which full test makes you eligible for a One Skill Retake?', opts: ['Any IELTS test, including IELTS Online', 'An IELTS on computer test at a centre that offers One Skill Retake', 'Only an IELTS for UKVI test', 'Any test with an overall band of at least 6.0'], a: 'B', x: 'The full test must be IELTS on computer at a participating centre, and the retake must be taken within 60 days.' },
          { n: 5, q: 'After a One Skill Retake, which Test Report Form can you use?', opts: ['Only the new one', 'Only the original one', 'Either – you choose', 'Neither until both are combined by the centre'], a: 'C', x: 'You receive a new Test Report Form and can choose whether to use the original or the new one.' },
          { n: 6, q: 'You want your results sent to eight universities. What is the most practical way?', opts: ['Post paper Test Report Forms – all eight are free', 'Electronic delivery through the IELTS Results Service', 'Email them a photo of your Test Report Form', 'Take the test eight times'], a: 'B', x: 'Electronic delivery can go to as many organisations as you like. Postal delivery is free for up to five organisations, with a fee beyond that. A photo is not an official result.' },
          { n: 7, q: 'All four of your scores match your practice tests, but the overall band is a full band below your target. What is usually the best plan?', opts: ['Request a remark of all four skills', 'One Skill Retake in your weakest skill', 'Further preparation across the skills, then a full retake', 'Retake immediately without further study'], a: 'C', x: 'A gap of a full overall band cannot normally be closed by one skill, and scores that match your practice are unlikely to change on remark.' },
          { n: 8, q: 'After your test, a website asks you to post the Writing questions you saw. What should you do?', opts: ['Post them – it helps other candidates', 'Post them anonymously', 'Do not post them – sharing test content breaks the test rules', 'Post only the Task 1 chart'], a: 'C', x: 'Sharing or publishing test content is malpractice and can lead to results being withheld or cancelled.' },
          { n: 9, q: 'When should you raise a problem with your headphones?', opts: ['Immediately, before or as soon as it happens', 'After the Listening test', 'After the whole session', 'In your remark request'], a: 'A', x: 'Problems reported during the test can be dealt with at the time. Once the recording has played, it cannot be repeated.' },
          { n: 10, q: 'How long does IELTS recommend that results be considered valid?', opts: ['One year', 'Two years', 'Three years', 'Indefinitely'], a: 'B', x: 'IELTS recommends two years. Individual organisations may accept older results or require more recent ones.' }
        ]
      }
    ]
  },
  checklist: [
    'I have planned my first test date backwards from my deadline, with room for a second attempt.',
    'My booking name and ID details match the document I will bring.',
    'I know the date and time of both my written test session and my Speaking test.',
    'I know what I can and cannot take into the test room.',
    'I have done the official computer familiarisation test and a full 2 h 40 min rehearsal.',
    'I know when my results will arrive and how to send them.',
    'I know the six-week remark deadline and the 60-day One Skill Retake window, and whether my organisation accepts One Skill Retake.',
    'I have read the common examination mistakes for every skill.'
  ],
  summary: [
    'Book early, with your name exactly as on your ID, and bring that same ID on test day.',
    'Listening, Reading and Writing are one 2 h 40 min session with no breaks; Speaking may be on another day.',
    'Phones and other belongings stay outside; no watches or food; water only in a clear bottle.',
    'Computer results: 1–5 days; IELTS Online: 6–8 days; results are recommended as valid for two years.',
    'Remark: within six weeks, fee refunded if the score increases. One Skill Retake: within 60 days of a computer test, once per test, not accepted everywhere.',
    'Most lost marks on the day come from avoidable mistakes – read the list in section 8 again before your test.'
  ],
  references: [
    { title: 'IELTS: What to expect on test day', url: 'https://ielts.org/take-a-test/preparation-resources/on-test-day', note: 'ID, belongings, phones, water, watches and the 2 h 40 min session.' },
    { title: 'IELTS: Getting and sharing your results', url: 'https://ielts.org/take-a-test/your-results/getting-and-sharing-your-results', note: 'Results times by delivery mode, paper and electronic TRFs, sending results to organisations.' },
    { title: 'IELTS: One Skill Retake', url: 'https://ielts.org/take-a-test/booking-your-test/one-skill-retake', note: 'Eligibility, the 60-day window, one retake per test, results and choice of Test Report Form.' },
    { title: 'IELTS: Ways to take IELTS', url: 'https://ielts.org/take-a-test/why-choose-ielts/ways-to-take-ielts' },
    { title: 'IELTS: Updates to IELTS test delivery (5 March 2026)', url: 'https://ielts.org/news-and-insights/updates-to-ielts-test-delivery', note: 'Access arrangements and One Skill Retake with Writing on Paper.' },
    { title: 'British Council: Request a remark', url: 'https://takeielts.britishcouncil.org/results/request-remark', note: 'The remark (Enquiry on Results) process, deadline and refund policy for British Council centres.' },
    { title: 'IDP: How to request a remark of your IELTS test', url: 'https://ielts.idp.com/results/request-remark', note: 'The same process for IDP centres; fees vary by country.' },
    { title: 'IDP: Which organisations accept IELTS One Skill Retake?', url: 'https://ielts.idp.com/about/news-and-articles/article-which-organisations-accept-ielts-one-skill-retake', note: 'Examples of acceptance, including IRCC\'s position on Express Entry. Always confirm with your own organisation.' },
    { title: 'IELTS: IELTS scoring in detail', url: 'https://ielts.org/take-a-test/your-results/ielts-scoring-in-detail', note: 'The two-year validity recommendation.' }
  ]
};

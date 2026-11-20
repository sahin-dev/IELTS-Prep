import type { SkillGuide } from '@/lib/types';

export const listening: SkillGuide = {
  intro: `
<p>The Listening test has <b>4 parts</b> and <b>40 questions</b>, lasting about 30 minutes. You hear each recording <b>only once</b>. Accents include British, Australian, New Zealand, North American and others. Questions follow the order of the recording.</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Part</th><th>Situation</th><th>Speakers</th><th>Typical tasks</th></tr>
<tr><td>1</td><td>Everyday social – booking, enquiry, registration</td><td>2 (conversation)</td><td>Form/note/table completion. Names, numbers, dates, addresses – spelling matters.</td></tr>
<tr><td>2</td><td>Everyday monologue – tour guide, radio talk, facility information</td><td>1</td><td>Multiple choice, map/plan labelling, matching.</td></tr>
<tr><td>3</td><td>Educational/training discussion – students and a tutor</td><td>2–4</td><td>Multiple choice, matching, opinions and agreement. Hardest to follow due to several voices.</td></tr>
<tr><td>4</td><td>Academic lecture</td><td>1</td><td>Note/summary completion (often ONE WORD ONLY). No break in the middle.</td></tr>
</table></div>
<h3>Universal listening strategies</h3>
<ul class="steps">
<li><b>Use the reading time.</b> Before each part you get ~30 seconds. Read the questions, underline keywords and <b>predict the answer type</b> – a number? a plural noun? a place? an adjective?</li>
<li><b>Listen for paraphrase, not the exact words.</b> The question says "cost"; the speaker says "it'll set you back £40".</li>
<li><b>Expect distractors.</b> Speakers often give one answer then correct it: <i>"Tuesday... oh no, sorry, that's been changed to Thursday."</i> The last, confirmed information is correct.</li>
<li><b>Follow signposting language</b> to stay in place: <i>"Moving on to...", "Another point is...", "Finally..."</i>.</li>
<li><b>Never stop to think.</b> If you miss an answer, move to the next question immediately. Guess at the end.</li>
<li><b>Check spelling, plurals and word limits</b> in the transfer/review time.</li>
</ul>
<h3>Common traps</h3>
<div class="grid-2">
<div class="card"><h4>Numbers</h4><ul>
<li>13 vs 30, 14 vs 40, 15 vs 50 – listen to stress: thir<b>TEEN</b> vs <b>THIR</b>ty.</li>
<li>"Double three" = 33; "oh" = 0 in phone numbers.</li>
<li>Prices: "four fifty" = £4.50. "A hundred and twenty" = 120.</li>
<li>Dates: 3rd of May, May 3rd – both accepted (write "3 May").</li></ul></div>
<div class="card"><h4>Spelling</h4><ul>
<li>Know the alphabet sounds: A/E/I, G/J, B/P/V, M/N, S/F, Q/U/W, Y.</li>
<li>"Double L" = LL. "That's P for Peter".</li>
<li>Commonly spelled words: <i>accommodation, restaurant, library, environment, necessary, Wednesday, February</i>.</li>
<li>See the Listening vocabulary page for a full spelling list.</li></ul></div>
</div>
`,
  types: [
    {
      id: 'form', name: 'Form, Note, Table, Flow-chart & Summary Completion', freq: 'Every test', practice: 'l-form',
      what: 'Fill gaps in a form, notes, table, flow-chart or summary with words you hear. Part 1 usually uses a <b>form</b> (personal details, bookings); Part 4 usually uses <b>notes</b> on a lecture.',
      looksLike: `<i>Complete the form below. Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.</i>`,
      definitions: `<p>The headings in the form or notes tell you what kind of information to expect. In Part 4 the notes are usually organised in the same order as the lecture's sections.</p>`,
      strategy: [
        'Check the word limit – Part 4 is often ONE WORD ONLY.',
        'Read the whole form/notes quickly to understand the topic and structure.',
        'For each gap, predict the <b>type</b> of answer: name, number, date, noun (singular/plural), adjective.',
        'Notice words just before and after the gap – the speaker will say something close to these words.',
        'Write exactly what you hear; you may paraphrase the context but the answer word itself is usually said directly.',
        'In tables, read across rows and down columns to see the pattern of information.'
      ],
      traps: [
        'Corrections: "It\'s 15 Park Road – sorry, 50 Park Road."',
        'Spelling of names and streets – always given letter by letter in Part 1.',
        'Plurals: the notes say "a range of ______" → plural noun likely.',
        'Writing an answer that exceeds the word limit, e.g. "the morning" when "morning" fits.'
      ],
      example: `<p><b>Form:</b> Date of arrival: ______ &nbsp; <b>Audio:</b> "We were going to come on the 12th, but we've had to push it back a day."<br>→ Answer: <b>13th</b> (13 + correction trap)</p>`
    },
    {
      id: 'mcq', name: 'Multiple Choice', freq: 'Every test', practice: 'l-mcq',
      what: 'Choose one answer from A–C, or two/three answers from a longer list. Appears in all parts but is most challenging in Part 3, where speakers discuss and change their minds.',
      looksLike: `<i>Choose the correct letter, <b>A, B or C</b>.</i>`,
      definitions: `<p>Usually <b>all three options are mentioned</b> in the recording. You must decide which one actually answers the question.</p>`,
      strategy: [
        'In the reading time, underline keywords in the question stem and quickly note the difference between options.',
        'Paraphrase the options in your head: "too expensive" = "costs a fortune", "beyond our budget".',
        'Listen for the stem\'s keywords to know when the answer is coming.',
        'Expect all options to be mentioned – eliminate those that are rejected, refer to the past/future, or belong to another person.',
        'In Part 3, listen for agreement/disagreement: <i>"I\'m not sure about that...", "Exactly.", "That\'s a fair point, but..."</i>'
      ],
      traps: ['An option is mentioned but then rejected ("We thought about the bus, but...").', 'The first option heard is rarely the answer simply because it was heard first.', 'Questions about one speaker\'s opinion – the other speaker may say the distractor.'],
      example: `<p>Why did the woman choose the course? A cost B location C timing<br><b>Audio:</b> "It's not cheap, and it's quite far from home, but the evening classes fit around my job perfectly." → <b>C</b></p>`
    },
    {
      id: 'map', name: 'Plan, Map & Diagram Labelling', freq: 'Most tests (Part 2)', practice: 'l-map',
      what: 'Label places on a map or plan (e.g. a park, campus, museum floor) by choosing letters, or label parts of a diagram/machine. Requires following spoken <b>directions</b>.',
      looksLike: `<i>Label the map below. Write the correct letter, <b>A–H</b>, next to Questions 11–16.</i>`,
      definitions: `<p>You must know <b>direction language</b>: <i>opposite, next to, adjacent to, at the far end, beyond, on the corner, in the north-east corner, go past, take the second turning on the left, clockwise</i>. See the Listening vocabulary page for a full list.</p>`,
      strategy: [
        'Find the <b>starting point</b> ("You are here", main entrance) and orient yourself – note where north is.',
        'Look at what is already labelled; these places will be used as reference points.',
        'Look at the letters and the paths/roads that connect them.',
        'Follow with your pencil as the speaker moves – trace the route.',
        'Places are described in question order, so the route usually moves logically around the map.'
      ],
      traps: ['Confusing left/right after turning – imagine yourself walking.', 'Distractors: "Some people think the café is by the lake, but it\'s actually..."', 'Missing the reference point when the speaker uses "it" or "there".'],
      example: `<p><b>Audio:</b> "Go straight along the main path, and just after the fountain, the gift shop is on your left, opposite the toilets." → locate the fountain, move past it, choose the letter on the left side.</p>`
    },
    {
      id: 'matching', name: 'Matching', freq: 'Common (Parts 2 & 3)', practice: 'l-matching',
      what: 'Match a numbered list of items (people, places, features) to a set of options (opinions, descriptions, actions). Tests your ability to follow a detailed conversation.',
      looksLike: `<i>What does the tutor say about each of the following sources? Choose <b>FIVE</b> answers from the box and write the correct letter, <b>A–G</b>.</i>`,
      definitions: `<p>The numbered items are heard <b>in order</b>; the options in the box are not. There are more options than questions.</p>`,
      strategy: [
        'Read the options in the box carefully and think of synonyms for each.',
        'The numbered items act as signposts – when you hear item 2, the answer to item 1 has passed.',
        'Note each speaker\'s final view; several options may be mentioned for each item.',
        'Write the letter immediately; review uncertain ones at the end.'
      ],
      traps: ['Options mentioned in passing for the wrong item.', 'Speakers disagreeing: the final agreed opinion matters.'],
      example: `<p>Item: <b>The government report</b> &nbsp; Options: A out of date B too long C biased<br><b>Audio:</b> "It's very detailed, which I liked, although honestly most of the figures are from ten years ago." → <b>A</b></p>`
    },
    {
      id: 'sentence', name: 'Sentence Completion', freq: 'Common', practice: 'l-sentence',
      what: 'Complete sentences that summarise key information from the recording within a word limit.',
      looksLike: `<i>Complete the sentences below. Write <b>NO MORE THAN TWO WORDS</b> for each answer.</i>`,
      definitions: `<p>The sentence is a <b>paraphrase</b> of what is said; the answer words are usually heard exactly.</p>`,
      strategy: ['Read the sentence and predict grammar and meaning.', 'Listen for paraphrases of the words around the gap.', 'Make sure the completed sentence is grammatical.'],
      traps: ['Over the word limit.', 'Wrong word form (e.g. "economy" vs "economical").'],
      example: `<p>Visitors should wear ______ shoes. <b>Audio:</b> "The paths get muddy, so comfortable waterproof footwear is essential." → <b>waterproof</b></p>`
    },
    {
      id: 'short-answer', name: 'Short-answer Questions', freq: 'Occasional', practice: 'l-sentence',
      what: 'Answer questions (What? When? How much?) with short answers, or list items (e.g. "Name TWO things...").',
      looksLike: `<i>Answer the questions below. Write <b>NO MORE THAN THREE WORDS AND/OR A NUMBER</b> for each answer.</i>`,
      definitions: `<p>The question word tells you the information type. Listen for the paraphrased question topic.</p>`,
      strategy: ['Underline the question word and predict the answer type.', 'Listen for synonyms of the question\'s key nouns.', 'Write only the key words – not full sentences.'],
      traps: ['Answering with the wrong category (a time when the question asks "how long").', 'Missing the answer because you wait for the exact question words.'],
      example: `<p>What must visitors show at the entrance? <b>Audio:</b> "Don't forget to bring your booking reference with you – you'll need it at the gate." → <b>booking reference</b></p>`
    }
  ]
};

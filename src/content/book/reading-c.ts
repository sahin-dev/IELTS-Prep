import type { Chapter } from '@/lib/types';

/* Reading chapters: sentence endings, sentence completion, summary, diagram, short answer */

const stillSvg = `<svg viewBox="0 0 600 300" width="600" style="color:var(--text)" font-family="inherit">
<rect x="0" y="0" width="600" height="300" fill="#fefce8" rx="8"/>
<path d="M20,110 L120,110 Q300,330 480,110 L580,110 L580,290 L20,290 Z" fill="#d6b588"/>
<path d="M60,110 Q120,90 140,110 M460,110 Q480,90 540,110" fill="#a8803f" stroke="#7c5a22" stroke-width="2"/>
<path d="M130,108 L300,215 L470,108" fill="none" stroke="#38bdf8" stroke-width="4"/>
<circle cx="300" cy="210" r="10" fill="#57534e"/>
<rect x="276" y="236" width="48" height="34" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/>
<rect x="278" y="256" width="44" height="12" fill="#60a5fa"/>
<path d="M318,240 C360,200 400,150 430,95 L470,70" fill="none" stroke="#16a34a" stroke-width="3"/>
<g fill="#0369a1"><circle cx="230" cy="168" r="3"/><circle cx="260" cy="190" r="3"/><circle cx="350" cy="182" r="3"/><circle cx="380" cy="160" r="3"/></g>
<circle cx="80" cy="40" r="20" fill="#facc15"/>
<g font-size="14" font-weight="700" fill="#1c2233">
<line x1="200" y1="150" x2="150" y2="60" stroke="#1c2233"/><text x="95" y="52">Q1 ____________</text>
<line x1="300" y1="200" x2="230" y2="245" stroke="#1c2233"/><text x="120" y="262">Q2 ________</text>
<line x1="320" y1="262" x2="400" y2="270" stroke="#1c2233"/><text x="405" y="276">Q3 ____________</text>
<line x1="80" y1="102" x2="40" y2="140" stroke="#1c2233"/><text x="25" y="160">Q4 ______</text>
<line x1="470" y1="70" x2="500" y2="45" stroke="#1c2233"/><text x="440" y="36">Q5 ________</text>
</g>
<text x="300" y="296" font-size="11" text-anchor="middle" fill="#57534e">cross-section (not to scale)</text></svg>`;

export const readingChaptersC: Record<string, Chapter> = {
  /* ======================================================================= */
  'sentence-endings': {
    intro: `
<p>In this task you are given the first halves of several sentences and a list of possible second halves (endings). You choose the ending that completes each sentence so that it <b>matches the meaning of the passage</b>. There are always more endings than beginnings.</p>
<p>Two skills work together here. The first is <b>grammar</b>: many endings simply cannot follow a given beginning because the verb form, the number (singular/plural) or the structure does not fit. Grammar lets you shortlist two or three endings in seconds. The second is <b>meaning</b>: among the endings that fit grammatically, only one produces a sentence that the passage supports. The distractor endings are usually true facts taken from the same passage – they just belong to a different beginning, or to none.</p>
<p>The beginnings follow the order of the passage, which makes locating them straightforward.</p>`,
    facts: [
      ['Appears in', 'Academic and General Training; less common than TFNG or MCQ'],
      ['Number of questions', 'Usually 3–6 beginnings, with 2–3 extra endings'],
      ['Order', 'Beginnings follow the passage order; endings are mixed'],
      ['You write', 'A letter (A, B, C...)'],
      ['Main skill', 'Grammar awareness + detailed reading'],
      ['Target time', 'About 1 minute per sentence']
    ],
    anatomy: `
<div class="instructions" style="background:var(--surface-2);padding:12px 16px;border-radius:8px"><i>Complete each sentence with the correct ending, <b>A–H</b>, below.<br>Write the correct letter, <b>A–H</b>, in boxes 32–36 on your answer sheet.</i></div>
<ul><li>Each ending is used <b>once at most</b>; several are not used.</li><li>The completed sentence must be both <b>grammatically correct</b> and <b>true according to the passage</b>.</li></ul>`,
    method: [
      { title: 'Read the beginnings and underline their keywords', body: '<p>Beginnings follow the passage order. Their keywords (names, technical nouns) are your locators.</p>' },
      { title: 'Read all the endings once', body: '<p>Get a sense of what the endings are about. Notice their grammatical form: does an ending start with a verb, a "by + -ing", "because", "to", a noun?</p>' },
      { title: 'Shortlist with grammar', body: '<p>For each beginning, ask what can come next: a singular or plural verb? a noun? "by + -ing"? a reason clause? Cross out endings that cannot fit. Usually two or three remain.</p>', example: '"Green roofs ___" needs a plural verb → "help to prevent flooding" ✓, "is less significant" ✗.' },
      { title: 'Locate the beginning in the passage and read carefully', body: '<p>Scan for the beginning\'s keywords. Read the relevant sentences in full.</p>' },
      { title: 'Choose the ending that matches the passage\'s meaning', body: '<p>Of your shortlist, choose the ending that produces a sentence the passage supports. Paraphrase is normal: the ending will rarely repeat the text\'s words.</p>' },
      { title: 'Read the whole completed sentence', body: '<p>Read beginning + ending together. Does it sound grammatical? Does it say exactly what the passage says – not more, not less? Then cross off that ending.</p>' }
    ],
    worked: [
      {
        title: 'Cities that Cook',
        source: `<h3>Cities that Cook</h3>
<p>On a summer evening, the centre of a large city can be several degrees warmer than the surrounding countryside. This difference, now known as the urban heat island effect, was first described in the early nineteenth century by an amateur scientist who recorded temperatures in London and in the villages around it.</p>
<p>The main cause is the materials from which cities are built. Asphalt and concrete absorb the sun's energy during the day and release it slowly after dark, which is why the difference between city and countryside is usually greatest at night rather than at midday. The shortage of vegetation adds to the problem: plants cool the air around them by releasing water vapour, a process that is largely absent in paved areas. Heat from vehicles, factories and machinery makes a further contribution, although its effect is smaller than many people assume.</p>
<p>The consequences go beyond discomfort. During heatwaves, death rates rise more steeply in city centres than in rural areas, particularly among elderly people living alone. Higher temperatures also increase demand for air-conditioning, which raises energy use and, in turn, releases yet more heat into the streets.</p>
<p>Cities are responding in several ways. Some have painted roofs white or pale grey so that they reflect sunlight instead of absorbing it. Others are planting trees along streets, which provide shade as well as cooling the air. Green roofs, covered with low-growing plants, are more expensive to install, but they also reduce the risk of flooding by absorbing rainwater.</p>`,
        instructions: '<i>Complete each sentence with the correct ending, <b>A–H</b>.</i>',
        questions: `<ol>
<li>The urban heat island effect was first identified</li>
<li>The temperature difference between city and countryside is greatest at night</li>
<li>Plants help to lower air temperatures</li>
<li>The heat produced by vehicles and machinery</li>
<li>Rising demand for air-conditioning</li>
<li>Green roofs</li>
</ol>
<div class="option-box"><div>A by giving off water vapour.</div><div>B creates a cycle of rising energy use and heat.</div><div>C by comparing temperatures in a city and nearby villages.</div><div>D is most dangerous for young children.</div><div>E because building materials release stored heat after dark.</div><div>F help to prevent flooding as well as reducing heat.</div><div>G is less significant than is commonly believed.</div><div>H are cheaper to install than other solutions.</div></div>`,
        walk: [
          { q: '1. The urban heat island effect was first identified...', a: 'C', steps: [
            '<b>Grammar:</b> after "was first identified" we need a phrase describing how/when/by whom: <i>by + -ing</i> fits (A, C), a "because" clause fits (E). Verbs (B, D, G) and plural verbs (F, H) don\'t fit.',
            '<b>Locate:</b> paragraph 1: "first described... by an amateur scientist who recorded temperatures in London and in the villages around it".',
            '<b>Meaning:</b> C "by comparing temperatures in a city and nearby villages" matches. A also fits grammatically, but water vapour belongs to plants (paragraph 2). Grammar shortlists; meaning decides.'
          ] },
          { q: '2. ...greatest at night', a: 'E', steps: [
            '<b>Grammar:</b> the beginning is a complete clause, so we need a reason or manner phrase: A, C or E.',
            '<b>Locate:</b> paragraph 2: "absorb the sun\'s energy during the day and release it slowly after dark, which is why the difference... is usually greatest at night".',
            '<b>Meaning:</b> E "because building materials release stored heat after dark". <i>which is why</i> signals the cause–effect relationship.'
          ] },
          { q: '3. Plants help to lower air temperatures...', a: 'A', steps: [
            '<b>Grammar:</b> a manner phrase: A or C (E is possible but doesn\'t make sense).',
            '<b>Locate:</b> "plants cool the air around them by releasing water vapour".',
            '<b>Meaning:</b> A "by giving off water vapour" (giving off = releasing).'
          ] },
          { q: '4. The heat produced by vehicles and machinery...', a: 'G', steps: [
            '<b>Grammar:</b> "The heat" is singular → we need a singular verb: B, D or G.',
            '<b>Locate:</b> "Heat from vehicles, factories and machinery makes a further contribution, although its effect is smaller than many people assume."',
            '<b>Meaning:</b> G "is less significant than is commonly believed" (smaller than many people assume). D is about death rates and elderly people – wrong group (the passage says elderly, not children). B describes air-conditioning, not vehicles.'
          ] },
          { q: '5. Rising demand for air-conditioning...', a: 'B', steps: [
            '<b>Grammar:</b> singular subject ("demand") → B, D or G (G is already used).',
            '<b>Locate:</b> "increase demand for air-conditioning, which raises energy use and, in turn, releases yet more heat into the streets".',
            '<b>Meaning:</b> B "creates a cycle of rising energy use and heat" – the passage describes a loop: heat → air-conditioning → more heat.'
          ] },
          { q: '6. Green roofs...', a: 'F', steps: [
            '<b>Grammar:</b> plural subject → plural verb: F or H.',
            '<b>Locate:</b> "Green roofs... are more expensive to install, but they also reduce the risk of flooding by absorbing rainwater."',
            '<b>Meaning:</b> F ✓. H says they are <i>cheaper</i> – the opposite of the passage. A perfect example of a grammatically correct distractor with the wrong meaning.'
          ] }
        ],
        lesson: 'Grammar cut the choices from eight to two or three every time; meaning then decided. Unused endings D and H were both grammatically possible and built from passage words (death rates, install) – which is exactly why they were there.'
      }
    ],
    dos: [
      'Use grammar to shortlist: singular/plural, verb form, "by + -ing", "because".',
      'Locate each beginning (they follow passage order).',
      'Read the completed sentence in full before deciding.',
      'Cross off endings as you use them.',
      'Expect paraphrase in the endings.'
    ],
    donts: [
      'Don\'t choose an ending only because it is true somewhere in the passage.',
      'Don\'t rely on grammar alone – several endings may fit grammatically.',
      'Don\'t use an ending twice.',
      'Don\'t ignore small words like "more", "less", "only" in endings.'
    ],
    careful: [
      { title: 'True facts, wrong subject', body: '<p>Distractor endings are often accurate statements from the passage that describe a different thing. The ending must be true <b>of this beginning</b>.</p>' },
      { title: 'Opposite comparisons', body: '<p>"cheaper than" vs "more expensive than", "increased" vs "reduced". The ending may use the exact topic of the passage but reverse a comparison.</p>' }
    ],
    timing: '<p>About <b>1 minute per sentence</b>. Grammar shortlisting takes seconds; most of the time is careful reading of the located sentence.</p>',
    checklist: ['I shortlist endings using grammar first.', 'I check meaning against the passage, not my knowledge.', 'I read beginning + ending as one sentence before deciding.'],
    summary: [
      'Grammar shortlists; meaning decides.',
      'Beginnings follow the passage order; endings are mixed and some are unused.',
      'Distractors are usually true facts about something else, or reversed comparisons.'
    ]
  },

  /* ======================================================================= */
  'sentence-completion': {
    intro: `
<p>Sentence completion gives you sentences with a gap and asks you to fill the gap with words <b>copied from the passage</b>, within a word limit. The sentences paraphrase the passage, but the missing word itself must be taken exactly from the text.</p>
<p>Marks in this task are lost in three ways: choosing the wrong part of the text, going over the <b>word limit</b>, and making a <b>copying error</b> (spelling, singular/plural, wrong word form). This chapter deals with all three. The method relies heavily on <b>prediction</b>: before you look at the passage, you decide what kind of word the gap needs, which makes the answer easy to spot when you reach it.</p>`,
    facts: [
      ['Appears in', 'Academic and General Training'],
      ['Number of questions', 'Usually 3–6'],
      ['Order', 'Follows the passage order'],
      ['You write', 'Words copied from the passage'],
      ['Main skill', 'Prediction, scanning, accurate copying'],
      ['Target time', 'About 1 minute per gap']
    ],
    anatomy: `
<div class="instructions" style="background:var(--surface-2);padding:12px 16px;border-radius:8px"><i>Complete the sentences below.<br>Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.</i></div>
<div class="table-wrap"><table class="data-table plain">
<tr><th>Instruction</th><th>Allowed</th><th>Not allowed</th></tr>
<tr><td>ONE WORD ONLY</td><td>stables</td><td>the stables</td></tr>
<tr><td>NO MORE THAN TWO WORDS</td><td>tax income · bandits</td><td>their tax income</td></tr>
<tr><td>NO MORE THAN TWO WORDS AND/OR A NUMBER</td><td>40 kilometres · 1770 · two days</td><td>about 40 kilometres</td></tr>
<tr><td>ONE WORD AND/OR A NUMBER</td><td>1795 · clay · 3</td><td>3 days (two items is fine only if it is one word + one number)</td></tr>
</table></div>
<p>A number written in figures counts as a number, not a word. Hyphenated words (<i>well-known</i>) count as one word. Writing more than the limit makes the answer wrong even if the right word is inside it.</p>`,
    method: [
      { title: 'Circle the word limit', body: '<p>Read the instructions and circle the limit. It applies to every gap in the set.</p>' },
      { title: 'Predict the type of word for each gap', body: '<p>Read the sentence and decide: noun or verb? singular or plural? a number, a person, a place, a material? Look at the words immediately before and after the gap: <i>a/an</i> → singular noun; <i>many/several</i> → plural noun; <i>to</i> → base verb; <i>very</i> → adjective.</p>', example: '"Animals entered through a ______ in the outer wall." → singular countable noun (after "a"), a part of a building.' },
      { title: 'Locate using the other words in the sentence', body: '<p>The words around the gap are paraphrased from the passage. Scan for them (or their synonyms). The answers follow the passage order.</p>' },
      { title: 'Find the word that fits your prediction', body: '<p>In the located sentence, find the word(s) that fit the grammar and meaning of the gap. Copy them <b>exactly</b>: same spelling, same form, same singular/plural.</p>' },
      { title: 'Cut to the word limit', body: '<p>If the text phrase is longer than the limit, find the essential words. Usually you can drop articles and some adjectives. Never change the words – only choose fewer of them.</p>', example: 'Text: "a single large entrance". Limit two words. "a ______ in the outer wall" → <b>large entrance</b>.' },
      { title: 'Re-read the completed sentence', body: '<p>Is it grammatical? Does it mean the same as the passage? Is the spelling correct?</p>' }
    ],
    worked: [
      {
        title: 'The Caravanserai',
        source: `<h3>The Caravanserai</h3>
<p>For more than a thousand years, merchants crossing the deserts and mountains of Central Asia and the Middle East depended on a network of roadside inns known as caravanserais. The name combines the Persian words for a group of travellers and for a palace or enclosed building.</p>
<p>Caravanserais were usually built about a day's journey apart, which for a loaded camel meant roughly thirty to forty kilometres. Their design was remarkably consistent. A high outer wall, with a single large entrance wide enough for laden animals, surrounded an open courtyard. Travellers slept in small rooms arranged around the courtyard, while their camels, horses and goods were kept in stables behind or beneath these rooms. Because the entrance could be closed at night, the buildings offered protection against bandits as well as shelter from the weather.</p>
<p>Many caravanserais were paid for by rulers, who understood that safe roads encouraged trade and therefore increased their tax income. Others were funded by wealthy merchants as acts of charity. In many, travellers could stay for up to three days without paying.</p>
<p>The arrival of railways and motor transport brought the caravan trade to an end. Many caravanserais fell into ruin, but others have been restored and now serve as hotels, restaurants or museums.</p>`,
        instructions: '<i>Complete the sentences. Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.</i>',
        questions: `<ol>
<li>Part of the word "caravanserai" means a palace or an ______.</li>
<li>Caravanserais were spaced at intervals of one ______.</li>
<li>Animals entered through a ______ in the outer wall.</li>
<li>Closing the gate at night protected travellers from ______.</li>
<li>Rulers built caravanserais because trade increased their ______.</li>
<li>Some restored caravanserais are now used as ______, restaurants or hotels.</li>
</ol>`,
        walk: [
          { q: '1. ...a palace or an ______.', a: 'enclosed building', steps: [
            '<b>Predict:</b> "an" → singular noun phrase starting with a vowel sound; a type of building.',
            '<b>Locate:</b> "the Persian words for a group of travellers and for a palace or enclosed building".',
            '<b>Answer:</b> "enclosed building" – two words, starts with a vowel sound, so "an enclosed building" ✓.'
          ] },
          { q: '2. ...at intervals of one ______.', a: 'day\'s journey', steps: [
            '<b>Predict:</b> a unit of distance or time after "one".',
            '<b>Locate:</b> "built about a day\'s journey apart".',
            '<b>Answer:</b> "day\'s journey" (two words). Note that "thirty to forty kilometres" doesn\'t fit after "one" and is over the limit.'
          ] },
          { q: '3. Animals entered through a ______ in the outer wall.', a: 'large entrance', steps: [
            '<b>Predict:</b> singular noun after "a"; part of a wall.',
            '<b>Locate:</b> "A high outer wall, with a single large entrance wide enough for laden animals".',
            '<b>Word limit:</b> "single large entrance" = three words ✗. "large entrance" (or just "entrance") ✓.',
            '<b>Lesson:</b> the article "a" is already in the sentence, so don\'t copy it.'
          ] },
          { q: '4. ...protected travellers from ______.', a: 'bandits', steps: [
            '<b>Predict:</b> a noun – something dangerous.',
            '<b>Locate:</b> "offered protection against bandits as well as shelter from the weather".',
            '<b>Choose:</b> "weather" also follows "from" in the text, but "closing the gate at night" connects to protection against <i>bandits</i>. The paraphrase (protection against → protected from) points to bandits.'
          ] },
          { q: '5. ...trade increased their ______.', a: 'tax income', steps: [
            '<b>Predict:</b> a noun – something rulers gain.',
            '<b>Locate:</b> "safe roads encouraged trade and therefore increased their tax income".',
            '<b>Answer:</b> "tax income" (two words). "their" is already in the sentence.'
          ] },
          { q: '6. ...used as ______, restaurants or hotels.', a: 'museums', steps: [
            '<b>Predict:</b> a plural noun in a list of uses.',
            '<b>Locate:</b> last sentence: "now serve as hotels, restaurants or museums".',
            '<b>Answer:</b> "museums" – the only item in the text list not already in the question. The question re-ordered the list; this is common.'
          ] }
        ],
        lesson: 'Prediction (noun? plural? vowel sound?) told you what to look for before you read, and the word limit removed "single" and "their". Copy exactly, then cut to the limit – never rephrase.'
      }
    ],
    dos: [
      'Circle the word limit and obey it strictly.',
      'Predict word class, number and meaning before reading.',
      'Copy spelling and form exactly from the passage.',
      'Check words already in the sentence (articles, possessives) so you don\'t repeat them.',
      'Read the completed sentence for grammar and meaning.'
    ],
    donts: [
      'Don\'t write more words than allowed – the answer becomes wrong.',
      'Don\'t change the word form (economy → economic).',
      'Don\'t write your own synonym – the answer must come from the passage.',
      'Don\'t forget plural -s when the sentence needs it.'
    ],
    careful: [
      { title: 'Two candidate words in one sentence', body: '<p>Often the located sentence contains two words that fit the gap grammatically (bandits / weather). The paraphrase around the gap tells you which one is meant.</p>' },
      { title: 'Spelling counts', body: '<p>A misspelt answer is wrong. Copy letter by letter and check double letters: accommodation, occurred, committee.</p>' }
    ],
    timing: '<p>About <b>1 minute per gap</b>. Prediction takes 10 seconds and saves much more.</p>',
    checklist: ['I know exactly what each word-limit instruction allows.', 'I predict the type of word before reading.', 'I copy exactly and then cut to the limit.'],
    summary: ['Predict, locate, copy exactly, cut to the limit, re-read.', 'The answer word comes from the passage; the rest of the sentence is a paraphrase.', 'Over the word limit = wrong, even if the right word is included.']
  },

  /* ======================================================================= */
  summary: {
    intro: `
<p>This chapter covers a family of tasks that work the same way: <b>summary</b>, <b>note</b>, <b>table</b> and <b>flow-chart completion</b>. You are given a shortened version of part of the passage with gaps, and you fill each gap. There are two versions, and you must recognise which one you have, because they need different thinking:</p>
<ul>
<li><b>Words from the passage</b> ("Choose ONE WORD ONLY from the passage"): you copy words exactly, within a word limit – like sentence completion.</li>
<li><b>Words from a box</b> ("Complete the summary using the list of words, A–I"): you choose from a list. The words in the box are often <b>synonyms</b> of words in the passage, so you usually won't find them in the text. You must understand meaning, not just find words.</li>
</ul>
<p>Summaries usually cover <b>one section</b> of the passage (two or three paragraphs), not the whole text. The title of the summary, table or flow-chart tells you which part. The gaps usually follow passage order, though with box versions this is less strict.</p>`,
    facts: [
      ['Appears in', 'Academic and General Training; very common'],
      ['Number of questions', 'Usually 4–8'],
      ['Order', 'Usually follows the order of one section'],
      ['You write', 'Words from the passage, or letters from a box'],
      ['Main skill', 'Prediction from grammar; recognising paraphrase'],
      ['Target time', 'About 1 minute per gap']
    ],
    anatomy: `
<div class="instructions" style="background:var(--surface-2);padding:12px 16px;border-radius:8px"><i>Complete the summary below. Choose <b>ONE WORD ONLY</b> from the passage for each answer.</i></div>
<div class="instructions" style="background:var(--surface-2);padding:12px 16px;border-radius:8px;margin-top:8px"><i>Complete the summary using the list of words, <b>A–H</b>, below. Write the correct letter, <b>A–H</b>, in boxes 9–12.</i></div>
<ul>
<li>In the box version, write the <b>letter</b>, not the word.</li>
<li>Box lists contain more words than gaps. Some are close in meaning or grammatically identical, to make you think about meaning.</li>
<li>Tables and flow-charts often have no full sentences. Use the <b>column/row headings</b> and <b>arrows</b> to decide what each gap needs.</li>
</ul>`,
    method: [
      { title: 'Identify the version: from the passage or from a box?', body: '<p>This decides how you search: for exact words (passage) or for meaning (box).</p>' },
      { title: 'Read the title and the whole summary first', body: '<p>The title tells you which part of the passage it covers. Reading the whole summary (ignoring the gaps) shows you its flow and the overall topic.</p>' },
      { title: 'Predict each gap: word class, number, meaning', body: '<p>Use the words around the gap: articles (<i>a/an/the</i>), prepositions, verb forms, and the logic of the sentence. Write a tiny note above each gap: <i>n (pl)</i>, <i>v</i>, <i>adj</i>, <i>number</i>.</p>', example: '"...makes the dough ______." → verb after "makes the dough" → base form verb: <i>rise</i>.' },
      { title: 'Find the start of the relevant section', body: '<p>Scan for the first sentence of the summary\'s content. The answer to the first gap is nearby, and the others follow.</p>' },
      { title: 'Passage version: copy exactly within the limit', body: '<p>Find the word(s) that match your prediction and copy them exactly.</p>' },
      { title: 'Box version: group the options, then match meaning', body: '<p>Sort the box words by word class (nouns, verbs, adjectives). For each gap, consider only the words of the right class, then choose the one whose meaning matches the passage.</p>' },
      { title: 'Read the completed summary', body: '<p>Does every sentence make grammatical sense and say what the passage says?</p>' }
    ],
    worked: [
      {
        title: 'The Science of Sourdough',
        source: `<h3>The Science of Sourdough</h3>
<p>Before commercial yeast was sold in shops, almost all bread was leavened using a sourdough "starter". A starter is simply a mixture of flour and water left to stand for several days. During this time it is colonised by wild yeasts and bacteria that are naturally present in the flour and the surrounding air. A baker keeps the starter alive by feeding it regularly with fresh flour and water, and some bakeries claim to use starters that are more than a century old.</p>
<p>The two kinds of microorganism play different roles. The yeasts produce carbon dioxide, and the bubbles of gas trapped in the dough cause it to rise. The bacteria, mostly of a type known as lactic acid bacteria, produce acids that give sourdough its characteristic sour taste. Because these organisms work more slowly than commercial yeast, a sourdough loaf may take a day or more to make, compared with a few hours for ordinary bread.</p>
<p>The slow process has some advantages. The acidity of sourdough helps to prevent the growth of mould, so the bread stays fresh for longer. Some studies suggest that the long fermentation also breaks down part of the gluten and other substances that some people find hard to digest.</p>`,
        instructions: '<i>Questions 1–4: Complete the summary. Choose <b>ONE WORD ONLY</b> from the passage.<br>Questions 5–8: Complete the summary using the list of words, <b>A–H</b>.</i>',
        questions: `<p><b>Making a starter</b><br>A starter consists of flour and (1) ______ that are left for several days. It is gradually colonised by yeasts and bacteria from the flour and the (2) ______. Bakers keep it alive by regularly (3) ______ it. The yeasts produce a (4) ______ that makes the dough rise.</p>
<p><b>Advantages and disadvantages</b><br>The bacteria create (5) ______ that give the bread its flavour. Because the process is slower than with commercial yeast, making sourdough takes more (6) ______. However, the bread (7) ______ fresh for longer, as acidity limits the growth of (8) ______.</p>
<div class="option-box"><div>A acids</div><div>B mould</div><div>C time</div><div>D sweetness</div><div>E remains</div><div>F gluten</div><div>G money</div><div>H dries</div></div>`,
        walk: [
          { q: '1. flour and ______', a: 'water', steps: ['<b>Predict:</b> a noun that is mixed with flour.', '<b>Locate:</b> "a mixture of flour and water left to stand for several days".', '<b>Answer:</b> water.'] },
          { q: '2. from the flour and the ______', a: 'air', steps: ['<b>Predict:</b> a noun – another place the microorganisms come from.', '<b>Locate:</b> "naturally present in the flour and the surrounding air".', '<b>Answer:</b> air ("surrounding air" would be two words – over the limit).'] },
          { q: '3. Bakers keep it alive by regularly ______ it', a: 'feeding', steps: ['<b>Predict:</b> after "by regularly" we need an <b>-ing verb</b> (by + -ing).', '<b>Locate:</b> "A baker keeps the starter alive by feeding it regularly".', '<b>Answer:</b> feeding. The summary moved "regularly" before the gap – a small change of word order, which is common. IELTS gaps are designed so that the exact word in the passage fits the grammar of the summary; if your word needs changing to fit, you probably have the wrong word.'] },
          { q: '4. The yeasts produce a ______', a: 'gas', steps: ['<b>Predict:</b> singular noun after "a".', '<b>Locate:</b> "The yeasts produce carbon dioxide, and the bubbles of gas..."', '<b>Choose:</b> "carbon dioxide" is two words (over the limit) and doesn\'t follow "a" naturally. "gas" ✓.'] },
          { q: '5. The bacteria create ______ that give the bread its flavour', a: 'A', steps: ['<b>Box grouping:</b> nouns that could be created: acids, mould, sweetness, gluten.', '<b>Locate:</b> "The bacteria... produce acids that give sourdough its characteristic sour taste".', '<b>Answer:</b> A acids. D sweetness is the opposite flavour.'] },
          { q: '6. making sourdough takes more ______', a: 'C', steps: ['<b>Predict:</b> uncountable noun after "takes more".', '<b>Locate:</b> "a sourdough loaf may take a day or more to make, compared with a few hours".', '<b>Answer:</b> C time. G money is grammatically possible but cost is never mentioned.'] },
          { q: '7. the bread ______ fresh for longer', a: 'E', steps: ['<b>Grammar:</b> a verb that can be followed by an adjective ("fresh"): remains ✓, dries ✗ (and the meaning is opposite).', '<b>Locate:</b> "the bread stays fresh for longer".', '<b>Answer:</b> E remains (= stays) – a synonym, as is typical in box versions.'] },
          { q: '8. limits the growth of ______', a: 'B', steps: ['<b>Locate:</b> "The acidity of sourdough helps to prevent the growth of mould".', '<b>Answer:</b> B mould. F gluten is in the next sentence – a nearby distractor.'] }
        ],
        lesson: 'In the passage version you copied words (and watched the limit: "surrounding air", "carbon dioxide"). In the box version you matched <b>meaning</b>: "stays" became "remains", and grammatically possible distractors (money, gluten, dries) were rejected by meaning.'
      }
    ],
    sections: [
      {
        id: 'tables', title: 'Tables and flow-charts',
        html: `<p><b>Tables:</b> read the column headings and row labels first. Each gap must belong to its row <i>and</i> column. The completed cells in the same column show you the form of the answer (a number, a noun, a short phrase).</p>
<p><b>Flow-charts:</b> follow the arrows – each box is a stage in a process, in order. Gaps are often verbs or nouns describing what happens at a stage. The passage often describes the stages with sequencing words: <i>first, then, once, after this, finally</i>.</p>
<p><b>Notes:</b> notes use headings and bullet points with no full sentences. Use the heading to identify the section and predict the gap from the other bullets in the same list (they are usually parallel: all nouns, or all -ing forms).</p>`
      }
    ],
    dos: [
      'Decide first whether you copy from the passage or choose from a box.',
      'Use the title to find the right section of the passage.',
      'Predict every gap before searching.',
      'In box versions, group the options by word class.',
      'Write letters (not words) for box versions.',
      'Re-read the whole completed summary at the end.'
    ],
    donts: [
      'Don\'t search the whole passage – summaries usually cover one section.',
      'Don\'t choose a box word just because it appears in the passage.',
      'Don\'t ignore articles: "an" needs a vowel sound next.',
      'Don\'t exceed the word limit in passage versions.'
    ],
    careful: [
      { title: 'Box words that appear in the text', body: '<p>When a box word appears in the passage, it may be a distractor taken from a nearby sentence. The correct box word is often a synonym of the passage word.</p>' },
      { title: 'Grammatically identical options', body: '<p>Box lists often include two or three options of the same word class to force you to use meaning (time / money; remains / dries).</p>' }
    ],
    timing: '<p>About <b>1 minute per gap</b>. Reading the whole summary first (30–40 seconds) pays for itself.</p>',
    checklist: ['I identify the version (passage words or box).', 'I use the title to locate the section.', 'I predict word class and number for every gap.', 'In box versions I match meaning, not words.'],
    summary: ['Two versions: copy from the passage, or choose meanings from a box.', 'The summary covers one section; its title tells you where.', 'Grammar prediction + meaning = fast, accurate answers.']
  },

  /* ======================================================================= */
  diagram: {
    intro: `
<p>In diagram label completion you see a drawing – a machine, a building, a device, a natural feature – with some parts labelled and others blank. You complete the labels with words from the passage. The relevant information is usually concentrated in one or two paragraphs that <b>describe</b> how the object looks or works.</p>
<p>This task is less about paraphrase and more about <b>following a description</b>: understanding position words (above, beneath, at the base of, attached to) and matching parts of the text to parts of the picture. The answers are nearly always <b>nouns</b>: the names of parts or materials.</p>`,
    facts: [
      ['Appears in', 'Mostly Academic, occasionally General Training'],
      ['Number of questions', 'Usually 3–6 labels'],
      ['Order', 'Often, but not always, in passage order'],
      ['You write', 'Words copied from the passage'],
      ['Main skill', 'Following descriptions; spatial language'],
      ['Target time', 'About 1 minute per label']
    ],
    anatomy: `<div class="instructions" style="background:var(--surface-2);padding:12px 16px;border-radius:8px"><i>Label the diagram below.<br>Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.</i></div>
<p>The given labels on the diagram are clues: find them in the passage and you will find the descriptive section.</p>`,
    method: [
      { title: 'Study the diagram for 30 seconds', body: '<p>What is it? Which parts are already labelled? Where are the gaps – top, bottom, inside, outside?</p>' },
      { title: 'Find the descriptive section using the given labels', body: '<p>Scan the passage for words that appear on the diagram. The paragraph that mentions them is almost certainly the description you need.</p>' },
      { title: 'Learn the spatial language as you read', body: '<p>Underline position words: <i>above, below, beneath, on top of, at the base of, in the centre of, surrounding, attached to, connected to, inner/outer, upper/lower</i>.</p>' },
      { title: 'Follow the description and match each part', body: '<p>Move your finger over the diagram as you read. For each gap, find the sentence that describes that position or function.</p>' },
      { title: 'Copy the name of the part, within the limit', body: '<p>Write the noun (the name), not a description of what it does. Check spelling and the word limit.</p>' }
    ],
    worked: [
      {
        title: 'The Solar Still',
        source: `<h3>The Solar Still</h3>
<p>A solar still is a simple device that can produce drinking water in places where none is available, using only the heat of the sun. It is often taught in survival courses because it requires very little equipment.</p>
<p>To build one, a pit is dug in the ground, roughly a metre across, in a spot that receives direct sunlight. A <b>collecting container</b>, such as a cup or tin, is placed at the bottom, in the centre of the pit. The pit is then covered with a sheet of <b>clear plastic</b>. The edges of the sheet are held down with <b>loose soil</b>, which also seals the pit so that moisture cannot escape. A small <b>stone</b> is placed in the middle of the sheet, directly above the container, so that the sheet slopes down towards its centre.</p>
<p>During the day, the sun heats the air and the damp earth inside the pit. Water evaporates from the soil and condenses on the cooler underside of the plastic. Because of the slope, the droplets run down towards the lowest point and drip into the container. Many people also fit a <b>drinking tube</b>, which runs from the container to the outside of the pit, so that the water can be drunk without removing the sheet.</p>`,
        figure: { type: 'svg', svg: stillSvg, caption: 'A solar still' },
        instructions: '<i>Label the diagram. Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.</i>',
        questions: '<p>Q1 the cover of the pit · Q2 the weight in the centre · Q3 the vessel at the bottom · Q4 the material on the edges · Q5 the pipe leading out of the pit</p>',
        walk: [
          { q: 'Q1 the cover over the pit', a: 'clear plastic', steps: ['<b>Spatial clue:</b> the line spanning the pit.', '<b>Locate:</b> "The pit is then covered with a sheet of clear plastic."', '<b>Answer:</b> clear plastic (two words). "plastic" alone would also be acceptable; "a sheet of clear plastic" is over the limit.'] },
          { q: 'Q2 the object in the centre of the sheet', a: 'stone', steps: ['<b>Spatial clue:</b> "in the middle of the sheet, directly above the container".', '<b>Answer:</b> stone.'] },
          { q: 'Q3 the vessel at the bottom of the pit', a: 'collecting container', steps: ['<b>Spatial clue:</b> "at the bottom, in the centre of the pit".', '<b>Answer:</b> collecting container. "cup or tin" are examples, not the name of the part – the name is "collecting container".'] },
          { q: 'Q4 what holds down the edges', a: 'loose soil', steps: ['<b>Locate:</b> "The edges of the sheet are held down with loose soil".', '<b>Answer:</b> loose soil (or soil).'] },
          { q: 'Q5 the pipe leading out of the pit', a: 'drinking tube', steps: ['<b>Locate:</b> "a drinking tube, which runs from the container to the outside of the pit".', '<b>Answer:</b> drinking tube.'] }
        ],
        lesson: 'The positions in the text ("at the bottom, in the centre", "in the middle of the sheet, directly above") matched positions in the drawing. Diagram answers are names of parts – avoid examples (cup, tin) and descriptions.'
      }
    ],
    dos: ['Use given labels to find the descriptive paragraph.', 'Underline position words in the passage.', 'Write the name of the part (a noun).', 'Check the word limit and spelling.'],
    donts: ['Don\'t write a description of what a part does.', 'Don\'t write an example (cup) instead of the part\'s name (container).', 'Don\'t assume strict passage order – check each label.'],
    careful: [
      { title: 'Upper/lower, inner/outer', body: '<p>Similar parts are often distinguished only by a position adjective. Check whether the adjective is part of the name you need, and whether the word limit allows it.</p>' }
    ],
    timing: '<p>About <b>1 minute per label</b>, plus 30 seconds to study the diagram first.</p>',
    checklist: ['I study the diagram before reading.', 'I use given labels to find the description.', 'I write names, not descriptions or examples.'],
    summary: ['The description is usually in one or two paragraphs.', 'Spatial language connects the text to the picture.', 'Answers are nearly always nouns copied exactly.']
  },

  /* ======================================================================= */
  'short-answer': {
    intro: `
<p>Short-answer questions ask direct <b>Wh- questions</b> (What? Which? When? Where? How many? Who?) about factual details. You answer with words from the passage within a word limit. Sometimes a question asks you to <b>list</b> two or three things ("Name TWO materials...").</p>
<p>The task is straightforward when you use the question word properly. The question word tells you exactly what <b>type</b> of answer is needed – a time, a place, a number, a person – and most mistakes come from copying a nearby word that answers a different question word.</p>`,
    facts: [
      ['Appears in', 'Academic and General Training'],
      ['Number of questions', 'Usually 3–6'],
      ['Order', 'Follows the passage order'],
      ['You write', 'Words and/or numbers from the passage'],
      ['Main skill', 'Scanning for specific information'],
      ['Target time', 'Under 1 minute per question']
    ],
    anatomy: `<div class="instructions" style="background:var(--surface-2);padding:12px 16px;border-radius:8px"><i>Answer the questions below.<br>Choose <b>NO MORE THAN THREE WORDS AND/OR A NUMBER</b> from the passage for each answer.</i></div>
<div class="table-wrap"><table class="data-table plain">
<tr><th>Question word</th><th>Answer type</th></tr>
<tr><td>When / In which year</td><td>a date, year, period</td></tr><tr><td>Where / In which place</td><td>a place</td></tr>
<tr><td>Who</td><td>a person or group</td></tr><tr><td>How many / How much</td><td>a number or quantity</td></tr>
<tr><td>How long</td><td>a period of time (not a date)</td></tr><tr><td>What / Which</td><td>a thing, usually a noun phrase</td></tr>
</table></div>`,
    method: [
      { title: 'Underline the question word and predict the answer type', body: '<p>"In which year..." → a year. "Who..." → a person/group. "How long..." → a duration.</p>' },
      { title: 'Underline locators in the question', body: '<p>Names, dates and technical nouns are fastest to scan for. Questions follow passage order.</p>' },
      { title: 'Scan, then read the sentence carefully', body: '<p>Find the sentence and read it in full. Make sure the answer responds to <b>this</b> question word.</p>' },
      { title: 'Write the shortest complete answer', body: '<p>No full sentences. Copy exactly, within the limit.</p>' }
    ],
    worked: [
      {
        title: 'The Story of the Pencil',
        source: `<h3>The Story of the Pencil</h3>
<p>The modern pencil began with a lucky discovery. In the sixteenth century, a large deposit of unusually pure graphite was found at Borrowdale, in the north-west of England. Local shepherds were reportedly the first to use it, marking their sheep with lumps of the soft black mineral. Because it left a dark mark like lead, people at the time believed graphite was a form of lead, and the name has survived ever since, even though pencils have never contained it.</p>
<p>Borrowdale graphite became so valuable that the mine was guarded and opened only for a few weeks each year. Other countries, without such pure deposits, had to find alternatives. The breakthrough came in 1795, when the French engineer Nicolas-Jacques Conté mixed powdered graphite with clay and baked the mixture in a kiln. By changing the proportion of clay, he could make the core harder or softer – the basis of the grading system still used today.</p>
<p>Correcting mistakes was a separate problem. Breadcrumbs were commonly used until 1770, when the scientist Joseph Priestley noted that a piece of rubber from South America could remove pencil marks.</p>`,
        instructions: '<i>Answer the questions. Choose <b>NO MORE THAN THREE WORDS AND/OR A NUMBER</b> from the passage.</i>',
        questions: `<ol>
<li>Where was a large deposit of pure graphite found?</li>
<li>Who were said to be the first users of the graphite?</li>
<li>What did people wrongly think graphite was?</li>
<li>What did Conté combine with graphite?</li>
<li>What determined the hardness of Conté's pencils?</li>
<li>What did people use to erase pencil marks before 1770?</li>
</ol>`,
        walk: [
          { q: '1. Where...?', a: 'Borrowdale', steps: ['<b>Answer type:</b> a place.', '<b>Locate:</b> "found at Borrowdale, in the north-west of England".', '<b>Answer:</b> Borrowdale. ("the north-west of England" is four words – over the limit.)'] },
          { q: '2. Who...?', a: '(local) shepherds', steps: ['<b>Answer type:</b> a person or group.', '<b>Locate:</b> "Local shepherds were reportedly the first to use it".', '<b>Answer:</b> local shepherds / shepherds. (Sheep is a nearby noun but answers "what did they mark?", not "who?")'] },
          { q: '3. What did people wrongly think graphite was?', a: '(a form of) lead', steps: ['<b>Locate:</b> "people at the time believed graphite was a form of lead".', '<b>Answer:</b> lead / a form of lead (three words ✓).'] },
          { q: '4. What did Conté combine with graphite?', a: 'clay', steps: ['<b>Locate:</b> "mixed powdered graphite with clay".', '<b>Answer:</b> clay. (combine = mix)'] },
          { q: '5. What determined the hardness...?', a: 'proportion of clay', steps: ['<b>Locate:</b> "By changing the proportion of clay, he could make the core harder or softer".', '<b>Count:</b> "the proportion of clay" is four words – over the limit. "proportion of clay" is three ✓.', '<b>Answer:</b> proportion of clay.'] },
          { q: '6. What did people use... before 1770?', a: 'breadcrumbs', steps: ['<b>Trap:</b> "rubber" is near the date 1770, but it was used <i>from</i> 1770.', '<b>Locate:</b> "Breadcrumbs were commonly used until 1770".', '<b>Answer:</b> breadcrumbs.'] }
        ],
        lesson: 'Q2 and Q6 placed a tempting wrong answer in the same sentence (sheep, rubber). The question word (Who? Before?) is what separates them. Q5 shows a word-limit trap: count every word, including "the".'
      }
    ],
    dos: ['Let the question word decide the answer type.', 'Write only the key words, no sentences.', 'Count words, including articles.', 'Check time words: before, after, until, since.'],
    donts: ['Don\'t copy a nearby word that answers a different question.', 'Don\'t exceed the word limit.', 'Don\'t change the passage\'s words.'],
    careful: [
      { title: 'How long vs when', body: '<p>"How long did it take?" needs a duration (seven weeks), not a date (1953).</p>' },
      { title: 'List questions', body: '<p>"Name TWO..." – write each item in its own box if numbered separately. Each item must come from the text.</p>' }
    ],
    timing: '<p>These are usually the quickest questions in Reading: <b>under 1 minute each</b>. Bank them fast.</p>',
    checklist: ['I predict the answer type from the question word.', 'I write minimal answers within the limit.', 'I check time prepositions (before/after/until).'],
    summary: ['The question word decides the answer type.', 'Answers are short and copied exactly.', 'The main trap is a nearby word that answers a different question.']
  }
};

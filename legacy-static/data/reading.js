window.IELTS = window.IELTS || {};
IELTS.reading = {
  intro: `
<p>The Reading test lasts <b>60 minutes</b> with <b>40 questions</b> across three sections. There is <b>no extra time</b> to transfer answers, so write them on the answer sheet as you go. In Academic Reading the passages become progressively harder; Passage 3 is usually the most abstract and argumentative.</p>
<h3>The three core reading skills</h3>
<div class="grid">
<div class="card"><h4>1. Skimming</h4><p>Reading quickly for the <b>general idea</b>. Read the title, the first and last sentence of each paragraph and any subheadings. Use it for: matching headings, global multiple-choice ("What is the writer's purpose?").</p></div>
<div class="card"><h4>2. Scanning</h4><p>Searching for a <b>specific detail</b> – names, dates, numbers, capitalised words, technical terms. Your eyes move fast over the text, stopping only when you see the target. Use it for: completion tasks, matching features, short answers.</p></div>
<div class="card"><h4>3. Detailed reading</h4><p>Once you've located the relevant sentence, read it (and the sentences before and after) <b>carefully</b>, noticing qualifiers like <i>some, often, only, may, all, never</i>. Use it for: T/F/NG, Y/N/NG, multiple choice.</p></div>
</div>
<h3>Paraphrase is the key to IELTS Reading</h3>
<p>The questions almost <b>never use the same words</b> as the passage. You must recognise the same idea expressed differently:</p>
<div class="table-wrap"><table class="data-table plain">
<tr><th>Question says</th><th>Passage says</th><th>Technique</th></tr>
<tr><td>The number of tourists fell.</td><td>Visitor figures declined.</td><td>Synonyms</td></tr>
<tr><td>Scientists were unable to explain the result.</td><td>The findings puzzled researchers.</td><td>Change of structure</td></tr>
<tr><td>It was not until 1990 that the law changed.</td><td>The legislation remained unchanged until 1990.</td><td>Negative ↔ positive</td></tr>
<tr><td>The project was expensive.</td><td>The scheme cost a considerable amount.</td><td>Word-form change (adj → verb + noun)</td></tr>
<tr><td>Most experts agree...</td><td>There is a broad consensus...</td><td>Abstract noun phrase</td></tr>
</table></div>
<h3>Time management plan (Academic)</h3>
<ul class="steps">
<li><b>Passage 1 – 17 minutes.</b> Usually the easiest. Bank marks quickly.</li>
<li><b>Passage 2 – 20 minutes.</b> Often contains matching headings or matching information.</li>
<li><b>Passage 3 – 23 minutes.</b> The hardest: abstract ideas, writer's views (Y/N/NG), complex MCQ.</li>
<li><b>If stuck, guess and move on.</b> Mark the question and return if time allows. Never leave a blank.</li>
</ul>
<h3>Which questions follow the order of the passage?</h3>
<div class="table-wrap"><table class="data-table plain">
<tr><th>In passage order ✔</th><th>NOT in order ✘</th></tr>
<tr><td>True/False/Not Given, Yes/No/Not Given, Multiple choice (mostly), Sentence completion, Short-answer questions, Summary completion (usually from one section), Matching sentence endings</td><td>Matching headings (one per paragraph but you choose), Matching information (paragraph letters can appear in any order), Matching features, Summary with a word list from the whole text, Diagram labelling</td></tr>
</table></div>
<div class="callout tip"><strong>Golden rule</strong>Do the questions that follow passage order first – they act as a map. Then do the "random order" types (matching information/features) when you already know the passage well.</div>
`,
  types: [
    {
      id: 'tfng', name: 'True / False / Not Given', freq: 'Very common', practice: 'r-tfng',
      what: 'You decide whether statements agree with the <b>factual information</b> in the passage. This tests detailed reading and your ability to distinguish between what is stated, what is contradicted and what is simply not mentioned.',
      looksLike: `<i>Do the following statements agree with the information given in Reading Passage 1? Write</i><br><b>TRUE</b> if the statement agrees with the information<br><b>FALSE</b> if the statement contradicts the information<br><b>NOT GIVEN</b> if there is no information on this`,
      definitions: `<div class="table-wrap"><table class="data-table plain">
<tr><th>Answer</th><th>Meaning</th><th>Test</th></tr>
<tr><td><b>TRUE</b></td><td>The passage states the same idea (paraphrased).</td><td>Every part of the statement is supported.</td></tr>
<tr><td><b>FALSE</b></td><td>The passage states the <b>opposite</b> or something that makes the statement impossible.</td><td>You can point to a sentence that contradicts it.</td></tr>
<tr><td><b>NOT GIVEN</b></td><td>The passage says nothing about it – or only part of it is mentioned.</td><td>You cannot prove it true or false using the text alone.</td></tr></table></div>`,
      strategy: [
        'Read the statement and <b>underline keywords</b>, especially names, dates, and numbers that are easy to scan for.',
        'Circle <b>qualifiers and limiting words</b>: <i>all, some, most, only, always, never, often, first, more than, the main</i>. These usually decide the answer.',
        'Scan the passage for the location (questions follow passage order).',
        'Read the relevant sentence(s) carefully – including the sentence before and after.',
        'Compare meaning, not words. Ask: "Does the text say this, say the opposite, or say nothing?"',
        'If you can find the topic but <b>not the specific claim</b> (e.g. the passage mentions the bridge but not when it was painted), the answer is NOT GIVEN.'
      ],
      traps: [
        'Using your general knowledge – only the passage counts. A statement can be true in real life but NOT GIVEN in the text.',
        'Matching words instead of meaning: the same words may appear with a different meaning.',
        'Confusing FALSE and NOT GIVEN. FALSE needs a contradiction. If the text is silent, it\'s NOT GIVEN.',
        'Ignoring qualifiers: "<i>Some</i> farmers use drones" vs statement "<i>All</i> farmers use drones" → FALSE.',
        'Comparatives: the text gives two facts, but the statement compares them in a way the text does not.'
      ],
      example: `<div class="passage"><p>The bridge, completed in 1932, was initially criticised by local residents for its industrial appearance. Within a decade, however, it had become a symbol of the city, appearing on postcards and stamps.</p></div>
<ol>
<li>The bridge was popular with residents from the beginning. → <b>FALSE</b> (it was "initially criticised")</li>
<li>The bridge appeared on postcards within ten years of opening. → <b>TRUE</b> ("within a decade" = within ten years)</li>
<li>The bridge was the most expensive structure in the city. → <b>NOT GIVEN</b> (cost is never mentioned)</li>
</ol>`
    },
    {
      id: 'ynng', name: 'Yes / No / Not Given', freq: 'Common (Passage 3)', practice: 'r-ynng',
      what: 'Similar to T/F/NG, but you decide whether statements agree with the <b>writer\'s views or claims</b> – opinions, attitudes and arguments rather than facts. Usually appears in argumentative passages.',
      looksLike: `<i>Do the following statements agree with the claims of the writer in Reading Passage 3? Write</i><br><b>YES</b> if the statement agrees with the claims of the writer<br><b>NO</b> if the statement contradicts the claims of the writer<br><b>NOT GIVEN</b> if it is impossible to say what the writer thinks about this`,
      definitions: `<p>Look for <b>opinion language</b>: <i>I believe, it is clear that, arguably, unfortunately, regrettably, surprisingly, it would be a mistake to, should, must, undoubtedly</i>. Adverbs and adjectives of evaluation (<i>misguided, overrated, valuable, sensible</i>) reveal the writer's stance.</p>`,
      strategy: [
        'Skim the passage first to understand the writer\'s overall stance (for, against, balanced?).',
        'Identify whether the statement expresses an opinion – it often contains evaluative words (<i>should, beneficial, worth, overestimated</i>).',
        'Locate the relevant part (questions follow passage order).',
        'Separate the <b>writer\'s view</b> from <b>views the writer reports</b>: "Some critics claim X" ≠ the writer believes X. Read on – the writer often says "However, this view ignores..."',
        'YES = writer agrees; NO = writer disagrees; NOT GIVEN = the writer gives no opinion on this exact point.'
      ],
      traps: [
        'Attributing other people\'s opinions to the writer.',
        'The writer may mention a topic factually but not give an opinion on it → NOT GIVEN.',
        'Strength of opinion: writer says "may be partly useful"; statement says "is the best solution" → NO or NOT GIVEN depending on context.',
        'Concession structures: "Although X has some benefits, it is ultimately harmful" – the writer\'s main view is "harmful".'
      ],
      example: `<div class="passage"><p>Many economists argue that a four-day working week would damage productivity. This fear, in my view, is largely misplaced: trials in several countries have shown output remaining stable or even rising.</p></div>
<ol>
<li>A four-day week is likely to reduce productivity. → <b>NO</b> (the writer calls this fear "misplaced")</li>
<li>Some economists are concerned about a shorter working week. → <b>YES</b></li>
<li>The four-day week should become law. → <b>NOT GIVEN</b> (no opinion on legislation)</li>
</ol>`
    },
    {
      id: 'mcq', name: 'Multiple Choice', freq: 'Very common', practice: 'r-mcq',
      what: 'Choose the correct answer from A–D (single answer) or choose TWO/THREE answers from a longer list (A–E/A–G). Questions may test details, the main idea of a paragraph, or the writer\'s purpose/attitude.',
      looksLike: `<i>Choose the correct letter, <b>A, B, C or D</b>.</i> &nbsp;or&nbsp; <i>Choose <b>TWO</b> letters, <b>A–E</b>.</i>`,
      definitions: `<p>Three main kinds: <b>detail questions</b> (one sentence holds the answer), <b>main idea / purpose questions</b> ("The main purpose of paragraph C is to..."), and <b>sentence completion style</b> stems ("According to the writer, the experiment...").</p>`,
      strategy: [
        'Read the question stem first and underline its keywords. <b>Don\'t read the options yet</b> – try to form your own idea of the answer from the passage.',
        'Locate the relevant section using the stem\'s keywords (questions normally follow passage order).',
        'Read that section carefully, then read the options.',
        'Eliminate options: each wrong option usually fails for one reason (not mentioned, opposite, partly true, true but doesn\'t answer the question).',
        'For "writer\'s purpose" questions, think about the <b>function</b>: to compare, to criticise, to explain, to illustrate, to challenge a view.',
        'For "choose TWO" questions, each correct letter is one mark – treat each option like a T/F/NG statement.'
      ],
      traps: [
        'The "word-match" distractor: the option repeats exact words from the passage but changes the meaning.',
        'The "true but irrelevant" distractor: correct according to the text but doesn\'t answer the question.',
        'The "too extreme" option: <i>always, completely, the only</i> when the text says <i>often, partly, one of</i>.',
        'Spending too long: if two options remain, pick the one more directly supported and move on.'
      ],
      example: `<div class="passage"><p>Early studies suggested that bees navigated mainly by the sun. Later research, however, revealed that on cloudy days they relied on polarised light, which is invisible to the human eye.</p></div>
<p>According to the passage, bees on cloudy days<br>A stop flying &nbsp; B use the sun's position &nbsp; <b>C use a type of light humans cannot see</b> &nbsp; D follow other bees</p>
<p class="small muted">A and D: not mentioned. B: refers to normal days, not cloudy days (word-match trap with "sun"). C paraphrases "polarised light, invisible to the human eye".</p>`
    },
    {
      id: 'headings', name: 'Matching Headings', freq: 'Very common', practice: 'r-headings',
      what: 'Choose the correct heading for each paragraph or section from a list (there are always more headings than paragraphs). A heading summarises the <b>main idea</b> of the whole paragraph – not a detail.',
      looksLike: `<i>Reading Passage 2 has seven paragraphs, A–G. Choose the correct heading for each paragraph from the list of headings below. Write the correct number, <b>i–x</b>.</i>`,
      definitions: `<p>A good heading answers: "<b>What is this paragraph mainly about?</b>". The main idea is usually in the topic sentence (first or second sentence) but sometimes appears at the end, especially after <i>however</i> or <i>therefore</i>.</p>`,
      strategy: [
        'Do this task <b>first</b> for that passage – it gives you a map of the text for other questions.',
        'Read the list of headings and notice how they differ (e.g. "causes of" vs "effects of" vs "solutions to").',
        'Read the first and last sentences of each paragraph, then skim the middle.',
        'Summarise the paragraph in 3–5 of your own words, then find the heading that matches your summary.',
        'Start with the paragraphs you find easiest; cross off headings as you use them.',
        'Check the remaining headings carefully – distractors often match a <b>detail</b> mentioned in the paragraph.'
      ],
      traps: [
        'Choosing a heading because it contains a word from the paragraph (word-matching).',
        'A heading that only describes one example or one sentence, not the whole paragraph.',
        'Headings that are close: "The <i>benefits</i> of X" vs "The <i>popularity</i> of X". Read every word.',
        'Ignoring a paragraph\'s turn: "Many believe X. <i>However</i>, recent evidence shows Y" – the main idea is Y.'
      ],
      example: `<div class="passage"><p><span class="para-label">B</span>Urban gardens have been praised for producing fresh food. Yet their greatest contribution may be social. Residents who previously had never spoken now meet weekly, share tools and organise events.</p></div>
<p>i Food production in cities &nbsp; <b>ii Building community connections</b> &nbsp; iii The cost of urban land</p>
<p class="small muted">"Fresh food" is mentioned, but "Yet their greatest contribution may be social" signals the main idea → ii.</p>`
    },
    {
      id: 'matching-info', name: 'Matching Information', freq: 'Common', practice: 'r-matching-info',
      what: 'Find which paragraph contains a specific piece of information – e.g. "an example of...", "a reference to...", "a description of...". Some paragraphs may be used more than once; some not at all.',
      looksLike: `<i>Reading Passage 1 has six paragraphs, A–F. Which paragraph contains the following information? Write the correct letter, <b>A–F</b>. <b>NB</b> You may use any letter more than once.</i>`,
      definitions: `<p>Unlike headings, you are looking for a <b>detail</b> inside a paragraph, not its main idea. The question describes the <b>type</b> of information: <i>a comparison, a prediction, an explanation, a mention of a problem, a date</i>.</p>`,
      strategy: [
        'Leave this task until <b>after</b> the other questions on the passage – by then you will know where things are.',
        'Underline the key idea and the <b>type of information</b> (example? reason? statistic? warning?).',
        'Think of possible paraphrases before scanning: "a financial drawback" → cost, expensive, price, budget.',
        'Scan paragraph by paragraph. Look for numbers if the question says "statistics" or "figures"; look for names if it says "a reference to a researcher".',
        'Note the "NB you may use any letter more than once" instruction – one paragraph can hold several answers.'
      ],
      traps: [
        'Assuming the answers are in passage order – they are not.',
        'Choosing a paragraph that discusses the general topic but not the specific information type (e.g. it mentions cost but doesn\'t give "an estimate of cost").',
        'Spending too long scanning from scratch for every question – read the passage once properly instead.'
      ],
      example: `<p>"<b>a prediction about future employment</b>" → look for future language: <i>will, is expected to, by 2040, is likely to, forecast</i> + job words: <i>workers, jobs, workforce, labour</i>.</p>`
    },
    {
      id: 'matching-features', name: 'Matching Features', freq: 'Common', practice: 'r-matching-features',
      what: 'Match statements or findings to a list of options – usually <b>people (researchers)</b>, but also dates, places, organisations or categories (e.g. types of animals).',
      looksLike: `<i>Look at the following statements (Questions 14–18) and the list of researchers below. Match each statement with the correct researcher, <b>A–E</b>. <b>NB</b> You may use any letter more than once.</i>`,
      definitions: `<p>The names are easy to scan for, but each name may appear <b>several times</b> across the passage, and statements are heavily paraphrased.</p>`,
      strategy: [
        'Scan the passage for each name in the list and <b>circle every occurrence</b> (also pronouns referring to them: "she", "the Canadian scientist").',
        'Read what each person said/found and make short margin notes.',
        'Now read each statement and match it to your notes – focus on meaning.',
        'Watch for names mentioned together: "Unlike Smith, Jones argued..." – who argued?'
      ],
      traps: [
        'A person may be mentioned in one paragraph but their key idea appears later (referred to as "he" or by surname only).',
        'Statements are not in passage order.',
        'Reported views: "Garcia rejected Lee\'s claim that..." – the claim belongs to Lee, but Garcia disagrees.'
      ],
      example: `<div class="passage"><p>While Patel believed that sleep was primarily for memory, Okafor's experiments pointed instead to its role in clearing waste from the brain.</p></div>
<p>"Sleep helps remove harmful substances from the brain." → <b>Okafor</b> (paraphrase of "clearing waste")</p>`
    },
    {
      id: 'sentence-endings', name: 'Matching Sentence Endings', freq: 'Occasional', practice: 'r-sentence-endings',
      what: 'Complete sentences by choosing the correct ending from a list. There are more endings than sentence beginnings. The completed sentence must match the passage\'s meaning.',
      looksLike: `<i>Complete each sentence with the correct ending, <b>A–G</b>, below.</i>`,
      definitions: `<p>The beginnings follow passage order. Use <b>grammar</b> to eliminate impossible endings first (e.g. a beginning ending in "to" needs a verb).</p>`,
      strategy: [
        'Read the sentence beginnings and underline keywords. Locate each in the passage (they follow order).',
        'Use grammar to shortlist endings that fit grammatically.',
        'Read the passage section carefully and choose the ending that produces a sentence with the same meaning as the text.',
        'Distractor endings are often true facts from the passage but don\'t connect to that beginning.'
      ],
      traps: [
        'Choosing an ending that is true in the passage but describes something else.',
        'Ignoring grammar: singular/plural agreement and verb forms help you eliminate quickly.'
      ],
      example: `<p>"The researchers concluded that the decline in bird numbers..." → <b>was linked to the loss of hedgerows.</b> (not "was caused by an increase in tourists", which the passage mentions only in a different context).</p>`
    },
    {
      id: 'sentence-completion', name: 'Sentence Completion', freq: 'Common', practice: 'r-sentence-completion',
      what: 'Complete sentences using words <b>taken directly from the passage</b> within a word limit. Answers follow passage order.',
      looksLike: `<i>Complete the sentences below. Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.</i>`,
      definitions: `<p>The word limit is strict. "ONE WORD ONLY" means one word. "NO MORE THAN TWO WORDS AND/OR A NUMBER" allows answers like <i>"3 hours"</i> or <i>"solar panels"</i>.</p>`,
      strategy: [
        'Check the word limit and circle it.',
        'Read the sentence and <b>predict the word type</b> needed (noun? plural? adjective? number?).',
        'Scan for keywords (or synonyms) to find the location.',
        'Copy the word(s) exactly from the passage – <b>spelling counts</b>.',
        'Re-read the completed sentence: is it grammatical and does it mean the same as the passage?'
      ],
      traps: [
        'Exceeding the word limit (e.g. writing "the new solar panels" when the limit is two words).',
        'Changing the form of the word – you must use the passage\'s words unchanged.',
        'Singular vs plural errors (fishes vs fish, species vs specie).'
      ],
      example: `<div class="passage"><p>The settlers relied heavily on dried fish during the winter months.</p></div><p>In winter, the settlers' main food was __________. → <b>dried fish</b></p>`
    },
    {
      id: 'summary', name: 'Summary, Note, Table & Flow-chart Completion', freq: 'Very common', practice: 'r-summary',
      what: 'Complete a summary, set of notes, table or flow-chart of part (sometimes all) of the passage. Either you copy words from the passage (word limit), or you choose from a <b>box of words</b> (more options than gaps).',
      looksLike: `<i>Complete the summary below. Choose <b>ONE WORD ONLY</b> from the passage for each answer.</i> &nbsp; or &nbsp; <i>Complete the summary using the list of words, <b>A–I</b>, below.</i>`,
      definitions: `<p><b>With a word box:</b> the words are usually <b>synonyms</b> of passage words, so you will not find them in the text – you must understand the meaning. <b>Without a box:</b> the answers are copied exactly from the passage.</p>`,
      strategy: [
        'Read the title of the summary/table to identify which part of the passage it covers.',
        'Read the whole summary first to understand its flow, then <b>predict</b> the type of word for each gap (noun/verb/adjective, singular/plural).',
        'Locate the start of the relevant section in the passage. The gaps normally follow passage order.',
        'With a word box: group the options by word type (all the nouns, all the adjectives) to narrow choices.',
        'For tables and flow-charts, use the headings and arrows – they tell you the category of each answer.',
        'Check grammar and spelling after filling each gap.'
      ],
      traps: [
        'With a word box, picking a word because it appears in the passage – the correct option is often a synonym.',
        'Not noticing an article before the gap: "an ______" needs a word starting with a vowel sound.',
        'Searching the whole passage – summaries usually cover only one or two paragraphs.'
      ],
      example: `<p>Summary: "The ancient roads were built using local <u>&nbsp;stone&nbsp;</u> and were designed to allow rainwater to <u>&nbsp;drain&nbsp;</u> away quickly."</p>
<p class="small muted">Prediction helped: "local ___" → material noun; "allow rainwater to ___" → base-form verb.</p>`
    },
    {
      id: 'diagram', name: 'Diagram Label Completion', freq: 'Occasional', practice: 'r-diagram',
      what: 'Label a diagram (of a machine, building, natural process or object) using words from the passage. The relevant information is usually concentrated in one or two paragraphs that <b>describe</b> how something looks or works.',
      looksLike: `<i>Label the diagram below. Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.</i>`,
      definitions: `<p>Diagram answers are nearly always <b>nouns</b> (names of parts or materials). Answers may not follow passage order exactly.</p>`,
      strategy: [
        'Study the diagram: what is it? Which labels are already given? These given labels help you locate the text.',
        'Find the descriptive paragraph – look for location language: <i>above, beneath, attached to, at the base of, on top of, inside</i>.',
        'Follow the description part by part and match each element to the diagram.',
        'Copy the words exactly and check the word limit.'
      ],
      traps: [
        'Getting confused by spatial language (upper/lower, inner/outer, front/rear).',
        'Writing a description instead of the name of the part.'
      ],
      example: `<p>"Water enters through a narrow <b>inlet pipe</b> at the base of the tank and is heated by a copper <b>coil</b> running through its centre." → labels: inlet pipe, coil.</p>`
    },
    {
      id: 'short-answer', name: 'Short-answer Questions', freq: 'Occasional', practice: 'r-short-answer',
      what: 'Answer <b>Wh- questions</b> (what, which, where, when, how many) using words from the passage within a word limit. Questions follow passage order and usually test factual details.',
      looksLike: `<i>Answer the questions below. Choose <b>NO MORE THAN THREE WORDS AND/OR A NUMBER</b> from the passage for each answer.</i>`,
      definitions: `<p>The question word tells you the answer type: <i>When</i> → time/date; <i>Where</i> → place; <i>How many</i> → number; <i>What</i> → thing/noun; <i>Who</i> → person or group; <i>Which</i> → one item from a group.</p>`,
      strategy: [
        'Underline the question word and keywords.',
        'Predict the answer type (date, number, name, object).',
        'Scan for the keywords or their synonyms.',
        'Write the shortest complete answer from the passage – you don\'t need a full sentence.',
        'Check the word limit and spelling.'
      ],
      traps: ['Writing a full sentence or exceeding the limit.', 'Copying a nearby word that answers a different question word (e.g. a place when the question asks "when").'],
      example: `<div class="passage"><p>The expedition reached the summit in 1953, after seven weeks of climbing.</p></div><p>How long did the climb take? → <b>seven weeks</b></p>`
    }
  ]
};

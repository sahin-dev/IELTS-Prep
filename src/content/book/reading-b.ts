import type { Chapter } from '@/lib/types';

/* Reading chapters: Matching headings, Matching information, Matching features */
export const readingChaptersB: Record<string, Chapter> = {
  /* ======================================================================= */
  headings: {
    intro: `
<p>In a matching headings task, the paragraphs of a passage (or some of them) are labelled with letters, and you choose the best heading for each one from a list of Roman numerals (i, ii, iii...). There are always <b>more headings than paragraphs</b>, so some headings are not used.</p>
<p>This task tests one thing: whether you can identify the <b>main idea</b> of a paragraph – what the paragraph as a whole is about – rather than a detail that appears in it. Every list of headings contains distractors that match a <b>detail</b> or a <b>word</b> in the paragraph. Students who match words lose marks; students who summarise the paragraph first and then look for the heading that matches their summary score well.</p>
<p>Matching headings is also useful beyond its own marks. Because you are building a quick "map" of the passage – one idea per paragraph – doing this task first makes every other task on the same passage faster. This chapter shows you how to find a paragraph's main idea quickly, how to read headings precisely, and how to avoid the five classic distractors.</p>`,
    facts: [
      ['Appears in', 'Academic (very common in Passages 1–2) and General Training'],
      ['Number of questions', 'Usually 5–7'],
      ['Order', 'You answer in paragraph order, but headings are in random order'],
      ['You write', 'A Roman numeral: i, ii, iii, iv...'],
      ['Main skill', 'Identifying the main idea; skimming'],
      ['Target time', '1–1½ minutes per paragraph']
    ],
    anatomy: `
<div class="instructions" style="background:var(--surface-2);padding:12px 16px;border-radius:8px"><i>Reading Passage 2 has six paragraphs, <b>A–F</b>.<br>Choose the correct heading for each paragraph from the list of headings below.<br>Write the correct number, <b>i–ix</b>, in boxes 14–19 on your answer sheet.</i></div>
<ul>
<li><b>"six paragraphs, A–F"</b> – check which paragraphs have questions. Sometimes one paragraph is done for you as an <b>example</b>; cross that heading off the list immediately.</li>
<li><b>"the correct number, i–ix"</b> – write the Roman numeral in lower case exactly as shown (iv, not 4 or IV). Learn the numerals up to xii: i, ii, iii, iv, v, vi, vii, viii, ix, x, xi, xii.</li>
<li>Each heading can be used only <b>once</b> (unlike matching information, where letters can repeat).</li>
</ul>`,
    tests: `
<p>A paragraph usually has this shape:</p>
<div class="table-wrap"><table class="data-table plain">
<tr><th>Part</th><th>Function</th><th>Use for headings?</th></tr>
<tr><td>Topic sentence (often sentence 1 or 2)</td><td>States the main idea</td><td><b>Yes</b> – but check it isn't reversed later</td></tr>
<tr><td>Supporting sentences</td><td>Examples, figures, explanation, details</td><td>Only to confirm; this is where distractors come from</td></tr>
<tr><td>Turn word (however, yet, but, in fact)</td><td>May change the direction of the paragraph</td><td><b>Yes</b> – the main idea often follows the turn</td></tr>
<tr><td>Concluding sentence</td><td>Summarises or leads to the next paragraph</td><td>Often confirms the main idea</td></tr>
</table></div>
<p>A good heading answers the question <b>"What is this paragraph mainly about?"</b> and fits <b>every</b> sentence in it, not just one.</p>`,
    method: [
      { title: 'Cross off any example heading', body: '<p>If the instructions give one paragraph as an example, remove that heading from the list now. Also look at which paragraphs have questions; you don\'t need headings for the others.</p>' },
      { title: 'Read the list of headings and notice the differences', body: '<p>Read all the headings once. Underline the <b>key noun</b> of each (cost, history, causes, design) and the word that limits it (<i>reasons for, effects of, opposition to, a new, the first</i>). Headings in the same list are often close in meaning; the limiting word is what separates them.</p>', example: '"<u>Reasons</u> for a revival" vs "<u>Doubts</u> about long-term value" vs "<u>Opposition</u> from motorists" – all could appear in a passage about trams.' },
      { title: 'Read the first paragraph: first two sentences + last sentence', body: '<p>Read the opening one or two sentences carefully, skim the middle, and read the last sentence. Watch for turn words (<i>however, yet, but, in fact</i>) – if one appears, the main idea usually comes after it.</p>' },
      { title: 'Summarise the paragraph in 3–6 words of your own', body: '<p>Before looking at the headings, write a tiny summary in the margin: "why trams removed", "costs + disruption". This is the most important step. It stops the headings from leading you.</p>' },
      { title: 'Match your summary to a heading', body: '<p>Find the heading that expresses your summary. Check it against the <b>whole</b> paragraph: does every sentence fit under this heading? If the heading only fits one sentence, it is a detail distractor.</p>' },
      { title: 'Do the easy paragraphs first; cross off used headings', body: '<p>You don\'t have to work in order. Answer the paragraphs you are confident about, cross off those headings, and the remaining choices become easier.</p>' },
      { title: 'For the hard paragraphs, compare two candidate headings', body: '<p>If two headings seem possible, ask which one the <b>whole paragraph</b> is about, and which one only appears as a supporting detail or example. Read the middle of the paragraph fully now if you need to.</p>' },
      { title: 'Use the map for the other questions', body: '<p>Your margin summaries now give you a map of the passage. Use them to locate answers to the passage\'s other tasks quickly.</p>' }
    ],
    sections: [
      {
        id: 'distractors', title: 'The five distractor headings',
        html: `<div class="table-wrap"><table class="data-table">
<tr><th>Distractor</th><th>How it works</th><th>Defence</th></tr>
<tr><td><b>The detail heading</b></td><td>Matches one example, figure or sentence in the paragraph</td><td>Does the heading fit <i>every</i> sentence?</td></tr>
<tr><td><b>The word-match heading</b></td><td>Repeats a word that appears in the paragraph</td><td>Summarise first, match second</td></tr>
<tr><td><b>The pre-turn heading</b></td><td>Matches the idea <i>before</i> "however" – the idea the writer moves away from</td><td>Find the turn word; the main idea follows it</td></tr>
<tr><td><b>The near-miss heading</b></td><td>Right topic, wrong angle: <i>causes</i> instead of <i>effects</i>, <i>benefits</i> instead of <i>popularity</i></td><td>Check the limiting word of the heading</td></tr>
<tr><td><b>The neighbour heading</b></td><td>Correct for the paragraph before or after</td><td>Check the paragraph boundary; each paragraph has its own focus</td></tr>
</table></div>`
      },
      {
        id: 'signals', title: 'Words in headings and what to look for in the paragraph',
        html: `<div class="table-wrap"><table class="data-table plain">
<tr><th>Heading says</th><th>Paragraph should contain</th></tr>
<tr><td>Reasons for / causes of / why...</td><td>because, due to, the result of, led to, several factors</td></tr>
<tr><td>Effects / consequences / impact of</td><td>as a result, consequently, led to, changed, affected</td></tr>
<tr><td>A solution / a response / a new approach</td><td>one way to, to address this, a scheme, a method, was introduced</td></tr>
<tr><td>Problems / drawbacks / limitations</td><td>however, unfortunately, difficult, costly, failed, risk</td></tr>
<tr><td>A comparison / contrast</td><td>whereas, unlike, similarly, by contrast, compared with</td></tr>
<tr><td>History / origins / development</td><td>dates, centuries, first, originally, later, over time</td></tr>
<tr><td>Future / prospects / predictions</td><td>will, is likely to, by 2050, may, expected, forecast</td></tr>
<tr><td>Disagreement / debate / controversy</td><td>critics, some argue, others claim, opposed, disputed</td></tr>
</table></div>`
      }
    ],
    worked: [
      {
        title: 'The Return of the Tram',
        source: `<h3>The Return of the Tram</h3>
<p><span class="para-label">A</span>In the first half of the twentieth century, trams were a familiar sight in cities across Europe and North America. By the 1960s, however, most networks had been torn up. Buses were cheaper to run and could change their routes easily, while tram tracks were increasingly seen as an obstacle to the growing number of private cars. In many cities, the decision to remove the trams was taken quickly, with little public debate.</p>
<p><span class="para-label">B</span>Since the 1980s, more than a hundred cities have reintroduced them. Planners point to several factors. Traffic congestion had become severe in many centres, and a single tram can carry as many people as three or four buses. Electric trams produce no exhaust at street level, an important consideration as concern about air quality grew. And a fixed track gives businesses confidence that a route will remain in place, which a bus route, which can be changed overnight, cannot.</p>
<p><span class="para-label">C</span>Modern trams bear little resemblance to their predecessors. Low floors allow wheelchair users and parents with pushchairs to board without steps; large windows and quiet electric motors make journeys more pleasant; and priority at traffic lights means trams are rarely delayed. Surveys suggest that these qualities attract people who would never consider taking a bus – an effect transport planners call "the rail factor".</p>
<p><span class="para-label">D</span>Not all the news is good. Building a tram line is expensive: in some cities the cost per kilometre has approached that of an underground railway. Construction can also disrupt streets for years, and businesses along the route sometimes lose customers while the work is under way.</p>
<p><span class="para-label">E</span>Once lines open, however, the picture often changes. Studies in several cities found that shops near new stops reported higher sales within two years, and that house prices close to the line rose faster than elsewhere. Some economists caution that trams may simply move activity from one part of a city to another rather than create new wealth, but few cities that have rebuilt their networks have chosen to remove them again.</p>`,
        instructions: '<i>The passage has five paragraphs, <b>A–E</b>. Choose the correct heading for each paragraph from the list below. Write the correct number, <b>i–viii</b>.</i>',
        questions: `<div class="option-box"><div class="ob-title">List of Headings</div>
<div>i&nbsp; Why cities got rid of trams</div><div>ii&nbsp; The price of construction, financial and otherwise</div><div>iii&nbsp; Economic gains once the lines are running</div><div>iv&nbsp; Features that win over new passengers</div><div>v&nbsp; Opposition from motorists</div><div>vi&nbsp; The reasons behind a revival</div><div>vii&nbsp; A comparison with underground railways</div><div>viii&nbsp; Doubts about the long-term value of trams</div></div>
<ol><li>Paragraph A</li><li>Paragraph B</li><li>Paragraph C</li><li>Paragraph D</li><li>Paragraph E</li></ol>`,
        walk: [
          { q: 'Before you start: read and compare the headings', a: '', steps: [
            'Key nouns: <i>why got rid</i> (i), <i>price</i> (ii), <i>economic gains</i> (iii), <i>features</i> (iv), <i>opposition</i> (v), <i>reasons revival</i> (vi), <i>comparison</i> (vii), <i>doubts</i> (viii).',
            'Notice the pairs that are close: i and vi are both about <i>reasons</i> (for removal vs for return); iii and viii are both about <i>value</i> (gains vs doubts). The limiting words will decide them.'
          ] },
          { q: 'Paragraph A', a: 'i', steps: [
            '<b>Read:</b> first sentences: trams were common... "By the 1960s, however, most networks had been torn up." The turn word <i>however</i> leads to the main idea: removal.',
            '<b>Middle:</b> buses cheaper, tracks an obstacle to cars, decision taken quickly → reasons for the removal.',
            '<b>Summary:</b> "why trams removed".',
            '<b>Match:</b> i "Why cities got rid of trams".',
            '<b>Distractor:</b> v "Opposition from motorists" – cars are mentioned, but the paragraph says tracks were <i>seen as an obstacle</i> to cars, not that motorists campaigned against trams. Word-match/detail trap.'
          ] },
          { q: 'Paragraph B', a: 'vi', steps: [
            '<b>Read:</b> "more than a hundred cities have reintroduced them. Planners point to several factors." → the paragraph lists reasons for the return.',
            '<b>Summary:</b> "why trams came back".',
            '<b>Match:</b> vi "The reasons behind a revival" (reintroduced = revival; factors = reasons).',
            '<b>Check the whole paragraph:</b> congestion, clean air, business confidence – all reasons. ✓'
          ] },
          { q: 'Paragraph C', a: 'iv', steps: [
            '<b>Read:</b> "Modern trams bear little resemblance to their predecessors" → then a list of features (low floors, windows, priority at lights).',
            '<b>Last sentence:</b> "these qualities attract people who would never consider taking a bus" → the features win passengers.',
            '<b>Summary:</b> "modern design attracts riders".',
            '<b>Match:</b> iv "Features that win over new passengers".'
          ] },
          { q: 'Paragraph D', a: 'ii', steps: [
            '<b>Read:</b> "Not all the news is good. Building a tram line is expensive..." then disruption to streets and businesses.',
            '<b>Summary:</b> "costs: money + disruption".',
            '<b>Match:</b> ii "The price of construction, financial and otherwise" – "otherwise" covers the disruption.',
            '<b>Distractor:</b> vii "A comparison with underground railways" – the underground is mentioned only as a measure of cost in one clause. It is a detail, not the main idea.'
          ] },
          { q: 'Paragraph E', a: 'iii', steps: [
            '<b>Read:</b> "Once lines open, however, the picture often changes." → after opening, shops sell more and house prices rise.',
            '<b>Summary:</b> "benefits after opening".',
            '<b>Match:</b> iii "Economic gains once the lines are running".',
            '<b>Distractor:</b> viii "Doubts about the long-term value" – some economists do express doubt, but in one clause, and the paragraph ends positively ("few cities... have chosen to remove them"). The doubt is a detail, not the main idea.'
          ] }
        ],
        lesson: 'Three of the five paragraphs contained a detail that matched an unused heading (cars → v, underground → vii, economists\' doubts → viii). This is exactly how real heading lists are built. Your own summary, written <b>before</b> you read the list again, is the defence.'
      }
    ],
    dos: [
      'Cross off the example heading first.',
      'Underline the key noun and limiting word in each heading.',
      'Read the first two sentences and the last sentence of each paragraph carefully.',
      'Write a 3–6 word summary of each paragraph before choosing.',
      'Check the heading fits the whole paragraph, not one sentence.',
      'Answer easy paragraphs first and cross off used headings.',
      'Use this task first – it gives you a map for the rest of the passage.'
    ],
    donts: [
      'Don\'t match a heading because it shares a word with the paragraph.',
      'Don\'t choose a heading that describes only an example or a figure.',
      'Don\'t stop at the first sentence if a turn word (however, yet) follows.',
      'Don\'t read every word of every paragraph on the first pass – skim first.',
      'Don\'t use the same heading twice.',
      'Don\'t write the numeral in a different form (4 or IV instead of iv).'
    ],
    careful: [
      { title: 'Topic sentences that are not first', body: '<p>The main idea is often in the first sentence – but not always. Paragraphs can open with a question, a background fact or a quotation, and then state the main idea in sentence two or three.</p>', example: '"Imagine a city without cars. For most urban planners this is a fantasy. Yet three European cities are now trying to make it real." → main idea: real attempts to create car-free cities.' },
      { title: 'Paragraphs that turn', body: '<p>When a paragraph begins with a common belief and then says <i>however</i> or <i>but</i>, the heading usually describes the second idea – the writer\'s point.</p>', example: '"Urban gardens have been praised for producing food. Yet their greatest contribution may be social..." → heading about community, not food.' },
      { title: 'Headings that are too broad or too narrow', body: '<p>"The history of transport" is too broad for a paragraph about why trams were removed. "The cost of tram tracks in 1950" is too narrow. The right heading is at the level of the whole paragraph.</p>' },
      { title: 'Similar headings', body: '<p>When two headings share a topic, the difference is in the limiting word: causes vs effects, past vs future, advantages vs popularity, a problem vs a solution to a problem. Find that word in the paragraph.</p>' }
    ],
    timing: '<p>Plan about <b>1–1½ minutes per paragraph</b>, so 6–9 minutes for a typical set. Reading headings first takes about one minute. If you get stuck on the last two paragraphs, read both fully – with only two or three headings left, a careful read decides them quickly.</p>',
    faq: [
      { q: 'Should I always do headings first?', a: '<p>Usually yes, because it builds a map of the passage. The exception: if the other tasks follow the passage order and are quick (TFNG, completion), some students prefer to do those first and let their reading inform the headings. Try both in practice tests and keep the one that works for you.</p>' },
      { q: 'Can a heading be used twice?', a: '<p>No. Each heading is used at most once. Some are never used.</p>' },
      { q: 'What if a paragraph seems to have two main ideas?', a: '<p>Look for the heading that covers both, or the idea that takes up more of the paragraph. A paragraph that begins with a problem and spends most of its length on a solution is about the solution.</p>' }
    ],
    checklist: [
      'I read the headings first and notice the differences between similar ones.',
      'I summarise each paragraph in my own words before choosing.',
      'I check each heading against the whole paragraph.',
      'I can recognise detail, word-match, pre-turn and near-miss distractors.',
      'I write Roman numerals correctly (i–xii).'
    ],
    summary: [
      'A heading expresses the main idea of the whole paragraph, not a detail.',
      'Summarise first, then match – never match words.',
      'Main ideas live in topic sentences and after turn words like "however".',
      'Distractors match details, words, the pre-turn idea or the wrong angle on the right topic.',
      'Doing headings first gives you a map for the rest of the passage.'
    ]
  },

  /* ======================================================================= */
  'matching-info': {
    intro: `
<p>In matching information you are given a list of statements describing a <b>piece of information</b> – "a reference to...", "an example of...", "an explanation of..." – and you must say which paragraph (A, B, C...) contains it. It looks like matching headings, but it is a completely different task. Headings test the <b>main idea</b> of a paragraph; matching information tests whether you can find a specific <b>detail</b> inside a paragraph, often a detail that is mentioned only briefly.</p>
<p>Three things make this task difficult. First, the questions are <b>not in passage order</b>, so you cannot work through the passage from top to bottom as you can for TFNG. Second, the statements are <b>general descriptions</b> of the information ("a financial drawback") rather than the information itself ("it cost £4 million"), so you must recognise the category. Third, <b>a paragraph can be the answer to more than one question</b>, and some paragraphs are not used at all.</p>
<p>The strategy in this chapter is to do this task <b>last</b> for its passage, when you already know the text, and to convert each question into a prediction of what the text will actually contain.</p>`,
    facts: [
      ['Appears in', 'Academic (Passages 1–3) and General Training'],
      ['Number of questions', 'Usually 4–7'],
      ['Order', '<b>Not</b> in passage order'],
      ['You write', 'A paragraph letter (A, B, C...)'],
      ['Main skill', 'Scanning for a type of detail; recognising categories'],
      ['Target time', '1–1½ minutes per question (do it last)']
    ],
    anatomy: `
<div class="instructions" style="background:var(--surface-2);padding:12px 16px;border-radius:8px"><i>Reading Passage 1 has six paragraphs, <b>A–F</b>.<br>Which paragraph contains the following information?<br>Write the correct letter, <b>A–F</b>, in boxes 1–5 on your answer sheet.<br><b>NB</b> You may use any letter more than once.</i></div>
<ul>
<li><b>"Which paragraph contains"</b> – the information may be a single phrase in a long paragraph. It does not have to be the main idea.</li>
<li><b>"NB You may use any letter more than once"</b> – two or even three answers can be the same paragraph. Don't avoid a letter just because you have used it.</li>
<li>Some paragraphs will not be used at all.</li>
</ul>`,
    tests: `
<p>Each question has two parts: a <b>category word</b> that tells you what kind of information to look for, and a <b>topic</b>. Learn to predict what each category looks like in a text:</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Category in the question</th><th>What it looks like in the passage</th></tr>
<tr><td>an example of / an instance of</td><td>for example, such as, a case in point, a named place or person</td></tr>
<tr><td>a reference to / a mention of</td><td>the topic appears, perhaps only in passing</td></tr>
<tr><td>a description of</td><td>adjectives, appearance, how something looks or works</td></tr>
<tr><td>an explanation of / the reason for</td><td>because, due to, this is why, as a result of</td></tr>
<tr><td>an estimate / a figure / a statistic</td><td><b>numbers</b>: about, approximately, %, millions</td></tr>
<tr><td>a prediction / a forecast</td><td>will, is expected to, by 2050, likely</td></tr>
<tr><td>a comparison</td><td>more than, unlike, similar to, whereas</td></tr>
<tr><td>a criticism / a drawback / a concern</td><td>however, critics, unfortunately, risk, harm</td></tr>
<tr><td>a method / a technique / a process</td><td>verbs of action in sequence, by + -ing, using</td></tr>
<tr><td>a definition</td><td>is known as, is called, refers to, means</td></tr>
</table></div>`,
    method: [
      { title: 'Leave this task until last for its passage', body: '<p>Answer the other tasks on the passage first. By then you have read most of the text and will remember where many details are.</p>' },
      { title: 'Underline the category word and the topic in each question', body: '<p>Category: <i>an estimate</i>. Topic: <i>food a swarm can eat</i>. The category tells you <b>what form</b> the answer takes in the text.</p>', example: '"<u>an estimate</u> of <u>the amount of food a swarm can eat</u>" → look for a <b>number</b> + food/eat/consume.' },
      { title: 'Predict the words and forms you are scanning for', body: '<p>For each question, write one or two predictions: numbers? a name? <i>because</i>? <i>will</i>? Synonyms of the topic? Questions with numbers or names are fastest – do them first.</p>' },
      { title: 'Use your memory and paragraph map first', body: '<p>If you did headings or other tasks on this passage, you already know roughly what each paragraph contains. Check the most likely paragraph first.</p>' },
      { title: 'Scan paragraph by paragraph for the category', body: '<p>For the remaining questions, scan each paragraph for your predicted forms. Read the matching sentence carefully: does it give <b>exactly</b> the category asked for (an estimate, not just a mention)?</p>' },
      { title: 'Confirm both parts: category + topic', body: '<p>A paragraph that mentions the topic but doesn\'t give the requested category is a distractor. "An estimate of cost" needs a cost figure, not just the word "expensive".</p>' },
      { title: 'Allow repeated letters; guess sensibly at the end', body: '<p>Use a letter again if the evidence points there. If time runs out, guess using your paragraph map, never leave a blank.</p>' }
    ],
    worked: [
      {
        title: 'The Desert Locust',
        source: `<h3>The Desert Locust</h3>
<p><span class="para-label">A</span>For most of its life, the desert locust is a shy, solitary insect. In this phase it is green or brown, blends into the vegetation of the dry regions where it lives, and actively avoids other locusts. It flies mainly at night and causes little damage to crops. Many people who live in these regions never notice it at all.</p>
<p><span class="para-label">B</span>Under certain conditions, however, the same species becomes one of the most destructive pests on Earth. Swarms can contain billions of insects and travel more than a hundred kilometres in a day. According to the United Nations' Food and Agriculture Organization, a swarm covering a single square kilometre can consume as much food in one day as about 35,000 people.</p>
<p><span class="para-label">C</span>The trigger for this transformation is crowding. After unusually heavy rains, vegetation grows rapidly and locusts breed in large numbers; when the plants dry up, the insects are forced together in the remaining green areas. Constant contact with other locusts causes a rise in serotonin, a chemical messenger in the nervous system. Within hours, the insects become attracted to one another instead of avoiding each other.</p>
<p><span class="para-label">D</span>Because swarms cross borders quickly, monitoring is organised internationally. Field teams survey breeding areas and send reports, increasingly through handheld devices and satellite links, to a central forecasting service. Combined with satellite images of rainfall and vegetation, this information allows experts to issue warnings weeks in advance.</p>
<p><span class="para-label">E</span>Control still relies largely on spraying chemical pesticides on young locusts before they can fly. This method is effective, but it has critics: pesticides can harm other insects, birds and livestock. Researchers are therefore testing alternatives, including a fungus that infects locusts but appears to be harmless to most other species.</p>`,
        instructions: '<i>The passage has five paragraphs, <b>A–E</b>. Which paragraph contains the following information? <b>NB</b> You may use any letter more than once.</i>',
        questions: `<ol>
<li>a reference to a substance that changes the insect's behaviour</li>
<li>an estimate of the amount of food a swarm can eat</li>
<li>a mention of a natural alternative to chemical control</li>
<li>a description of the insect's appearance when it lives alone</li>
<li>an explanation of how warnings are produced</li>
<li>the distance that swarms are able to cover</li>
</ol>`,
        walk: [
          { q: '1. a reference to a substance that changes the insect\'s behaviour', a: 'C', steps: [
            '<b>Category:</b> a reference to a <i>substance</i> → look for the name of a chemical. <b>Topic:</b> changes behaviour.',
            '<b>Scan:</b> paragraph C: "a rise in serotonin, a chemical messenger... the insects become attracted to one another instead of avoiding each other".',
            '<b>Confirm:</b> substance ✓ (serotonin), behaviour change ✓ (avoiding → attracted).',
            '<b>Trap:</b> paragraph E mentions pesticides (also substances), but they kill locusts rather than change their behaviour.'
          ] },
          { q: '2. an estimate of the amount of food a swarm can eat', a: 'B', steps: [
            '<b>Category:</b> an estimate → a <b>number</b>, often with <i>about / approximately</i>.',
            '<b>Scan for numbers:</b> paragraph B: "as much food in one day as about 35,000 people".',
            '<b>Confirm:</b> food ✓, estimate ✓ ("about").'
          ] },
          { q: '3. a mention of a natural alternative to chemical control', a: 'E', steps: [
            '<b>Predict:</b> "alternative" → <i>instead, other methods, testing</i>; "natural" → something living, e.g. a plant, animal or fungus.',
            '<b>Scan:</b> paragraph E: "testing alternatives, including a fungus that infects locusts".',
            '<b>Confirm:</b> a fungus is natural ✓, an alternative to pesticides ✓. Note that E is also about chemical control – one paragraph can contain both the problem and the alternative.'
          ] },
          { q: '4. a description of the insect\'s appearance when it lives alone', a: 'A', steps: [
            '<b>Category:</b> description of appearance → colours, shapes, adjectives. <b>Topic:</b> lives alone = solitary.',
            '<b>Scan:</b> paragraph A: "solitary insect. In this phase it is green or brown, blends into the vegetation".',
            '<b>Confirm:</b> appearance ✓ (colour), alone ✓ (solitary).'
          ] },
          { q: '5. an explanation of how warnings are produced', a: 'D', steps: [
            '<b>Predict:</b> warnings → <i>forecast, alert, advance</i>; explanation of how → a process.',
            '<b>Scan:</b> paragraph D: field reports + satellite images "allows experts to issue warnings weeks in advance".',
            '<b>Confirm:</b> the paragraph explains the process ✓.'
          ] },
          { q: '6. the distance that swarms are able to cover', a: 'B', steps: [
            '<b>Predict:</b> a number with a distance unit: km, miles.',
            '<b>Scan:</b> paragraph B: "travel more than a hundred kilometres in a day".',
            '<b>Note:</b> B is used for a second time. That is allowed – "NB You may use any letter more than once".'
          ] }
        ],
        lesson: 'Turning each category into a prediction (estimate → number; description → adjectives; explanation → because/process) is what makes this task fast. Notice also that paragraph B answered two questions and no question pointed to the main idea of paragraph D or E – details, not main ideas.'
      }
    ],
    dos: [
      'Do this task last for its passage.',
      'Underline the category word (estimate, example, reason...) and the topic.',
      'Convert each category into a prediction of what to scan for.',
      'Answer questions with numbers and names first.',
      'Check both the category and the topic before deciding.',
      'Reuse letters when the evidence supports it.'
    ],
    donts: [
      'Don\'t expect the answers to follow passage order.',
      'Don\'t match the main idea of a paragraph – look for details.',
      'Don\'t accept a paragraph that mentions the topic but not the requested category.',
      'Don\'t avoid a letter because you have already used it.',
      'Don\'t reread the whole passage for every question.'
    ],
    careful: [
      { title: 'Topic present, category missing', body: '<p>The most common error. The paragraph discusses the topic but doesn\'t provide the specific kind of information requested.</p>', example: 'Question: "an estimate of the cost of the project". Paragraph C says the project was "extremely expensive"; paragraph F says it "cost around $40 million". Answer: F.' },
      { title: 'Details hidden in long sentences', body: '<p>The information may be a short phrase in the middle of a long sentence, for example a figure inside a relative clause. Read carefully once you are in the right paragraph.</p>' },
      { title: 'Plural categories', body: '<p>"Examples of..." or "reasons for..." in the plural usually means the paragraph contains more than one example or reason. One example in passing may belong to a different question.</p>' }
    ],
    timing: '<p>Because you do this task last, you will often have less time than you would like. Aim for 1–1½ minutes per question. Do the fast questions (numbers, names) first, then the abstract ones. In the last minute, fill any blanks with your best guess from your paragraph map.</p>',
    faq: [
      { q: 'How is this different from matching headings?', a: '<p>Headings: main idea, one heading per paragraph, each heading used once. Matching information: specific details, paragraphs can be used more than once or not at all, questions in random order.</p>' },
      { q: 'Can I use the same letter three times?', a: '<p>Yes, if the evidence supports it. It is unusual, but allowed when the NB note appears.</p>' }
    ],
    checklist: [
      'I leave this task until the end of the passage.',
      'I underline the category word and predict what it looks like.',
      'I confirm both category and topic before answering.',
      'I am comfortable using a letter more than once.'
    ],
    summary: [
      'Matching information finds a detail, not a main idea.',
      'Questions are in random order and letters can repeat.',
      'The category word (estimate, example, reason, description) tells you what to scan for.',
      'Do it last, when you already know the passage.'
    ]
  },

  /* ======================================================================= */
  'matching-features': {
    intro: `
<p>In matching features you match a set of statements to a list of options – most often <b>people</b> (researchers, writers, experts), but sometimes <b>dates</b>, <b>places</b>, <b>organisations</b>, <b>theories</b> or <b>categories</b> such as types of animal. You might be asked "Which researcher made each finding?" or "Which period does each development belong to?".</p>
<p>The good news is that the options are usually easy to find: names and dates stand out. The difficulty is that each person may be mentioned <b>several times</b>, referred to by surname or pronoun later, or mentioned in someone else's sentence ("Unlike Smith, Jones found..."). The statements are heavily paraphrased and <b>not in passage order</b>.</p>
<p>The method in this chapter reverses the usual approach: instead of reading each statement and searching the whole passage, you first find and note what each <b>option</b> says, and then match statements to your notes.</p>`,
    facts: [
      ['Appears in', 'Academic (Passages 2–3 especially) and General Training'],
      ['Number of questions', 'Usually 4–7 statements, 3–6 options'],
      ['Order', 'Statements are <b>not</b> in passage order'],
      ['You write', 'A letter (A, B, C...)'],
      ['Main skill', 'Scanning for names; tracking reference (he, she, the latter)'],
      ['Target time', 'About 1 minute per statement']
    ],
    anatomy: `
<div class="instructions" style="background:var(--surface-2);padding:12px 16px;border-radius:8px"><i>Look at the following statements (Questions 20–25) and the list of researchers below.<br>Match each statement with the correct researcher, <b>A–D</b>.<br>Write the correct letter, <b>A–D</b>, in boxes 20–25 on your answer sheet.<br><b>NB</b> You may use any letter more than once.</i></div>
<ul>
<li>You write the <b>letter</b> of the option, not the name.</li>
<li>"You may use any letter more than once" – one researcher can make several of the statements; some may make none.</li>
<li>Sometimes the options are categories, e.g. "Classify the following features as belonging to A the first model, B the second model, C both models". Then "both" is a real option – read carefully.</li>
</ul>`,
    tests: `<p>This task tests <b>reference tracking</b> – following a person or thing through a text when it is referred to in different ways – and <b>attribution</b>: who exactly said or found what. Typical reference forms:</p>
<div class="table-wrap"><table class="data-table plain">
<tr><th>First mention</th><th>Later references</th></tr>
<tr><td>Professor Hanna Lindqvist of Uppsala University</td><td>Lindqvist, she, the Swedish researcher, her team, the latter</td></tr>
<tr><td>Okoro and his colleagues</td><td>they, the team, the researchers, these scientists</td></tr>
</table></div>`,
    method: [
      { title: 'Read the list of options and circle every occurrence in the passage', body: '<p>Scan for each name (or date or place) and circle it every time it appears – including surnames alone and clear references such as "the Swedish scientist". This takes 1–2 minutes and is time well spent.</p>' },
      { title: 'Make a short note of what each option says or found', body: '<p>Next to each circled name, write 2–4 words in the margin: "oxygen theory – no evidence", "brain cooling". Notes help you compare statements with meaning, not with words.</p>' },
      { title: 'Watch for sentences with two names', body: '<p>When one sentence mentions two people, decide who did what: "Unlike Smith, Jones argued..." – Jones argued; Smith did not. "Garcia rejected Lee\'s claim that..." – the claim belongs to Lee; the rejection to Garcia.</p>' },
      { title: 'Read each statement and match it to your notes', body: '<p>Underline the key idea in the statement and find the note that expresses the same meaning. Then go back to the text to confirm.</p>' },
      { title: 'Confirm in the text and check the verb', body: '<p>Check the exact action: did the person <i>suggest</i>, <i>prove</i>, <i>question</i>, <i>reject</i> or <i>observe</i>? A statement saying someone "proved" something is wrong if they only "suggested" it – and might belong to someone else.</p>' },
      { title: 'Reuse letters if needed and answer every question', body: '<p>One person can make several statements. If unsure, choose the person whose notes are closest in meaning.</p>' }
    ],
    worked: [
      {
        title: 'Why Do We Yawn?',
        source: `<h3>Why Do We Yawn?</h3>
<p>Everybody yawns, yet scientists still disagree about why. For much of the twentieth century, the standard explanation was that yawning increases oxygen in the blood. This idea was tested by Professor Kofi Mensah, who asked volunteers to breathe air containing extra oxygen or extra carbon dioxide. Neither changed how often they yawned, and Mensah concluded that the oxygen theory, though widely repeated, had no experimental support.</p>
<p>A more recent proposal comes from Dr Hanna Lindqvist, who argues that yawning cools the brain. A deep intake of air, she suggests, brings cooler blood to the head, much as a radiator cools an engine. In support, she found that people yawned less often in hot weather, when the outside air could not cool anything. Her critics, among them Dr Rosa Ferreira, accept that temperature may play a part, but doubt that it explains why yawns are triggered by seeing others yawn.</p>
<p>Ferreira's own work focuses on precisely this contagious yawning. She observed that it does not appear in most children until the age of about four or five, around the time they begin to understand what others are thinking and feeling. For Ferreira, this suggests a link between contagious yawning and empathy, although she stresses that the connection has not yet been proved.</p>
<p>Professor David Okoro takes a different view again. Observing athletes and musicians before performances, he noticed frequent yawning at moments of high alertness rather than tiredness. Okoro proposes that yawning helps the body to switch from one state to another – from rest to activity, or the reverse – and that its link with sleep has been exaggerated.</p>
<p class="small muted">(The researchers in this passage are fictional.)</p>`,
        instructions: '<i>Match each statement with the correct researcher, <b>A–D</b>. <b>NB</b> You may use any letter more than once.</i>',
        questions: `<div class="option-box"><div class="ob-title">List of Researchers</div><div>A Kofi Mensah</div><div>B Hanna Lindqvist</div><div>C Rosa Ferreira</div><div>D David Okoro</div></div>
<ol>
<li>found that changing the air people breathed had no effect on yawning</li>
<li>suggests that yawning helps to lower the temperature of the head</li>
<li>questions whether one theory can explain yawning caused by watching others</li>
<li>connects the development of contagious yawning to an understanding of other people</li>
<li>noticed yawning in people who were about to perform</li>
<li>believes the connection between yawning and tiredness has been overstated</li>
<li>showed that a popular explanation lacked evidence</li>
</ol>`,
        walk: [
          { q: 'First: circle names and make notes', a: '', steps: [
            '<b>Mensah</b> (para 1): tested oxygen theory; extra oxygen/CO₂ – no change; oxygen theory "had no experimental support".',
            '<b>Lindqvist</b> (para 2): yawning cools brain; fewer yawns in hot weather.',
            '<b>Ferreira</b> (para 2 + 3): critic of Lindqvist – cooling doesn\'t explain contagious yawning; children 4–5 years; link to empathy (not proved).',
            '<b>Okoro</b> (para 4): yawning before performances; switching states; link with sleep exaggerated.',
            'Note that Ferreira appears in <b>two</b> paragraphs – first inside Lindqvist\'s paragraph as a critic.'
          ] },
          { q: '1. found that changing the air people breathed had no effect on yawning', a: 'A', steps: [
            '<b>Match notes:</b> Mensah – extra oxygen / CO₂, "Neither changed how often they yawned".',
            '<b>Paraphrase:</b> <i>changing the air people breathed</i> = air containing extra oxygen or carbon dioxide; <i>no effect</i> = neither changed.'
          ] },
          { q: '2. suggests that yawning helps to lower the temperature of the head', a: 'B', steps: [
            '<b>Match:</b> Lindqvist – "yawning cools the brain... brings cooler blood to the head".',
            '<b>Verb check:</b> "suggests" ✓ – she "argues"/"suggests"; she does not claim proof.'
          ] },
          { q: '3. questions whether one theory can explain yawning caused by watching others', a: 'C', steps: [
            '<b>Locate:</b> para 2: "Her critics, among them Dr Rosa Ferreira... doubt that it explains why yawns are triggered by seeing others yawn."',
            '<b>Trap:</b> this sentence is in Lindqvist\'s paragraph, and "Her" refers to Lindqvist. But the doubting is done by the critics, including Ferreira.',
            '<b>Answer:</b> C. Always ask <i>who is the subject of the verb</i>.'
          ] },
          { q: '4. connects the development of contagious yawning to an understanding of other people', a: 'C', steps: [
            '<b>Match:</b> Ferreira – appears at 4–5 years "around the time they begin to understand what others are thinking and feeling... a link between contagious yawning and empathy".',
            '<b>Paraphrase:</b> <i>understanding of other people</i> = understand what others are thinking and feeling / empathy.',
            '<b>Note:</b> C is used twice – allowed.'
          ] },
          { q: '5. noticed yawning in people who were about to perform', a: 'D', steps: [
            '<b>Match:</b> Okoro – "athletes and musicians before performances".'
          ] },
          { q: '6. believes the connection between yawning and tiredness has been overstated', a: 'D', steps: [
            '<b>Match:</b> Okoro – "its link with sleep has been exaggerated".',
            '<b>Paraphrase:</b> <i>tiredness</i> ≈ sleep; <i>overstated</i> = exaggerated.'
          ] },
          { q: '7. showed that a popular explanation lacked evidence', a: 'A', steps: [
            '<b>Match:</b> Mensah – "the oxygen theory, though widely repeated, had no experimental support".',
            '<b>Paraphrase:</b> <i>popular</i> = widely repeated; <i>lacked evidence</i> = had no experimental support.',
            '<b>Contrast:</b> Ferreira\'s idea is described as "not yet proved", but it is her own idea, not a popular explanation she disproved.'
          ] }
        ],
        lesson: 'The hardest question (3) placed one researcher\'s opinion inside another researcher\'s paragraph. Circling every occurrence of every name first – and noting who is the subject of each verb – prevents this mistake.'
      }
    ],
    dos: [
      'Circle every occurrence of every option in the passage before answering.',
      'Note what each person said or found in 2–4 words.',
      'Track pronouns and references (she, the team, the latter).',
      'Check who is the subject of each verb in sentences with two names.',
      'Check the strength of the verb: suggested vs proved vs rejected.',
      'Reuse letters when the evidence supports it.'
    ],
    donts: [
      'Don\'t assume statements are in passage order.',
      'Don\'t assume a paragraph contains only one person\'s views.',
      'Don\'t attribute a claim to the person who reports or rejects it.',
      'Don\'t write the name instead of the letter.',
      'Don\'t ignore later mentions of a person – their main idea may come later.'
    ],
    careful: [
      { title: 'Claims reported by someone else', body: '<p>"Garcia rejected Lee\'s claim that X" – X belongs to Lee; the rejection belongs to Garcia. A statement "believes that X" matches Lee, not Garcia.</p>' },
      { title: 'The same idea held by two people', body: '<p>If two people share a view ("Like Patel, Moreno found..."), check which statement the question is really describing. Small differences (e.g. who found it <i>first</i>) decide the answer.</p>' },
      { title: '"Both" options', body: '<p>In classification tasks (A the first type, B the second type, C both), don\'t choose A or B until you have checked the other paragraph. Many students lose marks by missing that a feature applies to both.</p>' }
    ],
    timing: '<p>The circling and note-making step takes about 2 minutes but saves time on every statement. After that, allow about 1 minute per statement. A set of six statements should take 7–8 minutes in total.</p>',
    faq: [
      { q: 'What if a name appears in many paragraphs?', a: '<p>Circle them all and note each mention. The statement may describe any of them, so check all mentions before deciding.</p>' },
      { q: 'Can one option be the answer to no questions?', a: '<p>Yes. Some options are distractors and are never used.</p>' }
    ],
    checklist: [
      'I circle all occurrences of every option first.',
      'I track pronouns and other references.',
      'I identify who is the subject of each claim.',
      'I check the strength of the verb (suggest / prove / reject).'
    ],
    summary: [
      'Find the options first, then match statements to your notes.',
      'Statements are not in order; letters may repeat or not be used.',
      'The main trap is attribution: a claim reported or rejected by someone else.',
      'Track every reference to a person: surname, pronoun, description.'
    ]
  }
};

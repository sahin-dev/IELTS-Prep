import type { Chapter } from '@/lib/types';

/* Reading chapters: True/False/Not Given, Yes/No/Not Given, Multiple choice */
export const readingChaptersA: Record<string, Chapter> = {
  /* ======================================================================= */
  tfng: {
    intro: `
<p>In a True / False / Not Given task you are given a list of statements. For each one you must decide whether the passage <b>confirms</b> it, <b>contradicts</b> it, or <b>says nothing that settles it</b>. It looks like the simplest task in the test – you only write one of three words – but it is the task candidates complain about most. The reason is that it is not really a vocabulary test. It is a test of <b>exact, logical reading</b>.</p>
<p>The single most important principle is this: <b>the passage is the only world that exists</b>. Your knowledge, your common sense and what is "probably true" do not count. A statement can be a well-known fact and still be NOT GIVEN, because the passage never mentions it. A statement can sound unlikely and still be TRUE, because the passage says so.</p>
<p>Almost every statement is built by taking one sentence of the passage and either <b>paraphrasing it faithfully</b> (TRUE), <b>changing one detail so that it clashes</b> with the text (FALSE), or <b>adding a detail the text does not cover</b> (NOT GIVEN). Once you know what kinds of change examiners make, the task becomes much more predictable. This chapter teaches you to recognise those changes and gives you a clear test for the hardest decision: FALSE or NOT GIVEN.</p>`,
    facts: [
      ['Appears in', 'Academic and General Training, any passage'],
      ['Number of questions', 'Usually 4–7 in one set'],
      ['Order', 'Follows the order of the passage'],
      ['You write', 'TRUE, FALSE or NOT GIVEN'],
      ['Main skill', 'Careful reading and logical comparison'],
      ['Target time', 'About 1 minute per statement']
    ],
    anatomy: `
<div class="instructions" style="background:var(--surface-2);padding:12px 16px;border-radius:8px"><i>Do the following statements agree with the information given in Reading Passage 1?<br>In boxes 1–7 on your answer sheet, write</i><br><b>TRUE</b> if the statement agrees with the information<br><b>FALSE</b> if the statement contradicts the information<br><b>NOT GIVEN</b> if there is no information on this</div>
<p>Every phrase in these instructions matters:</p>
<ul>
<li><b>"the information"</b>: you are checking <b>facts</b>. If the instructions say "the views of the writer" or "the claims of the writer", it is a Yes / No / Not Given task instead (next chapter), and you must write YES or NO, not TRUE or FALSE. Writing the wrong pair of words is marked wrong even if your thinking was right.</li>
<li><b>"agrees with"</b>: TRUE needs the <b>whole</b> statement to be supported. If half of it is supported and the other half is not mentioned, the answer is not TRUE.</li>
<li><b>"contradicts"</b>: FALSE needs the passage to say something that makes the statement <b>impossible</b>. Being "different" or "not mentioned" is not enough.</li>
<li><b>"no information on this"</b>: NOT GIVEN means you cannot prove the statement true or false from the passage. The topic may be mentioned; the specific claim is not settled.</li>
<li><b>"In boxes 1–7"</b>: check the numbers. Sets often start at 8 or 14; writing answers in the wrong boxes loses every mark in the set.</li>
</ul>`,
    tests: `
<p>Each statement has three layers. Learn to see them separately, because the examiner usually changes only one of them:</p>
<div class="table-wrap"><table class="data-table plain">
<tr><th>Layer</th><th>What it is</th><th>Example: "<i>The first steam-powered lamp was installed in Scotland in 1845.</i>"</th></tr>
<tr><td><b>Locators</b></td><td>Words that help you <b>find</b> the place in the text – names, dates, numbers, technical nouns</td><td>steam-powered lamp, Scotland, 1845</td></tr>
<tr><td><b>Claim</b></td><td>What is <b>said about</b> the topic – usually the verb, adjective or relationship</td><td>was installed</td></tr>
<tr><td><b>Qualifiers</b></td><td>Small words that <b>limit</b> the claim – these decide most answers</td><td><u>first</u></td></tr>
</table></div>
<p>Locators get you to the right sentence. The <b>claim and qualifiers</b> decide the answer. Weaker candidates find the right sentence, see the same words and write TRUE. Stronger candidates check whether the claim and every qualifier are also supported.</p>`,
    method: [
      {
        title: 'Check the instructions and the question numbers',
        body: '<p>Confirm it is TRUE/FALSE/NOT GIVEN (facts), not YES/NO/NOT GIVEN (views). Note the question range, e.g. 8–13, so your answers go in the right boxes.</p>'
      },
      {
        title: 'Read all the statements quickly before reading the passage',
        body: '<p>Statements follow the order of the passage, so together they form a rough map of the text: statement 1 is near the beginning, the last statement is near the end. Reading them first also tells you what to look out for.</p>'
      },
      {
        title: 'Take the first statement apart: locators, claim, qualifiers',
        body: '<p>Underline the <b>locators</b> (easiest to scan for: names, numbers, dates, capital letters, unusual nouns). Circle the <b>claim</b> and every <b>qualifier</b>: <i>all, most, some, only, always, never, first, main, more than, increased, caused</i>.</p>',
        example: '"Keepers on rock lighthouses usually <u>worked alone</u>." Locators: <i>rock lighthouses, keepers</i>. Claim: <i>worked alone</i>. Qualifier: <i>usually</i>.'
      },
      {
        title: 'Predict how the passage may say it',
        body: '<p>Take five seconds to think of synonyms for the locators and the claim. The passage will rarely repeat the statement\'s words; it paraphrases them.</p>',
        example: '"worked alone" → <i>on their own, single keeper, by themselves</i> – or the opposite: <i>in pairs, teams, together</i>.'
      },
      {
        title: 'Scan to the location, then read slowly',
        body: '<p>Scan for the locators (or their synonyms). When you find them, stop scanning and switch to <b>careful reading</b>: read the target sentence, plus the sentence before and the sentence after. The key information is often split across two sentences, or reversed by a <i>however</i> in the next sentence.</p>'
      },
      {
        title: 'Compare part by part',
        body: '<p>Split the statement into its parts and check each part separately against the text: <b>who? did what? how much? when? how often? which one?</b> One unsupported part is enough to stop the answer being TRUE.</p>'
      },
      {
        title: 'Decide with the "both true?" test',
        body: '<p>Ask: <b>"If the statement were true, would the passage have to be wrong?"</b></p><ul><li>The passage says the same thing → <b>TRUE</b>.</li><li>Yes, they cannot both be true → <b>FALSE</b>.</li><li>No, they could both be true, but the passage does not confirm it → <b>NOT GIVEN</b>.</li></ul>',
        example: 'Passage: "The bridge was painted red." Statement: "The bridge was painted in 1932." Both could be true at once, and the date is never given → NOT GIVEN. Statement: "The bridge was painted green." Both cannot be true → FALSE.'
      },
      {
        title: 'Don\'t get stuck: use position',
        body: '<p>If you cannot locate a statement after about 90 seconds, leave it, answer the next one, and come back. Its answer lies <b>between</b> the location of the previous answer and the next one, which narrows your search. If you still find nothing on the specific claim, NOT GIVEN is the most likely answer.</p>'
      },
      {
        title: 'Write the full answer in the correct box',
        body: '<p>Write TRUE, FALSE or NOT GIVEN in capitals in the right box. Then start the next statement from where the last answer was located – not from the top of the passage.</p>'
      }
    ],
    sections: [
      {
        id: 'flow', title: 'The decision in one diagram',
        html: `<ol class="steps">
<li><b>Can I find the topic of the statement in the passage?</b> No → it is probably <b>NOT GIVEN</b> (re-check the area between the previous and next answers first). Yes → go on.</li>
<li><b>Does the passage say the same thing, including every qualifier?</b> Yes → <b>TRUE</b>. No or not sure → go on.</li>
<li><b>Does the passage say something that cannot be true at the same time as the statement?</b> Yes → <b>FALSE</b>. No → <b>NOT GIVEN</b>.</li>
</ol>
<div class="callout tip"><strong>Remember</strong>FALSE needs evidence <i>against</i> the statement. NOT GIVEN means there is no evidence either way. If you cannot point to the words that make the statement impossible, it is not FALSE.</div>`
      },
      {
        id: 'changes', title: 'How examiners build TRUE, FALSE and NOT GIVEN statements',
        html: `<p>Study these patterns. Each row takes one passage sentence and shows a typical change.</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Change made</th><th>Passage says</th><th>Statement says</th><th>Answer</th></tr>
<tr><td>Faithful paraphrase</td><td>The scheme was abandoned after two years.</td><td>The project was discontinued within a short period.</td><td><b>TRUE</b></td></tr>
<tr><td>Qualifier strengthened</td><td>Some farmers have switched to drones.</td><td>All farmers now use drones.</td><td><b>FALSE</b></td></tr>
<tr><td>Number or date changed</td><td>The museum opened in 1910.</td><td>The museum opened in the 1920s.</td><td><b>FALSE</b></td></tr>
<tr><td>Opposite meaning (antonym)</td><td>Sales rose steadily.</td><td>Sales gradually declined.</td><td><b>FALSE</b></td></tr>
<tr><td>Wrong person or thing</td><td>Lee discovered the comet; Ortiz named it.</td><td>Ortiz discovered the comet.</td><td><b>FALSE</b></td></tr>
<tr><td>Extra detail added</td><td>The bridge was built in 1932.</td><td>The bridge was built in 1932 by a German firm.</td><td><b>NOT GIVEN</b></td></tr>
<tr><td>Reason added</td><td>The factory closed in 2004.</td><td>The factory closed because of falling demand.</td><td><b>NOT GIVEN</b></td></tr>
<tr><td>Comparison the text does not make</td><td>Cats sleep 15 hours a day. Dogs are also heavy sleepers.</td><td>Cats sleep more than dogs.</td><td><b>NOT GIVEN</b></td></tr>
<tr><td>"First / only" added</td><td>The town installed electric street lights in 1882.</td><td>The town was the first to install electric street lights.</td><td><b>NOT GIVEN</b></td></tr>
<tr><td>Certainty changed</td><td>The results suggest the drug may reduce pain.</td><td>The drug has been proved to reduce pain.</td><td><b>FALSE</b> (the passage says the result is uncertain; "proved" clashes)</td></tr>
<tr><td>Two parts: one true, one false</td><td>Automation began in the 1960s; the last keepers left in 1998.</td><td>Automation began in the 1960s and was completed within ten years.</td><td><b>FALSE</b> (one part contradicted is enough)</td></tr>
<tr><td>Two parts: one true, one missing</td><td>The factory closed in 2004.</td><td>The factory closed in 2004, putting 300 people out of work.</td><td><b>NOT GIVEN</b> (nothing is contradicted; one part is unsupported)</td></tr>
</table></div>`
      },
      {
        id: 'qualifiers', title: 'Qualifiers: the small words that decide big answers',
        html: `<p>Put a circle round every qualifier in the statement and find its equivalent in the passage. If the strength does not match, the statement is usually FALSE (if the text clearly gives a different strength) or NOT GIVEN (if the text gives none).</p>
<div class="table-wrap"><table class="data-table plain">
<tr><th>Group</th><th>Words</th><th>Watch for</th></tr>
<tr><td>Quantity</td><td>all, every, most, many, some, a few, few, none</td><td>"many" ≠ "most"; "a few" (some) ≠ "few" (hardly any)</td></tr>
<tr><td>Frequency</td><td>always, usually, often, sometimes, rarely, never</td><td>"often" in the text vs "always" in the statement → FALSE</td></tr>
<tr><td>Uniqueness</td><td>only, first, last, the main, the biggest, solely, entirely</td><td>Very often added to create NOT GIVEN or FALSE</td></tr>
<tr><td>Certainty</td><td>proved, showed, confirmed vs suggested, may, might, it is thought</td><td>Text uncertain + statement certain → FALSE</td></tr>
<tr><td>Change</td><td>increased, decreased, remained, doubled</td><td>Direction and amount both have to match</td></tr>
<tr><td>Cause</td><td>because, led to, resulted in, due to</td><td>Two facts in the text are not automatically cause and effect</td></tr>
</table></div>`
      },
      {
        id: 'fvng', title: 'FALSE or NOT GIVEN? Six practice pairs',
        html: `<p>Cover the answers and decide for yourself. Each passage sentence is followed by two statements: one FALSE, one NOT GIVEN.</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Passage</th><th>Statement</th><th>Answer and reason</th></tr>
<tr><td rowspan="2">The festival attracts around 20,000 visitors each summer.</td><td>The festival attracts fewer than 5,000 visitors.</td><td><b>FALSE</b> – 20,000 makes this impossible.</td></tr>
<tr><td>The festival attracts more visitors than it did ten years ago.</td><td><b>NOT GIVEN</b> – no past figure is given.</td></tr>
<tr><td rowspan="2">Wilson trained as a doctor before turning to writing.</td><td>Wilson never studied medicine.</td><td><b>FALSE</b> – he trained as a doctor.</td></tr>
<tr><td>Wilson was a successful doctor.</td><td><b>NOT GIVEN</b> – his success as a doctor is not described.</td></tr>
<tr><td rowspan="2">The new tunnel shortened the journey by forty minutes.</td><td>The journey took longer after the tunnel opened.</td><td><b>FALSE</b> – it was shortened.</td></tr>
<tr><td>The tunnel was expensive to build.</td><td><b>NOT GIVEN</b> – cost is not mentioned.</td></tr>
</table></div>
<p>Notice the pattern: the FALSE statements <b>clash</b> with a specific word in the passage; the NOT GIVEN statements <b>go beyond</b> what the passage says.</p>`
      }
    ],
    worked: [
      {
        title: 'Keepers of the Light',
        source: `<h3>Keepers of the Light</h3>
<p>For more than two centuries, the safety of ships approaching Britain's coasts depended on a small number of men and women who lived in lighthouses. Their duties were simple to describe but exhausting to perform: the lamp had to be lit at sunset, its wick trimmed every few hours through the night, and the glass cleaned of soot each morning. On rock lighthouses far out at sea, keepers worked in teams of three, so that one could rest while another kept watch.</p>
<p>The earliest lights burned coal or wood in open iron baskets, which produced a weak and unreliable glow, particularly in rain. The introduction of oil lamps with polished reflectors at the end of the eighteenth century made lights visible from much greater distances. Even so, it was the glass lens designed by the French engineer Augustin Fresnel in the 1820s that transformed the service: by bending light into a single concentrated beam, it allowed a modest flame to be seen more than twenty miles away.</p>
<p>Life on remote stations was often lonely. Relief boats were supposed to arrive every month, but winter storms could delay them for weeks, and keepers sometimes ran short of fresh food. Despite this, many keepers remained in the service for decades, and some families produced several generations of keepers.</p>
<p>From the 1960s onwards, lighthouses were gradually automated. Electric lamps that switched themselves on at dusk, together with remote monitoring, made resident keepers unnecessary, and the last keepers in Britain left their posts in 1998. Today most lighthouses are controlled from a central office, although a number have been converted into museums or holiday accommodation.</p>`,
        instructions: '<i>Do the following statements agree with the information given in the passage? Write <b>TRUE</b>, <b>FALSE</b> or <b>NOT GIVEN</b>.</i>',
        questions: `<ol>
<li>Keepers on rock lighthouses usually worked alone.</li>
<li>Keepers had to clean the glass at the start of each day.</li>
<li>Fresnel's lens was first used in a British lighthouse.</li>
<li>Fresnel's design made it possible for small flames to be seen at long distances.</li>
<li>Relief boats always arrived on schedule.</li>
<li>Some keepers' children also became keepers.</li>
<li>Resident keepers were withdrawn because automation was cheaper.</li>
<li>All of Britain's lighthouses are now museums or holiday homes.</li>
</ol>`,
        walk: [
          { q: '1. Keepers on rock lighthouses usually worked alone.', a: 'FALSE', steps: [
            '<b>Locators:</b> <i>rock lighthouses</i> – a distinctive phrase, easy to scan. <b>Claim:</b> <i>worked alone</i>. <b>Qualifier:</b> <i>usually</i>.',
            '<b>Locate:</b> end of paragraph 1: "On rock lighthouses far out at sea, keepers worked in teams of three".',
            '<b>Compare:</b> "teams of three" against "alone". Both cannot be true at once.',
            '<b>Decide:</b> FALSE. The qualifier "usually" doesn\'t rescue it: the text gives no situation in which they worked alone.'
          ] },
          { q: '2. Keepers had to clean the glass at the start of each day.', a: 'TRUE', steps: [
            '<b>Locators:</b> <i>clean the glass</i>. <b>Claim:</b> <i>had to</i> (an obligation) + <i>at the start of each day</i> (time).',
            '<b>Locate:</b> paragraph 1: "the lamp had to be lit... and the glass cleaned of soot each morning".',
            '<b>Compare:</b> "had to" = "had to" (the obligation covers the whole list); "at the start of each day" = "each morning". Every part matches.',
            '<b>Decide:</b> TRUE. Notice the paraphrase is of the <i>time phrase</i>; this is typical.'
          ] },
          { q: '3. Fresnel\'s lens was first used in a British lighthouse.', a: 'NOT GIVEN', steps: [
            '<b>Locators:</b> <i>Fresnel\'s lens</i> – a capitalised name, very easy to find. <b>Claim:</b> <i>first used in a British lighthouse</i>.',
            '<b>Locate:</b> paragraph 2: "the glass lens designed by the French engineer Augustin Fresnel in the 1820s that transformed the service".',
            '<b>Compare:</b> the text tells us who designed it and what it did. It says nothing about <b>where</b> it was first used.',
            '<b>The trap:</b> many students write FALSE because Fresnel was French and "therefore" it was first used in France. That is an assumption, not the text. A French engineer\'s lens could have been used first anywhere.',
            '<b>"Both true?" test:</b> could the passage be correct AND the lens have been first used in Britain? Yes – nothing clashes. So it is not FALSE.',
            '<b>Decide:</b> NOT GIVEN.'
          ] },
          { q: '4. Fresnel\'s design made it possible for small flames to be seen at long distances.', a: 'TRUE', steps: [
            '<b>Locate:</b> same sentence: "it allowed a modest flame to be seen more than twenty miles away".',
            '<b>Paraphrases:</b> <i>made it possible</i> = <i>allowed</i>; <i>small flames</i> = <i>a modest flame</i>; <i>long distances</i> = <i>more than twenty miles</i>.',
            '<b>Decide:</b> TRUE. Three paraphrases in one statement is common – match meaning, not words.'
          ] },
          { q: '5. Relief boats always arrived on schedule.', a: 'FALSE', steps: [
            '<b>Locators:</b> <i>relief boats</i>. <b>Qualifier:</b> <i>always</i> – circle it immediately.',
            '<b>Locate:</b> paragraph 3: "Relief boats were supposed to arrive every month, but winter storms could delay them for weeks".',
            '<b>Compare:</b> "were supposed to... but... could delay them" tells us they did not always arrive on time.',
            '<b>Decide:</b> FALSE. The phrase "were supposed to" is a classic signal that what was planned did not always happen.'
          ] },
          { q: '6. Some keepers\' children also became keepers.', a: 'TRUE', steps: [
            '<b>Locate:</b> end of paragraph 3: "some families produced several generations of keepers".',
            '<b>Compare:</b> "several generations" within a family means parents and their children (and grandchildren) were keepers. "Some families" matches "some keepers".',
            '<b>Decide:</b> TRUE. This is an inference of meaning, not of extra facts: "generations" <i>means</i> children followed parents.'
          ] },
          { q: '7. Resident keepers were withdrawn because automation was cheaper.', a: 'NOT GIVEN', steps: [
            '<b>Claim:</b> a <b>reason</b> – <i>because automation was cheaper</i>. Reasons are a favourite way to create NOT GIVEN statements.',
            '<b>Locate:</b> paragraph 4: "Electric lamps... together with remote monitoring, made resident keepers unnecessary, and the last keepers... left their posts in 1998."',
            '<b>Compare:</b> the text says keepers were withdrawn and that automation made them <i>unnecessary</i>. Cost is never mentioned.',
            '<b>"Both true?" test:</b> could automation have been cheaper and the passage still be correct? Yes – there is no clash, but no confirmation either.',
            '<b>Decide:</b> NOT GIVEN. Being "probably true in real life" is irrelevant.'
          ] },
          { q: '8. All of Britain\'s lighthouses are now museums or holiday homes.', a: 'FALSE', steps: [
            '<b>Qualifier:</b> <i>All</i>. <b>Locate:</b> last sentence: "Today most lighthouses are controlled from a central office, although a number have been converted into museums or holiday accommodation."',
            '<b>Compare:</b> if <i>most</i> are still working lights controlled centrally, it is impossible that <i>all</i> are museums or homes.',
            '<b>Decide:</b> FALSE. The topic words match (museums, holiday), which tempts students into TRUE – always check the qualifier.'
          ] }
        ],
        lesson: 'Statements 3 and 7 show the two most common NOT GIVEN patterns: a <b>detail the text never covers</b> (where the lens was first used) and a <b>reason the text never gives</b> (cost). Statements 1, 5 and 8 show the most common FALSE patterns: a changed <b>number</b>, a changed <b>frequency</b> and a changed <b>quantity</b>.'
      }
    ],
    dos: [
      'Read the statements before the passage – they are a map of the text in order.',
      'Underline locators and circle qualifiers in every statement.',
      'Read the sentence before and after the location – the answer is often split or reversed by <i>however</i>.',
      'Check <b>every part</b> of a long statement separately.',
      'Use the "both true?" test to separate FALSE from NOT GIVEN.',
      'Expect roughly a mix of all three answers – but never choose an answer just to "balance" them.',
      'Use the position of the previous and next answers to find a hard statement.',
      'Write the answer in full capitals: TRUE / FALSE / NOT GIVEN.'
    ],
    donts: [
      'Don\'t use your own knowledge or common sense – only the passage counts.',
      'Don\'t write TRUE because you found the same words; check the meaning and the qualifiers.',
      'Don\'t write FALSE just because something is not mentioned – that is NOT GIVEN.',
      'Don\'t make "logical" assumptions (French engineer → used first in France).',
      'Don\'t write YES / NO in a TRUE / FALSE task (or the reverse) – it is marked wrong.',
      'Don\'t spend more than about 90 seconds on one statement on the first attempt.',
      'Don\'t search the whole passage from the top for each statement – work forward.',
      'Don\'t change an answer at the end without new evidence from the text.'
    ],
    careful: [
      { title: 'The word-match trap', body: '<p>The examiner deliberately reuses words from the passage in a statement that means something different. Seeing the same words makes you feel the statement is TRUE.</p>', example: 'Passage: "The council <b>rejected</b> the plan to <b>build a new library</b>." Statement: "The council decided to build a new library." Same words, opposite meaning → FALSE.' },
      { title: 'Partial truth', body: '<p>Long statements often have two parts. If one part is supported and the other is contradicted, the answer is FALSE. If one part is supported and the other is not mentioned, the answer is NOT GIVEN. It is never TRUE unless every part is supported.</p>', example: '"The museum, which opened in 1910, is the largest in the country." The date matches, but size is never mentioned → NOT GIVEN.' },
      { title: 'Hidden comparisons', body: '<p>The passage gives two separate facts; the statement compares them. Unless the passage gives figures or a comparison that settles it, the comparison is NOT GIVEN.</p>', example: 'Passage: "Wheat is grown in the north; rice is grown in the south." Statement: "More wheat than rice is grown." → NOT GIVEN.' },
      { title: '"Was supposed to", "was intended to", "was expected to"', body: '<p>These phrases describe plans, not results. They usually signal that the plan did not happen, or that the result is unknown.</p>', example: '"The road was expected to open in 2010" does not mean it opened in 2010. Statement "The road opened in 2010" → usually NOT GIVEN, or FALSE if the text then says it opened in 2013.' },
      { title: 'Certainty and hedging', body: '<p>Academic texts are careful: <i>may, suggests, appears, is thought to</i>. A statement that turns a possibility into a fact clashes with the text.</p>', example: 'Passage: "This may explain the decline." Statement: "This explains the decline." → FALSE in most cases, because the text presents it only as possible.' },
      { title: 'Cause and effect that isn\'t there', body: '<p>Two things that happen in the same paragraph – even in the same sentence – are not necessarily cause and effect. Look for an explicit link: <i>because, as a result, led to, caused, due to</i>.</p>', example: 'Passage: "In 1990 the factory closed and the population fell." Statement: "The population fell because the factory closed." → NOT GIVEN.' },
      { title: 'Spending too long on NOT GIVEN', body: '<p>NOT GIVEN answers are slow because you are looking for something that isn\'t there. If you have searched the area between the neighbouring answers carefully and found nothing on the specific claim, trust that and move on.</p>' }
    ],
    timing: '<p>Allow about <b>one minute per statement</b>, so roughly 6–7 minutes for a set of six or seven. Most statements take less than a minute; NOT GIVEN statements take longer. If a statement takes more than 90 seconds, leave it, finish the set and return. In the passage plan (17 / 20 / 23 minutes), a TFNG set should never take more than half of a passage\'s time.</p>',
    faq: [
      { q: 'Are the answers always in passage order?', a: '<p>Yes. TFNG statements follow the order of the information in the passage. This is one of the few guarantees in Reading – use it.</p>' },
      { q: 'Can I write T, F and NG instead of the full words?', a: '<p>Write the full words in capitals. It removes any risk and takes seconds. Never mix the pairs: YES and NO are wrong in a TRUE/FALSE task.</p>' },
      { q: 'Is there always at least one of each answer?', a: '<p>Usually, but not always. Decide each statement on its own evidence. If you have four FALSE answers in a row, re-check them, but don\'t change them only because the pattern looks odd.</p>' },
      { q: 'What if the passage says "most" and the statement says "many"?', a: '<p>"Most" (more than half) includes "many", so a statement with "many" is usually TRUE. The reverse (passage "many", statement "most") is usually NOT GIVEN, because "many" doesn\'t tell you whether it is more than half.</p>' },
      { q: 'Can a statement be TRUE if I have to infer it?', a: '<p>Only if the meaning follows directly from the words, as in "several generations of keepers" → their children became keepers. If you need extra facts or assumptions to get there, it is NOT GIVEN.</p>' }
    ],
    checklist: [
      'I can explain the difference between FALSE (contradiction) and NOT GIVEN (no information).',
      'I underline locators and circle qualifiers in every statement.',
      'I read the sentences around the location, not just one line.',
      'I check every part of a two-part statement.',
      'I use the "both true?" test when I am unsure between FALSE and NOT GIVEN.',
      'I never use outside knowledge or assumptions.',
      'I write TRUE / FALSE / NOT GIVEN in full, in the correct boxes.',
      'I have completed the TFNG practice sets and reviewed every mistake.'
    ],
    summary: [
      'The passage is the only world: knowledge and common sense do not count.',
      'TRUE = every part supported; FALSE = the text makes it impossible; NOT GIVEN = the text does not settle it.',
      'Most answers are decided by qualifiers (all, some, only, first, always) and by changed numbers, people or reasons.',
      'Added reasons, comparisons and "first/only" claims usually produce NOT GIVEN.',
      'Statements follow passage order: work forward and use neighbouring answers to locate hard ones.'
    ]
  },

  /* ======================================================================= */
  ynng: {
    intro: `
<p>Yes / No / Not Given looks like True / False / Not Given, and the decision process is almost the same. The difference is <b>what</b> you compare. In TFNG you check statements against the <b>facts</b> in the passage. In YNNG you check them against the <b>writer's opinions, claims and attitudes</b>.</p>
<p>This task usually appears with argumentative passages – often Passage 3 in Academic Reading – where the writer discusses a debate, reports other people's views and then gives their own position. The main difficulty is not vocabulary but <b>voice</b>: you have to keep track of who thinks what. A passage may describe three opinions and agree with only one of them. If you attribute somebody else's view to the writer, you will choose YES when the answer is NO.</p>
<p>In this chapter you will learn to identify the writer's voice, read the language of evaluation (adjectives, adverbs, modal verbs), handle concession structures such as <i>"Although X... Y"</i>, and decide when the writer has simply not given an opinion.</p>`,
    facts: [
      ['Appears in', 'Mainly Academic Passage 3; sometimes Passage 2'],
      ['Number of questions', 'Usually 4–6'],
      ['Order', 'Follows the order of the passage'],
      ['You write', 'YES, NO or NOT GIVEN'],
      ['Main skill', 'Identifying the writer\'s stance and voice'],
      ['Target time', '60–80 seconds per statement']
    ],
    anatomy: `
<div class="instructions" style="background:var(--surface-2);padding:12px 16px;border-radius:8px"><i>Do the following statements agree with the claims of the writer in Reading Passage 3?<br>In boxes 27–32 on your answer sheet, write</i><br><b>YES</b> if the statement agrees with the claims of the writer<br><b>NO</b> if the statement contradicts the claims of the writer<br><b>NOT GIVEN</b> if it is impossible to say what the writer thinks about this</div>
<ul>
<li><b>"the claims of the writer"</b> (or "the views of the writer"): only the writer's own position counts. Opinions the writer <i>reports</i> ("Critics say...", "It is often argued...") are not the writer's claims unless the writer agrees with them.</li>
<li><b>"agrees with"</b> → YES: the writer holds this view.</li>
<li><b>"contradicts"</b> → NO: the writer holds the opposite view, or rejects this view.</li>
<li><b>"impossible to say what the writer thinks"</b> → NOT GIVEN: the writer may mention the topic, even report others' views on it, but does not reveal their own opinion on this exact point.</li>
</ul>`,
    tests: `
<p>Writers reveal their opinions in recognisable ways. Train yourself to notice these signals:</p>
<div class="table-wrap"><table class="data-table plain">
<tr><th>Signal</th><th>Examples</th></tr>
<tr><td>First person</td><td>I believe, in my view, to my mind, I suspect, I find it remarkable</td></tr>
<tr><td>Evaluative adjectives</td><td>misguided, persuasive, flawed, valuable, remarkable, overrated, sensible, naive</td></tr>
<tr><td>Evaluative adverbs</td><td>clearly, unfortunately, surprisingly, rightly, wrongly, arguably, undoubtedly</td></tr>
<tr><td>Modal verbs of judgement</td><td>should, ought to, must, need to, it would be a mistake to</td></tr>
<tr><td>Concession then position</td><td>Although / While / Admittedly X..., Y – the writer's position is Y</td></tr>
<tr><td>Distancing from reported views</td><td>so-called, supposedly, it is claimed, defenders insist – often before a rejection</td></tr>
</table></div>
<p>And the voices that are <b>not</b> the writer: <i>Some argue..., Critics claim..., According to Smith..., It is widely believed...</i>. After these, look for the writer's reaction: <i>However, this ignores..., There is some truth in this, but..., This is clearly right.</i></p>`,
    method: [
      { title: 'Skim the whole passage for the writer\'s overall position (2–3 minutes)', body: '<p>Read the title, the first paragraph and the last paragraph. Ask: is the writer for, against, or balanced? What is the main argument? Knowing the overall stance helps you interpret individual sentences.</p>', example: 'Title "Rethinking the Open-Plan Office" + final paragraph "What is needed is choice" → the writer is critical of open-plan offices but not in favour of a return to closed offices.' },
      { title: 'Mark the voices as you skim', body: '<p>In the margin, write W next to sentences where the writer speaks, and O (others) next to reported views. This takes seconds and saves minutes later.</p>' },
      { title: 'Analyse the statement: is it an opinion, and how strong is it?', body: '<p>Underline the topic and circle the evaluative word: <i>should, beneficial, the best, overrated, convincing</i>. Note its strength: "is the best solution" is much stronger than "is a useful solution".</p>' },
      { title: 'Locate the topic (questions follow passage order)', body: '<p>Scan for the topic words or synonyms. Then read the whole section on that topic – the writer\'s view often comes one or two sentences after a reported view.</p>' },
      { title: 'Ask: whose opinion is this sentence?', body: '<p>Before comparing, decide whether the relevant sentence is the writer\'s voice or a reported voice. If it is reported, read on to find the writer\'s reaction.</p>', example: '"Defenders argue that the real problem is poor design. There is some truth in this. But to my mind, this argument misses the point." → reported view, partial agreement, then rejection of the main claim.' },
      { title: 'Compare stance and strength', body: '<p>Does the writer hold the same view (YES), the opposite view (NO), or no expressed view on this exact point (NOT GIVEN)? Check that the strength matches: if the writer says something is "partly useful" and the statement says it is "essential", the answer is usually NO.</p>' },
      { title: 'Apply the NOT GIVEN test', body: '<p>Ask: <b>"Can I point to words that show what the writer thinks about this exact claim?"</b> If not – even if the topic is discussed – the answer is NOT GIVEN.</p>' },
      { title: 'Write YES / NO / NOT GIVEN and move on', body: '<p>Write the answer in full. Never write TRUE or FALSE in this task.</p>' }
    ],
    sections: [
      {
        id: 'concession', title: 'Concession structures: finding the writer\'s real position',
        html: `<p>Writers often admit a point before rejecting it. The <b>main clause</b> after the concession carries their position.</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Sentence</th><th>Writer's position</th></tr>
<tr><td><i>Although</i> wind farms are expensive, they are the only realistic option.</td><td>For wind farms (cost admitted but outweighed)</td></tr>
<tr><td><i>Admittedly</i>, homework improves discipline. <i>However</i>, its academic value is negligible.</td><td>Against homework's academic value; YES to "homework helps discipline"</td></tr>
<tr><td>The policy has its merits, <i>but</i> it is ultimately unworkable.</td><td>Against the policy overall</td></tr>
<tr><td><i>While</i> critics are right that the museum is costly, it has transformed the city.</td><td>Agrees it is costly AND that it has been transformative</td></tr>
</table></div>
<div class="callout warn"><strong>Note</strong>A concession is still the writer's view. In the second example, a statement "Homework can make students more disciplined" is YES – the writer admits it – even though the writer is against homework overall.</div>`
      },
      {
        id: 'strength', title: 'Matching strength of opinion',
        html: `<div class="table-wrap"><table class="data-table">
<tr><th>Writer says</th><th>Statement</th><th>Answer</th></tr>
<tr><td>The scheme has been a modest success.</td><td>The scheme has achieved some positive results.</td><td><b>YES</b></td></tr>
<tr><td>The scheme has been a modest success.</td><td>The scheme has been a complete failure.</td><td><b>NO</b></td></tr>
<tr><td>The scheme has been a modest success.</td><td>The scheme is the most successful of its kind.</td><td><b>NO</b> – "modest" is incompatible with "most successful"</td></tr>
<tr><td>The scheme has been a modest success.</td><td>The scheme should be extended to other cities.</td><td><b>NOT GIVEN</b> – no view on extending it</td></tr>
</table></div>`
      }
    ],
    worked: [
      {
        title: 'Rethinking the Open-Plan Office',
        source: `<h3>Rethinking the Open-Plan Office</h3>
<p>Over the past thirty years, companies around the world have knocked down walls and replaced private offices with large shared spaces. The justification offered by managers was persuasive: without walls, it was said, employees would talk more, share ideas and work as a team. Open-plan offices are also cheaper, since more desks fit into the same floor area, although this was rarely mentioned in public announcements.</p>
<p>The evidence, however, tells a less flattering story. When researchers tracked employees before and after a move to open-plan space, they found that face-to-face conversation fell by about seventy per cent, while the use of email rose. People who can be seen and heard by everyone, it seems, protect their privacy by withdrawing: they wear headphones and communicate by screen. I find it remarkable that so many organisations have continued to build such offices in spite of these findings.</p>
<p>Defenders of the open plan argue that the real problem is poor design rather than the concept itself. There is some truth in this. Offices with quiet rooms and areas for phone calls are clearly better than rows of identical desks. But to my mind, this argument misses the point: if an office only works once it has been filled with small private spaces, then it is not really an open-plan office at all.</p>
<p>None of this means that companies should return to the corridors of closed doors that were common in the 1970s, which created their own problems of isolation and rigid hierarchy. What is needed is choice. Employees doing focused work should be able to find somewhere quiet, while those who need to collaborate should have spaces designed for that purpose. The most productive offices of the future will, I suspect, offer both.</p>`,
        instructions: '<i>Do the following statements agree with the claims of the writer? Write <b>YES</b>, <b>NO</b> or <b>NOT GIVEN</b>.</i>',
        questions: `<ol>
<li>The main reason companies adopted open-plan offices was to save money.</li>
<li>Managers' arguments in favour of open-plan offices were convincing.</li>
<li>Open-plan offices encourage employees to talk to each other more.</li>
<li>It is surprising that companies are still building open-plan offices.</li>
<li>Poor design is the only real problem with open-plan offices.</li>
<li>Offices that include quiet rooms are an improvement on traditional open-plan layouts.</li>
<li>Closed offices of the 1970s were more productive than modern open-plan offices.</li>
<li>Companies should offer workers a choice of working environments.</li>
</ol>`,
        walk: [
          { q: '1. The main reason companies adopted open-plan offices was to save money.', a: 'NOT GIVEN', steps: [
            '<b>Statement type:</b> a claim about the <b>main</b> reason. Circle "main".',
            '<b>Locate:</b> paragraph 1: the public justification was teamwork; "Open-plan offices are also cheaper... although this was rarely mentioned in public announcements."',
            '<b>Think:</b> the writer hints that cost was a hidden factor ("also", "rarely mentioned"), but never says it was the <i>main</i> reason.',
            '<b>Test:</b> can I point to words showing the writer thinks cost was the main reason? No.',
            '<b>Decide:</b> NOT GIVEN. Don\'t turn a hint into a claim the writer did not make.'
          ] },
          { q: '2. Managers\' arguments in favour of open-plan offices were convincing.', a: 'YES', steps: [
            '<b>Locate:</b> paragraph 1: "The justification offered by managers was persuasive".',
            '<b>Whose voice?</b> The writer\'s – it is the writer\'s own evaluation that the argument was persuasive (even though the evidence later disagrees).',
            '<b>Paraphrase:</b> <i>convincing</i> = <i>persuasive</i>; <i>arguments</i> = <i>justification</i>.',
            '<b>Decide:</b> YES. An argument can be persuasive and still wrong – the statement only claims it was convincing.'
          ] },
          { q: '3. Open-plan offices encourage employees to talk to each other more.', a: 'NO', steps: [
            '<b>Locate:</b> paragraph 1 reports this as the managers\' claim ("it was said, employees would talk more"); paragraph 2 gives the writer\'s response.',
            '<b>Whose voice?</b> The first is a reported view ("it was said"). The writer then says "The evidence, however, tells a less flattering story... face-to-face conversation fell by about seventy per cent".',
            '<b>Decide:</b> NO. The writer accepts the evidence that conversation fell, which contradicts the statement. This is the classic YNNG trap: the statement matches a reported view, not the writer\'s.'
          ] },
          { q: '4. It is surprising that companies are still building open-plan offices.', a: 'YES', steps: [
            '<b>Locate:</b> end of paragraph 2: "I find it remarkable that so many organisations have continued to build such offices in spite of these findings."',
            '<b>Signal:</b> first person + evaluative adjective (<i>remarkable</i> = <i>surprising</i>).',
            '<b>Decide:</b> YES.'
          ] },
          { q: '5. Poor design is the only real problem with open-plan offices.', a: 'NO', steps: [
            '<b>Locate:</b> paragraph 3: "Defenders... argue that the real problem is poor design rather than the concept itself."',
            '<b>Whose voice?</b> Defenders. The writer responds: "There is some truth in this... But to my mind, this argument misses the point" – the writer believes the <i>concept itself</i> is flawed.',
            '<b>Decide:</b> NO. The writer partly agrees that design matters, but rejects the idea that design is the <i>only</i> problem.'
          ] },
          { q: '6. Offices that include quiet rooms are an improvement on traditional open-plan layouts.', a: 'YES', steps: [
            '<b>Locate:</b> paragraph 3: "Offices with quiet rooms and areas for phone calls are clearly better than rows of identical desks."',
            '<b>Signal:</b> <i>clearly better</i> – the writer\'s own evaluation (part of the concession "There is some truth in this").',
            '<b>Decide:</b> YES. A concession is still the writer\'s view.'
          ] },
          { q: '7. Closed offices of the 1970s were more productive than modern open-plan offices.', a: 'NOT GIVEN', steps: [
            '<b>Locate:</b> paragraph 4: closed offices "created their own problems of isolation and rigid hierarchy".',
            '<b>Think:</b> the writer criticises 1970s offices but makes no comparison of productivity with open-plan offices.',
            '<b>Trap:</b> it is tempting to write NO because the writer criticises closed offices, or YES because the writer criticises open-plan offices. Neither is a productivity comparison.',
            '<b>Decide:</b> NOT GIVEN.'
          ] },
          { q: '8. Companies should offer workers a choice of working environments.', a: 'YES', steps: [
            '<b>Locate:</b> paragraph 4: "What is needed is choice. Employees doing focused work should be able to find somewhere quiet, while those who need to collaborate should have spaces designed for that purpose."',
            '<b>Signal:</b> <i>What is needed</i>, <i>should</i> – the writer\'s recommendation.',
            '<b>Decide:</b> YES.'
          ] }
        ],
        lesson: 'Questions 3 and 5 are the typical high-difficulty items: each statement copies a view the writer <b>reports</b> and then rejects. Always find the writer\'s reaction to a reported view before answering.'
      }
    ],
    dos: [
      'Skim the introduction and conclusion first to learn the writer\'s overall stance.',
      'Mark reported views (O) and the writer\'s voice (W) in the margin.',
      'Look for evaluative adjectives, adverbs and modal verbs – they carry opinion.',
      'After a reported view, keep reading for the writer\'s reaction.',
      'Treat concessions ("Admittedly...", "There is some truth in this") as the writer\'s genuine, if limited, view.',
      'Check the strength of the opinion as well as its direction.',
      'Write YES / NO / NOT GIVEN in full.'
    ],
    donts: [
      'Don\'t treat "Some people argue..." or "Critics claim..." as the writer\'s opinion.',
      'Don\'t answer from the writer\'s general attitude alone – check the exact point.',
      'Don\'t write NO just because the writer is generally negative about the topic.',
      'Don\'t confuse facts the writer reports with opinions the writer holds.',
      'Don\'t write TRUE / FALSE in a YES / NO task.',
      'Don\'t read only one sentence – opinions are often developed across two or three.'
    ],
    careful: [
      { title: 'Reported views disguised as the writer\'s', body: '<p>"It is often said that...", "Supporters insist...", "According to many economists..." introduce views that are not the writer\'s. Statements that copy them are often NO.</p>', example: '"Many believe tourism destroys local culture. This view, though popular, is too simple." → Statement "Tourism destroys local culture" = NO.' },
      { title: 'Opinion vs topic', body: '<p>The writer may discuss a topic in detail and give no opinion on the specific point in the statement. That is NOT GIVEN.</p>', example: 'The writer describes how a law was introduced. Statement: "The law should be repealed." → NOT GIVEN unless the writer recommends this.' },
      { title: 'Strength mismatches', body: '<p>"may help in some cases" vs "is the solution"; "has some drawbacks" vs "is a disaster". A big difference in strength usually means NO.</p>' },
      { title: 'Irony and distancing words', body: '<p>Words like <i>so-called</i>, <i>supposedly</i> and <i>allegedly</i> show the writer doubts the claim that follows.</p>', example: '"The so-called benefits of the scheme have yet to appear." → the writer does not believe the scheme is beneficial.' },
      { title: 'Predictions and recommendations', body: '<p>Statements with <i>should</i> or <i>will</i> need the writer to recommend or predict that exact thing. A writer who describes a problem has not necessarily recommended a particular solution.</p>' }
    ],
    timing: '<p>YNNG passages are usually the longest and most abstract, so invest 2–3 minutes in skimming the writer\'s overall position first. After that, allow about 60–80 seconds per statement. In Passage 3 (about 23 minutes), a set of six YNNG statements should take 8–9 minutes including the skim.</p>',
    faq: [
      { q: 'What is the difference between NO and NOT GIVEN in YNNG?', a: '<p>NO means you can show the writer holds the <b>opposite</b> view. NOT GIVEN means you cannot tell what the writer thinks about that exact point. Use the same test as TFNG: could the writer hold this view without contradicting anything they wrote? If yes, and they don\'t confirm it, it is NOT GIVEN.</p>' },
      { q: 'Can a YES answer be based on a fact rather than an opinion?', a: '<p>Yes. "Claims of the writer" include factual claims the writer makes. If the writer states something as true, a statement that agrees with it is YES.</p>' },
      { q: 'The writer seems to change their mind. Which view counts?', a: '<p>Writers rarely change their minds; they make concessions. Identify the main clause after <i>although / but / however</i> – that is the stronger position. Both parts are the writer\'s views, but they apply to different points.</p>' }
    ],
    checklist: [
      'I skim for the writer\'s overall stance before answering.',
      'I can identify reported views and the writer\'s reaction to them.',
      'I recognise opinion signals: evaluative words, modals, first person.',
      'I understand that concessions are also the writer\'s views.',
      'I compare the strength of opinion, not just its direction.',
      'I use NOT GIVEN when the writer gives no view on the exact point.'
    ],
    summary: [
      'YNNG checks the writer\'s claims; TFNG checks facts.',
      'The biggest trap is a reported view that the writer rejects.',
      'Opinion lives in adjectives, adverbs, modals and concession structures.',
      'NOT GIVEN = the writer\'s view on this exact point cannot be identified.',
      'Skim the introduction and conclusion first: the overall stance guides every answer.'
    ]
  },

  /* ======================================================================= */
  mcq: {
    intro: `
<p>Multiple-choice questions are familiar from school, but IELTS multiple choice is designed differently. In a well-made IELTS item, <b>every wrong option is attractive for a specific reason</b>. One option repeats words from the passage, another is true but answers a different question, another is half right. The examiners call these options <b>distractors</b>, and your job is not just to find the right answer but to see exactly why each distractor fails.</p>
<p>There are two formats. The first is a question or unfinished sentence with four options (A–D), one of them correct. The second asks you to <b>choose TWO (or THREE) letters</b> from a longer list (A–E or A–G). Questions may test a <b>detail</b> in one sentence, the <b>main idea</b> of a paragraph, the <b>writer's purpose</b> or attitude, or – usually as the last question – the <b>best title or aim of the whole passage</b>.</p>
<p>The method in this chapter avoids the most common mistake: reading the options first and then hunting for the words in the passage. Instead, you will locate and understand the relevant part of the passage first, form your own answer, and only then use the options.</p>`,
    facts: [
      ['Appears in', 'Academic and General Training, all passages'],
      ['Number of questions', '2–6 per set'],
      ['Order', 'Detail questions follow passage order; a "whole passage" question comes last'],
      ['You write', 'A letter (A–D), or two/three letters'],
      ['Main skill', 'Detailed reading and eliminating distractors'],
      ['Target time', '1½–2 minutes per question']
    ],
    anatomy: `
<div class="instructions" style="background:var(--surface-2);padding:12px 16px;border-radius:8px"><i>Choose the correct letter, <b>A, B, C or D</b>. Write the correct letter in boxes 14–17 on your answer sheet.</i></div>
<div class="instructions" style="background:var(--surface-2);padding:12px 16px;border-radius:8px;margin-top:8px"><i>Choose <b>TWO</b> letters, <b>A–E</b>. Write the correct letters in boxes 18 and 19 on your answer sheet.</i></div>
<ul>
<li><b>One correct letter</b>: exactly one option is fully supported by the text. Two options are never both acceptable.</li>
<li><b>Choose TWO letters, A–E</b>: two separate marks (one per box). The two letters can be written in either order. Each correct letter scores one mark, so if you are sure of one, write it and make your best choice for the other.</li>
<li><b>Stem types</b>: a question ("What does the writer say about...?") or an unfinished sentence ("The researchers were surprised because..."). For unfinished sentences, the option must also complete the sentence logically.</li>
</ul>`,
    tests: `
<p>Know which kind of question you are answering, because each needs a slightly different reading:</p>
<div class="table-wrap"><table class="data-table plain">
<tr><th>Type</th><th>Typical stem</th><th>Where the answer is</th></tr>
<tr><td>Detail</td><td>According to the passage, the first lamps...</td><td>One or two sentences</td></tr>
<tr><td>Main idea</td><td>What is the main point of the third paragraph?</td><td>The whole paragraph, especially its topic sentence</td></tr>
<tr><td>Purpose / function</td><td>The writer mentions the Roman roads in order to...</td><td>The reason a detail is included: to illustrate, contrast, challenge, support</td></tr>
<tr><td>Attitude</td><td>What is the writer's opinion of the new policy?</td><td>Evaluative language (see the YNNG chapter)</td></tr>
<tr><td>Reference</td><td>What does "this problem" in line 12 refer to?</td><td>The sentence(s) just before</td></tr>
<tr><td>Global</td><td>Which is the best title for the passage?</td><td>The whole passage – answer it last</td></tr>
</table></div>`,
    method: [
      { title: 'Read the stem only, and underline its keywords', body: '<p>Cover the options. Underline the locators in the stem and identify the type of question (detail, purpose, attitude...).</p>', example: '"According to the writer, the octopus <u>challenges the idea</u> that <u>intelligence</u>..." → a detail about which idea is challenged.' },
      { title: 'Locate the relevant part of the passage', body: '<p>Questions normally follow the order of the passage. Scan for the stem\'s locators or their synonyms. The answer to question 2 is usually after the answer to question 1.</p>' },
      { title: 'Read that part carefully and answer in your own words', body: '<p>Read the target sentences and the ones around them. Before looking at the options, try to answer the question yourself in a few words. This protects you from being led by attractive distractors.</p>' },
      { title: 'Now read the options and match your answer', body: '<p>Look for the option that expresses <b>your</b> answer, in paraphrased form. The correct option almost never uses the passage\'s exact words.</p>' },
      { title: 'Eliminate the others – with a reason for each', body: '<p>For every option you reject, name the reason: <b>not mentioned</b>, <b>contradicted</b>, <b>only partly true</b>, <b>true but doesn\'t answer the question</b>, or <b>too extreme</b>. If you cannot name a reason, look again.</p>' },
      { title: 'For "choose TWO", test each option like a TRUE/FALSE statement', body: '<p>Go through A–E one by one and mark each one as supported (✓), contradicted (✗) or not mentioned (?). The two ✓ options are your answers. The options are usually <b>not</b> in passage order, and they may come from different paragraphs.</p>' },
      { title: 'Leave global questions until the end', body: '<p>"What is the writer\'s main purpose?" or "Which is the best title?" needs a view of the whole passage. Answer it after the other questions, when you know the text well. Choose the option that covers the whole passage, not one paragraph.</p>' },
      { title: 'Decide, write the letter and move on', body: '<p>If two options remain after 2 minutes, choose the one with more direct support in the text and move on. Never leave a blank.</p>' }
    ],
    sections: [
      {
        id: 'distractors', title: 'The six distractor types',
        html: `<p>Passage: "<i>Early studies suggested that bees navigated mainly by the sun. Later research, however, revealed that on cloudy days they relied on polarised light, which is invisible to the human eye.</i>"<br>Question: <i>According to the passage, on cloudy days bees...</i></p>
<div class="table-wrap"><table class="data-table">
<tr><th>Distractor type</th><th>Example option</th><th>Why it is wrong</th></tr>
<tr><td><b>Word match</b></td><td>use the position of the sun</td><td>Repeats "sun" from the text, but that was for normal days and early studies</td></tr>
<tr><td><b>Not mentioned</b></td><td>follow other bees</td><td>Plausible, but the text never says it</td></tr>
<tr><td><b>Opposite</b></td><td>use light that humans can easily see</td><td>The text says "invisible to the human eye"</td></tr>
<tr><td><b>True but irrelevant</b></td><td>were first studied in early research</td><td>True, but doesn't answer "what do they do on cloudy days?"</td></tr>
<tr><td><b>Too extreme</b></td><td>can only navigate on cloudy days</td><td>"only" is never supported</td></tr>
<tr><td><b>Partly right</b></td><td>use polarised light and stop flying at noon</td><td>First half correct, second half not mentioned</td></tr>
<tr><td style="color:var(--ok)"><b>Correct</b></td><td>rely on a kind of light humans cannot see</td><td>Full paraphrase of "polarised light, invisible to the human eye"</td></tr>
</table></div>`
      },
      {
        id: 'purpose', title: 'Purpose questions: "The writer mentions X in order to..."',
        html: `<p>These questions ask <b>why</b> a detail is included, not what it says. Common functions and their option verbs:</p>
<div class="table-wrap"><table class="data-table plain">
<tr><th>Function</th><th>Typical option wording</th><th>Clue in the passage</th></tr>
<tr><td>Give an example</td><td>to illustrate, to give an example of</td><td>For instance, such as, a case in point</td></tr>
<tr><td>Support a claim</td><td>to support the view that, to provide evidence</td><td>Studies show, this is confirmed by</td></tr>
<tr><td>Challenge a claim</td><td>to question, to cast doubt on, to challenge</td><td>However, yet, this ignores</td></tr>
<tr><td>Contrast</td><td>to contrast X with Y, to highlight a difference</td><td>whereas, unlike, by contrast</td></tr>
<tr><td>Explain</td><td>to explain why / how</td><td>because, this is due to</td></tr>
</table></div>
<p>Method: find the detail, then read the sentence <b>before</b> it – it usually states the claim that the detail illustrates, supports or challenges.</p>`
      }
    ],
    worked: [
      {
        title: 'The Octopus Mind',
        source: `<h3>The Octopus Mind</h3>
<p><span class="para-label">A</span>For a long time, intelligence was thought to require a long life and a social group. Animals that live for many years have time to learn, and animals that live in groups need to keep track of complex relationships – or so the argument went. The octopus is a problem for this theory. Most species live for only one or two years, and they spend almost all of that time alone. Yet in laboratory tests, octopuses have learned to open screw-top jars, find their way through mazes and distinguish between shapes.</p>
<p><span class="para-label">B</span>Their nervous system is also unusual. An octopus has around 500 million neurons, a figure comparable to that of a dog, but roughly two-thirds of them are located not in the brain but in the arms. Experiments suggest that an arm can respond to touch and even grasp food without any instruction from the brain. Some writers have described the octopus as having nine brains, but most biologists regard this as an exaggeration; the central brain still coordinates the animal's overall behaviour.</p>
<p><span class="para-label">C</span>Stories of octopuses escaping from aquariums are often repeated, and some are probably invented. Better documented are reports from laboratories where octopuses appear to recognise individual people. In one study, the animals behaved differently towards a keeper who had regularly touched them with a bristly stick than towards a keeper who fed them, even when both wore identical uniforms.</p>
<p><span class="para-label">D</span>What explains such abilities in an animal with so short a life? One suggestion is that the octopus's ancestors lost their protective shell. Without armour, they had to rely on flexibility, camouflage and problem-solving to find food and avoid predators – and intelligence, rather than social life, became the key to survival.</p>`,
        instructions: '<i>Questions 1–4: Choose the correct letter, <b>A, B, C or D</b>. Question 5: Choose <b>TWO</b> letters, <b>A–E</b>.</i>',
        questions: `<ol>
<li>According to the writer, the octopus challenges the idea that intelligence<br>A develops only in animals with large brains.<br>B depends on a long lifespan and social living.<br>C is linked to the number of neurons.<br>D can be measured in laboratory tests.</li>
<li>What is unusual about the octopus's neurons?<br>A There are more of them than in any other animal.<br>B Most of them are found outside the brain.<br>C They are concentrated in the central brain.<br>D They are identical to those of dogs.</li>
<li>What does the writer say about the claim that octopuses have "nine brains"?<br>A It is supported by most biologists.<br>B It has been proved by experiments.<br>C It overstates the independence of the arms.<br>D It explains how octopuses learn.</li>
<li>The study involving two keepers showed that octopuses<br>A preferred people who fed them.<br>B could tell individual humans apart.<br>C were frightened by uniforms.<br>D escaped more often from one keeper.</li>
<li>Which TWO factors does the writer link to the development of octopus intelligence?<br>A the loss of a shell<br>B a long life<br>C the need to avoid predators<br>D living in groups<br>E a large brain</li>
</ol>`,
        walk: [
          { q: '1. The octopus challenges the idea that intelligence...', a: 'B', steps: [
            '<b>Stem first:</b> "challenges the idea that intelligence..." → find the idea that is challenged.',
            '<b>Locate:</b> paragraph A: "intelligence was thought to require a long life and a social group... The octopus is a problem for this theory."',
            '<b>Own answer:</b> the idea that intelligence needs a long life and a social group.',
            '<b>Match:</b> B "depends on a long lifespan and social living" – a direct paraphrase.',
            '<b>Eliminate:</b> A – brain size is not the theory (not mentioned here). C – neurons appear in paragraph B, a word-match from a different part. D – laboratory tests are mentioned, but as evidence, not as the idea challenged (true but irrelevant).'
          ] },
          { q: '2. What is unusual about the octopus\'s neurons?', a: 'B', steps: [
            '<b>Locate:</b> paragraph B: "roughly two-thirds of them are located not in the brain but in the arms".',
            '<b>Own answer:</b> most are in the arms, not the brain.',
            '<b>Match:</b> B "Most of them are found outside the brain" (two-thirds = most; arms = outside the brain).',
            '<b>Eliminate:</b> A – "comparable to that of a dog" ≠ more than any animal (too extreme). C – the opposite. D – the <i>number</i> is comparable to a dog\'s; nothing says the neurons are identical (changes the meaning of a matched word).'
          ] },
          { q: '3. What does the writer say about the "nine brains" claim?', a: 'C', steps: [
            '<b>Locate:</b> paragraph B: "Some writers have described the octopus as having nine brains, but most biologists regard this as an exaggeration; the central brain still coordinates the animal\'s overall behaviour."',
            '<b>Own answer:</b> it exaggerates – the arms are not fully independent brains.',
            '<b>Match:</b> C "overstates the independence of the arms" (overstates = exaggeration).',
            '<b>Eliminate:</b> A – opposite (most biologists reject it). B – experiments show arms can act alone, but they don\'t prove "nine brains". D – not stated.'
          ] },
          { q: '4. The study involving two keepers showed that octopuses...', a: 'B', steps: [
            '<b>Locate:</b> paragraph C: "octopuses appear to recognise individual people... behaved differently towards a keeper who had... touched them with a bristly stick than towards a keeper who fed them, even when both wore identical uniforms."',
            '<b>Own answer:</b> they could tell the two keepers apart.',
            '<b>Match:</b> B "could tell individual humans apart" = recognise individual people.',
            '<b>Eliminate:</b> A – they behaved <i>differently</i>; a preference is a reasonable guess but is not stated (not mentioned). C – uniforms were identical, so they weren\'t the cause; frightened is not mentioned. D – escape stories are a separate point in the same paragraph (word-match from nearby).'
          ] },
          { q: '5. Which TWO factors are linked to the development of octopus intelligence?', a: 'A, C', steps: [
            '<b>Method:</b> treat each option as a TRUE/FALSE statement. Look at paragraph D, which answers "What explains such abilities?"',
            '<b>A the loss of a shell</b> ✓ – "the octopus\'s ancestors lost their protective shell".',
            '<b>B a long life</b> ✗ – the passage stresses their <i>short</i> life.',
            '<b>C the need to avoid predators</b> ✓ – "to find food and avoid predators".',
            '<b>D living in groups</b> ✗ – "intelligence, rather than social life"; they live alone.',
            '<b>E a large brain</b> ? – not given as a cause.',
            '<b>Answer:</b> A and C, in either order.'
          ] }
        ],
        lesson: 'In every question, the correct option was a <b>paraphrase</b>, while at least one distractor reused words from the passage (neurons, dog, experiments, uniforms, escaping). Matching words is the fastest way to choose a wrong answer.'
      }
    ],
    dos: [
      'Read the stem first and locate the answer before reading the options.',
      'Form your own answer, then look for the option that paraphrases it.',
      'Give a reason for rejecting every wrong option.',
      'Check unfinished-sentence stems: the option must complete the sentence logically.',
      'For "choose TWO", test every option separately (✓ ✗ ?).',
      'Answer whole-passage questions last.',
      'Write two separate letters in two boxes for "choose TWO" questions.'
    ],
    donts: [
      'Don\'t choose an option because it contains words from the passage.',
      'Don\'t choose an option that is true in the passage but doesn\'t answer the question.',
      'Don\'t accept an option that is only half supported.',
      'Don\'t be attracted by extreme words (only, always, completely) unless the text uses them.',
      'Don\'t spend more than about 2 minutes on one question; decide and move on.',
      'Don\'t leave any answer blank – there is no penalty for a wrong answer.'
    ],
    careful: [
      { title: 'Options from a different part of the passage', body: '<p>Distractors are often true statements from a nearby paragraph. They feel correct because you remember reading them.</p>', example: 'Q4 above: "escaped more often" uses the escape stories from the same paragraph but a different point.' },
      { title: 'Similar options that differ by one word', body: '<p>When two options look almost the same, the difference is the answer. Underline the one word that differs and check it in the text.</p>', example: '"The research was <u>funded</u> by the government" vs "The research was <u>conducted</u> by the government".' },
      { title: 'Global questions answered from one paragraph', body: '<p>For "the writer\'s main purpose" or "the best title", wrong options often describe one paragraph accurately. The correct option covers the passage as a whole.</p>' },
      { title: 'The order of "choose TWO" options', body: '<p>In "choose TWO / THREE" questions, the options are rarely in passage order and may come from anywhere in a section. Don\'t stop after the first one you find.</p>' }
    ],
    timing: '<p>Allow <b>1½–2 minutes</b> per question: about 30 seconds to locate, 30–45 seconds to read carefully, and 30 seconds to eliminate. Purpose and global questions take longer; detail questions are faster. If you are unsure between two options, choose, mark the question and return if you have time.</p>',
    faq: [
      { q: 'Is it ever better to read the options first?', a: '<p>Read the stem first, always. With very short options (single words or names), a quick look at them before reading the passage can help you know what to look for. With long options, reading them first fills your head with distractors.</p>' },
      { q: 'In "choose TWO", does the order of letters matter?', a: '<p>No. B and D, or D and B, are both correct. Each correct letter earns one mark.</p>' },
      { q: 'How do I answer a "best title" question?', a: '<p>Check each option against the whole passage. A good title covers every paragraph; wrong titles are too narrow (one paragraph), too broad (a bigger topic) or inaccurate.</p>' }
    ],
    checklist: [
      'I read the stem first and locate before looking at options.',
      'I can name the six distractor types.',
      'I eliminate each wrong option with a specific reason.',
      'I treat "choose TWO" options as separate TRUE/FALSE checks.',
      'I answer global questions last.',
      'I never leave a multiple-choice answer blank.'
    ],
    summary: [
      'Locate and understand the text first; use the options second.',
      'The right answer paraphrases; distractors often copy words.',
      'Every wrong option fails for a reason: not mentioned, opposite, partly true, irrelevant or too extreme.',
      '"Choose TWO" = two separate true/false checks, letters in any order.',
      'Global questions need the whole passage and should be answered last.'
    ]
  }
};

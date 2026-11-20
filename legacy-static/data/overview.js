window.IELTS = window.IELTS || {};
IELTS.overview = {
  sections: [
    { skill: 'listening', name: 'Listening', time: '30 minutes (+10 min transfer on paper / 2 min check on computer)', questions: '40 questions, 4 parts', desc: 'Four recordings, each heard ONCE. Part 1: everyday conversation (2 speakers). Part 2: everyday monologue (e.g. a tour guide). Part 3: academic discussion (2–4 speakers). Part 4: academic lecture (monologue). Questions get harder from Part 1 to Part 4.' },
    { skill: 'reading', name: 'Reading', time: '60 minutes (no extra transfer time)', questions: '40 questions, 3 passages', desc: 'Academic: three long passages (total about 2,150–2,750 words) from books, journals and magazines. General Training: Section 1 (short everyday texts), Section 2 (workplace texts), Section 3 (one long general-interest text).' },
    { skill: 'writing', name: 'Writing', time: '60 minutes', questions: '2 tasks', desc: 'Task 1 (≈20 min, min 150 words): Academic – describe a chart, graph, table, process or map; General Training – write a letter. Task 2 (≈40 min, min 250 words): an essay responding to an opinion, argument or problem. Task 2 is worth twice as much as Task 1.' },
    { skill: 'speaking', name: 'Speaking', time: '11–14 minutes', questions: '3 parts', desc: 'Face-to-face interview with an examiner (in person or by video call). Part 1: introduction & familiar topics (4–5 min). Part 2: long turn – 1 min preparation, speak 1–2 min on a cue card. Part 3: two-way discussion of abstract ideas (4–5 min).' }
  ],
  html: `
<h2>Academic vs General Training</h2>
<div class="table-wrap"><table class="data-table">
<tr><th></th><th>Academic</th><th>General Training</th></tr>
<tr><td>Who it is for</td><td>University study (undergraduate/postgraduate), professional registration (doctors, nurses, etc.)</td><td>Migration (UK, Canada, Australia, NZ), work experience, secondary education</td></tr>
<tr><td>Listening</td><td colspan="2">Identical for both</td></tr>
<tr><td>Reading</td><td>3 long academic passages</td><td>Everyday & workplace texts, then one longer passage</td></tr>
<tr><td>Writing Task 1</td><td>Describe visual information (graph/chart/table/process/map)</td><td>Write a letter (formal, semi-formal or informal)</td></tr>
<tr><td>Writing Task 2</td><td>Essay (slightly more academic topics)</td><td>Essay (more general topics)</td></tr>
<tr><td>Speaking</td><td colspan="2">Identical for both</td></tr>
</table></div>

<h2>How the test is scored</h2>
<p>Each skill receives a band from 0 to 9 (in half bands). The <b>overall band</b> is the average of the four, rounded to the nearest half band (an average ending in .25 rounds up to .5; one ending in .75 rounds up to the next whole band).</p>
<div class="callout"><strong>Example</strong>Listening 7.0 + Reading 6.5 + Writing 6.0 + Speaking 7.0 = 26.5 ÷ 4 = 6.625 → <b>Overall 6.5</b>. &nbsp; If the average were 6.75 → Overall 7.0.</div>
<h3>Listening & Reading: raw score to band</h3>
<p>Each correct answer = 1 mark (out of 40). Approximate conversions (they vary slightly per test):</p>
<div class="table-wrap"><table class="data-table plain">
<tr><th>Band</th><th>Listening</th><th>Academic Reading</th><th>General Training Reading</th></tr>
<tr><td><b>9</b></td><td>39–40</td><td>39–40</td><td>40</td></tr>
<tr><td><b>8.5</b></td><td>37–38</td><td>37–38</td><td>39</td></tr>
<tr><td><b>8</b></td><td>35–36</td><td>35–36</td><td>37–38</td></tr>
<tr><td><b>7.5</b></td><td>32–34</td><td>33–34</td><td>36</td></tr>
<tr><td><b>7</b></td><td>30–31</td><td>30–32</td><td>34–35</td></tr>
<tr><td><b>6.5</b></td><td>26–29</td><td>27–29</td><td>32–33</td></tr>
<tr><td><b>6</b></td><td>23–25</td><td>23–26</td><td>30–31</td></tr>
<tr><td><b>5.5</b></td><td>18–22</td><td>19–22</td><td>27–29</td></tr>
<tr><td><b>5</b></td><td>16–17</td><td>15–18</td><td>23–26</td></tr>
<tr><td><b>4.5</b></td><td>13–15</td><td>13–14</td><td>19–22</td></tr>
<tr><td><b>4</b></td><td>10–12</td><td>10–12</td><td>15–18</td></tr>
</table></div>
<h3>Writing & Speaking: four criteria (each 25%)</h3>
<div class="grid-2">
<div class="card"><h4>Writing</h4><ul>
<li><b>Task Achievement / Task Response</b> – answer every part of the question; clear position (T2); accurate overview & key features (T1).</li>
<li><b>Coherence & Cohesion</b> – logical paragraphs, clear progression, linking words used naturally, referencing (this, which, such).</li>
<li><b>Lexical Resource</b> – range and precision of vocabulary, collocations, correct spelling & word formation.</li>
<li><b>Grammatical Range & Accuracy</b> – variety of simple and complex structures, error-free sentences, punctuation.</li></ul></div>
<div class="card"><h4>Speaking</h4><ul>
<li><b>Fluency & Coherence</b> – speak at length without unnatural pauses; logical, connected ideas.</li>
<li><b>Lexical Resource</b> – topic vocabulary, idiomatic language, paraphrasing when you don't know a word.</li>
<li><b>Grammatical Range & Accuracy</b> – mix of structures (conditionals, relative clauses, tenses) with few errors.</li>
<li><b>Pronunciation</b> – clear individual sounds, word & sentence stress, intonation, chunking.</li></ul></div>
</div>

<h2>What each band means (summary)</h2>
<div class="table-wrap"><table class="data-table">
<tr><th>Band</th><th>Skill level</th><th>Description</th></tr>
<tr><td>9</td><td>Expert</td><td>Full operational command: appropriate, accurate, fluent, with complete understanding.</td></tr>
<tr><td>8</td><td>Very good</td><td>Fully operational with only occasional unsystematic inaccuracies; handles complex argument well.</td></tr>
<tr><td>7</td><td>Good</td><td>Operational command with occasional inaccuracies and misunderstandings; handles complex language generally well.</td></tr>
<tr><td>6</td><td>Competent</td><td>Effective command despite some inaccuracies; uses fairly complex language in familiar situations.</td></tr>
<tr><td>5</td><td>Modest</td><td>Partial command; copes with overall meaning but makes many mistakes.</td></tr>
<tr><td>4</td><td>Limited</td><td>Basic competence limited to familiar situations; frequent problems in understanding and expression.</td></tr>
</table></div>

<h2>Paper vs computer-delivered</h2>
<ul>
<li><b>Computer-delivered:</b> same content and difficulty. Listening gives only <b>2 minutes</b> at the end to check (answers typed directly). You can highlight text, take notes, and see a word counter in Writing. Results in 1–2 days.</li>
<li><b>Paper-based:</b> Listening gives <b>10 minutes</b> to transfer answers to the answer sheet. Write answers in CAPITALS to avoid handwriting problems. Results in about 13 days.</li>
<li><b>One Skill Retake:</b> in many test centres you can retake one skill (within 60 days of your original computer-delivered test) without repeating the whole test.</li>
</ul>

<h2>Spelling & answer rules (Listening/Reading)</h2>
<ul class="checklist">
<li>Spelling must be correct. Both British and American spelling are accepted (colour/color).</li>
<li>Respect the word limit: "NO MORE THAN TWO WORDS AND/OR A NUMBER" → <i>"a 3-day course"</i> is fine, <i>"a very long course"</i> is not.</li>
<li>Hyphenated words count as one word (e.g. <i>well-known</i>). Numbers can be written as digits (<i>15</i>) or words.</li>
<li>Grammar must fit the sentence: singular/plural matters (<i>bicycle</i> vs <i>bicycles</i>).</li>
<li>For T/F/NG write TRUE/FALSE/NOT GIVEN (or T/F/NG) – not Yes/No.</li>
<li>Never leave a blank – there is no penalty for wrong answers.</li>
</ul>

<h2>Exam-day tips</h2>
<div class="grid-2">
<div class="card"><h4>Before</h4><ul><li>Bring the same ID you used to register.</li><li>Arrive 30+ minutes early; personal items go in a locker.</li><li>Only a pencil, eraser and clear water bottle on the desk (paper test).</li><li>Sleep well – fatigue costs more marks than one more night of revision.</li></ul></div>
<div class="card"><h4>During</h4><ul><li><b>Listening:</b> read ahead, predict answer types, never get stuck on one question.</li><li><b>Reading:</b> ~20 minutes per passage; transfer answers as you go.</li><li><b>Writing:</b> do Task 2 first if you tend to run out of time (it carries double weight).</li><li><b>Speaking:</b> extend every answer, ask for repetition if needed – it is not penalised.</li></ul></div>
</div>
`
};

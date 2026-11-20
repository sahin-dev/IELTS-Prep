import type { Chapter } from '@/lib/types';
import { writing } from '../writing-task1';

/* Writing Task 1 (Academic): the general method + one chapter per visual type */
const chart = (id: string) => writing.task1.find(t => t.id === id)!.sample.chart;
const prompt = (id: string) => `<div class="prompt-box"><div class="ptitle">Writing Task 1 · about 20 minutes · at least 150 words</div><p>${writing.task1.find(t => t.id === id)!.sample.prompt}</p></div>`;

export const task1Method: Chapter = {
  intro: `
<p>In Academic Writing Task 1 you describe a visual – a line graph, bar chart, pie chart, table, a combination of these, a process diagram or a map – in <b>at least 150 words</b> in about <b>20 minutes</b>. The instruction is always the same: <i>"Summarise the information by selecting and reporting the main features, and make comparisons where relevant."</i></p>
<p>Every word of that instruction matters. <b>Summarise</b> means you do not describe everything. <b>Selecting</b> means you choose what is important. <b>Main features</b> means the big trends, the highest and lowest values, the biggest changes. <b>Make comparisons</b> means you show how the data relate to each other rather than describing each item in isolation. Task 1 is a <b>report</b>: it contains no opinions, no explanations of why things happened, and no information that is not in the visual.</p>
<p>Task 1 counts for <b>one third</b> of your Writing score. It is marked on four criteria: <b>Task Achievement</b> (did you report the key features with an overview and accurate data?), <b>Coherence and Cohesion</b> (logical organisation and linking), <b>Lexical Resource</b> (range and accuracy of vocabulary) and <b>Grammatical Range and Accuracy</b>. This chapter gives you the universal method that works for every visual type; the following chapters apply it to each type in detail.</p>`,
  facts: [
    ['Time', 'About 20 minutes'],
    ['Length', '150 words minimum; aim for 170–190'],
    ['Weight', 'One third of the Writing band'],
    ['Structure', 'Introduction · Overview · Body 1 · Body 2'],
    ['Tone', 'Formal, objective, no opinions'],
    ['Most important paragraph', 'The overview']
  ],
  anatomy: `
<div class="prompt-box"><div class="ptitle">Writing Task 1</div><p><i>You should spend about 20 minutes on this task.</i><br>The graph below shows <u>the number of international tourists</u> visiting <u>three countries</u> <u>between 1995 and 2020</u>.<br><i>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</i><br><i>Write at least 150 words.</i></p></div>
<ul>
<li><b>What</b> is measured (number of tourists) and in which <b>unit</b> (check the axis: millions? %?).</li>
<li><b>Who/where</b> (three countries) – the categories you will compare.</li>
<li><b>When</b> (1995–2020) – this decides your <b>tenses</b>: past for past data, present for no time, future forms for projections.</li>
</ul>`,
  tests: `
<div class="table-wrap"><table class="data-table">
<tr><th>Criterion</th><th>Band 5</th><th>Band 7</th></tr>
<tr><td>Task Achievement</td><td>Recounts detail mechanically; no clear overview; data may be inaccurate</td><td>Clear overview of main trends/differences; key features clearly presented and highlighted</td></tr>
<tr><td>Coherence & Cohesion</td><td>Some organisation, but linking is repetitive or faulty</td><td>Logically organised; clear progression; range of linkers used appropriately</td></tr>
<tr><td>Lexical Resource</td><td>Limited range; repetitive; noticeable errors</td><td>Sufficient range for flexibility; some less common items; occasional errors</td></tr>
<tr><td>Grammar</td><td>Limited range; frequent errors</td><td>Variety of complex structures; frequent error-free sentences</td></tr>
</table></div>
<p>See the full <a href="/writing/band-descriptors">band descriptors</a>.</p>`,
  method: [
    { title: 'Analyse the task (1 minute)', body: '<p>Identify the visual type, what is measured, the units, the categories and the time frame. Decide your tenses.</p>', example: 'Line graph · tourists · millions · 3 countries · 1995–2020 → past simple; past perfect for "by 2020 it had become..."' },
    { title: 'Find the main features (2 minutes)', body: '<p>Ask: What is the overall trend of each item? Which is highest and lowest (at the start, at the end, overall)? What is the biggest change? Are there any crossings, peaks or exceptions? Write 2–3 notes.</p>' },
    { title: 'Group the data for two body paragraphs (1 minute)', body: '<p>Never describe items one by one in the order of the chart. Group them: items that rose vs items that fell; the largest categories vs the smaller ones; the first period vs the second; one map area vs another.</p>' },
    { title: 'Write the introduction: one sentence that paraphrases the task', body: '<p>Change the words and structure of the prompt: <i>shows → illustrates</i>; <i>the number of → how many</i>; <i>between 1995 and 2020 → over a 25-year period</i>. Don\'t add an overview here.</p>', example: '"The line graph illustrates how many international tourists, in millions, visited three countries at five-year intervals between 1995 and 2020."' },
    { title: 'Write the overview: two sentences, no specific numbers', body: '<p>Start with <i>Overall,</i> and state the 2–3 main features you noted in step 2. This paragraph is the most important for Task Achievement: without a clear overview, Band 6 is very difficult to achieve.</p>' },
    { title: 'Write body paragraph 1 with selected data', body: '<p>Describe your first group, with key numbers (start, end, peak, biggest change) and units. Compare as you go: <i>whereas, compared with, twice as many</i>.</p>' },
    { title: 'Write body paragraph 2', body: '<p>Describe the second group, again with comparisons, linking to the first paragraph: <i>By contrast, Similarly, In comparison</i>.</p>' },
    { title: 'Check (2 minutes)', body: '<p>Units with numbers; tenses; subject–verb agreement; articles; prepositions (<i>rose <b>by</b> 5% <b>to</b> 30%</i>); spelling; no opinions; at least 150 words.</p>' }
  ],
  sections: [
    {
      id: 'overview', title: 'How to write a strong overview',
      html: `<p>An overview describes the <b>big picture</b> – what someone would remember after looking at the visual for ten seconds. It has no specific figures.</p>
<div class="band-compare">
<div><h4 style="color:var(--bad)">No overview (Band 5)</h4><p><i>"In 1995, Country A had 10 million tourists and Country B had 25 million."</i></p><p class="small">Detail, not an overview.</p></div>
<div><h4 style="color:var(--warn)">Weak overview (Band 6)</h4><p><i>"Overall, the numbers changed a lot over the period."</i></p><p class="small">Vague: which changes? which item?</p></div>
<div><h4 style="color:var(--ok)">Strong overview (Band 7+)</h4><p><i>"Overall, visitor numbers to Countries A and C rose considerably, whereas Country B saw a gradual decline. By 2020, A had become the most popular destination, while B, initially the leader, had fallen to last place."</i></p></div>
</div>
<p><b>Overview checklist by visual type:</b></p>
<ul>
<li><b>Line/bar over time:</b> overall direction of each item + highest/lowest + any big crossing.</li>
<li><b>Bar/pie/table without time:</b> the largest and smallest categories + the main difference between groups.</li>
<li><b>Process:</b> number of stages, start and end, linear or cyclical, natural or man-made.</li>
<li><b>Map:</b> the 2–3 most significant changes (e.g. more residential, less natural land).</li>
</ul>`
    },
    {
      id: 'data', title: 'Reporting data accurately',
      html: `<div class="table-wrap"><table class="data-table plain">
<tr><th>Need</th><th>Language</th></tr>
<tr><td>Amount of change vs final value</td><td>rose <b>by</b> 10% (the change) <b>to</b> 45% (the final value); a rise <b>of</b> 10%; <b>from</b> 35% <b>to</b> 45%</td></tr>
<tr><td>Approximation</td><td>just over, just under, approximately, roughly, nearly, almost, around</td></tr>
<tr><td>Fractions</td><td>a quarter (25%), a third (33%), half, two thirds (66%), three quarters (75%), one in five (20%)</td></tr>
<tr><td>Multiples</td><td>doubled, tripled, more than quadrupled, twice as many as, half as much as</td></tr>
<tr><td>Percentages vs percentage points</td><td>from 10% to 15% = a rise of 5 <b>percentage points</b> (or 50%)</td></tr>
<tr><td>Units</td><td>Always include them: 31 million tourists, 45%, 165,000 students, 30 tonnes</td></tr>
</table></div>
<p>Full vocabulary: <a href="/vocabulary/t1-trends">trends</a>, <a href="/vocabulary/t1-degree">degree</a>, <a href="/vocabulary/t1-compare">comparison</a>, <a href="/vocabulary/t1-overview">overview phrases</a>.</p>`
    },
    {
      id: 'tense', title: 'Tense map',
      html: `<div class="table-wrap"><table class="data-table plain">
<tr><th>Data</th><th>Tense</th><th>Example</th></tr>
<tr><td>Past years</td><td>Past simple</td><td>Sales rose to 40% in 2010.</td></tr>
<tr><td>Up to a past point</td><td>Past perfect</td><td>By 2020, A had overtaken B.</td></tr>
<tr><td>No time / general</td><td>Present simple</td><td>Men are more likely to cycle than women.</td></tr>
<tr><td>Projections</td><td>Future forms</td><td>The figure is expected to / is projected to / will reach 45 by 2030.</td></tr>
<tr><td>Process</td><td>Present simple (passive for man-made)</td><td>The olives are washed and crushed.</td></tr>
<tr><td>Maps (past → present)</td><td>Past simple / present perfect, passive</td><td>A hotel was built / has been built.</td></tr>
</table></div>`
    }
  ],
  dos: [
    'Paraphrase the prompt in the introduction.',
    'Write a clear overview starting with "Overall,".',
    'Group data logically into two body paragraphs.',
    'Select key figures: start, end, highest, lowest, biggest change.',
    'Include units with every number.',
    'Compare as you describe: whereas, compared with, twice as...',
    'Aim for 170–190 words.'
  ],
  donts: [
    'Don\'t copy the prompt word for word.',
    'Don\'t describe every number in the chart.',
    'Don\'t give opinions, reasons or predictions that are not in the visual.',
    'Don\'t write a conclusion that repeats the overview with "In conclusion, I think...".',
    'Don\'t use informal language (a lot of, went up a bit, huge jump).',
    'Don\'t spend more than 20 minutes – Task 2 is worth twice as much.'
  ],
  careful: [
    { title: 'Missing or unclear overview', body: '<p>The single biggest cause of low Task Achievement scores. Write it second, never leave it out, and keep numbers out of it.</p>' },
    { title: 'Mechanical description', body: '<p>"In 1995 it was 10. In 2000 it was 13. In 2005 it was 18..." shows no selection and no comparison. Select and compare.</p>' },
    { title: 'Inventing reasons', body: '<p>"Tourism fell because of the economic crisis" – the chart doesn\'t say why. Report only what the visual shows.</p>' },
    { title: 'Wrong units', body: '<p>The axis says "millions" – "31 tourists" is a serious inaccuracy. Check units before writing numbers.</p>' }
  ],
  timing: `<div class="section-intro">
<div class="kpi"><b>0–3 min</b><span>Analyse, find main features, group</span></div>
<div class="kpi"><b>3–5 min</b><span>Introduction + overview</span></div>
<div class="kpi"><b>5–17 min</b><span>Two body paragraphs</span></div>
<div class="kpi"><b>17–20 min</b><span>Check accuracy and word count</span></div></div>`,
  faq: [
    { q: 'Do I need a conclusion?', a: '<p>No. The overview does the job of a conclusion. Some candidates place the overview at the end instead of after the introduction – both are acceptable – but it must be there.</p>' },
    { q: 'Is writing more than 200 words a problem?', a: '<p>There is no penalty, but longer answers usually include unnecessary detail and take time from Task 2. 170–190 words is the sweet spot.</p>' },
    { q: 'Can I use "I" or "we"?', a: '<p>No. Task 1 is an impersonal report: "The graph shows...", "It is clear that...".</p>' }
  ],
  checklist: ['Introduction paraphrases the prompt.', 'Overview with 2–3 main features, no numbers.', 'Data grouped into two logical body paragraphs.', 'Key figures with units; comparisons throughout.', 'Correct tenses; no opinions; 170–190 words.'],
  summary: ['Summarise and select – never describe everything.', 'The overview decides your Task Achievement band.', 'Group, compare and report accurate data with units.', 'Four paragraphs, about 20 minutes, 170–190 words.']
};

/* ======================================================================= */
export const task1Chapters: Record<string, Chapter> = {
  line: {
    intro: `<p>A line graph shows how one or more values <b>change over time</b>. The horizontal axis is time (years, months, hours); the vertical axis is the quantity. Your report must describe <b>trends</b> – rises, falls, stability, fluctuation – and the most important points along the way: starting and finishing values, peaks, lows and points where lines cross.</p>
<p>The classic weakness in line graph reports is describing each line separately from start to finish, with every number. The strong approach is to <b>group lines by their trend</b>, highlight <b>turning points</b>, and <b>compare</b> lines with each other at key moments.</p>`,
    facts: [['Shows', 'Change over time'], ['Key features', 'Overall trends, highest/lowest, peaks, crossings'], ['Main language', 'Trend verbs & nouns, adverbs of degree'], ['Typical tense', 'Past simple (+ past perfect, future forms)']],
    method: [
      { title: 'Read the axes and the legend', body: '<p>Units on the vertical axis, intervals on the horizontal axis, and which line is which. Note if any values are projections (future).</p>' },
      { title: 'Describe each line in three words', body: '<p>For each line: up, down, stable, fluctuating, or a combination ("rose then fell"). This gives you your overview.</p>' },
      { title: 'Spot the key points', body: '<p>Start and end values; the highest and lowest points; where lines cross; sudden changes.</p>' },
      { title: 'Group the lines', body: '<p>Lines with similar trends go together. Alternatively, divide by time period if there is a clear turning point (e.g. before and after 2010).</p>' },
      { title: 'Write: intro → overview → body 1 → body 2', body: '<p>Use a mix of structures: verb + adverb (<i>rose sharply</i>), adjective + noun (<i>a sharp rise</i>), and "there was" sentences. Use <i>by</i> for the amount of change and <i>to</i> for the final figure.</p>' }
    ],
    sections: [{
      id: 'bands', title: 'Band 5, 7 and 9 compared',
      html: `<div class="band-compare">
<div><h4>Band 5</h4><p><i>Country A went up from 10 in 1995 to 13 in 2000 and then 18 in 2005 and 22 in 2010 and 28 in 2015 and 31 in 2020.</i></p><p class="small muted">Lists every number, no units, repetitive structure, no comparison.</p></div>
<div><h4>Band 7</h4><p><i>Country A saw steady growth throughout the period, rising from 10 million visitors in 1995 to 31 million in 2020.</i></p><p class="small muted">Selects start and end, names the trend, includes units.</p></div>
<div><h4>Band 9</h4><p><i>Country A enjoyed uninterrupted growth, its visitor numbers more than tripling to a high of 31 million by 2020, by which time it had overtaken Country B as the most popular destination.</i></p><p class="small muted">Precise trend, calculation, comparison and a complex structure.</p></div>
</div>`
    }],
    worked: [{
      title: 'From question to plan: international tourists',
      source: prompt('line'), figure: chart('line'),
      walk: [
        { q: 'Step 1 – Analyse', a: '', steps: ['Type: line graph. Measure: tourists, in <b>millions</b>. Categories: Countries A, B, C. Time: 1995–2020, five-year intervals → past simple.'] },
        { q: 'Step 2 – Main features', a: '', steps: ['A: steady rise, 10 → 31 (highest at the end).', 'B: slight rise then gradual fall, 25 → 17 (from first to last).', 'C: rise, slow at first then rapid; levelled off 2010–2015; surged to 26.', 'Crossings: A overtook B between 2005 and 2010; C overtook B between 2015 and 2020.'] },
        { q: 'Step 3 – Overview (no numbers)', a: '', steps: ['"Overall, the number of visitors to Countries A and C increased considerably over the period, whereas Country B experienced a gradual decline. By 2020, Country A had become the most popular destination, while B, initially the leader, had fallen to last place."'] },
        { q: 'Step 4 – Group the body paragraphs', a: '', steps: ['Body 1: the starting position (B far ahead) and B\'s decline.', 'Body 2: the growth of A and C, including the crossing points and C\'s plateau and surge.'] },
        { q: 'Step 5 – Select data', a: '', steps: ['B: 25 (1995), slight rise to 26 (2000), 17 (2020).', 'A: 10 → 31, overtaking B 2005–2010.', 'C: 4 → 17 (2010) "more than quadrupled", ~18 (2015), 26 (2020).', 'Leave out: most intermediate values.'] },
        { q: 'Step 6 – Write and check', a: '', steps: ['Read the model answer below and notice: each body paragraph compares lines; units are given ("25 million"); varied trend language ("fell steadily", "consistent growth", "levelling off", "surged").'] }
      ],
      lesson: 'The plan took about three minutes and made writing straightforward: the overview came from step 2, the paragraphs from step 4, and the numbers from step 5.'
    }],
    dos: ['Group lines with similar trends.', 'Mention start, end, peaks and crossings.', 'Vary structures: verb + adverb / adjective + noun.', 'Use "by" for change and "to" for the final value.'],
    donts: ['Don\'t describe each line separately from beginning to end.', 'Don\'t list every data point.', 'Don\'t use trend verbs incorrectly ("the number was increased" – use the active: "increased").'],
    careful: [
      { title: 'Increase/decrease are intransitive here', body: '<p>Write "The number increased", not "The number was increased".</p>' },
      { title: 'Projections', body: '<p>If data after the present are projections, use future forms: <i>is predicted to rise</i>, <i>is expected to reach</i>.</p>' }
    ],
    checklist: ['Overview gives each line\'s trend and the leader at the end.', 'Body paragraphs group lines, not just list them.', 'Key points include crossings and peaks.'],
    summary: ['Line graphs are about trends and turning points.', 'Group, select, compare.', 'Precise trend language + units = Band 7+.']
  },

  bar: {
    intro: `<p>Bar charts compare <b>quantities across categories</b>. Some bar charts also show time (e.g. bars for 2005 and 2025), in which case you describe change as well as comparison. The key decision is therefore: <b>is there a time element?</b> If not, you must not use trend language like "increased" – there is no change, only difference.</p>
<p>Bar charts often include two groups (men/women, two years, two cities). The best reports identify the <b>most striking differences</b> between groups and organise paragraphs around them, rather than going bar by bar.</p>`,
    facts: [['Shows', 'Comparison across categories (sometimes over time)'], ['Key features', 'Highest/lowest, biggest differences, similarities'], ['Main language', 'Comparatives, superlatives, multiples, contrast linkers'], ['Typical tense', 'Past (dated data) or present (no date)']],
    method: [
      { title: 'Check for a time element', body: '<p>Bars by year → describe change. Bars by category only → describe comparison only.</p>' },
      { title: 'Find the highest and lowest bars, overall and in each group', body: '<p>These usually form the overview.</p>' },
      { title: 'Find the biggest differences and any similarities between groups', body: '<p>E.g. men far more than women in football; almost equal in swimming.</p>' },
      { title: 'Group categories for the body paragraphs', body: '<p>E.g. activities where men were higher / where women were higher; or the most popular vs the least popular.</p>' },
      { title: 'Write with comparison language', body: '<p><i>considerably higher than, twice as likely, slightly above, compared with, whereas, the widest gap</i>.</p>' }
    ],
    sections: [{
      id: 'bands', title: 'Band 5, 7 and 9 compared',
      html: `<div class="band-compare">
<div><h4>Band 5</h4><p><i>Men football is 30% and women football is 6%. Men yoga is 8% and women yoga is 27%.</i></p><p class="small muted">Grammar errors, no comparison language, listing.</p></div>
<div><h4>Band 7</h4><p><i>Football was far more popular among men (30%) than women (6%), whereas yoga was practised by 27% of women but only 8% of men.</i></p></div>
<div><h4>Band 9</h4><p><i>The starkest gender divide was in football, which men were five times as likely to play as women, while the reverse pattern was evident in yoga, where female participants outnumbered males by more than three to one.</i></p></div>
</div>`
    }],
    worked: [{
      title: 'From question to plan: physical activities by gender',
      source: prompt('bar'), figure: chart('bar'),
      walk: [
        { q: 'Step 1 – Analyse', a: '', steps: ['Bar chart, %, men vs women, five activities, one year (2023) → past simple, no trend verbs.'] },
        { q: 'Step 2 – Main features', a: '', steps: ['Most popular for both: gym (40% men, 36% women).', 'Biggest differences: football (men 30 vs women 6) and yoga (women 27 vs men 8).'] },
        { q: 'Step 3 – Overview', a: '', steps: ['"Overall, going to the gym was the most popular activity for both sexes. The most striking differences were in football, far more common among men, and yoga, much more popular among women."'] },
        { q: 'Step 4 – Group', a: '', steps: ['Body 1: activities where men were higher (gym, cycling, football).', 'Body 2: activities where women were higher (swimming, yoga).'] },
        { q: 'Step 5 – Comparisons to include', a: '', steps: ['"five times as likely" (30 vs 6); "slightly above" (40 vs 36); "the widest gap in women\'s favour" (27 vs 8).'] }
      ],
      lesson: 'Grouping by "which gender was higher" turned five separate activities into two clear paragraphs, each full of comparisons.'
    }],
    dos: ['Decide whether there is a time element before writing.', 'Organise by groups of categories, not bar by bar.', 'Use multiples and comparatives.'],
    donts: ['Don\'t use trend verbs when there is no time.', 'Don\'t describe the bars in the order shown if a better grouping exists.'],
    careful: [{ title: 'Grammar of comparison', body: '<p>"more popular <b>than</b>", "twice <b>as</b> many <b>as</b>", "the <b>most</b> popular". Check these structures carefully – they appear in every sentence.</p>' }],
    checklist: ['Overview identifies the top category and the main difference.', 'Body paragraphs are grouped logically.', 'Comparisons in every sentence.'],
    summary: ['Bar charts are about comparison.', 'Time element? Trends. No time? Comparison only.', 'Group categories and highlight the biggest differences.']
  },

  pie: {
    intro: `<p>Pie charts show <b>proportions of a whole</b> – the segments always add up to 100%. Usually there are two or more pies comparing different years, places or groups. The task is to describe the <b>largest and smallest shares</b> and the <b>most significant changes or differences</b> between the pies.</p>
<p>The language challenge is variety: instead of repeating "the percentage of", use <i>accounted for, made up, represented, constituted, the share of</i>, and express numbers as fractions (<i>just over a third, roughly a quarter</i>).</p>`,
    facts: [['Shows', 'Proportions of a whole'], ['Key features', 'Largest segments, biggest changes between pies'], ['Main language', 'Proportion verbs, fractions, approximation'], ['Typical tense', 'Past for dated pies; present otherwise']],
    method: [
      { title: 'Identify what the pies compare', body: '<p>Years (→ change), places or groups (→ comparison).</p>' },
      { title: 'Find the largest segment in each pie', body: '<p>Has it changed between pies? That is often the main feature.</p>' },
      { title: 'Find the segments that changed most', body: '<p>Calculate changes in percentage points.</p>' },
      { title: 'Group segments: increased vs decreased (or large vs small)', body: '<p>Two body paragraphs.</p>' },
      { title: 'Write with proportion language and fractions', body: '<p>Vary verbs and express values as fractions where accurate.</p>' }
    ],
    sections: [{
      id: 'fractions', title: 'Percentages as fractions',
      html: `<div class="table-wrap"><table class="data-table plain">
<tr><th>%</th><th>Expression</th><th>%</th><th>Expression</th></tr>
<tr><td>10%</td><td>one in ten</td><td>50%</td><td>a half</td></tr>
<tr><td>20%</td><td>a fifth / one in five</td><td>65%</td><td>almost two thirds</td></tr>
<tr><td>24%</td><td>just under a quarter</td><td>75%</td><td>three quarters</td></tr>
<tr><td>34%</td><td>just over a third</td><td>80%+</td><td>the vast majority</td></tr>
</table></div>`
    }],
    worked: [{
      title: 'From question to plan: household spending',
      source: prompt('pie'), figure: chart('pie'),
      walk: [
        { q: 'Step 1 – Analyse', a: '', steps: ['Two pies, 1980 and 2020 → describe change; past simple; percentages of household spending.'] },
        { q: 'Step 2 – Main features', a: '', steps: ['Largest share: food in 1980 (34%) → housing in 2020 (35%). Leisure rose noticeably.'] },
        { q: 'Step 3 – Overview', a: '', steps: ['"Overall, there was a significant shift: while food accounted for the largest share in 1980, housing had taken its place by 2020, and the proportion spent on leisure also rose noticeably."'] },
        { q: 'Step 4 – Group', a: '', steps: ['Body 1: categories that fell (food 34→16, "more than halved"; other 20→14).', 'Body 2: categories that rose (housing 22→35; leisure 10→17; transport 14→18).'] },
        { q: 'Step 5 – Language', a: '', steps: ['"just over a third", "more than halved", "increased by seven percentage points", "roughly similar".'] }
      ]
    }],
    dos: ['Describe the largest segments and biggest changes.', 'Use fractions and proportion verbs.', 'Group segments by change or size.'],
    donts: ['Don\'t describe the segments clockwise one by one.', 'Don\'t write "the percentage of" in every sentence.'],
    careful: [{ title: 'Percent vs percentage points', body: '<p>From 10% to 17% is a rise of 7 percentage points (or a 70% increase). "Increased by 7%" is ambiguous; prefer "by 7 percentage points".</p>' }],
    checklist: ['Overview names the largest segment(s) and the main shift.', 'Segments are grouped.', 'Proportion language is varied.'],
    summary: ['Pies show shares of a whole.', 'Focus on the largest segments and the biggest changes.', 'Use fractions and varied proportion verbs.']
  },

  table: {
    intro: `<p>Tables present <b>exact figures</b> in rows and columns. They often contain more numbers than any other Task 1 visual – sometimes twenty or more – which makes <b>selection</b> the key skill. A good table report identifies the highest and lowest values, the biggest changes and the general pattern, and ignores the rest.</p>
<p>Tables can show change over time (columns for years) or comparison only (columns for different measures). Read the headings carefully before deciding.</p>`,
    facts: [['Shows', 'Exact figures in rows and columns'], ['Key features', 'Highest/lowest in each column; biggest changes; patterns'], ['Main skill', 'Selection'], ['Typical tense', 'Past if dated; present otherwise']],
    method: [
      { title: 'Read the headings and units', body: '<p>What does each row and column represent? Is there time?</p>' },
      { title: 'Circle the highest and lowest value in each column', body: '<p>Patterns appear quickly when you mark the extremes.</p>' },
      { title: 'Calculate the biggest changes (if there is time)', body: '<p>Which row changed most? Which stayed stable? Which fell?</p>' },
      { title: 'Group rows', body: '<p>E.g. rows that grew vs rows that fell or were stable.</p>' },
      { title: 'Write, using calculations for precision', body: '<p><i>more than doubled, a threefold increase, a drop of more than a third</i>.</p>' }
    ],
    worked: [{
      title: 'From question to plan: university enrolments',
      source: prompt('table'), figure: chart('table'),
      walk: [
        { q: 'Step 1 – Analyse', a: '', steps: ['Table; thousands of students; five subjects; 2000, 2010, 2020 → change over time, past simple.'] },
        { q: 'Step 2 – Main features', a: '', steps: ['Business highest throughout. Computer Science grew dramatically (30 → 140). Arts the only subject that fell.'] },
        { q: 'Step 3 – Overview', a: '', steps: ['"Overall, Business remained the most popular subject, but the most remarkable change was the dramatic growth of Computer Science. Arts was the only subject that became less popular."'] },
        { q: 'Step 4 – Group', a: '', steps: ['Body 1: subjects that grew (Business, Computer Science, Medicine).', 'Body 2: stable or falling (Engineering, Arts).'] },
        { q: 'Step 5 – Calculations', a: '', steps: ['Computer Science "more than doubled... then more than doubled again"; Arts "a drop of more than a third" (95 → 60).'] }
      ]
    }],
    dos: ['Select: extremes, biggest changes, patterns.', 'Use calculations (doubled, a third).', 'Vary sentence structures.'],
    donts: ['Don\'t describe the table row by row with the same sentence pattern.', 'Don\'t include every number.'],
    careful: [{ title: 'Thousands and millions', body: '<p>"(thousands)" in the title means 120 = 120,000. Write "120,000 students" or "120 thousand".</p>' }],
    checklist: ['I selected rather than listed.', 'My overview names the top item and the main change.', 'Units are correct.'],
    summary: ['Tables test selection.', 'Mark extremes and big changes first.', 'Calculations add precision.']
  },

  mixed: {
    intro: `<p>A mixed task combines two visuals – for example a line graph and a pie chart, or a bar chart and a table – on related topics. You must describe <b>both</b>, and where it makes sense, <b>connect</b> them. Because there is twice as much information but the same word count, selection is even more important.</p>`,
    facts: [['Shows', 'Two related visuals'], ['Key features', 'One or two main features from each visual'], ['Main challenge', 'Selection within ~190 words'], ['Structure', 'One body paragraph per visual (usually)']],
    method: [
      { title: 'Understand each visual and how they relate', body: '<p>Same topic, different angle? Total vs breakdown?</p>' },
      { title: 'Write one introduction sentence covering both', body: '<p>"The line graph illustrates..., while the pie chart shows..."</p>' },
      { title: 'Overview: one main feature from each visual', body: '<p>Both visuals must appear in the overview.</p>' },
      { title: 'Body 1 for visual 1, body 2 for visual 2', body: '<p>Use a transition: "Turning to the pie chart, ..."</p>' },
      { title: 'Keep to about 190 words', body: '<p>Select only the most important details from each.</p>' }
    ],
    worked: [{
      title: 'From question to plan: museum visitors',
      source: prompt('mixed'), figure: chart('mixed'),
      walk: [
        { q: 'Step 1 – Relationship', a: '', steps: ['Line graph: total visitors 2014–2024. Pie: age breakdown in 2024. Same museum.'] },
        { q: 'Step 2 – Overview', a: '', steps: ['"Overall, visitor numbers grew over the decade despite a dramatic temporary fall in 2020, and in 2024 the museum attracted a fairly balanced mix of age groups, with 35–54-year-olds forming the largest group."'] },
        { q: 'Step 3 – Bodies', a: '', steps: ['Body 1: line graph – 220k → 310k (2018), plummet to 90k (2020), rebound to 330k.', 'Body 2: pie – 35–54 (30%), under-18s (28%), 18–34 (22%), 55+ (20%).'] }
      ]
    }],
    dos: ['Cover both visuals in the introduction and overview.', 'Use transitions between visuals.', 'Be selective.'],
    donts: ['Don\'t spend 150 words on one visual and 30 on the other.', 'Don\'t invent a causal link between the visuals.'],
    careful: [{ title: 'Unbalanced reports', body: '<p>Both visuals carry marks. If one is simpler, it still needs a full paragraph.</p>' }],
    checklist: ['Both visuals in intro and overview.', 'Balanced body paragraphs.', '170–200 words.'],
    summary: ['Describe both visuals; connect only where the data allow.', 'One main feature from each in the overview.', 'Selection is essential.']
  },

  process: {
    intro: `<p>A process diagram shows the <b>stages</b> of how something is made (a manufacturing process) or how something happens in nature (a natural cycle). There are usually no numbers, so the report focuses on <b>sequence</b>: what happens first, next and last, and how stages connect.</p>
<p>The language is different from other Task 1 types: you need <b>sequencing words</b> and, for man-made processes, the <b>passive voice</b> ("the olives are washed"). Natural processes usually use the active voice ("the larva grows").</p>`,
    facts: [['Shows', 'Stages of a process or cycle'], ['Key features', 'Number of stages, start and end, linear or cyclical'], ['Main language', 'Sequencers; present simple passive'], ['Typical tense', 'Present simple']],
    method: [
      { title: 'Find the start and end', body: '<p>Follow the arrows. Is it linear (start → end) or a cycle (it repeats)?</p>' },
      { title: 'Count the stages', body: '<p>Useful for the overview: "The process consists of seven stages..."</p>' },
      { title: 'Understand each stage; note the labels', body: '<p>Use all the labels, but change their form (crushing → is crushed).</p>' },
      { title: 'Split the stages into two halves for the body paragraphs', body: '<p>Divide at a natural break (e.g. raw material → product).</p>' },
      { title: 'Write with sequencers and the passive', body: '<p>Vary sequencers: <i>First, Next, Once X has been done, Following this, Subsequently, Finally</i>. Add relative clauses: <i>a centrifuge, which spins rapidly</i>.</p>' }
    ],
    sections: [{
      id: 'bands', title: 'Band 5, 7 and 9 compared',
      html: `<div class="band-compare">
<div><h4>Band 5</h4><p><i>First they pick olives. Then they wash olives. Then they crush olives. Then they mix it.</i></p><p class="small muted">"they" (informal), repetitive "then", no passive.</p></div>
<div><h4>Band 7</h4><p><i>First, the olives are picked and washed to remove leaves and dirt. Next, they are crushed into a paste, which is mixed for 30–40 minutes.</i></p></div>
<div><h4>Band 9</h4><p><i>Once harvested, the olives are washed to remove leaves and dirt before being crushed into a thick paste, which is then mixed for 30 to 40 minutes to allow droplets of oil to combine.</i></p></div>
</div>`
    }],
    worked: [{
      title: 'From question to plan: olive oil production',
      source: prompt('process'), figure: chart('process'),
      walk: [
        { q: 'Step 1 – Analyse', a: '', steps: ['Man-made, linear, seven stages from harvesting to bottling → present simple passive.'] },
        { q: 'Step 2 – Overview', a: '', steps: ['"Overall, the process consists of seven main stages, beginning with the collection of olives from trees and ending with the oil being stored in bottles."'] },
        { q: 'Step 3 – Split', a: '', steps: ['Body 1: harvesting, washing, crushing, mixing (preparing the paste).', 'Body 2: separating, filtering, bottling (extracting and storing the oil).'] },
        { q: 'Step 4 – Language', a: '', steps: ['Passives: are picked, are washed, are crushed, is mixed, is placed, is filtered, is poured.', 'Sequencers: In the first stage, Next, Following this, Once it has been separated, Finally.'] }
      ]
    }],
    dos: ['State the number of stages, start and end in the overview.', 'Use the passive for man-made processes.', 'Vary sequencers and use relative clauses.', 'Use every label.'],
    donts: ['Don\'t use "they" or "people" as the subject.', 'Don\'t start every sentence with "Then".', 'Don\'t add stages that are not shown.'],
    careful: [{ title: 'Cycles', body: '<p>For a natural cycle, say it is cyclical in the overview and end by linking back to the start: "...and the cycle begins again."</p>' }],
    checklist: ['Overview: stages, start, end, type.', 'Passive voice correct.', 'All labels used.'],
    summary: ['Processes are about sequence, not numbers.', 'Passive for man-made, active for natural.', 'Vary sequencers; use relative clauses.']
  },

  map: {
    intro: `<p>Map tasks usually show the same place at two (sometimes three) points in time, or a current map and a planned development. You describe <b>what changed</b> – what was built, demolished, extended, converted or replaced – and briefly what <b>stayed the same</b>. There are no numbers; the language is about <b>change</b> (mostly passive) and <b>location</b>.</p>`,
    facts: [['Shows', 'Changes to a place over time (or planned)'], ['Key features', 'The 2–3 biggest changes; overall character of the change'], ['Main language', 'Passive change verbs + location phrases'], ['Typical tense', 'Past simple passive (present perfect / future for plans)']],
    method: [
      { title: 'Compare the maps systematically', body: '<p>Go area by area (north, south, east, west, centre) and list changes: added, removed, converted, extended.</p>' },
      { title: 'Decide the overall character of the change', body: '<p>More developed? More residential? More tourist-oriented? Less green space? This is your overview.</p>' },
      { title: 'Group changes by area or by type', body: '<p>E.g. Body 1: the north (inland changes); Body 2: the coast.</p>' },
      { title: 'Write with passive change verbs and location language', body: '<p><i>was replaced by, was converted into, made way for, was extended, in the north-east, along the coast</i>.</p>' },
      { title: 'Mention what did not change', body: '<p>One sentence is enough.</p>' }
    ],
    worked: [{
      title: 'From question to plan: a coastal village',
      source: prompt('map'), figure: chart('map'),
      walk: [
        { q: 'Step 1 – List changes', a: '', steps: ['North-east: farmland → housing estate + new road.', 'West: southern half of the forest → golf course.', 'Coast: new hotel (west of beach); fishing harbour → marina.', 'Centre: shop → supermarket + car park. Unchanged: original houses, main road.'] },
        { q: 'Step 2 – Overview', a: '', steps: ['"Overall, the village was transformed from a small fishing and farming community into a tourist and residential area, with new housing and leisure facilities replacing some natural and agricultural land."'] },
        { q: 'Step 3 – Group', a: '', steps: ['Body 1: inland changes (housing estate, golf course).', 'Body 2: coast and centre (hotel, marina, supermarket, car park) + unchanged houses.'] }
      ]
    }],
    dos: ['Give the overall character of change in the overview.', 'Use passive change verbs.', 'Use precise location phrases.', 'Mention unchanged features briefly.'],
    donts: ['Don\'t describe the first map fully, then the second map fully.', 'Don\'t use "there is" for everything – use change verbs.'],
    careful: [{ title: 'Future plans', body: '<p>For proposed developments, use future passive forms: <i>will be built, is to be converted, is planned to be relocated</i>.</p>' }],
    checklist: ['Overview describes the overall transformation.', 'Changes grouped by area or type.', 'Passive voice and location language accurate.'],
    summary: ['Maps are about change and location.', 'Compare area by area; group in the report.', 'Passive change verbs + precise location phrases.']
  }
};

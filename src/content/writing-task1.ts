import type { LetterType, Task1Type } from '@/lib/types';

const map2000 = `<g>
<rect x="0" y="0" width="280" height="260" fill="#f0fdf4" stroke="currentColor"/>
<rect x="0" y="222" width="280" height="38" fill="#93c5fd"/><text x="140" y="246" font-size="11" text-anchor="middle" fill="#1e3a8a" font-weight="700">SEA</text>
<rect x="0" y="200" width="280" height="22" fill="#fde68a"/><text x="60" y="215" font-size="10" fill="#78350f">beach</text>
<rect x="10" y="15" width="110" height="125" fill="#15803d" fill-opacity=".55"/><text x="65" y="80" font-size="11" text-anchor="middle" fill="#fff" font-weight="700">Forest</text>
<rect x="155" y="15" width="115" height="95" fill="#a3e635" fill-opacity=".5"/><text x="212" y="66" font-size="11" text-anchor="middle" fill="#1c2233" font-weight="700">Farmland</text>
<rect x="132" y="0" width="14" height="200" fill="#a8a29e"/>
${[[105, 150], [105, 172], [155, 150], [155, 172], [85, 160]].map(([x, y]) => `<rect x="${x}" y="${y}" width="14" height="14" fill="#ef4444"/>`).join('')}
<rect x="160" y="122" width="22" height="16" fill="#f59e0b"/><text x="188" y="134" font-size="10" fill="#1c2233">shop</text>
<rect x="205" y="150" width="65" height="48" fill="#60a5fa" fill-opacity=".6" stroke="#2563eb"/><text x="237" y="172" font-size="9.5" text-anchor="middle" fill="#1c2233">fishing</text><text x="237" y="184" font-size="9.5" text-anchor="middle" fill="#1c2233">harbour</text>
</g>`;
const map2025 = `<g transform="translate(310 0)">
<rect x="0" y="0" width="280" height="260" fill="#f0fdf4" stroke="currentColor"/>
<rect x="0" y="222" width="280" height="38" fill="#93c5fd"/><text x="140" y="246" font-size="11" text-anchor="middle" fill="#1e3a8a" font-weight="700">SEA</text>
<rect x="0" y="200" width="280" height="22" fill="#fde68a"/>
<rect x="10" y="15" width="110" height="60" fill="#15803d" fill-opacity=".55"/><text x="65" y="50" font-size="11" text-anchor="middle" fill="#fff" font-weight="700">Forest</text>
<rect x="10" y="80" width="110" height="60" fill="#86efac" stroke="#15803d"/><text x="65" y="114" font-size="11" text-anchor="middle" fill="#1c2233" font-weight="700">Golf course</text>
<rect x="155" y="15" width="115" height="85" fill="#fecaca" fill-opacity=".5"/>
${[0, 1, 2, 3].flatMap(c => [0, 1, 2].map(r => `<rect x="${163 + c * 26}" y="${22 + r * 24}" width="14" height="14" fill="#ef4444"/>`)).join('')}
<text x="212" y="96" font-size="10" text-anchor="middle" fill="#1c2233" font-weight="700">housing estate</text>
<rect x="132" y="0" width="14" height="200" fill="#a8a29e"/><rect x="146" y="108" width="134" height="10" fill="#a8a29e"/>
${[[105, 150], [105, 172], [155, 150], [155, 172], [85, 160]].map(([x, y]) => `<rect x="${x}" y="${y}" width="14" height="14" fill="#ef4444"/>`).join('')}
<rect x="20" y="148" width="58" height="48" fill="#a78bfa" fill-opacity=".7"/><text x="49" y="176" font-size="11" text-anchor="middle" fill="#fff" font-weight="700">Hotel</text>
<rect x="160" y="122" width="34" height="20" fill="#f59e0b"/><text x="177" y="135" font-size="8.5" text-anchor="middle" fill="#1c2233">supermkt</text>
<rect x="175" y="150" width="26" height="40" fill="none" stroke="currentColor" stroke-dasharray="3 2"/><text x="188" y="174" font-size="10" text-anchor="middle" fill="#1c2233">P</text>
<rect x="205" y="150" width="65" height="48" fill="#60a5fa" fill-opacity=".6" stroke="#2563eb"/><text x="237" y="178" font-size="10" text-anchor="middle" fill="#1c2233">marina</text>
</g>`;
const villageMaps = `<svg viewBox="0 0 590 290" width="590" style="color:var(--text)" font-family="inherit">${map2000}${map2025}
<text x="140" y="280" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">2000</text><text x="450" y="280" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">2025</text></svg>`;

export const writing: { overview: string; task1: Task1Type[]; gt: { intro: string; types: LetterType[] } } = {
  overview: `
<div class="grid-2">
<div class="card"><h3>Task 1 (Academic)</h3><ul><li><b>Time:</b> about 20 minutes</li><li><b>Length:</b> at least 150 words (aim for 170–190)</li><li><b>Task:</b> summarise and compare visual information – no opinions, no causes you invent</li><li><b>Weight:</b> one third of your Writing band</li></ul></div>
<div class="card"><h3>Task 2 (Academic & GT)</h3><ul><li><b>Time:</b> about 40 minutes</li><li><b>Length:</b> at least 250 words (aim for 270–320)</li><li><b>Task:</b> a discursive essay that presents and supports a position</li><li><b>Weight:</b> two thirds of your Writing band</li></ul></div>
</div>
<h3>The universal Task 1 structure (4 paragraphs)</h3>
<ul class="structure">
<li><b>1. Introduction (1 sentence)</b>Paraphrase the question: what the chart shows, where, when, units. Never copy the question word for word.</li>
<li><b>2. Overview (2 sentences) – the most important paragraph</b>The 2–3 main trends or striking features with <u>no specific numbers</u>: biggest/smallest, overall up/down, main change. Without a clear overview you cannot score above Band 5 in Task Achievement.</li>
<li><b>3. Body paragraph 1 (3–4 sentences)</b>Details with data for one group of features (e.g. the categories that rose, or the first time period).</li>
<li><b>4. Body paragraph 2 (3–4 sentences)</b>Details with data for the other group, using comparisons.</li>
</ul>
<h3>Paraphrasing the question</h3>
<div class="table-wrap"><table class="data-table plain">
<tr><th>Question word</th><th>Paraphrase</th></tr>
<tr><td>The graph <b>shows</b></td><td>illustrates / depicts / compares / gives information about / presents data on</td></tr>
<tr><td><b>the number of</b> people</td><td>how many people / the figures for / the quantity of</td></tr>
<tr><td><b>the percentage of</b></td><td>the proportion of / the share of / what percentage of</td></tr>
<tr><td><b>from 1990 to 2020</b></td><td>between 1990 and 2020 / over a 30-year period / in the three decades after 1990</td></tr>
<tr><td><b>in three countries</b></td><td>in three different nations / in the UK, France and Spain</td></tr>
<tr><td><b>information about</b> spending</td><td>how much was spent on / expenditure on / data on spending</td></tr>
</table></div>
<div class="callout"><strong>Example</strong><i>Question:</i> The graph shows the number of cars sold in three European countries between 2000 and 2020.<br><i>Paraphrase:</i> The line graph illustrates how many cars were purchased in Germany, France and Italy over a twenty-year period beginning in 2000.</div>
<h3>Band 7+ checklist for Task 1</h3>
<ul class="checklist">
<li>A clear overview that identifies the main trends/differences.</li>
<li>Key features selected – not every number described.</li>
<li>Accurate data, with units (%, millions, tonnes).</li>
<li>Comparisons made (whereas, compared with, twice as many as).</li>
<li>Range of trend vocabulary (verbs + nouns) and precise adverbs (sharply, marginally).</li>
<li>Correct tense: past for past data, future forms for projections (is predicted to, is expected to).</li>
<li>No opinions, no conclusions such as "In my opinion", no reasons not shown in the chart.</li>
</ul>`,

  task1: [
    {
      id: 'line', name: 'Line Graph', summary: 'Shows changes over time (trends). The focus is on rises, falls, peaks, stability and crossing points.',
      recognise: 'Horizontal axis = time (years, months). One or more lines.',
      structure: [
        ['Introduction', 'Paraphrase: what, where, when.'],
        ['Overview', 'Overall trend of each line (up/down/stable) + which was highest/lowest overall or at the end.'],
        ['Body 1', 'Describe the lines with similar trends, or the first period, with start and end figures.'],
        ['Body 2', 'Describe the other lines or the second period, including crossing points and peaks.']
      ],
      tips: ['Group lines with similar trends together rather than describing each line separately.', 'Always mention start points, end points and dramatic changes (peaks, troughs, overtaking).', 'Vary structures: "Sales rose sharply" (verb + adverb) / "There was a sharp rise in sales" (adjective + noun).', 'Use "by" for the amount of change and "to" for the final figure: rose <b>by</b> 10% <b>to</b> 45%.'],
      language: [
        { h: 'Upward', items: ['rise, increase, grow, climb, go up', 'surge, soar, rocket (dramatic)', 'a rise, an increase, growth, an upward trend'] },
        { h: 'Downward', items: ['fall, decrease, decline, drop, go down', 'plummet, plunge, collapse (dramatic)', 'a fall, a decline, a drop, a downward trend'] },
        { h: 'No change / variation', items: ['remain stable / steady / constant', 'level off, plateau, stabilise', 'fluctuate (between X and Y)'] },
        { h: 'Highest / lowest points', items: ['peak at, reach a peak of, hit a high of', 'bottom out at, hit a low of, reach a trough'] }
      ],
      sample: {
        prompt: 'The graph below shows the number of international tourists visiting three countries between 1995 and 2020.<br><br>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
        chart: { type: 'line', title: 'International tourist arrivals (millions)', x: ['1995', '2000', '2005', '2010', '2015', '2020'], yLabel: 'Millions', series: [{ name: 'Country A', data: [10, 13, 18, 22, 28, 31] }, { name: 'Country B', data: [25, 26, 23, 20, 19, 17] }, { name: 'Country C', data: [4, 5, 9, 17, 18, 26] }] },
        answer: `<p>The line graph <span class="hl">illustrates</span> how many international tourists, in millions, visited three countries (A, B and C) at five-year intervals between 1995 and 2020.</p>
<p><span class="hl">Overall,</span> the number of visitors to Countries A and C increased considerably over the period, <span class="hl">whereas</span> Country B experienced a gradual decline. By 2020, Country A had become the most popular destination, while B, initially the leader, had fallen to last place.</p>
<p>In 1995, Country B attracted 25 million tourists, far more than A (10 million) and C (just 4 million). Over the following 25 years, <span class="hl">however,</span> B's figure <span class="hl">fell steadily</span>, apart from a slight rise to 26 million in 2000, ending at 17 million in 2020.</p>
<p><span class="hl">By contrast,</span> Country A saw <span class="hl">consistent growth</span> throughout the period. It <span class="hl">overtook</span> Country B between 2005 and 2010 and continued to climb, <span class="hl">reaching a peak of</span> 31 million in 2020. Country C's tourist numbers <span class="hl">rose only marginally</span> in the first five years but then increased rapidly, more than quadrupling from 4 million in 1995 to 17 million in 2010. After <span class="hl">levelling off</span> at around 18 million in 2015, the figure <span class="hl">surged</span> to 26 million in 2020, also overtaking Country B.</p>
<p class="small muted">(≈ 185 words)</p>`
      },
      practice: [
        { id: 'w1-line-p1', prompt: 'The graph below shows energy consumption from three sources in a country from 1990 to 2020, with projections for 2030. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.', chart: { type: 'line', title: 'Energy consumption by source (million tonnes oil equivalent)', x: ['1990', '2000', '2010', '2020', '2030*'], yLabel: 'Mtoe', series: [{ name: 'Coal', data: [60, 58, 45, 30, 15] }, { name: 'Gas', data: [20, 30, 38, 40, 35] }, { name: 'Renewables', data: [2, 5, 12, 25, 45] }], caption: '* projected' } },
        { id: 'w1-line-p2', prompt: 'The graph below shows the average number of hours per week that teenagers in one country spent on three leisure activities between 2010 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.', chart: { type: 'line', title: 'Average weekly hours spent by teenagers', x: ['2010', '2013', '2016', '2019', '2022', '2025'], yLabel: 'Hours per week', series: [{ name: 'Social media', data: [4, 7, 11, 14, 16, 15] }, { name: 'Video games', data: [6, 7, 8, 10, 12, 13] }, { name: 'Reading for pleasure', data: [5, 4.5, 4, 3, 3, 2.5] }] } }
      ]
    },
    {
      id: 'bar', name: 'Bar Chart', summary: 'Compares quantities across categories (and sometimes over time). The focus is on comparisons: highest, lowest, similarities and big differences.',
      recognise: 'Vertical or horizontal bars. Categories on one axis; may be grouped (e.g. men vs women).',
      structure: [
        ['Introduction', 'Paraphrase the chart.'],
        ['Overview', 'Highest and lowest categories; the main difference between groups (e.g. men preferred X, women Y).'],
        ['Body 1', 'Categories where group 1 was higher / the most significant categories.'],
        ['Body 2', 'Remaining categories, emphasising similarities and contrasts.']
      ],
      tips: ['If there is no time axis, do NOT use trend verbs (increase/decrease) – use comparison language.', 'If bars show years, treat it like a line graph and describe trends.', 'Group categories logically instead of going bar by bar.'],
      language: [
        { h: 'Comparison', items: ['X was (considerably) higher than Y', 'twice as many / three times as much as', 'the most / least popular', 'X accounted for the largest share'] },
        { h: 'Similarity', items: ['similar / almost identical figures', 'the same proportion of', 'X and Y were roughly equal'] },
        { h: 'Contrast', items: ['whereas, while, by contrast, in contrast to, compared with, unlike'] }
      ],
      sample: {
        prompt: 'The chart below shows the percentage of men and women in one country who regularly took part in five physical activities in 2023.<br><br>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
        chart: { type: 'bar', title: 'Regular participation in physical activities, 2023 (%)', x: ['Swimming', 'Cycling', 'Gym', 'Football', 'Yoga'], unit: '%', yMax: 50, values: true, series: [{ name: 'Men', data: [28, 35, 40, 30, 8] }, { name: 'Women', data: [32, 22, 36, 6, 27] }] },
        answer: `<p>The bar chart <span class="hl">compares</span> the proportion of men and women in a particular country who regularly participated in five forms of exercise in 2023.</p>
<p><span class="hl">Overall,</span> going to the gym was the most popular activity for both sexes. The most striking differences between genders were in football, which was far more common among men, and yoga, which was much more popular among women.</p>
<p>Gym attendance was <span class="hl">the highest</span> for men at 40%, <span class="hl">slightly above</span> the figure for women (36%). Cycling and football were also <span class="hl">considerably more</span> popular among males: 35% of men cycled regularly, <span class="hl">compared with</span> only 22% of women, and men were <span class="hl">five times as likely</span> to play football (30% versus 6%).</p>
<p><span class="hl">In contrast,</span> women outnumbered men in the remaining two activities. Almost a third of women (32%) went swimming, a little more than men (28%). The <span class="hl">widest gap</span> in women's favour was in yoga, practised by 27% of women but by just 8% of men, making it the least popular activity among males.</p>
<p class="small muted">(≈ 175 words)</p>`
      },
      practice: [
        { id: 'w1-bar-p1', prompt: 'The chart below shows the average weekly hours spent on household tasks by men and women in a country in 1990 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.', chart: { type: 'bar', title: 'Weekly hours spent on household tasks', x: ['Men 1990', 'Men 2020', 'Women 1990', 'Women 2020'], series: [{ name: 'Cooking', data: [2, 5, 10, 7] }, { name: 'Cleaning', data: [1, 3, 8, 6] }, { name: 'Childcare', data: [3, 7, 14, 11] }] } },
        { id: 'w1-bar-p2', prompt: 'The chart below shows the main methods of travelling to work used by residents of a city in 2005 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.', chart: { type: 'bar', title: 'Commuting methods (% of workers)', x: ['Car', 'Bus', 'Train', 'Bicycle', 'Walking', 'Work from home'], unit: '%', series: [{ name: '2005', data: [55, 18, 12, 4, 9, 2] }, { name: '2025', data: [38, 14, 15, 11, 8, 14] }] } }
      ]
    },
    {
      id: 'pie', name: 'Pie Chart', summary: 'Shows proportions of a whole (always 100%). Often two or more pies compare different years, places or groups.',
      recognise: 'Circles divided into segments with percentages.',
      structure: [
        ['Introduction', 'Paraphrase: what the pies show and how many.'],
        ['Overview', 'The largest segment(s) and the most significant change or difference between pies.'],
        ['Body 1', 'Segments that increased / are larger in one pie.'],
        ['Body 2', 'Segments that decreased / stayed similar.']
      ],
      tips: ['Use proportion language: a quarter, just under a third, the majority, a small fraction.', 'If pies represent different years, you can describe change ("rose from 22% to 35%").', 'Don\'t list every segment in order of the chart – group them by change or by size.'],
      language: [
        { h: 'Fractions', items: ['50% = a half; 25% = a quarter; 33% = a third; 75% = three quarters', '10% = one in ten; 20% = a fifth; 66% = two thirds'] },
        { h: 'Approximation', items: ['just over / just under / nearly / almost / roughly / approximately', 'a small minority, a large majority'] },
        { h: 'Share', items: ['accounted for, made up, constituted, represented, comprised', 'the largest/smallest proportion/share/segment'] }
      ],
      sample: {
        prompt: 'The pie charts below show how the average household in one country spent its income in 1980 and 2020.<br><br>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
        chart: { type: 'pie', title: 'Household spending by category', pies: [{ title: '1980', slices: [['Housing', 22], ['Food', 34], ['Transport', 14], ['Leisure', 10], ['Other', 20]] }, { title: '2020', slices: [['Housing', 35], ['Food', 16], ['Transport', 18], ['Leisure', 17], ['Other', 14]] }] },
        answer: `<p>The two pie charts <span class="hl">illustrate</span> the proportion of household income spent on five categories in a particular country in 1980 and 2020.</p>
<p><span class="hl">Overall,</span> there was a significant shift in spending patterns over the forty-year period. While food <span class="hl">accounted for the largest share</span> of spending in 1980, housing had taken its place by 2020, and the proportion spent on leisure also rose noticeably.</p>
<p>In 1980, food was the biggest expense, making up <span class="hl">just over a third</span> (34%) of the household budget. By 2020, this figure had <span class="hl">more than halved</span>, falling to 16%. The share devoted to "other" items also declined, from a fifth to 14%.</p>
<p><span class="hl">Conversely,</span> housing costs rose from 22% to 35%, <span class="hl">making it the dominant category</span> in 2020. Spending on leisure <span class="hl">increased by</span> seven percentage points to 17%, while transport saw a smaller rise, from 14% to 18%. As a result, in 2020 the shares for food, transport and leisure were <span class="hl">roughly similar</span>, each representing between 16% and 18% of spending.</p>
<p class="small muted">(≈ 180 words)</p>`
      },
      practice: [
        { id: 'w1-pie-p1', prompt: 'The pie charts below show the sources of electricity generation in a country in 2000 and 2024. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.', chart: { type: 'pie', pies: [{ title: '2000', slices: [['Coal', 45], ['Gas', 25], ['Nuclear', 20], ['Hydro', 7], ['Wind & Solar', 3]] }, { title: '2024', slices: [['Coal', 10], ['Gas', 32], ['Nuclear', 16], ['Hydro', 8], ['Wind & Solar', 34]] }] } },
        { id: 'w1-pie-p2', prompt: 'The charts below show how students at a university spent their free time in a typical week, by age group. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.', chart: { type: 'pie', pies: [{ title: 'Students under 25', slices: [['Social media', 30], ['Sport', 20], ['Part-time work', 25], ['Reading', 5], ['Other', 20]] }, { title: 'Students 25 and over', slices: [['Social media', 12], ['Sport', 13], ['Part-time work', 40], ['Reading', 15], ['Other', 20]] }] } }
      ]
    },
    {
      id: 'table', name: 'Table', summary: 'Presents exact figures in rows and columns. The challenge is to select the key data rather than describe every number.',
      recognise: 'Rows and columns of numbers; may include time periods.',
      structure: [
        ['Introduction', 'Paraphrase the table.'],
        ['Overview', 'Highest/lowest items and the general trend (if time is shown).'],
        ['Body 1', 'The most significant rows (biggest values or biggest changes).'],
        ['Body 2', 'Remaining rows, comparing with the first group.']
      ],
      tips: ['Before writing, circle the highest and lowest value in each column and look for the biggest changes.', 'Avoid describing the table row by row in the same pattern – vary your sentence structures.', 'Calculations add precision: "almost five times as many", "a threefold increase".'],
      language: [
        { h: 'Ranking', items: ['the highest/lowest figure', 'ranked second/third', 'followed by', 'the second most popular'] },
        { h: 'Multiples', items: ['doubled, tripled, quadrupled', 'a twofold/threefold increase', 'half as many as'] }
      ],
      sample: {
        prompt: 'The table below shows the number of students (in thousands) enrolled in five subjects at universities in one country in 2000, 2010 and 2020.<br><br>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
        chart: { type: 'table', title: 'University enrolments by subject (thousands)', headers: ['Subject', '2000', '2010', '2020'], rows: [['Business', '120', '150', '165'], ['Engineering', '85', '90', '88'], ['Medicine', '40', '48', '55'], ['Arts', '95', '80', '60'], ['Computer Science', '30', '65', '140']] },
        answer: `<p>The table <span class="hl">provides data on</span> how many thousands of students were studying five different subjects at universities in a particular country in 2000, 2010 and 2020.</p>
<p><span class="hl">Overall,</span> Business remained the most popular subject throughout the period, but the most remarkable change was the dramatic growth of Computer Science. Arts was the only subject that became less popular.</p>
<p>Business enrolments rose steadily from 120,000 in 2000 to 165,000 in 2020. Computer Science, <span class="hl">however,</span> grew far more rapidly: its student numbers more than doubled in the first decade, from 30,000 to 65,000, and then <span class="hl">more than doubled again</span> to 140,000, making it the second largest subject by 2020. Medicine also saw consistent, though modest, growth from 40,000 to 55,000.</p>
<p><span class="hl">In contrast,</span> Engineering <span class="hl">remained relatively stable</span>, fluctuating between 85,000 and 90,000. Arts, which had been the second most popular subject in 2000 with 95,000 students, <span class="hl">declined</span> continuously, falling to 60,000 in 2020 – a drop of more than a third.</p>
<p class="small muted">(≈ 180 words)</p>`
      },
      practice: [
        { id: 'w1-table-p1', prompt: 'The table below shows information about public transport in four cities. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.', chart: { type: 'table', title: 'Public transport in four cities (2024)', headers: ['City', 'Daily passengers (millions)', 'Metro lines', 'Average fare (USD)', '% residents using daily'], rows: [['City A', '8.2', '14', '1.10', '62%'], ['City B', '3.5', '6', '2.80', '35%'], ['City C', '5.9', '10', '0.75', '58%'], ['City D', '1.2', '2', '1.90', '18%']] } }
      ]
    },
    {
      id: 'mixed', name: 'Multiple / Mixed Charts', summary: 'Two different visuals (e.g. a line graph and a pie chart) on a related topic. You must describe both and, where possible, connect them.',
      recognise: 'Two charts of different types side by side.',
      structure: [
        ['Introduction', 'Paraphrase both charts in one or two sentences.'],
        ['Overview', 'One main feature from EACH chart.'],
        ['Body 1', 'Details of chart 1.'],
        ['Body 2', 'Details of chart 2 (link to chart 1 if logical).']
      ],
      tips: ['Keep within ~190 words – be selective: you cannot describe everything.', 'Your overview must cover both charts.', 'Use linking phrases between charts: "Turning to the pie chart...", "As for..."'],
      language: [{ h: 'Transitions', items: ['Turning to the second chart, ...', 'With regard to / As for ...', 'The pie chart reveals that ...', 'Meanwhile, the table indicates ...'] }],
      sample: {
        prompt: 'The line graph shows the number of visitors to a city museum between 2014 and 2024. The pie chart shows the age groups of the visitors in 2024.<br><br>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
        chart: { type: 'multi', charts: [{ type: 'line', title: 'Annual museum visitors (thousands)', x: ['2014', '2016', '2018', '2020', '2022', '2024'], series: [{ name: 'Visitors', data: [220, 260, 310, 90, 240, 330] }] }, { type: 'pie', title: 'Visitors by age group, 2024', pies: [{ title: '', slices: [['Under 18', 28], ['18–34', 22], ['35–54', 30], ['55+', 20]] }] }] },
        answer: `<p>The line graph illustrates the annual number of visitors to a city museum over a ten-year period from 2014, while the pie chart shows how these visitors were divided by age in 2024.</p>
<p><span class="hl">Overall,</span> visitor numbers grew over the decade despite a dramatic temporary fall in 2020, and in 2024 the museum attracted a fairly balanced mix of age groups, with 35- to 54-year-olds forming the largest group.</p>
<p>In 2014, the museum received 220,000 visitors, and this figure rose steadily to 310,000 by 2018. In 2020, however, attendance <span class="hl">plummeted</span> to just 90,000, less than a third of the 2018 level. The following years saw a strong recovery, with numbers <span class="hl">rebounding</span> to 240,000 in 2022 and reaching a high of 330,000 in 2024.</p>
<p><span class="hl">Turning to the pie chart,</span> visitors aged 35 to 54 made up 30% of the total in 2024, followed closely by under-18s at 28%. The remaining visitors were split <span class="hl">almost equally</span> between those aged 18 to 34 (22%) and those over 55 (20%).</p>
<p class="small muted">(≈ 180 words)</p>`
      },
      practice: [
        { id: 'w1-mixed-p1', prompt: 'The bar chart shows the number of new homes built in a country from 2015 to 2023, and the pie chart shows the types of homes built in 2023. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.', chart: { type: 'multi', charts: [{ type: 'bar', title: 'New homes built (thousands)', x: ['2015', '2017', '2019', '2021', '2023'], series: [{ name: 'Homes', data: [140, 155, 170, 120, 185] }] }, { type: 'pie', title: 'Types of new homes, 2023', pies: [{ title: '', slices: [['Apartments', 46], ['Terraced houses', 24], ['Detached houses', 18], ['Other', 12]] }] }] } }
      ]
    },
    {
      id: 'process', name: 'Process Diagram', summary: 'Shows the stages of how something is made (manufacturing process) or how something happens in nature (natural cycle). There are no numbers – describe the sequence.',
      recognise: 'Pictures with arrows showing steps; sometimes a cycle.',
      structure: [
        ['Introduction', 'Paraphrase: what the process is.'],
        ['Overview', 'Number of stages, start and end point, and whether it is linear or cyclical / man-made or natural.'],
        ['Body 1', 'First half of the stages, in order.'],
        ['Body 2', 'Second half of the stages, in order.']
      ],
      tips: ['Use the <b>passive voice</b> for man-made processes: "The olives are washed..."', 'Use the <b>active voice</b> for natural processes: "The larva grows..."', 'Use sequencing language: first, next, after that, once, subsequently, finally.', 'Use all the labels in the diagram, but you can change their word form (crush → crushing → crushed).'],
      language: [
        { h: 'Sequencers', items: ['First / To begin with / In the first stage', 'Next / Then / After that / Subsequently / Following this', 'Once X has been done, ... / Before being X, ...', 'Finally / In the final stage / The process ends with'] },
        { h: 'Passive verbs', items: ['is collected, is transported, is heated, is mixed, is poured', 'is filtered, is separated, is cooled, is packaged, is distributed'] }
      ],
      sample: {
        prompt: 'The diagram below shows how olive oil is produced.<br><br>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
        chart: { type: 'process', title: 'Production of olive oil', steps: [['Harvesting', 'olives picked from trees'], ['Washing', 'leaves & dirt removed'], ['Crushing', 'into a paste'], ['Mixing', '30–40 minutes'], ['Separating', 'centrifuge: oil / water / solids'], ['Filtering', ''], ['Bottling', 'stored in dark glass']] },
        answer: `<p>The diagram <span class="hl">illustrates</span> the various stages involved in the production of olive oil, from harvesting the fruit to bottling the finished product.</p>
<p><span class="hl">Overall,</span> the process consists of seven main stages, beginning with the collection of olives from trees and ending with the oil <span class="hl">being stored</span> in bottles.</p>
<p><span class="hl">In the first stage,</span> the olives <span class="hl">are picked</span> from the trees and taken to a processing plant, where they <span class="hl">are washed</span> to remove leaves and dirt. <span class="hl">Next,</span> the clean olives <span class="hl">are crushed</span> into a thick paste, which <span class="hl">is</span> then <span class="hl">mixed</span> for 30 to 40 minutes. This mixing allows tiny drops of oil to join together.</p>
<p><span class="hl">Following this,</span> the paste <span class="hl">is placed</span> in a centrifuge, a machine that spins rapidly in order to separate the oil from the water and solid material. <span class="hl">Once</span> it <span class="hl">has been separated,</span> the oil <span class="hl">is filtered</span> to remove any remaining particles. <span class="hl">Finally,</span> the oil <span class="hl">is poured</span> into dark glass bottles, which protect it from light, and it is then ready to be sold.</p>
<p class="small muted">(≈ 175 words)</p>`
      },
      practice: [
        { id: 'w1-process-p1', prompt: 'The diagram below shows how recycled paper is produced. Summarise the information by selecting and reporting the main features.', chart: { type: 'process', title: 'Production of recycled paper', steps: [['Collection', 'from homes & offices'], ['Sorting', 'by grade'], ['Pulping', 'mixed with water'], ['De-inking', 'ink removed'], ['Pressing & rolling', ''], ['Drying', 'heated rollers'], ['Cutting', 'into rolls / sheets']] } },
        { id: 'w1-process-p2', prompt: 'The diagram below shows the life cycle of a honeybee. Summarise the information by selecting and reporting the main features.', chart: { type: 'process', title: 'Life cycle of a honeybee', cycle: true, steps: [['Egg', 'laid by queen; 3 days'], ['Larva', 'fed by workers; 6 days'], ['Pupa', 'sealed in cell; 12 days'], ['Adult worker', 'lives approx. 6 weeks'], ['Queen lays eggs', '']] } }
      ]
    },
    {
      id: 'map', name: 'Map', summary: 'Usually two maps showing how a place changed over time (or a plan for future development). Describe what was added, removed, extended or converted.',
      recognise: 'Two (sometimes three) maps of the same place with different years.',
      structure: [
        ['Introduction', 'Paraphrase: the place and the years.'],
        ['Overview', 'The 2–3 most significant changes (e.g. became more residential/modern; natural areas reduced).'],
        ['Body 1', 'Changes in one area (e.g. the north) or one type of change.'],
        ['Body 2', 'Changes in another area / features that remained the same.']
      ],
      tips: ['Use the passive for changes: "A hotel was built", "The farmland was replaced by housing".', 'Use location language: in the north-east, to the west of, next to, along the coast.', 'For future plans (a proposed development), use future passive forms: "will be built", "is planned to be converted", "is set to be relocated".', 'Mention features that did not change – briefly.'],
      language: [
        { h: 'Change verbs (passive)', items: ['was built / constructed / erected', 'was demolished / knocked down / removed', 'was converted into / replaced by / turned into', 'was extended / expanded / enlarged / reduced'] },
        { h: 'Location', items: ['in the north / south-east corner', 'to the west of / adjacent to / opposite / alongside', 'on the coast / by the river / at the end of the road'] }
      ],
      sample: {
        prompt: 'The maps below show the changes that took place in a coastal village between 2000 and 2025.<br><br>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
        chart: { type: 'svg', svg: villageMaps, caption: 'Seaside village: 2000 and 2025' },
        answer: `<p>The two maps <span class="hl">illustrate</span> how a seaside village developed over the 25-year period between 2000 and 2025.</p>
<p><span class="hl">Overall,</span> the village was transformed from a small fishing and farming community into a tourist and residential area. The most noticeable changes were the construction of new housing and leisure facilities, at the expense of some natural and agricultural land.</p>
<p>In 2000, the north-east of the village was occupied by farmland, but by 2025 this <span class="hl">had been replaced by</span> a large housing estate, served by a new road <span class="hl">branching off</span> the main road to the east. <span class="hl">To the west,</span> the southern half of the forest <span class="hl">was cleared</span> to make way for a golf course, although the northern part was preserved.</p>
<p>Along the coast, a hotel <span class="hl">was built</span> on the western side of the beach, while the fishing harbour in the south-east <span class="hl">was converted into</span> a marina. The small shop beside the main road <span class="hl">was expanded</span> into a supermarket, and a car park <span class="hl">was added</span> next to it. The original houses on either side of the main road, however, <span class="hl">remained unchanged</span>.</p>
<p class="small muted">(≈ 190 words)</p>`
      },
      practice: [
        { id: 'w1-map-p1', prompt: 'The maps in the sample show a coastal village in 2000 and 2025. Without looking at the model answer, write your own description, focusing on different language (e.g. use "underwent", "made way for", "was redeveloped"). Summarise the information by selecting and reporting the main features.', chart: { type: 'svg', svg: villageMaps } }
      ]
    }
  ],

  gt: {
    intro: `
<p>In General Training Task 1 you write a <b>letter of at least 150 words</b> in about 20 minutes. The task gives a situation and <b>three bullet points</b> – you must cover all three fully. Your tone must match your relationship with the reader.</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Type</th><th>Reader</th><th>Opening</th><th>Closing</th><th>Style</th></tr>
<tr><td>Formal</td><td>Someone you don't know (company, manager, council)</td><td>Dear Sir or Madam, / Dear Mr Smith,</td><td>Yours faithfully, (Sir/Madam) / Yours sincerely, (named)</td><td>No contractions, polite indirect language, formal vocabulary</td></tr>
<tr><td>Semi-formal</td><td>Someone you know but not closely (landlord, neighbour, colleague, teacher)</td><td>Dear Mr Patel, / Dear Mrs Green,</td><td>Kind regards, / Best regards, / Yours sincerely,</td><td>Polite but friendly; some contractions acceptable</td></tr>
<tr><td>Informal</td><td>Friend or family member</td><td>Dear Sam, / Hi Sam,</td><td>Best wishes, / Love, / Take care, / See you soon,</td><td>Contractions, phrasal verbs, idioms, personal tone</td></tr>
</table></div>
<h3>Structure</h3>
<ul class="structure">
<li><b>Opening line</b>State the purpose: "I am writing to complain about..." / "I'm writing to tell you about..."</li>
<li><b>Paragraph 1</b>Bullet point 1 – with specific details (dates, names, what happened).</li>
<li><b>Paragraph 2</b>Bullet point 2.</li>
<li><b>Paragraph 3</b>Bullet point 3 – often a request or suggestion.</li>
<li><b>Closing line + sign-off</b>"I look forward to hearing from you." / "Can't wait to see you!" + your name (formal: full name).</li>
</ul>`,
    types: [
      {
        id: 'formal', name: 'Formal Letter', phrases: [
          { h: 'Purpose', items: ['I am writing to complain about / enquire about / apply for...', 'I am writing with regard to / in connection with...'] },
          { h: 'Complaining', items: ['I was extremely disappointed to discover that...', 'Unfortunately, the product did not meet my expectations.', 'This has caused me considerable inconvenience.'] },
          { h: 'Requesting', items: ['I would be grateful if you could...', 'I would appreciate it if you would...', 'Could you please let me know whether...'] },
          { h: 'Closing', items: ['I look forward to your prompt reply.', 'Thank you in advance for your assistance.', 'Please do not hesitate to contact me on...'] }
        ],
        sample: {
          prompt: 'You recently bought a piece of equipment for your kitchen but it did not work. You phoned the shop but no action was taken.<br>Write a letter to the shop manager. In your letter<br>• describe the problem with the equipment<br>• explain what happened when you phoned the shop<br>• say what you would like the manager to do<br><br>Begin your letter as follows: <i>Dear Sir or Madam,</i>',
          answer: `<p>Dear Sir or Madam,</p>
<p>I am writing to complain about a coffee machine which I purchased from your Market Street branch on 3 March, and about the poor customer service I have received since then.</p>
<p>When I used the machine for the first time, it heated the water but failed to pump it through the coffee filter. Instead, water leaked from the base onto my kitchen counter. I followed every instruction in the manual carefully, so I am confident that the fault lies with the machine itself.</p>
<p>On 5 March, I telephoned the shop and explained the problem to a member of staff, who promised that a manager would call me back within 24 hours. Despite this assurance, nobody contacted me, and when I phoned again two days later, I was told that there was no record of my previous call.</p>
<p>I would therefore be grateful if you could arrange for a full refund of £129 or, alternatively, a replacement machine to be delivered to my home at no extra cost. I have kept the receipt and the original packaging.</p>
<p>I look forward to your prompt reply.</p>
<p>Yours faithfully,<br>Daniel Okafor</p>`
        },
        practice: ['You are going to move to a new city and want to rent a flat. Write to a letting agency. In your letter: describe the type of accommodation you need; explain when you will need it; ask about the costs involved.', 'You saw an advertisement for a part-time job at a local museum. Write to the manager. In your letter: say which job you are interested in; describe your relevant experience; explain when you would be available for an interview.', 'The bus service in your area has been reduced. Write to the transport company. In your letter: describe the changes; explain how they have affected you; suggest what the company should do.']
      },
      {
        id: 'semi', name: 'Semi-formal Letter', phrases: [
          { h: 'Opening', items: ['I hope you are well.', 'I\'m writing to let you know that...', 'I\'m writing about...'] },
          { h: 'Asking politely', items: ['I was wondering if you could...', 'Would it be possible to...?', 'I\'d really appreciate it if...'] },
          { h: 'Apologising', items: ['I\'m very sorry for...', 'Please accept my apologies for...', 'I hope this hasn\'t caused you too much trouble.'] },
          { h: 'Closing', items: ['Thank you for your understanding.', 'I hope to hear from you soon.', 'Kind regards,'] }
        ],
        sample: {
          prompt: 'You are going to be away from your home for two weeks. You would like your neighbour to look after your house while you are away.<br>Write a letter to your neighbour. In your letter<br>• explain why you will be away<br>• say what you would like your neighbour to do<br>• tell them how you will thank them<br><br>Begin your letter as follows: <i>Dear Mrs Lewis,</i>',
          answer: `<p>Dear Mrs Lewis,</p>
<p>I hope you and your family are keeping well. I'm writing to ask whether you might be able to do me a small favour while I'm away later this month.</p>
<p>My company has asked me to attend a training course at our head office in Edinburgh, so I will be away from the 12th to the 26th of June. As I live alone, the house will be empty for the whole fortnight.</p>
<p>I was wondering if you could pop in every two or three days to water the plants in the kitchen and collect any post from behind the front door. It would also be a great help if you could switch a few lights on in the evening, so that the house doesn't look empty. I'll leave a spare key with you, along with my mobile number in case of any problems.</p>
<p>To thank you, I'd love to take you and Mr Lewis out for dinner at the new Italian restaurant on the high street when I get back – my treat, of course.</p>
<p>Many thanks in advance for your help.</p>
<p>Kind regards,<br>Priya</p>`
        },
        practice: ['You are unable to attend a meeting at work organised by your manager. Write a letter to your manager. In your letter: apologise and explain why you cannot attend; suggest how you could catch up on what you missed; offer to help in another way.', 'Your landlord has asked you to leave your flat earlier than expected. Write a letter to your landlord. In your letter: explain why this is difficult for you; describe your situation; suggest a solution.', 'You attended a course at a local college and found it very useful. Write a letter to the course tutor. In your letter: explain which parts were most useful; describe how you have used what you learned; suggest an idea for a future course.']
      },
      {
        id: 'informal', name: 'Informal Letter', phrases: [
          { h: 'Opening', items: ['Hi Sam! / Dear Sam,', 'Thanks so much for your letter – it was great to hear from you!', 'Sorry I haven\'t written for ages.'] },
          { h: 'Giving news', items: ['Guess what? I\'ve just...', 'You won\'t believe what happened...', 'I\'ve got some great news!'] },
          { h: 'Inviting / suggesting', items: ['Why don\'t you come over...?', 'How about...?', 'Fancy joining us?', 'Let me know if you\'re free.'] },
          { h: 'Closing', items: ['Can\'t wait to see you!', 'Write back soon.', 'Give my love to...', 'Take care, / Lots of love, / Best wishes,'] }
        ],
        sample: {
          prompt: 'A friend has offered to help you find a job in the town where he/she lives.<br>Write a letter to your friend. In your letter<br>• thank your friend for the offer<br>• describe the kind of job you are looking for<br>• say why you want to move to that town<br><br>Begin your letter as follows: <i>Dear Alex,</i>',
          answer: `<p>Dear Alex,</p>
<p>Thanks so much for your message – it was really kind of you to offer to help me find work in Bristol. You've no idea how much it means to me, especially as I don't know anyone else there!</p>
<p>As you know, I've been working as a graphic designer for about four years now, so ideally I'd love to find something similar, perhaps at a small advertising agency or a design studio. I'm not too fussy about the salary at first, but I'd prefer a full-time position. If nothing comes up in design, I'd also be happy to consider marketing roles for a while.</p>
<p>The main reason I want to move is that I'm fed up with spending two hours a day commuting here in London. Every time I've visited you, I've loved how relaxed Bristol feels, and it would be brilliant to live near the countryside and, of course, near you!</p>
<p>Let me know if you hear of anything, and I'll send you a copy of my CV this weekend.</p>
<p>Lots of love,<br>Jamie</p>`
        },
        practice: ['A friend is coming to visit your country for the first time. Write a letter to your friend. In your letter: suggest the best time of year to visit; recommend places to see; offer to help with accommodation.', 'You borrowed a book from a friend and have lost it. Write a letter to your friend. In your letter: apologise for losing the book; explain how you lost it; suggest what you will do to make up for it.', 'You recently moved to a new home. Write a letter to a friend. In your letter: describe your new home; explain why you moved; invite your friend to visit.']
      }
    ]
  }
};

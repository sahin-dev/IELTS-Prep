export const resources: { note: string; groups: { h: string; items: { name: string; url: string; desc: string }[] }[]; howToUse: string } = {
  note: 'The IELTS partners occasionally reorganise their websites. If a link has moved, go to the site\'s home page and look for "Prepare" or "Practice tests".',
  groups: [
    {
      h: 'Official IELTS partners (free)', items: [
        { name: 'IELTS.org – official test information', url: 'https://ielts.org/', desc: 'The official IELTS site run by the three test partners. Test format, scoring, band descriptors, sample questions for every section.' },
        { name: 'British Council – Take IELTS: Prepare', url: 'https://takeielts.britishcouncil.org/take-ielts/prepare', desc: 'Free practice tests (Listening, Reading, Writing, Speaking) for Academic and General Training, plus computer-delivered familiarisation tests.' },
        { name: 'British Council – Road to IELTS', url: 'https://takeielts.britishcouncil.org/take-ielts/prepare/road-to-ielts', desc: 'Official preparation course with practice activities and mock tests (a free version is available, and full access for British Council candidates).' },
        { name: 'IDP IELTS – Prepare', url: 'https://ielts.idp.com/prepare', desc: 'Free practice tests, sample questions, webinars and preparation articles from IDP.' },
        { name: 'Cambridge English – IELTS', url: 'https://www.cambridgeenglish.org/exams-and-tests/ielts/', desc: 'Information and preparation materials from Cambridge University Press & Assessment.' }
      ]
    },
    {
      h: 'Official practice books (paid)', items: [
        { name: 'Cambridge IELTS series (Academic & General Training)', url: 'https://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts', desc: 'Authentic past papers with answer keys, audio and sample writing answers with examiner comments. Use the most recent volumes – they reflect current question styles.' },
        { name: 'The Official Cambridge Guide to IELTS', url: 'https://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts', desc: 'A complete strategy guide with 8 practice tests and skill-building units.' }
      ]
    },
    {
      h: 'Free English-building resources', items: [
        { name: 'BBC Learning English', url: 'https://www.bbc.co.uk/learningenglish', desc: 'Grammar, vocabulary and pronunciation lessons – "6 Minute English" is excellent Listening practice.' },
        { name: 'BBC Sounds / BBC Radio 4', url: 'https://www.bbc.co.uk/sounds', desc: 'Talks and documentaries similar to Listening Part 4 lectures.' },
        { name: 'TED Talks', url: 'https://www.ted.com/talks', desc: 'Academic-style monologues with transcripts – ideal Part 4 practice. Pause and take notes.' },
        { name: 'Cambridge Dictionary', url: 'https://dictionary.cambridge.org/', desc: 'Pronunciation (UK & US audio), collocations and example sentences.' },
        { name: 'Ozdic Collocation Dictionary', url: 'http://www.ozdic.com/', desc: 'Find natural word combinations for Writing.' }
      ]
    }
  ],
  howToUse: `
<h3>How to use official materials with this site</h3>
<ul class="steps">
<li><b>Learn the question type here first</b> – read the strategy page and do the targeted practice set.</li>
<li><b>Do one official test section under exam conditions</b> – strict timing, no dictionary, answers written on paper.</li>
<li><b>Mark it and analyse every mistake</b>: which question type? Was it vocabulary, paraphrase, a trap, or time? Write it in an error log.</li>
<li><b>Return to the weak question type here</b> and repeat the practice; review the related vocabulary list.</li>
<li><b>For Writing</b>, compare your answer with the official sample answers and examiner comments, then rewrite one paragraph.</li>
</ul>
<div class="callout warn"><strong>Save full tests for later</strong>There are a limited number of authentic tests. Use this site's targeted practice in the first weeks and save complete official tests for the final 2–3 weeks as mock exams.</div>`
};

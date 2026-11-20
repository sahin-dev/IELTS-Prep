import type { QuestionGroup } from '@/lib/types';

export interface PronSection { id: string; title: string; html: string; practice: string[] }

export const pronunciation: { intro: string; sections: PronSection[]; exercises: QuestionGroup[] } = {
  intro: `<p>Pronunciation is 25% of your Speaking score. Examiners do <b>not</b> penalise your accent – they assess how easy you are to understand and how well you use features such as <b>word stress, sentence stress, intonation and chunking</b>. Press &#128266; to hear each example, then repeat it aloud (shadowing).</p>`,
  sections: [
    {
      id: 'word-stress', title: '1. Word stress',
      html: `<p>In English words of two or more syllables, one syllable is louder, longer and higher. Wrong stress can make a word impossible to recognise, even if every sound is correct.</p>
<div class="table-wrap"><table class="data-table plain"><tr><th>Pattern</th><th>Examples (stressed syllable in CAPITALS)</th></tr>
<tr><td>Most 2-syllable nouns & adjectives: 1st syllable</td><td>TEAcher, HAPpy, CITy, WINdow</td></tr>
<tr><td>Most 2-syllable verbs: 2nd syllable</td><td>beGIN, deCIDE, reLAX, exPLAIN</td></tr>
<tr><td>Noun vs verb pairs</td><td>a REcord / to reCORD; an INcrease / to inCREASE; a PREsent / to preSENT</td></tr>
<tr><td>-tion, -sion, -ic, -ical, -ity: stress the syllable before</td><td>eduCAtion, deCIsion, ecoNOMic, poLItical, uniVERsity</td></tr>
<tr><td>Stress moves in word families</td><td>PHOtograph → phoTOgrapher → photoGRAphic</td></tr></table></div>`,
      practice: ['photograph, photographer, photographic', 'economy, economic, economical', 'Prices increased. There was an increase in prices.', 'I want to record a video. This is a record of the meeting.']
    },
    {
      id: 'sentence-stress', title: '2. Sentence stress & weak forms',
      html: `<p>In a sentence, <b>content words</b> (nouns, main verbs, adjectives, adverbs, negatives) are stressed; <b>function words</b> (a, the, to, of, and, can, was) are usually unstressed and reduced to the weak sound /ə/ (schwa).</p>
<ul><li>I <b>WENT</b> to the <b>MAR</b>ket to <b>BUY</b> some <b>FRUIT</b>. ("to" = /tə/, "the" = /ðə/)</li>
<li>I <b>CAN</b> swim (/kən/) vs I <b>CAN'T</b> swim (/kɑːnt/ – stressed and longer).</li></ul>
<p>Use <b>contrastive stress</b> to emphasise meaning: "I didn't say <b>HE</b> took it" (someone else did) vs "I didn't say he <b>TOOK</b> it" (he borrowed it).</p>`,
      practice: ['I went to the market to buy some fruit.', 'I can swim, but I can\'t dive.', 'It was one of the best decisions I\'ve ever made.']
    },
    {
      id: 'intonation', title: '3. Intonation',
      html: `<ul><li><b>Falling</b> ↘ for statements and Wh- questions: "I live in a small TOWN↘." "Where do you WORK↘?"</li>
<li><b>Rising</b> ↗ for yes/no questions and to show you haven't finished: "Do you like it↗?"</li>
<li><b>Lists:</b> rise on each item, fall on the last: "I enjoy reading↗, cooking↗ and swimming↘."</li>
<li><b>Fall-rise</b> ↘↗ for polite disagreement or reservations: "It's a good idea↘↗... but..."</li></ul>
<p>Flat, monotone intonation sounds bored and makes ideas harder to follow – use your voice to show what is important.</p>`,
      practice: ['I enjoy reading, cooking and swimming.', 'Do you like living in the city?', 'It\'s a good idea in theory, but it\'s quite expensive.']
    },
    {
      id: 'chunking', title: '4. Chunking & pausing',
      html: `<p>Fluent speakers group words into meaningful <b>chunks</b> (thought groups) and pause between them, not in the middle of a phrase.</p>
<p class="example">When I was a child / I used to spend my summers / at my grandparents' farm, / which was about an hour / from the city.</p>
<p>Learn and practise common chunks as single units: <i>to be honest, as far as I know, on the other hand, it depends on, the thing is, at the end of the day</i>.</p>`,
      practice: ['When I was a child, I used to spend my summers at my grandparents\' farm, which was about an hour from the city.', 'To be honest, it depends on the situation.']
    },
    {
      id: 'connected', title: '5. Connected speech',
      html: `<ul><li><b>Linking consonant → vowel:</b> "turn_off" → tur-noff; "an_apple"; "pick_it_up" → pi-ki-tup</li>
<li><b>Linking /j/ and /w/:</b> "I_(y)agree"; "go_(w)out"</li>
<li><b>Elision (dropping sounds):</b> "next_door" → nex door; "last_night" → las night</li>
<li><b>Contractions</b> sound natural in speaking: I'm, I've, it's, wouldn't, I'd have</li></ul>`,
      practice: ['Turn off the light and pick it up.', 'I agree. Let\'s go out next week.', 'I\'d have come if I\'d known.']
    },
    {
      id: 'sounds', title: '6. Problem sounds & endings',
      html: `<div class="table-wrap"><table class="data-table plain"><tr><th>Sound</th><th>Minimal pairs / tips</th></tr>
<tr><td>/θ/ and /ð/ (th)</td><td>think – sink; three – tree; they – day. Put your tongue between your teeth.</td></tr>
<tr><td>/v/ and /w/</td><td>vest – west; very – wary. /v/ uses top teeth on lower lip.</td></tr>
<tr><td>/l/ and /r/</td><td>light – right; collect – correct; long – wrong.</td></tr>
<tr><td>/ɪ/ and /iː/</td><td>ship – sheep; live – leave; fill – feel. /iː/ is longer.</td></tr>
<tr><td>/æ/ and /e/</td><td>bad – bed; man – men; sat – set.</td></tr>
<tr><td>-ed endings</td><td>/t/ after voiceless sounds: work<b>ed</b>, stopp<b>ed</b>; /d/ after voiced: play<b>ed</b>, liv<b>ed</b>; /ɪd/ after t or d: want<b>ed</b>, decid<b>ed</b>.</td></tr>
<tr><td>-s endings</td><td>/s/: books, cats; /z/: dogs, plays; /ɪz/: buses, watches, changes.</td></tr>
<tr><td>Final consonants</td><td>Don't drop them: "worked" not "work"; "friends" not "frien". They carry grammar!</td></tr></table></div>`,
      practice: ['I think three of them are very well travelled.', 'Please leave the ship and live on the hill.', 'I worked, played and wanted to relax.']
    }
  ],
  exercises: [
    {
      kind: 'choice', choices: ['/t/', '/d/', '/ɪd/'], instructions: 'How is the <b>-ed</b> ending pronounced?', questions: [
        { n: 1, q: 'worked', a: '/t/', x: '/k/ is voiceless → /t/.' },
        { n: 2, q: 'decided', a: '/ɪd/', x: 'Ends in d → extra syllable /ɪd/.' },
        { n: 3, q: 'played', a: '/d/', x: 'Vowel sound (voiced) → /d/.' },
        { n: 4, q: 'wanted', a: '/ɪd/', x: 'Ends in t → /ɪd/.' },
        { n: 5, q: 'watched', a: '/t/', x: '/tʃ/ is voiceless → /t/.' },
        { n: 6, q: 'lived', a: '/d/', x: '/v/ is voiced → /d/.' }
      ]
    },
    {
      kind: 'choice', instructions: 'Which syllable is stressed?', questions: [
        { n: 7, q: 'photographer', opts: ['PHO-to-gra-pher', 'pho-TO-gra-pher', 'pho-to-GRA-pher'], a: 'B', x: 'phoTOgrapher – stress moves in word families.' },
        { n: 8, q: 'economic', opts: ['E-co-no-mic', 'e-CO-no-mic', 'e-co-NO-mic'], a: 'C', x: '-ic: stress the syllable before → ecoNOMic.' },
        { n: 9, q: 'to increase (verb)', opts: ['IN-crease', 'in-CREASE'], a: 'B', x: 'Two-syllable verbs usually stress the second syllable.' },
        { n: 10, q: 'education', opts: ['E-du-ca-tion', 'e-DU-ca-tion', 'e-du-CA-tion'], a: 'C', x: '-tion: stress the syllable before → eduCAtion.' }
      ]
    }
  ]
};

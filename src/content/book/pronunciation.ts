import type { Chapter, Reference } from '@/lib/types';

/* Part 7E: Pronunciation masterclass – five chapters with listen-and-repeat practice (page /speaking/pronunciation/[topic]).
   Model: a standard British accent, with notes on major differences in General American. The goal is intelligibility, not imitation. */

const speakingBd: Reference = { title: 'IELTS Speaking band descriptors (public version)', url: 'https://ielts.org/cdn/ielts-guides/ielts-speaking-band-descriptors.pdf', note: 'See the Pronunciation criterion: range of features, control, and how easy the speaker is to understand.' };
const books: Reference[] = [
  { title: 'Mark Hancock, English Pronunciation in Use (Intermediate) and Martin Hewings, English Pronunciation in Use (Advanced) (Cambridge University Press)', note: 'Self-study pronunciation courses with audio.' },
  { title: 'Adrian Underhill, Sound Foundations (Macmillan)', note: 'A clear, practical introduction to the sounds of English and the IPA chart.' },
  { title: 'A learner\'s dictionary with audio and IPA (Cambridge, Oxford, Longman, Collins)', note: 'Check the stress mark (ˈ) and the transcription of every new word you learn.' }
];

export interface PronChapter { title: string; lead: string; chapter: Chapter; practice: string[] }

export const pronunciationChapters: Record<string, PronChapter> = {
  /* ===================================================================== SOUNDS */
  sounds: {
    title: 'The sounds of English: IPA, vowels and consonants',
    lead: 'The 44 sounds of English, how to read the IPA in a dictionary, and the sound contrasts that most often cause misunderstanding.',
    practice: ['ship – sheep', 'full – fool', 'cat – cut – cart', 'think – sink', 'this – dis', 'light – right', 'vest – west', 'work – walk', 'bird – bed', 'coat – caught'],
    chapter: {
      intro: `
<p>English spelling is a poor guide to English sounds: <i>though, through, tough</i> and <i>cough</i> share the letters <i>-ough</i> but are pronounced differently, and the vowel sound in <i>see, sea, piece</i> and <i>receive</i> is the same. This is why dictionaries use the <b>International Phonetic Alphabet (IPA)</b>, a set of symbols in which each symbol always represents one sound.</p>
<p>Standard British English has about <b>44 sounds</b>: around 20 vowel sounds (including diphthongs) and 24 consonants. You do not need to master the IPA to do well in IELTS, but being able to read it lets you check the pronunciation of any new word – and knowing which sound contrasts your first language lacks tells you exactly what to practise. The goal throughout is <b>intelligibility</b>: being easy to understand, not sounding British or American.</p>`,
      facts: [['Sounds', 'About 44 in standard British English'], ['Vowels', '12 single vowels + 8 diphthongs'], ['Consonants', '24'], ['IPA use', 'Check any new word in a learner\'s dictionary'], ['Long vowels', 'Marked with ː (as in /iː/)'], ['Goal', 'Intelligibility, not a particular accent']],
      method: [
        { title: 'Learn to read the IPA for the vowel sounds', body: '<p>Use the table in section 1. Start with the pairs that matter most: /ɪ/–/iː/ (<i>ship–sheep</i>), /ʊ/–/uː/ (<i>full–fool</i>), /æ/–/ʌ/–/ɑː/ (<i>cat–cut–cart</i>), /ɒ/–/ɔː/ (<i>cot–caught</i>), /e/–/ɜː/ (<i>bed–bird</i>).</p>' },
        { title: 'Learn the consonants that your language lacks', body: '<p>Common difficulties: /θ/ and /ð/ (<i>think, this</i>), /v/–/w/ (<i>vest, west</i>), /l/–/r/ (<i>light, right</i>), /ʃ/–/s/ (<i>she, see</i>), /dʒ/–/j/ (<i>jet, yet</i>), final consonants and consonant clusters (<i>texts, months</i>).</p>' },
        { title: 'Practise with minimal pairs', body: '<p>A minimal pair is two words that differ in only one sound (<i>ship/sheep</i>). Listen, repeat, then record yourself saying a random sequence and check whether a listener can tell which word you said.</p>' },
        { title: 'Check every new word in a dictionary', body: '<p>Look at the transcription and the stress mark (ˈ), and listen to the audio. Write the stress and any tricky sounds in your vocabulary notebook.</p>' },
        { title: 'Prioritise the sounds that change meaning', body: '<p>A slightly different vowel in <i>hotel</i> rarely matters; confusing <i>live</i> and <i>leave</i>, or dropping the final /s/ in <i>costs</i>, can change meaning. Work on those first.</p>' }
      ],
      sections: [
        {
          id: 'vowels', title: 'The vowel sounds',
          html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Symbol</th><th>Example</th><th>Symbol</th><th>Example</th></tr>
<tr><td>/ɪ/</td><td>sh<b>i</b>p, b<b>i</b>t</td><td>/iː/</td><td>sh<b>ee</b>p, b<b>ea</b>t</td></tr>
<tr><td>/e/</td><td>b<b>e</b>d, s<b>ai</b>d</td><td>/æ/</td><td>c<b>a</b>t, b<b>a</b>d</td></tr>
<tr><td>/ʌ/</td><td>c<b>u</b>t, l<b>o</b>ve</td><td>/ɑː/</td><td>c<b>ar</b>t, f<b>a</b>ther</td></tr>
<tr><td>/ɒ/</td><td>h<b>o</b>t, w<b>a</b>tch (British)</td><td>/ɔː/</td><td>c<b>augh</b>t, w<b>al</b>k, d<b>oor</b></td></tr>
<tr><td>/ʊ/</td><td>f<b>u</b>ll, b<b>oo</b>k</td><td>/uː/</td><td>f<b>oo</b>l, bl<b>ue</b></td></tr>
<tr><td>/ə/ (schwa)</td><td><b>a</b>bout, teach<b>er</b></td><td>/ɜː/</td><td>b<b>ir</b>d, w<b>or</b>k</td></tr>
</table></div>
<p><b>Diphthongs</b> (two vowel sounds glided together): /eɪ/ <i>day</i>, /aɪ/ <i>my</i>, /ɔɪ/ <i>boy</i>, /əʊ/ <i>go</i> (American /oʊ/), /aʊ/ <i>now</i>, /ɪə/ <i>here</i>, /eə/ <i>hair</i>, /ʊə/ <i>tour</i> (often /ɔː/ today).</p>
<p>The <b>schwa /ə/</b> is the most common sound in English. It appears in unstressed syllables (<i>a</i>bout, teach<i>er</i>, comf<i>or</i>table) and in weak forms of small words – see <a href="/speaking/pronunciation/connected-speech">Connected speech</a>.</p>`
        },
        {
          id: 'consonants', title: 'The consonant sounds',
          html: `
<div class="table-wrap"><table class="data-table plain">
<tr><th>Group</th><th>Symbols and examples</th></tr>
<tr><td>Pairs (voiceless / voiced)</td><td>/p/ pen – /b/ ben · /t/ ten – /d/ den · /k/ cap – /g/ gap · /f/ fan – /v/ van · /θ/ thin – /ð/ this · /s/ sue – /z/ zoo · /ʃ/ she – /ʒ/ measure · /tʃ/ chin – /dʒ/ gin</td></tr>
<tr><td>Nasals</td><td>/m/ man · /n/ no · /ŋ/ sing</td></tr>
<tr><td>Others</td><td>/h/ hat · /l/ leg · /r/ red · /j/ yes · /w/ wet</td></tr>
</table></div>
<p><b>Voiced and voiceless.</b> Put your fingers on your throat and say /s/ then /z/: you feel vibration only on /z/. Final voicing matters for meaning (<i>price</i>/<i>prize</i>, <i>half</i>/<i>have</i>) and for the endings <i>-s</i> and <i>-ed</i> (see <a href="/grammar/present-simple">Present simple</a> and <a href="/grammar/past-simple">Past simple</a>).</p>
<p><b>British and American /r/.</b> In standard British English, /r/ is pronounced only before a vowel (<i>red, very</i>) – not in <i>car</i> or <i>hard</i>. In General American, it is pronounced in all positions. Both are correct.</p>`
        },
        {
          id: 'band-impact', title: 'How individual sounds affect your band',
          html: `<p>The Pronunciation criterion is about how easily you are understood and the range of features you control. Individual sounds matter when errors make words hard to recognise or change their meaning; a mild accent that does not reduce clarity is not penalised. Stress, rhythm and intonation (the next chapters) usually affect intelligibility as much as individual sounds.</p>`
        }
      ],
      dos: ['Learn the IPA vowels and the consonants your language lacks.', 'Practise minimal pairs and record yourself.', 'Check new words in a learner\'s dictionary.', 'Pronounce final consonants and endings clearly.'],
      donts: ['Don\'t try to copy an accent at the expense of clarity.', 'Don\'t rely on spelling to guess pronunciation.', 'Don\'t drop final -s and -ed sounds.'],
      careful: [
        { title: '/θ/ and /ð/', body: '<p>Many learners replace them with /s, z/, /t, d/ or /f, v/. Put the tip of your tongue lightly between your teeth and blow gently.</p>', example: '<i>three</i> (not <i>tree</i> or <i>free</i>) · <i>this</i> (not <i>dis</i>)' },
        { title: 'Inserted vowels', body: '<p>Some speakers add a vowel to break up consonant clusters (<i>es-school, sport-o</i>). Practise clusters slowly: <i>s-c-hool → school</i>.</p>' }
      ],
      exercises: {
        id: 'ch-pron-sounds', title: 'Chapter exercises: sounds',
        groups: [{ kind: 'choice', instructions: 'Choose the correct answer, <b>A, B or C</b>.', questions: [
          { n: 1, q: 'Which word contains /iː/?', opts: ['ship', 'sheep', 'shop'], a: 'B', x: '<i>sheep</i> /ʃiːp/ – long /iː/; <i>ship</i> has short /ɪ/.' },
          { n: 2, q: 'Which word has the same vowel as "bird"?', opts: ['work', 'walk', 'ward'], a: 'A', x: '<i>work</i> /wɜːk/ has the same vowel as <i>bird</i> /bɜːd/; <i>walk</i> and <i>ward</i> have /ɔː/.' },
          { n: 3, q: 'The most common vowel sound in English is…', opts: ['/æ/', '/ə/ (schwa)', '/iː/'], a: 'B', x: 'The schwa appears in most unstressed syllables.' },
          { n: 4, q: 'Which pair differs only in voicing?', opts: ['price – prize', 'price – rice', 'prize – price – praise'], a: 'A', x: '/s/ (voiceless) vs /z/ (voiced).' },
          { n: 5, q: 'In standard British English, the "r" in "car" is…', opts: ['pronounced strongly', 'not pronounced', 'pronounced as /w/'], a: 'B', x: 'British English is non-rhotic; American English pronounces it. Both are correct.' }
        ] }]
      },
      checklist: ['I can read the IPA vowel symbols.', 'I know which sounds my first language lacks.', 'I practise minimal pairs with recordings.', 'I check new words in a dictionary.'],
      summary: ['English has about 44 sounds; the IPA shows each one unambiguously.', 'Work first on contrasts that change meaning.', 'Final consonants and endings matter.', 'Aim for intelligibility, not an accent.'],
      references: [speakingBd, ...books]
    }
  },

  /* ===================================================================== WORD STRESS */
  'word-stress': {
    title: 'Word stress',
    lead: 'Which syllable to stress, the patterns that help you predict it, and why stress errors make words hard to recognise.',
    practice: ['PHOtograph – phoTOgraphy – photoGRAPHic', 'ECONomy – ecoNOMic', 'a PREsent – to preSENT', 'an INcrease – to inCREASE', 'enVIronment', 'deVELopment', 'comMUnicate – communiCAtion', 'TECHnology', 'comFORTable', 'inTERESting'],
    chapter: {
      intro: `
<p>In every English word of two or more syllables, one syllable is <b>stressed</b>: it is louder, longer and higher in pitch, and its vowel is pronounced fully. The other syllables are weaker, and their vowels often reduce to schwa /ə/. In <i>photograph</i>, the first syllable is stressed: <b>PHO</b>tograph /ˈfəʊtəɡrɑːf/. In <i>photography</i>, the stress moves: pho<b>TO</b>graphy /fəˈtɒɡrəfi/.</p>
<p>Word stress is one of the most important features for intelligibility. Listeners recognise words largely by their stress pattern; a word with every sound correct but the stress in the wrong place can be harder to understand than one with a slightly wrong vowel. It is also a feature the Pronunciation descriptors mention explicitly. The good news is that stress follows patterns, and most of them can be learned.</p>`,
      facts: [['What', 'One syllable louder, longer, higher'], ['Unstressed vowels', 'Often reduce to schwa /ə/'], ['Dictionary mark', 'ˈ before the stressed syllable'], ['Two-syllable nouns', 'Usually first syllable: TAble, PROject'], ['Two-syllable verbs', 'Often second: deCIDE, reCORD'], ['Suffix rules', '-tion, -ic, -ity, -ial move the stress']],
      method: [
        { title: 'Check the stress mark for every new word', body: '<p>In the IPA, ˈ comes before the stressed syllable: /ɪnˈvaɪrənmənt/ = en<b>VI</b>ronment. Mark it in your notes (capital letters or underlining).</p>' },
        { title: 'Use the noun/verb pattern for two-syllable words', body: '<p>Many words are nouns with first-syllable stress and verbs with second-syllable stress: <i>a <b>RE</b>cord / to re<b>CORD</b>, an <b>IN</b>crease / to in<b>CREASE</b>, a <b>PRE</b>sent / to pre<b>SENT</b>, an <b>OB</b>ject / to ob<b>JECT</b></i>.</p>' },
        { title: 'Use suffix rules for longer words', body: '<p>Stress usually falls on the syllable <b>before</b> <i>-tion, -sion, -ic, -ical, -ity, -ial, -ian, -ious</i>: <i>communi<b>CA</b>tion, eco<b>NO</b>mic, elec<b>TRI</b>city, ma<b>TER</b>ial, poli<b>TI</b>cian</i>.</p>' },
        { title: 'Reduce the unstressed vowels', body: '<p>Saying every syllable with equal strength (<i>com-for-ta-ble</i>) sounds unnatural. Stress one syllable and weaken the others: <b>COMF</b>tə-bl /ˈkʌmftəbl/.</p>' },
        { title: 'Practise word families together', body: '<p><i><b>PHO</b>tograph – pho<b>TO</b>graphy – photo<b>GRA</b>phic</i>; <i><b>E</b>conomy… </i> – see section 1. Saying the family aloud trains you to shift the stress.</p>' }
      ],
      sections: [
        {
          id: 'families', title: 'Stress shifts in word families',
          html: `
<div class="table-wrap"><table class="data-table plain">
<tr><th>Word</th><th>Related word</th><th>Related word</th></tr>
<tr><td><b>PHO</b>tograph</td><td>pho<b>TO</b>graphy</td><td>photo<b>GRA</b>phic</td></tr>
<tr><td>e<b>CON</b>omy</td><td>eco<b>NOM</b>ic</td><td>e<b>CON</b>omist</td></tr>
<tr><td><b>PO</b>litics</td><td>po<b>LI</b>tical</td><td>poli<b>TI</b>cian</td></tr>
<tr><td>e<b>LEC</b>tric</td><td>elec<b>TRI</b>city</td><td>elec<b>TRI</b>cian</td></tr>
<tr><td>de<b>VE</b>lop</td><td>de<b>VE</b>lopment</td><td>devel<b>OP</b>mental</td></tr>
<tr><td><b>A</b>nalyse</td><td>a<b>NA</b>lysis</td><td>ana<b>LY</b>tical</td></tr>
</table></div>
<p>These are exactly the academic words you use in Part 3 – practise them aloud as families.</p>`
        },
        {
          id: 'compounds', title: 'Compound nouns and phrases',
          html: `<p>Compound nouns usually stress the first part: <i><b>BUS</b> stop, <b>CAR</b> park, <b>SMART</b>phone, <b>HOME</b>work</i>. Adjective + noun phrases usually stress the noun: <i>a black <b>BIRD</b></i> (any bird that is black) vs <i>a <b>BLACK</b>bird</i> (a species). This contrast helps listeners identify meaning.</p>`
        },
        { id: 'band-impact', title: 'How word stress affects your band', html: '<p>The descriptors refer to the use of features such as word stress, and to how much effort a listener needs. Misplaced stress on common academic words (<i>de-ve-LOP-ment, e-co-NO-my</i>) is one of the most frequent causes of listener effort. Fixing stress on the 50 words you use most is a high-value, low-cost improvement.</p>' }
      ],
      dos: ['Mark stress on every new word.', 'Use noun/verb and suffix patterns.', 'Weaken unstressed syllables.', 'Practise word families aloud.'],
      donts: ['Don\'t stress every syllable equally.', 'Don\'t guess stress from your first language.', 'Don\'t ignore stress on long academic words.'],
      careful: [{ title: 'Commonly mis-stressed words', body: '<p>Check these: <i>COMfortable, VEGetable, inTERESting, deVELopment, enVIronment, PHOtograph, ecoNOMic, TECHnology, iDEa, hoTEL, deTERmine, aDULT (British; AmE often Adult)</i>.</p>' }],
      exercises: {
        id: 'ch-pron-word-stress', title: 'Chapter exercises: word stress',
        groups: [{ kind: 'choice', instructions: 'Choose the correct stress (CAPITALS = stressed syllable), <b>A, B or C</b>.', questions: [
          { n: 1, q: 'photography', opts: ['PHOtography', 'phoTOgraphy', 'photoGRAphy'], a: 'B', x: '/fəˈtɒɡrəfi/.' },
          { n: 2, q: 'economic', opts: ['ECOnomic', 'eCOnomic', 'ecoNOmic'], a: 'C', x: 'Stress before <i>-ic</i>: ecoNOMic.' },
          { n: 3, q: 'to increase (verb)', opts: ['INcrease', 'inCREASE', 'both are equally common'], a: 'B', x: 'Verb: second syllable; noun: first.' },
          { n: 4, q: 'communication', opts: ['COMmunication', 'comMUnication', 'communiCAtion'], a: 'C', x: 'Stress before <i>-tion</i>.' },
          { n: 5, q: 'environment', opts: ['ENvironment', 'enVIronment', 'enviRONment'], a: 'B', x: '/ɪnˈvaɪrənmənt/.' }
        ] }]
      },
      checklist: ['I mark stress on new words.', 'I know the noun/verb and suffix patterns.', 'I can say common word families with the correct stress shifts.'],
      summary: ['Every multi-syllable word has one stressed syllable.', 'Stress is a key to word recognition.', 'Noun/verb pairs and suffixes follow patterns.', 'Weaken the unstressed syllables.'],
      references: [speakingBd, ...books]
    }
  },

  /* ===================================================================== SENTENCE STRESS, RHYTHM, INTONATION */
  'sentence-stress': {
    title: 'Sentence stress, rhythm and intonation',
    lead: 'Stressing the words that carry meaning, the rhythm of English, and how pitch shows questions, lists, contrast and attitude.',
    practice: ['I WANTED to GO, but I DIDN\'T have TIME.', 'It wasn\'t MY idea – it was HERS.', 'Would you like TEA or COFFEE?', 'I like reading, swimming and travelling.', 'Do you live HERE?', 'Where do you WORK?', 'Actually, I think it depends on the situation.', 'It\'s not the COST that worries me, it\'s the TIME.'],
    chapter: {
      intro: `
<p>English is a <b>stress-timed</b> language: in a sentence, the stressed syllables come at roughly regular intervals, and the unstressed syllables between them are squeezed together. Content words – nouns, main verbs, adjectives, adverbs – are normally stressed; function words – articles, auxiliaries, prepositions, pronouns – are normally unstressed. <i>I <b>WANT</b>ed to <b>GO</b> to the <b>PARK</b></i> has three strong beats.</p>
<p>On top of rhythm, speakers use <b>intonation</b> – the rise and fall of pitch – to show what kind of utterance they are making (a statement, a question, a list), what is new or important, and their attitude. In Speaking, stress and intonation make you easier to follow: the listener can hear your key points, your contrasts and where one idea ends and the next begins. A flat, evenly stressed delivery makes even accurate English tiring to listen to.</p>`,
      facts: [['Rhythm', 'Stress-timed: strong beats at regular intervals'], ['Stressed', 'Content words: nouns, verbs, adjectives, adverbs'], ['Unstressed', 'Function words: a, the, to, of, can, was…'], ['Falling tone', 'Statements, wh-questions, finality'], ['Rising tone', 'Yes/no questions, uncertainty, unfinished lists'], ['Contrastive stress', 'It wasn\'t MY idea – it was HERS.']],
      method: [
        { title: 'Stress the content words', body: '<p>Underline the nouns, main verbs, adjectives and adverbs in a sentence and give them the beats.</p>', example: '<i>The <b>RENT</b> in the <b>CEN</b>tre is <b>MUCH</b> too <b>HIGH</b>.</i>' },
        { title: 'Put the main stress on the new or important information', body: '<p>In each "thought group", one word carries the strongest stress – usually the last content word, unless you are contrasting.</p>' },
        { title: 'Use contrastive stress to correct or compare', body: '<p>Move the main stress to the word you are contrasting.</p>', example: '<i>I didn\'t say it was <b>EXPENSIVE</b> – I said it was <b>OVERPRICED</b>.</i>' },
        { title: 'Use falling intonation for statements and wh-questions', body: '<p>A clear fall at the end signals that your point is complete. Many learners rise at the end of statements, which sounds uncertain.</p>' },
        { title: 'Use rising intonation for yes/no questions and unfinished lists', body: '<p><i>Do you live <b>here</b>?↗</i> · <i>reading↗, swimming↗ and travelling↘</i>.</p>' },
        { title: 'Divide long answers into thought groups', body: '<p>Pause briefly between groups of words that belong together (chunking). This helps the listener and gives you thinking time.</p>', example: '<i>In my city | most people commute by metro | because the roads | are always congested.</i>' }
      ],
      sections: [
        {
          id: 'intonation', title: 'Intonation patterns',
          html: `
<div class="table-wrap"><table class="data-table">
<tr><th>Pattern</th><th>Use</th><th>Example</th></tr>
<tr><td>Fall ↘</td><td>Statements; wh-questions; finished ideas</td><td><i>I live in Lagos.↘ Where do you work?↘</i></td></tr>
<tr><td>Rise ↗</td><td>Yes/no questions; checking; unfinished lists</td><td><i>Is it far?↗ Sorry, the library?↗</i></td></tr>
<tr><td>Fall–rise ↘↗</td><td>Partial agreement, reservation, "but…"</td><td><i>Well, it's cheap↘↗ (but it isn't very good).</i></td></tr>
<tr><td>Choice question</td><td>Rise on the first option, fall on the last</td><td><i>Tea↗ or coffee?↘</i></td></tr>
</table></div>`
        },
        { id: 'band-impact', title: 'How stress and intonation affect your band', html: '<p>The Pronunciation descriptors refer to the use of a range of features – including sentence stress, rhythm, intonation and chunking – and to how they support meaning. At Band 7 and above, speakers use these features to make their message easy to follow; flat or misplaced stress and intonation are typical at lower bands even when individual sounds are clear.</p>' }
      ],
      dos: ['Stress content words and weaken function words.', 'Put main stress on new or contrasted information.', 'Fall at the end of statements.', 'Chunk long answers into thought groups.'],
      donts: ['Don\'t give every word equal stress.', 'Don\'t rise at the end of every statement.', 'Don\'t speak in one long unbroken stream.'],
      careful: [{ title: 'Over-stressing function words', body: '<p>Stressing <i>to, of, the, and</i> makes speech sound robotic and hides your key words.</p>' }],
      exercises: {
        id: 'ch-pron-sentence-stress', title: 'Chapter exercises: sentence stress and intonation',
        groups: [{ kind: 'choice', instructions: 'Choose the correct answer, <b>A, B or C</b>.', questions: [
          { n: 1, q: 'Which words are normally stressed in "I went to the market on Saturday"?', opts: ['I, to, the, on', 'went, market, Saturday', 'every word equally'], a: 'B', x: 'Content words carry stress.' },
          { n: 2, q: '"It wasn\'t MY idea." The stress on MY shows…', opts: ['a question', 'a contrast with someone else', 'anger only'], a: 'B', x: 'Contrastive stress.' },
          { n: 3, q: 'Intonation at the end of "Where do you work?" is usually…', opts: ['falling', 'rising', 'flat'], a: 'A', x: 'Wh-questions usually fall.' },
          { n: 4, q: 'Intonation at the end of "Do you like it?" is usually…', opts: ['falling', 'rising', 'flat'], a: 'B', x: 'Yes/no questions usually rise.' }
        ] }]
      },
      checklist: ['I stress content words.', 'I use contrastive stress.', 'I use falling and rising intonation appropriately.', 'I chunk my answers.'],
      summary: ['English rhythm is stress-timed: content words get the beats.', 'Main stress marks new or contrasted information.', 'Falls for statements and wh-questions; rises for yes/no questions and lists.', 'Chunking makes long answers easy to follow.'],
      references: [speakingBd, ...books]
    }
  },

  /* ===================================================================== CONNECTED SPEECH */
  'connected-speech': {
    title: 'Connected speech: linking, weak forms and elision',
    lead: 'How words join together in natural speech – essential for Listening and for fluent, natural Speaking.',
    practice: ['an_apple · turn_off · pick_it_up', 'I\'m going to → I\'m gonna (informal)', 'What do you want to do?', 'fish and chips → fish \'n\' chips', 'next week → nex\' week', 'Did you eat yet?', 'go_on → go(w)on · see_it → see(y)it', 'It was a lot of fun.'],
    chapter: {
      intro: `
<p>In natural speech, words are not pronounced separately like items in a list. They join together: <i>pick it up</i> sounds like <i>pi-ki-tup</i>; <i>fish and chips</i> becomes <i>fish 'n' chips</i>; <i>next week</i> loses its /t/. These processes – <b>linking</b>, <b>weak forms</b>, <b>elision</b> and <b>assimilation</b> – are called <b>connected speech</b>.</p>
<p>Connected speech matters twice in IELTS. In <b>Listening</b>, it is a major reason why candidates fail to recognise words they know: the recording does not say <i>what - do - you - want</i>, it says /wɒdʒəwɒnt/. In <b>Speaking</b>, a moderate use of linking and weak forms makes you sound fluent and natural, while pronouncing every word separately and in full makes speech sound slow and mechanical. You do not need to copy every feature, but you must be able to <i>understand</i> them all.</p>`,
      facts: [['Linking', 'consonant + vowel join: turn_off'], ['Weak forms', 'small words reduce: to /tə/, of /əv/, and /ən/'], ['Elision', 'sounds disappear: next week → nex\' week'], ['Assimilation', 'sounds change: ten boys → tem boys'], ['Intrusion', '/j/, /w/, /r/ inserted between vowels'], ['IELTS', 'Recognise all; use moderately']],
      method: [
        { title: 'Link consonants to following vowels', body: '<p>A word ending in a consonant joins to a word beginning with a vowel: <i>an_apple, turn_off, look_at_it</i>.</p>' },
        { title: 'Use weak forms for unstressed function words', body: '<p><i>to</i> /tə/, <i>for</i> /fə/, <i>of</i> /əv/, <i>and</i> /ən/, <i>can</i> /kən/, <i>was</i> /wəz/, <i>them</i> /ðəm/. Use the strong form only when the word is stressed or at the end: <i>What are you looking <b>at</b>?</i></p>', example: '<i>I was going to call you.</i> → /aɪ wəz ɡəʊɪŋ tə kɔːl jə/' },
        { title: 'Recognise elision', body: '<p>/t/ and /d/ often disappear between consonants: <i>nex(t) week, las(t) night, han(d)bag, san(d)wich</i>.</p>' },
        { title: 'Recognise assimilation', body: '<p>Sounds change to be like their neighbours: <i>ten boys</i> → /tem bɔɪz/; <i>did you</i> → /dɪdʒuː/; <i>would you</i> → /wʊdʒuː/.</p>' },
        { title: 'Train your ear with dictation', body: '<p>Listen to short sentences and write them exactly. Compare with the transcript and note which connected-speech features hid the words. The <a href="/practice/drills">dictation drills</a> are designed for this.</p>' }
      ],
      sections: [
        {
          id: 'weak', title: 'Common weak forms',
          html: `
<div class="table-wrap"><table class="data-table plain">
<tr><th>Word</th><th>Strong</th><th>Weak</th><th>Example</th></tr>
<tr><td>to</td><td>/tuː/</td><td>/tə/</td><td><i>I want <b>to</b> go.</i></td></tr>
<tr><td>of</td><td>/ɒv/</td><td>/əv/, /ə/</td><td><i>a cup <b>of</b> tea</i></td></tr>
<tr><td>and</td><td>/ænd/</td><td>/ən/, /n/</td><td><i>salt <b>and</b> pepper</i></td></tr>
<tr><td>can</td><td>/kæn/</td><td>/kən/</td><td><i>I <b>can</b> swim.</i> (but <i>Yes, I <b>can</b>.</i> – strong)</td></tr>
<tr><td>was / were</td><td>/wɒz/ /wɜː/</td><td>/wəz/ /wə/</td><td><i>It <b>was</b> late.</i></td></tr>
<tr><td>for</td><td>/fɔː/</td><td>/fə/</td><td><i>a present <b>for</b> you</i></td></tr>
</table></div>
<p>Note: <i>can</i> (/kən/) and <i>can't</i> (/kɑːnt/, with a full vowel) are distinguished mainly by the vowel and stress, not by the /t/ – a classic Listening challenge.</p>`
        },
        { id: 'band-impact', title: 'How connected speech affects your band', html: '<p>In Speaking, appropriate linking and weak forms contribute to the natural rhythm the higher Pronunciation bands describe, and help fluency. In Listening, the ability to decode connected speech is behind many correct answers in Parts 3 and 4, where speech is fastest.</p>' }
      ],
      dos: ['Link consonants to vowels.', 'Use weak forms for unstressed small words.', 'Practise dictation to train recognition.', 'Use strong forms when a small word is stressed.'],
      donts: ['Don\'t pronounce every word separately in full.', 'Don\'t over-reduce until you are unclear.', 'Don\'t write informal forms like "gonna" in Writing.'],
      careful: [{ title: 'Natural, not exaggerated', body: '<p>Use connected speech moderately. Clarity comes first; heavy reduction can make you harder to understand.</p>' }],
      exercises: {
        id: 'ch-pron-connected', title: 'Chapter exercises: connected speech',
        groups: [{ kind: 'choice', instructions: 'Choose the correct answer, <b>A, B or C</b>.', questions: [
          { n: 1, q: 'In "a cup of tea", "of" is usually pronounced…', opts: ['/ɒv/ (strong)', '/əv/ or /ə/ (weak)', 'silent and with a /f/'], a: 'B', x: 'Weak form.' },
          { n: 2, q: '"next week" often sounds like…', opts: ['nex\' week (the /t/ disappears)', 'next-a week', 'neck week'], a: 'A', x: 'Elision of /t/ between consonants.' },
          { n: 3, q: '"Did you" often sounds like…', opts: ['/dɪd juː/ always', '/dɪdʒuː/', '/dɪ juː/'], a: 'B', x: 'Assimilation: /d/ + /j/ → /dʒ/.' },
          { n: 4, q: 'In "I can swim", "can" is…', opts: ['strong /kæn/', 'weak /kən/', 'silent'], a: 'B', x: 'Unstressed → weak.' }
        ] }]
      },
      checklist: ['I can recognise linking, weak forms, elision and assimilation.', 'I use linking and weak forms moderately.', 'I practise dictation regularly.'],
      summary: ['Connected speech joins, weakens, drops and changes sounds.', 'Recognising it is essential for Listening.', 'Moderate use makes Speaking natural.'],
      references: [speakingBd, ...books, { title: 'In this book: Dictation drills', url: '/practice/drills' }]
    }
  },

  /* ===================================================================== INTELLIGIBILITY */
  intelligibility: {
    title: 'Intelligibility and common pronunciation difficulties',
    lead: 'What "easy to understand" means, the difficulties typical of different first languages, and a practice routine.',
    practice: ['I think three things are important.', 'She works in a hospital.', 'I lived there for six months.', 'The costs have increased.', 'It\'s a very interesting question.', 'Very well, thank you.', 'Those clothes are comfortable.', 'The world is changing quickly.'],
    chapter: {
      intro: `
<p>The aim of pronunciation work for IELTS is <b>intelligibility</b>: speaking so that a listener understands you easily, without strain. The Speaking descriptors reflect this: they describe how much effort the listener needs, how well you control the features of English pronunciation, and how far an accent affects understanding. No particular accent is required. Many highly successful candidates have clear first-language accents.</p>
<p>Different first languages create different, predictable difficulties – a missing sound, a habit of adding vowels, syllable-timed rhythm. This chapter lists the most common ones, explains how to diagnose your own, and gives a weekly routine to improve them.</p>`,
      facts: [['Goal', 'Easy to understand, not accent-free'], ['Biggest factors', 'Word stress, sentence stress, key sound contrasts, endings, pace'], ['Diagnosis', 'Record, listen, ask others'], ['Practice', 'Shadowing, minimal pairs, reading aloud'], ['Pace', 'Clear and steady beats fast'], ['Time', '10 minutes a day']],
      method: [
        { title: 'Record yourself and listen critically', body: '<p>Record a 2-minute Part 2 answer. Listen for words a stranger might not catch. Better: ask someone who does not share your first language to note any words they could not understand.</p>' },
        { title: 'Identify your two biggest problems', body: '<p>Use section 1 to see typical difficulties for your language background. Choose the two that most affect intelligibility.</p>' },
        { title: 'Practise with shadowing', body: '<p>Play a short recording, then speak along with it, copying rhythm, stress and intonation. Start with slow speech; build up.</p>' },
        { title: 'Control your pace', body: '<p>Nervous candidates often speak too fast. A steady pace with clear stressed syllables is easier to understand and gives you time to think.</p>' },
        { title: 'Re-record weekly', body: '<p>Compare with your first recording. Improvement in pronunciation is gradual and easiest to see over weeks.</p>' }
      ],
      sections: [
        {
          id: 'difficulties', title: 'Common difficulties (general tendencies)',
          html: `
<p>These are tendencies, not rules – every speaker is different.</p>
<div class="table-wrap"><table class="data-table">
<tr><th>Difficulty</th><th>Often found among speakers of…</th><th>Practice focus</th></tr>
<tr><td>/θ/, /ð/ replaced by /s, z/, /t, d/ or /f, v/</td><td>Many languages (e.g. French, German, Chinese, Arabic, Turkish)</td><td>Tongue between teeth: <i>think, this, three</i></td></tr>
<tr><td>/v/ and /w/ confused</td><td>e.g. Hindi, German, some Chinese varieties</td><td><i>vest–west, very well</i></td></tr>
<tr><td>/l/ and /r/ confused</td><td>e.g. Japanese, Korean, some Chinese varieties</td><td><i>light–right, collect–correct</i></td></tr>
<tr><td>/p/ and /b/, /f/ and /p/</td><td>e.g. Arabic (/p/), some Philippine and Korean speakers</td><td><i>pen–ben, coffee–copy</i></td></tr>
<tr><td>Extra vowels in clusters</td><td>e.g. Spanish (<i>es-school</i>), Japanese, Persian, Hindi</td><td>Clusters slowly: <i>school, sport, strong</i></td></tr>
<tr><td>Dropped final consonants and endings</td><td>e.g. Vietnamese, Chinese, Thai</td><td>Endings: <i>works, lived, costs</i></td></tr>
<tr><td>Syllable-timed rhythm (all syllables equal)</td><td>e.g. Spanish, French, Italian, Turkish, many Asian languages</td><td>Stress content words, weaken function words</td></tr>
<tr><td>Short and long vowels merged</td><td>e.g. Spanish, Italian, Arabic, many others</td><td><i>ship–sheep, full–fool, live–leave</i></td></tr>
</table></div>`
        },
        { id: 'band-impact', title: 'How intelligibility affects your band', html: '<p>The Pronunciation criterion moves from speech that causes the listener frequent difficulty (lower bands), through speech that is generally understood with some effort, to speech that is easy to understand throughout with flexible use of features (Bands 8–9). Improving the two features that most reduce your intelligibility is usually worth more than polishing many minor ones.</p>' }
      ],
      dos: ['Record yourself regularly.', 'Fix the two features that most affect intelligibility.', 'Shadow short recordings daily.', 'Keep a steady pace.'],
      donts: ['Don\'t try to change your accent completely.', 'Don\'t speed up when nervous.', 'Don\'t practise only individual sounds – include stress and rhythm.'],
      careful: [{ title: 'Accent ≠ score', body: '<p>Examiners assess intelligibility and control of features, not accent. A clear Nigerian, Indian, Spanish or Chinese accent can score highly.</p>' }],
      exercises: {
        id: 'ch-pron-intelligibility', title: 'Chapter exercises: intelligibility',
        groups: [{ kind: 'choice', instructions: 'Choose the best answer, <b>A, B or C</b>.', questions: [
          { n: 1, q: 'The aim of pronunciation practice for IELTS is…', opts: ['to sound British', 'to be easy to understand', 'to speak as fast as possible'], a: 'B', x: 'Intelligibility.' },
          { n: 2, q: 'The best way to diagnose your problems is…', opts: ['reading grammar books', 'recording yourself and asking listeners', 'learning more vocabulary'], a: 'B', x: 'Hearing yourself as others do.' },
          { n: 3, q: 'Speaking very fast in the exam usually…', opts: ['raises the Pronunciation band', 'reduces clarity', 'has no effect'], a: 'B', x: 'Clarity and steady pace help intelligibility.' }
        ] }]
      },
      checklist: ['I have recorded and analysed my speech.', 'I know my two main pronunciation problems.', 'I shadow short recordings regularly.'],
      summary: ['Intelligibility, not accent, is the goal.', 'First languages create predictable difficulties.', 'Diagnose, target two features, shadow, re-record.'],
      references: [speakingBd, ...books]
    }
  }
};

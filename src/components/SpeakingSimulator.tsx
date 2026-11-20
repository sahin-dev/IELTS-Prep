'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { CueCard } from '@/lib/types';
import { speak, stopSpeech } from '@/lib/tts';
import { Activity, Store } from '@/lib/storage';
import { fmtTime } from '@/lib/hooks';

type Step =
  | { t: 'q' | 'say'; part: number; text: string }
  | { t: 'prep' | 'talk'; part: 2; card: CueCard }
  | { t: 'end'; part: 0 };
type Mode = 'full' | 'p1' | 'p2' | 'p3';

const shuffle = <T,>(a: T[]) => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };

function buildSteps(mode: Mode, topics: { topic: string; qs: string[] }[], card: CueCard): Step[] {
  const steps: Step[] = [];
  if (mode === 'full' || mode === 'p1') {
    steps.push({ t: 'q', part: 1, text: 'Good morning. Can you tell me your full name, please? And what shall I call you?' });
    const work = topics[0];
    steps.push({ t: 'q', part: 1, text: 'Let\'s talk about what you do. ' + work.qs[0] });
    shuffle(work.qs.slice(1)).slice(0, 2).forEach(q => steps.push({ t: 'q', part: 1, text: q }));
    shuffle(topics.slice(1)).slice(0, 2).forEach(tp => {
      const qs = shuffle(tp.qs).slice(0, 3);
      steps.push({ t: 'q', part: 1, text: `Now let's talk about ${tp.topic.toLowerCase()}. ${qs[0]}` });
      qs.slice(1).forEach(q => steps.push({ t: 'q', part: 1, text: q }));
    });
  }
  if (mode === 'full' || mode === 'p2') {
    steps.push({ t: 'say', part: 2, text: 'Now, I\'m going to give you a topic, and I\'d like you to talk about it for one to two minutes. Before you talk, you\'ll have one minute to think about what you are going to say. You can make some notes if you wish. Here is your topic.' });
    steps.push({ t: 'prep', part: 2, card }, { t: 'talk', part: 2, card });
  }
  if (mode !== 'p1') {
    steps.push({ t: 'q', part: 3, text: `We've been talking about ${card.title.replace(/^Describe /, '').toLowerCase()}. I'd like to discuss some more general questions related to this. ${card.part3[0]}` });
    card.part3.slice(1).forEach(q => steps.push({ t: 'q', part: 3, text: q }));
  }
  steps.push({ t: 'end', part: 0 });
  return steps;
}

export default function SpeakingSimulator({ topics, cards, presetCard }: { topics: { topic: string; qs: string[] }[]; cards: CueCard[]; presetCard?: number }) {
  const [mode, setMode] = useState<Mode>(presetCard != null ? 'p2' : 'full');
  const [rec, setRec] = useState(false);
  const [hide, setHide] = useState(false);
  const [steps, setSteps] = useState<Step[] | null>(null);
  const [i, setI] = useState(0);
  const [clock, setClock] = useState(0);
  const [counting, setCounting] = useState<'none' | 'up' | 'down'>('none');
  const [notes, setNotes] = useState('');
  const [reveal, setReveal] = useState(false);
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState('');
  const media = useRef<{ recorder?: MediaRecorder; stream?: MediaStream; chunks: Blob[] }>({ chunks: [] });

  const step = steps?.[i];
  const next = () => { setCounting('none'); setI(x => x + 1); };

  // Clean up speech and microphone when leaving the page
  useEffect(() => () => {
    stopSpeech();
    try { if (media.current.recorder?.state !== 'inactive') media.current.recorder?.stop(); } catch { /* ignore */ }
    media.current.stream?.getTracks().forEach(t => t.stop());
  }, []);

  // Run each step
  useEffect(() => {
    if (!step) return;
    stopSpeech(); setReveal(false); setClock(0); setCounting('none');
    if (step.t === 'q') speak(step.text, { onEnd: () => setCounting('up') });
    else if (step.t === 'say') speak(step.text, { onEnd: next });
    else if (step.t === 'prep') { setClock(60); speak(`${step.card.title}. You have one minute to prepare.`, { onEnd: () => setCounting('down') }); }
    else if (step.t === 'talk') { setClock(120); setCounting('down'); }
    else if (step.t === 'end') {
      speak('Thank you. That is the end of the speaking test.');
      Store.set('speakSessions', Store.get('speakSessions', 0) + 1);
      Activity.mark();
      const m = media.current;
      if (m.recorder && m.recorder.state !== 'inactive') {
        m.recorder.onstop = () => {
          setAudioUrl(URL.createObjectURL(new Blob(m.chunks, { type: m.recorder?.mimeType || 'audio/webm' })));
          m.stream?.getTracks().forEach(t => t.stop());
          setRecording(false);
        };
        m.recorder.stop();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [steps, i]);

  // Clock
  useEffect(() => {
    if (counting === 'none') return;
    const id = setInterval(() => setClock(c => (counting === 'up' ? c + 1 : Math.max(0, c - 1))), 1000);
    return () => clearInterval(id);
  }, [counting]);
  useEffect(() => {
    if (counting !== 'down' || clock > 0 || !step) return;
    setCounting('none');
    if (step.t === 'prep') speak('All right? Remember, you have one to two minutes for this. Don\'t worry if I stop you. I\'ll tell you when the time is up. Can you start speaking now, please?', { onEnd: next });
    else if (step.t === 'talk') speak('Thank you.', { onEnd: next });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clock, counting]);

  async function start() {
    const card = presetCard != null ? cards[presetCard] : cards[Math.floor(Math.random() * cards.length)];
    if (rec && navigator.mediaDevices && typeof MediaRecorder !== 'undefined') {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);
        media.current = { recorder, stream, chunks: [] };
        recorder.ondataavailable = e => media.current.chunks.push(e.data);
        recorder.start();
        setRecording(true);
      } catch { alert('Microphone access was blocked. The test will continue without recording.'); }
    }
    setNotes(''); setAudioUrl(''); setI(0);
    setSteps(buildSteps(mode, topics, card));
  }

  if (!steps || !step) {
    const preset = presetCard != null ? cards[presetCard] : null;
    return (
      <div className="card">
        <h3 className="mt0">Choose a mode</h3>
        <div className="pill-nav">
          {([['full', 'Full test (Parts 1–3, ~14 min)'], ['p1', 'Part 1 only'], ['p2', 'Part 2 + 3'], ['p3', 'Part 3 only']] as [Mode, string][]).map(([m, l]) =>
            <button key={m} className={mode === m ? 'active' : ''} onClick={() => setMode(m)}>{l}</button>)}
        </div>
        {preset && <p>Cue card: <b>{preset.title}</b></p>}
        <label className="check-row"><input type="checkbox" checked={rec} onChange={e => setRec(e.target.checked)} /> Record my answers (microphone permission needed)</label>
        <label className="check-row"><input type="checkbox" checked={hide} onChange={e => setHide(e.target.checked)} /> Hide question text (listen only – like the real test)</label>
        <div className="btn-row"><button className="btn" onClick={start}>Start</button></div>
      </div>
    );
  }

  const total = steps.length - 1;
  const header = (
    <div className="btn-row" style={{ justifyContent: 'space-between' }}>
      <span className="badge accent">{step.part ? `Part ${step.part}` : 'Finished'}</span>
      <span className="small muted">{step.t !== 'end' ? `Step ${i + 1} of ${total}` : ''}</span>
      <span className="small">{recording && <><span className="rec-dot" />Recording</>}</span>
    </div>
  );

  if (step.t === 'q' || step.t === 'say') {
    return (
      <div>
        {header}
        <div className="examiner">{hide && !reveal ? <span className="muted">🔊 Listen to the examiner...</span> : step.text}</div>
        <div className="center" style={{ margin: '18px 0' }}>
          <div className="big-timer">{fmtTime(clock)}</div>
          <div className="muted small">{step.t === 'q' ? `Your answer time · aim for ${step.part === 1 ? '15–25 seconds' : '30–60 seconds'}` : ''}</div>
        </div>
        <div className="btn-row" style={{ justifyContent: 'center' }}>
          <button className="btn soft" onClick={() => { setCounting('none'); setClock(0); speak(step.text, { onEnd: () => setCounting('up') }); }}>🔁 Repeat question</button>
          {hide && <button className="btn soft" onClick={() => setReveal(true)}>Show text</button>}
          <button className="btn" onClick={() => { stopSpeech(); next(); }}>Next →</button>
        </div>
      </div>
    );
  }
  if (step.t === 'prep' || step.t === 'talk') {
    return (
      <div>
        {header}
        <div className="grid-2">
          <div className="cue-card"><h3>{step.card.title}</h3>You should say:<ul>{step.card.points.map(p => <li key={p}>{p}</li>)}</ul>{step.card.last}</div>
          <div>
            <div className="center"><div className="muted">{step.t === 'prep' ? 'Preparation time' : 'Speak now – keep going until the timer ends'}</div><div className="big-timer">{fmtTime(clock)}</div></div>
            <textarea className="open" value={notes} onChange={e => setNotes(e.target.value)} placeholder="Your notes (keywords only)..." style={{ minHeight: 140 }} />
            <div className="btn-row">
              <button className="btn" onClick={() => { setCounting('none'); if (step.t === 'prep') speak('Please start speaking now.', { onEnd: next }); else { stopSpeech(); next(); } }}>{step.t === 'prep' ? 'Start speaking now' : 'Finish'}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="card result-card">
        <h2 className="mt0">Test complete</h2>
        {audioUrl ? <>
          <p>Your recording:</p>
          <audio controls src={audioUrl} style={{ width: '100%' }} />
          <div className="btn-row" style={{ justifyContent: 'center' }}><a className="btn soft" download={`ielts-speaking-${new Date().toISOString().slice(0, 10)}.webm`} href={audioUrl}>Download recording</a></div>
        </> : <p className="muted">{recording ? 'Preparing your recording...' : 'No recording this time. Tick "Record my answers" next time to listen back.'}</p>}
      </div>
      <div className="card">
        <h3 className="mt0">Self-assessment – listen to your recording and be honest</h3>
        <div className="grid-2">
          {[['Fluency & Coherence', ['I rarely paused for long', 'I extended answers with reasons and examples', 'I used discourse markers (actually, having said that...)']],
            ['Lexical Resource', ['I used topic-specific vocabulary', 'I paraphrased rather than repeating the question', 'I used 1–2 idiomatic expressions naturally']],
            ['Grammar', ['I used past, present and future forms correctly', 'I used complex sentences (if, because, which, although)']],
            ['Pronunciation', ['I spoke clearly at a natural speed', 'My intonation was not flat', 'I stressed the important words']]].map(([h, items]) => (
              <div key={h as string}><h4>{h as string}</h4>{(items as string[]).map(x => <label key={x} className="check-row"><input type="checkbox" /> {x}</label>)}</div>
            ))}
        </div>
        <div className="btn-row">
          <button className="btn" onClick={() => { setSteps(null); setI(0); }}>Try again</button>
          <Link className="btn soft" href="/speaking">Review techniques</Link>
          <Link className="btn soft" href="/speaking/pronunciation">Pronunciation guide</Link>
        </div>
      </div>
    </div>
  );
}

'use client';
/* Text-to-speech helpers (browser Web Speech API) */
import { Store } from './storage';

const FEMALE = /(female|zira|hazel|susan|libby|sonia|samantha|karen|moira|tessa|serena|kate|fiona|victoria|aria|jenny|natasha|clara|emma|ava|allison|maisie|mia|amy|olivia|heera|catherine|linda|joanna|salli|kimberly|ivy|nicky)/i;
const MALE = /(male|david|george|mark|ryan|thomas|daniel|guy|william|james|alex|fred|oliver|arthur|rishi|brian|eric|christopher|roger|steffan|liam|matthew|joey|justin|ravi|prabhat|aaron|gordon)/i;

export const ttsSupported = () => typeof window !== 'undefined' && 'speechSynthesis' in window;

export function englishVoices(): SpeechSynthesisVoice[] {
  if (!ttsSupported()) return [];
  const order = (l: string) => (l.startsWith('en-GB') ? 0 : l.startsWith('en-AU') ? 1 : l.startsWith('en-US') ? 2 : 3);
  return speechSynthesis.getVoices().filter(v => /^en/i.test(v.lang)).sort((a, b) => order(a.lang) - order(b.lang));
}

export function pickVoice(voices: SpeechSynthesisVoice[], gender: 'f' | 'm'): SpeechSynthesisVoice | null {
  const re = gender === 'm' ? MALE : FEMALE;
  return voices.find(v => re.test(v.name) && !(gender === 'm' && /female/i.test(v.name))) || voices[0] || null;
}

export function whenVoices(cb: (v: SpeechSynthesisVoice[]) => void) {
  if (!ttsSupported()) return cb([]);
  const v = englishVoices();
  if (v.length) return cb(v);
  let done = false;
  const finish = () => { if (!done) { done = true; cb(englishVoices()); } };
  speechSynthesis.addEventListener('voiceschanged', finish, { once: true });
  setTimeout(finish, 1200);
}

export const splitSentences = (t: string) => (t.match(/[^.!?]+[.!?]+["')]*|[^.!?]+$/g) || [t]).map(s => s.trim()).filter(Boolean);

let speakGen = 0;
export function stopSpeech() { speakGen++; if (ttsSupported()) try { speechSynthesis.cancel(); } catch { /* ignore */ } }

/** Speak text with the saved voice. Calls onEnd when finished (not when cancelled). */
export function speak(text: string, opts: { gender?: 'f' | 'm'; rate?: number; onEnd?: () => void } = {}) {
  const my = ++speakGen;
  const done = () => { if (my === speakGen) opts.onEnd?.(); };
  if (!ttsSupported()) { setTimeout(done, 0); return; }
  try { speechSynthesis.cancel(); } catch { /* ignore */ }
  whenVoices(voices => {
    if (my !== speakGen) return;
    const saved = Store.get<string | null>(opts.gender === 'm' ? 'voice:m' : 'voice:f', null);
    const voice = voices.find(v => v.name === saved) || pickVoice(voices, opts.gender || 'f');
    const parts = splitSentences(text.replace(/<[^>]+>/g, ' '));
    parts.forEach((p, i) => {
      const u = new SpeechSynthesisUtterance(p);
      if (voice) u.voice = voice;
      u.rate = opts.rate || Store.get('voice:rate', 0.95);
      if (i === parts.length - 1) { u.onend = done; u.onerror = done; }
      speechSynthesis.speak(u);
    });
  });
}

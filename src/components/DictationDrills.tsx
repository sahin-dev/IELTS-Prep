'use client';
import { useEffect, useState } from 'react';
import { speak } from '@/lib/tts';
import { Activity } from '@/lib/storage';

interface Item { say: string; answer: string; check: (input: string) => boolean }
type Kind = 'numbers' | 'phone' | 'prices' | 'dates' | 'times' | 'postcodes' | 'names';

const rnd = (a: number, b: number) => a + Math.floor(Math.random() * (b - a + 1));
const pickOne = <T,>(a: T[]) => a[Math.floor(Math.random() * a.length)];
const clean = (s: string) => s.toUpperCase().replace(/[^A-Z0-9]/g, '');
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const ORD = (n: number) => n + (n % 10 === 1 && n !== 11 ? 'st' : n % 10 === 2 && n !== 12 ? 'nd' : n % 10 === 3 && n !== 13 ? 'rd' : 'th');
const DIGIT = ['oh', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const SURNAMES = ['Kowalski', 'Henderson', 'Fitzgerald', 'Okonkwo', 'Wainwright', 'Thompson', 'Mackenzie', 'Delacroix', 'Haverford', 'Pemberton', 'Szymanski', 'Grantham', 'Whitfield', 'Ellsworth', 'Ramirez', 'Lindqvist', 'Abernathy', 'Chaudhry'];
const STREETS = ['Harbour', 'Wellington', 'Ashcombe', 'Brookfield', 'Kingsley', 'Merriweather', 'Thornbury', 'Gloucester', 'Fairhaven', 'Woodbridge'];

/** Speak digits the way British speakers do: "double seven", "oh". */
function sayDigits(d: string) {
  const out: string[] = [];
  for (let i = 0; i < d.length; i++) {
    if (d[i] === ' ') { out.push(','); continue; }
    if (d[i + 1] === d[i] && d[i + 2] !== d[i]) { out.push('double ' + DIGIT[+d[i]]); i++; }
    else out.push(DIGIT[+d[i]]);
  }
  return out.join(' ').replace(/ ,/g, ',');
}
function spellOut(w: string) {
  const L = w.toUpperCase().split('');
  const out: string[] = [];
  for (let i = 0; i < L.length; i++) { if (L[i + 1] === L[i]) { out.push('double ' + L[i]); i++; } else out.push(L[i]); }
  return out.join('. ') + '.';
}

const GEN: Record<Kind, () => Item> = {
  numbers: () => {
    const n = pickOne([rnd(13, 19), rnd(2, 9) * 10, rnd(101, 999), rnd(1000, 9999), rnd(10000, 99999), rnd(1, 9) * 100000 + rnd(0, 99999)]);
    return { say: n.toLocaleString('en-GB'), answer: String(n), check: x => clean(x) === String(n) };
  },
  phone: () => {
    const d = '07' + Array.from({ length: 9 }, () => rnd(0, 9)).join('');
    const grouped = `${d.slice(0, 5)} ${d.slice(5, 8)} ${d.slice(8)}`;
    return { say: sayDigits(grouped), answer: grouped, check: x => clean(x) === d };
  },
  prices: () => {
    const p = rnd(1, 199), c = pickOne([0, 25, 50, 75, 99, 5, 45]);
    const v = (p + c / 100).toFixed(2);
    return { say: c ? `${p} pounds ${c}` : `${p} pounds`, answer: '£' + v, check: x => Math.abs(parseFloat(x.replace(/[^0-9.]/g, '')) - +v) < 0.001 };
  },
  dates: () => {
    const m = rnd(0, 11), d = rnd(1, 28);
    return {
      say: pickOne([`the ${ORD(d)} of ${MONTHS[m]}`, `${MONTHS[m]} the ${ORD(d)}`]), answer: `${d} ${MONTHS[m]}`,
      check: x => { const dd = x.match(/\d+/); const mm = MONTHS.findIndex(M => x.toLowerCase().includes(M.slice(0, 3).toLowerCase())); return !!dd && +dd[0] === d && mm === m; }
    };
  },
  times: () => {
    const h = rnd(1, 12), m = pickOne([0, 5, 10, 15, 20, 30, 40, 45, 50]);
    const nh = h === 12 ? 1 : h + 1;
    const say = m === 0 ? `${h} o'clock` : m === 15 ? `quarter past ${h}` : m === 30 ? `half past ${h}` : m === 45 ? `quarter to ${nh}` : m < 30 ? `${m} past ${h}` : `${60 - m} to ${nh}`;
    return {
      say, answer: `${h}:${String(m).padStart(2, '0')}`,
      check: x => { const t = x.match(/(\d{1,2})\s*[:.]\s*(\d{2})/) || x.match(/^(\d{1,2})$/); if (!t) return false; const hh = +t[1] % 12 || 12; const mi = t[2] ? +t[2] : 0; return hh === h && mi === m; }
    };
  },
  postcodes: () => {
    const A = 'ABCDEFGHJKLMNPRSTUWY';
    const code = `${A[rnd(0, 19)]}${A[rnd(0, 19)]}${rnd(1, 20)} ${rnd(1, 9)}${A[rnd(0, 19)]}${A[rnd(0, 19)]}`;
    return { say: code.split('').filter(c => c !== ' ').join(', '), answer: code, check: x => clean(x) === clean(code) };
  },
  names: () => {
    const w = pickOne([...SURNAMES, ...STREETS]);
    return { say: `${w}. That's ${spellOut(w)}`, answer: w, check: x => x.trim().toLowerCase() === w.toLowerCase() };
  }
};

const KINDS: [Kind, string, string][] = [
  ['numbers', 'Numbers', 'Large and small numbers, including teens vs tens (13/30).'],
  ['phone', 'Phone numbers', '"oh" = 0 and "double seven" = 77.'],
  ['prices', 'Prices', '"four fifty" = £4.50. Type the amount.'],
  ['dates', 'Dates', 'Type like "3 May" or "May 3".'],
  ['times', 'Times', '"quarter to seven" = 6:45. Type as h:mm.'],
  ['postcodes', 'Postcodes', 'UK-style letter/number codes.'],
  ['names', 'Spelled names', 'Surnames and street names spelled letter by letter.']
];

export default function DictationDrills() {
  const [kind, setKind] = useState<Kind>('numbers');
  const [items, setItems] = useState<Item[]>([]);
  const [inputs, setInputs] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const make = (k = kind) => { setItems(Array.from({ length: 8 }, () => GEN[k]())); setInputs(Array(8).fill('')); setChecked(false); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => make(kind), [kind]);
  const score = items.filter((it, i) => it.check(inputs[i] || '')).length;
  return (
    <div>
      <div className="pill-nav">{KINDS.map(([k, l]) => <button key={k} className={kind === k ? 'active' : ''} onClick={() => setKind(k)}>{l}</button>)}</div>
      <p className="muted">{KINDS.find(k => k[0] === kind)?.[2]} Press 🔊 for each item, then type what you hear.</p>
      <div className="q-group">
        {items.map((it, i) => {
          const ok = checked && it.check(inputs[i] || '');
          return (
            <div key={i} className={`q ${checked ? (ok ? 'checked correct' : 'checked wrong') : ''}`}>
              <div className="q-row">
                <span className="qn">{i + 1}</span>
                <button className="btn small soft" onClick={() => speak(it.say, { rate: 0.85 })}>🔊 Play</button>
                <input className="gap" value={inputs[i] || ''} readOnly={checked} onChange={e => setInputs(v => v.map((x, j) => (j === i ? e.target.value : x)))} aria-label={`Item ${i + 1}`} autoComplete="off" />
              </div>
              {checked && <div className="feedback">{ok ? '✔ Correct' : <>✘ Correct answer: <b>{it.answer}</b></>}</div>}
            </div>
          );
        })}
      </div>
      <div className="score-bar">
        <button className="btn" disabled={checked} onClick={() => { setChecked(true); Activity.mark(); }}>Check</button>
        <button className="btn soft" onClick={() => make()}>New items</button>
        {checked && <span className="score">Score: {score} / {items.length}</span>}
      </div>
    </div>
  );
}

'use client';
import { useState } from 'react';
import { band, overallBand } from '@/lib/scoring';

const BANDS = [9, 8.5, 8, 7.5, 7, 6.5, 6, 5.5, 5, 4.5, 4];

export default function BandCalculator() {
  const [l, setL] = useState(30);
  const [r, setR] = useState(30);
  const [mod, setMod] = useState<'reading' | 'readingGT'>('reading');
  const [w, setW] = useState(6.5);
  const [s, setS] = useState(6.5);
  const clamp = (n: number) => Math.max(0, Math.min(40, n || 0));
  const lb = band('listening', clamp(l)), rb = band(mod, clamp(r));
  const o = overallBand([lb, rb, w, s]);
  return (
    <div className="card">
      <div className="grid-2">
        <label>Listening raw score (0–40)<br /><input type="number" min={0} max={40} value={l} onChange={e => setL(+e.target.value)} className="gap" /></label>
        <label>Reading raw score (0–40)<br /><input type="number" min={0} max={40} value={r} onChange={e => setR(+e.target.value)} className="gap" />{' '}
          <select value={mod} onChange={e => setMod(e.target.value as 'reading' | 'readingGT')}><option value="reading">Academic</option><option value="readingGT">General Training</option></select></label>
        <label>Writing band<br /><select value={w} onChange={e => setW(+e.target.value)}>{BANDS.map(b => <option key={b} value={b}>{b}</option>)}</select></label>
        <label>Speaking band<br /><select value={s} onChange={e => setS(+e.target.value)}>{BANDS.map(b => <option key={b} value={b}>{b}</option>)}</select></label>
      </div>
      <div className="stat-grid" style={{ marginTop: 16 }}>
        {([['Listening', lb], ['Reading', rb], ['Writing', w], ['Speaking', s], ['OVERALL', o]] as [string, number][]).map(([k, v]) => (
          <div key={k} className="stat" style={k === 'OVERALL' ? { background: 'var(--primary-soft)' } : undefined}><div className="v">{v}</div><div className="l">{k}</div></div>
        ))}
      </div>
      <p className="small muted">Raw-score conversions are approximate and vary slightly between test versions. The overall band is the average of the four skills rounded to the nearest half band (.25 rounds up to .5; .75 rounds up to the next whole band).</p>
    </div>
  );
}

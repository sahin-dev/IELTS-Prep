'use client';
/* Filterable practice library (Part 9): every practice item by skill, type, level, time and text search */
import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { LibraryItem } from '@/lib/library';
import { ProgressBadge } from './client-ui';

const uniq = (xs: (string | undefined)[]) => [...new Set(xs.filter(Boolean) as string[])].sort();

export default function PracticeLibrary({ items }: { items: LibraryItem[] }) {
  const [skill, setSkill] = useState('');
  const [type, setType] = useState('');
  const [kind, setKind] = useState('');
  const [level, setLevel] = useState('');
  const [maxMin, setMaxMin] = useState(0);
  const [q, setQ] = useState('');

  const skills = uniq(items.map(i => i.skill));
  const types = uniq(items.filter(i => !skill || i.skill === skill).map(i => i.type));
  const kinds = uniq(items.map(i => i.kind));
  const levels = uniq(items.filter(i => !skill || i.skill === skill).map(i => i.level));

  const shown = useMemo(() => items.filter(i =>
    (!skill || i.skill === skill) && (!type || i.type === type) && (!kind || i.kind === kind) && (!level || i.level === level) &&
    (!maxMin || (i.minutes || 0) <= maxMin) && (!q || (i.title + ' ' + i.type).toLowerCase().includes(q.toLowerCase()))
  ), [items, skill, type, kind, level, maxMin, q]);

  const sel = (label: string, value: string, set: (v: string) => void, opts: string[]) => (
    <label className="lib-filter"><span>{label}</span>
      <select value={value} onChange={e => set(e.target.value)}>
        <option value="">All</option>
        {opts.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );

  return (
    <>
      <div className="card lib-filters">
        {sel('Skill', skill, v => { setSkill(v); setType(''); setLevel(''); }, skills)}
        {sel('Question / task type', type, setType, types)}
        {sel('Kind', kind, setKind, kinds)}
        {levels.length > 0 && sel('Level', level, setLevel, levels)}
        <label className="lib-filter"><span>Time available</span>
          <select value={maxMin} onChange={e => setMaxMin(+e.target.value)}>
            <option value={0}>Any</option><option value={10}>10 min or less</option><option value={20}>20 min or less</option><option value={40}>40 min or less</option>
          </select>
        </label>
        <label className="lib-filter"><span>Search</span><input type="search" value={q} onChange={e => setQ(e.target.value)} placeholder="e.g. bees, opinion, Part 3" /></label>
      </div>
      <p className="muted">{shown.length} of {items.length} items</p>
      <div className="grid">
        {shown.slice(0, 240).map(i => (
          <div className="tile" key={i.id + i.href}>
            <h3><Link href={i.href}>{i.title}</Link></h3>
            <p>{i.type}</p>
            <div className="meta">
              <span className="badge accent">{i.skill}</span><span className="badge">{i.kind}</span>
              {i.level && <span className="badge">{i.level}</span>}
              {i.minutes ? <span className="badge">{i.minutes} min</span> : null}
              {(i.kind === 'Practice set' || i.kind === 'Chapter exercises') && <ProgressBadge id={i.id} />}
            </div>
            {i.learn && i.learn !== i.href.split('#')[0] && <p style={{ marginTop: 8 }}><Link href={i.learn}>Learn this type first →</Link></p>}
          </div>
        ))}
      </div>
      {shown.length > 240 && <p className="muted">Showing the first 240 – narrow the filters to see more.</p>}
    </>
  );
}

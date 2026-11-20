'use client';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { SearchEntry } from '@/lib/search';

export default function SearchView({ index }: { index: SearchEntry[] }) {
  const params = useSearchParams();
  const router = useRouter();
  const [q, setQ] = useState(params.get('q') || '');
  useEffect(() => setQ(params.get('q') || ''), [params]);
  const ql = q.trim().toLowerCase();
  const res = ql.length < 2 ? [] : index.filter(x => (x.t + ' ' + x.s).toLowerCase().includes(ql)).slice(0, 150);
  return (
    <>
      <form className="btn-row" onSubmit={e => { e.preventDefault(); router.replace('/search?q=' + encodeURIComponent(q)); }}>
        <input className="search-big" value={q} onChange={e => setQ(e.target.value)} placeholder='Try "decline", "opposite", "headings", "environment"...' autoFocus aria-label="Search" />
        <button className="btn">Search</button>
      </form>
      {ql.length >= 2 && <p className="muted">{res.length} result{res.length === 1 ? '' : 's'}</p>}
      {res.length > 0 && (
        <div className="card search-results">
          {res.map((r, i) => <div className="sr" key={i}><span className="badge">{r.k}</span> <Link href={r.h}><b>{r.t}</b></Link><div className="small muted">{r.s}</div></div>)}
        </div>
      )}
      {ql.length >= 2 && !res.length && <p>No matches. Try a shorter word.</p>}
    </>
  );
}

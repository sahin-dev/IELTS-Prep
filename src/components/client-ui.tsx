'use client';
/* Small interactive components */
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, type ReactNode } from 'react';
import { speak } from '@/lib/tts';
import { Progress, Store, type ResultRecord } from '@/lib/storage';

export function SpeakButton({ text, label = '🔊', title = 'Listen', gender }: { text: string; label?: string; title?: string; gender?: 'f' | 'm' }) {
  return <button type="button" className="btn small soft" title={title} onClick={() => speak(text, { gender })}>{label}</button>;
}

/** Best-score badge for a practice set (reads localStorage after mount). */
export function ProgressBadge({ id }: { id: string }) {
  const [r, setR] = useState<ResultRecord | undefined>();
  useEffect(() => {
    const load = () => setR(Progress.get(id));
    load();
    window.addEventListener('ielts-store', load);
    return () => window.removeEventListener('ielts-store', load);
  }, [id]);
  if (!r) return <span className="badge">Not attempted</span>;
  return <span className={`badge ${r.best / r.total >= 0.7 ? 'ok' : 'warn'}`}>Best {r.best}/{r.total}</span>;
}

/** Sub-navigation for a skill section; highlights the current page. */
export function SubNav({ items }: { items: [string, string][] }) {
  const path = usePathname();
  const best = items.map(i => i[1]).filter(h => path === h || path.startsWith(h + '/')).sort((a, b) => b.length - a.length)[0];
  return (
    <nav className="subnav" aria-label="Section navigation">
      {items.map(([label, href]) => <Link key={href} href={href} className={href === best ? 'active' : ''}>{label}</Link>)}
    </nav>
  );
}

/** Tabs that keep every panel mounted (so quiz state survives switching). */
export function Tabs({ tabs, storageKey }: { tabs: { label: string; content: ReactNode }[]; storageKey?: string }) {
  const [active, setActive] = useState(0);
  useEffect(() => { if (storageKey) setActive(Math.min(Store.get('tab:' + storageKey, 0), tabs.length - 1)); }, [storageKey, tabs.length]);
  const choose = (i: number) => { setActive(i); if (storageKey) Store.set('tab:' + storageKey, i); };
  return (
    <div>
      <div className="tabs" role="tablist">
        {tabs.map((t, i) => <button key={t.label} role="tab" aria-selected={i === active} className={i === active ? 'active' : ''} onClick={() => choose(i)}>{t.label}</button>)}
      </div>
      {tabs.map((t, i) => <div key={t.label} role="tabpanel" hidden={i !== active}>{t.content}</div>)}
    </div>
  );
}

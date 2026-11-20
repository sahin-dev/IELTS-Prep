'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, type ReactNode } from 'react';
import { Store } from '@/lib/storage';
import { speak } from '@/lib/tts';
import { BookLabel, BookPager } from './BookNav';

export const NAV: { title: string; items: [string, string, string][] }[] = [
  { title: 'Start here', items: [['/', 'Dashboard', 'primary'], ['/book', 'The IELTS Book (contents)', 'primary'], ['/exam', 'Exam format & scoring', 'primary'], ['/progress', 'Study plan & progress', 'primary']] },
  { title: 'Skills', items: [['/listening', 'Listening', 'listening'], ['/reading', 'Reading', 'reading'], ['/writing', 'Writing', 'writing'], ['/speaking', 'Speaking', 'speaking']] },
  { title: 'Language toolkit', items: [['/vocabulary', 'Vocabulary bank', 'vocab'], ['/grammar', 'Grammar & sentences', 'grammar'], ['/speaking/pronunciation', 'Pronunciation', 'speaking'], ['/writing/ideas', 'Task 2 idea bank', 'writing']] },
  { title: 'Practice & tests', items: [['/practice', 'Practice hub', 'primary'], ['/mock-tests', 'Mock tests', 'primary'], ['/practice/listening', 'Listening practice', 'listening'], ['/practice/reading', 'Reading practice', 'reading'], ['/practice/writing', 'Writing practice', 'writing'], ['/practice/speaking', 'Speaking simulator', 'speaking'], ['/practice/drills', 'Dictation drills', 'listening'], ['/practice/vocabulary', 'Vocabulary quiz', 'vocab']] },
  { title: 'Tools', items: [['/calculator', 'Band calculator', 'primary'], ['/resources', 'Official materials', 'primary'], ['/search', 'Search', 'primary']] }
];
const ALL = NAV.flatMap(g => g.items.map(i => i[0]));

export default function AppShell({ children }: { children: ReactNode }) {
  const path = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const best = path === '/' ? '/' : ALL.filter(h => h !== '/' && (path === h || path.startsWith(h + '/'))).sort((a, b) => b.length - a.length)[0];

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    // Buttons inside authored HTML can carry data-say="text" to be read aloud.
    const onClick = (e: MouseEvent) => {
      const b = (e.target as HTMLElement).closest('[data-say]') as HTMLElement | null;
      if (b) { e.preventDefault(); speak(b.dataset.say || ''); }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  function toggleTheme() {
    const t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = t;
    Store.set('theme', t);
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="topbar">
        <button className="icon-btn menu-btn" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(o => !o)}>☰</button>
        <Link href="/" className="brand"><span className="logo">IE</span><span className="brand-text">IELTS Prep Studio</span></Link>
        <form className="top-actions" onSubmit={e => { e.preventDefault(); if (q.trim()) router.push('/search?q=' + encodeURIComponent(q.trim())); }}>
          <input type="search" className="global-search" value={q} onChange={e => setQ(e.target.value)} placeholder="Search vocabulary, topics..." aria-label="Search" />
          <button type="button" className="icon-btn" aria-label="Toggle dark mode" title="Toggle dark mode" onClick={toggleTheme}>◐</button>
        </form>
      </header>
      <div className="layout">
        <nav className={`sidebar ${open ? 'open' : ''}`} aria-label="Main">
          {NAV.map(g => (
            <div className="nav-group" key={g.title}>
              <div className="nav-title">{g.title}</div>
              {g.items.map(([href, label, color]) => (
                <Link key={href} href={href} className={href === best ? 'active' : ''} aria-current={href === best ? 'page' : undefined}>
                  <span className="dot" style={{ background: `var(--${color})` }} />{label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
        {open && <div className="backdrop" onClick={() => setOpen(false)} />}
        <main id="main" tabIndex={-1}>
          <BookLabel />
          {children}
          <BookPager />
          <footer className="site">
            IELTS Prep Studio – all practice passages, recordings and questions are original. IELTS is a registered trademark of the British Council, IDP IELTS and Cambridge University Press &amp; Assessment. This is an independent study tool, not affiliated with or endorsed by them. Your progress is stored only in this browser (export it from <Link href="/progress">Progress</Link>).
          </footer>
        </main>
      </div>
    </>
  );
}

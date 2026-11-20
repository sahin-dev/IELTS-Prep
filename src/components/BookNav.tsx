'use client';
/* Book navigation: chapter label, "mark as completed", previous/next chapter, reading progress */
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { bookChapters, chapterFor } from '@/content/book/toc';
import { Activity, Store } from '@/lib/storage';

type ReadMap = Record<string, string>;
export function useChaptersRead(): [ReadMap, (href: string, done: boolean) => void] {
  const [read, setRead] = useState<ReadMap>({});
  useEffect(() => {
    const load = () => setRead(Store.get<ReadMap>('chaptersRead', {}));
    load();
    window.addEventListener('ielts-store', load);
    return () => window.removeEventListener('ielts-store', load);
  }, []);
  const mark = (href: string, done: boolean) => {
    const all = { ...Store.get<ReadMap>('chaptersRead', {}) };
    if (done) { all[href] = new Date().toISOString(); Activity.mark(); } else delete all[href];
    Store.set('chaptersRead', all);
  };
  return [read, mark];
}

export function BookLabel() {
  const ch = chapterFor(usePathname());
  if (!ch) return null;
  return <Link href="/book" className="chapter-label">📖 Chapter {ch.no} of {bookChapters.length} · Part {ch.partNo}: {ch.part}</Link>;
}

export function BookPager() {
  const path = usePathname();
  const [read, mark] = useChaptersRead();
  const ch = chapterFor(path);
  if (!ch) return null;
  const prev = bookChapters[ch.no - 2], next = bookChapters[ch.no];
  const done = !!read[ch.href];
  return (
    <>
      <div className="read-done">
        <button type="button" className={`btn ${done ? 'soft' : ''}`} onClick={() => mark(ch.href, !done)}>
          {done ? '✓ Completed – click to undo' : '✓ Mark this chapter as completed'}
        </button>
        <span className="muted small">{Object.keys(read).filter(h => chapterFor(h)).length} of {bookChapters.length} chapters completed</span>
      </div>
      <nav className="book-pager" aria-label="Book navigation">
        {prev ? <Link href={prev.href}><span className="dir">← Previous · Chapter {prev.no}</span>{prev.title}</Link> : <span />}
        <Link href="/book" className="contents">☰ Contents</Link>
        {next ? <Link className="next" href={next.href}><span className="dir">Next · Chapter {next.no} →</span>{next.title}</Link> : <span />}
      </nav>
    </>
  );
}

export function TocStatus({ href }: { href: string }) {
  const [read] = useChaptersRead();
  return read[href] ? <span className="st done">✓ Done</span> : <span className="st muted">Not read</span>;
}

export function BookProgress() {
  const [read] = useChaptersRead();
  const n = bookChapters.filter(c => read[c.href]).length;
  const nextUp = bookChapters.find(c => !read[c.href]);
  const pct = Math.round((n / bookChapters.length) * 100);
  return (
    <div className="card">
      <div className="btn-row" style={{ justifyContent: 'space-between', marginTop: 0 }}>
        <b>Your progress: {n} of {bookChapters.length} chapters ({pct}%)</b>
        {nextUp && <Link className="btn" href={nextUp.href}>{n ? 'Continue' : 'Start'}: Chapter {nextUp.no} – {nextUp.title} →</Link>}
      </div>
      <div className="progress-line" style={{ marginTop: 10 }}><div style={{ width: pct + '%' }} /></div>
    </div>
  );
}

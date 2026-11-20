import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui';
import { BookProgress, TocStatus } from '@/components/BookNav';
import { bookChapters, bookParts } from '@/content/book/toc';

export const metadata: Metadata = { title: 'The IELTS Book: contents' };

export default function BookContents() {
  let n = 0;
  return (
    <>
      <PageHeader crumbs={[['The IELTS Book']]} title="The IELTS Book"
        lead={`A complete course in ${bookChapters.length} chapters. Read it in order, or jump to the chapter for the question type you find hardest.`} />
      <BookProgress />
      <div className="grid-2">
        <div className="card">
          <h3 className="mt0">What every question-type chapter contains</h3>
          <ol>
            <li><b>What it is</b>: the task, where it appears and how many questions to expect.</li>
            <li><b>Understanding the instructions</b>: what each word of the instructions tells you.</li>
            <li><b>What it really tests</b>: the reading or listening skill behind the task.</li>
            <li><b>The method, step by step</b>: what to do first, second and third, each step with an example.</li>
            <li><b>Worked examples</b>: an original passage or recording with a think-aloud solution for every question.</li>
            <li><b>Do and Don&apos;t</b> lists, and <b>traps explained</b> with examples.</li>
            <li><b>Timing, common questions, a final checklist</b> and <b>key takeaways</b>.</li>
          </ol>
        </div>
        <div className="card">
          <h3 className="mt0">How to read this book</h3>
          <ul className="checklist">
            <li>Start with <Link href="/book/how-to-study">Chapter 1</Link> and take a diagnostic test, so you know which skill needs the most work.</li>
            <li>Read each skill&apos;s <b>fundamentals</b> chapter before its question-type chapters.</li>
            <li>In worked examples, <b>answer the questions yourself before opening the solution</b>, then compare your reasoning step by step.</li>
            <li>Finish every chapter with its practice set, then click <b>Mark as completed</b> at the bottom of the page.</li>
            <li>Come back to the &quot;Be careful&quot; section whenever the same mistake appears twice in your error log.</li>
          </ul>
        </div>
      </div>
      {bookParts.map((p, pi) => (
        <section key={p.id} className="toc-part" id={p.id}>
          <h2>Part {pi + 1}: {p.title}</h2>
          <p className="muted">{p.intro}</p>
          <ul className="toc-list">
            {p.chapters.map(c => {
              n++;
              return (
                <li key={c.href}>
                  <Link href={c.href}>
                    <span className="no">{n}</span>
                    <span className="ttl">{c.title}{c.sub && <small>{c.sub}</small>}</span>
                    <TocStatus href={c.href} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </>
  );
}

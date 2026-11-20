import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import { SECTION_NAV } from '@/lib/nav';
import { ideaBank } from '@/content';

export const metadata: Metadata = { title: 'Task 2 idea bank' };

export default function IdeasPage() {
  return (
    <>
      <PageHeader crumbs={[['Writing', '/writing'], ['Idea bank']]} title="Task 2 idea bank"
        lead="Running out of ideas is a common reason for weak Task Response. For each frequent topic: typical questions, arguments on both sides, realistic examples and the vocabulary to express them." />
      <SubNav items={SECTION_NAV.writing} />
      <div className="pill-nav">{ideaBank.map(t => <a key={t.id} href={`#${t.id}`}>{t.topic}</a>)}</div>
      <div className="callout"><strong>How to use it</strong>Don&apos;t memorise sentences. Choose the two strongest arguments for your position, develop each with an explanation and an example (PEEL), and use 3–4 topic words naturally.</div>
      {ideaBank.map(t => (
        <section key={t.id} id={t.id} className="card">
          <h2 className="mt0">{t.topic}</h2>
          <p className="small muted"><b>Typical questions:</b> {t.questions.join(' · ')}</p>
          <div className="idea-cols">
            <div><h4>Arguments for / benefits</h4><ul className="for-list">{t.for.map(x => <li key={x}>{x}</li>)}</ul></div>
            <div><h4>Arguments against / problems</h4><ul className="against-list">{t.against.map(x => <li key={x}>{x}</li>)}</ul></div>
          </div>
          <h4>Examples you can adapt</h4><ul>{t.examples.map(x => <li key={x}>{x}</li>)}</ul>
          <h4>Key vocabulary</h4><p>{t.vocab.map(v => <span key={v} className="word-chip">{v}</span>)}</p>
        </section>
      ))}
      <div className="btn-row"><Link className="btn" href="/practice/writing">Practise with a Task 2 prompt →</Link><Link className="btn soft" href="/vocabulary/t2-topics">More topic vocabulary</Link></div>
    </>
  );
}

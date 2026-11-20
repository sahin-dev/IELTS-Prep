import type { Metadata } from 'next';
import { Html, PageHeader } from '@/components/ui';
import { SpeakButton, SubNav } from '@/components/client-ui';
import TestRunner from '@/components/TestRunner';
import { SECTION_NAV } from '@/lib/nav';
import { pronunciation } from '@/content';

export const metadata: Metadata = { title: 'Pronunciation guide' };

export default function PronunciationPage() {
  return (
    <>
      <PageHeader crumbs={[['Speaking', '/speaking'], ['Pronunciation']]} title="Pronunciation guide" />
      <SubNav items={SECTION_NAV.speaking} />
      <Html html={pronunciation.intro} />
      <div className="pill-nav">{pronunciation.sections.map(s => <a key={s.id} href={`#${s.id}`}>{s.title}</a>)}</div>
      {pronunciation.sections.map(s => (
        <section className="card" key={s.id} id={s.id}>
          <h2 className="mt0">{s.title}</h2>
          <Html html={s.html} />
          <h4>Listen and repeat (shadowing)</h4>
          {s.practice.map(p => <div className="q q-row" key={p}><SpeakButton text={p} /> <span>{p}</span></div>)}
        </section>
      ))}
      <h2>Check your understanding</h2>
      <TestRunner set={{ id: 'pron', type: 'pronunciation', title: 'Pronunciation quiz', groups: pronunciation.exercises }} skill="pronunciation" embedded />
    </>
  );
}

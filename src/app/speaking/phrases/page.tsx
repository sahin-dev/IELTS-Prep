import type { Metadata } from 'next';
import Link from 'next/link';
import { List, PageHeader } from '@/components/ui';
import { SpeakButton, SubNav } from '@/components/client-ui';
import { SECTION_NAV } from '@/lib/nav';
import { speaking } from '@/content';

export const metadata: Metadata = { title: 'Speaking phrases & idioms' };

export default function PhrasesPage() {
  return (
    <>
      <PageHeader crumbs={[['Speaking', '/speaking'], ['Phrases & idioms']]} title="Useful phrases & natural idioms"
        lead="Discourse markers and set phrases improve Fluency & Coherence. Idioms help Lexical Resource – but only when used naturally (one or two per part is plenty)." />
      <SubNav items={SECTION_NAV.speaking} />
      <div className="grid-2">{speaking.phrases.map(g => <div className="card" key={g.h}><h4 className="mt0">{g.h}</h4><List items={g.items} /></div>)}</div>
      <h2>Natural idioms</h2>
      <div className="table-wrap"><table className="data-table vocab-table">
        <thead><tr><th>Idiom</th><th>Meaning</th><th>Example</th><th /></tr></thead>
        <tbody>{speaking.idioms.map(i => <tr key={i[0]}><td>{i[0]}</td><td>{i[1]}</td><td className="example">{i[2]}</td><td><SpeakButton text={i[2]} /></td></tr>)}</tbody>
      </table></div>
      <p><Link href="/vocabulary/speaking-vocab">Flashcards for speaking vocabulary & idioms →</Link></p>
    </>
  );
}

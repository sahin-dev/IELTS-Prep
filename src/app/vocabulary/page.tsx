import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import { SECTION_NAV } from '@/lib/nav';
import { vocabBanks, vocabSections } from '@/content';

export const metadata: Metadata = { title: 'Vocabulary bank' };

export default function VocabHome() {
  return (
    <>
      <PageHeader crumbs={[['Vocabulary']]} title="Vocabulary bank"
        lead={<>Word banks for every part of the exam. Each bank has a <b>word list</b>, <b>spaced-repetition flashcards</b> and a <b>quiz</b> (spelling has a dictation quiz).</>} />
      <SubNav items={SECTION_NAV.language} />
      {vocabSections.map(s => (
        <section key={s}>
          <h2>{s}</h2>
          <div className="grid">
            {vocabBanks.filter(b => b.section === s).map(b => (
              <Link key={b.id} className={`tile c-${b.color}`} href={`/vocabulary/${b.id}`}>
                <h3>{b.name}</h3>
                <p>{b.groups.reduce((a, g) => a + g.items.length, 0)} entries · {b.groups.length} groups</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

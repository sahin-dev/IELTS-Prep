import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui';
import { ProgressBadge, SubNav } from '@/components/client-ui';
import { SECTION_NAV } from '@/lib/nav';
import { grammar, GRAMMAR_GROUPS } from '@/content';
import { grammarChapters } from '@/content/book';

export const metadata: Metadata = { title: 'Grammar masterclass' };

export default function GrammarHome() {
  let n = 0;
  return (
    <>
      <PageHeader crumbs={[['Grammar masterclass']]} title="Grammar masterclass"
        lead="Grammatical Range and Accuracy is a quarter of your Writing and Speaking bands – and grammar underlies every other skill. Work through the sections in order, from the parts of speech to grammar for IELTS Writing. Every chapter ends with exercises marked automatically." />
      <SubNav items={SECTION_NAV.language} />
      {GRAMMAR_GROUPS.map(gr => {
        const topics = grammar.filter(g => g.group === gr.id);
        if (!topics.length) return null;
        return (
          <section key={gr.id}>
            <h2>{gr.title}</h2>
            <p className="muted">{gr.intro}</p>
            <div className="grid">
              {topics.map(g => {
                n++;
                const badge = grammarChapters[g.id]?.exercises?.id || 'g-' + g.id;
                return (
                  <Link key={g.id} className="tile c-grammar" href={`/grammar/${g.id}`}>
                    <h3>{n}. {g.name}</h3><p>{g.short}</p><div className="meta"><ProgressBadge id={badge} /></div>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
      <h2>Related word banks</h2>
      <div className="btn-row">
        <Link className="btn soft" href="/vocabulary/linking">Linking words & connectors</Link>
        <Link className="btn soft" href="/vocabulary/word-formation">Word formation</Link>
        <Link className="btn soft" href="/vocabulary/collocations">Collocations</Link>
        <Link className="btn soft" href="/vocabulary/phrasal">Phrasal verbs</Link>
        <Link className="btn soft" href="/vocabulary/register">Formal vs informal</Link>
      </div>
    </>
  );
}

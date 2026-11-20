import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui';
import { ProgressBadge, SubNav } from '@/components/client-ui';
import { SECTION_NAV } from '@/lib/nav';
import { grammar } from '@/content';

export const metadata: Metadata = { title: 'Grammar & sentence building' };

export default function GrammarHome() {
  return (
    <>
      <PageHeader crumbs={[['Grammar & sentences']]} title="Grammar & sentence building"
        lead="Grammatical Range & Accuracy is 25% of your Writing and Speaking score. Work through the topics in order – from sentence types to advanced structures – with auto-marked exercises." />
      <SubNav items={SECTION_NAV.language} />
      <div className="grid">
        {grammar.map((g, i) => (
          <Link key={g.id} className="tile c-grammar" href={`/grammar/${g.id}`}>
            <h3>{i + 1}. {g.name}</h3><p>{g.short}</p><div className="meta"><ProgressBadge id={'g-' + g.id} /></div>
          </Link>
        ))}
      </div>
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

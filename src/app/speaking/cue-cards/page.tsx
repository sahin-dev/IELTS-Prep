import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import { SECTION_NAV } from '@/lib/nav';
import { speaking } from '@/content';

export const metadata: Metadata = { title: 'Speaking Part 2 cue cards' };

export default function CueCardsPage() {
  return (
    <>
      <PageHeader crumbs={[['Speaking', '/speaking'], ['Cue cards']]} title={`Part 2 cue cards (${speaking.cueCards.length})`}
        lead="Practise each card with 1 minute of preparation and 2 minutes of speaking. Part 3 follow-up questions are included." />
      <SubNav items={SECTION_NAV.speaking} />
      <div className="grid-2">
        {speaking.cueCards.map((c, i) => (
          <div className="cue-card" key={c.title}>
            <h3>{c.title}</h3>
            You should say:<ul>{c.points.map(p => <li key={p}>{p}</li>)}</ul>{c.last}
            <details style={{ marginTop: 8 }}><summary className="small">Part 3 follow-up questions</summary><ul>{c.part3.map(q => <li key={q}>{q}</li>)}</ul></details>
            <div className="btn-row"><Link className="btn small" href={`/practice/speaking/${i}`}>Practise this card</Link></div>
          </div>
        ))}
      </div>
    </>
  );
}

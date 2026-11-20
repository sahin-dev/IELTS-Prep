import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui';
import { SpeakButton, SubNav } from '@/components/client-ui';
import { SECTION_NAV } from '@/lib/nav';
import { speaking } from '@/content';

export const metadata: Metadata = { title: 'Speaking Part 1 topic bank' };

export default function TopicsPage() {
  return (
    <>
      <PageHeader crumbs={[['Speaking', '/speaking'], ['Part 1 topics']]} title="Part 1 topic bank"
        lead="Answer each question aloud using Answer → Reason → Example. Press 🔊 to hear the examiner, and record yourself on your phone to check fluency." />
      <SubNav items={SECTION_NAV.speaking} />
      {speaking.part1Topics.map(t => (
        <details className="acc" key={t.topic}>
          <summary>{t.topic}</summary>
          <div className="acc-body">{t.qs.map(q => <div className="q q-row" key={q}><SpeakButton text={q} /> <span>{q}</span></div>)}</div>
        </details>
      ))}
    </>
  );
}

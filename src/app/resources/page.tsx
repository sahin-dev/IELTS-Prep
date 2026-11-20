import type { Metadata } from 'next';
import { Html, PageHeader } from '@/components/ui';
import { resources } from '@/content';

export const metadata: Metadata = { title: 'Official practice materials' };

export default function Page() {
  return (
    <>
      <PageHeader crumbs={[['Official materials']]} title="Official practice materials & resources"
        lead="Practice on this site is original and organised by question type. For final exam rehearsal, use official materials from the IELTS partners – they show the exact difficulty and format of the real test." />
      {resources.groups.map(g => (
        <section key={g.h}>
          <h2>{g.h}</h2>
          <div className="grid-2">
            {g.items.map(i => (
              <div className="card" key={i.name}>
                <h4 className="mt0"><a href={i.url} target="_blank" rel="noopener noreferrer">{i.name} ↗</a></h4>
                <p className="small">{i.desc}</p><p className="small muted">{i.url}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
      <div className="callout warn"><strong>Note</strong>{resources.note}</div>
      <div className="card"><Html html={resources.howToUse} /></div>
    </>
  );
}

import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import { SECTION_NAV } from '@/lib/nav';
import { bandDescriptors } from '@/content';

export const metadata: Metadata = { title: 'Band descriptors (Writing & Speaking)' };

export default function BandDescriptorsPage() {
  return (
    <>
      <PageHeader crumbs={[['Writing', '/writing'], ['Band descriptors']]} title="What examiners look for: Bands 5–9"
        lead="Simplified summaries of the public band descriptors for Writing and Speaking. Use them to assess your own work and to see exactly what separates Band 6 from Band 7." />
      <SubNav items={SECTION_NAV.writing} />
      <div className="callout warn"><strong>Note</strong>These are paraphrased summaries for study purposes. The full official descriptors are published on ielts.org.</div>
      {bandDescriptors.map(d => (
        <section key={d.title}>
          <h2>{d.title}</h2>
          <p className="muted">{d.note}</p>
          {d.criteria.map(c => (
            <details key={c.name} className="acc" open={c.name.startsWith('Task')}>
              <summary>{c.name}</summary>
              <div className="acc-body"><div className="table-wrap"><table className="data-table band-table"><tbody>
                {c.bands.map(([b, t]) => <tr key={b}><td>{b}</td><td>{t}</td></tr>)}
              </tbody></table></div></div>
            </details>
          ))}
        </section>
      ))}
      <div className="callout tip"><strong>The Band 6 → 7 jump</strong>Band 7 needs a <b>clear position throughout</b> (Task 2) or a <b>clear overview</b> (Task 1), <b>a range of complex structures with frequent error-free sentences</b>, <b>less common vocabulary used with awareness of collocation</b>, and <b>a clear central topic in each paragraph</b>.</div>
    </>
  );
}

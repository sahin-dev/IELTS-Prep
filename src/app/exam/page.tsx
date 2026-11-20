import type { Metadata } from 'next';
import { Html, PageHeader, Tile } from '@/components/ui';
import { overview } from '@/content';

export const metadata: Metadata = { title: 'Exam format & scoring' };

export default function ExamPage() {
  return (
    <>
      <PageHeader crumbs={[['Exam format & scoring']]} title="IELTS Exam Format & Scoring"
        lead="IELTS tests four skills. Listening, Reading and Writing are taken on the same day without breaks; Speaking may be on the same day or up to a week before or after." />
      <div className="grid">
        {overview.sections.map(s => (
          <Tile key={s.skill} href={`/${s.skill}`} accent={s.skill} title={s.name}>
            <b>{s.time}</b><br />{s.questions}<br /><br />{s.desc}
          </Tile>
        ))}
      </div>
      <Html html={overview.html} />
    </>
  );
}

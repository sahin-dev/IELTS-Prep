import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader, strip } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import { SECTION_NAV } from '@/lib/nav';
import { writingTasks, type WritingTask } from '@/lib/writing-tasks';

export const metadata: Metadata = { title: 'Writing practice' };

export default function WritingPracticeList() {
  const groups: Record<string, WritingTask[]> = {};
  writingTasks.forEach(w => (groups[w.task] = groups[w.task] || []).push(w));
  return (
    <>
      <PageHeader crumbs={[['Practice', '/practice'], ['Writing']]} title="Writing practice"
        lead="Choose a prompt. The editor has an exam timer, live word count and autosave. When you finish, the analyser checks length, paragraphing, sentence variety, linking words, passives, repetition and informal language. Then compare with a model answer and assess yourself against the four criteria." />
      <SubNav items={SECTION_NAV.practice} />
      {Object.entries(groups).map(([task, items]) => (
        <section key={task}>
          <h2>{task}</h2>
          <div className="grid">
            {items.map(w => (
              <Link key={w.id} className="tile c-writing" href={`/practice/writing/${w.id}`}>
                <h3>{w.type}{w.sample ? ' – sample' : ''}</h3>
                <p>{strip(w.prompt.split('<br>')[0]).slice(0, 115)}…</p>
                <div className="meta">{w.model && <span className="badge accent">model answer</span>}<span className="badge">{w.minutes} min</span></div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

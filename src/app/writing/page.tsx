import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader, Tile } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import { SECTION_NAV } from '@/lib/nav';
import { ideaBank, writing, writingTask2 } from '@/content';
import { writingTasks } from '@/lib/writing-tasks';

export const metadata: Metadata = { title: 'Writing: tasks, structures & model answers' };

export default function WritingHome() {
  return (
    <>
      <PageHeader crumbs={[['Writing']]} title="Writing: tasks, structures & model answers"
        lead="Learn the structure of every Task 1 and Task 2 type, study annotated Band 8–9 model answers, then write your own with a timer, word counter and automatic text analysis." />
      <SubNav items={SECTION_NAV.writing} />
      <div className="grid-2">
        <div className="card"><h3 className="mt0">Task 1 · 20 minutes · 150+ words</h3>
          <p><b>Academic:</b> summarise a graph, chart, table, process or map. No opinions.</p>
          <p><b>General Training:</b> write a formal, semi-formal or informal letter covering three bullet points.</p>
          <p className="muted small">Counts for one third of your Writing band.</p></div>
        <div className="card"><h3 className="mt0">Task 2 · 40 minutes · 250+ words</h3>
          <p>A discursive essay: give and support an opinion, discuss two views, evaluate advantages and disadvantages, or propose solutions.</p>
          <p className="muted small">Counts for two thirds of your Writing band – the same for Academic and General Training.</p></div>
      </div>
      <h2>Recommended timing (60 minutes)</h2>
      <div className="section-intro">
        <div className="kpi"><b>0–3 min</b><span>Analyse Task 1: main trends / letter purpose</span></div>
        <div className="kpi"><b>3–20 min</b><span>Write Task 1 (170–190 words)</span></div>
        <div className="kpi"><b>20–27 min</b><span>Analyse & plan Task 2 – position + two main ideas</span></div>
        <div className="kpi"><b>27–55 min</b><span>Write Task 2 (270–320 words)</span></div>
        <div className="kpi"><b>55–60 min</b><span>Check: articles, plurals, subject–verb agreement, spelling</span></div>
      </div>
      <div className="callout tip"><strong>Tip</strong>If you often run out of time, write Task 2 first – it carries double the marks.</div>
      <h2>Sections</h2>
      <div className="grid">
        <Tile href="/writing/task-1" accent="writing" title="Task 1 Academic">{writing.task1.length} visual types: line, bar, pie, table, mixed, process, map – structure, language, model answers.</Tile>
        <Tile href="/writing/letters" accent="writing" title="Task 1 General Training">Formal, semi-formal and informal letters – tone, phrases, model letters.</Tile>
        <Tile href="/writing/task-2" accent="writing" title="Task 2 Essays">{writingTask2.types.length} essay types with analysis method, PEEL paragraphs and model essays.</Tile>
        <Tile href="/writing/ideas" accent="writing" title="Idea bank">{ideaBank.length} common topics with arguments for and against, examples and vocabulary.</Tile>
        <Tile href="/writing/band-descriptors" accent="writing" title="Band descriptors">What examiners look for at Bands 5–9, criterion by criterion.</Tile>
        <Tile href="/practice/writing" accent="writing" title="Write & get feedback">{writingTasks.length} prompts with timer, analyser, self-assessment and model answers.</Tile>
      </div>
      <h2>Language for writing</h2>
      <div className="btn-row">
        <Link className="btn soft" href="/vocabulary/t1-trends">Task 1 trend vocabulary</Link>
        <Link className="btn soft" href="/vocabulary/t2-topics">Task 2 topic vocabulary</Link>
        <Link className="btn soft" href="/vocabulary/linking">Linking words</Link>
        <Link className="btn soft" href="/vocabulary/register">Formal vs informal</Link>
        <Link className="btn soft" href="/grammar/sentence-types">Sentence types</Link>
      </div>
    </>
  );
}

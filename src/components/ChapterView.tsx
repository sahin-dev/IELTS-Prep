/* Renders a book chapter: contents, method, worked examples, do/don't, traps, checklist, takeaways */
import type { CSSProperties, ReactNode } from 'react';
import type { Chapter, WorkedExample } from '@/lib/types';
import { Chart, Html, List } from './ui';
import ListeningPlayer from './ListeningPlayer';
import TestRunner from './TestRunner';

const longDate = (iso: string) => new Date(iso + 'T12:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

type Pos = 'intro' | 'method' | 'sections' | 'worked' | 'careful' | 'end';
export interface ChapterExtra { id: string; title: string; node: ReactNode; after: Pos }

function Worked({ w, n }: { w: WorkedExample; n: number }) {
  const answered = w.walk.some(s => s.a);
  return (
    <div className="worked">
      <h3>Example {n}: {w.title}</h3>
      {answered && <p className="try">Try it yourself first{w.script ? ': play the audio once, as in the exam,' : ''} and write your answers. Then open the step-by-step solution and compare your thinking, not only your answers.</p>}
      {w.script && <>
        <ListeningPlayer script={w.script} />
        <details className="acc"><summary>Transcript (open after answering)</summary>
          <div className="acc-body transcript">{w.script.map((l, i) => <p key={i}>{l.s && <span className="spk">{l.s}: </span>}{l.pause ? <i>[{l.t} – {l.pause} seconds]</i> : l.t}</p>)}</div>
        </details>
      </>}
      {w.source && <Html className={w.source.includes('prompt-box') ? '' : 'passage'} html={w.source} />}
      {w.figure && <Chart spec={w.figure} />}
      {(w.instructions || w.questions) && (
        <div className="q-group" style={{ marginTop: 14 }}>
          {w.instructions && <Html className="instructions" html={w.instructions} />}
          {w.questions && <Html html={w.questions} />}
        </div>
      )}
      <details className="acc" open={!answered}>
        <summary>{answered ? `Step-by-step solution (${w.walk.length} question${w.walk.length > 1 ? 's' : ''})` : 'The walkthrough'}</summary>
        <div className="acc-body">
          {w.walk.map((s, i) => (
            <div className="walk" key={i}>
              <div><span className="walk-q" dangerouslySetInnerHTML={{ __html: s.q }} />{s.a && <span className="walk-a" dangerouslySetInnerHTML={{ __html: s.a }} />}</div>
              <ol>{s.steps.map((x, j) => <li key={j} dangerouslySetInnerHTML={{ __html: x }} />)}</ol>
            </div>
          ))}
          {w.lesson && <Html className="lesson" html={w.lesson} />}
        </div>
      </details>
    </div>
  );
}

export function ChapterView({ ch, accent, extras = [] }: { ch: Chapter; accent: string; extras?: ChapterExtra[] }) {
  const blocks: { id: string; title: string; node: ReactNode }[] = [];
  const add = (id: string, title: string, node: ReactNode) => blocks.push({ id, title, node });
  const flush = (pos: Pos) => extras.filter(e => e.after === pos).forEach(e => add(e.id, e.title, e.node));

  add('intro', 'What it is and why it matters', <>
    <Html className="prose" html={ch.intro} />
    {ch.facts && <div className="facts">{ch.facts.map(([k, v]) => <div key={k}><b>{k}</b><span dangerouslySetInnerHTML={{ __html: v }} /></div>)}</div>}
  </>);
  if (ch.anatomy) add('anatomy', 'Understanding the instructions', <Html className="prose" html={ch.anatomy} />);
  if (ch.tests) add('tests', 'What it really tests', <Html className="prose" html={ch.tests} />);
  flush('intro');
  add('method', 'The method: step by step, in order', (
    <ol className="method">
      {ch.method.map((s, i) => (
        <li key={i}>
          <h4 dangerouslySetInnerHTML={{ __html: s.title }} />
          <Html className="step-body" html={s.body} />
          {s.example && <Html className="step-ex" html={s.example} />}
        </li>
      ))}
    </ol>
  ));
  flush('method');
  ch.sections?.forEach(s => add(s.id, s.title, <Html className="prose" html={s.html} />));
  flush('sections');
  if (ch.worked?.length) add('worked', ch.worked.length > 1 ? `Worked examples (${ch.worked.length})` : 'Worked example', ch.worked.map((w, i) => <Worked key={i} w={w} n={i + 1} />));
  flush('worked');
  add('dos', 'What to do – and what not to do', (
    <div className="dodont">
      <div className="do"><h3>✓ Do</h3><List className="checklist" items={ch.dos} /></div>
      <div className="dont"><h3>✗ Don&apos;t</h3><List className="xlist" items={ch.donts} /></div>
    </div>
  ));
  add('careful', 'Be careful: the traps explained', (
    <div className="traps">
      {ch.careful.map((t, i) => (
        <div className="trap" key={i}>
          <h4 dangerouslySetInnerHTML={{ __html: t.title }} />
          <Html html={t.body} />
          {t.example && <Html className="trap-ex" html={t.example} />}
        </div>
      ))}
    </div>
  ));
  flush('careful');
  if (ch.timing) add('timing', 'Timing and pacing', <Html className="prose" html={ch.timing} />);
  if (ch.faq?.length) add('faq', 'Questions students often ask', ch.faq.map((f, i) => (
    <details className="acc" key={i}><summary dangerouslySetInnerHTML={{ __html: f.q }} /><Html className="acc-body" html={f.a} /></details>
  )));
  if (ch.exercises) add('exercises', 'Exercises with answers and explanations', <>
    <Html className="prose" html={ch.exercises.intro || '<p>Answer every question, then press <b>Check answers</b>. Each answer comes with an explanation: read it even when you were right, because the reasoning is what you are learning.</p>'} />
    <TestRunner set={{ id: ch.exercises.id, type: 'chapter', title: ch.exercises.title, groups: ch.exercises.groups }} skill="book" embedded />
  </>);
  add('checklist', 'Final checklist before you move on', <div className="card"><List className="checklist" items={ch.checklist} /></div>);
  flush('end');

  return (
    <div className="chapter" style={{ '--accent': `var(--${accent})` } as CSSProperties}>
      <nav className="chapter-toc" aria-label="In this chapter">
        <h3>In this chapter</h3>
        <ol>
          {blocks.map(b => <li key={b.id}><a href={`#${b.id}`}>{b.title}</a></li>)}
          <li><a href="#takeaways">Key takeaways</a></li>
          {ch.references?.length ? <li><a href="#sources">Sources and further reading</a></li> : null}
        </ol>
        {ch.verified && <p className="verified">Exam facts checked against official IELTS sources on {longDate(ch.verified)}. IELTS policies change: confirm details for your country on <a href="https://ielts.org" target="_blank" rel="noopener noreferrer">ielts.org</a> before you book.</p>}
      </nav>
      {blocks.map((b, i) => <section id={b.id} key={b.id}><h2><span className="sec-no">{i + 1}.</span>{b.title}</h2>{b.node}</section>)}
      <section id="takeaways" className="takeaways" style={{ marginTop: 30 }}><h2>Key takeaways</h2><List className="checklist" items={ch.summary} /></section>
      {ch.references?.length ? (
        <section id="sources" className="sources">
          <h2>Sources and further reading</h2>
          <ol>{ch.references.map((r, i) => (
            <li key={i}>
              {r.url ? (r.url.startsWith('http') ? <a href={r.url} target="_blank" rel="noopener noreferrer">{r.title}</a> : <a href={r.url}>{r.title}</a>) : <b>{r.title}</b>}
              {r.note && <> – <span dangerouslySetInnerHTML={{ __html: r.note }} /></>}
            </li>
          ))}</ol>
        </section>
      ) : null}
    </div>
  );
}

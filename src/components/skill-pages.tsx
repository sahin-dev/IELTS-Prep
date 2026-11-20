/* Shared server components for the Listening and Reading sections */
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { listening, listeningSets, mockTests, reading, readingSets } from '@/content';
import { listeningChapters, readingChapters } from '@/content/book';
import { SECTION_NAV } from '@/lib/nav';
import { Html, List, PageHeader, strip } from './ui';
import { ProgressBadge, SubNav } from './client-ui';
import { ChapterView } from './ChapterView';

type RL = 'reading' | 'listening';
const data = (skill: RL) => (skill === 'reading'
  ? { guide: reading, sets: readingSets, chapters: readingChapters }
  : { guide: listening, sets: listeningSets, chapters: listeningChapters });
const cap = (s: string) => s[0].toUpperCase() + s.slice(1);

export function SkillOverview({ skill }: { skill: RL }) {
  const { guide, sets } = data(skill);
  const mock = mockTests.find(m => m.skill === skill);
  return (
    <>
      <PageHeader crumbs={[[cap(skill)]]} title={`${cap(skill)}: format, strategies & question types`} />
      <SubNav items={SECTION_NAV[skill]} />
      <div className="callout tip"><strong>New to IELTS {cap(skill)}?</strong>Start with the <Link href={`/${skill}/fundamentals`}>{cap(skill)} fundamentals chapter</Link>, then read the chapter for each question type below. Each chapter has a step-by-step method, worked examples with full solutions, do&apos;s and don&apos;ts, and the traps to watch for.{skill === 'reading' && <> Not sure which questions to answer first? See <Link href="/reading/answer-order">what to answer first</Link>.</>}</div>
      <div className="card"><Html html={guide.intro} /></div>
      <h2>All {cap(skill)} question types</h2>
      <p className="muted">Each type has its own chapter: what it tests, how to read the instructions, the method in order, worked examples, traps and a final checklist. Each one links to targeted practice.</p>
      <div className="grid">
        {guide.types.map((t, i) => (
          <Link key={t.id} className={`tile c-${skill}`} href={`/${skill}/${t.id}`}>
            <h3>{i + 1}. {t.name}</h3>
            <p>{strip(t.what).slice(0, 120)}…</p>
            <div className="meta"><span className="badge">{t.freq}</span>{t.practice && <ProgressBadge id={t.practice} />}</div>
          </Link>
        ))}
      </div>
      <h2>Next steps</h2>
      <div className="btn-row">
        <Link className="btn" href={`/practice/${skill}`}>All {cap(skill)} practice sets ({sets.length}) →</Link>
        {mock && <Link className="btn soft" href={`/mock-tests/${mock.id}`}>{mock.title}</Link>}
        {skill === 'listening' && <Link className="btn soft" href="/practice/drills">Dictation drills</Link>}
      </div>
    </>
  );
}

export function QuestionTypePage({ skill, id }: { skill: RL; id: string }) {
  const { guide, sets, chapters } = data(skill);
  const t = guide.types.find(x => x.id === id);
  if (!t) notFound();
  const ch = chapters[id];
  const practice = sets.filter(p => p.type === t.id || p.id === t.practice);
  const practiceCard = (
    <div className="card" style={{ borderLeft: `4px solid var(--${skill})` }}>
      <p className="mt0">Now apply the method to a full practice set. Afterwards, review every wrong answer: which step of the method did you skip?</p>
      {practice.length ? practice.map(p => (
        <div className="btn-row" key={p.id}><Link className="btn" href={`/practice/${skill}/${p.id}`}>{p.title}</Link><ProgressBadge id={p.id} /></div>
      )) : <p className="muted">This type is practised within the mixed sets on the practice page.</p>}
      <div className="btn-row"><Link className="btn soft" href={`/practice/${skill}`}>All {skill} practice</Link>{mockTests.filter(m => m.skill === skill).map(m => <Link key={m.id} className="btn soft" href={`/mock-tests/${m.id}`}>{m.title}</Link>)}</div>
    </div>
  );
  return (
    <>
      <PageHeader crumbs={[[cap(skill), `/${skill}`], [t.name]]} title={t.name} lead={<span dangerouslySetInnerHTML={{ __html: t.what }} />}>
        <div className="btn-row" style={{ marginTop: 0 }}><span className="badge accent">{cap(skill)}</span><span className="badge">{t.freq}</span></div>
      </PageHeader>
      <SubNav items={SECTION_NAV[skill]} />
      {ch ? <ChapterView ch={ch} accent={skill} extras={[{ id: 'practice', title: 'Practise this question type', node: practiceCard, after: 'end' }]} /> : (
        <>
          <div className="card">
            <h3 className="mt0">What the instructions look like</h3>
            <div className="instructions" style={{ background: 'var(--surface-2)', padding: '12px 16px', borderRadius: 8 }} dangerouslySetInnerHTML={{ __html: t.looksLike }} />
            {t.definitions && <div style={{ marginTop: 12 }}><Html html={t.definitions} /></div>}
          </div>
          <div className="grid-2">
            <div className="card"><h3 className="mt0">How to approach it – step by step</h3><List className="steps" items={t.strategy} /></div>
            <div className="card"><h3 className="mt0">Common traps</h3><List className="xlist" items={t.traps} /></div>
          </div>
          <div className="card"><h3 className="mt0">Worked example</h3><Html html={t.example} /></div>
          {practiceCard}
        </>
      )}
    </>
  );
}

export const typeParams = (skill: RL) => data(skill).guide.types.map(t => ({ type: t.id }));
export const typeTitle = (skill: RL, id: string) => data(skill).guide.types.find(t => t.id === id)?.name || cap(skill);

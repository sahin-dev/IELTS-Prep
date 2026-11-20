/* Shared server components for the Listening and Reading sections */
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { listening, listeningSets, mockTests, reading, readingSets } from '@/content';
import { SECTION_NAV } from '@/lib/nav';
import { Html, List, PageHeader, strip } from './ui';
import { ProgressBadge, SubNav } from './client-ui';

type RL = 'reading' | 'listening';
const data = (skill: RL) => (skill === 'reading' ? { guide: reading, sets: readingSets } : { guide: listening, sets: listeningSets });
const cap = (s: string) => s[0].toUpperCase() + s.slice(1);

export function SkillOverview({ skill }: { skill: RL }) {
  const { guide, sets } = data(skill);
  const mock = mockTests.find(m => m.skill === skill);
  return (
    <>
      <PageHeader crumbs={[[cap(skill)]]} title={`${cap(skill)}: format, strategies & question types`} />
      <SubNav items={SECTION_NAV[skill]} />
      {skill === 'reading' && <div className="callout tip"><strong>Not sure which questions to answer first?</strong>Use the <Link href="/reading/answer-order">Reading answer-order guide</Link> to see which tasks follow the passage, which should be left until later, and which require the full text.</div>}
      <div className="card"><Html html={guide.intro} /></div>
      <h2>All {cap(skill)} question types</h2>
      <p className="muted">Open each type to learn what it tests, what the instructions look like, how to approach it step by step and the common traps. Each one links to targeted practice.</p>
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
  const { guide, sets } = data(skill);
  const idx = guide.types.findIndex(t => t.id === id);
  const t = guide.types[idx];
  if (!t) notFound();
  const prev = guide.types[idx - 1], next = guide.types[idx + 1];
  const practice = sets.filter(p => p.type === t.id || p.id === t.practice);
  return (
    <>
      <PageHeader crumbs={[[cap(skill), `/${skill}`], [t.name]]} title={t.name}>
        <div className="btn-row" style={{ marginTop: 0 }}><span className="badge accent">{cap(skill)}</span><span className="badge">{t.freq}</span></div>
      </PageHeader>
      <SubNav items={SECTION_NAV[skill]} />
      <div className="card">
        <h3 className="mt0">What is it?</h3><Html as="p" html={t.what} />
        <h4>What the instructions look like</h4>
        <div className="instructions" style={{ background: 'var(--surface-2)', padding: '12px 16px', borderRadius: 8 }} dangerouslySetInnerHTML={{ __html: t.looksLike }} />
        {t.definitions && <div style={{ marginTop: 12 }}><Html html={t.definitions} /></div>}
      </div>
      <div className="grid-2">
        <div className="card"><h3 className="mt0">How to approach it – step by step</h3><List className="steps" items={t.strategy} /></div>
        <div className="card"><h3 className="mt0">Common traps</h3><List className="xlist" items={t.traps} /></div>
      </div>
      <div className="card"><h3 className="mt0">Worked example</h3><Html html={t.example} /></div>
      <div className="card" style={{ borderLeft: `4px solid var(--${skill})` }}>
        <h3 className="mt0">Practise this question type</h3>
        {practice.length ? practice.map(p => (
          <div className="btn-row" key={p.id}><Link className="btn" href={`/practice/${skill}/${p.id}`}>{p.title}</Link><ProgressBadge id={p.id} /></div>
        )) : <p className="muted">This type is practised within the mixed sets on the practice page.</p>}
      </div>
      <div className="btn-row" style={{ justifyContent: 'space-between' }}>
        {prev ? <Link className="btn soft" href={`/${skill}/${prev.id}`}>← {prev.name}</Link> : <span />}
        {next && <Link className="btn soft" href={`/${skill}/${next.id}`}>{next.name} →</Link>}
      </div>
    </>
  );
}

export const typeParams = (skill: RL) => data(skill).guide.types.map(t => ({ type: t.id }));
export const typeTitle = (skill: RL, id: string) => data(skill).guide.types.find(t => t.id === id)?.name || cap(skill);

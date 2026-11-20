'use client';
import { useEffect, useMemo, useState } from 'react';
import type { TestSet, VocabBank } from '@/lib/types';
import { buildDictation, buildVocabQuiz, flatten, shuffle, type FlatItem } from '@/lib/vocab-quiz';
import { SRS } from '@/lib/srs';
import { Activity } from '@/lib/storage';
import { speak } from '@/lib/tts';
import { Tabs } from './client-ui';
import TestRunner from './TestRunner';

export default function VocabBankView({ bank }: { bank: VocabBank }) {
  const items = useMemo(() => flatten(bank), [bank]);
  const spelling = bank.id === 'l-spelling';
  return (
    <Tabs storageKey="vocab" tabs={[
      { label: 'Word list', content: <WordList bank={bank} /> },
      { label: 'Flashcards', content: <Flashcards bankId={bank.id} items={items} /> },
      { label: spelling ? 'Dictation quiz' : 'Quiz', content: <Quiz bank={bank} items={items} spelling={spelling} /> }
    ]} />
  );
}

function WordList({ bank }: { bank: VocabBank }) {
  return <>{bank.groups.map(g => {
    const hasEx = g.items.some(i => i[2]);
    return (
      <div key={g.h}>
        <h3>{g.h}</h3>
        <div className="table-wrap"><table className="data-table vocab-table"><thead><tr><th>Word / phrase</th><th>{bank.id === 'l-spelling' ? 'Spelling hint' : 'Meaning / use'}</th>{hasEx && <th>Example</th>}<th /></tr></thead>
          <tbody>{g.items.map(i => (
            <tr key={i[0]}><td>{i[0]}</td><td>{i[1]}</td>{hasEx && <td className="example">{i[2]}</td>}
              <td><button className="btn small soft" title="Pronounce" onClick={() => speak(i[0].split(/[/→]/)[0])}>🔊</button></td></tr>
          ))}</tbody></table></div>
      </div>
    );
  })}</>;
}

function Flashcards({ bankId, items }: { bankId: string; items: FlatItem[] }) {
  const words = useMemo(() => items.map(i => i.w), [items]);
  const [mode, setMode] = useState<'due' | 'all'>('due');
  const [deck, setDeck] = useState<FlatItem[]>([]);
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [stats, setStats] = useState({ due: 0, learning: 0, mastered: 0, unseen: 0 });

  const rebuild = (m = mode) => {
    const state = SRS.load(bankId);
    setDeck(m === 'due' ? items.filter(x => SRS.isDue(state[x.w])) : items);
    setPos(0); setFlipped(false);
    setStats(SRS.stats(bankId, words));
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => rebuild(), [bankId]);

  const card = deck[pos];
  function answer(knew: boolean) {
    if (!card) return;
    SRS.answer(bankId, card.w, knew);
    Activity.mark();
    setStats(SRS.stats(bankId, words));
    setFlipped(false);
    if (mode === 'due' && knew) { const d = deck.filter((_, i) => i !== pos); setDeck(d); setPos(p => (d.length ? p % d.length : 0)); }
    else if (mode === 'due') { const d = [...deck.filter((_, i) => i !== pos), card]; setDeck(d); setPos(p => p % d.length); }
    else setPos(p => (p + 1) % deck.length);
  }

  return (
    <div>
      <div className="btn-row" style={{ justifyContent: 'center' }}>
        <div className="pill-nav" style={{ margin: 0 }}>
          <button className={mode === 'due' ? 'active' : ''} onClick={() => { setMode('due'); rebuild('due'); }}>Due today ({stats.due})</button>
          <button className={mode === 'all' ? 'active' : ''} onClick={() => { setMode('all'); rebuild('all'); }}>All cards ({items.length})</button>
        </div>
        <span className="badge">new {stats.unseen}</span><span className="badge warn">learning {stats.learning}</span><span className="badge ok">mastered {stats.mastered}</span>
      </div>
      {card ? <>
        <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(f => !f)} role="button" tabIndex={0} onKeyDown={e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); setFlipped(f => !f); } }}>
          <div className="inner">
            <div className="face front"><div className="small muted">{card.g}</div><div className="w">{card.w}</div><div className="small muted" style={{ marginTop: 14 }}>Click or press Space to flip</div></div>
            <div className="face back"><div className="m">{card.m}</div><div className="e">{card.e}</div></div>
          </div>
        </div>
        <div className="fc-controls">
          <button className="btn soft" onClick={() => { setFlipped(false); setPos(p => (p - 1 + deck.length) % deck.length); }}>← Prev</button>
          <button className="btn soft" onClick={() => { setDeck(shuffle(deck)); setPos(0); setFlipped(false); }}>Shuffle</button>
          <button className="btn soft" onClick={() => speak(card.w.split(/[/→]/)[0])}>🔊</button>
          <button className="btn soft" onClick={() => answer(false)}>Still learning</button>
          <button className="btn" onClick={() => answer(true)}>I knew it ✓</button>
        </div>
        <p className="center small muted">Card {pos + 1} of {deck.length}. Cards you know come back after 1, 3, 7, 14 and 30 days (spaced repetition).</p>
      </> : (
        <div className="card center"><h3 className="mt0">Nothing due today 🎉</h3><p>You have reviewed every card that is due. Come back tomorrow, or practise all cards.</p>
          <button className="btn" onClick={() => { setMode('all'); rebuild('all'); }}>Practise all cards</button></div>
      )}
    </div>
  );
}

function Quiz({ bank, items, spelling }: { bank: VocabBank; items: FlatItem[]; spelling: boolean }) {
  const [quiz, setQuiz] = useState<TestSet | null>(null);
  const [key, setKey] = useState(0);
  const make = () => { setQuiz(spelling ? buildDictation(items, 'vq-' + bank.id) : buildVocabQuiz(items, 'vq-' + bank.id, 'Vocabulary: ' + bank.name, 10)); setKey(k => k + 1); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(make, [bank.id]);
  return (
    <div>
      {spelling && <div className="callout"><strong>Dictation</strong>Press 🔊 to hear each word, then type it. This trains the spelling accuracy you need in Listening.</div>}
      <div className="btn-row"><button className="btn soft" onClick={make}>New {spelling ? 'words' : 'quiz'}</button><span className="muted small">10 random questions from this bank</span></div>
      {quiz && <TestRunner key={key} set={quiz} skill="vocab" embedded />}
    </div>
  );
}

/** Mixed quiz across many banks (practice page). */
export function MixedVocabQuiz({ banks }: { banks: VocabBank[] }) {
  const [sel, setSel] = useState('all');
  const [quiz, setQuiz] = useState<TestSet | null>(null);
  const [key, setKey] = useState(0);
  const usable = banks.filter(b => b.id !== 'l-spelling');
  const make = (id = sel) => {
    const items = id === 'all' ? usable.flatMap(flatten) : flatten(usable.find(b => b.id === id) as VocabBank);
    setQuiz(buildVocabQuiz(items, 'vq-' + id, id === 'all' ? 'Mixed vocabulary quiz' : 'Vocabulary: ' + usable.find(b => b.id === id)?.name, id === 'all' ? 20 : 10));
    setKey(k => k + 1);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => make('all'), []);
  return (
    <div>
      <div className="pill-nav">
        <button className={sel === 'all' ? 'active' : ''} onClick={() => { setSel('all'); make('all'); }}>Mixed (all banks)</button>
        {usable.map(b => <button key={b.id} className={sel === b.id ? 'active' : ''} onClick={() => { setSel(b.id); make(b.id); }}>{b.name}</button>)}
      </div>
      <div className="btn-row"><button className="btn soft" onClick={() => make()}>New questions</button></div>
      {quiz && <TestRunner key={key} set={quiz} skill="vocab" embedded />}
    </div>
  );
}

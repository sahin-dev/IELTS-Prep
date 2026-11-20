import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Html, PageHeader } from '@/components/ui';
import { SubNav } from '@/components/client-ui';
import TestRunner from '@/components/TestRunner';
import { SECTION_NAV } from '@/lib/nav';
import { grammar } from '@/content';

type Params = { params: Promise<{ topic: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return grammar.map(g => ({ topic: g.id })); }
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { topic } = await params;
  return { title: grammar.find(g => g.id === topic)?.name || 'Grammar' };
}

export default async function Page({ params }: Params) {
  const { topic } = await params;
  const i = grammar.findIndex(g => g.id === topic), g = grammar[i];
  if (!g) notFound();
  const prev = grammar[i - 1], next = grammar[i + 1];
  return (
    <>
      <PageHeader crumbs={[['Grammar', '/grammar'], [g.name]]} title={g.name} lead={g.short} />
      <SubNav items={SECTION_NAV.language} />
      <div className="card"><Html html={g.html} /></div>
      <h2>Exercises</h2>
      <TestRunner set={{ id: 'g-' + g.id, type: 'grammar', title: 'Grammar: ' + g.name, groups: g.exercises }} skill="grammar" embedded />
      <div className="btn-row" style={{ justifyContent: 'space-between' }}>
        {prev ? <Link className="btn soft" href={`/grammar/${prev.id}`}>← {prev.name}</Link> : <span />}
        {next && <Link className="btn soft" href={`/grammar/${next.id}`}>{next.name} →</Link>}
      </div>
    </>
  );
}

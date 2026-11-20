/* Small server-safe presentational components */
import Link from 'next/link';
import type { ReactNode } from 'react';
import { renderChart } from '@/lib/charts';
import type { ChartSpec } from '@/lib/types';

/** Render trusted HTML content (all content is authored in src/content). */
export function Html({ html, as = 'div', className }: { html: string; as?: 'div' | 'span' | 'p' | 'li'; className?: string }) {
  const Tag = as;
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

export function Chart({ spec }: { spec?: ChartSpec }) {
  if (!spec) return null;
  return <div dangerouslySetInnerHTML={{ __html: renderChart(spec) }} />;
}

export function Crumbs({ items }: { items: [string, string?][] }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      {items.map(([label, href], i) => (
        <span key={i}>{i > 0 && ' › '}{href ? <Link href={href}>{label}</Link> : label}</span>
      ))}
    </nav>
  );
}

export function PageHeader({ crumbs, title, lead, children }: { crumbs?: [string, string?][]; title: string; lead?: ReactNode; children?: ReactNode }) {
  return (
    <header className="page-header">
      {crumbs && <Crumbs items={[['Home', '/'], ...crumbs]} />}
      <h1>{title}</h1>
      {lead && <p className="lead">{lead}</p>}
      {children}
    </header>
  );
}

export function Tile({ href, title, children, accent, meta }: { href: string; title: ReactNode; children?: ReactNode; accent?: string; meta?: ReactNode }) {
  return (
    <Link className={`tile ${accent ? 'c-' + accent : ''}`} href={href}>
      <h3>{title}</h3>
      {children && <p>{children}</p>}
      {meta && <div className="meta">{meta}</div>}
    </Link>
  );
}

export function List({ items, className }: { items: string[]; className?: string }) {
  return <ul className={className}>{items.map((x, i) => <li key={i} dangerouslySetInnerHTML={{ __html: x }} />)}</ul>;
}

export function Structure({ items }: { items: [string, string][] }) {
  return <ul className="structure">{items.map(([h, d]) => <li key={h}><b>{h}</b><span dangerouslySetInnerHTML={{ __html: d }} /></li>)}</ul>;
}

export function ModelAnswer({ html, title = 'Model answer (Band 8–9) – highlighted phrases are reusable language' }: { html: string; title?: string }) {
  return (
    <details className="acc" open>
      <summary>{title}</summary>
      <div className="acc-body"><div className="model-answer" dangerouslySetInnerHTML={{ __html: html }} /></div>
    </details>
  );
}

export const strip = (s: string) => s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

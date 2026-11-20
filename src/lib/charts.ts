/* SVG chart renderer for Writing Task 1 visuals. Returns an HTML/SVG string. */
import type { ChartSeries, ChartSpec } from './types';

const PALETTE = ['#2563eb', '#ea580c', '#059669', '#9333ea', '#db2777', '#ca8a04', '#0891b2'];
const esc = (s: unknown) => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] as string));

function niceMax(v: number) {
  if (v <= 0) return 10;
  const p = Math.pow(10, Math.floor(Math.log10(v)));
  const n = v / p;
  const step = n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10;
  return step * p;
}
const fmt = (v: number) => (Number.isInteger(v) ? v : +v.toFixed(1));
interface Margin { l: number; r: number; t: number; b: number }

function legend(series: { name: string; color?: string }[], x: number, y: number, maxW: number) {
  let out = '', cx = x, cy = y;
  series.forEach((s, i) => {
    const w = 26 + s.name.length * 7.2;
    if (cx + w > x + maxW) { cx = x; cy += 20; }
    out += `<rect x="${cx}" y="${cy - 9}" width="14" height="10" rx="2" fill="${s.color || PALETTE[i % PALETTE.length]}"/>` +
      `<text x="${cx + 19}" y="${cy}" font-size="12" fill="currentColor">${esc(s.name)}</text>`;
    cx += w + 14;
  });
  return out;
}

function axes(spec: ChartSpec, W: number, H: number, m: Margin, yMax: number, ticks: number) {
  let g = '';
  const ih = H - m.t - m.b;
  for (let i = 0; i <= ticks; i++) {
    const v = (yMax * i) / ticks, y = m.t + ih - (ih * i) / ticks;
    g += `<line x1="${m.l}" x2="${W - m.r}" y1="${y}" y2="${y}" stroke="currentColor" stroke-opacity="${i === 0 ? 0.6 : 0.12}"/>`;
    g += `<text x="${m.l - 8}" y="${y + 4}" font-size="11" text-anchor="end" fill="currentColor" fill-opacity=".75">${fmt(v)}${spec.unit === '%' ? '%' : ''}</text>`;
  }
  if (spec.yLabel) g += `<text transform="translate(14 ${m.t + ih / 2}) rotate(-90)" font-size="12" text-anchor="middle" fill="currentColor" fill-opacity=".8">${esc(spec.yLabel)}</text>`;
  return g;
}

function line(spec: ChartSpec) {
  const series = spec.series as ChartSeries[], xs = spec.x as string[];
  const W = spec.width || 660, H = 380, m = { l: 62, r: 24, t: 44, b: 86 };
  const all = series.flatMap(s => s.data.filter((v): v is number => v != null));
  const yMax = spec.yMax || niceMax(Math.max(...all) * 1.05);
  const iw = W - m.l - m.r, ih = H - m.t - m.b, n = xs.length;
  const X = (i: number) => m.l + (n === 1 ? iw / 2 : (iw * i) / (n - 1));
  const Y = (v: number) => m.t + ih - (ih * v) / yMax;
  let g = axes(spec, W, H, m, yMax, 5);
  xs.forEach((lab, i) => { g += `<text x="${X(i)}" y="${H - m.b + 18}" font-size="11" text-anchor="middle" fill="currentColor" fill-opacity=".8">${esc(lab)}</text>`; });
  if (spec.xLabel) g += `<text x="${m.l + iw / 2}" y="${H - m.b + 38}" font-size="12" text-anchor="middle" fill="currentColor" fill-opacity=".8">${esc(spec.xLabel)}</text>`;
  series.forEach((s, si) => {
    const c = s.color || PALETTE[si % PALETTE.length];
    const pts = s.data.map((v, i) => (v == null ? null : [X(i), Y(v)])).filter((p): p is number[] => !!p);
    g += `<polyline fill="none" stroke="${c}" stroke-width="2.6" points="${pts.map(p => p.join(',')).join(' ')}" ${s.dashed ? 'stroke-dasharray="6 4"' : ''}/>`;
    pts.forEach(p => (g += `<circle cx="${p[0]}" cy="${p[1]}" r="3.6" fill="${c}"/>`));
  });
  return wrap(spec, W, H, g + legend(series, m.l, H - 26, iw));
}

function bar(spec: ChartSpec) {
  const series = spec.series as ChartSeries[], xs = spec.x as string[];
  const n = xs.length, ns = series.length;
  const W = spec.width || Math.max(560, Math.min(760, 120 + n * ns * 34)), H = 380, m = { l: 62, r: 20, t: 44, b: 86 };
  const all = series.flatMap(s => s.data.filter((v): v is number => v != null));
  const yMax = spec.yMax || niceMax(Math.max(...all) * 1.05);
  const iw = W - m.l - m.r, ih = H - m.t - m.b;
  const gw = iw / n, bw = Math.min(42, (gw * 0.75) / ns);
  let g = axes(spec, W, H, m, yMax, 5);
  xs.forEach((lab, i) => {
    const gx = m.l + gw * i + gw / 2;
    const words = String(lab).split(' ');
    const l1 = words.length > 2 ? words.slice(0, Math.ceil(words.length / 2)).join(' ') : lab;
    const l2 = words.length > 2 ? words.slice(Math.ceil(words.length / 2)).join(' ') : '';
    g += `<text x="${gx}" y="${H - m.b + 17}" font-size="11" text-anchor="middle" fill="currentColor" fill-opacity=".8">${esc(l1)}</text>`;
    if (l2) g += `<text x="${gx}" y="${H - m.b + 30}" font-size="11" text-anchor="middle" fill="currentColor" fill-opacity=".8">${esc(l2)}</text>`;
    series.forEach((s, si) => {
      const v = s.data[i] ?? 0;
      const x = gx - (bw * ns) / 2 + si * bw, h = (ih * v) / yMax;
      g += `<rect x="${x + 1}" y="${m.t + ih - h}" width="${bw - 2}" height="${h}" rx="2" fill="${s.color || PALETTE[si % PALETTE.length]}"><title>${esc(s.name)}: ${v}</title></rect>`;
      if (spec.values) g += `<text x="${x + bw / 2}" y="${m.t + ih - h - 4}" font-size="9.5" text-anchor="middle" fill="currentColor">${v}</text>`;
    });
  });
  const lg = ns > 1 || spec.forceLegend ? legend(series, m.l, H - 26, iw) : '';
  return wrap(spec, W, H, g + lg);
}

function pie(spec: ChartSpec) {
  const pies = spec.pies || [], R = 92, PW = 300;
  const labels = [...new Set(pies.flatMap(p => p.slices.map(s => s[0])))];
  const colorOf = (l: string) => PALETTE[labels.indexOf(l) % PALETTE.length];
  const W = Math.max(PW * pies.length, 340), H = 290 + Math.ceil(labels.length / 3) * 20;
  let g = '';
  pies.forEach((p, pi) => {
    const cx = PW * pi + PW / 2 + (W - PW * pies.length) / 2, cy = 170;
    const total = p.slices.reduce((a, s) => a + s[1], 0);
    let a0 = -Math.PI / 2;
    g += `<text x="${cx}" y="52" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">${esc(p.title || '')}</text>`;
    p.slices.forEach(s => {
      const frac = s[1] / total, a1 = a0 + frac * Math.PI * 2, large = a1 - a0 > Math.PI ? 1 : 0;
      const x0 = cx + R * Math.cos(a0), y0 = cy + R * Math.sin(a0), x1 = cx + R * Math.cos(a1), y1 = cy + R * Math.sin(a1);
      g += frac >= 0.999 ? `<circle cx="${cx}" cy="${cy}" r="${R}" fill="${colorOf(s[0])}"/>` :
        `<path d="M${cx},${cy} L${x0},${y0} A${R},${R} 0 ${large} 1 ${x1},${y1} Z" fill="${colorOf(s[0])}" stroke="var(--surface,#fff)" stroke-width="1.5"><title>${esc(s[0])}: ${s[1]}%</title></path>`;
      const am = (a0 + a1) / 2, lr = frac < 0.07 ? R + 16 : R * 0.64;
      g += `<text x="${cx + lr * Math.cos(am)}" y="${cy + lr * Math.sin(am) + 4}" font-size="11.5" font-weight="700" text-anchor="middle" fill="${frac < 0.07 ? 'currentColor' : '#fff'}">${fmt(s[1])}%</text>`;
      a0 = a1;
    });
  });
  return wrap(spec, W, H, g + legend(labels.map(l => ({ name: l, color: colorOf(l) })), 20, 300, W - 40));
}

function table(spec: ChartSpec) {
  let h = `<div class="table-wrap"><table class="data-table plain" style="max-width:720px;margin:auto">`;
  if (spec.title) h += `<caption style="caption-side:top;font-weight:700;padding:8px">${esc(spec.title)}</caption>`;
  h += '<thead><tr>' + (spec.headers || []).map(x => `<th>${esc(x)}</th>`).join('') + '</tr></thead><tbody>';
  (spec.rows || []).forEach(r => (h += '<tr>' + r.map((c, i) => `<td${i === 0 ? ' style="font-weight:600"' : ''}>${esc(c)}</td>`).join('') + '</tr>'));
  return h + '</tbody></table></div>';
}

function processFlow(spec: ChartSpec) {
  const box = 'display:inline-flex;flex-direction:column;align-items:center;justify-content:center;min-width:120px;max-width:150px;min-height:74px;padding:8px 10px;border:2px solid #059669;border-radius:10px;font-size:.85rem;background:var(--surface);margin:6px 0';
  const steps = spec.steps || [];
  let h = `<div style="font-weight:700;margin-bottom:8px">${esc(spec.title || '')}</div><div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:4px">`;
  steps.forEach((s, i) => {
    const [title, sub] = Array.isArray(s) ? s : [s, ''];
    h += `<div style="${box}"><span style="font-size:.7rem;color:#059669;font-weight:800">STAGE ${i + 1}</span><b style="line-height:1.25">${esc(title)}</b>${sub ? `<span style="font-size:.74rem;opacity:.75;line-height:1.25">${esc(sub)}</span>` : ''}</div>`;
    if (i < steps.length - 1) h += '<span style="font-size:1.4rem;color:#059669;padding:0 2px">&#10132;</span>';
  });
  if (spec.cycle) h += '<span style="font-size:1.4rem;color:#059669;padding:0 2px" title="back to stage 1">&#8635;</span>';
  h += '</div>';
  if (spec.cycle) h += '<div class="cap">&#8635; The final stage leads back to Stage 1 (cyclical process)</div>';
  return h;
}

function wrap(spec: ChartSpec, W: number, H: number, inner: string) {
  const title = spec.title ? `<text x="${W / 2}" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">${esc(spec.title)}</text>` : '';
  return `<svg viewBox="0 0 ${W} ${H}" width="${W}" role="img" aria-label="${esc(spec.title || 'chart')}" style="color:var(--text);font-family:inherit">${title}${inner}</svg>`;
}

export function renderChart(spec?: ChartSpec): string {
  if (!spec) return '';
  if (spec.type === 'multi') return (spec.charts || []).map(renderChart).join('');
  const body = spec.type === 'line' ? line(spec) : spec.type === 'bar' ? bar(spec) : spec.type === 'pie' ? pie(spec) :
    spec.type === 'table' ? table(spec) : spec.type === 'process' ? processFlow(spec) : spec.svg || '';
  return `<div class="figure">${body}${spec.caption ? `<div class="cap">${esc(spec.caption)}</div>` : ''}</div>`;
}

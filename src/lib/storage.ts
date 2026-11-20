/* Browser storage helpers. All keys are prefixed with "ielts:". Safe to call during SSR (returns defaults). */

const PREFIX = 'ielts:';
const hasLS = () => typeof window !== 'undefined' && (() => { try { return !!window.localStorage; } catch { return false; } })();

export const Store = {
  get<T>(key: string, fallback: T): T {
    if (!hasLS()) return fallback;
    try { const v = localStorage.getItem(PREFIX + key); return v == null ? fallback : (JSON.parse(v) as T); } catch { return fallback; }
  },
  set(key: string, value: unknown) {
    if (!hasLS()) return;
    try { localStorage.setItem(PREFIX + key, JSON.stringify(value)); window.dispatchEvent(new CustomEvent('ielts-store', { detail: key })); } catch { /* quota / private mode */ }
  },
  del(key: string) { if (hasLS()) try { localStorage.removeItem(PREFIX + key); } catch { /* ignore */ } },
  exportAll(): Record<string, unknown> {
    const out: Record<string, unknown> = {};
    if (!hasLS()) return out;
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(PREFIX)) { try { out[k.slice(PREFIX.length)] = JSON.parse(localStorage.getItem(k) || 'null'); } catch { /* skip */ } }
    }
    return out;
  },
  importAll(data: Record<string, unknown>) { Object.entries(data).forEach(([k, v]) => Store.set(k, v)); },
  clearAll() {
    if (!hasLS()) return;
    Object.keys(localStorage).filter(k => k.startsWith(PREFIX)).forEach(k => localStorage.removeItem(k));
    window.dispatchEvent(new CustomEvent('ielts-store', { detail: '*' }));
  }
};

export interface ResultRecord { score: number; total: number; best: number; last: number; attempts: number; date: string; skill: string; title: string }

export const Progress = {
  all(): Record<string, ResultRecord> { return Store.get('results', {}); },
  get(id: string): ResultRecord | undefined { return this.all()[id]; },
  record(id: string, info: { score: number; total: number; skill: string; title: string }) {
    const all = this.all();
    const prev = all[id];
    all[id] = {
      ...info,
      attempts: (prev?.attempts || 0) + 1,
      best: Math.max(prev?.best || 0, info.score),
      last: info.score,
      date: new Date().toISOString()
    };
    Store.set('results', all);
    Activity.mark();
    return all[id];
  }
};

/** Study-day tracking for the streak counter. */
export const Activity = {
  days(): string[] { return Store.get('activeDays', []); },
  mark() {
    const today = new Date().toISOString().slice(0, 10);
    const d = this.days();
    if (!d.includes(today)) Store.set('activeDays', [...d, today].slice(-400));
  },
  streak(): number {
    const set = new Set(this.days());
    let n = 0;
    const day = new Date();
    if (!set.has(day.toISOString().slice(0, 10))) day.setDate(day.getDate() - 1); // streak still alive if studied yesterday
    while (set.has(day.toISOString().slice(0, 10))) { n++; day.setDate(day.getDate() - 1); }
    return n;
  }
};

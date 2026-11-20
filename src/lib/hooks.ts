'use client';
import { useEffect, useRef, useState } from 'react';
import { Store } from './storage';

export const fmtTime = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

/** True after the first client render – use before reading localStorage to avoid hydration mismatches. */
export function useMounted() {
  const [m, setM] = useState(false);
  useEffect(() => setM(true), []);
  return m;
}

/** Countdown timer. `onEnd` fires once when it reaches zero. */
export function useCountdown(seconds: number, onEnd?: () => void) {
  const [left, setLeft] = useState(seconds);
  const [running, setRunning] = useState(false);
  const endRef = useRef(onEnd);
  endRef.current = onEnd;
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setLeft(l => (l > 0 ? l - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [running]);
  useEffect(() => {
    if (running && left === 0) { setRunning(false); endRef.current?.(); }
  }, [left, running]);
  return {
    left, running, label: fmtTime(left),
    start: () => setRunning(true),
    pause: () => setRunning(false),
    reset: (s = seconds) => { setRunning(false); setLeft(s); }
  };
}

/** A value persisted in localStorage (read after mount). */
export function useStored<T>(key: string, initial: T): [T, (v: T) => void] {
  const [v, setV] = useState<T>(initial);
  useEffect(() => {
    setV(Store.get(key, initial));
    const on = (e: Event) => { const d = (e as CustomEvent).detail; if (d === key || d === '*') setV(Store.get(key, initial)); };
    window.addEventListener('ielts-store', on);
    return () => window.removeEventListener('ielts-store', on);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  return [v, (nv: T) => { setV(nv); Store.set(key, nv); }];
}

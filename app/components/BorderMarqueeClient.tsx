'use client';

import { useEffect, useState } from 'react';
import type { Tick } from '../lib/quotes';

type Quotes = { indices: Tick[]; stocks: Tick[]; mixed: Tick[] };

// How often the browser asks for fresh prices.
const POLL_MS = 60_000;

function formatPrice(n: number) {
  if (n >= 10000)
    return n.toLocaleString('en-US', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
  if (n >= 1) return n.toFixed(2);
  return n.toFixed(4);
}

function formatChange(t: Tick) {
  const up = t.change >= 0;
  const pct = (t.change / (t.price - t.change)) * 100;
  const abs = `${up ? '+' : '-'}${Math.abs(t.change).toFixed(2)}`;
  const pctStr = `${up ? '+' : '-'}${Math.abs(pct).toFixed(2)}%`;
  return { up, abs, pct: pctStr };
}

function Ticker({ ticks, repeats = 3 }: { ticks: Tick[]; repeats?: number }) {
  const out: React.ReactNode[] = [];
  for (let r = 0; r < repeats; r++) {
    for (let i = 0; i < ticks.length; i++) {
      const t = ticks[i];
      const c = formatChange(t);
      out.push(
        <span key={`${r}-${i}`} className={`tick ${c.up ? 'up' : 'down'}`}>
          <span className="sym">{t.display}</span>
          <span className="px">{formatPrice(t.price)}</span>
          <span className="chg">
            {c.up ? '▲' : '▼'} {c.abs} ({c.pct})
          </span>
        </span>
      );
    }
  }
  return <>{out}</>;
}

export default function BorderMarqueeClient({ initial }: { initial: Quotes }) {
  const [quotes, setQuotes] = useState<Quotes>(initial);

  useEffect(() => {
    let cancelled = false;

    async function refresh() {
      try {
        const res = await fetch('/api/quotes', { cache: 'no-store' });
        if (!res.ok) return;
        const data: Quotes = await res.json();
        if (!cancelled) setQuotes(data);
      } catch {
        // ignore transient network errors; keep showing the last values
      }
    }

    const id = setInterval(refresh, POLL_MS);
    // Refresh immediately when the tab becomes visible again.
    const onVisible = () => {
      if (document.visibilityState === 'visible') refresh();
    };
    document.addEventListener('visibilitychange', onVisible);

    return () => {
      cancelled = true;
      clearInterval(id);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, []);

  const top = quotes.indices;
  const bottom = quotes.stocks;
  const left = quotes.mixed;
  const right = quotes.stocks;

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9990,
      }}
    >
      <div className="marquee marquee-top">
        <div className="marquee-track marquee-track-x">
          <span className="ticker-row">
            <Ticker ticks={top} />
          </span>
          <span className="ticker-row">
            <Ticker ticks={top} />
          </span>
        </div>
      </div>
      <div className="marquee marquee-bottom">
        <div className="marquee-track marquee-track-x marquee-track-x-reverse">
          <span className="ticker-row">
            <Ticker ticks={bottom} />
          </span>
          <span className="ticker-row">
            <Ticker ticks={bottom} />
          </span>
        </div>
      </div>
      <div className="marquee marquee-left">
        <div className="marquee-track marquee-track-y">
          <span className="ticker-row">
            <Ticker ticks={left} />
          </span>
          <span className="ticker-row">
            <Ticker ticks={left} />
          </span>
        </div>
      </div>
      <div className="marquee marquee-right">
        <div className="marquee-track marquee-track-y marquee-track-y-reverse">
          <span className="ticker-row">
            <Ticker ticks={right} />
          </span>
          <span className="ticker-row">
            <Ticker ticks={right} />
          </span>
        </div>
      </div>
    </div>
  );
}

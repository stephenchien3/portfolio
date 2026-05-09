import { fetchAllQuotes, type Tick } from '../lib/quotes';

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

export default async function BorderMarquee() {
  const { indices, stocks, mixed } = await fetchAllQuotes();

  const top = indices.length ? indices : stocks;
  const bottom = stocks.length ? stocks : indices;
  const left = mixed.length ? mixed : indices;
  const right = stocks.length ? stocks : indices;

  if (!top.length && !bottom.length && !left.length && !right.length) {
    return null;
  }

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

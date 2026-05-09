type Tick = {
  symbol: string;
  price: number;
  change: number;
};

const INDICES: Tick[] = [
  { symbol: 'S&P 500', price: 5742.31, change: 12.84 },
  { symbol: 'DOW', price: 41523.12, change: -84.6 },
  { symbol: 'NASDAQ', price: 18421.55, change: 64.21 },
  { symbol: 'RUSSELL 2000', price: 2245.78, change: 5.12 },
  { symbol: 'FTSE 100', price: 8312.4, change: -22.18 },
  { symbol: 'NIKKEI', price: 39214.66, change: 142.05 },
  { symbol: 'VIX', price: 14.62, change: -0.43 },
];

const STOCKS: Tick[] = [
  { symbol: 'AAPL', price: 224.31, change: 1.42 },
  { symbol: 'MSFT', price: 432.18, change: -2.05 },
  { symbol: 'GOOGL', price: 178.92, change: 0.84 },
  { symbol: 'AMZN', price: 195.4, change: 2.31 },
  { symbol: 'NVDA', price: 142.87, change: -3.6 },
  { symbol: 'META', price: 522.13, change: 4.22 },
  { symbol: 'TSLA', price: 268.45, change: -5.18 },
  { symbol: 'BRK.B', price: 462.7, change: 1.05 },
  { symbol: 'JPM', price: 218.32, change: 0.62 },
  { symbol: 'V', price: 287.15, change: -0.91 },
  { symbol: 'UNH', price: 542.6, change: 3.04 },
  { symbol: 'XOM', price: 116.4, change: -0.85 },
  { symbol: 'WMT', price: 92.18, change: 0.41 },
  { symbol: 'AVGO', price: 168.55, change: 2.92 },
  { symbol: 'LLY', price: 814.32, change: -6.4 },
];

const CRYPTO_FX: Tick[] = [
  { symbol: 'BTC', price: 67421.5, change: 482.3 },
  { symbol: 'ETH', price: 3284.12, change: -42.6 },
  { symbol: 'SOL', price: 168.4, change: 4.18 },
  { symbol: 'EUR/USD', price: 1.0824, change: 0.0021 },
  { symbol: 'USD/JPY', price: 154.32, change: -0.18 },
  { symbol: 'GBP/USD', price: 1.2745, change: 0.0042 },
  { symbol: 'GOLD', price: 2412.6, change: 8.4 },
  { symbol: 'OIL WTI', price: 78.42, change: -0.62 },
  { symbol: '10Y YIELD', price: 4.31, change: 0.04 },
];

function formatPrice(n: number) {
  if (n >= 10000) return n.toLocaleString('en-US', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
  if (n >= 100) return n.toFixed(2);
  if (n >= 1) return n.toFixed(2);
  return n.toFixed(4);
}

function formatChange(t: Tick) {
  const sign = t.change >= 0 ? '+' : '';
  const pct = (t.change / t.price) * 100;
  return {
    sign,
    abs: `${sign}${t.change >= 0 ? '' : '-'}${Math.abs(t.change).toFixed(2)}`,
    pct: `${sign}${pct.toFixed(2)}%`,
    up: t.change >= 0,
  };
}

function Ticker({ ticks, repeats = 3 }: { ticks: Tick[]; repeats?: number }) {
  const out: React.ReactNode[] = [];
  for (let r = 0; r < repeats; r++) {
    for (let i = 0; i < ticks.length; i++) {
      const t = ticks[i];
      const c = formatChange(t);
      out.push(
        <span key={`${r}-${i}`} className={`tick ${c.up ? 'up' : 'down'}`}>
          <span className="sym">{t.symbol}</span>
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

export default function BorderMarquee() {
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
            <Ticker ticks={INDICES} />
          </span>
          <span className="ticker-row">
            <Ticker ticks={INDICES} />
          </span>
        </div>
      </div>
      <div className="marquee marquee-bottom">
        <div className="marquee-track marquee-track-x marquee-track-x-reverse">
          <span className="ticker-row">
            <Ticker ticks={STOCKS} />
          </span>
          <span className="ticker-row">
            <Ticker ticks={STOCKS} />
          </span>
        </div>
      </div>
      <div className="marquee marquee-left">
        <div className="marquee-track marquee-track-y">
          <span className="ticker-row">
            <Ticker ticks={CRYPTO_FX} />
          </span>
          <span className="ticker-row">
            <Ticker ticks={CRYPTO_FX} />
          </span>
        </div>
      </div>
      <div className="marquee marquee-right">
        <div className="marquee-track marquee-track-y marquee-track-y-reverse">
          <span className="ticker-row">
            <Ticker ticks={STOCKS} />
          </span>
          <span className="ticker-row">
            <Ticker ticks={STOCKS} />
          </span>
        </div>
      </div>
    </div>
  );
}

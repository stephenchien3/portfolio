export type Tick = {
  symbol: string;
  display: string;
  price: number;
  change: number;
};

type SymbolSpec = { symbol: string; display: string };

const REVALIDATE_SECONDS = 60;

async function fetchOne(spec: SymbolSpec): Promise<Tick | null> {
  const encoded = encodeURIComponent(spec.symbol);
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encoded}`;
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
        Accept: 'application/json',
      },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;
    const json = await res.json();
    const meta = json?.chart?.result?.[0]?.meta;
    if (!meta) return null;
    const price = Number(meta.regularMarketPrice);
    const prev = Number(meta.previousClose ?? meta.chartPreviousClose);
    if (!Number.isFinite(price) || !Number.isFinite(prev)) return null;
    return {
      symbol: spec.symbol,
      display: spec.display,
      price,
      change: price - prev,
    };
  } catch {
    return null;
  }
}

export async function fetchQuotes(specs: SymbolSpec[]): Promise<Tick[]> {
  const results = await Promise.all(specs.map(fetchOne));
  return results.filter((t): t is Tick => t !== null);
}

export const INDEX_SPECS: SymbolSpec[] = [
  { symbol: '^GSPC', display: 'S&P 500' },
  { symbol: '^DJI', display: 'DOW' },
  { symbol: '^IXIC', display: 'NASDAQ' },
  { symbol: '^RUT', display: 'RUSSELL 2000' },
  { symbol: '^FTSE', display: 'FTSE 100' },
  { symbol: '^N225', display: 'NIKKEI' },
  { symbol: '^VIX', display: 'VIX' },
];

export const STOCK_SPECS: SymbolSpec[] = [
  { symbol: 'AAPL', display: 'AAPL' },
  { symbol: 'MSFT', display: 'MSFT' },
  { symbol: 'GOOGL', display: 'GOOGL' },
  { symbol: 'AMZN', display: 'AMZN' },
  { symbol: 'NVDA', display: 'NVDA' },
  { symbol: 'META', display: 'META' },
  { symbol: 'TSLA', display: 'TSLA' },
  { symbol: 'BRK-B', display: 'BRK.B' },
  { symbol: 'JPM', display: 'JPM' },
  { symbol: 'V', display: 'V' },
  { symbol: 'UNH', display: 'UNH' },
  { symbol: 'XOM', display: 'XOM' },
  { symbol: 'WMT', display: 'WMT' },
  { symbol: 'AVGO', display: 'AVGO' },
  { symbol: 'LLY', display: 'LLY' },
];

export const MIXED_SPECS: SymbolSpec[] = [
  { symbol: 'BTC-USD', display: 'BTC' },
  { symbol: 'ETH-USD', display: 'ETH' },
  { symbol: 'SOL-USD', display: 'SOL' },
  { symbol: 'EURUSD=X', display: 'EUR/USD' },
  { symbol: 'JPY=X', display: 'USD/JPY' },
  { symbol: 'GBPUSD=X', display: 'GBP/USD' },
  { symbol: 'GC=F', display: 'GOLD' },
  { symbol: 'CL=F', display: 'OIL WTI' },
  { symbol: '^TNX', display: '10Y YIELD' },
];

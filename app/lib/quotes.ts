export type Tick = {
  symbol: string;
  display: string;
  price: number;
  change: number;
};

type SymbolSpec = { symbol: string; display: string };

const REVALIDATE_SECONDS = 60;

export const INDEX_SPECS: SymbolSpec[] = [
  { symbol: '^spx', display: 'S&P 500' },
  { symbol: '^dji', display: 'DOW' },
  { symbol: '^ndq', display: 'NASDAQ' },
  { symbol: 'iwm.us', display: 'RUSSELL 2K' },
  { symbol: '^ukx', display: 'FTSE 100' },
  { symbol: '^nkx', display: 'NIKKEI' },
  { symbol: '^hsi', display: 'HANG SENG' },
];

export const STOCK_SPECS: SymbolSpec[] = [
  { symbol: 'aapl.us', display: 'AAPL' },
  { symbol: 'msft.us', display: 'MSFT' },
  { symbol: 'googl.us', display: 'GOOGL' },
  { symbol: 'amzn.us', display: 'AMZN' },
  { symbol: 'nvda.us', display: 'NVDA' },
  { symbol: 'meta.us', display: 'META' },
  { symbol: 'tsla.us', display: 'TSLA' },
  { symbol: 'brk-b.us', display: 'BRK.B' },
  { symbol: 'jpm.us', display: 'JPM' },
  { symbol: 'v.us', display: 'V' },
  { symbol: 'unh.us', display: 'UNH' },
  { symbol: 'xom.us', display: 'XOM' },
  { symbol: 'wmt.us', display: 'WMT' },
  { symbol: 'avgo.us', display: 'AVGO' },
  { symbol: 'lly.us', display: 'LLY' },
];

export const MIXED_SPECS: SymbolSpec[] = [
  { symbol: 'btcusd', display: 'BTC' },
  { symbol: 'eth.v', display: 'ETH' },
  { symbol: 'sol.v', display: 'SOL' },
  { symbol: 'eurusd', display: 'EUR/USD' },
  { symbol: 'usdjpy', display: 'USD/JPY' },
  { symbol: 'gbpusd', display: 'GBP/USD' },
  { symbol: 'xauusd', display: 'GOLD' },
  { symbol: 'xagusd', display: 'SILVER' },
  { symbol: 'cl.f', display: 'OIL WTI' },
];

const ALL_SPECS = [...INDEX_SPECS, ...STOCK_SPECS, ...MIXED_SPECS];

type StooqRow = {
  symbol: string;
  prev: number | null;
  close: number | null;
};

function parseStooqCsv(csv: string): Map<string, StooqRow> {
  const map = new Map<string, StooqRow>();
  const lines = csv.trim().split('\n');
  if (lines.length < 2) return map;
  const header = lines[0].split(',').map((s) => s.trim().toLowerCase());
  const iSym = header.indexOf('symbol');
  const iPrev = header.indexOf('prev');
  const iClose = header.indexOf('close');
  if (iSym < 0 || iPrev < 0 || iClose < 0) return map;
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(',');
    const symbol = cols[iSym]?.trim().toLowerCase();
    const prevRaw = cols[iPrev]?.trim();
    const closeRaw = cols[iClose]?.trim();
    if (!symbol) continue;
    const prev = prevRaw === 'N/D' || !prevRaw ? null : Number(prevRaw);
    const close = closeRaw === 'N/D' || !closeRaw ? null : Number(closeRaw);
    map.set(symbol, {
      symbol,
      prev: Number.isFinite(prev) ? prev : null,
      close: Number.isFinite(close) ? close : null,
    });
  }
  return map;
}

async function fetchAllFromStooq(): Promise<Map<string, StooqRow>> {
  const symbolList = ALL_SPECS.map((s) => s.symbol).join('+');
  const url = `https://stooq.com/q/l/?s=${encodeURIComponent(symbolList)}&f=snpc&h&e=csv`;
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
        Accept: 'text/csv,*/*',
      },
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return new Map();
    const csv = await res.text();
    return parseStooqCsv(csv);
  } catch {
    return new Map();
  }
}

function specsToTicks(specs: SymbolSpec[], rows: Map<string, StooqRow>): Tick[] {
  const out: Tick[] = [];
  for (const spec of specs) {
    const row = rows.get(spec.symbol.toLowerCase());
    if (!row || row.close == null || row.prev == null) continue;
    out.push({
      symbol: spec.symbol,
      display: spec.display,
      price: row.close,
      change: row.close - row.prev,
    });
  }
  return out;
}

const FALLBACK_INDICES: Tick[] = [
  { symbol: '^spx', display: 'S&P 500', price: 7398.9, change: 61.8 },
  { symbol: '^dji', display: 'DOW', price: 49609.2, change: 12.2 },
  { symbol: '^ndq', display: 'NASDAQ', price: 26247.08, change: 440.88 },
  { symbol: 'iwm.us', display: 'RUSSELL 2K', price: 284.17, change: 1.91 },
  { symbol: '^ukx', display: 'FTSE 100', price: 10233.1, change: -43.9 },
  { symbol: '^nkx', display: 'NIKKEI', price: 62713.65, change: -120.19 },
  { symbol: '^hsi', display: 'HANG SENG', price: 26393.71, change: -232.57 },
];

const FALLBACK_STOCKS: Tick[] = [
  { symbol: 'aapl.us', display: 'AAPL', price: 293.32, change: 5.88 },
  { symbol: 'msft.us', display: 'MSFT', price: 415.12, change: -5.65 },
  { symbol: 'googl.us', display: 'GOOGL', price: 400.8, change: 2.81 },
  { symbol: 'amzn.us', display: 'AMZN', price: 272.68, change: 1.51 },
  { symbol: 'nvda.us', display: 'NVDA', price: 215.2, change: 3.7 },
  { symbol: 'meta.us', display: 'META', price: 609.63, change: -7.18 },
  { symbol: 'tsla.us', display: 'TSLA', price: 428.35, change: 16.56 },
  { symbol: 'brk-b.us', display: 'BRK.B', price: 475.94, change: 0.86 },
  { symbol: 'jpm.us', display: 'JPM', price: 302.1, change: -4.17 },
  { symbol: 'v.us', display: 'V', price: 318.79, change: -2.49 },
  { symbol: 'unh.us', display: 'UNH', price: 379.98, change: 10.24 },
  { symbol: 'xom.us', display: 'XOM', price: 144.57, change: -2.01 },
  { symbol: 'wmt.us', display: 'WMT', price: 130.43, change: 0.23 },
  { symbol: 'avgo.us', display: 'AVGO', price: 430, change: 17.44 },
  { symbol: 'lly.us', display: 'LLY', price: 948.45, change: -26.51 },
];

const FALLBACK_MIXED: Tick[] = [
  { symbol: 'btcusd', display: 'BTC', price: 80142.3, change: 388.6 },
  { symbol: 'eth.v', display: 'ETH', price: 2313.11, change: -1.33 },
  { symbol: 'sol.v', display: 'SOL', price: 93.45, change: 1.14 },
  { symbol: 'eurusd', display: 'EUR/USD', price: 1.17803, change: 0.00534 },
  { symbol: 'usdjpy', display: 'USD/JPY', price: 156.7315, change: -0.117 },
  { symbol: 'gbpusd', display: 'GBP/USD', price: 1.36282, change: 0.00745 },
  { symbol: 'xauusd', display: 'GOLD', price: 4724.2, change: 36.89 },
  { symbol: 'xagusd', display: 'SILVER', price: 80.678, change: 2.141 },
  { symbol: 'cl.f', display: 'OIL WTI', price: 95.42, change: 0.61 },
];

export async function fetchAllQuotes(): Promise<{
  indices: Tick[];
  stocks: Tick[];
  mixed: Tick[];
}> {
  const rows = await fetchAllFromStooq();
  const indices = specsToTicks(INDEX_SPECS, rows);
  const stocks = specsToTicks(STOCK_SPECS, rows);
  const mixed = specsToTicks(MIXED_SPECS, rows);
  return {
    indices: indices.length ? indices : FALLBACK_INDICES,
    stocks: stocks.length ? stocks : FALLBACK_STOCKS,
    mixed: mixed.length ? mixed : FALLBACK_MIXED,
  };
}

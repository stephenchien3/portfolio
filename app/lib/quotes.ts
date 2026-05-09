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

export async function fetchAllQuotes(): Promise<{
  indices: Tick[];
  stocks: Tick[];
  mixed: Tick[];
}> {
  const rows = await fetchAllFromStooq();
  return {
    indices: specsToTicks(INDEX_SPECS, rows),
    stocks: specsToTicks(STOCK_SPECS, rows),
    mixed: specsToTicks(MIXED_SPECS, rows),
  };
}

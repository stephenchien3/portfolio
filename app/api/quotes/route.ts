import { NextResponse } from 'next/server';
import { fetchAllQuotes } from '../../lib/quotes';

export async function GET() {
  const quotes = await fetchAllQuotes();
  return NextResponse.json(quotes, {
    headers: {
      // Let the CDN serve a cached copy for 60s, refreshing in the background.
      // The underlying Stooq fetch is also revalidated every 60s, so we never
      // hammer the upstream API regardless of how many clients poll.
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
    },
  });
}

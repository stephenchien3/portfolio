import { fetchAllQuotes } from '../lib/quotes';
import BorderMarqueeClient from './BorderMarqueeClient';

// Server component: fetches the first set of quotes during SSR so there's no
// flash or layout shift, then hands off to the client which polls for updates.
export default async function BorderMarquee() {
  const initial = await fetchAllQuotes();
  return <BorderMarqueeClient initial={initial} />;
}

import Link from 'next/link';
import BackButton from '../../components/BackButton';

export default function Poems() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/writings">writings</Link>
        <span>/</span>
        <span>poems</span>
      </div>

      <BackButton />

      <h1 className="page-title">poems</h1>
      <p className="page-desc">a collection of poems</p>

      <div className="detail-content" style={{ lineHeight: '1.8' }}>
        <h2>egrets and egress</h2>
        <p style={{ whiteSpace: 'pre-line' }}>
{`i, too, wonder of
thursday morning unemployment
& surrogate individualistic activities

judgment is key here

sitting in a fluorescent light makes
the days more feudal

hegemonic processes`}
        </p>

        <h2>bay bensonhurst</h2>
        <p style={{ whiteSpace: 'pre-line' }}>
{`ephemeral lines

languid georgian, cantonese, vietnamese

socks over long concrete tallow

lox, latkes, long an

can't remember the last time

nor the first time`}
        </p>
      </div>
    </main>
  );
}

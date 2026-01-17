import Link from 'next/link';
import BackButton from '../../../components/BackButton';

export default function BayBensonhurst() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/writings">writings</Link>
        <span>/</span>
        <Link href="/writings/poems">poems</Link>
        <span>/</span>
        <span>bay bensonhurst</span>
      </div>

      <BackButton />

      <h1 className="page-title">bay bensonhurst</h1>

      <div className="detail-content" style={{ lineHeight: '1.8' }}>
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

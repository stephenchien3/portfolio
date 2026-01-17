import Link from 'next/link';
import BackButton from '../../../components/BackButton';

export default function EgretsAndEgress() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/writings">writings</Link>
        <span>/</span>
        <Link href="/writings/poems">poems</Link>
        <span>/</span>
        <span>egrets and egress</span>
      </div>

      <BackButton />

      <h1 className="page-title">egrets and egress</h1>

      <div className="detail-content" style={{ lineHeight: '1.8' }}>
        <p style={{ whiteSpace: 'pre-line' }}>
{`i, too, wonder of
thursday morning unemployment
& surrogate individualistic activities

judgment is key here

sitting in a fluorescent light makes
the days more feudal

hegemonic processes`}
        </p>
      </div>
    </main>
  );
}

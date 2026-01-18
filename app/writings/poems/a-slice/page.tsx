import Link from 'next/link';
import BackButton from '../../../components/BackButton';

export default function ASlice() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/writings">writings</Link>
        <span>/</span>
        <Link href="/writings/poems">poems</Link>
        <span>/</span>
        <span>a slice</span>
      </div>

      <BackButton />

      <h1 className="page-title">a slice</h1>

      <div className="detail-content" style={{ lineHeight: '1.8' }}>
        <p style={{ whiteSpace: 'pre-line' }}>
{`I have no regrets,
Alfaros pizza is dead.

No semblances of revenge,
his soul went up with his pizza shop.

Nor shackles of sadness
trapping them in inner oblivion

My body is decaying,
I caught a glimpse of you then.

As the earth and I become one
I see his shadow a time or two,

for I fear that my soul will be too connected to you`}
        </p>
      </div>
    </main>
  );
}

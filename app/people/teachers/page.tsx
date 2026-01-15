import Link from 'next/link';
import BackButton from '../../components/BackButton';

export default function Teachers() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/people">people</Link>
        <span>/</span>
        <span>teachers</span>
      </div>

      <BackButton />

      <h1 className="page-title">teachers</h1>
      <p className="page-desc">those who shaped how i think</p>

      <div className="detail-content">
        <p>
          Thanks to everyone who has taught me. In particular, Mr. Worrall.
        </p>
      </div>
    </main>
  );
}

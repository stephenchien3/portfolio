import Link from 'next/link';
import BackButton from '../../components/BackButton';

export default function Now() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/about">about</Link>
        <span>/</span>
        <span>now</span>
      </div>

      <BackButton />

      <h1 className="page-title">now</h1>
      <p className="page-desc">what i am doing</p>

      <div className="detail-content">
        <p>
          Finishing masters at Cornell, working on <Link href="/things/cajal-health">cajal health</Link>.
        </p>
      </div>
    </main>
  );
}

import Link from 'next/link';
import BackButton from '../components/BackButton';

export default function About() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <span>about</span>
      </div>

      <BackButton />

      <h1 className="page-title">about</h1>
      <p className="page-desc">cs @ cornell</p>

      <div className="detail-content">
        <p>
          Finishing my cs masters at Cornell, building new projects, working on{' '}
          <a href="https://cajalhealth.org" target="_blank" rel="noopener noreferrer">cajal health</a>.
        </p>
      </div>
    </main>
  );
}

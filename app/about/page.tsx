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

      <div className="tree" style={{ marginTop: '2rem' }}>
        <div className="tree-item">
          <Link href="/about/now">now</Link>
          <span className="desc">what i am doing</span>
        </div>
      </div>
    </main>
  );
}

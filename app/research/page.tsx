import Link from 'next/link';
import BackButton from '../components/BackButton';

export default function Research() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <span>research</span>
      </div>

      <BackButton />

      <h1 className="page-title">research</h1>
      <p className="page-desc">academic work</p>

      <div className="tree">
        <div className="tree-item">
          <Link href="/research/labs">labs</Link>
          <span className="desc">research groups</span>
        </div>
        <div className="tree-item">
          <Link href="/research/publications">publications</Link>
          <span className="desc">papers</span>
        </div>
        <div className="tree-item">
          <Link href="/research/teachers">teachers</Link>
          <span className="desc">those who shaped how i think</span>
        </div>
      </div>
    </main>
  );
}

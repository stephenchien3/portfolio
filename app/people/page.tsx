import Link from 'next/link';
import BackButton from '../components/BackButton';

export default function People() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <span>people</span>
      </div>

      <BackButton />

      <h1 className="page-title">people</h1>
      <p className="page-desc">who i know</p>

      <div className="tree">
        <div className="tree-item">
          <Link href="/people/labs">labs</Link>
          <span className="desc">research groups</span>
        </div>
        <div className="tree-item">
          <Link href="/people/teachers">teachers</Link>
          <span className="desc">those who taught me</span>
        </div>
      </div>
    </main>
  );
}

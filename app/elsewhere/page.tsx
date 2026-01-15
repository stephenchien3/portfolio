import Link from 'next/link';
import BackButton from '../components/BackButton';

export default function Elsewhere() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <span>elsewhere</span>
      </div>

      <BackButton />

      <h1 className="page-title">elsewhere</h1>
      <p className="page-desc">other things</p>

      <div className="tree">
        <div className="tree-item">
          <Link href="/elsewhere/places">places</Link>
          <span className="desc">where i have been</span>
        </div>
        <div className="tree-item">
          <Link href="/elsewhere/readings">readings</Link>
          <span className="desc">things i have read</span>
        </div>
        <div className="tree-item">
          <Link href="/elsewhere/art">art</Link>
          <span className="desc">things i look at</span>
        </div>
        <div className="tree-item">
          <Link href="/elsewhere/contact">contact</Link>
          <span className="desc">how to reach me</span>
        </div>
      </div>
    </main>
  );
}

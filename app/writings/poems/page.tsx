import Link from 'next/link';
import BackButton from '../../components/BackButton';

export default function Poems() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/writings">writings</Link>
        <span>/</span>
        <span>poems</span>
      </div>

      <BackButton />

      <h1 className="page-title">poems</h1>
      <p className="page-desc">a collection of poems</p>

      <div className="tree">
        <div className="tree-item">
          <Link href="/writings/poems/pf-in-bk">PF IN BK ON THR</Link>
        </div>
      </div>
    </main>
  );
}

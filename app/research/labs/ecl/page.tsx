import Link from 'next/link';
import BackButton from '../../../components/BackButton';

export default function ECL() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/research/labs">labs</Link>
        <span>/</span>
        <span>ecl</span>
      </div>

      <BackButton />

      <h1 className="page-title">experience and cognition lab</h1>
      <p className="page-desc">research in embodied cognition</p>

      <div className="tree">
        <div className="tree-item">
          <Link href="/research/labs/ecl/action-asymmetry">action asymmetry hypothesis</Link>
        </div>
        <div className="tree-item">
          <Link href="/research/labs/ecl/sword-and-shield">sword and shield hypothesis</Link>
        </div>
      </div>
    </main>
  );
}

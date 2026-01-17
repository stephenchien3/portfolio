import Link from 'next/link';
import BackButton from '../components/BackButton';

export default function Things() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <span>things</span>
      </div>

      <BackButton />

      <h1 className="page-title">things</h1>
      <p className="page-desc">what i have made</p>

      <div className="tree">
        <div className="tree-item">
          <Link href="/things/cajal-health">cajal health</Link>
          <span className="desc">AI insurance appeals</span>
        </div>
        <div className="tree-item">
          <Link href="/things/assesskit">assesskit</Link>
          <span className="desc">response collection</span>
        </div>
        <div className="tree-item">
          <Link href="/things/gautama">gautama</Link>
          <span className="desc">iOS meditation app</span>
        </div>
        <div className="tree-item">
          <Link href="/things/morrison">morrison</Link>
          <span className="desc">AI writing assistant</span>
        </div>
      </div>
    </main>
  );
}

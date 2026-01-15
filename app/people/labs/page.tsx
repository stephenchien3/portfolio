import Link from 'next/link';
import BackButton from '../../components/BackButton';

export default function Labs() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/people">people</Link>
        <span>/</span>
        <span>labs</span>
      </div>

      <BackButton />

      <h1 className="page-title">labs</h1>
      <p className="page-desc">research groups</p>

      <div className="tree">
        <div className="tree-item">
          <a href="https://casasanto.com" target="_blank" rel="noopener noreferrer">
            experience and cognition lab
          </a>
          <span className="desc">embodied cognition</span>
          <div className="tree">
            <div className="tree-item">
              <Link href="/people/labs/ecl">action asymmetry hypothesis</Link>
            </div>
            <div className="tree-item">
              <Link href="/people/labs/ecl">sword and shield hypothesis</Link>
            </div>
          </div>
        </div>
        <div className="tree-item">
          <a href="https://gao.cee.cornell.edu" target="_blank" rel="noopener noreferrer">
            gao research lab
          </a>
          <span className="desc">infrastructure systems</span>
          <div className="tree">
            <div className="tree-item">
              <Link href="/people/labs/gao">digital twin ports</Link>
            </div>
          </div>
        </div>
        <div className="tree-item">
          <a href="https://www.economyandsociety.org" target="_blank" rel="noopener noreferrer">
            center for economy and society
          </a>
          <span className="desc">economic sociology</span>
          <div className="tree">
            <div className="tree-item">
              <Link href="/people/labs/ces">billionaires and institutions</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

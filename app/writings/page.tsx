import Link from 'next/link';
import BackButton from '../components/BackButton';

export default function Writings() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <span>writings</span>
      </div>

      <BackButton />

      <h1 className="page-title">writings</h1>
      <p className="page-desc">i also like to write things. most of these works were written sporadically over an afternoon,
        or two. 
      </p>

      <div className="tree">
        <div className="tree-item">
          <Link href="/writings/brief-story">a brief story</Link>
        </div>
      </div>
    </main>
  );
}

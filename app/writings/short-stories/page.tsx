import Link from 'next/link';
import BackButton from '../../components/BackButton';

export default function ShortStories() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/writings">writings</Link>
        <span>/</span>
        <span>short stories</span>
      </div>

      <BackButton />

      <h1 className="page-title">short stories [unfinished]</h1>
      <p className="page-desc">works in progress</p>

      <div className="tree">
        <div className="tree-item">
          <Link href="/writings/brief-story">a brief story</Link>
        </div>
        <div className="tree-item">
          <Link href="/writings/russia">russia</Link>
        </div>
        <div className="tree-item">
          <Link href="/writings/the-hike">the hike</Link>
        </div>
      </div>
    </main>
  );
}

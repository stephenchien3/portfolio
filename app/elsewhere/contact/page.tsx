import Link from 'next/link';
import BackButton from '../../components/BackButton';

export default function Contact() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/elsewhere">elsewhere</Link>
        <span>/</span>
        <span>contact</span>
      </div>

      <BackButton />

      <h1 className="page-title">contact</h1>
      <p className="page-desc">how to reach me</p>

      <div className="tree">
        <div className="tree-item">
          <a href="mailto:slc292@cornell.edu">email</a>
          <span className="desc">slc292@cornell.edu</span>
        </div>
        <div className="tree-item">
          <a href="https://github.com/stephenchien3" target="_blank" rel="noopener noreferrer">github</a>
          <span className="desc">stephenchien3</span>
        </div>
        <div className="tree-item">
          <a href="https://www.linkedin.com/in/stephenlchien/" target="_blank" rel="noopener noreferrer">linkedin</a>
          <span className="desc">stephenlchien</span>
        </div>
      </div>
    </main>
  );
}

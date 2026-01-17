import Link from 'next/link';
import BackButton from '../../components/BackButton';

export default function Before() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/about">about</Link>
        <span>/</span>
        <span>before</span>
      </div>

      <BackButton />

      <h1 className="page-title">before</h1>
      <p className="page-desc">where i have been</p>

      <div className="detail-content">


        <p>
          Undergrad at Cornell. Studied computer science but spent as much time in the psychology department and the library as in the CS building. 
          The interdisciplinary stuff was always more interesting to me than theory or pure CS.
        </p>

        <p>
          I would like to think that in my nondeterministic past lives I was a professional basketball player (with Lebron James),
          a writer, or a neurosurgeon.
        </p>
      </div>
    </main>
  );
}

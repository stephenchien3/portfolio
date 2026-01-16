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
          Undergrad at Cornell. Studied computer science but spent as much time in the psychology department and the library as in the CS building. The interdisciplinary stuff was always more interesting to me than the pure technical work.
        </p>

        <p>
          Research assistant in the <Link href="/people/labs/ecl">Experience and Cognition Lab</Link>, working on the action asymmetry hypothesis. Learned how to design experiments, analyze data, write papers. Learned that research is slower and messier than it looks from the outside.
        </p>

        <p>
          Worked in the <Link href="/people/labs/gao">Gao Research Lab</Link> on digital twin infrastructure. Built Unity models for port visualization. Different kind of work. More applied, more concrete, more immediate feedback loops.
        </p>

        <p>
          Research assistant at the <Link href="/people/labs/ces">Center for Economy and Society</Link>. Studied billionaires and institutions, the Acemoglu-Robinson hypothesis, why China is a counterexample. Economic sociology taught me to see systems differently, as contingent, as constructed, as changeable.
        </p>
      </div>
    </main>
  );
}

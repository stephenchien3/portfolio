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
          Undergrad at Cornell. Studied computer science but spent as much time in the
          psychology department and the library as in the CS building. The interdisciplinary
          stuff was always more interesting to me than the pure technical work.
        </p>

        <p>
          Research assistant in the Experience and Cognition Lab, working on the action
          asymmetry hypothesis. Learned how to design experiments, analyze data, write
          papers. Learned that research is slower and messier than it looks from the outside.
        </p>

        <p>
          Worked in the Gao Research Lab on digital twin infrastructure. Built Unity models
          for port visualization. Different kind of work—more applied, more concrete, more
          immediate feedback loops.
        </p>

        <p>
          Research assistant at the Center for Economy and Society. Studied billionaires
          and institutions, the Acemoglu-Robinson hypothesis, why China is a counterexample.
          Economic sociology taught me to see systems differently—as contingent, as constructed,
          as changeable.
        </p>

        <p>
          Grew up in Arcadia, California. Public school, lots of reading, not enough sports
          until I emailed the basketball coach. The San Gabriel Valley shaped me in ways I
          am still figuring out.
        </p>
      </div>
    </main>
  );
}

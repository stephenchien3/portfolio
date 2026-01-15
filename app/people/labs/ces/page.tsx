import Link from 'next/link';
import BackButton from '../../../components/BackButton';

export default function CES() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/people">people</Link>
        <span>/</span>
        <Link href="/people/labs">labs</Link>
        <span>/</span>
        <span>ces</span>
      </div>

      <BackButton />

      <h1 className="page-title">center for economy and society</h1>
      <p className="page-desc">economic sociology</p>

      <div className="detail-content">
        <h3>billionaires and institutions</h3>

        <p>
          The Acemoglu-Robinson hypothesis comes from Daron Acemoglu and James Robinson's
          work on institutions and economic development. The core argument: inclusive
          political institutions (democracy, rule of law, property rights) combined with
          inclusive economic institutions (free markets, competition) lead to sustained
          economic growth and wealth creation.
        </p>

        <p>
          The hypothesis predicts that billionaires should thrive in democratic, free-market
          economies. Places where property rights are secure, contracts are enforced, and
          creative destruction is allowed.
        </p>

        <p>
          China is a leading counterexample. It has produced more billionaires than almost
          any other country despite lacking the inclusive political institutions the theory
          says are necessary. The state controls key sectors, property rights are less
          secure, and the political system is authoritarian. Yet billionaires emerge anyway.
        </p>

        <p>
          My research examined why. What conditions in China allow billionaire
          wealth creation outside the Acemoglu-Robinson framework?
        </p>
      </div>
    </main>
  );
}

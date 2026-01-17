import Link from 'next/link';
import BackButton from '../components/BackButton';

export default function About() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <span>about</span>
      </div>

      <BackButton />

      <h1 className="page-title">about</h1>
      <p className="page-desc">who i am</p>

      <div className="detail-content">
        <p>
          CS Masters student at Cornell. LA + NYC. 
        </p>

        <p>
          I believe in making technology for social good. Specifically, I am interested in systems that help people navigate other
          systems. Healthcare, bureaucracy, institutions. The places where individuals
          meet structures that do not care about them.
        </p>

        <p>
          Co-founded <Link href="/things/cajal-health">Cajal Health</Link>, where we build AI to help clinics appeal denied insurance
          claims. Built some iOS apps. Did research in cognitive science (the <Link href="/people/labs/ecl">action
          asymmetry hypothesis</Link>), infrastructure systems (<Link href="/people/labs/gao">digital twin ports</Link>), and economic
          sociology (<Link href="/people/labs/ces">billionaires and institutions</Link>).
        </p>

        <p>
          I <Link href="/elsewhere/readings">read constantly</Link>. Toni Morrison is my favorite author. Also Kafka for the
          alienation, Murakami for the dreamscapes, Mo Yan for the history. Philosophy
          too: Heidegger, Lakoff and Johnson, Kuhn.
        </p>

        <p>
          I like <Link href="/elsewhere/art">art that tells stories</Link>. Yoshitomo Nara, Goya, Ai Weiwei, Cajal's neuron
          drawings, Thomas Cole.
        </p>

        <p>
          I also like to <Link href="/writings">write</Link>.
        </p>
      </div>

      <div className="tree" style={{ marginTop: '2rem' }}>
        <div className="tree-item">
          <Link href="/about/now">now</Link>
          <span className="desc">what i am doing</span>
        </div>
        <div className="tree-item">
          <Link href="/about/before">before</Link>
          <span className="desc">where i have been</span>
        </div>
        <div className="tree-item">
          <Link href="/about/interests">interests</Link>
          <span className="desc">what i care about</span>
        </div>
      </div>
    </main>
  );
}

import Link from 'next/link';
import BackButton from '../../components/BackButton';

export default function Interests() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/about">about</Link>
        <span>/</span>
        <span>interests</span>
      </div>

      <BackButton />

      <h1 className="page-title">interests</h1>
      <p className="page-desc">what i care about</p>

      <div className="tree">
        <div className="tree-item">
          <Link href="/people/labs/ecl">cognitive science</Link>
          <span className="desc">embodied cognition, perception, action</span>
          <div className="detail-content" style={{ marginTop: '0.5rem', marginLeft: '0' }}>
            <p style={{ fontSize: '0.9em' }}>
              The mind is not a computer. It is embodied, embedded, extended, enacted.
              What we think depends on what we do, how we move, what bodies we have.
              Worked on the <Link href="/people/labs/ecl">action asymmetry hypothesis</Link>, the idea that hand dominance
              shapes how our brains process visual information.
            </p>
          </div>
        </div>
        <div className="tree-item">
          <Link href="/things/cajal-health">healthcare systems</Link>
          <span className="desc">access, bureaucracy, technology</span>
          <div className="detail-content" style={{ marginTop: '0.5rem', marginLeft: '0' }}>
            <p style={{ fontSize: '0.9em' }}>
              The American healthcare system is a maze. Insurance denials, prior authorizations,
              networks, formularies. People die because they cannot navigate the paperwork.
              I am interested in technology that makes these systems more legible, more
              navigable, more fair. See <Link href="/things/cajal-health">Cajal Health</Link>.
            </p>
          </div>
        </div>
        <div className="tree-item">
          <Link href="/elsewhere/readings">philosophy of mind</Link>
          <span className="desc">consciousness, phenomenology</span>
          <div className="detail-content" style={{ marginTop: '0.5rem', marginLeft: '0' }}>
            <p style={{ fontSize: '0.9em' }}>
              What is it like to be something? How does subjective experience arise from
              objective matter? These questions do not have answers but they are worth
              asking. Heidegger on being, Merleau-Ponty on perception, the hard problem
              of consciousness.
            </p>
          </div>
        </div>
        <div className="tree-item">
          <Link href="/things/gautama">buddhism</Link>
          <span className="desc">not really buddhist, but i like the religion</span>
          <div className="detail-content" style={{ marginTop: '0.5rem', marginLeft: '0' }}>
            <p style={{ fontSize: '0.9em' }}>
              The Four Noble Truths. The Eightfold Path. The idea that suffering comes
              from attachment, that the self is not a fixed thing, that liberation is
              possible. I do not follow the precepts but I find the philosophy useful.
              Meditation as practice, not performance. See <Link href="/things/gautama">Gautama</Link>.
            </p>
          </div>
        </div>
        <div className="tree-item">
          <Link href="/elsewhere/readings">reading</Link>
          <span className="desc">toni morrison, kafka, murakami, mo yan</span>
        </div>
        <div className="tree-item">
          <Link href="/elsewhere/art">art</Link>
          <span className="desc">each one tells a different story</span>
        </div>
      </div>
    </main>
  );
}

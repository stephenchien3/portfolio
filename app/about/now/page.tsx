import Link from 'next/link';
import BackButton from '../../components/BackButton';

export default function Now() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/about">about</Link>
        <span>/</span>
        <span>now</span>
      </div>

      <BackButton />

      <h1 className="page-title">now</h1>
      <p className="page-desc">what i am doing</p>

      <div className="detail-content">
        <p>
          Finishing my CS Masters at Cornell. Taking classes in machine learning, systems,
          and whatever else looks interesting. The coursework is fine but the real learning
          happens outside of class.
        </p>

        <p>
          Still working on Cajal Health. The healthcare system is broken in slow, bureaucratic
          ways that require patience to fix. We are making progress but it takes time.
        </p>

        <p>
          Reading a lot. Currently working through more philosophy. Phenomenology, philosophy
          of mind, questions about consciousness and embodiment that connect to my research
          in cognitive science.
        </p>

        <p>
          Trying to spend less time on screens and more time outside. Ithaca makes this
          easier in fall and harder in winter. The gorges are beautiful when you can get
          to them.
        </p>
      </div>
    </main>
  );
}

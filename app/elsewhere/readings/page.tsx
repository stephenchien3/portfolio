import Link from 'next/link';
import BackButton from '../../components/BackButton';

export default function Readings() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/elsewhere">elsewhere</Link>
        <span>/</span>
        <span>readings</span>
      </div>

      <BackButton />

      <h1 className="page-title">readings</h1>
      <p className="page-desc">things i have read</p>

      <p>
        I read a lot. Always have. Here is a short list of my favorite authors, and corresponding books.
      </p>

      <h3 style={{ marginTop: '1.5rem' }}>fiction</h3>
      <div className="tree">
        <div className="tree-item">
          <span>toni morrison</span>
          <span className="desc">beloved, sula, the bluest eye, tar baby, song of solomon</span>
          <div className="detail-content" style={{ marginTop: '0.5rem', marginLeft: '0' }}>
            <p style={{ fontSize: '0.9em', color: '#aaa' }}>
              Toni Morrison is my favorite author. Her sentences have weight. She writes about trauma and history and love
              and violence in ways that feel true. I distinctly remember finishing Beloved, and just sitting down,
              wondering what I just read, and how someone could even write like that. But don't start with Beloved like I did.
              Start with an easier book like Sula, or her first novel, The Bluest Eye.  
            </p>
          </div>
        </div>
        <div className="tree-item">
          <span>franz kafka</span>
          <span className="desc">the trial, the metamorphosis, the castle</span>
          <div className="detail-content" style={{ marginTop: '0.5rem', marginLeft: '0' }}>
            <p style={{ fontSize: '0.9em', color: '#aaa' }}>
              Kafka explores the unknown, the bureaucratic nightmare, the alienation, the
              absurdity of existence. It feels like the most accurate description of modern life ever written.
            </p>
          </div>
        </div>
        <div className="tree-item">
          <span>haruki murakami</span>
          <span className="desc">kafka on the shore, norwegian wood, wind-up bird chronicle</span>
          <div className="detail-content" style={{ marginTop: '0.5rem', marginLeft: '0' }}>
            <p style={{ fontSize: '0.9em', color: '#aaa' }}>
              Again, I keep on going back to the magical realism genre. Murakami is really good at 
              perspectives and time, almost similar to Paprika by Satoshi Kon or Inception. 
              Cats that talk? What else could you want in a story?
              [besides the fact that he cannot write about women].
            </p>
          </div>
        </div>
        <div className="tree-item">
          <span>mo yan</span>
          <span className="desc">red sorghum</span>
          <div className="detail-content" style={{ marginTop: '0.5rem', marginLeft: '0' }}>
            <p style={{ fontSize: '0.9em', color: '#aaa' }}>
              Don't read this book, it's terrible.
            </p>
          </div>
        </div>
      </div>

      <h3 style={{ marginTop: '1.5rem' }}>philosophy</h3>
      <div className="tree">
        <div className="tree-item">
          <span>being and time</span>
          <span className="desc">heidegger</span>
          <div className="detail-content" style={{ marginTop: '0.5rem', marginLeft: '0' }}>
            <p style={{ fontSize: '0.9em', color: '#aaa' }}>
              Dense, difficult, rewarding. What does it mean to exist? To be thrown into
              a world you did not choose? Heidegger's language is frustrating but the
              questions stay with you.
            </p>
          </div>
        </div>
        <div className="tree-item">
          <span>philosophy in the flesh</span>
          <span className="desc">lakoff and johnson</span>
          <div className="detail-content" style={{ marginTop: '0.5rem', marginLeft: '0' }}>
            <p style={{ fontSize: '0.9em', color: '#aaa' }}>
              The mind is not separate from the body. Our concepts are shaped by our
              physical experience. This book changed how I think about thinking.
            </p>
          </div>
        </div>
        <div className="tree-item">
          <span>the structure of scientific revolutions</span>
          <span className="desc">kuhn</span>
          <div className="detail-content" style={{ marginTop: '0.5rem', marginLeft: '0' }}>
            <p style={{ fontSize: '0.9em', color: '#aaa' }}>
              Science does not progress linearly. Paradigms shift. What counts as knowledge
              depends on the framework you are operating in. Essential for understanding
              how ideas change.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

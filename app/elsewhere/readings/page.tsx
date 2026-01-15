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
        I read a lot. Always have. Books are how I make sense of things.
      </p>

      <h3 style={{ marginTop: '1.5rem' }}>fiction</h3>
      <div className="tree">
        <div className="tree-item">
          <span>toni morrison</span>
          <span className="desc">beloved, sula, the bluest eye, tar baby, song of solomon</span>
          <div className="detail-content" style={{ marginTop: '0.5rem', marginLeft: '0' }}>
            <p style={{ fontSize: '0.9em', color: '#aaa' }}>
              I read all of her books. She is my favorite author. The way she writes is
              direct, no wasted words, but you can tell she puts meaning behind every single
              one. Her sentences have weight. She writes about trauma and history and love
              and violence in ways that feel true, that do not flinch. Beloved broke something
              in me. Sula made me think about friendship differently. The Bluest Eye is
              devastating in its clarity.
            </p>
          </div>
        </div>
        <div className="tree-item">
          <span>franz kafka</span>
          <span className="desc">the trial, the metamorphosis, the castle</span>
          <div className="detail-content" style={{ marginTop: '0.5rem', marginLeft: '0' }}>
            <p style={{ fontSize: '0.9em', color: '#aaa' }}>
              Kafka explores the unknown, the bureaucratic nightmare, the alienation, the
              absurdity of existence. His characters wake up transformed into insects or
              arrested for crimes no one will name. It should feel surreal but it does not.
              It feels like the most accurate description of modern life ever written.
              The horror is in the mundanity.
            </p>
          </div>
        </div>
        <div className="tree-item">
          <span>haruki murakami</span>
          <span className="desc">kafka on the shore, norwegian wood, wind-up bird chronicle</span>
          <div className="detail-content" style={{ marginTop: '0.5rem', marginLeft: '0' }}>
            <p style={{ fontSize: '0.9em', color: '#aaa' }}>
              Murakami is misogynistic. His female characters often exist to serve
              the male protagonist's emotional journey. But he has a beautiful way of
              describing landscapes and different worlds. The surreal bleeding into the
              mundane. Cats that talk, wells that lead to other dimensions, jazz playing
              in empty bars. His books feel like dreams you cannot quite remember.
            </p>
          </div>
        </div>
        <div className="tree-item">
          <span>mo yan</span>
          <span className="desc">red sorghum</span>
          <div className="detail-content" style={{ marginTop: '0.5rem', marginLeft: '0' }}>
            <p style={{ fontSize: '0.9em', color: '#aaa' }}>
              Brutal and beautiful. China's rural history told through blood and soil
              and sorghum wine. The violence is not gratuitous, it is the violence of
              history, of survival, of people living through impossible times.
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

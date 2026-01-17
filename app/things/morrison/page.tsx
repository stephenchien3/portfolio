import Link from 'next/link';
import BackButton from '../../components/BackButton';

export default function Morrison() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/things">things</Link>
        <span>/</span>
        <span>morrison</span>
      </div>

      <BackButton />

      <h1 className="page-title">morrison</h1>
      <p className="page-desc">AI writing assistant</p>

      <div className="detail-content">
        <p>
          What if you could write
          with the voice of your favorite authors, through AI? 
        </p>

        <p>
          Morrison uses agents to mimic different authors and writing styles. You can write
          in the voice of Hemingway's sparse precision or Woolf's flowing consciousness.
          There are also moods, different tones you can dial up or
          down depending on what you're trying to say.
        </p>

        
        <p>
        Halfway through I wondered if this was a good idea, but decided to just release it. 
        </p>

        <p>
          Named after Toni Morrison, my favorite author.
        </p>

        <a
          href="https://apps.apple.com/gb/app/writing-app-morrison-ai/id6751019976"
          target="_blank"
          rel="noopener noreferrer"
          className="external-link"
        >
          view on app store →
        </a>
      </div>
    </main>
  );
}

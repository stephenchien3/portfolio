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
          Fully built this one from scratch. The idea was simple: what if you could write
          with the voice of your favorite authors? Not plagiarism, not copying, but having
          an AI that understood the rhythm, the sentence structure, the way certain writers
          approach language.
        </p>

        <p>
          The app uses agents to mimic different authors and writing styles. You can write
          in the voice of Hemingway's sparse precision or Woolf's flowing consciousness.
          There are also moods. Different tones and emotional registers you can dial up or
          down depending on what you're trying to say.
        </p>

        <p>
          I debated it on various topics. Philosophy, politics, the nature of consciousness.
          There's something strange about arguing with something you built. You know its
          limitations, you know where the seams are, but it still surprises you sometimes.
        </p>

        <p>
          I was never sure about the legality or legitimacy of mimicking authors. An author's
          voice is their own. Can you capture it? Should you? These questions don't have
          clean answers. But the experiment taught me a lot about how style works, how
          voice emerges from word choice and rhythm and the things left unsaid.
        </p>

        <p>
          Named after Toni Morrison, because no one writes like her.
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

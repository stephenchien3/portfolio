import Link from 'next/link';
import BackButton from '../../components/BackButton';

export default function Gautama() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <span>gautama</span>
      </div>

      <BackButton />

      <h1 className="page-title">gautama</h1>
      <p className="page-desc">iOS meditation app</p>

      <div className="detail-content">

        <p>
          Gautama is a shared meditation, readings, and mindfulness diary app. You can
          sit with a timer, read passages from Buddhist texts, and write about what comes
          up. It's just a place to be still.
        </p>

        <p>
          The readings include selections from the Dhammapada, the Heart Sutra, Thich Nhat
          Hanh, and others. Short passages you can sit with.
        </p>

        <p>
          Named after Siddhartha Gautama, the historical Buddha. A prince who left his
          palace to understand suffering, sat under a tree, and found something.
        </p>

        <a
          href="https://apps.apple.com/us/app/buddhist-app-gautama/id6753130717"
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

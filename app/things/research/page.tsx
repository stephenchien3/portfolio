import Link from 'next/link';
import BackButton from '../../components/BackButton';

export default function Research() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/things">things</Link>
        <span>/</span>
        <span>research</span>
      </div>

      <BackButton />

      <h1 className="page-title">research</h1>
      <p className="page-desc">papers and publications</p>

      <div className="detail-content">
        <p>
          Academic research moves slowly. You spend months on a project, write it up,
          submit it, wait for reviews, revise, resubmit, wait again. The gap between
          doing the work and seeing it published can be years. But the thinking stays
          with you.
        </p>
      </div>

      <div className="tree" style={{ marginTop: '1.5rem' }}>
        <div className="tree-item">
          <span>Exposing Privacy Vulnerabilities in mmWave Sensing via Membership Inference Attacks</span>
          <div className="detail-content" style={{ marginTop: '0.5rem', marginLeft: '0' }}>
            <p style={{ fontSize: '0.9em', color: '#aaa' }}>
              Stephen Chien*, Haylie Rayl*, Lucas Lippeatt*, et al.
            </p>
            <p style={{ fontSize: '0.9em', color: '#aaa' }}>
              IEEE MASS 2025, Chicago
            </p>
            <p style={{ fontSize: '0.9em', color: '#aaa', marginTop: '0.5rem' }}>
              Millimeter-wave sensing is everywhere now—gesture recognition, health monitoring,
              presence detection. But these systems leak information. We showed that membership
              inference attacks can determine whether a specific person was in the training
              data, raising serious privacy concerns for deployed mmWave systems.
            </p>
            <p style={{ fontSize: '0.9em', color: '#aaa', marginTop: '0.5rem' }}>
              *Co-first authors
            </p>
            <a
              href="https://doi.org/10.1109/MASS66014.2025.00106"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
              style={{ fontSize: '0.9em' }}
            >
              read paper →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

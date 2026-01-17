import Link from 'next/link';
import BackButton from '../../components/BackButton';

export default function Publications() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/research">research</Link>
        <span>/</span>
        <span>publications</span>
      </div>

      <BackButton />

      <h1 className="page-title">publications</h1>
      <p className="page-desc">papers</p>

      <div className="detail-content">
        <p>
          Research is both a joy and a pain.
        </p>
      </div>

      <div className="tree" style={{ marginTop: '1.5rem' }}>
        <div className="tree-item">
          <span>An Online Test of the Sword and Shield Hypothesis</span>
          <div className="detail-content" style={{ marginTop: '0.5rem', marginLeft: '0' }}>
            <p style={{ fontSize: '0.9em', color: '#aaa' }}>
              Kira Pawletko, Owen Morgan, Stephen Chien, Daniel Casasanto
            </p>
            <p style={{ fontSize: '0.9em', color: '#aaa' }}>
              APA 2026, August 2026 (forthcoming)
            </p>
          </div>
        </div>

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
              Millimeter-wave sensing is a more niche form of radar, and it's used in gesture recognition, health monitoring, and
              presence detection [such as those pesky TSA monitors at the airport]. But these systems leak information. We showed that membership
              inference attacks can determine whether a specific person was in the training
              data, raising serious privacy concerns for certain mmWave systems.
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

import Link from 'next/link';
import BackButton from '../../components/BackButton';

export default function CajalHealth() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/things">things</Link>
        <span>/</span>
        <span>cajal-health</span>
      </div>

      <BackButton />

      <h1 className="page-title">cajal health</h1>
      <p className="page-desc">AI appeals for denied insurance claims</p>

      <div className="detail-content">
        <p>
          Co-founder. The American healthcare system is broken in ways that are hard to
          articulate until you see them up close. Insurance companies deny claims constantly,
          prior authorizations, experimental treatments, out-of-network care, procedures deemed
          not medically necessary by someone who has never met the patient.
        </p>

        <p>
          Most people do not appeal. The process is confusing, the language is dense, and
          the odds feel stacked against you. But appeals work more often than people think.
          The problem is that writing a good appeal requires citing medical literature,
          understanding policy language, and making a coherent argument. That is hard for
          a patient to do alone.
        </p>

        <p>
          We built AI to do it. The system reads the denial letter, understands why the
          claim was rejected, pulls relevant clinical guidelines and peer-reviewed studies,
          and generates a personalized appeal letter. It is not a form letter, it is specific
          to the patient, the diagnosis, the insurer, and the reason for denial.
        </p>

        <h3>what i did</h3>

        <div className="tree">
          <div className="tree-item">
            <span>denials</span>
            <span className="desc">worked on the core denial processing system</span>
          </div>
          <div className="tree-item">
            <span>UI/UX</span>
            <span className="desc">designed the interface, made it usable for clinics</span>
          </div>
          <div className="tree-item">
            <span>clinic onboarding</span>
            <span className="desc">brought clinics onto the platform, understood their workflows</span>
          </div>
          <div className="tree-item">
            <span>prototyping</span>
            <span className="desc">built early versions, tested ideas, threw away what did not work</span>
          </div>
          <div className="tree-item">
            <span>planning</span>
            <span className="desc">strategy, roadmap, figuring out what to build next</span>
          </div>
        </div>

        <p style={{ marginTop: '1.5rem' }}>
          Named after Santiago Ramon y Cajal, the Spanish neuroscientist who first mapped
          the structure of the nervous system. He drew neurons by hand, thousands of them,
          with a level of detail that still holds up today. There is something about that
          combination of art and science, patience and precision, that felt right for what
          we were trying to do.
        </p>

        <a
          href="https://cajalhealth.org"
          target="_blank"
          rel="noopener noreferrer"
          className="external-link"
        >
          visit cajalhealth.org
        </a>
      </div>
    </main>
  );
}

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
          Co-founder. Insurance denials represent 5-10% of claims submitted, worth billions
          in lost revenue for healthcare practices. The manual appeal process is so
          time-consuming that many clinics simply write off denials rather than fight them.
        </p>

        <p>
          The process requires clinical knowledge to find relevant documentation, is
          error-prone with missed deadlines and incomplete submissions, and does not scale.
          Our immediate family all own healthcare clinics, so we have seen this problem
          up close for years.
        </p>

        <p>
          We built AI call and email agents tailored to smaller specialized healthcare
          clinics and their specific billing codes. We have technical experience with EMR
          systems, which lets us integrate directly into existing workflows. While our
          primary focus is helping clinics recover revenue, we help individual patients
          as well.
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

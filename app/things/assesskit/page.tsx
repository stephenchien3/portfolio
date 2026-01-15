import Link from 'next/link';
import BackButton from '../../components/BackButton';

export default function Assesskit() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/things">things</Link>
        <span>/</span>
        <span>assesskit</span>
      </div>

      <BackButton />

      <h1 className="page-title">assesskit</h1>
      <p className="page-desc">granular user response collection</p>

      <div className="detail-content">
        <p>
          Fully built this one. Surveys are blunt instruments. You ask a question, you get
          an answer, but you lose all the texture. How long did someone think before responding?
          Did they change their mind? What did they almost say?
        </p>

        <p>
          Assesskit is a tool for collecting granular user responses. Built for researchers
          and product teams who need more than checkboxes and Likert scales. The platform
          captures the full shape of a response: timing, revisions, confidence levels,
          branching paths.
        </p>

        <p>
          I designed the response collection architecture and built the frontend interface
          for creating custom assessment flows. The challenge was making something flexible
          enough to handle complex research protocols while staying simple enough that
          non-technical users could build their own assessments.
        </p>

        <a
          href="https://assesskit.com"
          target="_blank"
          rel="noopener noreferrer"
          className="external-link"
        >
          visit assesskit.com →
        </a>
      </div>
    </main>
  );
}

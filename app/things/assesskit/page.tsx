import Link from 'next/link';
import BackButton from '../../components/BackButton';

export default function Assesskit() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <span>assesskit</span>
      </div>

      <BackButton />

      <h1 className="page-title">assesskit</h1>
      <p className="page-desc">granular user response collection</p>

      <div className="detail-content">
        <p>
          Surveys are blunt instruments. You ask a question, you get
          an answer, but you lose all stuff in between. How long did someone think before responding?
          Did they change their mind?
        </p>

        <p>
          Assesskit is a tool for collecting granular user responses. It tracks more detailed information, 
          such as reaction time, and gives you options for counterbranching, repeating questions, 
          as well as follow-up questions based on what someone answered. 
        </p>

        <p>
          I originally intended this to be built for my psychology lab, but it morphed into 
          a more general purpose response tracker. 
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

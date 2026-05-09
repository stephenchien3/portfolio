import Link from 'next/link';
import BackButton from '../../../../components/BackButton';

export default function SwordAndShield() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/research/labs">labs</Link>
        <span>/</span>
        <Link href="/research/labs/ecl">ecl</Link>
        <span>/</span>
        <span>sword and shield hypothesis</span>
      </div>

      <BackButton />

      <h1 className="page-title">sword and shield hypothesis</h1>

      <div className="detail-content">
        <p>
          The Sword and Shield Hypothesis proposes
          that systematic asymmetries in hand actions drive the laterality of affective
          motivation in the brain. The dominant hand is used disproportionately for
          approach actions (wielding a sword to attack), while the nondominant hand
          is used for avoidance actions (raising a shield to defend).
        </p>

        <p>
          Because the right hand is controlled by the left motor cortex in right-handers,
          this could explain why approach motivation is left-lateralized. Previous work
          found that approach motivation is associated with left-hemisphere activity in
          right-handers but right-hemisphere activity in left-handers.
        </p>

        <h3>the experiment</h3>

        <p>
          I worked on a replication study of <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3025747/" target="_blank" rel="noopener noreferrer">Berkman and Lieberman (2010)</a>, which found
          that approach motivation, rather than valence, drove left lateralization in
          prefrontal cortex. Instead of fMRI, we ran an online reaction time experiment.
        </p>

        <p>
          Participants read about a fictional group called the Nochmani who eat insects
          and sweet things but avoid meat and fungus. Then they saw images of items in
          each category and indicated whether they would eat or not eat each item if
          they were Nochmani. This orthogonalizes motivation and valence: positive-approach,
          negative-approach, positive-avoidance, negative-avoidance.
        </p>

        <h3>what i did</h3>

        <div className="tree">
          <div className="tree-item">
            <span>stimuli</span>
            <span className="desc">prepared bug images and trial sequences</span>
          </div>
          <div className="tree-item">
            <span>experiment</span>
            <span className="desc">built and tested the online reaction time task</span>
          </div>
        </div>
      </div>
    </main>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import BackButton from '../../../components/BackButton';

export default function ECL() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/people">people</Link>
        <span>/</span>
        <Link href="/people/labs">labs</Link>
        <span>/</span>
        <span>ecl</span>
      </div>

      <BackButton />

      <h1 className="page-title">experience and cognition lab</h1>
      <p className="page-desc">research in embodied cognition</p>

      <div className="detail-content">
        <h3>action asymmetry hypothesis</h3>

        <p>
          There is a well-documented phenomenon in perception: lower frequency information
          is processed faster in the right hemisphere, and higher frequency information
          is processed faster in the left hemisphere. This is true in both vision and
          audition.
        </p>

        <p>
          Why? The action asymmetry hypothesis proposes that this comes from hand dominance.
          Your dominant hand performs fine motor actions (writing, threading a needle),
          which require high spatial frequency processing. Your non-dominant hand performs
          coarse motor actions (stabilizing, holding), which require low spatial frequency
          processing.
        </p>

        <p>
          Because most people are right-handed, and motor cortex is contralateral (right
          hand controlled by left hemisphere), this would cause left hemisphere specialization
          for high frequencies and right hemisphere specialization for low frequencies.
        </p>

        <div className="figure" style={{ margin: '2rem 0' }}>
          <Image
            src="/assets/aah/fig1.png"
            alt="Low frequency vs high frequency gratings"
            width={500}
            height={350}
            style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
          />
          <p className="figure-caption" style={{ fontSize: '0.85em', color: '#888', marginTop: '0.5rem' }}>
            <strong>Fig. 1:</strong> Spatial frequency gratings. Low frequency (left) has wider bars,
            high frequency (right) has narrower bars. The brain processes these differently
            depending on which hemisphere receives the information.
          </p>
        </div>

        <div className="figure" style={{ margin: '2rem 0' }}>
          <Image
            src="/assets/aah/fig2.png"
            alt="Visual pathway showing contralateral processing"
            width={500}
            height={400}
            style={{ width: '100%', maxWidth: '450px', height: 'auto' }}
          />
          <p className="figure-caption" style={{ fontSize: '0.85em', color: '#888', marginTop: '0.5rem' }}>
            <strong>Fig. 2:</strong> The visual pathway is contralateral. Information from the left
            visual field (B) goes to the right hemisphere, and information from the right visual
            field (A) goes to the left hemisphere. This crossing happens at the optic chiasm.
          </p>
        </div>

        <div className="figure" style={{ margin: '2rem 0' }}>
          <Image
            src="/assets/aah/fig3.png"
            alt="Hemispheric specialization for spatial frequency"
            width={500}
            height={500}
            style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
          />
          <p className="figure-caption" style={{ fontSize: '0.85em', color: '#888', marginTop: '0.5rem' }}>
            <strong>Fig. 3:</strong> The complete model. Global/low frequency information in the left
            visual field (LVF) is processed by the right hemisphere. Local/high frequency information
            in the right visual field (RVF) is processed by the left hemisphere. The H made of Ts
            illustrates global vs local processing.
          </p>
        </div>

        <h3>research questions</h3>

        <p>
          Do right and left handers have systematically different frequency information
          in their left and right visual hemifields, as measured in egocentric video?
        </p>

        <p>
          Do right handers have more high-frequency information in the right visual field,
          and left handers more high-frequency information in the left?
        </p>

        <h3>hypotheses</h3>

        <div className="tree">
          <div className="tree-item">
            <span>H1</span>
            <span className="desc">input asymmetry causes frequency specialization</span>
          </div>
          <div className="tree-item">
            <span>H2</span>
            <span className="desc">ipsilateral connections between motor and parietal/perceptual cortex cause frequency specialization</span>
          </div>
        </div>

        <h3>methods</h3>

        <div className="tree">
          <div className="tree-item">
            <span>(1)</span>
            <span className="desc">model left and right hemifields based on gaze data</span>
          </div>
          <div className="tree-item">
            <span>(2)</span>
            <span className="desc">quantify spatial and temporal frequency information in left and right hemifields</span>
          </div>
          <div className="tree-item">
            <span>(3)</span>
            <span className="desc">compare left and right handers</span>
          </div>
        </div>

        <h3>what i did</h3>

        <p>
          I worked with egocentric eye gaze data, processing video recordings to extract
          gaze coordinates. Using Fourier transforms, I plotted out sections of high and
          low spatial frequency power across the left and right visual hemifields. This
          allowed us to quantify whether there were systematic differences in frequency
          content based on handedness.
        </p>

        <h3 style={{ marginTop: '2.5rem' }}>sword and shield hypothesis</h3>

        <p>
          A separate line of research in the lab. The Sword and Shield Hypothesis proposes
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
          I worked on a replication study of Berkman and Lieberman (2010), which found
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
          <div className="tree-item">
            <span>data</span>
            <span className="desc">collected and processed response time data</span>
          </div>
        </div>

      </div>
    </main>
  );
}

import Image from 'next/image';

export default function CV() {
  return (
    <main style={{position: 'relative', maxWidth: '1400px', margin: '0 auto', padding: '0 20px'}}>
      {/* Left side images */}
      <div style={{position: 'absolute', left: '-250px', top: '100px', width: '200px'}}>
        <div style={{marginBottom: '40px'}}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/8/8b/Yoshitomo_Nara_-_Knife_Behind_Back_%282000%29.jpg"
            alt="Yoshitomo Nara - Knife Behind Back"
            width={200}
            height={250}
            style={{border: '1px solid #ddd', padding: '5px'}}
          />
          <p style={{fontSize: '0.7em', marginTop: '5px', fontStyle: 'italic'}}>
            Y. Nara, <i>Knife Behind Back</i> (2000) [1]
          </p>
        </div>

        <div style={{marginBottom: '40px'}}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/a/ae/El_quitasol_%28Goya%29.jpg"
            alt="Goya - The Parasol"
            width={200}
            height={260}
            style={{border: '1px solid #ddd', padding: '5px'}}
          />
          <p style={{fontSize: '0.7em', marginTop: '5px', fontStyle: 'italic'}}>
            F. Goya, <i>The Parasol</i> (1777) [3]
          </p>
        </div>
      </div>

      {/* Right side images */}
      <div style={{position: 'absolute', right: '-250px', top: '200px', width: '200px'}}>
        <div style={{marginBottom: '40px'}}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/8/82/Cajal_actx_inter.jpg"
            alt="Santiago Ramón y Cajal - Neurons"
            width={200}
            height={300}
            style={{border: '1px solid #ddd', padding: '5px'}}
          />
          <p style={{fontSize: '0.7em', marginTop: '5px', fontStyle: 'italic'}}>
            S. Ramón y Cajal, <i>Pyramidal neurons of cerebral cortex</i> (1904) [2]
          </p>
        </div>

        <div style={{marginBottom: '40px'}}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Cole_Thomas_The_Course_of_Empire_The_Savage_State_1836.jpg"
            alt="Thomas Cole - The Course of Empire: The Savage State"
            width={200}
            height={130}
            style={{border: '1px solid #ddd', padding: '5px'}}
          />
          <p style={{fontSize: '0.7em', marginTop: '5px', fontStyle: 'italic'}}>
            T. Cole, <i>The Course of Empire: The Savage State</i> (1836) [4]
          </p>
        </div>
      </div>

      {/* Centered content */}
      <article style={{maxWidth: '700px', margin: '0 auto'}}>
        {/* Header */}
        <h1>Stephen Chien</h1>
        <p className="author">
          Email: slc292@cornell.edu<br />
          GitHub: <a href="https://github.com/stephenchien3">stephenchien3</a><br />
          LinkedIn: <a href="https://www.linkedin.com/in/stephenlchien/">stephenlchien</a>
        </p>

        {/* Abstract/Bio */}
        <div className="abstract">
          <h2>Abstract</h2>
          <p>
            I&apos;m a current Masters student at Cornell studying CS.
          </p>
          <p>
            I&apos;m interested in cognitive psychology, economic sociology, and a majority of the humanities.
          </p>
          <p>
            Recently I&apos;ve been building <a href="https://assesskit.com">assesskit</a>, a unified platform for collecting more granular user responses, such as response time, mouse tracking, etc.
          </p>
          <p>
            I also built <a href="https://apps.apple.com/us/app/buddhist-app-gautama/id6753130717">gautama</a>, an iOS app for meditation.
          </p>
          <p>
            I am very passionate about research and the joy of learning. I also like to read (mainly Toni Morrison + Haruki Murakami), play basketball, and meditate in my spare time.
          </p>
          <p>
            I would love to talk or connect - please reach out!
          </p>
        </div>

        {/* Publications */}
        <section id="publications" className="cv-section">
          <h2>Publications</h2>
          <div className="cv-item">
            <p>
              <strong>Exposing Privacy Vulnerabilities in mmWave Sensing via Membership Inference Attacks</strong>
            </p>
            <p>
              Stephen Chien*, Haylie Rayl*, Lucas Lippeatt*, et al., Feng Li
            </p>
            <p className="role-title">
              IEEE MASS 2025, Chicago, IL
            </p>
            <p className="date-range">
              October 2025 • DOI: <a href="https://doi.org/10.1109/MASS66014.2025.00106">10.1109/MASS66014.2025.00106</a>
            </p>
            <p style={{fontSize: '0.85em', fontStyle: 'italic', marginTop: '0.5rem'}}>
              *Co-first authors
            </p>
          </div>
        </section>

        {/* Image Citations */}
        <section id="image-citations" className="cv-section" style={{marginTop: '3rem', borderTop: '1px solid #ddd', paddingTop: '1rem'}}>
          <h2>Image Citations</h2>
          <ol style={{fontSize: '0.85em', lineHeight: '1.6'}}>
            <li>
              Yoshitomo Nara, <i>Knife Behind Back</i>, 2000. Acrylic on canvas. Fair use for educational purposes.
            </li>
            <li>
              Santiago Ramón y Cajal, <i>Drawing of pyramidal neurons of the cerebral cortex</i>, 1904.
              From &quot;Textura del Sistema Nervioso del Hombre y de los Vertebrados&quot;. Public domain.
              Wikimedia Commons: <a href="https://commons.wikimedia.org/wiki/File:Cajal_actx_inter.jpg">File:Cajal_actx_inter.jpg</a>
            </li>
            <li>
              Francisco de Goya, <i>The Parasol (El quitasol)</i>, 1777. Oil on canvas,
              Museo del Prado, Madrid. Public domain.
              Wikimedia Commons: <a href="https://commons.wikimedia.org/wiki/File:El_quitasol_(Goya).jpg">File:El_quitasol_(Goya).jpg</a>
            </li>
            <li>
              Thomas Cole, <i>The Course of Empire: The Savage State</i>, 1836. Oil on canvas,
              New-York Historical Society. Public domain. Hudson River School.
              Wikimedia Commons: <a href="https://commons.wikimedia.org/wiki/File:Cole_Thomas_The_Course_of_Empire_The_Savage_State_1836.jpg">File:Cole_Thomas_The_Course_of_Empire_The_Savage_State_1836.jpg</a>
            </li>
          </ol>
        </section>
      </article>
    </main>
  );
}

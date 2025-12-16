export default function CV() {
  return (
    <main>
      <article>
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
      </article>
    </main>
  );
}

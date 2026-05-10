import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="home-container">
      <div className="home-layout">
        <div className="home-content">
          <p className="site-status">open to full time roles</p>
          <h1 className="site-title">stephen chien</h1>
          <div className="tree">
        <div className="tree-item">
          <Link href="/about">about</Link>
          <span className="desc">cs @ cornell</span>
        </div>

        <div className="tree-item">
          <span>things</span>
          <span className="desc">
            <a href="https://cajalhealth.org" target="_blank" rel="noopener noreferrer">cajal health</a>
            {', '}
            <a href="https://assesskit.com" target="_blank" rel="noopener noreferrer">assesskit</a>
            {', '}
            <a href="https://apps.apple.com/us/app/buddhist-app-gautama/id6753130717" target="_blank" rel="noopener noreferrer">gautama</a>
          </span>
        </div>

        <div className="tree-item">
          <span>research</span>
          <div className="tree">
            <div className="tree-item">
              <Link href="/research/labs">labs</Link>
              <span className="desc">ecl, gao, ces</span>
            </div>
            <div className="tree-item">
              <Link href="/research/publications">publications</Link>
            </div>
          </div>
        </div>

        <div className="tree-item">
          <Link href="/writings">writings</Link>
          <span className="desc">i also like to write things</span>
        </div>

        <div className="tree-item">
          <span>links</span>
          <span className="desc">
            <a href="https://github.com/stephenchien3" target="_blank" rel="noopener noreferrer">github</a>
            {', '}
            <a href="https://linkedin.com/in/stephenlchien" target="_blank" rel="noopener noreferrer">linkedin</a>
            {', '}
            <a href="mailto:slc292@cornell.edu">email</a>
            {', '}
            <a href="/assets/stephen_chien_resume.pdf" target="_blank" rel="noopener noreferrer">cv</a>
          </span>
        </div>
          </div>
        </div>
        <Image
          src="/assets/portrait.png"
          alt="Stephen Chien"
          width={180}
          height={240}
          className="profile-image"
          priority
        />
      </div>
    </main>
  );
}

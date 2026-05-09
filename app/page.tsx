import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="home-container">
      <h1 className="site-title">stephen chien</h1>
      <div className="home-layout">
        <div className="home-content">
          <div className="tree">
        <div className="tree-item">
          <Link href="/about">about</Link>
          <span className="desc">cs @ cornell</span>
          <div className="tree">
            <div className="tree-item">
              <Link href="/about/now">now</Link>
            </div>
          </div>
        </div>

        <div className="tree-item">
          <Link href="/things">things</Link>
          <span className="desc">
            <Link href="/things/cajal-health">cajal health</Link>
            {', '}
            <Link href="/things/assesskit">assesskit</Link>
            {', '}
            <Link href="/things/gautama">gautama</Link>
            {', '}
            <Link href="/things/morrison">morrison</Link>
          </span>
        </div>

        <div className="tree-item">
          <Link href="/research">research</Link>
          <span className="desc">academic work</span>
          <div className="tree">
            <div className="tree-item">
              <Link href="/research/labs">labs</Link>
              <span className="desc">
                <a href="https://casasanto.com" target="_blank" rel="noopener noreferrer">ecl</a>
                {', '}
                <a href="https://gao.cee.cornell.edu" target="_blank" rel="noopener noreferrer">gao</a>
                {', '}
                <a href="https://www.economyandsociety.org" target="_blank" rel="noopener noreferrer">ces</a>
              </span>
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
          </div>
        </div>
        <Image
          src="/assets/image.png"
          alt="Stephen Chien"
          width={180}
          height={240}
          className="profile-image"
        />
      </div>
    </main>
  );
}

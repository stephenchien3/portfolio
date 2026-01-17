import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="home-container">
      <div className="home-layout">
        <div className="home-content">
          <h1 className="site-title">stephen chien</h1>
          <div className="tree">
        <div className="tree-item">
          <Link href="/about">about</Link>
          <span className="desc">who i am</span>
          <div className="tree">
            <div className="tree-item">
              <Link href="/about/now">now</Link>
            </div>
            <div className="tree-item">
              <Link href="/about/before">before</Link>
            </div>
            <div className="tree-item">
              <Link href="/about/interests">interests</Link>
            </div>
          </div>
        </div>

        <div className="tree-item">
          <Link href="/things">things</Link>
          <span className="desc">what i have made</span>
          <div className="tree">
            <div className="tree-item">
              <Link href="/things/cajal-health">cajal health</Link>
            </div>
            <div className="tree-item">
              <Link href="/things/assesskit">assesskit</Link>
            </div>
            <div className="tree-item">
              <Link href="/things/gautama">gautama</Link>
            </div>
            <div className="tree-item">
              <Link href="/things/morrison">morrison</Link>
            </div>
          </div>
        </div>

        <div className="tree-item">
          <Link href="/research">research</Link>
          <span className="desc">academic work</span>
          <div className="tree">
            <div className="tree-item">
              <Link href="/research/labs">labs</Link>
            </div>
            <div className="tree-item">
              <Link href="/research/publications">publications</Link>
            </div>
            <div className="tree-item">
              <Link href="/research/teachers">teachers</Link>
            </div>
          </div>
        </div>

        <div className="tree-item">
          <Link href="/elsewhere">elsewhere</Link>
          <span className="desc">other things</span>
          <div className="tree">
            <div className="tree-item">
              <Link href="/elsewhere/places">places</Link>
            </div>
            <div className="tree-item">
              <Link href="/elsewhere/readings">readings</Link>
            </div>
            <div className="tree-item">
              <Link href="/elsewhere/art">art</Link>
            </div>
            <div className="tree-item">
              <Link href="/elsewhere/contact">contact</Link>
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
          src="/assets/IMG_1419.PNG"
          alt="Stephen Chien"
          width={180}
          height={240}
          className="profile-image"
        />
      </div>
    </main>
  );
}

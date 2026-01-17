import Link from 'next/link';
import BackButton from '../../components/BackButton';

export default function VideoGames() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/elsewhere">elsewhere</Link>
        <span>/</span>
        <span>video games</span>
      </div>

      <BackButton />

      <h1 className="page-title">video games</h1>
      <p className="page-desc">things i play</p>

      <div className="detail-content">
        <p>
          I like first person shooters such as TF2 and Counter-Strike. 
          I also enjoy games such as RDR2 and Balatro. 
        </p>

        <p>
          My current games I really play are Civ 6 and Smash. My favorite is Montezuma, or the Aztecs
          since they start with an extra warrior unit. Although I can run a strong Australia. For smash, 
          I main King K Rool.
        </p>

        <p>
          Unfortunately, I sort of stopped playing in college to pursue other interests. 
        </p>

      </div>
    </main>
  );
}

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
          Used to play TF2 and CS:GO back in high school. TF2 was chaotic and fun, a game
          where you could just jump in and mess around. CS:GO was more serious, more
          competitive. I spent hours learning spray patterns and callouts. It was a good
          way to hang out with friends online.
        </p>

        <p>
          Stopped playing in college to pursue other things. 
        </p>

        <p>
          Nowadays I occasionally play a little Civ 6. My favorite is Montezuma of the Aztecs
          since they start with an extra warrior unit and can attack quickly. There is
          something satisfying about an early rush, although I can run a strong Australia too, playing the
          long game with those appeal bonuses.
        </p>

        <p>
          Also play Smash. King K. Rool main.
        </p>
      </div>
    </main>
  );
}

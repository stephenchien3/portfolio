import Link from 'next/link';
import BackButton from '../../components/BackButton';

export default function Russia() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/writings">writings</Link>
        <span>/</span>
        <span>russia</span>
      </div>

      <BackButton />

      <h1 className="page-title">russia</h1>
      <p className="page-desc">Inspired by Dostoevsky and Chekhov.</p>

      <div className="detail-content" style={{ lineHeight: '1.8' }}>
        <p>
          Pyotr Ivaskeshy was a great man, not a good man, by all affronts and accounts of those who had met him. He was a man who lived in perpetual wealth, not in the monetary sense, no, in a life full of the richness of those who had the joy of being connected with him. In each room he filled with a indescribable sense of warmth, almost as if one was close to the hearth of a house. Each hug he gave splintered through the ribcage and filled the heart with such kindness and spirit that it made others feel as if they had to spread this kindness. Pytor's hugs made their heart feel like a bathtub with so much water that it would spill and overflow into the crevices and orifices of their soul and thus the only way to spread this magnanimity was outward into the souls of others. His compassion only extended further to those who needed it the most. He would sing to little widowed babushkas at their homes, taking their loneliness and suffering and transfer the energy upwards until it disappeared in a lazy haze. He volunteered with the koshkas and animals of the neighborhood, diligently leaving them stray food. Almost every waking hour of Pyotr's soul outside of work was dedicated to spreading kindness, which truly could not have been out of malevolent intentions nor for his ego, as he was penniless and had almost no possessions to his name.
        </p>

        <p>
          It was to his manner that he would often be taken advantage of. Often times, those who knew of Pyotr's generosity in passing would ask him for money, and Pyotr, assuming the best in human nature, would hand them the money. The favors often extended beyond money, and thus, his apartment was stripped of his bed, then his clothes, then the chairs in the dining room, until the entire room had been reduced to a shell of its former state and Pyotr was left with only his work clothes. Even so, neighbors who came over would shower our protagonist, giving him gifts and clothing and the such, and even so, the room would remain in a perpetual cycle of rotating between fullness and scarcity. Pyotr never complained once, and would even house those griefers at the station, the mentally inept and insane, in his home during the frigid winter.
        </p>

        <p>
          Pyotr worked at one of those old Soviet buildings as a government official, one of those jobs where pretending to work was the work itself, and one would enter work and slowly climb the positional ladder. The goal in these positions was to work for five to seven years until one reached enough distinction that even if he were to leave his job one day and become a potato farmer, no one would think about firing him, as it was considered a grave offense to do such a thing to a distinguished official. There was no joy in this job, and no desire to improve, as the pay did not change regardless of merit nor effort, and the superciliousness of the senior officers warranted those lower to stay at their own level. It wasn't as if Pyotr Ivaskeshy couldn't quit, either, in fact, he contemplated this on his nightly walks in the park, but—
        </p>
      </div>
    </main>
  );
}

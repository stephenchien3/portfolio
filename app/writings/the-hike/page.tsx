import Link from 'next/link';
import BackButton from '../../components/BackButton';

export default function TheHike() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/writings">writings</Link>
        <span>/</span>
        <span>the hike</span>
      </div>

      <BackButton />

      <h1 className="page-title">the hike</h1>
      <p className="page-desc">Inspired by a hike in Ithaca.</p>

      <div className="detail-content" style={{ lineHeight: '1.8' }}>
        <p>
          The hike began in the late afternoon. It was slightly sunny outside and the air was light. I crossed the road to get to the Six Mile Creek, which was a combination of mountain, gorges, lakes, and tiny rivulets across shale rock. The trail to get down to the creek was steep and treacherous. It was a sharp decline, and only a tiny gap for my feet to cling onto. On the side of the trail was certain danger. As I continued down, I noticed something peculiar. It wasn't at all well kept, tiny insects kept leaping up and lines of common milkweed and ivy dotted the trail. There were no guard rails or handles if someone where to slip and fall. I ran into a web on my way, and had to claw my way out of the entanglement. I think it's important to remember that mother nature is vastly different than modern human civilization, in that danger lurks all around us. I can also see how being with nature can give a new appreciation for human life and how special it is. When I reached the bottom of the trail, thin streams of water crossed eroded rocks toward new destinations. Only two other people were there, and I saw them curiously from a distance, observing them. They seemed to be fishing.
        </p>
      </div>
    </main>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import BackButton from '../../components/BackButton';

export default function Art() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/elsewhere">elsewhere</Link>
        <span>/</span>
        <span>art</span>
      </div>

      <BackButton />

      <h1 className="page-title">art</h1>
      <p className="page-desc">things i look at</p>

      <p>
        Each one tells a different story. I keep coming back to these.
      </p>

      <div className="art-grid">
        <div className="art-item">
          <a href="https://www.moma.org/collection/works/90276" target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/knife-behind-back.jpg"
              alt="Yoshitomo Nara - Knife Behind Back"
              width={300}
              height={375}
              style={{ width: '100%', height: 'auto' }}
            />
          </a>
          <div className="art-info">
            <a href="https://www.moma.org/collection/works/90276" target="_blank" rel="noopener noreferrer">
              <strong>yoshitomo nara</strong>
            </a>
            <span className="desc">knife behind back, 2000</span>
            <p>
              This reminds me of childlike defiance, being individualistic, and not following a linear path. 
            </p>
          </div>
        </div>

        <div className="art-item">
          <a href="https://www.museodelprado.es/en/the-collection/art-work/the-parasol/aa28be9f-e66a-4d9d-9f4b-8f5c09e0e40e" target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/parasol.jpg"
              alt="Goya - The Parasol"
              width={300}
              height={390}
              style={{ width: '100%', height: 'auto' }}
            />
          </a>
          <div className="art-info">
            <a href="https://www.museodelprado.es/en/the-collection/art-work/the-parasol/aa28be9f-e66a-4d9d-9f4b-8f5c09e0e40e" target="_blank" rel="noopener noreferrer">
              <strong>goya</strong>
            </a>
            <span className="desc">the parasol, 1777</span>
            <p>
              Early Goya, before the black paintings. I saw this in Spain and just really liked it, the warmness of it. 
            </p>
          </div>
        </div>

        <div className="art-item">
          <a href="https://www.tate.org.uk/art/artworks/ai-sunflower-seeds-t13408" target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/sunflower-seeds.jpg"
              alt="Ai Weiwei - Sunflower Seeds"
              width={300}
              height={225}
              style={{ width: '100%', height: 'auto' }}
            />
          </a>
          <div className="art-info">
            <a href="https://www.tate.org.uk/art/artworks/ai-sunflower-seeds-t13408" target="_blank" rel="noopener noreferrer">
              <strong>ai weiwei</strong>
            </a>
            <span className="desc">sunflower seeds, 2010</span>
            <p>
              One hundred million hand-painted porcelain sunflower seeds.

            </p>
          </div>
        </div>

        <div className="art-item">
          <a href="https://www.nobelprize.org/prizes/medicine/1906/cajal/photo-gallery/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/cajal-neurons.jpg"
              alt="Santiago Ramón y Cajal - Pyramidal Neurons"
              width={300}
              height={450}
              style={{ width: '100%', height: 'auto' }}
            />
          </a>
          <div className="art-info">
            <a href="https://www.nobelprize.org/prizes/medicine/1906/cajal/photo-gallery/" target="_blank" rel="noopener noreferrer">
              <strong>ramon y cajal</strong>
            </a>
            <span className="desc">pyramidal neurons, 1904</span>
            <p>
              Imagine drawing this from a microscope. 
            </p>
          </div>
        </div>

        <div className="art-item">
          <a href="https://www.metmuseum.org/art/collection/search/10497" target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/cole-savage-state.jpg"
              alt="Thomas Cole - The Course of Empire: The Savage State"
              width={300}
              height={195}
              style={{ width: '100%', height: 'auto' }}
            />
          </a>
          <div className="art-info">
            <a href="https://www.metmuseum.org/art/collection/search/10497" target="_blank" rel="noopener noreferrer">
              <strong>thomas cole</strong>
            </a>
            <span className="desc">the course of empire</span>
            <p>
              The rise and fall of a civilization. Savage state,
              pastoral state, consummation, destruction, desolation.
            </p>
          </div>
        </div>

        <div className="art-item">
          <a href="https://www.rubellfamilycollection.com/artist/amoako-boafo/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/image.png"
              alt="Amoako Boafo"
              width={300}
              height={400}
              style={{ width: '100%', height: 'auto' }}
            />
          </a>
          <div className="art-info">
            <a href="https://www.rubellfamilycollection.com/artist/amoako-boafo/" target="_blank" rel="noopener noreferrer">
              <strong>amoako boafo</strong>
            </a>
            <span className="desc">portrait</span>
            <p>
              portrait of a portrait 
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CV() {
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);

  // Preload all images on mount to eliminate click lag
  useEffect(() => {
    const imagesToPreload = [
      '/assets/knife-behind-back.jpg',
      '/assets/parasol.jpg',
      '/assets/sunflower-seeds.jpg',
      '/assets/cajal-neurons.jpg',
      '/assets/cole-savage-state.jpg'
    ];

    imagesToPreload.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });

  }, []);

  return (
    <>
      {/* Image Modal */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            cursor: 'pointer'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div style={{position: 'relative', maxWidth: '90vw', maxHeight: '90vh', display: 'flex'}}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>
      )}

    <main style={{position: 'relative', maxWidth: '1400px', margin: '0 auto', padding: '0 20px'}}>
      {/* Left side images */}
      <div style={{position: 'absolute', left: '-250px', top: '100px', width: '200px'}}>
        <div style={{marginBottom: '40px'}}>
          <Image
            src="/assets/knife-behind-back.jpg"
            alt="Yoshitomo Nara - Knife Behind Back"
            width={200}
            height={250}
            loading="lazy"
            style={{
              border: '1px solid #ddd',
              padding: '5px',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            onClick={() => setSelectedImage({src: '/assets/knife-behind-back.jpg', alt: 'Yoshitomo Nara - Knife Behind Back'})}
          />
          <p style={{fontSize: '0.7em', marginTop: '5px', fontStyle: 'italic'}}>
            Y. Nara, <i>Knife Behind Back</i> (2000) [1]
          </p>
        </div>

        <div style={{marginBottom: '40px'}}>
          <Image
            src="/assets/parasol.jpg"
            alt="Goya - The Parasol"
            width={200}
            height={260}
            loading="lazy"
            style={{
              border: '1px solid #ddd',
              padding: '5px',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            onClick={() => setSelectedImage({src: '/assets/parasol.jpg', alt: 'Goya - The Parasol'})}
          />
          <p style={{fontSize: '0.7em', marginTop: '5px', fontStyle: 'italic'}}>
            F. Goya, <i>The Parasol</i> (1777) [3]
          </p>
        </div>

        <div style={{marginBottom: '40px'}}>
          <Image
            src="/assets/sunflower-seeds.jpg"
            alt="Ai Weiwei - Sunflower Seeds"
            width={200}
            height={150}
            loading="lazy"
            style={{
              border: '1px solid #ddd',
              padding: '5px',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            onClick={() => setSelectedImage({src: '/assets/sunflower-seeds.jpg', alt: 'Ai Weiwei - Sunflower Seeds'})}
          />
          <p style={{fontSize: '0.7em', marginTop: '5px', fontStyle: 'italic'}}>
            Ai Weiwei, <i>Sunflower Seeds</i> (2010) [5]
          </p>
        </div>
      </div>

      {/* Right side images */}
      <div style={{position: 'absolute', right: '-250px', top: '200px', width: '200px'}}>
        <div style={{marginBottom: '40px'}}>
          <Image
            src="/assets/cajal-neurons.jpg"
            alt="Santiago Ramón y Cajal - Neurons"
            width={200}
            height={300}
            loading="lazy"
            style={{
              border: '1px solid #ddd',
              padding: '5px',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            onClick={() => setSelectedImage({src: '/assets/cajal-neurons.jpg', alt: 'Santiago Ramón y Cajal - Neurons'})}
          />
          <p style={{fontSize: '0.7em', marginTop: '5px', fontStyle: 'italic'}}>
            S. Ramón y Cajal, <i>Pyramidal neurons of cerebral cortex</i> (1904) [2]
          </p>
        </div>

        <div style={{marginBottom: '40px'}}>
          <Image
            src="/assets/cole-savage-state.jpg"
            alt="Thomas Cole - The Course of Empire: The Savage State"
            width={200}
            height={130}
            loading="lazy"
            style={{
              border: '1px solid #ddd',
              padding: '5px',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            onClick={() => setSelectedImage({src: '/assets/cole-savage-state.jpg', alt: 'Thomas Cole - The Course of Empire: The Savage State'})}
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
            I&apos;m interested in <a href="https://casasanto.com">cognitive psychology</a>, <a href="https://www.economyandsociety.org">economic sociology</a>, and a majority of the humanities.
          </p>
          <p>
            Recently I&apos;ve been building <a href="https://assesskit.com">assesskit</a>, a unified platform for collecting more granular user responses, such as response time, mouse tracking, etc.
          </p>
          <p>
            I also built <a href="https://apps.apple.com/us/app/buddhist-app-gautama/id6753130717">gautama</a>, an iOS app for meditation.
          </p>
          <p>
            I am very passionate about research and learning. I also like to read (mainly Toni Morrison & Haruki Murakami), play basketball, and meditate in my spare time.
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
    </>
  );
}

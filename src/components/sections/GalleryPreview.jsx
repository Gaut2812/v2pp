import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { featuredPhotos } from '@/data/galleryData';
import styles from './GalleryPreview.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function GalleryPreview() {
  const gridRef = useRef(null);
  const [feat, ...rest] = featuredPhotos.slice(0, 5);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Desktop: Full stagger animation
      gsap.fromTo('.gp-item',
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
        }
      );
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile: Simplified animation
      gsap.fromTo('.gp-item',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 90%',
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  const getOptimizedUrl = (url, width = 800) => {
    return `${url}?f_auto,q_auto,w_${width}`;
  };


  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Selected Works</h2>
          </div>
        </div>

        {/* Bento Grid */}
        <div className={styles.grid} ref={gridRef}>
          {/* Large feature — col-span-8 row-span-2 */}
          {feat && (
            <Link to="/gallery" className={`${styles.item} ${styles.feature} gp-item`}>
              <div className={styles.imgWrap}>
                <img src={getOptimizedUrl(feat.url, 1200)} alt={feat.title} loading="lazy" />
              </div>

              <div className={styles.overlay}>
                <span className={styles.overlayEyebrow}>Project 01</span>
                <span className={styles.overlayTitle}>{feat.title}</span>
              </div>
            </Link>
          )}

          {/* Secondary — col-span-4 row-span-1 */}
          {rest[0] && (
            <Link to="/gallery" className={`${styles.item} ${styles.secondary} gp-item`}>
              <div className={styles.imgWrap}>
                <img src={getOptimizedUrl(rest[0].url, 800)} alt={rest[0].title} loading="lazy" style={{ objectPosition: 'center 20%' }} />
              </div>

              <div className={`${styles.overlay} ${styles.centerLabel}`}>
                <span className={styles.editorialLabel}>Editorial</span>
              </div>
            </Link>
          )}

          {/* Bottom row split — col-span-4 */}
          <div className={`${styles.split} gp-item`}>
            {rest[1] && (
              <Link to="/gallery" className={`${styles.item} ${styles.splitA}`}>
                <div className={styles.imgWrap}>
                  <img src={getOptimizedUrl(rest[1].url, 800)} alt={rest[1].title} loading="lazy" style={{ filter: 'sepia(0.3)' }} />
                </div>

              </Link>
            )}
            <Link to="/gallery" className={`${styles.item} ${styles.splitB}`}>
              <div className={styles.splitCTA}>
                <span className={styles.splitCTATitle}>Explore<br />Full Series</span>
              </div>
            </Link>
          </div>
        </div>

        {/* View All */}
        <div className={styles.viewAllWrap}>
          <Link to="/gallery" className={styles.viewAll}>
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WHATSAPP_URL } from '@/utils/constants';
import styles from './Hero.module.css';

gsap.registerPlugin(ScrollTrigger);

const HERO_IMG = "https://res.cloudinary.com/dra8c0dyn/image/upload/v1774532768/v2pp_gallery/22.jpg";

export default function Hero() {
  const heroRef = useRef(null);
  const ctaRef  = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set('.hero-word', { yPercent: 110, opacity: 0 });
      gsap.set('.hero-eyebrow', { opacity: 0 });
      gsap.set(ctaRef.current, { opacity: 0, y: 24 });

      const tl = gsap.timeline({ delay: 0.2 });
      tl.to('.hero-eyebrow', { opacity: 1, duration: 0.8, ease: 'power2.out' })
        .to('.hero-word', {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.12,
          ease: 'power4.out',
        }, '-=0.5')
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.7');

      // Subtle scroll-driven parallax
      gsap.to(`.${styles.imgWrap}`, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
        y: 60,
        ease: 'none',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.grid}>
        {/* Left: Text */}
        <div className={styles.textCol}>
          <h1 className={styles.headline}>
            <div className={styles.line}>
              <span className="hero-word">Capture</span>
            </div>
            <div className={styles.line}>
              <span className="hero-word">the</span>{' '}
              <em className="hero-word">Unspoken</em>
            </div>
            <div className={styles.line}>
              <span className="hero-word">Essence</span>
            </div>
          </h1>

          <p className={styles.sub}>
            A curated exploration of light, shadow, and human stillness. Based in Chennai,
            GSPHOTOGRAPHY documents the intersections of modern life and timeless emotion.
          </p>

          <div className={styles.ctas} ref={ctaRef}>
            <Link to="/gallery" className={styles.btnPrimary}>
              View Collections
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.btnOutline}>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Right: Portrait */}
        <div className={styles.imgCol}>
          <div className={styles.imgWrap}>
            <img
              src={HERO_IMG}
              alt="Editorial portrait"
              className={styles.img}
              loading="eager"
            />
          </div>
          {/* Exhibit badge */}
          <div className={styles.badge}>
            <span className={styles.badgeEyebrow}>Current Project</span>
            <p className={styles.badgeTitle}>A Union in Bloom</p>
          </div>
          {/* Decorative block */}
          <div className={styles.deco} />
        </div>
      </div>
    </section>
  );
}

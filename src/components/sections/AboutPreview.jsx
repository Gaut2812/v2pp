import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/common/ScrollReveal';
import styles from './AboutPreview.module.css';
import karthikPhoto from '@/assets/karthik-photo.png';

const HERO_IMG = karthikPhoto;

export default function AboutPreview() {
  return (
    <section className={styles.section}>
      {/* Left: editorial text panel */}
      <ScrollReveal className={styles.textPanel} yOffset={30}>
        <span className={styles.eyebrow}>The Philosophy</span>
        <h2 className={styles.headline}>
          Slow Art in a<br />Fast World.
        </h2>
        <p className={styles.body}>
          We believe in the power of the frame. In a world saturated with fleeting images,
          we focus on the enduring. Each photograph in our archive is a deliberate act of preservation.
        </p>
        <p className={styles.body}>
          Our process involves traditional techniques combined with a modern editorial eye,
          ensuring each print carries the weight of a physical memory.
        </p>
        <Link to="/about" className={styles.link}>
          Read Our Story
        </Link>
      </ScrollReveal>

      {/* Right: full-bleed image */}
      <div className={styles.imgPanel}>
        <img
          src={HERO_IMG}
          alt="Timeless wedding portrait"
          className={styles.img}
          loading="lazy"
        />
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ScrollReveal from '@/components/common/ScrollReveal';
import styles from './About.module.css';
import karthikPhoto from '@/assets/karthik-photo.png';

const PORTRAIT_IMG = karthikPhoto;

const whyChooseUs = [
  {
    title: 'Experience That Matters',
    description: 'With 12+ years in the field and 1000+ successful projects, we understand every moment, tradition, and timing — ensuring nothing important is missed.'
  },
  {
    title: 'Cinematic & Natural Style',
    description: 'We combine cinematic visuals with natural storytelling, creating images that feel real, emotional, and timeless.'
  },
  {
    title: 'Reliability & Professionalism',
    description: 'We arrive prepared, manage time efficiently, and handle events smoothly — even in high-pressure situations like weddings.'
  },
  {
    title: 'Clean & Premium Editing',
    description: 'Our editing style focuses on natural skin tones and elegant color grading, giving your photos a refined and professional look.'
  },
  {
    title: 'Complete Coverage',
    description: 'From candid moments to key rituals and portraits, we ensure every part of your event is documented with attention to detail.'
  },
  {
    title: 'Fast Delivery',
    description: 'We prioritize timely delivery without compromising quality, so you can relive your memories sooner.'
  },
  {
    title: 'Client-Friendly Approach',
    description: 'We maintain a friendly and comfortable environment, helping you feel relaxed and natural in front of the camera.'
  }
];

const services = [
  {
    title: 'Pre-Wedding Shoot',
    description: 'A romantic photoshoot conducted before the wedding to capture the couple’s chemistry and story. These photos are used for invitations, social media, and wedding displays, focusing on natural expressions and cinematic visuals.',
  },
  {
    title: 'Engagement Ceremony',
    description: 'Captures the official beginning of the couple’s journey. Key moments include the ring exchange, family interactions, and stage portraits, combining candid and traditional photography.',
  },
  {
    title: 'Wedding Ceremony',
    description: 'Covers all important rituals and traditions of the wedding. Special attention is given to key moments such as the tying of the thali, garland exchange, and emotional expressions of the couple and their families.',
  },
  {
    title: 'Reception',
    description: 'A grand celebration where the couple is introduced to guests. Includes stage portraits, guest interactions, and elegant couple photography under professional lighting.',
  },
  {
    title: 'Post-Wedding Shoot',
    description: 'A relaxed shoot conducted after the wedding, allowing more time for creative and cinematic visuals in scenic or personalized locations.',
  },
  {
    title: 'Outdoor Couple Shoot',
    description: 'A natural light photoshoot in outdoor locations like beaches, parks, or resorts. Focuses on authentic emotions, soft lighting, and aesthetic compositions.',
  },
  {
    title: 'Candid Coverage',
    description: 'Captures real, unscripted moments across all events. Focuses on genuine emotions, interactions, and storytelling rather than posed photography.',
  },
  {
    title: 'Drone Coverage',
    description: 'Provides aerial views of venues and events, adding a cinematic and grand perspective, especially useful for large gatherings and outdoor functions.',
  },
  {
    title: 'Birthday Photography',
    description: 'Covers birthday celebrations with a focus on key moments like cake cutting, decorations, guest interactions, and candid emotions, creating lively and memorable visuals.',
  }
];

export default function About() {
  const { ref: recognitionRef, inView: recognitionIn } = useScrollAnimation();

  return (
    <>
      <Navbar />
      <main className={styles.main}>

        {/* ── Hero: Asymmetric Grid ─────────────────────── */}
        <section className={styles.heroSection}>
          <ScrollReveal yOffset={30}>
            <div className={styles.heroGrid}>
              {/* Name col */}
              <div className={styles.nameCol}>
                <span className={styles.eyebrow}>Photographer</span>
                <h1 className={styles.heroName}>
                  <em>Karthikeyan</em>
                </h1>
              </div>

              {/* Portrait col */}
              <div className={styles.portraitCol}>
                <div className={styles.portraitWrap}>
                  <img
                    src={PORTRAIT_IMG}
                    alt="Portrait of Karthikeyan"
                    className={styles.portrait}
                    loading="eager"
                  />
                </div>
                {/* Floating quote card */}
                <div className={styles.floatQuote}>
                  <p>"The lens is not a tool for capture, but a medium for preservation."</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ── Why Choose Us Section ────────────────────────── */}
        <section className={styles.whySectionContainer}>
          <div className="container">
            <ScrollReveal>
              <div className={styles.whyHeadCenter}>
                <h2 className={styles.whyTitleCenter}>
                  Why Choose Us
                </h2>
                <p className={styles.whySubtitleCenter}>
                  Your wedding is more than just a day it's a collection of emotions, fleeting glances, and timeless memories. Here's why couples trust us to capture theirs:
                </p>
              </div>
            </ScrollReveal>

            <div className={styles.whyCardsGrid}>
              {whyChooseUs.map((item, idx) => (
                <ScrollReveal 
                  key={idx} 
                  delay={idx * 0.05} 
                  yOffset={20}
                  className={styles.whyCardWrapper}
                >
                  <div className={styles.whyCard}>
                    <h4 className={styles.whyCardTitle}>{item.title}</h4>
                    <p className={styles.whyCardDesc}>{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services ───────────────────── */}
        <section className={`section ${styles.recognitionSection}`} ref={recognitionRef}>
          <div className="container">
            <div className={styles.servicesHeader}>
              <span className={styles.recognitionEyebrow}>What We Do</span>
              <h3 className={styles.recognitionTitle}>
                Our Services
              </h3>
            </div>

            <div className={styles.servicesGrid}>
              {services.map((svc, i) => (
                <motion.div
                  key={svc.title}
                  className={styles.serviceCard}
                  initial={{ opacity: 0, y: 16 }}
                  animate={recognitionIn ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h4 className={styles.serviceTitle}>{svc.title}</h4>
                  <p className={styles.serviceDesc}>{svc.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────── */}
        <section className={styles.ctaSection}>
          <ScrollReveal yOffset={30}>
            <div className={styles.ctaInner}>
              <h3 className={styles.ctaTitle}>
                Inquire about limited edition prints or collaborations.
              </h3>
              <Link to="/contact" className={styles.ctaBtn}>Get in Touch</Link>
            </div>
          </ScrollReveal>
        </section>

      </main>
      <Footer />
    </>
  );
}

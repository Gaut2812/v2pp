import ScrollReveal from '@/components/common/ScrollReveal';
import styles from './ProjectVideo.module.css';

export default function ProjectVideo() {
  return (
    <section className={styles.section}>
      <ScrollReveal yOffset={30}>
        <div className={styles.container}>
          <div className={styles.videoWrapper}>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/1Jrpr6qqOB8?autoplay=1&mute=1&loop=1&playlist=1Jrpr6qqOB8&controls=0&showinfo=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            
            <div className={styles.overlay}>
              <div className={styles.content}>
                <span className={styles.eyebrow}>Current Project</span>
                <h2 className={styles.title}>The Outdoor Essence</h2>
                <p className={styles.subtitle}>A cinematic storytelling of love and nature's light.</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

import ScrollReveal from '@/components/common/ScrollReveal';
import outdoorVideo from '@/assets/video/outdoor.mp4';
import styles from './ProjectVideo.module.css';

export default function ProjectVideo() {

  return (
    <section className={styles.section}>
      <ScrollReveal yOffset={30}>
        <div className={styles.container}>
          <div className={styles.videoWrapper}>
            <video 
              className={styles.video}
              autoPlay 
              muted 
              loop 
              playsInline
            >
              <source src={outdoorVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
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

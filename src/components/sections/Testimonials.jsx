import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Testimonials.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  
  const text = '"Photography is the only language that can be understood anywhere in the world, yet speaks to the soul in complete silence."';

  useEffect(() => {
    let ctx = gsap.context(() => {
      const chars = textRef.current.querySelectorAll('.char');
      
      gsap.fromTo(chars, 
        { 
          opacity: 0,
          y: 5
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.05,
          stagger: 0.03,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={`section ${styles.section}`} ref={sectionRef}>
      <div className="container">
        <div className={styles.quoteWrap}>
          <blockquote className={styles.blockquote} ref={textRef}>
            {text.split(' ').map((word, wordIndex, wordArr) => (
              <span key={wordIndex} className={styles.wordSpan}>
                {word.split('').map((char, charIndex) => (
                  <span key={charIndex} className="char" style={{ opacity: 0, display: 'inline-block' }}>
                    {char}
                  </span>
                ))}
                {/* Add a space after each word, except for the last one */}
                {wordIndex !== wordArr.length - 1 && (
                  <span className="char" style={{ opacity: 0, display: 'inline-block' }}>
                    &nbsp;
                  </span>
                )}
              </span>
            ))}
          </blockquote>

        </div>
      </div>
    </section>
  );
}

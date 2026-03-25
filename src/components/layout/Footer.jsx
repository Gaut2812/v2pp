import { Link } from 'react-router-dom';
import { SITE_NAME, WHATSAPP_URL, INSTAGRAM_URL, EMAIL } from '@/utils/constants';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Brand */}
        <div className={styles.brand}>
          <span className={styles.logo}>{SITE_NAME}</span>
        </div>

        {/* Social Links */}
        <div className={styles.socials}>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            Instagram
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            WhatsApp
          </a>
          <Link to="/about" className={styles.socialLink}>Archive</Link>
          <Link to="/contact" className={styles.socialLink}>Terms</Link>
        </div>

        {/* Copyright */}
        <div className={styles.copy}>
          © {year} {SITE_NAME}. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}

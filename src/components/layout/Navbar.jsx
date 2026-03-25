import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { NAV_LINKS, SITE_NAME } from '@/utils/constants';
import styles from './Navbar.module.css';
import { getLenis } from '@/hooks/useLenis';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const lenis = getLenis();
    
    if (lenis) {
      const handleScroll = (content) => {
        setScrolled(content.scroll > 60);
      };
      lenis.on('scroll', handleScroll);
      return () => lenis.off('scroll', handleScroll);
    } else {
      const handleNativeScroll = () => setScrolled(window.scrollY > 60);
      window.addEventListener('scroll', handleNativeScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleNativeScroll);
    }
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.inner}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          {SITE_NAME}
        </Link>

        {/* Desktop Links */}
        <ul className={styles.links}>
          {NAV_LINKS.map(({ label, path, dropdown }) => (
            <li key={label} className={dropdown ? styles.hasDropdown : ''}>
              <NavLink
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ''}`
                }
              >
                {label}
                {dropdown && (
                  <svg className={styles.chevron} viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                )}
              </NavLink>

              {/* Dropdown Menu */}
              {dropdown && (
                <ul className={styles.dropdownMenu}>
                  {dropdown.map(drop => (
                    <li key={drop.label}>
                      <Link to={drop.path} className={styles.dropdownLink}>
                        {drop.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.drawer}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <ul className={styles.drawerLinks}>
              {NAV_LINKS.map(({ label, path }) => (
                <li key={label}>
                  <NavLink
                    to={path}
                    end={path === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `${styles.drawerLink} ${isActive ? styles.drawerActive : ''}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

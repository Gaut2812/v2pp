import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Lightbox.module.css';

export default function Lightbox({ photo, photos, onClose, onNavigate }) {
  const idx = photo ? photos.findIndex(p => p.id === photo.id) : -1;
  const prev = () => idx > 0 && onNavigate(photos[idx - 1]);
  const next = () => idx < photos.length - 1 && onNavigate(photos[idx + 1]);

  useEffect(() => {
    if (!photo) return;
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [photo, idx]);

  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(24px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={onClose}
        >
          <motion.button
            className={styles.closeBtn}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <X size={28} />
          </motion.button>

          <div className={styles.container} onClick={e => e.stopPropagation()}>
            {/* Left Nav */}
            <button
              className={styles.navBtn}
              onClick={prev}
              disabled={idx === 0}
              style={{ opacity: idx === 0 ? 0 : 1, cursor: idx === 0 ? 'default' : 'none' }}
            >
              <ChevronLeft size={48} />
            </button>

            {/* Main Content */}
            <motion.div
              key={photo.id}
              className={styles.contentWrap}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className={styles.imgContainer}>
                <img src={photo.url} alt={photo.title} className={styles.img} />
              </div>

            </motion.div>

            {/* Right Nav */}
            <button
              className={styles.navBtn}
              onClick={next}
              disabled={idx === photos.length - 1}
              style={{ opacity: idx === photos.length - 1 ? 0 : 1, cursor: idx === photos.length - 1 ? 'default' : 'none' }}
            >
              <ChevronRight size={48} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

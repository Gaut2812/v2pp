import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryItem from './GalleryItem';
import Lightbox from './Lightbox';
import styles from './GalleryGrid.module.css';

// Helper to determine optimal columns
function useColumnCount() {
  const [cols, setCols] = useState(4);
  
  useEffect(() => {
    const checkCols = () => {
      if (window.innerWidth < 640) setCols(1);
      else if (window.innerWidth < 1024) setCols(2);
      else setCols(3); // 3 columns looks best in editorial style
    };
    checkCols();
    window.addEventListener('resize', checkCols);
    return () => window.removeEventListener('resize', checkCols);
  }, []);
  
  return cols;
}

export default function GalleryGrid({ photos }) {
  const [selected, setSelected] = useState(null);
  const cols = useColumnCount();

  // Distribute photos into columns
  const columns = useMemo(() => {
    const colsArray = Array.from({ length: cols }, () => []);
    photos.forEach((photo, idx) => {
      colsArray[idx % cols].push(photo);
    });
    return colsArray;
  }, [photos, cols]);

  return (
    <>
      <div className={styles.masonryContainer}>
        {columns.map((col, colIdx) => (
          <div key={`col-${colIdx}`} className={styles.masonryCol}>
            <AnimatePresence mode="popLayout">
              {col.map(photo => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 30 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className={styles.motionWrap}
                >
                  <GalleryItem photo={photo} onOpen={setSelected} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <Lightbox
        photo={selected}
        photos={photos}
        onClose={() => setSelected(null)}
        onNavigate={setSelected}
      />
    </>
  );
}

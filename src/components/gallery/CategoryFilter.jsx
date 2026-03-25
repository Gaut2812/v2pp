import { motion } from 'framer-motion';
import { CATEGORIES } from '@/utils/constants';
import styles from './CategoryFilter.module.css';

export default function CategoryFilter({ activeCategory, onSelect }) {
  return (
    <div className={styles.wrapper}>
      {CATEGORIES.map(cat => (
        <button
          key={cat}
          className={`${styles.pill} ${activeCategory === cat ? styles.active : ''}`}
          onClick={() => onSelect(cat)}
        >
          {activeCategory === cat && (
            <motion.span
              className={styles.bg}
              layoutId="category-bg"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <span className={styles.label}>{cat}</span>
        </button>
      ))}
    </div>
  );
}

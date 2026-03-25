import { motion } from 'framer-motion';

export default function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.8,
  yOffset = 40,
  once = true
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-10%" }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.16, 1, 0.3, 1] // Custom ease for editorial feel
      }}
    >
      {children}
    </motion.div>
  );
}

import { useEffect, useRef, useState } from 'react';

/**
 * Triggers when the element enters the viewport.
 * @param {number} threshold - Visibility ratio before triggering (0–1)
 * @returns {{ ref, inView }}
 */
export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

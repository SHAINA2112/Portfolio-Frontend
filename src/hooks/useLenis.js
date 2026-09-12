import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Initializes Lenis smooth scrolling for the lifetime of the app.
 * Respects users who prefer reduced motion by skipping smoothing.
 */
export function useLenis() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    let frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);
}

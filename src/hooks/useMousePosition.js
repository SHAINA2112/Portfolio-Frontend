import { useEffect, useState } from 'react';

/**
 * Tracks viewport-relative mouse position.
 * Returns null on touch devices where mouse parallax is not meaningful.
 */
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return position;
}

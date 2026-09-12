import { motion } from 'framer-motion';

const directionOffsets = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Wraps children in a scroll-triggered fade/slide/scale reveal.
 * @param {'up'|'down'|'left'|'right'|'none'} direction
 */
export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  scale = false,
  className,
  as = 'div',
}) {
  const offset = directionOffsets[direction];
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset, scale: scale ? 0.94 : 1 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

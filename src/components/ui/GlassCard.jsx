import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
/**
 * Frosted glass card with optional lift/glow hover treatment and
 * an animated gradient border ring that fades in on hover.
 */
export default function GlassCard({
  children,
  className,
  hover = true,
  strong = false,
  as: Tag = motion.div,
  ...props
}) {
  return (
    <Tag
      className={cn(
        'group relative rounded-2xl',
        strong ? 'glass-strong' : 'glass',
        hover && 'transition-transform duration-500 will-change-transform hover:-translate-y-1.5',
        className
      )}
      {...(hover
        ? {
            whileHover: { rotateX: -2, rotateY: 2 },
            style: { transformStyle: 'preserve-3d' },
          }
        : {})}
      {...props}
    >
      {hover && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            WebkitMaskImage:
              'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            padding: 1,
          }}
        />
      )}
      {children}
    </Tag>
  );
}

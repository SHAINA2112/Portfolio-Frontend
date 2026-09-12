import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';


export default function MagneticButton({
  children,
  className,
  variant = 'primary',
  as = 'button',
  strength = 18,
  ...props
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState([]);
  const Tag = motion[as] ?? motion.button;

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: (x / rect.width) * strength, y: (y / rect.height) * strength });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const handleClick = (e) => {
    const el = ref.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      const id = Date.now();
      setRipples((prev) => [
        ...prev,
        { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
      ]);
      setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 650);
    }
    props.onClick?.(e);
  };

  const base =
    'relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-accent text-sm font-medium tracking-wide transition-colors duration-300';

  const variants = {
    primary:
      'text-bg-primary bg-gradient-to-r from-cyan to-accent-secondary shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_45px_rgba(34,211,238,0.5)]',
    ghost: 'glass text-text-primary hover:border-cyan/50',
  };

  return (
    <Tag
      ref={ref}
      className={cn(base, variants[variant], className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.3 }}
      {...props}
    >
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full bg-white/40"
          style={{
            left: r.x,
            top: r.y,
            width: 10,
            height: 10,
            transform: 'translate(-50%, -50%)',
            animation: 'ripple-expand 0.65s ease-out forwards',
          }}
        />
      ))}
      <style>{`
        @keyframes ripple-expand {
          to {
            width: 300px;
            height: 300px;
            opacity: 0;
          }
        }
      `}</style>
    </Tag>
  );
}

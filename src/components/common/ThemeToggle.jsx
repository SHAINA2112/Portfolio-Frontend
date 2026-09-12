import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-pressed={isDark}
      className="glass relative flex h-9 w-16 items-center rounded-full px-1 transition-colors duration-300"
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-linear-to-br from-cyan to-accent-secondary text-bg-primary"
        style={{ marginLeft: isDark ? 0 : 'auto' }}
      >
        {isDark ? <Moon size={14} /> : <Sun size={14} />}
      </motion.span>
    </button>
  );
}

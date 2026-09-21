import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import Container from '../components/ui/Container';
import ThemeToggle from '../components/common/ThemeToggle';
import { navLinks } from '../data/navLinks';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { cn } from '../utils/cn';
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(navLinks.map((l) => l.to));
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 px-4 sm:px-6">
  <Container className="w-full">
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="glass flex w-full items-center justify-between rounded-2xl px-5 py-3 sm:px-6"
    >
          <Link
            to="hero"
            smooth
            duration={800}
            className="cursor-pointer font-display text-lg font-semibold tracking-tight text-text-primary"
          >
            Shaina<span className="text-cyan">.</span>
          </Link>
          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth
                  duration={700}
                  offset={-90}
                  className={cn(
                    'relative cursor-pointer rounded-full px-4 py-2 font-accent text-sm transition-colors duration-300',
                    activeId === link.to ? 'text-cyan' : 'text-text-secondary hover:text-text-primary'
                  )}
                >
                  {link.label}
                  {activeId === link.to && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-linear-to-r from-cyan to-accent-secondary"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <div className="hidden sm:block" title="Scroll progress">
            </div>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="glass flex h-9 w-9 items-center justify-center rounded-full text-text-primary lg:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex"
                >
                  {menuOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </motion.nav>
        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="glass mt-2 overflow-hidden rounded-2xl lg:hidden"
            >
              <ul className="flex flex-col gap-1 p-3">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      smooth
                      duration={700}
                      offset={-90}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        'block cursor-pointer rounded-xl px-4 py-3 font-accent text-sm transition-colors',
                        activeId === link.to ? 'bg-glass-strong text-cyan' : 'text-text-secondary'
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}

import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight, ArrowUp } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks, profile, links, socials } from '@/data/site';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('#work');
  const [progress, setProgress] = useState(0);
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 12);
      setShowToTop(y > 900);

      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0);

      // Active section tracking (sections are ordered in the DOM)
      let current = navLinks[0].href;
      document.querySelectorAll('section[id]').forEach((section) => {
        if (section.getBoundingClientRect().top <= 140) current = `#${section.id}`;
      });
      setActiveId(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Scroll progress */}
      <div className="fixed inset-x-0 top-0 z-[70] h-[2px] bg-white/5" aria-hidden="true">
        <div
          className="h-full origin-left bg-accent-gradient"
          style={{ transform: `scaleX(${progress / 100})` }}
        />
      </div>

      <header
        className={cn(
          'fixed inset-x-0 top-0 z-[60] transition-[background-color,border-color] duration-300 ease-soft',
          isScrolled
            ? 'border-b border-white/10 bg-background/70 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <div className="page-shell flex h-16 items-center justify-between gap-6">
          <a
            href="#top"
            className="group flex items-center gap-2.5 rounded-md text-[13px] font-semibold uppercase tracking-[0.16em] text-foreground sm:text-sm"
          >
            <span
              className="h-4 w-4 rounded-[5px] bg-accent-gradient shadow-[0_0_14px_-2px_rgba(139,124,255,0.9)] transition-transform duration-300 group-hover:rotate-45"
              aria-hidden="true"
            />
            Joseph Gachuru
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((item) => {
              const active = activeId === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'true' : undefined}
                  className={cn(
                    'relative rounded-md px-3 py-2 text-[13px] font-medium transition-colors duration-200',
                    active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute inset-x-3 -bottom-0.5 h-px origin-left bg-accent-gradient transition-transform duration-300',
                      active ? 'scale-x-100' : 'scale-x-0',
                    )}
                  />
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
              className="hidden h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:text-foreground sm:inline-flex"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[17px] w-[17px]">
                <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.4-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
              </svg>
            </a>

            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hidden h-10 px-4 text-[13px] sm:inline-flex"
            >
              Resume
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-foreground transition-colors hover:border-white/25 lg:hidden"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[65] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-background/85 backdrop-blur-xl"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              aria-label="Mobile"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-0 max-h-[100dvh] overflow-y-auto border-b border-white/10 bg-soft/95 px-5 pb-8 pt-20"
            >
              <ul className="flex flex-col">
                {navLinks.map((item, i) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="group flex items-center gap-4 border-b border-white/5 py-4 text-2xl font-semibold tracking-[-0.02em] text-foreground"
                    >
                      <span className="font-mono text-[11px] text-subtle-foreground">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {item.label}
                      <ArrowUpRight className="ml-auto h-4 w-4 text-subtle-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:text-secondary" />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary flex-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resume
                </a>
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline flex-1"
                >
                  GitHub
                </a>
              </div>

              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] uppercase tracking-widest text-subtle-foreground transition-colors hover:text-foreground"
                    >
                      {social.short}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to top */}
      <AnimatePresence>
        {showToTop && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="fixed bottom-6 right-5 z-50 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-soft/80 text-muted-foreground backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:text-foreground sm:bottom-8 sm:right-8"
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

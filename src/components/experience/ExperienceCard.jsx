import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUp, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import OrganizationMark from './OrganizationMark';
import TechnologyTags from './TechnologyTags';
import ExpandedDetails from './ExpandedDetails';

const ease = [0.22, 1, 0.36, 1];

const card = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

/* Collapse / expand height + fade, eased with the site's soft curve. */
const panel = {
  collapsed: { height: 0, opacity: 0, transition: { duration: 0.3, ease } },
  expanded: { height: 'auto', opacity: 1, transition: { duration: 0.42, ease } },
};

/**
 * One experience, rendered as a compact card that expands in place.
 *
 * The entire collapsed card is a real <button>, so Enter / Space / Tab and
 * the focus ring all work natively, while aria-expanded + aria-controls
 * connect the header to the panel it reveals.
 */
const ExperienceCard = ({ entry, isOpen, onToggle, isLast }) => {
  const reduceMotion = useReducedMotion();
  const panelId = `experience-panel-${entry.id}`;
  const headerId = `experience-header-${entry.id}`;
  const headerRef = useRef(null);

  /* When a card above collapses, nudge the page so this card stays put. */
  const anchorScroll = () => {
    if (reduceMotion) return;
    const node = headerRef.current;
    if (!node) return;
    const top = node.getBoundingClientRect().top;
    if (top < 96) window.scrollBy({ top: top - 96, behavior: 'smooth' });
  };

  const handleToggle = () => {
    onToggle(entry.id);
    anchorScroll();
  };

  return (
    <motion.li
      variants={card}
      className={cn(
        'group relative rounded-xl border transition-[border-color,box-shadow,background-color] duration-300 ease-soft',
        'lg:grid lg:grid-cols-[124px_minmax(0,1fr)]',
        isOpen
          ? 'border-primary/45 bg-card shadow-raised'
          : 'border-white/[0.08] bg-card hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-raised',
      )}
    >
      {/* Gradient hairline — an accent, never the whole surface */}
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-x-0 top-0 h-px bg-accent-gradient transition-[width] duration-500 ease-soft',
          isOpen ? 'w-full' : 'w-0 group-hover:w-full',
        )}
      />

      {/* ---------------- Timeline rail ---------------- */}
      <div className="relative hidden lg:block" aria-hidden="true">
        {!isLast && (
          <span className="absolute bottom-[-1.25rem] left-[62px] top-0 w-px bg-gradient-to-b from-primary/45 via-white/10 to-transparent" />
        )}

        <span
          className={cn(
            'absolute left-[18px] top-[26px] font-mono text-[13px] tracking-[0.18em] transition-colors duration-300',
            isOpen ? 'text-secondary' : 'text-subtle-foreground group-hover:text-foreground/70',
          )}
        >
          {entry.number}
        </span>

        <span
          className={cn(
            'absolute left-[58px] top-9 h-2 w-2 rounded-full transition-all duration-300',
            isOpen
              ? 'bg-accent-gradient shadow-[0_0_14px_-1px_rgba(139,124,255,0.95)]'
              : 'bg-white/25 group-hover:bg-accent-gradient',
          )}
        />
      </div>

      {/* ---------------- Card body ---------------- */}
      <div className="min-w-0 px-5 py-6 sm:px-7 sm:py-7">
        <button
          ref={headerRef}
          type="button"
          id={headerId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={handleToggle}
          className="block w-full rounded-lg text-left outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {/* Role number — mobile only; desktop shows it on the timeline rail */}
          <span className="mb-3.5 block font-mono text-[11px] tracking-[0.22em] text-subtle-foreground lg:hidden">
            {entry.number}
          </span>

          <span className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
            <span className="flex min-w-0 items-start gap-3.5">
              <OrganizationMark icon={entry.icon} logo={entry.logo} />
              <span className="min-w-0">
                <span className="block text-lg font-semibold tracking-[-0.01em] text-foreground sm:text-xl">
                  {entry.organization}
                </span>
                <span className="mt-1.5 block text-sm font-medium text-secondary">
                  {entry.role}
                </span>
              </span>
            </span>

            <span className="flex shrink-0 flex-col items-start gap-1.5 sm:items-end">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/85">
                {entry.period}
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-subtle-foreground">
                <MapPin className="h-3 w-3" aria-hidden="true" />
                {entry.location}
              </span>
            </span>
          </span>

          <span className="mt-4 block max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {entry.summary}
          </span>

          <span className="mt-5 flex flex-wrap items-end justify-between gap-4">
            <TechnologyTags items={entry.technology} label={`${entry.organization} stack`} />

            <span
              className={cn(
                'ml-auto inline-flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.2em] transition-colors duration-300',
                isOpen ? 'text-secondary' : 'text-subtle-foreground group-hover:text-secondary',
              )}
            >
              <span className="border-b border-current/30 pb-0.5">
                {isOpen ? 'Collapse' : 'Explore experience'}
              </span>
              {isOpen ? (
                <ArrowUp className="h-3 w-3" aria-hidden="true" />
              ) : (
                <ArrowRight
                  className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              )}
</span>
          </span>
        </button>

        {/* ---------------- Expanded panel ---------------- */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="panel"
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              variants={panel}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
              className="overflow-hidden"
            >
              <ExpandedDetails entry={entry} />

              <div className="mt-8 flex border-t border-white/[0.07] pt-5">
                <button
                  type="button"
                  onClick={handleToggle}
                  className={cn(
                    'inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5',
                    'font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground',
                    'transition-colors duration-300 hover:border-primary/45 hover:bg-primary/[0.08] hover:text-foreground',
                    'outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                  )}
                >
                  <ArrowUp className="h-3 w-3" aria-hidden="true" />
                  Collapse
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  );
};

export default ExperienceCard;

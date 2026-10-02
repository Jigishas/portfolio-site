import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * Shared editorial section header:
 *
 *   SELECTED WORK ──────────────────────────────
 *   Software built around real-world problems.
 */
const SectionHeading = ({ eyebrow, title, lead, align = 'left', className }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}
  >
    <p className={cn('eyebrow', align === 'center' && 'justify-center')}>
      <span>{eyebrow}</span>
      {align !== 'center' && <span className="eyebrow-rule" aria-hidden="true" />}
    </p>

    <h2 className="mt-6 text-[1.7rem] font-bold leading-[1.14] tracking-[-0.02em] text-foreground sm:text-4xl md:text-[2.6rem]">
      {title}
    </h2>

    {lead && (
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-[17px]">
        {lead}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;

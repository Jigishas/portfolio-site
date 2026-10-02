import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Reusable technology / label pills.
 * Wraps naturally, keeps the muted chip language used across the portfolio.
 */
const TechnologyTags = ({ items, className, size = 'sm', label = 'Technologies' }) => {
  if (!items || items.length === 0) return null;

  return (
    <ul className={cn('flex flex-wrap gap-1.5', className)} aria-label={label}>
      {items.map((tech) => (
        <li key={tech} className={cn('chip', size === 'sm' ? 'text-[11px]' : 'text-xs')}>
          {tech}
        </li>
      ))}
    </ul>
  );
};

export default TechnologyTags;
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * Compact project mark rendered next to a project title.
 *
 * Loads the project's real artwork (logo / app icon) when it resolves, and
 * degrades to the project's lucide icon — then to its number — so a missing or
 * broken asset never leaves an empty slot.
 */
const ProjectEmblem = ({
  project,
  size = 'h-11 w-11',
  iconSize = 'h-5 w-5',
  padding = 'p-1.5',
  className = '',
}) => {
  const [errored, setErrored] = useState(false);
  const Icon = project.icon;
  const showImage = Boolean(project.image) && !errored;

  return (
    <span
      className={cn(
        'grid shrink-0 place-items-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]',
        size,
        className,
      )}
      aria-hidden="true"
    >
      {showImage ? (
        <img
          src={project.image}
          alt=""
          loading="lazy"
          decoding="async"
          onError={() => setErrored(true)}
          className={cn('h-full w-full object-contain', padding)}
        />
      ) : Icon ? (
        <Icon className={cn('text-secondary', iconSize)} />
      ) : (
        <span className="font-mono text-[11px] text-subtle-foreground">{project.number}</span>
      )}
    </span>
  );
};

export default ProjectEmblem;

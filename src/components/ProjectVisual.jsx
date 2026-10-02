import React, { useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * Renders a project's real artwork (logo / screenshot) with a graceful
 * fallback when an asset is missing or fails to load.
 */
const ProjectVisual = ({ project, className = '', eager = false, padding = 'p-8 sm:p-10' }) => {
  const [errored, setErrored] = useState(false);
  const isRaster = /\.(jpe?g|png|webp|avif)$/i.test(project.image || '');
  const showImage = project.image && !errored;
  const Icon = project.icon;

  return (
    <div className={cn('group relative overflow-hidden bg-soft', className)} aria-hidden={!showImage}>
      {showImage ? (
        <img
          src={project.image}
          alt={`${project.title} — ${project.subtitle}`}
          width={1200}
          height={800}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setErrored(true)}
          className={cn(
            'absolute inset-0 h-full w-full transition-transform duration-700 ease-soft',
            isRaster ? `object-contain ${padding}` : 'object-cover',
            'group-hover:scale-[1.03]',
          )}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
          {Icon && <Icon className="h-9 w-9 text-white/20" aria-hidden="true" />}
          <span className="text-4xl font-medium tracking-[-0.02em] text-white/15">{project.title}</span>
        </div>
      )}

      {/* gradient wash on hover */}
      <div
        className="pointer-events-none absolute inset-0 bg-surface-gradient opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-60"
        aria-hidden="true"
      />
    </div>
  );
};

export default ProjectVisual;

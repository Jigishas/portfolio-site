import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, MapPin } from 'lucide-react';
import ProjectVisual from './ProjectVisual';
import ProjectEmblem from './ProjectEmblem';
import { StatusBadge } from './ProjectCard';

/**
 * Layered architecture diagram — describes systems that actually exist,
 * with no fabricated metrics.
 */
export const ArchitectureStack = ({ layers, caption = 'System architecture · high level' }) => (
  <div className="flex h-full flex-col justify-center gap-1 bg-soft p-5 sm:p-8">
    <div className="mb-4 flex items-center justify-between gap-4">
      <span className="eyebrow">Architecture</span>
      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle-foreground">
        {caption}
      </span>
    </div>

    <div className="flex flex-col">
      {layers.map((layer, i) => (
        <div key={layer.label} className="flex flex-col">
          <div className="surface flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg px-4 py-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary">
              {layer.label}
            </span>
            <span className="text-right text-[12px] leading-snug text-muted-foreground">
              {layer.detail}
            </span>
          </div>
          {i < layers.length - 1 && (
            <span
              className="mx-auto block h-4 w-px bg-gradient-to-b from-primary/50 to-secondary/50"
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </div>
  </div>
);

const FeaturedProject = ({ project, onSelect, flagship = false, reverse = false }) => {
  const meta = [
    { k: 'Year', v: project.year },
    { k: 'Market', v: project.market || 'Remote' },
    { k: 'Status', v: project.status },
    { k: 'Role', v: 'Backend · Product Manager' },
  ];

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="surface group relative overflow-hidden rounded-2xl shadow-raised"
    >
      <span className="absolute inset-x-0 top-0 h-px bg-accent-gradient opacity-60" aria-hidden="true" />

      <div className="grid lg:grid-cols-12">
        {/* Visual / architecture */}
        <div
          className={`relative border-b border-white/[0.07] lg:col-span-7 lg:border-b-0 ${
            reverse ? 'lg:order-2 lg:border-l' : 'lg:border-r'
          }`}
        >
          {project.architecture ? (
            <ArchitectureStack layers={project.architecture} />
          ) : (
            <div className="relative h-full min-h-[260px]">
              <ProjectVisual project={project} className="absolute inset-0" />
            </div>
          )}
        </div>

        {/* Copy */}
        <div className={`flex flex-col p-5 sm:p-7 lg:col-span-5 ${reverse ? 'lg:order-1' : ''}`}>
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-[11px] tracking-[0.2em] text-subtle-foreground">
              {project.number}
            </span>
            <StatusBadge status={project.status} />
          </div>

          <div className="mt-5 flex items-center gap-4">
            <ProjectEmblem
              project={project}
              size={flagship ? 'h-12 w-12' : 'h-11 w-11'}
              className="rounded-2xl"
            />
            <h3
              className={
                flagship
                  ? 'min-w-0 text-[1.9rem] font-bold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-[2.35rem]'
                  : 'min-w-0 text-2xl font-bold tracking-[-0.02em] text-foreground'
              }
            >
              {project.title}
            </h3>
          </div>

          <p className="mt-2 text-sm font-medium text-secondary">{project.subtitle}</p>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {flagship ? project.description : project.summary}
          </p>

          {flagship && (
            <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-y border-white/[0.07] py-4">
              {meta.map((row) => (
                <div key={row.k}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground">
                    {row.k}
                  </dt>
                  <dd className="mt-1 text-[13px] text-foreground">{row.v}</dd>
                </div>
              ))}
            </dl>
          )}

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <li key={tech} className="chip text-[11px]">
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
            <button
              type="button"
              onClick={() => onSelect(project)}
              className="btn btn-primary h-10 px-4 text-[13px]"
            >
              Case study
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline h-10 px-4 text-[13px]"
              >
                Live
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost h-10 px-3 text-[13px]"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/[0.07] bg-[#0b0b11] px-5 py-3.5 sm:px-7">
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground">
          <MapPin className="h-3 w-3" aria-hidden="true" />
          {project.market || 'Remote'}
        </span>
        {project.capabilities.slice(0, 4).map((cap) => (
          <span
            key={cap}
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground transition-colors duration-300 group-hover:text-muted-foreground"
          >
            {cap}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

export default FeaturedProject;

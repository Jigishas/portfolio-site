import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import ProjectVisual from './ProjectVisual';

const statusStyles = {
  Production: 'border-secondary/30 bg-secondary/10 text-secondary',
  Live: 'border-secondary/30 bg-secondary/10 text-secondary',
  'In Development': 'border-amber-400/30 bg-amber-400/10 text-amber-300',
  Completed: 'border-white/15 bg-white/5 text-muted-foreground',
};

export const StatusBadge = ({ status }) => (
  <span
    className={
      'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] ' +
      (statusStyles[status] || 'border-white/15 bg-white/5 text-muted-foreground')
    }
  >
    <span className="h-1 w-1 rounded-full bg-current" aria-hidden="true" />
    {status}
  </span>
);

/**
 * Editorial project card used across the Selected Work grid.
 */
const ProjectCard = ({ project, onSelect, index = 0 }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: (index % 3) * 0.07, ease: [0.22, 1, 0.36, 1] }}
    className="surface surface-hover group flex h-full flex-col overflow-hidden rounded-xl"
  >
    <div className="relative aspect-[16/10] border-b border-white/[0.07]">
      <ProjectVisual project={project} className="absolute inset-0" />
      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
        <span className="font-mono text-[11px] tracking-[0.2em] text-white/50">{project.number}</span>
        <StatusBadge status={project.status} />
      </div>
    </div>

    <div className="flex flex-1 flex-col p-5 sm:p-6">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-lg font-medium tracking-tight text-foreground">{project.title}</h3>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle-foreground">
          {project.year}
        </span>
      </div>

      <p className="mt-1 text-[13px] font-medium text-secondary/90">{project.subtitle}</p>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 5).map((tech) => (
          <li key={tech} className="chip text-[11px]">
            {tech}
          </li>
        ))}
        {project.stack.length > 5 && (
          <li className="chip text-[11px]">+{project.stack.length - 5}</li>
        )}
      </ul>

      <div className="mt-5 flex items-center gap-4 border-t border-white/[0.07] pt-4">
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="group/link inline-flex items-center gap-1.5 text-[13px] font-medium text-foreground transition-colors hover:text-secondary"
        >
          Case study
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            aria-hidden="true"
          />
        </button>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
            <Github className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  </motion.article>
);

export default ProjectCard;

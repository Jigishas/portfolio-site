import React from 'react';
import { X, CheckCircle2, AlertTriangle, Layers, ExternalLink, Github } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';

const Block = ({ title, children }) => (
  <div>
    <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-subtle-foreground">{title}</h3>
    <div className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{children}</div>
  </div>
);

/**
 * Full case study: problem → solution → role → engineering detail.
 */
const CaseStudyDialog = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[92dvh] w-[95vw] max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-card p-0 text-foreground shadow-raised [&>button]:hidden">
        <DialogTitle className="sr-only">
          {project.title} — {project.subtitle}
        </DialogTitle>
        <DialogDescription className="sr-only">
          Case study for {project.title}: problem, solution, role and engineering details.
        </DialogDescription>

        {/* Header */}
        <div className="flex items-start justify-between gap-6 border-b border-white/[0.07] px-5 py-5 sm:px-7">
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-subtle-foreground">
              {project.number} · {project.year}
              {project.market ? ` · ${project.market}` : ''} · {project.status}
            </p>
            <h2 className="mt-2 text-2xl font-light tracking-tight text-foreground sm:text-3xl">
              {project.title}
            </h2>
            <p className="mt-1 text-sm text-secondary">{project.subtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-muted-foreground transition-colors hover:border-white/25 hover:text-foreground"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Body */}
        <div className="max-h-[calc(92dvh-9rem)] space-y-7 overflow-y-auto px-5 py-6 sm:px-7">
          <Block title="Overview">{project.description}</Block>

          <div className="grid gap-7 sm:grid-cols-2">
            <Block title="Problem">{project.problem}</Block>
            <Block title="Solution">{project.solution}</Block>
          </div>

          <Block title="My role">{project.role}</Block>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-subtle-foreground">
              Engineering
            </h3>
            <ul className="mt-3 space-y-2.5">
              {project.engineering.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.challenge && (
            <div className="rounded-xl border border-white/[0.08] bg-soft p-4">
              <h3 className="flex items-center gap-2 text-sm font-medium text-foreground">
                <AlertTriangle className="h-4 w-4 text-amber-300" aria-hidden="true" />
                Engineering challenge
              </h3>
              <p className="mt-1.5 text-sm italic leading-relaxed text-muted-foreground">
                “{project.challenge}”
              </p>
            </div>
          )}

          {project.actors && (
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-subtle-foreground">
                Built for
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.actors.map((actor) => (
                  <li key={actor} className="chip text-[11px]">
                    <Layers className="h-3 w-3" aria-hidden="true" />
                    {actor}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology stack */}
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-subtle-foreground">
              Technology stack
            </h3>
            <div className="mt-3 grid gap-5 sm:grid-cols-2">
              {Object.entries(project.technologies)
                .filter(([, items]) => items.length > 0)
                .map(([group, items]) => (
                  <div key={group}>
                    <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground">
                      {group}
                    </h4>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {items.map((tech) => (
                        <li key={tech} className="chip text-[11px]">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 border-t border-white/[0.07] pt-5">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary h-10 px-4 text-[13px]"
              >
                Visit product
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline h-10 px-4 text-[13px]"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyDialog;

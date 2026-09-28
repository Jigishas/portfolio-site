import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import FeaturedProject from './FeaturedProject';
import ProjectCard from './ProjectCard';
import CaseStudyDialog from './CaseStudyDialog';
import { projects } from './projects/projectsData';
import { links } from '@/data/site';

const flagshipProject = projects.find((p) => p.slug === 'plat-del');
const secondProject = projects.find((p) => p.slug === 'kidu-errands');
const otherProjects = projects.filter((p) => p.id !== flagshipProject.id && p.id !== secondProject.id);

const SelectedWork = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Selected work"
          title="Software built around real-world problems."
          lead="Products, platforms and data systems across logistics, commerce, AI and data engineering — presented as case studies, with the architecture behind them."
        />

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground">
          <span>{String(projects.length).padStart(2, '0')} projects</span>
          <span className="h-1 w-1 rounded-full bg-white/20" aria-hidden="true" />
          <span>Product · Backend · Data</span>
          <span className="h-1 w-1 rounded-full bg-white/20" aria-hidden="true" />
          <span>East Africa</span>
        </div>

        {/* Flagship */}
        <div className="mt-14">
          <p className="eyebrow mb-5">Flagship case study</p>
          <FeaturedProject project={flagshipProject} flagship onSelect={setSelected} />
        </div>

        {/* Second featured product */}
        <div className="mt-6">
          <FeaturedProject project={secondProject} reverse onSelect={setSelected} />
        </div>

        {/* Remaining work */}
        <div className="mt-20">
          <div className="flex flex-wrap items-end justify-between gap-4 border-t border-white/[0.07] pt-8">
            <div>
              <p className="eyebrow">More work</p>
              <h3 className="mt-4 text-xl font-light tracking-tight text-foreground sm:text-2xl">
                Other engineering work
              </h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              SaaS architecture, information systems and data pipelines — each documented as a
              short case study.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {otherProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} onSelect={setSelected} />
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="mt-14 flex flex-col items-start gap-5 rounded-2xl border border-white/[0.07] bg-soft px-6 py-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-light tracking-tight text-foreground">
              More work lives on GitHub
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Experiments, repositories and ongoing engineering work.
            </p>
          </div>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline shrink-0"
          >
            View GitHub
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <CaseStudyDialog project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default SelectedWork;

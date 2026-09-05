import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github, X, CheckCircle2, AlertTriangle, Layers, MapPin } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import {  featuredProjects, secondaryProjects } from './projects/projectsData';

const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.9, 0.36, 1] } } };

const StatusBadge = ({ status }) => {
  const styles = { Production: 'bg-green-500/10 text-green-600 border-green-500/30', Live: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30', 'In Development': 'bg-amber-500/10 text-amber-600 border-amber-500/30', Completed: 'bg-sky-500/10 text-sky-600 border-sky-500/30' };
  return (<span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${styles[status] || 'bg-gray-500/10 text-gray-600'}`}><span className="w-1 h-1 rounded-full bg-current" />{status}</span>);
};

const TechStack = ({ items }) => (<div className="flex flex-wrap gap-1.5">{items.slice(0, 5).map((tech) => (<span key={tech} className="text-[11px] px-2.5 py-1 rounded-md bg-muted/60 text-muted-foreground font-medium">{tech}</span>))}{items.length > 5 && (<span className="text-[11px] px-2.5 py-1 rounded-md bg-muted/60 text-muted-foreground font-medium">+{items.length - 5}</span>)}</div>);

const ProjectVisual = ({ project, eager = false, large = false, className = '' }) => {
  const [imgError, setImgError] = useState(false);
  const isRaster = /\.(jpe?g|png|webp|avif)$/i.test(project.image || '');
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      {project.image && !imgError ? (
        <img
          src={project.image}
          alt={`${project.title} — ${project.subtitle}`}
          width={1200}
          height={800}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setImgError(true)}
          className={`absolute inset-0 h-full w-full ${isRaster ? 'object-contain p-8 md:p-12' : 'object-cover'} transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5" aria-hidden="true">
          <project.icon className={`${large ? 'w-16 h-16' : 'w-12 h-12'} text-primary/20 transition-colors duration-500 group-hover:text-primary/30`} />
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-border/20" aria-hidden="true" />
    </div>
  );
};

const ProjectMeta = ({ number, market, flag, year }) => (
  <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider text-muted-foreground font-medium"><span>{number}</span>{market && (<span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{market} {flag}</span>)}<span>{year}</span></div>
);

const ProjectCTA = ({ project, onSelect }) => (
  <div className="flex items-center gap-3">
    <button onClick={() => onSelect(project)} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors group">View Case Study <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></button>
    {project.demo && (<a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">Live <ExternalLink className="w-3.5 h-3.5" /></a>)}
    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">GitHub <Github className="w-3.5 h-3.5" /></a>
  </div>
);

const FeaturedProject = ({ project, index, onSelect }) => {
  const isReversed = project.layout === 'left';
  return (
    <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="relative">
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}>
        <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : ''}`}>
          <ProjectVisual project={project} eager={index === 0} large className="aspect-video rounded-xl border border-border/40 bg-card" />
        </div>
        <div className={`lg:col-span-5 ${isReversed ? 'lg:order-1' : ''}`}>
          <div className="space-y-5">
            <ProjectMeta number={project.number} market={project.market} flag={project.flag} year={project.year} />
            <div><h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">{project.title}</h3><p className="text-base text-secondary font-medium">{project.subtitle}</p></div>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.summary}</p>
            <div className="flex flex-wrap gap-2">{project.capabilities.slice(0, 4).map((cap) => (<span key={cap} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded border border-border/40 text-muted-foreground font-medium">{cap}</span>))}</div>
            <TechStack items={project.stack} />
            <ProjectCTA project={project} onSelect={onSelect} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project, onSelect }) => (
  <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="group">
    <div className="relative mb-4">
      <ProjectVisual project={project} className="aspect-[4/3] rounded-xl border border-border/40 bg-card" />
    </div>
    <div className="space-y-3">
      <div className="flex items-center justify-between"><span className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">{project.number}</span><StatusBadge status={project.status} /></div>
      <h3 className="text-lg font-semibold text-primary">{project.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{project.summary}</p>
      <TechStack items={project.stack} />
      <button onClick={() => onSelect(project)} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors group/link pt-1">View Case Study <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" /></button>
    </div>
  </motion.div>
);

const CaseStudyDialog = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-3xl w-[94vw] max-h-[90vh] overflow-y-auto p-0"><DialogTitle className="sr-only">{project.title}</DialogTitle><DialogDescription className="sr-only">Case study</DialogDescription>
        <div className="sticky top-0 z-10 bg-card border-b border-border/30 px-6 py-4"><div className="flex items-center justify-between"><div className="flex items-center gap-3">{project.image ? (<img src={project.image} alt="" className="h-8 w-8 rounded-lg object-cover flex-shrink-0" />) : (<project.icon className="h-5 w-5 text-primary" />)}<div><div className="flex items-center gap-2"><h2 className="text-lg font-bold text-primary">{project.title}</h2>{project.flag && <span>{project.flag}</span>}<StatusBadge status={project.status} /></div><p className="text-xs text-secondary font-medium">{project.subtitle}</p></div></div><button onClick={onClose} className="p-2 rounded-lg hover:bg-muted transition-colors" aria-label="Close"><X className="h-4 w-4" /></button></div></div>
        <div className="px-6 py-6 space-y-8">
          <div><h3 className="text-sm font-semibold text-primary mb-2">Overview</h3><p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p></div>
          {project.market && (<div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-xs font-medium text-blue-600"><MapPin className="h-3 w-3" />{project.market}</div>)}
          <div><h3 className="text-sm font-semibold text-primary mb-2">Problem</h3><p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p></div>
          <div><h3 className="text-sm font-semibold text-primary mb-2">Solution</h3><p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p></div>
          <div><h3 className="text-sm font-semibold text-primary mb-2">My Role</h3><p className="text-sm text-muted-foreground leading-relaxed">{project.role}</p></div>
          <div><h3 className="text-sm font-semibold text-primary mb-3">Engineering</h3><ul className="space-y-2">{project.engineering.map((point, i) => (<li key={i} className="flex items-start gap-2 text-sm text-foreground/80"><CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" /><span>{point}</span></li>))}</ul></div>
          {project.challenge && (<div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4"><h4 className="text-sm font-semibold text-primary mb-1.5 flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-amber-500" />Engineering Challenge</h4><p className="text-sm text-muted-foreground italic leading-relaxed">&ldquo;{project.challenge}&rdquo;</p></div>)}
          {project.detections && (<div><h3 className="text-sm font-semibold text-primary mb-2">Detection Capabilities</h3><div className="flex flex-wrap gap-2">{project.detections.map((item) => (<span key={item} className="text-[10px] px-2.5 py-1 rounded border border-border/40 text-muted-foreground">{item}</span>))}</div></div>)}
          {project.actors && (<div><h3 className="text-sm font-semibold text-primary mb-2">Built for</h3><div className="flex flex-wrap gap-2">{project.actors.map((actor) => (<span key={actor} className="text-[10px] px-2.5 py-1 rounded border border-border/40 text-muted-foreground flex items-center gap-1"><Layers className="w-3 h-3" />{actor}</span>))}</div></div>)}
          <div><h3 className="text-sm font-semibold text-primary mb-3">Technology Stack</h3><div className="grid grid-cols-2 gap-3">{Object.entries(project.technologies).map(([group, items]) => items.length > 0 && (<div key={group}><h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">{group}</h4><div className="flex flex-wrap gap-1.5">{items.map((tech) => (<span key={tech} className="text-[11px] px-2 py-0.5 rounded bg-muted/60 text-muted-foreground font-medium">{tech}</span>))}</div></div>))}</div></div>
          <div className="flex flex-wrap gap-3 pt-4 border-t border-border/30">{project.demo && (<a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"><ExternalLink className="w-4 h-4" />Live Demo</a>)}<a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border/40 text-sm font-medium hover:border-primary/40 hover:text-primary transition-colors"><Github className="w-4 h-4" />GitHub</a></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section id="projects" className="py-24 md:py-32 w-full bg-projects">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div>
          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="max-w-3xl mb-20 md:mb-28">
            <span className="inline-block text-[11px] uppercase tracking-widest text-muted-foreground font-medium mb-6">Selected Work</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">Software built around<br />real-world problems.</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">A selection of products, platforms and engineering systems I've built across logistics, artificial intelligence, SaaS and data engineering.</p>
            <div className="flex flex-wrap items-center gap-6 text-[11px] uppercase tracking-wider text-muted-foreground font-medium"><span>6 Projects</span><span className="w-1 h-1 rounded-full bg-muted-foreground/40" /><span>Logistics · AI · SaaS · Data</span><span className="w-1 h-1 rounded-full bg-muted-foreground/40" /><span>East Africa</span></div>
          </motion.div>
          <div className="mb-20 md:mb-28">
            <div className="flex items-center gap-4 mb-12"><MapPin className="w-4 h-4 text-blue-500" /><span className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">East African Logistics Products</span></div>
            <p className="text-sm text-muted-foreground max-w-2xl mb-10">PLAT-DEL (Kenya) and Kidu Errands (Tanzania) represent logistics engineering across two distinct markets — production delivery infrastructure and on-demand errand services.</p>
            <div className="space-y-20 md:space-y-28">{featuredProjects.map((project, index) => (<FeaturedProject key={project.id} project={project} index={index} onSelect={setSelectedProject} />))}</div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-8"><h3 className="text-xl font-semibold text-primary">More Engineering Work</h3><span className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">SaaS · Information Systems · Data</span></div>
            <p className="text-sm text-muted-foreground max-w-2xl mb-10">Additional systems exploring SaaS architecture, information systems and data engineering.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{secondaryProjects.map((project) => (<ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />))}</div>
          </div>
          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mt-20 md:mt-28 pt-12 border-t border-border/30 text-center">
            <h3 className="text-xl font-semibold text-primary mb-3">Explore more of my work</h3>
            <p className="text-sm text-muted-foreground mb-6">More experiments, engineering projects and open-source work are available on GitHub.</p>
            <a href="https://github.com/Jigishas" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border/40 text-sm font-medium hover:border-primary/40 hover:text-primary transition-colors">View GitHub <ArrowUpRight className="w-4 h-4" /></a>
          </motion.div>
        </div>
      </div>
      <AnimatePresence>{selectedProject && (<CaseStudyDialog project={selectedProject} onClose={() => setSelectedProject(null)} />)}</AnimatePresence>
    </section>
  );
};

export default Projects;
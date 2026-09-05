import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, CheckCircle2, ArrowUpRight, AlertTriangle, Layers, MapPin, X } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { projects, featuredProjects, selectedProjects, dataEngineeringProject, categories } from './projects/projectsData';

const StatusBadge = ({ status }) => {
  const styles = { Production: 'bg-green-500/10 text-green-600 border-green-500/30', Live: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30', 'In Development': 'bg-amber-500/10 text-amber-600 border-amber-500/30', Completed: 'bg-sky-500/10 text-sky-600 border-sky-500/30' };
  return (<span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-semibold ${styles[status] || 'bg-gray-500/10 text-gray-600'}`}><span className="w-1 h-1 rounded-full bg-current" />{status}</span>);
};

const TechGroup = ({ label, items }) => (
  <div><h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">{label}</h4><div className="flex flex-wrap gap-1.5">{items.map((tech) => (<Badge key={tech} variant="secondary" className="text-[10px] px-2 py-0.5 font-normal">{tech}</Badge>))}</div></div>
);

const FeaturedProjectCard = ({ project, index, onSelect }) => {
  const Icon = project.icon;
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group">
      <Card className="h-full card-refined overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
        <div className={`h-1 w-full bg-gradient-to-r ${project.category === 'logistics' ? 'from-blue-500 to-cyan-500' : project.category === 'ai' ? 'from-violet-500 to-purple-500' : 'from-emerald-500 to-teal-500'}`} />
        <CardContent className="p-5 flex flex-col h-full">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg bg-gradient-to-br ${project.category === 'logistics' ? 'from-blue-500/15 to-cyan-500/10' : project.category === 'ai' ? 'from-violet-500/15 to-purple-500/10' : 'from-emerald-500/15 to-teal-500/10'}`}><Icon className="h-5 w-5 text-primary" /></div>
              <div><div className="flex items-center gap-2"><span className="text-xs font-mono text-muted-foreground/60">{project.number}</span><StatusBadge status={project.status} /></div><h3 className="text-base font-bold text-primary flex items-center gap-2">{project.title}{project.flag && <span className="text-sm">{project.flag}</span>}</h3></div>
            </div>
          </div>
          <p className="text-xs text-secondary font-medium mb-2">{project.tagline}</p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{project.description}</p>
          <ul className="space-y-1.5 mb-4">{project.engineering.slice(0, 2).map((point) => (<li key={point} className="flex items-start gap-1.5 text-xs text-foreground/70"><CheckCircle2 className="h-3.5 w-3.5 text-secondary mt-0.5 flex-shrink-0" /><span className="line-clamp-1">{point}</span></li>))}</ul>
          <div className="flex flex-wrap gap-1 mb-4">{project.stack.slice(0, 5).map((tech) => (<span key={tech} className="text-[10px] px-2 py-0.5 rounded-full bg-muted/60 text-muted-foreground font-medium">{tech}</span>))}{project.stack.length > 5 && (<span className="text-[10px] px-2 py-0.5 rounded-full bg-muted/60 text-muted-foreground font-medium">+{project.stack.length - 5}</span>)}</div>
          <div className="flex gap-2 mt-auto pt-3 border-t border-border/20">
            <Button variant="secondary" size="sm" className="flex-1 h-8 text-xs gap-1.5" onClick={() => onSelect(project)}><ArrowUpRight className="h-3.5 w-3.5" />Case Study</Button>
            {project.demo && (<Button variant="outline" size="sm" className="h-8 text-xs gap-1.5" onClick={() => window.open(project.demo, '_blank')}><ExternalLink className="h-3.5 w-3.5" />Live</Button>)}
            <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => window.open(project.github, '_blank')} aria-label={`${project.title} on GitHub`}><Github className="h-3.5 w-3.5" /></Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const CompactProjectCard = ({ project, index, onSelect }) => {
  const Icon = project.icon;
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.08 }} className="group">
      <Card className="h-full card-refined hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
        <CardContent className="p-4 flex flex-col h-full">
          <div className="flex items-center justify-between mb-2"><div className="flex items-center gap-2"><Icon className="h-4 w-4 text-primary" /><span className="text-xs font-mono text-muted-foreground/60">{project.number}</span></div><StatusBadge status={project.status} /></div>
          <h3 className="text-sm font-semibold text-primary mb-0.5 flex items-center gap-2">{project.title}{project.flag && <span className="text-xs">{project.flag}</span>}</h3>
          <p className="text-[11px] text-secondary font-medium mb-2">{project.tagline}</p>
          <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-1 mb-3">{project.stack.slice(0, 4).map((tech) => (<span key={tech} className="text-[10px] px-2 py-0.5 rounded-full bg-muted/60 text-muted-foreground font-medium">{tech}</span>))}</div>
          <div className="flex gap-2 mt-auto pt-2 border-t border-border/20">
            <Button variant="ghost" size="sm" className="flex-1 h-7 text-xs gap-1.5 text-secondary" onClick={() => onSelect(project)}><ArrowUpRight className="h-3 w-3" />Details</Button>
            {project.demo && (<Button variant="outline" size="icon" className="h-7 w-7" onClick={() => window.open(project.demo, '_blank')} aria-label={`${project.title} live demo`}><ExternalLink className="h-3 w-3" /></Button>)}
            <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => window.open(project.github, '_blank')} aria-label={`${project.title} on GitHub`}><Github className="h-3 w-3" /></Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const CaseStudyDialog = ({ project, onClose }) => {
  if (!project) return null;
  const Icon = project.icon;
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-3xl w-[94vw] max-h-[90vh] overflow-y-auto p-0">
        <DialogTitle className="sr-only">{project.title} - Case Study</DialogTitle>
        <DialogDescription className="sr-only">Detailed case study of {project.title}</DialogDescription>
        <div className="sticky top-0 z-10 bg-card border-b border-border/30 px-6 py-4"><div className="flex items-center justify-between"><div className="flex items-center gap-3"><div className="p-2 rounded-lg bg-primary/10"><Icon className="h-5 w-5 text-primary" /></div><div><div className="flex items-center gap-2"><h2 className="text-lg font-bold text-primary">{project.title}</h2>{project.flag && <span>{project.flag}</span>}<StatusBadge status={project.status} /></div><p className="text-xs text-secondary font-medium">{project.tagline}</p></div></div><button onClick={onClose} className="p-2 rounded-lg hover:bg-muted transition-colors" aria-label="Close dialog"><X className="h-4 w-4" /></button></div></div>
        <div className="px-6 py-5 space-y-6">
          <div><h3 className="text-sm font-semibold text-primary mb-2">Overview</h3><p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p></div>
          {project.market && (<div className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${categories[project.category]?.color}`}><MapPin className="h-3 w-3" />{project.market}</div>)}
          <div><h3 className="text-sm font-semibold text-primary mb-2">Problem</h3><p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p></div>
          <div><h3 className="text-sm font-semibold text-primary mb-2">Solution</h3><p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p></div>
          <div><h3 className="text-sm font-semibold text-primary mb-3">Engineering</h3><ul className="space-y-2">{project.engineering.map((point, i) => (<li key={i} className="flex items-start gap-2 text-sm text-foreground/80"><CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" /><span>{point}</span></li>))}</ul></div>
          {project.challenge && (<div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4"><h4 className="text-sm font-semibold text-primary mb-1.5 flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-amber-500" />Engineering Challenge</h4><p className="text-sm text-muted-foreground italic leading-relaxed">&ldquo;{project.challenge}&rdquo;</p></div>)}
          {project.detections && (<div><h3 className="text-sm font-semibold text-primary mb-2">Detection Capabilities</h3><div className="flex flex-wrap gap-2">{project.detections.map((item) => (<Badge key={item} variant="outline" className="text-[10px] px-2.5 py-1">{item}</Badge>))}</div></div>)}
          {project.actors && (<div><h3 className="text-sm font-semibold text-primary mb-2">Built for</h3><div className="flex flex-wrap gap-2">{project.actors.map((actor) => (<Badge key={actor} variant="outline" className="text-[10px] px-2.5 py-1"><Layers className="w-3 h-3 mr-1" />{actor}</Badge>))}</div></div>)}
          <div><h3 className="text-sm font-semibold text-primary mb-3">Technology Stack</h3><div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{Object.entries(project.technologies).map(([group, items]) => (items.length > 0 && <TechGroup key={group} label={group} items={items} />))}</div></div>
          <div className="flex flex-wrap gap-3 pt-3 border-t border-border/30">{project.demo && (<Button onClick={() => window.open(project.demo, '_blank')} className="gap-2"><ExternalLink className="h-4 w-4" />Live Demo</Button>)}<Button variant="outline" onClick={() => window.open(project.github, '_blank')} className="gap-2"><Github className="h-4 w-4" />GitHub</Button></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section id="projects" className="py-16 w-full bg-projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium tracking-wider text-secondary uppercase bg-secondary/10 rounded-full">Engineering Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">I Build Software Products, Not Just Interfaces</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-4">Real-world systems spanning logistics, AI, SaaS, data engineering and product engineering.</p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6 p-3 rounded-lg border border-blue-500/20 bg-blue-500/5 flex items-center gap-3">
          <MapPin className="h-4 w-4 text-blue-500 flex-shrink-0" />
          <p className="text-xs text-muted-foreground"><span className="font-semibold text-foreground">East African Logistics:</span> PLAT-DEL (Kenya) and Kidu Errands (Tanzania) represent logistics engineering across two distinct markets.</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
          {featuredProjects.map((project, index) => (<FeaturedProjectCard key={project.id} project={project} index={index} onSelect={setSelectedProject} />))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-10">
          <h3 className="text-lg font-semibold text-primary mb-4">Selected Engineering Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedProjects.map((project, index) => (<CompactProjectCard key={project.id} project={project} index={index} onSelect={setSelectedProject} />))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h3 className="text-lg font-semibold text-primary mb-4">Data Engineering</h3>
          <CompactProjectCard project={dataEngineeringProject} index={0} onSelect={setSelectedProject} />
        </motion.div>
      </div>
      <AnimatePresence>{selectedProject && (<CaseStudyDialog project={selectedProject} onClose={() => setSelectedProject(null)} />)}</AnimatePresence>
    </section>
  );
};

export default Projects;
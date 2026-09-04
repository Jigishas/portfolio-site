import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Rocket,
  Target,
  Lightbulb,
  AlertTriangle,
  Layers,
  ArrowUpRight,
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';

const projects = [
  {
    number: '01',
    title: 'PLAT-DEL',
    tagline: 'Logistics & Delivery Platform',
    summary:
      'Full-stack logistics platform supporting customer orders, vendor operations, rider management, parcel delivery and administrative workflows.',
    problem:
      'Traditional delivery operations require coordination between customers, vendors, riders and administrators, with manual hand-offs and little visibility.',
    solution:
      'Built a multi-sided logistics platform connecting these actors through automated workflows — with role-based access, order management, parcel tracking and administrative oversight.',
    engineering: [
      'Designed and implemented backend APIs using Laravel',
      'Built role-based workflows for customers, vendors, riders and administrators',
      'Designed relational database schemas, migrations and indexes',
      'Implemented authentication and authorization (RBAC)',
      'Optimized API/database performance with caching',
      'Integrated the React frontend with REST APIs',
      'Deployed and maintained production on Linux/Nginx',
    ],
    challenge:
      'The platform experienced high API traffic during initial page loads. I investigated request patterns, applied caching strategies, optimized API queries and reduced unnecessary frontend requests.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'React', 'TypeScript', 'Redis', 'Nginx', 'Docker'],
    category: 'Backend / Product',
    status: 'Production',
    featured: true,
    actors: ['Customers', 'Vendors', 'Riders', 'Administrators'],
    architecture: true,
    github: 'https://github.com/Jigishas',
    demo: null,
  },
  {
    number: '02',
    title: 'Coppins',
    tagline: 'Rental / Property Management SaaS',
    summary:
      'Multi-user property and rental management platform with role-based access and workflow support for listings, tenancy agreements and rent records.',
    problem:
      'Property managers juggle tenants, units, leases and payments across spreadsheets and chat threads, with no single source of truth.',
    solution:
      'Designed a SaaS property management platform with multi-user workflows, organization-level role-based permissions and records for properties, tenants and tenancies.',
    engineering: [
      'Designed multi-user workflow models with RBAC',
      'Built backend services for properties, tenants and tenancies',
      'Modeled relational data with migrations and indexes',
      'Implemented authentication and authorization',
      'Engineered dashboard views for owners and managers',
    ],
    challenge:
      'Designing a data model that supports multiple property owners, shared staff roles and permission levels without leaking data across organizations.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'React', 'TypeScript', 'Tailwind CSS'],
    category: 'SaaS / Product',
    status: 'In Development',
    featured: true,
    github: 'https://github.com/Jigishas',
    demo: null,
  },
  {
    number: '03',
    title: 'Agriculture AI Platform',
    tagline: 'Offline-Capable Disease & Deficiency Detection',
    summary:
      'Agricultural platform combining a React frontend, Flask API and CNN model to detect crop diseases and nutrient deficiencies — with an offline-first design.',
    problem:
      'Smallholder farmers often lack connectivity and access to agronomists, making early detection of crop diseases and nutrient deficiencies difficult.',
    solution:
      'Built a full-stack platform with a CNN model served through a Flask API, a React frontend, and offline-first storage so detection workflows keep working with limited connectivity.',
    engineering: [
      'Integrated a CNN model for crop disease / deficiency detection',
      'Built the Flask API layer and model inference pipeline',
      'Designed offline-first storage and sync behavior',
      'Built the React frontend for farmers and agronomists',
      'Deployed the application for cloud delivery',
    ],
    challenge:
      'Keeping the AI detection flow usable offline while maintaining model accuracy and a reasonable model footprint.',
    technologies: ['Python', 'Flask', 'React', 'TensorFlow / CNN', 'Tailwind CSS'],
    category: 'AI / Full Stack',
    status: 'Live',
    featured: true,
    github: 'https://github.com/Jigishas/Healthycoffee.git',
    demo: 'https://healthycoffee.vercel.app',
  },
  {
    number: '04',
    title: 'Justice Hub',
    tagline: 'Legal Technology Platform',
    summary:
      'Legal platform linking the public with legal professionals and resources — with case management, secure document sharing and a searchable legal resource library.',
    problem:
      'Individuals struggle to find legal help and navigate processes, while legal professionals lack a simple way to manage consultations and documents.',
    solution:
      'Built a MERN-based legal tech platform with role-scoped access to cases and documents, appointment scheduling and a comprehensive legal resource library.',
    engineering: [
      'Implemented the MERN stack (MongoDB, Express, React, Node.js)',
      'Built case management and secure document sharing flows',
      'Designed appointment scheduling for legal consultation',
      'Scoped resource access per user role while keeping search fast',
    ],
    challenge:
      'Structuring legal data (cases, documents, resources) so access can be scoped per role while searches stay fast and documents remain secure.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
    category: 'Legal Tech',
    status: 'Live',
    featured: true,
    github: 'https://github.com/Jigishas/justice-hub',
    demo: 'https://justice-hub-delta.vercel.app',
  },
];

const additionalProjects = [
  {
    title: 'ShopSphere',
    tagline: 'Full-Stack E-Commerce',
    summary:
      'Full-featured e-commerce platform with product catalog, inventory management and payment integration.',
    problem: 'Stores juggle catalogs, inventory and payments across disconnected tools.',
    solution:
      'Built a full-featured e-commerce platform with centralized product, inventory and payment workflows.',
    engineering: [
      'Built MERN backend with REST APIs',
      'Implemented product catalog and inventory tracking',
      'Integrated payment processing',
      'Built responsive storefront and admin dashboard',
    ],
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
    category: 'E-Commerce',
    status: 'Live',
    github: 'https://github.com/Jigishas/shopsphere',
    demo: 'https://shopsphere-ye71.vercel.app/',
  },
  {
    title: 'Web Socket-io',
    tagline: 'Real-Time Messaging',
    summary:
      'Real-time chat application with authentication, instant messaging, typing indicators and private conversations.',
    problem: 'Teams needed a lightweight, real-time channel that static tools could not provide.',
    solution:
      'Built a Socket.io-powered real-time messaging app with auth, presence and private conversations.',
    engineering: [
      'Implemented real-time messaging with Socket.io',
      'Added authentication, typing indicators and read receipts',
      'Built private and group chat workflows',
    ],
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'Tailwind CSS'],
    category: 'Real-time',
    status: 'In Development',
    github: 'https://github.com/Jigishas/web-socket-io.git',
    demo: 'https://github.com/Jigishas/web-socket-io.git',
  },
  {
    title: 'Airflow & Snowflake',
    tagline: 'Data Engineering Pipelines',
    summary:
      'ETL pipelines with Apache Airflow DAGs and Snowflake data warehousing — scheduling, quality checks and monitoring.',
    problem: 'Manual data movement between sources and the warehouse limited freshness and reliability.',
    solution:
      'Automated ETL with Airflow DAGs and a Snowflake warehouse, including scheduling, retries and data quality checks.',
    engineering: [
      'Implemented ETL pipelines with Apache Airflow DAGs',
      'Modeled data warehousing in Snowflake',
      'Added scheduling, retries and data quality checks',
    ],
    technologies: ['Apache Airflow', 'Snowflake', 'Python', 'SQL'],
    category: 'Data Engineering',
    status: 'In Development',
    github: 'https://github.com/Jigishas/Airflow-Dags.git',
    demo: 'https://github.com/Jigishas/Airflow-Dags.git',
  },
];

const StatusBadge = ({ status }) => {
  const statusStyles = {
    Production: 'bg-green-500/15 text-green-600 border-green-500/30',
    Live: 'bg-green-500/15 text-green-600 border-green-500/30',
    Beta: 'bg-yellow-500/20 text-yellow-600 border-yellow-500/30',
    'In Development': 'bg-blue-500/20 text-blue-600 border-blue-500/30',
    Completed: 'bg-purple-500/20 text-purple-600 border-purple-500/30',
  };

  return (
    <Badge
      variant="outline"
      className={`text-xs font-medium ${statusStyles[status] || 'bg-gray-500/20 text-gray-600'}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 animate-pulse" />
      {status}
    </Badge>
  );
};

const ArchitectureDiagram = () => {
  const Node = ({ title, sub, tone = '' }) => (
    <div className={`px-4 py-3 rounded-lg border text-center ${tone || 'border-border/70 bg-card/70'}`}>
      <div className="text-sm font-semibold text-foreground">{title}</div>
      {sub && <div className="text-xs text-muted-foreground mt-0.5">{sub}</div>}
    </div>
  );
  const Arrow = ({ label }) => (
    <div className="flex flex-col items-center text-muted-foreground text-lg leading-none py-0.5">
      <span>↓</span>
      {label && <span className="text-[10px] uppercase tracking-wider">{label}</span>}
    </div>
  );
  return (
    <div className="rounded-xl border border-border/60 bg-card/40 p-4 overflow-x-auto">
      <div className="flex flex-col items-center min-w-[340px]">
        <Node title="Client" sub="React / TypeScript" />
        <Arrow label="HTTPS" />
        <Node title="Nginx" sub="Reverse proxy · TLS · static assets" />
        <Arrow label="REST" />
        <Node title="Laravel API" sub="Auth · RBAC · validation" />
        <Arrow />
        <div className="flex flex-wrap justify-center gap-3">
          <Node title="PostgreSQL" sub="Relational data" />
          <Node title="Redis" sub="Cache · queues" />
          <Node title="Workers" sub="Background jobs" />
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const scrollToContact = () => {
    setSelectedProject(null);
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-20 w-full bg-projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium tracking-wider text-secondary uppercase bg-secondary/10 rounded-full">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Projects & Case Studies
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-6">
            Real problems, real systems. Each featured project covers the problem, the system I built and the engineering behind it — not just a stack list.
          </p>
          <div className="w-28 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Featured case studies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            >
              <Card className="h-full glass border-border/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 md:p-8 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent leading-none">
                      {project.number}
                    </span>
                    <div className="flex items-center gap-2 flex-wrap justify-end">
                      {project.actors && (
                        <Badge variant="secondary" className="hidden sm:inline-flex text-xs">
                          <Layers className="w-3 h-3 mr-1" />
                          Multi-sided
                        </Badge>
                      )}
                      <StatusBadge status={project.status} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-primary mb-1">{project.title}</h3>
                  <p className="text-sm font-medium text-secondary mb-4">{project.tagline}</p>
                  <p className="text-muted-foreground leading-relaxed mb-5">{project.summary}</p>

                  <ul className="space-y-2 mb-6">
                    {project.engineering.slice(0, 3).map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs rounded-full px-3 py-1 border-white/10 text-muted-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 5 && (
                      <Badge variant="outline" className="text-xs rounded-full px-3 py-1">
                        +{project.technologies.length - 5}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-3 mt-auto pt-2">
                    <Button
                      variant="secondary"
                      className="flex-1 gap-2"
                      onClick={() => setSelectedProject(project)}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                      View Case Study
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      aria-label={`${project.title} on GitHub`}
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    {project.demo && (
                      <Button
                        variant="outline"
                        size="icon"
                        aria-label={`${project.title} live demo`}
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional projects */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-primary mb-2">Additional Work</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            More products and pipelines I've built across e-commerce, real-time systems and data engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {additionalProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <Card className="h-full glass border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-3 gap-2">
                    <h4 className="text-lg font-semibold text-primary group-hover:text-secondary transition-colors">
                      {project.title}
                    </h4>
                    <StatusBadge status={project.status} />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.summary}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="flex-1 gap-2"
                      onClick={() => setSelectedProject(project)}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                      Details
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto max-w-3xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <StatusBadge status={selectedProject.status} />
                  <Badge variant="secondary" className="text-xs">{selectedProject.category}</Badge>
                </div>
                <DialogTitle className="text-2xl font-bold text-primary">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-secondary font-medium">
                  {selectedProject.tagline}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4 space-y-6">
                <p className="text-muted-foreground leading-relaxed">{selectedProject.summary}</p>

                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-destructive" />
                    The Problem
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.problem}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-accent" />
                    The Solution
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-secondary" />
                    What I Built
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.engineering.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-foreground/85">
                        <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedProject.challenge && (
                  <div className="rounded-xl border border-border/60 bg-card/50 p-5">
                    <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-600" />
                      Engineering Challenge
                    </h4>
                    <p className="text-muted-foreground italic leading-relaxed">
                      "{selectedProject.challenge}"
                    </p>
                  </div>
                )}

                {selectedProject.architecture && (
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Architecture</h4>
                    <ArchitectureDiagram />
                    <p className="text-xs text-muted-foreground mt-2">
                      Why this architecture: Nginx terminates TLS and serves static assets; the Laravel API centralizes auth and validation; PostgreSQL holds relational data while Redis and workers keep hot reads and background jobs off the request path.
                    </p>
                  </div>
                )}

                {selectedProject.actors && (
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Built for multiple sides</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.actors.map((actor) => (
                        <Badge key={actor} variant="outline" className="text-xs rounded-full px-3 py-1">
                          <Layers className="w-3 h-3 mr-1" />
                          {actor}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="font-semibold text-primary mb-3">Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="px-3 py-1 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {selectedProject.demo ? (
                    <Button className="flex-1 min-w-[150px] gap-2" onClick={() => window.open(selectedProject.demo, '_blank')}>
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                  ) : (
                    <Button className="flex-1 min-w-[150px] gap-2" onClick={scrollToContact}>
                      <Rocket className="h-4 w-4" />
                      Request Access
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    className="flex-1 min-w-[150px] gap-2"
                    onClick={() => window.open(selectedProject.github, '_blank')}
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
import React from 'react';
import MotionCard from './MotionCard';
import { CardHeader, CardContent, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Layers } from 'lucide-react';
import clsx from 'clsx';

const projects = [
  {
    title: 'Healthy Coffee',
    description:
      'A modern website application for checking coffee plants built with React.js, featuring product listings, shopping cart, and model integrations.',
    image:
      'https://media.istockphoto.com/id/2185573622/photo/coffee-plantation-on-a-highland-during-harvest-season-with-majestic-mountain-backdrop.webp?a=1&b=1&s=612x612&w=0&k=20&c=3xNKy6et-1LCqtE7mt89l6Fk2MOVqfFoukudcTXQORI=',
    technologies: ['React', 'JavaScript', 'CSS', 'Flask'],
    github: 'https://github.com/Jigishas/Healthycoffee.git',
    demo: 'https://healthycoffee.vercel.app',
  },
  {
    title: 'ShopSphere',
    description:
      'A comprehensive e-commerce platform with advanced features like product recommendations, inventory management, and payment integration.',
    image: 'https://picsum.photos/seed/ecommerce/800/600',
    technologies: ['Tailwindcss', 'MongoDB', 'Express', 'React', 'Node.js', 'Shadcn' ],
    github: 'https://github.com/Jigishas/shopsphere',
    demo: 'https://shopsphere-ye71.vercel.app/',
  },
  {
    title: 'Web Socket-io',
    description:
      'A real-time chat application built with Socket.io, featuring user authentication, instant messaging, typing indicators, and private messaging capabilities.',
    image: 'https://picsum.photos/seed/education/800/600',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'Tailwindcss'],
    github: 'https://github.com/Jigishas/web-socket-io.git',
    demo: 'https://github.com/Jigishas/web-socket-io.git',
  },
  {
    title: 'Airflow & Snowflake Projects',
    description:
      'Data engineering projects implementing ETL pipelines with Apache Airflow, using DAGs and data warehousing solutions using Snowflake.',
    image: 'https://picsum.photos/seed/data/800/600',
    technologies: ['Apache Airflow', 'Snowflake', 'Python', 'SQL'],
    github: 'https://github.com/Jigishas/Airflow-Dags.git',
    demo: 'https://github.com/Jigishas/Airflow-Dags.git',
  },
  {
    title: 'Justice Hub',
    description:
      'A legal assistance platform providing resources and connections to legal professionals, with features for case management and document sharing.',
    image: 'https://picsum.photos/seed/justice/800/600',
    technologies: ['MERN Stack', 'Express', 'Tailwindcss', 'React'],
    github: 'https://github.com/Jigishas/justice-hub',
    demo: 'https://justice-hub-delta.vercel.app',
  },
  {
    title: 'Justice Hub Edition 2',
    description:
      'An enhanced version of Justice Hub with additional features like AI-powered legal document analysis and advanced search capabilities.',
    image: 'https://picsum.photos/seed/justice2/800/600',
    technologies: ['MERN Stack', 'Express', 'Cloud Deployment'],
    github: 'https://github.com/Jigishas/justice-hub-edition-2',
    demo: 'https://justice-hub-edition-2.vercel.app',
  },
];

const TechPill = ({ children }) => (
  <Badge
    variant="outline"
    className="text-xs rounded-full px-3 py-1 bg-white/6 border-white/10 text-muted-foreground inline-flex items-center gap-2"
  >
    <Layers className="w-3 h-3 opacity-80" />
    {children}
  </Badge>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 w-full min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary/80 mb-2">Work</h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">Featured Projects</h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-2xl mx-auto">
            A curated selection of projects showcasing architecture, UI, and data work. Click to view source or live demos.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-28 h-1 rounded bg-gradient-to-r from-secondary to-accent" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <MotionCard key={project.title} index={i}>
              {/* media */}
              <div className="relative h-56 sm:h-48 md:h-44 lg:h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                <div className="absolute inset-0 flex items-start justify-end p-4">
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-250">
                    <button
                      onClick={() => window.open(project.github, '_blank')}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/55 text-white text-sm border border-white/10 hover:bg-black/65 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-secondary"
                      aria-label={`Open ${project.title} code`}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                    <button
                      onClick={() => window.open(project.demo, '_blank')}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/12 text-white text-sm border border-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-accent"
                      aria-label={`Open ${project.title} demo`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </button>
                  </div>
                </div>
              </div>

              {/* header */}
              <CardHeader className="pt-4 px-4">
                <CardTitle className="text-lg md:text-xl font-semibold text-primary group-hover:text-secondary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="px-4 pb-4">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="inline-flex">
                      <TechPill>{tech}</TechPill>
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(project.github, '_blank')}
                    className={clsx(
                      'flex-1 justify-center gap-2 border border-transparent hover:bg-secondary/95 hover:text-white transition-colors',
                    )}
                    aria-label={`View ${project.title} code`}
                  >
                    <Github className="h-4 w-4" />
                    <span className="hidden sm:inline">View Code</span>
                  </Button>

                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => window.open(project.demo, '_blank')}
                    className="flex-1 justify-center gap-2"
                    aria-label={`Open ${project.title} demo`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="hidden sm:inline">Live Demo</span>
                  </Button>
                </div>
              </CardContent>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
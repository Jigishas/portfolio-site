import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import MotionCard from './MotionCard';
import { CardHeader, CardContent, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  ExternalLink, 
  Github, 
  Layers, 
  X,
  Rocket,
  Code,
  Database,
  Globe,
  Sparkles
} from 'lucide-react';
import clsx from 'clsx';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';


const projects = [
  {
    title: 'Healthy Coffee',
    description:
      'A modern website application for checking coffee plants built with React.js, featuring product listings, shopping cart, and model integrations.',
    longDescription: 'Healthy Coffee is a comprehensive web application designed to help coffee farmers and enthusiasts monitor coffee plant health. The platform features an intuitive React.js frontend with Flask backend, real-time plant health monitoring, and predictive analytics for disease detection.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop',
    technologies: ['React', 'JavaScript', 'CSS', 'Flask'],
    github: 'https://github.com/Jigishas/Healthycoffee.git',
    demo: 'https://healthycoffee.vercel.app',
    category: 'Full Stack',
    featured: true,
    status: 'Live',
  },
  {
    title: 'ShopSphere',
    description:
      'A comprehensive e-commerce platform with advanced features like product recommendations, inventory management, and payment integration.',
    longDescription: 'ShopSphere is a full-featured e-commerce solution built with the MERN stack. It includes intelligent product recommendations, real-time inventory tracking, secure payment processing, and a responsive admin dashboard for store management.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    technologies: ['Tailwindcss', 'MongoDB', 'Express', 'React', 'Node.js', 'Shadcn'],
    github: 'https://github.com/Jigishas/shopsphere',
    demo: 'https://shopsphere-ye71.vercel.app/',
    category: 'E-Commerce',
    featured: true,
    status: 'Live',
  },
  {
    title: 'Web Socket-io',
    description:
      'A real-time chat application built with Socket.io, featuring user authentication, instant messaging, typing indicators, and private messaging capabilities.',
    longDescription: 'A modern real-time messaging platform with Socket.io integration. Features include end-to-end encryption, file sharing, group chats, typing indicators, read receipts, and a responsive design that works seamlessly across all devices.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'Tailwindcss'],
    github: 'https://github.com/Jigishas/web-socket-io.git',
    demo: 'https://github.com/Jigishas/web-socket-io.git',
    category: 'Real-time',
    featured: false,
    status: 'In Development',
  },
  {
    title: 'Airflow & Snowflake Projects',
    description:
      'Data engineering projects implementing ETL pipelines with Apache Airflow, using DAGs and data warehousing solutions using Snowflake.',
    longDescription: 'Enterprise-grade data engineering solutions featuring automated ETL pipelines with Apache Airflow, data warehousing with Snowflake, and comprehensive data quality checks. Includes monitoring dashboards and automated alerting systems.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    technologies: ['Apache Airflow', 'Snowflake', 'Python', 'SQL'],
    github: 'https://github.com/Jigishas/Airflow-Dags.git',
    demo: 'https://github.com/Jigishas/Airflow-Dags.git',
    category: 'Data Engineering',
    featured: true,
    status: 'Completed',
  },
  {
    title: 'Justice Hub',
    description:
      'A legal assistance platform providing resources and connections to legal professionals, with features for case management and document sharing.',
    longDescription: 'Justice Hub connects individuals with legal professionals through an intuitive platform. Features include case management, secure document sharing, appointment scheduling, and a comprehensive legal resource library.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop',
    technologies: ['MERN Stack', 'Express', 'Tailwindcss', 'React'],
    github: 'https://github.com/Jigishas/justice-hub',
    demo: 'https://justice-hub-delta.vercel.app',
    category: 'Legal Tech',
    featured: false,
    status: 'Live',
  },
  {
    title: 'Justice Hub Edition 2',
    description:
      'An enhanced version of Justice Hub with additional features like AI-powered legal document analysis and advanced search capabilities.',
    longDescription: 'The next generation of Justice Hub featuring AI-powered document analysis, natural language search, automated contract review, and predictive case outcome analysis using machine learning algorithms.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
    technologies: ['MERN Stack', 'Express', 'Cloud Deployment', 'AI/ML'],
    github: 'https://github.com/Jigishas/justice-hub-edition-2',
    demo: 'https://justice-hub-edition-2.vercel.app',
    category: 'Legal Tech',
    featured: true,
    status: 'Beta',
  },
];

const categories = ['All', 'Full Stack', 'E-Commerce', 'Real-time', 'Data Engineering', 'Legal Tech'];


const TechPill = ({ children }) => (
  <Badge
    variant="outline"
    className="text-xs rounded-full px-3 py-1 bg-white/6 border-white/10 text-muted-foreground inline-flex items-center gap-2"
  >
    <Layers className="w-3 h-3 opacity-80" />
    {children}
  </Badge>
);

const StatusBadge = ({ status }) => {
  const statusStyles = {
    'Live': 'bg-green-500/20 text-green-600 border-green-500/30',
    'Beta': 'bg-yellow-500/20 text-yellow-600 border-yellow-500/30',
    'In Development': 'bg-blue-500/20 text-blue-600 border-blue-500/30',
    'Completed': 'bg-purple-500/20 text-purple-600 border-purple-500/30',
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

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 w-full min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary/80 mb-2 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" />
              Portfolio
            </h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4">
              Featured Projects
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-6">
              A curated selection of projects showcasing my expertise in software engineering, 
              data engineering, and full-stack development.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={clsx(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                    selectedCategory === category
                      ? 'bg-secondary text-white shadow-lg scale-105'
                      : 'bg-white/50 text-muted-foreground hover:bg-white hover:text-foreground border border-border'
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="w-28 h-1 rounded bg-gradient-to-r from-secondary to-accent mx-auto" />
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <MotionCard index={i} className="group h-full flex flex-col">
                  {/* Media with 3D hover effect */}
                  <div className="relative h-56 sm:h-48 md:h-44 lg:h-48 overflow-hidden rounded-t-lg">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      transition={{ duration: 0.4 }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <StatusBadge status={project.status} />
                    </div>
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-accent/90 text-white border-0">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}
                    
                    {/* Quick Actions Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-sm">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.open(project.github, '_blank')}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm border border-white/30 hover:bg-white/30 backdrop-blur-md transition-all"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.open(project.demo, '_blank')}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/90 text-white text-sm border border-secondary hover:bg-secondary transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </motion.button>
                    </div>
                  </div>

                  {/* Header */}
                  <CardHeader className="pt-4 px-4 pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg md:text-xl font-semibold text-primary group-hover:text-secondary transition-colors">
                        {project.title}
                      </CardTitle>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="px-4 pb-4 flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2 flex-1">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="inline-flex">
                          <TechPill>{tech}</TechPill>
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 justify-center gap-2 hover:bg-secondary/10 hover:text-secondary hover:border-secondary/30 transition-all"
                      >
                        <Code className="h-4 w-4" />
                        Details
                      </Button>

                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => window.open(project.demo, '_blank')}
                        className="flex-1 justify-center gap-2"
                      >
                        <Globe className="h-4 w-4" />
                        Live
                      </Button>
                    </div>
                  </CardContent>
                </MotionCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Details Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <StatusBadge status={selectedProject.status} />
                    {selectedProject.featured && (
                      <Badge className="bg-accent text-white">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                  <DialogTitle className="text-2xl font-bold text-primary">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    {selectedProject.category} • {selectedProject.technologies.length} Technologies
                  </DialogDescription>
                </DialogHeader>
                
                <div className="mt-4">
                  <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                        <Rocket className="w-4 h-4" />
                        About this Project
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedProject.longDescription}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                        <Database className="w-4 h-4" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="px-3 py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      <Button
                        className="flex-1 gap-2"
                        onClick={() => window.open(selectedProject.demo, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 gap-2"
                        onClick={() => window.open(selectedProject.github, '_blank')}
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};


export default Projects;

import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in');
            }, index * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Healthy Coffee',
      description: 'A modern website application for checking coffee plants built with React.js, featuring product listings, shopping cart, and model integrations.',
      image: 'https://media.istockphoto.com/id/2185573622/photo/coffee-plantation-on-a-highland-during-harvest-season-with-majestic-mountain-backdrop.webp?a=1&b=1&s=612x612&w=0&k=20&c=3xNKy6et-1LCqtE7mt89l6Fk2MOVqfFoukudcTXQORI=',
      technologies: ['React', 'JavaScript', 'CSS', 'Flask'],
      github: 'https://github.com/Jigishas/Healthycoffee.git',
      demo: '#',
    },
    {
      title: 'ShopSphere',
      description: 'A comprehensive e-commerce platform with advanced features like product recommendations, inventory management, and payment integration.',
      image: 'https://picsum.photos/seed/ecommerce/400/300',
      technologies: ['MERN Stack', 'MongoDB', 'Express', 'React', 'Node.js'],
      github: 'https://github.com/Jigishas/shopsphere',
      demo: 'https://shopsphere-ashy.vercel.app/',
    },
    {
      title: 'Web Socket-io',
      description: 'A real-time chat application built with Socket.io, featuring user authentication, instant messaging, typing indicators, and private messaging capabilities.',
      image: 'https://picsum.photos/seed/education/400/300',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      github: 'https://github.com/Jigishas/web-socket-io.git',
      demo: '#',
    },
    {
      title: 'Airflow & Snowflake Projects',
      description: 'Data engineering projects implementing ETL pipelines with Apache Airflow, using DAGs and data warehousing solutions using Snowflake.',
      image: 'https://picsum.photos/seed/data/400/300',
      technologies: ['Apache Airflow', 'Snowflake', 'Python', 'SQL'],
      github: 'https://github.com/Jigishas/Airflow-Dags.git',
      demo: 'https://github.com/Jigishas/Airflow-Dags.git',
    },
    {
      title: 'Justice Hub',
      description: 'A legal assistance platform providing resources and connections to legal professionals, with features for case management and document sharing.',
      image: 'https://picsum.photos/seed/justice/400/300',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'React'],
      github: 'https://github.com/Jigishas/justice-hub',
      demo: '#',
    },
    {
      title: 'Justice Hub Edition 2',
      description: 'An enhanced version of Justice Hub with additional features like AI-powered legal document analysis and advanced search capabilities.',
      image: 'https://picsum.photos/seed/justice2/400/300',
      technologies: ['MERN Stack', 'AI/ML', 'Cloud Deployment'],
      github: 'https://github.com/Jigishas/justice-hub-edition-2',
      demo: 'https://justice-hub-edition-2.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="py-20 w-full min-h-screen bg-projects">
      <div className="w-full max-w-none px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="opacity-0 transform translate-y-8 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 group overflow-hidden"
            >
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => window.open(project.github, '_blank')}
                      className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => window.open(project.demo, '_blank')}
                      className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-primary group-hover:text-secondary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.github, '_blank')}
                    className="flex-1 hover:bg-secondary hover:text-white transition-colors"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.demo, '_blank')}
                    className="flex-1 hover:bg-secondary hover:text-white transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

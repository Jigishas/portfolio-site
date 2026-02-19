import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  Rocket,
  Code,
  Database,
  Cloud,
  Star
} from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'Education',
      title: 'Software Engineering Student',
      organization: 'Kirinyaga University',
      location: 'Kirinyaga, Kenya',
      period: '2023 - 2026',
      description: 'Pursuing Bachelor of Science in Software Engineering. Focusing on full-stack development, data structures, algorithms, and software architecture.',
      achievements: [
        'Dean\'s List for Academic Excellence',
        'Led student tech community of 50+ members',
        'Developed 5+ projects for coursework',
      ],
      technologies: ['Java', 'Python', 'JavaScript','Php', 'SQL', 'Software Architecture'],
      icon: <GraduationCap className="h-6 w-6" />,
      color: 'bg-blue-500',
    },
    {
      type: 'Education',
      title: 'Software Development Trainee',
      organization: 'Power Learn Project Africa',
      location: 'Remote',
      period: 'July 2025 - Dec 2025',
      description: 'Intensive training program covering full-stack development, data engineering, and cloud computing. Completed 6-month intensive bootcamp with hands-on projects.',
      achievements: [
        'Top 10% of graduating cohort',
        'Built 3 production-ready applications',
        'Mentored 5 junior developers',
      ],
      technologies: ['Full-Stack Web Development-MERN', 'AI Safari', 'Database Design & Programming with SQL', 'Python ', 'Web Development v2', 'Startup Building for Developers', 'Blockchain-101', 'AI for Business Intelligence-Powered by PromptBi'],
      icon: <Code className="h-6 w-6" />,
      color: 'bg-green-500',
    },
    {
      type: 'project',
      title: 'Full Stack Developer - Freelance',
      organization: 'Self-Employed',
      location: 'Remote',
      period: '2023 - Present',
      description: 'Developing custom web applications and data solutions for clients. Specializing in MERN stack applications and data engineering pipelines.',
      achievements: [
        'Delivered 10+ successful projects',
        '100% client satisfaction rate',
        'Specialized in e-commerce and legal tech solutions',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      icon: <Rocket className="h-6 w-6" />,
      color: 'bg-purple-500',
    },
    {
      type: 'education',
      title: 'Data Engineering Certification',
      organization: 'Various Online Platforms',
      location: 'Online',
      period: '2024 - 2025',
      description: 'Self-directed learning in data engineering technologies including Apache Airflow, Snowflake, and cloud data warehousing solutions.',
      achievements: [
        'Completed 5+ specialized courses',
        'Built production ETL pipelines',
        'Contributed to open-source data tools',
      ],
      technologies: ['Apache Airflow', 'Snowflake', 'Python', 'SQL', 'BigQuery'],
      icon: <Database className="h-6 w-6" />,
      color: 'bg-orange-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="experience"
      className="py-20 w-full min-h-screen bg-gradient-to-b from-background to-muted/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-none px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Experience & Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            My professional journey and educational background that has shaped my expertise
            in software engineering and data technologies.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary via-accent to-secondary rounded-full"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                variants={index % 2 === 0 ? itemVariants : rightItemVariants}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <motion.div
                    className={`w-12 h-12 rounded-full ${exp.color} flex items-center justify-center text-white shadow-lg border-4 border-background`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {exp.icon}
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-secondary">
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} mb-4`}>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {exp.type === 'work' ? 'Experience' : 'Education'}
                            </Badge>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              {exp.period}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-primary">
                            {exp.title}
                          </h3>
                          <p className="text-secondary font-medium">
                            {exp.organization}
                          </p>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className={`mb-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                          <h4 className="text-sm font-semibold text-primary mb-2 flex items-center gap-2">
                            <Award className="h-4 w-4" />
                            Key Achievements
                          </h4>
                          <ul className={`space-y-1 text-sm text-muted-foreground ${
                            index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                          }`}>
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <Star className="h-3 w-3 text-accent mt-1 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className={`flex flex-wrap gap-2 ${
                          index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                        }`}>
                          {exp.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs hover:bg-secondary hover:text-white transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-5/12"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Certifications & Awards
            </h3>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Power Learn Project Graduate',
                issuer: 'Power Learn Project Africa',
                year: '2025',
                icon: <Award className="h-8 w-8" />,
              },
              {
                title: 'Data Engineering Specialist',
                issuer: 'Self-Certified Projects',
                year: '2026',
                icon: <Database className="h-8 w-8" />,
              },
              {
                title: 'Full Stack Developer',
                issuer: 'Portfolio Projects',
                year: '2023-2024',
                icon: <Code className="h-8 w-8" />,
              },
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-center mb-4 text-secondary">
                    {cert.icon}
                  </div>
                  <h4 className="font-semibold text-primary mb-1">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <Badge variant="outline" className="mt-2">
                    {cert.year}
                  </Badge>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;

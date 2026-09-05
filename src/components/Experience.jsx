import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
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
      type: 'work',
      title: 'Software Engineer — Backend & Product',
      organization: 'PLAT-DEL · Logistics & Delivery Platform',
      location: 'Remote',
      period: '2025 — Present',
      description: 'Backend and product engineering on a production logistics platform connecting customers, vendors, riders and administrators through automated order-to-delivery workflows.',
      achievements: [
        'Designed and implemented Laravel backend APIs for logistics workflows',
        'Built role-based access control across customer, vendor, rider and admin surfaces',
        'Optimized API/database performance and frontend request patterns under high traffic',
        'Worked with production Linux/Nginx infrastructure, caching and background processing',
        'Collaborated on product requirements and shipped features end-to-end',
      ],
      technologies: ['Laravel', 'MySQL', 'React', 'TypeScript', 'Redis', 'Nginx', 'Docker'],
      icon: <Rocket className="h-6 w-6" />,
      color: 'bg-purple-500',
    },
    {
      type: 'Education',
      title: 'Software Engineering Student',
      organization: 'Kirinyaga University',
      location: 'Kirinyaga, Kenya',
      period: '2023 - 2026',
      description: 'Pursuing Bachelor of Science in Software Engineering. Focusing on full-stack development, data structures, algorithms, and software architecture.',
      achievements: [
        "Dean\\'s List for Academic Excellence",
        "Led student tech community of 50+ members",
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
        "Top 10% of graduating cohort",
        'Built 3 production-ready applications',
        'Mentored 5 junior developers',
      ],
      technologies: ['Full-Stack Web Development-MERN', 'AI Safari', 'Database Design & Programming with SQL', 'Python ', 'Web Development v2', 'Startup Building for Developers', 'Blockchain-101', 'AI for Business Intelligence-Powered by PromptBi'],
      icon: <Code className="h-6 w-6" />,
      color: 'bg-green-500',
    },
    {
      type: 'work',
      title: 'Full Stack Developer — Freelance',
      organization: 'Self-Employed',
      location: 'Remote',
      period: '2023 - Present',
      description: 'Building custom web applications and data products for clients — from business problem and workflow design to backend architecture, interfaces and production deployment.',
      achievements: [
        'Delivered complete products across e-commerce, legal tech and agricultural domains',
        'Designed multi-user, role-based workflows for client platforms',
        'Owned deployment, caching and performance work on shipped systems',
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
      technologies: ['Apache Airflow', 'Snowflake', 'Python', 'SQL', 'BigQuery', 'Databricks'],
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

  // certifications array kept for reference but not displayed
  const _certifications = [
     {
      title: 'MERN stack Developer',
      issuer: 'Power Learn Project',
      year: '2025',
      icon: <Award className="h-8 w-8" />,
      pdfPath: '/Certificates/Joseph Gachuru certificate plp MERN.pdf'
    },
    {
      title: 'AI Training Certificate',
      issuer: 'ADMI Digital Skills Training',
      year: '2026',
      icon: <Award className="h-8 w-8" />,
      pdfPath: '/Certificates/Artificial-Intelligence-Training-ADMI-AI-Certificate-Digital-Skills-Training.pdf'
    },
        {
      title: 'Agentic AI on AWS',
      issuer: 'Become A solutions Architect',
      year: '2026',
      icon: <Award className="h-8 w-8" />,
      pdfPath: '/Certificates/Agentic AI on AWS.pdf'
    },
    {
      title: 'Azure Fundamentals',
      issuer: 'Microsoft',
      year: '2024',
      icon: <Award className="h-8 w-8" />,
      pdfPath: '/Certificates/Azure fundamentals.pdf'
    },


    {
      title: 'Cybersecurity ',
      issuer: 'Shujaa Digital Skills Training',
      year: '2026',
      icon: <Award className="h-8 w-8" />,
      pdfPath: '/Certificates/Joseph Gachuru Cybersecurity-and-Emerging-Technologies-Awareness-Training-Shujaa-March-2026-Cybersec-Certificate-Digital-Skills-Training.pdf'
    },
    {
      title: 'Data Analytics',
      issuer: 'Digital Skills Training',
      year: '2026',
      icon: <Award className="h-8 w-8" />,
      pdfPath: '/Certificates/Joseph Gachuru Data Analytics.pdf'
    },
    {
      title: 'Cloud Infrastructure Fundamentals',
      issuer: 'Digital Skills Training',
      year: '2024',
      icon: <Award className="h-8 w-8" />,
      pdfPath: '/Certificates/Joseph Gachuru Fundamentals-to-Cloud-Infrastructure-and-Services-Pathways-Cloud-Infrastructure-and-Services-Certificate-Digital-Skills-Training.pdf'
    },
    {
      title: 'Software Engineering ',
      issuer: 'Power Learn Project',
      year: '2024',
      icon: <Award className="h-8 w-8" />,
      pdfPath: '/Certificates/joseph plp certificate.pdf'
    },
 
    {
      title: 'React.js ',
      issuer: 'Online Course',
      year: '2024',
      icon: <Award className="h-8 w-8" />,
      pdfPath: '/Certificates/React js for Beginners.pdf'
    },

  ];

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
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                variants={index % 2 === 0 ? itemVariants : rightItemVariants}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <motion.div
                    className={`w-10 h-10 rounded-full ${exp.color} flex items-center justify-center text-white shadow-md border-3 border-background`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {exp.icon}
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.01, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="card-refined hover:shadow-md transition-all duration-200 border-l-4 border-l-secondary">
                      <CardContent className="p-4">
                        {/* Header */}
                        <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} mb-3`}>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline" className="text-[10px] px-2 py-0.5">
                              {exp.type === 'work' ? 'Experience' : 'Education'}
                            </Badge>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              {exp.period}
                            </div>
                          </div>
                          <h3 className="text-base font-bold text-primary">
                            {exp.title}
                          </h3>
                          <p className="text-xs text-secondary font-medium">
                            {exp.organization}
                          </p>
                          <div className={`flex items-center gap-1 text-[10px] text-muted-foreground mt-0.5 ${
                            index % 2 === 0 ? 'md:flex-row-reverse' : ''
                          }`}>
                            <MapPin className="h-2.5 w-2.5" />
                            {exp.location}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-muted-foreground mb-3 leading-relaxed line-clamp-2">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className={`mb-3 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                          <h4 className="text-[10px] font-semibold text-primary mb-1.5 flex items-center gap-1.5">
                            <Award className="h-3 w-3" />
                            Key Achievements
                          </h4>
                          <ul className={`space-y-0.5 text-xs text-muted-foreground ${
                            index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                          }`}>
                            {exp.achievements.slice(0, 3).map((achievement, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <Star className="h-2.5 w-2.5 text-accent mt-0.5 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className={`flex flex-wrap gap-1 ${
                          index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                        }`}>
                          {exp.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-[10px] px-2 py-0.5 hover:bg-secondary hover:text-white transition-colors"
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

        {/* Certifications Section
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Certifications & Awards
            </h3>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div> */}

          {/* <div className="flex justify-center">
            <Button 
              size="lg" 
              className="w-full max-w-md px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href="#certificates">
                📜 View All Certificates
              </a>
            </Button>
          </div> 
        </motion.div> */}
      </div>
    </motion.section>
  );
};

export default Experience;


import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';
import {
  Code,
  Database,
  Cloud,
  Laptop,
  Server,
  Zap,
  GitBranch,
  Container,
  Layout,
  Smartphone,
  Brain,
  BarChart3,
  Settings,
  Shield
} from 'lucide-react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="h-8 w-8 text-secondary" />,
      description: 'Building responsive and interactive user interfaces',
      skills: [
        { name: 'React.js', level: 90, experience: '2+ years', projects: 8 },
        { name: 'JavaScript', level: 85, experience: '2+ years', projects: 12 },
        { name: 'HTML/CSS', level: 88, experience: '3+ years', projects: 15 },
        { name: 'Tailwind CSS', level: 85, experience: '1.5 years', projects: 10 },
        { name: 'TypeScript', level: 70, experience: '1 year', projects: 5 },
        { name: 'Responsive Design', level: 90, experience: '2+ years', projects: 12 },
      ],
    },
    {
      title: 'Backend Development',
      icon: <Server className="h-8 w-8 text-secondary" />,
      description: 'Creating robust server-side applications and APIs',
      skills: [
        { name: 'Node.js', level: 85, experience: '2+ years', projects: 10 },
        { name: 'Express.js', level: 88, experience: '2+ years', projects: 10 },
        { name: 'Python', level: 80, experience: '2+ years', projects: 8 },
        { name: 'RESTful APIs', level: 90, experience: '2+ years', projects: 12 },
        { name: 'Java', level: 75, experience: '1.5 years', projects: 4 },
        { name: 'GraphQL', level: 65, experience: '6 months', projects: 2 },
      ],
    },
    {
      title: 'Database & Data',
      icon: <Database className="h-8 w-8 text-secondary" />,
      description: 'Designing and managing data storage solutions',
      skills: [
        { name: 'MongoDB', level: 85, experience: '2+ years', projects: 8 },
        { name: 'SQL', level: 80, experience: '2+ years', projects: 10 },
        { name: 'Database Design', level: 85, experience: '2+ years', projects: 12 },
        { name: 'Data Modeling', level: 80, experience: '1.5 years', projects: 6 },
        { name: 'Redis', level: 70, experience: '1 year', projects: 3 },
        { name: 'PostgreSQL', level: 75, experience: '1 year', projects: 4 },
      ],
    },
    {
      title: 'Data Engineering',
      icon: <BarChart3 className="h-8 w-8 text-secondary" />,
      description: 'Building data pipelines and analytics solutions',
      skills: [
        { name: 'Apache Airflow', level: 85, experience: '1.5 years', projects: 5 },
        { name: 'Snowflake', level: 80, experience: '1 year', projects: 4 },
        { name: 'ETL Processes', level: 85, experience: '1.5 years', projects: 6 },
        { name: 'Data Pipelines', level: 82, experience: '1.5 years', projects: 5 },
        { name: 'BigQuery', level: 75, experience: '1 year', projects: 3 },
        { name: 'Data Warehousing', level: 78, experience: '1 year', projects: 4 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="h-8 w-8 text-secondary" />,
      description: 'Deploying and managing cloud infrastructure',
      skills: [
        { name: 'Docker', level: 80, experience: '1.5 years', projects: 6 },
        { name: 'AWS', level: 75, experience: '1 year', projects: 4 },
        { name: 'CI/CD', level: 78, experience: '1 year', projects: 5 },
        { name: 'Git & GitHub', level: 90, experience: '3+ years', projects: 20 },
        { name: 'Linux', level: 75, experience: '2+ years', projects: 8 },
        { name: 'Kubernetes', level: 65, experience: '6 months', projects: 2 },
      ],
    },
    {
      title: 'Tools & Others',
      icon: <Settings className="h-8 w-8 text-secondary" />,
      description: 'Additional tools and methodologies',
      skills: [
        { name: 'Agile/Scrum', level: 85, experience: '2+ years', projects: 10 },
        { name: 'Jest/Testing', level: 75, experience: '1 year', projects: 6 },
        { name: 'Figma', level: 70, experience: '1 year', projects: 8 },
        { name: 'Postman', level: 88, experience: '2+ years', projects: 15 },
        { name: 'VS Code', level: 95, experience: '3+ years', projects: 25 },
        { name: 'Jira', level: 80, experience: '1.5 years', projects: 8 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.3,
      },
    }),
  };

  return (
    <TooltipProvider>
      <motion.section
        id="skills"
        className="py-20 w-full min-h-screen bg-skills"
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
              Technical Skills
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              A comprehensive overview of my technical expertise, built through years of hands-on experience
              and continuous learning across multiple domains.
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <motion.div
                      className="flex justify-center mb-4"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: categoryIndex * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      {category.icon}
                    </motion.div>
                    <CardTitle className="text-xl text-primary">
                      {category.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {category.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <Tooltip key={skill.name}>
                          <TooltipTrigger asChild>
                            <motion.div
                              className="space-y-2 cursor-pointer"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: skillIndex * 0.1 }}
                              onMouseEnter={() => setHoveredSkill(skill.name)}
                              onMouseLeave={() => setHoveredSkill(null)}
                            >
                              <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-foreground">
                                  {skill.name}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {skill.level}%
                                </span>
                              </div>
                              <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                                <motion.div
                                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-secondary to-accent rounded-full"
                                  variants={skillBarVariants}
                                  initial="hidden"
                                  whileInView="visible"
                                  viewport={{ once: true }}
                                  custom={skill.level}
                                />
                                {hoveredSkill === skill.name && (
                                  <motion.div
                                    className="absolute top-0 left-0 h-full bg-white/30 rounded-full"
                                    initial={{ x: '-100%' }}
                                    animate={{ x: '100%' }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                  />
                                )}
                              </div>
                            </motion.div>
                          </TooltipTrigger>
                          <TooltipContent 
                            side="right" 
                            className="max-w-xs p-3 bg-popover border-border"
                          >
                            <div className="space-y-2">
                              <p className="font-semibold text-primary">{skill.name}</p>
                              <div className="text-sm text-muted-foreground space-y-1">
                                <p>Proficiency: <span className="text-foreground font-medium">{skill.level}%</span></p>
                                <p>Experience: <span className="text-foreground font-medium">{skill.experience}</span></p>
                                <p>Projects: <span className="text-foreground font-medium">{skill.projects}+</span></p>
                              </div>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Summary Stats */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { icon: <Code className="h-6 w-6" />, value: '12+', label: 'Technologies' },
              { icon: <Laptop className="h-6 w-6" />, value: '20+', label: 'Projects' },
              { icon: <Zap className="h-6 w-6" />, value: '2+', label: 'Years Experience' },
              { icon: <Shield className="h-6 w-6" />, value: '100%', label: 'Commitment' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center mb-3 text-secondary">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </TooltipProvider>
  );
};

export default Skills;

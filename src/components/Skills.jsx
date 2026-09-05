import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import {
  Code,
  Database,
  Cloud,
  Zap,
  Layout,
  BarChart3,
  Settings,
  Shield,
  Layers,
  Workflow
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Engineering · Core',
      icon: <Code className="h-6 w-6 text-secondary" />,
      skills: ['Laravel', 'Node.js / Express', 'Python', 'REST APIs', 'Authentication & RBAC', 'API Design', 'Validation & Error Handling'],
    },
    {
      title: 'Databases & Data · Core',
      icon: <Database className="h-6 w-6 text-secondary" />,
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQL', 'Schema Design', 'Query Optimization'],
    },
    {
      title: 'Frontend · Core',
      icon: <Layout className="h-6 w-6 text-secondary" />,
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'State Management'],
    },
    {
      title: 'Infrastructure · Core',
      icon: <Cloud className="h-6 w-6 text-secondary" />,
      skills: ['Docker', 'Linux', 'Nginx', 'Git & GitHub', 'CI/CD', 'Production Deployment'],
    },
    {
      title: 'Data Engineering · Core',
      icon: <BarChart3 className="h-6 w-6 text-secondary" />,
      skills: ['ETL Pipelines', 'Apache Airflow', 'Data Modeling', 'Data Warehousing', 'Snowflake'],
    },
    {
      title: 'Product Engineering · Core',
      icon: <Workflow className="h-6 w-6 text-secondary" />,
      skills: ['Problem → Production', 'Workflow Design', 'Agile / Scrum', 'Jira', 'Stakeholder Collaboration'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="skills"
      className="py-16 w-full bg-transparent"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium tracking-wider text-secondary uppercase bg-secondary/10 rounded-full">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent mb-4">
            Engineering Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            A focused core stack I build with daily — plus the tools I keep close.
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>


        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
            >
              <Card className="h-full card-refined hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors">
                      {category.icon}
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-[10px] font-medium px-2 py-0.5 bg-secondary/10 text-secondary hover:bg-secondary hover:text-white border-0 transition duration-200 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Familiar With */}
        <div className="mt-8 text-center">
          <h3 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Familiar With
          </h3>
          <div className="flex flex-wrap justify-center gap-1.5 max-w-3xl mx-auto">
            {['Java', 'GraphQL', 'Django', 'Kubernetes', 'AWS', 'BigQuery', 'Socket.io', 'Web Scraping', 'Jest / Testing', 'Azure', 'Flask', 'TensorFlow / ML'].map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="text-[10px] px-2 py-0.5 border-border/50 text-muted-foreground"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {[
            { icon: <Layers className="h-5 w-5" />, value: '4', label: 'Featured Platforms' },
            { icon: <Code className="h-5 w-5" />, value: '10+', label: 'Projects Delivered' },
            { icon: <Zap className="h-5 w-5" />, value: '3+', label: 'Years Building' },
            { icon: <Shield className="h-5 w-5" />, value: 'Backend', label: 'Product-Focused' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 card-refined rounded-lg hover:border-primary/20 transition-all duration-200 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="flex justify-center mb-2">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-all duration-200">
                  <div className="text-primary group-hover:text-secondary transition-colors duration-200">
                    {stat.icon}
                  </div>
                </div>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Skills;

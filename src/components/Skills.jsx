import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import {
  Code,
  Database,
  Cloud,
  Laptop,
  Zap,
  Layout,
  BarChart3,
  Settings,
  Shield
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="h-6 w-6 text-secondary" />,
      skills: ['React.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'TypeScript', 'Responsive Design'],
    },
    {
      title: 'Backend Development',
      icon: <Code className="h-6 w-6 text-secondary" />,
      skills: ['Node.js', 'Express.js', 'Python', 'RESTful APIs', 'Java', 'GraphQL'],
    },
    {
      title: 'Database & Data',
      icon: <Database className="h-6 w-6 text-secondary" />,
      skills: ['MongoDB', 'SQL', 'Database Design', 'Data Modeling', 'Redis', 'PostgreSQL'],
    },
    {
      title: 'Data Engineering',
      icon: <BarChart3 className="h-6 w-6 text-secondary" />,
      skills: ['Apache Airflow', 'Snowflake', 'ETL Processes', 'Data Pipelines', 'BigQuery', 'Data Warehousing'],
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="h-6 w-6 text-secondary" />,
      skills: ['Docker', 'AWS', 'CI/CD', 'Git & GitHub', 'Linux', 'Kubernetes'],
    },
    {
      title: 'Tools & Others',
      icon: <Settings className="h-6 w-6 text-secondary" />,
      skills: ['Agile/Scrum', 'Jest/Testing', 'Figma', 'Postman', 'VS Code', 'Jira'],
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
      className="py-16 w-full min-h-screen bg-skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-none px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Technologies and tools I work with to build scalable solutions
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-3">
                  <motion.div
                    className="flex justify-center mb-3"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: categoryIndex * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    {category.icon}
                  </motion.div>
                  <CardTitle className="text-lg text-primary">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.05 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="text-sm px-3 py-1 hover:bg-secondary hover:text-white transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {[
            { icon: <Code className="h-5 w-5" />, value: '12+', label: 'Technologies' },
            { icon: <Laptop className="h-5 w-5" />, value: '20+', label: 'Projects' },
            { icon: <Zap className="h-5 w-5" />, value: '2+', label: 'Years Experience' },
            { icon: <Shield className="h-5 w-5" />, value: '100%', label: 'Commitment' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 bg-card rounded-lg border border-border hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex justify-center mb-2 text-secondary">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground">
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

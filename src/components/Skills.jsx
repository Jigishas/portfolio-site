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
      skills: ['React.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'TypeScript', 'Responsive Design', 'ShadCN'],
    },
    {
      title: 'Backend Development',
      icon: <Code className="h-6 w-6 text-secondary" />,
      skills: ['Node.js', 'Express.js', 'Python', 'RESTful APIs', 'Java', 'GraphQL', 'Django', 'Laravel'],
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
      skills: ['Agile/Scrum', 'Jest/Testing', 'Figma', 'Postman', 'VS Code', 'Jira', 'Nginx'],
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium tracking-wider text-secondary uppercase bg-secondary/10 rounded-full">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Technologies and tools I work with to build scalable solutions
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>


        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
              <Card className="h-full bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border border-border/50 hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300 group">
                <CardHeader className="text-center pb-3">
                  <motion.div
                    className="flex justify-center mb-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: categoryIndex * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/10 group-hover:from-secondary/30 group-hover:to-primary/20 transition-all duration-300">
                      {category.icon}
                    </div>
                  </motion.div>
                  <CardTitle className="text-lg font-semibold text-primary group-hover:text-secondary transition-colors duration-300">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
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
                          className="text-xs font-medium px-3 py-1.5 bg-secondary/10 text-secondary hover:bg-secondary hover:text-white border-0 transition duration-300 cursor-default shadow-sm"
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
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {[
            { icon: <Code className="h-6 w-6" />, value: '12+', label: 'Technologies' },
            { icon: <Laptop className="h-6 w-6" />, value: '20+', label: 'Projects' },
            { icon: <Zap className="h-6 w-6" />, value: '3+', label: 'Years Experience' },
            { icon: <Shield className="h-6 w-6" />, value: '100%', label: 'Commitment' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 group-hover:from-primary/30 group-hover:to-secondary/20 transition-all duration-300">
                  <div className="text-primary group-hover:text-secondary transition-colors duration-300">
                    {stat.icon}
                  </div>
                </div>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
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

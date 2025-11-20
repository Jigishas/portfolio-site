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
  Server,
  Zap,
  GitBranch,
  Container
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Software Engineering',
      icon: <Code className="h-8 w-8 text-secondary" />,
      skills: [
        { name: 'MERN Stack', primary: true },
        { name: 'React.js', primary: false },
        { name: 'Node.js', primary: false },
        { name: 'Express.js', primary: false },
        { name: 'MongoDB', primary: false },
        { name: 'JavaScript', primary: false },
        { name: 'HTML/CSS', primary: false },
        { name: 'Java Programming', primary: false },
        { name: 'RESTful APIs', primary: false },
        { name: 'Version Control (Git)', primary: false },
        { name:  'Python', primary: false },
      ],
    },
    {
      title: 'Data Engineering',
      icon: <Database className="h-8 w-8 text-secondary" />,
      skills: [
        { name: 'Apache Airflow', primary: true },
        { name: 'Snowflake', primary: false },
        { name: 'Data Pipelines', primary: false },
        { name: 'ETL Processes', primary: false },
        { name: 'Database Design', primary: false },
        { name: 'SQL', primary: false },
        { name: 'Python', primary: false },
        { name: 'cloud Computing', primary: false },
        { name: 'Data Warehousing', primary: false },
        { name: 'Big Query', primary: false },
        { name: 'DAGs', primary: false },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="h-8 w-8 text-secondary" />,
      skills: [
        { name: 'Cloud Computing', primary: true },
        { name: 'DevOps Engineering', primary: false },
        { name: 'CI/CD Pipelines', primary: false },
        { name: 'Docker', primary: false },
        { name: 'Git & GitHub', primary: false },
        { name: 'Linux', primary: false },
        { name: 'Agile & Scrum', primary: false },
        { name: 'Docker-Compose', primary: false },
      ],
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

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  return (
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
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <motion.div
                    className="flex justify-center mb-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    {category.icon}
                  </motion.div>
                  <CardTitle className="text-xl text-primary">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={badgeVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          visible: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                              delay: skillIndex * 0.1,
                              duration: 0.3,
                            },
                          },
                        }}
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <Badge
                          variant={skill.primary ? 'default' : 'secondary'}
                          className={`transition-all duration-300 ${
                            skill.primary
                              ? 'bg-secondary hover:bg-secondary/90 text-white'
                              : 'hover:bg-secondary/20'
                          }`}
                        >
                          {skill.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-primary mb-8">
            Tools & Technologies
          </h3>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: <GitBranch className="h-5 w-5 text-secondary" />, label: 'Git' },
              { icon: <Container className="h-5 w-5 text-secondary" />, label: 'Docker' },
              { icon: <Server className="h-5 w-5 text-secondary" />, label: 'AWS' },
              { icon: <Zap className="h-5 w-5 text-secondary" />, label: 'REST APIs' },
              { icon: <Laptop className="h-5 w-5 text-secondary" />, label: 'Agile/Scrum' },
            ].map((tool) => (
              <motion.div
                key={tool.label}
                className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-shadow"
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                {tool.icon}
                <span>{tool.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;

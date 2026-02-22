import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const About = () => {
  // eslint-disable-next-line no-unused-vars
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.3 },
    },
  };

  return (
    <motion.section
      id="about"
      className="py-20 w-full min-h-screen bg-about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="w-full max-w-none px-4">
        <motion.div
          className="text-center mb-16"
          variants={textVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-6"
            variants={textVariants}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
              Passionate Software Engineer & Tech Enthusiast
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello! I'm Joseph Gachuru, a dedicated Software Engineering student of Kirinyaga University with a strong passion for technology and software development. I specialize in creating efficient, scalable solutions across multiple domains.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans{' '}
              <motion.span variants={badgeVariants}>
                <Badge variant="primary" className="mx-2">Software Engineering</Badge>
              </motion.span>,{' '}
              <motion.span variants={badgeVariants}>
                <Badge variant="primary" className="mx-2">Data Analytics</Badge>
              </motion.span>,{' '}
              <motion.span variants={badgeVariants}>
                <Badge variant="primary" className="mx-2">Data Engineering</Badge>
              </motion.span>, and{' '}
              <motion.span variants={badgeVariants}>
                <Badge variant="primary" className="mx-2">Backend Development</Badge>
              </motion.span>{' '}
              with proficiency in the MERN stack development, cloud computing, Python programming, and DevOps practices.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm constantly learning and exploring new technologies to enhance my skills and contribute to innovative projects that solve real-world problems.
            </p>

            <motion.div
              className="flex flex-wrap gap-3 mt-6"
              variants={badgeVariants}
            >
              {[
                'MERN Stack',
                'Php',
                'Python',
                'Apache Airflow',
                'Snowflake',
                'Docker',
                'AWS',
                'Azure',
                'Django',
                'Laravel',
              ].map((tech) => (
                <motion.div
                  key={tech}
                  variants={badgeVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge variant="outline">{tech}</Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            variants={imageVariants}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden shadow-2xl hover:shadow-2xl transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-secondary to-primary p-8 text-center text-white">
                    <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl font-bold mb-2 ">JG</div>
                        <div className="text-lg opacity-90">Joseph Gachuru</div>
                        <div className="text-sm opacity-75">Software Engineer</div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-8">
                      <motion.div
                        className="text-center"
                        variants={statVariants}
                      >
                        <motion.div
                          className="text-2xl font-bold"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          3+
                        </motion.div>
                        <div className="text-sm opacity-90">Years Experience</div>
                      </motion.div>
                      <motion.div
                        className="text-center"
                        variants={statVariants}
                      >
                        <motion.div
                          className="text-2xl font-bold"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                        >
                          10+
                        </motion.div>
                        <div className="text-sm opacity-90">Projects Completed</div>
                      </motion.div>
                      <motion.div
                        className="text-center"
                        variants={statVariants}
                      >
                        <motion.div
                          className="text-2xl font-bold"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                        >
                          5+
                        </motion.div>
                        <div className="text-sm opacity-90">Technologies</div>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

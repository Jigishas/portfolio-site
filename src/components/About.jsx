import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Code, Database, Briefcase } from 'lucide-react'

const About = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.05,
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.3 },
    },
  };

  const focusAreas = [
    { label: 'Backend Engineering', icon: Code, color: 'text-blue-500' },
    { label: 'Product Management', icon: Briefcase, color: 'text-emerald-500' },
    { label: 'Data Engineering', icon: Database, color: 'text-purple-500' },
  ];

  return (
    <motion.section
      id="about"
      className="py-16 w-full min-h-screen bg-about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          variants={textVariants}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium tracking-wider text-secondary uppercase bg-secondary/10 rounded-full">
            Get to Know Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            About Me
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Text Content - Takes 3 columns */}
          <motion.div
            className="lg:col-span-3 space-y-5"
            variants={textVariants}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-primary">
              Backend & Product Management
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Hello! I'm Joseph Gachuru — a Software Engineer focused on backend and product management. I work across the full product lifecycle: identifying a business problem, designing workflows, building the backend architecture, shipping the interface and deploying the final system.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              My work centers on three key areas — spanning logistics, property management, agriculture and legal tech. I design relational schemas, build REST APIs with role-based access control and deploy behind Linux/Nginx with caching and monitoring.
            </p>

            {/* Focus Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {focusAreas.map((area) => (
                <motion.div
                  key={area.label}
                  className="flex items-center gap-2.5 p-3 rounded-lg border border-border/40 bg-card/50 hover:border-primary/20 hover:bg-card transition-all duration-200"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className={`p-1.5 rounded-md bg-primary/10 ${area.color}`}>
                    <area.icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-medium text-foreground">{area.label}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              I care about why a feature exists, not only how to code it — which is why I build real, multi-user systems rather than tutorial apps, and measure the impact of the engineering behind them.
            </p>

            <motion.div
              className="flex flex-wrap gap-1.5 mt-5"
              variants={badgeVariants}
            >
              {[
                'Laravel',
                'Node.js',
                'Python',
                'PostgreSQL',
                'MySQL',
                'React',
                'TypeScript',
                'Redis',
                'Docker',
                'Nginx',
                'REST APIs',
                'RBAC',
                'ETL',
              ].map((tech) => (
                <motion.div
                  key={tech}
                  variants={badgeVariants}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Badge variant="outline" className="text-[10px] px-2 py-0.5">{tech}</Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Card - Takes 2 columns */}
          <motion.div variants={imageVariants} className="lg:col-span-2">
            <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
              <Card className="card-refined overflow-hidden border-border/40">
                {/* Card header with gradient */}
                <div className="h-16 bg-gradient-to-r from-primary/20 via-secondary/15 to-accent/20 relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.15),transparent_60%)]" />
                </div>
                <CardContent className="p-5 -mt-8 relative">
                  <div className="text-center">
                    {/* Avatar */}
                    <div className="relative w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-secondary p-0.5 shadow-lg">
                      <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                        <span className="text-xl font-bold text-primary">JG</span>
                      </div>
                    </div>

                    <h3 className="text-sm font-bold text-primary">Joseph Gachuru</h3>
                    <p className="text-xs text-secondary font-medium mb-0.5">Backend & Product Manager</p>
                    <p className="text-[10px] text-muted-foreground mb-4">Kirinyaga University · BSc Software Engineering</p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 pt-3 border-t border-border/20">
                      <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <div className="text-lg font-bold text-primary">3+</div>
                        <div className="text-[9px] text-muted-foreground font-medium">Years Exp</div>
                      </motion.div>
                      <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.35 }}
                      >
                        <div className="text-lg font-bold text-secondary">10+</div>
                        <div className="text-[9px] text-muted-foreground font-medium">Projects</div>
                      </motion.div>
                      <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                      >
                        <div className="text-lg font-bold text-accent">4</div>
                        <div className="text-[9px] text-muted-foreground font-medium">Platforms</div>
                      </motion.div>
                    </div>

                    {/* Quick info */}
                    <div className="mt-3 pt-3 border-t border-border/20 space-y-2">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-muted-foreground">Location</span>
                        <span className="font-medium text-foreground">Kenya</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-muted-foreground">Focus</span>
                        <span className="font-medium text-foreground">Backend · Product · Data</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-muted-foreground">Available</span>
                        <span className="font-medium text-emerald-500">Open to work</span>
                      </div>
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

import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from './ui/button.tsx';

import photo from '../../public/jose.jpeg';
import {
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Download,
  Code2,
  Database,
  Cloud,
  Server,
  Terminal,
  ArrowRight,
} from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const texts = React.useMemo(
    () => ['Software Engineer', 'Backend & Product Engineer', 'Scalable APIs & Systems', 'Data-Driven Products'],
    [],
  );

  const floatingIcons = [
    { Icon: Code2, delay: 0, x: '10%', y: '20%' },
    { Icon: Database, delay: 1, x: '85%', y: '15%' },
    { Icon: Cloud, delay: 2, x: '75%', y: '70%' },
    { Icon: Server, delay: 3, x: '15%', y: '75%' },
    { Icon: Terminal, delay: 4, x: '90%', y: '50%' },
  ];

  // Keep hero snappy on low-power devices
  useEffect(() => {
    if (prefersReducedMotion) return;
  }, [prefersReducedMotion]);

  useEffect(() => {
    const type = () => {
      const current = texts[currentIndex];
      const shouldDelete = isDeleting;
      if (shouldDelete) {
        setCurrentText(current.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };
    const timer = setTimeout(type, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, staggerChildren: 0.1, delayChildren: 0.8 },
    },
  };

  const socialItemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  const techStrip = ['Laravel', 'Node.js', 'Python', 'React', 'PostgreSQL', 'Redis', 'Docker'];

  return (
    <motion.section
      id="home"
      className="relative h-screen w-screen min-w-full flex items-center justify-center bg-hero-gradient dark:bg-hero-gradient-dark text-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Pattern */}
      <motion.div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </motion.div>

      <div className="w-full max-w-none mt-32 px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image with Animated Ring */}
          <motion.div className="mb-6 relative" variants={itemVariants}>
            <motion.div
              className="w-28 h-28 mx-auto rounded-full relative"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div className="relative w-full h-full rounded-full bg-gradient-to-br from-secondary to-accent p-0.5">
                <motion.img
                  src={photo}
                  alt="Joseph Gachuru — Software Engineer"
                  className="w-full h-full rounded-full object-cover border-4 border-white/20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Availability Badge */}
          <motion.div className="mb-6 flex justify-center" variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/25 text-white text-sm font-medium backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              Open to Software Engineering opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-secondary to-accent bg-clip-text text-transparent"
            variants={itemVariants}
            style={{ backgroundSize: '200% 200%' }}
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            Joseph Gachuru
          </motion.h1>

          {/* Typing Roles */}
          <motion.div
            className="text-xl md:text-2xl mb-4 h-8 flex items-center justify-center"
            variants={itemVariants}
          >
            <span className="text-primary font-semibold">{currentText}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
            >
              |
            </motion.span>
          </motion.div>

          {/* Positioning */}
          <motion.p className="text-base font-semibold text-white/90 mb-2 max-w-2xl mx-auto" variants={itemVariants}>
            Backend & Product Engineering
          </motion.p>
          <motion.p
            className="text-sm md:text-base text-white/75 mb-5 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            I build scalable APIs, business systems and data-driven products — taking ideas from problem to production with Laravel, Node.js, Python, React and PostgreSQL.
          </motion.p>

          {/* Tech Strip */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-1.5 mb-5 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            {techStrip.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-white/10 border border-white/15 text-white/80"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.p className="text-xs text-white/60 mb-6 max-w-2xl mx-auto" variants={itemVariants}>
            BSc Software Engineering (Kirinyaga University) · Graduate of Power Learn Project Africa, Moringa School & productNBO.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8" variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                onClick={() => scrollToSection('#projects')}
                size="default"
                className="bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white font-semibold px-6 py-2 text-sm rounded-full shadow-lg hover:shadow-emerald-500/40 transition-all duration-200 inline-flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                onClick={() => scrollToSection('#contact')}
                variant="outline"
                size="default"
                className="border border-white/30 bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 px-6 py-2 text-sm rounded-full shadow-md hover:shadow-lg transition-all duration-200"
              >
                Get In Touch
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="outline"
                size="default"
                className="rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 px-5 py-2 text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div className="flex justify-center space-x-5 mb-8" variants={socialVariants}>
            {[
              { href: 'https://github.com/Jigishas', icon: <Github className="h-5 w-5" />, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/joseph-gachuru-375219350', icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn' },
              { href: 'https://x.com/JigishaF5831/', icon: <Twitter className="h-5 w-5" />, label: 'Twitter' },
              { href: 'https://www.instagram.com/ni.jigisha/', icon: <Instagram className="h-5 w-5" />, label: 'Instagram' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-secondary transition-colors duration-200"
                variants={socialItemVariants}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
        <br />
        <br />
        <br />

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.button
            onClick={() => scrollToSection('#about')}
            className="text-white/80 hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronDown className="h-8 w-8" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
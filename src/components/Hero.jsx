import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import photo from '../../public/jose.jpg';
import { ChevronDown, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Software Engineer',
    'Data Engineer',
    'Backend Specialist',
    'Tech Enthusiast'
  ];

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
  }, [currentText, currentIndex, isDeleting]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.8,
      },
    },
  };

  const socialItemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.section
      id="home"
      className="relative h-screen w-full flex items-center justify-center bg-hero-gradient dark:bg-hero-gradient-dark text-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="w-full max-w-none px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <motion.div
            className="mb-8"
            variants={itemVariants}
          >
            <motion.div
              className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-6xl font-bold text-white shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={photo}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            Joseph Gachuru
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl mb-4 h-8 flex items-center justify-center"
            variants={itemVariants}
          >
            <span className="text-primary font-semibold">{currentText}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            >
              |
            </motion.span>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-2 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Software Engineer | Data Engineer | Backend Specialist
          </motion.p>
          <motion.p
            className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Undergraduate at Kirinyaga University pursuing BSC in Software Engineering
          </motion.p>
          <motion.p
            className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Graduate of Power Learn Project Africa.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => scrollToSection('#projects')}
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View My Work
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => scrollToSection('#contact')}
                variant="outline"
                size="lg"
                className="border-2 border-white text-blue-400 hover:bg-white hover:text-primary px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-12"
            variants={socialVariants}
          >
            {[
              { href: "https://github.com/Jigishas", icon: <Github className="h-6 w-6" />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/joseph-gachuru-375219350", icon: <Linkedin className="h-6 w-6" />, label: "LinkedIn" },
              { href: "https://x.com/JigishaF5831/", icon: <Twitter className="h-6 w-6" />, label: "Twitter" },
              { href: "https://www.instagram.com/ni.jigisha/", icon: <Instagram className="h-6 w-6" />, label: "Instagram" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-secondary transition-colors duration-300"
                variants={socialItemVariants}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

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

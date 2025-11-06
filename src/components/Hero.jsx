import React, { useState, useEffect } from 'react';
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

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center bg-hero-gradient dark:bg-hero-gradient-dark text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="w-full max-w-none px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
              <img src={photo} alt="Profile" className="w-32 h-32 rounded-full object-cover" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Joseph Gachuru
          </h1>

          <div className="text-xl md:text-2xl mb-4 h-8 flex items-center justify-center">
            <span className="text-primary font-semibold">{currentText}</span>
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-lg md:text-xl text-white/90 mb-2 max-w-2xl mx-auto">
            Software Engineer | Data Engineer | Backend Specialist
          </p>
          <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Undergraduate at Kirinyaga University pursuing BSC in Software Engineering
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={() => scrollToSection('#projects')}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              size="lg"
              className="border-2 border-white text-blue-400 hover:bg-white hover:text-primary px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/Jigishas" target="_blank" rel="noopener noreferrer"
               className="text-white/80 hover:text-secondary transition-colors duration-300 transform hover:scale-110">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/joseph-gachuru-375219350" className="text-white/80 hover:text-secondary transition-colors duration-300 transform hover:scale-110">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-white/80 hover:text-secondary transition-colors duration-300 transform hover:scale-110">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-white/80 hover:text-secondary transition-colors duration-300 transform hover:scale-110">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('#about')} className="text-white/80 hover:text-white transition-colors duration-300">
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

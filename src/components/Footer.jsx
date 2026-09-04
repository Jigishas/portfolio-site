import React from 'react'
import { Button } from './ui/button'
import { Mail, Github, Linkedin, Twitter, Instagram } from 'lucide-react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'


const Footer = () => {
  const currentYear = new Date().getFullYear();
 

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: 'https://github.com/Jigishas',
      label: 'GitHub',
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: 'https://www.linkedin.com/in/joseph-gachuru-375219350',
      label: 'LinkedIn',
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: 'https://x.com/JigishaF5831/',
      label: 'X',
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: 'https://www.instagram.com/ni.jigisha/',
      label: 'Instagram',
    },
  ]

  

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };



  const footerLinks = {
    navigation: [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About' },
      { href: '#projects', label: 'Projects' },
      { href: '#experience', label: 'Experience' },
      { href: '#engineering', label: 'How I Engineer' },
      { href: '#skills', label: 'Skills' },
      { href: '#notes', label: 'Engineering Notes' },
      { href: '#certificates', label: 'Certificates' },
      { href: '#contact', label: 'Contact' },
    ],
    resources: [
      { href: '#projects', label: 'Projects' },
      { href: '#skills', label: 'Skills' },
      { href: '#experience', label: 'Experience' },
    ],
    legal: [
      { href: '#', label: 'Privacy Policy' },
      { href: '#', label: 'Terms of Service' },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-muted/50 to-background border-t border-border">
      {/* Newsletter Section */}
      <div className="w-full max-w-none px-4 py-12 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="w-full max-w-none px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <motion.div
              className="md:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Joseph<span className="text-secondary"> Gachuru</span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Software Engineer building scalable APIs, business systems and data-driven products — from problem to production.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-2">
                {socialLinks.map((social) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="rounded-full transition-all duration-300 glass border-border/50 hover:shadow-lg hover:bg-muted/50"
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-semibold text-primary mb-4">Navigation</h4>
              <ul className="space-y-2">
                {footerLinks.navigation.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-secondary transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-semibold text-primary mb-4">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-secondary transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-semibold text-primary mb-4">Get in Touch</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-secondary" />
                  josephgachuru336@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</span>
                  Available for freelance work
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">📍</span>
                  Nairobi, Kenya
                </li>
              </ul>
            </motion.div>
          </div>


          {/* Bottom Bar */}
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Joseph Gachuru. All Rights Reserved.
            </p>
            
            <div className="flex items-center gap-4">
              {footerLinks.legal.map((link) => (
                <button
                  key={link.label}
                  className="text-muted-foreground hover:text-secondary transition-colors duration-200 text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

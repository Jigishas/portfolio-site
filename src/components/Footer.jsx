import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Heart, 
  Mail,
  ArrowUp,
  Code2,
  Database,
  Cloud,
  Server,
  Sparkles
} from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: 'https://github.com/Jigishas',
      label: 'GitHub',
      color: 'hover:bg-gray-800 hover:text-white',
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: 'https://www.linkedin.com/in/joseph-gachuru-375219350',
      label: 'LinkedIn',
      color: 'hover:bg-blue-600 hover:text-white',
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: 'https://x.com/JigishaF5831/',
      label: 'X',
      color: 'hover:bg-black hover:text-white',
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: 'https://www.instagram.com/ni.jigisha/',
      label: 'Instagram',
      color: 'hover:bg-pink-600 hover:text-white',
    },
  ];

  const techStack = [
    { name: 'React', icon: <Code2 className="h-4 w-4" /> },
    { name: 'Node.js', icon: <Server className="h-4 w-4" /> },
    { name: 'MongoDB', icon: <Database className="h-4 w-4" /> },
    { name: 'AWS', icon: <Cloud className="h-4 w-4" /> },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    navigation: [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About' },
      { href: '#skills', label: 'Skills' },
      { href: '#experience', label: 'Experience' },
      { href: '#projects', label: 'Projects' },
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mail className="h-6 w-6 text-secondary" />
              <h3 className="text-2xl font-bold text-primary">Stay Updated</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Subscribe to my newsletter for the latest updates on projects, tech insights, 
              and software engineering tips.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button 
                type="submit" 
                className="bg-secondary hover:bg-secondary/90 text-white"
                disabled={subscribed}
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </Button>
            </form>
            
            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 text-sm mt-3 flex items-center justify-center gap-1"
              >
                <Sparkles className="h-4 w-4" />
                Thanks for subscribing! Check your inbox soon.
              </motion.p>
            )}
          </motion.div>
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
                Joseph<span className="text-secondary">Gachuru</span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Software Engineer passionate about creating innovative solutions
                and pushing the boundaries of technology.
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
                      className={`rounded-full transition-all duration-300 ${social.color}`}
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
                  Kirinyaga, Kenya
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Tech Stack Badge */}
          <motion.div
            className="border-t border-border pt-8 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <Heart className="h-4 w-4 text-red-500" />
                Made with passion using
              </span>
              <div className="flex flex-wrap justify-center gap-2">
                {techStack.map((tech) => (
                  <Badge
                    key={tech.name}
                    variant="outline"
                    className="flex items-center gap-1 px-3 py-1 hover:bg-secondary/10 transition-colors"
                  >
                    {tech.icon}
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

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

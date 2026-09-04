import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { BookOpen, PenLine } from 'lucide-react';

const articles = [
  {
    title: 'How I reduced unnecessary API requests in a React application',
    category: 'Performance',
    summary: 'From a real page-load investigation — request deduplication, caching and rendering changes that reduced initial API traffic.',
  },
  {
    title: 'Optimizing Laravel APIs under high request volume',
    category: 'Backend',
    summary: 'Caching strategies, query optimization and indexing applied to a logistics platform under traffic.',
  },
  {
    title: 'Designing a parcel delivery architecture',
    category: 'Architecture',
    summary: 'How I shaped a multi-sided logistics system for customers, vendors, riders and administrators.',
  },
  {
    title: 'Building role-based access control in Laravel',
    category: 'Security',
    summary: 'RBAC that supports customers, vendors, riders and admins inside one application.',
  },
  {
    title: 'Deploying Laravel + React behind Nginx',
    category: 'DevOps',
    summary: 'Production setup, TLS, static assets and reverse proxy patterns that held up in the real world.',
  },
  {
    title: 'Designing an offline-first agricultural AI application',
    category: 'AI / Product',
    summary: 'Keeping CNN-based plant-health detection usable where connectivity is unreliable.',
  },
];

const Articles = () => (
  <motion.section
    id="notes"
    className="py-20 w-full bg-skills"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium tracking-wider text-secondary uppercase bg-secondary/10 rounded-full">
          Engineering Notes
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Articles & Write-Ups
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
          Lessons from real production problems I've solved — write-ups I'm publishing as I go.
        </p>
        <div className="w-28 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <motion.div
            key={article.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <Card className="h-full glass border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-primary mb-3 leading-snug group-hover:text-secondary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{article.summary}</p>
                <div className="mt-auto pt-2 flex items-center gap-2 text-xs text-muted-foreground">
                  <PenLine className="h-3.5 w-3.5" />
                  From production experience
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button asChild size="lg" variant="outline" className="gap-2">
          <a href="https://github.com/Jigishas" target="_blank" rel="noopener noreferrer">
            <BookOpen className="h-4 w-4" />
            Follow along on GitHub
          </a>
        </Button>
      </div>
    </div>
  </motion.section>
);

export default Articles;
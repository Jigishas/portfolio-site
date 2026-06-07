import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const certificates = [
  {
    title: 'AI Essentials for Professionals',
    issuer: 'Moringa School',
    year: '2026',
    file: 'joseph-gachuru_certificate Moringa.pdf'
  },
  {
    title: 'MERN Stack Developer',
    issuer: 'Power Learn Project',
    year: '2025',
    file: 'Joseph Gachuru certificate plp MERN.pdf'
  },
  {
    title: 'Product NBO — Product Manager & AI',
    issuer: 'Product NBO',
    year: '2026',
    file: 'Product NBO .pdf'
  },
  {
    title: 'Software Engineering',
    issuer: 'Power Learn Project',
    year: '2025',
    file: 'joseph plp certificate.pdf'
  },
  {
    title: 'AI Training Certificate',
    issuer: 'ADMI Digital Skills Training',
    year: '2026',
    file: 'Artificial-Intelligence-Training-ADMI-AI-Certificate-Digital-Skills-Training.pdf'
  },
    {
    title: 'Data Fundamentals',
    issuer: 'IBM Skillsbuild',
    year: '2026',
    file: 'IBM Data Fundamentals.pdf'
  },
   {
    title: 'Data Analytics',
    issuer: 'Digital Skills Training',
    year: '2026',
    file: 'Joseph Gachuru Data Analytics.pdf'
  },
  {
    title: 'Agentic AI on AWS',
    issuer: 'Become A solutions Architect',
    year: '2026',
    file: 'Agentic AI on AWS.pdf'
  },
   {
    title: 'Cybersecurity',
    issuer: 'Shujaa Digital Skills Training',
    year: '2026',
    file: 'Joseph Gachuru Cybersecurity-and-Emerging-Technologies-Awareness-Training-Shujaa-March-2026-Cybersec-Certificate-Digital-Skills-Training.pdf'
  },
  {
    title: 'Azure Fundamentals',
    issuer: 'Microsoft',
    year: '2024',
    file: 'Azure fundamentals.pdf'
  },
 
  {
    title: 'Data Analytics',
    issuer: 'Digital Skills Training',
    year: '2026',
    file: 'Joseph Gachuru Data Analytics.pdf'
  },
  {
    title: 'Cloud Infrastructure Fundamentals',
    issuer: 'Digital Skills Training',
    year: '2024',
    file: 'Joseph Gachuru Fundamentals-to-Cloud-Infrastructure-and-Services-Pathways-Cloud-Infrastructure-and-Services-Certificate-Digital-Skills-Training.pdf'
  },
 
  {
    title: 'React.js for Beginners',
    issuer: 'Online Course',
    year: '2024',
    file: 'React js for Beginners.pdf'
  },
  {
    title: 'Intro to Web Scraping',
    issuer: 'Simplilearn',
    year: '2024',
    file: 'Intro to web scrapping.pdf'
  }
];

const Certificates = () => {
  return (
    <motion.section
      id="certificates"
      aria-labelledby="certificates-title"
      className="py-20 w-full min-h-screen bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="certificates-title" className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary mb-4">
            Certificates, Training & Awards
          </h2>
          <p className="text-muted-foreground/90 max-w-2xl mx-auto mb-6 text-base md:text-lg">
            A curated collection of professional certifications and completed trainings
          </p>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-primary to-secondary mx-auto shadow-sm"></div>
        </motion.div>

        <div className="mb-12 text-center">
          <p className="text-lg text-foreground/90">
            You can find my badges and certificates on:{' '}
            <a
              href="https://www.credly.com/users/joseph-gachuru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors"
            >
              Credly
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.file}
              custom={index}
              initial={{ opacity: 0, y: 22, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06, duration: 0.6, ease: [0.22, 0.9, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.03 }}
            >
              <Card className="relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card/80 backdrop-blur-sm shadow-sm transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl">
                {/* premium gradient glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(37,99,235,0.55) 0%, rgba(124,58,237,0.35) 45%, rgba(5,150,105,0.45) 100%)'
                  }}
                />
                {/* subtle inner sheen */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                  style={{
                    background:
                      'radial-gradient(600px circle at 10% 10%, rgba(255,255,255,0.18), transparent 35%), radial-gradient(500px circle at 90% 40%, rgba(255,255,255,0.12), transparent 40%)'
                  }}
                />

                <CardContent className="relative p-6 md:p-8 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex justify-center mb-6">
                      <span className="relative inline-flex items-center justify-center rounded-full p-3 bg-primary/10 text-primary shadow-sm transition-transform duration-300 group-hover:scale-110">
                        <span className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Award className="h-6 w-6 relative" />
                      </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-1 text-center tracking-tight">
                      {cert.title}
                    </h3>

                    <div className="flex items-center justify-center gap-3 mb-4">
                      <p className="text-sm text-muted-foreground text-center">{cert.issuer}</p>
                      <Badge
                        variant="secondary"
                        className="text-xs font-semibold px-2 py-0.5 bg-secondary/20 text-secondary border border-secondary/30"
                      >
                        {cert.year}
                      </Badge>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Button asChild size="lg" className="w-full btn-animated">
                      <a
                        href={`/Certificates/${encodeURIComponent(cert.file)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Certificate
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Certificates;


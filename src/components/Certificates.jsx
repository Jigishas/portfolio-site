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
    title: 'MERN stack Developer',
    issuer: 'Power Learn Project',
    year: '2025',
    file: 'Joseph Gachuru certificate plp MERN.pdf'
  },
  {
    title: 'Product Management',
    issuer: 'Product NBO',
    year: '2026',
    file: 'Product NBO .pdf'
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
    title: 'Software Engineering',
    issuer: 'Power Learn Project',
    year: '2024',
    file: 'joseph plp certificate.pdf'
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
          <p className='text-lg ml-4'>You can find my badges and certificates on:</p>
          <span><a href='https://www.credly.com/users/joseph-gachuru'>Credly</a></span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.file}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="h-full flex flex-col transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl group">
                <CardContent className="p-6 md:p-8 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex justify-center mb-6">
                      <span className="bg-primary/10 text-primary rounded-full p-3 inline-flex items-center justify-center shadow-sm">
                        <Award className="h-6 w-6" />
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1 text-center">{cert.title}</h3>
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      <Badge variant="secondary" className="text-xs">{cert.year}</Badge>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button asChild size="lg" className="w-full">
                      <a href={`/Certificates/${encodeURIComponent(cert.file)}`} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2">
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


import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const certificates = [
  {
    title: 'MERN stack Developer',
    issuer: 'Power Learn Project',
    year: '2025',
    file: 'Joseph Gachuru certificate plp MERN.pdf'
  },
  {
    title: 'AI Training Certificate',
    issuer: 'ADMI Digital Skills Training',
    year: '2026',
    file: 'Artificial-Intelligence-Training-ADMI-AI-Certificate-Digital-Skills-Training.pdf'
  },
  {
    title: 'Agentic AI on AWS',
    issuer: 'Become A solutions Architect',
    year: '2026',
    file: 'Agentic AI on AWS.pdf'
  },
  {
    title: 'Azure Fundamentals',
    issuer: 'Microsoft',
    year: '2024',
    file: 'Azure fundamentals.pdf'
  },
  {
    title: 'Cybersecurity',
    issuer: 'Shujaa Digital Skills Training',
    year: '2026',
    file: 'Joseph Gachuru Cybersecurity-and-Emerging-Technologies-Awareness-Training-Shujaa-March-2026-Cybersec-Certificate-Digital-Skills-Training.pdf'
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
  },
  {
    title: 'Mastering TensorFlow',
    issuer: 'Online Course',
    year: '2024',
    file: 'Mastering tensorflow.pdf'
  }
];

const Certificates = () => {
  return (
    <motion.section
      id="certificates"
      className="py-20 w-full min-h-screen bg-gradient-to-b from-background to-muted/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            All Certificates
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Complete collection of my professional certifications and achievements
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.file}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary/50 group bg-gradient-to-br from-blue-400/5 to-blue-500/5">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 text-center">{cert.title}</h3>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <p className="text-sm text-muted-foreground font-medium">{cert.issuer}</p>
                    <Badge variant="outline" className="text-xs">{cert.year}</Badge>
                  </div>
                  <Button className="w-full" variant="outline" size="lg" asChild>
                    <a href={`/Certificates/${cert.file}`} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Certificate
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
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


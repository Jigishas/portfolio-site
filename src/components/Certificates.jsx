import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {
  Eye,
  ExternalLink,
  Award,
  TrendingUp,
  ShieldCheck,
  Cloud,
  BrainCircuit,
  Globe,
  Briefcase,
  Sparkles,
  X,
} from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { PdfThumbnail, PdfPages } from './PdfViewer';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';

/* ------------------------------------------------------------------ */
/*  Category metadata                                                  */
/* ------------------------------------------------------------------ */
const categories = [
  { id: 'AI', label: 'AI / ML', icon: BrainCircuit, chip: 'bg-violet-500/15 text-violet-600 border-violet-500/30', glow: 'from-violet-500/30', seal: 'from-violet-500 to-purple-600' },
  { id: 'Data', label: 'Data', icon: TrendingUp, chip: 'bg-indigo-500/15 text-indigo-600 border-indigo-500/30', glow: 'from-indigo-500/30', seal: 'from-indigo-500 to-blue-600' },
  { id: 'Cloud', label: 'Cloud / DevOps', icon: Cloud, chip: 'bg-sky-500/15 text-sky-600 border-sky-500/30', glow: 'from-sky-500/30', seal: 'from-sky-500 to-cyan-600' },
  { id: 'Web', label: 'Full Stack / Web', icon: Globe, chip: 'bg-emerald-500/15 text-emerald-600 border-emerald-500/30', glow: 'from-emerald-500/30', seal: 'from-emerald-500 to-teal-600' },
  { id: 'Product', label: 'Product', icon: Briefcase, chip: 'bg-amber-500/15 text-amber-600 border-amber-500/30', glow: 'from-amber-500/30', seal: 'from-amber-500 to-orange-600' },
  { id: 'Security', label: 'Cybersecurity', icon: ShieldCheck, chip: 'bg-rose-500/15 text-rose-600 border-rose-500/30', glow: 'from-rose-500/30', seal: 'from-rose-500 to-pink-600' },
].reduce((acc, c) => { acc[c.id] = c; return acc; }, {});

/* ------------------------------------------------------------------ */
/*  Certificate data                                                   */
/* ------------------------------------------------------------------ */
const certificates = [
  { title: 'AI Essentials for Professionals', issuer: 'Moringa School', year: '2026', category: 'AI', file: 'joseph-gachuru_certificate Moringa.pdf' },
  { title: 'MERN Stack Developer', issuer: 'Power Learn Project', year: '2025', category: 'Web', file: 'Joseph Gachuru certificate plp MERN.pdf' },
  { title: 'Product NBO \u2014 Product Manager & AI', issuer: 'Product NBO', year: '2026', category: 'Product', file: 'Product NBO .pdf' },
  { title: 'Software Engineering', issuer: 'Power Learn Project', year: '2025', category: 'Web', file: 'joseph plp certificate.pdf' },
  { title: 'AI Training Certificate', issuer: 'ADMI Digital Skills Training', year: '2026', category: 'AI', file: 'Artificial-Intelligence-Training-ADMI-AI-Certificate-Digital-Skills-Training.pdf' },
  { title: 'Data Fundamentals', issuer: 'IBM Skillsbuild', year: '2026', category: 'Data', file: 'IBM Data Fundamentals.pdf' },
  { title: 'Data Analytics', issuer: 'Digital Skills Training', year: '2026', category: 'Data', file: 'Joseph Gachuru Data Analytics.pdf' },
  { title: 'Agentic AI on AWS', issuer: 'Become A solutions Architect', year: '2026', category: 'Cloud', file: 'Agentic AI on AWS.pdf' },
  { title: 'Cybersecurity', issuer: 'Shujaa Digital Skills Training', year: '2026', category: 'Security', file: 'Joseph Gachuru Cybersecurity-and-Emerging-Technologies-Awareness-Training-Shujaa-March-2026-Cybersec-Certificate-Digital-Skills-Training.pdf' },
  { title: 'Azure Fundamentals', issuer: 'Microsoft', year: '2024', category: 'Cloud', file: 'Azure fundamentals.pdf' },
  { title: 'Cloud Infrastructure & Services', issuer: 'AWS re/Start', year: '2024', category: 'Cloud', file: 'Joseph Gachuru Fundamentals-to-Cloud-Infrastructure-and-Services-Pathways-Cloud-Infrastructure-and-Services-Certificate-Digital-Skills-Training.pdf' },
  { title: 'IBM Design \u2014 AI Fundamentals', issuer: 'IBM Skillsbuild', year: '2026', category: 'Data', file: 'IBMDesign AI fundamentals-30-uamnr8.pdf' },
  { title: 'IBM Design \u2014 ML Methods and Tools', issuer: 'IBM Skillsbuild', year: '2026', category: 'Data', file: 'IBMDesign ML methods and tools.pdf' },
  { title: 'Intro to Azure Basics', issuer: 'Simplilearn', year: '2025', category: 'Cloud', file: 'Simplilearn cert.intro to azure basics.pdf' },
];

const pdfUrl = (file) => `/Certificates/${encodeURIComponent(file)}`;

/* ------------------------------------------------------------------ */
/*  Certificate Card                                                   */
/* ------------------------------------------------------------------ */
const CertificateCard = ({ cert, index, onOpen }) => {
  const cat = categories[cert.category];
  const CatIcon = cat?.icon || Award;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="group relative h-full overflow-hidden rounded-xl border border-border/40 bg-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md">
        {/* Top accent line */}
        <div className={`h-0.5 w-full bg-gradient-to-r ${cat?.seal || 'from-primary to-secondary'}`} />

        {/* Preview area */}
        <div className="relative w-full overflow-hidden">
          <button
            type="button"
            onClick={() => onOpen(cert)}
            aria-label={`Enlarge preview of ${cert.title}`}
            className="relative block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            {/* Canvas-rendered thumbnail — works on mobile (iframes don't). */}
            <PdfThumbnail
              src={pdfUrl(cert.file)}
              alt={`${cert.title} certificate preview`}
              aspect="aspect-[16/10]"
              className="group-hover:shadow-inner"
            />
          </button>
        </div>

        {/* Card content */}
        <div className="relative flex flex-col h-full p-3.5">
          {/* Seal + category */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${cat?.seal || 'from-primary to-secondary'} shadow-sm transition-all duration-200 group-hover:scale-105`}>
              <Award className="h-4 w-4 text-white drop-shadow-sm" />
            </div>
            <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold tracking-wide ${cat?.chip || 'bg-primary/10 text-primary border-primary/30'}`}>
              <CatIcon className="h-2.5 w-2.5" />
              {cat?.label || cert.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xs font-bold leading-snug text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors duration-200">
            {cert.title}
          </h3>

          {/* Issuer */}
          <p className="text-[11px] text-muted-foreground mb-0.5 font-medium">{cert.issuer}</p>

          {/* Year */}
          <p className="text-[10px] font-semibold text-muted-foreground/50 mb-3">
            Issued {cert.year}
          </p>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Actions */}
          <div className="flex items-center gap-1.5 pt-2 border-t border-border/20">
            <button
              type="button"
              onClick={() => onOpen(cert)}
              aria-label={`Preview ${cert.title}`}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary/[0.06] px-3 py-2 text-xs font-semibold text-primary transition-all duration-150 hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              <Eye className="h-3.5 w-3.5" />
              View
            </button>
            <a
              href={pdfUrl(cert.file)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${cert.title} in new tab`}
              className="inline-flex items-center justify-center rounded-lg border border-border/40 bg-background/50 px-3 py-2 text-xs font-medium text-foreground transition-all duration-150 hover:bg-accent/10 hover:border-accent/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/*  Preview Dialog                                                     */
/* ------------------------------------------------------------------ */
const PreviewDialog = ({ cert, onClose }) => {
  const cat = categories[cert?.category];
  const CatIcon = cat?.icon || Award;

  if (!cert) return null;

  return (
    <Dialog open onOpenChange={onClose}>
        <DialogContent className="flex flex-col gap-0 overflow-hidden border-border/60 p-0 max-w-none w-screen h-[100dvh] max-h-[100dvh] rounded-none sm:rounded-lg sm:max-w-5xl sm:w-[94vw] sm:h-[90vh] sm:max-h-[90vh] [&>button]:hidden">
        <DialogTitle className="sr-only">{cert.title} - Certificate Preview</DialogTitle>
        <DialogDescription className="sr-only">
          Full-size preview of {cert.title} certificate from {cert.issuer}
        </DialogDescription>

        {/* Header */}
        <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-border/40 bg-card/40 backdrop-blur-sm shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${cat?.seal || 'from-primary to-secondary'} shadow-md`}>
              <Award className="h-5 w-5 text-white" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-foreground truncate">{cert.title}</h3>
              <p className="text-xs text-muted-foreground truncate">{cert.issuer} - {cert.year}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${cat?.chip || 'bg-primary/10 text-primary border-primary/30'}`}>
              <CatIcon className="h-3 w-3" />
              {cat?.label || cert.category}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
              aria-label="Close preview"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Body */}
        <div className="relative flex-1 overflow-y-auto bg-muted/20 px-4 py-4">
          <PdfPages src={pdfUrl(cert.file)} />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-4 px-5 py-3 border-t border-border/40 bg-card/40 backdrop-blur-sm shrink-0">
          <p className="text-xs text-muted-foreground">
            {cert.issuer} - {cert.year}
          </p>
          <a
            href={pdfUrl(cert.file)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            <ExternalLink className="h-4 w-4" />
            Open Full Size
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

/* ------------------------------------------------------------------ */
/*  Main Section                                                       */
/* ------------------------------------------------------------------ */
const Certificates = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="certificates"
      aria-labelledby="certificates-heading"
      className="relative overflow-hidden py-16"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-secondary/[0.04] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(hsl(var(--foreground) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.3) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center mb-10"
        >
          <Badge
            variant="outline"
            className="mb-4 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
          >
            <Award className="h-3.5 w-3.5" />
            Credentials & Certifications
          </Badge>

          <h2
            id="certificates-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Certificates, Training
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              & Awards
            </span>
          </h2>

          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Professional certifications and training programs across software engineering,
            data, cloud, AI, and product management.
          </p>

          {/* Category summary */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5">
            {Object.values(categories).map((cat) => {
              const Icon = cat.icon;
              const count = certificates.filter((c) => c.category === cat.id).length;
              return (
                <span
                  key={cat.id}
                  className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-medium ${cat.chip}`}
                >
                  <Icon className="h-3 w-3" />
                  {cat.label}
                  <span className="ml-0.5 rounded-full bg-background/40 px-1.5 py-0.5 text-[9px] font-bold">
                    {count}
                  </span>
                </span>
              );
            })}
          </div>

          {/* Credly link */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-secondary" />
            Badges also live on{' '}
            <a
              href="https://www.credly.com/users/joseph-gachuru"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary hover:text-secondary transition-colors"
            >
              Credly
            </a>
          </div>

          <div className="mt-6 flex justify-center">
            <div className="h-0.5 w-20 rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
          </div>
        </motion.div>

        {/* Grid */}
              <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-4">
          {certificates.map((cert, index) => (
            <CertificateCard
              key={cert.file}
              cert={cert}
              index={index}
              onOpen={setSelected}
            />
          ))}
        </div>
      </div>

      {/* Preview dialog */}
      {selected && (
        <PreviewDialog cert={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};

export default Certificates;

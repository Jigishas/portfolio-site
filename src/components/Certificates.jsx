import React, { useState, useEffect, useRef } from 'react';
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
  Loader2,
  X,
  ZoomIn,
} from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
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
  { title: 'IBM Design \u2014 AI Fundamentals', issuer: 'IBM Skillsbuild', year: '2026', category: 'Data', file: 'IBM Design - AI Fundamentals.pdf' },
  { title: 'Intro to Azure Basics', issuer: 'Simplilearn', year: '2025', category: 'Cloud', file: 'Simplilearn cert.intro to azure basics.pdf' },
];

const pdfUrl = (file) => `/Certificates/${encodeURIComponent(file)}`;

/* ------------------------------------------------------------------ */
/*  Certificate Card                                                   */
/* ------------------------------------------------------------------ */
const CertificateCard = ({ cert, index, onOpen }) => {
  const cat = categories[cert.category];
  const CatIcon = cat?.icon || Award;
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    setIframeLoaded(false);
  }, [cert.file]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-b from-card/90 via-card/70 to-card/50 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/[0.08]">
        {/* Hover glow */}
        <div className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${cat?.glow || 'from-primary/20'} to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`} />

        {/* Top accent line */}
        <div className={`h-1 w-full bg-gradient-to-r ${cat?.seal || 'from-primary to-secondary'}`} />

        {/* Preview area */}
        <div className="relative w-full overflow-hidden bg-gradient-to-br from-muted/40 via-muted/20 to-muted/10">
          <div className="relative aspect-[4/3] w-full">
            {/* Loading shimmer */}
            {!iframeLoaded && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-muted/30 to-muted/10">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full blur-lg bg-gradient-to-br from-primary/20 via-accent/15 to-secondary/10 opacity-60 animate-pulse" />
                  <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-card/80 border border-border/40 shadow-sm">
                    <Loader2 className="h-5 w-5 text-muted-foreground/70 animate-spin" />
                  </div>
                </div>
                <p className="text-[11px] font-medium text-muted-foreground/60 tracking-wide">Loading preview</p>
              </div>
            )}

            {/* iframe preview */}
            <iframe
              ref={iframeRef}
              src={`${pdfUrl(cert.file)}#page=1&view=FitH`}
              title={`${cert.title} certificate preview`}
              className={`absolute inset-0 w-full h-full border-0 transition-all duration-500 ease-out ${iframeLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              loading="lazy"
              onLoad={() => setIframeLoaded(true)}
            />

            {/* Hover overlay */}
            <button
              type="button"
              onClick={() => onOpen(cert)}
              aria-label={`Enlarge preview of ${cert.title}`}
              className="absolute inset-0 z-20 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2.5 text-sm font-semibold text-foreground shadow-xl backdrop-blur-sm translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                <ZoomIn className="h-4 w-4" />
                Enlarge Preview
              </span>
            </button>
          </div>
        </div>

        {/* Card content */}
        <div className="relative flex flex-col h-full p-5">
          {/* Seal + category */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${cat?.seal || 'from-primary to-secondary'} shadow-lg shadow-black/10 ring-2 ring-white/10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
              <Award className="h-6 w-6 text-white drop-shadow-sm" />
            </div>
            <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-wide ${cat?.chip || 'bg-primary/10 text-primary border-primary/30'}`}>
              <CatIcon className="h-3 w-3" />
              {cat?.label || cert.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-[15px] font-bold leading-snug text-foreground mb-1.5 line-clamp-2 group-hover:text-primary transition-colors duration-200">
            {cert.title}
          </h3>

          {/* Issuer */}
          <p className="text-sm text-muted-foreground mb-1 font-medium">{cert.issuer}</p>

          {/* Year */}
          <p className="text-xs font-semibold text-muted-foreground/60 mb-4">
            Issued {cert.year}
          </p>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Actions */}
          <div className="flex items-center gap-2 pt-3 border-t border-border/30">
            <button
              type="button"
              onClick={() => onOpen(cert)}
              aria-label={`Preview ${cert.title}`}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary/[0.08] px-4 py-2.5 text-sm font-semibold text-primary transition-all duration-200 hover:bg-primary/15 hover:shadow-md hover:shadow-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              <Eye className="h-4 w-4" />
              Preview
            </button>
            <a
              href={pdfUrl(cert.file)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${cert.title} in new tab`}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border/50 bg-background/50 px-3.5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:bg-accent/10 hover:border-accent/40 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              <ExternalLink className="h-4 w-4" />
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
  const [loading, setLoading] = useState(true);
  const cat = categories[cert?.category];
  const CatIcon = cat?.icon || Award;

  useEffect(() => {
    setLoading(true);
  }, [cert?.file]);

  if (!cert) return null;

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-[94vw] max-h-[92vh] h-[90vh] flex flex-col gap-0 p-0 overflow-hidden border-border/60">
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
        <div className="relative flex-1 overflow-hidden bg-muted/20">
          {loading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-muted/20">
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/10 opacity-50 animate-pulse" />
                <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-card border border-border/30">
                  <Loader2 className="h-6 w-6 text-muted-foreground/60 animate-spin" />
                </div>
              </div>
              <p className="text-sm font-medium text-muted-foreground/60">Loading certificate</p>
            </div>
          )}
          <iframe
            src={pdfUrl(cert.file)}
            title={`${cert.title} certificate`}
            className={`w-full h-full border-0 transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setLoading(false)}
          />
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
      className="relative overflow-hidden py-24"
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
          className="mx-auto max-w-3xl text-center mb-16"
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
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Certificates, Training
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              & Awards
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Professional certifications and training programs across software engineering,
            data, cloud, AI, and product management.
          </p>

          {/* Category summary */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {Object.values(categories).map((cat) => {
              const Icon = cat.icon;
              const count = certificates.filter((c) => c.category === cat.id).length;
              return (
                <span
                  key={cat.id}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium ${cat.chip}`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {cat.label}
                  <span className="ml-0.5 rounded-full bg-background/40 px-1.5 py-0.5 text-[10px] font-bold">
                    {count}
                  </span>
                </span>
              );
            })}
          </div>

          {/* Credly link */}
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-secondary" />
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

          <div className="mt-8 flex justify-center">
            <div className="h-1 w-28 rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Github, MapPin } from 'lucide-react';
import { profile, links } from '@/data/site';

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const stackStrip = ['Laravel', 'Node.js', 'Python', 'React', 'MySQL', 'Redis', 'Docker'];

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36">
      {/* Background: faint grid + gradient orbs + noise */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="backdrop-grid absolute inset-0" />
        <div className="noise absolute inset-0" />
        <div className="orb orb-a -left-24 top-4 h-[380px] w-[380px] sm:h-[460px] sm:w-[460px]" />
        <div className="orb orb-b right-[-4rem] top-24 h-[340px] w-[340px] sm:h-[420px] sm:w-[420px]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="page-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* ---------------- Copy ---------------- */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <motion.p variants={item} className="eyebrow">
            Software Engineer · Backend · Product Engineering
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-7 text-[clamp(2.6rem,9vw,4.5rem)] font-light leading-[0.95] tracking-[-0.035em] text-foreground"
          >
            <span className="text-gradient">Joseph Gachuru</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-2xl text-xl font-light leading-snug tracking-tight text-foreground sm:text-2xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.p variants={item} className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            {profile.supporting}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn btn-primary group">
              View my work
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in touch
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost px-3"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/[0.07] pt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-subtle-foreground"
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse-dot" aria-hidden="true" />
              Available for engineering work
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {profile.location}
            </span>
            <span className="hidden sm:block">{stackStrip.join(' · ')}</span>
          </motion.div>
        </motion.div>

        {/* ---------------- Production system visual ---------------- */}
        <motion.div
          initial={reduceMotion ? 'visible' : { opacity: 0, y: 24 }}
          animate="visible"
          variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease, delay: 0.25 } } }}
          className="relative"
        >
          <div
            className="absolute -inset-6 -z-10 rounded-[2rem] bg-accent-gradient opacity-20 blur-3xl"
            aria-hidden="true"
          />
          <SystemPanel />
        </motion.div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  PRODUCTION SYSTEM — decorative engineering panel (no fake metrics)  */
/* ------------------------------------------------------------------ */
const rows = [
  { label: 'API', fill: '92%', note: 'REST · RBAC' },
  { label: 'DATABASE', fill: '78%', note: 'MySQL · Redis' },
  { label: 'QUEUE', fill: '54%', note: 'background jobs' },
  { label: 'EVENTS', fill: '86%', note: 'orders · riders' },
];

const logLines = [
  'POST /api/orders            201  ·  41ms',
  'GET  /api/catalog           200  ·  18ms',
  'PUT  /api/riders/location   200  ·  27ms',
  'AUTH refresh-token          200  ·  12ms',
];

const SystemPanel = () => (
  <div className="surface overflow-hidden rounded-2xl shadow-raised">
    {/* Window chrome */}
    <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3 sm:px-5">
      <div className="flex items-center gap-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-subtle-foreground">
          Production System
        </span>
      </div>
      <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-secondary">
        <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse-dot" aria-hidden="true" />
        Online
      </span>
    </div>

    {/* Service health */}
    <div className="space-y-4 px-4 py-5 sm:px-5" aria-hidden="true">
      {rows.map((row, i) => (
        <div key={row.label} className="flex items-center gap-3 sm:gap-4">
          <span className="w-[76px] shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-subtle-foreground">
            {row.label}
          </span>
          <span className="h-2 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
            <span
              className="animate-bar-grow block h-full rounded-full bg-accent-gradient"
              style={{ width: row.fill, animationDelay: `${400 + i * 140}ms` }}
            />
          </span>
          <span className="hidden w-[104px] shrink-0 font-mono text-[10px] tracking-wide text-subtle-foreground sm:block">
            {row.note}
          </span>
        </div>
      ))}
    </div>

    {/* Request log */}
    <div className="border-t border-white/[0.07] bg-[#0a0a10] px-4 py-4 sm:px-5" aria-hidden="true">
      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-subtle-foreground">
        Request log
      </p>
      <ul className="mt-2.5 space-y-1.5 font-mono text-[11px] leading-relaxed text-muted-foreground sm:text-[11.5px]">
        {logLines.map((line) => (
          <li key={line} className="truncate">
            <span className="text-secondary/70">›</span> {line}
          </li>
        ))}
        <li className="text-muted-foreground">
          <span className="text-secondary/70">›</span>{' '}
          <span className="inline-block animate-caret text-foreground">▊</span>
        </li>
      </ul>
    </div>

    {/* Actor strip */}
    <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-white/[0.07] px-4 py-3 sm:px-5">
      {['Customers', 'Vendors', 'Riders', 'Admins'].map((actor) => (
        <span
          key={actor}
          className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground"
        >
          {actor}
        </span>
      ))}
    </div>
  </div>
);

export default Hero;

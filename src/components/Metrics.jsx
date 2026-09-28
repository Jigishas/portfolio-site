import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { projects } from './projects/projectsData';
import { certificates } from '@/data/certificates';
import { focusAreas } from '@/data/site';

const pad = (n) => String(n).padStart(2, '0');

/**
 * Verified metrics only — every value is derived from real project and
 * certificate data, so nothing here can drift from the source of truth.
 */
const metrics = [
  { value: pad(projects.filter((p) => p.status === 'Production').length), label: 'Production platforms', note: 'PLAT-DEL · Kidu Errands' },
  { value: pad(projects.length), label: 'Systems documented', note: 'problem → production' },
  { value: pad(focusAreas.length), label: 'Engineering domains', note: 'backend · product · data · infra' },
  { value: pad(certificates.length), label: 'Certifications', note: 'cloud · data · AI · security' },
];

const Metrics = () => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.07] lg:grid-cols-4"
  >
    {metrics.map((metric) => (
      <div key={metric.label} className="bg-[#0b0b11] p-5 sm:p-6">
        <div className="text-3xl font-light tracking-tight text-foreground sm:text-4xl">
          {metric.value}
        </div>
        <div className="mt-2 text-[13px] font-medium text-muted-foreground">{metric.label}</div>
        <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground">
          {metric.note}
        </div>
      </div>
    ))}
  </motion.div>
);

export default Metrics;

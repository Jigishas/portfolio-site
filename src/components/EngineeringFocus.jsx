import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Server, Boxes, Workflow, Gauge } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { focusAreas } from '@/data/site';

const icons = [Server, Boxes, Workflow, Gauge];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const EngineeringFocus = () => (
  <section id="engineering" className="relative py-24 sm:py-32">
    <div className="page-shell">
      <SectionHeading
        eyebrow="Engineering focus"
        title="Backend, product, data and production."
        lead="Four connected areas of work — from service architecture and APIs to the pipelines and infrastructure that keep systems running."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-12 grid gap-4 sm:grid-cols-2 xl:gap-5"
      >
        {focusAreas.map((area, i) => {
          const Icon = icons[i];
          return (
            <motion.article
              key={area.number}
              variants={card}
              className="surface surface-hover group relative flex flex-col overflow-hidden rounded-xl p-5 sm:p-6"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px w-0 bg-accent-gradient transition-[width] duration-500 ease-soft group-hover:w-full"
              />
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-[11px] tracking-[0.2em] text-subtle-foreground transition-colors group-hover:text-secondary">
                  {area.number}
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-muted-foreground transition-colors duration-300 group-hover:border-secondary/30 group-hover:text-secondary">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>

              <h3 className="mt-6 text-lg font-semibold tracking-[-0.01em] text-foreground">
                {area.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {area.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {area.stack.map((tech) => (
                  <li key={tech} className="chip text-[11px]">
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default EngineeringFocus;

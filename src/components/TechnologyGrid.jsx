import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Metrics from './Metrics';
import { technologies } from '@/data/site';

const TechnologyGrid = () => (
  <section id="stack" className="relative border-y border-white/[0.06] bg-soft py-24 sm:py-32">
    <div className="page-shell">
      <SectionHeading
        eyebrow="Technologies"
        title="The tools I work with."
        lead="A focused stack used in shipped work — backend services, data stores, pipelines and production infrastructure."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {technologies.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="surface surface-hover rounded-xl p-5"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-subtle-foreground">
                {group.category}
              </h3>
              <span className="font-mono text-[10px] text-subtle-foreground">
                {String(group.items.length).padStart(2, '0')}
              </span>
            </div>

            <ul className="mt-4 space-y-2.5">
              {group.items.map((tech, j) => (
                <motion.li
                  key={tech}
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + j * 0.04 }}
                  className="flex items-center gap-3 text-sm text-foreground/85"
                >
                  <span
                    className="h-1 w-1 shrink-0 rounded-full bg-secondary/70"
                    aria-hidden="true"
                  />
                  {tech}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Verified metrics — derived from real project & certificate data */}
      <Metrics />
    </div>
  </section>
);

export default TechnologyGrid;

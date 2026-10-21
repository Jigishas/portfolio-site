import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useReducedMotion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Metrics from './Metrics';
import { technologies } from '@/data/site';

const TechnologyGrid = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="stack" className="relative border-y border-white/[0.06] bg-soft py-24 sm:py-32">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Technologies"
          title="The tools I work with."
          lead="A focused stack used in shipped work — backend services, data stores, pipelines and production infrastructure."
        />

        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-darken"
          animate={{ x: [0, -20], y: [0, -20] }}
          transition={{ duration: 30, repeat: Infinity, yoyo: true }}
        >
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-[rgba(139,124,255,0.1)] via-[rgba(34,211,238,0.08)] to-[rgba(139,124,255,0.1)]" />
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {technologies.map((group, i) => {
            const staggerDelay = reduceMotion ? 0 : i * 0.06;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: reduceMotion ? 1 : 0.3 }}
                transition={{ duration: reduceMotion ? 0.01 : 0.45, delay: staggerDelay, ease: [0.22, 1, 0.36, 1] }}
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
                  {group.items.map((tech, j) => {
                    const techDelay = reduceMotion ? 0 : 0.1 + j * 0.04;
                    return (
                      <motion.li
                        key={tech}
                        initial={{ opacity: 0, x: -6 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: reduceMotion ? 0.01 : 0.3, delay: techDelay }}
                        className="flex items-center gap-3 text-sm text-foreground/85"
                      >
                        <span
                          className="h-1 w-1 shrink-0 rounded-full bg-secondary/70"
                          aria-hidden="true"
                        />
                        {tech}
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Verified metrics — derived from real project & certificate data */}
        <motion.div className="mt-8 rounded-xl border border-white/[0.07] bg-card/50 p-6 sm:p-8">
          <Metrics />
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyGrid;

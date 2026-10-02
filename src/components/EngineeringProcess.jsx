import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { processSteps, engineeringPrinciples } from '@/data/site';

const EngineeringProcess = () => (
  <section id="process" className="relative border-y border-white/[0.06] bg-soft py-24 sm:py-32">
    <div className="page-shell">
      <SectionHeading
        eyebrow="From idea to production"
        title="How a problem becomes a running system."
        lead="A consistent path from requirements to operated production software — the same sequence whether the system is a marketplace, an API or a data pipeline."
      />

      {/* Steps */}
      <motion.ol
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
        className="mt-14 grid gap-px overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
      >
        {processSteps.map((step) => (
          <motion.li
            key={step.number}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="group relative bg-[#0b0b11] p-5 transition-colors duration-300 hover:bg-card sm:p-6"
          >
            <span
              className="absolute inset-x-0 top-0 h-px scale-x-0 bg-accent-gradient transition-transform duration-500 ease-soft group-hover:scale-x-100"
              aria-hidden="true"
            />
            <span className="font-mono text-[11px] tracking-[0.2em] text-subtle-foreground transition-colors group-hover:text-secondary">
              {step.number}
            </span>
            <h3 className="mt-4 text-base font-semibold tracking-[-0.01em] text-foreground">
              {step.title}
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </motion.li>
        ))}
      </motion.ol>

      {/* Operating principles */}
      <div className="mt-14 rounded-xl border border-white/[0.07] bg-card/50 p-5 sm:p-7">
        <p className="eyebrow">Operating principles</p>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {engineeringPrinciples.map((principle, i) => (
            <motion.li
              key={principle.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <h3 className="text-sm font-semibold tracking-[-0.01em] text-foreground">
                {principle.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default EngineeringProcess;

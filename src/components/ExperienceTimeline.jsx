import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { experience, education } from '@/data/site';

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const ExperienceTimeline = () => (
  <section id="experience" className="relative py-24 sm:py-32">
    <div className="page-shell">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked — and what I've built."
        lead="Production platforms, client products and engineering work across logistics, healthcare and independent practice."
      />

      {/* Work */}
      <motion.ol
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ staggerChildren: 0.1 }}
        className="mt-12 space-y-4"
      >
        {experience.map((role) => (
          <motion.li
            key={`${role.organization}-${role.period}`}
            variants={item}
            className="surface surface-hover grid gap-5 rounded-xl p-5 sm:p-7 lg:grid-cols-[190px_1fr] lg:gap-10"
          >
            {/* Rail */}
            <div className="flex items-start gap-3 lg:block">
              <span
                className="mt-1.5 hidden h-2 w-2 shrink-0 rounded-full bg-accent-gradient shadow-[0_0_12px_-1px_rgba(139,124,255,0.9)] lg:block"
                aria-hidden="true"
              />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-secondary">
                  {role.period}
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-subtle-foreground">
                  {role.type}
                </p>
                <p className="mt-2 flex items-center gap-1.5 text-[11px] text-subtle-foreground">
                  <MapPin className="h-3 w-3" aria-hidden="true" />
                  {role.location}
                </p>
              </div>
            </div>

            {/* Body */}
            <div>
              <h3 className="text-lg font-medium tracking-tight text-foreground sm:text-xl">
                {role.organization}
              </h3>
              <p className="mt-1 text-sm text-secondary">{role.role}</p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {role.summary}
              </p>

              {role.contributions.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {role.contributions.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-foreground/80">
                      <span
                        className="mt-2 h-px w-3 shrink-0 bg-accent-gradient"
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {role.stack.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {role.stack.map((tech) => (
                    <li key={tech} className="chip text-[11px]">
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.li>
        ))}
      </motion.ol>

      {/* Education & training */}
      <div className="mt-14 border-t border-white/[0.07] pt-8">
        <p className="eyebrow">Education &amp; training</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {education.map((entry) => (
            <div
              key={entry.organization}
              className="surface surface-hover rounded-xl p-5 sm:p-6"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle-foreground">
                {entry.period}
              </p>
              <h3 className="mt-3 text-base font-medium tracking-tight text-foreground">
                {entry.organization}
              </h3>
              <p className="mt-1 text-sm text-secondary">{entry.role}</p>
              <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
                {entry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceTimeline;

import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import ExperienceCard from './ExperienceCard';
import OrganizationMark from './OrganizationMark';
import { experience, education, experienceIntro } from '@/data/experience';

/**
 * Work experience — an interactive career overview.
 *
 * Accordion behaviour: only one card is expanded at a time. Opening another
 * card collapses the previous one in place, so the reader never loses their
 * place in the timeline.
 */
const ExperienceSection = () => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="page-shell">
        <SectionHeading
          eyebrow={experienceIntro.eyebrow}
          title={experienceIntro.title}
          lead={experienceIntro.lead}
        />

        {/* Role count strip */}
        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground">
          <span>{String(experience.length).padStart(2, '0')} roles</span>
          <span className="h-1 w-1 rounded-full bg-white/20" aria-hidden="true" />
          <span>Logistics · Healthcare · Independent</span>
          <span className="h-1 w-1 rounded-full bg-white/20" aria-hidden="true" />
          <span>Select a role to explore the work</span>
        </div>

        {/* Timeline */}
        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.08 }}
          className="mt-12 space-y-4 lg:space-y-5"
        >
          {experience.map((entry, i) => (
            <ExperienceCard
              key={entry.id}
              entry={entry}
              isOpen={openId === entry.id}
              onToggle={handleToggle}
              isLast={i === experience.length - 1}
            />
          ))}
        </motion.ol>

        {/* Education & training */}
        <div className="mt-16 border-t border-white/[0.07] pt-8">
          <p className="eyebrow">Education &amp; training</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {education.map((entry) => (
              <div key={entry.organization} className="surface surface-hover rounded-xl p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <OrganizationMark icon={entry.icon} size="h-9 w-9" />
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle-foreground">
                    {entry.period}
                  </p>
                </div>
                <h3 className="mt-3 text-base font-semibold tracking-tight text-foreground">
                  {entry.organization}
                </h3>
                <p className="mt-1 text-sm font-medium text-secondary">{entry.role}</p>
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
};

export default ExperienceSection;
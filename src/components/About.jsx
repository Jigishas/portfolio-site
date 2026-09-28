import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, Download } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { profile, links } from '@/data/site';

const focusRows = [
  {
    label: 'Backend',
    detail: 'APIs, authentication, business logic, schemas and services designed to stay maintainable.',
  },
  {
    label: 'Product',
    detail: 'Requirements translated into workflows and interfaces people can actually operate.',
  },
  {
    label: 'Data',
    detail: 'Pipelines, modelling and orchestration for data that needs to arrive dependably.',
  },
];

const About = () => (
  <section id="about" className="relative py-24 sm:py-32">
    <div className="page-shell grid gap-10 lg:grid-cols-12 lg:gap-14">
      {/* Portrait */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="lg:col-span-5"
      >
        <figure className="surface overflow-hidden rounded-2xl shadow-raised">
          <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10] lg:aspect-[4/3]">
            <img
              src="/jose%201.jpg"
              alt="Joseph Gachuru, software engineer"
              width={1123}
              height={1280}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-center grayscale-[35%] transition-[filter,transform] duration-700 ease-soft hover:scale-[1.02] hover:grayscale-0"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-accent-gradient opacity-[0.07] mix-blend-overlay"
              aria-hidden="true"
            />
          </div>

          <figcaption className="space-y-3 px-5 py-5 sm:px-6">
            <div>
              <p className="text-base font-medium tracking-tight text-foreground">{profile.name}</p>
              <p className="mt-0.5 text-[13px] text-secondary">
                {profile.role} · {profile.focus}
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-3 border-t border-white/[0.07] pt-4 text-[12px]">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle-foreground">
                  Based in
                </dt>
                <dd className="mt-1 flex items-center gap-1.5 text-foreground">
                  <MapPin className="h-3 w-3" aria-hidden="true" />
                  {profile.location}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle-foreground">
                  Focus
                </dt>
                <dd className="mt-1 text-foreground">Backend · Product · Data</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle-foreground">
                  Education
                </dt>
                <dd className="mt-1 text-foreground">BSc Software Engineering</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle-foreground">
                  Status
                </dt>
                <dd className="mt-1 flex items-center gap-1.5 text-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse-dot" aria-hidden="true" />
                  Open to work
                </dd>
              </div>
            </dl>
          </figcaption>
        </figure>
      </motion.div>

      {/* Copy */}
      <div className="lg:col-span-7">
        <SectionHeading
          eyebrow="About"
          title="Engineering with a product perspective."
        />

        <div className="mt-7 max-w-2xl space-y-5 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            I'm Joseph Gachuru — a software engineer focused on backend and product management. I
            approach software engineering from both a technical and product perspective, with a
            focus on building systems that are useful, maintainable and production-ready.
          </p>
          <p>
            My work spans backend architecture, REST APIs with role-based access control,
            relational schema design, deployment behind Linux/Nginx, and the data pipelines that
            support decision-making. I work across the full product lifecycle — from identifying
            the business problem and designing workflows to building the services, shipping the
            interface and operating the system in production.
          </p>
          <p>
            Recent work includes marketplace and delivery platforms serving customers, vendors,
            riders and administrators, alongside data engineering systems and applied AI products.
            I care most about problems where software has to hold up against real operational
            pressure.
          </p>
        </div>

        {/* Focus areas */}
        <dl className="mt-9 grid gap-px overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-3">
          {focusRows.map((row) => (
            <div key={row.label} className="bg-[#0b0b11] p-5">
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary">
                {row.label}
              </dt>
              <dd className="mt-2.5 text-[13px] leading-relaxed text-muted-foreground">
                {row.detail}
              </dd>
            </div>
          ))}
        </dl>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <Download className="h-4 w-4" aria-hidden="true" />
            Download resume
          </a>
          <a href={links.credly} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            Certifications
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;

import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';
import { generateWhatsAppURL } from '../utils/whatsapp';
import { profile, links } from '@/data/site';

const contactRows = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'WhatsApp', value: profile.phone, href: generateWhatsAppURL('+254743121169'), icon: MessageCircle },
  { label: 'Location', value: 'Kirinyaga, Kenya', href: null, icon: MapPin },
];

const ContactCTA = () => (
  <section id="contact" className="relative isolate overflow-hidden border-t border-white/[0.06] py-24 sm:py-32">
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div className="backdrop-grid absolute inset-0 opacity-70" />
      <div className="orb orb-a left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 opacity-70" />
      <div className="orb orb-b bottom-[-8rem] right-[10%] h-[320px] w-[320px]" />
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="page-shell max-w-4xl text-center"
    >
      <p className="eyebrow justify-center">Let's talk</p>

      <h2 className="mt-6 text-[clamp(1.95rem,5.2vw,3.15rem)] font-bold leading-[1.1] tracking-[-0.03em] text-foreground">
        Let's build something <span className="text-gradient">useful</span>.
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        Have a product, system or engineering problem worth solving? I'm available for software
        engineering work across backend, product and data systems.
      </p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <a href={`mailto:${profile.email}`} className="btn btn-primary group">
          <Mail className="h-4 w-4" aria-hidden="true" />
          Email me
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
        <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          <Github className="h-4 w-4" aria-hidden="true" />
          GitHub
        </a>
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          <Linkedin className="h-4 w-4" aria-hidden="true" />
          LinkedIn
        </a>
      </div>

      {/* Contact details */}
      <div className="mx-auto mt-12 grid max-w-3xl gap-px overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-3">
        {contactRows.map((row) => {
          const inner = (
            <>
              <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground">
                {row.label}
              </span>
              <span className="mt-2 flex items-center justify-center gap-2 break-all text-[13px] text-foreground">
                <row.icon className="h-3.5 w-3.5 shrink-0 text-secondary" aria-hidden="true" />
                {row.value}
              </span>
            </>
          );

          return row.href ? (
            <a
              key={row.label}
              href={row.href}
              target={row.href.startsWith('http') ? '_blank' : undefined}
              rel={row.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-[#0b0b11] p-5 text-center transition-colors duration-200 hover:bg-card"
            >
              {inner}
            </a>
          ) : (
            <div key={row.label} className="bg-[#0b0b11] p-5 text-center">
              {inner}
            </div>
          );
        })}
      </div>

      <p className="mt-8 flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse-dot" aria-hidden="true" />
        Available for engineering work
      </p>
    </motion.div>
  </section>
);

export default ContactCTA;

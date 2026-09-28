import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { profile, links, navLinks, socials } from '@/data/site';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] bg-soft">
      <div className="page-shell py-14">
        {/* Brand */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2.5">
              <span
                className="h-4 w-4 rounded-[5px] bg-accent-gradient"
                aria-hidden="true"
              />
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-foreground">
                {profile.name}
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Software Engineer · Backend · Product Manager
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-subtle-foreground">
              Building production APIs, marketplace systems and data infrastructure — from problem
              to production.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground">
              Sections
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2.5 sm:grid-cols-3 md:grid-cols-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="text-[13px] text-muted-foreground transition-colors hover:text-foreground">
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* Socials */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground">
              Profiles
            </p>
            <ul className="mt-4 space-y-2.5">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {social.label}
                    <ArrowUpRight
                      className="h-3.5 w-3.5 -translate-y-0.5 opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle-foreground">
            © {year} {profile.name}
          </p>
          <a
            href={links.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle-foreground transition-colors hover:text-foreground"
          >
            portfolio-site-phi-self.vercel.app
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

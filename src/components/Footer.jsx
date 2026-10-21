import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { profile, links } from '@/data/site';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] bg-soft h-[80px]">
      <div className="page-shell py-4">
        {/* Brand */}
            
         
        {/* Bottom bar */}
        <div className=" flex flex-col gap-3 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center sm:justify-between">
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

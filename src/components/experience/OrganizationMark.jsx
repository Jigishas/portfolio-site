import React from 'react';
import { Truck, Hospital, Briefcase, GraduationCap, BookOpen, Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';

/* Organization marks — one glanceable visual per entry. */
const organizationIcons = {
  truck: Truck,
  hospital: Hospital,
  briefcase: Briefcase,
  graduation: GraduationCap,
  book: BookOpen,
};

/**
 * Square organization mark: loads a real logo when one is supplied, otherwise
 * falls back to the entry's lucide icon (and Building2 as a generic default).
 */
const OrganizationMark = ({ icon, logo, size = 'h-10 w-10', className }) => {
  const Icon = organizationIcons[icon] || Building2;

  return (
    <span
      className={cn(
        'grid shrink-0 place-items-center overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] text-secondary',
        size,
        className,
      )}
      aria-hidden="true"
    >
      {logo ? (
        <img
          src={logo}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain p-1"
        />
      ) : (
        <Icon className="h-4 w-4" />
      )}
    </span>
  );
};

export default OrganizationMark;
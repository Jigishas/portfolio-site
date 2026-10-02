import React from 'react';
import { Layers, CheckCircle2 } from 'lucide-react';
import TechnologyTags from './TechnologyTags';

/**
 * Small editorial label used inside expanded cards:
 *
 *   KEY CONTRIBUTIONS ──────────────
 */
const DetailLabel = ({ children }) => (
  <h4 className="flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.26em] text-subtle-foreground sm:text-[11px]">
    <span>{children}</span>
    <span className="eyebrow-rule" aria-hidden="true" />
  </h4>
);

/**
 * Expanded content of an experience card:
 * ABOUT THE ROLE · KEY CONTRIBUTIONS · TECHNOLOGY · SELECTED WORK / SYSTEMS
 *
 * Every block renders only when the underlying data exists, so an entry with
 * no recorded detail never shows an empty heading.
 */
const ExpandedDetails = ({ entry }) => {
  const hasContributions = entry.contributions.length > 0;
  const hasTechnology = entry.technology.length > 0;
  const hasSystems = entry.systems.length > 0;

  return (
    <div className="mt-6 border-t border-white/[0.07] pt-6">
      <DetailLabel>About the role</DetailLabel>
      <p className="mt-3.5 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
        {entry.about}
      </p>

      {hasContributions && (
        <div className="mt-8">
          <DetailLabel>Key contributions</DetailLabel>
          <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {entry.contributions.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-foreground/85">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-secondary" aria-hidden="true" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {hasTechnology && (
        <div className="mt-8">
          <DetailLabel>Technology</DetailLabel>
          <TechnologyTags
            items={entry.technology}
            className="mt-4"
            label={`${entry.organization} technologies`}
          />
        </div>
      )}

      {hasSystems && (
        <div className="mt-8">
          <DetailLabel>Selected work / systems</DetailLabel>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {entry.systems.map((system) => (
              <li
                key={system.name}
                className="flex items-start gap-3 rounded-lg border border-white/[0.07] bg-white/[0.02] p-4 transition-colors duration-300 hover:border-primary/30 hover:bg-white/[0.035]"
              >
                <Layers className="mt-0.5 h-4 w-4 shrink-0 text-secondary/80" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-[13px] font-semibold text-foreground">
                    {system.name}
                  </span>
                  <span className="mt-1 block text-[12.5px] leading-relaxed text-muted-foreground">
                    {system.detail}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExpandedDetails;
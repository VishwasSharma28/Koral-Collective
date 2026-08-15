"use client";

import Link from "next/link";

import type { Experience } from "@/content/types";
import { cn } from "@/lib/cn";
import type { CardGeometry } from "../lib/circularGeometry";

type ExplorerCardProps = {
  experience: Experience;
  geometry: CardGeometry;
  onFocusCard?: () => void;
};

export function ExplorerCard({ experience, geometry, onFocusCard }: ExplorerCardProps) {
  const { x, y, scale, opacity, zIndex, isActive, isAdjacent } = geometry;

  const cardContent = (
    <article
      className={cn(
        "relative flex h-[380px] w-[280px] sm:w-[320px] flex-col justify-between rounded-[var(--radius-lg)] p-6 transition-all duration-200 shadow-lg text-left select-none",
        isActive
          ? "bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] ring-2 ring-[var(--color-brand-primary)] shadow-2xl"
          : "bg-[var(--color-bg-subtle)] text-[var(--color-text-muted)] border border-[var(--color-border-subtle)] hover:bg-[var(--color-bg-surface)]"
      )}
    >
      {/* Top Header Badge & Experience Status */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span
            className={cn(
              "inline-block rounded-[var(--radius-sm)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider",
              isActive
                ? "bg-[var(--color-brand-primary)] text-[var(--color-text-inverse)]"
                : "bg-[var(--color-border-subtle)] text-[var(--color-text-muted)]"
            )}
          >
            {isActive ? "Active Experience" : "Explorer Item"}
          </span>
          {experience.duration && (
            <span className="text-[11px] text-[var(--color-text-subtle)] font-medium">
              {experience.duration}
            </span>
          )}
        </div>

        {/* Card Title */}
        <h3
          className={cn(
            "font-serif font-medium leading-snug transition-colors",
            isActive ? "text-2xl text-[var(--color-text-primary)]" : "text-lg text-[var(--color-text-muted)]"
          )}
        >
          {experience.title}
        </h3>

        {/* Teaser Text */}
        <p className="text-xs text-[var(--color-text-muted)] leading-relaxed line-clamp-3">
          {experience.teaser}
        </p>
      </div>

      {/* Card Highlights */}
      {experience.highlights.length > 0 && (
        <ul className="space-y-1 my-2">
          {experience.highlights.slice(0, 2).map((highlight, i) => (
            <li key={i} className="text-[11px] text-[var(--color-text-subtle)] flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-[var(--color-brand-secondary)]" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Action Footer */}
      <div className="pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
        {isActive ? (
          <span className="inline-flex items-center text-xs font-semibold text-[var(--color-brand-primary)] group-hover:underline">
            Explore Details →
          </span>
        ) : (
          <span className="text-xs text-[var(--color-text-subtle)] group-hover:text-[var(--color-text-primary)]">
            Click to focus
          </span>
        )}
      </div>
    </article>
  );

  // Position transform style
  const transformStyle: React.CSSProperties = {
    position: "absolute",
    left: `${x}px`,
    top: `${y}px`,
    transform: `translate(-50%, -50%) scale(${scale})`,
    opacity,
    zIndex,
    transformOrigin: "center center",
    willChange: "transform, opacity",
    pointerEvents: opacity < 0.2 ? "none" : "auto",
  };

  // If card is active, clicking navigates to experience detail
  if (isActive) {
    return (
      <div style={transformStyle} className="group cursor-pointer">
        <Link
          href={`/experiences/${experience.slug}`}
          aria-label={`View detail for ${experience.title} (Active experience)`}
          aria-current="true"
        >
          {cardContent}
        </Link>
      </div>
    );
  }

  // If card is inactive or adjacent, clicking focuses/activates this card
  return (
    <div style={transformStyle} className="group cursor-pointer">
      <button
        type="button"
        onClick={onFocusCard}
        className="text-left focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] rounded-[var(--radius-lg)]"
        aria-label={`Focus ${experience.title} (${isAdjacent ? "Adjacent item" : "Background item"})`}
      >
        {cardContent}
      </button>
    </div>
  );
}

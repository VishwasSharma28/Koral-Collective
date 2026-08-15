"use client";

import { useEffect, useRef, useState } from "react";

import type { Experience } from "@/content/types";
import { Button } from "@/components/ui/Button";
import { calculateCardGeometry } from "../lib/circularGeometry";
import { ExplorerCard } from "./ExplorerCard";

type ExplorerStageProps = {
  experiences: Experience[];
  activeIndexFloat: number;
  activeCardIndex: number;
  isReducedMotion: boolean;
  onSelectIndex: (index: number) => void;
};

export function ExplorerStage({
  experiences,
  activeIndexFloat,
  activeCardIndex,
  isReducedMotion,
  onSelectIndex,
}: ExplorerStageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 520 });

  // Measure stage dimensions for geometry math
  useEffect(() => {
    if (!containerRef.current || typeof window === "undefined") return;

    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight || 520,
        });
      }
    };

    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(containerRef.current);
    updateDimensions();

    return () => resizeObserver.disconnect();
  }, []);

  const totalCards = experiences.length;
  const activeExperience = experiences[activeCardIndex] || experiences[0];

  // Reduced motion alternative: static grid layout
  if (isReducedMotion) {
    return (
      <div className="space-y-8 py-8">
        <div className="text-center space-y-2">
          <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-medium">
            Offering Experiences ({experiences.length})
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, idx) => {
            const isCurrent = idx === activeCardIndex;
            const geom = {
              x: 0,
              y: 0,
              scale: 1,
              opacity: 1,
              zIndex: 1,
              isActive: isCurrent,
              isAdjacent: false,
              angle: 0,
            };
            return (
              <div key={exp.id} className="relative">
                <ExplorerCard
                  experience={exp}
                  geometry={geom}
                  onFocusCard={() => onSelectIndex(idx)}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Active Experience Counter & Controls Header */}
      <div className="z-30 mb-4 flex flex-wrap items-center justify-between gap-4 w-full max-w-4xl px-4 text-xs font-medium text-[var(--color-text-muted)]">
        <div className="flex items-center space-x-2">
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-brand-primary)] animate-pulse" />
          <span>
            Active: <strong className="text-[var(--color-text-primary)]">{activeExperience?.title}</strong> ({activeCardIndex + 1} of {totalCards})
          </span>
        </div>

        {/* Previous / Next Manual Navigation Controls */}
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            disabled={activeCardIndex <= 0}
            onClick={() => onSelectIndex(Math.max(0, activeCardIndex - 1))}
            aria-label="Previous experience"
          >
            ← Prev
          </Button>
          <span className="text-[11px] text-[var(--color-text-subtle)]">
            Scroll or Use Arrow Keys
          </span>
          <Button
            variant="outline"
            size="sm"
            disabled={activeCardIndex >= totalCards - 1}
            onClick={() => onSelectIndex(Math.min(totalCards - 1, activeCardIndex + 1))}
            aria-label="Next experience"
          >
            Next →
          </Button>
        </div>
      </div>

      {/* 3D/2D Elliptical Stage Container */}
      <div
        ref={containerRef}
        className="relative w-full h-[520px] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-bg-base)]"
        role="region"
        aria-label="Rotating circular experience explorer"
      >
        {/* Background Visual Guide Rings */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10">
          <div className="w-[85%] h-[60%] rounded-full border-2 border-dashed border-[var(--color-brand-primary)]" />
        </div>

        {/* Render Cards along Ellipse */}
        {experiences.map((experience, idx) => {
          const geometry = calculateCardGeometry({
            index: idx,
            totalCards,
            activeIndex: activeIndexFloat,
            stageWidth: dimensions.width,
            stageHeight: dimensions.height,
          });

          return (
            <ExplorerCard
              key={experience.id}
              experience={experience}
              geometry={geometry}
              onFocusCard={() => onSelectIndex(idx)}
            />
          );
        })}
      </div>
    </div>
  );
}

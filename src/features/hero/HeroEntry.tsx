"use client";

import { useRef } from "react";

import { HeroStage } from "./HeroStage";
import { useHeroScroll } from "./useHeroScroll";

type HeroEntryProps = {
  /**
   * Configurable multiplier for track height relative to viewport height.
   * E.g., 2.5 = 250vh, 2.0 = 200vh, 3.0 = 300vh.
   * Allows tuning scroll distance after visual inspection.
   */
  scrollDistanceMultiplier?: number;
};

export function HeroEntry({ scrollDistanceMultiplier = 2.5 }: HeroEntryProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const { progress, isReducedMotion, skipHero } = useHeroScroll({
    trackRef,
  });

  const trackHeightVh = isReducedMotion ? "auto" : `${scrollDistanceMultiplier * 100}vh`;

  return (
    <div
      ref={trackRef}
      className="relative w-full"
      style={{ height: trackHeightVh }}
    >
      <div className={isReducedMotion ? "relative w-full" : "sticky top-0 h-screen w-full"}>
        <HeroStage
          progress={progress}
          isReducedMotion={isReducedMotion}
          onSkip={skipHero}
        />
      </div>
      <div id="home-content" className="absolute bottom-0 left-0 right-0 h-px pointer-events-none" />
    </div>
  );
}

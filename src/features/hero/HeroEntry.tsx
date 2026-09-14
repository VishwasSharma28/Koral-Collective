"use client";

import { HeroStage } from "./HeroStage";

type HeroEntryProps = {
  /**
   * Kept for API compatibility – ignored for the static hero.
   */
  scrollDistanceMultiplier?: number;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HeroEntry(_props: HeroEntryProps) {
  return <HeroStage />;
}

"use client";

import { useCallback, useRef } from "react";
import Link from "next/link";

import type { Experience, Offering } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { useCircularScroll } from "../hooks/useCircularScroll";
import { useExplorerKeyboard } from "../hooks/useExplorerKeyboard";
import { EXPLORER_CONFIG } from "../lib/explorerConfig";
import { ExplorerStage } from "./ExplorerStage";

type CircularExplorerProps = {
  offering: Offering;
  experiences: Experience[];
};

export function CircularExplorer({ offering, experiences }: CircularExplorerProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const totalCards = experiences.length;

  const { activeIndexFloat, activeCardIndex, isReducedMotion, setActiveCardIndex } =
    useCircularScroll({
      trackRef,
      totalCards,
    });

  const handleSelectIndex = useCallback(
    (index: number) => {
      setActiveCardIndex(index);
      // If user clicks a specific index, smoothly scroll the container to match that item's scroll progress
      if (trackRef.current && totalCards > 1) {
        const trackEl = trackRef.current;
        const rect = trackEl.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const totalScrollable = rect.height - viewportHeight;
        if (totalScrollable > 0) {
          const targetProgress = index / (totalCards - 1);
          const targetScrollY = window.scrollY + rect.top + targetProgress * totalScrollable;
          window.scrollTo({ top: targetScrollY, behavior: "smooth" });
        }
      }
    },
    [setActiveCardIndex, totalCards]
  );

  // Keyboard navigation
  useExplorerKeyboard({
    totalCards,
    activeCardIndex,
    onSelectIndex: handleSelectIndex,
  });

  const trackHeightVh = isReducedMotion
    ? "auto"
    : `${Math.max(EXPLORER_CONFIG.minTrackVh, totalCards * EXPLORER_CONFIG.vhPerCard)}vh`;

  return (
    <div ref={trackRef} className="relative w-full" style={{ height: trackHeightVh }}>
      <div className={isReducedMotion ? "relative py-12" : "sticky top-16 min-h-[calc(100vh-4rem)] flex flex-col justify-center py-8"}>
        <Container size="wide">
          {/* Header & Back Navigation */}
          <div className="mb-6 space-y-3 border-b border-[var(--color-border-subtle)] pb-6">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="text-xs font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] underline transition-colors"
              >
                ← Back to Home
              </Link>
              <span className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wider">
                Rotating Circular Explorer
              </span>
            </div>

            <h1 className="font-serif text-3xl font-medium text-[var(--color-text-primary)] sm:text-4xl">
              {offering.title}
            </h1>
            <p className="max-w-2xl text-sm text-[var(--color-text-muted)] leading-relaxed">
              {offering.description}
            </p>
          </div>

          {/* Explorer Stage */}
          <ExplorerStage
            experiences={experiences}
            activeIndexFloat={activeIndexFloat}
            activeCardIndex={activeCardIndex}
            isReducedMotion={isReducedMotion}
            onSelectIndex={handleSelectIndex}
          />
        </Container>
      </div>
    </div>
  );
}

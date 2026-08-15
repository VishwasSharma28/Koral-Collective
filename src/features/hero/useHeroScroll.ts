"use client";

import { useCallback, useEffect, useState } from "react";

type UseHeroScrollOptions = {
  trackRef: React.RefObject<HTMLElement | null>;
  disabled?: boolean;
};

export function useHeroScroll({ trackRef, disabled = false }: UseHeroScrollOptions) {
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Check reduced motion preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Update progress on scroll
  useEffect(() => {
    if (disabled || isReducedMotion || typeof window === "undefined") {
      setProgress(1);
      setIsCompleted(true);
      return;
    }

    let animationFrameId: number | null = null;

    const updateProgress = () => {
      if (!trackRef.current) return;

      const trackEl = trackRef.current;
      const rect = trackEl.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollable = rect.height - viewportHeight;

      if (totalScrollable <= 0) {
        setProgress(1);
        setIsCompleted(true);
        return;
      }

      const currentScroll = -rect.top;
      const rawProgress = currentScroll / totalScrollable;
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));

      setProgress(clampedProgress);
      setIsCompleted(clampedProgress >= 0.99);
    };

    const handleScrollOrResize = () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", handleScrollOrResize, { passive: true });
    window.addEventListener("resize", handleScrollOrResize, { passive: true });

    // Initial calculation
    updateProgress();

    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, [trackRef, disabled, isReducedMotion]);

  const skipHero = useCallback(() => {
    if (typeof window === "undefined" || !trackRef.current) return;
    const homeContentEl = document.getElementById("home-content");
    if (homeContentEl) {
      homeContentEl.scrollIntoView({ behavior: "smooth" });
    } else {
      const rect = trackRef.current.getBoundingClientRect();
      const targetScroll = window.scrollY + rect.bottom;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  }, [trackRef]);

  return {
    progress: isReducedMotion ? 1 : progress,
    isCompleted: isReducedMotion ? true : isCompleted,
    isReducedMotion,
    skipHero,
  };
}

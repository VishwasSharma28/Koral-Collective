"use client";

import { useEffect, useState } from "react";

type UseCircularScrollOptions = {
  trackRef: React.RefObject<HTMLElement | null>;
  totalCards: number;
  disabled?: boolean;
};

export function useCircularScroll({ trackRef, totalCards, disabled = false }: UseCircularScrollOptions) {
  const [activeIndexFloat, setActiveIndexFloat] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
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

  // Update rotation state on native scroll
  useEffect(() => {
    if (disabled || isReducedMotion || totalCards <= 0 || typeof window === "undefined") {
      return;
    }

    let animationFrameId: number | null = null;

    const updateScrollProgress = () => {
      if (!trackRef.current) return;

      const trackEl = trackRef.current;
      const rect = trackEl.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollable = rect.height - viewportHeight;

      if (totalScrollable <= 0) {
        setActiveIndexFloat(0);
        setActiveCardIndex(0);
        return;
      }

      const currentScroll = -rect.top;
      const rawProgress = Math.max(0, Math.min(1, currentScroll / totalScrollable));

      // Map progress [0, 1] to index range [0, totalCards - 1]
      const targetIndexFloat = rawProgress * (totalCards - 1);
      const nearestIntIndex = Math.round(targetIndexFloat);

      setActiveIndexFloat(targetIndexFloat);
      setActiveCardIndex(nearestIntIndex);
    };

    const handleScrollOrResize = () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(updateScrollProgress);
    };

    window.addEventListener("scroll", handleScrollOrResize, { passive: true });
    window.addEventListener("resize", handleScrollOrResize, { passive: true });

    updateScrollProgress();

    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, [trackRef, totalCards, disabled, isReducedMotion]);

  return {
    activeIndexFloat,
    activeCardIndex,
    isReducedMotion,
    setActiveCardIndex,
  };
}

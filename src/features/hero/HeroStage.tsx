"use client";

import { getSiteConfig } from "@/content";
import { HeroSkipButton } from "./HeroSkipButton";

type HeroStageProps = {
  progress: number;
  isReducedMotion: boolean;
  onSkip: () => void;
};

export function HeroStage({ progress, isReducedMotion, onSkip }: HeroStageProps) {
  const siteConfig = getSiteConfig();

  // Normalized animation calculations (0 -> 1)
  const portalRadius = isReducedMotion ? 150 : 18 + progress * 132; // 18% to 150%
  const imageScale = isReducedMotion ? 1 : 1 + progress * 0.12;
  const overlayOpacity = isReducedMotion ? 0.3 : Math.max(0.15, 0.65 - progress * 0.5);
  
  // Title scaling and positioning
  const titleScale = isReducedMotion ? 1 : 1.15 - progress * 0.15;
  const titleY = isReducedMotion ? 0 : -progress * 24; // subtle lift up
  
  // Tagline & story reveal timing (starts fading in around progress 0.3)
  const revealOpacity = isReducedMotion ? 1 : Math.max(0, Math.min(1, (progress - 0.25) / 0.5));
  const revealY = isReducedMotion ? 0 : 20 * (1 - revealOpacity);

  // Scroll indicator fade out (disappears early in scroll)
  const scrollIndicatorOpacity = isReducedMotion ? 0 : Math.max(0, 1 - progress * 3.5);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[var(--color-brand-primary)] text-[var(--color-text-inverse)] select-none">
      {/* Background Visual Portal Layer */}
      <div
        className="absolute inset-0 transition-transform duration-75 ease-out will-change-transform"
        style={{
          clipPath: `circle(${portalRadius}% at 50% 50%)`,
        }}
      >
        {/* Placeholder Atmospheric Coastal Graphic Composition */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#1b2b25] via-[#2d3732] to-[#3a4f45] transition-transform duration-100 ease-out"
          style={{
            transform: `scale(${imageScale})`,
          }}
        >
          {/* Decorative subtle texture/gradient rings */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-200 via-transparent to-transparent" />
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>
      </div>

      {/* Dimmed Overlay Scrim */}
      <div
        className="absolute inset-0 bg-[var(--color-brand-primary)] pointer-events-none transition-opacity duration-75"
        style={{ opacity: overlayOpacity }}
      />

      {/* Hero Skip Control */}
      {!isReducedMotion && progress < 0.9 && (
        <div className="absolute top-6 right-6 z-30 sm:top-8 sm:right-8">
          <HeroSkipButton
            onSkip={onSkip}
            className="px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
      )}

      {/* Centered Stage Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="max-w-4xl space-y-6">
          {/* Eyebrow Label */}
          <p
            className="text-xs font-medium uppercase tracking-[0.3em] text-white/70 transition-opacity"
            style={{
              opacity: isReducedMotion ? 1 : Math.max(0.4, 1 - progress * 1.5),
            }}
          >
            Immersive Experience
          </p>

          {/* Main Brand Title */}
          <h1
            className="font-serif text-5xl font-medium tracking-tight text-white sm:text-7xl lg:text-8xl transition-transform duration-75"
            style={{
              transform: `scale(${titleScale}) translateY(${titleY}px)`,
            }}
          >
            {siteConfig.name}
          </h1>

          {/* Reveal Content (Tagline & Description) */}
          <div
            className="space-y-4 transition-all duration-100"
            style={{
              opacity: revealOpacity,
              transform: `translateY(${revealY}px)`,
            }}
          >
            <p className="mx-auto max-w-2xl font-serif text-xl text-white/90 sm:text-2xl lg:text-3xl font-light">
              {siteConfig.tagline}
            </p>
            <p className="mx-auto max-w-xl text-sm text-white/75 sm:text-base font-sans">
              An experiential journey into regional heritage, café culture, and story-driven gatherings.
            </p>
          </div>
        </div>

        {/* Bottom Scroll Prompt Indicator */}
        {!isReducedMotion && (
          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 pointer-events-none transition-opacity duration-150"
            style={{ opacity: scrollIndicatorOpacity }}
          >
            <span className="text-[10px] uppercase tracking-widest text-white/70">
              Scroll to enter
            </span>
            <div className="h-8 w-5 rounded-full border border-white/40 p-1 flex justify-center">
              <div className="h-2 w-1 rounded-full bg-white animate-bounce" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

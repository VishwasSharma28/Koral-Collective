"use client";

import { HeroSkipButton } from "./HeroSkipButton";

type HeroStageProps = {
  progress: number;
  isReducedMotion: boolean;
  onSkip: () => void;
};

export function HeroStage({ progress, isReducedMotion, onSkip }: HeroStageProps) {
  // Title scaling and positioning
  const titleY = isReducedMotion ? 0 : -progress * 60; 
  const titleOpacity = isReducedMotion ? 1 : Math.max(0, 1 - progress * 2.5);
  
  // Reveal Content (Tagline & Description)
  const revealOpacity = isReducedMotion ? 1 : Math.max(0, 1 - progress * 3);
  const revealY = isReducedMotion ? 0 : -progress * 40;

  // Scroll indicator fade out
  const scrollIndicatorOpacity = isReducedMotion ? 0 : Math.max(0, 1 - progress * 4);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[var(--color-brand-primary)] text-[var(--color-text-inverse)] select-none">
      
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/Timeline%201.mov"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-[#261914]/45 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#261914]/55 via-transparent to-[#261914]/35 pointer-events-none" />

      {/* Hero Skip Control */}
      {!isReducedMotion && progress < 0.9 && (
        <div className="absolute top-6 right-6 z-50 sm:top-8 sm:right-8">
          <HeroSkipButton
            onSkip={onSkip}
            className="px-4 py-2 text-xs font-sans font-medium uppercase tracking-wider rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          />
        </div>
      )}

      {/* Centered Stage Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-start pt-[20vh] px-4 text-center">
        <div className="max-w-5xl space-y-8">
          {/* Main Brand Title */}
          <h1
            className="font-serif text-6xl font-medium tracking-tight text-[#F7F1E3] sm:text-7xl md:text-8xl lg:text-[8rem] transition-all duration-75 ease-out leading-none"
            style={{
              transform: `translateY(${titleY}px)`,
              opacity: titleOpacity
            }}
          >
            KORAL<br />COLLECTIVE
          </h1>

          {/* Reveal Content (Tagline & Description) */}
          <div
            className="space-y-4 transition-all duration-75 ease-out"
            style={{
              opacity: revealOpacity,
              transform: `translateY(${revealY}px)`,
            }}
          >
            <p className="mx-auto max-w-2xl font-serif text-2xl text-[#F7F1E3]/90 sm:text-3xl font-light">
              Experiencing Tulu Nadu, one walk at a time.
            </p>
          </div>
        </div>

        {/* Bottom Scroll Prompt Indicator */}
        {!isReducedMotion && (
          <div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-3 pointer-events-none transition-opacity duration-150 z-30"
            style={{ opacity: scrollIndicatorOpacity }}
          >
            <span className="text-[10px] uppercase tracking-widest text-white/70 font-sans">
              Scroll to discover
            </span>
            <div className="h-10 w-6 rounded-full border border-white/30 p-1 flex justify-center">
              <div className="h-2 w-1 rounded-full bg-[var(--color-accent)] animate-bounce" />
            </div>
          </div>
        )}
      </div>

      {/* Transition gradient to ivory section at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-bg-base)] to-transparent z-20"
        style={{
          opacity: isReducedMotion ? 1 : Math.min(1, progress * 2)
        }}
      />
    </div>
  );
}

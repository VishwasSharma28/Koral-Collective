"use client";

type HeroSkipButtonProps = {
  onSkip: () => void;
  className?: string;
};

export function HeroSkipButton({ onSkip, className }: HeroSkipButtonProps) {
  return (
    <button
      type="button"
      onClick={onSkip}
      className={className}
      aria-label="Skip intro and scroll directly to home content"
    >
      Skip intro ↓
    </button>
  );
}

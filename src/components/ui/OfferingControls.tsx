type OfferingControlsProps = {
  activeIndex: number;
  count: number;
  onSelect: (index: number) => void;
};

export function OfferingControls({ activeIndex, count, onSelect }: OfferingControlsProps) {
  const selectRelative = (direction: -1 | 1) => {
    onSelect((activeIndex + direction + count) % count);
  };

  return (
    <div className="mt-8 flex items-center justify-between gap-4 pt-5">
      <button
        type="button"
        onClick={() => selectRelative(-1)}
        aria-label="Previous trail"
        className="text-sm font-medium text-[var(--color-brand-primary)] underline underline-offset-4 transition-colors hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)]"
      >
        Previous
      </button>
      <div className="flex items-center gap-2" aria-label="Choose a trail">
        {Array.from({ length: count }, (_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Show trail ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
            className={`h-2.5 rounded-full border border-[var(--color-brand-primary)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] focus-visible:ring-offset-2 ${
              index === activeIndex
                ? "w-8 bg-[var(--color-brand-primary)]"
                : "w-2.5 bg-transparent opacity-45 hover:opacity-100"
            }`}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={() => selectRelative(1)}
        aria-label="Next trail"
        className="text-sm font-medium text-[var(--color-brand-primary)] underline underline-offset-4 transition-colors hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)]"
      >
        Next
      </button>
    </div>
  );
}

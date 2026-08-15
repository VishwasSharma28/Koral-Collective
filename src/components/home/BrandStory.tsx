import { Section } from "@/components/ui/Section";

export function BrandStory() {
  return (
    <Section
      as="section"
      aria-labelledby="brand-story-heading"
      className="border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)]"
    >
      <div className="max-w-3xl space-y-6">
        <h2
          id="brand-story-heading"
          className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-medium"
        >
          About Koral Collective
        </h2>
        <p className="text-2xl font-serif text-[var(--color-text-primary)] leading-snug sm:text-3xl">
          An experiential, story-driven digital presence celebrating heritage, cuisine, and community gathering.
        </p>
        <p className="text-base text-[var(--color-text-muted)] leading-relaxed sm:text-lg">
          Koral Collective prioritizes narrative, visual immersion, and discovery over transactional e-commerce. We curate half-day experiential journeys and café-centered cultural gatherings designed to introduce visitors to authentic local traditions.
        </p>
      </div>
    </Section>
  );
}

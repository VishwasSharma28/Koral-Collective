import { getSiteConfig } from "@/content";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function StaticHero() {
  const siteConfig = getSiteConfig();

  return (
    <Section
      as="section"
      aria-label="Hero section"
      className="border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-subtle)] py-20 sm:py-28"
    >
      <div className="max-w-3xl space-y-6">
        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-medium">
          Hero Layout Placeholder
        </p>
        <h1 className="text-4xl font-serif font-medium tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
          {siteConfig.name}
        </h1>
        <p className="text-lg text-[var(--color-text-muted)] leading-relaxed sm:text-xl">
          {siteConfig.tagline}
        </p>
        <div className="pt-4 flex flex-wrap gap-4">
          <Button href="/offerings" variant="primary" size="lg">
            Explore Offerings
          </Button>
          <Button href="/about" variant="outline" size="lg">
            Our Story
          </Button>
        </div>
      </div>
    </Section>
  );
}

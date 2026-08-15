import { Section } from "@/components/ui/Section";

export function SupportingStory() {
  const pillars = [
    {
      title: "Coastal & Natural",
      description: "Rooted in open space, horizon lines, and organic textures inspired by regional coastal landscapes.",
    },
    {
      title: "Premium & Restrained",
      description: "Thoughtful whitespace, restrained motion, quality typography, and uncluttered composition.",
    },
    {
      title: "Human & Artistic",
      description: "Hand-crafted details, warm narratives, and editorial moments that connect visitors with people and place.",
    },
  ];

  return (
    <Section
      as="section"
      aria-labelledby="pillars-heading"
      className="bg-[var(--color-bg-base)]"
    >
      <div className="space-y-8">
        <div>
          <h2
            id="pillars-heading"
            className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-medium"
          >
            Core Experience Pillars
          </h2>
          <p className="mt-2 text-2xl font-serif text-[var(--color-text-primary)] sm:text-3xl">
            Storytelling & Design Intent
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] p-6 space-y-2"
            >
              <h3 className="font-serif font-medium text-lg text-[var(--color-text-primary)]">
                {pillar.title}
              </h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

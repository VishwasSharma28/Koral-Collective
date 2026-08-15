import Link from "next/link";

import { getAllOfferings } from "@/content";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function OfferingSelector() {
  const offerings = getAllOfferings();

  return (
    <Section
      id="offerings"
      as="section"
      aria-labelledby="offerings-heading"
      className="border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-base)]"
    >
      <div className="space-y-8">
        <div>
          <h2
            id="offerings-heading"
            className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-medium"
          >
            Primary Offerings
          </h2>
          <p className="mt-2 text-2xl font-serif text-[var(--color-text-primary)] sm:text-3xl">
            Choose an offering to explore
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {offerings.map((offering) => (
            <article
              key={offering.id}
              className="flex flex-col justify-between rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] p-8 transition-shadow hover:shadow-md"
            >
              <div className="space-y-4">
                <span className="inline-block rounded-[var(--radius-sm)] bg-[var(--color-bg-subtle)] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)]">
                  Offering Portal
                </span>
                <h3 className="text-2xl font-serif font-medium text-[var(--color-text-primary)]">
                  {offering.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {offering.shortDescription}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
                <Button href={`/offerings/${offering.slug}`} variant="outline" size="sm">
                  View Offering →
                </Button>
                <Link
                  href={`/offerings/${offering.slug}`}
                  className="text-xs font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] underline"
                >
                  Circular Explorer Preview
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

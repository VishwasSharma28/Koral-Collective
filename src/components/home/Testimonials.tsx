import { getTestimonialsContent } from "@/content";
import { Section } from "@/components/ui/Section";

export function Testimonials() {
  const testimonials = getTestimonialsContent();

  return (
    <Section
      as="section"
      aria-labelledby="testimonials-heading"
      className="border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)]"
    >
      <div className="space-y-8">
        <div>
          <h2
            id="testimonials-heading"
            className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-medium"
          >
            Community & Visitor Voices
          </h2>
          <p className="mt-2 text-2xl font-serif text-[var(--color-text-primary)] sm:text-3xl">
            {testimonials.title}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.items.map((item) => (
            <blockquote
              key={item.id}
              className="flex flex-col justify-between rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] bg-[var(--color-bg-subtle)] p-6"
            >
              <p className="text-sm italic text-[var(--color-text-primary)] leading-relaxed">
                “{item.quote}”
              </p>
              <footer className="mt-4 pt-3 border-t border-[var(--color-border-subtle)] text-xs text-[var(--color-text-muted)]">
                <cite className="not-italic font-medium text-[var(--color-text-primary)]">
                  {item.author}
                </cite>
                {item.roleOrLocation ? (
                  <span className="block text-[var(--color-text-muted)]">{item.roleOrLocation}</span>
                ) : null}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </Section>
  );
}

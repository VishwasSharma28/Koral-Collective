import { getAllOfferings } from "@/content";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

const visualAreas = [
  { label: "FIELD NOTES", className: "bg-[#718255]" },
  { label: "LOCAL TABLES", className: "bg-[#a9503e]" },
  { label: "COASTAL LIGHT", className: "bg-[#b28a45]" },
];

export function OfferingSelector() {
  const offerings = getAllOfferings();

  return (
    <Section
      id="offerings"
      as="section"
      aria-labelledby="offerings-heading"
      className="border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-base)]"
    >
      <div className="space-y-10">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-brand-primary)]">
            Our experiences
          </p>
          <h2
            id="offerings-heading"
            className="mt-3 text-4xl font-serif font-medium leading-none text-[var(--color-text-primary)] sm:text-6xl"
          >
            Ways to experience Tulu Nadu, one walk at a time.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {offerings.map((offering, index) => (
            <article key={offering.id} className="group border-t border-[var(--color-border-strong)] pt-4">
              <div className="grid gap-5 sm:grid-cols-[1.3fr_0.7fr]">
                <div>
                  <div className="relative min-h-64 overflow-hidden bg-[#5f7250] shadow-sm sm:min-h-80">
                    <div className="absolute inset-0 bg-[linear-gradient(145deg,#d8c79c_0%,#8aa05f_45%,#425943_100%)]" />
                    <div className="absolute -bottom-12 -left-6 h-64 w-40 rotate-12 opacity-70">
                      <div className="absolute bottom-0 left-1/2 h-full w-5 -translate-x-1/2 rounded-full bg-[#40553f]" />
                      <div className="absolute left-1/2 top-2 h-20 w-52 -translate-x-1/2 rounded-[50%] border-t-8 border-[#40553f]" />
                      <div className="absolute left-1/2 top-8 h-20 w-52 -translate-x-1/2 rotate-45 rounded-[50%] border-t-8 border-[#40553f]" />
                    </div>
                    <div className="absolute bottom-0 right-0 h-1/2 w-4/5 bg-[#6f8b55]/70 [clip-path:polygon(0_35%,100%_0,100%_100%,0_100%)]" />
                    <p className="absolute bottom-4 left-4 text-[10px] font-medium tracking-[0.2em] text-[#f3e8d2]">
                      {index === 0 ? "COASTAL FIELD NOTES" : "A DAY IN TULU NADU"}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-medium tracking-[0.2em] text-[var(--color-text-subtle)]">
                      0{index + 1} / 02
                    </p>
                    <h3 className="mt-3 text-3xl font-serif font-medium uppercase leading-none text-[var(--color-text-primary)] sm:text-4xl">
                      {index === 0 ? "City Walks" : "Half-Day Experiences"}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
                      {offering.shortDescription}
                    </p>
                  </div>
                  <div className="mt-8 grid grid-cols-3 gap-2">
                    {visualAreas.map((area, areaIndex) => (
                      <div key={area.label} className={`relative aspect-square overflow-hidden ${area.className} ${areaIndex === 1 ? "opacity-80" : ""}`}>
                        <span className="absolute inset-x-1 bottom-1 text-[8px] font-medium leading-tight tracking-wider text-[#f3e8d2]">
                          {area.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-end border-t border-[var(--color-border-subtle)] pt-6">
          <Button href="/offerings" variant="primary" size="md">
            Explore offerings →
          </Button>
        </div>
      </div>
    </Section>
  );
}

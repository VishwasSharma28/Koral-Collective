"use client";

import Image from "next/image";
import { useState } from "react";

import { Section } from "@/components/ui/Section";

type Trail = {
  name: string;
  duration: string;
  price: string;
  description: string;
  highlights: string[];
  note?: string;
  leader?: string;
  leaderHref?: string;
  pictogram: string;
  position: { left: string; top: string };
};

const trails: Trail[] = [
  { name: "Kallianpur", duration: "2 hours", price: "₹1600 or $25/per person", description: "From Neolithic settlement to Portuguese outpost to medieval shrine complex, Kallianpur weaves together five millennia of unbroken history, living faith, and royal inscription.", highlights: ["An early-historic stone deity of Hariti, a relic of long-lost Buddhist heritage", "Alupa-period temple pillars and shrine foundations", "A hero stone and a sati shrine", "Vasco da Gama and the Portuguese connection", "The Church of Nossa Senhora de Milagres", "The Deportation of 1784", "The Miracle of the Bees", "Living memory lanes"], leader: "Leslie J Dias", leaderHref: "/team", pictogram: "/images/illustrations/map-logo/IMG_4267.png", position: { left: "20.2%", top: "37.2%" } },
  { name: "Barkur", duration: "6 hours", price: "₹4500 or $75/per person", description: "From Alupa dynasty capital to ancient global trading port to a jewel in the Vijayanagara empire, Barakanur—today’s Barkur—is a heritage town of royal legacy, lost empires, and timeless stone architecture on the banks of the Seetha River.", highlights: ["Capital city for 400 years during the Alupa reign", "Global trade centre with connections to Rome and Greece", "The Ten Traditional Quarters", "The Legend of 365 Stone Temples", "The Jain Temple Complex (Kathale Basadi)"], note: "*Transport by chartered bus is provided between stops. Walking is required at each location.", pictogram: "/images/illustrations/map-logo/IMG_4270.png", position: { left: "44.7%", top: "34.2%" } },
  { name: "Basrur", duration: "6 hours", price: "₹4500 or $75/per person", description: "From Vijayanagara trading port to colonial battleground to tranquil village on the banks of the Varahi River, Barcelore—known today as Basrur—is a historic hamlet of global trade, royal ambition, and enduring past.", highlights: ["Maritime trade hub connecting Arabia, China, Europe and coveted by the Portuguese, Dutch, and British", "Target of Chhatrapati Shivaji’s historic first naval expedition", "The historic merchant quarters (Keris)", "The Shree Mahatobar Mahalingeshwara Temple"], note: "*Transport by chartered bus is provided between stops. Walking is required at each location.", pictogram: "/images/illustrations/map-logo/IMG_4276.png", position: { left: "71.8%", top: "75.2%" } },
  { name: "Shirva", duration: "6 hours", price: "₹4500 or $75/per person", description: "From prehistoric megalith to medieval palace to land of the living folk epic, Shirva—the agrarian hinterland of Tulunadu— is a rarefied world of ancient ritual, enduring stone, and unbroken tradition.", highlights: ["The megalithic dolmen at Palli", "The Nadibettu Palace", "The picturesque landscape of Nandalike", "The setting of the Siri Paddana (folk epic)"], note: "*Transport by chartered bus is provided between stops. Walking is required at each location.", pictogram: "/images/illustrations/map-logo/IMG_4275.png", position: { left: "25.3%", top: "63.1%" } },
  { name: "Moodabidri", duration: "6 hours", price: "₹4500 or $75/per person", description: "From age-old bamboo groves to the epicentre of Jainism to living heritage town, Moodbidri—the Jain Kashi of the South—is a site of sacred stone, royal patronage, and monolithic magnificence.", highlights: ["Royal legacy of the Alupas, the Vijayanagara empire, and the Chowtadynasty", "The 18 historic Jain shrines", "The Thousand Pillar Temple (The Saavira Kambada Basadi)", "Home to ancient literary traditions such as the Dhavala palm-leaf manuscripts"], note: "*Transport by chartered bus is provided between stops. Walking is required at each location.", pictogram: "/images/illustrations/map-logo/IMG_4270.png", position: { left: "54.2%", top: "63.1%" } },
  { name: "Karkala", duration: "6 hours", price: "₹4500 or $75/per person", description: "From black granite capital to Jain pilgrimage centre to living monument of medieval stonecraft, Karikallu—today’s Karkala—is a landmark of Jain culture, philosophy, and immutable artisan traditions.", highlights: ["Capital of the Bhairarasa Palegars", "The 42-foot monolithic statue of Lord Gommateshwara (Bahubali)", "The Four-Faced Temple (The Chaturmukha Basadi)", "The Shree Venkatramana Temple", "The bazaars dotted with shops run by GSB traders"], note: "*Transport by chartered bus is provided between stops. Walking is required at each location.", pictogram: "/images/illustrations/map-logo/IMG_4274.png", position: { left: "84.1%", top: "53.4%" } },
];

export function OfferingExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTrail = trails[activeIndex];
  const selectTrail = (index: number) => setActiveIndex((index + trails.length) % trails.length);

  return (
    <Section id="offerings" as="section" aria-labelledby="offerings-heading" className="border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-base)]">
      <div className="space-y-10">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-brand-primary)]">Our offerings</p>
          <h1 id="offerings-heading" className="mt-3 text-4xl font-serif font-medium leading-none text-[var(--color-text-primary)] sm:text-6xl">Walking trails of Tulunadu.</h1>
        </div>
        <div className="grid items-start gap-8 xl:grid-cols-[minmax(0,1.15fr)_minmax(24rem,0.85fr)] xl:gap-12">
          <div className="relative w-full overflow-hidden border border-[var(--color-border-strong)] bg-[#d7bd8c]">
            <Image src="/images/illustrations/tulunadu-offering-map.png" alt="Illustrated map showing the six Koral Collective walking trail locations" width={1536} height={1024} className="block h-auto w-full" priority />
            <div className="absolute inset-0" aria-label="Walking trail locations">
              {trails.map((trail, index) => {
                const isActive = index === activeIndex;
                return <button key={trail.name} type="button" onClick={() => selectTrail(index)} aria-label={`Select ${trail.name} trail`} aria-pressed={isActive} className={`absolute flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 bg-[#f3e8d2]/90 p-1.5 shadow-sm transition duration-200 hover:scale-110 hover:bg-[#fff8eb] focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#742c2a] focus-visible:ring-offset-2 sm:h-12 sm:w-12 ${isActive ? "scale-110 border-[#742c2a] ring-4 ring-[#742c2a]/25" : "border-[#806553]/80 opacity-90"}`} style={trail.position}><Image src={trail.pictogram} alt="" width={350} height={350} className="h-full w-full object-contain" /></button>;
              })}
            </div>
          </div>
          <article className="border-t border-[var(--color-border-strong)] pt-5" aria-live="polite">
            <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-brand-primary)]">{activeIndex + 1} / {trails.length}</p><h2 className="mt-3 text-4xl font-serif font-medium leading-none text-[var(--color-text-primary)] sm:text-5xl">{activeTrail.name} trail</h2><p className="mt-4 text-sm font-medium text-[var(--color-text-muted)]">{activeTrail.duration} | {activeTrail.price}</p></div><Image src={activeTrail.pictogram} alt="" width={350} height={350} className="h-14 w-14 shrink-0 object-contain" /></div>
            <p className="mt-6 text-base leading-relaxed text-[var(--color-text-muted)]">{activeTrail.description}</p>
            <p className="mt-6 text-sm font-semibold text-[var(--color-text-primary)]">Highlights along the trail:</p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{activeTrail.highlights.map((highlight) => <li key={highlight} className="flex gap-2"><span aria-hidden="true">•</span><span>{highlight}</span></li>)}</ul>
            {activeTrail.note ? <p className="mt-6 text-xs italic leading-relaxed text-[var(--color-text-subtle)]">{activeTrail.note}</p> : null}
            {activeTrail.leader ? <p className="mt-6 text-sm text-[var(--color-text-muted)]">Walk led by <a href={activeTrail.leaderHref} target="_blank" rel="noreferrer" className="font-bold text-[var(--color-brand-primary)] underline underline-offset-4">{activeTrail.leader}</a>, Architect and Teacher</p> : null}
            <div className="mt-8 flex items-center justify-between border-t border-[var(--color-border-subtle)] pt-5"><button type="button" onClick={() => selectTrail(activeIndex - 1)} aria-label="Previous trail" className="text-sm font-medium text-[var(--color-brand-primary)] underline underline-offset-4">Previous</button><div className="flex items-center gap-2" aria-label="Choose a trail">{trails.map((trail, index) => <button key={trail.name} type="button" onClick={() => selectTrail(index)} aria-label={`Show ${trail.name} trail`} aria-current={index === activeIndex ? "true" : undefined} className={`h-2.5 w-2.5 rounded-full border border-[var(--color-brand-primary)] transition ${index === activeIndex ? "bg-[var(--color-brand-primary)]" : "bg-transparent opacity-45 hover:opacity-100"}`} />)}</div><button type="button" onClick={() => selectTrail(activeIndex + 1)} aria-label="Next trail" className="text-sm font-medium text-[var(--color-brand-primary)] underline underline-offset-4">Next</button></div>
          </article>
        </div>
      </div>
    </Section>
  );
}
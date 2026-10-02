import Image from "next/image";

import { Section } from "@/components/ui/Section";
import { getAllExperiences, getSiteConfig } from "@/content";

import { FootstepTrail } from "./FootstepTrail";

const cityWalkSlugs = ["kallianpur", "ratha-beedi"];
const excursionSlugs = ["barkur", "shirva", "moodabidri"];

export function WalkWithUs() {
  const siteConfig = getSiteConfig();
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.phoneE164}`;
  const experiences = getAllExperiences();
  const cityWalks = cityWalkSlugs.flatMap((slug) => experiences.filter((experience) => experience.slug === slug));
  const excursions = excursionSlugs.flatMap((slug) => experiences.filter((experience) => experience.slug === slug));

  return (
    <Section
      as="section"
      aria-labelledby="walk-with-us-heading"
      className="border-b border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)] py-14 text-[var(--color-text-inverse)] sm:py-18 lg:py-24"
    >
      <FootstepTrail />

      <div className="relative z-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_22rem]">
        <div>
          <h2 id="walk-with-us-heading" className="text-5xl font-serif font-medium leading-none text-[#f3e8d2] sm:text-6xl lg:text-7xl">
            Walk with us
          </h2>

          <div className="mt-12 space-y-10 sm:mt-14 sm:space-y-12">
            <ScheduleGroup title="City Walks" experiences={cityWalks} />
            <ScheduleGroup title="6-hour Excursions" experiences={excursions} />
          </div>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group self-end border border-[#d7ae78]/60 p-5 transition-colors hover:bg-[#f3e8d2]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3e8d2] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-brand-primary)] sm:max-w-xs lg:justify-self-end"
          aria-label="Connect with the koral collective on WhatsApp"
        >
          <div className="flex justify-end">
            <svg className="h-5 w-5 text-[#e2b477] transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5h5v5M19 5l-9 9" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" />
            </svg>
          </div>
          <div className="mx-auto mt-3 aspect-square w-44 bg-[#f3e8d2] p-2 sm:w-52">
            <Image
              src="/images/branding/whatsapp-qr.png"
              alt="Scan to connect with the koral collective on WhatsApp"
              width={520}
              height={520}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <p className="mt-4 text-center text-sm leading-snug text-[#f3e8d2]">
            Reach out for bookings<br />and queries
          </p>
        </a>
      </div>
    </Section>
  );
}

type ScheduleGroupProps = {
  title: string;
  experiences: ReturnType<typeof getAllExperiences>;
};

function ScheduleGroup({ title, experiences }: ScheduleGroupProps) {
  const headingId = `${title.toLowerCase().replaceAll(" ", "-")}-heading`;

  return (
    <section aria-labelledby={headingId}>
      <h3 id={headingId} className="font-sans text-xl font-semibold text-[#f3e8d2] sm:text-2xl">
        {title}
      </h3>
      <div className="mt-5 grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {experiences.map((experience) => (
          <div key={experience.id} className="border-t border-[#d7ae78]/45 pt-3">
            <p className="font-sans text-base font-semibold text-[#f3e8d2] sm:text-lg">{experience.title} Trail</p>
            <p className="mt-1 font-sans text-sm text-[#d8c09e]">{experience.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

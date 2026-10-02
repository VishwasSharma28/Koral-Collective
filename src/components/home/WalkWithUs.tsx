import Image from "next/image";

import { Section } from "@/components/ui/Section";
import { getSiteConfig } from "@/content";

import { FootstepTrail } from "./FootstepTrail";

const cityWalks = [
  {
    title: "Kallianpur Trail",
    times: ["Oct 2nd: 7.00 am to 9.00 am", "Oct 4th: 4.30 pm to 6.30 pm"],
  },
  {
    title: "Ratha Beedi Trail",
    times: [
      "Oct 2nd: 4.30 pm to 6.30 pm",
      "Oct 3rd: 5.00 pm to 7.00 pm",
      "Oct 4th: 8.00 am to 10.00 am",
    ],
  },
];

const excursions = [
  {
    title: "Barkur Trail",
    times: ["Oct 3rd: 8.30 am to 2.30 pm"],
  },
  {
    title: "Shirva trail",
    times: ["Oct 3rd: 8.30 am to 2.30 pm"],
  },
  {
    title: "Moodbidri Trail",
    times: ["Oct 4th: 9.00 am to 3.00 pm"],
  },
];

export function WalkWithUs() {
  const siteConfig = getSiteConfig();
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.phoneE164}`;

  return (
    <Section
      as="section"
      aria-labelledby="walk-with-us-heading"
      className="border-b border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)] py-14 text-[var(--color-text-inverse)] sm:py-18 lg:py-24"
    >
      <FootstepTrail>
        <div className="relative z-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_22rem]">
          <div>
            <h2
              id="walk-with-us-heading"
              className="text-5xl font-serif font-medium leading-none text-[#f3e8d2] sm:text-6xl lg:text-7xl"
            >
              Walk with us
            </h2>

            <div className="mt-12 space-y-12 sm:mt-14 sm:space-y-14">
              <ScheduleGroup title="City Walks" experiences={cityWalks} />
              <ScheduleGroup title="6-hour Excursions" experiences={excursions} />
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto w-full max-w-[20rem] self-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3e8d2] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-brand-primary)] lg:justify-self-end"
            aria-label="Connect with the koral collective on WhatsApp"
          >
            <div className="aspect-square w-full bg-[#f3e8d2] p-3">
              <Image
                src="/images/branding/whatsapp-qr.png"
                alt="Scan to connect with the koral collective on WhatsApp"
                width={520}
                height={520}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <p className="mt-5 text-center font-sans text-base leading-snug text-[#f3e8d2] sm:text-lg">
              Reach out for bookings and queries
            </p>
          </a>
        </div>
      </FootstepTrail>
    </Section>
  );
}

type ScheduledWalk = {
  title: string;
  times: string[];
};

type ScheduleGroupProps = {
  title: string;
  experiences: ScheduledWalk[];
};

function ScheduleGroup({ title, experiences }: ScheduleGroupProps) {
  const headingId = `${title.toLowerCase().replaceAll(" ", "-")}-heading`;

  return (
    <section aria-labelledby={headingId}>
      <h3
        id={headingId}
        className="font-sans text-2xl font-bold text-[#f3e8d2] sm:text-3xl"
      >
        {title}
      </h3>
      <div className="mt-6 grid gap-x-10 gap-y-8 sm:grid-cols-2 sm:gap-y-9">
        {experiences.map((experience) => (
          <div key={experience.title}>
            <p className="font-sans text-lg font-semibold text-[#f3e8d2] sm:text-xl">
              {experience.title}
            </p>
            <div className="mt-2 space-y-1 font-sans text-base leading-relaxed text-[#d8c09e] sm:text-lg">
              {experience.times.map((time) => (
                <p key={time}>{time}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

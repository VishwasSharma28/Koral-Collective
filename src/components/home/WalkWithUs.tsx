import Image from "next/image";

import { Section } from "@/components/ui/Section";
import { getAllExperiences, getSiteConfig } from "@/content";

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
<<<<<<< HEAD
      className="relative isolate overflow-hidden border-b border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)] px-4 py-6 text-[var(--color-text-inverse)] sm:px-6 sm:py-10 lg:px-8 lg:py-12"
    >
      {/* Existing walking-feet effect — untouched */}
      <FootstepTrail />

      {/* Simple woven thread border */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-2 z-[1] sm:inset-5 lg:inset-7"
      >
        <svg
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          {/* Subtle thread shadow */}
          <rect
            x="4"
            y="4"
            width="992"
            height="592"
            fill="none"
            stroke="#3A2117"
            strokeWidth="7"
            opacity="0.45"
          />

          {/* Main thread */}
          <rect
            x="7"
            y="7"
            width="986"
            height="586"
            fill="none"
            stroke="#A86645"
            strokeWidth="4"
          />

          {/* Fine highlight */}
          <rect
            x="8"
            y="8"
            width="984"
            height="584"
            fill="none"
            stroke="#C58A62"
            strokeWidth="1.25"
            opacity="0.75"
          />

          {/* Small woven knots */}
          <g fill="#A86645">
            <circle cx="7" cy="7" r="4" />
            <circle cx="993" cy="7" r="4" />
            <circle cx="7" cy="593" r="4" />
            <circle cx="993" cy="593" r="4" />
          </g>

          <g fill="#C58A62">
            <circle cx="7" cy="7" r="1.5" />
            <circle cx="993" cy="7" r="1.5" />
            <circle cx="7" cy="593" r="1.5" />
            <circle cx="993" cy="593" r="1.5" />
          </g>

          {/* Tiny stitch marks */}
          <g
            stroke="#C58A62"
            strokeWidth="1.75"
            strokeLinecap="round"
            opacity="0.75"
          >
            <path d="M 70 7 H 84" />
            <path d="M 916 7 H 930" />

            <path d="M 70 593 H 84" />
            <path d="M 916 593 H 930" />

            <path d="M 7 70 V 84" />
            <path d="M 7 516 V 530" />

            <path d="M 993 70 V 84" />
            <path d="M 993 516 V 530" />
          </g>
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        <h2
          id="walk-with-us-heading"
          className="font-serif text-4xl font-medium leading-none text-[#f3e8d2] sm:text-6xl lg:text-7xl"
        >
          Walk with us
        </h2>

=======
      className="border-b border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)] py-14 text-[var(--color-text-inverse)] sm:py-18 lg:py-24"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_22rem]">
        <div>
          <h2 id="walk-with-us-heading" className="text-5xl font-serif font-medium leading-none text-[#f3e8d2] sm:text-6xl lg:text-7xl">
            Walk with us
          </h2>

          <div className="mt-12 space-y-10 sm:mt-14 sm:space-y-12">
            <ScheduleGroup title="City Walks" experiences={cityWalks} />
            <ScheduleGroup title="6-hour Excursions" experiences={excursions} />
          </div>
        </div>

>>>>>>> 3a27c9c (refine homepage and offerings UI)
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
<<<<<<< HEAD
          className="group mt-5 block w-full max-w-[270px] border border-[#d7ae78]/60 bg-[var(--color-brand-primary)] p-3 shadow-[7px_7px_0_#5A3828] transition-transform duration-300 hover:-translate-y-1 sm:mt-8 sm:max-w-sm sm:p-5 sm:shadow-[10px_10px_0_#5A3828]"
          aria-label="Connect with the koral collective on WhatsApp"
        >
          <div className="flex justify-end text-[#f3e8d2]">
            <span className="text-lg text-[#e2b477] transition-transform duration-300 group-hover:translate-x-1 sm:text-xl">
              ↗
            </span>
          </div>

          <div className="mx-auto mt-1 aspect-square w-36 overflow-hidden bg-[#f3e8d2] p-2 sm:mt-2 sm:w-52">
=======
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
>>>>>>> 3a27c9c (refine homepage and offerings UI)
            <Image
              src="/images/branding/whatsapp-qr.png"
              alt="Scan to connect with the koral collective on WhatsApp"
              width={520}
              height={520}
              className="h-full w-full object-contain"
              priority
            />
          </div>
<<<<<<< HEAD

          <p className="mt-2 text-[9px] font-medium tracking-[0.14em] text-[#d8c09e] sm:mt-3 sm:text-[10px] sm:tracking-[0.18em]">
            Scan to start a conversation
=======
          <p className="mt-4 text-center text-sm leading-snug text-[#f3e8d2]">
            Reach out for bookings<br />and queries
>>>>>>> 3a27c9c (refine homepage and offerings UI)
          </p>
        </a>
      </div>
    </Section>
  );
<<<<<<< HEAD
}
=======
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
>>>>>>> 3a27c9c (refine homepage and offerings UI)

import Image from "next/image";

import { Section } from "@/components/ui/Section";
import { getSiteConfig } from "@/content";

import { FootstepTrail } from "./FootstepTrail";

export function WalkWithUs() {
  const siteConfig = getSiteConfig();
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.phoneE164}`;

  return (
    <Section
      as="section"
      aria-labelledby="walk-with-us-heading"
      className="relative isolate overflow-hidden border-b border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)] py-4 text-[var(--color-text-inverse)] sm:py-6 lg:py-8"
    >
      <FootstepTrail />

      {/* Main content stays above the footprint trail */}
      <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-12">
        {/* Left content */}
        <div className="max-w-xl">
          <h2
            id="walk-with-us-heading"
            className="text-5xl font-serif font-medium leading-none text-[#f3e8d2] sm:text-7xl"
          >
            Walk with us
          </h2>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-5 block w-full max-w-xs border border-[#d7ae78]/60 bg-[var(--color-brand-primary)] p-4 shadow-[12px_12px_0_#5A3828] transition-transform hover:-translate-y-1 sm:p-4"
            aria-label="Connect with the koral collective on WhatsApp"
          >
            <div className="flex justify-end text-[#f3e8d2]">
              <span className="text-xl text-[#e2b477] transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </div>

            <div className="mx-auto mt-2 aspect-square w-44 overflow-hidden bg-[#f3e8d2] p-2 sm:w-52">
              <Image
                src="/images/branding/whatsapp-qr.png"
                alt="Scan to connect with the koral collective on WhatsApp"
                width={520}
                height={520}
                className="h-full w-full object-contain"
                priority
              />
            </div>

            <p className="mt-3 text-center text-[10px] font-medium tracking-[0.18em] text-[#d8c09e]">
              Scan to start a conversation
            </p>
          </a>
        </div>

        {/* Visual breathing room for the full-panel footprint interaction */}
        <div className="relative min-h-56 lg:min-h-72">
        </div>
      </div>
    </Section>
  );
}

<<<<<<< HEAD
import Image from "next/image";
=======
import { getSiteConfig } from "@/content";
import { Button } from "@/components/ui/Button";
>>>>>>> 28167a7 (Refine Koral Collective website)
import { Section } from "@/components/ui/Section";
import { FootstepTrail } from "./FootstepTrail";

export function WalkWithUs() {
  const whatsappUrl = "https://wa.me/919535196043";

  return (
    <Section
      as="section"
      aria-labelledby="walk-with-us-heading"
      className="relative isolate overflow-hidden border-b border-[#4c3027] bg-[var(--color-brand-primary)] text-[var(--color-text-inverse)]"
    >
      {/* Interactive footprint layer */}
      <FootstepTrail />

      {/* Main content stays above the footprint trail */}
      <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20">
        {/* Left content */}
        <div className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#e2b477]">
            Make a beginning
          </p>

          <h2
            id="walk-with-us-heading"
            className="mt-4 text-5xl font-serif font-medium uppercase leading-none text-[#f3e8d2] sm:text-7xl"
          >
            Walk with us
          </h2>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-[#ecd9bd] sm:text-lg">
            Connect with Koral Collective to enquire, plan a visit, or find
            the experience that fits your pace.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex border-b border-[#e2b477] pb-2 text-xs font-medium uppercase tracking-[0.18em] text-[#f3e8d2] transition-colors hover:text-[#e2b477]"
          >
            Enquire on WhatsApp →
          </a>
        </div>
<<<<<<< HEAD

        {/* WhatsApp QR card */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mx-auto block w-full max-w-xs border border-[#d7ae78]/60 bg-[#3b2721] p-5 shadow-[12px_12px_0_#5f302b] transition-transform hover:-translate-y-1 sm:p-7"
          aria-label="Connect with Koral Collective on WhatsApp"
        >
          {/* Centered heading with arrow */}
          <div className="relative flex items-center justify-center text-[#f3e8d2]">
            <span className="font-serif text-2xl">
              Walk with us
            </span>

            <span className="absolute right-0 text-xl text-[#e2b477] transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </div>

          {/* WhatsApp QR */}
          <div className="mx-auto mt-6 aspect-square w-44 overflow-hidden bg-[#f3e8d2] p-2 sm:w-52">
            <Image
              src="/images/branding/whatsapp-qr.png"
              alt="Scan to connect with Koral Collective on WhatsApp"
              width={520}
              height={520}
              className="h-full w-full object-contain"
              priority
            />
          </div>

          <p className="mt-5 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-[#d8c09e]">
            Scan to start a conversation
          </p>
        </a>
=======
        <div className="mx-auto w-full max-w-xs">
          <a href={whatsappUrl} className="group block w-full border border-[#d7ae78]/60 bg-[#3b2721] p-5 shadow-[12px_12px_0_#5f302b] transition-transform hover:-translate-y-1 sm:p-7" aria-label="Connect with Koral Collective on WhatsApp">
            <div className="flex items-start justify-between text-[#f3e8d2]">
              <span className="font-serif text-2xl">Walk with us</span>
              <span className="text-xl text-[#e2b477] transition-transform group-hover:translate-x-1">↗</span>
            </div>
            <div className="mx-auto mt-6 aspect-square w-44 bg-[#f3e8d2] p-3 sm:w-52">
              <QrVisual />
            </div>
            <p className="mt-5 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-[#d8c09e]">
              Scan to start a conversation
            </p>
          </a>
          <Button href="/offerings" variant="ghost" size="md" className="mt-5 w-full bg-[#3b2721] text-white hover:bg-[#2e211b] hover:text-white">
            Explore offerings →
          </Button>
        </div>
>>>>>>> 28167a7 (Refine Koral Collective website)
      </div>
    </Section>
  );
}
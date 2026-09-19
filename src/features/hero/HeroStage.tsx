"use client";

import Image from "next/image";
import Link from "next/link";

export function HeroStage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#2a1c14]">
      {/* Static background image */}
      <Image
        src="/images/tulunadu-landscape.jpeg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
        aria-hidden="true"
      />

      {/* Primary hero content */}
      <div className="relative z-10 flex min-h-screen items-center px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto w-full max-w-7xl py-32 sm:py-36">
          <div className="max-w-2xl space-y-8">
            <div>
              <h1 className="font-serif text-4xl font-medium leading-snug text-[#5A3828] [text-shadow:0_1px_0_rgba(247,241,227,0.55)] sm:text-5xl">
                Walk the textures of Tulunadu threaded through time
              </h1>
              <p className="mt-5 font-sans text-base leading-relaxed text-[#5A3828] [text-shadow:0_1px_0_rgba(247,241,227,0.55)] sm:text-lg">
                For those who travel in unhurried grace, we invite you to experience a Tulunadu rarely seen, through immersive walking tours led by historians, archaeologists, and architects.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/team"
                className="inline-flex items-center border border-[#5A3828] px-6 py-2.5 font-sans text-sm font-medium tracking-wide text-[#5A3828] transition-colors hover:bg-[#5A3828] hover:text-[#f7f1e3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5A3828] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                About us
              </Link>
              <Link
                href="/offerings"
                className="inline-flex items-center bg-[#5A3828] px-6 py-2.5 font-sans text-sm font-medium tracking-wide text-[#f7f1e3] transition-colors hover:bg-[#f7f1e3] hover:text-[#5A3828] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5A3828] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                Our offerings
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Fade to page bg at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-bg-base)] to-transparent z-20" />
    </div>
  );
}

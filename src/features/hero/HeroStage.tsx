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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1a0f09]/55 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a0f09]/75 via-[#1a0f09]/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f09]/40 via-transparent to-[#1a0f09]/50 pointer-events-none" />

      {/* 2-column content */}
      <div className="relative z-10 flex min-h-screen items-center px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="w-full max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center py-28 sm:py-32">

          {/* Column 1: Brand identity */}
          <div>
            <p className="text-xs font-medium tracking-[0.3em] text-[#e2c89a]/80 font-sans mb-6 uppercase">
              the koral collective
            </p>
            <h1 className="font-serif text-5xl font-medium leading-[1.05] text-[#f7f1e3] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              Experience Tulunadu<br />one walk at a time
            </h1>
          </div>

          {/* Column 2: Description + CTAs */}
          <div className="space-y-8">
            <div>
              <p className="font-serif text-2xl font-medium text-[#f7f1e3]/90 sm:text-3xl leading-snug">
                Walk the textures of Tulunadu threaded through time
              </p>
              <p className="mt-5 text-base leading-relaxed text-[#e2d5c0]/85 font-sans sm:text-lg">
                For those who travel in unhurried grace, we invite you to experience a Tulunadu rarely seen, through immersive walking tours led by historians, archaeologists, and architects.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/team"
                className="inline-flex items-center px-7 py-3 font-sans text-sm font-medium tracking-wide border border-[#f7f1e3] text-[#f7f1e3] transition-colors hover:bg-[#f7f1e3] hover:text-[#2a1c14] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f7f1e3] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                About us
              </Link>
              <Link
                href="/offerings"
                className="inline-flex items-center px-7 py-3 font-sans text-sm font-medium tracking-wide bg-[#f7f1e3] text-[#2a1c14] transition-colors hover:bg-[#e2c89a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f7f1e3] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                Our offerings
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Fade to page bg at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--color-bg-base)] to-transparent z-20" />
    </div>
  );
}

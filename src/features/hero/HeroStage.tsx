"use client";

import Image from "next/image";
import Link from "next/link";

export function HeroStage() {
  return (
    <div className="relative w-full overflow-hidden bg-[var(--color-bg-base)] flex flex-col justify-center">

      {/* Mobile background (full aspect ratio preserved) */}
      <div className="block sm:hidden w-full leading-none z-0">
        <Image
          src="/images/tulunadu-parchment-panorama.png"
          alt=""
          width={2039}
          height={771}
          className="w-full h-auto block"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Desktop background (full aspect ratio preserved) */}
      <div className="hidden sm:block relative w-full leading-none z-0">
        <Image
          src="/images/tulunadu-parchment-panorama.png"
          alt=""
          width={2039}
          height={771}
          className="w-full h-auto object-contain block"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Primary hero content */}
      <div className="relative sm:absolute sm:inset-0 z-10 flex h-full items-center px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto w-full max-w-7xl pt-8 pb-16 sm:py-0">
          <div className="max-w-2xl space-y-8">
            <div>
              <h1 className="font-serif text-4xl font-semibold leading-snug text-[#160d08] [text-shadow:0_1px_0_rgba(247,237,219,0.8)] sm:text-5xl">
                Walk the textures of Tulunadu threaded through time
              </h1>
              <p className="mt-5 max-w-2xl font-sans text-base font-medium leading-relaxed text-[#28150d] sm:text-lg">
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
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--color-bg-base)] to-transparent z-20" />
    </div>
  );
}

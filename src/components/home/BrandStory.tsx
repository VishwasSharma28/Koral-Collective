"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function BrandStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const rawProgress = 1 - rect.top / windowHeight;
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));
      
      setScrollProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="brand-story-heading"
      className="relative min-h-[108svh] overflow-hidden bg-[#c8b98f] sm:min-h-[112svh]"
    >
      <div className="pointer-events-none sticky top-0 h-[100svh] w-full overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{
            opacity: Math.min(1, scrollProgress * 2.2),
            transform: `translateY(${(1 - scrollProgress) * 34}px) scale(${0.96 + scrollProgress * 0.04})`,
          }}
        >
          <Image
            src="/images/tulunadu-landscape.jpeg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />

          <div className="absolute inset-x-0 bottom-0 h-[43%] bg-gradient-to-t from-[#2d4436]/40 to-transparent" />
        </div>

        <div
          className="absolute bottom-[5%] left-[4%] h-[45%] w-[22%] opacity-40 transition-transform duration-300 sm:left-[7%] sm:w-[16%]"
          style={{ transform: `translateY(${(1 - scrollProgress) * 70}px) rotate(${-5 + scrollProgress * 5}deg)` }}
        >
          <Image src="/images/illustrations/coconut-tree.svg" alt="" fill className="object-contain object-bottom" unoptimized />
        </div>
        <div
          className="absolute bottom-[4%] right-[2%] hidden h-[55%] w-[18%] opacity-45 transition-transform duration-300 sm:block"
          style={{ transform: `translateY(${(1 - scrollProgress) * 50}px) rotate(${5 - scrollProgress * 5}deg)` }}
        >
          <Image src="/images/illustrations/coconut-tree.svg" alt="" fill className="object-contain object-bottom" unoptimized />
        </div>
      </div>

      <Container size="default" className="pointer-events-none absolute inset-0 z-10 flex items-center">
        <div className="max-w-xl px-2 pb-[8vh] text-[#2e211b] sm:ml-[8%] sm:pb-0">
          <h2
            id="brand-story-heading"
            className="text-xs font-sans font-semibold uppercase tracking-[0.24em] text-[var(--color-brand-primary)] sm:text-sm"
          >
            What is Koral Collective?
          </h2>
          <p className="mt-5 text-3xl font-serif font-medium leading-[1.08] text-[#2e211b] sm:text-5xl">
            An experiential, story-driven digital presence celebrating heritage, cuisine, and community gathering.
          </p>
          <div className="my-6 h-px w-20 bg-[var(--color-accent)] sm:my-8" />
          <p className="max-w-lg text-base font-sans font-light leading-relaxed text-[#50382b] sm:text-lg">
            Koral Collective prioritizes narrative, visual immersion, and discovery over transactional e-commerce. We curate half-day experiential journeys and café-centered cultural gatherings designed to introduce visitors to authentic local traditions.
          </p>
        </div>
      </Container>
    </section>
  );
}

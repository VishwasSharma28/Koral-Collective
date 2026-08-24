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
      
      const rawProgress = 1 - (rect.bottom / (windowHeight + rect.height));
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
      className="relative min-h-[150vh] bg-[var(--color-bg-base)] overflow-hidden"
    >
      {/* Fixed/Sticky Background Landscape Container */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          
          {/* 3. Distant landscape becomes visible */}
          <div 
            className="absolute bottom-0 left-0 w-full h-[60vh] transition-opacity duration-500 ease-out"
            style={{ 
              opacity: scrollProgress > 0.1 ? Math.min(1, (scrollProgress - 0.1) * 3) : 0,
              transform: `translateY(${(1 - Math.min(1, scrollProgress * 2)) * 50}px)`
            }}
          >
            <Image 
              src="/images/illustrations/landscape.svg" 
              alt="" 
              fill 
              className="object-cover object-bottom opacity-20"
              unoptimized
            />
          </div>

          {/* 4. Gopura appears */}
          <div 
            className="absolute bottom-[10vh] left-[10%] w-[40%] max-w-[300px] h-[50vh] transition-all duration-700 ease-out"
            style={{ 
              opacity: scrollProgress > 0.2 ? Math.min(1, (scrollProgress - 0.2) * 3) : 0,
              transform: `translateY(${(1 - Math.min(1, scrollProgress * 1.5)) * 100}px)`
            }}
          >
            <Image 
              src="/images/illustrations/gopura.svg" 
              alt="" 
              fill 
              className="object-contain object-bottom opacity-40 text-[var(--color-brand-secondary)]"
              unoptimized
            />
          </div>

          {/* 1. First Coconut tree enters subtly */}
          <div 
            className="absolute bottom-0 right-[5%] w-[30%] max-w-[250px] h-[70vh] transition-all duration-1000 ease-out"
            style={{ 
              opacity: scrollProgress > 0.05 ? Math.min(1, (scrollProgress - 0.05) * 4) : 0,
              transform: `translateY(${(1 - Math.min(1, scrollProgress * 2)) * 150}px) rotate(${5 - scrollProgress * 5}deg)`
            }}
          >
            <Image 
              src="/images/illustrations/coconut-tree.svg" 
              alt="" 
              fill 
              className="object-contain object-bottom text-[var(--color-brand-secondary)] opacity-50"
              unoptimized
            />
          </div>

          {/* 2. Second tree appears */}
          <div 
            className="absolute bottom-0 -left-[5%] w-[35%] max-w-[300px] h-[80vh] transition-all duration-1000 ease-out"
            style={{ 
              opacity: scrollProgress > 0.15 ? Math.min(1, (scrollProgress - 0.15) * 3) : 0,
              transform: `translateY(${(1 - Math.min(1, scrollProgress * 1.5)) * 200}px) rotate(${-5 + scrollProgress * 5}deg)`
            }}
          >
            <Image 
              src="/images/illustrations/coconut-tree.svg" 
              alt="" 
              fill 
              className="object-contain object-bottom text-[var(--color-brand-secondary)] scale-x-[-1] opacity-50"
              unoptimized
            />
          </div>

          {/* 5. Ratha silhouette becomes visible */}
          <div 
            className="absolute bottom-[5vh] right-[25%] w-[20%] max-w-[200px] h-[30vh] transition-all duration-700 ease-out"
            style={{ 
              opacity: scrollProgress > 0.4 ? Math.min(0.6, (scrollProgress - 0.4) * 2) : 0,
              transform: `translateX(${(0.8 - scrollProgress) * 50}px)`
            }}
          >
            <Image 
              src="/images/illustrations/ratha.svg" 
              alt="" 
              fill 
              className="object-contain object-bottom text-[var(--color-accent)] opacity-60"
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* Foreground Content */}
      <Container size="default" className="relative z-10 pt-[25vh] pb-[40vh] flex items-center min-h-screen pointer-events-auto">
        <div className="max-w-2xl space-y-8 bg-[var(--color-bg-base)]/85 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-[var(--color-border-subtle)] shadow-sm ml-auto sm:ml-0 md:ml-12">
          <h2
            id="brand-story-heading"
            className="text-sm font-sans uppercase tracking-widest text-[var(--color-brand-primary)] font-semibold"
          >
            What is Koral Collective?
          </h2>
          <p className="text-3xl font-serif text-[var(--color-text-primary)] leading-snug md:text-4xl font-medium">
            An experiential, story-driven digital presence celebrating heritage, cuisine, and community gathering.
          </p>
          <div className="h-px w-24 bg-[var(--color-accent)] my-8"></div>
          <p className="text-lg font-sans text-[var(--color-text-muted)] leading-relaxed font-light">
            Koral Collective prioritizes narrative, visual immersion, and discovery over transactional e-commerce. We curate half-day experiential journeys and café-centered cultural gatherings designed to introduce visitors to authentic local traditions.
          </p>
        </div>
      </Container>
    </section>
  );
}

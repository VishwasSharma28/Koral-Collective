import { BrandStory } from "@/components/home/BrandStory";
import { OfferingSelector } from "@/components/home/OfferingSelector";
import { SupportingStory } from "@/components/home/SupportingStory";
import { Testimonials } from "@/components/home/Testimonials";
import { HeroEntry } from "@/features/hero";

export default function HomePage() {
  return (
    <>
      <HeroEntry scrollDistanceMultiplier={2.5} />
      <BrandStory />
      <OfferingSelector />
      <Testimonials />
      <SupportingStory />
    </>
  );
}

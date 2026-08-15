import { BrandStory } from "@/components/home/BrandStory";
import { OfferingSelector } from "@/components/home/OfferingSelector";
import { StaticHero } from "@/components/home/StaticHero";
import { SupportingStory } from "@/components/home/SupportingStory";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <StaticHero />
      <BrandStory />
      <OfferingSelector />
      <Testimonials />
      <SupportingStory />
    </>
  );
}

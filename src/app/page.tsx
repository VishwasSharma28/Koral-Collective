import { WalkWithUs } from "@/components/home/WalkWithUs";
import { OfferingShowcase } from "@/components/home/OfferingShowcase";
import { HeroEntry } from "@/features/hero";

export default function HomePage() {
  return (
    <>
      <HeroEntry scrollDistanceMultiplier={2.5} />
      <OfferingShowcase />
      <WalkWithUs />
      
    </>
  );
}

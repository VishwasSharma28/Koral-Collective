import { Faqs } from "@/components/home/Faqs";
import { WalkWithUs } from "@/components/home/WalkWithUs";
import { HeroEntry } from "@/features/hero";

export default function HomePage() {
  return (
    <>
      <HeroEntry scrollDistanceMultiplier={2.5} />
      <WalkWithUs />
      <Faqs />
    </>
  );
}

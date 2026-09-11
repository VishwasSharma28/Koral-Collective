import type { Metadata } from "next";

import { OfferingExperience } from "@/components/offerings/OfferingExperience";

export const metadata: Metadata = {
  title: "Our offerings",
  description: "Walking trails through the layered histories and living cultures of Tulunadu.",
};

export default function OfferingsPage() {
  return <OfferingExperience />;
}
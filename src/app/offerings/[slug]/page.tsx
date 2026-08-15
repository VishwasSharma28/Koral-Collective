import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getAllOfferingSlugs,
  getExperiencesForOffering,
  getOfferingBySlug,
} from "@/content";
import { CircularExplorer } from "@/features/circular-explorer";

type OfferingPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllOfferingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: OfferingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const offering = getOfferingBySlug(slug);

  if (!offering) {
    return { title: "Offering not found" };
  }

  return {
    title: offering.seo.title,
    description: offering.seo.description,
  };
}

export default async function OfferingPage({ params }: OfferingPageProps) {
  const { slug } = await params;
  const offering = getOfferingBySlug(slug);

  if (!offering) {
    notFound();
  }

  const offeringExperiences = getExperiencesForOffering(offering.id);

  return <CircularExplorer offering={offering} experiences={offeringExperiences} />;
}

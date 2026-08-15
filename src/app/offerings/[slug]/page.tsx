import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/Container";
import {
  getAllOfferingSlugs,
  getExperiencesForOffering,
  getOfferingBySlug,
} from "@/content";

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

  return (
    <Container className="py-12">
      <p className="text-sm text-neutral-500">Circular explorer placeholder</p>
      <h1 className="mt-2 text-3xl font-medium">{offering.title}</h1>
      <p className="mt-4 max-w-2xl text-neutral-600">{offering.description}</p>
      <ul className="mt-8 space-y-3">
        {offeringExperiences.map((experience) => (
          <li key={experience.id}>
            <Link href={`/experiences/${experience.slug}`} className="underline">
              {experience.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/" className="mt-8 inline-block text-sm underline">
        Back to Home
      </Link>
    </Container>
  );
}

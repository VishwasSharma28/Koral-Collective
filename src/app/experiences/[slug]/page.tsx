import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/Container";
import {
  getAllExperienceSlugs,
  getExperienceBySlug,
  getOfferingById,
} from "@/content";

type ExperiencePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllExperienceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ExperiencePageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);

  if (!experience) {
    return { title: "Experience not found" };
  }

  return {
    title: experience.seo.title,
    description: experience.seo.description,
  };
}

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);

  if (!experience) {
    notFound();
  }

  const parentOffering = getOfferingById(experience.offeringId);

  return (
    <Container className="py-12">
      <p className="text-sm text-neutral-500">Experience detail placeholder</p>
      <h1 className="mt-2 text-3xl font-medium">{experience.title}</h1>
      <p className="mt-4 max-w-2xl text-neutral-600">{experience.description}</p>
      {parentOffering ? (
        <Link
          href={`/offerings/${parentOffering.slug}`}
          className="mt-8 inline-block text-sm underline"
        >
          Back to {parentOffering.title}
        </Link>
      ) : null}
    </Container>
  );
}

import { aboutContent } from "./about";
import { experiences } from "./experiences";
import { offerings } from "./offerings";
import { resourcesContent } from "./resources";
import { siteConfig, navItems } from "./site";
import { teamContent } from "./team";
import { testimonialsContent } from "./testimonials";
import type { Experience, Offering } from "./types";

export function getSiteConfig() {
  return siteConfig;
}

export function getNavItems() {
  return navItems;
}

export function getAllOfferings(): Offering[] {
  return offerings;
}

export function getOfferingBySlug(slug: string): Offering | undefined {
  return offerings.find((offering) => offering.slug === slug);
}

export function getOfferingById(id: string): Offering | undefined {
  return offerings.find((offering) => offering.id === id);
}

export function getAllOfferingSlugs(): string[] {
  return offerings.map((offering) => offering.slug);
}

export function getAllExperiences(): Experience[] {
  return experiences;
}

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((experience) => experience.slug === slug);
}

export function getAllExperienceSlugs(): string[] {
  return experiences.map((experience) => experience.slug);
}

export function getExperiencesForOffering(offeringId: string): Experience[] {
  const offering = offerings.find((item) => item.id === offeringId);
  if (!offering) {
    return [];
  }

  return offering.experienceIds
    .map((id) => experiences.find((experience) => experience.id === id))
    .filter((experience): experience is Experience => experience !== undefined);
}

export function getAboutContent() {
  return aboutContent;
}

export function getTeamContent() {
  return teamContent;
}

export function getResourcesContent() {
  return resourcesContent;
}

export function getTestimonialsContent() {
  return testimonialsContent;
}

export {
  aboutContent,
  experiences,
  navItems,
  offerings,
  resourcesContent,
  siteConfig,
  teamContent,
  testimonialsContent,
};

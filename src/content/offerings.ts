import type { Offering } from "./types";

export const offerings: Offering[] = [
  {
    id: "cafe-collective",
    slug: "cafe-collective",
    title: "Café Collective",
    shortDescription: "Café-centered cultural gatherings celebrating coastal cuisine.",
    description: "Gatherings built around food, people, and place—sharing regional flavors and local stories in an intimate café setting.",
    images: ["/images/offerings/cafe/cafe-collective.webp"],
    experienceIds: ["cafe-exp-1", "cafe-exp-2", "cafe-exp-3", "cafe-exp-4"],
    seo: {
      title: "Café Collective",
      description: "Explore Café Collective experiences and coastal food gatherings.",
    },
  },
  {
    id: "half-day-experience",
    slug: "half-day-experience",
    title: "Half-Day Experience",
    shortDescription: "Curated experiential journeys through coastal life and village culture.",
    description: "Immersive half-day journeys showcasing the landscapes, traditions, and community life of Tulunadu—from paddy fields to coastline.",
    images: ["/images/offerings/half-day/half-day-experience.webp"],
    experienceIds: ["half-day-exp-1", "half-day-exp-2", "half-day-exp-3"],
    seo: {
      title: "Half-Day Experience",
      description: "Explore Half-Day Experience offerings in Tulunadu.",
    },
  },
];

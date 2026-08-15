import type { Offering } from "./types";

export const offerings: Offering[] = [
  {
    id: "cafe-collective",
    slug: "cafe-collective",
    title: "Café Collective",
    shortDescription: "Café-centered cultural gathering experiences.",
    description: "Food, gathering, and café-centered cultural experiences.",
    experienceIds: ["cafe-exp-1", "cafe-exp-2", "cafe-exp-3", "cafe-exp-4"],
    seo: {
      title: "Café Collective",
      description: "Explore Café Collective experiences.",
    },
  },
  {
    id: "half-day-experience",
    slug: "half-day-experience",
    title: "Half-Day Experience",
    shortDescription: "Curated half-day experiential journeys.",
    description: "Curated experiential journeys showcasing heritage and tradition.",
    experienceIds: ["half-day-exp-1", "half-day-exp-2", "half-day-exp-3"],
    seo: {
      title: "Half-Day Experience",
      description: "Explore Half-Day Experience offerings.",
    },
  },
];

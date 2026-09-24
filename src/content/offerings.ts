import type { Offering } from "./types";

export const offerings: Offering[] = [
  {
    id: "cafe-collective",
    slug: "cafe-collective",
    title: "Café Collective",
    shortDescription:
      "Café-centered cultural gathering experiences.",
    description:
      "Food, gathering, and café-centered cultural experiences.",
    experienceIds: [],
    seo: {
      title: "Café Collective | the koral collective",
      description:
        "Explore café-centered cultural gathering experiences with the koral collective.",
    },
  },

  {
    id: "half-day-experience",
    slug: "half-day-experience",
    title: "Curated Walking Trails Across Tulunadu",
    shortDescription:
      "Curated walking trails through the heritage, landscapes, communities, and living traditions of Tulunadu.",
    description:
      "Explore Udupi and Dakshina Kannada through carefully researched walking trails connecting history, architecture, faith, food, landscape, and everyday life.",
    experienceIds: [
      "ratha-beedi",
      "kallianpur",
      "barkur",
      "basrur",
      "moodabidri",
      "karkala",
      "shirva",
      "coastal-tulunadu",
    ],
    seo: {
      title: "Walking Trails Across Tulunadu | the koral collective",
      description:
        "Explore curated walking trails across Udupi and Dakshina Kannada, connecting heritage, culture, architecture, food, and living traditions.",
    },
  },
];
import type { NavItem, SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  name: "Koral Collective",
  tagline: "Tulunadu storytelling and experiential culture",
  contact: {
    whatsapp: {
      phoneE164: "0000000000",
      defaultMessage: "Hello Koral Collective, I would like to enquire.",
    },
    email: "hello@example.com",
  },
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Offerings", href: "/offerings" },
  { label: "Team", href: "/team" },
  {
    label: "Chat on WhatsApp",
    href: "https://wa.me/0000000000?text=Hello%20Koral%20Collective%2C%20I%20would%20like%20to%20enquire.",
  },
];

import type { NavItem, SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  name: "Koral Collective",
  tagline: "Tulunadu storytelling and experiential culture",
  contact: {
    whatsapp: {
      phoneE164: "9195383 98421",
      defaultMessage: "Hello Koral Collective, I would like to enquire.",
    },
    email: "hello@example.com",
  },
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Resources", href: "/resources" },
];

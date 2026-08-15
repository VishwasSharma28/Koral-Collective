import type { NavItem, SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  name: "Coral Collective",
  tagline: "Tulunadu storytelling and experiential culture",
  contact: {
    whatsapp: {
      phoneE164: "0000000000",
      defaultMessage: "Hello Coral Collective, I would like to enquire.",
    },
    email: "hello@example.com",
  },
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { label: "Resources", href: "/resources" },
];

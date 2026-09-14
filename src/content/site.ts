import type { NavItem, SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  name: "Koral Collective",
  tagline: "Tulunadu storytelling and experiential culture",
  contact: {
    whatsapp: {
      phoneE164: "919535196043",
      defaultMessage: "Hello Koral Collective, I would like to enquire.",
    },
    email: "hello@koralcollective.com",
    phone: "+91 9535196043",
    instagram: "https://www.instagram.com/thekoralcollective",
  },
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Offerings", href: "/offerings" },
  { label: "Team", href: "/team" },
  {
    label: "Book via WhatsApp",
    href: "https://wa.me/919535196043",
  },
];

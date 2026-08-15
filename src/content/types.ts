export type ImageRef = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type SeoFields = {
  title: string;
  description: string;
};

export type SiteContact = {
  whatsapp: {
    phoneE164: string;
    defaultMessage: string;
  };
  email: string;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  contact: SiteContact;
};

export type NavItem = {
  label: string;
  href: string;
};

export type Offering = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  experienceIds: string[];
  seo: SeoFields;
};

export type Experience = {
  id: string;
  slug: string;
  offeringId: string;
  title: string;
  teaser: string;
  description: string;
  duration?: string;
  format?: string;
  highlights: string[];
  seo: SeoFields;
};

export type AboutContent = {
  title: string;
  intro: string;
  seo: SeoFields;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
};

export type TeamContent = {
  title: string;
  members: TeamMember[];
  seo: SeoFields;
};

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
};

export type GalleryContent = {
  title: string;
  items: GalleryItem[];
  seo: SeoFields;
};

export type ResourceLink = {
  id: string;
  title: string;
  href: string;
  description?: string;
};

export type ResourcesContent = {
  title: string;
  links: ResourceLink[];
  seo: SeoFields;
};

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
  phone?: string;
  instagram?: string;
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

  /**
   * Optional custom WhatsApp pre-filled message.
   * Falls back to the generated default.
   */
  contactMessage?: string;

  /**
   * Optional trail image.
   * We will use a placeholder until the Cloudinary
   * trail images are ready.
   */
  image?: ImageRef;

  /**
   * Position and marker information for the
   * illustrated Tulunadu map.
   *
   * x/y are percentages from the top-left
   * of the map.
   */
  map?: {
    x: number;
    y: number;
    label?: string;
    icon?: string;
  };

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
  details?: string;
  image?: string;
};

export type TeamGroup = {
  title: string;
  members: TeamMember[];
};

export type TeamContent = {
  title: string;
  intro: string[];
  groups: TeamGroup[];
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

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  roleOrLocation?: string;
};

export type TestimonialsContent = {
  title: string;
  items: Testimonial[];
};
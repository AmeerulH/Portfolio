import type { SanityImageSource } from "@sanity/image-url";

export type Tech = { _id: string; name: string; category: string };
export type SanityImage = SanityImageSource & { alt?: string; caption?: string; asset?: { _ref?: string; metadata?: { lqip?: string; dimensions?: { width: number; height: number } } } };

export type SiteSettings = {
  name: string;
  role?: string;
  headline?: string;
  summary?: string;
  availability?: "open" | "limited" | "closed";
  availabilityNote?: string;
  email?: string;
  location?: string;
  socials?: { _key: string; label: string; url: string }[];
  capabilities?: { _key: string; title: string; description?: string }[];
  education?: { _key: string; institution: string; qualification?: string; period?: string }[];
  certifications?: string[];
  seoImage?: SanityImage;
};

export type Experience = {
  _id: string;
  company: string;
  role: string;
  website?: string;
  location?: string;
  startDate: string;
  endDate?: string | null;
  summary?: string;
  highlights?: string[];
  stack?: Tech[];
  showOnResume?: boolean;
};

export type ProjectKind = "product" | "clientWebsite" | "openSource";

export type Project = {
  _id: string;
  title: string;
  slug: string;
  kind: ProjectKind;
  featured?: boolean;
  order?: number;
  year?: string;
  summary: string;
  role?: string;
  stack?: Tech[];
  metrics?: { _key: string; label: string; value: string }[];
  liveUrl?: string;
  repo?: string;
  cover?: SanityImage;
  gallery?: SanityImage[];
  caseStudy?: any[];
  showOnResume?: boolean;
};

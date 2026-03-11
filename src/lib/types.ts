export type Locale = "de" | "en" | "fr";

export type ServiceSlug =
  | "casting-materials"
  | "forging-forming"
  | "weldments-steel-structures"
  | "vehicle-systems"
  | "cnc-machining"
  | "engineering-simulation"
  | "logistics-supply-chain"
  | "quality-certifications";

export interface LocalizedText {
  de: string;
  en: string;
  fr: string;
}

export interface ServiceItem {
  slug: ServiceSlug;
  image: string;
  heroAlt: LocalizedText;
  galleryAlts?: LocalizedText[];
  title: LocalizedText;
  short: LocalizedText;
  intro: LocalizedText;
  capabilities: {
    de: string[];
    en: string[];
    fr: string[];
  };
  useCases: {
    de: string[];
    en: string[];
    fr: string[];
  };
}

export interface LocaleContent {
  localeLabel: string;
  siteName: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  stats: { label: string; value: string }[];
  homeIntroTitle: string;
  homeIntroText: string;
  ctaPrimary: string;
  ctaSecondary: string;
  nav: {
    company: string;
    services: string;
    quality: string;
    contact: string;
  };
  footer: {
    quickLinks: string;
    legal: string;
    imprint: string;
    privacy: string;
  };
  company: {
    title: string;
    intro: string[];
    teaser: string[];
    valuesTitle: string;
    values: string[];
    factsTitle: string;
    facts: { label: string; value: string }[];
    locationsTitle: string;
    locationsText: string;
    whyMagTitle: string;
    whyMagItems: string[];
    successStoriesTitle: string;
    successStories: { label: string; text: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    openingHours: string;
  };
}

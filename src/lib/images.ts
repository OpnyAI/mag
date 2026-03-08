const knownImages = new Set<string>([
  "/images/hero/hero-de.jpg",
  "/images/hero/hero-en.jpg",
  "/images/hero/hero-fr.jpg",
  "/images/services/service-1.jpg",
  "/images/services/service-2.jpg",
  "/images/services/service-3.jpg",
  "/images/services/service-4.jpg",
  "/images/services/service-5.jpg",
  "/images/services/service-6.jpg",
  "/images/services/service-7.jpg",
  "/images/company/company-1.jpg",
  "/images/company/company-2.jpg",
  "/images/brand/logo.png",
  "/images/brand/logo-dark.png",
  "/images/placeholders/placeholder-4x3.jpg",
  "/images/placeholders/placeholder-16x9.jpg",
]);

export function safeImage(src: string, fallback: string): string {
  if (!src || src.trim() === "") {
    return fallback;
  }

  return knownImages.has(src) ? src : fallback;
}

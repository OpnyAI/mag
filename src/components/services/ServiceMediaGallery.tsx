import Image from "next/image";
import { Locale } from "@/lib/types";

interface ServiceMediaGalleryProps {
  locale: Locale;
  serviceTitle: string;
  images: string[];
  variant: "projects" | "certificates";
}

export function ServiceMediaGallery({
  locale,
  serviceTitle,
  images,
  variant,
}: ServiceMediaGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  const title =
    variant === "certificates"
      ? locale === "de"
        ? "Zertifikate & Nachweise"
        : locale === "en"
          ? "Certificates & Documentation"
          : "Certificats & Documents"
      : locale === "de"
        ? "Projektbeispiele"
        : locale === "en"
          ? "Project Examples"
          : "Exemples de projets";

  return (
    <section className="surface-light border-y border-[var(--color-border)] bg-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-14 lg:px-8">
        <h2 className="text-2xl font-semibold text-[var(--color-text)]">{title}</h2>

        {variant === "certificates" ? (
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {images.map((imagePath, index) => (
              <div
                key={imagePath}
                className="overflow-hidden border border-[var(--color-border)] bg-white p-3"
              >
                <Image
                  src={imagePath}
                  alt={`${serviceTitle} ${index + 1}`}
                  width={1200}
                  height={1600}
                  className="aspect-[3/4] w-full object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {images.map((imagePath, index) => (
              <div
                key={imagePath}
                className="overflow-hidden border border-[var(--color-border)] bg-[var(--color-panel)]"
              >
                <Image
                  src={imagePath}
                  alt={`${serviceTitle} ${index + 1}`}
                  width={1400}
                  height={1000}
                  className="aspect-[4/3] w-full object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

import Image from "next/image";
import { Locale } from "@/lib/types";

const containModeFilenames = new Set([
  "Sandguss-Chargier.jpg",
  "Sandguss-Pumpenlüfter.jpg",
  "schweiss3.jpeg",
  "shell1.jpg",
  "shell2.jpg",
  "Alu-Sandguss.jpg",
  "cnc_8.jpeg",
  "cnc_9.jpeg",
  "schmiede4.jpeg",
  "schmiede5.jpeg",
  "schmiede7.jpeg",
  "schmiede8.jpeg",
  "qualitaet_1.jpeg",
  "qualitaet_2.jpeg",
  "Penetrationstest-3.jpg",
  "Ultraschall-Test.jpg",
  "Penetrationstest-1.jpg",
  "Penetrationstest-2.jpg",
]);

const containModeFolders = new Set([
  "sandguss",
  "shellguss",
  "schmiedteile",
  "schweisskonstr",
  "engineering",
  "cnc",
  "fahrzeugbau",
  "logistics",
]);

const galleryAltOverrides: Record<string, Record<Locale, string>> = {
  "schweiss3.jpeg": {
    de: "Schweißbaugruppe für industrielle Strukturanwendung",
    en: "Welded assembly for an industrial structural application",
    fr: "Assemblage soudé pour une application de structure industrielle",
  },
  "shell1.jpg": {
    de: "Shellguss-Bauteil mit komplexer Kontur",
    en: "Shell-cast component with complex contour",
    fr: "Composant moulé en coquille à contour complexe",
  },
  "Alu-Sandguss.jpg": {
    de: "Aluminium-Sandgussteil für industrielle Komponentenfertigung",
    en: "Aluminum sand-cast part for industrial component manufacturing",
    fr: "Pièce en aluminium moulée en sable pour la fabrication industrielle de composants",
  },
};

interface ServiceMediaGalleryProps {
  locale: Locale;
  serviceTitle: string;
  images: string[];
  altTexts?: string[];
  variant: "projects" | "certificates";
  titleOverride?: string;
}

export function ServiceMediaGallery({
  locale,
  serviceTitle,
  images,
  altTexts = [],
  variant,
  titleOverride,
}: ServiceMediaGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  const title =
    titleOverride ??
    (variant === "certificates"
      ? locale === "de"
        ? "Zertifikate & Nachweise"
        : locale === "en"
          ? "Certificates & Documentation"
          : "Certificats & Documents"
      : locale === "de"
        ? "Projektbeispiele"
        : locale === "en"
          ? "Project Examples"
          : "Exemples de projets");

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
                  alt={altTexts[index] ?? `${serviceTitle} ${index + 1}`}
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
              (() => {
                const segments = imagePath.split("/");
                const fileName = segments.at(-1) ?? "";
                const folderName = segments.at(-2) ?? "";
                const useContainMode =
                  containModeFilenames.has(fileName) || containModeFolders.has(folderName);
                const baseAlt = altTexts[index] ?? `${serviceTitle} ${index + 1}`;
                const altText = galleryAltOverrides[fileName]?.[locale] ?? baseAlt;

                return (
                  <div
                    key={imagePath}
                    className={`overflow-hidden border border-[var(--color-border)] ${
                      useContainMode ? "bg-white" : "bg-[var(--color-panel)]"
                    }`}
                  >
                    {useContainMode ? (
                      <div className="flex aspect-[4/3] w-full items-center justify-center bg-white p-4">
                        <Image
                          src={imagePath}
                          alt={altText}
                          width={1400}
                          height={1000}
                          className="max-h-full max-w-full object-contain"
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        />
                      </div>
                    ) : (
                      <Image
                        src={imagePath}
                        alt={altText}
                        width={1400}
                        height={1000}
                        className="aspect-[4/3] w-full object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                    )}
                  </div>
                );
              })()
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

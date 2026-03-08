import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/pages/ServicePage";
import { getServiceBySlug, serviceOrder } from "@/lib/site-content";
import { buildPageMetadata } from "@/lib/seo";

interface ServiceDetailPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return serviceOrder.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ServiceDetailPageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    return {};
  }

  return buildPageMetadata({
    locale: "fr",
    title: service.title.fr,
    description: service.short.fr,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default function Page({ params }: ServiceDetailPageProps) {
  if (!getServiceBySlug(params.slug)) {
    notFound();
  }

  return <ServicePage locale="fr" slug={params.slug} />;
}

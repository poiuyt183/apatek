import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ContactCTA from "@/components/sections/ContactCTA";
import ReferencesTabs from "@/components/references/ReferencesTabs";
import { REFERENCE_SOLUTIONS } from "@/data/references";

export const metadata: Metadata = {
  title: "References",
  description:
    "Trusted by port authorities and maritime agencies. Client references and case studies from Apatek Vietnam deployments.",
  openGraph: {
    title: "References",
    description:
      "Trusted by port authorities and maritime agencies worldwide.",
  },
};

export default async function ReferencesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("solutions");
  const tr = await getTranslations("references");

  const testimonials = t.raw("items.ais-dredging.testimonials") as {
    client: string;
    author?: string;
    quote: string;
  }[];

  const solutions = REFERENCE_SOLUTIONS.map((item, index) => ({
    id: item.id,
    name: testimonials[index]?.client ?? item.id,
    description: locale === "vi" ? item.description.vi : item.description.en,
    image: item.image,
  }));

  return (
    <div className="references-page">
      <section className="ref-hero">
        <div className="container ref-hero-inner">
          <span className="ref-hero-label">{tr("hero_label")}</span>
          <h1 className="ref-hero-title">{tr("title")}</h1>
          <p className="ref-hero-desc">{tr("description")}</p>
        </div>
      </section>

      <ReferencesTabs
        solutions={solutions}
        testimonials={testimonials.map((item, index) => ({
          ...item,
          image: REFERENCE_SOLUTIONS[index]?.customerImage ?? "/references/dongnai-port.png",
        }))}
        tabSolutions={tr("tab_solutions")}
        tabCustomers={tr("tab_customers")}
      />

      <ContactCTA />
    </div>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import SolutionDetail from "@/components/solutions/SolutionDetail";
import VTSDetail from "@/components/solutions/VTSDetail";
import { DETAIL_SOLUTIONS, getSolutionBySlug } from "@/data/solutions";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return DETAIL_SOLUTIONS.flatMap((solution) =>
    ["en", "vi"].map((locale) => ({ locale, slug: solution.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return { title: "Solutions" };

  const t = await getTranslations("solutions");
  return { title: t(`items.${solution.id}.title`) };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  if (solution.id === "vts") {
    return <VTSDetail locale={locale} />;
  }

  return <SolutionDetail locale={locale} solution={solution} />;
}

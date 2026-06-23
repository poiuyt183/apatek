import { redirect } from "next/navigation";
import { getSolutionsBasePath } from "@/data/solutions";

export default async function ProductsServicesRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}${getSolutionsBasePath(locale)}`);
}

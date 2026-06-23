import { redirect } from "next/navigation";

export default async function VisionRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const aboutPath = locale === "vi" ? "/gioi-thieu" : "/about";
  redirect(`/${locale}${aboutPath}#vision-mission`);
}

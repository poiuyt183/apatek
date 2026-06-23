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

const SOLUTION_DESCRIPTIONS: Record<string, { vi: string; en: string }> = {
  vts: {
    vi: "Nền tảng giám sát giao thông hàng hải chuẩn IALA — triển khai cho cảng vụ và cơ quan hàng hải Việt Nam. Theo dõi tàu thời gian thực, cảnh báo thông minh và báo cáo tuân thủ tự động.",
    en: "IALA-compliant vessel traffic management platform for Vietnamese port authorities and maritime agencies. Real-time vessel tracking, intelligent alerts, and automated compliance reporting.",
  },
  "ais-dredging": {
    vi: "Nền tảng giám sát hoạt động nạo vét bằng AIS — nâng cao nhận thức tình huống, kiểm soát khu vực thi công và hỗ trợ ra quyết định chính xác cho cơ quan quản lý.",
    en: "AIS-based dredging operations monitoring platform — enhances situational awareness, controls work zone compliance, and supports accurate decision-making for management authorities.",
  },
  dms: {
    vi: "Nền tảng quản lý kênh phân phối toàn diện — số hóa quy trình bán hàng, giám sát thị trường thời gian thực và kết nối toàn bộ mạng lưới phân phối trên một nền tảng thống nhất.",
    en: "Comprehensive distribution channel management platform — digitise sales processes, monitor market performance in real time, and connect your entire distribution network on one unified platform.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return { title: "Giải pháp" };

  const t = await getTranslations("solutions");
  const title = t(`items.${solution.id}.title`);
  const descMap = SOLUTION_DESCRIPTIONS[solution.id];
  const description = descMap
    ? locale === "vi"
      ? descMap.vi
      : descMap.en
    : t(`items.${solution.id}.subtitle`);

  return {
    title,
    description,
    openGraph: { description },
  };
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

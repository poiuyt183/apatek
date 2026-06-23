import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Liên hệ",
  description:
    "Liên hệ với Apatek Vietnam — yêu cầu demo, tư vấn giải pháp VTS, DMS, AIS hoặc trao đổi về nhu cầu công nghệ của doanh nghiệp bạn.",
  openGraph: {
    description:
      "Yêu cầu demo, tư vấn giải pháp VTS, DMS, AIS hoặc trao đổi về nhu cầu công nghệ của doanh nghiệp bạn.",
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}

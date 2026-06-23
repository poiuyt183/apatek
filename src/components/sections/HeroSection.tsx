"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { HERO_VIDEO_POSTER, HERO_VIDEO_URL } from "@/lib/hero-media";
import { getSolutionsHref } from "@/data/solutions";

export default function HeroSection() {
  const t = useTranslations("hero");
  const pathname = usePathname();
  const locale = pathname.startsWith("/vi") ? "vi" : "en";
  const solutionsHref = getSolutionsHref(locale);
  const contactHref = `/${locale}${locale === "vi" ? "/lien-he" : "/contact"}`;

  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      void video.play().catch(() => {});
    };

    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      playVideo();
      return;
    }

    video.addEventListener("canplay", playVideo, { once: true });
    return () => video.removeEventListener("canplay", playVideo);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <div
          className="hero-content"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(16px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div className="hero-slash">{t("badge")}</div>

          <h1 className="hero-title">
            <span className="hero-title-highlight">{t("titleHighlight")}</span>
            <br />
            {t("title")}
          </h1>

          <p className="hero-subtitle">{t("subtitle")}</p>

          <div className="hero-actions">
            <Link href={solutionsHref} className="btn-primary" id="hero-cta-primary">
              {t("cta_primary")}
              <ArrowRight size={15} strokeWidth={2} />
            </Link>
            <Link href={contactHref} className="btn-outline-dark" id="hero-cta-secondary">
              {t("cta_secondary")}
              <ChevronRight size={15} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <video
          ref={videoRef}
          className="hero-right-video"
          src={HERO_VIDEO_URL}
          poster={HERO_VIDEO_POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          aria-hidden="true"
        />
        <span className="hero-right-label">Apatek Vietnam</span>
      </div>
    </section>
  );
}

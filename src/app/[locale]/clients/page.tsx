import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Image from "next/image";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Apatek Vietnam's featured clients: Viettel, Samsung, Ministry of Finance, Habeco, VNPAY, and many more.",
};

const GOV_CLIENTS = [
  { name: "Tổng Cục Thuế" },
  { name: "Cục Hàng Hải VN" },
  { name: "Thanh Tra VN" },
  { name: "Viettel" },
  { name: "HABECO" },
  { name: "Casper" },
];

const ENT_CLIENTS = [
  { name: "Samsung", desc: "Global Electronics Leader" },
  { name: "VNPAY", desc: "Payment Solutions" },
  { name: "NEC", desc: "IT & Network Solutions" },
  { name: "Mộc Châu Milk", desc: "Dairy Products" },
  { name: "Sữa Ba Vì", desc: "Ba Vi Dairy" },
  { name: "Wilmar", desc: "Agribusiness & Food" },
  { name: "AIA", desc: "Life Insurance" },
  { name: "Nhất Nhất", desc: "Pharmaceutical" },
  { name: "Nam Dược", desc: "Traditional Medicine" },
  { name: "Rạng Đông", desc: "Lighting & Thermos" },
  { name: "Men's Vodka", desc: "Beverages" },
  { name: "VICOSTONE", desc: "Quartz Surfaces" },
];

const LOGO_MAP: Record<string, string> = {
  "Tổng Cục Thuế": "/partner/logo-thue-nha-nuoc-vector-inkythuatso-01.png",
  "Cục Hàng Hải VN": "/partner/Logo_Cục_Hàng_hải_Việt_Nam-removebg-preview.png",
  "Thanh Tra VN": "/partner/logo-thanh-tra-viet-nam.png",
  "Viettel": "/partner/logo-viettel.png",
  "HABECO": "/partner/logo-habeco.png",
  "Casper": "/partner/logo-casper.png",
};

const ENT_LOGO_MAP: Record<string, string> = {
  "Samsung": "/clients/logo-samsung.png",
  "VNPAY": "/clients/logo-vnpay.png",
  "NEC": "/clients/logo-nec.png",
  "Mộc Châu Milk": "/clients/logo-mocchau.png",
  "Sữa Ba Vì": "/clients/logo-bavi.png",
  "Wilmar": "/clients/logo-wilmar.png",
  "AIA": "/clients/logo-aia.png",
  "Nhất Nhất": "/clients/logo-nhatnhat.png",
  "Nam Dược": "/clients/logo-namduoc.png",
  "Rạng Đông": "/clients/logo-rangdong.png",
  "Men's Vodka": "/clients/logo-men-vodka.png",
  "VICOSTONE": "/clients/logo-vicostone.png",
};

export default function ClientsPage() {
  const t = useTranslations("clients");

  return (
    <div className="clients-page">
      <section className="about-hero">
        <div className="about-hero-left">
          <span className="section-label">{t("section_label")}</span>
          <h1 className="about-hero-title">{t("title")}</h1>
          <p className="about-body-text">{t("description")}</p>
        </div>
        <div className="about-hero-right">
          <Image
            src="/hero-team.png"
            alt="Apatek Vietnam Clients"
            fill
            sizes="52vw"
            priority
            style={{ objectFit: "cover" }}
          />
          <span className="about-hero-badge">Trusted Partners</span>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-section-header">
            <span className="section-label">{t("gov_title")}</span>
            <h2 className="section-title">{t("gov_title")}</h2>
          </div>
          <div className="clients-detail-grid">
            {GOV_CLIENTS.map((client, i) => {
              const logoUrl = LOGO_MAP[client.name];
              return (
                <div key={client.name} id={`gov-client-${i + 1}`} className="client-detail-card">
                  <div className="client-detail-logo">
                    {logoUrl ? (
                      <Image
                        src={logoUrl}
                        alt={client.name}
                        fill
                        sizes="(max-width: 640px) 50vw, 25vw"
                        style={{ objectFit: "contain", transform: client.name === "Viettel" ? "scale(0.6)" : "scale(1)" }}
                      />
                    ) : (
                      <span className="client-detail-name">{client.name}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="about-section-header">
            <span className="section-label">{t("enterprise_title")}</span>
            <h2 className="section-title">{t("enterprise_title")}</h2>
          </div>
          <div className="name-grid">
            {ENT_CLIENTS.map((client) => {
              const logoUrl = ENT_LOGO_MAP[client.name];
              return (
                <div key={client.name} className="name-grid-cell">
                  {logoUrl ? (
                    <Image
                      src={logoUrl}
                      alt={client.name}
                      width={120}
                      height={80}
                      style={{ objectFit: "contain" }}
                    />
                  ) : (
                    <span className="name-grid-cell-title">{client.name}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}

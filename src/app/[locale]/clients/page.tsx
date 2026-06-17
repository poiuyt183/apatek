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
  { name: "Tổng Cục Thuế", desc: "General Department of Taxation" },
  { name: "Cục Hàng Hải VN", desc: "Vietnam Maritime Administration" },
  { name: "Thanh Tra VN", desc: "Vietnam Government Inspectorate" },
  { name: "Bộ Tài Chính", desc: "Ministry of Finance" },
  { name: "Viettel", desc: "Vietnam's #1 Telecom" },
  { name: "AO Smith", desc: "Water Heating Solutions" },
  { name: "HABECO", desc: "Hanoi Beer Alcohol Beverage" },
  { name: "Casper", desc: "Consumer Electronics" },
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
  "AO Smith": "/partner/logo-ao-smith.png",
  "HABECO": "/partner/logo-habeco.png",
  "Casper": "/partner/logo-casper.png",
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
                        style={{ objectFit: "contain" }}
                      />
                    ) : (
                      <span className="client-detail-name">{client.name}</span>
                    )}
                  </div>
                  <p className="client-detail-desc">{client.desc}</p>
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
            {ENT_CLIENTS.map((client) => (
              <div key={client.name} className="name-grid-cell name-grid-cell-stack">
                <span className="name-grid-cell-title">{client.name}</span>
                <span className="name-grid-cell-desc">{client.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}

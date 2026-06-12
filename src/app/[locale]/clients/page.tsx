import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Image from "next/image";

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
  "Cục Hàng Hải VN": "/partner/Logo_Cục_Hàng_hải_Việt_Nam-removebg-preview.png",
  "Thanh Tra VN": "/partner/logo-thanh-tra-viet-nam.png",
  "Viettel": "/partner/logo-viettel.png",
  "AO Smith": "/partner/logo-ao-smith.png",
  "HABECO": "/partner/logo-habeco.png",
  "Casper": "/partner/logo-casper.png",
};

export default function ClientsPage() {
  const t = useTranslations("clients");

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label section-label-white">{t("section_label")}</span>
          <h1 className="section-title section-title-white">{t("title")}</h1>
          <p style={{ color: "rgba(255,255,255,0.55)", maxWidth: 580, fontSize: 16, lineHeight: 1.7, marginTop: 16 }}>
            {t("description")}
          </p>
        </div>
      </section>

      {/* Government & Major Groups */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <span className="section-label">{t("gov_title")}</span>
            <h2 className="section-title">{t("gov_title")}</h2>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 32,
              maxWidth: 1100,
              margin: "0 auto",
            }}
          >
            {GOV_CLIENTS.map((c, i) => (
              <div
                key={i}
                id={`gov-client-${i + 1}`}
                style={{
                  width: 240,
                  padding: "16px",
                  textAlign: "center",
                  transition: "transform 0.25s",
                  cursor: "default",
                }}
                className="logo-item"
              >
                {LOGO_MAP[c.name] ? (
                  <div style={{ position: "relative", height: 100, marginBottom: 16 }}>
                    <Image
                      src={LOGO_MAP[c.name]}
                      alt={c.name}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 18,
                      fontWeight: 800,
                      color: "var(--color-dark)",
                      marginBottom: 8,
                    }}
                  >
                    {c.name}
                  </div>
                )}
                <div style={{ fontSize: 13, color: "var(--color-text-light)" }}>
                  {c.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprises */}
      <section className="section section-light">
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <span className="section-label">{t("enterprise_title")}</span>
            <h2 className="section-title">{t("enterprise_title")}</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: 16,
            }}
          >
            {ENT_CLIENTS.map((c, i) => (
              <div key={i} className="logo-item" style={{ flexDirection: "column", gap: 6 }}>
                <span className="logo-text">{c.name}</span>
                <span style={{ fontSize: 11, color: "var(--color-text-light)" }}>{c.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

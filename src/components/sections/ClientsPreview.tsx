import { useTranslations } from "next-intl";
import Image from "next/image";

const GOV_CLIENTS = [
  "Tổng Cục Thuế",
  "Cục Hàng Hải VN",
  "Thanh Tra VN",
  "Viettel",
  "HABECO",
  "Casper",
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

export default function ClientsPreview() {
  const t = useTranslations("clients");

  const allClients = [...GOV_CLIENTS];
  // Show first 10
  const displayed = allClients.slice(0, 10);

  return (
    <section className="section section-light" id="clients-preview">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="section-label">{t("section_label")}</span>
          <h2 className="section-title">{t("title")}</h2>
          <p style={{ color: "var(--color-text-muted)", maxWidth: 560, margin: "0 auto", fontSize: 15 }}>
            {t("description")}
          </p>
        </div>

        {/* Logo grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 32,
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          {displayed.map((name, i) => {
            const logoUrl = LOGO_MAP[name];
            return (
              <div key={i} className="logo-item" style={{ position: "relative", overflow: "hidden", width: 220 }}>
                {logoUrl ? (
                  <Image
                    src={logoUrl}
                    alt={name}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                ) : (
                  <span className="logo-text">{name}</span>
                )}
              </div>
            );
          })}
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: 24,
            fontSize: 13,
            color: "var(--color-text-light)",
          }}
        >
          {allClients.length > displayed.length && `+ ${allClients.length - displayed.length} more partners`}
        </p>
      </div>
    </section>
  );
}

import { useTranslations } from "next-intl";
import Image from "next/image";

const CLIENTS = [
  { name: "Tổng Cục Thuế", logo: "/partner/logo-thue-nha-nuoc-vector-inkythuatso-01.png" },
  { name: "Cục Hàng Hải VN", logo: "/partner/Logo_Cục_Hàng_hải_Việt_Nam-removebg-preview.png" },
  { name: "Thanh Tra VN", logo: "/partner/logo-thanh-tra-viet-nam.png" },
  { name: "Viettel", logo: "/partner/logo-viettel.png" },
  { name: "HABECO", logo: "/partner/logo-habeco.png" },
  { name: "Casper", logo: "/partner/logo-casper.png" },
];

export default function ClientsPreview() {
  const t = useTranslations("clients");

  return (
    <section className="section section-light" id="clients-preview">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="section-label">{t("section_label")}</span>
          <h2 className="section-title">{t("title")}</h2>
          <p style={{ color: "var(--color-text-muted)", maxWidth: 560, margin: "0 auto", fontSize: 15, lineHeight: 1.7 }}>
            {t("description")}
          </p>
        </div>

        <div className="logo-grid-clean">
          {CLIENTS.map((client) => (
            <div key={client.name} className="logo-card">
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

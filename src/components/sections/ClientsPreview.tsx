import { useTranslations } from "next-intl";
import Image from "next/image";

const CLIENTS = [
  { name: "Tổng Cục Thuế", logo: "/partner/logo-thue-nha-nuoc-vector-inkythuatso-01.png", featured: true },
  { name: "Cục Hàng Hải VN", logo: "/partner/Logo_Cục_Hàng_hải_Việt_Nam-removebg-preview.png", featured: true },
  { name: "Thanh Tra VN", logo: "/partner/logo-thanh-tra-viet-nam.png", featured: true },
  { name: "Viettel", logo: "/partner/logo-viettel.png" },
  { name: "HABECO", logo: "/partner/logo-habeco.png" },
  { name: "Casper", logo: "/partner/logo-casper.png" },
];

export default function ClientsPreview() {
  const t = useTranslations("clients");

  return (
    <section className="section section-light clients-preview" id="clients-preview">
      <div className="container">
        <div className="clients-preview-header">
          <span className="section-label">{t("section_label")}</span>
          <h2 className="section-title">{t("title")}</h2>
          <p className="clients-preview-desc">{t("description")}</p>
        </div>

        <div className="clients-preview-grid">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className={`clients-preview-card${client.featured ? " clients-preview-card--gov" : ""}`}
            >
              <div className="clients-preview-logo">
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

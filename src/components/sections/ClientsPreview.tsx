import { useTranslations } from "next-intl";

const GOV_CLIENTS = [
  "Tổng Cục Thuế",
  "Cục Hàng Hải VN",
  "Thanh Tra VN",
  "Viettel",
  "Bộ Tài Chính",
  "AO Smith",
  "HABECO",
  "Casper",
];

const ENT_CLIENTS = [
  "Samsung",
  "VNPAY",
  "NEC",
  "Mộc Châu Milk",
  "Sữa Ba Vì",
  "Wilmar",
  "AIA",
  "Nhất Nhất",
  "Nam Dược",
  "Rạng Đông",
  "VICOSTONE",
  "Men's Vodka",
];

export default function ClientsPreview() {
  const t = useTranslations("clients");

  const allClients = [...GOV_CLIENTS, ...ENT_CLIENTS];
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
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: 16,
          }}
        >
          {displayed.map((name, i) => (
            <div key={i} className="logo-item">
              <span className="logo-text">{name}</span>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: 24,
            fontSize: 13,
            color: "var(--color-text-light)",
          }}
        >
          + {allClients.length - displayed.length} more partners
        </p>
      </div>
    </section>
  );
}

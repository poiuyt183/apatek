import { useTranslations } from "next-intl";

export default function StatsBar() {
  const t = useTranslations("hero");

  const stats = [
    { value: "6+", label: t("stat1_label") },
    { value: "50+", label: t("stat2_label") },
    { value: "100+", label: t("stat3_label") },
    { value: "2019", label: "Founded" },
  ];

  return (
    <section className="stats-bar">
      <div className="container">
        <div className="stats-bar-grid">
          {stats.map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "vi"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/gioi-thieu": {
      en: "/about",
      vi: "/gioi-thieu",
    },
    "/lich-su": {
      en: "/history",
      vi: "/lich-su",
    },
    "/tam-nhin": {
      en: "/vision",
      vi: "/tam-nhin",
    },
    "/giai-phap": {
      en: "/solutions",
      vi: "/giai-phap",
    },
    "/san-pham-dich-vu": {
      en: "/solutions",
      vi: "/giai-phap",
    },
    "/doi-ngu": {
      en: "/team",
      vi: "/doi-ngu",
    },
    "/doi-tac": {
      en: "/partners",
      vi: "/doi-tac",
    },
    "/khach-hang": {
      en: "/clients",
      vi: "/khach-hang",
    },
    "/lien-he": {
      en: "/contact",
      vi: "/lien-he",
    },
    "/tin-tuc": {
      en: "/news",
      vi: "/tin-tuc",
    },
    "/tuyen-dung": {
      en: "/careers",
      vi: "/tuyen-dung",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

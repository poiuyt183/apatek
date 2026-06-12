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
    "/san-pham-dich-vu": {
      en: "/products-services",
      vi: "/san-pham-dich-vu",
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
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

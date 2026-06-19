export type CareerJob = {
  id: string;
  department: "engineering" | "maritime" | "business";
  location: "hanoi" | "hcmc";
  type: "fulltime";
};

export const CAREER_JOBS: CareerJob[] = [
  {
    id: "software-engineer",
    department: "engineering",
    location: "hanoi",
    type: "fulltime",
  },
  {
    id: "vts-engineer",
    department: "maritime",
    location: "hanoi",
    type: "fulltime",
  },
  {
    id: "business-development",
    department: "business",
    location: "hcmc",
    type: "fulltime",
  },
];

export function getCareersBasePath(locale: string) {
  return locale === "vi" ? "/tuyen-dung" : "/careers";
}

export function getCareersHref(locale: string) {
  return `/${locale}${getCareersBasePath(locale)}`;
}

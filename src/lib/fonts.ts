import { Plus_Jakarta_Sans, Source_Sans_3 } from "next/font/google";

export const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const bodyFont = Source_Sans_3({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-source-sans",
  display: "swap",
});

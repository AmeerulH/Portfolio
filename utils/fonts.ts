import { Bitter, Open_Sans, Source_Sans_Pro } from "next/font/google";

export const bitter = Bitter({
  subsets: ["latin"],
  variable: "--font-bitter",
  weight: ["400", "700", "900"],
});

export const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "500", "700", "800"],
});

export const source_sans_pro = Source_Sans_Pro({
  subsets: ["latin"],
  variable: "--font-source-sans-pro",
  weight: ["400", "700", "900"],
});

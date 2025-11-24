import { Geist_Mono, TASA_Orbiter } from "next/font/google";

export const fontSans = TASA_Orbiter({
  subsets: ["latin"],
  fallback: ["system-ui", "sans-serif"],
  variable: "--font-sans",
  display: "swap",
  weight: "variable",
});

export const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  style: ["normal"],
  weight: ["400"],
});

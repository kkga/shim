import { Fragment_Mono, TASA_Explorer } from "next/font/google";

export const fontSans = TASA_Explorer({
  subsets: ["latin"],
  fallback: ["system-ui", "sans-serif"],
  variable: "--font-sans",
  display: "swap",
  weight: "variable",
});

export const fontMono = Fragment_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  style: ["normal"],
  weight: ["400"],
});

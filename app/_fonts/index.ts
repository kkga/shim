import { Host_Grotesk, JetBrains_Mono } from "next/font/google";

export const fontSans = Host_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  style: ["normal", "italic"],
  weight: "variable",
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  style: ["normal"],
  weight: ["400"],
});

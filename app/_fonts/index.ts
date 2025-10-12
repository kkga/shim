import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const fontMono = localFont({
  src: [{ path: "./commit-mono.woff2" }],
  variable: "--font-mono",
  display: "swap",
});

export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  style: "normal",
  axes: ["opsz"],
});

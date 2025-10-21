import { Inter, JetBrains_Mono } from "next/font/google";

// export const fontMono = localFont({
//   src: [{ path: "./commit-mono.woff2" }],
//   variable: "--font-mono",
//   display: "swap",
// });

export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  style: ["normal", "italic"],
});

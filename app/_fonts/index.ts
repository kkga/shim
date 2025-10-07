import { Mona_Sans } from "next/font/google";
import localFont from "next/font/local";

export const fontMono = localFont({
  src: [{ path: "./MonaspaceNeon-Regular.woff2" }],
  variable: "--font-mono",
  display: "swap",
});

export const fontSans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  style: "normal",
  axes: ["wdth"],
});

// export const fontSans = localFont({
//   src: [{ path: "./MonaSans[ital,wdth,wght].woff2" }],
//   variable: "--font-sans",
//   display: "swap",
//   weight: "200 900",
//   style: "italic",
// });

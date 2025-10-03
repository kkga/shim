import localFont from "next/font/local";

export const fontMono = localFont({
  src: [{ path: "./MonaspaceNeon-Regular.woff2" }],
  variable: "--font-mono",
});

export const fontSans = localFont({
  src: [{ path: "./Mona-Sans.woff2" }],
  variable: "--font-sans",
});

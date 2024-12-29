import localFont from "next/font/local"

export const fontMono = localFont({
  src: [{ path: "./commit-mono.woff2" }],
  variable: "--font-mono",
})

export const fontSans = localFont({
  src: [{ path: "./Mona-Sans.woff2" }],
  variable: "--font-sans",
})

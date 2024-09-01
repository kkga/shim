import "../theme/theme.css"
import "./site.css"

import { ClientProviders, ThemeProvider } from "@/components/providers"
import DarkIcon from "@/icon-dark.png"
import LightIcon from "@/icon-light.png"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { StrictMode, useMemo } from "react"
import { LocalizedStringProvider } from "react-aria-components/i18n"
import { fontMono, fontSans } from "./fonts"
import { baseUrl } from "./sitemap"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Shim",
    template: "%s — Shim",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "My Portfolio",
    description: "This is my portfolio.",
    url: baseUrl,
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      {
        rel: "icon",
        media: "(prefers-color-scheme: light)",
        type: "image/png",
        url: LightIcon.src,
      },
      {
        rel: "icon",
        media: "(prefers-color-scheme: dark)",
        type: "image/png",
        url: DarkIcon.src,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StrictMode>
      <html
        lang="en"
        suppressHydrationWarning
        className={`${fontMono.variable} ${fontSans.variable}`}
      >
        <body className="bg-background text-neutral-text antialiased">
          <LocalizedStringProvider locale="en-US" />
          <ClientProviders>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}

              <Analytics />
              <SpeedInsights />
            </ThemeProvider>
          </ClientProviders>
        </body>
      </html>
    </StrictMode>
  )
}

import "../theme/theme.css"
import "./site.css"

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { StrictMode, type ReactNode } from "react"
import { LocalizedStringProvider } from "react-aria-components/i18n"
import { ClientProviders, ThemeProvider } from "./_components/providers"
import { fontMono, fontSans } from "./_fonts"
import DarkIcon from "./icon-dark.png"
import LightIcon from "./icon-light.png"
import { baseUrl } from "./sitemap"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Shim",
    template: "%s — Shim",
  },
  description: "Toolkit for refined interfaces.",
  openGraph: {
    title: {
      default: "Shim",
      template: "%s — Shim",
    },
    description: "Toolkit for refined interfaces.",
    url: baseUrl,
    siteName: "Shim",
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
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <StrictMode>
      <html
        lang="en"
        suppressHydrationWarning
        className={`${fontMono.variable} ${fontSans.variable}`}
      >
        <body
          className="text-neutral-text antialiased"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent 0px 3px, var(--gray-3) 3px 4px )",
          }}
        >
          <LocalizedStringProvider locale="en-US" />
          <ClientProviders>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
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

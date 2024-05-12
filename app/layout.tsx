import "./styles/base.css"
import "./styles/site.css"

import { ClientProviders, ThemeProvider } from "@/components/providers"
import DarkIcon from "@/icon-dark.png"
import LightIcon from "@/icon-light.png"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { useMemo } from "react"
import { LocalizedStringProvider } from "react-aria-components/i18n"
import { fontMono, fontSans } from "./_fonts"
import { Sidebar } from "./components/sidebar"
import { getComponentDocs, getGuides } from "./docs/lib/utils"
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
  let docs = getComponentDocs()
  let guides = getGuides()

  let navItems = useMemo(() => {
    return [
      ...guides.map((guide) => ({
        slug: `guides/${guide.slug}`,
        name: guide.metadata.title,
        category: "Intro",
      })),
      ...docs.map((doc) => ({
        slug: doc.slug,
        name: doc.metadata.name,
        category: doc.metadata.category,
        status: doc.metadata.status,
      })),
    ]
  }, [docs, guides])

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontMono.variable} ${fontSans.variable}`}
    >
      <body className="bg-[var(--color-bg-body)] text-neutral-text antialiased">
        <LocalizedStringProvider locale="en-US" />
        <ClientProviders>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex min-h-svh">
              <div className="w-80 shrink-0">
                <Sidebar items={navItems} />
              </div>

              <main className="flex-1 py-16 px-8">
                <div className="mx-auto max-w-4xl text-[14px] leading-normal [&_.s-box]:-mx-4">
                  {children}
                </div>
              </main>
            </div>

            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
        </ClientProviders>
      </body>
    </html>
  )
}

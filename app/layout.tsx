import "./styles/base.css"
import "./styles/site.css"

import { LocalizedStringProvider } from "react-aria-components/i18n"
import { ClientProviders, ThemeProvider } from "@/components/providers"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { useMemo } from "react"
import { fontMono, fontSans } from "./_fonts"
import { Sidebar } from "./components/sidebar"
import { getComponentDocs, getGuides } from "./docs/lib/utils"
import { baseUrl } from "./sitemap"
import { stat } from "fs"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Next.js Portfolio Starter",
    template: "%s | Next.js Portfolio Starter",
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
              <div className="w-72 shrink-0">
                <Sidebar items={navItems} />
              </div>

              <main className="flex-1 py-16 px-8">
                <div className="mx-auto max-w-4xl text-[15px] leading-6 [&_.s-box]:-mx-4">
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

import './styles/base.css'
import './styles/site.css'

import localFont from 'next/font/local'

import { ClientProviders, ThemeProvider } from '@/components/providers'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Sidebar } from './components/sidebar'
import { getAllDocs, getNavItems } from './docs/utils'
import { baseUrl } from './sitemap'

const fontMono = localFont({
  src: '_fonts/CommitMonoVariable.woff2',
  variable: '--font-mono',
})

const fontSans = localFont({
  src: [
    {
      path: '_fonts/InterVariable.woff2',
      style: 'normal',
    },
    {
      path: '_fonts/InterVariable-Italic.woff2',
      style: 'italic',
    },
  ],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Next.js Portfolio Starter',
    template: '%s | Next.js Portfolio Starter',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'My Portfolio',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const docs = getAllDocs()
  const navItems = getNavItems(docs)

  return (
    <html
      lang="en"
      className={`${fontMono.variable} ${fontSans.variable} text-neutral-text bg-neutral-base`}
      suppressHydrationWarning
    >
      <body
        style={{ gridTemplateAreas: '"aside main"' }}
        className="antialiased min-h-screen overflow-auto grid grid-cols-[minmax(auto,240px)_1fr]"
      >
        <ClientProviders>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Sidebar items={navItems} />

            <main className="overflow-scroll px-8 py-16">
              <div className="max-w-3xl mx-auto">{children}</div>
            </main>

            {/* <Footer /> */}
            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
        </ClientProviders>
      </body>
    </html>
  )
}

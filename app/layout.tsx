import './styles/base.css'
import './styles/site.css'

import localFont from 'next/font/local'

import { ClientProviders, ThemeProvider } from '@/components/providers'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { useMemo } from 'react'
import { Sidebar } from './components/sidebar'
import { getAllDocs } from './docs/utils'
import { baseUrl } from './sitemap'

const fontMono = localFont({
  // src: '_fonts/CommitMonoVariable.woff2',
  src: '_fonts/JetbrainsMono-Regular.woff2',
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

  const navItems = useMemo(() => {
    return docs.map((doc) => ({
      slug: doc.slug,
      name: doc.metadata.name,
      category: doc.metadata.category,
    }))
  }, [docs])

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontMono.variable} ${fontSans.variable}`}
    >
      <body className="bg-neutral-bg-subtle text-neutral-text antialiased dark:bg-neutral-base">
        <ClientProviders>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div
              style={{ gridTemplateAreas: '"sidebar main"' }}
              className="grid min-h-screen grid-cols-[minmax(auto,var(--sidebar-width))_1fr]"
            >
              <Sidebar items={navItems} />

              <main className="py-16 px-8">
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

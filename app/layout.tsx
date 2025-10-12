import "./site.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { type ReactNode, StrictMode } from "react";
import { LocalizedStringProvider } from "react-aria-components/i18n";
import { ClientProviders, ThemeProvider } from "./_components/providers";
import { fontSans } from "./_fonts";
import DarkIcon from "./_img/icon-dark.png";
import LightIcon from "./_img/icon-light.png";
import { baseUrl } from "./sitemap";

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
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <StrictMode>
      <html
        className={`${fontSans.variable}`}
        lang="en"
        suppressHydrationWarning
      >
        <body className="bg-pure text-neutral-text antialiased">
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
  );
}

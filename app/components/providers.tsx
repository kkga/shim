'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

import { useRouter } from 'next/navigation'
import { RouterProvider } from 'react-aria-components'

export function ClientProviders({ children }) {
  const router = useRouter()
  return <RouterProvider navigate={router.push}>{children}</RouterProvider>
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

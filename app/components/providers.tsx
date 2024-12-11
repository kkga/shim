"use client"

import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes"

import { useRouter } from "next/navigation"
import { RouterProvider } from "react-aria-components"

export function ClientProviders({ children }) {
  const router = useRouter()
  return <RouterProvider navigate={router.push}>{children}</RouterProvider>
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

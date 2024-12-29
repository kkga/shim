"use client"

import { Size } from "@/lib/theme"
import { MoonStars, Sun } from "@phosphor-icons/react"
import { Button } from "@ui/Button"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

function ThemeButton({ size }: { size?: Size }) {
  let [mounted, setMounted] = useState(false)
  let { theme, systemTheme, resolvedTheme, setTheme } = useTheme()

  let themes: string[]
  if (systemTheme === "dark") {
    themes = ["system", "light"]
  } else {
    themes = ["system", "dark"]
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleThemeChange = () => {
    const next =
      theme ? themes[(themes.indexOf(theme) + 1) % themes.length] : "system"
    setTheme(next)
  }

  return (
    <Button
      onPress={handleThemeChange}
      isIconOnly
      variant="ghost"
      intent="neutral"
      size={size}
    >
      {resolvedTheme === "dark" ?
        <MoonStars weight="duotone" size={16} />
      : <Sun weight="duotone" size={16} />}
    </Button>
  )
}

export { ThemeButton }

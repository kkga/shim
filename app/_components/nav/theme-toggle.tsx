"use client"

import { focusStyle } from "@/lib/style"
import { Size } from "@/lib/theme"
import { CircleHalfIcon } from "@phosphor-icons/react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Switch } from "react-aria-components"
import { tv } from "tailwind-variants"

const style = tv({
  slots: {
    container: "text-neutral-text group flex w-7 items-center outline-none",
    track: [
      focusStyle(),
      "flex h-3 w-full shrink-0 items-center justify-start rounded-full outline-offset-1",
    ],
    handle:
      "size-4.5 flex items-center justify-center rounded-full bg-clip-content transition-transform will-change-transform",
  },
  variants: {
    isPressed: { true: "" },
    isSelected: { true: "" },
    dark: {
      true: {
        track: "bg-neutral-bg",
        handle: "bg-neutral-solid -translate-x-0.75",
      },
    },
    light: {
      true: {
        track: "bg-neutral-bg",
        handle: "shadow-xs translate-x-3.25 bg-white",
      },
    },
  },
  compoundVariants: [
    {
      isPressed: true,
      class: { track: "bg-neutral-bg-active" },
    },
  ],
})

function ThemeToggle({}: { size?: Size }) {
  let [mounted, setMounted] = useState(false)
  let { theme, systemTheme, resolvedTheme, setTheme } = useTheme()
  let { container, track, handle } = style()

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
    <Switch
      className={container()}
      isSelected={resolvedTheme === "dark"}
      onChange={handleThemeChange}
    >
      {({ isPressed }) => (
        <div
          className={track({
            dark: resolvedTheme === "dark",
            light: resolvedTheme === "light",
            isPressed,
          })}
        >
          <div
            className={handle({
              dark: resolvedTheme === "dark",
              light: resolvedTheme === "light",
            })}
          >
            <CircleHalfIcon size={16} weight="fill" />
          </div>
        </div>
      )}
    </Switch>
  )
}

export { ThemeToggle }

'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { ListBox, ListBoxItem } from 'react-aria-components'

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleThemeChange = (keys) => {
    const theme = keys.values().next().value
    setTheme(theme)
  }

  return (
    <ListBox
      aria-label="Theme Switcher"
      selectionMode="single"
      selectionBehavior="replace"
      disallowEmptySelection
      orientation="horizontal"
      defaultSelectedKeys={theme ? new Set([theme]) : undefined}
      onSelectionChange={(keys) => handleThemeChange(keys)}
      className={'flex h-6 border rounded-full border-neutral-line p-px'}
    >
      <Item id="light">Light</Item>
      <Item id="dark">Dark</Item>
      <Item id="system">Auto</Item>
    </ListBox>
  )
}

function Item({ children, ...props }) {
  return (
    <ListBoxItem
      className="cursor-default outline-0 text-xs px-2 data-[selected]:text-neutral-text-contrast flex items-center rounded-full data-[selected]:bg-neutral-bg-active"
      {...props}
    >
      {children}
    </ListBoxItem>
  )
}

export { ThemeSwitch }

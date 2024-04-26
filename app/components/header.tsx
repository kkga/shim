import Link from 'next/link'
import { ThemeSwitch } from './theme-switch'

const navItems = {
  '/': {
    name: 'home',
  },
  '/docs': {
    name: 'docs',
  },
  'https://vercel.com/templates/next.js/portfolio-starter-kit': {
    name: 'deploy',
  },
}

export function Header() {
  return (
    <header className="flex justify-between items-center text-sm text-neutral-text">
      <nav
        className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
        id="nav"
      ></nav>

      <ThemeSwitch />
    </header>
  )
}

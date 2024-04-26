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

export function Navbar() {
  return (
    <aside>
      <div className="lg:sticky lg:top-20 flex justify-between items-center">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-4 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>

        <ThemeSwitch />
      </div>
    </aside>
  )
}

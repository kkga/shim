import Link from 'next/link'
import { getAllDocs } from 'app/docs/utils'
import { Header } from './header'

export function Sidebar() {
  let allDocs = getAllDocs()

  return (
    <aside
      style={{ gridArea: 'aside' }}
      className="p-8 overflow-auto sticky top-0 max-h-svh text-sm flex flex-col"
    >
      <div className="grow overflow-scroll p-4 border-r border-neutral-line">
        <Header />
        <nav>
          {' '}
          {allDocs.map(({ slug, metadata }) => (
            <Link
              key={slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/docs/${slug}`}
            >
              {' '}
              {metadata.name}{' '}
            </Link>
          ))}{' '}
        </nav>
      </div>
    </aside>
  )
}

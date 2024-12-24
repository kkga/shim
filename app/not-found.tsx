import { Link } from "@/components/Link"
import { Logo } from "./_components/logo"

export default function NotFound() {
  return (
    <section className="flex min-h-svh flex-row gap-4 p-12 text-sm">
      <div className="w-2xs flex flex-col items-start gap-4">
        <Logo className="text-neutral-text" />
        <h1 className="text-neutral-text-contrast m-0 text-lg font-semibold">
          404
        </h1>
        <p>
          The page you were looking for does not exist. You may have mistyped
          the address or the page may have moved.
        </p>
        <Link href="/">Go home</Link>
      </div>
    </section>
  )
}

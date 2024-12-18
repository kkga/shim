import { Link } from "@/components/Link"

export default function NotFound() {
  return (
    <section className="flex min-h-svh flex-row items-center justify-center gap-4 p-12">
      <h1 className="text-neutral-text-contrast m-0 text-2xl font-semibold">
        404
      </h1>
      <div className="border-neutral-line h-12 border border-l"></div>
      <p className="m-0 text-sm">
        Page not found. <Link href="/">Go home</Link>.
      </p>
    </section>
  )
}

import { SmileyMeltingIcon } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/shim-ui/link";

export default function NotFound() {
  return (
    <section className="flex min-h-svh flex-row gap-4 p-12 text-sm">
      <div className="flex w-2xs flex-col items-start gap-4">
        <div className="mb-8 flex items-center gap-2">
          <SmileyMeltingIcon
            className="text-neutral-text-subtle"
            size={40}
            weight="duotone"
          />
          <h1 className="m-0 font-medium text-neutral-text-subtle text-xl">
            404
          </h1>
        </div>
        <p>
          The page you were looking for does not exist. You may have mistyped
          the address or the page may have moved.
        </p>
        <Link href="/" variant="underline">
          Go home
        </Link>
      </div>
    </section>
  );
}

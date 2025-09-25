import { redirect } from "next/navigation"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Docs",
  description: "docs",
}

export default function Page() {
  redirect("/docs/guides/get-started")
}

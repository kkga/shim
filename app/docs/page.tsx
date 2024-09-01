import { redirect } from "next/navigation"

export const metadata = {
  title: "Docs",
  description: "docs",
}

export default function Page() {
  redirect("/docs/guides/get-started")
}

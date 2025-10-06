import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Docs",
  description: "docs",
};

export default function Page() {
  redirect("/docs/guides/get-started");
}

import { Docs } from "app/components/docs";

export const metadata = {
  title: "Docs",
  description: "docs",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Docs</h1>
      <Docs />
    </section>
  );
}

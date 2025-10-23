import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      demo: {
        group: "link",
        name: "main",
      },
    },
    {
      title: "Intent",
      description: (
        <p>
          Use the <code>intent</code> prop to set the semantic color of the
          link.
        </p>
      ),
      demo: {
        group: "link",
        name: "intent",
      },
    },
  ],
} satisfies DocModule;

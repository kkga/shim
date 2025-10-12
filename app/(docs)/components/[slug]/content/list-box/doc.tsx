import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      demo: {
        group: "list-box",
        name: "main",
      },
    },
    {
      title: "Sections",
      description: (
        <p>
          Use the <code>ListBoxSection</code> component to group related items
          under a shared heading.
        </p>
      ),
      demo: {
        group: "list-box",
        name: "sections",
      },
    },
    {
      title: "Content",
      description: (
        <p>
          Provide custom content inside <code>ListBoxItem</code> to show rich
          titles and descriptions.
        </p>
      ),
      demo: {
        group: "list-box",
        name: "content",
      },
    },
    {
      title: "Size",
      description: (
        <p>
          Use the <code>size</code> prop to adjust spacing and typography.
        </p>
      ),
      demo: {
        group: "list-box",
        name: "size",
      },
    },
  ],
} satisfies DocModule;

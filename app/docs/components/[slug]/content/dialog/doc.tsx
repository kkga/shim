import type { DocModule } from "@/app/docs/components/schema";

export default {
  sections: [
    {
      title: "Controlled open state",
      description: (
        <p>
          Wrap the dialog in a <code>{"<DialogTrigger>"}</code> to handle
          opening. Use the <code>isOpen</code> and <code>onOpenChange</code>{" "}
          props when you need to control the open state programmatically.
        </p>
      ),
      demo: {
        group: "dialog",
        name: "controlled",
      },
    },
    {
      title: "Accessing uncontrolled state",
      description: (
        <p>
          For uncontrolled dialogs, render children as a function that receives
          a<code>close</code> helper. Call <code>close</code> to dismiss the
          dialog from within the content.
        </p>
      ),
      demo: {
        group: "dialog",
        name: "close",
      },
    },
  ],
} satisfies DocModule;

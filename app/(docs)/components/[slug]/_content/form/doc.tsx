import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      demo: {
        group: "form",
        name: "main",
      },
    },
    {
      title: "Validation",
      description: (
        <p>
          Use the <code>validationErrors</code> prop to supply error messages
          for each field. Refer to the{" "}
          <a href="https://react-spectrum.adobe.com/react-aria/forms.html">
            React Aria forms guide
          </a>{" "}
          for validation patterns.
        </p>
      ),
      demo: {
        group: "form",
        name: "validation",
      },
      className: "items-stretch",
    },
  ],
} satisfies DocModule;

import { Link } from "@/app/(docs)/_components/mdx-components";
import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      demo: {
        group: "form",
        name: "main",
      },
      demoClassName: "max-w-3xs",
    },
    {
      title: "Validation",
      description: (
        <p>
          Use the <code>validationErrors</code> prop to supply error messages
          for each field. Refer to the{" "}
          <Link href="https://react-spectrum.adobe.com/react-aria/forms.html">
            React Aria forms guide
          </Link>{" "}
          for validation patterns.
        </p>
      ),
      demo: {
        group: "form",
        name: "validation",
      },
      demoClassName: "max-w-3xs",
    },
  ],
} satisfies DocModule;

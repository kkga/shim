import { Link } from "@/app/(docs)/_components/mdx-components";
import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      demo: {
        group: "combo-box",
        name: "main",
      },
    },
    {
      title: "Size",
      description: (
        <p>
          Use the <code>size</code> prop to set the size of the combo box.
        </p>
      ),
      demo: {
        group: "combo-box",
        name: "size",
      },
    },
    {
      title: "Content",
      description: (
        <>
          <p>
            ComboBox follows the{" "}
            <Link href="https://react-spectrum.adobe.com/react-aria/collections.html">
              Collections API
            </Link>{" "}
            and supports both static and dynamic items.
          </p>
          <p>
            Pass an <code>items</code> prop and a render function as children to
            render dynamic collections. The render function receives each item
            from <code>items</code> and should return a React element.
          </p>
        </>
      ),
      demo: {
        group: "combo-box",
        name: "content",
      },
    },
  ],
} satisfies DocModule;

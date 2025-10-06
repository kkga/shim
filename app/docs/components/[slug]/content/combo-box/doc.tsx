import type { DocModule } from "@/app/docs/components/schema";

export default {
  sections: [
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
            <a href="https://react-spectrum.adobe.com/react-aria/collections.html">
              Collections API
            </a>{" "}
            and accepts both static and dynamic items.
          </p>
          <p>
            To use dynamic items, pass an <code>items</code> prop to the combo
            box and a render function as children. The render function is called
            with each item in
            <code>items</code> and should return a React element.
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

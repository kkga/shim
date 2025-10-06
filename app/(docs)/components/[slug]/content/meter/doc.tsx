import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      title: "Custom range and labels",
      description: (
        <>
          <p>
            Provide additional context with the <code>label</code> and
            <code>description</code> props. Control the range via{" "}
            <code>minValue</code>
            and <code>maxValue</code>.
          </p>
          <p>
            See the{" "}
            <a href="https://react-spectrum.adobe.com/react-aria/Meter.html#props">
              API documentation
            </a>{" "}
            for details on each prop.
          </p>
        </>
      ),
      demo: {
        group: "meter",
        name: "custom",
      },
      className: "items-stretch",
      code: "custom",
    },
    {
      title: "Bar color",
      description: (
        <p>
          Apply a custom color to the meter bar with the <code>color</code>{" "}
          prop. Provide a static CSS color string or a function that maps the
          current value to a color.
        </p>
      ),
      demo: {
        group: "meter",
        name: "color",
      },
      className: "items-stretch",
      code: "color",
    },
  ],
} satisfies DocModule;

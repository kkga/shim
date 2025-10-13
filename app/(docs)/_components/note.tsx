import { tv } from "tailwind-variants";
import { match } from "ts-pattern";

const noteStyle = tv({
  slots: {
    container:
      "my-4 text-neutral-text leading-normal ring [&_code]:text-current",
    title: "block font-medium",
    content: "col-start-2 pr-2 *:my-1! *:last:mb-0!",
  },
  variants: {
    intent: {
      info: {
        container:
          "bg-gradient-to-br from-accent-2 to-accent-1 ring-accent-line",
        title: "text-accent-text!",
      },
      warning: {
        container:
          "bg-gradient-to-br from-warning-2 to-warning-1 ring-warning-line",
        title: "text-warning-text!",
      },
    },
    size: {
      1: {
        container: "gap-x-2 rounded-md py-2 pl-3 text-[13px]",
        title: "mb-1 text-[13px]",
      },
      2: {
        container: "gap-x-2 rounded-lg py-2.5 pl-4 text-[15px]",
        title: "mb-1 text-[15px]",
      },
      3: {
        container: "gap-x-2 rounded-xl py-2.5 pl-4 text-base",
        title: "mb-1 text-base",
      },
    },
  },
});

function Note({
  intent = "info",
  title,
  children,
  className,
  size = 1,
  preset,
}: {
  intent?: "info" | "warning";
  title?: string;
  children?: React.ReactNode;
  className?: string;
  size?: 1 | 2 | 3;
  preset?: "aria-label";
}) {
  let { container, title: titleStyle, content } = noteStyle({ intent, size });

  return (
    <div className={container({ className })}>
      <strong className={titleStyle()}>
        {match(preset)
          .with("aria-label", () => "Accessibility note")
          .otherwise(() => title ?? "Note")}
      </strong>
      <div className={content()}>
        {match(preset)
          .with("aria-label", () => (
            <>
              If a visible label isn&apos;t specified, an{" "}
              <code>aria-label</code> should be provided for accessibility.
            </>
          ))
          .otherwise(() => children)}
      </div>
    </div>
  );
}

export { Note };

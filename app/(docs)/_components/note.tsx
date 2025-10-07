import { tv } from "tailwind-variants";

const noteStyle = tv({
  slots: {
    container: "my-4 text-neutral-text leading-normal [&_code]:text-current",
    title: "block font-medium",
    content: "col-start-2 pr-2 *:my-1! *:last:mb-0!",
  },
  variants: {
    intent: {
      info: {
        container: "bg-gradient-to-r from-accent-2 to-transparent",
        title: "text-accent-text!",
      },
      warning: {
        container: "bg-gradient-to-r from-warning-2 to-transparent",
        title: "text-warning-text!",
      },
    },
    size: {
      1: {
        container:
          "-ml-[calc(1px+calc(var(--spacing)*3))] gap-x-2 rounded py-1.5 pl-3 text-[13px]",
        title: "mb-1 text-[13px]",
      },
      2: {
        container:
          "-ml-[calc(1px+calc(var(--spacing)*4))] gap-x-2 rounded-lg py-2.5 pl-4 text-sm",
        title: "mb-1 text-sm",
      },
      3: {
        container:
          "-ml-[calc(1px+calc(var(--spacing)*4))] gap-x-2 rounded-lg py-2.5 pl-4 text-base",
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
}: {
  intent?: "info" | "warning";
  title?: string;
  children: React.ReactNode;
  className?: string;
  size?: 1 | 2 | 3;
}) {
  let { container, title: titleStyle, content } = noteStyle({ intent, size });

  return (
    <div className={container({ className })}>
      <strong className={titleStyle()}>{title}</strong>
      <div className={content()}>{children}</div>
    </div>
  );
}

export { Note };

import type { ComponentPropsWithoutRef } from "react";
import { highlight as sugar } from "sugar-high";

export function Code({
  highlight = false,
  ...props
}: ComponentPropsWithoutRef<"code"> & {
  highlight?: boolean;
}) {
  let code = String(props.children).trim();
  let html = highlight ? sugar(code) : code;

  if (highlight) {
    return (
      <code
        className="min-w-min font-book font-mono text-accent-text"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Highlighted code
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <code className="min-w-min font-book font-mono text-accent-text">
      {html}
    </code>
  );
}

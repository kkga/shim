import { composeRenderProps } from "react-aria-components";
import { type ClassValue, cn } from "tailwind-variants";

/**
 * Combine a `className` render prop with additional Tailwind classes.
 *
 * Accepts either a static string or a render-prop function and returns the same shape.
 * Conflicts are resolved so that the incoming `className` wins over added classes.
 *
 * @typeParam T - The render-prop argument type forwarded to `className` functions.
 * @param className - Static class string or `(v: T) => string` render prop.
 * @param tw - One or more extra Tailwind class values to merge.
 * @returns A string if `className` is a string; otherwise a function `(v: T) => string`.
 *
 * @example
 * // Using an existing render-prop `className` and adding width
 * <Button className={cnRenderProps(props.className, "w-20")} />
 *
 * @example
 * // With a render-prop function (e.g., React Aria state)
 * <ListBoxItem
 *   className={cnRenderProps(
 *     ({ isSelected }) => (isSelected ? "bg-neutral-bg-active" : ""),
 *     "px-2"
 *   )}
 * />
 *
 * @see React Aria render props: https://react-spectrum.adobe.com/react-aria/styling.html#render-props
 */
export function cnRenderProps<T>(
  className: ClassValue | ((v: T) => string) | undefined,
  ...tw: ClassValue[]
): string | ((v: T) => string) {
  return composeRenderProps(className, (innerClassName) =>
    cn(tw, innerClassName)
  );
}

export const INTENTS = [
  "neutral",
  "accent",
  "success",
  "warning",
  "danger",
] as const;
export type Intent = (typeof INTENTS)[number];

// export const focusStyle = tv({
//   base: [
//     "outline-0 outline-accent-focus-ring outline-offset-1",
//     "data-focus-visible:outline-2 group-data-focus-visible:outline-2",
//   ],
// });

import { composeRenderProps } from "react-aria-components";
import { type ClassValue, cn } from "tailwind-variants";

/**
 * Merge an incoming `className` prop with additional Tailwind classes.
 *
 * Use this helper when building React Aria Components wrappers to combine
 * user-provided classes with your own styling. The incoming `className` takes
 * precedence in conflicts.
 *
 * **Note:** If you need access to render prop values (like `isDisabled`, `isPressed`)
 * to compute dynamic styles, use `composeRenderProps` directly instead.
 *
 * @param className - The incoming `className` prop (static string, render function, or undefined).
 * @param tw - Additional Tailwind classes to merge.
 * @returns A className value of the same type as the input.
 *
 * @example
 * // Merge incoming className prop with additional styling
 * <Button className={cnRenderProps(props.className, "px-4 py-2 rounded")} />
 *
 * @example
 * // When you need dynamic styles based on component state, use composeRenderProps
 * <Button
 *   className={composeRenderProps(props.className, (className, renderProps) =>
 *     style({ ...renderProps, size, className })
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

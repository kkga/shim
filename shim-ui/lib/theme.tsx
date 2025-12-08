"use client";
import { createContext, useContext } from "react";

export type Size = 1 | 2 | 3 | 4;
export type Intent = "neutral" | "accent" | "success" | "warning" | "danger";
export type LabelPosition = "top" | "side" | "side-end";
export type ButtonVariant = "soft" | "solid" | "ghost";
export type FieldVariant = "classic" | "soft" | "outline";
export type TableVariant = "surface" | "soft" | "ghost" | "zebra";
export type BadgeVariant = "surface" | "soft" | "solid";
export type WellVariant = "classic" | "soft" | "surface" | "outline";
export type TabListVariant = "soft" | "underline";

export const ICON_SIZE_MAP: Record<Size, number> = {
  1: 12,
  2: 16,
  3: 16,
  4: 20,
};

interface ThemeVariants {
  button: ButtonVariant;
  field: FieldVariant;
  table: TableVariant;
  badge: BadgeVariant;
  well: WellVariant;
}

interface ThemeValues {
  size: Size;
  labelPosition: LabelPosition;
  variants: ThemeVariants;
}

const ThemeContext = createContext<ThemeValues>({
  size: 1,
  labelPosition: "top",
  variants: {
    button: "soft",
    field: "classic",
    table: "surface",
    badge: "surface",
    well: "classic",
  },
});

interface ThemeOverrides {
  size?: Size;
  labelPosition?: LabelPosition;
  variants?: Partial<ThemeVariants>;
}

interface ThemeProps extends ThemeOverrides {
  children: React.ReactNode;
}

/**
 * Theme provider component that allows overriding theme values for a subtree.
 * Merges provided values with the current theme context.
 * @example
 *   <Theme size={2} variants={{ field: "soft", button: "ghost" }}>
 *     <MyForm />
 *   </Theme>
 */
export function Theme({ children, ...props }: ThemeProps) {
  const currentValue = useContext(ThemeContext);
  const newValue = {
    ...currentValue,
    ...props,
    variants: {
      ...currentValue.variants,
      ...props.variants,
    },
  };
  return (
    <ThemeContext.Provider value={newValue}>{children}</ThemeContext.Provider>
  );
}

/**
 * Hook to access and merge theme properties from context.
 * Returns the current theme with any provided overrides merged in.
 * @example
 *   const { size, variants } = useThemeProps({
 *     size: props.size,
 *     ...buildVariantOverrides("field", props.variant),
 *   });
 */
export function useThemeProps(props?: {
  size?: Size;
  labelPosition?: LabelPosition;
  variants?: Partial<ThemeVariants>;
}): ThemeValues {
  const themeProps = useContext(ThemeContext);

  return {
    size: props?.size ?? themeProps.size,
    labelPosition: props?.labelPosition ?? themeProps.labelPosition,
    variants: {
      ...themeProps.variants,
      ...props?.variants,
    },
  };
}

type VariantKind = keyof ThemeVariants;

/**
 * Helper to create typed variant overrides consistently across components
 * for use with `useThemeProps`.
 * @example
 *   const themeProps = useThemeProps({
 *     ...props,
 *     ...buildVariantOverrides("button", props.variant),
 *   });
 */
export function buildVariantOverrides<K extends VariantKind>(
  kind: K,
  variant?: ThemeVariants[K]
): { variants: Partial<ThemeVariants> } | undefined {
  return variant ? { variants: { [kind]: variant } } : undefined;
}

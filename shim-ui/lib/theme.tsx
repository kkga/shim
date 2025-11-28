"use client";
import { createContext, useContext } from "react";

type Size = 1 | 2 | 3 | 4;
type LabelPosition = "top" | "side";
type ButtonVariant = "soft" | "solid" | "ghost";
type FieldVariant = "classic" | "soft" | "outline";
type TableVariant = "classic" | "grid";
type BadgeVariant = "surface" | "soft" | "solid";

const ICON_SIZE_MAP: Record<Size, number> = {
  1: 12,
  2: 16,
  3: 16,
  4: 20,
};

interface ThemeContextProps {
  size: Size;
  labelPosition: LabelPosition;
  variants: {
    button: ButtonVariant;
    field: FieldVariant;
    table: TableVariant;
    badge: BadgeVariant;
  };
}

const ThemeContext = createContext<ThemeContextProps>({
  size: 1,
  labelPosition: "top",
  variants: {
    button: "soft",
    field: "classic",
    table: "classic",
    badge: "surface",
  },
});

interface ThemeProps {
  children: React.ReactNode;
  size?: Size;
  labelPosition?: LabelPosition;
  variants?: Partial<ThemeContextProps["variants"]>;
}

/**
 * Theme provider component that allows overriding theme values for a subtree.
 * Merges provided values with the current theme context.
 * @example
 *   <Theme size={2} variants={{ field: "soft", button: "ghost" }}>
 *     <MyForm />
 *   </Theme>
 */
function Theme({ children, ...props }: ThemeProps) {
  let currentValue = useContext(ThemeContext);
  let newValue = {
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
function useThemeProps(props?: {
  size?: Size;
  labelPosition?: LabelPosition;
  variants?: Partial<ThemeContextProps["variants"]>;
}): ThemeContextProps {
  let themeProps = useContext(ThemeContext);

  return {
    size: props?.size ?? themeProps.size,
    labelPosition: props?.labelPosition ?? themeProps.labelPosition,
    variants: {
      ...themeProps.variants,
      ...props?.variants,
    },
  };
}

type VariantKind = keyof ThemeContextProps["variants"];

/**
 * Helper to create typed variant overrides consistently across components
 * for use with `useThemeProps`.
 * @example
 *   const themeProps = useThemeProps({
 *     ...props,
 *     ...buildVariantOverrides("button", props.variant),
 *   });
 */
function buildVariantOverrides<K extends VariantKind>(
  kind: K,
  variant?: ThemeContextProps["variants"][K]
): { variants: Partial<ThemeContextProps["variants"]> } | undefined {
  return variant ? { variants: { [kind]: variant } } : undefined;
}

export type { Size, ThemeContextProps };
export { useThemeProps, ICON_SIZE_MAP, Theme, buildVariantOverrides };

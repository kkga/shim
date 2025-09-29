"use client";
import { createContext, useContext } from "react";

export const SIZE_SMALL = 1;
export const SIZE_MEDIUM = 2;
export const SIZE_LARGE = 3;
export const SIZE_EXTRA_LARGE = 4;

export const SIZES = [
  SIZE_SMALL,
  SIZE_MEDIUM,
  SIZE_LARGE,
  SIZE_EXTRA_LARGE,
] as const;
export type Size = (typeof SIZES)[number];

export const ICON_SIZES: Record<Size, number> = {
  1: 12,
  2: 16,
  3: 16,
  4: 20,
} as const;

export interface ThemeContextProps {
  size: Size;
  labelPosition: "top" | "side";
  fieldVariant: "classic" | "soft" | "outline";
  buttonVariant: "soft" | "solid" | "ghost";
}

const ThemeContext = createContext<ThemeContextProps>({
  size: 1,
  labelPosition: "top",
  fieldVariant: "classic",
  buttonVariant: "soft",
});

interface ThemeProps extends Partial<ThemeContextProps> {
  children: React.ReactNode;
}

export function Theme({ children, ...props }: ThemeProps) {
  const currentContextValue = useContext(ThemeContext);
  const contextValue = { ...currentContextValue, ...props };
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeProps(
  props: Partial<ThemeContextProps> = {}
): ThemeContextProps {
  let themeProps = useContext(ThemeContext);

  return {
    size: props.size ?? themeProps.size,
    labelPosition: props.labelPosition ?? themeProps.labelPosition,
    fieldVariant: props.fieldVariant ?? themeProps.fieldVariant,
    buttonVariant: props.buttonVariant ?? themeProps.buttonVariant,
  };
}

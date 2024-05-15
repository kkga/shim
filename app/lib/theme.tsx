import { createContext, useContext } from "react"

export type Size = 1 | 2 | 3

export interface ThemeContextProps {
  size: 1 | 2 | 3
  labelPosition: "top" | "side"
  fieldVariant: "classic" | "soft" | "outline"
  buttonVariant: "soft" | "solid" | "ghost"
}

const ThemeContext = createContext<ThemeContextProps>({
  size: 1,
  labelPosition: "top",
  fieldVariant: "classic",
  buttonVariant: "soft",
})

interface ThemeProps extends Partial<ThemeContextProps> {
  children: React.ReactNode
}

export function Theme({ children, ...props }: ThemeProps) {
  const currentContextValue = useContext(ThemeContext)
  const contextValue = { ...currentContextValue, ...props }
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeProps<T extends Partial<ThemeContextProps>>(
  props: T,
): ThemeContextProps {
  let themeProps = useContext(ThemeContext)

  return {
    size: props.size ?? themeProps.size,
    labelPosition: props.labelPosition ?? themeProps.labelPosition,
    fieldVariant: props.fieldVariant ?? themeProps.fieldVariant,
    buttonVariant: props.buttonVariant ?? themeProps.buttonVariant,
  }
}

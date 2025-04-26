import { focusStyle } from "@/lib/style"
import {
  ColorThumb as RACColorThumb,
  ColorThumbProps as RACColorThumbProps,
} from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"

const thumbStyles = tv({
  extend: focusStyle,
  base: "left-[50%] top-[50%] border border-white",
  variants: {
    variant: {
      loupe: "border-3 rounded-full",
      knob: "border-3 rounded-sm",
    },
    size: {
      1: "",
      2: "",
      3: "",
      4: "",
    },
    orientation: {
      horizontal: "",
      vertical: "",
    },
    // isFocusVisible: {
    //   true: "h-8 w-8",
    // },
    // isDragging: {
    //   true: "size-8",
    // },
    // isDisabled: {
    //   true: "border-gray-300 bg-gray-300 dark:border-zinc-700 dark:bg-zinc-800 forced-colors:border-[GrayText] forced-colors:bg-[GrayText]",
    // },
  },
  compoundVariants: [
    { variant: "loupe", size: 1, className: "size-5" },
    { variant: "loupe", size: 2, className: "size-6" },
    { variant: "loupe", size: 3, className: "size-7" },
    { variant: "loupe", size: 4, className: "size-9" },
    {
      variant: "knob",
      orientation: "horizontal",
      size: 1,
      className: "h-7.5 w-3",
    },
    {
      variant: "knob",
      orientation: "horizontal",
      size: 2,
      className: "h-8.5 w-3",
    },
    {
      variant: "knob",
      orientation: "horizontal",
      size: 3,
      className: "h-9.5 w-3.5",
    },
    {
      variant: "knob",
      orientation: "horizontal",
      size: 4,
      className: "w-4.5 h-12 rounded-[5px] border-4",
    },
    {
      variant: "knob",
      orientation: "vertical",
      size: 1,
      className: "w-7.5 h-3",
    },
    {
      variant: "knob",
      orientation: "vertical",
      size: 2,
      className: "w-8.5 h-3",
    },
    {
      variant: "knob",
      orientation: "vertical",
      size: 3,
      className: "w-9.5 h-3.5",
    },
    {
      variant: "knob",
      orientation: "vertical",
      size: 4,
      className: "h-4.5 w-12 rounded-[5px] border-4",
    },
  ],
  defaultVariants: {
    size: 1,
    orientation: "horizontal",
    variant: "knob",
  },
})

interface ColorThumbProps
  extends RACColorThumbProps,
    VariantProps<typeof thumbStyles> {}

function ColorThumb({ size, variant, orientation, ...props }: ColorThumbProps) {
  return (
    <RACColorThumb
      {...props}
      style={({ defaultStyle }) => ({
        ...defaultStyle,
        // backgroundColor: isDisabled ? undefined : defaultStyle.backgroundColor,
        backgroundImage:
          "repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px",
        boxShadow:
          "0 0 0 1px var(--black-a3), var(--shadow-inner), var(--shadow-xs)",
      })}
      className={({}) => thumbStyles({ size, variant, orientation })}
    />
  )
}

export { ColorThumb, type ColorThumbProps }

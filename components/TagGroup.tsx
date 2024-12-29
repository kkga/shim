"use client"

import { Size, Theme, useThemeProps } from "@/lib/theme"
import { focusStyle } from "@lib/style"
import { X } from "@phosphor-icons/react"
import { createContext, useContext } from "react"
import {
  composeRenderProps,
  Button as RACButton,
  Tag as RACTag,
  TagGroup as RACTagGroup,
  TagGroupProps as RACTagGroupProps,
  TagList as RACTagList,
  TagListProps as RACTagListProps,
  TagProps as RACTagProps,
  Text as RACText,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import { Description, fieldLayoutStyle, Label } from "./Field"

const COLORS = {
  gray: "text-[var(--slate-11)] border-[var(--slate-7)] data-selection-mode:data-hovered:border-[var(--slate-8)] data-selected:bg-[var(--slate-10)]",
  blue: "text-[var(--iris-11)] border-[var(--iris-7)] data-selection-mode:data-hovered:border-[var(--iris-8)] data-selected:bg-[var(--iris-10)]",
  green:
    "text-[var(--green-11)] border-[var(--green-7)] data-selection-mode:data-hovered:border-[var(--green-8)] data-selected:bg-[var(--green-10)]",
  orange:
    "text-[var(--orange-11)] border-[var(--orange-7)] data-selection-mode:data-hovered:border-[var(--orange-8)] data-selected:bg-[var(--orange-10)]",
  red: "text-[var(--red-11)] border-[var(--red-7)] data-selection-mode:data-hovered:border-[var(--red-8)] data-selected:bg-[var(--red-10)]",
}

type Color = keyof typeof COLORS
const ColorContext = createContext<Color>("gray")

interface TagGroupProps<T>
  extends Omit<RACTagGroupProps, "children">,
    Pick<RACTagListProps<T>, "items" | "children" | "renderEmptyState"> {
  color?: Color
  size?: Size
  label?: string
  description?: string
  errorMessage?: string
}

function TagGroup<T extends object>({
  label,
  description,
  errorMessage,
  items,
  children,
  renderEmptyState,
  ...props
}: TagGroupProps<T>) {
  let themeProps = useThemeProps({ ...props })
  let { labelPosition } = themeProps

  return (
    <RACTagGroup
      {...props}
      className={fieldLayoutStyle({
        labelPosition,
        className: props.className,
      })}

      // className={cx("group flex flex-col gap-1.5", props.className)}
    >
      <Theme {...themeProps}>
        {label && <Label>{label}</Label>}
        <ColorContext.Provider value={props.color || "gray"}>
          <RACTagList
            items={items}
            renderEmptyState={renderEmptyState}
            className="flex flex-wrap gap-1.5"
          >
            {children}
          </RACTagList>
        </ColorContext.Provider>
        {description && <Description>{description}</Description>}
        {errorMessage && (
          <RACText slot="errorMessage" className="text-error-text text-xs">
            {errorMessage}
          </RACText>
        )}
      </Theme>
    </RACTagGroup>
  )
}

const style = tv({
  slots: {
    tag: [
      focusStyle(),
      "flex max-w-fit cursor-default items-center gap-1 overflow-clip rounded-full border leading-none",
      // selected
      "data-selected:text-white data-selected:border-transparent!",
      // disabled
      "data-disabled:bg-neutral-bg-subtle border-neutral-line text-neutral-placeholder",
    ],
    removeButton: [
      "border-current/30 -mr-px ml-1 flex h-5 cursor-default items-center justify-center rounded-r-full border-l",
      // hover
      "data-hovered:bg-current/10 data-pressed:bg-current/20",
    ],
  },
  variants: {
    allowsRemoving: {
      true: { tag: "pr-0!" },
    },
    size: {
      1: {
        tag: "h-5 px-2 text-xs",
        removeButton: "h-5 w-[22px] pr-0.5",
      },
      2: {
        tag: "h-6 px-2.5 text-[13px]",
        removeButton: "h-6 w-[26px] pr-1",
      },
      3: {
        tag: "h-7 px-3 text-sm",
        removeButton: "h-7 w-[30px] pr-1",
      },
      4: {
        tag: "h-9 px-3.5 text-base",
        removeButton: "h-9 w-[38px] pr-1.5",
      },
    },
    color: Object.keys(COLORS).reduce(
      (acc, key) => {
        acc[key as Color] = {
          tag: COLORS[key as Color],
        }
        return acc
      },
      {} as Record<Color, { tag: string }>,
    ),
  },
})

interface TagProps extends RACTagProps {
  color?: Color
  size?: Size
}

function Tag({ children, color, size: _size, ...props }: TagProps) {
  let textValue = typeof children === "string" ? children : undefined
  let groupColor = useContext(ColorContext)
  let { size } = useThemeProps({ size: _size })
  let { tag, removeButton } = style({ size, color: color || groupColor })

  return (
    <RACTag
      textValue={textValue}
      {...props}
      className={composeRenderProps(
        props.className,
        (className, { allowsRemoving }) => tag({ allowsRemoving, className }),
      )}
    >
      {({ allowsRemoving }) => (
        <>
          {children as React.ReactNode}
          {allowsRemoving && (
            <RACButton slot="remove" className={removeButton()}>
              <X aria-hidden size={size >= 3 ? 16 : 12} />
            </RACButton>
          )}
        </>
      )}
    </RACTag>
  )
}

export { Tag, TagGroup }
export type { TagGroupProps, TagProps }

"use client"

import { compose, cva, cx, focusStyle } from "@lib/style"
import { X } from "@phosphor-icons/react"
import { createContext, useContext } from "react"
import {
  Button as RACButton,
  Tag as RACTag,
  TagGroup as RACTagGroup,
  TagGroupProps as RACTagGroupProps,
  TagList as RACTagList,
  TagListProps as RACTagListProps,
  TagProps as RACTagProps,
  Text as RACText,
  composeRenderProps,
} from "react-aria-components"
import { Description, Label } from "./field"

const colors = {
  gray: "text-[var(--slate-11)] border-[var(--slate-7)] data-selection-mode:data-hovered:border-[var(--slate-8)] data-selected:bg-[var(--slate-10)]",
  blue: "text-[var(--iris-11)] border-[var(--iris-7)] data-selection-mode:data-hovered:border-[var(--iris-8)] data-selected:bg-[var(--iris-10)]",
  green:
    "text-[var(--green-11)] border-[var(--green-7)] data-selection-mode:data-hovered:border-[var(--green-8)] data-selected:bg-[var(--green-10)]",
  orange:
    "text-[var(--orange-11)] border-[var(--orange-7)] data-selection-mode:data-hovered:border-[var(--orange-8)] data-selected:bg-[var(--orange-10)]",
}

type Color = keyof typeof colors
const ColorContext = createContext<Color>("gray")

interface TagGroupProps<T>
  extends Omit<RACTagGroupProps, "children">,
    Pick<RACTagListProps<T>, "items" | "children" | "renderEmptyState"> {
  color?: Color
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
  return (
    <RACTagGroup
      {...props}
      className={cx("group flex flex-col gap-1.5", props.className)}
    >
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
        <RACText slot="errorMessage" className="text-xs text-error-text">
          {errorMessage}
        </RACText>
      )}
    </RACTagGroup>
  )
}

const tagStyles = {
  tagStyle: compose(
    focusStyle,
    cva({
      base: [
        "cursor-default text-xs rounded-full border px-2 h-5 flex items-center max-w-fit gap-1 overflow-clip",
        // allows removing
        "data-allows-removing:pr-0",
        // selected
        "data-selected:text-white data-selected:border-transparent!",
        // disabled
        "data-disabled:bg-neutral-bg-subtle border-neutral-line text-neutral-placeholder",
      ],
      variants: {
        color: colors,
      },
    }),
  ),

  removeButtonStyle: compose(
    focusStyle,
    cva({
      base: [
        "-mr-px ml-1 cursor-default rounded-r-full h-5 w-[22px] pr-0.5 flex items-center justify-center border-l border-current/30",
        // hover
        "data-hovered:bg-neutral-bg-hover",
      ],
    }),
  ),
}

interface TagProps extends RACTagProps {
  color?: Color
}

function Tag({ children, color, ...props }: TagProps) {
  let textValue = typeof children === "string" ? children : undefined
  let groupColor = useContext(ColorContext)
  let { tagStyle, removeButtonStyle } = tagStyles

  return (
    <RACTag
      textValue={textValue}
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tagStyle({ ...renderProps, className, color: color || groupColor }),
      )}
    >
      {({ allowsRemoving }) => (
        <>
          {children}
          {allowsRemoving && (
            <RACButton slot="remove" className={removeButtonStyle}>
              <X aria-hidden size={12} weight="bold" />
            </RACButton>
          )}
        </>
      )}
    </RACTag>
  )
}

export { Tag, TagGroup }
export type { TagGroupProps, TagProps }

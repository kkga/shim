"use client"

import { cx, cxRenderProps, focusStyle } from "@lib/style"
import { Theme, useThemeProps } from "@lib/theme"
import { ArrowDown, ArrowUp, DotsSixVertical } from "@phosphor-icons/react"
import {
  composeRenderProps,
  Button as RACButton,
  Cell as RACCell,
  Collection as RACCollection,
  Column as RACColumn,
  ColumnResizer as RACColumnResizer,
  Group as RACGroup,
  Row as RACRow,
  Table as RACTable,
  TableBody as RACTableBody,
  TableHeader as RACTableHeader,
  useTableOptions,
  type CellProps as RACCellProps,
  type ColumnProps as RACColumnProps,
  type RowProps as RACRowProps,
  type TableHeaderProps as RACTableHeaderProps,
  type TableProps as RACTableProps,
} from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"
import { Checkbox } from "./Checkbox"

const styles = {
  // TODO: add size variants
  table: tv({
    base: "overflow-hidden",
    variants: {
      variant: {
        ghost: "border-transparent",
        surface:
          "bg-background border-neutral-line border-separate border-spacing-0 rounded-lg border",
      },
    },
    defaultVariants: {
      variant: "surface",
    },
  }),
  column: tv({
    base: [
      "text-neutral-text-contrast group text-xs font-medium",
      // allows sorting
      "data-allows-sorting:cursor-default",
    ],
  }),

  header: tv({
    base: "inset-shadow-[0_-1px_0_var(--color-neutral-line)] bg-panel sticky top-0 z-10 text-xs font-medium",
  }),

  headerGroup: tv({
    extend: focusStyle,
    base: [
      "flex h-6 flex-1 items-center gap-1 overflow-auto rounded px-2",
      // allows sorting
      "group-data-hovered:group-data-allows-sorting:bg-neutral-bg-hover",
    ],
  }),
  resizer: tv({
    base: [
      "bg-neutral-line box-content h-6 w-px translate-x-2 cursor-col-resize rounded bg-clip-content px-2 py-1 -outline-offset-2",
      // resizing
      "data-resizing:w-[3px] data-resizing:px-[7px] data-resizing:bg-accent-border-hover",
    ],
  }),

  row: tv({
    extend: focusStyle,
    base: [
      "group/row text-neutral-text inset-shadow-[0_-1px_0_var(--color-neutral-line)] last:inset-shadow-none peer relative text-xs -outline-offset-2",
      // selection mode
      "data-[selection-mode]:cursor-default data-[selection-mode]:select-none",
      // hovered (in selection mode)
      "data-[hovered]:bg-neutral-bg-hover",
      // selected
      "data-[selected]:bg-accent-bg-hover",
      // hovered+selected (in selection mode)
      "data-[selected]:data-[hovered]:bg-accent-bg-active",
      // disabled
      "data-[disabled]:text-neutral-placeholder",
    ],
  }),

  cell: tv({
    extend: focusStyle,
    base: ["h-8 truncate px-3 -outline-offset-2"],
  }),
}

interface TableProps extends RACTableProps, VariantProps<typeof styles.table> {}

function Table({ className, ...props }: TableProps) {
  let themeProps = useThemeProps()

  return (
    <Theme {...themeProps}>
      {/* <RACResizableTableContainer> */}
      <RACTable
        {...props}
        className={cxRenderProps(className, styles.table())}
      />
      {/* </RACResizableTableContainer> */}
    </Theme>
  )
}

interface ColumnProps extends RACColumnProps {
  allowsResizing?: boolean
}

function Column(props: ColumnProps) {
  return (
    <RACColumn
      {...props}
      className={cxRenderProps(props.className, styles.column())}
    >
      {composeRenderProps(
        props.children,
        (children, { allowsSorting, sortDirection }) => (
          <div className="peer flex h-8 items-center justify-between px-1">
            <RACGroup
              role="presentation"
              tabIndex={-1}
              className={styles.headerGroup()}
            >
              <span className="truncate">{children}</span>
              {allowsSorting && (
                <span
                  className={cx(
                    "text-neutral-text group-data-hovered:visible invisible flex size-4 items-center justify-center",
                    sortDirection && "visible",
                  )}
                >
                  {sortDirection &&
                    (sortDirection === "ascending" ?
                      <ArrowDown weight="regular" size={16} aria-hidden />
                    : <ArrowUp weight="regular" size={16} aria-hidden />)}
                </span>
              )}
            </RACGroup>
            {props.allowsResizing && !props.width && (
              <RACColumnResizer className={styles.resizer()} />
            )}
          </div>
        ),
      )}
    </RACColumn>
  )
}

function TableHeader<T extends object>(props: RACTableHeaderProps<T>) {
  let { selectionBehavior, selectionMode, allowsDragging } = useTableOptions()

  return (
    <RACTableHeader
      {...props}
      className={cxRenderProps(props.className, styles.header())}
    >
      {/* Add extra columns for drag and drop and selection. */}
      {allowsDragging && <Column />}
      {selectionBehavior === "toggle" && (
        <RACColumn width={32} minWidth={32} className="w-8 px-0 pl-2">
          {selectionMode === "multiple" && <Checkbox slot="selection" />}
        </RACColumn>
      )}
      <RACCollection items={props.columns}>{props.children}</RACCollection>
    </RACTableHeader>
  )
}

function Row<T extends object>({
  id,
  columns,
  children,
  ...props
}: RACRowProps<T>) {
  let { selectionBehavior, allowsDragging } = useTableOptions()

  return (
    <RACRow id={id} {...props} className={styles.row()}>
      {allowsDragging && (
        <Cell className="max-w-8 px-2">
          <RACButton slot="drag">
            <DotsSixVertical size={16} weight="bold" />
          </RACButton>
        </Cell>
      )}
      {selectionBehavior === "toggle" && (
        <Cell className="w-8 pl-2">
          <Checkbox slot="selection" />
        </Cell>
      )}
      <RACCollection items={columns}>{children}</RACCollection>
    </RACRow>
  )
}

function Cell({ className, ...props }: RACCellProps) {
  return (
    <RACCell {...props} className={cxRenderProps(className, styles.cell())} />
  )
}

const TableBody = RACTableBody

export { Cell, Column, Row, Table, TableBody, TableHeader, type TableProps }

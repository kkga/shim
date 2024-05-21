"use client"

import { compose, cva, cx, cxRenderProps, focusStyle } from "@lib/style"
import { Theme, useThemeProps } from "@lib/theme"
import { ArrowDown, ArrowUp, DotsSixVertical } from "@phosphor-icons/react"
import { VariantProps } from "cva"
import {
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
  composeRenderProps,
  useTableOptions,
  type CellProps as RACCellProps,
  type ColumnProps as RACColumnProps,
  type RowProps as RACRowProps,
  type TableHeaderProps as RACTableHeaderProps,
  type TableProps as RACTableProps,
} from "react-aria-components"
import { Checkbox } from "./checkbox"

const styles = {
  // TODO: add size variants
  table: cva({
    base: "overflow-hidden",
    variants: {
      variant: {
        ghost: "border-transparent",
        surface:
          "bg-background border border-separate border-spacing-0 border-neutral-line rounded-lg",
      },
    },
    defaultVariants: {
      variant: "surface",
    },
  }),
  column: cva({
    base: [
      "group text-xs font-medium text-neutral-text-contrast",
      // allows sorting
      "data-allows-sorting:cursor-default",
    ],
  }),

  header: cva({
    base: "sticky top-0 z-10 text-xs font-medium inset-shadow-[0_-1px_0_var(--color-neutral-line)] bg-panel",
  }),

  headerGroup: compose(
    focusStyle,
    cva({
      base: [
        "px-1 gap-1 flex items-center rounded-md h-6",
        // allows sorting
        "group-data-hovered:group-data-allows-sorting:bg-neutral-bg-hover",
      ],
    }),
  ),
  resizer: compose(
    focusStyle,
    cva({
      base: [
        "w-px px-2 translate-x-2 box-content py-1 h-6 bg-clip-content bg-neutral-line cursor-col-resize rounded -outline-offset-2",
        // resizing
        "data-resizing:w-[3px] data-resizing:px-[7px] data-resizing:bg-accent-border-hover",
      ],
    }),
  ),

  row: compose(
    focusStyle,
    cva({
      base: [
        "group/row peer relative text-neutral-text text-xs -outline-offset-2 inset-shadow-[0_-1px_0_var(--color-neutral-line)] last:inset-shadow-none",
        // selection mode
        "data-[selection-mode]:select-none data-[selection-mode]:cursor-default",
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
  ),

  cell: compose(
    focusStyle,
    cva({
      base: ["px-2.5 h-8 truncate -outline-offset-2"],
    }),
  ),
}

interface TableProps extends RACTableProps, VariantProps<typeof styles.table> { }

function Table({ className, ...props }: TableProps) {
  let themeProps = useThemeProps({})

  return (
    <Theme {...themeProps}>
      <RACTable
        {...props}
        className={cxRenderProps(className, styles.table())}
      />
    </Theme>
    // <RACResizableTableContainer className="relative max-h-80 overflow-auto rounded-lg border border-neutral-line">
    // </RACResizableTableContainer>
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
          <div className="flex h-8 flex-col justify-center px-1">
            <RACGroup
              role="presentation"
              tabIndex={-1}
              className={styles.headerGroup()}
            >
              <span className="truncate">{children}</span>
              {allowsSorting && (
                <span
                  className={cx(
                    "invisible flex size-4 items-center justify-center text-neutral-text group-data-hovered:visible",
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
      className={styles.header({ className: props.className })}
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

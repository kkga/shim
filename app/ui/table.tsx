"use client"

import {
  compose,
  cva,
  cx,
  cxRenderProps,
  focusInsetStyle,
  focusStyle,
} from "@lib/utils"
import {
  ArrowDown,
  ArrowUp,
  DotsSixVertical,
  Minus,
} from "@phosphor-icons/react"
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

function Table(props: RACTableProps) {
  return (
    <RACTable {...props} className="border-collapse border-spacing-0" />
    // <RACResizableTableContainer className="relative max-h-80 overflow-auto rounded-lg border border-neutral-line">
    // </RACResizableTableContainer>
  )
}

const columnStyles = () => ({
  columnStyle: cva({
    base: [
      "group border-b border-neutral-line text-start text-sm font-medium text-neutral-text-contrast",
      // allows sorting
      "data-allows-sorting:cursor-default",
    ],
  }),
  headerGroupStyle: compose(
    focusInsetStyle,
    cva({
      base: [
        "px-2 gap-1 flex items-center rounded-md h-6",
        // allows sorting
        "group-data-hovered:group-data-allows-sorting:bg-neutral-bg-hover",
      ],
    }),
  ),
  resizerStyle: compose(
    focusInsetStyle,
    cva({
      base: [
        "w-px px-2 translate-x-2 box-content py-1 h-6 bg-clip-content bg-neutral-line cursor-col-resize rounded -outline-offset-2",
        // resizing
        "data-resizing:w-[3px] data-resizing:px-[7px] data-resizing:bg-accent-border-hover",
      ],
    }),
  ),
})

interface ColumnProps extends RACColumnProps {
  allowsResizing?: boolean
}

function Column(props: ColumnProps) {
  let { columnStyle, resizerStyle, headerGroupStyle } = columnStyles()

  return (
    <RACColumn
      {...props}
      className={cxRenderProps(props.className, columnStyle())}
    >
      {composeRenderProps(
        props.children,
        (children, { allowsSorting, sortDirection }) => (
          <div className="flex h-8 flex-col justify-center px-1">
            <RACGroup
              role="presentation"
              tabIndex={-1}
              className={headerGroupStyle}
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
              <RACColumnResizer className={resizerStyle} />
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
      className={cx("sticky top-0 z-10 text-sm font-medium", props.className)}
    >
      {/* Add extra columns for drag and drop and selection. */}
      {allowsDragging && <Column />}
      {selectionBehavior === "toggle" && (
        <RACColumn width={32} minWidth={32} className="w-8 p-2 text-start">
          {selectionMode === "multiple" && <Checkbox slot="selection" />}
        </RACColumn>
      )}
      <RACCollection items={props.columns}>{props.children}</RACCollection>
    </RACTableHeader>
  )
}

const rowStyles = compose(
  focusInsetStyle,
  cva({
    base: [
      "group/row peer relative text-neutral-text text-sm",
      // selection mode
      "data-[selection-mode]:select-none data-[selection-mode]:cursor-default",
      // selected
      "data-[selected]:bg-accent-bg-active",
      // hovered (in selection mode)
      "data-[hovered]:bg-neutral-bg-hover",
      // disabled
      "data-[disabled]:text-neutral-placeholder",
    ],
  }),
)

function Row<T extends object>({
  id,
  columns,
  children,
  ...props
}: RACRowProps<T>) {
  let { selectionBehavior, allowsDragging } = useTableOptions()

  return (
    <RACRow id={id} {...props} className={rowStyles}>
      {allowsDragging && (
        <Cell className="max-w-8 px-2">
          <RACButton slot="drag">
            <DotsSixVertical size={16} weight="bold" />
          </RACButton>
        </Cell>
      )}
      {selectionBehavior === "toggle" && (
        <Cell className="max-w-8 px-2">
          <Checkbox slot="selection" />
        </Cell>
      )}
      <RACCollection items={columns}>{children}</RACCollection>
    </RACRow>
  )
}

const cellStyle = compose(
  focusStyle,
  cva({
    base: ["px-3 h-8 truncate -outline-offset-2 border-b border-neutral-5"],
  }),
)

function Cell(props: RACCellProps) {
  return (
    <RACCell {...props} className={cellStyle({ className: props.className })} />
  )
}

const TableBody = RACTableBody

export { Cell, Column, Row, Table, TableBody, TableHeader }

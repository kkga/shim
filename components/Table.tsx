"use client";

import { cx, cxRenderProps, focusStyle } from "@lib/style";
import { Theme, useThemeProps } from "@lib/theme";
import { ArrowDown, ArrowUp, DotsSixVertical } from "@phosphor-icons/react";
import {
  composeRenderProps,
  Button as RacButton,
  Cell as RacCell,
  type CellProps as RacCellProps,
  Collection as RacCollection,
  Column as RacColumn,
  type ColumnProps as RacColumnProps,
  ColumnResizer as RacColumnResizer,
  Group as RacGroup,
  Row as RacRow,
  type RowProps as RacRowProps,
  Table as RacTable,
  TableBody as RacTableBody,
  TableHeader as RacTableHeader,
  type TableHeaderProps as RacTableHeaderProps,
  type TableProps as RacTableProps,
  useTableOptions,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";
import { Checkbox } from "./checkbox";

const styles = {
  // TODO: add size variants
  table: tv({
    base: "overflow-hidden",
    variants: {
      variant: {
        ghost: "border-transparent",
        surface:
          "border-separate border-spacing-0 rounded-lg border border-neutral-line bg-background",
      },
    },
    defaultVariants: {
      variant: "surface",
    },
  }),
  column: tv({
    base: [
      "group font-medium text-neutral-text-contrast text-xs",
      // allows sorting
      "data-allows-sorting:cursor-default",
    ],
  }),

  header: tv({
    base: "sticky inset-shadow-[0_-1px_0_var(--color-neutral-line)] top-0 z-10 bg-panel font-medium text-xs",
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
      "-outline-offset-2 box-content h-6 w-px translate-x-2 cursor-col-resize rounded bg-neutral-line bg-clip-content px-2 py-1",
      // resizing
      "data-resizing:w-[3px] data-resizing:bg-accent-border-hover data-resizing:px-[7px]",
    ],
  }),

  row: tv({
    extend: focusStyle,
    base: [
      "group/row peer -outline-offset-2 relative inset-shadow-[0_-1px_0_var(--color-neutral-line)] text-neutral-text text-xs last:inset-shadow-none",
      // selection mode
      "data-[selection-mode]:cursor-default data-[selection-mode]:select-none",
      // hovered (in selection mode)
      "data-[hovered]:bg-neutral-bg-hover",
      // selected
      "data-[selected]:bg-accent-bg-hover",
      // hovered+selected (in selection mode)
      "data-[selected]:data-[hovered]:bg-accent-bg-active",
      // disabled
      "data-[disabled]:text-neutral-text-subtle",
    ],
  }),

  cell: tv({
    extend: focusStyle,
    base: ["-outline-offset-2 h-8 truncate px-3"],
  }),
};

interface TableProps extends RacTableProps, VariantProps<typeof styles.table> {}

function Table({ className, ...props }: TableProps) {
  let themeProps = useThemeProps();

  return (
    <Theme {...themeProps}>
      {/* <RACResizableTableContainer> */}
      <RacTable
        {...props}
        className={cxRenderProps(className, styles.table())}
      />
      {/* </RACResizableTableContainer> */}
    </Theme>
  );
}

interface ColumnProps extends RacColumnProps {
  allowsResizing?: boolean;
}

function Column(props: ColumnProps) {
  return (
    <RacColumn
      {...props}
      className={cxRenderProps(props.className, styles.column())}
    >
      {composeRenderProps(
        props.children,
        (children, { allowsSorting, sortDirection }) => (
          <div className="peer flex h-8 items-center justify-between px-1">
            <RacGroup
              className={styles.headerGroup()}
              role="presentation"
              tabIndex={-1}
            >
              <span className="truncate">{children}</span>
              {allowsSorting && (
                <span
                  className={cx(
                    "invisible flex size-4 items-center justify-center text-neutral-text group-data-hovered:visible",
                    sortDirection && "visible"
                  )}
                >
                  {sortDirection &&
                    (sortDirection === "ascending" ? (
                      <ArrowDown aria-hidden size={16} weight="regular" />
                    ) : (
                      <ArrowUp aria-hidden size={16} weight="regular" />
                    ))}
                </span>
              )}
            </RacGroup>
            {props.allowsResizing && !props.width && (
              <RacColumnResizer className={styles.resizer()} />
            )}
          </div>
        )
      )}
    </RacColumn>
  );
}

function TableHeader<T extends object>(props: RacTableHeaderProps<T>) {
  let { selectionBehavior, selectionMode, allowsDragging } = useTableOptions();

  return (
    <RacTableHeader
      {...props}
      className={cxRenderProps(props.className, styles.header())}
    >
      {/* Add extra columns for drag and drop and selection. */}
      {allowsDragging && <Column />}
      {selectionBehavior === "toggle" && (
        <RacColumn className="w-8 px-0 pl-2" minWidth={32} width={32}>
          {selectionMode === "multiple" && <Checkbox slot="selection" />}
        </RacColumn>
      )}
      <RacCollection items={props.columns}>{props.children}</RacCollection>
    </RacTableHeader>
  );
}

function Row<T extends object>({
  id,
  columns,
  children,
  ...props
}: RacRowProps<T>) {
  let { selectionBehavior, allowsDragging } = useTableOptions();

  return (
    <RacRow id={id} {...props} className={styles.row()}>
      {allowsDragging && (
        <Cell className="max-w-8 px-2">
          <RacButton slot="drag">
            <DotsSixVertical size={16} weight="bold" />
          </RacButton>
        </Cell>
      )}
      {selectionBehavior === "toggle" && (
        <Cell className="w-8 pl-2">
          <Checkbox slot="selection" />
        </Cell>
      )}
      <RacCollection items={columns}>{children}</RacCollection>
    </RacRow>
  );
}

function Cell({ className, ...props }: RacCellProps) {
  return (
    <RacCell {...props} className={cxRenderProps(className, styles.cell())} />
  );
}

const TableBody = RacTableBody;

export { Cell, Column, Row, Table, TableBody, TableHeader, type TableProps };

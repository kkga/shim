"use client";

import {
  ArrowDownIcon,
  ArrowUpIcon,
  DotsSixVerticalIcon,
} from "@phosphor-icons/react";
import { createContext, useContext } from "react";
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
import { cx, tv, type VariantProps } from "tailwind-variants";
import { Checkbox } from "@/shim-ui/checkbox";
import { cnRenderProps } from "@/shim-ui/lib/style";
import { Theme, useThemeProps } from "@/shim-ui/lib/theme";

let style = tv({
  slots: {
    table: "group/table w-full overflow-hidden",
    header: "sticky top-0 z-10 font-medium",
    columnHeader: [
      "group font-medium text-neutral-text-contrast",
      // allows sorting
      "data-allows-sorting:cursor-default",
    ],
    columnGroup: [
      "focus-ring -outline-offset-2",
      "flex flex-1 items-center gap-1 overflow-auto align-top",
      // allows sorting
      "group-data-hovered:group-data-allows-sorting:bg-neutral-bg-hover",
    ],
    selectionCell: "align-middle",
    resizer: [
      "-outline-offset-2 box-content h-6 w-px translate-x-2 cursor-col-resize rounded bg-neutral-line bg-clip-content px-2 py-1",
      // resizing
      "data-resizing:w-[3px] data-resizing:bg-accent-border-hover data-resizing:px-[7px]",
    ],
    row: [
      "focus-ring -outline-offset-2",
      "group/row peer relative text-neutral-text last:inset-shadow-none",
      // selection mode
      "data-selection-mode:cursor-default data-selection-mode:select-none",
      // hovered (in selection mode)
      "data-hovered:bg-neutral-bg-hover",
      // selected
      "data-selected:bg-accent-bg-hover",
      // hovered+selected (in selection mode)
      "data-selected:data-hovered:bg-accent-bg-active",
      // disabled
      "data-disabled:text-neutral-text-subtle",
    ],
    cell: "focus-ring -outline-offset-2 align-top",
  },
  variants: {
    size: {
      1: {
        table: "rounded-md text-xs/4",
        columnGroup:
          "h-7 px-2 py-1.25 group-first:rounded-tl-[5px] group-last:rounded-tr-[5px]",
        selectionCell: "w-7 px-1.5",
        row: "last:rounded-b-[5px] group-has-[thead]:last:rounded-b-none",
        cell: "h-7 px-2 py-1.25 group-last/row:last:rounded-br-[5px] group-last/row:first:rounded-bl-[5px]",
      },
      2: {
        table: "rounded-lg text-sm/5",
        columnGroup:
          "h-8 px-2.5 py-1.5 group-first:rounded-tl-[7px] group-last:rounded-tr-[7px]",
        selectionCell: "w-8.5 px-2",
        row: "last:rounded-b-[7px]",
        cell: "h-8 px-2.5 py-1.5 group-last/row:last:rounded-br-[7px] group-last/row:first:rounded-bl-[7px]",
      },
      3: {
        table: "rounded-[10px] text-[15px]/[22px]",
        columnGroup:
          "h-10 px-3 py-2 group-first:rounded-tl-[9px] group-last:rounded-tr-[9px]",
        selectionCell: "w-10 px-2.5",
        row: "last:rounded-b-[9px]",
        cell: "h-10 px-3 py-2 group-last/row:last:rounded-br-[9px] group-last/row:first:rounded-bl-[9px]",
      },
      4: {
        table: "rounded-xl text-base/6",
        columnGroup:
          "h-12 px-4 py-3.5 group-first:rounded-tl-[11px] group-last:rounded-tr-[11px]",
        selectionCell: "w-12 px-3",
        row: "last:rounded-b-[11px]",
        cell: "h-12 px-4 py-3 group-last/row:last:rounded-br-[11px] group-last/row:first:rounded-bl-[11px]",
      },
    },
    variant: {
      surface: {
        table:
          "border-separate border-spacing-0 border border-neutral-line bg-background",
        header: "inset-shadow-[0_-1px_0_var(--color-neutral-line)] bg-panel",
        cell: "not-group-last/row:inset-shadow-[0_-1px_0_var(--color-neutral-line)]",
      },
      ghost: {
        table: "rounded-none! border-transparent",
        header: "inset-shadow-[0_-1px_0_var(--color-neutral-line)]",
        columnGroup: "rounded-none!",
        cell: "inset-shadow-[0_-1px_0_var(--color-neutral-line)] rounded-none!",
        row: "rounded-none!",
      },
      zebra: {
        table: "rounded-none!",
        header: "bg-background",
        columnGroup: "rounded-none!",
        row: "rounded-none! odd:bg-neutral-panel even:bg-background",
        cell: "rounded-none!",
      },
    },
  },
});

type TableVariant = "surface" | "ghost" | "zebra";
const TableVariantContext = createContext<TableVariant>("surface");

interface TableProps extends RacTableProps, VariantProps<typeof style> {}

function Table({ className, variant = "surface", size, ...props }: TableProps) {
  let themeProps = useThemeProps({ size });
  let { table } = style({ variant, size: themeProps.size });

  return (
    <Theme {...themeProps}>
      <TableVariantContext.Provider value={variant}>
        {/* <RACResizableTableContainer> */}
        <RacTable {...props} className={cnRenderProps(className, table())} />
      </TableVariantContext.Provider>
      {/* </RACResizableTableContainer> */}
    </Theme>
  );
}

interface ColumnProps extends RacColumnProps {
  allowsResizing?: boolean;
}

function Column(props: ColumnProps) {
  let { size } = useThemeProps();
  let variant = useContext(TableVariantContext);
  let { columnGroup, columnHeader, resizer } = style({ size, variant });

  return (
    <RacColumn
      {...props}
      className={cnRenderProps(props.className, columnHeader())}
    >
      {composeRenderProps(
        props.children,
        (children, { allowsSorting, sortDirection }) => (
          <div className="peer flex items-center justify-between">
            <RacGroup
              className={columnGroup()}
              role="presentation"
              tabIndex={-1}
            >
              <span className="truncate">{children}</span>
              {allowsSorting && (
                <span
                  className={cx(
                    "flex size-4 items-center justify-center text-neutral-text group-data-hovered:visible",
                    sortDirection ? "visible" : "invisible"
                  )}
                >
                  {sortDirection &&
                    (sortDirection === "ascending" ? (
                      <ArrowDownIcon aria-hidden size={16} weight="regular" />
                    ) : (
                      <ArrowUpIcon aria-hidden size={16} weight="regular" />
                    ))}
                </span>
              )}
            </RacGroup>
            {props.allowsResizing && !props.width && (
              <RacColumnResizer className={resizer()} />
            )}
          </div>
        )
      )}
    </RacColumn>
  );
}

function SelectionCheckbox() {
  return <Checkbox className="gap-0! p-0!" slot="selection" />;
}

function TableHeader<T extends object>(props: RacTableHeaderProps<T>) {
  let { selectionBehavior, selectionMode, allowsDragging } = useTableOptions();
  let variant = useContext(TableVariantContext);
  let { size } = useThemeProps();
  let { header, selectionCell } = style({ variant, size });

  return (
    <RacTableHeader
      {...props}
      className={cnRenderProps(props.className, header())}
    >
      {/* Add extra columns for drag and drop and selection. */}
      {allowsDragging && <Column />}
      {selectionBehavior === "toggle" && (
        <RacColumn className={selectionCell()}>
          {selectionMode === "multiple" && <SelectionCheckbox />}
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
  let { size } = useThemeProps();
  let variant = useContext(TableVariantContext);
  let { row, selectionCell } = style({ size, variant });

  return (
    <RacRow id={id} {...props} className={row()}>
      {allowsDragging && (
        <Cell className="max-w-8 px-2">
          <RacButton slot="drag">
            <DotsSixVerticalIcon size={16} weight="bold" />
          </RacButton>
        </Cell>
      )}
      {selectionBehavior === "toggle" && (
        <Cell className={selectionCell()}>
          <SelectionCheckbox />
        </Cell>
      )}
      <RacCollection items={columns}>{children}</RacCollection>
    </RacRow>
  );
}

function Cell({ className, ...props }: RacCellProps) {
  let { size } = useThemeProps();
  let variant = useContext(TableVariantContext);
  let { cell } = style({ size, variant });

  return <RacCell {...props} className={cnRenderProps(className, cell())} />;
}

const TableBody = RacTableBody;

export { Cell, Column, Row, Table, TableBody, TableHeader, type TableProps };

"use client";
import { useMemo, useState } from "react";
import {
  ResizableTableContainer,
  type SortDescriptor,
} from "react-aria-components";
import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
} from "@/components/table";

interface RowData {
  id: number;
  name: string;
  date: string;
  type: string;
}

let rows: RowData[] = [
  { id: 1, name: "Games", date: "6/7/2020", type: "File folder" },
  { id: 2, name: "Program Files", date: "4/7/2021", type: "File folder" },
  { id: 3, name: "bootmgr", date: "11/20/2010", type: "System file" },
  { id: 4, name: "log.txt", date: "1/18/2016", type: "Text Document" },
  { id: 5, name: "Proposal.ppt", date: "6/18/2022", type: "PowerPoint file" },
  { id: 6, name: "Taxes.pdf", date: "12/6/2023", type: "PDF Document" },
  { id: 7, name: "Photos", date: "8/2/2021", type: "File folder" },
  { id: 8, name: "Documents", date: "3/18/2023", type: "File folder" },
  { id: 9, name: "Budget.xls", date: "1/6/2024", type: "Excel file" },
  { id: 10, name: "bootmgr", date: "11/20/2010", type: "System file" },
  { id: 11, name: "log.txt", date: "1/18/2016", type: "Text Document" },
  { id: 12, name: "Proposal.ppt", date: "6/18/2022", type: "PowerPoint file" },
  { id: 13, name: "Taxes.pdf", date: "12/6/2023", type: "PDF Document" },
  { id: 14, name: "Photos", date: "8/2/2021", type: "File folder" },
];

export default () => {
  let [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "name",
    direction: "ascending",
  });

  let items = useMemo(() => {
    let sorted = [...rows].sort((a, b) => {
      let column = sortDescriptor.column as keyof RowData;
      if (typeof a[column] === "number" && typeof b[column] === "number") {
        return a[column] - b[column];
      }
      if (typeof a[column] === "string" && typeof b[column] === "string") {
        return a[column].localeCompare(b[column]);
      }
      return 0;
    });
    if (sortDescriptor.direction === "descending") {
      sorted.reverse();
    }
    return sorted;
  }, [sortDescriptor]);

  return (
    <ResizableTableContainer>
      <Table
        aria-label="Files"
        onSortChange={setSortDescriptor}
        selectionMode="multiple"
        sortDescriptor={sortDescriptor}
      >
        <TableHeader>
          <Column allowsResizing id="name" isRowHeader>
            Name
          </Column>
          <Column allowsResizing id="type">
            Type
          </Column>
          <Column id="date">Date Modified</Column>
        </TableHeader>
        <TableBody items={items}>
          {(row) => (
            <Row>
              <Cell>{row.name}</Cell>
              <Cell>{row.type}</Cell>
              <Cell>{row.date}</Cell>
            </Row>
          )}
        </TableBody>
      </Table>
    </ResizableTableContainer>
  );
};

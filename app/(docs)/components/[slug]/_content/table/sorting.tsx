"use client";
import { useMemo, useState } from "react";
import type { SortDescriptor } from "react-aria-components";
import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
} from "@/shim-ui/table";

interface RowData {
  id: number;
  name: string;
  major: string;
  gpa: number;
}

let rows: RowData[] = [
  { id: 1, name: "John Doe", major: "Computer Science", gpa: 3.5 },
  { id: 2, name: "Jane Smith", major: "Mechanical Engineering", gpa: 3.8 },
  { id: 3, name: "Alice Johnson", major: "Mathematics", gpa: 3.9 },
  { id: 4, name: "Bob Brown", major: "Physics", gpa: 3.7 },
  { id: 5, name: "Charlie Davis", major: "Chemistry", gpa: 3.6 },
  { id: 6, name: "Diana Evans", major: "Biology", gpa: 3.8 },
  { id: 7, name: "Ethan Foster", major: "Economics", gpa: 3.4 },
  { id: 8, name: "Fiona Green", major: "Psychology", gpa: 3.7 },
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
    <Table
      aria-label="Students"
      onSortChange={setSortDescriptor}
      sortDescriptor={sortDescriptor}
    >
      <TableHeader>
        <Column allowsSorting id="name" isRowHeader>
          Name
        </Column>
        <Column allowsSorting id="major">
          Major
        </Column>
        <Column allowsSorting id="gpa">
          GPA
        </Column>
      </TableHeader>
      <TableBody items={items}>
        {({ name, major, gpa }) => (
          <Row>
            <Cell>{name}</Cell>
            <Cell>{major}</Cell>
            <Cell className="tabular-nums">{gpa}</Cell>
          </Row>
        )}
      </TableBody>
    </Table>
  );
};

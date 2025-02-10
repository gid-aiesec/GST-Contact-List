"use client";
import { Inter } from "next/font/google";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table>
      <TableHeader className="bg-[#f8fbfc] rounded-md border-0">
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id} className="border-0">
            {headerGroup.headers.map((header) => {
              return (
                <TableHead
                  className={cn(
                    "text-[#6a7685] text-[12px] font-semibold",
                    inter.className
                  )}
                  key={header.id}
                  style={{
                    minWidth: header.column.columnDef.minSize,
                    maxWidth: header.column.columnDef.maxSize,
                  }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  key={cell.id}
                  className={cn("text-[12px]", inter.className)}
                  style={{
                    minWidth: cell.column.columnDef.minSize,
                    maxWidth: cell.column.columnDef.maxSize,
                  }}
                >
                  <h1 className="overflow-hidden text-ellipsis whitespace-nowrap">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </h1>
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

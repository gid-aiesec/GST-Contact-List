"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Copy } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

export type Contact = {
  position: string;
  fullName: string;
  countryCode: string | null;
  phoneNum: string | null;
  linkedin: string | null;
  email: string | null;
  imageURL: string;
};
export const columns: ColumnDef<Contact>[] = [
  {
    accessorKey: "fullName",
    header: "Full Name",
    cell: ({ row }) => (
      <div className={"flex items-center gap-4 capitalize"}>
        <Image
          className="w-6 h-6 rounded-full"
          src={row.original.imageURL}
          alt="Avatar"
          width={24}
          height={24}
        />
        {row.original.fullName}
      </div>
    ),
  },
  {
    accessorKey: "position",
    header: "Position",
  },

  {
    accessorKey: "phoneNum",
    header: "Phone Number",
    cell: ({ row }) => (
      <div className="flex">
        {row.original.phoneNum
          ? row.original.countryCode
            ? `${row.original.countryCode} ${row.original.phoneNum}`
            : row.original.phoneNum
          : ""}
        {row.original.phoneNum ? (
          <Copy
            size={18}
            className="ml-2 mt-0.5 cursor-pointer"
            onClick={() => {
              if (row.original.phoneNum) {
                navigator.clipboard.writeText(row.original.phoneNum);
                toast.success("Copied to clipboard");
              }
            }}
            strokeWidth={1}
          />
        ) : null}
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    maxSize: 180,
    cell: ({ row }) => (
      <a href={`mailto:${row.original.email}`}>{row.original.email}</a>
    ),
  },
  {
    accessorKey: "linkedin",
    header: "Linkedin",
    size: 150,
    maxSize: 250,
    cell: ({ row }) => (
      <a
        href={row.original.linkedin ? row.original.linkedin : ""}
        target="_blank"
        rel="noreferrer"
      >
        {row.original.linkedin}
      </a>
    ),
  },
];

export const columnsAI: ColumnDef<Contact>[] = [
  {
    accessorKey: "fullName",
    header: "Full Name",
    cell: ({ row }) => (
      <div className={"flex items-center gap-4 capitalize"}>
        <Image
          className="w-6 h-6 rounded-full"
          src={row.original.imageURL}
          alt="Avatar"
          width={24}
          height={24}
        />
        {row.original.fullName}
      </div>
    ),
  },
  {
    accessorKey: "position",
    header: "Position",
  },

  {
    accessorKey: "phoneNum",
    header: "Telegram",
    cell: ({ row }) => (
      <div className="flex">
        {row.original.phoneNum
          ? row.original.countryCode
            ? `${row.original.countryCode} ${row.original.phoneNum}`
            : row.original.phoneNum
          : ""}
        {row.original.phoneNum ? (
          <Copy
            size={18}
            className="ml-2 mt-0.5 cursor-pointer"
            onClick={() => {
              if (row.original.phoneNum) {
                navigator.clipboard.writeText(row.original.phoneNum);
                toast.success("Copied to clipboard");
              }
            }}
            strokeWidth={1}
          />
        ) : null}
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    maxSize: 180,
    cell: ({ row }) => (
      <a href={`mailto:${row.original.email}`}>{row.original.email}</a>
    ),
  },
];

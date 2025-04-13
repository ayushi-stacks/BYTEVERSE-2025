"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const BedColumns: ColumnDef<BedsColumnsParams>[] = [
  {
    accessorKey: "hospital",
    header: "Hospital",
    cell: ({ row }) => {
      const data = row.original;
      return <div className="font-medium text-start"> {data.hospital} </div>;
    },
  },
  {
    accessorKey: "status",
    header: "Bed Availability",
    cell: ({ row }) => {
      const data = row.original;
      const status = data.status;
      return (
        <div
          className={`font-medium text-center md:text-start rounded-lg border-px ${
            status === "Yes" ? "text-[#24AE7C]" : "text-[#F37877]"
          }`}
        >
          {status}
        </div>
      );
    },
  },
  {
    accessorKey: "beds",
    header: "Number of beds available",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div className="font-medium text-center md:text-start">{data.beds}</div>
      );
    },
  },
  {
    accessorKey: "contact",
    header: "Contact",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div className="font-medium text-center md:text-start text-[#24AE7C]">
          <Link href="/beds/in-progress">Contact now</Link>
        </div>
      );
    },
  },
];

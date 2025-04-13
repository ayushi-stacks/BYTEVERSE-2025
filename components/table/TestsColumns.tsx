"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const TestsColumns: ColumnDef<DashboardTestColumnsParams>[] = [
  {
    accessorKey: "hospital",
    header: "Hospital",
    cell: ({ row }) => {
      const data = row.original;
      return <div className="font-medium text-start">{data.hospital}</div>;
    },
  },
  {
    accessorKey: "schedule",
    header: "Schedule",
    cell: ({ row }) => {
      const data = row.original;

      return <div className="font-medium text-start">{data.schedule}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const data = row.original;
      const status = data.status;
      return (
        <div
          className={`font-medium capitalize text-start rounded-lg border-px ${
            status === "pending"
              ? "text-yellow-500"
              : status === "cancelled"
              ? "text-[#F37877]"
              : status === "completed"
              ? "text-green-500"
              : "text-blue-500"
          }`}
        >
          {status}
        </div>
      );
    },
  },
  {
    accessorKey: "report",
    header: "Report",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div className="font-medium text-start">
          <Link className="text-blue-500" href={data.link}>
            Report
          </Link>
        </div>
      );
    },
  },
];

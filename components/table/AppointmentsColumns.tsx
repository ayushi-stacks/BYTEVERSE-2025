"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const AppointmentsColumns: ColumnDef<DashboardAppointmentColumnsParams>[] =
  [
    {
      accessorKey: "primaryphysician",
      header: "PrimaryPhysician",
      cell: ({ row }) => {
        const data = row.original;
        return (
          <div className="font-medium text-start">{data.primaryPhysician}</div>
        );
      },
    },
    {
      accessorKey: "schedule",
      header: "Schedule",
      cell: ({ row }) => {
        const data = row.original;
        const formattedDate = new Date(data.schedule).toLocaleDateString(
          "en-US"
        );
        return <div className="font-medium text-start">{formattedDate}</div>;
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
                : "text-green-500"
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

"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export const DoctorColumns: ColumnDef<DoctorsColumnsParams>[] = [
  {
    accessorKey: "doctor",
    header: "Doctor",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div className="flex items-center gap-3">
          <Image
            src={data.image!}
            alt="doctor"
            width={100}
            height={100}
            className="size-8"
          />
          <p className="font-medium">{data.doctor}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "hospital",
    header: "Hospital",
    cell: ({ row }) => {
      const data = row.original;
      return <div className="font-medium"> {data.hospital} </div>;
    },
  },
  {
    accessorKey: "specialty",
    header: "Specialty",
    cell: ({ row }) => {
      const data = row.original;
      const speciality = data.speciality;
      return (
        <div
          className={`font-medium text-center rounded-lg border-px ${
            speciality === "ENT"
              ? "bg-yellow-600"
              : speciality === "Orthopedic"
              ? "bg-[#0D2A1F]"
              : speciality === "Pediatrician"
              ? "bg-[#152432]"
              : speciality === "General"
              ? "bg-[#3E1716]"
              : speciality === "Gastroenterologists"
              ? "bg-[#0D0F10] "
              : ""
          } }`}
        >
          {speciality}
        </div>
      );
    },
  },
  {
    accessorKey: "days",
    header: "Days",
    cell: ({ row }) => {
      const data = row.original;
      return <div className="font-medium "> {data.days} </div>;
    },
  },
  {
    accessorKey: "timings",
    header: "Timings",
    cell: ({ row }) => {
      const data = row.original;
      return <div className="font-medium "> {data.timings} </div>;
    },
  },
];

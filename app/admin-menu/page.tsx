import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import { AdminMenudata } from "@/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const AdminMenu = () => {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container">
          <div className="flex justify-between">
            <Image
              src="/assets/icons/logo-full.svg"
              height={1000}
              width={1000}
              alt="patient"
              className="mb-12 w-fit"
            />
            <p className="text-xl mt-2">
              <span className="p-1 m-1 text-[#24AE7C]">Admin</span>
              <br />
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-8 items-center justify-center">
            {AdminMenudata.map((data, i) => (
              <Card
                key={i}
                className="border-px shadow-md shadow-zinc-700 bg-[#1A1D21] flex flex-col justify-between items-center h-full p-4"
              >
                <Link href={i === 0 ? "/admin" : "/"}>
                  <CardHeader className="text-center font-semibold mt-4">
                    <CardTitle> {data.title} </CardTitle>
                  </CardHeader>
                  <CardContent className="mb-[-20px]">
                    <Icon
                      icon={data.image}
                      width={80}
                      height={80}
                      className="w-full"
                    />
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminMenu;

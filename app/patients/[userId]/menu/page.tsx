import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import { Menudata } from "@/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Menu = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

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
              Welcome{" "}
              <span className="p-1 m-1 text-[#24AE7C]">{user?.name}</span>
              <br />
            </p>
            <Button
              variant="ghost"
              className="bg-green-500 text-white hover:bg-green-700"
            >
              <Link
                className="text-white"
                href={`/patients/${userId}/dashboard`}
              >
                Open Dashboard
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {Menudata.map((data, i) => (
              <Card
                key={i}
                className="border-px shadow-md shadow-zinc-700 bg-[#1A1D21] flex flex-col justify-between items-center h-full p-4"
              >
                <Link
                  href={
                    i === 0
                      ? `/patients/${userId}/menu/ambulance`
                      : i === 1
                      ? `/patients/${userId}/register`
                      : i === 2
                      ? `/patients/${userId}/delivery`
                      : i === 3
                      ? `/doctors`
                      : i === 4
                      ? `/beds`
                      : i === 5
                      ? `/patients/${userId}/medicaltests`
                      : `/patients/${userId}/menu`
                  }
                  target={i === 3 || i === 4 ? "_blank" : "_self"}
                >
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

export default Menu;

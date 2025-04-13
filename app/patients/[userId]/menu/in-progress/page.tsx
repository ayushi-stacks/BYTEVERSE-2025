import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Menudata } from "@/constants";
import Link from "next/link";

const InProgress = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  const showModal = true;

  return (
    <div className="relative flex h-screen max-h-screen">
      <section
        className={`remove-scrollbar container my-auto ${
          showModal ? "blur-sm" : ""
        }`}
      >
        <div className="sub-container">
          <div className="flex justify-between">
            <Image
              src="/assets/icons/logo-full.svg"
              height={1000}
              width={1000}
              alt="patient"
              className="mb-12 w-fit"
            />
            <p>
              Welcome{" "}
              <span className="p-1 m-1 text-[#24AE7C]">{user?.name}</span>
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {Menudata.map((data, i) => (
              <Card
                key={i}
                className="border-px shadow-md shadow-zinc-700 bg-[#1A1D21] flex flex-col justify-between items-center h-full p-4"
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0  flex items-center justify-center z-50">
          <div className="bg-[#D2D2D2] rounded-lg p-8 text-center relative w-full max-w-[400px] h-[220px] mx-auto">
            <Link href={`/patients/${userId}/menu`}>
              <Icon
                icon="mdi:arrow-left"
                width={30}
                height={30}
                className="absolute top-4 text-black left-4 cursor-pointer"
              />
            </Link>
            <h2 className="text-2xl text-zinc-800 mt-6 font-bold mb-8">
              Our team is working hard to add more features!
            </h2>
            <Icon
              icon="carbon:warning"
              width={50}
              height={50}
              className="text-black mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default InProgress;

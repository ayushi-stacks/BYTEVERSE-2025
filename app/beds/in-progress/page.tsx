import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { BedColumns } from "@/components/table/BedColumns";
import { BTable } from "@/components/table/BTable";
import { BedsData } from "@/constants";

const BedsAvailability = () => {
  const data = BedsData;
  const showModal = true;

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-full.svg"
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>
      </header>

      <main className="admin-main blur-sm">
        <section className="w-full space-y-4">
          <h1 className="header">Beds Availability</h1>
        </section>

        <BTable columns={BedColumns} data={data} />
      </main>

      {showModal && (
        <div className="fixed inset-0  flex items-center justify-center z-50">
          <div className="bg-[#D2D2D2] rounded-lg p-8 text-center relative w-full max-w-[400px] h-[250px] mx-auto">
            <Link href="/beds">
              <Icon
                icon="mdi:arrow-left"
                width={30}
                height={30}
                className="absolute top-4 text-black left-4 cursor-pointer"
              />
            </Link>
            <h2 className="text-2xl text-zinc-800 mt-6 mb-8 font-bold">
              We are working with hospitals to add the contacts very soon!
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

export default BedsAvailability;

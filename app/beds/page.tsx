import Image from "next/image";
import Link from "next/link";

import { BedColumns } from "@/components/table/BedColumns";
import { BTable } from "@/components/table/BTable";
import { BedsData } from "@/constants";

const BedsAvailability = () => {
  const data = BedsData;

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

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Beds Availability</h1>
        </section>

        <BTable columns={BedColumns} data={data} />
      </main>
    </div>
  );
};

export default BedsAvailability;

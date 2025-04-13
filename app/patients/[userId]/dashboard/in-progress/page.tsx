import Image from "next/image";
import Link from "next/link";

import { AppointmentsColumns } from "@/components/table/AppointmentsColumns";
import { getAppointmentsByUser, getUser } from "@/lib/actions/patient.actions";
import { DashAppointmentstable } from "@/components/table/DashAppointmentstable";
import { DashTeststable } from "@/components/table/DashTestsTable";
import { MockTests } from "@/constants";
import { Icon } from "@iconify/react";
import { TestsColumns } from "@/components/table/TestsColumns";

const Dashboard = async ({ params: { userId } }: SearchParamProps) => {
  const appointments = await getAppointmentsByUser(userId);
  const user = await getUser(userId);
  const data = MockTests;
  const returnLink = `/patients/${userId}/dashboard/in-progress`;

  const showModal = true;

  const formattedAppointments: DashboardAppointmentColumnsParams[] =
    appointments.map((appointment) => ({
      status: appointment.status,
      primaryPhysician: appointment.primaryPhysician,
      schedule: new Date(appointment.schedule),
      report: appointment.report,
      link: returnLink,
    }));

  const formattedTests: DashboardTestColumnsParams[] = data.map((data) => ({
    status: data.status,
    hospital: data.hospital,
    schedule: data.schedule,
    report: data.report,
    link: returnLink,
  }));

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header ">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-full.svg"
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>
        <p>
          Welcome <span className="p-1 m-1 text-[#24AE7C]">{user?.name}</span>{" "}
        </p>
      </header>

      <div className="admin-main blur-md">
        <section className="w-full space-y-4">
          <h1 className="header">Your Appointments</h1>
        </section>

        <DashAppointmentstable
          columns={AppointmentsColumns}
          data={formattedAppointments}
        />
      </div>

      <div className="blur-md admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Your Medical Tests</h1>
          <p>(mock data for now)</p>
        </section>

        <DashTeststable columns={TestsColumns} data={formattedTests} />
      </div>

      {showModal && (
        <div className="fixed inset-0  flex items-center justify-center z-50">
          <div className="bg-[#D2D2D2] rounded-lg p-8 text-center relative w-full max-w-[500px] h-[280px] mx-auto">
            <Link href={`/patients/${userId}/dashboard`}>
              <Icon
                icon="mdi:arrow-left"
                width={30}
                height={30}
                className="absolute top-4 text-black left-4 cursor-pointer"
              />
            </Link>
            <h2 className="text-2xl text-zinc-800 mt-6 font-bold mb-8">
              Your report will be uploaded by your physician or the hospital
              very soon. Thank you for your patience!
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

export default Dashboard;

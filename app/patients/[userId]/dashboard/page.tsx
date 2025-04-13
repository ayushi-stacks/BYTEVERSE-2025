import Image from "next/image";
import Link from "next/link";

import { AppointmentsColumns } from "@/components/table/AppointmentsColumns";
import { getAppointmentsByUser, getUser } from "@/lib/actions/patient.actions";
import { DashAppointmentstable } from "@/components/table/DashAppointmentstable";
import { DashTeststable } from "@/components/table/DashTestsTable";
import { MockTests } from "@/constants";
import { TestsColumns } from "@/components/table/TestsColumns";

const Dashboard = async ({ params: { userId } }: SearchParamProps) => {
  const appointments = await getAppointmentsByUser(userId);
  const user = await getUser(userId);
  const data = MockTests;
  const returnLink = `/patients/${userId}/dashboard/in-progress`;

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
        <p>
          Welcome <span className="p-1 m-1 text-[#24AE7C]">{user?.name}</span>{" "}
        </p>
      </header>

      <div className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Your Appointments</h1>
        </section>

        <DashAppointmentstable
          columns={AppointmentsColumns}
          data={formattedAppointments}
        />
      </div>

      <div className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Your Medical Tests</h1>
          <p>(mock data for now)</p>
        </section>

        <DashTeststable columns={TestsColumns} data={formattedTests} />
      </div>
    </div>
  );
};

export default Dashboard;

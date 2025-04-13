import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getUser } from "@/lib/actions/patient.actions";
import { formatDateTime } from "@/lib/utils";

const TestSuccess = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  const schedule = "08-09-2024 14:47:37.261";

  return (
    <div className=" flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <Link href="/">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="logo"
            className="h-10 w-fit"
          />
        </Link>

        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            height={300}
            width={280}
            alt="success"
            unoptimized
          />
          <h2 className="header mb-6 max-w-[600px] text-center">
            Your <span className="text-green-500">test request</span> has been
            successfully submitted!
          </h2>
          <p>We&apos;ll be in touch shortly to confirm.</p>
        </section>

        <section className="request-details">
          <p>
            Requested test details: {"  "}{" "}
            <span className="text-green-500"> (this is a template data) </span>{" "}
          </p>
          <div className="flex items-center gap-3">
            <p className="whitespace-nowrap">Hopevale Hospital</p>
          </div>
          <div className="flex gap-2">
            <Image
              src="/assets/icons/calendar.svg"
              height={24}
              width={24}
              alt="calendar"
            />
            <p> {formatDateTime(schedule).dateTime}</p>
          </div>
        </section>

        <Button variant="outline" className="shad-primary-btn" asChild>
          <Link href={`/patients/${userId}/menu`}>Go back to menu</Link>
        </Button>

        <p className="copyright">© 2024 CarePulse</p>
      </div>
    </div>
  );
};

export default TestSuccess;

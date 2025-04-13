import Image from "next/image";

import { TestForm } from "@/components/forms/TestForm";

const MedicalTests = async ({ params: { userId } }: SearchParamProps) => {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="logo"
            className="mb-12 h-10 w-fit"
          />

          <TestForm userId={userId} />

          <p className="copyright mt-10 py-12">© 2024 CarePulse</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={800}
        width={800}
        alt="appointment"
        className="side-img max-w-[450px] bg-bottom"
      />
    </div>
  );
};

export default MedicalTests;

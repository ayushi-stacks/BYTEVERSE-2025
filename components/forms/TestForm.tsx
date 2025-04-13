"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { SelectItem } from "@/components/ui/select";
import { BedsData, TestsData } from "@/constants";
import { TestFormSchema } from "@/lib/validation";

import "react-datepicker/dist/react-datepicker.css";

import Link from "next/link";
import CustomFormField from "../CustomFormField";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { FormFieldType } from "./PatientForm";

export const TestForm = ({ userId }: { userId: string }) => {
  const form = useForm<z.infer<typeof TestFormSchema>>({
    resolver: zodResolver(TestFormSchema),
    defaultValues: {
      hospital: "",
      test: "",
      schedule: new Date(Date.now()),
      note: "",
    },
  });

  const buttonLabel = "Schedule Test";

  return (
    <Form {...form}>
      <form className="flex-1 space-y-6">
        <section className="mb-12 space-y-4">
          <h1 className="header">New Medical Test</h1>
          <p className="text-dark-700">
            Request a new medical test in 10 seconds.
          </p>
        </section>

        <>
          <CustomFormField
            fieldType={FormFieldType.SELECT}
            control={form.control}
            name="hospital"
            label="Hospital"
            placeholder="Select a Hospital"
          >
            {BedsData.map((data, i) => (
              <SelectItem key={data.hospital + i} value={data.hospital}>
                <div className="flex cursor-pointer items-center gap-2">
                  <p>{data.hospital}</p>
                </div>
              </SelectItem>
            ))}
          </CustomFormField>

          <CustomFormField
            fieldType={FormFieldType.SELECT}
            control={form.control}
            name="test"
            label="Test"
            placeholder="Select a Test"
          >
            {TestsData.map((data, i) => (
              <SelectItem key={data.test + i} value={data.test}>
                <div className="flex cursor-pointer font-medium items-center justify-between w-full gap-2">
                  <p className="flex-grow">{data.test}</p>
                  <p className="text-[#24AE7C]">{data.price}</p>
                </div>
              </SelectItem>
            ))}
          </CustomFormField>

          <CustomFormField
            fieldType={FormFieldType.DATE_PICKER}
            control={form.control}
            name="schedule"
            label="Expected test date and time"
            showTimeSelect
            dateFormat="MM/dd/yyyy  -  h:mm aa"
          />

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.TEXTAREA}
              control={form.control}
              name="note"
              label="Comments/notes"
              placeholder="Anything Specific"
            />
          </div>
        </>

        <Link href={`/patients/${userId}/medicaltests/success`}>
          <Button className="shad-primary-btn mt-6 w-full">
            {buttonLabel}
          </Button>
        </Link>
      </form>
    </Form>
  );
};

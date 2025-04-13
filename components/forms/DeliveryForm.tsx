"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { SelectItem } from "@/components/ui/select";
import { BedsData, TestsData } from "@/constants";

import "react-datepicker/dist/react-datepicker.css";

import Link from "next/link";
import CustomFormField from "../CustomFormField";
import { Button } from "../ui/button";
import { Form, FormControl } from "../ui/form";
import { FormFieldType } from "./PatientForm";
import { DeliveryFormSchema } from "@/lib/validation";
import FileUploader from "../FileUploader";

export const DeliveryForm = ({ userId }: { userId: string }) => {
  const form = useForm<z.infer<typeof DeliveryFormSchema>>({
    resolver: zodResolver(DeliveryFormSchema),
    defaultValues: {
      schedule: new Date(Date.now()),
      note: "",
    },
  });

  const buttonLabel = "Place Order";

  return (
    <Form {...form}>
      <form className="flex-1 space-y-6">
        <section className="mb-12 space-y-4">
          <h1 className="header">Medicine Delivery</h1>
          <p className="text-dark-700">
            Get your required medicines straight to your doorsteps.
          </p>
        </section>

        <>
          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.TEXTAREA}
              control={form.control}
              name="medicines"
              label="Write the required medicines below"
              placeholder="ex: Ibuprofen 200mg, Levothyroxine 50mcg"
            />
          </div>

          <CustomFormField
            fieldType={FormFieldType.SKELETON}
            control={form.control}
            name="prescription"
            label="Scanned Copy of Prescription"
            renderSkeleton={(field) => (
              <FormControl>
                <FileUploader files={field.value} onChange={field.onChange} />
              </FormControl>
            )}
          />

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="address"
              label="Delivery Address"
              placeholder="ex: 14 street, Kolkata, 70046"
            />

            <CustomFormField
              fieldType={FormFieldType.PHONE_INPUT}
              control={form.control}
              name="phone"
              label="Phone Number"
              placeholder="+00 0342 0453 34"
            />
          </div>

          <CustomFormField
            fieldType={FormFieldType.DATE_PICKER}
            control={form.control}
            name="schedule"
            label="Required delivery date and time"
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

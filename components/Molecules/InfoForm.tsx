import React from "react";
import Input from "@components/Input";
import { useFormContext } from "react-hook-form";
import { InvoiceInfo as InvoiceInfoType } from "types/invoiceInfo";

const InfoForm = () => {
  const { register } = useFormContext<InvoiceInfoType>();
  return (
    <>
      <h3>InfoForm</h3>
      <Input
        name="info.InvoiceNumber"
        type="number"
        placeholder="i.g. 1234"
        register={register}
      />
      <Input
        name="info.IssuedDate"
        type="string"
        placeholder="MM/DD/YY"
        register={register}
      />
      <Input
        name="info.DueDate"
        type="string"
        placeholder="MM/DD/YY"
        register={register}
      />
    </>
  );
};

export default InfoForm;
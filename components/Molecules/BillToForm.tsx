import React from "react";
import Input from "@components/Input";
import { useFormContext } from "react-hook-form";
import { BillTo as BillToType } from "types/billTo";

const BillToForm = () => {
  const { register } = useFormContext<BillToType>();

  return (
    <>
      <h3>Bill to</h3>
      <Input
        name="billTo.companyName"
        register={register}
        placeholder="Company/Client Name"
        type="text"
      />
      <Input
        name="billTo.addressLine1"
        register={register}
        placeholder="Address Line 1"
        type="text"
      />
      <Input name="billTo.city" register={register} placeholder="City" type="text" />
      <Input
        name="billTo.province"
        register={register}
        placeholder="Province"
        type="text"
      />
      <Input
        name="billTo.country"
        register={register}
        placeholder="Country"
        type="text"
      />
      <Input
        name="billTo.postalCode"
        register={register}
        placeholder="Postal Code"
        type="text"
      />
    </>
  );
};

export default BillToForm;

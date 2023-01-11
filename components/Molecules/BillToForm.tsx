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
        name="billTo.CompanyName"
        register={register}
        placeholder="Company/Client Name"
        type="text"
      />
      <Input
        name="billTo.AddressLine1"
        register={register}
        placeholder="Address Line 1"
        type="text"
      />
      <Input name="billTo.City" register={register} placeholder="City" type="text" />
      <Input
        name="billTo.Province"
        register={register}
        placeholder="Province"
        type="text"
      />
      <Input
        name="billTo.Country"
        register={register}
        placeholder="Country"
        type="text"
      />
      <Input
        name="billTo.PostalCode"
        register={register}
        placeholder="Postal Code"
        type="text"
      />
    </>
  );
};

export default BillToForm;

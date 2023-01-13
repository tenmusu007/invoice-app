import React from "react";
import Input from "@components/Input";
import { useFormContext } from "react-hook-form";
import { Description as DescriptionType } from "types/description";

const DescriptionForm = () => {
  const { register } = useFormContext<DescriptionType>();
  return (
    <>
      <h3>DescriptionForm</h3>
      <Input
        name="description.item"
        type="text"
        placeholder="Enter Item name/Description"
        register={register}
      />
      <Input
        name="description.quantity"
        type="number"
        placeholder="1"
        register={register}
      />
      <Input
        name="description.unitPrice"
        type="number"
        placeholder="$0"
        register={register}
      />
      <Input name="description.tax" type="number" placeholder="15%" register={register} />
      <Input
        name="description.amount"
        type="number"
        placeholder="$100"
        register={register}
      />
    </>
  );
};

export default DescriptionForm;

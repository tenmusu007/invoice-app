import React from "react";
import {
  SubmitHandler,
  useForm,
  UseFormRegisterReturn,
  Validate,
  ValidationRule,
  FormProvider,
} from "react-hook-form";
import Button from "@components/Button";
import { Stack } from "@mui/material";
import BillToForm from "@components/Molecules/billToForm";
import BusinessInfoForm from "@components/Molecules/businessInfoForm";
import DescriptionForm from "@components/Molecules/descriptionForm";
import InfoForm from "@components/Molecules/infoForm";
import { Invoice as InvoiceType } from "types/inputValue";
import BankInfoForm from "@components/Molecules/bankInfoForm";

const InvoiceForm = () => {
  // const defaultValues = {
  //   name: "",
  //   items: [{ name: "", quantity: 0, unitPrice: 0, tax: 0, amount: 0 }],
  // };
  const methods = useForm<InvoiceType>({ defaultValues:{
    name: "",
    description: [{ name: "", quantity: 0, unitPrice: 0, tax: 0, amount: 0 }],
  } });
  const { handleSubmit, reset, formState, getValues, control, register } = methods;

  const onSubmit: SubmitHandler<InvoiceType> = async (data: InvoiceType) => {
    console.log(`Submit`, data);
    // reset();
  };
  return (
    <FormProvider {...methods}>
      <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
        <InfoForm />
        <BillToForm />
        <BusinessInfoForm />
        <DescriptionForm />
        <BankInfoForm />
        <Button text={"Submit"} type="submit" />
      </Stack>
    </FormProvider>
  );
};

export default InvoiceForm;

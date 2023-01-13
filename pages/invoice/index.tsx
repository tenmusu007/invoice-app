import React from "react";
import {
  SubmitHandler,
  useForm,
  UseFormRegisterReturn,
  Validate,
  ValidationRule,
  FormProvider
} from "react-hook-form";
import Button from "@components/Button";
import { Stack } from "@mui/material";
import BillToForm from "@components/Molecules/BillToForm";
import BusinessInfoForm from "@components/Molecules/BusinessInfoForm";
import DescriptionForm from "@components/Molecules/DescriptionForm";
import InfoForm from "@components/Molecules/InfoForm";
import { Invoice as InvoiceType } from "types/inputValue";
import BankInfoForm from "@components/Molecules/BankInfoForm ";

const InvoiceForm = () => {
  const methods = useForm<InvoiceType>()
  const { handleSubmit, register, reset, } = methods;
  const onSubmit: SubmitHandler<InvoiceType> = async (data: InvoiceType) => {
    console.log(`Submit`, data);
    reset();
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

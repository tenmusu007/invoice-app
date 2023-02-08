import React from "react";
import Input from "@components/Input";
import { useFormContext } from "react-hook-form";
import { InvoiceInfo as InvoiceInfoType } from "types/invoiceInfo";
import { Box, Stack } from "@mui/system";
import InputLabel from "@components/atoms/label";

const InfoForm = () => {
  const { register } = useFormContext<InvoiceInfoType>();
  return (
    <Box sx={{ width: "90%", display: "flex", justifyContent: "flex-end" }}>
      <Stack spacing={1}>
        <InputLabel htmlFor="invoiceNumber" labelName="Invoice Number" />
        <Input
          name="info.invoiceNumber"
          type="number"
          placeholder="i.g. 1234"
          register={register}
          id="invoiceNumber"
        />
        <InputLabel htmlFor="issueDate" labelName="Issue Date" />
        <Input
          name="info.issuedDate"
          type="string"
          placeholder="MM/DD/YY"
          register={register}
          id="issueDate"
        />
        <InputLabel htmlFor="dueDate" labelName="Due date" />
        <Input
          name="info.dueDate"
          type="string"
          placeholder="MM/DD/YY"
          register={register}
          id="dueDate"
        />
      </Stack>
    </Box>
  );
};

export default InfoForm;

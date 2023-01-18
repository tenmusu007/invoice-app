import React, { useContext, useState } from "react";
import Input from "@components/Input";
import { useFormContext, useFieldArray, useForm } from "react-hook-form";
import { Description as DescriptionType } from "types/description";
import { Grid } from "@mui/material";
import TotalContext, { useTotalContext } from "Context/TotalContext";

const DescriptionForm = () => {
  const defaultValues = {
    name: "",
    items: [{ name: "", quantity: 0, unitPrice: 0, tax: 0, amount: 0 }],
  };
  const [inputValues, setInputValues] = useState<number[]>([0]);
  const { register, control } = useFormContext<DescriptionType>();
  // const { register } = useForm<DescriptionType>({defaultValues});
  const totalContext = useContext(useTotalContext);
  //MUI使わんからこれは要らん
  // const { fields, append, remove } = useFieldArray({
  //   name: "description.amount",
  //   control
  // })
  // console.log(totalContext)
  const sumUpTotal = (event: any) => {
    setInputValues([Number(event.target.value)]);
    console.log(event.target.value);
    // totalContext?.setTotal(Number(event.target.value));
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Input
            name="description.item"
            type="text"
            placeholder="Enter Item name/Description"
            register={register}
          />
        </Grid>
        <Grid item xs={2}>
          <Input
            name="description.quantity"
            type="number"
            placeholder="1"
            register={register}
          />
        </Grid>
        <Grid item xs={2}>
          <Input
            name="description.unitPrice"
            type="number"
            placeholder="$0"
            register={register}
          />
        </Grid>
        <Grid item xs={2}>
          <Input
            name="description.tax"
            type="number"
            placeholder="15%"
            register={register}
          />
        </Grid>
        <Grid item xs={2}>
          <Input
            name="description.amount"
            type="number"
            placeholder="$100"
            register={register}
            onChange={(e: any) => sumUpTotal(e)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Input
            name="description.item"
            type="text"
            placeholder="Enter Item name/Description"
            register={register}
          />
        </Grid>
        <Grid item xs={2}>
          <Input
            name="description.quantity"
            type="number"
            placeholder="1"
            register={register}
          />
        </Grid>
        <Grid item xs={2}>
          <Input
            name="description.unitPrice"
            type="number"
            placeholder="$0"
            register={register}
          />
        </Grid>
        <Grid item xs={2}>
          <Input
            name="description.tax"
            type="number"
            placeholder="15%"
            register={register}
          />
        </Grid>
        <Grid item xs={2}>
          <Input
            name="description.amount"
            type="number"
            placeholder="$100"
            register={register}
            onChange={(e: any) => sumUpTotal(e)}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default DescriptionForm;

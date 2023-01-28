import React, { useContext, useState } from "react";
import Input from "@components/Input";
import { useFormContext, useFieldArray } from "react-hook-form";
import { Description as DescriptionType } from "types/description";
import { Grid } from "@mui/material";
import TotalContext, { useTotalContext } from "Context/TotalContext";
import Button from "@components/Button";
import TotalAmount from "./totalAmount";

const DescriptionForm = () => {
  const [inputValues, setInputValues] = useState<number[]>([0]);
  const { register, control } = useFormContext<DescriptionType>();
  const totalContext = useContext(useTotalContext);

  //Append: Add new element to field
  const { fields, append, remove } = useFieldArray({
    name: "items",
    control,
  });


  const sumUpTotal = (event: any) => {
    setInputValues([Number(event.target.value)]);
    console.log(event.target.value);
    // totalContext?.setTotal(Number(event.target.value));
  };


  return (
    <>
      {fields.map((field, index) => {
        return (
          <React.Fragment key={field.id}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <Input
                  name={`items.${index}.name`}
                  type="text"
                  placeholder="Enter Item name/Description"
                  register={register}
                />
              </Grid>
              <Grid item xs={2}>
                <Input
                  name={`items.${index}.quantity`}
                  type="number"
                  placeholder="1"
                  register={register}
                />
              </Grid>
              <Grid item xs={2}>
                <Input
                  name={`items.${index}.unitPrice`}
                  type="number"
                  placeholder="$0"
                  register={register}
                />
              </Grid>
              <Grid item xs={2}>
                <Input
                  name={`items.${index}.tax`}
                  type="number"
                  placeholder="15%"
                  register={register}
                />
              </Grid>
              <Grid item xs={2}>
                <Input
                  name={`items.${index}.amount`}
                  type="number"
                  placeholder="$100"
                  register={register}
                />
              </Grid>
            </Grid>
          </React.Fragment>
        );
      })}
      <Button
        text={"Add row"}
        onClick={() => {
          append({
            name: "",
            quantity: 0,
            unitPrice: 0,
            tax: 0,
            amount: 0,
          })
        }}
      />
     <TotalAmount control={control} />
    </>
  );
};

export default DescriptionForm;

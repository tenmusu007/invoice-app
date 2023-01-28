import React, { useContext, useState } from "react";
import Input from "@components/Input";
import { useFormContext, useFieldArray } from "react-hook-form";
import { Description as DescriptionType } from "types/description";
import { Grid } from "@mui/material";
import Button from "@components/Button";
import TotalAmount from "./totalAmount";

const DescriptionForm = () => {
  const { register, control } = useFormContext<DescriptionType>();

  //Append: Add new element to field
  const { fields, append, remove } = useFieldArray({
    name: "description",
    control,
  });

  console.log('fields', fields);

  return (
    <>
      {fields.map((field, index) => {
        return (
          <React.Fragment key={field.id}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <Input
                  name={`description.${index}.name`}
                  type="text"
                  placeholder="Enter Item name/Description"
                  register={register}
                />
              </Grid>
              <Grid item xs={2}>
                <Input
                  name={`description.${index}.quantity`}
                  type="number"
                  placeholder="1"
                  register={register}
                />
              </Grid>
              <Grid item xs={2}>
                <Input
                  name={`description.${index}.unitPrice`}
                  type="number"
                  placeholder="$0"
                  register={register}
                />
              </Grid>
              <Grid item xs={2}>
                <Input
                  name={`description.${index}.tax`}
                  type="number"
                  placeholder="15%"
                  register={register}
                />
              </Grid>
              <Grid item xs={2}>
                <Input
                  name={`description.${index}.amount`}
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
          });
        }}
      />
      <TotalAmount control={control} />
    </>
  );
};

export default DescriptionForm;

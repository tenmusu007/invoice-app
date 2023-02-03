import React, { useEffect } from "react";
import Input from "@components/Input";
import { useFormContext, useFieldArray, useWatch } from "react-hook-form";
import { Description as DescriptionType } from "types/description";
import { Grid, IconButton, Typography } from "@mui/material";
import Button from "@components/Button";
import TotalAmount from "./totalAmount";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";

const DescriptionForm = () => {
  const { register, control, watch } = useFormContext<DescriptionType>();

  //Append: Add new element to field
  const { fields, append, remove } = useFieldArray({
    name: "description",
    control,
  });

  // const formValues = useWatch({
  //   name: "description",
  //   control: control,
  // });

  // console.log("formValue in index", formValues);

  useEffect(() => {
    console.log('Use Effect')
    const subscription = watch((data) => {
        console.log(data)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [watch])
  
  return (
    <>
      <h3>Description</h3>
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        <Grid item xs={4}>
          <Typography>Description</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>Quantity</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>Unit Price</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>Tax</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>Amount</Typography>
        </Grid>
      </Grid>
      {fields.map((field, index) => {
        return (
          <React.Fragment key={field.id}>
            <Grid
              container
              spacing={1}
              justifyContent="center"
              alignItems="center"
            >
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
              <Grid item xs={1}>
                <Input
                  name={`description.${index}.amount`}
                  type="number"
                  placeholder="$100"
                  register={register}
                />
              </Grid>
              <Grid item xs={1}>
                <IconButton aria-label="delete" onClick={() => remove(index)}>
                  <DeleteForeverIcon />
                </IconButton>
              </Grid>
            </Grid>
          </React.Fragment>
        );
      })}
      <Button
        text={"Add row"}
        icon={<AddIcon />}
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

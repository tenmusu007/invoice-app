import React, { useContext } from "react";
import { Control, useWatch } from "react-hook-form";
import { Description as DescriptionType } from "types/description";
import { useTotalContext } from "Context/TotalContext";
import { Grid, Typography } from "@mui/material";
import Button from "@components/Button";

type Props = {
  control: Control<DescriptionType>;
};

//onChange使ってリアルタイムで監視したい→useWatchでいけそう
//Registerのせいかも。。。
const TotalAmount = ({ control }: Props) => {
  const totalContext = useContext(useTotalContext);

  const formValues = useWatch({
    name: "description",
    control,
  });

  console.log('formValue', formValues)

  const subTotal = formValues?.reduce(
    (acc, { unitPrice, quantity }) =>
      acc + Math.floor((unitPrice || 0) * (quantity || 0)),
    0
  );
  console.log("Subtotal", subTotal);
  const calculateTotal = () => {
    const total = formValues?.reduce(
      (acc, { unitPrice, quantity, tax }) =>
        acc + Math.floor((unitPrice || 0) * (quantity || 0) * (1 + tax / 100)),
      0
    );
    console.log('total', total);
    totalContext?.setTotal(total);
    
  }
  totalContext?.setSubTotal(subTotal);

  return (
    <>
      <Grid
        container
        alignItems="flex-end"
        justifyContent="center"
        direction="column"
      >
        <Grid item xs={6}>
          <Typography>
            Sub Total: {totalContext?.subTotal ? totalContext.subTotal : 0}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>
            Total:{totalContext?.total ? totalContext.total : 0}
          </Typography>
        </Grid>
      </Grid>
      <Button text="Calculate" onClick={calculateTotal} />
    </>
  );
};

export default TotalAmount;

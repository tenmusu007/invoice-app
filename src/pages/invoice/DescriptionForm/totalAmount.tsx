import { Grid, TextField, Typography } from '@mui/material';
import React, { useContext, useEffect, useMemo } from 'react';
import { Control, useFormContext, useWatch } from 'react-hook-form';

import { useTotalContext } from 'Context/TotalContext';
import { Description as DescriptionType } from 'types/description';

type Props = {
  control: Control<DescriptionType>;
};

type Total = {
  total: number;
  subTotal: number;
};

const TotalAmount = ({ control }: Props) => {
  const { register } = useFormContext<Total>();
  const totalContext = useContext(useTotalContext);

  const formValues = useWatch({
    name: 'description',
    control,
  });

  const subTotal = useMemo(
    () =>
      formValues?.reduce(
        (acc, { unitPrice, quantity }) =>
          acc + Math.floor((unitPrice || 0) * (quantity || 0)),
        0
      ),
    [formValues]
  );

  const total = useMemo(
    () =>
      formValues?.reduce(
        (acc, { unitPrice, quantity, tax }) =>
          acc +
          Math.floor((unitPrice || 0) * (quantity || 0) * (1 + tax / 100)),
        0
      ),
    [formValues]
  );

  const amount = useMemo(
    () =>
      formValues?.map((value) => {
        const eachAmount = Math.floor(
          (value.unitPrice || 0) *
            (value.quantity || 0) *
            (1 + value.tax / 100 || 1)
        );
        return eachAmount;
      }),
    [formValues]
  );

  useEffect(() => {
    totalContext?.setTotal(total);
    totalContext?.setSubTotal(subTotal);
    totalContext?.setAmount(amount);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValues, subTotal, total, totalContext]);

  return (
    <>
      <Grid container direction="column" alignItems="flex-end">
        <Grid item xs={6}>
          <Typography>Sub Total</Typography>
          <TextField
            value={totalContext?.subTotal}
            InputProps={{ readOnly: true }}
            {...register('subTotal')}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <Typography>Total</Typography>
          <TextField
            value={totalContext?.total}
            InputProps={{ readOnly: true }}
            {...register('total')}
          ></TextField>
        </Grid>
      </Grid>
    </>
  );
};

export default TotalAmount;

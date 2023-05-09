import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Grid, IconButton, TextField, Typography } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Stack } from '@mui/system';
import React, { useContext } from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';

import TotalAmount from './totalAmount';

import Button from '@src/components/atoms/Button';



import { useTotalContext } from 'Context/TotalContext';
import { Description as DescriptionType } from 'types/description';

type Props = {
  disabled?: boolean;
}
const DescriptionForm = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { disabled } = props;
  const totalContext = useContext(useTotalContext);
  const { register, control } = useFormContext<DescriptionType>();

  // Append: Add new element to field
  const { fields, append, remove } = useFieldArray({
    name: 'description',
    control,
  });

  return (
    <>
      <h3>Description</h3>
      <Grid container>
        <Grid item xs={4}>
          <Typography>Item description</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>Qty</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>Unit Price</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>Tax</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>Amount</Typography>
        </Grid>
      </Grid>
      <Stack spacing={1}>
        {fields.map((field, index) => (
            <React.Fragment key={field.id}>
              <Grid
                container
                spacing={1}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={4}>
                  <TextField
                    {...register(`description.${index}.name`)}
                    size="small"
                    disabled={disabled}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    {...register(`description.${index}.quantity`)}
                    size="small"
                    disabled={disabled}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    {...register(`description.${index}.unitPrice`)}
                    size="small"
                    disabled={disabled}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    {...register(`description.${index}.tax`)}
                    size="small"
                    disabled={disabled}
                  />
                </Grid>
                <Grid item xs={1}>
                  <TextField
                    {...register(`description.${index}.amount`)}
                    size="small"
                    value={totalContext?.amount[index]}
                    disabled={disabled}
                  />
                </Grid>
                <Grid item xs={1}>
                  {!disabled && <IconButton aria-label="delete" onClick={() => remove(index)}>
                    <DeleteForeverIcon />
                  </IconButton>}
                </Grid>
              </Grid>
            </React.Fragment>
          ))}
      </Stack>
      <Button
        text={'Add row'}
        icon={<AddIcon />}
        onClick={() => {
          append({
            name: '',
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

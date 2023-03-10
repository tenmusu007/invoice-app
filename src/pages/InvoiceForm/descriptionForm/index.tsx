import React, { useContext } from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import { Description as DescriptionType } from 'types/description';
import { Grid, IconButton, TextField, Typography } from '@mui/material';
import Button from '@src/components/atoms/Button';
import TotalAmount from './totalAmount';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';
import { Stack } from '@mui/system';
import { useTotalContext } from 'Context/TotalContext';

const DescriptionForm = () => {
  const totalContext = useContext(useTotalContext);
  const { register, control } = useFormContext<DescriptionType>();

  //Append: Add new element to field
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
                  <TextField
                    {...register(`description.${index}.name`)}
                    size="small"
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    {...register(`description.${index}.quantity`)}
                    size="small"
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    {...register(`description.${index}.unitPrice`)}
                    size="small"
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    {...register(`description.${index}.tax`)}
                    size="small"
                  />
                </Grid>
                <Grid item xs={1}>
                  <TextField
                    {...register(`description.${index}.amount`)}
                    size="small"
                    value={totalContext?.amount[index]}
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

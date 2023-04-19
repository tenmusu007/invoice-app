import React from 'react';
import Input from '@src/components/atoms/Input';
import { useForm, useFormContext } from 'react-hook-form';
import { BillTo as BillToType } from 'types/billTo';
import { Box } from '@mui/material';
import { Stack } from '@mui/system';

const BillToForm = (props: any) => {
  const { defRegister, template} = props;

  const methods = useForm();
  const { register } = useFormContext();
  const regs = register;

  return (
    <Box sx={{ width: '45%' }}>
      <h3>Bill to</h3>
      <Stack spacing={0.5}>
        <Input
          name="companyName"
          register={regs}
          placeholder="Company/Client Name"
          type="text"
        />
        <Input
          name="addressLine1"
          register={regs}
          placeholder="Address Line 1"
          type="text"
        />
        <Input name="city" register={regs} placeholder="City" type="text" />
        <Input
          name="province"
          register={regs}
          placeholder="Province"
          type="text"
        />
        <Input
          name="country"
          register={regs}
          placeholder="Country"
          type="text"
        />
        <Input
          name="postalCode"
          register={regs}
          placeholder="Postal Code"
          type="text"
        />
      </Stack>
    </Box>
  );
};

export default BillToForm;

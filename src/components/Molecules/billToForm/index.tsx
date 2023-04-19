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
  const regs = defRegister ? defRegister : register;

  return (
    <Box sx={{ width: '45%' }}>
      <h3>Bill to</h3>
      <Stack spacing={0.5}>
        <Input
          name="billTo.companyName"
          register={regs}
          placeholder="Company/Client Name"
          type="text"
        />
        <Input
          name="billTo.addressLine1"
          register={regs}
          placeholder="Address Line 1"
          type="text"
        />
        <Input
          name="billTo.city"
          register={regs}
          placeholder="City"
          type="text"
        />
        <Input
          name="billTo.province"
          register={regs}
          placeholder="Province"
          type="text"
        />
        <Input
          name="billTo.country"
          register={regs}
          placeholder="Country"
          type="text"
        />
        <Input
          name="billTo.postalCode"
          register={regs}
          placeholder="Postal Code"
          type="text"
        />
      </Stack>
    </Box>
  );
};

export default BillToForm;

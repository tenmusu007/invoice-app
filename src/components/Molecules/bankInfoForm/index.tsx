import Input from '@src/components/atoms/Input';
import { Box, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const BankInfoForm = () => {
  const { register } = useFormContext();
  return (
    <Stack spacing={2}>
      <TextField
        {...register('condition')}
        label="NOTE/TERM & CONDITIONS"
        multiline
        maxRows={4}
      />
      <Stack direction="row" spacing={2}>
        <Box sx={{ width: '45%' }}>
          <Stack spacing={1}>
            <Input
              name="bankInfo.bankName"
              register={register}
              placeholder="Bank name"
              type="text"
            />
            <Input
              name="bankInfo.branchNumber"
              register={register}
              placeholder="Branch number"
              type="number"
            />
            <Input
              name="bankInfo.accountNumber"
              register={register}
              placeholder="Bank account number"
              type="number"
            />
          </Stack>
        </Box>
        <Box sx={{ width: '45%' }}>
          <Stack spacing={1}>
            <select {...register('bankInfo.accountType')}>
              <option key="Checking" value="Checking">
                Checking
              </option>
              <option key="Saving" value="Saving">
                Saving
              </option>
            </select>
            <Input
              name="bankInfo.accountName"
              register={register}
              placeholder="Holder name"
              type="text"
            />
            <Input
              name="bankInfo.transitNumber"
              register={register}
              placeholder="Transit number"
              type="number"
            />
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default BankInfoForm;

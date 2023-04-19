import Input from '@src/components/atoms/Input';
import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const BankInfoForm = (props: any) => {
  const { defRegister } = props;

  const { register } = useFormContext();
  const regs = defRegister ? defRegister : register;
  return (
    <Stack spacing={2}>
      <h3>Bank Info</h3>
      <Stack direction="row" spacing={2}>
        <Box sx={{ width: '45%' }}>
          <Stack spacing={1}>
            <Input
              name="bankName"
              register={regs}
              placeholder="Bank name"
              type="text"
            />
            <Input
              name="branchNumber"
              register={regs}
              placeholder="Branch number"
              type="number"
            />
            <Input
              name="accountNumber"
              register={regs}
              placeholder="Bank account number"
              type="number"
            />
          </Stack>
        </Box>
        <Box sx={{ width: '45%' }}>
          <Stack spacing={1}>
            <select {...regs('accountType')}>
              <option key="Checking" value="Checking">
                Checking
              </option>
              <option key="Saving" value="Saving">
                Saving
              </option>
            </select>
            <Input
              name="accountName"
              register={regs}
              placeholder="Holder name"
              type="text"
            />
            <Input
              name="transitNumber"
              register={regs}
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

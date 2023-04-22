import Input from '@src/components/atoms/Input';
import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { useFormContext } from 'react-hook-form';
type Props = {
  defRegister?: any;
  disabled?: boolean;
};
const BankInfoForm = (props: Props) => {
  const { defRegister ,disabled} = props;

  const { register } = useFormContext();
  const regs = defRegister ? defRegister : register;
  return (
    <Stack spacing={2}>
      <h3>Bank Info</h3>
      <Stack direction="row" spacing={2}>
        <Box sx={{ width: '45%' }}>
          <Stack spacing={1}>
            <Input
              name="bankInfo.bankName"
              register={regs}
              placeholder="Bank name"
              type="text"
              disabled={disabled}
            />
            <Input
              name="bankInfo.branchNumber"
              register={regs}
              placeholder="Branch number"
              type="number"
              disabled={disabled}
            />
            <Input
              name="bankInfo.accountNumber"
              register={regs}
              placeholder="Bank account number"
              type="number"
              disabled={disabled}
            />
          </Stack>
        </Box>
        <Box sx={{ width: '45%' }}>
          <Stack spacing={1}>
            <select {...regs('bankInfo.accountType')} disabled={disabled}>
              <option key="Checking" value="Checking">
                Checking
              </option>
              <option key="Saving" value="Saving">
                Saving
              </option>
            </select>
            <Input
              name="bankInfo.accountName"
              register={regs}
              placeholder="Holder name"
              type="text"
              disabled={disabled}
            />
            <Input
              name="bankInfo.transitNumber"
              register={regs}
              placeholder="Transit number"
              type="number"
              disabled={disabled}
            />
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default BankInfoForm;

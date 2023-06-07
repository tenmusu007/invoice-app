import { Box } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Stack } from '@mui/system';
import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import Input from '@src/components/atoms/Input';

import type { TemplateBankInfo } from 'types/bankInfo';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defRegister?: any;
  disabled?: boolean;
  templateBankInfo?: TemplateBankInfo;
};
const BankInfoForm = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { defRegister, disabled } = props;

  const { register, setValue } = useFormContext();
  const regs = defRegister || register;

  useEffect(() => {
    if (props.templateBankInfo) {
      Object.entries(props.templateBankInfo).forEach(([name, value]) => {
        setValue(`bankInfo.${name}`, value);
      });
    }
  }, [props.templateBankInfo, setValue]);

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
              value={props.templateBankInfo?.bankName || ''}
            />
            <Input
              name="bankInfo.branchNumber"
              register={regs}
              placeholder="Branch number"
              type="number"
              disabled={disabled}
              value={props.templateBankInfo?.branchNumber || ''}
            />
            <Input
              name="bankInfo.accountNumber"
              register={regs}
              placeholder="Bank account number"
              type="number"
              disabled={disabled}
              value={props.templateBankInfo?.accountNumber || ''}
            />
          </Stack>
        </Box>
        <Box sx={{ width: '45%' }}>
          <Stack spacing={1}>
            <select
              {...regs('bankInfo.accountType')}
              disabled={disabled}
              style={{ borderRadius: 4, padding: 8, cursor: 'pointer' }}
            >
              <option
                key="Checking"
                value={props.templateBankInfo?.accountType || 'Checking'}
              >
                Checking
              </option>
              <option
                key="Saving"
                value={props.templateBankInfo?.accountType || 'Saving'}
              >
                Saving
              </option>
            </select>
            <Input
              name="bankInfo.accountName"
              register={regs}
              placeholder="Holder name"
              type="text"
              disabled={disabled}
              value={props.templateBankInfo?.accountName || ''}
            />
            <Input
              name="bankInfo.transitNumber"
              register={regs}
              placeholder="Transit number"
              type="number"
              disabled={disabled}
              value={props.templateBankInfo?.transitNumber || ''}
            />
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default BankInfoForm;

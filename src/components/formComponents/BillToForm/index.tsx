import { Box } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Stack } from '@mui/system';
import React, { useEffect } from 'react';

import { useFormContext } from 'react-hook-form';

import Input from '@src/components/atoms/Input';
import type { TemplateBillTo } from 'types/billTo';

type Props = {
  defRegister?: any;
  disabled?: boolean;
  templateBIllToData?: TemplateBillTo;
};
const BillToForm = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { defRegister, disabled } = props;

  const { register, setValue } = useFormContext();
  const regs = defRegister || register;

  useEffect(() => {
    if (props.templateBIllToData) {
      Object.entries(props.templateBIllToData).forEach(([name, value]) => {
        setValue(`billTo.${name}`, value);
      });
    }
  }, [props.templateBIllToData, setValue]);

  return (
    <Box sx={{ width: '45%' }}>
      <h3>Bill to</h3>
      <Stack spacing={0.5}>
        <Input
          name="billTo.companyName"
          register={regs}
          placeholder="Company/Client Name"
          type="text"
          disabled={disabled}
          value={props.templateBIllToData?.companyName || ''}
        />
        <Input
          name="billTo.addressLine1"
          register={regs}
          placeholder="Address Line 1"
          type="text"
          disabled={disabled}
          value={props.templateBIllToData?.addressLine1 || ''}
        />
        <Input
          name="billTo.city"
          register={regs}
          placeholder="City"
          type="text"
          disabled={disabled}
          value={props.templateBIllToData?.city || ''}
        />
        <Input
          name="billTo.province"
          register={regs}
          placeholder="Province"
          type="text"
          disabled={disabled}
          value={props.templateBIllToData?.province || ''}
        />
        <Input
          name="billTo.country"
          register={regs}
          placeholder="Country"
          type="text"
          disabled={disabled}
          value={props.templateBIllToData?.country || ''}
        />
        <Input
          name="billTo.postalCode"
          register={regs}
          placeholder="Postal Code"
          type="text"
          disabled={disabled}
          value={props.templateBIllToData?.postalCode || ''}
        />
      </Stack>
    </Box>
  );
};

export default BillToForm;

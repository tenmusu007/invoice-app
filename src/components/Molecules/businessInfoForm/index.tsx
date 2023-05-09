import { Box } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Stack } from '@mui/system';
import React from 'react';

import { useFormContext } from 'react-hook-form';

import Input from '@src/components/atoms/Input';

import { BusinessInfo as BusinessInfoType } from 'types/businessInfo';

type Props = {
  defRegister?: any;
  disabled?: boolean;
};
const BusinessInfoForm = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { defRegister, disabled } = props;
  const { register } = useFormContext<BusinessInfoType>();
  const regs = defRegister || register;
  return (
    <Box sx={{ width: '45%' }}>
      <h3>Business Info</h3>
      <Stack spacing={0.5}>
        <Input
          name="businessInfo.businessName"
          type="text"
          placeholder="Your/Business Name"
          register={regs}
          disabled={disabled}
        />
        <Input
          name="businessInfo.addressLine1"
          type="text"
          placeholder="Address line 1"
          register={regs}
          disabled={disabled}
        />
        <Input
          name="businessInfo.city"
          type="text"
          placeholder="City"
          register={regs}
          disabled={disabled}
        />
        <Input
          name="businessInfo.province"
          type="text"
          placeholder="Province"
          register={regs}
          disabled={disabled}
        />
        <Input
          name="businessInfo.country"
          type="text"
          placeholder="Country"
          register={regs}
          disabled={disabled}
        />
        <Input
          name="businessInfo.postalCode"
          type="text"
          placeholder="Postal Code"
          register={regs}
          disabled={disabled}
        />
        <Input
          name="businessInfo.phoneNumber"
          type="text"
          placeholder="Phone number"
          register={regs}
          disabled={disabled}
        />
        <Input
          name="businessInfo.email"
          type="text"
          placeholder="Email"
          register={regs}
          disabled={disabled}
        />
      </Stack>
    </Box>
  );
};

export default BusinessInfoForm;

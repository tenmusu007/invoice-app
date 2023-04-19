import React from 'react';
import Input from '@src/components/atoms/Input';
import { useFormContext } from 'react-hook-form';

import { BusinessInfo as BusinessInfoType } from 'types/businessInfo';
import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import { BusinessInfo } from 'types/template';
type Props = {
  template?: BusinessInfo;
};
const BusinessInfoForm = (props: any) => {
  const { defRegister } = props;
  const { register } = useFormContext<BusinessInfoType>();
  const regs = defRegister ? defRegister : register;
  return (
    <Box sx={{ width: '45%' }}>
      <h3>Business Info</h3>
      <Stack spacing={0.5}>
        <Input
          name="businessName"
          type="text"
          placeholder="Your/Business Name"
          register={regs}
        />
        <Input
          name="addressLine1"
          type="text"
          placeholder="Address line 1"
          register={regs}
        />
        <Input name="city" type="text" placeholder="City" register={regs} />
        <Input
          name="province"
          type="text"
          placeholder="Province"
          register={regs}
        />
        <Input
          name="country"
          type="text"
          placeholder="Country"
          register={regs}
        />
        <Input
          name="postalCode"
          type="text"
          placeholder="Postal Code"
          register={regs}
        />
        <Input
          name="phoneNumber"
          type="text"
          placeholder="Phone number"
          register={regs}
        />
        <Input name="email" type="text" placeholder="Email" register={regs} />
      </Stack>
    </Box>
  );
};

export default BusinessInfoForm;

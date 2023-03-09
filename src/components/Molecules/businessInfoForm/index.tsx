import React from 'react';
import Input from '@components/atoms/Input';
import { useFormContext } from 'react-hook-form';

import { BusinessInfo as BusinessInfoType } from 'types/businessInfo';
import { Box } from '@mui/material';
import { Stack } from '@mui/system';

const BusinessInfoForm = () => {
  const { register } = useFormContext<BusinessInfoType>();
  return (
    <Box sx={{ width: '45%' }}>
      <h3>Business Info</h3>
      <Stack spacing={0.5}>
        <Input
          name="user.businessName"
          type="text"
          placeholder="Your/Business Name"
          register={register}
        />
        <Input
          name="user.addressLine1"
          type="text"
          placeholder="Address line 1"
          register={register}
        />
        <Input
          name="user.city"
          type="text"
          placeholder="City"
          register={register}
        />
        <Input
          name="user.province"
          type="text"
          placeholder="Province"
          register={register}
        />
        <Input
          name="user.country"
          type="text"
          placeholder="Country"
          register={register}
        />
        <Input
          name="user.postalCode"
          type="text"
          placeholder="Postal Code"
          register={register}
        />
        <Input
          name="user.phoneNumber"
          type="text"
          placeholder="Phone number"
          register={register}
        />
        <Input
          name="user.email"
          type="text"
          placeholder="Email"
          register={register}
        />
      </Stack>
    </Box>
  );
};

export default BusinessInfoForm;

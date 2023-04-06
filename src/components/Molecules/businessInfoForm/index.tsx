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

  const { template } = props;
console.log('here',template);

  const { register } = useFormContext<BusinessInfoType>();
  return (
    <Box sx={{ width: '45%' }}>
      <h3>Business Info</h3>
      <Stack spacing={0.5}>
        <Input
          name="businessName"
          type="text"
          placeholder="Your/Business Name"
          register={register}
          value={template?.name}
        />
        <Input
          name="addressLine1"
          type="text"
          placeholder="Address line 1"
          register={register}
          value={template?.address}
        />
        <Input
          name="city"
          type="text"
          placeholder="City"
          register={register}
          value={template?.city}
        />
        <Input
          name="province"
          type="text"
          placeholder="Province"
          register={register}
          value={template?.province}
        />
        <Input
          name="country"
          type="text"
          placeholder="Country"
          register={register}
          value={template?.country}
        />
        <Input
          name="postalCode"
          type="text"
          placeholder="Postal Code"
          register={register}
          value={template?.postal}
        />
        <Input
          name="phoneNumber"
          type="text"
          placeholder="Phone number"
          register={register}
          value={template?.phone}
        />
        <Input
          name="email"
          type="text"
          placeholder="Email"
          register={register}
          value={template?.email}
        />
      </Stack>
    </Box>
  );
};

export default BusinessInfoForm;

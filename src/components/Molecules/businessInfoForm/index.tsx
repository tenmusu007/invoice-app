import { Box } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Stack } from '@mui/system';
import React, { useEffect } from 'react';

import { useFormContext } from 'react-hook-form';

import Input from '@src/components/atoms/Input';

import type {
  BusinessInfo as BusinessInfoType,
  TemplateBusinessInfo,
} from 'types/businessInfo';

type Props = {
  defRegister?: any;
  disabled?: boolean;
  templateBusinessInfoData?: TemplateBusinessInfo;
};
const BusinessInfoForm = (props: Props) => {
  // concerns need to be separated (use Custom hook)
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { defRegister, disabled } = props;
  const { register, setValue } = useFormContext<BusinessInfoType>();
  const regs = defRegister || register;

  useEffect(() => {
    if (props.templateBusinessInfoData) {
      Object.entries(props.templateBusinessInfoData).forEach(
        ([name, value]) => {
          setValue(`businessInfo.${name}`, value);
        }
      );
    }
  }, [props.templateBusinessInfoData, setValue]);

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
          // value shows up when user select a template
          value={
            typeof props.templateBusinessInfoData === undefined
              ? ''
              : props.templateBusinessInfoData?.businessName
          }
        />
        <Input
          name="businessInfo.addressLine1"
          type="text"
          placeholder="Address line 1"
          register={regs}
          disabled={disabled}
          value={props.templateBusinessInfoData?.addressLine1 || ''}
        />
        <Input
          name="businessInfo.city"
          type="text"
          placeholder="City"
          register={regs}
          disabled={disabled}
          value={props.templateBusinessInfoData?.city || ''}
        />
        <Input
          name="businessInfo.province"
          type="text"
          placeholder="Province"
          register={regs}
          disabled={disabled}
          value={props.templateBusinessInfoData?.province || ''}
        />
        <Input
          name="businessInfo.country"
          type="text"
          placeholder="Country"
          register={regs}
          disabled={disabled}
          value={props.templateBusinessInfoData?.country || ''}
        />
        <Input
          name="businessInfo.postalCode"
          type="text"
          placeholder="Postal Code"
          register={regs}
          disabled={disabled}
          value={props.templateBusinessInfoData?.postalCode || ''}
        />
        <Input
          name="businessInfo.phoneNumber"
          type="text"
          placeholder="Phone number"
          register={regs}
          disabled={disabled}
          value={props.templateBusinessInfoData?.phoneNumber || ''}
        />
        <Input
          name="businessInfo.email"
          type="text"
          placeholder="Email"
          register={regs}
          disabled={disabled}
          value={props.templateBusinessInfoData?.email || ''}
        />
      </Stack>
    </Box>
  );
};

export default BusinessInfoForm;

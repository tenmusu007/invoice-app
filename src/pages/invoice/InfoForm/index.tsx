// eslint-disable-next-line import/no-extraneous-dependencies
import { Box, Stack } from '@mui/system';
import React from 'react';

import { useFormContext } from 'react-hook-form';

import Input from '@src/components/atoms/Input';
import InputLabel from 'src/components/atoms/label';

type Props = {
  disabled?: boolean;
  info?: any;
  defoReg?: any;
};
const InfoForm = (props: Props) => {
  const { register } = useFormContext();
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { disabled } = props;
  return (
    <Box sx={{ width: '90%', display: 'flex', justifyContent: 'flex-end' }}>
      <Stack spacing={1}>
        <InputLabel htmlFor="invoiceNumber" labelName="Invoice Number" />
        <Input
          name="info.invoiceNumber"
          type="number"
          placeholder="i.g. 1234"
          register={register}
          id="invoiceNumber"
          disabled={disabled}
        />
        <InputLabel htmlFor="issueDate" labelName="Issue Date" />
        <Input
          name="info.issuedDate"
          type="text"
          placeholder="MM/DD/YY"
          register={register}
          id="issueDate"
          disabled={disabled}
        />
        <InputLabel htmlFor="dueDate" labelName="Due date" />
        <Input
          name="info.dueDate"
          type="text"
          placeholder="MM/DD/YY"
          register={register}
          id="dueDate"
          disabled={disabled}
        />
      </Stack>
    </Box>
  );
};

export default InfoForm;

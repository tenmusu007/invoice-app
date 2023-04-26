import React from 'react';
import { FormProvider } from 'react-hook-form';
import Button from '@src/components/atoms/Button';
import { Box, Stack } from '@mui/material';
import BillToForm from '@src/components/molecules/BillToForm';
import BusinessInfoForm from '@src/components/molecules/BusinessInfoForm';
import DescriptionForm from 'src/pages/InvoiceForm/descriptionForm';
import InfoForm from 'src/pages/InvoiceForm/infoForm';
import BankInfoForm from '@src/components/molecules/BankInfoForm';

import TermsAndConditionForm from '@src/pages/InvoiceForm/termsConditionForm';
import { useInvoice } from './hooks/useInvoice';

const buttonStyle = {
  background: '#EEBBC3',
  color: '#232946',
  borderRadius: 2,
  fontWeight: 'bold',
} as const;

const CreateInvoiceForm = () => {
  const { methods, generateInvoice, handleSubmit } = useInvoice();

  return (
    <FormProvider {...methods}>
      <Stack
        component="form"
        onSubmit={handleSubmit(generateInvoice)}
        paddingTop={5}
      >
        <InfoForm />
        <Stack direction="row" spacing={2}>
          <BillToForm />
          <BusinessInfoForm />
        </Stack>
        <DescriptionForm />
        <BankInfoForm />
        <TermsAndConditionForm />
        <Box width={2}>
          <Button text={'Generate PDF'} type="submit" sx={buttonStyle} />
        </Box>
      </Stack>
    </FormProvider>
  );
};

export default CreateInvoiceForm;

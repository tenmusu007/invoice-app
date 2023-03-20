import React from 'react';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import Button from '@src/components/atoms/Button';
import { Box, Stack } from '@mui/material';
import BillToForm from '@src/components/Molecules/billToForm';
import BusinessInfoForm from '@src/components/Molecules/businessInfoForm';
import DescriptionForm from 'src/pages/InvoiceForm/descriptionForm';
import InfoForm from 'src/pages/InvoiceForm/infoForm';
import { Invoice as InvoiceType } from 'types/inputValue';
import BankInfoForm from '@src/components/Molecules/bankInfoForm';
import PageTitle from 'src/components/atoms/Title';
import BoxLayout from 'src/components/atoms/Box';
import TermsAndConditionForm from '@src/pages/InvoiceForm/termsConditionForm';

const buttonStyle = {
  background: '#EEBBC3',
  color: '#232946',
  borderRadius: 2,
  fontWeight: 'bold',
} as const;

const InvoiceForm = () => {
  const methods = useForm<InvoiceType>({
    defaultValues: {
      // name: "",
      description: [{ name: '', quantity: 0, unitPrice: 0, tax: 0, amount: 0 }],
    },
  });
  const { handleSubmit, reset } = methods;

  const onSubmit: SubmitHandler<InvoiceType> = async (data: InvoiceType) => {
    console.log(`Submit`, data);
    //Cannot get total and subTotal because reset method works.
    // await reset();
  };
  return (
    <FormProvider {...methods}>
      <Stack component="form" onSubmit={handleSubmit(onSubmit)} paddingTop={5}>
        <InfoForm />
        <Stack direction="row" spacing={2}>
          <BillToForm />
          <BusinessInfoForm />
        </Stack>
        <DescriptionForm />
        <BankInfoForm />
        <TermsAndConditionForm />
        <Box width={2}>
          <Button text={'Submit'} type="submit" sx={buttonStyle} />
        </Box>
      </Stack>
    </FormProvider>
  );
};

export default InvoiceForm;

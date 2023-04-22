import React from 'react';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import Button from '@src/components/atoms/Button';
import { Box, Stack } from '@mui/material';
import DescriptionForm from 'src/pages/invoiceForm/DescriptionForm';
import InfoForm from 'src/pages/invoiceForm/InfoForm';
import { Invoice as InvoiceType } from 'types/inputValue';
import BankInfoForm from '@src/components/molecules/BankInfoForm';
import BillToForm from '@src/components/molecules/BillToForm';
import BusinessInfoForm from '@src/components/molecules/BusinessInfoForm';
import TermsAndConditionForm from '@src/pages/invoiceForm/termsConditionForm';

const buttonStyle = {
  background: '#EEBBC3',
  color: '#232946',
  borderRadius: 2,
  fontWeight: 'bold',
} as const;

const InvoiceForm = () => {
  const router = useRouter();
  const methods = useForm<InvoiceType>({
    defaultValues: {
      description: [{ name: '', quantity: 0, unitPrice: 0, tax: 0, amount: 0 }],
    },
  });
  const { handleSubmit, reset } = methods;

  const onSubmit: SubmitHandler<InvoiceType> = async (
    data: InvoiceType,
    e: any
  ) => {
    e.preventDefault();
    console.log(`Submit`, data);
    //Cannot get total and subTotal because reset method works.

    // try {
    //   router.push({
    //     pathname: '/pdf-view'
    //   });
    //   setTimeout(() => {
    //     router.reload();
    //   }, 1000);
    // } catch (e: any) {
    //   console.log('Error', e.message);
    // }
  };

  return (
    <Box style={{ backgroundColor: '#B8C1EC', width:'100vw'}} >
      <FormProvider {...methods}>
        <Stack
          component="form"
          onSubmit={handleSubmit(onSubmit)}
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
            <Button text={'Submit'} type="submit" sx={buttonStyle} />
          </Box>
        </Stack>
      </FormProvider>
    </Box>
  );
};

export default InvoiceForm;

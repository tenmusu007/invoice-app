import React from 'react';
import {
  SubmitHandler,
  useForm,
  UseFormRegisterReturn,
  Validate,
  ValidationRule,
  FormProvider,
} from 'react-hook-form';
import Button from '@components/atoms/Button';
import { Box, Stack } from '@mui/material';
import BillToForm from '@components/molecules/BillToForm';
import BusinessInfoForm from '@components/molecules/BusinessInfoForm';
import DescriptionForm from 'src/pages/invoiceForm/DescriptionForm';
import InfoForm from 'src/pages/invoiceForm/InfoForm';
import { Invoice as InvoiceType } from 'types/inputValue';
import BankInfoForm from '@components/molecules/BankInfoForm';
import PageTitle from 'src/components/atoms/Title';
import BoxLayout from 'src/components/atoms/Box';

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
        <Box width={2}>
          <Button
            text={'Submit'}
            type="submit"
            sx={{
              background: '#EEBBC3',
              color: '#232946',
              borderRadius: 2,
              fontWeight: 'bold',
            }}
          />
        </Box>
      </Stack>
    </FormProvider>
  );
};

export default InvoiceForm;

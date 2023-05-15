import { Box, Grid, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { FormProvider } from 'react-hook-form';

import useInvoice from './hooks/useInvoice';

import BankInfoForm from '@src/components/Molecules/bankInfoForm';
import BusinessInfoForm from '@src/components/Molecules/businessInfoForm';
import Button from '@src/components/atoms/Button';
import SelectInput from '@src/components/atoms/Select';
import BillToForm from '@src/components/molecules/BillToForm';
import useAccountHooks from '@src/pages/Account/useAccountHooks';
import TermsAndConditionForm from '@src/pages/InvoiceForm/termsConditionForm';
import DescriptionForm from 'src/pages/InvoiceForm/descriptionForm';
import InfoForm from 'src/pages/InvoiceForm/infoForm';

const buttonStyle = {
  background: '#EEBBC3',
  color: '#232946',
  borderRadius: 2,
  fontWeight: 'bold',
} as const;

const CreateInvoiceForm = () => {
  const { methods, generateInvoice, handleSubmit } = useInvoice();
  const { state, action } = useAccountHooks();

  useEffect(() => {
    action.handleFetchUserData();
    action.handleFetchUserTemplate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormProvider {...methods}>
      <Grid item alignItems="center" display="flex" md={12}>
        {/* // TODO: Refactor this to separate component */}
        {state.templates.map((template, index) => (
          <>
            <Grid key={index} item textAlign={'center'} md={4}>
              <Grid item md={12}>
                <SelectInput
                  template={template.data}
                  name={template.name}
                  onChange={action.handleDisplayTemplate}
                />
              </Grid>
            </Grid>
          </>
        ))}
      </Grid>
      <Stack
        component="form"
        onSubmit={handleSubmit(generateInvoice)}
        paddingTop={5}
      >
        <InfoForm />
        <Stack direction="row" spacing={2}>
          <BillToForm templateBIllToData={state.billTooData} />
          <BusinessInfoForm templateBusinessInfoData={state.businessInfoData} />
        </Stack>
        <DescriptionForm />
        <BankInfoForm templateBankInfo={state.bankInfoData} />
        <TermsAndConditionForm />
        <Box width={2}>
          <Button text={'Generate PDF'} type="submit" sx={buttonStyle} />
        </Box>
      </Stack>
    </FormProvider>
  );
};

export default CreateInvoiceForm;

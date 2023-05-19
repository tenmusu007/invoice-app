import { Box, Grid, Stack } from '@mui/material';

import React, { useEffect } from 'react';
import { FormProvider } from 'react-hook-form';

import useInvoiceHooks from './useInvoiceHooks';

import Button from '@src/components/atoms/Button';
import SelectInput from '@src/components/atoms/Select';
import BankInfoForm from '@src/components/formComponents/BankInfoForm';
import BusinessInfoForm from '@src/components/formComponents/BusinessInfoForm';
import BillToForm from '@src/components/molecules/BillToForm';
import useAccountHooks from '@src/pages/account/useAccountHooks';
import DescriptionForm from '@src/pages/invoice/DescriptionForm';
import InfoForm from '@src/pages/invoice/InfoForm';
import TermsAndConditionForm from '@src/pages/invoice/termsConditionForm';

const buttonStyle = {
  background: '#EEBBC3',
  color: '#232946',
  borderRadius: 2,
  fontWeight: 'bold',
  width: 'fit-content',
} as const;

const CreateInvoiceForm = () => {
  const { methods, generateInvoice, handleSubmit } = useInvoiceHooks();
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
        gap={4}
      >
        <InfoForm />
        <Stack direction="row" spacing={2}>
          <BillToForm templateBIllToData={state.billTooData} />
          <BusinessInfoForm templateBusinessInfoData={state.businessInfoData} />
        </Stack>
        <DescriptionForm />
        <BankInfoForm templateBankInfo={state.bankInfoData} />
        <TermsAndConditionForm />
        <Box sx={{ width: '8rem' }}>
          <Button text={'Generate PDF'} type="submit" sx={buttonStyle} />
        </Box>
      </Stack>
    </FormProvider>
  );
};

export default CreateInvoiceForm;

import { Box, Grid, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { FormProvider } from 'react-hook-form';

import useInvoice from './hooks/useInvoice';

import Button from '@src/components/atoms/Button';
import SelectInput from '@src/components/atoms/Select';
import BankInfoForm from '@src/components/molecules/BankInfoForm';
import BillToForm from '@src/components/molecules/BillToForm';
import BusinessInfoForm from '@src/components/molecules/BusinessInfoForm';
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
  console.log('state', state.businessInfoData);
  
  useEffect(() => {
    action.handleFetchUserData();
    action.handleFetchUserTemplate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormProvider {...methods}>
      <Grid item alignItems="center" display="flex" md={12}>
        {/* // TODO: Refactor this to separate component */}
        {state.templates.map((template) => (
          <>
            <Grid item textAlign={'center'} md={4}>
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
          <BillToForm />
          <BusinessInfoForm templateBusinessInfoData={state.businessInfoData}  />
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

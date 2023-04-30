import { GetServerSideProps } from 'next/types';
import React from 'react';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import Button from '@src/components/atoms/Button';
import { Box, Stack } from '@mui/material';
import DescriptionForm from 'src/pages/InvoiceForm/descriptionForm';
import InfoForm from 'src/pages/InvoiceForm/infoForm';
import { Invoice as InvoiceType } from 'types/inputValue';
import BankInfoForm from '@src/components/molecules/BankInfoForm';
import BillToForm from '@src/components/molecules/BillToForm';
import BusinessInfoForm from '@src/components/molecules/BusinessInfoForm';
import TermsAndConditionForm from '@src/pages/InvoiceForm/termsConditionForm';
import { useInvoice } from './useInvoice';
import { ApiInstance } from 'helper/ApiInstance';
import { InvoiceData as InvoiceDataType } from 'types/invoiceData';
import { Items as ItemsType } from 'types/invoiceData';

type Props = {
  data: InvoiceDataType;
};

// Needs a type
const InvoiceCard = (props: Props) => {
  const { bankInfo, businessInfo, billTo, item } = props.data;

  // Should be removed
  const invoiceInfo = {
    invoiceNumber: props.data.invoiceNumber,
    issued: props.data.issued,
    due: props.data.due,
  };

  //Type should be defined
  const items: ItemsType = item.map(
    (item: {
      name: string;
      quantity: string;
      unitPrice: string;
      tax: string;
      amount: number;
    }) => {
      return {
        name: item.name,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        tax: item.tax,
        amount: item.amount,
      };
    }
  );
  const methods = useForm<InvoiceType | any>({
    defaultValues: {
      info: {
        invoiceNumber: props.data.invoiceNumber,
        issuedDate: props.data.issued,
        dueDate: props.data.due,
      },
      billTo: {
        companyName: billTo.companyName,
        addressLine1: billTo.address,
        city: billTo.city,
        state: billTo.state,
        postalCode: billTo.postal,
        country: billTo.country,
        province: billTo.province,
      },
      businessInfo: {
        businessName: businessInfo.name,
        addressLine1: businessInfo.address,
        city: businessInfo.city,
        province: businessInfo.province,
        country: businessInfo.country,
        postalCode: businessInfo.postal,
        phoneNumber: businessInfo.phone,
        email: businessInfo.email,
      },
      bankInfo: {
        bankName: bankInfo?.bankName,
        branchNumber: bankInfo?.branchNumber,
        accountNumber: bankInfo?.accountNumber,
        accountType: bankInfo?.accountType,
        accountName: bankInfo?.holderName,
        transitNumber: bankInfo?.transitNumber,
      },
      description: items,
    },
  });

  return (
    <FormProvider {...methods}>
      <Stack component="form" paddingTop={5}>
        <InfoForm disabled={true} />
        <Stack direction="row" spacing={2}>
          <BillToForm disabled={true} />
          <BusinessInfoForm disabled={true} />
        </Stack>
        <DescriptionForm disabled={true} />
        <BankInfoForm disabled={true} />
        <TermsAndConditionForm />
        <Box width={2}>
          <Button text={'Submit'} type="submit" sx={buttonStyle} />
        </Box>
      </Stack>
    </FormProvider>
  );
};

export default InvoiceCard;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query.invoice;

  const res = await ApiInstance({
    method: 'post',
    url: 'mylist/get_invoice_data',
    data: { invoiceId: query },
  });
  return {
    props: {
      data: res.data,
    },
  };
};
const buttonStyle = {
  background: '#EEBBC3',
  color: '#232946',
  borderRadius: 2,
  fontWeight: 'bold',
} as const;

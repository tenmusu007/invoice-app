import { useRouter } from 'next/router';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useTotalContext } from 'Context/TotalContext';
import  ApiInstance  from 'helper/ApiInstance';
import type { Invoice as InvoiceType } from 'types/inputValue';

const useInvoiceHooks = () => {
  const router = useRouter();
  const totalContext = useContext(useTotalContext);

  const methods = useForm<InvoiceType>({
    defaultValues: {
      description: [{ name: '', quantity: 0, unitPrice: 0, tax: 0, amount: 0 }],
    },
  });
  const { handleSubmit, reset } = methods;

  // Connect to Mongo
  // eslint-disable-next-line consistent-return
  const storeInvoice = async (data: InvoiceType) => {
    try {
      const res = await ApiInstance({
        method: 'post',
        url: 'invoice/create',
        data: { invoice: data },
        header: { 'Content-Type': 'application/json' },
      });
      if (res.status === 400) return null;
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  const generateInvoice: SubmitHandler<InvoiceType> = async (
    data: InvoiceType,
    e: any
    // eslint-disable-next-line consistent-return
  ) => {
    e.preventDefault();
    // Cannot get total and subTotal because reset method works.
    const { total } = totalContext;
    const { subTotal } = totalContext;
    const invoiceData = { ...data, total, subTotal };
    const res = await storeInvoice(invoiceData);
    if (!res) return console.log('failed to store invoice');
    const newInvoiceId: string = res.data;

    sessionStorage.setItem('invoice_id', newInvoiceId);
    try {
      router.push({
        pathname: '/pdf-view',
      });
      // eslint-disable-next-line @typescript-eslint/no-shadow
    } catch (e: any) {
      console.log('Error', e.message);
    }
  };

  return { methods, generateInvoice, handleSubmit, reset };
};

export default useInvoiceHooks;

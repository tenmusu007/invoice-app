import { ApiInstance } from 'helper/ApiInstance';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Invoice as InvoiceType } from 'types/inputValue';

export const useInvoice = () => {
  const router = useRouter();
  const methods = useForm<InvoiceType>({
    defaultValues: {
      description: [{ name: '', quantity: 0, unitPrice: 0, tax: 0, amount: 0 }],
    },
  });
  const { handleSubmit, reset } = methods;

  // Connect to Mongo
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
  ) => {
    e.preventDefault();
    //Cannot get total and subTotal because reset method works.
    const res = await storeInvoice(data);
    if (!res) return console.log('failed to store invoice');
    const newInvoiceId: string = res.data;
    console.log('new invoice id', newInvoiceId);
    // console.log('res', res);

    sessionStorage.setItem('invoice_id', newInvoiceId);
    try {
      router.push({
        pathname: '/pdf-view',
      });
    } catch (e: any) {
      console.log('Error', e.message);
    }
  };

  return { methods, generateInvoice, handleSubmit, reset };
};

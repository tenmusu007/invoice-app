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
    const res = await ApiInstance({
      method: 'post',
      url: 'invoice/create',
      data: { invoice: data },
    });
    if (res.status === 400) return console.log('fail');
  };

  const generateInvoice: SubmitHandler<InvoiceType> = async (
    data: InvoiceType,
    e: any
  ) => {
    e.preventDefault();
    console.log(`Submit`, data);
    //Cannot get total and subTotal because reset method works.

    try {
      //call Mongo fun
      storeInvoice(data);
      // router.push({
      //   pathname: '/pdf-view',
      // });
      // setTimeout(() => {
      //   router.reload();
      // }, 1000);
    } catch (e: any) {
      console.log('Error', e.message);
    }
  };

  return { methods, generateInvoice, handleSubmit, reset };
};

import { ApiInstance } from 'helper/ApiInstance';
import { useState } from 'react';
export const useInvoice = (props: string) => {
  const invoiceId = props;
  const [myInvoice, setmyInvoice] = useState<any[]>([]);
  const handleFetchInvoiceData = async () => {
    const res = await ApiInstance({
      method: 'get',
      url: 'mylist/get_invoice_data',
      data: { invoiceId: invoiceId },
    });
    if (res.status !== 200) return console.error('fail');

    setmyInvoice(res.data);
  };
  return {
    action: {
      handleFetchInvoiceData,
    },
    state: { myInvoice },
  };
};

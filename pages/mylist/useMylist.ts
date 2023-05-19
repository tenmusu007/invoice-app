import { useState } from 'react';

import { ApiInstance } from 'helper/ApiInstance';

const useInvoice = (props: string) => {
  const invoiceId = props;
  // Needs a type for myInvoice
  const [myInvoice, setmyInvoice] = useState<[]>([]);
  // eslint-disable-next-line consistent-return
  const handleFetchInvoiceData = async () => {
    const res = await ApiInstance({
      method: 'get',
      url: 'mylist/get_invoice_data',
      data: { invoiceId },
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

export default useInvoice;

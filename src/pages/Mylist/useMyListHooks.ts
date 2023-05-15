import { useState } from 'react';

import { ApiInstance } from 'helper/ApiInstance';

type myInvoice = {
  invoiceNumber: string;
  issued: string;
  billTo: any;
  invoiceId: number[];
};

const useMyListHooks = () => {
  // Needs a type for myInvoice
  const [myInvoice, setmyInvoice] = useState<myInvoice[]>([]);
  // eslint-disable-next-line consistent-return
  const handleFetchMyList = async () => {
    const res = await ApiInstance({
      method: 'get',
      url: 'mylist/get',
    });
    // eslint-disable-next-line no-console
    if (res.status !== 200) return console.error('fail');

    setmyInvoice(res.data);
  };
  return {
    action: {
      handleFetchMyList,
    },
    state: { myInvoice },
  };
};

export default useMyListHooks;

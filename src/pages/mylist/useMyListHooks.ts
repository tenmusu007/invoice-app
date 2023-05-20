import { useState } from 'react';

import { ApiInstance } from 'helper/ApiInstance';
import type { MyInvoice } from 'types/invoiceData';

const useMyListHooks = () => {
  // Needs a type for myInvoice
  const [myInvoice, setMyInvoice] = useState<MyInvoice[]>([]);
  // eslint-disable-next-line consistent-return
  const handleFetchMyList = async () => {
    const res = await ApiInstance({
      method: 'get',
      url: 'mylist/get',
    });
    // eslint-disable-next-line no-console
    if (res.status !== 200) return console.error('fail');

    setMyInvoice(res.data);
  };
  return {
    action: {
      handleFetchMyList,
    },
    state: { myInvoice },
  };
};

export default useMyListHooks;

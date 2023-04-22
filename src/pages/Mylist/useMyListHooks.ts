import { ApiInstance } from 'helper/ApiInstance';
import { useState } from 'react';
export const useMyListHooks = () => {
  const [myInvoice, setmyInvoice] = useState<any[]>([]);
  const hanleFetchMyList = async () => {
    const res = await ApiInstance({
      method: 'get',
      url: 'mylist/get',
    });
    setmyInvoice(res.data);
  };
  return {
    action: {
      hanleFetchMyList,
    },
    state: { myInvoice },
  };
};

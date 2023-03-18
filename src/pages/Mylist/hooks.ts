import { ApiInstance } from 'helper/ApiInstance';
import { useState } from 'react';
export const useMyListHook = () => {
  const [myInvoice, setmyInvoice] = useState<any[]>([]);
  const fetchMyList = async () => {
    const res = await ApiInstance({
      method: 'get',
      url: 'mylist/get',
    });
    setmyInvoice(res);
  };
  return {
    action: {
      fetchMyList,
    },
    state: { myInvoice },
  };
};

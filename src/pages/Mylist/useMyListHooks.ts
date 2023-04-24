import { ApiInstance } from 'helper/ApiInstance';
import { useState } from 'react';
export const useMyListHooks = () => {
  const [myInvoice, setmyInvoice] = useState<any[]>([]);
  const handleFetchMyList = async () => {
    const res = await ApiInstance({
      method: 'get',
      url: 'mylist/get',
    });
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


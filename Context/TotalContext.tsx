import React, { createContext, useState } from 'react';

import type { Children } from 'types/children';
import type { Total as TotalType } from 'types/total';

export const useTotalContext = createContext<TotalType>({} as TotalType);

const TotalContext = ({ children }: Children) => {
  const [total, setTotal] = useState<number>(0);
  const [subTotal, setSubTotal] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);
  const [amount, setAmount] = useState<number[]>([0]);

  return (
    <useTotalContext.Provider
      value={{
        total,
        setTotal,
        subTotal,
        setSubTotal,
        tax,
        setTax,
        amount,
        setAmount,
      }}
    >
      {children}
    </useTotalContext.Provider>
  );
};

export default TotalContext;

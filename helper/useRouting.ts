import { NextRouter } from 'next/router';
import { useEffect, useState } from 'react';

const invoiceRoute = '/invoice' as const;

const useRouting = (router: NextRouter) => {
  const [isInvoice, setIsInvoice] = useState<boolean>(false);

  useEffect(() => {
    if (router.pathname === invoiceRoute) {
      setIsInvoice(true);
    }
  }, [router, router.pathname]);

  return { isInvoice };
};

export default useRouting;
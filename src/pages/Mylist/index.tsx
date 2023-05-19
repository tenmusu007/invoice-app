import { Grid } from '@mui/material';
import { useEffect } from 'react';

import useMyListHooks from './useMyListHooks';

import InvoiceCard from '@src/pages/mylist/InvoiceCard';

const style = {
  marginTop: 12,
  marginBottom: 12,
} as const;

const MylistPage = () => {
  const { action, state } = useMyListHooks();
  useEffect(() => {
    action.handleFetchMyList();
  }, []);

  return (
    <>
      <Grid container spacing={4} textAlign={'center'} sx={style}>
        {state.myInvoice.map((item, index: number) => (
          <Grid item xs={3} key={index}>
            <InvoiceCard list={item} key={item.invoiceNumber} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default MylistPage;

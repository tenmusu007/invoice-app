/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from '@mui/material';
import { useEffect } from 'react';

import useMyListHooks from './useMyListHooks';

import PageTitle from '@src/components/atoms/Title';
import InvoiceCard from '@src/pages/mylist/InvoiceCard';

const style = {
  marginTop: 12,
  marginBottom: 12,
} as const;

const MyListPage = () => {
  const { action, state } = useMyListHooks();
  useEffect(() => {
    action.handleFetchMyList();
  }, []);

  return (
    <>
      {state.myInvoice.length !== 0 ? (
        <Grid container spacing={4} textAlign={'center'} sx={style}>
          {state.myInvoice.map((item, index: number) => (
            <Grid item xs={3} key={index}>
              <InvoiceCard list={item} key={item.invoiceNumber} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <PageTitle content={'No Invoice'} variant={'h1'} component={'symbol'} />
      )}
    </>
  );
};
export default MyListPage;

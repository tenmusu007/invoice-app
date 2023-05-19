import { Grid } from '@mui/material';
import { useEffect } from 'react';

import dummyData from '../../../mocks/mylist.json';

import useMyListHooks from './useMyListHooks';

import InvoiceCard from '@src/pages/mylist/InvoiceCard';

const MylistPage = () => {
  // const { list }: any = dummyData.data;
  const { action,state } = useMyListHooks();
  useEffect(() => {
    action.handleFetchMyList();
  }, []);

  return (
    <>
      <Grid container spacing={4} textAlign={'center'}>
        {state.myInvoice.map((item: any) => (
          <Grid item xs={4} key={item.invocieNumber}>
            <InvoiceCard list={item} key={item.invocieNumber} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default MylistPage;

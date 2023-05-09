import { Grid } from '@mui/material';
import { useEffect } from 'react';

import dummyData from '../../../mocks/mylist.json';

import useMyListHooks from './useMyListHooks';

import InvoiceCard from '@src/pages/mylist/InvoiceCard';

const MylistPage = () => {
  const { list }: any = dummyData.data;
  const { action } = useMyListHooks();
  useEffect(() => {
    action.handleFetchMyList();
  }, []);

  return (
    <>
      <Grid container spacing={4} textAlign={'center'}>
        {list.map((item: any) => (
            <Grid item xs={3} key={item.invocieNumber}>
              <InvoiceCard list={item} key={item.invocieNumber} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};
export default MylistPage;

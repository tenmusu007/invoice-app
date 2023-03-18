import InvoiceCard from 'src/pages/mylist/InvoiceCard';
import { Grid } from '@mui/material';
import dummyData from '../../../mocks/mylist.json';
import { ApiInstance } from 'helper/ApiInstance';
import { useEffect } from 'react';
import { useMyListHook } from './hooks';
const MylistPage = () => {
  const { list }: any = dummyData.data;
  const { action, state } = useMyListHook()
  useEffect(() => {
    action.fetchMyList();
  }, []);
  return (
    <>
      <Grid container spacing={4} textAlign={'center'}>
        {list.map((item: any) => {
          return (
            <Grid item xs={3} key={item.invocieNumber}>
              <InvoiceCard list={item} key={item.invocieNumber} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default MylistPage;
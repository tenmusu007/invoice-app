
import InvoiceCard from '@components/Molecules/InvoiceCard';
import { Grid } from '@mui/material';
import dummyData from '../../data/mylist.json';
const mylist = () => {
  const { list }: any = dummyData.data;
  return (
    <>
        <Grid container spacing={4} textAlign={'center'}>
          {list.map((item: any) => {
            return (
              <Grid item xs={3}  key={item.invocieNumber}>
                <InvoiceCard list={item} key={item.invocieNumber} />
              </Grid>
            );
          })}
        </Grid>
    </>
  );
};

export default mylist;

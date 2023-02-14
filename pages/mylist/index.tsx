import BoxLayout from '@components/atoms/Box';
import InvoiceCard from '@components/Molecules/InvoiceCard';
import { Grid } from '@mui/material';
import dummyData from '../../data/mylist.json';
const mylist = () => {
  const { list }: any = dummyData.data;
  return (
    <>
      <BoxLayout>
        <Grid container spacing={4}>
          {list.map((item: any) => {
            return (
              <Grid item xs={3} key={item.invocieNumber}>
                <InvoiceCard list={item} key={item.invocieNumber} />
              </Grid>
            );
          })}
        </Grid>
      </BoxLayout>
    </>
  );
};

export default mylist;

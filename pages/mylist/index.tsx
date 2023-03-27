// import InvoiceCard from 'src/pages/mylist/InvoiceCard';
import { Grid } from '@mui/material';
import dummyData from '../../mocks/mylist.json';
import { ApiInstance } from 'helper/ApiInstance';
import { useEffect } from 'react';
import MylistPage from '@src/pages/mylist';
import { GetServerSideProps } from 'next/types';
const Mylist = () => {
  useEffect(() => {
    UserCheck();
  }, []);
  const UserCheck = async () => {
    const res = await ApiInstance({
      method: 'get',
      url: 'mylist/get',
    });
    // console.log(res.data);
  };
  return (
    <>
      <MylistPage />
    </>
  );
};

export default Mylist;
export const getServerSideProps: GetServerSideProps = async (context) => {
  
  return {
    props: {
      data: context.locale,
    },
  };
};


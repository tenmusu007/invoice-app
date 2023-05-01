import { GetServerSideProps } from 'next/types';
import { useEffect } from 'react';

import MylistPage from '@src/pages/mylist';
import { ApiInstance } from 'helper/ApiInstance';

const Mylist = () => {
  const UserCheck = async () => {
    // eslint-disable-next-line unused-imports/no-unused-vars
    const res = await ApiInstance({
      method: 'get',
      url: 'mylist/get',
    });
  };
  useEffect(() => {
    UserCheck();
  }, []);
  return (
    <>
      <MylistPage />
    </>
  );
};

export default Mylist;
export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: {
    data: context.locale,
  },
});

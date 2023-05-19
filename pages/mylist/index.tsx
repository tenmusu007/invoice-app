import { GetServerSideProps } from 'next/types';

import MylistPage from '@src/pages/mylits';

const Mylist = () => (
  <>
    <MylistPage />
  </>
);

export default Mylist;
export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: {
    data: context.locale,
  },
});

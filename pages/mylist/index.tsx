import { GetServerSideProps } from 'next/types';

import MyListPage from '@src/pages/mylist';

const MyList = () => (
  <>
    <MyListPage />
  </>
);

export default MyList;
export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: {
    data: context.locale,
  },
});

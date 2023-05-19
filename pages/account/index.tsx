import { GetServerSideProps } from 'next/types';

// import AccountPage from '@src/pages/accounts';
import AccountPage from '../../src/pages/accounts';

type Props = {
  data: string;
};
const Account = (props: Props) => (
  <>
    <AccountPage locale={props.data} />
  </>
);

export default Account;

export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: {
    data: context.locale,
  },
});

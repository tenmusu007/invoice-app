import AccountPage from '@src/pages/account';
import { GetServerSideProps } from 'next/types';
type Props = {
  data : String
}
const Account = (props: Props) => {

  return (
    <>
      <AccountPage locale={props.data} />
    </>
  );
};

export default Account;


export const getServerSideProps: GetServerSideProps = async (context) => {

  return {
    props: {
      data: context.locale,
    },
  };
};

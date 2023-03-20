import HomePage from '@src/pages/home';
import axios from 'axios';
import { ApiInstance } from 'helper/ApiInstance';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const Home = (props: any) => {
  useEffect(() => {
    // UserCheck()
  }, [])
  const { data:session } = useSession();
  console.log(session);
  return (
    <>
      <HomePage />
    </>
  );
};

export default Home;

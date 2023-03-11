import BoxLayout from 'src/components/atoms/Box';
import Text from 'src/components/atoms/Text';
import Button from '@src/components/atoms/Button';
import { Container, Grid } from '@mui/material';
import { useLocale } from 'helper/useLocale';
import { getCsrfToken, getSession, useSession } from 'next-auth/react';
import Image from 'next/image';
import { GetServerSideProps } from 'next/types';
import Illustrationsec from 'public/Illustrationsec.png';
import Illustrationtop from 'public/Illustrationtop.jpg';
import HomeText from './text.json';
import { useEffect } from 'react';
import { ApiInstance } from 'helper/ApiInstance';
import { useHomeHook } from './hooks';
import { CtxOrReq } from 'next-auth/client/_utils';
import { getToken } from 'next-auth/jwt';
const Home = (props: any) => {

  const handleGetStarted = () => {};
  const { t } = useLocale(HomeText);
  const { data } = useSession();
  const test = getSession()
  // console.log('session',session);
  console.log('session', data);
  
  // const user = { data: session?.user };
  useEffect(() => {
    // action.UserCheck();
  }, []);
  // const { action, state } = useHomeHook(user);
  // console.log(state.userInfo);
  
  return (
    <>
      <BoxLayout>
        <Container maxWidth="md">
          <Grid container alignItems="center" display="flex" marginY={5}>
            <Grid item sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
              <Text text={t.headline} variant={'h4'} />
            </Grid>
            <Grid item sm={6} sx={{ textAlign: 'center' }}>
              <Image src={Illustrationtop} alt={'image'} width={300} />
            </Grid>
          </Grid>
          <Grid container alignItems="center" display="flex" marginY={5}>
            <Grid item sm={4} sx={{ textAlign: 'center' }}>
              <Button
                text={t.getstarted}
                onClick={handleGetStarted}
                sx={{ background: 'red' }}
              />
            </Grid>
            <Grid item sm={6} sx={{ textAlign: 'center' }}>
              <Image src={Illustrationsec} alt={'image'} width={300} />
            </Grid>
          </Grid>
        </Container>
      </BoxLayout>
    </>
  );
};

export default Home;
import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import { useSession, signIn, signOut } from 'next-auth/react';
import LinkTag from '@components/atoms/Link';
import GoogleButton from 'react-google-button';
import Text from '@components/atoms/Text';
import Image from 'next/image';
import Illustrationtop from 'public/Illustrationtop.jpg';
import { useLocale } from 'helper/useLocale';
import SignupText from './text.json';
import BoxLayout from '@components/atoms/Box';
const SignUp = () => {
  const { data: session } = useSession();
  const handleGoggle = () => {
    signIn('google', { callbackUrl: process.env.NEXT_PUBLIC_BASE_URL });
  };
  const { t } = useLocale(SignupText);

  return (
    <Grid container>
      <Grid
        container
        item
        lg={6}
        alignItems="center"
        display="flex"
        spacing={4}
      >
        <Grid item md={12}>
          <Text text={t.headline} variant={'h3'} />
        </Grid>
        <Grid item md={12}>
          <Text text={t.desc} variant={'h5'} />
        </Grid>
        <Grid item md={12}>
          <Image src={Illustrationtop} alt={'image'} width={300} />
        </Grid>
      </Grid>
      <Grid container item lg={6} alignItems="center" display="flex">
        <Grid item md={12}>
          <Text text={t.btn} variant={'h5'} style={{ textAlign: 'center' }} />
        </Grid>
        <Grid item md={12} sx={{ textAlign: 'center' }}>
          <Box display={'flex'} justifyContent={'center'}>
            <GoogleButton onClick={handleGoggle} />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignUp;

import React from 'react';
import { Box, Grid } from '@mui/material';
import Text from 'src/components/atoms/Text';
import Image from 'next/image';
import loginImage from 'public/login.png';
import GoogleButton from 'react-google-button';
import { useLocale } from 'helper/useLocale';
import LoginText from './text.json';
import { useLoginHooks } from './useLoginHooks';
const LoginPage = (props: any) => {
  const { action } = useLoginHooks();
  const { t } = useLocale(LoginText);
  return (
    <>
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
            <Image src={loginImage} alt={'image'} width={300} />
          </Grid>
        </Grid>
        <Grid container item lg={6} alignItems="center" display="flex">
          <Grid item md={12}>
            <Text text={t.btn} variant={'h5'} style={{ textAlign: 'center' }} />
          </Grid>
          <Grid item md={12} sx={{ textAlign: 'center' }}>
            <Box display={'flex'} justifyContent={'center'}>
              <GoogleButton onClick={action.handleGoggle} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginPage;

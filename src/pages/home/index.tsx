import { Grid } from '@mui/material';

import Image from 'next/image';
import { useSession } from 'next-auth/react';

import { useEffect } from 'react';

import HomeText from './text.json';

import Button from '@src/components/atoms/Button';
import useHomeHooks from '@src/pages/home/useHomeHooks';
import { useLocale } from 'helper/useLocale';
import Illustrationsec from 'public/Illustrationsec.png';
import Illustrationtop from 'public/Illustrationtop.jpg';

import Text from 'src/components/atoms/Text';

const HomePage = () => {
  const handleGetStarted = () => {};
  const { t } = useLocale(HomeText);
  const { data } = useSession();
  const user = { data };
  const { action } = useHomeHooks(user);

  useEffect(() => {
    action.UserCheck();
  }, [user.data]);

  return (
    <>
      <Grid container alignItems="center" display="flex" marginY={3}>
        <Grid item sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
          <Text text={t.headline} variant={'h4'} />
        </Grid>
        <Grid item sm={6} sx={{ textAlign: 'center' }}>
          <Image src={Illustrationtop} alt={'image'} width={300} />
        </Grid>
      </Grid>
      <Grid container alignItems="center" display="flex" marginY={3}>
        <Grid item sm={4} sx={{ textAlign: 'center' }}>
          <Button
            text={t.getstarted}
            onClick={handleGetStarted}
            sx={{
              background: '#EEBBC3',
              color: 'black',
              '&:hover': { backgroundColor: '#EEBBC3' },
            }}
          />
        </Grid>
        <Grid item sm={6} sx={{ textAlign: 'center' }}>
          <Image src={Illustrationsec} alt={'image'} width={300} />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;

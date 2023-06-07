import { Grid } from '@mui/material';

import Image from 'next/image';

import { useEffect } from 'react';

import Button from '@src/components/atoms/Button';
import useHomeHooks from '@src/pages/home/useHomeHooks';

import Illustrationsec from 'public/Illustrationsec.png';
import Illustrationtop from 'public/Illustrationtop.jpg';

import Text from 'src/components/atoms/Text';

const HomePage = () => {
  const { action, t } = useHomeHooks();

  useEffect(() => {
    action.UserCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            text={t.getStarted}
            onClick={action.handleGetStarted}
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

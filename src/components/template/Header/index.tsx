import { Button, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';

import { useRouting } from 'helper/useRouting';
import LinkTag from 'src/components/atoms/Link';
import Text from 'src/components/atoms/Text';

const Header = () => {
  const { data: session } = useSession();

  const nextAuthLogout = () => {
    signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/login` });
  };

  const router = useRouter();
  const { isInvoice } = useRouting(router);

  const navigateToHome = async (e: any) => {
    e.preventDefault();

    router.push('/home');

    setTimeout(() => {
      router.reload();
    }, 1000);
  };

  return (
    <>
      {isInvoice ? (
        <LinkTag path={'/home'}>
          <button onClick={navigateToHome}>Home</button>
        </LinkTag>
      ) : (
        <Grid
          container
          sx={{ width: '100%', marginX: '0', paddingY: 2 }}
          position={'fixed'}
          alignItems={'center'}
          top={0}
          style={{ backgroundColor: '#FFF5F5', zIndex: 2 }}
        >
          <Grid
            item
            sm={3}
            sx={{ justifyContent: 'space-around' }}
            textAlign={'center'}
          >
            <LinkTag path={'/home'}>
              <Text variant={'h5'} text={'Invoicer'} />
            </LinkTag>
          </Grid>
          <Grid container item sm={5} sx={{ justifyContent: 'space-around' }}>
            {session && (
              <>
                <Grid item sm={3} style={{ textAlign: 'center' }}>
                  <LinkTag path={'/invoice'}>
                    <Button>create</Button>
                  </LinkTag>
                </Grid>
                <Grid item sm={3}>
                  <LinkTag path={'/mylist'}>
                    <Text
                      variant={'h6'}
                      text={'MyList'}
                      style={{ textAlign: 'center' }}
                    />
                  </LinkTag>
                </Grid>
                <Grid item sm={3}>
                  <LinkTag path={'/account'}>
                    <Text
                      variant={'h6'}
                      text={'Account'}
                      style={{ textAlign: 'center' }}
                    />
                  </LinkTag>
                </Grid>
              </>
            )}
          </Grid>
          <Grid container item sm={4} alignItems={'center'}>
            {session?.user?.name ? (
              <>
                <Grid item sm={6}>
                  <Text
                    label={'body1'}
                    text={session?.user?.name}
                    style={{ textAlign: 'center' }}
                  />
                </Grid>
                <Grid item sm={6} style={{ textAlign: 'center' }}>
                  <Button onClick={nextAuthLogout}>Logout</Button>
                </Grid>
              </>
            ) : (
              <>
                <Grid item sm={4}>
                  <LinkTag path={'/login'}>
                    <Button> login</Button>
                  </LinkTag>
                </Grid>
                <Grid item sm={4}>
                  <LinkTag path={'/signup'}>
                    <Button> sign up</Button>
                  </LinkTag>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Header;

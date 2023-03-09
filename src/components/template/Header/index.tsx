import { Button, Grid } from '@mui/material';
import { useContext } from 'react';
import { signOut, useSession } from 'next-auth/react';
import Text from 'src/components/atoms/Text';
import { title } from 'process';
import LinkTag from 'src/components/atoms/Link';
const Header = () => {
  const { data: session } = useSession();

  const nextAuthLogout = () => {
    signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/login` });
  };
  return (
    <>
      <Grid
        container
        sx={{ width: '100%', marginX: '0', marginY: 2 }}
        position={'fixed'}
        alignItems={'center'}
        top={0}
      >
        <Grid
          item
          sm={3}
          sx={{ justifyContent: 'space-around' }}
          textAlign={'center'}
        >
          <Text variant={'h5'} text={'title'} />
        </Grid>
        <Grid container item sm={5} sx={{ justifyContent: 'space-around' }}>
          {session && (
            <>
              <Grid item sm={3} style={{ textAlign: 'center' }}>
                <LinkTag path={'/invoice'}>
                  <Button> create</Button>
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
                  <Button> signup</Button>
                </LinkTag>
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Header;

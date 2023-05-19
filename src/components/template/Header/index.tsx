import { Button as MuiButton, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';

import Button from '@src/components/atoms/Button';
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

  const navigateToHome = async () => {
    try {
      router.push('/');

      setTimeout(() => {
        router.reload();
      }, 1000);
    } catch (e) {
      console.log(e);
    }
  };

  const buttonStyle = {
    background: '#EEBBC3',
    color: '#232946',
    borderRadius: 2,
    padding: 2,
    fontWeight: 'bold',
    width: 'fit-content',
    cursor: 'pointer',
    '&:hover, &:focus': {
      background: '#ecdde0',
    },
  } as const;

  return (
    <>
      {isInvoice ? (
        <LinkTag path={'/'}>
          <Button text="Home" onClick={navigateToHome} sx={buttonStyle} />
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
            <LinkTag path={'/'}>
              <Text variant={'h5'} text={'Invoicer'} />
            </LinkTag>
          </Grid>
          <Grid container item sm={5} sx={{ justifyContent: 'space-around' }}>
            {session && (
              <>
                <Grid item sm={3} style={{ textAlign: 'center' }}>
                  <LinkTag path={'/invoice'}>
                    <MuiButton>create</MuiButton>
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
                  <LinkTag path={'/accounts'}>
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
                  <MuiButton onClick={nextAuthLogout}>Logout</MuiButton>
                </Grid>
              </>
            ) : (
              <>
                <Grid item sm={4}>
                  <LinkTag path={'/login'}>
                    <MuiButton> login</MuiButton>
                  </LinkTag>
                </Grid>
                <Grid item sm={4}>
                  <LinkTag path={'/signup'}>
                    <MuiButton> sign up</MuiButton>
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

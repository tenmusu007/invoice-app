import type { AppProps } from 'next/app';

import { useRouter } from 'next/router';
import { SessionProvider } from 'next-auth/react';

import NProgress from 'nprogress';
import { useEffect, useState } from 'react';

import Layout from '@src/components/template/Layout';
import ModalContext from 'Context/ModalContext';
import TotalContext from 'Context/TotalContext';

import 'nprogress/nprogress.css';
import { Box } from '@mui/material';
import '../styles/styles.css';

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);
  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
      setPageLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);
  return (
    <SessionProvider session={pageProps.session}>
      <Box>
        <Layout>
          <ModalContext>
            <TotalContext>
              {!pageLoading && <Component {...pageProps} />}
            </TotalContext>
          </ModalContext>
        </Layout>
      </Box>
    </SessionProvider>
  );
}

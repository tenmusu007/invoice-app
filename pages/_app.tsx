import type { AppProps } from 'next/app';
import TotalContext from 'Context/TotalContext';
import ModalContext from 'Context/ModalContext';
import { SessionProvider } from 'next-auth/react';
import Layout from '@src/components/template/Layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Loader from './loader';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
export default function App({
  Component,
  pageProps: { session, ...pageProps },
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
      <Layout>
        <ModalContext>
          <TotalContext>
            {!pageLoading &&  <Component {...pageProps} />}
          </TotalContext>
        </ModalContext>
      </Layout>
    </SessionProvider>
  );
}

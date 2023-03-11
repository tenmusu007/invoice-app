import type { AppProps } from 'next/app';
import TotalContext from 'Context/TotalContext';
import { SessionProvider } from 'next-auth/react';
import Layout from '@src/components/template/Layout';
export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <TotalContext>
          <Component {...pageProps} />
        </TotalContext>
      </Layout>
    </SessionProvider>
  );
}

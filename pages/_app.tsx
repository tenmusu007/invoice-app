import type { AppProps } from 'next/app';
import TotalContext from 'Context/TotalContext';
import ModalContext from 'Context/ModalContext';
import { SessionProvider } from 'next-auth/react';
import Layout from 'src/components/template/Layout';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <ModalContext>
          <TotalContext>
            <Component {...pageProps} />
          </TotalContext>
        </ModalContext>
      </Layout>
    </SessionProvider>
  );
}

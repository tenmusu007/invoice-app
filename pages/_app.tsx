import type { AppProps } from "next/app";
import AuthContext from "../Context/AuthContext";
import TotalContext from "Context/TotalContext";
import { SessionProvider } from "next-auth/react";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <AuthContext>
        <TotalContext>
          <Component {...pageProps} />
        </TotalContext>
      </AuthContext>
    </SessionProvider>
  );
}

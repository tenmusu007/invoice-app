import type { AppProps } from "next/app";
import AuthContext from "../Context/AuthContext";
import { SessionProvider } from "next-auth/react";
export default function App({ Component, pageProps }: AppProps) {
	return (
		<SessionProvider session={pageProps.session}>
			<AuthContext>
				<Component {...pageProps} />
			</AuthContext>
		</SessionProvider>
	);
}

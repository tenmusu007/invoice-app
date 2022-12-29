
import type { AppProps } from 'next/app'
import AuthContext from '../Context/AuthContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContext>
      <Component {...pageProps} />
    </AuthContext>
  )
}

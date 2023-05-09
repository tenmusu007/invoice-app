import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const clientId: string | undefined =
  process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID;
const clientSecret: string | undefined =
  process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_SECRET;
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: clientId as string,
      clientSecret: clientSecret as string,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, account }: any) {
      // Persist the OAuth access_token to the token right after sign in
      if (account) {
        // eslint-disable-next-line no-param-reassign
        token.accessToken = account.access_token;
      }
      return token;
    },

    async session({ session, token }: any) {
      // Send properties to the client, like an access_token from a provider.
      // eslint-disable-next-line no-param-reassign
      session.accessToken = token.accessToken;
      return session;
    },
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
  },
  session: {
    maxAge: 60 * 60 * 24 * 30,
  },
};
export default NextAuth(authOptions);

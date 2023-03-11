import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
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
  // session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, account }:any) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }:any) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
};
export default NextAuth(authOptions);

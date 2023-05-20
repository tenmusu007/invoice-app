import NextAuth, { Account, Session, NextAuthOptions } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import GoogleProvider from 'next-auth/providers/google';

const clientId: string | undefined =
  process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID;
const clientSecret: string | undefined =
  process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_SECRET;

type UpdatedSession = Session & { accessToken: string | undefined };

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: clientId as string,
      clientSecret: clientSecret as string,
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  callbacks: {
    async jwt({
      token,
      account,
    }: {
      token: JWT;
      account?: Account | null | undefined;
    }) {
      // Persist the OAuth access_token to the token right after sign in

      const updatedToken = { ...token } as JWT;
      if (account) {
        updatedToken.accessToken = account.access_token;
      }
      return updatedToken;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      // Send properties to the client, like an access_token from a provider.

      const updatedSession: UpdatedSession = {
        ...session,
        accessToken: token.accessToken,
      };

      return updatedSession;
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

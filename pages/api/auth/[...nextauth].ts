import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
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
};
export default NextAuth(authOptions);

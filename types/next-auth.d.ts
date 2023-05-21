import { DefaultSession, Session } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      accessToken?: string;
    } & DefaultSession['user'];
  }
}
declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string;
  }
}

type UpdatedSession = Session & { accessToken: string | undefined };
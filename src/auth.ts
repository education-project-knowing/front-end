import NextAuth from 'next-auth';
import Naver from 'next-auth/providers/naver';

const authOptions = {
  providers: [
    Naver({
      clientId: process.env.AUTH_NAVER_ID!,
      clientSecret: process.env.AUTH_NAVER_SECRET!,
    }),
  ],
  pages: {
    signIn: '/',
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60, // 세션 만료 시간(sec)
  },
  callbacks: {
    jwt: async ({ token, user, trigger, session }) => {
      console.log('token', token, 'user', user, 'trigger', trigger, 'session', session);
      if (user) {
        token = { ...token, ...user };
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.token = token.token as string;
      session.role = token.role;
      return session;
    },
  },
};
export default authOptions;

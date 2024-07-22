import NextAuth from 'next-auth';
import Naver from 'next-auth/providers/naver';

export default NextAuth({
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
    signIn: async ({ account, profile, user }) => {
      console.log('call 엄준식');
      console.log(account, profile, user);
      if (account?.provider === 'google') {
      }
      return true;
    },
    jwt: async ({ token, user, trigger, session }) => {
      console.log('call 엄준식2');
      console.log('token', token, 'user', user, 'trigger', trigger, 'session', session);
      if (user) {
        token = { ...token, ...user };
      }
      return token;
    },
    session: async ({ session, token }) => {
      return session;
    },
  },
});

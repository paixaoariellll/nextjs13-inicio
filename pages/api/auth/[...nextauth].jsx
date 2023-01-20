import bcryptjs from 'bcryptjs';
import CredentialsProvider from 'next-auth/providers/credentials';
import db from '@/utils/db';
import NextAuth from 'next-auth';
import Users from '@/models/Users';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwtToken({ token, user }) {
      const newToken = { ...token };
      if (user?._id) newToken._id = user._id;
      if (user?.isAdmin) newToken.isAdmin = user.isAdmin;
      return newToken;
    },
    async jwtSession({ session, token }) {
      const newSession = { ...session };
      if (token?._id) newSession._id = token._id;
      if (token?.isAdmin) newSession.isAdmin = token.isAdmin;
      return newSession;
    },
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        await db.connect();
        const user = await Users.findOne({
          email: credentials.email,
        });
        await db.disconnect();
        if (user && bcryptjs.compareSync(credentials.password, user.password)) {
          return {
            name: user.name,
            email: user.email,
          };
        }
        throw new Error('E-mail ou senha inválido!');
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
});
